// eslint-disable
// @ts-nocheck

const { buildSchema } = require("graphql");
const fs = require("fs");
const vertices = require("./allEntities.json");

const capitalize = function (string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

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

        console.log(inbound.relationships.tail);
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
  const typeName = `${capitalize(name)}${data.attributes.name}`;
  const attributes = data.relationships.attributes.data;
  const relationships = data.relationships.outbound_edges.data;
  const queryParams = data.relationships.can_query.data;
  const relationshipsString = relationships.length
    ? `
    type ${typeName}Relationships {
    ${relationships
      .filter(({ attributes }) => attributes.name)
      .map(
        ({ relationships, attributes }) =>
          `${capitalize(name)}${capitalize(attributes.name)}: [${capitalize(
            name
          )}${capitalize(relationships.head.data.attributes.name)}]
          `
      )
      .join("")}
      }
    `
    : "";

  const whereString = queryParams.length
    ? `
    input ${typeName}WhereAttributes {
      ${queryParams
        .map(
          ({ attributes }) => `${attributes.name}: ${getGraphQLType(
            attributes.type
          )}
          `
        )
        .join("")}
    }`
    : "";
  return `

    enum ${typeName}OrderByEnum {
      ${attributes
        .map(
          ({ attributes }) => `${attributes.name}
      `
        )
        .join("")}
    }

    input ${typeName}OrderInput {
      """ this will append a (-) to the field name if desc """
      sort: sortEnum = asc
      field: ${typeName}OrderByEnum
    }

    ${whereString}
    ${relationshipsString}
    type ${typeName}Attributes {
      ${attributes
        .map(
          ({ attributes }) =>
            `
      """ example: ${attributes.type_annotation.example} """
      ${attributes.name}: ${getGraphQLType(attributes.type_annotation.name)}
            `
        )
        .join("")}
    }

    type ${typeName} {
      id: ID!
      attributes: ${typeName}Attributes
      ${relationships.length ? `relationships: ${typeName}Relationships` : ""}
    }
    `;
};

const getEntityName = (entity: Resource) =>
  `${capitalize(entity.name)}${entity.data.attributes.name}`;

function generateGraphQLSchema(jsonApiSpec: { resources: Resource[] }) {
  const resources = jsonApiSpec.resources;
  const topLevelQueries = resources.filter((e) =>
    e.data.relationships.inbound_edges.data.find(
      ({ relationships }) => relationships.tail.data.id === "organization"
    )
  );

  const types = resources
    .map(
      (entity) => `
        ${generateTypes(entity)}`
    )
    .join("");

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

  const schema = buildSchema(schemaDefinition);
  const generatedResolvers = generateQueries(jsonApiSpec);
  return { schema, resolvers: generatedResolvers, schemaDefinition };
}

const getJSONfromUrl = async (
  url: RequestInfo | URL,
  init: RequestInit | undefined
) => {
  const response = await fetch(url, init);
  const json = await response.json();
  return json.data;
};

const { schema, resolvers, schemaDefinition } = generateGraphQLSchema({
  resources: vertices,
});

fs.writeFileSync("src/app/graphql/schema.graphql", schemaDefinition);

fs.writeFileSync(
  "src/app/graphql/resolvers.ts",
  'const getRelatedIds=(type:string|number,item:{relationships:{[x:string]:{data:any}}}):string[]|null=>{const data=item?.relationships?.[type]?.data;if(!data)return null;return data?.length?data?.map((f:{id:any})=>f.id):[data.id]};const getJSONfromUrl=async(url:RequestInfo|URL,options?:RequestInit):Promise<any>=>{const response=await fetch(url,options).then(res=>res.json()).catch(err=>{console.log(err)});if(response.errors)throw new Error(JSON.stringify({detail:response.errors[0].detail,url},null,4));return response};type RelatedData={included:{id:string}[]};const getRelatedData=(data:RelatedData,Ids:string[]=[]):{id:string}[]|null=>(Ids&&data.included.filter(({id})=>Ids?.includes(id)))||null;const getRelatedFieldNames=(info:{fieldNodes:{selectionSet:{selections:any[]}}[]},includesArray:string[]):string[]=>{const attributesArray=info?.fieldNodes[0].selectionSet?.selections?.find((e:any)=>e.name.value==="relationships");if(!attributesArray)return[];const selectedNodes=attributesArray.selectionSet?.selections?.filter((f:any)=>includesArray.includes(f.name.value));return selectedNodes.map((e:{name:{value:any}})=>e.name.value)};const zipRelatedData=(data:RelatedData,item:any,includesArray:(string|number)[]):{[key:string]:any}=>{const relatedData:{[key:string]:any}={};includesArray.map(type=>{const ids=getRelatedIds(type,item);relatedData[type]=getRelatedData(data,ids||[])||[]});return relatedData};const formatWhere=(where:{[s:string]:unknown}|ArrayLike<unknown>):string=>where?Object.entries(where).map(([key,value])=>`&where[${key}]=${value}`).join(""):"";const fetchData=async(endpoint:string,params:{limit?:number;where?:any;order?:any;id?:string},info:any,includesArray:string[],context:any):Promise<any>=>{const{limit=10,where,order,id}=params;const whereArg=where?formatWhere(where):"&where[status]=active";const orderArg=order?`&order=${order.sort==="desc"? "-":""}${order.field||""}`:"";const includes=getRelatedFieldNames(info,includesArray).join(",");const url=id?`${endpoint}/${id}?per_page=${limit}&include=${includes}${whereArg}${orderArg}`:`${endpoint}?per_page=${limit}&include=${includes}${whereArg}${orderArg}`;const response=await getJSONfromUrl(url,{method:"GET",headers:{Authorization:"Basic "+btoa(process.env.PCO_APP_ID+":"+process.env.PCO_SECRET),},});return response.data.map((e:{attributes:any;id:any})=>{const relatedData=zipRelatedData(response,e,includesArray);return{...e,attributes:{...e.attributes,id:e.id,},relationships:relatedData,};})||[];};' +
    `

  export const resolvers = { Query:  {${resolvers.parentQueryResolvers}}, ${resolvers.childQueryResolvers}  }`
);

