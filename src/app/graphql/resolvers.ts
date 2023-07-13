import {
  FieldNode,
  FragmentSpreadNode,
  GraphQLFieldResolver,
  GraphQLResolveInfo,
  GraphQLTypeResolver,
  SelectionNode,
  TypedQueryDocumentNode,
} from "graphql";

const getRelatedIds = (type, item) => {
  const data = item?.relationships?.[type]?.data;
  return data?.length ? data?.map((f) => f.id) : [data.id];
};

const getRelatedData = (data = [], Ids = []) =>
  data.included.filter((f) => Ids.includes(f.id)) || null;

const getRelatedFieldNames = (
  info: GraphQLResolveInfo,
  includesArray: String[]
) => {
  const attributesArray = info?.fieldNodes[0].selectionSet?.selections?.find(
    (e) => {
      const node = e as FieldNode;
      return node.name.value === "attributes";
    }
  ) as unknown as FieldNode;

  const selectedNodes = attributesArray.selectionSet?.selections?.filter(
    (f) => {
      const node = f as FieldNode;
      return includesArray.includes(node.name.value);
    }
  ) as unknown as FieldNode[];

  return selectedNodes.map((e) => e.name.value);
};

const person_includes = [
  "addresses",
  "emails",
  "field_data",
  "households",
  "inactive_reason",
  "marital_status",
  "name_prefix",
  "name_suffix",
  "organization",
  "person_apps",
  "phone_numbers",
  "platform_notifications",
  "primary_campus",
  "school",
  "social_profiles",
];

// find out which elements came in through GraphQL, and create an array of includes options

const zipRelatedData = (data, item, includesArray: string[]) => {
  const relatedData:  Record<string, string> = {};
  //map over the includes options types.
  includesArray.map((type) => {
    const ids = getRelatedIds(type, item);
    relatedData[type] = getRelatedData(data, ids);
  });
  return relatedData;
};

const formatWhere = (where: Record<string, string>) =>
  where
    ? Object.entries(where)
        .map(([key, value]) => `&where[${key}]=${value}`)
        .join("")
    : "";

const resolvers = {
  Query: {
    people(parent, params, context, info) {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      // const includes = getIncludes(info, person_includes);
      const includes = getRelatedFieldNames(info, person_includes).join(",");

      console.log(
        `https://api.planningcenteronline.com/people/v2/people?per_page=${limit}&include=${includes}${whereArg}${orderArg}`
      );
      const getUsers = async () => {
        let response = await fetch(
          `https://api.planningcenteronline.com/people/v2/people?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
          {
            method: "GET",
            headers: {
              Authorization:
                "Basic " +
                btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
            },
          }
        );
        let data = await response.json();
        let result = data.data.map((e) => {
          const relatedData = zipRelatedData(data, e, person_includes);
          return {
            ...e,
            ...relatedData,
          };
        });

        return result;
      };
      return getUsers();
    },
  },
};

export default resolvers;
