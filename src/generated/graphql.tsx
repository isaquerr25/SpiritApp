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
  investAtual?: Maybe<Scalars['Float']>;
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

export type ErrorTypeContas = {
  __typename?: 'ErrorTypeContas';
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
  titulo: Scalars['String'];
  valor: Scalars['Float'];
};

export type GetAllContaUser = {
  __typename?: 'GetAllContaUser';
  contas?: Maybe<Array<ContasMt>>;
  error?: Maybe<Scalars['String']>;
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

export type InputFaturasSpirit = {
  contaId: Scalars['Float'];
  status: Scalars['String'];
  titulo: Scalars['String'];
  valor: Scalars['Float'];
};

export type InputLoginAuthUser = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  LoginAuthUser: UserTypeModel;
  createAuthUser: UserTypeModel;
  createFaturasByContasId: UserTypeFatura;
  deleteContasMt: ErrorTypeContas;
  deleteFaturasSpirit: FaturasSpirit;
  inputNewContaMt: GetConta;
  updateContasMt: Array<ErrorTypeContas>;
  updateFaturasSpirit: FaturasSpirit;
};


export type MutationLoginAuthUserArgs = {
  data: InputLoginAuthUser;
};


export type MutationCreateAuthUserArgs = {
  data: CreateAuthUser;
};


export type MutationCreateFaturasByContasIdArgs = {
  data: InputFaturasSpirit;
};


export type MutationDeleteContasMtArgs = {
  id: Scalars['Float'];
};


export type MutationDeleteFaturasSpiritArgs = {
  id: Scalars['Float'];
};


export type MutationInputNewContaMtArgs = {
  data: InputConta;
};


export type MutationUpdateContasMtArgs = {
  data: UpdateConta;
  id: Scalars['Float'];
};


export type MutationUpdateFaturasSpiritArgs = {
  data: UpdateFaturasSpirit;
  id: Scalars['Float'];
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
  GetContasMtAuth: GetAllContaUser;
  GetUserResolver: Array<AuthUser>;
  faturasByContasId: Array<FaturasSpirit>;
};


export type QueryFaturasByContasIdArgs = {
  contaId: Scalars['Float'];
};

export type UpdateConta = {
  afiliadoId?: InputMaybe<Scalars['Int']>;
  attributesMeta?: InputMaybe<Scalars['String']>;
  investAberturaInit?: InputMaybe<Scalars['Float']>;
  password?: InputMaybe<Scalars['String']>;
  serverMetaTrader?: InputMaybe<Scalars['String']>;
  serverVps?: InputMaybe<Scalars['String']>;
  typeRisc?: InputMaybe<Scalars['String']>;
  work?: InputMaybe<Scalars['String']>;
};

export type UpdateFaturasSpirit = {
  dataFechamento?: InputMaybe<Scalars['String']>;
  dataInicio?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  titulo?: InputMaybe<Scalars['String']>;
  valor?: InputMaybe<Scalars['Float']>;
};

