// eslint-disable
// @ts-nocheck

const { buildSchema } = require("graphql");
const fs = require("fs");
const vertices = require("./vertices.json");
const axios = require("axios");

const entityTypes = [
  "calendar",
  "check-ins",
  "giving",
  "groups",
  "people",
  "publishing",
  "services",
];

interface VertexDetail {
  name: string;
  // Add other properties here based on the response data structure
}

async function fetchVerticesForEntity(entity: string): Promise<VertexDetail[]> {
  try {
    const baseURL = `https://api.planningcenteronline.com/${entity}/v2/documentation`;

    // Step 1: Get the latest version
    const versionResponse = await axios.get(baseURL);
    const latestVersion: string =
      versionResponse.data.data.relationships.versions.data[0].id;
    console.log(`Latest Version for ${entity}: ${latestVersion}`);

    // Step 2: Get all vertices for the latest version
    const verticesURL = `${baseURL}/${latestVersion}`;
    const verticesResponse = await axios.get(verticesURL);

    // Extracting vertices
    const vertices = verticesResponse.data.data.relationships.vertices.data;
    const verticesArray: string[] = vertices.map((vertex: any) => vertex.id);
    console.log(`Vertices for ${entity}:`, verticesArray);

    // Step 3: Get details for each vertex
    const vertexDetailsPromises = verticesArray.map(
      async (vertexId: string) => {
        const vertexDetailURL = `${verticesURL}/vertices/${vertexId}`;
        const vertexDetailResponse = await axios.get(vertexDetailURL);
        return { name: entity, ...vertexDetailResponse.data } as VertexDetail;
      }
    );

    const vertexDetails = await Promise.all(vertexDetailsPromises);
    console.log(`Vertex Details for ${entity}:`, vertexDetails);

    return vertexDetails;
  } catch (error) {
    console.error(`Error fetching vertices for ${entity}:`, error);
    return [];
  }
}

async function fetchAllVertices() {
  const allVertices = [];

  for (const entity of entityTypes) {
    const vertexDetails = await fetchVerticesForEntity(entity);
    allVertices.push(vertexDetails);
  }

  console.log("All Vertices:", allVertices);
  fs.writeFileSync(
    "vertices.json",
    JSON.stringify(allVertices.flat(), null, 2)
  );
  return allVertices;
}

const capitalize = function (string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1).replace(/-/g, "");
};

function getGraphQLType(value: string) {
  if (value === "string") {
    return "String";
  } else if (value === "float") {
    return "Int";
  } else if (value === "number" || value === "integer") {
    return "Int";
  } else if (value === "boolean") {
    return "Boolean";
  } else if (value === "primary_key") {
    return "ID!";
  } else {
    return "String"; // Fallback to String if the type is unknown
  }
}

type Resource = {
  name: string;
  data: {
    attributes: { name: any };
    relationships: {
      attributes: { data: any };
      outbound_edges: { data: any };
      can_query: { data: any };
    };
  };
};

