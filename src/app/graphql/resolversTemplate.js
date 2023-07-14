const PCO_BASE_URL = "https://api.planningcenteronline.com";

const getRelatedIds = (type, item) => {
  const data = item?.relationships?.[type]?.data;
  if (!data) return null;
  return data?.length ? data?.map((f) => f.id) : [data.id];
};

const getJSONfromUrl = async (url, options) => {
  const response = await fetch(url, options)
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
  if (response.errors)
    throw new Error(
      JSON.stringify(
        {
          detail: response.errors[0].detail,
          url,
        },
        null,
        4
      )
    );

  return response;
};

const getRelatedData = (data = [], Ids = []) =>
  (Ids && data.included.filter((f) => Ids?.includes(f.id))) || null;

const getRelatedFieldNames = (info, includesArray) => {
  const attributesArray = info?.fieldNodes[0].selectionSet?.selections?.find(
    (e) => {
      const node = e;
      return node.name.value === "relationships";
    }
  );

  if (!attributesArray) return [];
  const selectedNodes = attributesArray.selectionSet?.selections?.filter(
    (f) => {
      const node = f;
      return includesArray.includes(node.name.value);
    }
  );

  return selectedNodes.map((e) => e.name.value);
};

const zipRelatedData = (data, item, includesArray) => {
  const relatedData = {};
  //map over the includes options types.
  includesArray.map((type) => {
    const ids = getRelatedIds(type, item);
    relatedData[type] = getRelatedData(data, ids) || [];
  });
  return relatedData;
};

const formatWhere = (where) =>
  where
    ? Object.entries(where)
        .map(([key, value]) => `&where[${key}]=${value}`)
        .join("")
    : "";

