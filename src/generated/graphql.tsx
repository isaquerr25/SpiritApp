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

export type AuthUser = {
  __typename?: 'AuthUser';
  dateJoined: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['Int'];
  isActive: Scalars['Boolean'];
  isStaff: Scalars['Boolean'];
  isSuperuser: Scalars['Boolean'];
  lastLogin: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  userappUserappmodel: UserappUserappmodel;
  username: Scalars['String'];
};

export type CreateAuthUser = {
  dateJoined: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  isActive: Scalars['Boolean'];
  isStaff: Scalars['Boolean'];
  isSuperuser: Scalars['Boolean'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type CreateSinalTelegram = {
  abertura: Scalars['String'];
  dataBorn: Scalars['String'];
  dataCriacao: Scalars['String'];
  dataFechamento?: InputMaybe<Scalars['String']>;
  direcao: Scalars['String'];
  idTelegram: Scalars['String'];
  local: Scalars['String'];
  numLoss: Scalars['Int'];
  numWin: Scalars['String'];
  par: Scalars['String'];
  preco: Scalars['String'];
  status: Scalars['String'];
  stopLoss: Scalars['String'];
  stopWin: Scalars['String'];
  ticket: Scalars['String'];
};

export type ErrorType = {
  __typename?: 'ErrorType';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type InputLoginAuthUser = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  LoginAuthUser: UserTypeModel;
  createAuthUser: UserTypeModel;
  createSinalTelegram: SinalTelegram;
};


export type MutationLoginAuthUserArgs = {
  data: InputLoginAuthUser;
};


export type MutationCreateAuthUserArgs = {
  data: CreateAuthUser;
};


export type MutationCreateSinalTelegramArgs = {
  data: CreateSinalTelegram;
};

export type Query = {
  __typename?: 'Query';
  GetUserResolver: Array<AuthUser>;
  books: Array<SinalTelegram>;
};

export type SinalTelegram = {
  __typename?: 'SinalTelegram';
  abertura: Scalars['String'];
  dataBorn: Scalars['String'];
  dataCriacao: Scalars['String'];
  dataFechamento?: Maybe<Scalars['String']>;
  direcao: Scalars['String'];
  id: Scalars['Int'];
  idTelegram: Scalars['String'];
  local: Scalars['String'];
  numLoss: Scalars['Int'];
  numWin: Scalars['String'];
  par: Scalars['String'];
  preco: Scalars['String'];
  status: Scalars['String'];
  stopLoss: Scalars['String'];
  stopWin: Scalars['String'];
  ticket: Scalars['String'];
};

export type UserTypeModel = {
  __typename?: 'UserTypeModel';
  errors?: Maybe<Array<ErrorType>>;
  user?: Maybe<AuthUser>;
};

export type UserappUserappmodel = {
  __typename?: 'UserappUserappmodel';
  cpf: Scalars['String'];
  id: Scalars['Int'];
  owner: Scalars['Int'];
  profileImage: Scalars['String'];
};

export type CreateAuthUserMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  dateJoined: Scalars['String'];
  username: Scalars['String'];
}>;


export type CreateAuthUserMutation = { __typename?: 'Mutation', createAuthUser: { __typename: 'UserTypeModel', errors?: Array<{ __typename?: 'ErrorType', field: string, message: string }> | null } };

export type LoginAuthUserMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginAuthUserMutation = { __typename?: 'Mutation', LoginAuthUser: { __typename?: 'UserTypeModel', errors?: Array<{ __typename?: 'ErrorType', field: string, message: string }> | null, user?: { __typename?: 'AuthUser', email: string } | null } };

export type SinalTelegramQueryVariables = Exact<{ [key: string]: never; }>;


export type SinalTelegramQuery = { __typename?: 'Query', GetUserResolver: Array<{ __typename?: 'AuthUser', username: string, lastName: string, email: string, password: string }> };


export const CreateAuthUserDocument = gql`
    mutation CreateAuthUser($email: String!, $password: String!, $firstName: String!, $lastName: String!, $dateJoined: String!, $username: String!) {
  createAuthUser(
    data: {password: $password, lastName: $lastName, email: $email, username: $username, firstName: $firstName, dateJoined: $dateJoined, isSuperuser: false, isStaff: false, isActive: false}
  ) {
    __typename
    errors {
      field
      message
    }
  }
}
    `;
export type CreateAuthUserMutationFn = Apollo.MutationFunction<CreateAuthUserMutation, CreateAuthUserMutationVariables>;

/**
 * __useCreateAuthUserMutation__
 *
 * To run a mutation, you first call `useCreateAuthUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAuthUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAuthUserMutation, { data, loading, error }] = useCreateAuthUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      dateJoined: // value for 'dateJoined'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useCreateAuthUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateAuthUserMutation, CreateAuthUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAuthUserMutation, CreateAuthUserMutationVariables>(CreateAuthUserDocument, options);
      }
export type CreateAuthUserMutationHookResult = ReturnType<typeof useCreateAuthUserMutation>;
export type CreateAuthUserMutationResult = Apollo.MutationResult<CreateAuthUserMutation>;
export type CreateAuthUserMutationOptions = Apollo.BaseMutationOptions<CreateAuthUserMutation, CreateAuthUserMutationVariables>;
export const LoginAuthUserDocument = gql`
    mutation LoginAuthUser($email: String!, $password: String!) {
  LoginAuthUser(data: {email: $email, password: $password}) {
    errors {
      field
      message
    }
    user {
      email
    }
  }
}
    `;
export type LoginAuthUserMutationFn = Apollo.MutationFunction<LoginAuthUserMutation, LoginAuthUserMutationVariables>;

/**
 * __useLoginAuthUserMutation__
 *
 * To run a mutation, you first call `useLoginAuthUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginAuthUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginAuthUserMutation, { data, loading, error }] = useLoginAuthUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginAuthUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginAuthUserMutation, LoginAuthUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginAuthUserMutation, LoginAuthUserMutationVariables>(LoginAuthUserDocument, options);
      }
export type LoginAuthUserMutationHookResult = ReturnType<typeof useLoginAuthUserMutation>;
export type LoginAuthUserMutationResult = Apollo.MutationResult<LoginAuthUserMutation>;
export type LoginAuthUserMutationOptions = Apollo.BaseMutationOptions<LoginAuthUserMutation, LoginAuthUserMutationVariables>;
export const SinalTelegramDocument = gql`
    query SinalTelegram {
  GetUserResolver {
    username
    lastName
    email
    password
  }
}
    `;

/**
 * __useSinalTelegramQuery__
 *
 * To run a query within a React component, call `useSinalTelegramQuery` and pass it any options that fit your needs.
 * When your component renders, `useSinalTelegramQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSinalTelegramQuery({
 *   variables: {
 *   },
 * });
 */
export function useSinalTelegramQuery(baseOptions?: Apollo.QueryHookOptions<SinalTelegramQuery, SinalTelegramQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SinalTelegramQuery, SinalTelegramQueryVariables>(SinalTelegramDocument, options);
      }
export function useSinalTelegramLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SinalTelegramQuery, SinalTelegramQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SinalTelegramQuery, SinalTelegramQueryVariables>(SinalTelegramDocument, options);
        }
export type SinalTelegramQueryHookResult = ReturnType<typeof useSinalTelegramQuery>;
export type SinalTelegramLazyQueryHookResult = ReturnType<typeof useSinalTelegramLazyQuery>;
export type SinalTelegramQueryResult = Apollo.QueryResult<SinalTelegramQuery, SinalTelegramQueryVariables>;