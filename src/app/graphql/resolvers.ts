import { GraphQLTypeResolver } from "graphql";

const getRelatedIds = (type, item) => item?.relationships?.[type]?.data?.length ? item?.relationships?.[type]?.data?.map((f) => f.id) : [item?.relationships?.[type]?.data];
const getRelatedData = (data = [], Ids = []) => data.included.filter((f) => Ids.includes(f.id)) || null
const getRelatedFieldNames = (info, name) => info?.fieldNodes[0].selectionSet?.selections?.map((f) => f.name.value === name)

const person_includes = ["addresses",
"field_data",
"emails",
"households",
"marital_status",
"inactive_reason",
"name_prefix",
"name_suffix",
"person_apps",
"organization",
"phone_numbers",
"platform_notifications",
"primary_campus",
"school"]


// find out which elements came in through GraphQL, and create an array of includes options
const getIncludes = (info, includesArray = []) => includesArray.map(name => 
  ( {
     name, 
     data: getRelatedFieldNames(info, name) 
   })
   ).filter(f => f.data)
   .map(f => f.name).join(',')

   const zipRelatedData = (data, item, includesArray ) => {
    const relatedData = {}
    includesArray.map((type) => {
      console.log(
        item?.relationships?.[type]?.data
        );
      const ids = getRelatedIds(type, item)
      relatedData[type] = getRelatedData(data, ids)
    })
    return relatedData
   }
const resolvers = {
    Query: {
      people(parent, params, context, info) {
        const limit = params.limit || 10

        const includes = getIncludes(info, person_includes)
        const getUsers = async () => {
          let response = await fetch(`https://api.planningcenteronline.com/people/v2/people?per_page=${limit}&include=${includes}`, {method:'GET', 
          headers: {'Authorization': 'Basic ' + btoa(process.env.PCO_APP_ID+":"+process.env.PCO_SECRET)}});
          let data = await response.json();
          let result = data.data.map((e) => {
            const relatedData = zipRelatedData(data, e, person_includes)
            console.log(relatedData)
            return {
              ...e,
              name: `${e.attributes.first_name} ${e.attributes.last_name}`,
             ...relatedData,
            };
          });
         
          return result;
        }
        return getUsers();
      },
    },
  }

  export default resolvers