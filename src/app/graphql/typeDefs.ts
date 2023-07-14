import gql from "graphql-tag"

const typeDefs = gql`

    
       

enum AddressOrderByEnum {
    id
    city
    state
    zip
    street
    location
    primary
    created_at
    updated_at
    
  }

  input AddressOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: AddressOrderByEnum 
  }
  
  
  input AddressWhereAttributes {
    city: String
        location: String
        primary: Boolean
        state: String
        street: String
        zip: String
        
  }
  
  type AddressAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          city: String
          
    """ example: string """
          state: String
          
    """ example: string """
          zip: String
          
    """ example: string """
          street: String
          
    """ example: string """
          location: String
          
    """ example: true """
          primary: Boolean
          
    """ example: 2000-01-01T12:00:00Z """
          created_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          updated_at: String
          
  }

  type Address {
    id: ID!
    attributes: AddressAttributes
    
  }
  
       

  enum AnniversaryCouplesOrderByEnum {
    id
    
  }

  input AnniversaryCouplesOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: AnniversaryCouplesOrderByEnum 
  }
  
  
  
  type AnniversaryCouplesAttributes {
    
    """ example: primary_key """
          id: ID!
          
  }

  type AnniversaryCouples {
    id: ID!
    attributes: AnniversaryCouplesAttributes
    
  }
  
       

  enum AppOrderByEnum {
    id
    name
    url
    
  }

  input AppOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: AppOrderByEnum 
  }
  
  
  input AppWhereAttributes {
    name: String
        url: String
        
  }
  
  type AppAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          name: String
          
    """ example: string """
          url: String
          
  }

  type App {
    id: ID!
    attributes: AppAttributes
    
  }
  
       

  enum BackgroundCheckOrderByEnum {
    id
    current
    note
    status_updated_at
    report_url
    expires_on
    result
    completed_at
    
  }

  input BackgroundCheckOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: BackgroundCheckOrderByEnum 
  }
  
  
  
  type BackgroundCheckRelationships {
  person: [Person]
        
    }
  
  type BackgroundCheckAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: true """
          current: Boolean
          
    """ example: string """
          note: String
          
    """ example: 2000-01-01T12:00:00Z """
          status_updated_at: String
          
    """ example: string """
          report_url: String
          
    """ example: 2000-01-01 """
          expires_on: String
          
    """ example: string """
          result: String
          
    """ example: 2000-01-01T12:00:00Z """
          completed_at: String
          
  }

  type BackgroundCheck {
    id: ID!
    attributes: BackgroundCheckAttributes
    relationships: BackgroundCheckRelationships
  }
  
       

  enum BirthdayPeopleOrderByEnum {
    id
    
  }

  input BirthdayPeopleOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: BirthdayPeopleOrderByEnum 
  }
  
  
  
  type BirthdayPeopleAttributes {
    
    """ example: primary_key """
          id: ID!
          
  }

  type BirthdayPeople {
    id: ID!
    attributes: BirthdayPeopleAttributes
    
  }
  
       

  enum CampusOrderByEnum {
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
    name
    created_at
    updated_at
    avatar_url
    
  }

  input CampusOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: CampusOrderByEnum 
  }
  
  
  input CampusWhereAttributes {
    created_at: String
        updated_at: String
        
  }
  
  type CampusRelationships {
  lists: [List]
        service_times: [ServiceTime]
        
    }
  
  type CampusAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: 1.42 """
          latitude: String
          
    """ example: 1.42 """
          longitude: String
          
    """ example: string """
          description: String
          
    """ example: string """
          street: String
          
    """ example: string """
          city: String
          
    """ example: string """
          state: String
          
    """ example: string """
          zip: String
          
    """ example: string """
          country: String
          
    """ example: string """
          phone_number: String
          
    """ example: string """
          website: String
          
    """ example: true """
          twenty_four_hour_time: Boolean
          
    """ example: 1 """
          date_format: String
          
    """ example: true """
          church_center_enabled: Boolean
          
    """ example: string """
          contact_email_address: String
          
    """ example: string """
          time_zone: String
          
    """ example: true """
          geolocation_set_manually: Boolean
          
    """ example: string """
          name: String
          
    """ example: 2000-01-01T12:00:00Z """
          created_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          updated_at: String
          
    """ example: string """
          avatar_url: String
          
  }

  type Campus {
    id: ID!
    attributes: CampusAttributes
    relationships: CampusRelationships
  }
  
       

  enum CarrierOrderByEnum {
    id
    value
    name
    international
    
  }

  input CarrierOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: CarrierOrderByEnum 
  }
  
  
  
  type CarrierAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          value: String
          
    """ example: string """
          name: String
          
    """ example: true """
          international: Boolean
          
  }

  type Carrier {
    id: ID!
    attributes: CarrierAttributes
    
  }
  
       

  enum ConditionOrderByEnum {
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

  input ConditionOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: ConditionOrderByEnum 
  }
  
  
  input ConditionWhereAttributes {
    application: String
        comparison: String
        created_at: String
        definition_class: String
        definition_identifier: String
        description: String
        settings: String
        updated_at: String
        
  }
  
  type ConditionRelationships {
  created_by: [Person]
        
    }
  
  type ConditionAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          application: String
          
    """ example: string """
          definition_class: String
          
    """ example: string """
          comparison: String
          
    """ example: string """
          settings: String
          
    """ example: string """
          definition_identifier: String
          
    """ example: string """
          description: String
          
    """ example: 2000-01-01T12:00:00Z """
          created_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          updated_at: String
          
  }

  type Condition {
    id: ID!
    attributes: ConditionAttributes
    relationships: ConditionRelationships
  }
  
       

  enum ConnectedPersonOrderByEnum {
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

  input ConnectedPersonOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: ConnectedPersonOrderByEnum 
  }
  
  
  
  type ConnectedPersonAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          given_name: String
          
    """ example: string """
          first_name: String
          
    """ example: string """
          nickname: String
          
    """ example: string """
          middle_name: String
          
    """ example: string """
          last_name: String
          
    """ example: string """
          gender: String
          
    """ example: string """
          organization_name: String
          
    """ example: primary_key """
          organization_id: ID!
          
  }

  type ConnectedPerson {
    id: ID!
    attributes: ConnectedPersonAttributes
    
  }
  
       

  enum EmailOrderByEnum {
    id
    address
    location
    primary
    created_at
    updated_at
    blocked
    
  }

  input EmailOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: EmailOrderByEnum 
  }
  
  
  input EmailWhereAttributes {
    address: String
        blocked: Boolean
        created_at: String
        location: String
        primary: Boolean
        updated_at: String
        
  }
  
  type EmailRelationships {
  person: [Person]
        
    }
  
  type EmailAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          address: String
          
    """ example: string """
          location: String
          
    """ example: true """
          primary: Boolean
          
    """ example: 2000-01-01T12:00:00Z """
          created_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          updated_at: String
          
    """ example: true """
          blocked: Boolean
          
  }

  type Email {
    id: ID!
    attributes: EmailAttributes
    relationships: EmailRelationships
  }
  
       

  enum FieldDatumOrderByEnum {
    id
    value
    file
    file_size
    file_content_type
    file_name
    
  }

  input FieldDatumOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: FieldDatumOrderByEnum 
  }
  
  
  input FieldDatumWhereAttributes {
    file: String
        file_content_type: String
        file_name: String
        file_size: String
        value: String
        
  }
  
  type FieldDatumRelationships {
  field_definition: [FieldDefinition]
        field_option: [FieldOption]
        person: [Person]
        tab: [Tab]
        
    }
  
  type FieldDatumAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          value: String
          
    """ example: string """
          file: String
          
    """ example: 1 """
          file_size: String
          
    """ example: string """
          file_content_type: String
          
    """ example: string """
          file_name: String
          
  }

  type FieldDatum {
    id: ID!
    attributes: FieldDatumAttributes
    relationships: FieldDatumRelationships
  }
  
       

  enum FieldDefinitionOrderByEnum {
    id
    data_type
    name
    sequence
    slug
    config
    deleted_at
    tab_id
    
  }

  input FieldDefinitionOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: FieldDefinitionOrderByEnum 
  }
  
  
  input FieldDefinitionWhereAttributes {
    config: String
        data_type: String
        deleted_at: String
        name: String
        sequence: String
        slug: String
        tab_id: ID!
        
  }
  
  type FieldDefinitionRelationships {
  field_options: [FieldOption]
        tab: [Tab]
        
    }
  
  type FieldDefinitionAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          data_type: String
          
    """ example: string """
          name: String
          
    """ example: 1 """
          sequence: String
          
    """ example: string """
          slug: String
          
    """ example: string """
          config: String
          
    """ example: 2000-01-01T12:00:00Z """
          deleted_at: String
          
    """ example: primary_key """
          tab_id: ID!
          
  }

  type FieldDefinition {
    id: ID!
    attributes: FieldDefinitionAttributes
    relationships: FieldDefinitionRelationships
  }
  
       

  enum FieldOptionOrderByEnum {
    id
    value
    sequence
    
  }

  input FieldOptionOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: FieldOptionOrderByEnum 
  }
  
  
  input FieldOptionWhereAttributes {
    sequence: String
        value: String
        
  }
  
  type FieldOptionAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          value: String
          
    """ example: 1 """
          sequence: String
          
  }

  type FieldOption {
    id: ID!
    attributes: FieldOptionAttributes
    
  }
  
       

  enum FormOrderByEnum {
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

  input FormOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: FormOrderByEnum 
  }
  
  
  input FormWhereAttributes {
    active: Boolean
        id: ID!
        
  }
  
  type FormRelationships {
  campus: [Campus]
        fields: [FormField]
        form_submissions: [FormSubmission]
        
    }
  
  type FormAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          name: String
          
    """ example: string """
          description: String
          
    """ example: true """
          active: Boolean
          
    """ example: 2000-01-01T12:00:00Z """
          archived_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          created_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          updated_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          deleted_at: String
          
    """ example: 1 """
          submission_count: String
          
    """ example: string """
          public_url: String
          
    """ example: true """
          recently_viewed: Boolean
          
    """ example: true """
          archived: Boolean
          
  }

  type Form {
    id: ID!
    attributes: FormAttributes
    relationships: FormRelationships
  }
  
       

  enum FormFieldOrderByEnum {
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

  input FormFieldOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: FormFieldOrderByEnum 
  }
  
  
  
  type FormFieldRelationships {
  options: [FormFieldOption]
        
    }
  
  type FormFieldAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: value """
          field_type: String
          
    """ example: string """
          label: String
          
    """ example: string """
          description: String
          
    """ example: true """
          required: Boolean
          
    """ example: string """
          settings: String
          
    """ example: 1 """
          sequence: String
          
    """ example: 2000-01-01T12:00:00Z """
          created_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          updated_at: String
          
  }

  type FormField {
    id: ID!
    attributes: FormFieldAttributes
    relationships: FormFieldRelationships
  }
  
       

  enum FormFieldOptionOrderByEnum {
    id
    label
    sequence
    created_at
    updated_at
    
  }

  input FormFieldOptionOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: FormFieldOptionOrderByEnum 
  }
  
  
  
  type FormFieldOptionAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          label: String
          
    """ example: 1 """
          sequence: String
          
    """ example: 2000-01-01T12:00:00Z """
          created_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          updated_at: String
          
  }

  type FormFieldOption {
    id: ID!
    attributes: FormFieldOptionAttributes
    
  }
  
       

  enum FormSubmissionOrderByEnum {
    id
    verified
    requires_verification
    created_at
    
  }

  input FormSubmissionOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: FormSubmissionOrderByEnum 
  }
  
  
  
  type FormSubmissionRelationships {
  form: [Form]
        form_fields: [FormField]
        form_submission_values: [FormSubmissionValue]
        person: [Person]
        
    }
  
  type FormSubmissionAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: true """
          verified: Boolean
          
    """ example: true """
          requires_verification: Boolean
          
    """ example: 2000-01-01T12:00:00Z """
          created_at: String
          
  }

  type FormSubmission {
    id: ID!
    attributes: FormSubmissionAttributes
    relationships: FormSubmissionRelationships
  }
  
       

  enum FormSubmissionValueOrderByEnum {
    id
    display_value
    attachments
    
  }

  input FormSubmissionValueOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: FormSubmissionValueOrderByEnum 
  }
  
  
  
  type FormSubmissionValueAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          display_value: String
          
    """ example:  """
          attachments: String
          
  }

  type FormSubmissionValue {
    id: ID!
    attributes: FormSubmissionValueAttributes
    
  }
  
       

  enum HouseholdOrderByEnum {
    id
    name
    member_count
    primary_contact_name
    created_at
    updated_at
    avatar
    primary_contact_id
    
  }

  input HouseholdOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: HouseholdOrderByEnum 
  }
  
  
  input HouseholdWhereAttributes {
    created_at: String
        member_count: String
        name: String
        primary_contact_name: String
        updated_at: String
        
  }
  
  type HouseholdRelationships {
  household_memberships: [HouseholdMembership]
        people: [Person]
        
    }
  
  type HouseholdAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          name: String
          
    """ example: 1 """
          member_count: String
          
    """ example: string """
          primary_contact_name: String
          
    """ example: 2000-01-01T12:00:00Z """
          created_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          updated_at: String
          
    """ example: string """
          avatar: String
          
    """ example: primary_key """
          primary_contact_id: ID!
          
  }

  type Household {
    id: ID!
    attributes: HouseholdAttributes
    relationships: HouseholdRelationships
  }
  
       

  enum HouseholdMembershipOrderByEnum {
    id
    person_name
    pending
    
  }

  input HouseholdMembershipOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: HouseholdMembershipOrderByEnum 
  }
  
  
  input HouseholdMembershipWhereAttributes {
    pending: Boolean
        person_name: String
        
  }
  
  type HouseholdMembershipRelationships {
  household: [Household]
        person: [Person]
        
    }
  
  type HouseholdMembershipAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          person_name: String
          
    """ example: true """
          pending: Boolean
          
  }

  type HouseholdMembership {
    id: ID!
    attributes: HouseholdMembershipAttributes
    relationships: HouseholdMembershipRelationships
  }
  
       

  enum InactiveReasonOrderByEnum {
    id
    value
    
  }

  input InactiveReasonOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: InactiveReasonOrderByEnum 
  }
  
  
  input InactiveReasonWhereAttributes {
    value: String
        
  }
  
  type InactiveReasonAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          value: String
          
  }

  type InactiveReason {
    id: ID!
    attributes: InactiveReasonAttributes
    
  }
  
       

  enum ListOrderByEnum {
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

  input ListOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: ListOrderByEnum 
  }
  
  
  input ListWhereAttributes {
    batch_completed_at: String
        created_at: String
        id: ID!
        name: String
        updated_at: String
        
  }
  
  type ListRelationships {
  campus: [Campus]
        category: [ListCategory]
        created_by: [Person]
        list_results: [ListResult]
        mailchimp_sync_status: [MailchimpSyncStatus]
        people: [Person]
        rules: [Rule]
        shares: [ListShare]
        star: [ListStar]
        updated_by: [Person]
        
    }
  
  type ListAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          name: String
          
    """ example: true """
          auto_refresh: Boolean
          
    """ example: string """
          status: String
          
    """ example: true """
          has_inactive_results: Boolean
          
    """ example: true """
          include_inactive: Boolean
          
    """ example: string """
          returns: String
          
    """ example: true """
          return_original_if_none: Boolean
          
    """ example: string """
          subset: String
          
    """ example: true """
          automations_active: Boolean
          
    """ example: 1 """
          automations_count: String
          
    """ example: 1 """
          paused_automations_count: String
          
    """ example: string """
          description: String
          
    """ example: true """
          invalid: Boolean
          
    """ example: string """
          name_or_description: String
          
    """ example: true """
          recently_viewed: Boolean
          
    """ example: 2000-01-01T12:00:00Z """
          refreshed_at: String
          
    """ example: true """
          starred: Boolean
          
    """ example: 1 """
          total_people: String
          
    """ example: 2000-01-01T12:00:00Z """
          batch_completed_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          created_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          updated_at: String
          
  }

  type List {
    id: ID!
    attributes: ListAttributes
    relationships: ListRelationships
  }
  
       

  enum ListCategoryOrderByEnum {
    id
    name
    created_at
    updated_at
    organization_id
    
  }

  input ListCategoryOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: ListCategoryOrderByEnum 
  }
  
  
  input ListCategoryWhereAttributes {
    created_at: String
        name: String
        organization_id: ID!
        updated_at: String
        
  }
  
  type ListCategoryRelationships {
  lists: [List]
        
    }
  
  type ListCategoryAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          name: String
          
    """ example: 2000-01-01T12:00:00Z """
          created_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          updated_at: String
          
    """ example: primary_key """
          organization_id: ID!
          
  }

  type ListCategory {
    id: ID!
    attributes: ListCategoryAttributes
    relationships: ListCategoryRelationships
  }
  
       

  enum ListResultOrderByEnum {
    id
    created_at
    updated_at
    
  }

  input ListResultOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: ListResultOrderByEnum 
  }
  
  
  
  type ListResultAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: 2000-01-01T12:00:00Z """
          created_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          updated_at: String
          
  }

  type ListResult {
    id: ID!
    attributes: ListResultAttributes
    
  }
  
       

  enum ListShareOrderByEnum {
    id
    permission
    group
    created_at
    name
    
  }

  input ListShareOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: ListShareOrderByEnum 
  }
  
  
  input ListShareWhereAttributes {
    created_at: String
        group: String
        name: String
        permission: String
        
  }
  
  type ListShareRelationships {
  person: [Person]
        
    }
  
  type ListShareAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: value """
          permission: String
          
    """ example: value """
          group: String
          
    """ example: 2000-01-01T12:00:00Z """
          created_at: String
          
    """ example: string """
          name: String
          
  }

  type ListShare {
    id: ID!
    attributes: ListShareAttributes
    relationships: ListShareRelationships
  }
  
       

  enum ListStarOrderByEnum {
    id
    created_at
    
  }

  input ListStarOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: ListStarOrderByEnum 
  }
  
  
  
  type ListStarAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: 2000-01-01T12:00:00Z """
          created_at: String
          
  }

  type ListStar {
    id: ID!
    attributes: ListStarAttributes
    
  }
  
       

  enum MailchimpSyncStatusOrderByEnum {
    id
    status
    error
    progress
    completed_at
    segment_id
    
  }

  input MailchimpSyncStatusOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: MailchimpSyncStatusOrderByEnum 
  }
  
  
  
  type MailchimpSyncStatusAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          status: String
          
    """ example: string """
          error: String
          
    """ example: 1 """
          progress: String
          
    """ example: 2000-01-01T12:00:00Z """
          completed_at: String
          
    """ example: 1 """
          segment_id: String
          
  }

  type MailchimpSyncStatus {
    id: ID!
    attributes: MailchimpSyncStatusAttributes
    
  }
  
       

  enum MaritalStatusOrderByEnum {
    id
    value
    
  }

  input MaritalStatusOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: MaritalStatusOrderByEnum 
  }
  
  
  input MaritalStatusWhereAttributes {
    value: String
        
  }
  
  type MaritalStatusAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          value: String
          
  }

  type MaritalStatus {
    id: ID!
    attributes: MaritalStatusAttributes
    
  }
  
       

  enum MessageOrderByEnum {
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

  input MessageOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: MessageOrderByEnum 
  }
  
  
  input MessageWhereAttributes {
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
  
  type MessageRelationships {
  message_group: [MessageGroup]
        to: [Person]
        
    }
  
  type MessageAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: value """
          kind: String
          
    """ example: string """
          to_addresses: String
          
    """ example: string """
          subject: String
          
    """ example: string """
          file: String
          
    """ example: string """
          delivery_status: String
          
    """ example: string """
          reject_reason: String
          
    """ example: 2000-01-01T12:00:00Z """
          created_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          sent_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          bounced_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          rejection_notification_sent_at: String
          
    """ example: string """
          from_name: String
          
    """ example: string """
          from_address: String
          
    """ example: 2000-01-01T12:00:00Z """
          read_at: String
          
    """ example: string """
          app_name: String
          
    """ example: string """
          message_type: String
          
  }

  type Message {
    id: ID!
    attributes: MessageAttributes
    relationships: MessageRelationships
  }
  
       

  enum MessageGroupOrderByEnum {
    id
    uuid
    message_type
    from_address
    subject
    message_count
    system_message
    created_at
    
  }

  input MessageGroupOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: MessageGroupOrderByEnum 
  }
  
  
  input MessageGroupWhereAttributes {
    created_at: String
        from_address: String
        message_count: String
        message_type: String
        subject: String
        system_message: Boolean
        uuid: String
        
  }
  
  type MessageGroupRelationships {
  app: [App]
        from: [Person]
        messages: [Message]
        
    }
  
  type MessageGroupAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          uuid: String
          
    """ example: string """
          message_type: String
          
    """ example: string """
          from_address: String
          
    """ example: string """
          subject: String
          
    """ example: 1 """
          message_count: String
          
    """ example: true """
          system_message: Boolean
          
    """ example: 2000-01-01T12:00:00Z """
          created_at: String
          
  }

  type MessageGroup {
    id: ID!
    attributes: MessageGroupAttributes
    relationships: MessageGroupRelationships
  }
  
       

  enum NamePrefixOrderByEnum {
    id
    value
    
  }

  input NamePrefixOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: NamePrefixOrderByEnum 
  }
  
  
  input NamePrefixWhereAttributes {
    value: String
        
  }
  
  type NamePrefixAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          value: String
          
  }

  type NamePrefix {
    id: ID!
    attributes: NamePrefixAttributes
    
  }
  
       

  enum NameSuffixOrderByEnum {
    id
    value
    
  }

  input NameSuffixOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: NameSuffixOrderByEnum 
  }
  
  
  input NameSuffixWhereAttributes {
    value: String
        
  }
  
  type NameSuffixAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          value: String
          
  }

  type NameSuffix {
    id: ID!
    attributes: NameSuffixAttributes
    
  }
  
       

  enum NoteOrderByEnum {
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

  input NoteOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: NoteOrderByEnum 
  }
  
  
  input NoteWhereAttributes {
    note: String
        note_category_id: ID!
        
  }
  
  type NoteRelationships {
  category: [NoteCategory]
        created_by: [Person]
        person: [Person]
        
    }
  
  type NoteAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          note: String
          
    """ example: 2000-01-01T12:00:00Z """
          created_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          updated_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          display_date: String
          
    """ example: primary_key """
          note_category_id: ID!
          
    """ example: primary_key """
          organization_id: ID!
          
    """ example: primary_key """
          person_id: ID!
          
    """ example: primary_key """
          created_by_id: ID!
          
  }

  type Note {
    id: ID!
    attributes: NoteAttributes
    relationships: NoteRelationships
  }
  
       

  enum NoteCategoryOrderByEnum {
    id
    name
    locked
    created_at
    updated_at
    organization_id
    
  }

  input NoteCategoryOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: NoteCategoryOrderByEnum 
  }
  
  
  input NoteCategoryWhereAttributes {
    created_at: String
        locked: Boolean
        name: String
        organization_id: ID!
        updated_at: String
        
  }
  
  type NoteCategoryRelationships {
  shares: [NoteCategoryShare]
        subscribers: [Person]
        subscriptions: [NoteCategorySubscription]
        
    }
  
  type NoteCategoryAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          name: String
          
    """ example: true """
          locked: Boolean
          
    """ example: 2000-01-01T12:00:00Z """
          created_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          updated_at: String
          
    """ example: primary_key """
          organization_id: ID!
          
  }

  type NoteCategory {
    id: ID!
    attributes: NoteCategoryAttributes
    relationships: NoteCategoryRelationships
  }
  
       

  enum NoteCategoryShareOrderByEnum {
    id
    group
    permission
    person_id
    
  }

  input NoteCategoryShareOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: NoteCategoryShareOrderByEnum 
  }
  
  
  input NoteCategoryShareWhereAttributes {
    permission: String
        
  }
  
  type NoteCategoryShareRelationships {
  person: [Person]
        
    }
  
  type NoteCategoryShareAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: value """
          group: String
          
    """ example: value """
          permission: String
          
    """ example: primary_key """
          person_id: ID!
          
  }

  type NoteCategoryShare {
    id: ID!
    attributes: NoteCategoryShareAttributes
    relationships: NoteCategoryShareRelationships
  }
  
       

  enum NoteCategorySubscriptionOrderByEnum {
    id
    created_at
    updated_at
    
  }

  input NoteCategorySubscriptionOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: NoteCategorySubscriptionOrderByEnum 
  }
  
  
  input NoteCategorySubscriptionWhereAttributes {
    created_at: String
        updated_at: String
        
  }
  
  type NoteCategorySubscriptionAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: 2000-01-01T12:00:00Z """
          created_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          updated_at: String
          
  }

  type NoteCategorySubscription {
    id: ID!
    attributes: NoteCategorySubscriptionAttributes
    
  }
  
       

  enum OrganizationOrderByEnum {
    id
    name
    country_code
    date_format
    time_zone
    contact_website
    created_at
    avatar_url
    
  }

  input OrganizationOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: OrganizationOrderByEnum 
  }
  
  
  
  type OrganizationRelationships {
  addresses: [Address]
        anniversary_couples: [AnniversaryCouples]
        apps: [App]
        background_checks: [BackgroundCheck]
        birthday_people: [BirthdayPeople]
        campuses: [Campus]
        carriers: [Carrier]
        emails: [Email]
        field_data: [FieldDatum]
        field_definitions: [FieldDefinition]
        forms: [Form]
        households: [Household]
        inactive_reasons: [InactiveReason]
        list_categories: [ListCategory]
        lists: [List]
        marital_statuses: [MaritalStatus]
        message_groups: [MessageGroup]
        messages: [Message]
        name_prefixes: [NamePrefix]
        name_suffixes: [NameSuffix]
        note_categories: [NoteCategory]
        note_category_subscriptions: [NoteCategorySubscription]
        notes: [Note]
        people: [Person]
        people_imports: [PeopleImport]
        person_mergers: [PersonMerger]
        phone_numbers: [PhoneNumber]
        reports: [Report]
        school_options: [SchoolOption]
        social_profiles: [SocialProfile]
        stats: [OrganizationStatistics]
        tabs: [Tab]
        workflows: [Workflow]
        
    }
  
  type OrganizationAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          name: String
          
    """ example: string """
          country_code: String
          
    """ example: 1 """
          date_format: String
          
    """ example: string """
          time_zone: String
          
    """ example: string """
          contact_website: String
          
    """ example: 2000-01-01T12:00:00Z """
          created_at: String
          
    """ example: string """
          avatar_url: String
          
  }

  type Organization {
    id: ID!
    attributes: OrganizationAttributes
    relationships: OrganizationRelationships
  }
  
       

  enum OrganizationStatisticsOrderByEnum {
    id
    
  }

  input OrganizationStatisticsOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: OrganizationStatisticsOrderByEnum 
  }
  
  
  
  type OrganizationStatisticsAttributes {
    
    """ example: primary_key """
          id: ID!
          
  }

  type OrganizationStatistics {
    id: ID!
    attributes: OrganizationStatisticsAttributes
    
  }
  
       

  enum PeopleImportOrderByEnum {
    id
    attribs
    status
    created_at
    updated_at
    processed_at
    undone_at
    
  }

  input PeopleImportOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: PeopleImportOrderByEnum 
  }
  
  
  input PeopleImportWhereAttributes {
    status: String
        
  }
  
  type PeopleImportRelationships {
  conflicts: [PeopleImportConflict]
        histories: [PeopleImportHistory]
        
    }
  
  type PeopleImportAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          attribs: String
          
    """ example: value """
          status: String
          
    """ example: 2000-01-01T12:00:00Z """
          created_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          updated_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          processed_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          undone_at: String
          
  }

  type PeopleImport {
    id: ID!
    attributes: PeopleImportAttributes
    relationships: PeopleImportRelationships
  }
  
       

  enum PeopleImportConflictOrderByEnum {
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

  input PeopleImportConflictOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: PeopleImportConflictOrderByEnum 
  }
  
  
  input PeopleImportConflictWhereAttributes {
    kind: String
        name: String
        
  }
  
  type PeopleImportConflictAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          kind: String
          
    """ example: string """
          name: String
          
    """ example: string """
          message: String
          
    """ example: string """
          data: String
          
    """ example: string """
          conflicting_changes: String
          
    """ example: true """
          ignore: Boolean
          
    """ example: 2000-01-01T12:00:00Z """
          created_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          updated_at: String
          
  }

  type PeopleImportConflict {
    id: ID!
    attributes: PeopleImportConflictAttributes
    
  }
  
       

  enum PeopleImportHistoryOrderByEnum {
    id
    name
    created_at
    updated_at
    conflicting_changes
    kind
    
  }

  input PeopleImportHistoryOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: PeopleImportHistoryOrderByEnum 
  }
  
  
  input PeopleImportHistoryWhereAttributes {
    name: String
        
  }
  
  type PeopleImportHistoryRelationships {
  household: [Household]
        person: [Person]
        
    }
  
  type PeopleImportHistoryAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          name: String
          
    """ example: 2000-01-01T12:00:00Z """
          created_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          updated_at: String
          
    """ example: [object Object] """
          conflicting_changes: String
          
    """ example: string """
          kind: String
          
  }

  type PeopleImportHistory {
    id: ID!
    attributes: PeopleImportHistoryAttributes
    relationships: PeopleImportHistoryRelationships
  }
  
       

  enum PersonOrderByEnum {
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

  input PersonOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: PersonOrderByEnum 
  }
  
  
  input PersonWhereAttributes {
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
  
  type PersonRelationships {
  addresses: [Address]
        apps: [App]
        background_checks: [BackgroundCheck]
        connected_people: [ConnectedPerson]
        emails: [Email]
        field_data: [FieldDatum]
        household_memberships: [HouseholdMembership]
        households: [Household]
        inactive_reason: [InactiveReason]
        marital_status: [MaritalStatus]
        message_groups: [MessageGroup]
        messages: [Message]
        name_prefix: [NamePrefix]
        name_suffix: [NameSuffix]
        notes: [Note]
        organization: [Organization]
        person_apps: [PersonApp]
        phone_numbers: [PhoneNumber]
        platform_notifications: [PlatformNotification]
        primary_campus: [Campus]
        school: [SchoolOption]
        social_profiles: [SocialProfile]
        workflow_cards: [WorkflowCard]
        workflow_shares: [WorkflowShare]
        
    }
  
  type PersonAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          given_name: String
          
    """ example: string """
          first_name: String
          
    """ example: string """
          nickname: String
          
    """ example: string """
          middle_name: String
          
    """ example: string """
          last_name: String
          
    """ example: 2000-01-01 """
          birthdate: String
          
    """ example: 2000-01-01 """
          anniversary: String
          
    """ example: string """
          gender: String
          
    """ example: 1 """
          grade: String
          
    """ example: true """
          child: Boolean
          
    """ example: 1 """
          graduation_year: String
          
    """ example: true """
          site_administrator: Boolean
          
    """ example: true """
          accounting_administrator: Boolean
          
    """ example: string """
          people_permissions: String
          
    """ example: string """
          membership: String
          
    """ example: 2000-01-01T12:00:00Z """
          inactivated_at: String
          
    """ example: string """
          status: String
          
    """ example: string """
          medical_notes: String
          
    """ example: 2000-01-01T12:00:00Z """
          created_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          updated_at: String
          
    """ example: string """
          avatar: String
          
    """ example: string """
          name: String
          
    """ example: string """
          demographic_avatar_url: String
          
    """ example: string """
          directory_status: String
          
    """ example: true """
          passed_background_check: Boolean
          
    """ example: true """
          can_create_forms: Boolean
          
    """ example: true """
          can_email_lists: Boolean
          
    """ example: string """
          school_type: String
          
    """ example: 1 """
          remote_id: String
          
  }

  type Person {
    id: ID!
    attributes: PersonAttributes
    relationships: PersonRelationships
  }
  
       

  enum PersonAppOrderByEnum {
    id
    allow_pco_login
    people_permissions
    
  }

  input PersonAppOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: PersonAppOrderByEnum 
  }
  
  
  
  type PersonAppRelationships {
  app: [App]
        
    }
  
  type PersonAppAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: true """
          allow_pco_login: Boolean
          
    """ example: value """
          people_permissions: String
          
  }

  type PersonApp {
    id: ID!
    attributes: PersonAppAttributes
    relationships: PersonAppRelationships
  }
  
       

  enum PersonMergerOrderByEnum {
    id
    created_at
    person_to_keep_id
    person_to_remove_id
    
  }

  input PersonMergerOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: PersonMergerOrderByEnum 
  }
  
  
  input PersonMergerWhereAttributes {
    created_at: String
        person_to_keep_id: ID!
        person_to_remove_id: ID!
        
  }
  
  type PersonMergerAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: 2000-01-01T12:00:00Z """
          created_at: String
          
    """ example: primary_key """
          person_to_keep_id: ID!
          
    """ example: primary_key """
          person_to_remove_id: ID!
          
  }

  type PersonMerger {
    id: ID!
    attributes: PersonMergerAttributes
    
  }
  
       

  enum PhoneNumberOrderByEnum {
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

  input PhoneNumberOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: PhoneNumberOrderByEnum 
  }
  
  
  input PhoneNumberWhereAttributes {
    carrier: String
        created_at: String
        location: String
        number: String
        primary: Boolean
        updated_at: String
        
  }
  
  type PhoneNumberAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          number: String
          
    """ example: string """
          carrier: String
          
    """ example: string """
          location: String
          
    """ example: true """
          primary: Boolean
          
    """ example: 2000-01-01T12:00:00Z """
          created_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          updated_at: String
          
    """ example: string """
          e164: String
          
    """ example: string """
          international: String
          
    """ example: string """
          national: String
          
    """ example: string """
          country_code: String
          
    """ example: string """
          formatted_number: String
          
  }

  type PhoneNumber {
    id: ID!
    attributes: PhoneNumberAttributes
    
  }
  
       

  enum PlatformNotificationOrderByEnum {
    id
    html
    
  }

  input PlatformNotificationOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: PlatformNotificationOrderByEnum 
  }
  
  
  
  type PlatformNotificationAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          html: String
          
  }

  type PlatformNotification {
    id: ID!
    attributes: PlatformNotificationAttributes
    
  }
  
       

  enum ReportOrderByEnum {
    id
    name
    body
    created_at
    updated_at
    
  }

  input ReportOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: ReportOrderByEnum 
  }
  
  
  input ReportWhereAttributes {
    body: String
        created_at: String
        name: String
        updated_at: String
        
  }
  
  type ReportRelationships {
  created_by: [Person]
        updated_by: [Person]
        
    }
  
  type ReportAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          name: String
          
    """ example: string """
          body: String
          
    """ example: 2000-01-01T12:00:00Z """
          created_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          updated_at: String
          
  }

  type Report {
    id: ID!
    attributes: ReportAttributes
    relationships: ReportRelationships
  }
  
       

  enum RuleOrderByEnum {
    id
    subset
    created_at
    updated_at
    
  }

  input RuleOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: RuleOrderByEnum 
  }
  
  
  input RuleWhereAttributes {
    created_at: String
        subset: String
        updated_at: String
        
  }
  
  type RuleRelationships {
  conditions: [Condition]
        
    }
  
  type RuleAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          subset: String
          
    """ example: 2000-01-01T12:00:00Z """
          created_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          updated_at: String
          
  }

  type Rule {
    id: ID!
    attributes: RuleAttributes
    relationships: RuleRelationships
  }
  
       

  enum SchoolOptionOrderByEnum {
    id
    value
    sequence
    beginning_grade
    ending_grade
    school_types
    
  }

  input SchoolOptionOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: SchoolOptionOrderByEnum 
  }
  
  
  input SchoolOptionWhereAttributes {
    beginning_grade: String
        ending_grade: String
        school_types: String
        sequence: String
        value: String
        
  }
  
  type SchoolOptionRelationships {
  promotes_to_school: [SchoolOption]
        
    }
  
  type SchoolOptionAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          value: String
          
    """ example: 1 """
          sequence: String
          
    """ example: string """
          beginning_grade: String
          
    """ example: string """
          ending_grade: String
          
    """ example:  """
          school_types: String
          
  }

  type SchoolOption {
    id: ID!
    attributes: SchoolOptionAttributes
    relationships: SchoolOptionRelationships
  }
  
       

  enum ServiceTimeOrderByEnum {
    id
    start_time
    day
    description
    
  }

  input ServiceTimeOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: ServiceTimeOrderByEnum 
  }
  
  
  
  type ServiceTimeAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: 1 """
          start_time: String
          
    """ example: value """
          day: String
          
    """ example: string """
          description: String
          
  }

  type ServiceTime {
    id: ID!
    attributes: ServiceTimeAttributes
    
  }
  
       

  enum SocialProfileOrderByEnum {
    id
    site
    url
    verified
    created_at
    updated_at
    
  }

  input SocialProfileOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: SocialProfileOrderByEnum 
  }
  
  
  input SocialProfileWhereAttributes {
    created_at: String
        site: String
        updated_at: String
        url: String
        verified: Boolean
        
  }
  
  type SocialProfileRelationships {
  person: [Person]
        
    }
  
  type SocialProfileAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          site: String
          
    """ example: string """
          url: String
          
    """ example: true """
          verified: Boolean
          
    """ example: 2000-01-01T12:00:00Z """
          created_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          updated_at: String
          
  }

  type SocialProfile {
    id: ID!
    attributes: SocialProfileAttributes
    relationships: SocialProfileRelationships
  }
  
       

  enum TabOrderByEnum {
    id
    name
    sequence
    slug
    
  }

  input TabOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: TabOrderByEnum 
  }
  
  
  input TabWhereAttributes {
    name: String
        sequence: String
        slug: String
        
  }
  
  type TabRelationships {
  field_definitions: [FieldDefinition]
        field_options: [FieldOption]
        
    }
  
  type TabAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          name: String
          
    """ example: 1 """
          sequence: String
          
    """ example: string """
          slug: String
          
  }

  type Tab {
    id: ID!
    attributes: TabAttributes
    relationships: TabRelationships
  }
  
       

  enum WorkflowOrderByEnum {
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

  input WorkflowOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: WorkflowOrderByEnum 
  }
  
  
  input WorkflowWhereAttributes {
    campus_id: ID!
        created_at: String
        deleted_at: String
        id: ID!
        name: String
        updated_at: String
        workflow_category_id: ID!
        
  }
  
  type WorkflowRelationships {
  cards: [WorkflowCard]
        category: [WorkflowCategory]
        shared_people: [Person]
        shares: [WorkflowShare]
        steps: [WorkflowStep]
        
    }
  
  type WorkflowAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          name: String
          
    """ example: 1 """
          my_ready_card_count: String
          
    """ example: 1 """
          total_ready_card_count: String
          
    """ example: 1 """
          completed_card_count: String
          
    """ example: 1 """
          total_cards_count: String
          
    """ example: 1 """
          total_ready_and_snoozed_card_count: String
          
    """ example: 2000-01-01T12:00:00Z """
          created_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          updated_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          deleted_at: String
          
    """ example: primary_key """
          campus_id: ID!
          
    """ example: primary_key """
          workflow_category_id: ID!
          
    """ example: 1 """
          my_overdue_card_count: String
          
    """ example: 1 """
          my_due_soon_card_count: String
          
    """ example: true """
          recently_viewed: Boolean
          
  }

  type Workflow {
    id: ID!
    attributes: WorkflowAttributes
    relationships: WorkflowRelationships
  }
  
       

  enum WorkflowCardOrderByEnum {
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

  input WorkflowCardOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: WorkflowCardOrderByEnum 
  }
  
  
  input WorkflowCardWhereAttributes {
    stage: String
        
  }
  
  type WorkflowCardRelationships {
  activities: [WorkflowCardActivity]
        assignee: [Person]
        current_step: [WorkflowStep]
        notes: [WorkflowCardNote]
        person: [Person]
        workflow: [Workflow]
        
    }
  
  type WorkflowCardAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: 2000-01-01T12:00:00Z """
          snooze_until: String
          
    """ example: true """
          overdue: Boolean
          
    """ example: string """
          stage: String
          
    """ example: 1 """
          calculated_due_at_in_days_ago: String
          
    """ example: true """
          sticky_assignment: Boolean
          
    """ example: 2000-01-01T12:00:00Z """
          created_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          updated_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          completed_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          flagged_for_notification_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          removed_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          moved_to_step_at: String
          
  }

  type WorkflowCard {
    id: ID!
    attributes: WorkflowCardAttributes
    relationships: WorkflowCardRelationships
  }
  
       

  enum WorkflowCardActivityOrderByEnum {
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

  input WorkflowCardActivityOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: WorkflowCardActivityOrderByEnum 
  }
  
  
  
  type WorkflowCardActivityAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          comment: String
          
    """ example: string """
          content: String
          
    """ example: string """
          form_submission_url: String
          
    """ example: string """
          person_avatar_url: String
          
    """ example: string """
          person_name: String
          
    """ example: string """
          reassigned_to_avatar_url: String
          
    """ example: string """
          reassigned_to_name: String
          
    """ example: string """
          subject: String
          
    """ example: string """
          type: String
          
    """ example: true """
          content_is_html: Boolean
          
    """ example: 2000-01-01T12:00:00Z """
          created_at: String
          
  }

  type WorkflowCardActivity {
    id: ID!
    attributes: WorkflowCardActivityAttributes
    
  }
  
       

  enum WorkflowCardNoteOrderByEnum {
    id
    note
    created_at
    
  }

  input WorkflowCardNoteOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: WorkflowCardNoteOrderByEnum 
  }
  
  
  
  type WorkflowCardNoteAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          note: String
          
    """ example: 2000-01-01T12:00:00Z """
          created_at: String
          
  }

  type WorkflowCardNote {
    id: ID!
    attributes: WorkflowCardNoteAttributes
    
  }
  
       

  enum WorkflowCategoryOrderByEnum {
    id
    name
    created_at
    updated_at
    
  }

  input WorkflowCategoryOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: WorkflowCategoryOrderByEnum 
  }
  
  
  input WorkflowCategoryWhereAttributes {
    created_at: String
        name: String
        updated_at: String
        
  }
  
  type WorkflowCategoryAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: string """
          name: String
          
    """ example: 2000-01-01T12:00:00Z """
          created_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          updated_at: String
          
  }

  type WorkflowCategory {
    id: ID!
    attributes: WorkflowCategoryAttributes
    
  }
  
       

  enum WorkflowShareOrderByEnum {
    id
    group
    permission
    person_id
    
  }

  input WorkflowShareOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: WorkflowShareOrderByEnum 
  }
  
  
  input WorkflowShareWhereAttributes {
    permission: String
        
  }
  
  type WorkflowShareRelationships {
  person: [Person]
        
    }
  
  type WorkflowShareAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: value """
          group: String
          
    """ example: value """
          permission: String
          
    """ example: primary_key """
          person_id: ID!
          
  }

  type WorkflowShare {
    id: ID!
    attributes: WorkflowShareAttributes
    relationships: WorkflowShareRelationships
  }
  
       

  enum WorkflowStepOrderByEnum {
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

  input WorkflowStepOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: WorkflowStepOrderByEnum 
  }
  
  
  input WorkflowStepWhereAttributes {
    created_at: String
        name: String
        updated_at: String
        
  }
  
  type WorkflowStepRelationships {
  assignee_summaries: [WorkflowStepAssigneeSummary]
        default_assignee: [Person]
        
    }
  
  type WorkflowStepAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: 2000-01-01T12:00:00Z """
          created_at: String
          
    """ example: 2000-01-01T12:00:00Z """
          updated_at: String
          
    """ example: 1 """
          sequence: String
          
    """ example: string """
          name: String
          
    """ example: string """
          description: String
          
    """ example: 1 """
          auto_snooze_days: String
          
    """ example: 1 """
          auto_snooze_value: String
          
    """ example: value """
          auto_snooze_interval: String
          
    """ example: 1 """
          expected_response_time_in_days: String
          
    """ example: 1 """
          my_ready_card_count: String
          
    """ example: 1 """
          total_ready_card_count: String
          
    """ example: primary_key """
          default_assignee_id: ID!
          
  }

  type WorkflowStep {
    id: ID!
    attributes: WorkflowStepAttributes
    relationships: WorkflowStepRelationships
  }
  
       

  enum WorkflowStepAssigneeSummaryOrderByEnum {
    id
    ready_count
    snoozed_count
    
  }

  input WorkflowStepAssigneeSummaryOrderInput {
    """ this will append a (-) to the field name if desc """
    sort: sortEnum = asc
    field: WorkflowStepAssigneeSummaryOrderByEnum 
  }
  
  
  
  type WorkflowStepAssigneeSummaryRelationships {
  person: [Person]
        
    }
  
  type WorkflowStepAssigneeSummaryAttributes {
    
    """ example: primary_key """
          id: ID!
          
    """ example: 1 """
          ready_count: String
          
    """ example: 1 """
          snoozed_count: String
          
  }

  type WorkflowStepAssigneeSummary {
    id: ID!
    attributes: WorkflowStepAssigneeSummaryAttributes
    relationships: WorkflowStepAssigneeSummaryRelationships
  }
  
    type Query {
      
    AddressById(id: ID!): Address
    Address(
        limit: Int, 
        where: AddressWhereAttributes,
        order: AddressOrderInput
        ): [Address!]
    
    AnniversaryCouplesById(id: ID!): AnniversaryCouples
    AnniversaryCouples(
        limit: Int, 
        
        order: AnniversaryCouplesOrderInput
        ): [AnniversaryCouples!]
    
    AppById(id: ID!): App
    App(
        limit: Int, 
        where: AppWhereAttributes,
        order: AppOrderInput
        ): [App!]
    
    BackgroundCheckById(id: ID!): BackgroundCheck
    BackgroundCheck(
        limit: Int, 
        
        order: BackgroundCheckOrderInput
        ): [BackgroundCheck!]
    
    BirthdayPeopleById(id: ID!): BirthdayPeople
    BirthdayPeople(
        limit: Int, 
        
        order: BirthdayPeopleOrderInput
        ): [BirthdayPeople!]
    
    CampusById(id: ID!): Campus
    Campus(
        limit: Int, 
        where: CampusWhereAttributes,
        order: CampusOrderInput
        ): [Campus!]
    
    CarrierById(id: ID!): Carrier
    Carrier(
        limit: Int, 
        
        order: CarrierOrderInput
        ): [Carrier!]
    
    ConditionById(id: ID!): Condition
    Condition(
        limit: Int, 
        where: ConditionWhereAttributes,
        order: ConditionOrderInput
        ): [Condition!]
    
    ConnectedPersonById(id: ID!): ConnectedPerson
    ConnectedPerson(
        limit: Int, 
        
        order: ConnectedPersonOrderInput
        ): [ConnectedPerson!]
    
    EmailById(id: ID!): Email
    Email(
        limit: Int, 
        where: EmailWhereAttributes,
        order: EmailOrderInput
        ): [Email!]
    
    FieldDatumById(id: ID!): FieldDatum
    FieldDatum(
        limit: Int, 
        where: FieldDatumWhereAttributes,
        order: FieldDatumOrderInput
        ): [FieldDatum!]
    
    FieldDefinitionById(id: ID!): FieldDefinition
    FieldDefinition(
        limit: Int, 
        where: FieldDefinitionWhereAttributes,
        order: FieldDefinitionOrderInput
        ): [FieldDefinition!]
    
    FieldOptionById(id: ID!): FieldOption
    FieldOption(
        limit: Int, 
        where: FieldOptionWhereAttributes,
        order: FieldOptionOrderInput
        ): [FieldOption!]
    
    FormById(id: ID!): Form
    Form(
        limit: Int, 
        where: FormWhereAttributes,
        order: FormOrderInput
        ): [Form!]
    
    FormFieldById(id: ID!): FormField
    FormField(
        limit: Int, 
        
        order: FormFieldOrderInput
        ): [FormField!]
    
    FormFieldOptionById(id: ID!): FormFieldOption
    FormFieldOption(
        limit: Int, 
        
        order: FormFieldOptionOrderInput
        ): [FormFieldOption!]
    
    FormSubmissionById(id: ID!): FormSubmission
    FormSubmission(
        limit: Int, 
        
        order: FormSubmissionOrderInput
        ): [FormSubmission!]
    
    FormSubmissionValueById(id: ID!): FormSubmissionValue
    FormSubmissionValue(
        limit: Int, 
        
        order: FormSubmissionValueOrderInput
        ): [FormSubmissionValue!]
    
    HouseholdById(id: ID!): Household
    Household(
        limit: Int, 
        where: HouseholdWhereAttributes,
        order: HouseholdOrderInput
        ): [Household!]
    
    HouseholdMembershipById(id: ID!): HouseholdMembership
    HouseholdMembership(
        limit: Int, 
        where: HouseholdMembershipWhereAttributes,
        order: HouseholdMembershipOrderInput
        ): [HouseholdMembership!]
    
    InactiveReasonById(id: ID!): InactiveReason
    InactiveReason(
        limit: Int, 
        where: InactiveReasonWhereAttributes,
        order: InactiveReasonOrderInput
        ): [InactiveReason!]
    
    ListById(id: ID!): List
    List(
        limit: Int, 
        where: ListWhereAttributes,
        order: ListOrderInput
        ): [List!]
    
    ListCategoryById(id: ID!): ListCategory
    ListCategory(
        limit: Int, 
        where: ListCategoryWhereAttributes,
        order: ListCategoryOrderInput
        ): [ListCategory!]
    
    ListResultById(id: ID!): ListResult
    ListResult(
        limit: Int, 
        
        order: ListResultOrderInput
        ): [ListResult!]
    
    ListShareById(id: ID!): ListShare
    ListShare(
        limit: Int, 
        where: ListShareWhereAttributes,
        order: ListShareOrderInput
        ): [ListShare!]
    
    ListStarById(id: ID!): ListStar
    ListStar(
        limit: Int, 
        
        order: ListStarOrderInput
        ): [ListStar!]
    
    MailchimpSyncStatusById(id: ID!): MailchimpSyncStatus
    MailchimpSyncStatus(
        limit: Int, 
        
        order: MailchimpSyncStatusOrderInput
        ): [MailchimpSyncStatus!]
    
    MaritalStatusById(id: ID!): MaritalStatus
    MaritalStatus(
        limit: Int, 
        where: MaritalStatusWhereAttributes,
        order: MaritalStatusOrderInput
        ): [MaritalStatus!]
    
    MessageById(id: ID!): Message
    Message(
        limit: Int, 
        where: MessageWhereAttributes,
        order: MessageOrderInput
        ): [Message!]
    
    MessageGroupById(id: ID!): MessageGroup
    MessageGroup(
        limit: Int, 
        where: MessageGroupWhereAttributes,
        order: MessageGroupOrderInput
        ): [MessageGroup!]
    
    NamePrefixById(id: ID!): NamePrefix
    NamePrefix(
        limit: Int, 
        where: NamePrefixWhereAttributes,
        order: NamePrefixOrderInput
        ): [NamePrefix!]
    
    NameSuffixById(id: ID!): NameSuffix
    NameSuffix(
        limit: Int, 
        where: NameSuffixWhereAttributes,
        order: NameSuffixOrderInput
        ): [NameSuffix!]
    
    NoteById(id: ID!): Note
    Note(
        limit: Int, 
        where: NoteWhereAttributes,
        order: NoteOrderInput
        ): [Note!]
    
    NoteCategoryById(id: ID!): NoteCategory
    NoteCategory(
        limit: Int, 
        where: NoteCategoryWhereAttributes,
        order: NoteCategoryOrderInput
        ): [NoteCategory!]
    
    NoteCategoryShareById(id: ID!): NoteCategoryShare
    NoteCategoryShare(
        limit: Int, 
        where: NoteCategoryShareWhereAttributes,
        order: NoteCategoryShareOrderInput
        ): [NoteCategoryShare!]
    
    NoteCategorySubscriptionById(id: ID!): NoteCategorySubscription
    NoteCategorySubscription(
        limit: Int, 
        where: NoteCategorySubscriptionWhereAttributes,
        order: NoteCategorySubscriptionOrderInput
        ): [NoteCategorySubscription!]
    
    OrganizationById(id: ID!): Organization
    Organization(
        limit: Int, 
        
        order: OrganizationOrderInput
        ): [Organization!]
    
    OrganizationStatisticsById(id: ID!): OrganizationStatistics
    OrganizationStatistics(
        limit: Int, 
        
        order: OrganizationStatisticsOrderInput
        ): [OrganizationStatistics!]
    
    PeopleImportById(id: ID!): PeopleImport
    PeopleImport(
        limit: Int, 
        where: PeopleImportWhereAttributes,
        order: PeopleImportOrderInput
        ): [PeopleImport!]
    
    PeopleImportConflictById(id: ID!): PeopleImportConflict
    PeopleImportConflict(
        limit: Int, 
        where: PeopleImportConflictWhereAttributes,
        order: PeopleImportConflictOrderInput
        ): [PeopleImportConflict!]
    
    PeopleImportHistoryById(id: ID!): PeopleImportHistory
    PeopleImportHistory(
        limit: Int, 
        where: PeopleImportHistoryWhereAttributes,
        order: PeopleImportHistoryOrderInput
        ): [PeopleImportHistory!]
    
    PersonById(id: ID!): Person
    Person(
        limit: Int, 
        where: PersonWhereAttributes,
        order: PersonOrderInput
        ): [Person!]
    
    PersonAppById(id: ID!): PersonApp
    PersonApp(
        limit: Int, 
        
        order: PersonAppOrderInput
        ): [PersonApp!]
    
    PersonMergerById(id: ID!): PersonMerger
    PersonMerger(
        limit: Int, 
        where: PersonMergerWhereAttributes,
        order: PersonMergerOrderInput
        ): [PersonMerger!]
    
    PhoneNumberById(id: ID!): PhoneNumber
    PhoneNumber(
        limit: Int, 
        where: PhoneNumberWhereAttributes,
        order: PhoneNumberOrderInput
        ): [PhoneNumber!]
    
    PlatformNotificationById(id: ID!): PlatformNotification
    PlatformNotification(
        limit: Int, 
        
        order: PlatformNotificationOrderInput
        ): [PlatformNotification!]
    
    ReportById(id: ID!): Report
    Report(
        limit: Int, 
        where: ReportWhereAttributes,
        order: ReportOrderInput
        ): [Report!]
    
    RuleById(id: ID!): Rule
    Rule(
        limit: Int, 
        where: RuleWhereAttributes,
        order: RuleOrderInput
        ): [Rule!]
    
    SchoolOptionById(id: ID!): SchoolOption
    SchoolOption(
        limit: Int, 
        where: SchoolOptionWhereAttributes,
        order: SchoolOptionOrderInput
        ): [SchoolOption!]
    
    ServiceTimeById(id: ID!): ServiceTime
    ServiceTime(
        limit: Int, 
        
        order: ServiceTimeOrderInput
        ): [ServiceTime!]
    
    SocialProfileById(id: ID!): SocialProfile
    SocialProfile(
        limit: Int, 
        where: SocialProfileWhereAttributes,
        order: SocialProfileOrderInput
        ): [SocialProfile!]
    
    TabById(id: ID!): Tab
    Tab(
        limit: Int, 
        where: TabWhereAttributes,
        order: TabOrderInput
        ): [Tab!]
    
    WorkflowById(id: ID!): Workflow
    Workflow(
        limit: Int, 
        where: WorkflowWhereAttributes,
        order: WorkflowOrderInput
        ): [Workflow!]
    
    WorkflowCardById(id: ID!): WorkflowCard
    WorkflowCard(
        limit: Int, 
        where: WorkflowCardWhereAttributes,
        order: WorkflowCardOrderInput
        ): [WorkflowCard!]
    
    WorkflowCardActivityById(id: ID!): WorkflowCardActivity
    WorkflowCardActivity(
        limit: Int, 
        
        order: WorkflowCardActivityOrderInput
        ): [WorkflowCardActivity!]
    
    WorkflowCardNoteById(id: ID!): WorkflowCardNote
    WorkflowCardNote(
        limit: Int, 
        
        order: WorkflowCardNoteOrderInput
        ): [WorkflowCardNote!]
    
    WorkflowCategoryById(id: ID!): WorkflowCategory
    WorkflowCategory(
        limit: Int, 
        where: WorkflowCategoryWhereAttributes,
        order: WorkflowCategoryOrderInput
        ): [WorkflowCategory!]
    
    WorkflowShareById(id: ID!): WorkflowShare
    WorkflowShare(
        limit: Int, 
        where: WorkflowShareWhereAttributes,
        order: WorkflowShareOrderInput
        ): [WorkflowShare!]
    
    WorkflowStepById(id: ID!): WorkflowStep
    WorkflowStep(
        limit: Int, 
        where: WorkflowStepWhereAttributes,
        order: WorkflowStepOrderInput
        ): [WorkflowStep!]
    
    WorkflowStepAssigneeSummaryById(id: ID!): WorkflowStepAssigneeSummary
    WorkflowStepAssigneeSummary(
        limit: Int, 
        
        order: WorkflowStepAssigneeSummaryOrderInput
        ): [WorkflowStepAssigneeSummary!]
    
    }

    enum sortEnum {
      asc
      desc
    }
    
  
`

export default typeDefs