export type UserTypeFatura = {
  __typename?: 'UserTypeFatura';
  errors?: Maybe<Array<ErrorType>>;
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

export type DeleteContasMtMutationVariables = Exact<{
  id: Scalars['Float'];
}>;


export type DeleteContasMtMutation = { __typename?: 'Mutation', deleteContasMt: { __typename?: 'ErrorTypeContas', message: string } };

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

export type UpdateContasMtMutationVariables = Exact<{
  id: Scalars['Float'];
  investAberturaInit?: InputMaybe<Scalars['Float']>;
  password?: InputMaybe<Scalars['String']>;
  serverMetaTrader?: InputMaybe<Scalars['String']>;
  attributesMeta?: InputMaybe<Scalars['String']>;
  work?: InputMaybe<Scalars['String']>;
}>;


export type UpdateContasMtMutation = { __typename?: 'Mutation', updateContasMt: Array<{ __typename?: 'ErrorTypeContas', field: string, message: string }> };

export type FaturasByContasIdQueryVariables = Exact<{
  contaId: Scalars['Float'];
}>;


export type FaturasByContasIdQuery = { __typename?: 'Query', faturasByContasId: Array<{ __typename?: 'FaturasSpirit', id: number, titulo: string, dataCriacao: string, status: string, dataInicio: string, dataFechamento: string, valor: number, contaId: number }> };

export type GetContasMtAuthQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContasMtAuthQuery = { __typename?: 'Query', GetContasMtAuth: { __typename?: 'GetAllContaUser', error?: string | null, contas?: Array<{ __typename?: 'ContasMt', id: number, conta: number, work: string, investAtual?: number | null, investAberturaInit: number, serverMetaTrader: string, attributesMeta: string, password: string }> | null } };


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
export const DeleteContasMtDocument = gql`
    mutation DeleteContasMt($id: Float!) {
  deleteContasMt(id: $id) {
    message
  }
}
    `;
export type DeleteContasMtMutationFn = Apollo.MutationFunction<DeleteContasMtMutation, DeleteContasMtMutationVariables>;

/**
 * __useDeleteContasMtMutation__
 *
 * To run a mutation, you first call `useDeleteContasMtMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteContasMtMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteContasMtMutation, { data, loading, error }] = useDeleteContasMtMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteContasMtMutation(baseOptions?: Apollo.MutationHookOptions<DeleteContasMtMutation, DeleteContasMtMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteContasMtMutation, DeleteContasMtMutationVariables>(DeleteContasMtDocument, options);
      }
export type DeleteContasMtMutationHookResult = ReturnType<typeof useDeleteContasMtMutation>;
export type DeleteContasMtMutationResult = Apollo.MutationResult<DeleteContasMtMutation>;
export type DeleteContasMtMutationOptions = Apollo.BaseMutationOptions<DeleteContasMtMutation, DeleteContasMtMutationVariables>;
export const InputNewContaMtDocument = gql`
    mutation InputNewContaMt($attributesMeta: String!, $afiliadoId: Int!, $conta: Int!, $investAberturaInit: Float!, $password: String!, $serverMetaTrader: String!) {
  inputNewContaMt(
    data: {conta: $conta, investAberturaInit: $investAberturaInit, password: $password, serverMetaTrader: $serverMetaTrader, attributesMeta: $attributesMeta, dataCriacao: "12/15/45", serverVps: "default", typeRisc: "baixo", work: "waitpay", userClientId: 4, afiliadoId: $afiliadoId}
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
export const UpdateContasMtDocument = gql`
    mutation UpdateContasMt($id: Float!, $investAberturaInit: Float, $password: String, $serverMetaTrader: String, $attributesMeta: String, $work: String) {
  updateContasMt(
    id: $id
    data: {investAberturaInit: $investAberturaInit, password: $password, serverMetaTrader: $serverMetaTrader, attributesMeta: $attributesMeta, work: $work}
  ) {
    field
    message
  }
}
    `;
export type UpdateContasMtMutationFn = Apollo.MutationFunction<UpdateContasMtMutation, UpdateContasMtMutationVariables>;

/**
 * __useUpdateContasMtMutation__
 *
 * To run a mutation, you first call `useUpdateContasMtMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateContasMtMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateContasMtMutation, { data, loading, error }] = useUpdateContasMtMutation({
 *   variables: {
 *      id: // value for 'id'
 *      investAberturaInit: // value for 'investAberturaInit'
 *      password: // value for 'password'
 *      serverMetaTrader: // value for 'serverMetaTrader'
 *      attributesMeta: // value for 'attributesMeta'
 *      work: // value for 'work'
 *   },
 * });
 */
export function useUpdateContasMtMutation(baseOptions?: Apollo.MutationHookOptions<UpdateContasMtMutation, UpdateContasMtMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateContasMtMutation, UpdateContasMtMutationVariables>(UpdateContasMtDocument, options);
      }
export type UpdateContasMtMutationHookResult = ReturnType<typeof useUpdateContasMtMutation>;
export type UpdateContasMtMutationResult = Apollo.MutationResult<UpdateContasMtMutation>;
export type UpdateContasMtMutationOptions = Apollo.BaseMutationOptions<UpdateContasMtMutation, UpdateContasMtMutationVariables>;
export const FaturasByContasIdDocument = gql`
    query FaturasByContasId($contaId: Float!) {
  faturasByContasId(contaId: $contaId) {
    id
    titulo
    dataCriacao
    status
    dataInicio
    dataFechamento
    valor
    contaId
  }
}
    `;

/**
 * __useFaturasByContasIdQuery__
 *
 * To run a query within a React component, call `useFaturasByContasIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFaturasByContasIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFaturasByContasIdQuery({
 *   variables: {
 *      contaId: // value for 'contaId'
 *   },
 * });
 */
export function useFaturasByContasIdQuery(baseOptions: Apollo.QueryHookOptions<FaturasByContasIdQuery, FaturasByContasIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FaturasByContasIdQuery, FaturasByContasIdQueryVariables>(FaturasByContasIdDocument, options);
      }
export function useFaturasByContasIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FaturasByContasIdQuery, FaturasByContasIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FaturasByContasIdQuery, FaturasByContasIdQueryVariables>(FaturasByContasIdDocument, options);
        }
export type FaturasByContasIdQueryHookResult = ReturnType<typeof useFaturasByContasIdQuery>;
export type FaturasByContasIdLazyQueryHookResult = ReturnType<typeof useFaturasByContasIdLazyQuery>;
export type FaturasByContasIdQueryResult = Apollo.QueryResult<FaturasByContasIdQuery, FaturasByContasIdQueryVariables>;
export const GetContasMtAuthDocument = gql`
    query GetContasMtAuth {
  GetContasMtAuth {
    contas {
      id
      conta
      work
      investAtual
      investAberturaInit
      serverMetaTrader
      attributesMeta
      password
    }
    error
  }
}
    `;

/**
 * __useGetContasMtAuthQuery__
 *
 * To run a query within a React component, call `useGetContasMtAuthQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContasMtAuthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContasMtAuthQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetContasMtAuthQuery(baseOptions?: Apollo.QueryHookOptions<GetContasMtAuthQuery, GetContasMtAuthQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetContasMtAuthQuery, GetContasMtAuthQueryVariables>(GetContasMtAuthDocument, options);
      }
export function useGetContasMtAuthLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetContasMtAuthQuery, GetContasMtAuthQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetContasMtAuthQuery, GetContasMtAuthQueryVariables>(GetContasMtAuthDocument, options);
        }
export type GetContasMtAuthQueryHookResult = ReturnType<typeof useGetContasMtAuthQuery>;
export type GetContasMtAuthLazyQueryHookResult = ReturnType<typeof useGetContasMtAuthLazyQuery>;
export type GetContasMtAuthQueryResult = Apollo.QueryResult<GetContasMtAuthQuery, GetContasMtAuthQueryVariables>;