const generateQueries = (jsonApiSpec: { resources: Resource[] }) => {
  // const queries = {};
  const data = jsonApiSpec.resources;

  const topLevelQueries = data.filter((e) =>
    e.data.relationships.inbound_edges.data.find(
      ({ relationships }) => relationships.tail.data.id === "organization"
    )
  );
  const childLevelQueries = data.filter(
    (e) =>
      !e.data.relationships.inbound_edges.data.find(
        ({ relationships }) => relationships.tail.data.id === "organization"
      )
  );

  let children = {};
  childLevelQueries
    .filter(
      (e) =>
        !e.data.relationships.inbound_edges.data.find(
          ({ relationships }) => relationships.tail.data.id === "organization"
        )
    )
    .map((e) => {
      e.data.relationships.inbound_edges.data.map((inbound) => {
        let path = inbound.attributes.path;

        let url = path.split("/").slice(0, -2).join("/");
        let entity = path.split("/").slice(-1).join("");

        const entityName = `${capitalize(e.name)}${capitalize(
          inbound.relationships.tail.data.attributes.name
        )}`;
        const entityChildName = `${capitalize(e.name)}${capitalize(
          inbound.attributes.name
        )}`;

        children[entityName] = {
          ...children[entityName],
          [entityChildName]: {
            ...e,
            url,
            entity,
          },
        };
      });
    });

  const parentQueryResolvers = topLevelQueries
    .map((resource: Resource) => {
      const includesArray = resource.data.relationships.can_include.data.map(
        (e: { attributes: { name: any } }) => e.attributes.name
      );
      const data = resource.data;
      const name = `${capitalize(resource.name)}${data.attributes.name}`;
      const query = `
          ${name}: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("${
                data.attributes.path
              }", params, info, ${JSON.stringify(includesArray)}, context);

            },
            ${name}ById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("${
                data.attributes.path
              }", params, info, ${JSON.stringify(includesArray)}, context);
            },
      `;
      return query;
    })
    .join("\n");

  const childQueryResolvers = Object.entries(children).map(
    ([parentKey, parentValue]) => {
      const childQueries = Object.entries(parentValue).map(([key, value]) => {
        const includesArray = value.data.relationships.can_include.data.map(
          (e: { attributes: { name: any } }) => e.attributes.name
        );

        const orderString =
          'const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`';

        return `

        ${key}: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/${value.entity}"
          return fetchData(url, params, info, [], context);
        }
          `;
      });

      const query = `
      ${parentKey}: {
       relationships :(parent: any) => parent
      },
      ${parentKey}Relationships: {
        ${childQueries}
      }
    `;
      return query;
    }
  );

  return { parentQueryResolvers, childQueryResolvers };
};

const getChildQuery = (children: any) => {};
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

const generateTypes = ({ name, data }: Resource) => {
  const typeName = `${capitalize(name)}${data.attributes.name}`.replace(
    /-/g,
    ""
  );
  const attributes = data.relationships.attributes.data;
  const relationships = data.relationships.outbound_edges.data;
  const queryParams = data.relationships.can_query.data;

  const relationshipsString = relationships.length
    ? `
      type ${typeName}Relationships {
        ${relationships
          .map(
            ({ relationships, attributes }) =>
              `${capitalize(name)}${capitalize(attributes.name)}: [${capitalize(
                name
              )}${capitalize(relationships.head.data.attributes.name)}]`
          )
          .join("\n")}
      }
    `
    : "";

  const whereString = queryParams.length
    ? `
      input ${typeName}WhereAttributes {
        ${queryParams
          .map(
            ({ attributes }) =>
              `${attributes.name}: ${getGraphQLType(attributes.type)}`
          )
          .join("\n")}
      }
    `
    : "";

  return `
    enum ${typeName}OrderByEnum {
      ${attributes.map(({ attributes }) => attributes.name).join("\n")}
    }

    input ${typeName}OrderInput {
      sort: sortEnum = asc
      field: ${typeName}OrderByEnum
    }

    ${whereString}
    ${relationshipsString}

    type ${typeName}Attributes {
      ${attributes
        .map(
          ({ attributes }) => `
        """ example: ${attributes.type_annotation.example} """
        ${attributes.name}: ${getGraphQLType(attributes.type_annotation.name)}
      `
        )
        .join("\n")}
    }

    type ${typeName} {
      id: ID!
      attributes: ${typeName}Attributes
      ${relationships.length ? `relationships: ${typeName}Relationships` : ""}
    }
  `;
};

const getEntityName = (entity: Resource) =>
  `${capitalize(entity.name)}${entity.data.attributes.name}`.replace(/-/g, "");

const generateGraphQLSchema = async (jsonApiSpec: {
  resources: Resource[];
}) => {
  try {
    await fetchAllVertices();

    const resources = jsonApiSpec.resources;

    const topLevelQueries = resources.filter((e) =>
      e.data.relationships?.inbound_edges?.data?.find(
        ({ relationships }) => relationships.tail.data.id === "organization"
      )
    );
    if (!topLevelQueries) return;

    const types = resources.map((entity) => generateTypes(entity)).join("\n");

    const whereString = (entity: Resource) =>
      entity.data.relationships.can_query.data.length
        ? `where: ${getEntityName(entity)}WhereAttributes,`
        : "";
    const queries = topLevelQueries
      .map(
        (entity) => `
      ${getEntityName(entity)}ById(id: ID!): ${getEntityName(entity)}
      ${getEntityName(entity)}(
          limit: Int,
          ${whereString(entity)}
          order: ${getEntityName(entity)}OrderInput
      ): [${getEntityName(entity)}!]
    `
      )
      .join("\n");

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
    const schema = buildSchema(schemaDefinition);
    const generatedResolvers = generateQueries(jsonApiSpec);
    fs.writeFileSync("src/app/graphql/schema.graphql", schemaDefinition);

    return { schema, resolvers: generatedResolvers, schemaDefinition };
  } catch (error) {
    const errorLine = schemaDefinition.split("\n")[error.locations[0].line - 1];
    fs.writeFileSync("schemaerror.graphql", schemaDefinition);
    console.error("Error building schema:", errorLine);
    throw error;
  }
};

