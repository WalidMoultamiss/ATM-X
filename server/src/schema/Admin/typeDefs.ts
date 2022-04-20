import { gql } from 'apollo-server-express';

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
  type UserByDay {
    _id: String!
    count: Int!
  }
  type Query {
    getUsers: [User!]!
    countUsers: Int!
    countUsersByDay: [UserByDay!]!
  }
`;
