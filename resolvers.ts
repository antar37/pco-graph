export const resolvers = { Query:  {
          CalendarAttachment: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["event"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/calendar/v2/attachments?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["event"]);
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
            CalendarAttachmentById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["event"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/calendar/v2/attachments/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["event"]);
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
      

          CalendarConflict: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["resolved_by","resource","winner"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/calendar/v2/conflicts?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["resolved_by","resource","winner"]);
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
            CalendarConflictById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["resolved_by","resource","winner"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/calendar/v2/conflicts/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["resolved_by","resource","winner"]);
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
      

          CalendarEvent: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["attachments","feed","owner","tags"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/calendar/v2/events?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["attachments","feed","owner","tags"]);
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
            CalendarEventById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["attachments","feed","owner","tags"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/calendar/v2/events/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["attachments","feed","owner","tags"]);
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
      

          CalendarEventInstance: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["event","event_times","resource_bookings","tags"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/calendar/v2/event_instances?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["event","event_times","resource_bookings","tags"]);
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
            CalendarEventInstanceById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["event","event_times","resource_bookings","tags"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/calendar/v2/event_instances/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["event","event_times","resource_bookings","tags"]);
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
      

          CalendarEventResourceRequest: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["created_by","event","resource","room_setup","updated_by"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/calendar/v2/event_resource_requests?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["created_by","event","resource","room_setup","updated_by"]);
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
            CalendarEventResourceRequestById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["created_by","event","resource","room_setup","updated_by"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/calendar/v2/event_resource_requests/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["created_by","event","resource","room_setup","updated_by"]);
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
      

          CalendarFeed: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, []).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/calendar/v2/feeds?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            CalendarFeedById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, []).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/calendar/v2/feeds/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          CalendarPerson: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["organization"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/calendar/v2/people?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["organization"]);
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
            CalendarPersonById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["organization"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/calendar/v2/people/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["organization"]);
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
      

          CalendarReportTemplate: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, []).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/calendar/v2/report_templates?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            CalendarReportTemplateById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, []).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/calendar/v2/report_templates/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          CalendarResource: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["resource_approval_groups","resource_folder","resource_questions","room_setups"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/calendar/v2/resources?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["resource_approval_groups","resource_folder","resource_questions","room_setups"]);
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
            CalendarResourceById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["resource_approval_groups","resource_folder","resource_questions","room_setups"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/calendar/v2/resources/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["resource_approval_groups","resource_folder","resource_questions","room_setups"]);
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
      

          CalendarResourceApprovalGroup: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["people","resources"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/calendar/v2/resource_approval_groups?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["people","resources"]);
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
            CalendarResourceApprovalGroupById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["people","resources"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/calendar/v2/resource_approval_groups/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["people","resources"]);
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
      

          CalendarResourceBooking: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["event_instance","event_resource_request","resource"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/calendar/v2/resource_bookings?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["event_instance","event_resource_request","resource"]);
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
            CalendarResourceBookingById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["event_instance","event_resource_request","resource"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/calendar/v2/resource_bookings/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["event_instance","event_resource_request","resource"]);
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
      

          CalendarResourceFolder: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["resources"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/calendar/v2/resource_folders?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["resources"]);
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
            CalendarResourceFolderById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["resources"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/calendar/v2/resource_folders/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["resources"]);
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
      

          CalendarResourceQuestion: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, []).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/calendar/v2/resource_questions?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            CalendarResourceQuestionById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, []).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/calendar/v2/resource_questions/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          CalendarRoomSetup: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["containing_resource","resource_suggestions"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/calendar/v2/room_setups?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["containing_resource","resource_suggestions"]);
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
            CalendarRoomSetupById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["containing_resource","resource_suggestions"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/calendar/v2/room_setups/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["containing_resource","resource_suggestions"]);
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
      

          CalendarTag: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["tag_group"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/calendar/v2/tags?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["tag_group"]);
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
            CalendarTagById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["tag_group"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/calendar/v2/tags/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["tag_group"]);
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
      

          CalendarTagGroup: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["events","tags"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/calendar/v2/tag_groups?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["events","tags"]);
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
            CalendarTagGroupById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["events","tags"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/calendar/v2/tag_groups/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["events","tags"]);
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
      

          Check_insCheckIn: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["check_in_times","checked_in_at","checked_in_by","checked_out_by","event","event_period","event_times","locations","options","person"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/check_ins/v2/check_ins?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["check_in_times","checked_in_at","checked_in_by","checked_out_by","event","event_period","event_times","locations","options","person"]);
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
            Check_insCheckInById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["check_in_times","checked_in_at","checked_in_by","checked_out_by","event","event_period","event_times","locations","options","person"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/check_ins/v2/check_ins/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["check_in_times","checked_in_at","checked_in_by","checked_out_by","event","event_period","event_times","locations","options","person"]);
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
      

          Check_insEvent: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["attendance_types","event_periods"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/check_ins/v2/events?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["attendance_types","event_periods"]);
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
            Check_insEventById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["attendance_types","event_periods"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/check_ins/v2/events/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["attendance_types","event_periods"]);
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
      

          Check_insEventTime: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["event","event_period","headcounts"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/check_ins/v2/event_times?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["event","event_period","headcounts"]);
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
            Check_insEventTimeById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["event","event_period","headcounts"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/check_ins/v2/event_times/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["event","event_period","headcounts"]);
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
      

          Check_insHeadcount: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["attendance_type","event_time"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/check_ins/v2/headcounts?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["attendance_type","event_time"]);
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
            Check_insHeadcountById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["attendance_type","event_time"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/check_ins/v2/headcounts/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["attendance_type","event_time"]);
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
      

          Check_insLabel: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, []).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/check_ins/v2/labels?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            Check_insLabelById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, []).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/check_ins/v2/labels/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          Check_insOption: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["label"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/check_ins/v2/options?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["label"]);
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
            Check_insOptionById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["label"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/check_ins/v2/options/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["label"]);
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
      

          Check_insPass: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["person"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/check_ins/v2/passes?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            Check_insPassById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["person"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/check_ins/v2/passes/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          Check_insPerson: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["organization"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/check_ins/v2/people?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["organization"]);
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
            Check_insPersonById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["organization"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/check_ins/v2/people/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["organization"]);
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
      

          Check_insStation: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["event","location","print_station","theme"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/check_ins/v2/stations?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["event","location","print_station","theme"]);
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
            Check_insStationById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["event","location","print_station","theme"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/check_ins/v2/stations/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["event","location","print_station","theme"]);
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
      

          Check_insTheme: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, []).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/check_ins/v2/themes?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            Check_insThemeById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, []).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/check_ins/v2/themes/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          GroupsEvent: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["group","location"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/groups/v2/events?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["group","location"]);
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
            GroupsEventById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["group","location"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/groups/v2/events/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["group","location"]);
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
      

          GroupsGroup: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["enrollment","group_type","location"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/groups/v2/groups?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["enrollment","group_type","location"]);
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
            GroupsGroupById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["enrollment","group_type","location"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/groups/v2/groups/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["enrollment","group_type","location"]);
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
      

          GroupsGroupType: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, []).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/groups/v2/group_types?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            GroupsGroupTypeById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, []).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/groups/v2/group_types/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          GroupsPerson: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, []).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/groups/v2/people?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            GroupsPersonById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, []).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/groups/v2/people/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          GroupsTagGroup: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, []).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/groups/v2/tag_groups?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            GroupsTagGroupById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, []).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/groups/v2/tag_groups/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          PeopleAddress: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, []).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/people/v2/addresses?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            PeopleAddressById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
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
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          PeopleAnniversaryCouples: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, []).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/people/v2/anniversary_couples?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            PeopleAnniversaryCouplesById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
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
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          PeopleApp: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, []).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/people/v2/apps?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            PeopleAppById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
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
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          PeopleBackgroundCheck: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["person"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/people/v2/background_checks?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            PeopleBackgroundCheckById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
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
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          PeopleBirthdayPeople: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, []).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/people/v2/birthday_people?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            PeopleBirthdayPeopleById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
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
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          PeopleCampus: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["lists","service_times"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/people/v2/campuses?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["lists","service_times"]);
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
            PeopleCampusById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["lists","service_times"]).join(",");
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
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["lists","service_times"]);
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
      

          PeopleCarrier: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, []).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/people/v2/carriers?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            PeopleCarrierById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
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
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          PeopleEmail: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, []).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/people/v2/emails?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            PeopleEmailById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
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
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          PeopleFieldDatum: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["field_definition","field_option","tab"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/people/v2/field_data?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["field_definition","field_option","tab"]);
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
            PeopleFieldDatumById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["field_definition","field_option","tab"]).join(",");
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
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["field_definition","field_option","tab"]);
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
      

          PeopleFieldDefinition: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["field_options","tab"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/people/v2/field_definitions?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["field_options","tab"]);
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
            PeopleFieldDefinitionById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["field_options","tab"]).join(",");
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
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["field_options","tab"]);
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
      

          PeopleForm: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["campus"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/people/v2/forms?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            PeopleFormById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
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
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          PeopleHousehold: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["people"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/people/v2/households?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            PeopleHouseholdById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
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
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          PeopleInactiveReason: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, []).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/people/v2/inactive_reasons?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            PeopleInactiveReasonById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
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
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          PeopleList: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["campus","category","created_by","mailchimp_sync_status","people","rules","shares","updated_by"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/people/v2/lists?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["campus","category","created_by","mailchimp_sync_status","people","rules","shares","updated_by"]);
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
            PeopleListById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["campus","category","created_by","mailchimp_sync_status","people","rules","shares","updated_by"]).join(",");
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
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["campus","category","created_by","mailchimp_sync_status","people","rules","shares","updated_by"]);
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
      

          PeopleListCategory: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["lists"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/people/v2/list_categories?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            PeopleListCategoryById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
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
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          PeopleMaritalStatus: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, []).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/people/v2/marital_statuses?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            PeopleMaritalStatusById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
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
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          PeopleMessage: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["message_group","to"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/people/v2/messages?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["message_group","to"]);
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
            PeopleMessageById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["message_group","to"]).join(",");
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
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["message_group","to"]);
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
      

          PeopleMessageGroup: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["app","from","messages"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/people/v2/message_groups?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["app","from","messages"]);
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
            PeopleMessageGroupById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["app","from","messages"]).join(",");
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
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["app","from","messages"]);
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
      

          PeopleNamePrefix: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, []).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/people/v2/name_prefixes?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            PeopleNamePrefixById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
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
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          PeopleNameSuffix: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, []).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/people/v2/name_suffixes?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            PeopleNameSuffixById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
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
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          PeopleNote: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["category","created_by","person"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/people/v2/notes?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["category","created_by","person"]);
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
            PeopleNoteById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["category","created_by","person"]).join(",");
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
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["category","created_by","person"]);
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
      

          PeopleNoteCategory: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["shares","subscribers","subscriptions"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/people/v2/note_categories?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["shares","subscribers","subscriptions"]);
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
            PeopleNoteCategoryById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["shares","subscribers","subscriptions"]).join(",");
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
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["shares","subscribers","subscriptions"]);
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
      

          PeopleNoteCategorySubscription: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, []).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/people/v2/note_category_subscriptions?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            PeopleNoteCategorySubscriptionById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
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
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          PeopleOrganizationStatistics: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, []).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/people/v2/organization_statistics?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            PeopleOrganizationStatisticsById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
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
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          PeoplePeopleImport: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, []).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/people/v2/people_imports?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            PeoplePeopleImportById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
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
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          PeoplePerson: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["addresses","emails","field_data","households","inactive_reason","marital_status","name_prefix","name_suffix","organization","person_apps","phone_numbers","platform_notifications","primary_campus","school","social_profiles"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/people/v2/people?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["addresses","emails","field_data","households","inactive_reason","marital_status","name_prefix","name_suffix","organization","person_apps","phone_numbers","platform_notifications","primary_campus","school","social_profiles"]);
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
            PeoplePersonById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["addresses","emails","field_data","households","inactive_reason","marital_status","name_prefix","name_suffix","organization","person_apps","phone_numbers","platform_notifications","primary_campus","school","social_profiles"]).join(",");
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
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["addresses","emails","field_data","households","inactive_reason","marital_status","name_prefix","name_suffix","organization","person_apps","phone_numbers","platform_notifications","primary_campus","school","social_profiles"]);
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
      

          PeoplePersonMerger: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, []).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/people/v2/person_mergers?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            PeoplePersonMergerById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
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
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          PeoplePhoneNumber: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, []).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/people/v2/phone_numbers?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            PeoplePhoneNumberById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
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
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          PeopleReport: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["created_by","updated_by"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/people/v2/reports?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["created_by","updated_by"]);
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
            PeopleReportById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["created_by","updated_by"]).join(",");
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
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["created_by","updated_by"]);
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
      

          PeopleSchoolOption: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, []).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/people/v2/school_options?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            PeopleSchoolOptionById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
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
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          PeopleSocialProfile: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["person"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/people/v2/social_profiles?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            PeopleSocialProfileById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
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
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          PeopleTab: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["field_definitions","field_options"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/people/v2/tabs?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["field_definitions","field_options"]);
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
            PeopleTabById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["field_definitions","field_options"]).join(",");
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
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["field_definitions","field_options"]);
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
      

          PeopleWorkflow: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["category","shares","steps"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/people/v2/workflows?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["category","shares","steps"]);
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
            PeopleWorkflowById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["category","shares","steps"]).join(",");
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
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["category","shares","steps"]);
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
      

          ServicesAttachmentType: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, []).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/services/v2/attachment_types?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            ServicesAttachmentTypeById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, []).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/services/v2/attachment_types/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          ServicesChat: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, []).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/services/v2/chats?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            ServicesChatById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, []).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/services/v2/chats/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          ServicesEmailTemplate: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, []).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/services/v2/email_templates?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            ServicesEmailTemplateById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, []).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/services/v2/email_templates/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          ServicesFolder: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["service_types"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/services/v2/folders?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["service_types"]);
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
            ServicesFolderById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["service_types"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/services/v2/folders/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["service_types"]);
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
      

          ServicesMedia: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["attachments"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/services/v2/media?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["attachments"]);
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
            ServicesMediaById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["attachments"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/services/v2/media/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["attachments"]);
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
      

          ServicesOrganization: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, []).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/services/v2?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            ServicesOrganizationById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, []).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/services/v2/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          ServicesPerson: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["team_leaders"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/services/v2/people?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["team_leaders"]);
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
            ServicesPersonById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["team_leaders"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/services/v2/people/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["team_leaders"]);
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
      

          ServicesReportTemplate: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, []).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/services/v2/report_templates?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            ServicesReportTemplateById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, []).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/services/v2/report_templates/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          ServicesSeries: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, []).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/services/v2/series?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            ServicesSeriesById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, []).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/services/v2/series/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          ServicesServiceType: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["time_preference_options"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/services/v2/service_types?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["time_preference_options"]);
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
            ServicesServiceTypeById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["time_preference_options"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/services/v2/service_types/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["time_preference_options"]);
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
      

          ServicesSong: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, []).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/services/v2/songs?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            ServicesSongById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, []).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/services/v2/songs/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          ServicesTagGroup: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["folder","tags"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/services/v2/tag_groups?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["folder","tags"]);
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
            ServicesTagGroupById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["folder","tags"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/services/v2/tag_groups/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["folder","tags"]);
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
      

          ServicesTeam: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["people","person_team_position_assignments","service_type","team_leaders","team_positions"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/services/v2/teams?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["people","person_team_position_assignments","service_type","team_leaders","team_positions"]);
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
            ServicesTeamById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["people","person_team_position_assignments","service_type","team_leaders","team_positions"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/services/v2/teams/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["people","person_team_position_assignments","service_type","team_leaders","team_positions"]);
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
      

          ResourcesAttachment: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["event"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/resources/v2/attachments?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["event"]);
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
            ResourcesAttachmentById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["event"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/resources/v2/attachments/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["event"]);
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
      

          ResourcesConflict: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["resolved_by","resource","winner"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/resources/v2/conflicts?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["resolved_by","resource","winner"]);
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
            ResourcesConflictById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["resolved_by","resource","winner"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/resources/v2/conflicts/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["resolved_by","resource","winner"]);
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
      

          ResourcesEvent: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["attachments","feed","owner","tags"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/resources/v2/events?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["attachments","feed","owner","tags"]);
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
            ResourcesEventById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["attachments","feed","owner","tags"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/resources/v2/events/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["attachments","feed","owner","tags"]);
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
      

          ResourcesEventInstance: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["event","event_times","resource_bookings","tags"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/resources/v2/event_instances?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["event","event_times","resource_bookings","tags"]);
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
            ResourcesEventInstanceById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["event","event_times","resource_bookings","tags"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/resources/v2/event_instances/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["event","event_times","resource_bookings","tags"]);
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
      

          ResourcesEventResourceRequest: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["created_by","event","resource","room_setup","updated_by"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/resources/v2/event_resource_requests?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["created_by","event","resource","room_setup","updated_by"]);
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
            ResourcesEventResourceRequestById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["created_by","event","resource","room_setup","updated_by"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/resources/v2/event_resource_requests/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["created_by","event","resource","room_setup","updated_by"]);
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
      

          ResourcesFeed: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, []).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/resources/v2/feeds?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            ResourcesFeedById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, []).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/resources/v2/feeds/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          ResourcesPerson: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["organization"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/resources/v2/people?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["organization"]);
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
            ResourcesPersonById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["organization"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/resources/v2/people/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["organization"]);
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
      

          ResourcesReportTemplate: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, []).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/resources/v2/report_templates?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            ResourcesReportTemplateById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, []).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/resources/v2/report_templates/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          ResourcesResource: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["resource_approval_groups","resource_folder","resource_questions","room_setups"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/resources/v2/resources?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["resource_approval_groups","resource_folder","resource_questions","room_setups"]);
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
            ResourcesResourceById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["resource_approval_groups","resource_folder","resource_questions","room_setups"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/resources/v2/resources/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["resource_approval_groups","resource_folder","resource_questions","room_setups"]);
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
      

          ResourcesResourceApprovalGroup: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["people","resources"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/resources/v2/resource_approval_groups?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["people","resources"]);
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
            ResourcesResourceApprovalGroupById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["people","resources"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/resources/v2/resource_approval_groups/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["people","resources"]);
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
      

          ResourcesResourceBooking: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["event_instance","event_resource_request","resource"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/resources/v2/resource_bookings?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["event_instance","event_resource_request","resource"]);
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
            ResourcesResourceBookingById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["event_instance","event_resource_request","resource"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/resources/v2/resource_bookings/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["event_instance","event_resource_request","resource"]);
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
      

          ResourcesResourceFolder: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["resources"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/resources/v2/resource_folders?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["resources"]);
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
            ResourcesResourceFolderById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["resources"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/resources/v2/resource_folders/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["resources"]);
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
      

          ResourcesResourceQuestion: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, []).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/resources/v2/resource_questions?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            ResourcesResourceQuestionById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, []).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/resources/v2/resource_questions/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          ResourcesRoomSetup: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["containing_resource","resource_suggestions"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/resources/v2/room_setups?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["containing_resource","resource_suggestions"]);
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
            ResourcesRoomSetupById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["containing_resource","resource_suggestions"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/resources/v2/room_setups/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["containing_resource","resource_suggestions"]);
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
      

          ResourcesTag: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["tag_group"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/resources/v2/tags?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["tag_group"]);
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
            ResourcesTagById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["tag_group"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/resources/v2/tags/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["tag_group"]);
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
      

          ResourcesTagGroup: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["events","tags"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/resources/v2/tag_groups?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["events","tags"]);
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
            ResourcesTagGroupById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["events","tags"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/resources/v2/tag_groups/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["events","tags"]);
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
      

          GivingBatch: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["batch_group","owner"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/giving/v2/batches?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["batch_group","owner"]);
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
            GivingBatchById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["batch_group","owner"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/giving/v2/batches/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["batch_group","owner"]);
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
      

          GivingBatchGroup: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["owner"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/giving/v2/batch_groups?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["owner"]);
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
            GivingBatchGroupById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["owner"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/giving/v2/batch_groups/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["owner"]);
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
      

          GivingCampus: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, []).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/giving/v2/campuses?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            GivingCampusById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, []).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/giving/v2/campuses/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          GivingDonation: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["designations","labels","note","refund"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/giving/v2/donations?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["designations","labels","note","refund"]);
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
            GivingDonationById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["designations","labels","note","refund"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/giving/v2/donations/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["designations","labels","note","refund"]);
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
      

          GivingFund: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, []).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/giving/v2/funds?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            GivingFundById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, []).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/giving/v2/funds/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          GivingLabel: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, []).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/giving/v2/labels?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            GivingLabelById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, []).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/giving/v2/labels/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          GivingPaymentSource: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, []).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/giving/v2/payment_sources?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            GivingPaymentSourceById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, []).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/giving/v2/payment_sources/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          GivingPerson: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, []).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/giving/v2/people?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
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
            GivingPersonById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, []).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/giving/v2/people/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
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
      

          GivingRecurringDonation: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
            const { limit = 10, where, order } = params;
            const whereArg = where ? formatWhere(where) : "&where[status]=active";
            const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
            const includes = getRelatedFieldNames(info, ["designations"]).join(",");
              
            let response = await getJSONfromUrl(`https://api.planningcenteronline.com/giving/v2/recurring_donations?per_page=${limit}&include=${includes}${whereArg}${orderArg}`,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                },
              }
            );
  
            let result = response.data.map((e: { attributes: any; id: any }) => {
              const relatedData = zipRelatedData(response, e, ["designations"]);
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
            GivingRecurringDonationById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              const { id, limit = 10 } = params;
              const includes = getRelatedFieldNames(info, ["designations"]).join(",");
          let response = await getJSONfromUrl(
                `https://api.planningcenteronline.com/giving/v2/recurring_donations/${id}?per_page=${limit}&include=${includes}`,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
                  },
                }
              );
      
              let result = response.data.map((e: { attributes: any; id: any }) => {
                const relatedData = zipRelatedData(response, e, ["designations"]);
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
      CalendarEvent: {
       relationships :(parent: any) => parent
      },
      CalendarEventRelationships: {
        
        
        CalendarEvent_connections: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/event_connections" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      CalendarEventInstance: {
       relationships :(parent: any) => parent
      },
      CalendarEventInstanceRelationships: {
        
        
        CalendarEvent_times: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/event_times" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["event"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["event"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      CalendarPerson: {
       relationships :(parent: any) => parent
      },
      CalendarPersonRelationships: {
        
        
        CalendarOrganization: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/organization" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      CalendarResourceApprovalGroup: {
       relationships :(parent: any) => parent
      },
      CalendarResourceApprovalGroupRelationships: {
        
        
        CalendarRequired_approvals: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/required_approvals" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["resource"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["resource"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      CalendarResource: {
       relationships :(parent: any) => parent
      },
      CalendarResourceRelationships: {
        
        
        CalendarRequired_approvals: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/required_approvals" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["resource"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["resource"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      CalendarRoomSetup: {
       relationships :(parent: any) => parent
      },
      CalendarRoomSetupRelationships: {
        
        
        CalendarResource_suggestions: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/resource_suggestions" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["resource"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["resource"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      Check_insEvent: {
       relationships :(parent: any) => parent
      },
      Check_insEventRelationships: {
        
        
        Check_insAttendance_types: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/attendance_types" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["event"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["event"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        Check_insEvent_labels: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/event_labels" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["event","label"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["event","label"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        Check_insEvent_periods: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/event_periods" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["event","event_times"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["event","event_times"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        Check_insLocations: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/locations" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["event","locations","options","parent"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["event","locations","options","parent"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        Check_insPerson_events: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/person_events" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["event","first_check_in","last_check_in","person"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["event","first_check_in","last_check_in","person"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      Check_insHeadcount: {
       relationships :(parent: any) => parent
      },
      Check_insHeadcountRelationships: {
        
        
        Check_insAttendance_type: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/attendance_type" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["event"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["event"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      Check_insCheckIn: {
       relationships :(parent: any) => parent
      },
      Check_insCheckInRelationships: {
        
        
        Check_insCheck_in_group: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/check_in_group" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["check_ins","event_period","print_station"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["check_ins","event_period","print_station"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        Check_insCheck_in_times: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/check_in_times" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        Check_insEvent_period: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/event_period" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["event","event_times"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["event","event_times"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        Check_insLocations: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/locations" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["event","locations","options","parent"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["event","locations","options","parent"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      Check_insStation: {
       relationships :(parent: any) => parent
      },
      Check_insStationRelationships: {
        
        
        Check_insCheck_in_groups: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/check_in_groups" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["check_ins","event_period","print_station"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["check_ins","event_period","print_station"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        Check_insLocation: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/location" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["event","locations","options","parent"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["event","locations","options","parent"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      Check_insLabel: {
       relationships :(parent: any) => parent
      },
      Check_insLabelRelationships: {
        
        
        Check_insEvent_labels: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/event_labels" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["event","label"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["event","label"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        Check_insLocation_labels: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/location_labels" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["label","location"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["label","location"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      Check_insCheckInGroup: {
       relationships :(parent: any) => parent
      },
      Check_insCheckInGroupRelationships: {
        
        
        Check_insEvent_period: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/event_period" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["event","event_times"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["event","event_times"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      Check_insEventTime: {
       relationships :(parent: any) => parent
      },
      Check_insEventTimeRelationships: {
        
        
        Check_insEvent_period: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/event_period" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["event","event_times"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["event","event_times"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        Check_insAvailable_locations: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/available_locations" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["event","locations","options","parent"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["event","locations","options","parent"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        Check_insLocation_event_times: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/location_event_times" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["event_time","location"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["event_time","location"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      Check_insLocationEventPeriod: {
       relationships :(parent: any) => parent
      },
      Check_insLocationEventPeriodRelationships: {
        
        
        Check_insEvent_period: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/event_period" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["event","event_times"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["event","event_times"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        Check_insLocation: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/location" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["event","locations","options","parent"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["event","locations","options","parent"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      Check_insLocationEventTime: {
       relationships :(parent: any) => parent
      },
      Check_insLocationEventTimeRelationships: {
        
        
        Check_insLocation: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/location" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["event","locations","options","parent"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["event","locations","options","parent"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      Check_insLocationLabel: {
       relationships :(parent: any) => parent
      },
      Check_insLocationLabelRelationships: {
        
        
        Check_insLocation: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/location" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["event","locations","options","parent"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["event","locations","options","parent"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      Check_insLocation: {
       relationships :(parent: any) => parent
      },
      Check_insLocationRelationships: {
        
        
        Check_insLocations: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/locations" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["event","locations","options","parent"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["event","locations","options","parent"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        Check_insParent: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/parent" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["event","locations","options","parent"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["event","locations","options","parent"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        Check_insLocation_event_periods: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/location_event_periods" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["event_period","location"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["event_period","location"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        Check_insLocation_event_times: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/location_event_times" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["event_time","location"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["event_time","location"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        Check_insLocation_labels: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/location_labels" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["label","location"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["label","location"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      Check_insEventPeriod: {
       relationships :(parent: any) => parent
      },
      Check_insEventPeriodRelationships: {
        
        
        Check_insLocation_event_periods: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/location_event_periods" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["event_period","location"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["event_period","location"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      Check_insPerson: {
       relationships :(parent: any) => parent
      },
      Check_insPersonRelationships: {
        
        
        Check_insOrganization: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/organization" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        Check_insPerson_events: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/person_events" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["event","first_check_in","last_check_in","person"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["event","first_check_in","last_check_in","person"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      GroupsEvent: {
       relationships :(parent: any) => parent
      },
      GroupsEventRelationships: {
        
        
        GroupsAttendances: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/attendances" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["person"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["person"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        GroupsNotes: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/notes" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["owner"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["owner"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        GroupsLocation: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/location" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["group"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["group"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      GroupsGroup: {
       relationships :(parent: any) => parent
      },
      GroupsGroupRelationships: {
        
        
        GroupsEnrollment: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/enrollment" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        GroupsLocation: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/location" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["group"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["group"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        GroupsMemberships: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/memberships" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["person"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["person"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        GroupsResources: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/resources" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        GroupsTags: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/tags" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      GroupsPerson: {
       relationships :(parent: any) => parent
      },
      GroupsPersonRelationships: {
        
        
        GroupsMemberships: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/memberships" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["person"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["person"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      GroupsEventNote: {
       relationships :(parent: any) => parent
      },
      GroupsEventNoteRelationships: {
        
        
        GroupsOwner: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/owner" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      GroupsGroupType: {
       relationships :(parent: any) => parent
      },
      GroupsGroupTypeRelationships: {
        
        
        GroupsResources: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/resources" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      GroupsResource: {
       relationships :(parent: any) => parent
      },
      GroupsResourceRelationships: {
        
        
        GroupsDownload: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/download" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        GroupsVisit: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/visit" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      GroupsTagGroup: {
       relationships :(parent: any) => parent
      },
      GroupsTagGroupRelationships: {
        
        
        GroupsTags: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/tags" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      PeopleRule: {
       relationships :(parent: any) => parent
      },
      PeopleRuleRelationships: {
        
        
        PeopleConditions: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/conditions" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["created_by"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["created_by"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      PeoplePerson: {
       relationships :(parent: any) => parent
      },
      PeoplePersonRelationships: {
        
        
        PeopleConnected_people: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/connected_people" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        PeopleHousehold_memberships: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/household_memberships" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["household","person"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["household","person"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        PeopleOrganization: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/organization" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        PeoplePerson_apps: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/person_apps" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["app"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["app"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        PeoplePlatform_notifications: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/platform_notifications" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        PeopleWorkflow_cards: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/workflow_cards" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["assignee","current_step","person","workflow"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["assignee","current_step","person","workflow"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        PeopleWorkflow_shares: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/workflow_shares" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["person"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["person"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      PeopleFieldDatum: {
       relationships :(parent: any) => parent
      },
      PeopleFieldDatumRelationships: {
        
        
        PeopleField_option: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/field_option" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      PeopleFieldDefinition: {
       relationships :(parent: any) => parent
      },
      PeopleFieldDefinitionRelationships: {
        
        
        PeopleField_options: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/field_options" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      PeopleTab: {
       relationships :(parent: any) => parent
      },
      PeopleTabRelationships: {
        
        
        PeopleField_options: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/field_options" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      PeopleForm: {
       relationships :(parent: any) => parent
      },
      PeopleFormRelationships: {
        
        
        PeopleFields: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/fields" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["options"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["options"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        PeopleForm_submissions: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/form_submissions" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["form","form_fields","form_submission_values","person"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["form","form_fields","form_submission_values","person"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      PeopleFormSubmission: {
       relationships :(parent: any) => parent
      },
      PeopleFormSubmissionRelationships: {
        
        
        PeopleForm_fields: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/form_fields" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["options"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["options"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        PeopleForm_submission_values: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/form_submission_values" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      PeopleFormField: {
       relationships :(parent: any) => parent
      },
      PeopleFormFieldRelationships: {
        
        
        PeopleOptions: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/options" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      PeopleHousehold: {
       relationships :(parent: any) => parent
      },
      PeopleHouseholdRelationships: {
        
        
        PeopleHousehold_memberships: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/household_memberships" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["household","person"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["household","person"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      PeopleList: {
       relationships :(parent: any) => parent
      },
      PeopleListRelationships: {
        
        
        PeopleList_results: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/list_results" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        PeopleShares: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/shares" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["person"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["person"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        PeopleStar: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/star" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        PeopleMailchimp_sync_status: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/mailchimp_sync_status" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        PeopleRules: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/rules" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["conditions"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["conditions"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      PeopleNoteCategory: {
       relationships :(parent: any) => parent
      },
      PeopleNoteCategoryRelationships: {
        
        
        PeopleShares: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/shares" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["person"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["person"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      PeoplePeopleImport: {
       relationships :(parent: any) => parent
      },
      PeoplePeopleImportRelationships: {
        
        
        PeopleConflicts: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/conflicts" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        PeopleHistories: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/histories" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["household","person"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["household","person"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      PeopleCampus: {
       relationships :(parent: any) => parent
      },
      PeopleCampusRelationships: {
        
        
        PeopleService_times: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/service_times" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      PeopleWorkflow: {
       relationships :(parent: any) => parent
      },
      PeopleWorkflowRelationships: {
        
        
        PeopleCards: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/cards" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["assignee","current_step","person","workflow"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["assignee","current_step","person","workflow"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        PeopleCategory: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/category" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        PeopleShares: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/shares" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["person"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["person"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        PeopleSteps: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/steps" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["default_assignee"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["default_assignee"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      PeopleWorkflowCard: {
       relationships :(parent: any) => parent
      },
      PeopleWorkflowCardRelationships: {
        
        
        PeopleActivities: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/activities" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        PeopleNotes: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/notes" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        PeopleCurrent_step: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/current_step" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["default_assignee"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["default_assignee"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      PeopleWorkflowStep: {
       relationships :(parent: any) => parent
      },
      PeopleWorkflowStepRelationships: {
        
        
        PeopleAssignee_summaries: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/assignee_summaries" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["person"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["person"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      ServicesItem: {
       relationships :(parent: any) => parent
      },
      ServicesItemRelationships: {
        
        
        ServicesArrangement: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/arrangement" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["keys","sections"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["keys","sections"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesAttachments: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/attachments" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["zooms"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["zooms"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesSelected_attachment: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/selected_attachment" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["zooms"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["zooms"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesSelected_background: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/selected_background" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["zooms"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["zooms"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesCustom_slides: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/custom_slides" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesItem_notes: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/item_notes" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["item_note_category"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["item_note_category"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesItem_times: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/item_times" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesKey: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/key" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      ServicesSong: {
       relationships :(parent: any) => parent
      },
      ServicesSongRelationships: {
        
        
        ServicesArrangements: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/arrangements" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["keys","sections"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["keys","sections"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesAttachments: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/attachments" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["zooms"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["zooms"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesLast_scheduled_item: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/last_scheduled_item" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["arrangement","item_notes","item_times","key","media","selected_attachment","song"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["arrangement","item_notes","item_times","key","media","selected_attachment","song"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesSong_schedules: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/song_schedules" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesTags: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/tags" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      ServicesArrangement: {
       relationships :(parent: any) => parent
      },
      ServicesArrangementRelationships: {
        
        
        ServicesSections: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/sections" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesAttachments: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/attachments" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["zooms"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["zooms"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesKeys: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/keys" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesTags: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/tags" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      ServicesKey: {
       relationships :(parent: any) => parent
      },
      ServicesKeyRelationships: {
        
        
        ServicesAttachments: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/attachments" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["zooms"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["zooms"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      ServicesMedia: {
       relationships :(parent: any) => parent
      },
      ServicesMediaRelationships: {
        
        
        ServicesAttachments: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/attachments" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["zooms"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["zooms"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesMedia_schedules: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/media_schedules" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesTags: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/tags" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      ServicesPlan: {
       relationships :(parent: any) => parent
      },
      ServicesPlanRelationships: {
        
        
        ServicesAll_attachments: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/all_attachments" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["zooms"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["zooms"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesAttachments: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/attachments" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["zooms"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["zooms"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesAttendances: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/attendances" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesContributors: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/contributors" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesItems: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/items" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["arrangement","item_notes","item_times","key","media","selected_attachment","song"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["arrangement","item_notes","item_times","key","media","selected_attachment","song"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesLive: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/live" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["controller","current_item_time","items","next_item_time","service_type"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["controller","current_item_time","items","next_item_time","service_type"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesNeeded_positions: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/needed_positions" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["team","time"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["team","time"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesNext_plan: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/next_plan" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["contributors","my_schedules","plan_times","series"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["contributors","my_schedules","plan_times","series"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesPrevious_plan: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/previous_plan" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["contributors","my_schedules","plan_times","series"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["contributors","my_schedules","plan_times","series"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesNotes: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/notes" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["plan_note_category"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["plan_note_category"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesTeam_members: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/team_members" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["declined_plan_times","person","plan","team"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["declined_plan_times","person","plan","team"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesPlan_times: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/plan_times" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["split_team_rehearsal_assignments"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["split_team_rehearsal_assignments"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesMy_schedules: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/my_schedules" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["plan_times"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["plan_times"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      ServicesServiceType: {
       relationships :(parent: any) => parent
      },
      ServicesServiceTypeRelationships: {
        
        
        ServicesAttachments: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/attachments" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["zooms"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["zooms"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesItem_note_categories: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/item_note_categories" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesLayouts: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/layouts" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesLive_controllers: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/live_controllers" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesPlans: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/plans" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["contributors","my_schedules","plan_times","series"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["contributors","my_schedules","plan_times","series"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesUnscoped_plans: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/unscoped_plans" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["contributors","my_schedules","plan_times","series"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["contributors","my_schedules","plan_times","series"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesPlan_note_categories: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/plan_note_categories" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesPlan_templates: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/plan_templates" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesPlan_times: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/plan_times" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["split_team_rehearsal_assignments"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["split_team_rehearsal_assignments"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesPublic_view: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/public_view" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesTeam_positions: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/team_positions" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["tags","team"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["tags","team"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesTime_preference_options: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/time_preference_options" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      ServicesPerson: {
       relationships :(parent: any) => parent
      },
      ServicesPersonRelationships: {
        
        
        ServicesAvailable_signups: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/available_signups" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["signup_sheets"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["signup_sheets"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesBlockouts: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/blockouts" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesPerson_team_position_assignments: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/person_team_position_assignments" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["person","team_position"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["person","team_position"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesPlan_people: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/plan_people" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["declined_plan_times","person","plan","team"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["declined_plan_times","person","plan","team"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesSchedules: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/schedules" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["plan_times"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["plan_times"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesScheduling_preferences: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/scheduling_preferences" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesTags: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/tags" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesTeam_leaders: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/team_leaders" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["people","team"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["people","team"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesText_settings: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/text_settings" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      ServicesBlockout: {
       relationships :(parent: any) => parent
      },
      ServicesBlockoutRelationships: {
        
        
        ServicesBlockout_dates: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/blockout_dates" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesBlockout_exceptions: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/blockout_exceptions" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      ServicesLive: {
       relationships :(parent: any) => parent
      },
      ServicesLiveRelationships: {
        
        
        ServicesItems: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/items" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["arrangement","item_notes","item_times","key","media","selected_attachment","song"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["arrangement","item_notes","item_times","key","media","selected_attachment","song"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesCurrent_item_time: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/current_item_time" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesNext_item_time: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/next_item_time" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesWatchable_plans: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/watchable_plans" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["contributors","my_schedules","plan_times","series"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["contributors","my_schedules","plan_times","series"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      ServicesPlanTemplate: {
       relationships :(parent: any) => parent
      },
      ServicesPlanTemplateRelationships: {
        
        
        ServicesItems: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/items" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["arrangement","item_notes","item_times","key","media","selected_attachment","song"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["arrangement","item_notes","item_times","key","media","selected_attachment","song"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesNotes: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/notes" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["plan_note_category"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["plan_note_category"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      ServicesItemNote: {
       relationships :(parent: any) => parent
      },
      ServicesItemNoteRelationships: {
        
        
        ServicesItem_note_category: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/item_note_category" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      ServicesTeam: {
       relationships :(parent: any) => parent
      },
      ServicesTeamRelationships: {
        
        
        ServicesPerson_team_position_assignments: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/person_team_position_assignments" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["person","team_position"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["person","team_position"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesPlan_people: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/plan_people" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["declined_plan_times","person","plan","team"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["declined_plan_times","person","plan","team"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesTeam_leaders: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/team_leaders" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["people","team"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["people","team"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesTeam_positions: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/team_positions" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["tags","team"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["tags","team"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      ServicesTeamPosition: {
       relationships :(parent: any) => parent
      },
      ServicesTeamPositionRelationships: {
        
        
        ServicesPerson_team_position_assignments: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/person_team_position_assignments" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["person","team_position"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["person","team_position"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesTags: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/tags" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      ServicesPlanPerson: {
       relationships :(parent: any) => parent
      },
      ServicesPlanPersonRelationships: {
        
        
        ServicesPlan: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/plan" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["contributors","my_schedules","plan_times","series"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["contributors","my_schedules","plan_times","series"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesPlan_person_times: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/plan_person_times" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesDeclined_plan_times: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/declined_plan_times" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["split_team_rehearsal_assignments"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["split_team_rehearsal_assignments"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesPlan_times: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/plan_times" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["split_team_rehearsal_assignments"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["split_team_rehearsal_assignments"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      ServicesSeries: {
       relationships :(parent: any) => parent
      },
      ServicesSeriesRelationships: {
        
        
        ServicesPlans: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/plans" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["contributors","my_schedules","plan_times","series"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["contributors","my_schedules","plan_times","series"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      ServicesPlanNote: {
       relationships :(parent: any) => parent
      },
      ServicesPlanNoteRelationships: {
        
        
        ServicesPlan_note_category: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/plan_note_category" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      ServicesNeededPosition: {
       relationships :(parent: any) => parent
      },
      ServicesNeededPositionRelationships: {
        
        
        ServicesTime: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/time" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["split_team_rehearsal_assignments"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["split_team_rehearsal_assignments"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      ServicesSchedule: {
       relationships :(parent: any) => parent
      },
      ServicesScheduleRelationships: {
        
        
        ServicesDeclined_plan_times: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/declined_plan_times" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["split_team_rehearsal_assignments"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["split_team_rehearsal_assignments"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesPlan_times: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/plan_times" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["split_team_rehearsal_assignments"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["split_team_rehearsal_assignments"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      ServicesSignupSheet: {
       relationships :(parent: any) => parent
      },
      ServicesSignupSheetRelationships: {
        
        
        ServicesScheduled_people: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/scheduled_people" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        ServicesSignup_sheet_metadata: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/signup_sheet_metadata" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      ServicesAvailableSignup: {
       relationships :(parent: any) => parent
      },
      ServicesAvailableSignupRelationships: {
        
        
        ServicesSignup_sheets: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/signup_sheets" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["scheduled_people","signup_sheet_metadata"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["scheduled_people","signup_sheet_metadata"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      ServicesPlanTime: {
       relationships :(parent: any) => parent
      },
      ServicesPlanTimeRelationships: {
        
        
        ServicesSplit_team_rehearsal_assignments: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/split_team_rehearsal_assignments" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      ServicesTagGroup: {
       relationships :(parent: any) => parent
      },
      ServicesTagGroupRelationships: {
        
        
        ServicesTags: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/tags" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      ServicesPersonTeamPositionAssignment: {
       relationships :(parent: any) => parent
      },
      ServicesPersonTeamPositionAssignmentRelationships: {
        
        
        ServicesTeam_position: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/team_position" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["tags","team"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["tags","team"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      ServicesAttachment: {
       relationships :(parent: any) => parent
      },
      ServicesAttachmentRelationships: {
        
        
        ServicesZooms: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/zooms" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      ResourcesEvent: {
       relationships :(parent: any) => parent
      },
      ResourcesEventRelationships: {
        
        
        ResourcesEvent_connections: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/event_connections" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      ResourcesEventInstance: {
       relationships :(parent: any) => parent
      },
      ResourcesEventInstanceRelationships: {
        
        
        ResourcesEvent_times: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/event_times" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["event"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["event"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      ResourcesPerson: {
       relationships :(parent: any) => parent
      },
      ResourcesPersonRelationships: {
        
        
        ResourcesOrganization: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/organization" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      ResourcesResourceApprovalGroup: {
       relationships :(parent: any) => parent
      },
      ResourcesResourceApprovalGroupRelationships: {
        
        
        ResourcesRequired_approvals: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/required_approvals" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["resource"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["resource"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      ResourcesResource: {
       relationships :(parent: any) => parent
      },
      ResourcesResourceRelationships: {
        
        
        ResourcesRequired_approvals: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/required_approvals" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["resource"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["resource"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      ResourcesRoomSetup: {
       relationships :(parent: any) => parent
      },
      ResourcesRoomSetupRelationships: {
        
        
        ResourcesResource_suggestions: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/resource_suggestions" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["resource"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["resource"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      GivingDesignationRefund: {
       relationships :(parent: any) => parent
      },
      GivingDesignationRefundRelationships: {
        
        
        GivingDesignation: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/designation" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      GivingDonation: {
       relationships :(parent: any) => parent
      },
      GivingDonationRelationships: {
        
        
        GivingDesignations: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/designations" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        GivingNote: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/note" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        GivingRefund: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/refund" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["designation_refunds"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["designation_refunds"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      GivingRefund: {
       relationships :(parent: any) => parent
      },
      GivingRefundRelationships: {
        
        
        GivingDesignation_refunds: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/designation_refunds" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["designation"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["designation"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      GivingPerson: {
       relationships :(parent: any) => parent
      },
      GivingPersonRelationships: {
        
        
        GivingPayment_methods: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/payment_methods" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        GivingPledges: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/pledges" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["joint_giver","pledge_campaign"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["joint_giver","pledge_campaign"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      GivingRecurringDonation: {
       relationships :(parent: any) => parent
      },
      GivingRecurringDonationRelationships: {
        
        
        GivingPayment_method: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/payment_method" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, []).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, []);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          ,
        
        GivingDesignations: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/designations" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["fund"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["fund"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      GivingPledgeCampaign: {
       relationships :(parent: any) => parent
      },
      GivingPledgeCampaignRelationships: {
        
        
        GivingPledges: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/pledges" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["joint_giver","pledge_campaign"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["joint_giver","pledge_campaign"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
    ,
      GivingPledge: {
       relationships :(parent: any) => parent
      },
      GivingPledgeRelationships: {
        
        
        GivingPledge_campaign: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          
          const url = parent?.links?.self + "/pledge_campaign" 
          const { limit = 10, where, order } = params;
          const whereArg = where ? formatWhere(where) : "&where[status]=active";
          const orderArg = `&order=${order?.sort === "desc" ? "-" : ""}${order?.field !== undefined ? order?.field : ""}`;
          const includes = getRelatedFieldNames(info, ["fund"]).join(",");
            
          let response = await getJSONfromUrl(url,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Basic " +
                  btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
              },
            }
          );

          let result = response.data.map((e: { attributes: any; id: any }) => {
            const relatedData = zipRelatedData(response, e, ["fund"]);
            return {
              ...e,
              attributes: {
                ...e.attributes,
                id: e.id,
              },
              relationships: relatedData,
            };
          })
          return result || null;
        }
          
      }
      }