const generateFiles = async () => {
  const { schema, resolvers, schemaDefinition } = await generateGraphQLSchema({
    resources: vertices,
  });

  if (!schema || !resolvers || !schemaDefinition)
    throw new Error(
      `Error generating schema ${JSON.stringify({
        schema,
        resolvers,
        schemaDefinition,
      })}`
    );

  fs.writeFileSync(
    "src/app/graphql/resolvers.ts",
    'const getRelatedIds=(type:string|number,item:{relationships:{[x:string]:{data:any}}}):string[]|null=>{const data=item?.relationships?.[type]?.data;if(!data)return null;return data?.length?data?.map((f:{id:any})=>f.id):[data.id]};const getJSONfromUrl=async(url:RequestInfo|URL,options?:RequestInit):Promise<any>=>{const response=await fetch(url,options).then(res=>res.json()).catch(err=>{console.log(err)});if(response.errors)throw new Error(JSON.stringify({detail:response.errors[0].detail,url},null,4));return response};type RelatedData={included:{id:string}[]};const getRelatedData=(data:RelatedData,Ids:string[]=[]):{id:string}[]|null=>(Ids&&data.included.filter(({id})=>Ids?.includes(id)))||null;const getRelatedFieldNames=(info:{fieldNodes:{selectionSet:{selections:any[]}}[]},includesArray:string[]):string[]=>{const attributesArray=info?.fieldNodes[0].selectionSet?.selections?.find((e:any)=>e.name.value==="relationships");if(!attributesArray)return[];const selectedNodes=attributesArray.selectionSet?.selections?.filter((f:any)=>includesArray.includes(f.name.value));return selectedNodes.map((e:{name:{value:any}})=>e.name.value)};const zipRelatedData=(data:RelatedData,item:any,includesArray:(string|number)[]):{[key:string]:any}=>{const relatedData:{[key:string]:any}={};includesArray.map(type=>{const ids=getRelatedIds(type,item);relatedData[type]=getRelatedData(data,ids||[])||[]});return relatedData};const formatWhere=(where:{[s:string]:unknown}|ArrayLike<unknown>):string=>where?Object.entries(where).map(([key,value])=>`&where[${key}]=${value}`).join(""):"";const fetchData=async(endpoint:string,params:{limit?:number;where?:any;order?:any;id?:string},info:any,includesArray:string[],context:any):Promise<any>=>{const{limit=10,where,order,id}=params;const whereArg=where?formatWhere(where):"&where[status]=active";const orderArg=order?`&order=${order.sort==="desc"? "-":""}${order.field||""}`:"";const includes=getRelatedFieldNames(info,includesArray).join(",");const url=id?`${endpoint}/${id}?per_page=${limit}&include=${includes}${whereArg}${orderArg}`:`${endpoint}?per_page=${limit}&include=${includes}${whereArg}${orderArg}`;const response=await getJSONfromUrl(url,{method:"GET",headers:{Authorization:"Basic "+btoa(process.env.PCO_APP_ID+":"+process.env.PCO_SECRET),},});return response.data.map((e:{attributes:any;id:any})=>{const relatedData=zipRelatedData(response,e,includesArray);return{...e,attributes:{...e.attributes,id:e.id,},relationships:relatedData,};})||[];};' +
      `

  export const resolvers = { Query:  {${resolvers.parentQueryResolvers}}, ${resolvers.childQueryResolvers}  }`
  );
};
generateFiles();

