import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query Query {
    Users {
      name
      id
      email
      phone
      cin
      licenseType
      role
      score
    }
  }
`;

export const SUBMIT_DATA = gql`
  mutation Mutation($input: UserInput) {
    submitData(input: $input) {
      id
      name
      email
      phone
      cin
      licenseType
      role
      score
    }
  }
`;
