const getRelatedIds=(type:string|number,item:{relationships:{[x:string]:{data:any}}}):string[]|null=>{const data=item?.relationships?.[type]?.data;if(!data)return null;return data?.length?data?.map((f:{id:any})=>f.id):[data.id]};const getJSONfromUrl=async(url:RequestInfo|URL,options?:RequestInit):Promise<any>=>{const response=await fetch(url,options).then(res=>res.json()).catch(err=>{console.log(err)});if(response.errors)throw new Error(JSON.stringify({detail:response.errors[0].detail,url},null,4));return response};type RelatedData={included:{id:string}[]};const getRelatedData=(data:RelatedData,Ids:string[]=[]):{id:string}[]|null=>(Ids&&data.included.filter(({id})=>Ids?.includes(id)))||null;const getRelatedFieldNames=(info:{fieldNodes:{selectionSet:{selections:any[]}}[]},includesArray:string[]):string[]=>{const attributesArray=info?.fieldNodes[0].selectionSet?.selections?.find((e:any)=>e.name.value==="relationships");if(!attributesArray)return[];const selectedNodes=attributesArray.selectionSet?.selections?.filter((f:any)=>includesArray.includes(f.name.value));return selectedNodes.map((e:{name:{value:any}})=>e.name.value)};const zipRelatedData=(data:RelatedData,item:any,includesArray:(string|number)[]):{[key:string]:any}=>{const relatedData:{[key:string]:any}={};includesArray.map(type=>{const ids=getRelatedIds(type,item);relatedData[type]=getRelatedData(data,ids||[])||[]});return relatedData};const formatWhere=(where:{[s:string]:unknown}|ArrayLike<unknown>):string=>where?Object.entries(where).map(([key,value])=>`&where[${key}]=${value}`).join(""):"";const fetchData=async(endpoint:string,params:{limit?:number;where?:any;order?:any;id?:string},info:any,includesArray:string[],context:any):Promise<any>=>{const{limit=10,where,order,id}=params;const whereArg=where?formatWhere(where):"&where[status]=active";const orderArg=order?`&order=${order.sort==="desc"? "-":""}${order.field||""}`:"";const includes=getRelatedFieldNames(info,includesArray).join(",");const url=id?`${endpoint}/${id}?per_page=${limit}&include=${includes}${whereArg}${orderArg}`:`${endpoint}?per_page=${limit}&include=${includes}${whereArg}${orderArg}`;const response=await getJSONfromUrl(url,{method:"GET",headers:{Authorization:"Basic "+btoa(process.env.PCO_APP_ID+":"+process.env.PCO_SECRET),},});return response.data.map((e:{attributes:any;id:any})=>{const relatedData=zipRelatedData(response,e,includesArray);return{...e,attributes:{...e.attributes,id:e.id,},relationships:relatedData,};})||[];};

  export const resolvers = { Query:  {
          CalendarAttachment: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/calendar/v2/attachments", params, info, ["event"], context);

            },
            CalendarAttachmentById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/calendar/v2/attachments", params, info, ["event"], context);
            },
      

          CalendarConflict: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/calendar/v2/conflicts", params, info, ["resolved_by","resource","winner"], context);

            },
            CalendarConflictById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/calendar/v2/conflicts", params, info, ["resolved_by","resource","winner"], context);
            },
      

          CalendarEvent: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/calendar/v2/events", params, info, ["attachments","feed","owner","tags"], context);

            },
            CalendarEventById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/calendar/v2/events", params, info, ["attachments","feed","owner","tags"], context);
            },
      

          CalendarEventInstance: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/calendar/v2/event_instances", params, info, ["event","event_times","resource_bookings","tags"], context);

            },
            CalendarEventInstanceById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/calendar/v2/event_instances", params, info, ["event","event_times","resource_bookings","tags"], context);
            },
      

          CalendarEventResourceRequest: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/calendar/v2/event_resource_requests", params, info, ["created_by","event","resource","room_setup","updated_by"], context);

            },
            CalendarEventResourceRequestById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/calendar/v2/event_resource_requests", params, info, ["created_by","event","resource","room_setup","updated_by"], context);
            },
      

          CalendarFeed: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/calendar/v2/feeds", params, info, [], context);

            },
            CalendarFeedById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/calendar/v2/feeds", params, info, [], context);
            },
      

          CalendarJobStatus: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/calendar/v2/job_statuses", params, info, [], context);

            },
            CalendarJobStatusById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/calendar/v2/job_statuses", params, info, [], context);
            },
      

          CalendarPerson: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/calendar/v2/people", params, info, ["organization"], context);

            },
            CalendarPersonById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/calendar/v2/people", params, info, ["organization"], context);
            },
      

          CalendarReportTemplate: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/calendar/v2/report_templates", params, info, [], context);

            },
            CalendarReportTemplateById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/calendar/v2/report_templates", params, info, [], context);
            },
      

          CalendarResource: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/calendar/v2/resources", params, info, ["resource_approval_groups","resource_folder","resource_questions","room_setups"], context);

            },
            CalendarResourceById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/calendar/v2/resources", params, info, ["resource_approval_groups","resource_folder","resource_questions","room_setups"], context);
            },
      

          CalendarResourceApprovalGroup: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/calendar/v2/resource_approval_groups", params, info, ["people","resources"], context);

            },
            CalendarResourceApprovalGroupById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/calendar/v2/resource_approval_groups", params, info, ["people","resources"], context);
            },
      

          CalendarResourceBooking: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/calendar/v2/resource_bookings", params, info, ["event_instance","event_resource_request","resource"], context);

            },
            CalendarResourceBookingById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/calendar/v2/resource_bookings", params, info, ["event_instance","event_resource_request","resource"], context);
            },
      

          CalendarResourceFolder: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/calendar/v2/resource_folders", params, info, ["resources"], context);

            },
            CalendarResourceFolderById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/calendar/v2/resource_folders", params, info, ["resources"], context);
            },
      

          CalendarResourceQuestion: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/calendar/v2/resource_questions", params, info, [], context);

            },
            CalendarResourceQuestionById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/calendar/v2/resource_questions", params, info, [], context);
            },
      

          CalendarRoomSetup: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/calendar/v2/room_setups", params, info, ["containing_resource","resource_suggestions"], context);

            },
            CalendarRoomSetupById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/calendar/v2/room_setups", params, info, ["containing_resource","resource_suggestions"], context);
            },
      

          CalendarTag: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/calendar/v2/tags", params, info, ["tag_group"], context);

            },
            CalendarTagById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/calendar/v2/tags", params, info, ["tag_group"], context);
            },
      

          CalendarTagGroup: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/calendar/v2/tag_groups", params, info, ["events","tags"], context);

            },
            CalendarTagGroupById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/calendar/v2/tag_groups", params, info, ["events","tags"], context);
            },
      

          CheckinsCheckIn: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/check-ins/v2/check_ins", params, info, ["check_in_times","checked_in_at","checked_in_by","checked_out_by","event","event_period","event_times","locations","options","person"], context);

            },
            CheckinsCheckInById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/check-ins/v2/check_ins", params, info, ["check_in_times","checked_in_at","checked_in_by","checked_out_by","event","event_period","event_times","locations","options","person"], context);
            },
      

          CheckinsEvent: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/check-ins/v2/events", params, info, ["attendance_types"], context);

            },
            CheckinsEventById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/check-ins/v2/events", params, info, ["attendance_types"], context);
            },
      

          CheckinsEventTime: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/check-ins/v2/event_times", params, info, ["event","event_period","headcounts"], context);

            },
            CheckinsEventTimeById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/check-ins/v2/event_times", params, info, ["event","event_period","headcounts"], context);
            },
      

          CheckinsHeadcount: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/check-ins/v2/headcounts", params, info, ["attendance_type","event_time"], context);

            },
            CheckinsHeadcountById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/check-ins/v2/headcounts", params, info, ["attendance_type","event_time"], context);
            },
      

          CheckinsLabel: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/check-ins/v2/labels", params, info, [], context);

            },
            CheckinsLabelById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/check-ins/v2/labels", params, info, [], context);
            },
      

          CheckinsOption: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/check-ins/v2/options", params, info, ["label"], context);

            },
            CheckinsOptionById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/check-ins/v2/options", params, info, ["label"], context);
            },
      

          CheckinsPass: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/check-ins/v2/passes", params, info, ["person"], context);

            },
            CheckinsPassById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/check-ins/v2/passes", params, info, ["person"], context);
            },
      

          CheckinsPerson: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/check-ins/v2/people", params, info, ["organization"], context);

            },
            CheckinsPersonById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/check-ins/v2/people", params, info, ["organization"], context);
            },
      

          CheckinsStation: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/check-ins/v2/stations", params, info, ["event","location","print_station","theme"], context);

            },
            CheckinsStationById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/check-ins/v2/stations", params, info, ["event","location","print_station","theme"], context);
            },
      

          CheckinsTheme: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/check-ins/v2/themes", params, info, [], context);

            },
            CheckinsThemeById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/check-ins/v2/themes", params, info, [], context);
            },
      

          GivingBatch: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/giving/v2/batches", params, info, ["batch_group","owner"], context);

            },
            GivingBatchById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/giving/v2/batches", params, info, ["batch_group","owner"], context);
            },
      

          GivingBatchGroup: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/giving/v2/batch_groups", params, info, ["owner"], context);

            },
            GivingBatchGroupById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/giving/v2/batch_groups", params, info, ["owner"], context);
            },
      

          GivingCampus: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/giving/v2/campuses", params, info, [], context);

            },
            GivingCampusById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/giving/v2/campuses", params, info, [], context);
            },
      

          GivingDonation: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/giving/v2/donations", params, info, ["designations","labels","note","refund"], context);

            },
            GivingDonationById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/giving/v2/donations", params, info, ["designations","labels","note","refund"], context);
            },
      

          GivingFund: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/giving/v2/funds", params, info, [], context);

            },
            GivingFundById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/giving/v2/funds", params, info, [], context);
            },
      

          GivingLabel: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/giving/v2/labels", params, info, [], context);

            },
            GivingLabelById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/giving/v2/labels", params, info, [], context);
            },
      

          GivingPaymentSource: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/giving/v2/payment_sources", params, info, [], context);

            },
            GivingPaymentSourceById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/giving/v2/payment_sources", params, info, [], context);
            },
      

          GivingPerson: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/giving/v2/people", params, info, [], context);

            },
            GivingPersonById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/giving/v2/people", params, info, [], context);
            },
      

          GivingRecurringDonation: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/giving/v2/recurring_donations", params, info, ["designations"], context);

            },
            GivingRecurringDonationById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/giving/v2/recurring_donations", params, info, ["designations"], context);
            },
      

          GroupsEvent: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/groups/v2/events", params, info, ["group","location"], context);

            },
            GroupsEventById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/groups/v2/events", params, info, ["group","location"], context);
            },
      

          GroupsGroup: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/groups/v2/groups", params, info, ["enrollment","group_type","location"], context);

            },
            GroupsGroupById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/groups/v2/groups", params, info, ["enrollment","group_type","location"], context);
            },
      

          GroupsGroupApplication: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/groups/v2/group_applications", params, info, ["group","person"], context);

            },
            GroupsGroupApplicationById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/groups/v2/group_applications", params, info, ["group","person"], context);
            },
      

          GroupsGroupType: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/groups/v2/group_types", params, info, [], context);

            },
            GroupsGroupTypeById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/groups/v2/group_types", params, info, [], context);
            },
      

          GroupsPerson: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/groups/v2/people", params, info, [], context);

            },
            GroupsPersonById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/groups/v2/people", params, info, [], context);
            },
      

          GroupsTagGroup: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/groups/v2/tag_groups", params, info, [], context);

            },
            GroupsTagGroupById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/groups/v2/tag_groups", params, info, [], context);
            },
      

          PeopleAddress: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/addresses", params, info, [], context);

            },
            PeopleAddressById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/addresses", params, info, [], context);
            },
      

          PeopleAnniversaryCouples: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/anniversary_couples", params, info, [], context);

            },
            PeopleAnniversaryCouplesById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/anniversary_couples", params, info, [], context);
            },
      

          PeopleApp: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/apps", params, info, [], context);

            },
            PeopleAppById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/apps", params, info, [], context);
            },
      

          PeopleBackgroundCheck: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/background_checks", params, info, ["person"], context);

            },
            PeopleBackgroundCheckById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/background_checks", params, info, ["person"], context);
            },
      

          PeopleBirthdayPeople: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/birthday_people", params, info, [], context);

            },
            PeopleBirthdayPeopleById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/birthday_people", params, info, [], context);
            },
      

          PeopleCampus: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/campuses", params, info, ["lists","service_times"], context);

            },
            PeopleCampusById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/campuses", params, info, ["lists","service_times"], context);
            },
      

          PeopleCarrier: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/carriers", params, info, [], context);

            },
            PeopleCarrierById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/carriers", params, info, [], context);
            },
      

          PeopleEmail: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/emails", params, info, [], context);

            },
            PeopleEmailById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/emails", params, info, [], context);
            },
      

          PeopleFieldDatum: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/field_data", params, info, ["field_definition","field_option","tab"], context);

            },
            PeopleFieldDatumById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/field_data", params, info, ["field_definition","field_option","tab"], context);
            },
      

          PeopleFieldDefinition: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/field_definitions", params, info, ["field_options","tab"], context);

            },
            PeopleFieldDefinitionById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/field_definitions", params, info, ["field_options","tab"], context);
            },
      

          PeopleForm: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/forms", params, info, ["campus"], context);

            },
            PeopleFormById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/forms", params, info, ["campus"], context);
            },
      

          PeopleHousehold: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/households", params, info, ["people"], context);

            },
            PeopleHouseholdById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/households", params, info, ["people"], context);
            },
      

          PeopleInactiveReason: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/inactive_reasons", params, info, [], context);

            },
            PeopleInactiveReasonById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/inactive_reasons", params, info, [], context);
            },
      

          PeopleList: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/lists", params, info, ["campus","category","created_by","mailchimp_sync_status","people","rules","shares","updated_by"], context);

            },
            PeopleListById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/lists", params, info, ["campus","category","created_by","mailchimp_sync_status","people","rules","shares","updated_by"], context);
            },
      

          PeopleListCategory: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/list_categories", params, info, ["lists"], context);

            },
            PeopleListCategoryById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/list_categories", params, info, ["lists"], context);
            },
      

          PeopleMaritalStatus: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/marital_statuses", params, info, [], context);

            },
            PeopleMaritalStatusById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/marital_statuses", params, info, [], context);
            },
      

          PeopleMessage: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/messages", params, info, ["message_group","to"], context);

            },
            PeopleMessageById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/messages", params, info, ["message_group","to"], context);
            },
      

          PeopleMessageGroup: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/message_groups", params, info, ["app","from","messages"], context);

            },
            PeopleMessageGroupById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/message_groups", params, info, ["app","from","messages"], context);
            },
      

          PeopleNamePrefix: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/name_prefixes", params, info, [], context);

            },
            PeopleNamePrefixById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/name_prefixes", params, info, [], context);
            },
      

          PeopleNameSuffix: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/name_suffixes", params, info, [], context);

            },
            PeopleNameSuffixById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/name_suffixes", params, info, [], context);
            },
      

          PeopleNote: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/notes", params, info, ["category","created_by","person"], context);

            },
            PeopleNoteById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/notes", params, info, ["category","created_by","person"], context);
            },
      

          PeopleNoteCategory: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/note_categories", params, info, ["shares","subscribers","subscriptions"], context);

            },
            PeopleNoteCategoryById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/note_categories", params, info, ["shares","subscribers","subscriptions"], context);
            },
      

          PeopleNoteCategorySubscription: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/note_category_subscriptions", params, info, [], context);

            },
            PeopleNoteCategorySubscriptionById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/note_category_subscriptions", params, info, [], context);
            },
      

          PeopleOrganizationStatistics: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/organization_statistics", params, info, [], context);

            },
            PeopleOrganizationStatisticsById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/organization_statistics", params, info, [], context);
            },
      

          PeoplePeopleImport: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/people_imports", params, info, [], context);

            },
            PeoplePeopleImportById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/people_imports", params, info, [], context);
            },
      

          PeoplePerson: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/people", params, info, ["addresses","emails","field_data","households","inactive_reason","marital_status","name_prefix","name_suffix","organization","person_apps","phone_numbers","platform_notifications","primary_campus","school","social_profiles"], context);

            },
            PeoplePersonById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/people", params, info, ["addresses","emails","field_data","households","inactive_reason","marital_status","name_prefix","name_suffix","organization","person_apps","phone_numbers","platform_notifications","primary_campus","school","social_profiles"], context);
            },
      

          PeoplePersonMerger: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/person_mergers", params, info, [], context);

            },
            PeoplePersonMergerById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/person_mergers", params, info, [], context);
            },
      

          PeoplePhoneNumber: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/phone_numbers", params, info, [], context);

            },
            PeoplePhoneNumberById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/phone_numbers", params, info, [], context);
            },
      

          PeopleReport: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/reports", params, info, ["created_by","updated_by"], context);

            },
            PeopleReportById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/reports", params, info, ["created_by","updated_by"], context);
            },
      

          PeopleSchoolOption: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/school_options", params, info, [], context);

            },
            PeopleSchoolOptionById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/school_options", params, info, [], context);
            },
      

          PeopleSocialProfile: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/social_profiles", params, info, ["person"], context);

            },
            PeopleSocialProfileById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/social_profiles", params, info, ["person"], context);
            },
      

          PeopleTab: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/tabs", params, info, ["field_definitions","field_options"], context);

            },
            PeopleTabById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/tabs", params, info, ["field_definitions","field_options"], context);
            },
      

          PeopleWorkflow: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/workflows", params, info, ["category","shares","steps"], context);

            },
            PeopleWorkflowById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/people/v2/workflows", params, info, ["category","shares","steps"], context);
            },
      

          PublishingChannel: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/publishing/v2/channels", params, info, ["channel_default_episode_resources","channel_default_times","current_episode"], context);

            },
            PublishingChannelById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/publishing/v2/channels", params, info, ["channel_default_episode_resources","channel_default_times","current_episode"], context);
            },
      

          PublishingEpisode: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/publishing/v2/episodes", params, info, ["channel","episode_resources","episode_times","series"], context);

            },
            PublishingEpisodeById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/publishing/v2/episodes", params, info, ["channel","episode_resources","episode_times","series"], context);
            },
      

          PublishingSeries: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/publishing/v2/series", params, info, ["channel"], context);

            },
            PublishingSeriesById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/publishing/v2/series", params, info, ["channel"], context);
            },
      

          ServicesAttachmentType: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/services/v2/attachment_types", params, info, [], context);

            },
            ServicesAttachmentTypeById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/services/v2/attachment_types", params, info, [], context);
            },
      

          ServicesChat: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/services/v2/chats", params, info, [], context);

            },
            ServicesChatById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/services/v2/chats", params, info, [], context);
            },
      

          ServicesEmailTemplate: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/services/v2/email_templates", params, info, [], context);

            },
            ServicesEmailTemplateById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/services/v2/email_templates", params, info, [], context);
            },
      

          ServicesFolder: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/services/v2/folders", params, info, ["service_types"], context);

            },
            ServicesFolderById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/services/v2/folders", params, info, ["service_types"], context);
            },
      

          ServicesMedia: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/services/v2/media", params, info, ["attachments"], context);

            },
            ServicesMediaById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/services/v2/media", params, info, ["attachments"], context);
            },
      

          ServicesOrganization: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/services/v2", params, info, [], context);

            },
            ServicesOrganizationById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/services/v2", params, info, [], context);
            },
      

          ServicesPerson: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/services/v2/people", params, info, ["emails","team_leaders"], context);

            },
            ServicesPersonById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/services/v2/people", params, info, ["emails","team_leaders"], context);
            },
      

          ServicesReportTemplate: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/services/v2/report_templates", params, info, [], context);

            },
            ServicesReportTemplateById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/services/v2/report_templates", params, info, [], context);
            },
      

          ServicesSeries: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/services/v2/series", params, info, [], context);

            },
            ServicesSeriesById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/services/v2/series", params, info, [], context);
            },
      

          ServicesServiceType: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/services/v2/service_types", params, info, ["time_preference_options"], context);

            },
            ServicesServiceTypeById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/services/v2/service_types", params, info, ["time_preference_options"], context);
            },
      

          ServicesSong: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/services/v2/songs", params, info, [], context);

            },
            ServicesSongById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/services/v2/songs", params, info, [], context);
            },
      

          ServicesTagGroup: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/services/v2/tag_groups", params, info, ["folder","tags"], context);

            },
            ServicesTagGroupById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/services/v2/tag_groups", params, info, ["folder","tags"], context);
            },
      

          ServicesTeam: async (
              parent: any,
              params: { limit?: 10 | undefined; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/services/v2/teams", params, info, ["people","person_team_position_assignments","service_type","team_leaders","team_positions"], context);

            },
            ServicesTeamById: async (
              parent: any,
              params: { limit?: 10 | undefined; id: string; where: any; order: any },
              context: any,
              info: any
            ) => {
              return fetchData("https://api.planningcenteronline.com/services/v2/teams", params, info, ["people","person_team_position_assignments","service_type","team_leaders","team_positions"], context);
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
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
        }
          
      }
    ,
      CheckinsEvent: {
       relationships :(parent: any) => parent
      },
      CheckinsEventRelationships: {
        

        CheckinsAttendance_types: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/attendance_types"
          return fetchData(url, params, info, [], context);
        }
          ,

        CheckinsEvent_labels: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/event_labels"
          return fetchData(url, params, info, [], context);
        }
          ,

        CheckinsEvent_periods: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/event_periods"
          return fetchData(url, params, info, [], context);
        }
          ,

        CheckinsLocations: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/locations"
          return fetchData(url, params, info, [], context);
        }
          ,

        CheckinsPerson_events: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/person_events"
          return fetchData(url, params, info, [], context);
        }
          
      }
    ,
      CheckinsHeadcount: {
       relationships :(parent: any) => parent
      },
      CheckinsHeadcountRelationships: {
        

        CheckinsAttendance_type: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/attendance_type"
          return fetchData(url, params, info, [], context);
        }
          
      }
    ,
      CheckinsCheckIn: {
       relationships :(parent: any) => parent
      },
      CheckinsCheckInRelationships: {
        

        CheckinsCheck_in_group: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/check_in_group"
          return fetchData(url, params, info, [], context);
        }
          ,

        CheckinsCheck_in_times: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/check_in_times"
          return fetchData(url, params, info, [], context);
        }
          ,

        CheckinsEvent_period: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/event_period"
          return fetchData(url, params, info, [], context);
        }
          ,

        CheckinsLocations: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/locations"
          return fetchData(url, params, info, [], context);
        }
          
      }
    ,
      CheckinsStation: {
       relationships :(parent: any) => parent
      },
      CheckinsStationRelationships: {
        

        CheckinsCheck_in_groups: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/check_in_groups"
          return fetchData(url, params, info, [], context);
        }
          ,

        CheckinsLocation: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/location"
          return fetchData(url, params, info, [], context);
        }
          
      }
    ,
      CheckinsLabel: {
       relationships :(parent: any) => parent
      },
      CheckinsLabelRelationships: {
        

        CheckinsEvent_labels: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/event_labels"
          return fetchData(url, params, info, [], context);
        }
          ,

        CheckinsLocation_labels: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/location_labels"
          return fetchData(url, params, info, [], context);
        }
          
      }
    ,
      CheckinsCheckInGroup: {
       relationships :(parent: any) => parent
      },
      CheckinsCheckInGroupRelationships: {
        

        CheckinsEvent_period: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/event_period"
          return fetchData(url, params, info, [], context);
        }
          
      }
    ,
      CheckinsEventTime: {
       relationships :(parent: any) => parent
      },
      CheckinsEventTimeRelationships: {
        

        CheckinsEvent_period: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/event_period"
          return fetchData(url, params, info, [], context);
        }
          ,

        CheckinsAvailable_locations: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/available_locations"
          return fetchData(url, params, info, [], context);
        }
          ,

        CheckinsLocation_event_times: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/location_event_times"
          return fetchData(url, params, info, [], context);
        }
          
      }
    ,
      CheckinsLocationEventPeriod: {
       relationships :(parent: any) => parent
      },
      CheckinsLocationEventPeriodRelationships: {
        

        CheckinsEvent_period: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/event_period"
          return fetchData(url, params, info, [], context);
        }
          ,

        CheckinsLocation: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/location"
          return fetchData(url, params, info, [], context);
        }
          
      }
    ,
      CheckinsLocationEventTime: {
       relationships :(parent: any) => parent
      },
      CheckinsLocationEventTimeRelationships: {
        

        CheckinsLocation: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/location"
          return fetchData(url, params, info, [], context);
        }
          
      }
    ,
      CheckinsLocationLabel: {
       relationships :(parent: any) => parent
      },
      CheckinsLocationLabelRelationships: {
        

        CheckinsLocation: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/location"
          return fetchData(url, params, info, [], context);
        }
          
      }
    ,
      CheckinsLocation: {
       relationships :(parent: any) => parent
      },
      CheckinsLocationRelationships: {
        

        CheckinsLocations: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/locations"
          return fetchData(url, params, info, [], context);
        }
          ,

        CheckinsParent: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/parent"
          return fetchData(url, params, info, [], context);
        }
          ,

        CheckinsLocation_event_periods: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/location_event_periods"
          return fetchData(url, params, info, [], context);
        }
          ,

        CheckinsLocation_event_times: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/location_event_times"
          return fetchData(url, params, info, [], context);
        }
          ,

        CheckinsLocation_labels: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/location_labels"
          return fetchData(url, params, info, [], context);
        }
          
      }
    ,
      CheckinsEventPeriod: {
       relationships :(parent: any) => parent
      },
      CheckinsEventPeriodRelationships: {
        

        CheckinsLocation_event_periods: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/location_event_periods"
          return fetchData(url, params, info, [], context);
        }
          
      }
    ,
      CheckinsPerson: {
       relationships :(parent: any) => parent
      },
      CheckinsPersonRelationships: {
        

        CheckinsOrganization: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/organization"
          return fetchData(url, params, info, [], context);
        }
          ,

        CheckinsPerson_events: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/person_events"
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
        }
          ,

        GivingNote: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/note"
          return fetchData(url, params, info, [], context);
        }
          ,

        GivingRefund: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/refund"
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
        }
          ,

        GivingPledges: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/pledges"
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
        }
          ,

        GivingDesignations: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/designations"
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
        }
          ,

        GroupsNotes: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/notes"
          return fetchData(url, params, info, [], context);
        }
          ,

        GroupsLocation: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/location"
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
        }
          ,

        GroupsLocation: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/location"
          return fetchData(url, params, info, [], context);
        }
          ,

        GroupsMemberships: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/memberships"
          return fetchData(url, params, info, [], context);
        }
          ,

        GroupsResources: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/resources"
          return fetchData(url, params, info, [], context);
        }
          ,

        GroupsTags: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/tags"
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
        }
          ,

        GroupsVisit: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/visit"
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
        }
          ,

        PeopleHousehold_memberships: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/household_memberships"
          return fetchData(url, params, info, [], context);
        }
          ,

        PeopleOrganization: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/organization"
          return fetchData(url, params, info, [], context);
        }
          ,

        PeoplePerson_apps: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/person_apps"
          return fetchData(url, params, info, [], context);
        }
          ,

        PeoplePlatform_notifications: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/platform_notifications"
          return fetchData(url, params, info, [], context);
        }
          ,

        PeopleWorkflow_cards: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/workflow_cards"
          return fetchData(url, params, info, [], context);
        }
          ,

        PeopleWorkflow_shares: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/workflow_shares"
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
        }
          ,

        PeopleForm_submissions: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/form_submissions"
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
        }
          ,

        PeopleForm_submission_values: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/form_submission_values"
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
        }
          ,

        PeopleShares: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/shares"
          return fetchData(url, params, info, [], context);
        }
          ,

        PeopleStar: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/star"
          return fetchData(url, params, info, [], context);
        }
          ,

        PeopleMailchimp_sync_status: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/mailchimp_sync_status"
          return fetchData(url, params, info, [], context);
        }
          ,

        PeopleRules: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/rules"
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
        }
          ,

        PeopleHistories: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/histories"
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
        }
          ,

        PeopleCategory: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/category"
          return fetchData(url, params, info, [], context);
        }
          ,

        PeopleShares: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/shares"
          return fetchData(url, params, info, [], context);
        }
          ,

        PeopleSteps: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/steps"
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
        }
          ,

        PeopleNotes: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/notes"
          return fetchData(url, params, info, [], context);
        }
          ,

        PeopleCurrent_step: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/current_step"
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
        }
          
      }
    ,
      PublishingChannel: {
       relationships :(parent: any) => parent
      },
      PublishingChannelRelationships: {
        

        PublishingChannel_default_episode_resources: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/channel_default_episode_resources"
          return fetchData(url, params, info, [], context);
        }
          ,

        PublishingChannel_default_times: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/channel_default_times"
          return fetchData(url, params, info, [], context);
        }
          ,

        PublishingNext_times: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/next_times"
          return fetchData(url, params, info, [], context);
        }
          ,

        PublishingStatistics: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/statistics"
          return fetchData(url, params, info, [], context);
        }
          
      }
    ,
      PublishingEpisode: {
       relationships :(parent: any) => parent
      },
      PublishingEpisodeRelationships: {
        

        PublishingEpisode_resources: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/episode_resources"
          return fetchData(url, params, info, [], context);
        }
          ,

        PublishingEpisode_times: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/episode_times"
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesAttachments: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/attachments"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesSelected_attachment: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/selected_attachment"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesSelected_background: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/selected_background"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesCustom_slides: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/custom_slides"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesItem_notes: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/item_notes"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesItem_times: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/item_times"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesKey: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/key"
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesAttachments: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/attachments"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesLast_scheduled_item: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/last_scheduled_item"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesSong_schedules: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/song_schedules"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesTags: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/tags"
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesAttachments: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/attachments"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesKeys: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/keys"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesTags: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/tags"
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesMedia_schedules: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/media_schedules"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesTags: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/tags"
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesAttachments: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/attachments"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesAttendances: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/attendances"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesContributors: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/contributors"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesItems: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/items"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesLive: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/live"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesNeeded_positions: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/needed_positions"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesNext_plan: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/next_plan"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesPrevious_plan: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/previous_plan"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesNotes: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/notes"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesTeam_members: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/team_members"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesPlan_times: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/plan_times"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesMy_schedules: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/my_schedules"
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesItem_note_categories: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/item_note_categories"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesLayouts: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/layouts"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesLive_controllers: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/live_controllers"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesPlans: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/plans"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesUnscoped_plans: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/unscoped_plans"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesPlan_note_categories: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/plan_note_categories"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesPlan_templates: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/plan_templates"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesPlan_times: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/plan_times"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesPublic_view: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/public_view"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesTeam_positions: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/team_positions"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesTime_preference_options: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/time_preference_options"
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesBlockouts: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/blockouts"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesEmails: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/emails"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesPerson_team_position_assignments: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/person_team_position_assignments"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesPlan_people: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/plan_people"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesSchedules: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/schedules"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesScheduling_preferences: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/scheduling_preferences"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesTags: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/tags"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesTeam_leaders: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/team_leaders"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesText_settings: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/text_settings"
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesBlockout_exceptions: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/blockout_exceptions"
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesCurrent_item_time: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/current_item_time"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesNext_item_time: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/next_item_time"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesWatchable_plans: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/watchable_plans"
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesNotes: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/notes"
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesPlan_people: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/plan_people"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesTeam_leaders: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/team_leaders"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesTeam_positions: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/team_positions"
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesTags: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/tags"
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesPlan_person_times: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/plan_person_times"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesDeclined_plan_times: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/declined_plan_times"
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesPlan_times: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/plan_times"
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesPlan_times: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/plan_times"
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
        }
          ,

        ServicesSignup_sheet_metadata: async (
          parent: any,
          params: { limit?: 10 | undefined; id?: string; where: any; order: any },
          context: any,
          info: any
        ) => {
          const url = parent?.links?.self + "/signup_sheet_metadata"
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
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
          return fetchData(url, params, info, [], context);
        }
          
      }
      }