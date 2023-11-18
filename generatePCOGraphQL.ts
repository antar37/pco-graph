const { buildSchema } = require("graphql");
const fs = require("fs");
const vertices = require("./vertices.json");

function getGraphQLType(value: string) {
  if (value === "string") {
    return "String";
  } else if (value === "number") {
    return "Int";
  } else if (value === "boolean") {
    return "Boolean";
  } else if (value === "primary_key") {
    return "ID!";
  } else {
    return "String"; // Fallback to String if the type is unknown
  }
}

const generateQueries = (jsonApiSpec: { resources: any[] }) => {
  // const queries = {};
  const queries = jsonApiSpec.resources
    .map(
      (resource: {
        relationships: { can_include: { data: any[] } };
        attributes: { path: any; name: any };
      }) => {
        const includesArray = resource.relationships.can_include.data.map(
          (e: { attributes: { name: any } }) => e.attributes.name
        );

        const orderString =
          'const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`';
        const urlString =
          "`" +
          `${resource.attributes.path}` +
          "?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,";
        const urlByIdString =
          "`" +
          `${resource.attributes.path}` +
          "/${id}?per_page=${limit}&include=${includes}`,";
        const query = `
          ${
            resource.attributes.name
          }: async (parent, params, context, info) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            ${orderString};
            const includes = getRelatedFieldNames(info, ${JSON.stringify(
              includesArray
            )}).join(",");
  
            let response = await getJSONfromUrl(${urlString}
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e) => {
              const relatedData = zipRelatedData(response, e, ${JSON.stringify(
                includesArray
              )});
              return {
                ...e,
                attributes: {
                  ...e.attributes,
                  id: e.id,
                },
                relationships: relatedData,
              };
            });
  
            return result || [];
            },
            ${
              resource.attributes.name
            }ById: async (parent, params, context, info) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ${JSON.stringify(
                includesArray
              )}).join(",");
          let response = await getJSONfromUrl(
                ${urlByIdString}
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e) => {
                const relatedData = zipRelatedData(response, e, ${JSON.stringify(
                  includesArray
                )});
                return {
                  ...e,
                  attributes: {
                    ...e.attributes,
                    id: e.id,
                  },
                  relationships: relatedData,
                };
              });
      
              return result || null;
            },
      `;
        return query;
      }
    )
    .join("\n");

  return queries;
};

const sanitizeTypes = (type: any) => {
  switch (type) {
    case "Optionable":
      return "Boolean";
    case "PrimaryCampus":
      return "Boolean";
    case "Gender":
      return "String";
    case "Assignee":
      return "ID";
    case "Step":
      return "Int";
    case "FormFieldCondition":
      return "String";
    case "Options":
      return "String";
    case "Fieldable":
      return "Boolean";
    case "FormCategory":
      return "String";
    case "Customizable":
      return "Boolean";

    default:
      return type;
  }
};
const generateTypes = (entity: {
  attributes: { name: any };
  relationships: {
    attributes: { data: any };
    outbound_edges: { data: any };
    can_query: { data: any };
  };
}) => {
  const name = entity.attributes.name;
  const attributes = entity.relationships.attributes.data;
  const relationships = entity.relationships.outbound_edges.data;
  const queryParams = entity.relationships.can_query.data;
  const relationshipsString = relationships.length
    ? `
    type ${name}Relationships {
    ${relationships
      .filter(({ attributes }: { attributes: any }) => attributes.name)
      .map(
        ({
          relationships,
          attributes,
        }: {
          relationships: any;
          attributes: any;
        }) =>
          `${attributes.name}: [${relationships.head.data.attributes.name}]
          `
      )
      .join("")}
      }
    `
    : "";

  const whereString = queryParams.length
    ? `
    input ${name}WhereAttributes {
      ${queryParams
        .map(
          ({ attributes }: { attributes: any }) => `${
            attributes.name
          }: ${getGraphQLType(attributes.type)}
          `
        )
        .join("")}
    }`
    : "";
  return ` 
  
    enum ${name}OrderByEnum {
      ${attributes
        .map(
          ({ attributes }: { attributes: any }) => `${attributes.name}
      `
        )
        .join("")}
    }
  
    input ${name}OrderInput {
      """ this will append a (-) to the field name if desc """
      sort: sortEnum = asc
      field: ${name}OrderByEnum 
    }
    
    ${whereString}
    ${relationshipsString}
    type ${name}Attributes {
      ${attributes
        .map(
          ({ attributes }: { attributes: any }) =>
            `
      """ example: ${attributes.type_annotation.example} """
            ${attributes.name}: ${getGraphQLType(
              attributes.type_annotation.name
            )}
            `
        )
        .join("")}
    }
  
    type ${name} {
      id: ID!
      attributes: ${name}Attributes
      ${relationships.length ? `relationships: ${name}Relationships` : ""}
    }
    `;
};

function generateGraphQLSchema(jsonApiSpec: { resources: any }) {
  const types = jsonApiSpec.resources
    .map(
      (entity: any) => `
        ${generateTypes(entity)}`
    )
    .join("");

  const whereString = (entity: {
    relationships: { can_query: { data: string | any[] } };
    attributes: { name: any };
  }) =>
    entity.relationships.can_query.data.length
      ? `where: ${entity.attributes.name}WhereAttributes,`
      : "";
  const queries = jsonApiSpec.resources
    .map(
      (entity: {
        relationships: { can_query: { data: string | any[] } };
        attributes: { name: any };
      }) => `
      ${entity.attributes.name}ById(id: ID!): ${entity.attributes.name}
      ${entity.attributes.name}(
          limit: Int, 
          ${whereString(entity)}
          order: ${entity.attributes.name}OrderInput
          ): [${entity.attributes.name}!]
      `
    )
    .join("");

  const schemaDefinition = `
      ${types}
      type Query {
        ${queries}
      }
  
      enum sortEnum {
        asc
        desc
      }
      
    `;
  console.log(schemaDefinition);

  const schema = buildSchema(schemaDefinition);

  const generatedResolvers = generateQueries(jsonApiSpec);
  return { schema, resolvers: generatedResolvers, schemaDefinition };
}

const getJSONfromUrl = async (
  url: RequestInfo | URL,
  init?: RequestInit | undefined
) => {
  const response = await fetch(url, init);
  const json = await response.json();
  return json.data;
};

const { schema, resolvers, schemaDefinition } = generateGraphQLSchema({
  resources: vertices,
});

fs.writeFileSync("schema.graphql", schemaDefinition);

fs.writeFileSync(
  "resolvers.js",
  `export const resolvers = { Query:  {${resolvers}} }`
);
