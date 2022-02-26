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

export type AuthGroup = {
  __typename?: 'AuthGroup';
  authGroupPermissions: AuthGroupPermissions;
  authUserGroups: AuthUserGroups;
  id: Scalars['Float'];
  name: Scalars['String'];
};

export type AuthGroupPermissions = {
  __typename?: 'AuthGroupPermissions';
  group: AuthGroup;
  groupId: Scalars['Float'];
  id: Scalars['Float'];
  permission: AuthPermission;
  permissionId: Scalars['Float'];
};

export type AuthPermission = {
  __typename?: 'AuthPermission';
  authGroupPermissions: Scalars['String'];
  authUserUserPermissions: AuthUserUserPermissions;
  codename: Scalars['String'];
  contentType: DjangoContentType;
  contentTypeId: Scalars['Float'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type AuthUser = {
  __typename?: 'AuthUser';
  authUserGroups: AuthUserGroups;
  authUserUserPermissions: AuthUserUserPermissions;
  contasMts?: Maybe<ContasMt>;
  contasMts2?: Maybe<ContasMt>;
  dateJoined: Scalars['String'];
  email: Scalars['String'];
  extendUserUserextend: ExtendUserUserextend;
  firstName: Scalars['String'];
  id: Scalars['Int'];
  isActive: Scalars['Boolean'];
  isStaff: Scalars['Boolean'];
  isSuperuser: Scalars['Boolean'];
  lastLogin: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type AuthUserGroups = {
  __typename?: 'AuthUserGroups';
  group: AuthGroup;
  groupId: Scalars['Float'];
  id: Scalars['Int'];
  user: AuthUser;
  userId: Scalars['Float'];
};

export type AuthUserUserPermissions = {
  __typename?: 'AuthUserUserPermissions';
  id: Scalars['Int'];
  permission: AuthPermission;
  permissionId: Scalars['String'];
  user: AuthUser;
  userId: Scalars['Float'];
};

export type ContasMt = {
  __typename?: 'ContasMt';
  afiliado?: Maybe<AuthUser>;
  afiliadoId: Scalars['Int'];
  attributesMeta: Scalars['String'];
  conta: Scalars['Int'];
  dataAtualizacao: Scalars['String'];
  dataCriacao: Scalars['String'];
  dataValidade: Scalars['String'];
  faturasSpirits: FaturasSpirit;
  id: Scalars['Int'];
  investAberturaInit: Scalars['Float'];
  investAtual: Scalars['Float'];
  lucroAtual: Scalars['Float'];
  ordensCorrentMds: OrdensCorrentMd;
  password: Scalars['String'];
  serverMetaTrader: Scalars['String'];
  serverVps: Scalars['String'];
  typeRisc: Scalars['String'];
  userClient?: Maybe<AuthUser>;
  userClientId: Scalars['Int'];
  work: Scalars['String'];
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

export type DjangoContentType = {
  __typename?: 'DjangoContentType';
  appLabel: Scalars['String'];
  authPermissions: Scalars['String'];
  djangoAdminLogs: Scalars['String'];
  id: Scalars['Int'];
  model: Scalars['String'];
};

export type ErrorType = {
  __typename?: 'ErrorType';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type ExtendUserUserextend = {
  __typename?: 'ExtendUserUserextend';
  address: Scalars['String'];
  id: Scalars['Int'];
  phoneNumber: Scalars['String'];
  profileImage: Scalars['String'];
  user: Scalars['String'];
};

export type FaturasSpirit = {
  __typename?: 'FaturasSpirit';
  conta: Scalars['String'];
  contaId: Scalars['Float'];
  dataCriacao: Scalars['String'];
  dataFechamento: Scalars['String'];
  dataInicio: Scalars['String'];
  id: Scalars['Int'];
  status: Scalars['String'];
  titulo: Scalars['Float'];
  valor: Scalars['Float'];
};

export type GetConta = {
  __typename?: 'GetConta';
  error?: Maybe<Scalars['String']>;
};

export type InputConta = {
  afiliadoId: Scalars['Int'];
  attributesMeta: Scalars['String'];
  conta: Scalars['Int'];
  dataCriacao: Scalars['String'];
  investAberturaInit: Scalars['Float'];
  password: Scalars['String'];
  serverMetaTrader: Scalars['String'];
  serverVps: Scalars['String'];
  typeRisc: Scalars['String'];
  userClientId: Scalars['Int'];
  work: Scalars['String'];
};

export type InputLoginAuthUser = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  GetContasMtAuth: Array<ContasMt>;
  LoginAuthUser: UserTypeModel;
  createAuthUser: UserTypeModel;
  inputNewContaMt: GetConta;
};


export type MutationLoginAuthUserArgs = {
  data: InputLoginAuthUser;
};


export type MutationCreateAuthUserArgs = {
  data: CreateAuthUser;
};


export type MutationInputNewContaMtArgs = {
  data: InputConta;
};

export type OrdensCorrentMd = {
  __typename?: 'OrdensCorrentMd';
  abertura: Scalars['String'];
  conta: ContasMt;
  contaId: Scalars['String'];
  dataAtualizacao: Scalars['String'];
  dataCriacao: Scalars['String'];
  direcao: Scalars['String'];
  id: Scalars['Float'];
  lots: Scalars['String'];
  par: Scalars['String'];
  status: Scalars['String'];
  ticket: Scalars['String'];
  ticketReference: Scalars['String'];
  type: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  GetContasMt: Array<ContasMt>;
  GetUserResolver: Array<AuthUser>;
};

export type UserTypeModel = {
  __typename?: 'UserTypeModel';
  errors?: Maybe<Array<ErrorType>>;
  user?: Maybe<AuthUser>;
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

export type GetContasMtAuthMutationVariables = Exact<{ [key: string]: never; }>;


export type GetContasMtAuthMutation = { __typename?: 'Mutation', GetContasMtAuth: Array<{ __typename?: 'ContasMt', id: number, conta: number, work: string, investAtual: number }> };

export type InputNewContaMtMutationVariables = Exact<{
  attributesMeta: Scalars['String'];
  afiliadoId: Scalars['Int'];
  conta: Scalars['Int'];
  investAberturaInit: Scalars['Float'];
  password: Scalars['String'];
  serverMetaTrader: Scalars['String'];
}>;


export type InputNewContaMtMutation = { __typename?: 'Mutation', inputNewContaMt: { __typename?: 'GetConta', error?: string | null } };

export type LoginAuthUserMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginAuthUserMutation = { __typename?: 'Mutation', LoginAuthUser: { __typename?: 'UserTypeModel', errors?: Array<{ __typename?: 'ErrorType', field: string, message: string }> | null, user?: { __typename?: 'AuthUser', email: string } | null } };


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
export const GetContasMtAuthDocument = gql`
    mutation GetContasMtAuth {
  GetContasMtAuth {
    id
    conta
    work
    investAtual
  }
}
    `;
export type GetContasMtAuthMutationFn = Apollo.MutationFunction<GetContasMtAuthMutation, GetContasMtAuthMutationVariables>;

/**
 * __useGetContasMtAuthMutation__
 *
 * To run a mutation, you first call `useGetContasMtAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetContasMtAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getContasMtAuthMutation, { data, loading, error }] = useGetContasMtAuthMutation({
 *   variables: {
 *   },
 * });
 */
export function useGetContasMtAuthMutation(baseOptions?: Apollo.MutationHookOptions<GetContasMtAuthMutation, GetContasMtAuthMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetContasMtAuthMutation, GetContasMtAuthMutationVariables>(GetContasMtAuthDocument, options);
      }
export type GetContasMtAuthMutationHookResult = ReturnType<typeof useGetContasMtAuthMutation>;
export type GetContasMtAuthMutationResult = Apollo.MutationResult<GetContasMtAuthMutation>;
export type GetContasMtAuthMutationOptions = Apollo.BaseMutationOptions<GetContasMtAuthMutation, GetContasMtAuthMutationVariables>;
export const InputNewContaMtDocument = gql`
    mutation InputNewContaMt($attributesMeta: String!, $afiliadoId: Int!, $conta: Int!, $investAberturaInit: Float!, $password: String!, $serverMetaTrader: String!) {
  inputNewContaMt(
    data: {conta: $conta, investAberturaInit: $investAberturaInit, password: $password, serverMetaTrader: $serverMetaTrader, attributesMeta: $attributesMeta, dataCriacao: "12/15/45", serverVps: "default", typeRisc: "baixo", work: "notwork", userClientId: 4, afiliadoId: $afiliadoId}
  ) {
    error
  }
}
    `;
export type InputNewContaMtMutationFn = Apollo.MutationFunction<InputNewContaMtMutation, InputNewContaMtMutationVariables>;

/**
 * __useInputNewContaMtMutation__
 *
 * To run a mutation, you first call `useInputNewContaMtMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInputNewContaMtMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [inputNewContaMtMutation, { data, loading, error }] = useInputNewContaMtMutation({
 *   variables: {
 *      attributesMeta: // value for 'attributesMeta'
 *      afiliadoId: // value for 'afiliadoId'
 *      conta: // value for 'conta'
 *      investAberturaInit: // value for 'investAberturaInit'
 *      password: // value for 'password'
 *      serverMetaTrader: // value for 'serverMetaTrader'
 *   },
 * });
 */
export function useInputNewContaMtMutation(baseOptions?: Apollo.MutationHookOptions<InputNewContaMtMutation, InputNewContaMtMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InputNewContaMtMutation, InputNewContaMtMutationVariables>(InputNewContaMtDocument, options);
      }
export type InputNewContaMtMutationHookResult = ReturnType<typeof useInputNewContaMtMutation>;
export type InputNewContaMtMutationResult = Apollo.MutationResult<InputNewContaMtMutation>;
export type InputNewContaMtMutationOptions = Apollo.BaseMutationOptions<InputNewContaMtMutation, InputNewContaMtMutationVariables>;
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