import gql from "graphql-tag"

const typeDefs = gql`
type Query {
  people(limit: Int): [Person!]!
}

type Person {
  name: String
  emails: [Email]
  addresses: [Address]
  households: [Household]
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

`

export default typeDefs