export const resolvers = {
  Query: {
    Address: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, []).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/addresses?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, []);
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
    AddressById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, []).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/addresses/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, []);
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

    AnniversaryCouples: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, []).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/anniversary_couples?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, []);
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
    AnniversaryCouplesById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, []).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/anniversary_couples/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, []);
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

    App: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, []).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/apps?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, []);
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
    AppById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, []).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/apps/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, []);
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

    BackgroundCheck: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, ["person"]).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/background_checks?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, ["person"]);
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
    BackgroundCheckById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, ["person"]).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/background_checks/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, ["person"]);
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

    BirthdayPeople: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, []).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/birthday_people?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, []);
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
    BirthdayPeopleById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, []).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/birthday_people/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, []);
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

    Campus: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, [
        "lists",
        "service_times",
      ]).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/campuses?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, [
          "lists",
          "service_times",
        ]);
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
    CampusById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, [
        "lists",
        "service_times",
      ]).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/campuses/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, [
          "lists",
          "service_times",
        ]);
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

    Carrier: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, []).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/carriers?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, []);
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
    CarrierById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, []).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/carriers/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, []);
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

    Condition: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, ["created_by"]).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/lists/1/rules/1/conditions?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, ["created_by"]);
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
    ConditionById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, ["created_by"]).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/lists/1/rules/1/conditions/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, ["created_by"]);
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

    ConnectedPerson: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, []).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/people/1/connected_people?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, []);
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
    ConnectedPersonById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, []).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/people/1/connected_people/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, []);
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

    Email: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, []).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/emails?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, []);
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
    EmailById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, []).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/emails/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, []);
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

    FieldDatum: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, [
        "field_definition",
        "field_option",
        "tab",
      ]).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/field_data?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, [
          "field_definition",
          "field_option",
          "tab",
        ]);
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
    FieldDatumById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, [
        "field_definition",
        "field_option",
        "tab",
      ]).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/field_data/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, [
          "field_definition",
          "field_option",
          "tab",
        ]);
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

    FieldDefinition: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, [
        "field_options",
        "tab",
      ]).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/field_definitions?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, [
          "field_options",
          "tab",
        ]);
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
    FieldDefinitionById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, [
        "field_options",
        "tab",
      ]).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/field_definitions/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, [
          "field_options",
          "tab",
        ]);
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

    FieldOption: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, []).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/field_definitions/1/field_options?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, []);
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
    FieldOptionById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, []).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/field_definitions/1/field_options/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, []);
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

    Form: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, ["campus"]).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/forms?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, ["campus"]);
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
    FormById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, ["campus"]).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/forms/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, ["campus"]);
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

    FormField: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, ["options"]).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/forms/1/fields?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, ["options"]);
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
    FormFieldById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, ["options"]).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/forms/1/fields/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, ["options"]);
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

    FormFieldOption: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, []).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/forms/1/fields/1/options?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, []);
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
    FormFieldOptionById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, []).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/forms/1/fields/1/options/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, []);
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

    FormSubmission: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, [
        "form",
        "form_fields",
        "form_submission_values",
        "person",
      ]).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/forms/1/form_submissions?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, [
          "form",
          "form_fields",
          "form_submission_values",
          "person",
        ]);
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
    FormSubmissionById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, [
        "form",
        "form_fields",
        "form_submission_values",
        "person",
      ]).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/forms/1/form_submissions/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, [
          "form",
          "form_fields",
          "form_submission_values",
          "person",
        ]);
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

    FormSubmissionValue: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, []).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/forms/1/form_submissions/1/form_submission_values?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, []);
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
    FormSubmissionValueById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, []).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/forms/1/form_submissions/1/form_submission_values/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, []);
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

    Household: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, ["people"]).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/households?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, ["people"]);
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
    HouseholdById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, ["people"]).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/households/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, ["people"]);
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

    HouseholdMembership: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, ["household", "person"]).join(
        ","
      );

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/households/1/household_memberships?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, [
          "household",
          "person",
        ]);
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
    HouseholdMembershipById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, ["household", "person"]).join(
        ","
      );
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/households/1/household_memberships/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, [
          "household",
          "person",
        ]);
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

    InactiveReason: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, []).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/inactive_reasons?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, []);
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
    InactiveReasonById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, []).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/inactive_reasons/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, []);
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

    List: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, [
        "campus",
        "category",
        "created_by",
        "mailchimp_sync_status",
        "people",
        "rules",
        "shares",
        "updated_by",
      ]).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/lists?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, [
          "campus",
          "category",
          "created_by",
          "mailchimp_sync_status",
          "people",
          "rules",
          "shares",
          "updated_by",
        ]);
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
    ListById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, [
        "campus",
        "category",
        "created_by",
        "mailchimp_sync_status",
        "people",
        "rules",
        "shares",
        "updated_by",
      ]).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/lists/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, [
          "campus",
          "category",
          "created_by",
          "mailchimp_sync_status",
          "people",
          "rules",
          "shares",
          "updated_by",
        ]);
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

    ListCategory: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, ["lists"]).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/list_categories?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, ["lists"]);
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
    ListCategoryById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, ["lists"]).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/list_categories/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, ["lists"]);
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

    ListResult: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, []).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/lists/1/list_results?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, []);
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
    ListResultById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, []).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/lists/1/list_results/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, []);
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

    ListShare: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, ["person"]).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/lists/1/shares?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, ["person"]);
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
    ListShareById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, ["person"]).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/lists/1/shares/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, ["person"]);
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

    ListStar: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, []).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/lists/1/star?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, []);
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
    ListStarById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, []).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/lists/1/star/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, []);
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

    MailchimpSyncStatus: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, []).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/lists/1/mailchimp_sync_status?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, []);
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
    MailchimpSyncStatusById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, []).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/lists/1/mailchimp_sync_status/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, []);
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

    MaritalStatus: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, []).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/marital_statuses?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, []);
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
    MaritalStatusById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, []).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/marital_statuses/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, []);
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

    Message: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, ["message_group", "to"]).join(
        ","
      );

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/messages?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, [
          "message_group",
          "to",
        ]);
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
    MessageById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, ["message_group", "to"]).join(
        ","
      );
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/messages/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, [
          "message_group",
          "to",
        ]);
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

    MessageGroup: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, [
        "app",
        "from",
        "messages",
      ]).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/message_groups?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, [
          "app",
          "from",
          "messages",
        ]);
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
    MessageGroupById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, [
        "app",
        "from",
        "messages",
      ]).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/message_groups/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, [
          "app",
          "from",
          "messages",
        ]);
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

    NamePrefix: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, []).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/name_prefixes?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, []);
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
    NamePrefixById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, []).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/name_prefixes/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, []);
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

    NameSuffix: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, []).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/name_suffixes?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, []);
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
    NameSuffixById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, []).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/name_suffixes/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, []);
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

    Note: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, [
        "category",
        "created_by",
        "person",
      ]).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/notes?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, [
          "category",
          "created_by",
          "person",
        ]);
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
    NoteById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, [
        "category",
        "created_by",
        "person",
      ]).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/notes/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, [
          "category",
          "created_by",
          "person",
        ]);
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

    NoteCategory: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, [
        "shares",
        "subscribers",
        "subscriptions",
      ]).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/note_categories?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, [
          "shares",
          "subscribers",
          "subscriptions",
        ]);
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
    NoteCategoryById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, [
        "shares",
        "subscribers",
        "subscriptions",
      ]).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/note_categories/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, [
          "shares",
          "subscribers",
          "subscriptions",
        ]);
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

    NoteCategoryShare: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, ["person"]).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/note_categories/1/shares?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, ["person"]);
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
    NoteCategoryShareById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, ["person"]).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/note_categories/1/shares/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, ["person"]);
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

    NoteCategorySubscription: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, []).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/note_category_subscriptions?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, []);
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
    NoteCategorySubscriptionById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, []).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/note_category_subscriptions/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, []);
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

    Organization: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, []).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, []);
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
    OrganizationById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, []).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, []);
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

    OrganizationStatistics: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, []).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/organization_statistics?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, []);
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
    OrganizationStatisticsById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, []).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/organization_statistics/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, []);
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

    PeopleImport: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, []).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/people_imports?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, []);
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
    PeopleImportById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, []).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/people_imports/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, []);
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

    PeopleImportConflict: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, []).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/people_imports/1/conflicts?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, []);
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
    PeopleImportConflictById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, []).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/people_imports/1/conflicts/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, []);
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

    PeopleImportHistory: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, ["household", "person"]).join(
        ","
      );

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/people_imports/1/histories?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, [
          "household",
          "person",
        ]);
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
    PeopleImportHistoryById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, ["household", "person"]).join(
        ","
      );
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/people_imports/1/histories/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, [
          "household",
          "person",
        ]);
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

    Person: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, [
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
      ]).join(",");

      let response = await getJSONfromUrl(
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

      let result = response.data.map((e) => {
        const relatedData = zipRelatedData(response, e, [
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
        ]);
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
    PersonById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, [
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
      ]).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/people/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, [
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
        ]);
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

    PersonApp: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, ["app"]).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/people/1/person_apps?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, ["app"]);
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
    PersonAppById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, ["app"]).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/people/1/person_apps/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, ["app"]);
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

    PersonMerger: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, []).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/person_mergers?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, []);
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
    PersonMergerById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, []).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/person_mergers/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, []);
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

    PhoneNumber: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, []).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/phone_numbers?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, []);
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
    PhoneNumberById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, []).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/phone_numbers/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, []);
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

    PlatformNotification: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, []).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/people/1/platform_notifications?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, []);
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
    PlatformNotificationById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, []).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/people/1/platform_notifications/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, []);
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

    Report: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, [
        "created_by",
        "updated_by",
      ]).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/reports?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, [
          "created_by",
          "updated_by",
        ]);
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
    ReportById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, [
        "created_by",
        "updated_by",
      ]).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/reports/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, [
          "created_by",
          "updated_by",
        ]);
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

    Rule: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, ["conditions"]).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/lists/1/rules?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, ["conditions"]);
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
    RuleById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, ["conditions"]).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/lists/1/rules/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, ["conditions"]);
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

    SchoolOption: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, []).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/school_options?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, []);
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
    SchoolOptionById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, []).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/school_options/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, []);
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

    ServiceTime: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, []).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/campuses/1/service_times?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, []);
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
    ServiceTimeById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, []).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/campuses/1/service_times/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, []);
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

    SocialProfile: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, ["person"]).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/social_profiles?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, ["person"]);
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
    SocialProfileById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, ["person"]).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/social_profiles/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, ["person"]);
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

    Tab: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, [
        "field_definitions",
        "field_options",
      ]).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/tabs?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, [
          "field_definitions",
          "field_options",
        ]);
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
    TabById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, [
        "field_definitions",
        "field_options",
      ]).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/tabs/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, [
          "field_definitions",
          "field_options",
        ]);
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

    Workflow: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, [
        "category",
        "shares",
        "steps",
      ]).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/workflows?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, [
          "category",
          "shares",
          "steps",
        ]);
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
    WorkflowById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, [
        "category",
        "shares",
        "steps",
      ]).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/workflows/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, [
          "category",
          "shares",
          "steps",
        ]);
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

    WorkflowCard: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, [
        "assignee",
        "current_step",
        "person",
        "workflow",
      ]).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/people/1/workflow_cards?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, [
          "assignee",
          "current_step",
          "person",
          "workflow",
        ]);
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
    WorkflowCardById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, [
        "assignee",
        "current_step",
        "person",
        "workflow",
      ]).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/people/1/workflow_cards/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, [
          "assignee",
          "current_step",
          "person",
          "workflow",
        ]);
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

    WorkflowCardActivity: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, []).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/people/1/workflow_cards/1/activities?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, []);
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
    WorkflowCardActivityById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, []).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/people/1/workflow_cards/1/activities/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, []);
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

    WorkflowCardNote: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, []).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/people/1/workflow_cards/1/notes?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, []);
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
    WorkflowCardNoteById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, []).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/people/1/workflow_cards/1/notes/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, []);
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

    WorkflowCategory: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, []).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/workflow_categories?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, []);
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
    WorkflowCategoryById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, []).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/workflow_categories/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, []);
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

    WorkflowShare: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, ["person"]).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/people/1/workflow_shares?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, ["person"]);
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
    WorkflowShareById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, ["person"]).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/people/1/workflow_shares/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, ["person"]);
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

    WorkflowStep: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, ["default_assignee"]).join(
        ","
      );

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/workflows/1/steps?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, ["default_assignee"]);
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
    WorkflowStepById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, ["default_assignee"]).join(
        ","
      );
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/workflows/1/steps/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, ["default_assignee"]);
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

    WorkflowStepAssigneeSummary: async (parent, params, context, info) => {
      const { limit = 10, where, order } = params;
      const whereArg = where ? formatWhere(where) : "&where[status]=active";
      const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${
        order?.field !== undefined ? order?.field : ""
      }`;
      const includes = getRelatedFieldNames(info, ["person"]).join(",");

      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/workflows/1/steps/1/assignee_summaries?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
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
        const relatedData = zipRelatedData(response, e, ["person"]);
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
    WorkflowStepAssigneeSummaryById: async (parent, params, context, info) => {
      const { id } = params;
      const includes = getRelatedFieldNames(info, ["person"]).join(",");
      let response = await getJSONfromUrl(
        `https://api.planningcenteronline.com/people/v2/workflows/1/steps/1/assignee_summaries/${id}?per_page=${limit}&include=${includes}`,
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
        const relatedData = zipRelatedData(response, e, ["person"]);
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
  },
};
