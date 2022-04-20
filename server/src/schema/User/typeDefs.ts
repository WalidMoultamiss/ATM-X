import { gql } from "apollo-server-express";


// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
  input UserInput {
    name: String!
    visa: String!
    code: String!
    balance: Int!
  }

  input LoginInput {
    visa: String!
    code: String!
  }

  input balanceInput {
    balance: Int!
  }

  input refillMobileInput {
    price: Int!
  }


  type User {
    id: ID!
    name: String!
    visa: String!
    code: String!
    balance: Int!
    token: String!
    createdAt: String!
  }

  type Query {
    Users: [User!]!
    User(id: ID!): User
  }

 



  type Mutation {
    createUser(input: UserInput): User
    deleteUser(id: ID!): User
    login(input: LoginInput): User
    deleteAllUsers: String
    updateUser(id: ID!, input: UserInput): User
    updateBalance(id: ID!, input: balanceInput): User
    refillMobile(id: ID!, input: refillMobileInput): User
  }
`;
