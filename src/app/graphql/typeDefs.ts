import gql from "graphql-tag"

const typeDefs = gql`
type Query {
  people(
    limit: Int, 
    where: PersonWhereAttributes,
    order: OrderInput
  ): [Person!]!
}

input OrderInput {
  """ this will append a (-) to the field name if desc """
  sort: sortEnum = asc
  field: PersonOrderEnum 
}

enum sortEnum {
  asc
  desc
}


type Person {
  type: String
  id: String
  attributes: PersonAttributes
  links: PersonLinks
}

enum PersonOrderEnum {
  avatar_url
  name
  child
  created_at
  event_permissions_type
  first_name
  gender
  given_name
  last_name
  middle_name
  name_prefix
  name_suffix
  pending_request_count
  people_permissions_type
  permissions
  resolves_conflicts
  resources_permissions_type
  room_permissions_type
  site_administrator
  status
  updated_at
}

input PersonWhereAttributes {
  given_name: String
  first_name: String
  nickname: String
  middle_name: String
  last_name: String
  birthdate: String
  anniversary: String
  gender: String
  grade: String
  child: String
  graduation_year: String
  site_administrator: String
  accounting_administrator: String
  people_permissions: String
  membership: String
  inactivated_at: String
  status: String
  medical_notes: String
  created_at: String
  updated_at: String
  search_name: String
  search_phone_number: String
  search_phone_number_e164: String
  search_name_or_email: String
  search_name_or_email_or_phone_number: String
  remote_id: String
  id: String
}

enum StatusEnum {
  inactive
  active
}

type PersonAttributes {
  avatar_url: String
  name: String
  child: Boolean
  contact_data: PersonContactData
  created_at: String
  event_permissions_type: String
  given_name: String
  first_name: String
  gender: String
  has_access: Boolean
  last_name: String
  middle_name: String
  name_prefix: String
  name_suffix: String
  pending_request_count: Int
  people_permissions_type: String
  permissions: Int
  resolves_conflicts: Boolean
  resources_permissions_type: String
  room_permissions_type: String
  site_administrator: Boolean
  status: String
  updated_at: String
  emails: [Email]
  addresses: [Address]
  households: [Household]
  marital_status: [MaritalStatus]
}

type PersonContactData {
  email_addresses: [EmailAddress]
  addresses: [Address]
  phone_numbers: [PhoneNumber]
}

type EmailAddress {
  address: String
  location: String
  primary: Boolean
  blocked: Boolean
}

type Address {
  street: String
  street_line_1: String
  street_line_2: String
  city: String
  state: String
  zip: String
  location: String
  primary: Boolean
}

type PhoneNumber {
  number: String
  carrier: String
  location: String
  primary: Boolean
}

type PersonLinks {
  self: String
  html: String
}



type Email {
  type: String
  id: String
  attributes: EmailAttributes
  relationships: EmailRelationships
  links: EmailLinks
}

type EmailAttributes {
  address: String
  blocked: Boolean
  created_at: String
  location: String
  primary: Boolean
  updated_at: String
}

type EmailRelationships {
  person: EmailPerson
}

type EmailPerson {
  data: EmailPersonData
}

type EmailPersonData {
  type: String
  id: String
}

type EmailLinks {
  self: String
}

type Address {
  type: String!
  id: ID
  attributes: AddressAttributes
  relationships: AddressRelationships
  links: AddressLinks
}

type AddressAttributes {
  city: String
  created_at: String
  location: String
  primary: Boolean
  state: String
  street: String
  updated_at: String
  zip: String
}

type AddressRelationships {
  person: PersonRelationship!
}

type PersonRelationship {
  data: PersonData!
}

type PersonData {
  type: String!
  id: ID!
}

type AddressLinks {
  self: String!
}

type Household {
  type: String!
  id: ID!
  attributes: HouseholdAttributes!
  relationships: HouseholdRelationships!
  links: HouseholdLinks!
}

type HouseholdAttributes {
  avatar: String
  created_at: String
  member_count: Int
  name: String
  primary_contact_id: ID
  primary_contact_name: String
  updated_at: String
}

type HouseholdRelationships {
  primary_contact: PersonRelationship!
  people: [PersonRelationship!]!
}

type PersonRelationship {
  data: PersonData!
}

type PersonData {
  type: String!
  id: ID!
}

type HouseholdLinks {
  self: String!
}

type MaritalStatus {
  type: String
  id: String
  attributes: MaritalStatusAttributes
  links: MaritalStatusLinks
}

type MaritalStatusAttributes {
  value: String
}

type MaritalStatusLinks {
  self: String
}
`

export default typeDefs