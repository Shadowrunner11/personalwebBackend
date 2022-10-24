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

  type Photo {
    url: String
    name: String
    label: String
  }

  type Query {
    getProyects: [User]
  }
  type Mutation{
    createProyect(input: UserInput!): User
  }
  type Query {
    getPhtos:[Photo]
  }
`;
export default typeDefs;