const typeDefs = `#graphql
type Person {
    id: ID!
    name: String!
    age: Int!
    occupation: String
    salary: Float
    address: Address
  }

  type Address {
    id: ID!
    zipcode: Int!
    street: String!
    number: Int!
    people: [Person!]!
  }

  type Query {
    people: [Person!]!
    person(id: ID!): Person
    addresses: [Address!]!
  }

  type Mutation {
    createPerson(input: PersonInput!): Person
    deletePerson(id: ID!): Boolean
    updatePerson(id: ID!, input: PersonInput!): Person
    createAddress(input: AddressInput!): Address
    addPersonToAddress(personId: ID!, addressId: ID!): Person
  }

  input PersonInput {
    name: String!
    age: Int!
    occupation: String
    salary: Float
    addressId: ID
  }

  input AddressInput {
    zipcode: Int!
    street: String!
    number: Int!
  }


`

export default typeDefs;