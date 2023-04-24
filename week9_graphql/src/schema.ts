const typeDefs = `#graphql
type Person {
    id: ID!
    name: String!
    age: Int!
    occupation: String
    salary: Float
    
  }

  type Query {
    people: [Person!]!
    person(id: ID!): Person
  }

  type Mutation {
    createPerson(input: PersonInput!): Person
    deletePerson(id: ID!): Boolean
    updatePerson(id: ID!, input: PersonInput!): Person
  }

  input PersonInput {
    name: String!
    age: Int!
    occupation: String
    salary: Float
  }


`

export default typeDefs;