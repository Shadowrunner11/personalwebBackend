import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    id: String
    firstname: String
    lastname: String
    age: Int
    address: String
  }
  input UserInput {
    firstname: String
    lastname: String
    age: Int
    address: String
  }
  type Query {
    getProyects: [User]
  }
  type Mutation{
    createProyect(input: UserInput!): User
  }
`;
export default typeDefs;