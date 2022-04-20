import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type LoginInput = {
  code: Scalars['String'];
  visa: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser?: Maybe<User>;
  deleteAllUsers?: Maybe<Scalars['String']>;
  deleteUser?: Maybe<User>;
  login?: Maybe<User>;
  refillMobile?: Maybe<User>;
  updateBalance?: Maybe<User>;
  updateUser?: Maybe<User>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<UserInput>;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationLoginArgs = {
  input?: InputMaybe<LoginInput>;
};


export type MutationRefillMobileArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<RefillMobileInput>;
};


export type MutationUpdateBalanceArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<BalanceInput>;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<UserInput>;
};

export type Query = {
  __typename?: 'Query';
  User?: Maybe<User>;
  Users: Array<User>;
  countUsers: Scalars['Int'];
  countUsersByDay: Array<UserByDay>;
  getUsers: Array<User>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  balance: Scalars['Int'];
  code: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  token: Scalars['String'];
  visa: Scalars['String'];
};

export type UserByDay = {
  __typename?: 'UserByDay';
  _id: Scalars['String'];
  count: Scalars['Int'];
};

export type UserInput = {
  balance: Scalars['Int'];
  code: Scalars['String'];
  name: Scalars['String'];
  visa: Scalars['String'];
};

export type BalanceInput = {
  balance: Scalars['Int'];
};

export type RefillMobileInput = {
  price: Scalars['Int'];
};

export type GetUserMutationVariables = Exact<{
  input?: InputMaybe<LoginInput>;
}>;


export type GetUserMutation = { __typename?: 'Mutation', login?: { __typename?: 'User', id: string, name: string, visa: string, balance: number, token: string, createdAt: string } | null };

export type UpdateBalanceMutationVariables = Exact<{
  updateBalanceId: Scalars['ID'];
  input?: InputMaybe<BalanceInput>;
}>;


export type UpdateBalanceMutation = { __typename?: 'Mutation', updateBalance?: { __typename?: 'User', id: string, name: string, visa: string, code: string, balance: number } | null };


export const GetUserDocument = gql`
    mutation getUser($input: LoginInput) {
  login(input: $input) {
    id
    name
    visa
    balance
    token
    createdAt
  }
}
    `;
export type GetUserMutationFn = Apollo.MutationFunction<GetUserMutation, GetUserMutationVariables>;

/**
 * __useGetUserMutation__
 *
 * To run a mutation, you first call `useGetUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getUserMutation, { data, loading, error }] = useGetUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetUserMutation(baseOptions?: Apollo.MutationHookOptions<GetUserMutation, GetUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetUserMutation, GetUserMutationVariables>(GetUserDocument, options);
      }
export type GetUserMutationHookResult = ReturnType<typeof useGetUserMutation>;
export type GetUserMutationResult = Apollo.MutationResult<GetUserMutation>;
export type GetUserMutationOptions = Apollo.BaseMutationOptions<GetUserMutation, GetUserMutationVariables>;
export const UpdateBalanceDocument = gql`
    mutation UpdateBalance($updateBalanceId: ID!, $input: balanceInput) {
  updateBalance(id: $updateBalanceId, input: $input) {
    id
    name
    visa
    code
    balance
  }
}
    `;
export type UpdateBalanceMutationFn = Apollo.MutationFunction<UpdateBalanceMutation, UpdateBalanceMutationVariables>;

/**
 * __useUpdateBalanceMutation__
 *
 * To run a mutation, you first call `useUpdateBalanceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBalanceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBalanceMutation, { data, loading, error }] = useUpdateBalanceMutation({
 *   variables: {
 *      updateBalanceId: // value for 'updateBalanceId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBalanceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBalanceMutation, UpdateBalanceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBalanceMutation, UpdateBalanceMutationVariables>(UpdateBalanceDocument, options);
      }
export type UpdateBalanceMutationHookResult = ReturnType<typeof useUpdateBalanceMutation>;
export type UpdateBalanceMutationResult = Apollo.MutationResult<UpdateBalanceMutation>;
export type UpdateBalanceMutationOptions = Apollo.BaseMutationOptions<UpdateBalanceMutation, UpdateBalanceMutationVariables>;