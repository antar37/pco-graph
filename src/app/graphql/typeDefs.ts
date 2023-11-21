import gql from "graphql-tag";

const typeDefs = gql`
  enum CalendarAttachmentOrderByEnum {
    id
    content_type
    created_at
    description
    file_size
    name
    updated_at
    url
  }

  input CalendarAttachmentOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: CalendarAttachmentOrderByEnum
  }

  input CalendarAttachmentWhereAttributes {
    content_type: String
    created_at: String
    description: String
    file_size: String
    name: String
    updated_at: String
  }

  type CalendarAttachmentRelationships {
    CalendarEvent: [CalendarEvent]
  }

  type CalendarAttachmentAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    content_type: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: string
    """
    description: String

    """
    example: 1
    """
    file_size: String

    """
    example: string
    """
    name: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    url: String
  }

  type CalendarAttachment {
    id: ID!
    attributes: CalendarAttachmentAttributes
    relationships: CalendarAttachmentRelationships
  }

  enum CalendarConflictOrderByEnum {
    id
    created_at
    note
    resolved_at
    updated_at
  }

  input CalendarConflictOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: CalendarConflictOrderByEnum
  }

  type CalendarConflictRelationships {
    CalendarResolved_by: [CalendarPerson]
    CalendarResource: [CalendarResource]
    CalendarWinner: [CalendarEvent]
  }

  type CalendarConflictAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: string
    """
    note: String

    """
    example: 2000-01-01T12:00:00Z
    """
    resolved_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String
  }

  type CalendarConflict {
    id: ID!
    attributes: CalendarConflictAttributes
    relationships: CalendarConflictRelationships
  }

  enum CalendarEventOrderByEnum {
    id
    approval_status
    created_at
    description
    image_url
    name
    percent_approved
    percent_rejected
    registration_url
    summary
    updated_at
    visible_in_church_center
  }

  input CalendarEventOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: CalendarEventOrderByEnum
  }

  input CalendarEventWhereAttributes {
    approval_status: String
    created_at: String
    name: String
    percent_approved: String
    percent_rejected: String
    updated_at: String
    visible_in_church_center: Boolean
  }

  type CalendarEventRelationships {
    CalendarAttachments: [CalendarAttachment]
    CalendarConflicts: [CalendarConflict]
    CalendarEvent_connections: [CalendarEventConnection]
    CalendarEvent_instances: [CalendarEventInstance]
    CalendarEvent_resource_requests: [CalendarEventResourceRequest]
    CalendarFeed: [CalendarFeed]
    CalendarOwner: [CalendarPerson]
    CalendarResource_bookings: [CalendarResourceBooking]
    CalendarTags: [CalendarTag]
  }

  type CalendarEventAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    approval_status: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: string
    """
    description: String

    """
    example: string
    """
    image_url: String

    """
    example: string
    """
    name: String

    """
    example: 1
    """
    percent_approved: String

    """
    example: 1
    """
    percent_rejected: String

    """
    example: string
    """
    registration_url: String

    """
    example: string
    """
    summary: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: true
    """
    visible_in_church_center: Boolean
  }

  type CalendarEvent {
    id: ID!
    attributes: CalendarEventAttributes
    relationships: CalendarEventRelationships
  }

  enum CalendarEventConnectionOrderByEnum {
    id
    connected_to_id
    connected_to_name
    connected_to_type
    product_name
    connected_to_url
  }

  input CalendarEventConnectionOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: CalendarEventConnectionOrderByEnum
  }

  input CalendarEventConnectionWhereAttributes {
    product_name: String
  }

  type CalendarEventConnectionAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: primary_key
    """
    connected_to_id: ID!

    """
    example: string
    """
    connected_to_name: String

    """
    example: string
    """
    connected_to_type: String

    """
    example: string
    """
    product_name: String

    """
    example: string
    """
    connected_to_url: String
  }

  type CalendarEventConnection {
    id: ID!
    attributes: CalendarEventConnectionAttributes
  }

  enum CalendarEventInstanceOrderByEnum {
    id
    all_day_event
    compact_recurrence_description
    created_at
    ends_at
    location
    recurrence
    recurrence_description
    starts_at
    updated_at
    church_center_url
  }

  input CalendarEventInstanceOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: CalendarEventInstanceOrderByEnum
  }

  input CalendarEventInstanceWhereAttributes {
    created_at: String
    ends_at: String
    starts_at: String
    updated_at: String
  }

  type CalendarEventInstanceRelationships {
    CalendarEvent: [CalendarEvent]
    CalendarEvent_times: [CalendarEventTime]
    CalendarResource_bookings: [CalendarResourceBooking]
    CalendarTags: [CalendarTag]
  }

  type CalendarEventInstanceAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: true
    """
    all_day_event: Boolean

    """
    example: string
    """
    compact_recurrence_description: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    ends_at: String

    """
    example: string
    """
    location: String

    """
    example: string
    """
    recurrence: String

    """
    example: string
    """
    recurrence_description: String

    """
    example: 2000-01-01T12:00:00Z
    """
    starts_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    church_center_url: String
  }

  type CalendarEventInstance {
    id: ID!
    attributes: CalendarEventInstanceAttributes
    relationships: CalendarEventInstanceRelationships
  }

  enum CalendarEventResourceRequestOrderByEnum {
    id
    approval_sent
    approval_status
    created_at
    updated_at
    notes
    quantity
  }

  input CalendarEventResourceRequestOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: CalendarEventResourceRequestOrderByEnum
  }

  input CalendarEventResourceRequestWhereAttributes {
    approval_sent: Boolean
    approval_status: String
    created_at: String
    updated_at: String
  }

  type CalendarEventResourceRequestRelationships {
    CalendarCreated_by: [CalendarPerson]
    CalendarEvent: [CalendarEvent]
    CalendarResource_bookings: [CalendarResourceBooking]
    CalendarResource: [CalendarResource]
    CalendarRoom_setup: [CalendarRoomSetup]
    CalendarUpdated_by: [CalendarPerson]
  }

  type CalendarEventResourceRequestAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: true
    """
    approval_sent: Boolean

    """
    example: string
    """
    approval_status: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    notes: String

    """
    example: 1
    """
    quantity: String
  }

  type CalendarEventResourceRequest {
    id: ID!
    attributes: CalendarEventResourceRequestAttributes
    relationships: CalendarEventResourceRequestRelationships
  }

  enum CalendarEventTimeOrderByEnum {
    id
    ends_at
    starts_at
    name
    visible_on_kiosks
    visible_on_widget_and_ical
  }

  input CalendarEventTimeOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: CalendarEventTimeOrderByEnum
  }

  input CalendarEventTimeWhereAttributes {
    ends_at: String
    name: String
    starts_at: String
    visible_on_kiosks: Boolean
    visible_on_widget_and_ical: Boolean
  }

  type CalendarEventTimeRelationships {
    CalendarEvent: [CalendarEvent]
  }

  type CalendarEventTimeAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    ends_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    starts_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    name: String

    """
    example: true
    """
    visible_on_kiosks: Boolean

    """
    example: true
    """
    visible_on_widget_and_ical: Boolean
  }

  type CalendarEventTime {
    id: ID!
    attributes: CalendarEventTimeAttributes
    relationships: CalendarEventTimeRelationships
  }

  enum CalendarFeedOrderByEnum {
    id
    default_church_center_visibility
    feed_type
    name
    imported_at
    can_delete
  }

  input CalendarFeedOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: CalendarFeedOrderByEnum
  }

  input CalendarFeedWhereAttributes {
    feed_type: String
  }

  type CalendarFeedAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: value
    """
    default_church_center_visibility: String

    """
    example: value
    """
    feed_type: String

    """
    example: string
    """
    name: String

    """
    example: 2000-01-01T12:00:00Z
    """
    imported_at: String

    """
    example: true
    """
    can_delete: Boolean
  }

  type CalendarFeed {
    id: ID!
    attributes: CalendarFeedAttributes
  }

  enum CalendarOrganizationOrderByEnum {
    id
    name
    time_zone
    twenty_four_hour_time
    date_format
    onboarding
  }

  input CalendarOrganizationOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: CalendarOrganizationOrderByEnum
  }

  type CalendarOrganizationRelationships {
    CalendarAttachments: [CalendarAttachment]
    CalendarConflicts: [CalendarConflict]
    CalendarEvent_instances: [CalendarEventInstance]
    CalendarEvent_resource_requests: [CalendarEventResourceRequest]
    CalendarEvents: [CalendarEvent]
    CalendarFeeds: [CalendarFeed]
    CalendarPeople: [CalendarPerson]
    CalendarReport_templates: [CalendarReportTemplate]
    CalendarResource_approval_groups: [CalendarResourceApprovalGroup]
    CalendarResource_bookings: [CalendarResourceBooking]
    CalendarResource_folders: [CalendarResourceFolder]
    CalendarResource_questions: [CalendarResourceQuestion]
    CalendarResources: [CalendarResource]
    CalendarRoom_setups: [CalendarRoomSetup]
    CalendarTag_groups: [CalendarTagGroup]
    CalendarTags: [CalendarTag]
  }

  type CalendarOrganizationAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    name: String

    """
    example: string
    """
    time_zone: String

    """
    example: true
    """
    twenty_four_hour_time: Boolean

    """
    example: string
    """
    date_format: String

    """
    example: true
    """
    onboarding: Boolean
  }

  type CalendarOrganization {
    id: ID!
    attributes: CalendarOrganizationAttributes
    relationships: CalendarOrganizationRelationships
  }

  enum CalendarPersonOrderByEnum {
    id
    created_at
    first_name
    last_name
    middle_name
    updated_at
    avatar_url
    child
    contact_data
    gender
    has_access
    name_prefix
    name_suffix
    pending_request_count
    permissions
    resolves_conflicts
    site_administrator
    status
    event_permissions_type
    people_permissions_type
    room_permissions_type
    resources_permissions_type
  }

  input CalendarPersonOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: CalendarPersonOrderByEnum
  }

  input CalendarPersonWhereAttributes {
    created_at: String
    first_name: String
    last_name: String
    middle_name: String
    updated_at: String
  }

  type CalendarPersonRelationships {
    CalendarEvent_resource_requests: [CalendarEventResourceRequest]
    CalendarOrganization: [CalendarOrganization]
  }

  type CalendarPersonAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: string
    """
    first_name: String

    """
    example: string
    """
    last_name: String

    """
    example: string
    """
    middle_name: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    avatar_url: String

    """
    example: true
    """
    child: Boolean

    """
    example: string
    """
    contact_data: String

    """
    example: string
    """
    gender: String

    """
    example: true
    """
    has_access: Boolean

    """
    example: string
    """
    name_prefix: String

    """
    example: string
    """
    name_suffix: String

    """
    example: 1
    """
    pending_request_count: String

    """
    example: 1
    """
    permissions: String

    """
    example: true
    """
    resolves_conflicts: Boolean

    """
    example: true
    """
    site_administrator: Boolean

    """
    example: value
    """
    status: String

    """
    example: string
    """
    event_permissions_type: String

    """
    example: string
    """
    people_permissions_type: String

    """
    example: string
    """
    room_permissions_type: String

    """
    example: string
    """
    resources_permissions_type: String
  }

  type CalendarPerson {
    id: ID!
    attributes: CalendarPersonAttributes
    relationships: CalendarPersonRelationships
  }

  enum CalendarReportTemplateOrderByEnum {
    id
    body
    created_at
    description
    title
    updated_at
  }

  input CalendarReportTemplateOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: CalendarReportTemplateOrderByEnum
  }

  type CalendarReportTemplateAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    body: String

    """
    example: string
    """
    created_at: String

    """
    example: string
    """
    description: String

    """
    example: string
    """
    title: String

    """
    example: string
    """
    updated_at: String
  }

  type CalendarReportTemplate {
    id: ID!
    attributes: CalendarReportTemplateAttributes
  }

  enum CalendarRequiredApprovalOrderByEnum {
    id
  }

  input CalendarRequiredApprovalOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: CalendarRequiredApprovalOrderByEnum
  }

  type CalendarRequiredApprovalRelationships {
    CalendarResource: [CalendarResource]
  }

  type CalendarRequiredApprovalAttributes {
    """
    example: primary_key
    """
    id: ID!
  }

  type CalendarRequiredApproval {
    id: ID!
    attributes: CalendarRequiredApprovalAttributes
    relationships: CalendarRequiredApprovalRelationships
  }

  enum CalendarResourceOrderByEnum {
    id
    created_at
    kind
    name
    serial_number
    updated_at
    description
    expires_at
    home_location
    image
    quantity
    path_name
  }

  input CalendarResourceOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: CalendarResourceOrderByEnum
  }

  input CalendarResourceWhereAttributes {
    created_at: String
    kind: String
    name: String
    path_name: String
    serial_number: String
    updated_at: String
  }

  type CalendarResourceRelationships {
    CalendarConflicts: [CalendarConflict]
    CalendarEvent_resource_requests: [CalendarEventResourceRequest]
    CalendarRequired_approvals: [CalendarRequiredApproval]
    CalendarResource_approval_groups: [CalendarResourceApprovalGroup]
    CalendarResource_bookings: [CalendarResourceBooking]
    CalendarResource_folder: [CalendarResourceFolder]
    CalendarResource_questions: [CalendarResourceQuestion]
    CalendarRoom_setups: [CalendarRoomSetup]
  }

  type CalendarResourceAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: string
    """
    kind: String

    """
    example: string
    """
    name: String

    """
    example: string
    """
    serial_number: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    description: String

    """
    example: 2000-01-01T12:00:00Z
    """
    expires_at: String

    """
    example: string
    """
    home_location: String

    """
    example: string
    """
    image: String

    """
    example: 1
    """
    quantity: String

    """
    example: string
    """
    path_name: String
  }

  type CalendarResource {
    id: ID!
    attributes: CalendarResourceAttributes
    relationships: CalendarResourceRelationships
  }

  enum CalendarResourceApprovalGroupOrderByEnum {
    id
    created_at
    name
    updated_at
    form_count
    resource_count
    room_count
  }

  input CalendarResourceApprovalGroupOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: CalendarResourceApprovalGroupOrderByEnum
  }

  input CalendarResourceApprovalGroupWhereAttributes {
    created_at: String
    name: String
    updated_at: String
  }

  type CalendarResourceApprovalGroupRelationships {
    CalendarEvent_resource_requests: [CalendarEventResourceRequest]
    CalendarPeople: [CalendarPerson]
    CalendarRequired_approvals: [CalendarRequiredApproval]
    CalendarResources: [CalendarResource]
  }

  type CalendarResourceApprovalGroupAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: string
    """
    name: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: 1
    """
    form_count: String

    """
    example: 1
    """
    resource_count: String

    """
    example: 1
    """
    room_count: String
  }

  type CalendarResourceApprovalGroup {
    id: ID!
    attributes: CalendarResourceApprovalGroupAttributes
    relationships: CalendarResourceApprovalGroupRelationships
  }

  enum CalendarResourceBookingOrderByEnum {
    id
    created_at
    ends_at
    starts_at
    updated_at
    quantity
  }

  input CalendarResourceBookingOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: CalendarResourceBookingOrderByEnum
  }

  input CalendarResourceBookingWhereAttributes {
    created_at: String
    ends_at: String
    starts_at: String
    updated_at: String
  }

  type CalendarResourceBookingRelationships {
    CalendarEvent_instance: [CalendarEventInstance]
    CalendarEvent_resource_request: [CalendarEventResourceRequest]
    CalendarResource: [CalendarResource]
  }

  type CalendarResourceBookingAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    ends_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    starts_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: 1
    """
    quantity: String
  }

  type CalendarResourceBooking {
    id: ID!
    attributes: CalendarResourceBookingAttributes
    relationships: CalendarResourceBookingRelationships
  }

  enum CalendarResourceFolderOrderByEnum {
    id
    created_at
    name
    updated_at
    ancestry
    kind
    path_name
  }

  input CalendarResourceFolderOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: CalendarResourceFolderOrderByEnum
  }

  input CalendarResourceFolderWhereAttributes {
    ancestry: String
    created_at: String
    name: String
    path_name: String
    updated_at: String
  }

  type CalendarResourceFolderRelationships {
    CalendarResources: [CalendarResource]
  }

  type CalendarResourceFolderAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: string
    """
    name: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    ancestry: String

    """
    example: string
    """
    kind: String

    """
    example: string
    """
    path_name: String
  }

  type CalendarResourceFolder {
    id: ID!
    attributes: CalendarResourceFolderAttributes
    relationships: CalendarResourceFolderRelationships
  }

  enum CalendarResourceQuestionOrderByEnum {
    id
    created_at
    kind
    updated_at
    choices
    description
    multiple_select
    optional
    position
    question
  }

  input CalendarResourceQuestionOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: CalendarResourceQuestionOrderByEnum
  }

  input CalendarResourceQuestionWhereAttributes {
    created_at: String
    kind: String
    updated_at: String
  }

  type CalendarResourceQuestionAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: string
    """
    kind: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    choices: String

    """
    example: string
    """
    description: String

    """
    example: true
    """
    multiple_select: Boolean

    """
    example: true
    """
    optional: Boolean

    """
    example: 1
    """
    position: String

    """
    example: string
    """
    question: String
  }

  type CalendarResourceQuestion {
    id: ID!
    attributes: CalendarResourceQuestionAttributes
  }

  enum CalendarResourceSuggestionOrderByEnum {
    id
    created_at
    quantity
    updated_at
  }

  input CalendarResourceSuggestionOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: CalendarResourceSuggestionOrderByEnum
  }

  type CalendarResourceSuggestionRelationships {
    CalendarResource: [CalendarResource]
  }

  type CalendarResourceSuggestionAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 1
    """
    quantity: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String
  }

  type CalendarResourceSuggestion {
    id: ID!
    attributes: CalendarResourceSuggestionAttributes
    relationships: CalendarResourceSuggestionRelationships
  }

  enum CalendarRoomSetupOrderByEnum {
    id
    created_at
    name
    updated_at
    description
    diagram
    diagram_url
    diagram_thumbnail_url
  }

  input CalendarRoomSetupOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: CalendarRoomSetupOrderByEnum
  }

  input CalendarRoomSetupWhereAttributes {
    created_at: String
    name: String
    updated_at: String
  }

  type CalendarRoomSetupRelationships {
    CalendarContaining_resource: [CalendarResource]
    CalendarResource_suggestions: [CalendarResourceSuggestion]
  }

  type CalendarRoomSetupAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: string
    """
    name: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    description: String

    """
    example: string
    """
    diagram: String

    """
    example: string
    """
    diagram_url: String

    """
    example: string
    """
    diagram_thumbnail_url: String
  }

  type CalendarRoomSetup {
    id: ID!
    attributes: CalendarRoomSetupAttributes
    relationships: CalendarRoomSetupRelationships
  }

  enum CalendarTagOrderByEnum {
    id
    church_center_category
    color
    created_at
    name
    position
    updated_at
  }

  input CalendarTagOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: CalendarTagOrderByEnum
  }

  input CalendarTagWhereAttributes {
    church_center_category: Boolean
    color: String
    created_at: String
    id: ID!
    name: String
    position: String
    updated_at: String
  }

  type CalendarTagRelationships {
    CalendarEvent_instances: [CalendarEventInstance]
    CalendarEvents: [CalendarEvent]
    CalendarTag_group: [CalendarTagGroup]
  }

  type CalendarTagAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: true
    """
    church_center_category: Boolean

    """
    example: string
    """
    color: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: string
    """
    name: String

    """
    example: 1.42
    """
    position: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String
  }

  type CalendarTag {
    id: ID!
    attributes: CalendarTagAttributes
    relationships: CalendarTagRelationships
  }

  enum CalendarTagGroupOrderByEnum {
    id
    created_at
    name
    updated_at
    required
  }

  input CalendarTagGroupOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: CalendarTagGroupOrderByEnum
  }

  input CalendarTagGroupWhereAttributes {
    created_at: String
    name: String
    updated_at: String
  }

  type CalendarTagGroupRelationships {
    CalendarEvents: [CalendarEvent]
    CalendarTags: [CalendarTag]
  }

  type CalendarTagGroupAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: string
    """
    name: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: true
    """
    required: Boolean
  }

  type CalendarTagGroup {
    id: ID!
    attributes: CalendarTagGroupAttributes
    relationships: CalendarTagGroupRelationships
  }

  enum Check_insAttendanceTypeOrderByEnum {
    id
    name
    color
    created_at
    updated_at
    limit
  }

  input Check_insAttendanceTypeOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: Check_insAttendanceTypeOrderByEnum
  }

  input Check_insAttendanceTypeWhereAttributes {
    id: ID!
    name: String
  }

  type Check_insAttendanceTypeRelationships {
    Check_insEvent: [Check_insEvent]
    Check_insHeadcounts: [Check_insHeadcount]
  }

  type Check_insAttendanceTypeAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    name: String

    """
    example: string
    """
    color: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: 1
    """
    limit: String
  }

  type Check_insAttendanceType {
    id: ID!
    attributes: Check_insAttendanceTypeAttributes
    relationships: Check_insAttendanceTypeRelationships
  }

  enum Check_insCheckInOrderByEnum {
    id
    first_name
    last_name
    medical_notes
    number
    security_code
    created_at
    updated_at
    checked_out_at
    confirmed_at
    emergency_contact_name
    emergency_contact_phone_number
    one_time_guest
    kind
  }

  input Check_insCheckInOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: Check_insCheckInOrderByEnum
  }

  input Check_insCheckInWhereAttributes {
    created_at: String
    security_code: String
    updated_at: String
  }

  type Check_insCheckInRelationships {
    Check_insCheck_in_group: [Check_insCheckInGroup]
    Check_insCheck_in_times: [Check_insCheckInTime]
    Check_insChecked_in_at: [Check_insStation]
    Check_insChecked_in_by: [Check_insPerson]
    Check_insChecked_out_by: [Check_insPerson]
    Check_insEvent: [Check_insEvent]
    Check_insEvent_period: [Check_insEventPeriod]
    Check_insEvent_times: [Check_insEventTime]
    Check_insLocations: [Check_insLocation]
    Check_insOptions: [Check_insOption]
    Check_insPerson: [Check_insPerson]
  }

  type Check_insCheckInAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    first_name: String

    """
    example: string
    """
    last_name: String

    """
    example: string
    """
    medical_notes: String

    """
    example: 1
    """
    number: String

    """
    example: string
    """
    security_code: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    checked_out_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    confirmed_at: String

    """
    example: string
    """
    emergency_contact_name: String

    """
    example: string
    """
    emergency_contact_phone_number: String

    """
    example: true
    """
    one_time_guest: Boolean

    """
    example: string
    """
    kind: String
  }

  type Check_insCheckIn {
    id: ID!
    attributes: Check_insCheckInAttributes
    relationships: Check_insCheckInRelationships
  }

  enum Check_insCheckInGroupOrderByEnum {
    id
    name_labels_count
    security_labels_count
    check_ins_count
    print_status
    created_at
    updated_at
  }

  input Check_insCheckInGroupOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: Check_insCheckInGroupOrderByEnum
  }

  type Check_insCheckInGroupRelationships {
    Check_insCheck_ins: [Check_insCheckIn]
    Check_insEvent_period: [Check_insEventPeriod]
    Check_insPrint_station: [Check_insStation]
  }

  type Check_insCheckInGroupAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 1
    """
    name_labels_count: String

    """
    example: 1
    """
    security_labels_count: String

    """
    example: 1
    """
    check_ins_count: String

    """
    example: value
    """
    print_status: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String
  }

  type Check_insCheckInGroup {
    id: ID!
    attributes: Check_insCheckInGroupAttributes
    relationships: Check_insCheckInGroupRelationships
  }

  enum Check_insCheckInTimeOrderByEnum {
    id
    kind
    has_validated
    services_integrated
    alerts
  }

  input Check_insCheckInTimeOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: Check_insCheckInTimeOrderByEnum
  }

  type Check_insCheckInTimeAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    kind: String

    """
    example: true
    """
    has_validated: Boolean

    """
    example: true
    """
    services_integrated: Boolean

    """
    example:
    """
    alerts: String
  }

  type Check_insCheckInTime {
    id: ID!
    attributes: Check_insCheckInTimeAttributes
  }

  enum Check_insEventOrderByEnum {
    id
    name
    frequency
    enable_services_integration
    created_at
    updated_at
    archived_at
    integration_key
    location_times_enabled
    pre_select_enabled
    app_source
  }

  input Check_insEventOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: Check_insEventOrderByEnum
  }

  input Check_insEventWhereAttributes {
    id: ID!
    name: String
  }

  type Check_insEventRelationships {
    Check_insAttendance_types: [Check_insAttendanceType]
    Check_insCheck_ins: [Check_insCheckIn]
    Check_insCurrent_event_times: [Check_insEventTime]
    Check_insEvent_labels: [Check_insEventLabel]
    Check_insEvent_periods: [Check_insEventPeriod]
    Check_insLocations: [Check_insLocation]
    Check_insPerson_events: [Check_insPersonEvent]
  }

  type Check_insEventAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    name: String

    """
    example: string
    """
    frequency: String

    """
    example: true
    """
    enable_services_integration: Boolean

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    archived_at: String

    """
    example: string
    """
    integration_key: String

    """
    example: true
    """
    location_times_enabled: Boolean

    """
    example: true
    """
    pre_select_enabled: Boolean

    """
    example: string
    """
    app_source: String
  }

  type Check_insEvent {
    id: ID!
    attributes: Check_insEventAttributes
    relationships: Check_insEventRelationships
  }

  enum Check_insEventLabelOrderByEnum {
    id
    quantity
    for_regular
    for_guest
    for_volunteer
    created_at
    updated_at
  }

  input Check_insEventLabelOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: Check_insEventLabelOrderByEnum
  }

  type Check_insEventLabelRelationships {
    Check_insEvent: [Check_insEvent]
    Check_insLabel: [Check_insLabel]
  }

  type Check_insEventLabelAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 1
    """
    quantity: String

    """
    example: true
    """
    for_regular: Boolean

    """
    example: true
    """
    for_guest: Boolean

    """
    example: true
    """
    for_volunteer: Boolean

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String
  }

  type Check_insEventLabel {
    id: ID!
    attributes: Check_insEventLabelAttributes
    relationships: Check_insEventLabelRelationships
  }

  enum Check_insEventPeriodOrderByEnum {
    id
    starts_at
    ends_at
    regular_count
    guest_count
    volunteer_count
    note
    created_at
    updated_at
  }

  input Check_insEventPeriodOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: Check_insEventPeriodOrderByEnum
  }

  type Check_insEventPeriodRelationships {
    Check_insCheck_ins: [Check_insCheckIn]
    Check_insEvent: [Check_insEvent]
    Check_insEvent_times: [Check_insEventTime]
    Check_insLocation_event_periods: [Check_insLocationEventPeriod]
  }

  type Check_insEventPeriodAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    starts_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    ends_at: String

    """
    example: 1
    """
    regular_count: String

    """
    example: 1
    """
    guest_count: String

    """
    example: 1
    """
    volunteer_count: String

    """
    example: string
    """
    note: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String
  }

  type Check_insEventPeriod {
    id: ID!
    attributes: Check_insEventPeriodAttributes
    relationships: Check_insEventPeriodRelationships
  }

  enum Check_insEventTimeOrderByEnum {
    id
    total_count
    starts_at
    shows_at
    hides_at
    regular_count
    guest_count
    volunteer_count
    created_at
    updated_at
    name
    hour
    minute
    day_of_week
  }

  input Check_insEventTimeOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: Check_insEventTimeOrderByEnum
  }

  input Check_insEventTimeWhereAttributes {
    created_at: String
    updated_at: String
  }

  type Check_insEventTimeRelationships {
    Check_insAvailable_locations: [Check_insLocation]
    Check_insCheck_ins: [Check_insCheckIn]
    Check_insEvent: [Check_insEvent]
    Check_insEvent_period: [Check_insEventPeriod]
    Check_insHeadcounts: [Check_insHeadcount]
    Check_insLocation_event_times: [Check_insLocationEventTime]
  }

  type Check_insEventTimeAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 1
    """
    total_count: String

    """
    example: 2000-01-01T12:00:00Z
    """
    starts_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    shows_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    hides_at: String

    """
    example: 1
    """
    regular_count: String

    """
    example: 1
    """
    guest_count: String

    """
    example: 1
    """
    volunteer_count: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    name: String

    """
    example: 1
    """
    hour: String

    """
    example: 1
    """
    minute: String

    """
    example: 1
    """
    day_of_week: String
  }

  type Check_insEventTime {
    id: ID!
    attributes: Check_insEventTimeAttributes
    relationships: Check_insEventTimeRelationships
  }

  enum Check_insHeadcountOrderByEnum {
    id
    total
    updated_at
    created_at
  }

  input Check_insHeadcountOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: Check_insHeadcountOrderByEnum
  }

  input Check_insHeadcountWhereAttributes {
    created_at: String
    updated_at: String
  }

  type Check_insHeadcountRelationships {
    Check_insAttendance_type: [Check_insAttendanceType]
    Check_insEvent_time: [Check_insEventTime]
  }

  type Check_insHeadcountAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 1
    """
    total: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String
  }

  type Check_insHeadcount {
    id: ID!
    attributes: Check_insHeadcountAttributes
    relationships: Check_insHeadcountRelationships
  }

  enum Check_insLabelOrderByEnum {
    id
    name
    xml
    prints_for
    roll
    created_at
    updated_at
  }

  input Check_insLabelOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: Check_insLabelOrderByEnum
  }

  type Check_insLabelRelationships {
    Check_insEvent_labels: [Check_insEventLabel]
    Check_insLocation_labels: [Check_insLocationLabel]
  }

  type Check_insLabelAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    name: String

    """
    example: string
    """
    xml: String

    """
    example: string
    """
    prints_for: String

    """
    example: string
    """
    roll: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String
  }

  type Check_insLabel {
    id: ID!
    attributes: Check_insLabelAttributes
    relationships: Check_insLabelRelationships
  }

  enum Check_insLocationOrderByEnum {
    id
    name
    kind
    opened
    questions
    age_min_in_months
    age_max_in_months
    age_range_by
    age_on
    child_or_adult
    effective_date
    gender
    grade_min
    grade_max
    max_occupancy
    min_volunteers
    attendees_per_volunteer
    position
    updated_at
    created_at
  }

  input Check_insLocationOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: Check_insLocationOrderByEnum
  }

  type Check_insLocationRelationships {
    Check_insCheck_ins: [Check_insCheckIn]
    Check_insEvent: [Check_insEvent]
    Check_insLocation_event_periods: [Check_insLocationEventPeriod]
    Check_insLocation_event_times: [Check_insLocationEventTime]
    Check_insLocation_labels: [Check_insLocationLabel]
    Check_insLocations: [Check_insLocation]
    Check_insOptions: [Check_insOption]
    Check_insParent: [Check_insLocation]
  }

  type Check_insLocationAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    name: String

    """
    example: string
    """
    kind: String

    """
    example: true
    """
    opened: Boolean

    """
    example: string
    """
    questions: String

    """
    example: 1
    """
    age_min_in_months: String

    """
    example: 1
    """
    age_max_in_months: String

    """
    example: string
    """
    age_range_by: String

    """
    example: 2000-01-01
    """
    age_on: String

    """
    example: string
    """
    child_or_adult: String

    """
    example: 2000-01-01
    """
    effective_date: String

    """
    example: string
    """
    gender: String

    """
    example: 1
    """
    grade_min: String

    """
    example: 1
    """
    grade_max: String

    """
    example: 1
    """
    max_occupancy: String

    """
    example: 1
    """
    min_volunteers: String

    """
    example: 1
    """
    attendees_per_volunteer: String

    """
    example: 1
    """
    position: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String
  }

  type Check_insLocation {
    id: ID!
    attributes: Check_insLocationAttributes
    relationships: Check_insLocationRelationships
  }

  enum Check_insLocationEventPeriodOrderByEnum {
    id
    regular_count
    guest_count
    volunteer_count
    created_at
    updated_at
  }

  input Check_insLocationEventPeriodOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: Check_insLocationEventPeriodOrderByEnum
  }

  type Check_insLocationEventPeriodRelationships {
    Check_insCheck_ins: [Check_insCheckIn]
    Check_insEvent_period: [Check_insEventPeriod]
    Check_insLocation: [Check_insLocation]
  }

  type Check_insLocationEventPeriodAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 1
    """
    regular_count: String

    """
    example: 1
    """
    guest_count: String

    """
    example: 1
    """
    volunteer_count: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String
  }

  type Check_insLocationEventPeriod {
    id: ID!
    attributes: Check_insLocationEventPeriodAttributes
    relationships: Check_insLocationEventPeriodRelationships
  }

  enum Check_insLocationEventTimeOrderByEnum {
    id
    regular_count
    guest_count
    volunteer_count
    created_at
    updated_at
  }

  input Check_insLocationEventTimeOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: Check_insLocationEventTimeOrderByEnum
  }

  input Check_insLocationEventTimeWhereAttributes {
    created_at: String
    updated_at: String
  }

  type Check_insLocationEventTimeRelationships {
    Check_insCheck_ins: [Check_insCheckIn]
    Check_insEvent_time: [Check_insEventTime]
    Check_insLocation: [Check_insLocation]
  }

  type Check_insLocationEventTimeAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 1
    """
    regular_count: String

    """
    example: 1
    """
    guest_count: String

    """
    example: 1
    """
    volunteer_count: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String
  }

  type Check_insLocationEventTime {
    id: ID!
    attributes: Check_insLocationEventTimeAttributes
    relationships: Check_insLocationEventTimeRelationships
  }

  enum Check_insLocationLabelOrderByEnum {
    id
    quantity
    for_regular
    for_guest
    for_volunteer
    created_at
    updated_at
  }

  input Check_insLocationLabelOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: Check_insLocationLabelOrderByEnum
  }

  type Check_insLocationLabelRelationships {
    Check_insLabel: [Check_insLabel]
    Check_insLocation: [Check_insLocation]
  }

  type Check_insLocationLabelAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 1
    """
    quantity: String

    """
    example: true
    """
    for_regular: Boolean

    """
    example: true
    """
    for_guest: Boolean

    """
    example: true
    """
    for_volunteer: Boolean

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String
  }

  type Check_insLocationLabel {
    id: ID!
    attributes: Check_insLocationLabelAttributes
    relationships: Check_insLocationLabelRelationships
  }

  enum Check_insOptionOrderByEnum {
    id
    body
    quantity
    created_at
    updated_at
  }

  input Check_insOptionOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: Check_insOptionOrderByEnum
  }

  type Check_insOptionRelationships {
    Check_insCheck_ins: [Check_insCheckIn]
    Check_insLabel: [Check_insLabel]
  }

  type Check_insOptionAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    body: String

    """
    example: 1
    """
    quantity: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String
  }

  type Check_insOption {
    id: ID!
    attributes: Check_insOptionAttributes
    relationships: Check_insOptionRelationships
  }

  enum Check_insOrganizationOrderByEnum {
    id
    date_format_pattern
    time_zone_olson
    name
    daily_check_ins
    time_zone
    avatar_url
    created_at
    updated_at
  }

  input Check_insOrganizationOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: Check_insOrganizationOrderByEnum
  }

  type Check_insOrganizationRelationships {
    Check_insCheck_ins: [Check_insCheckIn]
    Check_insEvent_times: [Check_insEventTime]
    Check_insEvents: [Check_insEvent]
    Check_insHeadcounts: [Check_insHeadcount]
    Check_insLabels: [Check_insLabel]
    Check_insOptions: [Check_insOption]
    Check_insPasses: [Check_insPass]
    Check_insPeople: [Check_insPerson]
    Check_insStations: [Check_insStation]
    Check_insThemes: [Check_insTheme]
  }

  type Check_insOrganizationAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    date_format_pattern: String

    """
    example: string
    """
    time_zone_olson: String

    """
    example: string
    """
    name: String

    """
    example: 1
    """
    daily_check_ins: String

    """
    example: string
    """
    time_zone: String

    """
    example: string
    """
    avatar_url: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String
  }

  type Check_insOrganization {
    id: ID!
    attributes: Check_insOrganizationAttributes
    relationships: Check_insOrganizationRelationships
  }

  enum Check_insPassOrderByEnum {
    id
    code
    kind
    created_at
    updated_at
  }

  input Check_insPassOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: Check_insPassOrderByEnum
  }

  input Check_insPassWhereAttributes {
    code: String
  }

  type Check_insPassRelationships {
    Check_insPerson: [Check_insPerson]
  }

  type Check_insPassAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    code: String

    """
    example: string
    """
    kind: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String
  }

  type Check_insPass {
    id: ID!
    attributes: Check_insPassAttributes
    relationships: Check_insPassRelationships
  }

  enum Check_insPersonOrderByEnum {
    id
    addresses
    email_addresses
    phone_numbers
    avatar_url
    name_prefix
    first_name
    middle_name
    last_name
    name_suffix
    birthdate
    grade
    gender
    medical_notes
    child
    permission
    headcounter
    last_checked_in_at
    check_in_count
    created_at
    updated_at
    passed_background_check
    demographic_avatar_url
    name
    top_permission
    ignore_filters
  }

  input Check_insPersonOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: Check_insPersonOrderByEnum
  }

  input Check_insPersonWhereAttributes {
    headcounter: Boolean
    ignore_filters: Boolean
    permission: String
    search_name: String
  }

  type Check_insPersonRelationships {
    Check_insCheck_ins: [Check_insCheckIn]
    Check_insOrganization: [Check_insOrganization]
    Check_insPasses: [Check_insPass]
    Check_insPerson_events: [Check_insPersonEvent]
  }

  type Check_insPersonAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example:
    """
    addresses: String

    """
    example:
    """
    email_addresses: String

    """
    example:
    """
    phone_numbers: String

    """
    example: string
    """
    avatar_url: String

    """
    example: string
    """
    name_prefix: String

    """
    example: string
    """
    first_name: String

    """
    example: string
    """
    middle_name: String

    """
    example: string
    """
    last_name: String

    """
    example: string
    """
    name_suffix: String

    """
    example: 2000-01-01
    """
    birthdate: String

    """
    example: 1
    """
    grade: String

    """
    example: string
    """
    gender: String

    """
    example: string
    """
    medical_notes: String

    """
    example: true
    """
    child: Boolean

    """
    example: string
    """
    permission: String

    """
    example: true
    """
    headcounter: Boolean

    """
    example: 2000-01-01T12:00:00Z
    """
    last_checked_in_at: String

    """
    example: 1
    """
    check_in_count: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: true
    """
    passed_background_check: Boolean

    """
    example: string
    """
    demographic_avatar_url: String

    """
    example: string
    """
    name: String

    """
    example: string
    """
    top_permission: String

    """
    example: true
    """
    ignore_filters: Boolean
  }

  type Check_insPerson {
    id: ID!
    attributes: Check_insPersonAttributes
    relationships: Check_insPersonRelationships
  }

  enum Check_insPersonEventOrderByEnum {
    id
    check_in_count
    updated_at
    created_at
  }

  input Check_insPersonEventOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: Check_insPersonEventOrderByEnum
  }

  type Check_insPersonEventRelationships {
    Check_insEvent: [Check_insEvent]
    Check_insFirst_check_in: [Check_insCheckIn]
    Check_insLast_check_in: [Check_insCheckIn]
    Check_insPerson: [Check_insPerson]
  }

  type Check_insPersonEventAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 1
    """
    check_in_count: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String
  }

  type Check_insPersonEvent {
    id: ID!
    attributes: Check_insPersonEventAttributes
    relationships: Check_insPersonEventRelationships
  }

  enum Check_insRosterListPersonOrderByEnum {
    id
    first_name
    last_name
    name
    demographic_avatar_url
    grade
    gender
    medical_notes
    birthdate
  }

  input Check_insRosterListPersonOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: Check_insRosterListPersonOrderByEnum
  }

  type Check_insRosterListPersonAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    first_name: String

    """
    example: string
    """
    last_name: String

    """
    example: string
    """
    name: String

    """
    example: string
    """
    demographic_avatar_url: String

    """
    example: string
    """
    grade: String

    """
    example: string
    """
    gender: String

    """
    example: string
    """
    medical_notes: String

    """
    example: 2000-01-01T12:00:00Z
    """
    birthdate: String
  }

  type Check_insRosterListPerson {
    id: ID!
    attributes: Check_insRosterListPersonAttributes
  }

  enum Check_insStationOrderByEnum {
    id
    online
    mode
    name
    timeout_seconds
    input_type
    input_type_options
    created_at
    updated_at
    next_shows_at
    open_for_check_in
    closes_at
    check_in_count
  }

  input Check_insStationOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: Check_insStationOrderByEnum
  }

  type Check_insStationRelationships {
    Check_insCheck_in_groups: [Check_insCheckInGroup]
    Check_insChecked_in_at_check_ins: [Check_insCheckIn]
    Check_insEvent: [Check_insEvent]
    Check_insLocation: [Check_insLocation]
    Check_insPrint_station: [Check_insStation]
    Check_insTheme: [Check_insTheme]
  }

  type Check_insStationAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: true
    """
    online: Boolean

    """
    example: 1
    """
    mode: String

    """
    example: string
    """
    name: String

    """
    example: 1
    """
    timeout_seconds: String

    """
    example: value
    """
    input_type: String

    """
    example: value
    """
    input_type_options: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    next_shows_at: String

    """
    example: true
    """
    open_for_check_in: Boolean

    """
    example: 2000-01-01T12:00:00Z
    """
    closes_at: String

    """
    example: 1
    """
    check_in_count: String
  }

  type Check_insStation {
    id: ID!
    attributes: Check_insStationAttributes
    relationships: Check_insStationRelationships
  }

  enum Check_insThemeOrderByEnum {
    id
    image_thumbnail
    name
    color
    text_color
    image
    created_at
    updated_at
    background_color
    mode
  }

  input Check_insThemeOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: Check_insThemeOrderByEnum
  }

  type Check_insThemeAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    image_thumbnail: String

    """
    example: string
    """
    name: String

    """
    example: string
    """
    color: String

    """
    example: string
    """
    text_color: String

    """
    example: string
    """
    image: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    background_color: String

    """
    example: string
    """
    mode: String
  }

  type Check_insTheme {
    id: ID!
    attributes: Check_insThemeAttributes
  }

  enum GroupsAttendanceOrderByEnum {
    id
    attended
    role
  }

  input GroupsAttendanceOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: GroupsAttendanceOrderByEnum
  }

  input GroupsAttendanceWhereAttributes {
    role: String
  }

  type GroupsAttendanceRelationships {
    GroupsPerson: [GroupsPerson]
  }

  type GroupsAttendanceAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: true
    """
    attended: Boolean

    """
    example: value
    """
    role: String
  }

  type GroupsAttendance {
    id: ID!
    attributes: GroupsAttendanceAttributes
    relationships: GroupsAttendanceRelationships
  }

  enum GroupsEnrollmentOrderByEnum {
    id
    auto_closed
    auto_closed_reason
    date_limit
    date_limit_reached
    member_limit
    member_limit_reached
    status
    strategy
  }

  input GroupsEnrollmentOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: GroupsEnrollmentOrderByEnum
  }

  type GroupsEnrollmentAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: true
    """
    auto_closed: Boolean

    """
    example: string
    """
    auto_closed_reason: String

    """
    example: string
    """
    date_limit: String

    """
    example: true
    """
    date_limit_reached: Boolean

    """
    example: 1
    """
    member_limit: String

    """
    example: true
    """
    member_limit_reached: Boolean

    """
    example: string
    """
    status: String

    """
    example: string
    """
    strategy: String
  }

  type GroupsEnrollment {
    id: ID!
    attributes: GroupsEnrollmentAttributes
  }

  enum GroupsEventOrderByEnum {
    id
    attendance_requests_enabled
    automated_reminder_enabled
    canceled
    canceled_at
    description
    ends_at
    location_type_preference
    multi_day
    name
    reminders_sent
    reminders_sent_at
    repeating
    starts_at
    virtual_location_url
    visitors_count
  }

  input GroupsEventOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: GroupsEventOrderByEnum
  }

  input GroupsEventWhereAttributes {
    ends_at: String
    name: String
    starts_at: String
  }

  type GroupsEventRelationships {
    GroupsAttendances: [GroupsAttendance]
    GroupsGroup: [GroupsGroup]
    GroupsLocation: [GroupsLocation]
    GroupsNotes: [GroupsEventNote]
  }

  type GroupsEventAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: true
    """
    attendance_requests_enabled: Boolean

    """
    example: true
    """
    automated_reminder_enabled: Boolean

    """
    example: true
    """
    canceled: Boolean

    """
    example: 2000-01-01T12:00:00Z
    """
    canceled_at: String

    """
    example: string
    """
    description: String

    """
    example: 2000-01-01T12:00:00Z
    """
    ends_at: String

    """
    example: string
    """
    location_type_preference: String

    """
    example: true
    """
    multi_day: Boolean

    """
    example: string
    """
    name: String

    """
    example: true
    """
    reminders_sent: Boolean

    """
    example: 2000-01-01T12:00:00Z
    """
    reminders_sent_at: String

    """
    example: true
    """
    repeating: Boolean

    """
    example: 2000-01-01T12:00:00Z
    """
    starts_at: String

    """
    example: string
    """
    virtual_location_url: String

    """
    example: 1
    """
    visitors_count: String
  }

  type GroupsEvent {
    id: ID!
    attributes: GroupsEventAttributes
    relationships: GroupsEventRelationships
  }

  enum GroupsEventNoteOrderByEnum {
    id
    body
  }

  input GroupsEventNoteOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: GroupsEventNoteOrderByEnum
  }

  type GroupsEventNoteRelationships {
    GroupsOwner: [GroupsOwner]
  }

  type GroupsEventNoteAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    body: String
  }

  type GroupsEventNote {
    id: ID!
    attributes: GroupsEventNoteAttributes
    relationships: GroupsEventNoteRelationships
  }

  enum GroupsGroupOrderByEnum {
    id
    archived_at
    contact_email
    created_at
    description
    events_visibility
    header_image
    location_type_preference
    memberships_count
    name
    public_church_center_web_url
    schedule
    virtual_location_url
    widget_status
  }

  input GroupsGroupOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: GroupsGroupOrderByEnum
  }

  input GroupsGroupWhereAttributes {
    archive_status: String
    name: String
  }

  type GroupsGroupRelationships {
    GroupsEnrollment: [GroupsEnrollment]
    GroupsEvents: [GroupsEvent]
    GroupsGroup_type: [GroupsGroupType]
    GroupsLocation: [GroupsLocation]
    GroupsMemberships: [GroupsMembership]
    GroupsPeople: [GroupsPerson]
    GroupsResources: [GroupsResource]
    GroupsTags: [GroupsTag]
  }

  type GroupsGroupAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    archived_at: String

    """
    example: string
    """
    contact_email: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: string
    """
    description: String

    """
    example: value
    """
    events_visibility: String

    """
    example: [object Object]
    """
    header_image: String

    """
    example: value
    """
    location_type_preference: String

    """
    example: 1
    """
    memberships_count: String

    """
    example: string
    """
    name: String

    """
    example: string
    """
    public_church_center_web_url: String

    """
    example: string
    """
    schedule: String

    """
    example: string
    """
    virtual_location_url: String

    """
    example: [object Object]
    """
    widget_status: String
  }

  type GroupsGroup {
    id: ID!
    attributes: GroupsGroupAttributes
    relationships: GroupsGroupRelationships
  }

  enum GroupsGroupTypeOrderByEnum {
    id
    church_center_visible
    church_center_map_visible
    color
    default_group_settings
    description
    name
    position
  }

  input GroupsGroupTypeOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: GroupsGroupTypeOrderByEnum
  }

  input GroupsGroupTypeWhereAttributes {
    id: ID!
  }

  type GroupsGroupTypeRelationships {
    GroupsEvents: [GroupsEvent]
    GroupsGroups: [GroupsGroup]
    GroupsResources: [GroupsResource]
  }

  type GroupsGroupTypeAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: true
    """
    church_center_visible: Boolean

    """
    example: true
    """
    church_center_map_visible: Boolean

    """
    example: string
    """
    color: String

    """
    example: string
    """
    default_group_settings: String

    """
    example: string
    """
    description: String

    """
    example: string
    """
    name: String

    """
    example: 1
    """
    position: String
  }

  type GroupsGroupType {
    id: ID!
    attributes: GroupsGroupTypeAttributes
    relationships: GroupsGroupTypeRelationships
  }

  enum GroupsLocationOrderByEnum {
    id
    display_preference
    full_formatted_address
    latitude
    longitude
    name
    radius
    strategy
  }

  input GroupsLocationOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: GroupsLocationOrderByEnum
  }

  type GroupsLocationRelationships {
    GroupsGroup: [GroupsGroup]
  }

  type GroupsLocationAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: value
    """
    display_preference: String

    """
    example: string
    """
    full_formatted_address: String

    """
    example: 1.42
    """
    latitude: String

    """
    example: 1.42
    """
    longitude: String

    """
    example: string
    """
    name: String

    """
    example: string
    """
    radius: String

    """
    example: string
    """
    strategy: String
  }

  type GroupsLocation {
    id: ID!
    attributes: GroupsLocationAttributes
    relationships: GroupsLocationRelationships
  }

  enum GroupsMembershipOrderByEnum {
    id
    joined_at
    role
  }

  input GroupsMembershipOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: GroupsMembershipOrderByEnum
  }

  input GroupsMembershipWhereAttributes {
    role: String
  }

  type GroupsMembershipRelationships {
    GroupsGroup: [GroupsGroup]
    GroupsPerson: [GroupsPerson]
  }

  type GroupsMembershipAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    joined_at: String

    """
    example: string
    """
    role: String
  }

  type GroupsMembership {
    id: ID!
    attributes: GroupsMembershipAttributes
    relationships: GroupsMembershipRelationships
  }

  enum GroupsOrganizationOrderByEnum {
    id
    name
    time_zone
  }

  input GroupsOrganizationOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: GroupsOrganizationOrderByEnum
  }

  type GroupsOrganizationRelationships {
    GroupsEvents: [GroupsEvent]
    GroupsGroup_types: [GroupsGroupType]
    GroupsGroups: [GroupsGroup]
    GroupsPeople: [GroupsPerson]
    GroupsTag_groups: [GroupsTagGroup]
  }

  type GroupsOrganizationAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    name: String

    """
    example: string
    """
    time_zone: String
  }

  type GroupsOrganization {
    id: ID!
    attributes: GroupsOrganizationAttributes
    relationships: GroupsOrganizationRelationships
  }

  enum GroupsOwnerOrderByEnum {
    id
    avatar_url
    first_name
    last_name
  }

  input GroupsOwnerOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: GroupsOwnerOrderByEnum
  }

  type GroupsOwnerAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    avatar_url: String

    """
    example: string
    """
    first_name: String

    """
    example: string
    """
    last_name: String
  }

  type GroupsOwner {
    id: ID!
    attributes: GroupsOwnerAttributes
  }

  enum GroupsPersonOrderByEnum {
    id
    addresses
    avatar_url
    created_at
    email_addresses
    first_name
    last_name
    permissions
    phone_numbers
  }

  input GroupsPersonOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: GroupsPersonOrderByEnum
  }

  input GroupsPersonWhereAttributes {
    first_name: String
    last_name: String
  }

  type GroupsPersonRelationships {
    GroupsEvents: [GroupsEvent]
    GroupsGroups: [GroupsGroup]
    GroupsMemberships: [GroupsMembership]
  }

  type GroupsPersonAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example:
    """
    addresses: String

    """
    example: string
    """
    avatar_url: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example:
    """
    email_addresses: String

    """
    example: string
    """
    first_name: String

    """
    example: string
    """
    last_name: String

    """
    example: string
    """
    permissions: String

    """
    example:
    """
    phone_numbers: String
  }

  type GroupsPerson {
    id: ID!
    attributes: GroupsPersonAttributes
    relationships: GroupsPersonRelationships
  }

  enum GroupsResourceOrderByEnum {
    id
    description
    last_updated
    name
    type
    visibility
  }

  input GroupsResourceOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: GroupsResourceOrderByEnum
  }

  type GroupsResourceRelationships {
    GroupsDownload: [GroupsResource]
    GroupsVisit: [GroupsResource]
  }

  type GroupsResourceAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    description: String

    """
    example: 2000-01-01T12:00:00Z
    """
    last_updated: String

    """
    example: string
    """
    name: String

    """
    example: string
    """
    type: String

    """
    example: value
    """
    visibility: String
  }

  type GroupsResource {
    id: ID!
    attributes: GroupsResourceAttributes
    relationships: GroupsResourceRelationships
  }

  enum GroupsTagOrderByEnum {
    id
    name
    position
  }

  input GroupsTagOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: GroupsTagOrderByEnum
  }

  input GroupsTagWhereAttributes {
    id: ID!
    name: String
  }

  type GroupsTagRelationships {
    GroupsGroups: [GroupsGroup]
  }

  type GroupsTagAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    name: String

    """
    example: 1
    """
    position: String
  }

  type GroupsTag {
    id: ID!
    attributes: GroupsTagAttributes
    relationships: GroupsTagRelationships
  }

  enum GroupsTagGroupOrderByEnum {
    id
    display_publicly
    multiple_options_enabled
    name
    position
  }

  input GroupsTagGroupOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: GroupsTagGroupOrderByEnum
  }

  input GroupsTagGroupWhereAttributes {
    name: String
  }

  type GroupsTagGroupRelationships {
    GroupsTags: [GroupsTag]
  }

  type GroupsTagGroupAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: true
    """
    display_publicly: Boolean

    """
    example: true
    """
    multiple_options_enabled: Boolean

    """
    example: string
    """
    name: String

    """
    example: 1
    """
    position: String
  }

  type GroupsTagGroup {
    id: ID!
    attributes: GroupsTagGroupAttributes
    relationships: GroupsTagGroupRelationships
  }

  enum PeopleAddressOrderByEnum {
    id
    city
    state
    zip
    country_code
    location
    primary
    street_line_1
    street_line_2
    created_at
    updated_at
    country_name
  }

  input PeopleAddressOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleAddressOrderByEnum
  }

  input PeopleAddressWhereAttributes {
    city: String
    country_code: String
    location: String
    primary: Boolean
    state: String
    street_line_1: String
    street_line_2: String
    zip: String
  }

  type PeopleAddressAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    city: String

    """
    example: string
    """
    state: String

    """
    example: string
    """
    zip: String

    """
    example: string
    """
    country_code: String

    """
    example: string
    """
    location: String

    """
    example: true
    """
    primary: Boolean

    """
    example: string
    """
    street_line_1: String

    """
    example: string
    """
    street_line_2: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    country_name: String
  }

  type PeopleAddress {
    id: ID!
    attributes: PeopleAddressAttributes
  }

  enum PeopleAnniversaryCouplesOrderByEnum {
    id
  }

  input PeopleAnniversaryCouplesOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleAnniversaryCouplesOrderByEnum
  }

  type PeopleAnniversaryCouplesAttributes {
    """
    example: primary_key
    """
    id: ID!
  }

  type PeopleAnniversaryCouples {
    id: ID!
    attributes: PeopleAnniversaryCouplesAttributes
  }

  enum PeopleAppOrderByEnum {
    id
    name
    url
  }

  input PeopleAppOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleAppOrderByEnum
  }

  input PeopleAppWhereAttributes {
    name: String
    url: String
  }

  type PeopleAppAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    name: String

    """
    example: string
    """
    url: String
  }

  type PeopleApp {
    id: ID!
    attributes: PeopleAppAttributes
  }

  enum PeopleBackgroundCheckOrderByEnum {
    id
    current
    note
    status_updated_at
    report_url
    expires_on
    result
    completed_at
  }

  input PeopleBackgroundCheckOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleBackgroundCheckOrderByEnum
  }

  type PeopleBackgroundCheckRelationships {
    PeoplePerson: [PeoplePerson]
  }

  type PeopleBackgroundCheckAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: true
    """
    current: Boolean

    """
    example: string
    """
    note: String

    """
    example: 2000-01-01T12:00:00Z
    """
    status_updated_at: String

    """
    example: string
    """
    report_url: String

    """
    example: 2000-01-01
    """
    expires_on: String

    """
    example: string
    """
    result: String

    """
    example: 2000-01-01T12:00:00Z
    """
    completed_at: String
  }

  type PeopleBackgroundCheck {
    id: ID!
    attributes: PeopleBackgroundCheckAttributes
    relationships: PeopleBackgroundCheckRelationships
  }

  enum PeopleBirthdayPeopleOrderByEnum {
    id
  }

  input PeopleBirthdayPeopleOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleBirthdayPeopleOrderByEnum
  }

  type PeopleBirthdayPeopleAttributes {
    """
    example: primary_key
    """
    id: ID!
  }

  type PeopleBirthdayPeople {
    id: ID!
    attributes: PeopleBirthdayPeopleAttributes
  }

  enum PeopleCampusOrderByEnum {
    id
    latitude
    longitude
    description
    street
    city
    state
    zip
    country
    phone_number
    website
    twenty_four_hour_time
    date_format
    church_center_enabled
    contact_email_address
    time_zone
    geolocation_set_manually
    time_zone_raw
    name
    created_at
    updated_at
    avatar_url
  }

  input PeopleCampusOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleCampusOrderByEnum
  }

  input PeopleCampusWhereAttributes {
    created_at: String
    id: ID!
    updated_at: String
  }

  type PeopleCampusRelationships {
    PeopleLists: [PeopleList]
    PeopleService_times: [PeopleServiceTime]
  }

  type PeopleCampusAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 1.42
    """
    latitude: String

    """
    example: 1.42
    """
    longitude: String

    """
    example: string
    """
    description: String

    """
    example: string
    """
    street: String

    """
    example: string
    """
    city: String

    """
    example: string
    """
    state: String

    """
    example: string
    """
    zip: String

    """
    example: string
    """
    country: String

    """
    example: string
    """
    phone_number: String

    """
    example: string
    """
    website: String

    """
    example: true
    """
    twenty_four_hour_time: Boolean

    """
    example: 1
    """
    date_format: String

    """
    example: true
    """
    church_center_enabled: Boolean

    """
    example: string
    """
    contact_email_address: String

    """
    example: string
    """
    time_zone: String

    """
    example: true
    """
    geolocation_set_manually: Boolean

    """
    example: string
    """
    time_zone_raw: String

    """
    example: string
    """
    name: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    avatar_url: String
  }

  type PeopleCampus {
    id: ID!
    attributes: PeopleCampusAttributes
    relationships: PeopleCampusRelationships
  }

  enum PeopleCarrierOrderByEnum {
    id
    value
    name
    international
  }

  input PeopleCarrierOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleCarrierOrderByEnum
  }

  type PeopleCarrierAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    value: String

    """
    example: string
    """
    name: String

    """
    example: true
    """
    international: Boolean
  }

  type PeopleCarrier {
    id: ID!
    attributes: PeopleCarrierAttributes
  }

  enum PeopleConditionOrderByEnum {
    id
    application
    definition_class
    comparison
    settings
    definition_identifier
    description
    created_at
    updated_at
  }

  input PeopleConditionOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleConditionOrderByEnum
  }

  input PeopleConditionWhereAttributes {
    application: String
    comparison: String
    created_at: String
    definition_class: String
    definition_identifier: String
    description: String
    settings: String
    updated_at: String
  }

  type PeopleConditionRelationships {
    PeopleCreated_by: [PeoplePerson]
  }

  type PeopleConditionAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    application: String

    """
    example: string
    """
    definition_class: String

    """
    example: string
    """
    comparison: String

    """
    example: string
    """
    settings: String

    """
    example: string
    """
    definition_identifier: String

    """
    example: string
    """
    description: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String
  }

  type PeopleCondition {
    id: ID!
    attributes: PeopleConditionAttributes
    relationships: PeopleConditionRelationships
  }

  enum PeopleConnectedPersonOrderByEnum {
    id
    given_name
    first_name
    nickname
    middle_name
    last_name
    gender
    organization_name
    organization_id
  }

  input PeopleConnectedPersonOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleConnectedPersonOrderByEnum
  }

  type PeopleConnectedPersonAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    given_name: String

    """
    example: string
    """
    first_name: String

    """
    example: string
    """
    nickname: String

    """
    example: string
    """
    middle_name: String

    """
    example: string
    """
    last_name: String

    """
    example: string
    """
    gender: String

    """
    example: string
    """
    organization_name: String

    """
    example: primary_key
    """
    organization_id: ID!
  }

  type PeopleConnectedPerson {
    id: ID!
    attributes: PeopleConnectedPersonAttributes
  }

  enum PeopleEmailOrderByEnum {
    id
    address
    location
    primary
    created_at
    updated_at
    blocked
  }

  input PeopleEmailOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleEmailOrderByEnum
  }

  input PeopleEmailWhereAttributes {
    address: String
    blocked: Boolean
    created_at: String
    location: String
    primary: Boolean
    updated_at: String
  }

  type PeopleEmailRelationships {
    PeoplePerson: [PeoplePerson]
  }

  type PeopleEmailAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    address: String

    """
    example: string
    """
    location: String

    """
    example: true
    """
    primary: Boolean

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: true
    """
    blocked: Boolean
  }

  type PeopleEmail {
    id: ID!
    attributes: PeopleEmailAttributes
    relationships: PeopleEmailRelationships
  }

  enum PeopleFieldDatumOrderByEnum {
    id
    value
    file
    file_size
    file_content_type
    file_name
  }

  input PeopleFieldDatumOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleFieldDatumOrderByEnum
  }

  input PeopleFieldDatumWhereAttributes {
    file: String
    file_content_type: String
    file_name: String
    file_size: String
    value: String
  }

  type PeopleFieldDatumRelationships {
    PeopleField_definition: [PeopleFieldDefinition]
    PeopleField_option: [PeopleFieldOption]
    PeoplePerson: [PeoplePerson]
    PeopleTab: [PeopleTab]
  }

  type PeopleFieldDatumAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    value: String

    """
    example: string
    """
    file: String

    """
    example: 1
    """
    file_size: String

    """
    example: string
    """
    file_content_type: String

    """
    example: string
    """
    file_name: String
  }

  type PeopleFieldDatum {
    id: ID!
    attributes: PeopleFieldDatumAttributes
    relationships: PeopleFieldDatumRelationships
  }

  enum PeopleFieldDefinitionOrderByEnum {
    id
    data_type
    name
    sequence
    slug
    config
    deleted_at
    tab_id
  }

  input PeopleFieldDefinitionOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleFieldDefinitionOrderByEnum
  }

  input PeopleFieldDefinitionWhereAttributes {
    config: String
    data_type: String
    deleted_at: String
    name: String
    sequence: String
    slug: String
    tab_id: ID!
  }

  type PeopleFieldDefinitionRelationships {
    PeopleField_options: [PeopleFieldOption]
    PeopleTab: [PeopleTab]
  }

  type PeopleFieldDefinitionAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    data_type: String

    """
    example: string
    """
    name: String

    """
    example: 1
    """
    sequence: String

    """
    example: string
    """
    slug: String

    """
    example: string
    """
    config: String

    """
    example: 2000-01-01T12:00:00Z
    """
    deleted_at: String

    """
    example: primary_key
    """
    tab_id: ID!
  }

  type PeopleFieldDefinition {
    id: ID!
    attributes: PeopleFieldDefinitionAttributes
    relationships: PeopleFieldDefinitionRelationships
  }

  enum PeopleFieldOptionOrderByEnum {
    id
    value
    sequence
  }

  input PeopleFieldOptionOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleFieldOptionOrderByEnum
  }

  input PeopleFieldOptionWhereAttributes {
    sequence: String
    value: String
  }

  type PeopleFieldOptionAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    value: String

    """
    example: 1
    """
    sequence: String
  }

  type PeopleFieldOption {
    id: ID!
    attributes: PeopleFieldOptionAttributes
  }

  enum PeopleFormOrderByEnum {
    id
    name
    description
    active
    archived_at
    created_at
    updated_at
    deleted_at
    submission_count
    public_url
    recently_viewed
    archived
  }

  input PeopleFormOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleFormOrderByEnum
  }

  input PeopleFormWhereAttributes {
    active: Boolean
    id: ID!
  }

  type PeopleFormRelationships {
    PeopleCampus: [PeopleCampus]
    PeopleFields: [PeopleFormField]
    PeopleForm_submissions: [PeopleFormSubmission]
  }

  type PeopleFormAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    name: String

    """
    example: string
    """
    description: String

    """
    example: true
    """
    active: Boolean

    """
    example: 2000-01-01T12:00:00Z
    """
    archived_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    deleted_at: String

    """
    example: 1
    """
    submission_count: String

    """
    example: string
    """
    public_url: String

    """
    example: true
    """
    recently_viewed: Boolean

    """
    example: true
    """
    archived: Boolean
  }

  type PeopleForm {
    id: ID!
    attributes: PeopleFormAttributes
    relationships: PeopleFormRelationships
  }

  enum PeopleFormFieldOrderByEnum {
    id
    field_type
    label
    description
    required
    settings
    sequence
    created_at
    updated_at
  }

  input PeopleFormFieldOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleFormFieldOrderByEnum
  }

  type PeopleFormFieldRelationships {
    PeopleOptions: [PeopleFormFieldOption]
  }

  type PeopleFormFieldAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: value
    """
    field_type: String

    """
    example: string
    """
    label: String

    """
    example: string
    """
    description: String

    """
    example: true
    """
    required: Boolean

    """
    example: string
    """
    settings: String

    """
    example: 1
    """
    sequence: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String
  }

  type PeopleFormField {
    id: ID!
    attributes: PeopleFormFieldAttributes
    relationships: PeopleFormFieldRelationships
  }

  enum PeopleFormFieldOptionOrderByEnum {
    id
    label
    sequence
    created_at
    updated_at
  }

  input PeopleFormFieldOptionOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleFormFieldOptionOrderByEnum
  }

  type PeopleFormFieldOptionAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    label: String

    """
    example: 1
    """
    sequence: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String
  }

  type PeopleFormFieldOption {
    id: ID!
    attributes: PeopleFormFieldOptionAttributes
  }

  enum PeopleFormSubmissionOrderByEnum {
    id
    verified
    requires_verification
    created_at
  }

  input PeopleFormSubmissionOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleFormSubmissionOrderByEnum
  }

  type PeopleFormSubmissionRelationships {
    PeopleForm: [PeopleForm]
    PeopleForm_fields: [PeopleFormField]
    PeopleForm_submission_values: [PeopleFormSubmissionValue]
    PeoplePerson: [PeoplePerson]
  }

  type PeopleFormSubmissionAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: true
    """
    verified: Boolean

    """
    example: true
    """
    requires_verification: Boolean

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String
  }

  type PeopleFormSubmission {
    id: ID!
    attributes: PeopleFormSubmissionAttributes
    relationships: PeopleFormSubmissionRelationships
  }

  enum PeopleFormSubmissionValueOrderByEnum {
    id
    display_value
    attachments
  }

  input PeopleFormSubmissionValueOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleFormSubmissionValueOrderByEnum
  }

  type PeopleFormSubmissionValueAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    display_value: String

    """
    example:
    """
    attachments: String
  }

  type PeopleFormSubmissionValue {
    id: ID!
    attributes: PeopleFormSubmissionValueAttributes
  }

  enum PeopleHouseholdOrderByEnum {
    id
    name
    member_count
    primary_contact_name
    created_at
    updated_at
    avatar
    primary_contact_id
  }

  input PeopleHouseholdOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleHouseholdOrderByEnum
  }

  input PeopleHouseholdWhereAttributes {
    created_at: String
    member_count: String
    name: String
    primary_contact_name: String
    updated_at: String
  }

  type PeopleHouseholdRelationships {
    PeopleHousehold_memberships: [PeopleHouseholdMembership]
    PeoplePeople: [PeoplePerson]
  }

  type PeopleHouseholdAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    name: String

    """
    example: 1
    """
    member_count: String

    """
    example: string
    """
    primary_contact_name: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    avatar: String

    """
    example: primary_key
    """
    primary_contact_id: ID!
  }

  type PeopleHousehold {
    id: ID!
    attributes: PeopleHouseholdAttributes
    relationships: PeopleHouseholdRelationships
  }

  enum PeopleHouseholdMembershipOrderByEnum {
    id
    person_name
    pending
  }

  input PeopleHouseholdMembershipOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleHouseholdMembershipOrderByEnum
  }

  input PeopleHouseholdMembershipWhereAttributes {
    pending: Boolean
    person_name: String
  }

  type PeopleHouseholdMembershipRelationships {
    PeopleHousehold: [PeopleHousehold]
    PeoplePerson: [PeoplePerson]
  }

  type PeopleHouseholdMembershipAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    person_name: String

    """
    example: true
    """
    pending: Boolean
  }

  type PeopleHouseholdMembership {
    id: ID!
    attributes: PeopleHouseholdMembershipAttributes
    relationships: PeopleHouseholdMembershipRelationships
  }

  enum PeopleInactiveReasonOrderByEnum {
    id
    value
  }

  input PeopleInactiveReasonOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleInactiveReasonOrderByEnum
  }

  input PeopleInactiveReasonWhereAttributes {
    value: String
  }

  type PeopleInactiveReasonAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    value: String
  }

  type PeopleInactiveReason {
    id: ID!
    attributes: PeopleInactiveReasonAttributes
  }

  enum PeopleListOrderByEnum {
    id
    name
    auto_refresh
    status
    has_inactive_results
    include_inactive
    returns
    return_original_if_none
    subset
    automations_active
    automations_count
    paused_automations_count
    description
    invalid
    name_or_description
    recently_viewed
    refreshed_at
    starred
    total_people
    batch_completed_at
    created_at
    updated_at
  }

  input PeopleListOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleListOrderByEnum
  }

  input PeopleListWhereAttributes {
    batch_completed_at: String
    created_at: String
    id: ID!
    name: String
    updated_at: String
  }

  type PeopleListRelationships {
    PeopleCampus: [PeopleCampus]
    PeopleCategory: [PeopleListCategory]
    PeopleCreated_by: [PeoplePerson]
    PeopleList_results: [PeopleListResult]
    PeopleMailchimp_sync_status: [PeopleMailchimpSyncStatus]
    PeoplePeople: [PeoplePerson]
    PeopleRules: [PeopleRule]
    PeopleShares: [PeopleListShare]
    PeopleStar: [PeopleListStar]
    PeopleUpdated_by: [PeoplePerson]
  }

  type PeopleListAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    name: String

    """
    example: true
    """
    auto_refresh: Boolean

    """
    example: string
    """
    status: String

    """
    example: true
    """
    has_inactive_results: Boolean

    """
    example: true
    """
    include_inactive: Boolean

    """
    example: string
    """
    returns: String

    """
    example: true
    """
    return_original_if_none: Boolean

    """
    example: string
    """
    subset: String

    """
    example: true
    """
    automations_active: Boolean

    """
    example: 1
    """
    automations_count: String

    """
    example: 1
    """
    paused_automations_count: String

    """
    example: string
    """
    description: String

    """
    example: true
    """
    invalid: Boolean

    """
    example: string
    """
    name_or_description: String

    """
    example: true
    """
    recently_viewed: Boolean

    """
    example: 2000-01-01T12:00:00Z
    """
    refreshed_at: String

    """
    example: true
    """
    starred: Boolean

    """
    example: 1
    """
    total_people: String

    """
    example: 2000-01-01T12:00:00Z
    """
    batch_completed_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String
  }

  type PeopleList {
    id: ID!
    attributes: PeopleListAttributes
    relationships: PeopleListRelationships
  }

  enum PeopleListCategoryOrderByEnum {
    id
    name
    created_at
    updated_at
    organization_id
  }

  input PeopleListCategoryOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleListCategoryOrderByEnum
  }

  input PeopleListCategoryWhereAttributes {
    created_at: String
    name: String
    organization_id: ID!
    updated_at: String
  }

  type PeopleListCategoryRelationships {
    PeopleLists: [PeopleList]
  }

  type PeopleListCategoryAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    name: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: primary_key
    """
    organization_id: ID!
  }

  type PeopleListCategory {
    id: ID!
    attributes: PeopleListCategoryAttributes
    relationships: PeopleListCategoryRelationships
  }

  enum PeopleListResultOrderByEnum {
    id
    created_at
    updated_at
  }

  input PeopleListResultOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleListResultOrderByEnum
  }

  type PeopleListResultAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String
  }

  type PeopleListResult {
    id: ID!
    attributes: PeopleListResultAttributes
  }

  enum PeopleListShareOrderByEnum {
    id
    permission
    group
    created_at
    name
  }

  input PeopleListShareOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleListShareOrderByEnum
  }

  input PeopleListShareWhereAttributes {
    created_at: String
    group: String
    name: String
    permission: String
  }

  type PeopleListShareRelationships {
    PeoplePerson: [PeoplePerson]
  }

  type PeopleListShareAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: value
    """
    permission: String

    """
    example: value
    """
    group: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: string
    """
    name: String
  }

  type PeopleListShare {
    id: ID!
    attributes: PeopleListShareAttributes
    relationships: PeopleListShareRelationships
  }

  enum PeopleListStarOrderByEnum {
    id
    created_at
  }

  input PeopleListStarOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleListStarOrderByEnum
  }

  type PeopleListStarAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String
  }

  type PeopleListStar {
    id: ID!
    attributes: PeopleListStarAttributes
  }

  enum PeopleMailchimpSyncStatusOrderByEnum {
    id
    status
    error
    progress
    completed_at
    segment_id
  }

  input PeopleMailchimpSyncStatusOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleMailchimpSyncStatusOrderByEnum
  }

  type PeopleMailchimpSyncStatusAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    status: String

    """
    example: string
    """
    error: String

    """
    example: 1
    """
    progress: String

    """
    example: 2000-01-01T12:00:00Z
    """
    completed_at: String

    """
    example: 1
    """
    segment_id: String
  }

  type PeopleMailchimpSyncStatus {
    id: ID!
    attributes: PeopleMailchimpSyncStatusAttributes
  }

  enum PeopleMaritalStatusOrderByEnum {
    id
    value
  }

  input PeopleMaritalStatusOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleMaritalStatusOrderByEnum
  }

  input PeopleMaritalStatusWhereAttributes {
    value: String
  }

  type PeopleMaritalStatusAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    value: String
  }

  type PeopleMaritalStatus {
    id: ID!
    attributes: PeopleMaritalStatusAttributes
  }

  enum PeopleMessageOrderByEnum {
    id
    kind
    to_addresses
    subject
    file
    delivery_status
    reject_reason
    created_at
    sent_at
    bounced_at
    rejection_notification_sent_at
    from_name
    from_address
    read_at
    app_name
    message_type
  }

  input PeopleMessageOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleMessageOrderByEnum
  }

  input PeopleMessageWhereAttributes {
    app_name: String
    bounced_at: String
    created_at: String
    delivery_status: String
    file: String
    from_address: String
    kind: String
    reject_reason: String
    rejection_notification_sent_at: String
    sent_at: String
    subject: String
    to_addresses: String
  }

  type PeopleMessageRelationships {
    PeopleMessage_group: [PeopleMessageGroup]
    PeopleTo: [PeoplePerson]
  }

  type PeopleMessageAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: value
    """
    kind: String

    """
    example: string
    """
    to_addresses: String

    """
    example: string
    """
    subject: String

    """
    example: string
    """
    file: String

    """
    example: string
    """
    delivery_status: String

    """
    example: string
    """
    reject_reason: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    sent_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    bounced_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    rejection_notification_sent_at: String

    """
    example: string
    """
    from_name: String

    """
    example: string
    """
    from_address: String

    """
    example: 2000-01-01T12:00:00Z
    """
    read_at: String

    """
    example: string
    """
    app_name: String

    """
    example: string
    """
    message_type: String
  }

  type PeopleMessage {
    id: ID!
    attributes: PeopleMessageAttributes
    relationships: PeopleMessageRelationships
  }

  enum PeopleMessageGroupOrderByEnum {
    id
    uuid
    message_type
    from_address
    subject
    message_count
    system_message
    created_at
  }

  input PeopleMessageGroupOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleMessageGroupOrderByEnum
  }

  input PeopleMessageGroupWhereAttributes {
    created_at: String
    from_address: String
    message_count: String
    message_type: String
    subject: String
    system_message: Boolean
    uuid: String
  }

  type PeopleMessageGroupRelationships {
    PeopleApp: [PeopleApp]
    PeopleFrom: [PeoplePerson]
    PeopleMessages: [PeopleMessage]
  }

  type PeopleMessageGroupAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    uuid: String

    """
    example: string
    """
    message_type: String

    """
    example: string
    """
    from_address: String

    """
    example: string
    """
    subject: String

    """
    example: 1
    """
    message_count: String

    """
    example: true
    """
    system_message: Boolean

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String
  }

  type PeopleMessageGroup {
    id: ID!
    attributes: PeopleMessageGroupAttributes
    relationships: PeopleMessageGroupRelationships
  }

  enum PeopleNamePrefixOrderByEnum {
    id
    value
  }

  input PeopleNamePrefixOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleNamePrefixOrderByEnum
  }

  input PeopleNamePrefixWhereAttributes {
    value: String
  }

  type PeopleNamePrefixAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    value: String
  }

  type PeopleNamePrefix {
    id: ID!
    attributes: PeopleNamePrefixAttributes
  }

  enum PeopleNameSuffixOrderByEnum {
    id
    value
  }

  input PeopleNameSuffixOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleNameSuffixOrderByEnum
  }

  input PeopleNameSuffixWhereAttributes {
    value: String
  }

  type PeopleNameSuffixAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    value: String
  }

  type PeopleNameSuffix {
    id: ID!
    attributes: PeopleNameSuffixAttributes
  }

  enum PeopleNoteOrderByEnum {
    id
    note
    created_at
    updated_at
    display_date
    note_category_id
    organization_id
    person_id
    created_by_id
  }

  input PeopleNoteOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleNoteOrderByEnum
  }

  input PeopleNoteWhereAttributes {
    note: String
    note_category_id: ID!
  }

  type PeopleNoteRelationships {
    PeopleCategory: [PeopleNoteCategory]
    PeopleCreated_by: [PeoplePerson]
    PeoplePerson: [PeoplePerson]
  }

  type PeopleNoteAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    note: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    display_date: String

    """
    example: primary_key
    """
    note_category_id: ID!

    """
    example: primary_key
    """
    organization_id: ID!

    """
    example: primary_key
    """
    person_id: ID!

    """
    example: primary_key
    """
    created_by_id: ID!
  }

  type PeopleNote {
    id: ID!
    attributes: PeopleNoteAttributes
    relationships: PeopleNoteRelationships
  }

  enum PeopleNoteCategoryOrderByEnum {
    id
    name
    locked
    created_at
    updated_at
    organization_id
  }

  input PeopleNoteCategoryOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleNoteCategoryOrderByEnum
  }

  input PeopleNoteCategoryWhereAttributes {
    created_at: String
    locked: Boolean
    name: String
    organization_id: ID!
    updated_at: String
  }

  type PeopleNoteCategoryRelationships {
    PeopleShares: [PeopleNoteCategoryShare]
    PeopleSubscribers: [PeoplePerson]
    PeopleSubscriptions: [PeopleNoteCategorySubscription]
  }

  type PeopleNoteCategoryAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    name: String

    """
    example: true
    """
    locked: Boolean

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: primary_key
    """
    organization_id: ID!
  }

  type PeopleNoteCategory {
    id: ID!
    attributes: PeopleNoteCategoryAttributes
    relationships: PeopleNoteCategoryRelationships
  }

  enum PeopleNoteCategoryShareOrderByEnum {
    id
    group
    permission
    person_id
  }

  input PeopleNoteCategoryShareOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleNoteCategoryShareOrderByEnum
  }

  input PeopleNoteCategoryShareWhereAttributes {
    permission: String
  }

  type PeopleNoteCategoryShareRelationships {
    PeoplePerson: [PeoplePerson]
  }

  type PeopleNoteCategoryShareAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: value
    """
    group: String

    """
    example: value
    """
    permission: String

    """
    example: primary_key
    """
    person_id: ID!
  }

  type PeopleNoteCategoryShare {
    id: ID!
    attributes: PeopleNoteCategoryShareAttributes
    relationships: PeopleNoteCategoryShareRelationships
  }

  enum PeopleNoteCategorySubscriptionOrderByEnum {
    id
    created_at
    updated_at
  }

  input PeopleNoteCategorySubscriptionOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleNoteCategorySubscriptionOrderByEnum
  }

  input PeopleNoteCategorySubscriptionWhereAttributes {
    created_at: String
    updated_at: String
  }

  type PeopleNoteCategorySubscriptionAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String
  }

  type PeopleNoteCategorySubscription {
    id: ID!
    attributes: PeopleNoteCategorySubscriptionAttributes
  }

  enum PeopleOrganizationOrderByEnum {
    id
    name
    country_code
    date_format
    time_zone
    contact_website
    created_at
    avatar_url
  }

  input PeopleOrganizationOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleOrganizationOrderByEnum
  }

  type PeopleOrganizationRelationships {
    PeopleAddresses: [PeopleAddress]
    PeopleAnniversary_couples: [PeopleAnniversaryCouples]
    PeopleApps: [PeopleApp]
    PeopleBackground_checks: [PeopleBackgroundCheck]
    PeopleBirthday_people: [PeopleBirthdayPeople]
    PeopleCampuses: [PeopleCampus]
    PeopleCarriers: [PeopleCarrier]
    PeopleEmails: [PeopleEmail]
    PeopleField_data: [PeopleFieldDatum]
    PeopleField_definitions: [PeopleFieldDefinition]
    PeopleForms: [PeopleForm]
    PeopleHouseholds: [PeopleHousehold]
    PeopleInactive_reasons: [PeopleInactiveReason]
    PeopleList_categories: [PeopleListCategory]
    PeopleLists: [PeopleList]
    PeopleMarital_statuses: [PeopleMaritalStatus]
    PeopleMessage_groups: [PeopleMessageGroup]
    PeopleMessages: [PeopleMessage]
    PeopleName_prefixes: [PeopleNamePrefix]
    PeopleName_suffixes: [PeopleNameSuffix]
    PeopleNote_categories: [PeopleNoteCategory]
    PeopleNote_category_subscriptions: [PeopleNoteCategorySubscription]
    PeopleNotes: [PeopleNote]
    PeoplePeople: [PeoplePerson]
    PeoplePeople_imports: [PeoplePeopleImport]
    PeoplePerson_mergers: [PeoplePersonMerger]
    PeoplePhone_numbers: [PeoplePhoneNumber]
    PeopleReports: [PeopleReport]
    PeopleSchool_options: [PeopleSchoolOption]
    PeopleSocial_profiles: [PeopleSocialProfile]
    PeopleStats: [PeopleOrganizationStatistics]
    PeopleTabs: [PeopleTab]
    PeopleWorkflows: [PeopleWorkflow]
  }

  type PeopleOrganizationAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    name: String

    """
    example: string
    """
    country_code: String

    """
    example: 1
    """
    date_format: String

    """
    example: string
    """
    time_zone: String

    """
    example: string
    """
    contact_website: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: string
    """
    avatar_url: String
  }

  type PeopleOrganization {
    id: ID!
    attributes: PeopleOrganizationAttributes
    relationships: PeopleOrganizationRelationships
  }

  enum PeopleOrganizationStatisticsOrderByEnum {
    id
  }

  input PeopleOrganizationStatisticsOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleOrganizationStatisticsOrderByEnum
  }

  type PeopleOrganizationStatisticsAttributes {
    """
    example: primary_key
    """
    id: ID!
  }

  type PeopleOrganizationStatistics {
    id: ID!
    attributes: PeopleOrganizationStatisticsAttributes
  }

  enum PeoplePeopleImportOrderByEnum {
    id
    attribs
    status
    created_at
    updated_at
    processed_at
    undone_at
  }

  input PeoplePeopleImportOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeoplePeopleImportOrderByEnum
  }

  input PeoplePeopleImportWhereAttributes {
    status: String
  }

  type PeoplePeopleImportRelationships {
    PeopleConflicts: [PeoplePeopleImportConflict]
    PeopleHistories: [PeoplePeopleImportHistory]
  }

  type PeoplePeopleImportAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    attribs: String

    """
    example: value
    """
    status: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    processed_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    undone_at: String
  }

  type PeoplePeopleImport {
    id: ID!
    attributes: PeoplePeopleImportAttributes
    relationships: PeoplePeopleImportRelationships
  }

  enum PeoplePeopleImportConflictOrderByEnum {
    id
    kind
    name
    message
    data
    conflicting_changes
    ignore
    created_at
    updated_at
  }

  input PeoplePeopleImportConflictOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeoplePeopleImportConflictOrderByEnum
  }

  input PeoplePeopleImportConflictWhereAttributes {
    kind: String
    name: String
  }

  type PeoplePeopleImportConflictAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    kind: String

    """
    example: string
    """
    name: String

    """
    example: string
    """
    message: String

    """
    example: string
    """
    data: String

    """
    example: string
    """
    conflicting_changes: String

    """
    example: true
    """
    ignore: Boolean

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String
  }

  type PeoplePeopleImportConflict {
    id: ID!
    attributes: PeoplePeopleImportConflictAttributes
  }

  enum PeoplePeopleImportHistoryOrderByEnum {
    id
    name
    created_at
    updated_at
    conflicting_changes
    kind
  }

  input PeoplePeopleImportHistoryOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeoplePeopleImportHistoryOrderByEnum
  }

  input PeoplePeopleImportHistoryWhereAttributes {
    name: String
  }

  type PeoplePeopleImportHistoryRelationships {
    PeopleHousehold: [PeopleHousehold]
    PeoplePerson: [PeoplePerson]
  }

  type PeoplePeopleImportHistoryAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    name: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: [object Object]
    """
    conflicting_changes: String

    """
    example: string
    """
    kind: String
  }

  type PeoplePeopleImportHistory {
    id: ID!
    attributes: PeoplePeopleImportHistoryAttributes
    relationships: PeoplePeopleImportHistoryRelationships
  }

  enum PeoplePersonOrderByEnum {
    id
    given_name
    first_name
    nickname
    middle_name
    last_name
    birthdate
    anniversary
    gender
    grade
    child
    graduation_year
    site_administrator
    accounting_administrator
    people_permissions
    membership
    inactivated_at
    status
    medical_notes
    mfa_configured
    created_at
    updated_at
    avatar
    name
    demographic_avatar_url
    directory_status
    passed_background_check
    can_create_forms
    can_email_lists
    school_type
    remote_id
  }

  input PeoplePersonOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeoplePersonOrderByEnum
  }

  input PeoplePersonWhereAttributes {
    accounting_administrator: Boolean
    anniversary: String
    birthdate: String
    child: Boolean
    created_at: String
    first_name: String
    gender: String
    given_name: String
    grade: String
    graduation_year: String
    id: ID!
    inactivated_at: String
    last_name: String
    medical_notes: String
    membership: String
    mfa_configured: Boolean
    middle_name: String
    nickname: String
    people_permissions: String
    remote_id: String
    search_name: String
    search_name_or_email: String
    search_name_or_email_or_phone_number: String
    search_phone_number: String
    search_phone_number_e164: String
    site_administrator: Boolean
    status: String
    updated_at: String
  }

  type PeoplePersonRelationships {
    PeopleAddresses: [PeopleAddress]
    PeopleApps: [PeopleApp]
    PeopleBackground_checks: [PeopleBackgroundCheck]
    PeopleConnected_people: [PeopleConnectedPerson]
    PeopleEmails: [PeopleEmail]
    PeopleField_data: [PeopleFieldDatum]
    PeopleHousehold_memberships: [PeopleHouseholdMembership]
    PeopleHouseholds: [PeopleHousehold]
    PeopleInactive_reason: [PeopleInactiveReason]
    PeopleMarital_status: [PeopleMaritalStatus]
    PeopleMessage_groups: [PeopleMessageGroup]
    PeopleMessages: [PeopleMessage]
    PeopleName_prefix: [PeopleNamePrefix]
    PeopleName_suffix: [PeopleNameSuffix]
    PeopleNotes: [PeopleNote]
    PeopleOrganization: [PeopleOrganization]
    PeoplePerson_apps: [PeoplePersonApp]
    PeoplePhone_numbers: [PeoplePhoneNumber]
    PeoplePlatform_notifications: [PeoplePlatformNotification]
    PeoplePrimary_campus: [PeopleCampus]
    PeopleSchool: [PeopleSchoolOption]
    PeopleSocial_profiles: [PeopleSocialProfile]
    PeopleWorkflow_cards: [PeopleWorkflowCard]
    PeopleWorkflow_shares: [PeopleWorkflowShare]
  }

  type PeoplePersonAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    given_name: String

    """
    example: string
    """
    first_name: String

    """
    example: string
    """
    nickname: String

    """
    example: string
    """
    middle_name: String

    """
    example: string
    """
    last_name: String

    """
    example: 2000-01-01
    """
    birthdate: String

    """
    example: 2000-01-01
    """
    anniversary: String

    """
    example: string
    """
    gender: String

    """
    example: 1
    """
    grade: String

    """
    example: true
    """
    child: Boolean

    """
    example: 1
    """
    graduation_year: String

    """
    example: true
    """
    site_administrator: Boolean

    """
    example: true
    """
    accounting_administrator: Boolean

    """
    example: string
    """
    people_permissions: String

    """
    example: string
    """
    membership: String

    """
    example: 2000-01-01T12:00:00Z
    """
    inactivated_at: String

    """
    example: string
    """
    status: String

    """
    example: string
    """
    medical_notes: String

    """
    example: true
    """
    mfa_configured: Boolean

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    avatar: String

    """
    example: string
    """
    name: String

    """
    example: string
    """
    demographic_avatar_url: String

    """
    example: string
    """
    directory_status: String

    """
    example: true
    """
    passed_background_check: Boolean

    """
    example: true
    """
    can_create_forms: Boolean

    """
    example: true
    """
    can_email_lists: Boolean

    """
    example: string
    """
    school_type: String

    """
    example: 1
    """
    remote_id: String
  }

  type PeoplePerson {
    id: ID!
    attributes: PeoplePersonAttributes
    relationships: PeoplePersonRelationships
  }

  enum PeoplePersonAppOrderByEnum {
    id
    allow_pco_login
    people_permissions
  }

  input PeoplePersonAppOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeoplePersonAppOrderByEnum
  }

  type PeoplePersonAppRelationships {
    PeopleApp: [PeopleApp]
  }

  type PeoplePersonAppAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: true
    """
    allow_pco_login: Boolean

    """
    example: value
    """
    people_permissions: String
  }

  type PeoplePersonApp {
    id: ID!
    attributes: PeoplePersonAppAttributes
    relationships: PeoplePersonAppRelationships
  }

  enum PeoplePersonMergerOrderByEnum {
    id
    created_at
    person_to_keep_id
    person_to_remove_id
  }

  input PeoplePersonMergerOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeoplePersonMergerOrderByEnum
  }

  input PeoplePersonMergerWhereAttributes {
    created_at: String
    person_to_keep_id: ID!
    person_to_remove_id: ID!
  }

  type PeoplePersonMergerAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: primary_key
    """
    person_to_keep_id: ID!

    """
    example: primary_key
    """
    person_to_remove_id: ID!
  }

  type PeoplePersonMerger {
    id: ID!
    attributes: PeoplePersonMergerAttributes
  }

  enum PeoplePhoneNumberOrderByEnum {
    id
    number
    carrier
    location
    primary
    created_at
    updated_at
    e164
    international
    national
    country_code
    formatted_number
  }

  input PeoplePhoneNumberOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeoplePhoneNumberOrderByEnum
  }

  input PeoplePhoneNumberWhereAttributes {
    carrier: String
    created_at: String
    location: String
    number: String
    primary: Boolean
    updated_at: String
  }

  type PeoplePhoneNumberAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    number: String

    """
    example: string
    """
    carrier: String

    """
    example: string
    """
    location: String

    """
    example: true
    """
    primary: Boolean

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    e164: String

    """
    example: string
    """
    international: String

    """
    example: string
    """
    national: String

    """
    example: string
    """
    country_code: String

    """
    example: string
    """
    formatted_number: String
  }

  type PeoplePhoneNumber {
    id: ID!
    attributes: PeoplePhoneNumberAttributes
  }

  enum PeoplePlatformNotificationOrderByEnum {
    id
    html
  }

  input PeoplePlatformNotificationOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeoplePlatformNotificationOrderByEnum
  }

  type PeoplePlatformNotificationAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    html: String
  }

  type PeoplePlatformNotification {
    id: ID!
    attributes: PeoplePlatformNotificationAttributes
  }

  enum PeopleReportOrderByEnum {
    id
    name
    body
    created_at
    updated_at
  }

  input PeopleReportOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleReportOrderByEnum
  }

  input PeopleReportWhereAttributes {
    body: String
    created_at: String
    name: String
    updated_at: String
  }

  type PeopleReportRelationships {
    PeopleCreated_by: [PeoplePerson]
    PeopleUpdated_by: [PeoplePerson]
  }

  type PeopleReportAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    name: String

    """
    example: string
    """
    body: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String
  }

  type PeopleReport {
    id: ID!
    attributes: PeopleReportAttributes
    relationships: PeopleReportRelationships
  }

  enum PeopleRuleOrderByEnum {
    id
    subset
    created_at
    updated_at
  }

  input PeopleRuleOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleRuleOrderByEnum
  }

  input PeopleRuleWhereAttributes {
    created_at: String
    subset: String
    updated_at: String
  }

  type PeopleRuleRelationships {
    PeopleConditions: [PeopleCondition]
  }

  type PeopleRuleAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    subset: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String
  }

  type PeopleRule {
    id: ID!
    attributes: PeopleRuleAttributes
    relationships: PeopleRuleRelationships
  }

  enum PeopleSchoolOptionOrderByEnum {
    id
    value
    sequence
    beginning_grade
    ending_grade
    school_types
  }

  input PeopleSchoolOptionOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleSchoolOptionOrderByEnum
  }

  input PeopleSchoolOptionWhereAttributes {
    beginning_grade: String
    ending_grade: String
    school_types: String
    sequence: String
    value: String
  }

  type PeopleSchoolOptionRelationships {
    PeoplePromotes_to_school: [PeopleSchoolOption]
  }

  type PeopleSchoolOptionAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    value: String

    """
    example: 1
    """
    sequence: String

    """
    example: string
    """
    beginning_grade: String

    """
    example: string
    """
    ending_grade: String

    """
    example:
    """
    school_types: String
  }

  type PeopleSchoolOption {
    id: ID!
    attributes: PeopleSchoolOptionAttributes
    relationships: PeopleSchoolOptionRelationships
  }

  enum PeopleServiceTimeOrderByEnum {
    id
    start_time
    day
    description
  }

  input PeopleServiceTimeOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleServiceTimeOrderByEnum
  }

  type PeopleServiceTimeAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 1
    """
    start_time: String

    """
    example: value
    """
    day: String

    """
    example: string
    """
    description: String
  }

  type PeopleServiceTime {
    id: ID!
    attributes: PeopleServiceTimeAttributes
  }

  enum PeopleSocialProfileOrderByEnum {
    id
    site
    url
    verified
    created_at
    updated_at
  }

  input PeopleSocialProfileOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleSocialProfileOrderByEnum
  }

  input PeopleSocialProfileWhereAttributes {
    created_at: String
    site: String
    updated_at: String
    url: String
    verified: Boolean
  }

  type PeopleSocialProfileRelationships {
    PeoplePerson: [PeoplePerson]
  }

  type PeopleSocialProfileAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    site: String

    """
    example: string
    """
    url: String

    """
    example: true
    """
    verified: Boolean

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String
  }

  type PeopleSocialProfile {
    id: ID!
    attributes: PeopleSocialProfileAttributes
    relationships: PeopleSocialProfileRelationships
  }

  enum PeopleTabOrderByEnum {
    id
    name
    sequence
    slug
  }

  input PeopleTabOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleTabOrderByEnum
  }

  input PeopleTabWhereAttributes {
    name: String
    sequence: String
    slug: String
  }

  type PeopleTabRelationships {
    PeopleField_definitions: [PeopleFieldDefinition]
    PeopleField_options: [PeopleFieldOption]
  }

  type PeopleTabAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    name: String

    """
    example: 1
    """
    sequence: String

    """
    example: string
    """
    slug: String
  }

  type PeopleTab {
    id: ID!
    attributes: PeopleTabAttributes
    relationships: PeopleTabRelationships
  }

  enum PeopleWorkflowOrderByEnum {
    id
    name
    my_ready_card_count
    total_ready_card_count
    completed_card_count
    total_cards_count
    total_ready_and_snoozed_card_count
    created_at
    updated_at
    deleted_at
    campus_id
    workflow_category_id
    my_overdue_card_count
    my_due_soon_card_count
    recently_viewed
  }

  input PeopleWorkflowOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleWorkflowOrderByEnum
  }

  input PeopleWorkflowWhereAttributes {
    campus_id: ID!
    created_at: String
    deleted_at: String
    id: ID!
    name: String
    updated_at: String
    workflow_category_id: ID!
  }

  type PeopleWorkflowRelationships {
    PeopleCards: [PeopleWorkflowCard]
    PeopleCategory: [PeopleWorkflowCategory]
    PeopleShared_people: [PeoplePerson]
    PeopleShares: [PeopleWorkflowShare]
    PeopleSteps: [PeopleWorkflowStep]
  }

  type PeopleWorkflowAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    name: String

    """
    example: 1
    """
    my_ready_card_count: String

    """
    example: 1
    """
    total_ready_card_count: String

    """
    example: 1
    """
    completed_card_count: String

    """
    example: 1
    """
    total_cards_count: String

    """
    example: 1
    """
    total_ready_and_snoozed_card_count: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    deleted_at: String

    """
    example: primary_key
    """
    campus_id: ID!

    """
    example: primary_key
    """
    workflow_category_id: ID!

    """
    example: 1
    """
    my_overdue_card_count: String

    """
    example: 1
    """
    my_due_soon_card_count: String

    """
    example: true
    """
    recently_viewed: Boolean
  }

  type PeopleWorkflow {
    id: ID!
    attributes: PeopleWorkflowAttributes
    relationships: PeopleWorkflowRelationships
  }

  enum PeopleWorkflowCardOrderByEnum {
    id
    snooze_until
    overdue
    stage
    calculated_due_at_in_days_ago
    sticky_assignment
    created_at
    updated_at
    completed_at
    flagged_for_notification_at
    removed_at
    moved_to_step_at
  }

  input PeopleWorkflowCardOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleWorkflowCardOrderByEnum
  }

  input PeopleWorkflowCardWhereAttributes {
    stage: String
  }

  type PeopleWorkflowCardRelationships {
    PeopleActivities: [PeopleWorkflowCardActivity]
    PeopleAssignee: [PeoplePerson]
    PeopleCurrent_step: [PeopleWorkflowStep]
    PeopleNotes: [PeopleWorkflowCardNote]
    PeoplePerson: [PeoplePerson]
    PeopleWorkflow: [PeopleWorkflow]
  }

  type PeopleWorkflowCardAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    snooze_until: String

    """
    example: true
    """
    overdue: Boolean

    """
    example: string
    """
    stage: String

    """
    example: 1
    """
    calculated_due_at_in_days_ago: String

    """
    example: true
    """
    sticky_assignment: Boolean

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    completed_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    flagged_for_notification_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    removed_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    moved_to_step_at: String
  }

  type PeopleWorkflowCard {
    id: ID!
    attributes: PeopleWorkflowCardAttributes
    relationships: PeopleWorkflowCardRelationships
  }

  enum PeopleWorkflowCardActivityOrderByEnum {
    id
    comment
    content
    form_submission_url
    person_avatar_url
    person_name
    reassigned_to_avatar_url
    reassigned_to_name
    subject
    type
    content_is_html
    created_at
  }

  input PeopleWorkflowCardActivityOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleWorkflowCardActivityOrderByEnum
  }

  type PeopleWorkflowCardActivityAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    comment: String

    """
    example: string
    """
    content: String

    """
    example: string
    """
    form_submission_url: String

    """
    example: string
    """
    person_avatar_url: String

    """
    example: string
    """
    person_name: String

    """
    example: string
    """
    reassigned_to_avatar_url: String

    """
    example: string
    """
    reassigned_to_name: String

    """
    example: string
    """
    subject: String

    """
    example: string
    """
    type: String

    """
    example: true
    """
    content_is_html: Boolean

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String
  }

  type PeopleWorkflowCardActivity {
    id: ID!
    attributes: PeopleWorkflowCardActivityAttributes
  }

  enum PeopleWorkflowCardNoteOrderByEnum {
    id
    note
    created_at
  }

  input PeopleWorkflowCardNoteOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleWorkflowCardNoteOrderByEnum
  }

  type PeopleWorkflowCardNoteAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    note: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String
  }

  type PeopleWorkflowCardNote {
    id: ID!
    attributes: PeopleWorkflowCardNoteAttributes
  }

  enum PeopleWorkflowCategoryOrderByEnum {
    id
    name
    created_at
    updated_at
  }

  input PeopleWorkflowCategoryOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleWorkflowCategoryOrderByEnum
  }

  input PeopleWorkflowCategoryWhereAttributes {
    created_at: String
    name: String
    updated_at: String
  }

  type PeopleWorkflowCategoryAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    name: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String
  }

  type PeopleWorkflowCategory {
    id: ID!
    attributes: PeopleWorkflowCategoryAttributes
  }

  enum PeopleWorkflowShareOrderByEnum {
    id
    group
    permission
    person_id
  }

  input PeopleWorkflowShareOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleWorkflowShareOrderByEnum
  }

  input PeopleWorkflowShareWhereAttributes {
    permission: String
  }

  type PeopleWorkflowShareRelationships {
    PeoplePerson: [PeoplePerson]
  }

  type PeopleWorkflowShareAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: value
    """
    group: String

    """
    example: value
    """
    permission: String

    """
    example: primary_key
    """
    person_id: ID!
  }

  type PeopleWorkflowShare {
    id: ID!
    attributes: PeopleWorkflowShareAttributes
    relationships: PeopleWorkflowShareRelationships
  }

  enum PeopleWorkflowStepOrderByEnum {
    id
    created_at
    updated_at
    sequence
    name
    description
    auto_snooze_days
    auto_snooze_value
    auto_snooze_interval
    expected_response_time_in_days
    my_ready_card_count
    total_ready_card_count
    default_assignee_id
  }

  input PeopleWorkflowStepOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleWorkflowStepOrderByEnum
  }

  input PeopleWorkflowStepWhereAttributes {
    created_at: String
    name: String
    updated_at: String
  }

  type PeopleWorkflowStepRelationships {
    PeopleAssignee_summaries: [PeopleWorkflowStepAssigneeSummary]
    PeopleDefault_assignee: [PeoplePerson]
  }

  type PeopleWorkflowStepAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: 1
    """
    sequence: String

    """
    example: string
    """
    name: String

    """
    example: string
    """
    description: String

    """
    example: 1
    """
    auto_snooze_days: String

    """
    example: 1
    """
    auto_snooze_value: String

    """
    example: value
    """
    auto_snooze_interval: String

    """
    example: 1
    """
    expected_response_time_in_days: String

    """
    example: 1
    """
    my_ready_card_count: String

    """
    example: 1
    """
    total_ready_card_count: String

    """
    example: primary_key
    """
    default_assignee_id: ID!
  }

  type PeopleWorkflowStep {
    id: ID!
    attributes: PeopleWorkflowStepAttributes
    relationships: PeopleWorkflowStepRelationships
  }

  enum PeopleWorkflowStepAssigneeSummaryOrderByEnum {
    id
    ready_count
    snoozed_count
  }

  input PeopleWorkflowStepAssigneeSummaryOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: PeopleWorkflowStepAssigneeSummaryOrderByEnum
  }

  type PeopleWorkflowStepAssigneeSummaryRelationships {
    PeoplePerson: [PeoplePerson]
  }

  type PeopleWorkflowStepAssigneeSummaryAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 1
    """
    ready_count: String

    """
    example: 1
    """
    snoozed_count: String
  }

  type PeopleWorkflowStepAssigneeSummary {
    id: ID!
    attributes: PeopleWorkflowStepAssigneeSummaryAttributes
    relationships: PeopleWorkflowStepAssigneeSummaryRelationships
  }

  enum ServicesArrangementOrderByEnum {
    id
    bpm
    created_at
    has_chords
    length
    meter
    name
    notes
    print_margin
    print_orientation
    print_page_size
    updated_at
    chord_chart
    chord_chart_font
    chord_chart_key
    chord_chart_columns
    chord_chart_font_size
    has_chord_chart
    lyrics_enabled
    number_chart_enabled
    numeral_chart_enabled
    sequence
    sequence_short
    sequence_full
    chord_chart_chord_color
    archived_at
    lyrics
  }

  input ServicesArrangementOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesArrangementOrderByEnum
  }

  type ServicesArrangementRelationships {
    ServicesAttachments: [ServicesAttachment]
    ServicesKeys: [ServicesKey]
    ServicesSections: [ServicesArrangementSections]
    ServicesTags: [ServicesTag]
  }

  type ServicesArrangementAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 1.42
    """
    bpm: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: true
    """
    has_chords: Boolean

    """
    example: 1
    """
    length: String

    """
    example: string
    """
    meter: String

    """
    example: string
    """
    name: String

    """
    example: string
    """
    notes: String

    """
    example: string
    """
    print_margin: String

    """
    example: string
    """
    print_orientation: String

    """
    example: string
    """
    print_page_size: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    chord_chart: String

    """
    example: string
    """
    chord_chart_font: String

    """
    example: string
    """
    chord_chart_key: String

    """
    example: 1
    """
    chord_chart_columns: String

    """
    example: 1
    """
    chord_chart_font_size: String

    """
    example: true
    """
    has_chord_chart: Boolean

    """
    example: true
    """
    lyrics_enabled: Boolean

    """
    example: true
    """
    number_chart_enabled: Boolean

    """
    example: true
    """
    numeral_chart_enabled: Boolean

    """
    example:
    """
    sequence: String

    """
    example:
    """
    sequence_short: String

    """
    example:
    """
    sequence_full: String

    """
    example: 1
    """
    chord_chart_chord_color: String

    """
    example: 2000-01-01T12:00:00Z
    """
    archived_at: String

    """
    example: string
    """
    lyrics: String
  }

  type ServicesArrangement {
    id: ID!
    attributes: ServicesArrangementAttributes
    relationships: ServicesArrangementRelationships
  }

  enum ServicesArrangementSectionsOrderByEnum {
    id
    sections
  }

  input ServicesArrangementSectionsOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesArrangementSectionsOrderByEnum
  }

  type ServicesArrangementSectionsAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example:
    """
    sections: String
  }

  type ServicesArrangementSections {
    id: ID!
    attributes: ServicesArrangementSectionsAttributes
  }

  enum ServicesAttachmentOrderByEnum {
    id
    created_at
    page_order
    updated_at
    filename
    file_size
    licenses_purchased
    licenses_remaining
    licenses_used
    content
    content_type
    display_name
    filetype
    linked_url
    pco_type
    remote_link
    thumbnail_url
    url
    allow_mp3_download
    web_streamable
    downloadable
    transposable
    import_to_item_details
    streamable
    has_preview
    file_upload_identifier
  }

  input ServicesAttachmentOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesAttachmentOrderByEnum
  }

  input ServicesAttachmentWhereAttributes {
    licenses_purchased: String
  }

  type ServicesAttachmentRelationships {
    ServicesZooms: [ServicesZoom]
  }

  type ServicesAttachmentAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: string
    """
    page_order: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    filename: String

    """
    example: 1
    """
    file_size: String

    """
    example: 1
    """
    licenses_purchased: String

    """
    example: 1
    """
    licenses_remaining: String

    """
    example: 1
    """
    licenses_used: String

    """
    example: string
    """
    content: String

    """
    example: string
    """
    content_type: String

    """
    example: string
    """
    display_name: String

    """
    example: string
    """
    filetype: String

    """
    example: string
    """
    linked_url: String

    """
    example: string
    """
    pco_type: String

    """
    example: string
    """
    remote_link: String

    """
    example: string
    """
    thumbnail_url: String

    """
    example: string
    """
    url: String

    """
    example: true
    """
    allow_mp3_download: Boolean

    """
    example: true
    """
    web_streamable: Boolean

    """
    example: true
    """
    downloadable: Boolean

    """
    example: true
    """
    transposable: Boolean

    """
    example: true
    """
    import_to_item_details: Boolean

    """
    example: true
    """
    streamable: Boolean

    """
    example: true
    """
    has_preview: Boolean

    """
    example: string
    """
    file_upload_identifier: String
  }

  type ServicesAttachment {
    id: ID!
    attributes: ServicesAttachmentAttributes
    relationships: ServicesAttachmentRelationships
  }

  enum ServicesAttachmentActivityOrderByEnum {
    id
    date
    attachment_url
    activity_type
  }

  input ServicesAttachmentActivityOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesAttachmentActivityOrderByEnum
  }

  type ServicesAttachmentActivityAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01
    """
    date: String

    """
    example: string
    """
    attachment_url: String

    """
    example: string
    """
    activity_type: String
  }

  type ServicesAttachmentActivity {
    id: ID!
    attributes: ServicesAttachmentActivityAttributes
  }

  enum ServicesAttachmentTypeOrderByEnum {
    id
    name
    aliases
    capoed_chord_charts
    chord_charts
    exclusions
    lyrics
    number_charts
    numeral_charts
    built_in
  }

  input ServicesAttachmentTypeOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesAttachmentTypeOrderByEnum
  }

  type ServicesAttachmentTypeAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    name: String

    """
    example: string
    """
    aliases: String

    """
    example: true
    """
    capoed_chord_charts: Boolean

    """
    example: true
    """
    chord_charts: Boolean

    """
    example: string
    """
    exclusions: String

    """
    example: true
    """
    lyrics: Boolean

    """
    example: true
    """
    number_charts: Boolean

    """
    example: true
    """
    numeral_charts: Boolean

    """
    example: true
    """
    built_in: Boolean
  }

  type ServicesAttachmentType {
    id: ID!
    attributes: ServicesAttachmentTypeAttributes
  }

  enum ServicesAttendanceOrderByEnum {
    id
    checked_in_at
    check_ins_event_id
    check_ins_event_period_id
  }

  input ServicesAttendanceOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesAttendanceOrderByEnum
  }

  type ServicesAttendanceAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    checked_in_at: String

    """
    example: primary_key
    """
    check_ins_event_id: ID!

    """
    example: primary_key
    """
    check_ins_event_period_id: ID!
  }

  type ServicesAttendance {
    id: ID!
    attributes: ServicesAttendanceAttributes
  }

  enum ServicesAvailableSignupOrderByEnum {
    id
    organization_name
    planning_center_url
    service_type_name
    signups_available
  }

  input ServicesAvailableSignupOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesAvailableSignupOrderByEnum
  }

  type ServicesAvailableSignupRelationships {
    ServicesSignup_sheets: [ServicesSignupSheet]
  }

  type ServicesAvailableSignupAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    organization_name: String

    """
    example: string
    """
    planning_center_url: String

    """
    example: string
    """
    service_type_name: String

    """
    example: true
    """
    signups_available: Boolean
  }

  type ServicesAvailableSignup {
    id: ID!
    attributes: ServicesAvailableSignupAttributes
    relationships: ServicesAvailableSignupRelationships
  }

  enum ServicesBlockoutOrderByEnum {
    id
    description
    group_identifier
    organization_name
    reason
    repeat_frequency
    repeat_interval
    repeat_period
    settings
    time_zone
    created_at
    updated_at
    repeat_until
    starts_at
    ends_at
    share
  }

  input ServicesBlockoutOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesBlockoutOrderByEnum
  }

  input ServicesBlockoutWhereAttributes {
    group_identifier: String
  }

  type ServicesBlockoutRelationships {
    ServicesBlockout_dates: [ServicesBlockoutDate]
    ServicesBlockout_exceptions: [ServicesBlockoutException]
  }

  type ServicesBlockoutAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    description: String

    """
    example: string
    """
    group_identifier: String

    """
    example: string
    """
    organization_name: String

    """
    example: string
    """
    reason: String

    """
    example: string
    """
    repeat_frequency: String

    """
    example: string
    """
    repeat_interval: String

    """
    example: string
    """
    repeat_period: String

    """
    example: string
    """
    settings: String

    """
    example: string
    """
    time_zone: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: 2000-01-01
    """
    repeat_until: String

    """
    example: 2000-01-01T12:00:00Z
    """
    starts_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    ends_at: String

    """
    example: true
    """
    share: Boolean
  }

  type ServicesBlockout {
    id: ID!
    attributes: ServicesBlockoutAttributes
    relationships: ServicesBlockoutRelationships
  }

  enum ServicesBlockoutDateOrderByEnum {
    id
    group_identifier
    reason
    time_zone
    share
    starts_at
    ends_at
    ends_at_utc
    starts_at_utc
  }

  input ServicesBlockoutDateOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesBlockoutDateOrderByEnum
  }

  type ServicesBlockoutDateAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    group_identifier: String

    """
    example: string
    """
    reason: String

    """
    example: string
    """
    time_zone: String

    """
    example: true
    """
    share: Boolean

    """
    example: 2000-01-01T12:00:00Z
    """
    starts_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    ends_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    ends_at_utc: String

    """
    example: 2000-01-01T12:00:00Z
    """
    starts_at_utc: String
  }

  type ServicesBlockoutDate {
    id: ID!
    attributes: ServicesBlockoutDateAttributes
  }

  enum ServicesBlockoutExceptionOrderByEnum {
    id
    date
    created_at
    updated_at
  }

  input ServicesBlockoutExceptionOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesBlockoutExceptionOrderByEnum
  }

  type ServicesBlockoutExceptionAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01
    """
    date: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String
  }

  type ServicesBlockoutException {
    id: ID!
    attributes: ServicesBlockoutExceptionAttributes
  }

  enum ServicesBlockoutScheduleConflictOrderByEnum {
    id
    dates
    organization_name
    person_avatar
    person_name
    position_display_times
    service_type_name
    short_dates
    status
    team_name
    team_position_name
    sort_date
    can_accept_partial
  }

  input ServicesBlockoutScheduleConflictOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesBlockoutScheduleConflictOrderByEnum
  }

  type ServicesBlockoutScheduleConflictAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    dates: String

    """
    example: string
    """
    organization_name: String

    """
    example: string
    """
    person_avatar: String

    """
    example: string
    """
    person_name: String

    """
    example: string
    """
    position_display_times: String

    """
    example: string
    """
    service_type_name: String

    """
    example: string
    """
    short_dates: String

    """
    example: string
    """
    status: String

    """
    example: string
    """
    team_name: String

    """
    example: string
    """
    team_position_name: String

    """
    example: 2000-01-01T12:00:00Z
    """
    sort_date: String

    """
    example: true
    """
    can_accept_partial: Boolean
  }

  type ServicesBlockoutScheduleConflict {
    id: ID!
    attributes: ServicesBlockoutScheduleConflictAttributes
  }

  enum ServicesChatOrderByEnum {
    id
    payload
    people
    plans
    teams
  }

  input ServicesChatOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesChatOrderByEnum
  }

  type ServicesChatAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    payload: String

    """
    example:
    """
    people: String

    """
    example:
    """
    plans: String

    """
    example:
    """
    teams: String
  }

  type ServicesChat {
    id: ID!
    attributes: ServicesChatAttributes
  }

  enum ServicesContributorOrderByEnum {
    id
    created_at
    updated_at
    contributable_action
    contributable_category
    contributable_type
    full_name
    photo_thumbnail_url
  }

  input ServicesContributorOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesContributorOrderByEnum
  }

  type ServicesContributorAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    contributable_action: String

    """
    example: string
    """
    contributable_category: String

    """
    example: string
    """
    contributable_type: String

    """
    example: string
    """
    full_name: String

    """
    example: string
    """
    photo_thumbnail_url: String
  }

  type ServicesContributor {
    id: ID!
    attributes: ServicesContributorAttributes
  }

  enum ServicesCustomSlideOrderByEnum {
    id
    body
    label
    order
    enabled
  }

  input ServicesCustomSlideOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesCustomSlideOrderByEnum
  }

  type ServicesCustomSlideAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    body: String

    """
    example: string
    """
    label: String

    """
    example: 1
    """
    order: String

    """
    example: true
    """
    enabled: Boolean
  }

  type ServicesCustomSlide {
    id: ID!
    attributes: ServicesCustomSlideAttributes
  }

  enum ServicesEmailTemplateOrderByEnum {
    id
    kind
    created_at
    updated_at
    html_body
    subject
  }

  input ServicesEmailTemplateOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesEmailTemplateOrderByEnum
  }

  type ServicesEmailTemplateAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    kind: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    html_body: String

    """
    example: string
    """
    subject: String
  }

  type ServicesEmailTemplate {
    id: ID!
    attributes: ServicesEmailTemplateAttributes
  }

  enum ServicesEmailTemplateRenderedResponseOrderByEnum {
    id
    body
    subject
  }

  input ServicesEmailTemplateRenderedResponseOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesEmailTemplateRenderedResponseOrderByEnum
  }

  type ServicesEmailTemplateRenderedResponseAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    body: String

    """
    example: string
    """
    subject: String
  }

  type ServicesEmailTemplateRenderedResponse {
    id: ID!
    attributes: ServicesEmailTemplateRenderedResponseAttributes
  }

  enum ServicesFolderOrderByEnum {
    id
    created_at
    name
    updated_at
    container
  }

  input ServicesFolderOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesFolderOrderByEnum
  }

  type ServicesFolderRelationships {
    ServicesFolders: [ServicesFolder]
    ServicesService_types: [ServicesServiceType]
  }

  type ServicesFolderAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: string
    """
    name: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    container: String
  }

  type ServicesFolder {
    id: ID!
    attributes: ServicesFolderAttributes
    relationships: ServicesFolderRelationships
  }

  enum ServicesFolderPathOrderByEnum {
    id
    path
  }

  input ServicesFolderPathOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesFolderPathOrderByEnum
  }

  type ServicesFolderPathAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example:
    """
    path: String
  }

  type ServicesFolderPath {
    id: ID!
    attributes: ServicesFolderPathAttributes
  }

  enum ServicesItemOrderByEnum {
    id
    title
    sequence
    created_at
    updated_at
    length
    item_type
    html_details
    service_position
    description
    key_name
    custom_arrangement_sequence
    custom_arrangement_sequence_short
    custom_arrangement_sequence_full
  }

  input ServicesItemOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesItemOrderByEnum
  }

  type ServicesItemRelationships {
    ServicesArrangement: [ServicesArrangement]
    ServicesAttachments: [ServicesAttachment]
    ServicesCustom_slides: [ServicesCustomSlide]
    ServicesItem_notes: [ServicesItemNote]
    ServicesItem_times: [ServicesItemTime]
    ServicesKey: [ServicesKey]
    ServicesMedia: [ServicesMedia]
    ServicesSelected_attachment: [ServicesAttachment]
    ServicesSelected_background: [ServicesAttachment]
    ServicesSong: [ServicesSong]
  }

  type ServicesItemAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    title: String

    """
    example: 1
    """
    sequence: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: 1
    """
    length: String

    """
    example: string
    """
    item_type: String

    """
    example: string
    """
    html_details: String

    """
    example: string
    """
    service_position: String

    """
    example: string
    """
    description: String

    """
    example: string
    """
    key_name: String

    """
    example:
    """
    custom_arrangement_sequence: String

    """
    example:
    """
    custom_arrangement_sequence_short: String

    """
    example:
    """
    custom_arrangement_sequence_full: String
  }

  type ServicesItem {
    id: ID!
    attributes: ServicesItemAttributes
    relationships: ServicesItemRelationships
  }

  enum ServicesItemNoteOrderByEnum {
    id
    created_at
    updated_at
    content
    category_name
  }

  input ServicesItemNoteOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesItemNoteOrderByEnum
  }

  type ServicesItemNoteRelationships {
    ServicesItem_note_category: [ServicesItemNoteCategory]
  }

  type ServicesItemNoteAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    content: String

    """
    example: string
    """
    category_name: String
  }

  type ServicesItemNote {
    id: ID!
    attributes: ServicesItemNoteAttributes
    relationships: ServicesItemNoteRelationships
  }

  enum ServicesItemNoteCategoryOrderByEnum {
    id
    created_at
    deleted_at
    name
    sequence
    updated_at
    frequently_used
  }

  input ServicesItemNoteCategoryOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesItemNoteCategoryOrderByEnum
  }

  type ServicesItemNoteCategoryAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    deleted_at: String

    """
    example: string
    """
    name: String

    """
    example: 1
    """
    sequence: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: true
    """
    frequently_used: Boolean
  }

  type ServicesItemNoteCategory {
    id: ID!
    attributes: ServicesItemNoteCategoryAttributes
  }

  enum ServicesItemTimeOrderByEnum {
    id
    live_start_at
    live_end_at
    exclude
    length
    length_offset
  }

  input ServicesItemTimeOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesItemTimeOrderByEnum
  }

  type ServicesItemTimeAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    live_start_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    live_end_at: String

    """
    example: true
    """
    exclude: Boolean

    """
    example: 1
    """
    length: String

    """
    example: 1
    """
    length_offset: String
  }

  type ServicesItemTime {
    id: ID!
    attributes: ServicesItemTimeAttributes
  }

  enum ServicesKeyOrderByEnum {
    id
    created_at
    updated_at
    name
    alternate_keys
    ending_key
    starting_key
    starting_minor
    ending_minor
  }

  input ServicesKeyOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesKeyOrderByEnum
  }

  type ServicesKeyRelationships {
    ServicesAttachments: [ServicesAttachment]
  }

  type ServicesKeyAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    name: String

    """
    example: string
    """
    alternate_keys: String

    """
    example: string
    """
    ending_key: String

    """
    example: string
    """
    starting_key: String

    """
    example: true
    """
    starting_minor: Boolean

    """
    example: true
    """
    ending_minor: Boolean
  }

  type ServicesKey {
    id: ID!
    attributes: ServicesKeyAttributes
    relationships: ServicesKeyRelationships
  }

  enum ServicesLayoutOrderByEnum {
    id
  }

  input ServicesLayoutOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesLayoutOrderByEnum
  }

  type ServicesLayoutAttributes {
    """
    example: primary_key
    """
    id: ID!
  }

  type ServicesLayout {
    id: ID!
    attributes: ServicesLayoutAttributes
  }

  enum ServicesLiveOrderByEnum {
    id
    series_title
    title
    dates
    live_channel
    chat_room_channel
    can_control
    can_take_control
    can_chat
    can_control_video_feed
  }

  input ServicesLiveOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesLiveOrderByEnum
  }

  type ServicesLiveRelationships {
    ServicesController: [ServicesPerson]
    ServicesCurrent_item_time: [ServicesItemTime]
    ServicesItems: [ServicesItem]
    ServicesNext_item_time: [ServicesItemTime]
    ServicesService_type: [ServicesServiceType]
    ServicesWatchable_plans: [ServicesPlan]
  }

  type ServicesLiveAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    series_title: String

    """
    example: string
    """
    title: String

    """
    example: string
    """
    dates: String

    """
    example: string
    """
    live_channel: String

    """
    example: string
    """
    chat_room_channel: String

    """
    example: true
    """
    can_control: Boolean

    """
    example: true
    """
    can_take_control: Boolean

    """
    example: true
    """
    can_chat: Boolean

    """
    example: true
    """
    can_control_video_feed: Boolean
  }

  type ServicesLive {
    id: ID!
    attributes: ServicesLiveAttributes
    relationships: ServicesLiveRelationships
  }

  enum ServicesLiveControllerOrderByEnum {
    id
    created_at
    updated_at
    full_name
    photo_thumbnail_url
  }

  input ServicesLiveControllerOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesLiveControllerOrderByEnum
  }

  type ServicesLiveControllerAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    full_name: String

    """
    example: string
    """
    photo_thumbnail_url: String
  }

  type ServicesLiveController {
    id: ID!
    attributes: ServicesLiveControllerAttributes
  }

  enum ServicesMediaOrderByEnum {
    id
    created_at
    updated_at
    themes
    title
    thumbnail_file_name
    thumbnail_content_type
    thumbnail_file_size
    thumbnail_updated_at
    preview_file_name
    preview_content_type
    preview_file_size
    preview_updated_at
    length
    media_type
    media_type_name
    thumbnail_url
    creator_name
    preview_url
    image_url
  }

  input ServicesMediaOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesMediaOrderByEnum
  }

  input ServicesMediaWhereAttributes {
    creator_name: String
    id: ID!
    themes: String
    title: String
  }

  type ServicesMediaRelationships {
    ServicesAttachments: [ServicesAttachment]
    ServicesMedia_schedules: [ServicesMediaSchedule]
    ServicesTags: [ServicesTag]
  }

  type ServicesMediaAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    themes: String

    """
    example: string
    """
    title: String

    """
    example: string
    """
    thumbnail_file_name: String

    """
    example: string
    """
    thumbnail_content_type: String

    """
    example: 1
    """
    thumbnail_file_size: String

    """
    example: 2000-01-01T12:00:00Z
    """
    thumbnail_updated_at: String

    """
    example: string
    """
    preview_file_name: String

    """
    example: string
    """
    preview_content_type: String

    """
    example: 1
    """
    preview_file_size: String

    """
    example: 2000-01-01T12:00:00Z
    """
    preview_updated_at: String

    """
    example: 1
    """
    length: String

    """
    example: string
    """
    media_type: String

    """
    example: string
    """
    media_type_name: String

    """
    example: string
    """
    thumbnail_url: String

    """
    example: string
    """
    creator_name: String

    """
    example: string
    """
    preview_url: String

    """
    example: string
    """
    image_url: String
  }

  type ServicesMedia {
    id: ID!
    attributes: ServicesMediaAttributes
    relationships: ServicesMediaRelationships
  }

  enum ServicesMediaScheduleOrderByEnum {
    id
    plan_dates
    plan_short_dates
    service_type_name
    plan_sort_date
  }

  input ServicesMediaScheduleOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesMediaScheduleOrderByEnum
  }

  type ServicesMediaScheduleAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    plan_dates: String

    """
    example: string
    """
    plan_short_dates: String

    """
    example: string
    """
    service_type_name: String

    """
    example: 2000-01-01T12:00:00Z
    """
    plan_sort_date: String
  }

  type ServicesMediaSchedule {
    id: ID!
    attributes: ServicesMediaScheduleAttributes
  }

  enum ServicesNeededPositionOrderByEnum {
    id
    quantity
    team_position_name
    scheduled_to
  }

  input ServicesNeededPositionOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesNeededPositionOrderByEnum
  }

  type ServicesNeededPositionRelationships {
    ServicesTeam: [ServicesTeam]
    ServicesTime: [ServicesPlanTime]
  }

  type ServicesNeededPositionAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 1
    """
    quantity: String

    """
    example: string
    """
    team_position_name: String

    """
    example: string
    """
    scheduled_to: String
  }

  type ServicesNeededPosition {
    id: ID!
    attributes: ServicesNeededPositionAttributes
    relationships: ServicesNeededPositionRelationships
  }

  enum ServicesOrganizationOrderByEnum {
    id
    ccli
    created_at
    date_format
    music_stand_enabled
    name
    projector_enabled
    time_zone
    twenty_four_hour_time
    updated_at
    owner_name
    required_to_set_download_permission
    secret
    allow_mp3_download
    calendar_starts_on_sunday
    ccli_connected
    ccli_auto_reporting_enabled
    ccli_reporting_enabled
    extra_file_storage_allowed
    file_storage_exceeded
    file_storage_size
    file_storage_size_used
    file_storage_extra_enabled
    rehearsal_mix_enabled
    rehearsal_pack_connected
    legacy_id
    file_storage_extra_charges
    people_allowed
    people_remaining
    beta
  }

  input ServicesOrganizationOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesOrganizationOrderByEnum
  }

  type ServicesOrganizationRelationships {
    ServicesAttachment_types: [ServicesAttachmentType]
    ServicesChat: [ServicesChat]
    ServicesEmail_templates: [ServicesEmailTemplate]
    ServicesFolders: [ServicesFolder]
    ServicesMedia: [ServicesMedia]
    ServicesPeople: [ServicesPerson]
    ServicesPlans: [ServicesOrganization]
    ServicesReport_templates: [ServicesReportTemplate]
    ServicesSeries: [ServicesSeries]
    ServicesService_types: [ServicesServiceType]
    ServicesSongs: [ServicesSong]
    ServicesTag_groups: [ServicesTagGroup]
    ServicesTeams: [ServicesTeam]
  }

  type ServicesOrganizationAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    ccli: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 1
    """
    date_format: String

    """
    example: true
    """
    music_stand_enabled: Boolean

    """
    example: string
    """
    name: String

    """
    example: true
    """
    projector_enabled: Boolean

    """
    example: string
    """
    time_zone: String

    """
    example: true
    """
    twenty_four_hour_time: Boolean

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    owner_name: String

    """
    example: string
    """
    required_to_set_download_permission: String

    """
    example: string
    """
    secret: String

    """
    example: true
    """
    allow_mp3_download: Boolean

    """
    example: true
    """
    calendar_starts_on_sunday: Boolean

    """
    example: true
    """
    ccli_connected: Boolean

    """
    example: true
    """
    ccli_auto_reporting_enabled: Boolean

    """
    example: true
    """
    ccli_reporting_enabled: Boolean

    """
    example: true
    """
    extra_file_storage_allowed: Boolean

    """
    example: true
    """
    file_storage_exceeded: Boolean

    """
    example: true
    """
    file_storage_size: Boolean

    """
    example: true
    """
    file_storage_size_used: Boolean

    """
    example: true
    """
    file_storage_extra_enabled: Boolean

    """
    example: true
    """
    rehearsal_mix_enabled: Boolean

    """
    example: true
    """
    rehearsal_pack_connected: Boolean

    """
    example: primary_key
    """
    legacy_id: ID!

    """
    example: 1
    """
    file_storage_extra_charges: String

    """
    example: 1
    """
    people_allowed: String

    """
    example: 1
    """
    people_remaining: String

    """
    example: true
    """
    beta: Boolean
  }

  type ServicesOrganization {
    id: ID!
    attributes: ServicesOrganizationAttributes
    relationships: ServicesOrganizationRelationships
  }

  enum ServicesPersonOrderByEnum {
    id
    photo_url
    photo_thumbnail_url
    preferred_app
    assigned_to_rehearsal_team
    archived_at
    created_at
    first_name
    last_name
    name_prefix
    name_suffix
    updated_at
    facebook_id
    legacy_id
    full_name
    max_permissions
    permissions
    status
    anniversary
    birthdate
    given_name
    middle_name
    nickname
    access_media_attachments
    access_plan_attachments
    access_song_attachments
    archived
    site_administrator
    logged_in_at
    notes
    passed_background_check
    ical_code
    preferred_max_plans_per_day
    preferred_max_plans_per_month
    praise_charts_enabled
    me_tab
    plans_tab
    songs_tab
    media_tab
    people_tab
    can_edit_all_people
    can_view_all_people
    onboardings
  }

  input ServicesPersonOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesPersonOrderByEnum
  }

  input ServicesPersonWhereAttributes {
    assigned_to_rehearsal_team: Boolean
    legacy_id: ID!
  }

  type ServicesPersonRelationships {
    ServicesAvailable_signups: [ServicesAvailableSignup]
    ServicesBlockouts: [ServicesBlockout]
    ServicesPerson_team_position_assignments: [ServicesPersonTeamPositionAssignment]
    ServicesPlan_people: [ServicesPlanPerson]
    ServicesSchedules: [ServicesSchedule]
    ServicesScheduling_preferences: [ServicesSchedulingPreference]
    ServicesTags: [ServicesTag]
    ServicesTeam_leaders: [ServicesTeamLeader]
    ServicesText_settings: [ServicesTextSetting]
  }

  type ServicesPersonAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    photo_url: String

    """
    example: string
    """
    photo_thumbnail_url: String

    """
    example: string
    """
    preferred_app: String

    """
    example: true
    """
    assigned_to_rehearsal_team: Boolean

    """
    example: 2000-01-01T12:00:00Z
    """
    archived_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: string
    """
    first_name: String

    """
    example: string
    """
    last_name: String

    """
    example: string
    """
    name_prefix: String

    """
    example: string
    """
    name_suffix: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: primary_key
    """
    facebook_id: ID!

    """
    example: primary_key
    """
    legacy_id: ID!

    """
    example: string
    """
    full_name: String

    """
    example: string
    """
    max_permissions: String

    """
    example: string
    """
    permissions: String

    """
    example: string
    """
    status: String

    """
    example: 2000-01-01T12:00:00Z
    """
    anniversary: String

    """
    example: 2000-01-01T12:00:00Z
    """
    birthdate: String

    """
    example: string
    """
    given_name: String

    """
    example: string
    """
    middle_name: String

    """
    example: string
    """
    nickname: String

    """
    example: true
    """
    access_media_attachments: Boolean

    """
    example: true
    """
    access_plan_attachments: Boolean

    """
    example: true
    """
    access_song_attachments: Boolean

    """
    example: true
    """
    archived: Boolean

    """
    example: true
    """
    site_administrator: Boolean

    """
    example: 2000-01-01T12:00:00Z
    """
    logged_in_at: String

    """
    example: string
    """
    notes: String

    """
    example: true
    """
    passed_background_check: Boolean

    """
    example: string
    """
    ical_code: String

    """
    example: 1
    """
    preferred_max_plans_per_day: String

    """
    example: 1
    """
    preferred_max_plans_per_month: String

    """
    example: true
    """
    praise_charts_enabled: Boolean

    """
    example: string
    """
    me_tab: String

    """
    example: string
    """
    plans_tab: String

    """
    example: string
    """
    songs_tab: String

    """
    example: string
    """
    media_tab: String

    """
    example: string
    """
    people_tab: String

    """
    example: true
    """
    can_edit_all_people: Boolean

    """
    example: true
    """
    can_view_all_people: Boolean

    """
    example:
    """
    onboardings: String
  }

  type ServicesPerson {
    id: ID!
    attributes: ServicesPersonAttributes
    relationships: ServicesPersonRelationships
  }

  enum ServicesPersonTeamPositionAssignmentOrderByEnum {
    id
    created_at
    updated_at
    schedule_preference
    preferred_weeks
  }

  input ServicesPersonTeamPositionAssignmentOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesPersonTeamPositionAssignmentOrderByEnum
  }

  type ServicesPersonTeamPositionAssignmentRelationships {
    ServicesPerson: [ServicesPerson]
    ServicesTeam_position: [ServicesTeamPosition]
  }

  type ServicesPersonTeamPositionAssignmentAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    schedule_preference: String

    """
    example:
    """
    preferred_weeks: String
  }

  type ServicesPersonTeamPositionAssignment {
    id: ID!
    attributes: ServicesPersonTeamPositionAssignmentAttributes
    relationships: ServicesPersonTeamPositionAssignmentRelationships
  }

  enum ServicesPlanOrderByEnum {
    id
    created_at
    title
    updated_at
    public
    series_title
    plan_notes_count
    other_time_count
    rehearsal_time_count
    service_time_count
    plan_people_count
    needed_positions_count
    items_count
    total_length
    can_view_order
    multi_day
    prefers_order_view
    rehearsable
    files_expire_at
    sort_date
    last_time_at
    permissions
    dates
    short_dates
    planning_center_url
    reminders_disabled
  }

  input ServicesPlanOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesPlanOrderByEnum
  }

  input ServicesPlanWhereAttributes {
    created_at: String
    id: ID!
    series_title: String
    title: String
    updated_at: String
  }

  type ServicesPlanRelationships {
    ServicesAll_attachments: [ServicesAttachment]
    ServicesAttachments: [ServicesAttachment]
    ServicesAttendances: [ServicesAttendance]
    ServicesContributors: [ServicesContributor]
    ServicesItems: [ServicesItem]
    ServicesLive: [ServicesLive]
    ServicesMy_schedules: [ServicesSchedule]
    ServicesNeeded_positions: [ServicesNeededPosition]
    ServicesNext_plan: [ServicesPlan]
    ServicesNotes: [ServicesPlanNote]
    ServicesPlan_times: [ServicesPlanTime]
    ServicesPrevious_plan: [ServicesPlan]
    ServicesSeries: [ServicesSeries]
    ServicesSignup_teams: [ServicesTeam]
    ServicesTeam_members: [ServicesPlanPerson]
  }

  type ServicesPlanAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: string
    """
    title: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: true
    """
    public: Boolean

    """
    example: string
    """
    series_title: String

    """
    example: 1
    """
    plan_notes_count: String

    """
    example: 1
    """
    other_time_count: String

    """
    example: 1
    """
    rehearsal_time_count: String

    """
    example: 1
    """
    service_time_count: String

    """
    example: 1
    """
    plan_people_count: String

    """
    example: 1
    """
    needed_positions_count: String

    """
    example: 1
    """
    items_count: String

    """
    example: 1
    """
    total_length: String

    """
    example: true
    """
    can_view_order: Boolean

    """
    example: true
    """
    multi_day: Boolean

    """
    example: true
    """
    prefers_order_view: Boolean

    """
    example: true
    """
    rehearsable: Boolean

    """
    example: 2000-01-01T12:00:00Z
    """
    files_expire_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    sort_date: String

    """
    example: 2000-01-01T12:00:00Z
    """
    last_time_at: String

    """
    example: string
    """
    permissions: String

    """
    example: string
    """
    dates: String

    """
    example: string
    """
    short_dates: String

    """
    example: string
    """
    planning_center_url: String

    """
    example: true
    """
    reminders_disabled: Boolean
  }

  type ServicesPlan {
    id: ID!
    attributes: ServicesPlanAttributes
    relationships: ServicesPlanRelationships
  }

  enum ServicesPlanNoteOrderByEnum {
    id
    created_at
    updated_at
    category_name
    content
  }

  input ServicesPlanNoteOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesPlanNoteOrderByEnum
  }

  input ServicesPlanNoteWhereAttributes {
    created_at: String
    updated_at: String
  }

  type ServicesPlanNoteRelationships {
    ServicesPlan_note_category: [ServicesPlanNoteCategory]
  }

  type ServicesPlanNoteAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    category_name: String

    """
    example: string
    """
    content: String
  }

  type ServicesPlanNote {
    id: ID!
    attributes: ServicesPlanNoteAttributes
    relationships: ServicesPlanNoteRelationships
  }

  enum ServicesPlanNoteCategoryOrderByEnum {
    id
    created_at
    deleted_at
    name
    sequence
    updated_at
  }

  input ServicesPlanNoteCategoryOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesPlanNoteCategoryOrderByEnum
  }

  type ServicesPlanNoteCategoryAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    deleted_at: String

    """
    example: string
    """
    name: String

    """
    example: 1
    """
    sequence: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String
  }

  type ServicesPlanNoteCategory {
    id: ID!
    attributes: ServicesPlanNoteCategoryAttributes
  }

  enum ServicesPlanPersonOrderByEnum {
    id
    status
    created_at
    updated_at
    notes
    decline_reason
    name
    notification_changed_by_name
    notification_sender_name
    team_position_name
    photo_thumbnail
    scheduled_by_name
    status_updated_at
    notification_changed_at
    notification_prepared_at
    notification_read_at
    notification_sent_at
    prepare_notification
    can_accept_partial
  }

  input ServicesPlanPersonOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesPlanPersonOrderByEnum
  }

  type ServicesPlanPersonRelationships {
    ServicesDeclined_plan_times: [ServicesPlanTime]
    ServicesPerson: [ServicesPerson]
    ServicesPlan: [ServicesPlan]
    ServicesPlan_person_times: [ServicesPlanPersonTime]
    ServicesPlan_times: [ServicesPlanTime]
    ServicesTeam: [ServicesTeam]
  }

  type ServicesPlanPersonAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    status: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    notes: String

    """
    example: string
    """
    decline_reason: String

    """
    example: string
    """
    name: String

    """
    example: string
    """
    notification_changed_by_name: String

    """
    example: string
    """
    notification_sender_name: String

    """
    example: string
    """
    team_position_name: String

    """
    example: string
    """
    photo_thumbnail: String

    """
    example: string
    """
    scheduled_by_name: String

    """
    example: 2000-01-01T12:00:00Z
    """
    status_updated_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    notification_changed_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    notification_prepared_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    notification_read_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    notification_sent_at: String

    """
    example: true
    """
    prepare_notification: Boolean

    """
    example: true
    """
    can_accept_partial: Boolean
  }

  type ServicesPlanPerson {
    id: ID!
    attributes: ServicesPlanPersonAttributes
    relationships: ServicesPlanPersonRelationships
  }

  enum ServicesPlanPersonTimeOrderByEnum {
    id
    status
    created_at
    updated_at
  }

  input ServicesPlanPersonTimeOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesPlanPersonTimeOrderByEnum
  }

  type ServicesPlanPersonTimeAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    status: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String
  }

  type ServicesPlanPersonTime {
    id: ID!
    attributes: ServicesPlanPersonTimeAttributes
  }

  enum ServicesPlanTemplateOrderByEnum {
    id
    name
    created_at
    updated_at
    item_count
    team_count
    note_count
    can_view_order
    multi_day
    prefers_order_view
    rehearsable
  }

  input ServicesPlanTemplateOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesPlanTemplateOrderByEnum
  }

  type ServicesPlanTemplateRelationships {
    ServicesItems: [ServicesItem]
    ServicesNotes: [ServicesPlanNote]
  }

  type ServicesPlanTemplateAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    name: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: 1
    """
    item_count: String

    """
    example: 1
    """
    team_count: String

    """
    example: 1
    """
    note_count: String

    """
    example: true
    """
    can_view_order: Boolean

    """
    example: true
    """
    multi_day: Boolean

    """
    example: true
    """
    prefers_order_view: Boolean

    """
    example: true
    """
    rehearsable: Boolean
  }

  type ServicesPlanTemplate {
    id: ID!
    attributes: ServicesPlanTemplateAttributes
    relationships: ServicesPlanTemplateRelationships
  }

  enum ServicesPlanTimeOrderByEnum {
    id
    created_at
    updated_at
    name
    time_type
    recorded
    team_reminders
    starts_at
    ends_at
    live_starts_at
    live_ends_at
  }

  input ServicesPlanTimeOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesPlanTimeOrderByEnum
  }

  input ServicesPlanTimeWhereAttributes {
    time_type: String
  }

  type ServicesPlanTimeRelationships {
    ServicesSplit_team_rehearsal_assignments: [ServicesSplitTeamRehearsalAssignment]
  }

  type ServicesPlanTimeAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    name: String

    """
    example: string
    """
    time_type: String

    """
    example: true
    """
    recorded: Boolean

    """
    example:
    """
    team_reminders: String

    """
    example: 2000-01-01T12:00:00Z
    """
    starts_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    ends_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    live_starts_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    live_ends_at: String
  }

  type ServicesPlanTime {
    id: ID!
    attributes: ServicesPlanTimeAttributes
    relationships: ServicesPlanTimeRelationships
  }

  enum ServicesPublicViewOrderByEnum {
    id
    series_and_plan_titles
    item_lengths
    service_times
    song_items
    media_items
    regular_items
    headers
    itunes
    amazon
    spotify
    youtube
    vimeo
  }

  input ServicesPublicViewOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesPublicViewOrderByEnum
  }

  type ServicesPublicViewAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: true
    """
    series_and_plan_titles: Boolean

    """
    example: true
    """
    item_lengths: Boolean

    """
    example: true
    """
    service_times: Boolean

    """
    example: true
    """
    song_items: Boolean

    """
    example: true
    """
    media_items: Boolean

    """
    example: true
    """
    regular_items: Boolean

    """
    example: true
    """
    headers: Boolean

    """
    example: true
    """
    itunes: Boolean

    """
    example: true
    """
    amazon: Boolean

    """
    example: true
    """
    spotify: Boolean

    """
    example: true
    """
    youtube: Boolean

    """
    example: true
    """
    vimeo: Boolean
  }

  type ServicesPublicView {
    id: ID!
    attributes: ServicesPublicViewAttributes
  }

  enum ServicesReportTemplateOrderByEnum {
    id
    body
    title
    type
    default
  }

  input ServicesReportTemplateOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesReportTemplateOrderByEnum
  }

  type ServicesReportTemplateAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    body: String

    """
    example: string
    """
    title: String

    """
    example: string
    """
    type: String

    """
    example: true
    """
    default: Boolean
  }

  type ServicesReportTemplate {
    id: ID!
    attributes: ServicesReportTemplateAttributes
  }

  enum ServicesScheduleOrderByEnum {
    id
    sort_date
    dates
    decline_reason
    organization_name
    organization_time_zone
    organization_twenty_four_hour_time
    person_name
    position_display_times
    responds_to_name
    service_type_name
    short_dates
    status
    team_name
    team_position_name
    can_accept_partial
    can_accept_partial_one_time
    can_rehearse
    plan_visible
    plan_visible_to_me
  }

  input ServicesScheduleOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesScheduleOrderByEnum
  }

  type ServicesScheduleRelationships {
    ServicesDeclined_plan_times: [ServicesPlanTime]
    ServicesPlan_times: [ServicesPlanTime]
    ServicesRespond_to: [ServicesPerson]
    ServicesTeam: [ServicesTeam]
  }

  type ServicesScheduleAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    sort_date: String

    """
    example: string
    """
    dates: String

    """
    example: string
    """
    decline_reason: String

    """
    example: string
    """
    organization_name: String

    """
    example: string
    """
    organization_time_zone: String

    """
    example: string
    """
    organization_twenty_four_hour_time: String

    """
    example: string
    """
    person_name: String

    """
    example: string
    """
    position_display_times: String

    """
    example: string
    """
    responds_to_name: String

    """
    example: string
    """
    service_type_name: String

    """
    example: string
    """
    short_dates: String

    """
    example: string
    """
    status: String

    """
    example: string
    """
    team_name: String

    """
    example: string
    """
    team_position_name: String

    """
    example: true
    """
    can_accept_partial: Boolean

    """
    example: true
    """
    can_accept_partial_one_time: Boolean

    """
    example: true
    """
    can_rehearse: Boolean

    """
    example: true
    """
    plan_visible: Boolean

    """
    example: true
    """
    plan_visible_to_me: Boolean
  }

  type ServicesSchedule {
    id: ID!
    attributes: ServicesScheduleAttributes
    relationships: ServicesScheduleRelationships
  }

  enum ServicesScheduledPersonOrderByEnum {
    id
    full_name
    status
    thumbnail
  }

  input ServicesScheduledPersonOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesScheduledPersonOrderByEnum
  }

  type ServicesScheduledPersonAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    full_name: String

    """
    example: string
    """
    status: String

    """
    example: string
    """
    thumbnail: String
  }

  type ServicesScheduledPerson {
    id: ID!
    attributes: ServicesScheduledPersonAttributes
  }

  enum ServicesSchedulingPreferenceOrderByEnum {
    id
    preference
  }

  input ServicesSchedulingPreferenceOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesSchedulingPreferenceOrderByEnum
  }

  type ServicesSchedulingPreferenceAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    preference: String
  }

  type ServicesSchedulingPreference {
    id: ID!
    attributes: ServicesSchedulingPreferenceAttributes
  }

  enum ServicesSeriesOrderByEnum {
    id
    created_at
    updated_at
    artwork_file_name
    artwork_content_type
    artwork_file_size
    title
    artwork_for_dashboard
    artwork_for_mobile
    artwork_for_plan
    artwork_original
    has_artwork
  }

  input ServicesSeriesOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesSeriesOrderByEnum
  }

  input ServicesSeriesWhereAttributes {
    title: String
  }

  type ServicesSeriesRelationships {
    ServicesPlans: [ServicesPlan]
  }

  type ServicesSeriesAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    artwork_file_name: String

    """
    example: string
    """
    artwork_content_type: String

    """
    example: 1
    """
    artwork_file_size: String

    """
    example: string
    """
    title: String

    """
    example: string
    """
    artwork_for_dashboard: String

    """
    example: string
    """
    artwork_for_mobile: String

    """
    example: string
    """
    artwork_for_plan: String

    """
    example: string
    """
    artwork_original: String

    """
    example: true
    """
    has_artwork: Boolean
  }

  type ServicesSeries {
    id: ID!
    attributes: ServicesSeriesAttributes
    relationships: ServicesSeriesRelationships
  }

  enum ServicesServiceTypeOrderByEnum {
    id
    archived_at
    created_at
    deleted_at
    name
    sequence
    updated_at
    permissions
    attachment_types_enabled
    custom_item_types
    standard_item_types
    background_check_permissions
    comment_permissions
    frequency
    last_plan_from
  }

  input ServicesServiceTypeOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesServiceTypeOrderByEnum
  }

  input ServicesServiceTypeWhereAttributes {
    id: ID!
    name: String
  }

  type ServicesServiceTypeRelationships {
    ServicesAttachments: [ServicesAttachment]
    ServicesItem_note_categories: [ServicesItemNoteCategory]
    ServicesLayouts: [ServicesLayout]
    ServicesLive_controllers: [ServicesLiveController]
    ServicesPlan_note_categories: [ServicesPlanNoteCategory]
    ServicesPlan_templates: [ServicesPlanTemplate]
    ServicesPlan_times: [ServicesPlanTime]
    ServicesPlans: [ServicesPlan]
    ServicesPublic_view: [ServicesPublicView]
    ServicesTeam_positions: [ServicesTeamPosition]
    ServicesTeams: [ServicesTeam]
    ServicesTime_preference_options: [ServicesTimePreferenceOption]
    ServicesUnscoped_plans: [ServicesPlan]
  }

  type ServicesServiceTypeAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    archived_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    deleted_at: String

    """
    example: string
    """
    name: String

    """
    example: 1
    """
    sequence: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    permissions: String

    """
    example: true
    """
    attachment_types_enabled: Boolean

    """
    example:
    """
    custom_item_types: String

    """
    example:
    """
    standard_item_types: String

    """
    example: string
    """
    background_check_permissions: String

    """
    example: string
    """
    comment_permissions: String

    """
    example: string
    """
    frequency: String

    """
    example: string
    """
    last_plan_from: String
  }

  type ServicesServiceType {
    id: ID!
    attributes: ServicesServiceTypeAttributes
    relationships: ServicesServiceTypeRelationships
  }

  enum ServicesServiceTypePathOrderByEnum {
    id
    path
  }

  input ServicesServiceTypePathOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesServiceTypePathOrderByEnum
  }

  type ServicesServiceTypePathAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example:
    """
    path: String
  }

  type ServicesServiceTypePath {
    id: ID!
    attributes: ServicesServiceTypePathAttributes
  }

  enum ServicesSignupSheetOrderByEnum {
    id
    sort_date
    group_key
    team_name
    display_times
    position_name
    title
    sort_index
  }

  input ServicesSignupSheetOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesSignupSheetOrderByEnum
  }

  type ServicesSignupSheetRelationships {
    ServicesScheduled_people: [ServicesScheduledPerson]
    ServicesSignup_sheet_metadata: [ServicesSignupSheetMetadata]
  }

  type ServicesSignupSheetAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    sort_date: String

    """
    example: string
    """
    group_key: String

    """
    example: string
    """
    team_name: String

    """
    example: string
    """
    display_times: String

    """
    example: string
    """
    position_name: String

    """
    example: string
    """
    title: String

    """
    example: 1
    """
    sort_index: String
  }

  type ServicesSignupSheet {
    id: ID!
    attributes: ServicesSignupSheetAttributes
    relationships: ServicesSignupSheetRelationships
  }

  enum ServicesSignupSheetMetadataOrderByEnum {
    id
    conflicts
    time_type
    time_name
    ends_at
    starts_at
  }

  input ServicesSignupSheetMetadataOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesSignupSheetMetadataOrderByEnum
  }

  type ServicesSignupSheetMetadataAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: [object Object]
    """
    conflicts: String

    """
    example: string
    """
    time_type: String

    """
    example: string
    """
    time_name: String

    """
    example: 2000-01-01T12:00:00Z
    """
    ends_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    starts_at: String
  }

  type ServicesSignupSheetMetadata {
    id: ID!
    attributes: ServicesSignupSheetMetadataAttributes
  }

  enum ServicesSkippedAttachmentOrderByEnum {
    id
    skipped
  }

  input ServicesSkippedAttachmentOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesSkippedAttachmentOrderByEnum
  }

  type ServicesSkippedAttachmentAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: true
    """
    skipped: Boolean
  }

  type ServicesSkippedAttachment {
    id: ID!
    attributes: ServicesSkippedAttachmentAttributes
  }

  enum ServicesSongOrderByEnum {
    id
    title
    created_at
    updated_at
    admin
    author
    copyright
    hidden
    notes
    themes
    last_scheduled_short_dates
    last_scheduled_at
    ccli_number
  }

  input ServicesSongOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesSongOrderByEnum
  }

  input ServicesSongWhereAttributes {
    author: String
    ccli_number: String
    hidden: Boolean
    themes: String
    title: String
  }

  type ServicesSongRelationships {
    ServicesArrangements: [ServicesArrangement]
    ServicesAttachments: [ServicesAttachment]
    ServicesLast_scheduled_item: [ServicesItem]
    ServicesSong_schedules: [ServicesSongSchedule]
    ServicesTags: [ServicesTag]
  }

  type ServicesSongAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    title: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    admin: String

    """
    example: string
    """
    author: String

    """
    example: string
    """
    copyright: String

    """
    example: true
    """
    hidden: Boolean

    """
    example: string
    """
    notes: String

    """
    example: string
    """
    themes: String

    """
    example: string
    """
    last_scheduled_short_dates: String

    """
    example: 2000-01-01T12:00:00Z
    """
    last_scheduled_at: String

    """
    example: 1
    """
    ccli_number: String
  }

  type ServicesSong {
    id: ID!
    attributes: ServicesSongAttributes
    relationships: ServicesSongRelationships
  }

  enum ServicesSongScheduleOrderByEnum {
    id
    arrangement_name
    key_name
    plan_dates
    service_type_name
    plan_sort_date
  }

  input ServicesSongScheduleOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesSongScheduleOrderByEnum
  }

  type ServicesSongScheduleAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    arrangement_name: String

    """
    example: string
    """
    key_name: String

    """
    example: string
    """
    plan_dates: String

    """
    example: string
    """
    service_type_name: String

    """
    example: string
    """
    plan_sort_date: String
  }

  type ServicesSongSchedule {
    id: ID!
    attributes: ServicesSongScheduleAttributes
  }

  enum ServicesSongbookStatusOrderByEnum {
    id
    status
    status_code
    status_token
    url
  }

  input ServicesSongbookStatusOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesSongbookStatusOrderByEnum
  }

  type ServicesSongbookStatusAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    status: String

    """
    example: string
    """
    status_code: String

    """
    example: string
    """
    status_token: String

    """
    example: string
    """
    url: String
  }

  type ServicesSongbookStatus {
    id: ID!
    attributes: ServicesSongbookStatusAttributes
  }

  enum ServicesSplitTeamRehearsalAssignmentOrderByEnum {
    id
    schedule_special_service_times
  }

  input ServicesSplitTeamRehearsalAssignmentOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesSplitTeamRehearsalAssignmentOrderByEnum
  }

  type ServicesSplitTeamRehearsalAssignmentRelationships {
    ServicesTeam: [ServicesTeam]
  }

  type ServicesSplitTeamRehearsalAssignmentAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: true
    """
    schedule_special_service_times: Boolean
  }

  type ServicesSplitTeamRehearsalAssignment {
    id: ID!
    attributes: ServicesSplitTeamRehearsalAssignmentAttributes
    relationships: ServicesSplitTeamRehearsalAssignmentRelationships
  }

  enum ServicesTagOrderByEnum {
    id
    name
  }

  input ServicesTagOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesTagOrderByEnum
  }

  type ServicesTagAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    name: String
  }

  type ServicesTag {
    id: ID!
    attributes: ServicesTagAttributes
  }

  enum ServicesTagGroupOrderByEnum {
    id
    name
    required
    allow_multiple_selections
    tags_for
    service_type_folder_name
  }

  input ServicesTagGroupOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesTagGroupOrderByEnum
  }

  input ServicesTagGroupWhereAttributes {
    name: String
    tags_for: String
  }

  type ServicesTagGroupRelationships {
    ServicesFolder: [ServicesFolder]
    ServicesTags: [ServicesTag]
  }

  type ServicesTagGroupAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    name: String

    """
    example: true
    """
    required: Boolean

    """
    example: true
    """
    allow_multiple_selections: Boolean

    """
    example: string
    """
    tags_for: String

    """
    example: string
    """
    service_type_folder_name: String
  }

  type ServicesTagGroup {
    id: ID!
    attributes: ServicesTagGroupAttributes
    relationships: ServicesTagGroupRelationships
  }

  enum ServicesTeamOrderByEnum {
    id
    name
    rehearsal_team
    sequence
    schedule_to
    default_status
    default_prepare_notifications
    created_at
    updated_at
    archived_at
    viewers_see
    assigned_directly
    secure_team
    last_plan_from
    stage_color
    stage_variant
  }

  input ServicesTeamOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesTeamOrderByEnum
  }

  input ServicesTeamWhereAttributes {
    name: String
  }

  type ServicesTeamRelationships {
    ServicesPeople: [ServicesPerson]
    ServicesPerson_team_position_assignments: [ServicesPersonTeamPositionAssignment]
    ServicesPlan_people: [ServicesPlanPerson]
    ServicesService_type: [ServicesServiceType]
    ServicesTeam_leaders: [ServicesTeamLeader]
    ServicesTeam_positions: [ServicesTeamPosition]
  }

  type ServicesTeamAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    name: String

    """
    example: true
    """
    rehearsal_team: Boolean

    """
    example: 1
    """
    sequence: String

    """
    example: string
    """
    schedule_to: String

    """
    example: string
    """
    default_status: String

    """
    example: true
    """
    default_prepare_notifications: Boolean

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    archived_at: String

    """
    example: 1
    """
    viewers_see: String

    """
    example: true
    """
    assigned_directly: Boolean

    """
    example: true
    """
    secure_team: Boolean

    """
    example: string
    """
    last_plan_from: String

    """
    example: string
    """
    stage_color: String

    """
    example: string
    """
    stage_variant: String
  }

  type ServicesTeam {
    id: ID!
    attributes: ServicesTeamAttributes
    relationships: ServicesTeamRelationships
  }

  enum ServicesTeamLeaderOrderByEnum {
    id
    send_responses_for_accepts
    send_responses_for_declines
    send_responses_for_blockouts
  }

  input ServicesTeamLeaderOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesTeamLeaderOrderByEnum
  }

  type ServicesTeamLeaderRelationships {
    ServicesPeople: [ServicesPerson]
    ServicesTeam: [ServicesTeam]
  }

  type ServicesTeamLeaderAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: true
    """
    send_responses_for_accepts: Boolean

    """
    example: true
    """
    send_responses_for_declines: Boolean

    """
    example: true
    """
    send_responses_for_blockouts: Boolean
  }

  type ServicesTeamLeader {
    id: ID!
    attributes: ServicesTeamLeaderAttributes
    relationships: ServicesTeamLeaderRelationships
  }

  enum ServicesTeamPositionOrderByEnum {
    id
    name
    sequence
    tags
    negative_tag_groups
    tag_groups
  }

  input ServicesTeamPositionOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesTeamPositionOrderByEnum
  }

  type ServicesTeamPositionRelationships {
    ServicesPerson_team_position_assignments: [ServicesPersonTeamPositionAssignment]
    ServicesTags: [ServicesTag]
    ServicesTeam: [ServicesTeam]
  }

  type ServicesTeamPositionAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    name: String

    """
    example: 1
    """
    sequence: String

    """
    example:
    """
    tags: String

    """
    example:
    """
    negative_tag_groups: String

    """
    example:
    """
    tag_groups: String
  }

  type ServicesTeamPosition {
    id: ID!
    attributes: ServicesTeamPositionAttributes
    relationships: ServicesTeamPositionRelationships
  }

  enum ServicesTextSettingOrderByEnum {
    id
    scheduling_requests_enabled
    general_emails_enabled
    scheduling_replies_enabled
    reminders_enabled
    carrier
    display_number
    normalized_number
  }

  input ServicesTextSettingOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesTextSettingOrderByEnum
  }

  type ServicesTextSettingAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: true
    """
    scheduling_requests_enabled: Boolean

    """
    example: true
    """
    general_emails_enabled: Boolean

    """
    example: true
    """
    scheduling_replies_enabled: Boolean

    """
    example: true
    """
    reminders_enabled: Boolean

    """
    example: string
    """
    carrier: String

    """
    example: string
    """
    display_number: String

    """
    example: string
    """
    normalized_number: String
  }

  type ServicesTextSetting {
    id: ID!
    attributes: ServicesTextSettingAttributes
  }

  enum ServicesTimePreferenceOptionOrderByEnum {
    id
    day_of_week
    created_at
    updated_at
    description
    sort_index
    time_type
    minute_of_day
    starts_at
  }

  input ServicesTimePreferenceOptionOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesTimePreferenceOptionOrderByEnum
  }

  type ServicesTimePreferenceOptionAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 1
    """
    day_of_week: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    description: String

    """
    example: string
    """
    sort_index: String

    """
    example: string
    """
    time_type: String

    """
    example: 1
    """
    minute_of_day: String

    """
    example: 2000-01-01T12:00:00Z
    """
    starts_at: String
  }

  type ServicesTimePreferenceOption {
    id: ID!
    attributes: ServicesTimePreferenceOptionAttributes
  }

  enum ServicesZoomOrderByEnum {
    id
    aspect_ratio
    zoom_level
    x_offset
    y_offset
  }

  input ServicesZoomOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ServicesZoomOrderByEnum
  }

  type ServicesZoomAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 1.42
    """
    aspect_ratio: String

    """
    example: 1.42
    """
    zoom_level: String

    """
    example: 1.42
    """
    x_offset: String

    """
    example: 1.42
    """
    y_offset: String
  }

  type ServicesZoom {
    id: ID!
    attributes: ServicesZoomAttributes
  }

  enum ResourcesAttachmentOrderByEnum {
    id
    content_type
    created_at
    description
    file_size
    name
    updated_at
    url
  }

  input ResourcesAttachmentOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ResourcesAttachmentOrderByEnum
  }

  input ResourcesAttachmentWhereAttributes {
    content_type: String
    created_at: String
    description: String
    file_size: String
    name: String
    updated_at: String
  }

  type ResourcesAttachmentRelationships {
    ResourcesEvent: [ResourcesEvent]
  }

  type ResourcesAttachmentAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    content_type: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: string
    """
    description: String

    """
    example: 1
    """
    file_size: String

    """
    example: string
    """
    name: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    url: String
  }

  type ResourcesAttachment {
    id: ID!
    attributes: ResourcesAttachmentAttributes
    relationships: ResourcesAttachmentRelationships
  }

  enum ResourcesConflictOrderByEnum {
    id
    created_at
    note
    resolved_at
    updated_at
  }

  input ResourcesConflictOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ResourcesConflictOrderByEnum
  }

  type ResourcesConflictRelationships {
    ResourcesResolved_by: [ResourcesPerson]
    ResourcesResource: [ResourcesResource]
    ResourcesWinner: [ResourcesEvent]
  }

  type ResourcesConflictAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: string
    """
    note: String

    """
    example: 2000-01-01T12:00:00Z
    """
    resolved_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String
  }

  type ResourcesConflict {
    id: ID!
    attributes: ResourcesConflictAttributes
    relationships: ResourcesConflictRelationships
  }

  enum ResourcesEventOrderByEnum {
    id
    approval_status
    created_at
    description
    image_url
    name
    percent_approved
    percent_rejected
    registration_url
    summary
    updated_at
    visible_in_church_center
  }

  input ResourcesEventOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ResourcesEventOrderByEnum
  }

  input ResourcesEventWhereAttributes {
    approval_status: String
    created_at: String
    name: String
    percent_approved: String
    percent_rejected: String
    updated_at: String
    visible_in_church_center: Boolean
  }

  type ResourcesEventRelationships {
    ResourcesAttachments: [ResourcesAttachment]
    ResourcesConflicts: [ResourcesConflict]
    ResourcesEvent_connections: [ResourcesEventConnection]
    ResourcesEvent_instances: [ResourcesEventInstance]
    ResourcesEvent_resource_requests: [ResourcesEventResourceRequest]
    ResourcesFeed: [ResourcesFeed]
    ResourcesOwner: [ResourcesPerson]
    ResourcesResource_bookings: [ResourcesResourceBooking]
    ResourcesTags: [ResourcesTag]
  }

  type ResourcesEventAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    approval_status: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: string
    """
    description: String

    """
    example: string
    """
    image_url: String

    """
    example: string
    """
    name: String

    """
    example: 1
    """
    percent_approved: String

    """
    example: 1
    """
    percent_rejected: String

    """
    example: string
    """
    registration_url: String

    """
    example: string
    """
    summary: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: true
    """
    visible_in_church_center: Boolean
  }

  type ResourcesEvent {
    id: ID!
    attributes: ResourcesEventAttributes
    relationships: ResourcesEventRelationships
  }

  enum ResourcesEventConnectionOrderByEnum {
    id
    connected_to_id
    connected_to_name
    connected_to_type
    product_name
    connected_to_url
  }

  input ResourcesEventConnectionOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ResourcesEventConnectionOrderByEnum
  }

  input ResourcesEventConnectionWhereAttributes {
    product_name: String
  }

  type ResourcesEventConnectionAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: primary_key
    """
    connected_to_id: ID!

    """
    example: string
    """
    connected_to_name: String

    """
    example: string
    """
    connected_to_type: String

    """
    example: string
    """
    product_name: String

    """
    example: string
    """
    connected_to_url: String
  }

  type ResourcesEventConnection {
    id: ID!
    attributes: ResourcesEventConnectionAttributes
  }

  enum ResourcesEventInstanceOrderByEnum {
    id
    all_day_event
    compact_recurrence_description
    created_at
    ends_at
    location
    recurrence
    recurrence_description
    starts_at
    updated_at
    church_center_url
  }

  input ResourcesEventInstanceOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ResourcesEventInstanceOrderByEnum
  }

  input ResourcesEventInstanceWhereAttributes {
    created_at: String
    ends_at: String
    starts_at: String
    updated_at: String
  }

  type ResourcesEventInstanceRelationships {
    ResourcesEvent: [ResourcesEvent]
    ResourcesEvent_times: [ResourcesEventTime]
    ResourcesResource_bookings: [ResourcesResourceBooking]
    ResourcesTags: [ResourcesTag]
  }

  type ResourcesEventInstanceAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: true
    """
    all_day_event: Boolean

    """
    example: string
    """
    compact_recurrence_description: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    ends_at: String

    """
    example: string
    """
    location: String

    """
    example: string
    """
    recurrence: String

    """
    example: string
    """
    recurrence_description: String

    """
    example: 2000-01-01T12:00:00Z
    """
    starts_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    church_center_url: String
  }

  type ResourcesEventInstance {
    id: ID!
    attributes: ResourcesEventInstanceAttributes
    relationships: ResourcesEventInstanceRelationships
  }

  enum ResourcesEventResourceRequestOrderByEnum {
    id
    approval_sent
    approval_status
    created_at
    updated_at
    notes
    quantity
  }

  input ResourcesEventResourceRequestOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ResourcesEventResourceRequestOrderByEnum
  }

  input ResourcesEventResourceRequestWhereAttributes {
    approval_sent: Boolean
    approval_status: String
    created_at: String
    updated_at: String
  }

  type ResourcesEventResourceRequestRelationships {
    ResourcesCreated_by: [ResourcesPerson]
    ResourcesEvent: [ResourcesEvent]
    ResourcesResource_bookings: [ResourcesResourceBooking]
    ResourcesResource: [ResourcesResource]
    ResourcesRoom_setup: [ResourcesRoomSetup]
    ResourcesUpdated_by: [ResourcesPerson]
  }

  type ResourcesEventResourceRequestAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: true
    """
    approval_sent: Boolean

    """
    example: string
    """
    approval_status: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    notes: String

    """
    example: 1
    """
    quantity: String
  }

  type ResourcesEventResourceRequest {
    id: ID!
    attributes: ResourcesEventResourceRequestAttributes
    relationships: ResourcesEventResourceRequestRelationships
  }

  enum ResourcesEventTimeOrderByEnum {
    id
    ends_at
    starts_at
    name
    visible_on_kiosks
    visible_on_widget_and_ical
  }

  input ResourcesEventTimeOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ResourcesEventTimeOrderByEnum
  }

  input ResourcesEventTimeWhereAttributes {
    ends_at: String
    name: String
    starts_at: String
    visible_on_kiosks: Boolean
    visible_on_widget_and_ical: Boolean
  }

  type ResourcesEventTimeRelationships {
    ResourcesEvent: [ResourcesEvent]
  }

  type ResourcesEventTimeAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    ends_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    starts_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    name: String

    """
    example: true
    """
    visible_on_kiosks: Boolean

    """
    example: true
    """
    visible_on_widget_and_ical: Boolean
  }

  type ResourcesEventTime {
    id: ID!
    attributes: ResourcesEventTimeAttributes
    relationships: ResourcesEventTimeRelationships
  }

  enum ResourcesFeedOrderByEnum {
    id
    default_church_center_visibility
    feed_type
    name
    imported_at
    can_delete
  }

  input ResourcesFeedOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ResourcesFeedOrderByEnum
  }

  input ResourcesFeedWhereAttributes {
    feed_type: String
  }

  type ResourcesFeedAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: value
    """
    default_church_center_visibility: String

    """
    example: value
    """
    feed_type: String

    """
    example: string
    """
    name: String

    """
    example: 2000-01-01T12:00:00Z
    """
    imported_at: String

    """
    example: true
    """
    can_delete: Boolean
  }

  type ResourcesFeed {
    id: ID!
    attributes: ResourcesFeedAttributes
  }

  enum ResourcesOrganizationOrderByEnum {
    id
    name
    time_zone
    twenty_four_hour_time
    date_format
    onboarding
  }

  input ResourcesOrganizationOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ResourcesOrganizationOrderByEnum
  }

  type ResourcesOrganizationRelationships {
    ResourcesAttachments: [ResourcesAttachment]
    ResourcesConflicts: [ResourcesConflict]
    ResourcesEvent_instances: [ResourcesEventInstance]
    ResourcesEvent_resource_requests: [ResourcesEventResourceRequest]
    ResourcesEvents: [ResourcesEvent]
    ResourcesFeeds: [ResourcesFeed]
    ResourcesPeople: [ResourcesPerson]
    ResourcesReport_templates: [ResourcesReportTemplate]
    ResourcesResource_approval_groups: [ResourcesResourceApprovalGroup]
    ResourcesResource_bookings: [ResourcesResourceBooking]
    ResourcesResource_folders: [ResourcesResourceFolder]
    ResourcesResource_questions: [ResourcesResourceQuestion]
    ResourcesResources: [ResourcesResource]
    ResourcesRoom_setups: [ResourcesRoomSetup]
    ResourcesTag_groups: [ResourcesTagGroup]
    ResourcesTags: [ResourcesTag]
  }

  type ResourcesOrganizationAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    name: String

    """
    example: string
    """
    time_zone: String

    """
    example: true
    """
    twenty_four_hour_time: Boolean

    """
    example: string
    """
    date_format: String

    """
    example: true
    """
    onboarding: Boolean
  }

  type ResourcesOrganization {
    id: ID!
    attributes: ResourcesOrganizationAttributes
    relationships: ResourcesOrganizationRelationships
  }

  enum ResourcesPersonOrderByEnum {
    id
    created_at
    first_name
    last_name
    middle_name
    updated_at
    avatar_url
    child
    contact_data
    gender
    has_access
    name_prefix
    name_suffix
    pending_request_count
    permissions
    resolves_conflicts
    site_administrator
    status
    event_permissions_type
    people_permissions_type
    room_permissions_type
    resources_permissions_type
  }

  input ResourcesPersonOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ResourcesPersonOrderByEnum
  }

  input ResourcesPersonWhereAttributes {
    created_at: String
    first_name: String
    last_name: String
    middle_name: String
    updated_at: String
  }

  type ResourcesPersonRelationships {
    ResourcesEvent_resource_requests: [ResourcesEventResourceRequest]
    ResourcesOrganization: [ResourcesOrganization]
  }

  type ResourcesPersonAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: string
    """
    first_name: String

    """
    example: string
    """
    last_name: String

    """
    example: string
    """
    middle_name: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    avatar_url: String

    """
    example: true
    """
    child: Boolean

    """
    example: string
    """
    contact_data: String

    """
    example: string
    """
    gender: String

    """
    example: true
    """
    has_access: Boolean

    """
    example: string
    """
    name_prefix: String

    """
    example: string
    """
    name_suffix: String

    """
    example: 1
    """
    pending_request_count: String

    """
    example: 1
    """
    permissions: String

    """
    example: true
    """
    resolves_conflicts: Boolean

    """
    example: true
    """
    site_administrator: Boolean

    """
    example: value
    """
    status: String

    """
    example: string
    """
    event_permissions_type: String

    """
    example: string
    """
    people_permissions_type: String

    """
    example: string
    """
    room_permissions_type: String

    """
    example: string
    """
    resources_permissions_type: String
  }

  type ResourcesPerson {
    id: ID!
    attributes: ResourcesPersonAttributes
    relationships: ResourcesPersonRelationships
  }

  enum ResourcesReportTemplateOrderByEnum {
    id
    body
    created_at
    description
    title
    updated_at
  }

  input ResourcesReportTemplateOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ResourcesReportTemplateOrderByEnum
  }

  type ResourcesReportTemplateAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    body: String

    """
    example: string
    """
    created_at: String

    """
    example: string
    """
    description: String

    """
    example: string
    """
    title: String

    """
    example: string
    """
    updated_at: String
  }

  type ResourcesReportTemplate {
    id: ID!
    attributes: ResourcesReportTemplateAttributes
  }

  enum ResourcesRequiredApprovalOrderByEnum {
    id
  }

  input ResourcesRequiredApprovalOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ResourcesRequiredApprovalOrderByEnum
  }

  type ResourcesRequiredApprovalRelationships {
    ResourcesResource: [ResourcesResource]
  }

  type ResourcesRequiredApprovalAttributes {
    """
    example: primary_key
    """
    id: ID!
  }

  type ResourcesRequiredApproval {
    id: ID!
    attributes: ResourcesRequiredApprovalAttributes
    relationships: ResourcesRequiredApprovalRelationships
  }

  enum ResourcesResourceOrderByEnum {
    id
    created_at
    kind
    name
    serial_number
    updated_at
    description
    expires_at
    home_location
    image
    quantity
    path_name
  }

  input ResourcesResourceOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ResourcesResourceOrderByEnum
  }

  input ResourcesResourceWhereAttributes {
    created_at: String
    kind: String
    name: String
    path_name: String
    serial_number: String
    updated_at: String
  }

  type ResourcesResourceRelationships {
    ResourcesConflicts: [ResourcesConflict]
    ResourcesEvent_resource_requests: [ResourcesEventResourceRequest]
    ResourcesRequired_approvals: [ResourcesRequiredApproval]
    ResourcesResource_approval_groups: [ResourcesResourceApprovalGroup]
    ResourcesResource_bookings: [ResourcesResourceBooking]
    ResourcesResource_folder: [ResourcesResourceFolder]
    ResourcesResource_questions: [ResourcesResourceQuestion]
    ResourcesRoom_setups: [ResourcesRoomSetup]
  }

  type ResourcesResourceAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: string
    """
    kind: String

    """
    example: string
    """
    name: String

    """
    example: string
    """
    serial_number: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    description: String

    """
    example: 2000-01-01T12:00:00Z
    """
    expires_at: String

    """
    example: string
    """
    home_location: String

    """
    example: string
    """
    image: String

    """
    example: 1
    """
    quantity: String

    """
    example: string
    """
    path_name: String
  }

  type ResourcesResource {
    id: ID!
    attributes: ResourcesResourceAttributes
    relationships: ResourcesResourceRelationships
  }

  enum ResourcesResourceApprovalGroupOrderByEnum {
    id
    created_at
    name
    updated_at
    form_count
    resource_count
    room_count
  }

  input ResourcesResourceApprovalGroupOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ResourcesResourceApprovalGroupOrderByEnum
  }

  input ResourcesResourceApprovalGroupWhereAttributes {
    created_at: String
    name: String
    updated_at: String
  }

  type ResourcesResourceApprovalGroupRelationships {
    ResourcesEvent_resource_requests: [ResourcesEventResourceRequest]
    ResourcesPeople: [ResourcesPerson]
    ResourcesRequired_approvals: [ResourcesRequiredApproval]
    ResourcesResources: [ResourcesResource]
  }

  type ResourcesResourceApprovalGroupAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: string
    """
    name: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: 1
    """
    form_count: String

    """
    example: 1
    """
    resource_count: String

    """
    example: 1
    """
    room_count: String
  }

  type ResourcesResourceApprovalGroup {
    id: ID!
    attributes: ResourcesResourceApprovalGroupAttributes
    relationships: ResourcesResourceApprovalGroupRelationships
  }

  enum ResourcesResourceBookingOrderByEnum {
    id
    created_at
    ends_at
    starts_at
    updated_at
    quantity
  }

  input ResourcesResourceBookingOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ResourcesResourceBookingOrderByEnum
  }

  input ResourcesResourceBookingWhereAttributes {
    created_at: String
    ends_at: String
    starts_at: String
    updated_at: String
  }

  type ResourcesResourceBookingRelationships {
    ResourcesEvent_instance: [ResourcesEventInstance]
    ResourcesEvent_resource_request: [ResourcesEventResourceRequest]
    ResourcesResource: [ResourcesResource]
  }

  type ResourcesResourceBookingAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    ends_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    starts_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: 1
    """
    quantity: String
  }

  type ResourcesResourceBooking {
    id: ID!
    attributes: ResourcesResourceBookingAttributes
    relationships: ResourcesResourceBookingRelationships
  }

  enum ResourcesResourceFolderOrderByEnum {
    id
    created_at
    name
    updated_at
    ancestry
    kind
    path_name
  }

  input ResourcesResourceFolderOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ResourcesResourceFolderOrderByEnum
  }

  input ResourcesResourceFolderWhereAttributes {
    ancestry: String
    created_at: String
    name: String
    path_name: String
    updated_at: String
  }

  type ResourcesResourceFolderRelationships {
    ResourcesResources: [ResourcesResource]
  }

  type ResourcesResourceFolderAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: string
    """
    name: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    ancestry: String

    """
    example: string
    """
    kind: String

    """
    example: string
    """
    path_name: String
  }

  type ResourcesResourceFolder {
    id: ID!
    attributes: ResourcesResourceFolderAttributes
    relationships: ResourcesResourceFolderRelationships
  }

  enum ResourcesResourceQuestionOrderByEnum {
    id
    created_at
    kind
    updated_at
    choices
    description
    multiple_select
    optional
    position
    question
  }

  input ResourcesResourceQuestionOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ResourcesResourceQuestionOrderByEnum
  }

  input ResourcesResourceQuestionWhereAttributes {
    created_at: String
    kind: String
    updated_at: String
  }

  type ResourcesResourceQuestionAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: string
    """
    kind: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    choices: String

    """
    example: string
    """
    description: String

    """
    example: true
    """
    multiple_select: Boolean

    """
    example: true
    """
    optional: Boolean

    """
    example: 1
    """
    position: String

    """
    example: string
    """
    question: String
  }

  type ResourcesResourceQuestion {
    id: ID!
    attributes: ResourcesResourceQuestionAttributes
  }

  enum ResourcesResourceSuggestionOrderByEnum {
    id
    created_at
    quantity
    updated_at
  }

  input ResourcesResourceSuggestionOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ResourcesResourceSuggestionOrderByEnum
  }

  type ResourcesResourceSuggestionRelationships {
    ResourcesResource: [ResourcesResource]
  }

  type ResourcesResourceSuggestionAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 1
    """
    quantity: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String
  }

  type ResourcesResourceSuggestion {
    id: ID!
    attributes: ResourcesResourceSuggestionAttributes
    relationships: ResourcesResourceSuggestionRelationships
  }

  enum ResourcesRoomSetupOrderByEnum {
    id
    created_at
    name
    updated_at
    description
    diagram
    diagram_url
    diagram_thumbnail_url
  }

  input ResourcesRoomSetupOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ResourcesRoomSetupOrderByEnum
  }

  input ResourcesRoomSetupWhereAttributes {
    created_at: String
    name: String
    updated_at: String
  }

  type ResourcesRoomSetupRelationships {
    ResourcesContaining_resource: [ResourcesResource]
    ResourcesResource_suggestions: [ResourcesResourceSuggestion]
  }

  type ResourcesRoomSetupAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: string
    """
    name: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    description: String

    """
    example: string
    """
    diagram: String

    """
    example: string
    """
    diagram_url: String

    """
    example: string
    """
    diagram_thumbnail_url: String
  }

  type ResourcesRoomSetup {
    id: ID!
    attributes: ResourcesRoomSetupAttributes
    relationships: ResourcesRoomSetupRelationships
  }

  enum ResourcesTagOrderByEnum {
    id
    church_center_category
    color
    created_at
    name
    position
    updated_at
  }

  input ResourcesTagOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ResourcesTagOrderByEnum
  }

  input ResourcesTagWhereAttributes {
    church_center_category: Boolean
    color: String
    created_at: String
    id: ID!
    name: String
    position: String
    updated_at: String
  }

  type ResourcesTagRelationships {
    ResourcesEvent_instances: [ResourcesEventInstance]
    ResourcesEvents: [ResourcesEvent]
    ResourcesTag_group: [ResourcesTagGroup]
  }

  type ResourcesTagAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: true
    """
    church_center_category: Boolean

    """
    example: string
    """
    color: String

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: string
    """
    name: String

    """
    example: 1.42
    """
    position: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String
  }

  type ResourcesTag {
    id: ID!
    attributes: ResourcesTagAttributes
    relationships: ResourcesTagRelationships
  }

  enum ResourcesTagGroupOrderByEnum {
    id
    created_at
    name
    updated_at
    required
  }

  input ResourcesTagGroupOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: ResourcesTagGroupOrderByEnum
  }

  input ResourcesTagGroupWhereAttributes {
    created_at: String
    name: String
    updated_at: String
  }

  type ResourcesTagGroupRelationships {
    ResourcesEvents: [ResourcesEvent]
    ResourcesTags: [ResourcesTag]
  }

  type ResourcesTagGroupAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: string
    """
    name: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: true
    """
    required: Boolean
  }

  type ResourcesTagGroup {
    id: ID!
    attributes: ResourcesTagGroupAttributes
    relationships: ResourcesTagGroupRelationships
  }

  enum GivingBatchOrderByEnum {
    id
    created_at
    updated_at
    committed_at
    description
    donations_count
    total_cents
    total_currency
    status
  }

  input GivingBatchOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: GivingBatchOrderByEnum
  }

  input GivingBatchWhereAttributes {
    updated_at: String
  }

  type GivingBatchRelationships {
    GivingBatch_group: [GivingBatchGroup]
    GivingDonations: [GivingDonation]
    GivingOwner: [GivingPerson]
  }

  type GivingBatchAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    committed_at: String

    """
    example: string
    """
    description: String

    """
    example: 1
    """
    donations_count: String

    """
    example: 1
    """
    total_cents: String

    """
    example: string
    """
    total_currency: String

    """
    example: string
    """
    status: String
  }

  type GivingBatch {
    id: ID!
    attributes: GivingBatchAttributes
    relationships: GivingBatchRelationships
  }

  enum GivingBatchGroupOrderByEnum {
    id
    created_at
    updated_at
    description
    committed
    total_cents
    total_currency
    status
  }

  input GivingBatchGroupOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: GivingBatchGroupOrderByEnum
  }

  input GivingBatchGroupWhereAttributes {
    updated_at: String
  }

  type GivingBatchGroupRelationships {
    GivingBatches: [GivingBatch]
    GivingOwner: [GivingPerson]
  }

  type GivingBatchGroupAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    description: String

    """
    example: true
    """
    committed: Boolean

    """
    example: 1
    """
    total_cents: String

    """
    example: string
    """
    total_currency: String

    """
    example: string
    """
    status: String
  }

  type GivingBatchGroup {
    id: ID!
    attributes: GivingBatchGroupAttributes
    relationships: GivingBatchGroupRelationships
  }

  enum GivingCampusOrderByEnum {
    id
    name
    address
  }

  input GivingCampusOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: GivingCampusOrderByEnum
  }

  type GivingCampusRelationships {
    GivingDonations: [GivingDonation]
  }

  type GivingCampusAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    name: String

    """
    example: [object Object]
    """
    address: String
  }

  type GivingCampus {
    id: ID!
    attributes: GivingCampusAttributes
    relationships: GivingCampusRelationships
  }

  enum GivingDesignationOrderByEnum {
    id
    amount_cents
    amount_currency
  }

  input GivingDesignationOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: GivingDesignationOrderByEnum
  }

  type GivingDesignationRelationships {
    GivingFund: [GivingFund]
  }

  type GivingDesignationAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 1
    """
    amount_cents: String

    """
    example: string
    """
    amount_currency: String
  }

  type GivingDesignation {
    id: ID!
    attributes: GivingDesignationAttributes
    relationships: GivingDesignationRelationships
  }

  enum GivingDesignationRefundOrderByEnum {
    id
    amount_cents
    amount_currency
  }

  input GivingDesignationRefundOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: GivingDesignationRefundOrderByEnum
  }

  type GivingDesignationRefundRelationships {
    GivingDesignation: [GivingDesignation]
  }

  type GivingDesignationRefundAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 1
    """
    amount_cents: String

    """
    example: string
    """
    amount_currency: String
  }

  type GivingDesignationRefund {
    id: ID!
    attributes: GivingDesignationRefundAttributes
    relationships: GivingDesignationRefundRelationships
  }

  enum GivingDonationOrderByEnum {
    id
    created_at
    updated_at
    payment_method_sub
    payment_last4
    payment_brand
    payment_check_number
    payment_check_dated_at
    fee_cents
    payment_method
    received_at
    amount_cents
    payment_status
    completed_at
    amount_currency
    fee_currency
    refunded
    refundable
  }

  input GivingDonationOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: GivingDonationOrderByEnum
  }

  input GivingDonationWhereAttributes {
    completed_at: String
    created_at: String
    payment_method: String
    received_at: String
    updated_at: String
  }

  type GivingDonationRelationships {
    GivingCampus: [GivingCampus]
    GivingDesignations: [GivingDesignation]
    GivingLabels: [GivingLabel]
    GivingNote: [GivingNote]
    GivingRefund: [GivingRefund]
  }

  type GivingDonationAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: value
    """
    payment_method_sub: String

    """
    example: string
    """
    payment_last4: String

    """
    example: string
    """
    payment_brand: String

    """
    example: 1
    """
    payment_check_number: String

    """
    example: 2000-01-01
    """
    payment_check_dated_at: String

    """
    example: 1
    """
    fee_cents: String

    """
    example: value
    """
    payment_method: String

    """
    example: 2000-01-01T12:00:00Z
    """
    received_at: String

    """
    example: 1
    """
    amount_cents: String

    """
    example: value
    """
    payment_status: String

    """
    example: 2000-01-01T12:00:00Z
    """
    completed_at: String

    """
    example: USD
    """
    amount_currency: String

    """
    example: USD
    """
    fee_currency: String

    """
    example: true
    """
    refunded: Boolean

    """
    example: true
    """
    refundable: Boolean
  }

  type GivingDonation {
    id: ID!
    attributes: GivingDonationAttributes
    relationships: GivingDonationRelationships
  }

  enum GivingFundOrderByEnum {
    id
    created_at
    updated_at
    name
    ledger_code
    description
    visibility
    default
    color
    deletable
  }

  input GivingFundOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: GivingFundOrderByEnum
  }

  input GivingFundWhereAttributes {
    default: Boolean
    id: ID!
    name: String
    visibility: String
  }

  type GivingFundAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    name: String

    """
    example: string
    """
    ledger_code: String

    """
    example: string
    """
    description: String

    """
    example: value
    """
    visibility: String

    """
    example: true
    """
    default: Boolean

    """
    example: string
    """
    color: String

    """
    example: true
    """
    deletable: Boolean
  }

  type GivingFund {
    id: ID!
    attributes: GivingFundAttributes
  }

  enum GivingLabelOrderByEnum {
    id
    slug
  }

  input GivingLabelOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: GivingLabelOrderByEnum
  }

  input GivingLabelWhereAttributes {
    slug: String
  }

  type GivingLabelAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    slug: String
  }

  type GivingLabel {
    id: ID!
    attributes: GivingLabelAttributes
  }

  enum GivingNoteOrderByEnum {
    id
    body
  }

  input GivingNoteOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: GivingNoteOrderByEnum
  }

  type GivingNoteAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    body: String
  }

  type GivingNote {
    id: ID!
    attributes: GivingNoteAttributes
  }

  enum GivingOrganizationOrderByEnum {
    id
    name
  }

  input GivingOrganizationOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: GivingOrganizationOrderByEnum
  }

  type GivingOrganizationRelationships {
    GivingBatch_groups: [GivingBatchGroup]
    GivingBatches: [GivingBatch]
    GivingCampuses: [GivingCampus]
    GivingDonations: [GivingDonation]
    GivingFunds: [GivingFund]
    GivingLabels: [GivingLabel]
    GivingPayment_sources: [GivingPaymentSource]
    GivingPeople: [GivingPerson]
    GivingRecurring_donations: [GivingRecurringDonation]
  }

  type GivingOrganizationAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    name: String
  }

  type GivingOrganization {
    id: ID!
    attributes: GivingOrganizationAttributes
    relationships: GivingOrganizationRelationships
  }

  enum GivingPaymentMethodOrderByEnum {
    id
    created_at
    updated_at
    method_type
    method_subtype
    last4
    brand
    expiration
    verified
  }

  input GivingPaymentMethodOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: GivingPaymentMethodOrderByEnum
  }

  type GivingPaymentMethodRelationships {
    GivingRecurring_donations: [GivingRecurringDonation]
  }

  type GivingPaymentMethodAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: value
    """
    method_type: String

    """
    example: string
    """
    method_subtype: String

    """
    example: string
    """
    last4: String

    """
    example: string
    """
    brand: String

    """
    example: 2000-01-01
    """
    expiration: String

    """
    example: true
    """
    verified: Boolean
  }

  type GivingPaymentMethod {
    id: ID!
    attributes: GivingPaymentMethodAttributes
    relationships: GivingPaymentMethodRelationships
  }

  enum GivingPaymentSourceOrderByEnum {
    id
    created_at
    updated_at
    name
  }

  input GivingPaymentSourceOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: GivingPaymentSourceOrderByEnum
  }

  type GivingPaymentSourceRelationships {
    GivingDonations: [GivingDonation]
  }

  type GivingPaymentSourceAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    name: String
  }

  type GivingPaymentSource {
    id: ID!
    attributes: GivingPaymentSourceAttributes
    relationships: GivingPaymentSourceRelationships
  }

  enum GivingPersonOrderByEnum {
    id
    permissions
    email_addresses
    addresses
    phone_numbers
    first_name
    last_name
    donor_number
  }

  input GivingPersonOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: GivingPersonOrderByEnum
  }

  input GivingPersonWhereAttributes {
    first_name: String
    last_name: String
  }

  type GivingPersonRelationships {
    GivingBatch_groups: [GivingBatchGroup]
    GivingBatches: [GivingBatch]
    GivingDonations: [GivingDonation]
    GivingPayment_methods: [GivingPaymentMethod]
    GivingPledges: [GivingPledge]
    GivingPrimary_campus: [GivingCampus]
    GivingRecurring_donations: [GivingRecurringDonation]
  }

  type GivingPersonAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: string
    """
    permissions: String

    """
    example:
    """
    email_addresses: String

    """
    example:
    """
    addresses: String

    """
    example:
    """
    phone_numbers: String

    """
    example: string
    """
    first_name: String

    """
    example: string
    """
    last_name: String

    """
    example: 1
    """
    donor_number: String
  }

  type GivingPerson {
    id: ID!
    attributes: GivingPersonAttributes
    relationships: GivingPersonRelationships
  }

  enum GivingPledgeOrderByEnum {
    id
    created_at
    updated_at
    amount_cents
    amount_currency
    joint_giver_amount_cents
    donated_total_cents
    joint_giver_donated_total_cents
  }

  input GivingPledgeOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: GivingPledgeOrderByEnum
  }

  input GivingPledgeWhereAttributes {
    created_at: String
    updated_at: String
  }

  type GivingPledgeRelationships {
    GivingJoint_giver: [GivingPerson]
    GivingPledge_campaign: [GivingPledgeCampaign]
  }

  type GivingPledgeAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: 1
    """
    amount_cents: String

    """
    example: USD
    """
    amount_currency: String

    """
    example: 1
    """
    joint_giver_amount_cents: String

    """
    example: 1
    """
    donated_total_cents: String

    """
    example: 1
    """
    joint_giver_donated_total_cents: String
  }

  type GivingPledge {
    id: ID!
    attributes: GivingPledgeAttributes
    relationships: GivingPledgeRelationships
  }

  enum GivingPledgeCampaignOrderByEnum {
    id
    created_at
    updated_at
    name
    description
    starts_at
    ends_at
    goal_cents
    goal_currency
    show_goal_in_church_center
    received_total_from_pledges_cents
    received_total_outside_of_pledges_cents
  }

  input GivingPledgeCampaignOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: GivingPledgeCampaignOrderByEnum
  }

  input GivingPledgeCampaignWhereAttributes {
    ends_at: String
    starts_at: String
  }

  type GivingPledgeCampaignRelationships {
    GivingFund: [GivingFund]
    GivingPledges: [GivingPledge]
  }

  type GivingPledgeCampaignAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: string
    """
    name: String

    """
    example: string
    """
    description: String

    """
    example: 2000-01-01T12:00:00Z
    """
    starts_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    ends_at: String

    """
    example: 1
    """
    goal_cents: String

    """
    example: USD
    """
    goal_currency: String

    """
    example: true
    """
    show_goal_in_church_center: Boolean

    """
    example: 1
    """
    received_total_from_pledges_cents: String

    """
    example: 1
    """
    received_total_outside_of_pledges_cents: String
  }

  type GivingPledgeCampaign {
    id: ID!
    attributes: GivingPledgeCampaignAttributes
    relationships: GivingPledgeCampaignRelationships
  }

  enum GivingRecurringDonationOrderByEnum {
    id
    created_at
    updated_at
    release_hold_at
    amount_cents
    status
    last_donation_received_at
    next_occurrence
    schedule
    amount_currency
  }

  input GivingRecurringDonationOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: GivingRecurringDonationOrderByEnum
  }

  type GivingRecurringDonationRelationships {
    GivingPayment_method: [GivingPaymentMethod]
    GivingDesignations: [GivingRecurringDonationDesignation]
  }

  type GivingRecurringDonationAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    release_hold_at: String

    """
    example: 1
    """
    amount_cents: String

    """
    example: string
    """
    status: String

    """
    example: 2000-01-01T12:00:00Z
    """
    last_donation_received_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    next_occurrence: String

    """
    example: [object Object]
    """
    schedule: String

    """
    example: USD
    """
    amount_currency: String
  }

  type GivingRecurringDonation {
    id: ID!
    attributes: GivingRecurringDonationAttributes
    relationships: GivingRecurringDonationRelationships
  }

  enum GivingRecurringDonationDesignationOrderByEnum {
    id
    amount_cents
    amount_currency
  }

  input GivingRecurringDonationDesignationOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: GivingRecurringDonationDesignationOrderByEnum
  }

  type GivingRecurringDonationDesignationRelationships {
    GivingFund: [GivingFund]
  }

  type GivingRecurringDonationDesignationAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 1
    """
    amount_cents: String

    """
    example: string
    """
    amount_currency: String
  }

  type GivingRecurringDonationDesignation {
    id: ID!
    attributes: GivingRecurringDonationDesignationAttributes
    relationships: GivingRecurringDonationDesignationRelationships
  }

  enum GivingRefundOrderByEnum {
    id
    created_at
    updated_at
    amount_cents
    amount_currency
    fee_cents
    refunded_at
    fee_currency
  }

  input GivingRefundOrderInput {
    """
    this will append a (-) to the field name if desc
    """
    sort: sortEnum = asc
    field: GivingRefundOrderByEnum
  }

  type GivingRefundRelationships {
    GivingDesignation_refunds: [GivingDesignationRefund]
  }

  type GivingRefundAttributes {
    """
    example: primary_key
    """
    id: ID!

    """
    example: 2000-01-01T12:00:00Z
    """
    created_at: String

    """
    example: 2000-01-01T12:00:00Z
    """
    updated_at: String

    """
    example: 1
    """
    amount_cents: String

    """
    example: string
    """
    amount_currency: String

    """
    example: 1
    """
    fee_cents: String

    """
    example: 2000-01-01T12:00:00Z
    """
    refunded_at: String

    """
    example: USD
    """
    fee_currency: String
  }

  type GivingRefund {
    id: ID!
    attributes: GivingRefundAttributes
    relationships: GivingRefundRelationships
  }

  type Query {
    CalendarAttachmentById(id: ID!): CalendarAttachment
    CalendarAttachment(
      limit: Int
      where: CalendarAttachmentWhereAttributes
      order: CalendarAttachmentOrderInput
    ): [CalendarAttachment!]

    CalendarConflictById(id: ID!): CalendarConflict
    CalendarConflict(
      limit: Int

      order: CalendarConflictOrderInput
    ): [CalendarConflict!]

    CalendarEventById(id: ID!): CalendarEvent
    CalendarEvent(
      limit: Int
      where: CalendarEventWhereAttributes
      order: CalendarEventOrderInput
    ): [CalendarEvent!]

    CalendarEventInstanceById(id: ID!): CalendarEventInstance
    CalendarEventInstance(
      limit: Int
      where: CalendarEventInstanceWhereAttributes
      order: CalendarEventInstanceOrderInput
    ): [CalendarEventInstance!]

    CalendarEventResourceRequestById(id: ID!): CalendarEventResourceRequest
    CalendarEventResourceRequest(
      limit: Int
      where: CalendarEventResourceRequestWhereAttributes
      order: CalendarEventResourceRequestOrderInput
    ): [CalendarEventResourceRequest!]

    CalendarFeedById(id: ID!): CalendarFeed
    CalendarFeed(
      limit: Int
      where: CalendarFeedWhereAttributes
      order: CalendarFeedOrderInput
    ): [CalendarFeed!]

    CalendarPersonById(id: ID!): CalendarPerson
    CalendarPerson(
      limit: Int
      where: CalendarPersonWhereAttributes
      order: CalendarPersonOrderInput
    ): [CalendarPerson!]

    CalendarReportTemplateById(id: ID!): CalendarReportTemplate
    CalendarReportTemplate(
      limit: Int

      order: CalendarReportTemplateOrderInput
    ): [CalendarReportTemplate!]

    CalendarResourceById(id: ID!): CalendarResource
    CalendarResource(
      limit: Int
      where: CalendarResourceWhereAttributes
      order: CalendarResourceOrderInput
    ): [CalendarResource!]

    CalendarResourceApprovalGroupById(id: ID!): CalendarResourceApprovalGroup
    CalendarResourceApprovalGroup(
      limit: Int
      where: CalendarResourceApprovalGroupWhereAttributes
      order: CalendarResourceApprovalGroupOrderInput
    ): [CalendarResourceApprovalGroup!]

    CalendarResourceBookingById(id: ID!): CalendarResourceBooking
    CalendarResourceBooking(
      limit: Int
      where: CalendarResourceBookingWhereAttributes
      order: CalendarResourceBookingOrderInput
    ): [CalendarResourceBooking!]

    CalendarResourceFolderById(id: ID!): CalendarResourceFolder
    CalendarResourceFolder(
      limit: Int
      where: CalendarResourceFolderWhereAttributes
      order: CalendarResourceFolderOrderInput
    ): [CalendarResourceFolder!]

    CalendarResourceQuestionById(id: ID!): CalendarResourceQuestion
    CalendarResourceQuestion(
      limit: Int
      where: CalendarResourceQuestionWhereAttributes
      order: CalendarResourceQuestionOrderInput
    ): [CalendarResourceQuestion!]

    CalendarRoomSetupById(id: ID!): CalendarRoomSetup
    CalendarRoomSetup(
      limit: Int
      where: CalendarRoomSetupWhereAttributes
      order: CalendarRoomSetupOrderInput
    ): [CalendarRoomSetup!]

    CalendarTagById(id: ID!): CalendarTag
    CalendarTag(
      limit: Int
      where: CalendarTagWhereAttributes
      order: CalendarTagOrderInput
    ): [CalendarTag!]

    CalendarTagGroupById(id: ID!): CalendarTagGroup
    CalendarTagGroup(
      limit: Int
      where: CalendarTagGroupWhereAttributes
      order: CalendarTagGroupOrderInput
    ): [CalendarTagGroup!]

    Check_insCheckInById(id: ID!): Check_insCheckIn
    Check_insCheckIn(
      limit: Int
      where: Check_insCheckInWhereAttributes
      order: Check_insCheckInOrderInput
    ): [Check_insCheckIn!]

    Check_insEventById(id: ID!): Check_insEvent
    Check_insEvent(
      limit: Int
      where: Check_insEventWhereAttributes
      order: Check_insEventOrderInput
    ): [Check_insEvent!]

    Check_insEventTimeById(id: ID!): Check_insEventTime
    Check_insEventTime(
      limit: Int
      where: Check_insEventTimeWhereAttributes
      order: Check_insEventTimeOrderInput
    ): [Check_insEventTime!]

    Check_insHeadcountById(id: ID!): Check_insHeadcount
    Check_insHeadcount(
      limit: Int
      where: Check_insHeadcountWhereAttributes
      order: Check_insHeadcountOrderInput
    ): [Check_insHeadcount!]

    Check_insLabelById(id: ID!): Check_insLabel
    Check_insLabel(
      limit: Int

      order: Check_insLabelOrderInput
    ): [Check_insLabel!]

    Check_insOptionById(id: ID!): Check_insOption
    Check_insOption(
      limit: Int

      order: Check_insOptionOrderInput
    ): [Check_insOption!]

    Check_insPassById(id: ID!): Check_insPass
    Check_insPass(
      limit: Int
      where: Check_insPassWhereAttributes
      order: Check_insPassOrderInput
    ): [Check_insPass!]

    Check_insPersonById(id: ID!): Check_insPerson
    Check_insPerson(
      limit: Int
      where: Check_insPersonWhereAttributes
      order: Check_insPersonOrderInput
    ): [Check_insPerson!]

    Check_insStationById(id: ID!): Check_insStation
    Check_insStation(
      limit: Int

      order: Check_insStationOrderInput
    ): [Check_insStation!]

    Check_insThemeById(id: ID!): Check_insTheme
    Check_insTheme(
      limit: Int

      order: Check_insThemeOrderInput
    ): [Check_insTheme!]

    GroupsEventById(id: ID!): GroupsEvent
    GroupsEvent(
      limit: Int
      where: GroupsEventWhereAttributes
      order: GroupsEventOrderInput
    ): [GroupsEvent!]

    GroupsGroupById(id: ID!): GroupsGroup
    GroupsGroup(
      limit: Int
      where: GroupsGroupWhereAttributes
      order: GroupsGroupOrderInput
    ): [GroupsGroup!]

    GroupsGroupTypeById(id: ID!): GroupsGroupType
    GroupsGroupType(
      limit: Int
      where: GroupsGroupTypeWhereAttributes
      order: GroupsGroupTypeOrderInput
    ): [GroupsGroupType!]

    GroupsPersonById(id: ID!): GroupsPerson
    GroupsPerson(
      limit: Int
      where: GroupsPersonWhereAttributes
      order: GroupsPersonOrderInput
    ): [GroupsPerson!]

    GroupsTagGroupById(id: ID!): GroupsTagGroup
    GroupsTagGroup(
      limit: Int
      where: GroupsTagGroupWhereAttributes
      order: GroupsTagGroupOrderInput
    ): [GroupsTagGroup!]

    PeopleAddressById(id: ID!): PeopleAddress
    PeopleAddress(
      limit: Int
      where: PeopleAddressWhereAttributes
      order: PeopleAddressOrderInput
    ): [PeopleAddress!]

    PeopleAnniversaryCouplesById(id: ID!): PeopleAnniversaryCouples
    PeopleAnniversaryCouples(
      limit: Int

      order: PeopleAnniversaryCouplesOrderInput
    ): [PeopleAnniversaryCouples!]

    PeopleAppById(id: ID!): PeopleApp
    PeopleApp(
      limit: Int
      where: PeopleAppWhereAttributes
      order: PeopleAppOrderInput
    ): [PeopleApp!]

    PeopleBackgroundCheckById(id: ID!): PeopleBackgroundCheck
    PeopleBackgroundCheck(
      limit: Int

      order: PeopleBackgroundCheckOrderInput
    ): [PeopleBackgroundCheck!]

    PeopleBirthdayPeopleById(id: ID!): PeopleBirthdayPeople
    PeopleBirthdayPeople(
      limit: Int

      order: PeopleBirthdayPeopleOrderInput
    ): [PeopleBirthdayPeople!]

    PeopleCampusById(id: ID!): PeopleCampus
    PeopleCampus(
      limit: Int
      where: PeopleCampusWhereAttributes
      order: PeopleCampusOrderInput
    ): [PeopleCampus!]

    PeopleCarrierById(id: ID!): PeopleCarrier
    PeopleCarrier(
      limit: Int

      order: PeopleCarrierOrderInput
    ): [PeopleCarrier!]

    PeopleEmailById(id: ID!): PeopleEmail
    PeopleEmail(
      limit: Int
      where: PeopleEmailWhereAttributes
      order: PeopleEmailOrderInput
    ): [PeopleEmail!]

    PeopleFieldDatumById(id: ID!): PeopleFieldDatum
    PeopleFieldDatum(
      limit: Int
      where: PeopleFieldDatumWhereAttributes
      order: PeopleFieldDatumOrderInput
    ): [PeopleFieldDatum!]

    PeopleFieldDefinitionById(id: ID!): PeopleFieldDefinition
    PeopleFieldDefinition(
      limit: Int
      where: PeopleFieldDefinitionWhereAttributes
      order: PeopleFieldDefinitionOrderInput
    ): [PeopleFieldDefinition!]

    PeopleFormById(id: ID!): PeopleForm
    PeopleForm(
      limit: Int
      where: PeopleFormWhereAttributes
      order: PeopleFormOrderInput
    ): [PeopleForm!]

    PeopleHouseholdById(id: ID!): PeopleHousehold
    PeopleHousehold(
      limit: Int
      where: PeopleHouseholdWhereAttributes
      order: PeopleHouseholdOrderInput
    ): [PeopleHousehold!]

    PeopleInactiveReasonById(id: ID!): PeopleInactiveReason
    PeopleInactiveReason(
      limit: Int
      where: PeopleInactiveReasonWhereAttributes
      order: PeopleInactiveReasonOrderInput
    ): [PeopleInactiveReason!]

    PeopleListById(id: ID!): PeopleList
    PeopleList(
      limit: Int
      where: PeopleListWhereAttributes
      order: PeopleListOrderInput
    ): [PeopleList!]

    PeopleListCategoryById(id: ID!): PeopleListCategory
    PeopleListCategory(
      limit: Int
      where: PeopleListCategoryWhereAttributes
      order: PeopleListCategoryOrderInput
    ): [PeopleListCategory!]

    PeopleMaritalStatusById(id: ID!): PeopleMaritalStatus
    PeopleMaritalStatus(
      limit: Int
      where: PeopleMaritalStatusWhereAttributes
      order: PeopleMaritalStatusOrderInput
    ): [PeopleMaritalStatus!]

    PeopleMessageById(id: ID!): PeopleMessage
    PeopleMessage(
      limit: Int
      where: PeopleMessageWhereAttributes
      order: PeopleMessageOrderInput
    ): [PeopleMessage!]

    PeopleMessageGroupById(id: ID!): PeopleMessageGroup
    PeopleMessageGroup(
      limit: Int
      where: PeopleMessageGroupWhereAttributes
      order: PeopleMessageGroupOrderInput
    ): [PeopleMessageGroup!]

    PeopleNamePrefixById(id: ID!): PeopleNamePrefix
    PeopleNamePrefix(
      limit: Int
      where: PeopleNamePrefixWhereAttributes
      order: PeopleNamePrefixOrderInput
    ): [PeopleNamePrefix!]

    PeopleNameSuffixById(id: ID!): PeopleNameSuffix
    PeopleNameSuffix(
      limit: Int
      where: PeopleNameSuffixWhereAttributes
      order: PeopleNameSuffixOrderInput
    ): [PeopleNameSuffix!]

    PeopleNoteById(id: ID!): PeopleNote
    PeopleNote(
      limit: Int
      where: PeopleNoteWhereAttributes
      order: PeopleNoteOrderInput
    ): [PeopleNote!]

    PeopleNoteCategoryById(id: ID!): PeopleNoteCategory
    PeopleNoteCategory(
      limit: Int
      where: PeopleNoteCategoryWhereAttributes
      order: PeopleNoteCategoryOrderInput
    ): [PeopleNoteCategory!]

    PeopleNoteCategorySubscriptionById(id: ID!): PeopleNoteCategorySubscription
    PeopleNoteCategorySubscription(
      limit: Int
      where: PeopleNoteCategorySubscriptionWhereAttributes
      order: PeopleNoteCategorySubscriptionOrderInput
    ): [PeopleNoteCategorySubscription!]

    PeopleOrganizationStatisticsById(id: ID!): PeopleOrganizationStatistics
    PeopleOrganizationStatistics(
      limit: Int

      order: PeopleOrganizationStatisticsOrderInput
    ): [PeopleOrganizationStatistics!]

    PeoplePeopleImportById(id: ID!): PeoplePeopleImport
    PeoplePeopleImport(
      limit: Int
      where: PeoplePeopleImportWhereAttributes
      order: PeoplePeopleImportOrderInput
    ): [PeoplePeopleImport!]

    PeoplePersonById(id: ID!): PeoplePerson
    PeoplePerson(
      limit: Int
      where: PeoplePersonWhereAttributes
      order: PeoplePersonOrderInput
    ): [PeoplePerson!]

    PeoplePersonMergerById(id: ID!): PeoplePersonMerger
    PeoplePersonMerger(
      limit: Int
      where: PeoplePersonMergerWhereAttributes
      order: PeoplePersonMergerOrderInput
    ): [PeoplePersonMerger!]

    PeoplePhoneNumberById(id: ID!): PeoplePhoneNumber
    PeoplePhoneNumber(
      limit: Int
      where: PeoplePhoneNumberWhereAttributes
      order: PeoplePhoneNumberOrderInput
    ): [PeoplePhoneNumber!]

    PeopleReportById(id: ID!): PeopleReport
    PeopleReport(
      limit: Int
      where: PeopleReportWhereAttributes
      order: PeopleReportOrderInput
    ): [PeopleReport!]

    PeopleSchoolOptionById(id: ID!): PeopleSchoolOption
    PeopleSchoolOption(
      limit: Int
      where: PeopleSchoolOptionWhereAttributes
      order: PeopleSchoolOptionOrderInput
    ): [PeopleSchoolOption!]

    PeopleSocialProfileById(id: ID!): PeopleSocialProfile
    PeopleSocialProfile(
      limit: Int
      where: PeopleSocialProfileWhereAttributes
      order: PeopleSocialProfileOrderInput
    ): [PeopleSocialProfile!]

    PeopleTabById(id: ID!): PeopleTab
    PeopleTab(
      limit: Int
      where: PeopleTabWhereAttributes
      order: PeopleTabOrderInput
    ): [PeopleTab!]

    PeopleWorkflowById(id: ID!): PeopleWorkflow
    PeopleWorkflow(
      limit: Int
      where: PeopleWorkflowWhereAttributes
      order: PeopleWorkflowOrderInput
    ): [PeopleWorkflow!]

    ServicesAttachmentTypeById(id: ID!): ServicesAttachmentType
    ServicesAttachmentType(
      limit: Int

      order: ServicesAttachmentTypeOrderInput
    ): [ServicesAttachmentType!]

    ServicesChatById(id: ID!): ServicesChat
    ServicesChat(
      limit: Int

      order: ServicesChatOrderInput
    ): [ServicesChat!]

    ServicesEmailTemplateById(id: ID!): ServicesEmailTemplate
    ServicesEmailTemplate(
      limit: Int

      order: ServicesEmailTemplateOrderInput
    ): [ServicesEmailTemplate!]

    ServicesFolderById(id: ID!): ServicesFolder
    ServicesFolder(
      limit: Int

      order: ServicesFolderOrderInput
    ): [ServicesFolder!]

    ServicesMediaById(id: ID!): ServicesMedia
    ServicesMedia(
      limit: Int
      where: ServicesMediaWhereAttributes
      order: ServicesMediaOrderInput
    ): [ServicesMedia!]

    ServicesOrganizationById(id: ID!): ServicesOrganization
    ServicesOrganization(
      limit: Int

      order: ServicesOrganizationOrderInput
    ): [ServicesOrganization!]

    ServicesPersonById(id: ID!): ServicesPerson
    ServicesPerson(
      limit: Int
      where: ServicesPersonWhereAttributes
      order: ServicesPersonOrderInput
    ): [ServicesPerson!]

    ServicesReportTemplateById(id: ID!): ServicesReportTemplate
    ServicesReportTemplate(
      limit: Int

      order: ServicesReportTemplateOrderInput
    ): [ServicesReportTemplate!]

    ServicesSeriesById(id: ID!): ServicesSeries
    ServicesSeries(
      limit: Int
      where: ServicesSeriesWhereAttributes
      order: ServicesSeriesOrderInput
    ): [ServicesSeries!]

    ServicesServiceTypeById(id: ID!): ServicesServiceType
    ServicesServiceType(
      limit: Int
      where: ServicesServiceTypeWhereAttributes
      order: ServicesServiceTypeOrderInput
    ): [ServicesServiceType!]

    ServicesSongById(id: ID!): ServicesSong
    ServicesSong(
      limit: Int
      where: ServicesSongWhereAttributes
      order: ServicesSongOrderInput
    ): [ServicesSong!]

    ServicesTagGroupById(id: ID!): ServicesTagGroup
    ServicesTagGroup(
      limit: Int
      where: ServicesTagGroupWhereAttributes
      order: ServicesTagGroupOrderInput
    ): [ServicesTagGroup!]

    ServicesTeamById(id: ID!): ServicesTeam
    ServicesTeam(
      limit: Int
      where: ServicesTeamWhereAttributes
      order: ServicesTeamOrderInput
    ): [ServicesTeam!]

    ResourcesAttachmentById(id: ID!): ResourcesAttachment
    ResourcesAttachment(
      limit: Int
      where: ResourcesAttachmentWhereAttributes
      order: ResourcesAttachmentOrderInput
    ): [ResourcesAttachment!]

    ResourcesConflictById(id: ID!): ResourcesConflict
    ResourcesConflict(
      limit: Int

      order: ResourcesConflictOrderInput
    ): [ResourcesConflict!]

    ResourcesEventById(id: ID!): ResourcesEvent
    ResourcesEvent(
      limit: Int
      where: ResourcesEventWhereAttributes
      order: ResourcesEventOrderInput
    ): [ResourcesEvent!]

    ResourcesEventInstanceById(id: ID!): ResourcesEventInstance
    ResourcesEventInstance(
      limit: Int
      where: ResourcesEventInstanceWhereAttributes
      order: ResourcesEventInstanceOrderInput
    ): [ResourcesEventInstance!]

    ResourcesEventResourceRequestById(id: ID!): ResourcesEventResourceRequest
    ResourcesEventResourceRequest(
      limit: Int
      where: ResourcesEventResourceRequestWhereAttributes
      order: ResourcesEventResourceRequestOrderInput
    ): [ResourcesEventResourceRequest!]

    ResourcesFeedById(id: ID!): ResourcesFeed
    ResourcesFeed(
      limit: Int
      where: ResourcesFeedWhereAttributes
      order: ResourcesFeedOrderInput
    ): [ResourcesFeed!]

    ResourcesPersonById(id: ID!): ResourcesPerson
    ResourcesPerson(
      limit: Int
      where: ResourcesPersonWhereAttributes
      order: ResourcesPersonOrderInput
    ): [ResourcesPerson!]

    ResourcesReportTemplateById(id: ID!): ResourcesReportTemplate
    ResourcesReportTemplate(
      limit: Int

      order: ResourcesReportTemplateOrderInput
    ): [ResourcesReportTemplate!]

    ResourcesResourceById(id: ID!): ResourcesResource
    ResourcesResource(
      limit: Int
      where: ResourcesResourceWhereAttributes
      order: ResourcesResourceOrderInput
    ): [ResourcesResource!]

    ResourcesResourceApprovalGroupById(id: ID!): ResourcesResourceApprovalGroup
    ResourcesResourceApprovalGroup(
      limit: Int
      where: ResourcesResourceApprovalGroupWhereAttributes
      order: ResourcesResourceApprovalGroupOrderInput
    ): [ResourcesResourceApprovalGroup!]

    ResourcesResourceBookingById(id: ID!): ResourcesResourceBooking
    ResourcesResourceBooking(
      limit: Int
      where: ResourcesResourceBookingWhereAttributes
      order: ResourcesResourceBookingOrderInput
    ): [ResourcesResourceBooking!]

    ResourcesResourceFolderById(id: ID!): ResourcesResourceFolder
    ResourcesResourceFolder(
      limit: Int
      where: ResourcesResourceFolderWhereAttributes
      order: ResourcesResourceFolderOrderInput
    ): [ResourcesResourceFolder!]

    ResourcesResourceQuestionById(id: ID!): ResourcesResourceQuestion
    ResourcesResourceQuestion(
      limit: Int
      where: ResourcesResourceQuestionWhereAttributes
      order: ResourcesResourceQuestionOrderInput
    ): [ResourcesResourceQuestion!]

    ResourcesRoomSetupById(id: ID!): ResourcesRoomSetup
    ResourcesRoomSetup(
      limit: Int
      where: ResourcesRoomSetupWhereAttributes
      order: ResourcesRoomSetupOrderInput
    ): [ResourcesRoomSetup!]

    ResourcesTagById(id: ID!): ResourcesTag
    ResourcesTag(
      limit: Int
      where: ResourcesTagWhereAttributes
      order: ResourcesTagOrderInput
    ): [ResourcesTag!]

    ResourcesTagGroupById(id: ID!): ResourcesTagGroup
    ResourcesTagGroup(
      limit: Int
      where: ResourcesTagGroupWhereAttributes
      order: ResourcesTagGroupOrderInput
    ): [ResourcesTagGroup!]

    GivingBatchById(id: ID!): GivingBatch
    GivingBatch(
      limit: Int
      where: GivingBatchWhereAttributes
      order: GivingBatchOrderInput
    ): [GivingBatch!]

    GivingBatchGroupById(id: ID!): GivingBatchGroup
    GivingBatchGroup(
      limit: Int
      where: GivingBatchGroupWhereAttributes
      order: GivingBatchGroupOrderInput
    ): [GivingBatchGroup!]

    GivingCampusById(id: ID!): GivingCampus
    GivingCampus(
      limit: Int

      order: GivingCampusOrderInput
    ): [GivingCampus!]

    GivingDonationById(id: ID!): GivingDonation
    GivingDonation(
      limit: Int
      where: GivingDonationWhereAttributes
      order: GivingDonationOrderInput
    ): [GivingDonation!]

    GivingFundById(id: ID!): GivingFund
    GivingFund(
      limit: Int
      where: GivingFundWhereAttributes
      order: GivingFundOrderInput
    ): [GivingFund!]

    GivingLabelById(id: ID!): GivingLabel
    GivingLabel(
      limit: Int
      where: GivingLabelWhereAttributes
      order: GivingLabelOrderInput
    ): [GivingLabel!]

    GivingPaymentSourceById(id: ID!): GivingPaymentSource
    GivingPaymentSource(
      limit: Int

      order: GivingPaymentSourceOrderInput
    ): [GivingPaymentSource!]

    GivingPersonById(id: ID!): GivingPerson
    GivingPerson(
      limit: Int
      where: GivingPersonWhereAttributes
      order: GivingPersonOrderInput
    ): [GivingPerson!]

    GivingRecurringDonationById(id: ID!): GivingRecurringDonation
    GivingRecurringDonation(
      limit: Int

      order: GivingRecurringDonationOrderInput
    ): [GivingRecurringDonation!]
  }

  enum sortEnum {
    asc
    desc
  }
`;

export default typeDefs;
