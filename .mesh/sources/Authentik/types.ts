// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace AuthentikTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: { input: string; output: string; }
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: { input: boolean; output: boolean; }
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: { input: number; output: number; }
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: { input: number; output: number; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** Integers that will have a value greater than 0. */
  PositiveInt: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: Date | string; output: Date | string; }
  /** The human-readable name of this device. */
  QueryAuthenticatorsAdminDuoListOneOf_0ResultsItemsName: { input: any; output: any; }
  /** The human-readable name of this device. */
  QueryAuthenticatorsAdminSmsListOneOf_0ResultsItemsName: { input: any; output: any; }
  /** The human-readable name of this device. */
  QueryAuthenticatorsAdminStaticListOneOf_0ResultsItemsName: { input: any; output: any; }
  QueryAuthenticatorsAdminStaticListOneOf_0ResultsItemsTokenSetItemsToken: { input: any; output: any; }
  /** The human-readable name of this device. */
  QueryAuthenticatorsAdminTotpListOneOf_0ResultsItemsName: { input: any; output: any; }
  QueryAuthenticatorsAdminWebauthnListOneOf_0ResultsItemsName: { input: any; output: any; }
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  UUID: { input: string; output: string; }
  QueryCoreApplicationsListOneOf_0ResultsItemsSlug: { input: string; output: string; }
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: { input: URL | string; output: URL | string; }
  QueryCoreGroupsListOneOf_0ResultsItemsName: { input: any; output: any; }
  QueryCoreGroupsListOneOf_0ResultsItemsUsersObjItemsUsername: { input: string; output: string; }
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: { input: string; output: string; }
  QueryCoreGroupsListOneOf_0ResultsItemsRolesObjItemsName: { input: any; output: any; }
  QueryCoreTokensListOneOf_0ResultsItemsIdentifier: { input: string; output: string; }
  QueryCoreTokensListOneOf_0ResultsItemsUserObjUsername: { input: any; output: any; }
  QueryCoreTokensListOneOf_0ResultsItemsUserObjGroupsObjItemsName: { input: any; output: any; }
  /** Represents empty values */
  Void: { input: void; output: void; }
  QueryCoreUsersMeRetrieveOneOf_0UserUsername: { input: string; output: string; }
  QueryFlowsBindingsListOneOf_0ResultsItemsStageObjFlowSetItemsSlug: { input: string; output: string; }
  QueryFlowsInstancesListOneOf_0ResultsItemsSlug: { input: string; output: string; }
  /** The `File` scalar type represents a file upload. */
  File: { input: File; output: File; }
  QueryOauth2AccessTokensListOneOf_0ResultsItemsProviderClientId: { input: any; output: any; }
  QueryOauth2AccessTokensListOneOf_0ResultsItemsProviderClientSecret: { input: any; output: any; }
  QueryOutpostsProxyListOneOf_0ResultsItemsClientId: { input: any; output: any; }
  QueryOutpostsProxyListOneOf_0ResultsItemsClientSecret: { input: any; output: any; }
  /** Integers that will have a value of 0 or more. */
  NonNegativeInt: { input: number; output: number; }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: { input: bigint; output: bigint; }
  QueryRbacPermissionsListOneOf_0ResultsItemsName: { input: any; output: any; }
  QueryRbacPermissionsListOneOf_0ResultsItemsCodename: { input: any; output: any; }
  QueryRbacPermissionsAssignedByUsersListOneOf_0ResultsItemsUsername: { input: string; output: string; }
  QuerySourcesAllListOneOf_0ResultsItemsSlug: { input: string; output: string; }
  QuerySourcesLdapListOneOf_0ResultsItemsSlug: { input: string; output: string; }
  QuerySourcesOauthListOneOf_0ResultsItemsSlug: { input: string; output: string; }
  /** URL used to request the initial token. This URL is only required for OAuth 1. */
  QuerySourcesOauthListOneOf_0ResultsItemsRequestTokenUrl: { input: any; output: any; }
  /** URL the user is redirect to to conest the flow. */
  QuerySourcesOauthListOneOf_0ResultsItemsAuthorizationUrl: { input: any; output: any; }
  /** URL used by authentik to retrieve tokens. */
  QuerySourcesOauthListOneOf_0ResultsItemsAccessTokenUrl: { input: any; output: any; }
  /** URL used by authentik to get user information. */
  QuerySourcesOauthListOneOf_0ResultsItemsProfileUrl: { input: any; output: any; }
  QuerySourcesPlexListOneOf_0ResultsItemsSlug: { input: string; output: string; }
  QuerySourcesSamlListOneOf_0ResultsItemsSlug: { input: string; output: string; }
  QuerySourcesScimListOneOf_0ResultsItemsSlug: { input: string; output: string; }
  QuerySourcesUserConnectionsOauthListOneOf_0ResultsItemsIdentifier: { input: any; output: any; }
  QueryStagesInvitationInvitationsListOneOf_0ResultsItemsName: { input: string; output: string; }
  /** A string that cannot be passed as an empty value */
  NonEmptyString: { input: string; output: string; }
  /** The human-readable name of this device. */
  MutationInputAuthenticatorsAdminDuoCreateInputName: { input: any; output: any; }
  /** The human-readable name of this device. */
  MutationInputAuthenticatorsAdminDuoPartialUpdateInputName: { input: any; output: any; }
  /** The human-readable name of this device. */
  MutationInputAuthenticatorsAdminSmsCreateInputName: { input: any; output: any; }
  /** The human-readable name of this device. */
  MutationInputAuthenticatorsAdminSmsPartialUpdateInputName: { input: any; output: any; }
  /** The human-readable name of this device. */
  MutationInputAuthenticatorsAdminStaticCreateInputName: { input: any; output: any; }
  /** The human-readable name of this device. */
  MutationInputAuthenticatorsAdminStaticPartialUpdateInputName: { input: any; output: any; }
  /** The human-readable name of this device. */
  MutationInputAuthenticatorsAdminTotpCreateInputName: { input: any; output: any; }
  /** The human-readable name of this device. */
  MutationInputAuthenticatorsAdminTotpPartialUpdateInputName: { input: any; output: any; }
  MutationInputAuthenticatorsAdminWebauthnCreateInputName: { input: any; output: any; }
  MutationInputAuthenticatorsAdminWebauthnPartialUpdateInputName: { input: any; output: any; }
  MutationInputCoreApplicationsCreateInputSlug: { input: string; output: string; }
  MutationInputCoreApplicationsPartialUpdateInputSlug: { input: string; output: string; }
  MutationInputCoreGroupsCreateInputName: { input: any; output: any; }
  MutationInputCoreGroupsPartialUpdateInputName: { input: any; output: any; }
  MutationInputCoreTokensCreateInputIdentifier: { input: string; output: string; }
  MutationInputCoreTokensPartialUpdateInputIdentifier: { input: string; output: string; }
  MutationInputCoreTransactionalApplicationsUpdateInputProviderOneOf_1ClientId: { input: any; output: any; }
  MutationInputCoreTransactionalApplicationsUpdateInputProviderOneOf_1ClientSecret: { input: any; output: any; }
  MutationInputCoreUsersCreateInputUsername: { input: any; output: any; }
  MutationInputCoreUsersPartialUpdateInputUsername: { input: any; output: any; }
  MutationInputFlowsInstancesCreateInputSlug: { input: string; output: string; }
  MutationInputFlowsInstancesPartialUpdateInputSlug: { input: string; output: string; }
  MutationInputProvidersOauth2PartialUpdateInputClientId: { input: any; output: any; }
  MutationInputProvidersOauth2PartialUpdateInputClientSecret: { input: any; output: any; }
  MutationInputRbacRolesCreateInputName: { input: any; output: any; }
  MutationInputRbacRolesPartialUpdateInputName: { input: any; output: any; }
  MutationInputSourcesLdapCreateInputSlug: { input: string; output: string; }
  MutationInputSourcesLdapPartialUpdateInputSlug: { input: string; output: string; }
  MutationInputSourcesOauthCreateInputSlug: { input: string; output: string; }
  /** URL used to request the initial token. This URL is only required for OAuth 1. */
  MutationInputSourcesOauthCreateInputRequestTokenUrl: { input: any; output: any; }
  /** URL the user is redirect to to conest the flow. */
  MutationInputSourcesOauthCreateInputAuthorizationUrl: { input: any; output: any; }
  /** URL used by authentik to retrieve tokens. */
  MutationInputSourcesOauthCreateInputAccessTokenUrl: { input: any; output: any; }
  /** URL used by authentik to get user information. */
  MutationInputSourcesOauthCreateInputProfileUrl: { input: any; output: any; }
  MutationInputSourcesOauthPartialUpdateInputSlug: { input: string; output: string; }
  /** URL used to request the initial token. This URL is only required for OAuth 1. */
  MutationInputSourcesOauthPartialUpdateInputRequestTokenUrl: { input: any; output: any; }
  /** URL the user is redirect to to conest the flow. */
  MutationInputSourcesOauthPartialUpdateInputAuthorizationUrl: { input: any; output: any; }
  /** URL used by authentik to retrieve tokens. */
  MutationInputSourcesOauthPartialUpdateInputAccessTokenUrl: { input: any; output: any; }
  /** URL used by authentik to get user information. */
  MutationInputSourcesOauthPartialUpdateInputProfileUrl: { input: any; output: any; }
  MutationInputSourcesPlexCreateInputSlug: { input: string; output: string; }
  MutationInputSourcesPlexPartialUpdateInputSlug: { input: string; output: string; }
  MutationInputSourcesSamlCreateInputSlug: { input: string; output: string; }
  MutationInputSourcesSamlPartialUpdateInputSlug: { input: string; output: string; }
  MutationInputSourcesScimCreateInputSlug: { input: string; output: string; }
  MutationInputSourcesScimPartialUpdateInputSlug: { input: string; output: string; }
  MutationInputSourcesUserConnectionsOauthCreateInputIdentifier: { input: any; output: any; }
  MutationInputSourcesUserConnectionsOauthPartialUpdateInputIdentifier: { input: any; output: any; }
  MutationInputStagesAuthenticatorDuoCreateInputFlowSetItemsSlug: { input: string; output: string; }
  MutationInputStagesInvitationInvitationsCreateInputName: { input: string; output: string; }
  MutationInputStagesInvitationInvitationsPartialUpdateInputName: { input: string; output: string; }
  ObjMap: { input: any; output: any; }
};

export type Query = {
  /** Custom list method that checks Policy based access instead of guardian */
  applications?: Maybe<CoreApplicationsListResponse>;
  /** Application Viewset */
  application?: Maybe<CoreApplicationsRetrieveResponse>;
  /** Check access to a single application by slug */
  coreApplicationsCheckAccessRetrieve?: Maybe<CoreApplicationsCheckAccessRetrieveResponse>;
  /** Metrics for application logins */
  applicationMetrics?: Maybe<Array<Maybe<CoreApplicationsMetricsListResponse>>>;
  /** Get a list of all objects that use this object */
  coreApplicationsUsedByList?: Maybe<Array<Maybe<CoreApplicationsUsedByListResponse>>>;
  /** FlowStageBinding Viewset */
  flowsBindingsList?: Maybe<FlowsBindingsListResponse>;
  /** FlowStageBinding Viewset */
  flowsBindingsRetrieve?: Maybe<FlowsBindingsRetrieveResponse>;
  /** Get a list of all objects that use this object */
  flowsBindingsUsedByList?: Maybe<Array<Maybe<FlowsBindingsUsedByListResponse>>>;
  /** Get the next pending challenge from the currently active flow. */
  flowsExecutorGet?: Maybe<FlowsExecutorGetResponse>;
  /** Get current flow state and record it */
  flowsInspectorGet?: Maybe<FlowsInspectorGetResponse>;
  /** Flow Viewset */
  flowsInstancesList?: Maybe<FlowsInstancesListResponse>;
  /** Flow Viewset */
  flowsInstancesRetrieve?: Maybe<FlowsInstancesRetrieveResponse>;
  /** Return diagram for flow with slug `slug`, in the format used by flowchart.js */
  flowsInstancesDiagramRetrieve?: Maybe<FlowsInstancesDiagramRetrieveResponse>;
  /** Execute flow for current user */
  flowsInstancesExecuteRetrieve?: Maybe<FlowsInstancesExecuteRetrieveResponse>;
  /** Export flow to .yaml file */
  flowsInstancesExportRetrieve?: Maybe<FlowsInstancesExportRetrieveResponse>;
  /** Get a list of all objects that use this object */
  flowsInstancesUsedByList?: Maybe<Array<Maybe<FlowsInstancesUsedByListResponse>>>;
  /** Info about cached flows */
  flowsInstancesCacheInfoRetrieve?: Maybe<FlowsInstancesCacheInfoRetrieveResponse>;
  /** Provider Viewset */
  providers?: Maybe<ProvidersAllListResponse>;
  /** Provider Viewset */
  provider?: Maybe<ProvidersAllRetrieveResponse>;
  /** Get a list of all objects that use this object */
  providersAllUsedByList?: Maybe<Array<Maybe<ProvidersAllUsedByListResponse>>>;
  /** Get all creatable provider types */
  providersAllTypesList?: Maybe<Array<Maybe<ProvidersAllTypesListResponse>>>;
};


export type QueryapplicationsArgs = {
  forUser?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Scalars['String']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaLaunchUrl?: InputMaybe<Scalars['String']['input']>;
  metaPublisher?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  superuserFullList?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryapplicationArgs = {
  slug: Scalars['String']['input'];
};


export type QuerycoreApplicationsCheckAccessRetrieveArgs = {
  slug: Scalars['String']['input'];
  forUser?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryapplicationMetricsArgs = {
  slug: Scalars['String']['input'];
};


export type QuerycoreApplicationsUsedByListArgs = {
  slug: Scalars['String']['input'];
};


export type QueryflowsBindingsListArgs = {
  evaluateOnPlan?: InputMaybe<Scalars['Boolean']['input']>;
  fsbUuid?: InputMaybe<Scalars['UUID']['input']>;
  invalidResponseAction?: InputMaybe<QueryInputFlowsBindingsListInvalidResponseAction>;
  order?: InputMaybe<Scalars['Int']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  pbmUuid?: InputMaybe<Scalars['UUID']['input']>;
  policies?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  policyEngineMode?: InputMaybe<QueryInputFlowsBindingsListPolicyEngineMode>;
  reEvaluatePolicies?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stage?: InputMaybe<Scalars['UUID']['input']>;
  target?: InputMaybe<Scalars['UUID']['input']>;
};


export type QueryflowsBindingsRetrieveArgs = {
  fsbUuid: Scalars['UUID']['input'];
};


export type QueryflowsBindingsUsedByListArgs = {
  fsbUuid: Scalars['UUID']['input'];
};


export type QueryflowsExecutorGetArgs = {
  flowSlug: Scalars['String']['input'];
  query: Scalars['String']['input'];
};


export type QueryflowsInspectorGetArgs = {
  flowSlug: Scalars['String']['input'];
};


export type QueryflowsInstancesListArgs = {
  deniedAction?: InputMaybe<QueryInputFlowsInstancesListDeniedAction>;
  designation?: InputMaybe<QueryInputFlowsInstancesListDesignation>;
  flowUuid?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryflowsInstancesRetrieveArgs = {
  slug: Scalars['String']['input'];
};


export type QueryflowsInstancesDiagramRetrieveArgs = {
  slug: Scalars['String']['input'];
};


export type QueryflowsInstancesExecuteRetrieveArgs = {
  slug: Scalars['String']['input'];
};


export type QueryflowsInstancesExportRetrieveArgs = {
  slug: Scalars['String']['input'];
};


export type QueryflowsInstancesUsedByListArgs = {
  slug: Scalars['String']['input'];
};


export type QueryprovidersArgs = {
  applicationIsnull?: InputMaybe<Scalars['Boolean']['input']>;
  backchannelOnly?: InputMaybe<Scalars['Boolean']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryproviderArgs = {
  id: Scalars['Int']['input'];
};


export type QueryprovidersAllUsedByListArgs = {
  id: Scalars['Int']['input'];
};

export type AdminAppsListResponse = App | ValidationError | GenericError;

/** Serialize Application info */
export type App = {
  name: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

/** Validation Error */
export type ValidationError = {
  nonFieldErrors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  code?: Maybe<Scalars['String']['output']>;
  additionalProperties?: Maybe<Scalars['JSON']['output']>;
};

/** Generic API Error */
export type GenericError = {
  detail: Scalars['String']['output'];
  code?: Maybe<Scalars['String']['output']>;
};

export type AdminMetricsRetrieveResponse = LoginMetrics | ValidationError | GenericError;

/** Login Metrics per 1h */
export type LoginMetrics = {
  logins: Array<Maybe<Coordinate>>;
  loginsFailed: Array<Maybe<Coordinate>>;
  authorizations: Array<Maybe<Coordinate>>;
};

/** Coordinates for diagrams */
export type Coordinate = {
  xCord: Scalars['Int']['output'];
  yCord: Scalars['Int']['output'];
};

export type AdminModelsListResponse = App | ValidationError | GenericError;

export type AdminSettingsRetrieveResponse = Settings | ValidationError | GenericError;

/** Settings Serializer */
export type Settings = {
  /** Configure how authentik should show avatars for users. */
  avatars?: Maybe<Scalars['String']['output']>;
  /** Enable the ability for users to change their name. */
  defaultUserChangeName?: Maybe<Scalars['Boolean']['output']>;
  /** Enable the ability for users to change their email address. */
  defaultUserChangeEmail?: Maybe<Scalars['Boolean']['output']>;
  /** Enable the ability for users to change their username. */
  defaultUserChangeUsername?: Maybe<Scalars['Boolean']['output']>;
  /** Events will be deleted after this duration.(Format: weeks=3;days=2;hours=3,seconds=2). */
  eventRetention?: Maybe<Scalars['String']['output']>;
  /** The option configures the footer links on the flow executor pages. */
  footerLinks?: Maybe<Scalars['JSON']['output']>;
  /** When enabled, all the events caused by a user will be deleted upon the user's deletion. */
  gdprCompliance?: Maybe<Scalars['Boolean']['output']>;
  /** Globally enable/disable impersonation. */
  impersonation?: Maybe<Scalars['Boolean']['output']>;
  /** Default token duration */
  defaultTokenDuration?: Maybe<Scalars['String']['output']>;
  /** Default token length */
  defaultTokenLength?: Maybe<Scalars['PositiveInt']['output']>;
};

export type AdminSystemRetrieveResponse = SystemInfo | ValidationError | GenericError;

/** Get system information. */
export type SystemInfo = {
  /** Get HTTP Request headers */
  httpHeaders: Scalars['JSON']['output'];
  /** Get HTTP host */
  httpHost: Scalars['String']['output'];
  /** Get HTTP Secure flag */
  httpIsSecure: Scalars['Boolean']['output'];
  runtime: QueryAdminSystemRetrieveOneOf_0Runtime;
  /** Currently active brand */
  brand: Scalars['String']['output'];
  /** Current server time */
  serverTime: Scalars['DateTime']['output'];
  /** Whether the embedded outpost is disabled */
  embeddedOutpostDisabled: Scalars['Boolean']['output'];
  /** Get the FQDN configured on the embedded outpost */
  embeddedOutpostHost: Scalars['String']['output'];
};

/** Get versions */
export type QueryAdminSystemRetrieveOneOf_0Runtime = {
  pythonVersion: Scalars['String']['output'];
  gunicornVersion: Scalars['String']['output'];
  environment: Scalars['String']['output'];
  architecture: Scalars['String']['output'];
  platform: Scalars['String']['output'];
  uname: Scalars['String']['output'];
};

export type AdminVersionRetrieveResponse = Version | ValidationError | GenericError;

/** Get running and latest version. */
export type Version = {
  /** Get current version */
  versionCurrent: Scalars['String']['output'];
  /** Get latest version from cache */
  versionLatest: Scalars['String']['output'];
  /** Check if latest version is valid */
  versionLatestValid: Scalars['Boolean']['output'];
  /** Get build hash, if version is not latest or released */
  buildHash: Scalars['String']['output'];
  /** Check if we're running the latest version */
  outdated: Scalars['Boolean']['output'];
};

export type AdminWorkersRetrieveResponse = Workers | ValidationError | GenericError;

export type Workers = {
  count: Scalars['Int']['output'];
};

export type AuthenticatorsAdminAllListResponse = Device | ValidationError | GenericError;

/** Serializer for Duo authenticator devices */
export type Device = {
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  pk: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** Get type of device */
  type: Scalars['String']['output'];
  confirmed: Scalars['Boolean']['output'];
};

export type AuthenticatorsAdminDuoListResponse = PaginatedDuoDeviceList | ValidationError | GenericError;

export type PaginatedDuoDeviceList = {
  pagination: Pagination;
  results: Array<Maybe<DuoDevice>>;
};

export type Pagination = {
  next: Scalars['Float']['output'];
  previous: Scalars['Float']['output'];
  count: Scalars['Float']['output'];
  current: Scalars['Float']['output'];
  totalPages: Scalars['Float']['output'];
  startIndex: Scalars['Float']['output'];
  endIndex: Scalars['Float']['output'];
};

/** Serializer for Duo authenticator devices */
export type DuoDevice = {
  pk: Scalars['Int']['output'];
  /** The human-readable name of this device. */
  name: Scalars['QueryAuthenticatorsAdminDuoListOneOf_0ResultsItemsName']['output'];
};

export type AuthenticatorsAdminDuoRetrieveResponse = DuoDevice | ValidationError | GenericError;

export type AuthenticatorsAdminSmsListResponse = PaginatedSmsDeviceList | ValidationError | GenericError;

export type PaginatedSmsDeviceList = {
  pagination: Pagination;
  results: Array<Maybe<SmsDevice>>;
};

/** Serializer for sms authenticator devices */
export type SmsDevice = {
  /** The human-readable name of this device. */
  name: Scalars['QueryAuthenticatorsAdminSmsListOneOf_0ResultsItemsName']['output'];
  pk: Scalars['Int']['output'];
  phoneNumber: Scalars['String']['output'];
};

export type AuthenticatorsAdminSmsRetrieveResponse = SmsDevice | ValidationError | GenericError;

export type AuthenticatorsAdminStaticListResponse = PaginatedStaticDeviceList | ValidationError | GenericError;

export type PaginatedStaticDeviceList = {
  pagination: Pagination;
  results: Array<Maybe<StaticDevice>>;
};

/** Serializer for static authenticator devices */
export type StaticDevice = {
  /** The human-readable name of this device. */
  name: Scalars['QueryAuthenticatorsAdminStaticListOneOf_0ResultsItemsName']['output'];
  tokenSet: Array<Maybe<StaticDeviceToken>>;
  pk: Scalars['Int']['output'];
};

/** Serializer for static device's tokens */
export type StaticDeviceToken = {
  token: Scalars['QueryAuthenticatorsAdminStaticListOneOf_0ResultsItemsTokenSetItemsToken']['output'];
};

export type AuthenticatorsAdminStaticRetrieveResponse = StaticDevice | ValidationError | GenericError;

export type AuthenticatorsAdminTotpListResponse = PaginatedTotpDeviceList | ValidationError | GenericError;

export type PaginatedTotpDeviceList = {
  pagination: Pagination;
  results: Array<Maybe<TotpDevice>>;
};

/** Serializer for totp authenticator devices */
export type TotpDevice = {
  /** The human-readable name of this device. */
  name: Scalars['QueryAuthenticatorsAdminTotpListOneOf_0ResultsItemsName']['output'];
  pk: Scalars['Int']['output'];
};

export type AuthenticatorsAdminTotpRetrieveResponse = TotpDevice | ValidationError | GenericError;

export type AuthenticatorsAdminWebauthnListResponse = PaginatedWebAuthnDeviceList | ValidationError | GenericError;

export type PaginatedWebAuthnDeviceList = {
  pagination: Pagination;
  results: Array<Maybe<WebAuthnDevice>>;
};

/** Serializer for WebAuthn authenticator devices */
export type WebAuthnDevice = {
  pk: Scalars['Int']['output'];
  name: Scalars['QueryAuthenticatorsAdminWebauthnListOneOf_0ResultsItemsName']['output'];
  createdOn: Scalars['DateTime']['output'];
  deviceType: WebAuthnDeviceType;
  aaguid: Scalars['String']['output'];
};

/** WebAuthnDeviceType Serializer */
export type WebAuthnDeviceType = {
  aaguid: Scalars['UUID']['output'];
  description: Scalars['String']['output'];
};

export type AuthenticatorsAdminWebauthnRetrieveResponse = WebAuthnDevice | ValidationError | GenericError;

export type AuthenticatorsAllListResponse = Device | ValidationError | GenericError;

export type AuthenticatorsDuoListResponse = PaginatedDuoDeviceList | ValidationError | GenericError;

export type AuthenticatorsDuoRetrieveResponse = DuoDevice | ValidationError | GenericError;

export type AuthenticatorsDuoUsedByListResponse = UsedBy | ValidationError | GenericError;

/** A list of all objects referencing the queried object */
export type UsedBy = {
  app: Scalars['String']['output'];
  modelName: Scalars['String']['output'];
  pk: Scalars['String']['output'];
  name: Scalars['String']['output'];
  action: UsedByActionEnum;
};

export type UsedByActionEnum =
  | 'CASCADE'
  | 'CASCADE_MANY'
  | 'SET_NULL'
  | 'SET_DEFAULT';

export type AuthenticatorsSmsListResponse = PaginatedSmsDeviceList | ValidationError | GenericError;

export type AuthenticatorsSmsRetrieveResponse = SmsDevice | ValidationError | GenericError;

export type AuthenticatorsSmsUsedByListResponse = UsedBy | ValidationError | GenericError;

export type AuthenticatorsStaticListResponse = PaginatedStaticDeviceList | ValidationError | GenericError;

export type AuthenticatorsStaticRetrieveResponse = StaticDevice | ValidationError | GenericError;

export type AuthenticatorsStaticUsedByListResponse = UsedBy | ValidationError | GenericError;

export type AuthenticatorsTotpListResponse = PaginatedTotpDeviceList | ValidationError | GenericError;

export type AuthenticatorsTotpRetrieveResponse = TotpDevice | ValidationError | GenericError;

export type AuthenticatorsTotpUsedByListResponse = UsedBy | ValidationError | GenericError;

export type AuthenticatorsWebauthnListResponse = PaginatedWebAuthnDeviceList | ValidationError | GenericError;

export type AuthenticatorsWebauthnRetrieveResponse = WebAuthnDevice | ValidationError | GenericError;

export type AuthenticatorsWebauthnUsedByListResponse = UsedBy | ValidationError | GenericError;

export type CoreApplicationsListResponse = PaginatedApplicationList | ValidationError | GenericError;

export type PaginatedApplicationList = {
  pagination: Pagination;
  results: Array<Maybe<Application>>;
};

/** Application Serializer */
export type Application = {
  pk: Scalars['UUID']['output'];
  /** Application's display Name. */
  name: Scalars['String']['output'];
  slug: Scalars['QueryCoreApplicationsListOneOf_0ResultsItemsSlug']['output'];
  provider?: Maybe<Scalars['Int']['output']>;
  providerObj: Provider;
  backchannelProviders?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  backchannelProvidersObj: Array<Maybe<Provider>>;
  /** Allow formatting of launch URL */
  launchUrl?: Maybe<Scalars['String']['output']>;
  /** Open launch URL in a new browser tab or window. */
  openInNewTab?: Maybe<Scalars['Boolean']['output']>;
  metaLaunchUrl?: Maybe<Scalars['URL']['output']>;
  /**
   * Get the URL to the App Icon image. If the name is /static or starts with http
   * it is returned as-is
   */
  metaIcon?: Maybe<Scalars['String']['output']>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaPublisher?: Maybe<Scalars['String']['output']>;
  policyEngineMode?: Maybe<PolicyEngineMode>;
  groupSlug?: Maybe<Scalars['String']['output']>;
};

/** Provider Serializer */
export type Provider = {
  pk: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** Flow used for authentication when the associated application is accessed by an un-authenticated user. */
  authenticationFlow?: Maybe<Scalars['UUID']['output']>;
  /** Flow used when authorizing this provider. */
  authorizationFlow: Scalars['UUID']['output'];
  propertyMappings?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Internal application name, used in URLs. */
  assignedApplicationSlug: Scalars['String']['output'];
  /** Application's display Name. */
  assignedApplicationName: Scalars['String']['output'];
  /** Internal application name, used in URLs. */
  assignedBackchannelApplicationSlug: Scalars['String']['output'];
  /** Application's display Name. */
  assignedBackchannelApplicationName: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  additionalProperties?: Maybe<Scalars['JSON']['output']>;
};

export type PolicyEngineMode =
  | 'ALL'
  | 'ANY';

export type CoreApplicationsRetrieveResponse = Application | ValidationError | GenericError;

export type CoreApplicationsCheckAccessRetrieveResponse = PolicyTestResult | ValidationError | GenericError;

/** result of a policy test */
export type PolicyTestResult = {
  passing: Scalars['Boolean']['output'];
  messages: Array<Maybe<Scalars['String']['output']>>;
  logMessages: Array<Maybe<LogEvent>>;
};

/** Single log message with all context logged. */
export type LogEvent = {
  timestamp: Scalars['DateTime']['output'];
  logLevel: LogLevelEnum;
  logger: Scalars['String']['output'];
  event: Scalars['String']['output'];
  attributes: Scalars['JSON']['output'];
};

export type LogLevelEnum =
  | 'CRITICAL'
  | 'EXCEPTION'
  | 'ERROR'
  | 'WARN'
  | 'WARNING'
  | 'INFO'
  | 'DEBUG'
  | 'NOTSET';

export type CoreApplicationsMetricsListResponse = Coordinate | ValidationError | GenericError;

export type CoreApplicationsUsedByListResponse = UsedBy | ValidationError | GenericError;

export type CoreAuthenticatedSessionsListResponse = PaginatedAuthenticatedSessionList | ValidationError | GenericError;

export type PaginatedAuthenticatedSessionList = {
  pagination: Pagination;
  results: Array<Maybe<AuthenticatedSession>>;
};

/** AuthenticatedSession Serializer */
export type AuthenticatedSession = {
  uuid?: Maybe<Scalars['UUID']['output']>;
  /** Check if session is currently active session */
  current: Scalars['Boolean']['output'];
  userAgent: QueryCoreAuthenticatedSessionsListOneOf_0ResultsItemsUserAgent;
  geoIp?: Maybe<QueryCoreAuthenticatedSessionsListOneOf_0ResultsItemsGeoIp>;
  asn?: Maybe<QueryCoreAuthenticatedSessionsListOneOf_0ResultsItemsAsn>;
  user: Scalars['Int']['output'];
  lastIp: Scalars['String']['output'];
  lastUserAgent?: Maybe<Scalars['String']['output']>;
  lastUsed: Scalars['DateTime']['output'];
  expires?: Maybe<Scalars['DateTime']['output']>;
};

/** Get parsed user agent */
export type QueryCoreAuthenticatedSessionsListOneOf_0ResultsItemsUserAgent = {
  device: QueryCoreAuthenticatedSessionsListOneOf_0ResultsItemsUserAgentDevice;
  os: QueryCoreAuthenticatedSessionsListOneOf_0ResultsItemsUserAgentOs;
  userAgent: QueryCoreAuthenticatedSessionsListOneOf_0ResultsItemsUserAgentUserAgent;
  string: Scalars['String']['output'];
};

/** User agent device */
export type QueryCoreAuthenticatedSessionsListOneOf_0ResultsItemsUserAgentDevice = {
  brand: Scalars['String']['output'];
  family: Scalars['String']['output'];
  model: Scalars['String']['output'];
};

/** User agent os */
export type QueryCoreAuthenticatedSessionsListOneOf_0ResultsItemsUserAgentOs = {
  family: Scalars['String']['output'];
  major: Scalars['String']['output'];
  minor: Scalars['String']['output'];
  patch: Scalars['String']['output'];
  patchMinor: Scalars['String']['output'];
};

/** User agent browser */
export type QueryCoreAuthenticatedSessionsListOneOf_0ResultsItemsUserAgentUserAgent = {
  family: Scalars['String']['output'];
  major: Scalars['String']['output'];
  minor: Scalars['String']['output'];
  patch: Scalars['String']['output'];
};

/** Get GeoIP Data */
export type QueryCoreAuthenticatedSessionsListOneOf_0ResultsItemsGeoIp = {
  continent: Scalars['String']['output'];
  country: Scalars['String']['output'];
  lat: Scalars['Float']['output'];
  long: Scalars['Float']['output'];
  city: Scalars['String']['output'];
};

/** Get ASN Data */
export type QueryCoreAuthenticatedSessionsListOneOf_0ResultsItemsAsn = {
  asn: Scalars['Int']['output'];
  asOrg?: Maybe<Scalars['String']['output']>;
  network?: Maybe<Scalars['String']['output']>;
};

export type CoreAuthenticatedSessionsRetrieveResponse = AuthenticatedSession | ValidationError | GenericError;

export type CoreAuthenticatedSessionsUsedByListResponse = UsedBy | ValidationError | GenericError;

export type CoreBrandsListResponse = PaginatedBrandList | ValidationError | GenericError;

export type PaginatedBrandList = {
  pagination: Pagination;
  results: Array<Maybe<Brand>>;
};

/** Brand Serializer */
export type Brand = {
  brandUuid: Scalars['UUID']['output'];
  /** Domain that activates this brand. Can be a superset, i.e. `a.b` for `aa.b` and `ba.b` */
  domain: Scalars['String']['output'];
  default?: Maybe<Scalars['Boolean']['output']>;
  brandingTitle?: Maybe<Scalars['String']['output']>;
  brandingLogo?: Maybe<Scalars['String']['output']>;
  brandingFavicon?: Maybe<Scalars['String']['output']>;
  flowAuthentication?: Maybe<Scalars['UUID']['output']>;
  flowInvalidation?: Maybe<Scalars['UUID']['output']>;
  flowRecovery?: Maybe<Scalars['UUID']['output']>;
  flowUnenrollment?: Maybe<Scalars['UUID']['output']>;
  flowUserSettings?: Maybe<Scalars['UUID']['output']>;
  flowDeviceCode?: Maybe<Scalars['UUID']['output']>;
  /** Web Certificate used by the authentik Core webserver. */
  webCertificate?: Maybe<Scalars['UUID']['output']>;
  attributes?: Maybe<Scalars['JSON']['output']>;
};

export type CoreBrandsRetrieveResponse = Brand | ValidationError | GenericError;

export type CoreBrandsUsedByListResponse = UsedBy | ValidationError | GenericError;

export type CoreBrandsCurrentRetrieveResponse = CurrentBrand | ValidationError | GenericError;

/** Partial brand information for styling */
export type CurrentBrand = {
  matchedDomain: Scalars['String']['output'];
  brandingTitle: Scalars['String']['output'];
  brandingLogo: Scalars['String']['output'];
  brandingFavicon: Scalars['String']['output'];
  uiFooterLinks: Array<Maybe<FooterLink>>;
  uiTheme: UiThemeEnum;
  flowAuthentication?: Maybe<Scalars['String']['output']>;
  flowInvalidation?: Maybe<Scalars['String']['output']>;
  flowRecovery?: Maybe<Scalars['String']['output']>;
  flowUnenrollment?: Maybe<Scalars['String']['output']>;
  flowUserSettings?: Maybe<Scalars['String']['output']>;
  flowDeviceCode?: Maybe<Scalars['String']['output']>;
  defaultLocale: Scalars['String']['output'];
};

/** Links returned in Config API */
export type FooterLink = {
  href: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type UiThemeEnum =
  | 'AUTOMATIC'
  | 'LIGHT'
  | 'DARK';

export type CoreGroupsListResponse = PaginatedGroupList | ValidationError | GenericError;

export type PaginatedGroupList = {
  pagination: Pagination;
  results: Array<Maybe<Group>>;
};

/** Group Serializer */
export type Group = {
  pk: Scalars['UUID']['output'];
  numPk: Scalars['Int']['output'];
  name: Scalars['QueryCoreGroupsListOneOf_0ResultsItemsName']['output'];
  /** Users added to this group will be superusers. */
  isSuperuser?: Maybe<Scalars['Boolean']['output']>;
  parent?: Maybe<Scalars['UUID']['output']>;
  parentName?: Maybe<Scalars['String']['output']>;
  users?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  usersObj?: Maybe<Array<Maybe<GroupMember>>>;
  attributes?: Maybe<Scalars['JSON']['output']>;
  roles?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  rolesObj: Array<Maybe<Role>>;
  additionalProperties?: Maybe<Scalars['JSON']['output']>;
};

/** Stripped down user serializer to show relevant users for groups */
export type GroupMember = {
  pk: Scalars['Int']['output'];
  username: Scalars['QueryCoreGroupsListOneOf_0ResultsItemsUsersObjItemsUsername']['output'];
  /** User's display name. */
  name: Scalars['String']['output'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive?: Maybe<Scalars['Boolean']['output']>;
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['EmailAddress']['output']>;
  attributes?: Maybe<Scalars['JSON']['output']>;
  uid: Scalars['String']['output'];
  additionalProperties?: Maybe<Scalars['JSON']['output']>;
};

/** Role serializer */
export type Role = {
  pk: Scalars['UUID']['output'];
  name: Scalars['QueryCoreGroupsListOneOf_0ResultsItemsRolesObjItemsName']['output'];
};

export type CoreGroupsRetrieveResponse = Group | ValidationError | GenericError;

export type CoreGroupsUsedByListResponse = UsedBy | ValidationError | GenericError;

export type CoreTokensListResponse = PaginatedTokenList | ValidationError | GenericError;

export type PaginatedTokenList = {
  pagination: Pagination;
  results: Array<Maybe<Token>>;
};

/** Token Serializer */
export type Token = {
  pk: Scalars['UUID']['output'];
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: Maybe<Scalars['String']['output']>;
  identifier: Scalars['QueryCoreTokensListOneOf_0ResultsItemsIdentifier']['output'];
  intent?: Maybe<IntentEnum>;
  user?: Maybe<Scalars['Int']['output']>;
  userObj: User;
  description?: Maybe<Scalars['String']['output']>;
  expires?: Maybe<Scalars['DateTime']['output']>;
  expiring?: Maybe<Scalars['Boolean']['output']>;
  additionalProperties?: Maybe<Scalars['JSON']['output']>;
};

export type IntentEnum =
  | 'VERIFICATION'
  | 'API'
  | 'RECOVERY'
  | 'APP_PASSWORD';

/** User Serializer */
export type User = {
  pk: Scalars['Int']['output'];
  username: Scalars['QueryCoreTokensListOneOf_0ResultsItemsUserObjUsername']['output'];
  /** User's display name. */
  name: Scalars['String']['output'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive?: Maybe<Scalars['Boolean']['output']>;
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  isSuperuser: Scalars['Boolean']['output'];
  groups?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  groupsObj?: Maybe<Array<Maybe<UserGroup>>>;
  email?: Maybe<Scalars['EmailAddress']['output']>;
  /** User's avatar, either a http/https URL or a data URI */
  avatar: Scalars['String']['output'];
  attributes?: Maybe<Scalars['JSON']['output']>;
  uid: Scalars['String']['output'];
  path?: Maybe<Scalars['String']['output']>;
  type?: Maybe<UserTypeEnum>;
  uuid: Scalars['UUID']['output'];
  additionalProperties?: Maybe<Scalars['JSON']['output']>;
};

/** Simplified Group Serializer for user's groups */
export type UserGroup = {
  pk: Scalars['UUID']['output'];
  /** Get a numerical, int32 ID for the group */
  numPk: Scalars['Int']['output'];
  name: Scalars['QueryCoreTokensListOneOf_0ResultsItemsUserObjGroupsObjItemsName']['output'];
  /** Users added to this group will be superusers. */
  isSuperuser?: Maybe<Scalars['Boolean']['output']>;
  parent?: Maybe<Scalars['UUID']['output']>;
  parentName?: Maybe<Scalars['String']['output']>;
  attributes?: Maybe<Scalars['JSON']['output']>;
  additionalProperties?: Maybe<Scalars['JSON']['output']>;
};

export type UserTypeEnum =
  | 'INTERNAL'
  | 'EXTERNAL'
  | 'SERVICE_ACCOUNT'
  | 'INTERNAL_SERVICE_ACCOUNT';

export type QueryInputCoreTokensListIntent =
  | 'API'
  | 'APP_PASSWORD'
  | 'RECOVERY'
  | 'VERIFICATION';

export type CoreTokensRetrieveResponse = Token | ValidationError | GenericError;

export type CoreTokensUsedByListResponse = UsedBy | ValidationError | GenericError;

export type CoreTokensViewKeyRetrieveResponse = TokenView | ValidationError | GenericError;

/** Show token's current key */
export type TokenView = {
  key: Scalars['String']['output'];
};

export type CoreUserConsentListResponse = PaginatedUserConsentList | ValidationError | GenericError;

export type PaginatedUserConsentList = {
  pagination: Pagination;
  results: Array<Maybe<UserConsent>>;
};

/** UserConsent Serializer */
export type UserConsent = {
  pk: Scalars['Int']['output'];
  expires?: Maybe<Scalars['DateTime']['output']>;
  expiring?: Maybe<Scalars['Boolean']['output']>;
  user: User;
  application: Application;
  permissions?: Maybe<Scalars['String']['output']>;
};

export type CoreUserConsentRetrieveResponse = UserConsent | ValidationError | GenericError;

export type CoreUserConsentUsedByListResponse = UsedBy | ValidationError | GenericError;

export type CoreUsersListResponse = PaginatedUserList | ValidationError | GenericError;

export type PaginatedUserList = {
  pagination: Pagination;
  results: Array<Maybe<User>>;
};

export type QueryInputCoreUsersListTypeItems =
  | 'EXTERNAL'
  | 'INTERNAL'
  | 'INTERNAL_SERVICE_ACCOUNT'
  | 'SERVICE_ACCOUNT';

export type CoreUsersRetrieveResponse = User | ValidationError | GenericError;

export type CoreUsersMetricsRetrieveResponse = UserMetrics | ValidationError | GenericError;

/** User Metrics */
export type UserMetrics = {
  logins: Array<Maybe<Coordinate>>;
  loginsFailed: Array<Maybe<Coordinate>>;
  authorizations: Array<Maybe<Coordinate>>;
};

export type CoreUsersUsedByListResponse = UsedBy | ValidationError | GenericError;

export type CoreUsersImpersonateEndRetrieveResponse = VoidContainer | ValidationError | GenericError;

export type VoidContainer = {
  void?: Maybe<Scalars['Void']['output']>;
};

export type CoreUsersMeRetrieveResponse = SessionUser | ValidationError | GenericError;

/**
 * Response for the /user/me endpoint, returns the currently active user (as `user` property)
 * and, if this user is being impersonated, the original user in the `original` property.
 */
export type SessionUser = {
  user: UserSelf;
  original?: Maybe<UserSelf>;
};

/** User Serializer for information a user can retrieve about themselves */
export type UserSelf = {
  pk: Scalars['Int']['output'];
  username: Scalars['QueryCoreUsersMeRetrieveOneOf_0UserUsername']['output'];
  /** User's display name. */
  name: Scalars['String']['output'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean']['output'];
  isSuperuser: Scalars['Boolean']['output'];
  groups: Array<Maybe<UserSelfGroups>>;
  email?: Maybe<Scalars['EmailAddress']['output']>;
  /** User's avatar, either a http/https URL or a data URI */
  avatar: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  /** Get user settings with brand and group settings applied */
  settings: Scalars['JSON']['output'];
  type?: Maybe<UserTypeEnum>;
  /** Get all system permissions assigned to the user */
  systemPermissions: Array<Maybe<Scalars['String']['output']>>;
};

export type UserSelfGroups = {
  name: Scalars['String']['output'];
  pk: Scalars['String']['output'];
};

export type CoreUsersPathsRetrieveResponse = UserPath | ValidationError | GenericError;

export type UserPath = {
  paths: Array<Maybe<Scalars['String']['output']>>;
};

export type CryptoCertificatekeypairsListResponse = PaginatedCertificateKeyPairList | ValidationError | GenericError;

export type PaginatedCertificateKeyPairList = {
  pagination: Pagination;
  results: Array<Maybe<CertificateKeyPair>>;
};

/** CertificateKeyPair Serializer */
export type CertificateKeyPair = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Get certificate Hash (SHA256) */
  fingerprintSha256?: Maybe<Scalars['String']['output']>;
  /** Get certificate Hash (SHA1) */
  fingerprintSha1?: Maybe<Scalars['String']['output']>;
  /** Get certificate expiry */
  certExpiry?: Maybe<Scalars['DateTime']['output']>;
  /** Get certificate subject as full rfc4514 */
  certSubject?: Maybe<Scalars['String']['output']>;
  /** Show if this keypair has a private key configured or not */
  privateKeyAvailable: Scalars['Boolean']['output'];
  /** Get the private key's type, if set */
  privateKeyType?: Maybe<Scalars['String']['output']>;
  /** Get URL to download certificate */
  certificateDownloadUrl: Scalars['String']['output'];
  /** Get URL to download private key */
  privateKeyDownloadUrl: Scalars['String']['output'];
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: Maybe<Scalars['String']['output']>;
};

export type CryptoCertificatekeypairsRetrieveResponse = CertificateKeyPair | ValidationError | GenericError;

export type CryptoCertificatekeypairsUsedByListResponse = UsedBy | ValidationError | GenericError;

export type CryptoCertificatekeypairsViewCertificateRetrieveResponse = CertificateData | ValidationError | GenericError;

/** Get CertificateKeyPair's data */
export type CertificateData = {
  data: Scalars['String']['output'];
};

export type CryptoCertificatekeypairsViewPrivateKeyRetrieveResponse = CertificateData | ValidationError | GenericError;

export type EnterpriseLicenseListResponse = PaginatedLicenseList | ValidationError | GenericError;

export type PaginatedLicenseList = {
  pagination: Pagination;
  results: Array<Maybe<License>>;
};

/** License Serializer */
export type License = {
  licenseUuid: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  key: Scalars['String']['output'];
  expiry: Scalars['DateTime']['output'];
  internalUsers: Scalars['Int']['output'];
  externalUsers: Scalars['Int']['output'];
};

export type EnterpriseLicenseRetrieveResponse = License | ValidationError | GenericError;

export type EnterpriseLicenseUsedByListResponse = UsedBy | ValidationError | GenericError;

export type EnterpriseLicenseForecastRetrieveResponse = LicenseForecast | ValidationError | GenericError;

/** Serializer for license forecast */
export type LicenseForecast = {
  internalUsers: Scalars['Int']['output'];
  externalUsers: Scalars['Int']['output'];
  forecastedInternalUsers: Scalars['Int']['output'];
  forecastedExternalUsers: Scalars['Int']['output'];
};

export type EnterpriseLicenseGetInstallIdRetrieveResponse = InstallId | ValidationError | GenericError;

export type InstallId = {
  installId: Scalars['String']['output'];
};

export type EnterpriseLicenseSummaryRetrieveResponse = LicenseSummary | ValidationError | GenericError;

/** Serializer for license status */
export type LicenseSummary = {
  internalUsers: Scalars['Int']['output'];
  externalUsers: Scalars['Int']['output'];
  valid: Scalars['Boolean']['output'];
  showAdminWarning: Scalars['Boolean']['output'];
  showUserWarning: Scalars['Boolean']['output'];
  readOnly: Scalars['Boolean']['output'];
  latestValid: Scalars['DateTime']['output'];
  hasLicense: Scalars['Boolean']['output'];
};

export type EventsEventsListResponse = PaginatedEventList | ValidationError | GenericError;

export type PaginatedEventList = {
  pagination: Pagination;
  results: Array<Maybe<Event>>;
};

/** Event Serializer */
export type Event = {
  pk: Scalars['UUID']['output'];
  user?: Maybe<Scalars['JSON']['output']>;
  action: EventActions;
  app: Scalars['String']['output'];
  context?: Maybe<Scalars['JSON']['output']>;
  clientIp?: Maybe<Scalars['String']['output']>;
  created: Scalars['DateTime']['output'];
  expires?: Maybe<Scalars['DateTime']['output']>;
  brand?: Maybe<Scalars['JSON']['output']>;
};

export type EventActions =
  | 'LOGIN'
  | 'LOGIN_FAILED'
  | 'LOGOUT'
  | 'USER_WRITE'
  | 'SUSPICIOUS_REQUEST'
  | 'PASSWORD_SET'
  | 'SECRET_VIEW'
  | 'SECRET_ROTATE'
  | 'INVITATION_USED'
  | 'AUTHORIZE_APPLICATION'
  | 'SOURCE_LINKED'
  | 'IMPERSONATION_STARTED'
  | 'IMPERSONATION_ENDED'
  | 'FLOW_EXECUTION'
  | 'POLICY_EXECUTION'
  | 'POLICY_EXCEPTION'
  | 'PROPERTY_MAPPING_EXCEPTION'
  | 'SYSTEM_TASK_EXECUTION'
  | 'SYSTEM_TASK_EXCEPTION'
  | 'SYSTEM_EXCEPTION'
  | 'CONFIGURATION_ERROR'
  | 'MODEL_CREATED'
  | 'MODEL_UPDATED'
  | 'MODEL_DELETED'
  | 'EMAIL_SENT'
  | 'UPDATE_AVAILABLE'
  | 'CUSTOM_';

export type EventsEventsRetrieveResponse = Event | ValidationError | GenericError;

export type EventsEventsActionsListResponse = TypeCreate | ValidationError | GenericError;

/** Types of an object that can be created */
export type TypeCreate = {
  name: Scalars['String']['output'];
  description: Scalars['String']['output'];
  component: Scalars['String']['output'];
  modelName: Scalars['String']['output'];
  requiresEnterprise?: Maybe<Scalars['Boolean']['output']>;
};

export type EventsEventsPerMonthListResponse = Coordinate | ValidationError | GenericError;

export type EventsEventsTopPerUserListResponse = EventTopPerUser | ValidationError | GenericError;

/** Response object of Event's top_per_user */
export type EventTopPerUser = {
  application: Scalars['JSON']['output'];
  countedEvents: Scalars['Int']['output'];
  uniqueUsers: Scalars['Int']['output'];
};

export type EventsEventsVolumeListResponse = Coordinate | ValidationError | GenericError;

export type EventsNotificationsListResponse = PaginatedNotificationList | ValidationError | GenericError;

export type PaginatedNotificationList = {
  pagination: Pagination;
  results: Array<Maybe<Notification>>;
};

/** Notification Serializer */
export type Notification = {
  pk: Scalars['UUID']['output'];
  severity: SeverityEnum;
  body: Scalars['String']['output'];
  created: Scalars['DateTime']['output'];
  event?: Maybe<Event>;
  seen?: Maybe<Scalars['Boolean']['output']>;
};

export type SeverityEnum =
  | 'NOTICE'
  | 'WARNING'
  | 'ALERT';

export type QueryInputEventsNotificationsListSeverity =
  | 'ALERT'
  | 'NOTICE'
  | 'WARNING';

export type EventsNotificationsRetrieveResponse = Notification | ValidationError | GenericError;

export type EventsNotificationsUsedByListResponse = UsedBy | ValidationError | GenericError;

export type EventsRulesListResponse = PaginatedNotificationRuleList | ValidationError | GenericError;

export type PaginatedNotificationRuleList = {
  pagination: Pagination;
  results: Array<Maybe<NotificationRule>>;
};

/** NotificationRule Serializer */
export type NotificationRule = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Select which transports should be used to notify the user. If none are selected, the notification will only be shown in the authentik UI. */
  transports?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  severity?: Maybe<SeverityEnum>;
  /** Define which group of users this notification should be sent and shown to. If left empty, Notification won't ben sent. */
  group?: Maybe<Scalars['UUID']['output']>;
  groupObj: Group;
};

/** Controls which severity level the created notifications will have. */
export type QueryInputEventsRulesListSeverity =
  | 'ALERT'
  | 'NOTICE'
  | 'WARNING';

export type EventsRulesRetrieveResponse = NotificationRule | ValidationError | GenericError;

export type EventsRulesUsedByListResponse = UsedBy | ValidationError | GenericError;

export type EventsSystemTasksListResponse = PaginatedSystemTaskList | ValidationError | GenericError;

export type PaginatedSystemTaskList = {
  pagination: Pagination;
  results: Array<Maybe<SystemTask>>;
};

/** Serialize TaskInfo and TaskResult */
export type SystemTask = {
  uuid: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Get full name with UID */
  fullName: Scalars['String']['output'];
  uid?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  startTimestamp: Scalars['DateTime']['output'];
  finishTimestamp: Scalars['DateTime']['output'];
  duration: Scalars['Float']['output'];
  status: SystemTaskStatusEnum;
  messages: Array<Maybe<LogEvent>>;
};

export type SystemTaskStatusEnum =
  | 'UNKNOWN'
  | 'SUCCESSFUL'
  | 'WARNING'
  | 'ERROR';

export type QueryInputEventsSystemTasksListStatus =
  | 'ERROR'
  | 'SUCCESSFUL'
  | 'UNKNOWN'
  | 'WARNING';

export type EventsSystemTasksRetrieveResponse = SystemTask | ValidationError | GenericError;

export type EventsTransportsListResponse = PaginatedNotificationTransportList | ValidationError | GenericError;

export type PaginatedNotificationTransportList = {
  pagination: Pagination;
  results: Array<Maybe<NotificationTransport>>;
};

/** NotificationTransport Serializer */
export type NotificationTransport = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  mode?: Maybe<NotificationTransportModeEnum>;
  /** Return selected mode with a UI Label */
  modeVerbose: Scalars['String']['output'];
  webhookUrl?: Maybe<Scalars['URL']['output']>;
  webhookMapping?: Maybe<Scalars['UUID']['output']>;
  /** Only send notification once, for example when sending a webhook into a chat channel. */
  sendOnce?: Maybe<Scalars['Boolean']['output']>;
};

export type NotificationTransportModeEnum =
  | 'LOCAL'
  | 'WEBHOOK'
  | 'WEBHOOK_SLACK'
  | 'EMAIL';

export type QueryInputEventsTransportsListMode =
  | 'EMAIL'
  | 'LOCAL'
  | 'WEBHOOK'
  | 'WEBHOOK_SLACK';

export type EventsTransportsRetrieveResponse = NotificationTransport | ValidationError | GenericError;

export type EventsTransportsUsedByListResponse = UsedBy | ValidationError | GenericError;

export type FlowsBindingsListResponse = PaginatedFlowStageBindingList | ValidationError | GenericError;

export type PaginatedFlowStageBindingList = {
  pagination: Pagination;
  results: Array<Maybe<FlowStageBinding>>;
};

/** FlowStageBinding Serializer */
export type FlowStageBinding = {
  pk: Scalars['UUID']['output'];
  policybindingmodelPtrId: Scalars['UUID']['output'];
  target: Scalars['UUID']['output'];
  stage: Scalars['UUID']['output'];
  stageObj: Stage;
  /** Evaluate policies during the Flow planning process. */
  evaluateOnPlan?: Maybe<Scalars['Boolean']['output']>;
  /** Evaluate policies when the Stage is present to the user. */
  reEvaluatePolicies?: Maybe<Scalars['Boolean']['output']>;
  order: Scalars['Int']['output'];
  policyEngineMode?: Maybe<PolicyEngineMode>;
  invalidResponseAction?: Maybe<InvalidResponseActionEnum>;
  additionalProperties?: Maybe<Scalars['JSON']['output']>;
};

/** Stage Serializer */
export type Stage = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Get object type so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  flowSet?: Maybe<Array<Maybe<FlowSet>>>;
  additionalProperties?: Maybe<Scalars['JSON']['output']>;
};

/** Stripped down flow serializer */
export type FlowSet = {
  pk: Scalars['UUID']['output'];
  policybindingmodelPtrId: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['QueryFlowsBindingsListOneOf_0ResultsItemsStageObjFlowSetItemsSlug']['output'];
  /** Shown as the Title in Flow pages. */
  title: Scalars['String']['output'];
  designation: FlowDesignationEnum;
  /**
   * Get the URL to the background image. If the name is /static or starts with http
   * it is returned as-is
   */
  background: Scalars['String']['output'];
  policyEngineMode?: Maybe<PolicyEngineMode>;
  /** Enable compatibility mode, increases compatibility with password managers on mobile devices. */
  compatibilityMode?: Maybe<Scalars['Boolean']['output']>;
  /** Get export URL for flow */
  exportUrl: Scalars['String']['output'];
  layout?: Maybe<FlowLayoutEnum>;
  deniedAction?: Maybe<DeniedActionEnum>;
};

export type FlowDesignationEnum =
  | 'AUTHENTICATION'
  | 'AUTHORIZATION'
  | 'INVALIDATION'
  | 'ENROLLMENT'
  | 'UNENROLLMENT'
  | 'RECOVERY'
  | 'STAGE_CONFIGURATION';

export type FlowLayoutEnum =
  | 'STACKED'
  | 'CONTENT_LEFT'
  | 'CONTENT_RIGHT'
  | 'SIDEBAR_LEFT'
  | 'SIDEBAR_RIGHT';

export type DeniedActionEnum =
  | 'MESSAGE_CONTINUE'
  | 'MESSAGE'
  | 'CONTINUE';

export type InvalidResponseActionEnum =
  | 'RETRY'
  | 'RESTART'
  | 'RESTART_WITH_CONTEXT';

/** Configure how the flow executor should handle an invalid response to a challenge. RETRY returns the error message and a similar challenge to the executor. RESTART restarts the flow from the beginning, and RESTART_WITH_CONTEXT restarts the flow while keeping the current context. */
export type QueryInputFlowsBindingsListInvalidResponseAction =
  | 'RESTART'
  | 'RESTART_WITH_CONTEXT'
  | 'RETRY';

export type QueryInputFlowsBindingsListPolicyEngineMode =
  | 'ALL'
  | 'ANY';

export type FlowsBindingsRetrieveResponse = FlowStageBinding | ValidationError | GenericError;

export type FlowsBindingsUsedByListResponse = UsedBy | ValidationError | GenericError;

export type FlowsExecutorGetResponse = AccessDeniedChallenge | AppleLoginChallenge | AuthenticatorDuoChallenge | AuthenticatorSmsChallenge | AuthenticatorStaticChallenge | AuthenticatorTotpChallenge | AuthenticatorValidationChallenge | AuthenticatorWebAuthnChallenge | AutosubmitChallenge | CaptchaChallenge | ConsentChallenge | EmailChallenge | FlowErrorChallenge | IdentificationChallenge | OAuthDeviceCodeChallenge | OAuthDeviceCodeFinishChallenge | PasswordChallenge | PlexAuthenticationChallenge | PromptChallenge | RedirectChallenge | ShellChallenge | UserLoginChallenge | ValidationError | GenericError;

/** Challenge when a flow's active stage calls `stage_invalid()`. */
export type AccessDeniedChallenge = {
  type: ChallengeChoices;
  flowInfo?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  responseErrors?: Maybe<Scalars['JSON']['output']>;
  pendingUser: Scalars['String']['output'];
  pendingUserAvatar: Scalars['String']['output'];
  errorMessage?: Maybe<Scalars['String']['output']>;
};

export type ChallengeChoices =
  | 'NATIVE'
  | 'SHELL'
  | 'REDIRECT';

/** Contextual flow information for a challenge */
export type ContextualFlowInfo = {
  title?: Maybe<Scalars['String']['output']>;
  background?: Maybe<Scalars['String']['output']>;
  cancelUrl: Scalars['String']['output'];
  layout: ContextualFlowInfoLayoutEnum;
};

export type ContextualFlowInfoLayoutEnum =
  | 'STACKED'
  | 'CONTENT_LEFT'
  | 'CONTENT_RIGHT'
  | 'SIDEBAR_LEFT'
  | 'SIDEBAR_RIGHT';

/** Special challenge for apple-native authentication flow, which happens on the client. */
export type AppleLoginChallenge = {
  type: ChallengeChoices;
  flowInfo?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  responseErrors?: Maybe<Scalars['JSON']['output']>;
  clientId: Scalars['String']['output'];
  scope: Scalars['String']['output'];
  redirectUri: Scalars['String']['output'];
  state: Scalars['String']['output'];
};

/** Duo Challenge */
export type AuthenticatorDuoChallenge = {
  type: ChallengeChoices;
  flowInfo?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  responseErrors?: Maybe<Scalars['JSON']['output']>;
  pendingUser: Scalars['String']['output'];
  pendingUserAvatar: Scalars['String']['output'];
  activationBarcode: Scalars['String']['output'];
  activationCode: Scalars['String']['output'];
  stageUuid: Scalars['String']['output'];
};

/** SMS Setup challenge */
export type AuthenticatorSmsChallenge = {
  type: ChallengeChoices;
  flowInfo?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  responseErrors?: Maybe<Scalars['JSON']['output']>;
  pendingUser: Scalars['String']['output'];
  pendingUserAvatar: Scalars['String']['output'];
  phoneNumberRequired?: Maybe<Scalars['Boolean']['output']>;
};

/** Static authenticator challenge */
export type AuthenticatorStaticChallenge = {
  type: ChallengeChoices;
  flowInfo?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  responseErrors?: Maybe<Scalars['JSON']['output']>;
  pendingUser: Scalars['String']['output'];
  pendingUserAvatar: Scalars['String']['output'];
  codes: Array<Maybe<Scalars['String']['output']>>;
};

/** TOTP Setup challenge */
export type AuthenticatorTotpChallenge = {
  type: ChallengeChoices;
  flowInfo?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  responseErrors?: Maybe<Scalars['JSON']['output']>;
  pendingUser: Scalars['String']['output'];
  pendingUserAvatar: Scalars['String']['output'];
  configUrl: Scalars['String']['output'];
};

/** Authenticator challenge */
export type AuthenticatorValidationChallenge = {
  type: ChallengeChoices;
  flowInfo?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  responseErrors?: Maybe<Scalars['JSON']['output']>;
  pendingUser: Scalars['String']['output'];
  pendingUserAvatar: Scalars['String']['output'];
  deviceChallenges: Array<Maybe<DeviceChallenge>>;
  configurationStages: Array<Maybe<SelectableStage>>;
};

/** Single device challenge */
export type DeviceChallenge = {
  deviceClass: Scalars['String']['output'];
  deviceUid: Scalars['String']['output'];
  challenge: Scalars['JSON']['output'];
};

/** Serializer for stages which can be selected by users */
export type SelectableStage = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  verboseName: Scalars['String']['output'];
  metaModelName: Scalars['String']['output'];
};

/** WebAuthn Challenge */
export type AuthenticatorWebAuthnChallenge = {
  type: ChallengeChoices;
  flowInfo?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  responseErrors?: Maybe<Scalars['JSON']['output']>;
  pendingUser: Scalars['String']['output'];
  pendingUserAvatar: Scalars['String']['output'];
  registration: Scalars['JSON']['output'];
};

/** Autosubmit challenge used to send and navigate a POST request */
export type AutosubmitChallenge = {
  type: ChallengeChoices;
  flowInfo?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  responseErrors?: Maybe<Scalars['JSON']['output']>;
  url: Scalars['String']['output'];
  attrs: Scalars['JSON']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

/** Site public key */
export type CaptchaChallenge = {
  type: ChallengeChoices;
  flowInfo?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  responseErrors?: Maybe<Scalars['JSON']['output']>;
  pendingUser: Scalars['String']['output'];
  pendingUserAvatar: Scalars['String']['output'];
  siteKey: Scalars['String']['output'];
  jsUrl: Scalars['String']['output'];
};

/** Challenge info for consent screens */
export type ConsentChallenge = {
  type: ChallengeChoices;
  flowInfo?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  responseErrors?: Maybe<Scalars['JSON']['output']>;
  pendingUser: Scalars['String']['output'];
  pendingUserAvatar: Scalars['String']['output'];
  headerText?: Maybe<Scalars['String']['output']>;
  permissions: Array<Maybe<ConsentPermission>>;
  additionalPermissions: Array<Maybe<ConsentPermission>>;
  token: Scalars['String']['output'];
};

/** Permission used for consent */
export type ConsentPermission = {
  name: Scalars['String']['output'];
  id: Scalars['String']['output'];
};

/** Email challenge */
export type EmailChallenge = {
  type: ChallengeChoices;
  flowInfo?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  responseErrors?: Maybe<Scalars['JSON']['output']>;
};

/**
 * Challenge class when an unhandled error occurs during a stage. Normal users
 * are shown an error message, superusers are shown a full stacktrace.
 */
export type FlowErrorChallenge = {
  type?: Maybe<Scalars['String']['output']>;
  flowInfo?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  responseErrors?: Maybe<Scalars['JSON']['output']>;
  requestId: Scalars['String']['output'];
  error?: Maybe<Scalars['String']['output']>;
  traceback?: Maybe<Scalars['String']['output']>;
};

/** Identification challenges with all UI elements */
export type IdentificationChallenge = {
  type: ChallengeChoices;
  flowInfo?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  responseErrors?: Maybe<Scalars['JSON']['output']>;
  userFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  passwordFields: Scalars['Boolean']['output'];
  applicationPre?: Maybe<Scalars['String']['output']>;
  flowDesignation: FlowDesignationEnum;
  enrollUrl?: Maybe<Scalars['String']['output']>;
  recoveryUrl?: Maybe<Scalars['String']['output']>;
  passwordlessUrl?: Maybe<Scalars['String']['output']>;
  primaryAction: Scalars['String']['output'];
  sources?: Maybe<Array<Maybe<LoginSource>>>;
  showSourceLabels: Scalars['Boolean']['output'];
};

/** Serializer for Login buttons of sources */
export type LoginSource = {
  name: Scalars['String']['output'];
  iconUrl?: Maybe<Scalars['String']['output']>;
  challenge: LoginChallengeTypes;
};

export type LoginChallengeTypes = RedirectChallenge | PlexAuthenticationChallenge | AppleLoginChallenge;

/** Challenge type to redirect the client */
export type RedirectChallenge = {
  type: ChallengeChoices;
  flowInfo?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  responseErrors?: Maybe<Scalars['JSON']['output']>;
  to: Scalars['String']['output'];
};

/** Challenge shown to the user in identification stage */
export type PlexAuthenticationChallenge = {
  type: ChallengeChoices;
  flowInfo?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  responseErrors?: Maybe<Scalars['JSON']['output']>;
  clientId: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

/** OAuth Device code challenge */
export type OAuthDeviceCodeChallenge = {
  type: ChallengeChoices;
  flowInfo?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  responseErrors?: Maybe<Scalars['JSON']['output']>;
};

/** Final challenge after user enters their code */
export type OAuthDeviceCodeFinishChallenge = {
  type: ChallengeChoices;
  flowInfo?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  responseErrors?: Maybe<Scalars['JSON']['output']>;
};

/** Password challenge UI fields */
export type PasswordChallenge = {
  type: ChallengeChoices;
  flowInfo?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  responseErrors?: Maybe<Scalars['JSON']['output']>;
  pendingUser: Scalars['String']['output'];
  pendingUserAvatar: Scalars['String']['output'];
  recoveryUrl?: Maybe<Scalars['String']['output']>;
};

/** Initial challenge being sent, define fields */
export type PromptChallenge = {
  type: ChallengeChoices;
  flowInfo?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  responseErrors?: Maybe<Scalars['JSON']['output']>;
  fields: Array<Maybe<StagePrompt>>;
};

/** Serializer for a single Prompt field */
export type StagePrompt = {
  fieldKey: Scalars['String']['output'];
  label: Scalars['String']['output'];
  type: PromptTypeEnum;
  required: Scalars['Boolean']['output'];
  placeholder: Scalars['String']['output'];
  initialValue: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  subText: Scalars['String']['output'];
  choices?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type PromptTypeEnum =
  | 'TEXT'
  | 'TEXT_AREA'
  | 'TEXT_READ_ONLY'
  | 'TEXT_AREA_READ_ONLY'
  | 'USERNAME'
  | 'EMAIL'
  | 'PASSWORD'
  | 'NUMBER'
  | 'CHECKBOX'
  | 'RADIO_BUTTON_GROUP'
  | 'DROPDOWN'
  | 'DATE'
  | 'DATE_TIME'
  | 'FILE'
  | 'SEPARATOR'
  | 'HIDDEN'
  | 'STATIC'
  | 'AK_LOCALE';

/** challenge type to render HTML as-is */
export type ShellChallenge = {
  type: ChallengeChoices;
  flowInfo?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  responseErrors?: Maybe<Scalars['JSON']['output']>;
  body: Scalars['String']['output'];
};

/** Empty challenge */
export type UserLoginChallenge = {
  type: ChallengeChoices;
  flowInfo?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  responseErrors?: Maybe<Scalars['JSON']['output']>;
  pendingUser: Scalars['String']['output'];
  pendingUserAvatar: Scalars['String']['output'];
};

export type FlowsInspectorGetResponse = FlowInspection | GenericError;

/** Serializer for inspect endpoint */
export type FlowInspection = {
  plans: Array<Maybe<FlowInspectorPlan>>;
  currentPlan?: Maybe<FlowInspectorPlan>;
  isCompleted: Scalars['Boolean']['output'];
};

/** Serializer for an active FlowPlan */
export type FlowInspectorPlan = {
  currentStage: FlowStageBinding;
  nextPlannedStage: FlowStageBinding;
  /** Get the plan's context, sanitized */
  planContext: Scalars['JSON']['output'];
  /** Get a unique session ID */
  sessionId: Scalars['String']['output'];
};

export type FlowsInstancesListResponse = PaginatedFlowList | ValidationError | GenericError;

export type PaginatedFlowList = {
  pagination: Pagination;
  results: Array<Maybe<Flow>>;
};

/** Flow Serializer */
export type Flow = {
  pk: Scalars['UUID']['output'];
  policybindingmodelPtrId: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['QueryFlowsInstancesListOneOf_0ResultsItemsSlug']['output'];
  /** Shown as the Title in Flow pages. */
  title: Scalars['String']['output'];
  designation: FlowDesignationEnum;
  /**
   * Get the URL to the background image. If the name is /static or starts with http
   * it is returned as-is
   */
  background: Scalars['String']['output'];
  stages: Array<Maybe<Scalars['UUID']['output']>>;
  policies: Array<Maybe<Scalars['UUID']['output']>>;
  /** Get count of cached flows */
  cacheCount: Scalars['Int']['output'];
  policyEngineMode?: Maybe<PolicyEngineMode>;
  /** Enable compatibility mode, increases compatibility with password managers on mobile devices. */
  compatibilityMode?: Maybe<Scalars['Boolean']['output']>;
  /** Get export URL for flow */
  exportUrl: Scalars['String']['output'];
  layout?: Maybe<FlowLayoutEnum>;
  deniedAction?: Maybe<DeniedActionEnum>;
  authentication?: Maybe<AuthenticationEnum>;
  additionalProperties?: Maybe<Scalars['JSON']['output']>;
};

export type AuthenticationEnum =
  | 'NONE'
  | 'REQUIRE_AUTHENTICATED'
  | 'REQUIRE_UNAUTHENTICATED'
  | 'REQUIRE_SUPERUSER'
  | 'REQUIRE_OUTPOST';

/** Configure what should happen when a flow denies access to a user. */
export type QueryInputFlowsInstancesListDeniedAction =
  | 'CONTINUE'
  | 'MESSAGE'
  | 'MESSAGE_CONTINUE';

/** Decides what this Flow is used for. For example, the Authentication flow is redirect to when an un-authenticated user visits authentik. */
export type QueryInputFlowsInstancesListDesignation =
  | 'AUTHENTICATION'
  | 'AUTHORIZATION'
  | 'ENROLLMENT'
  | 'INVALIDATION'
  | 'RECOVERY'
  | 'STAGE_CONFIGURATION'
  | 'UNENROLLMENT';

export type FlowsInstancesRetrieveResponse = Flow | ValidationError | GenericError;

export type FlowsInstancesDiagramRetrieveResponse = FlowDiagram | ValidationError | GenericError;

/** response of the flow's diagram action */
export type FlowDiagram = {
  diagram: Scalars['String']['output'];
};

export type FlowsInstancesExecuteRetrieveResponse = Link | GenericError;

/** Returns a single link */
export type Link = {
  link: Scalars['String']['output'];
};

export type FlowsInstancesExportRetrieveResponse = FileContainer | ValidationError | GenericError;

export type FileContainer = {
  file?: Maybe<Scalars['File']['output']>;
};

export type FlowsInstancesUsedByListResponse = UsedBy | ValidationError | GenericError;

export type FlowsInstancesCacheInfoRetrieveResponse = Cache | ValidationError | GenericError;

/** Generic cache stats for an object */
export type Cache = {
  count: Scalars['Int']['output'];
};

export type ManagedBlueprintsListResponse = PaginatedBlueprintInstanceList | ValidationError | GenericError;

export type PaginatedBlueprintInstanceList = {
  pagination: Pagination;
  results: Array<Maybe<BlueprintInstance>>;
};

/** Info about a single blueprint instance file */
export type BlueprintInstance = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  path?: Maybe<Scalars['String']['output']>;
  context?: Maybe<Scalars['JSON']['output']>;
  lastApplied: Scalars['DateTime']['output'];
  lastAppliedHash: Scalars['String']['output'];
  status: BlueprintInstanceStatusEnum;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  managedModels: Array<Maybe<Scalars['String']['output']>>;
  metadata: Scalars['JSON']['output'];
  content?: Maybe<Scalars['String']['output']>;
};

export type BlueprintInstanceStatusEnum =
  | 'SUCCESSFUL'
  | 'WARNING'
  | 'ERROR'
  | 'ORPHANED'
  | 'UNKNOWN';

export type ManagedBlueprintsRetrieveResponse = BlueprintInstance | ValidationError | GenericError;

export type ManagedBlueprintsUsedByListResponse = UsedBy | ValidationError | GenericError;

export type ManagedBlueprintsAvailableListResponse = BlueprintFile | ValidationError | GenericError;

export type BlueprintFile = {
  path: Scalars['String']['output'];
  lastM: Scalars['DateTime']['output'];
  hash: Scalars['String']['output'];
  meta: Metadata;
};

/** Serializer for blueprint metadata */
export type Metadata = {
  name: Scalars['String']['output'];
  labels: Scalars['JSON']['output'];
  additionalProperties?: Maybe<Scalars['JSON']['output']>;
};

export type Oauth2AccessTokensListResponse = PaginatedTokenModelList | ValidationError | GenericError;

export type PaginatedTokenModelList = {
  pagination: Pagination;
  results: Array<Maybe<TokenModel>>;
};

/** Serializer for BaseGrantModel and RefreshToken */
export type TokenModel = {
  pk: Scalars['Int']['output'];
  provider: OAuth2Provider;
  user: User;
  /** Check if token is expired yet. */
  isExpired: Scalars['Boolean']['output'];
  expires?: Maybe<Scalars['DateTime']['output']>;
  scope: Array<Maybe<Scalars['String']['output']>>;
  /** Get the token's id_token as JSON String */
  idToken: Scalars['String']['output'];
  revoked?: Maybe<Scalars['Boolean']['output']>;
};

/** OAuth2Provider Serializer */
export type OAuth2Provider = {
  pk: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** Flow used for authentication when the associated application is accessed by an un-authenticated user. */
  authenticationFlow?: Maybe<Scalars['UUID']['output']>;
  /** Flow used when authorizing this provider. */
  authorizationFlow: Scalars['UUID']['output'];
  propertyMappings?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Internal application name, used in URLs. */
  assignedApplicationSlug: Scalars['String']['output'];
  /** Application's display Name. */
  assignedApplicationName: Scalars['String']['output'];
  /** Internal application name, used in URLs. */
  assignedBackchannelApplicationSlug: Scalars['String']['output'];
  /** Application's display Name. */
  assignedBackchannelApplicationName: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  clientType?: Maybe<ClientTypeEnum>;
  clientId?: Maybe<Scalars['QueryOauth2AccessTokensListOneOf_0ResultsItemsProviderClientId']['output']>;
  clientSecret?: Maybe<Scalars['QueryOauth2AccessTokensListOneOf_0ResultsItemsProviderClientSecret']['output']>;
  /** Access codes not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  accessCodeValidity?: Maybe<Scalars['String']['output']>;
  /** Tokens not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  accessTokenValidity?: Maybe<Scalars['String']['output']>;
  /** Tokens not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  refreshTokenValidity?: Maybe<Scalars['String']['output']>;
  /** Include User claims from scopes in the id_token, for applications that don't access the userinfo endpoint. */
  includeClaimsInIdToken?: Maybe<Scalars['Boolean']['output']>;
  /** Key used to sign the tokens. Only required when JWT Algorithm is set to RS256. */
  signingKey?: Maybe<Scalars['UUID']['output']>;
  /** Enter each URI on a new line. */
  redirectUris?: Maybe<Scalars['String']['output']>;
  subMode?: Maybe<SubModeEnum>;
  issuerMode?: Maybe<IssuerModeEnum>;
  jwksSources?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
};

export type ClientTypeEnum =
  | 'CONFIDENTIAL'
  | 'PUBLIC';

export type SubModeEnum =
  | 'HASHED_USER_ID'
  | 'USER_ID'
  | 'USER_UUID'
  | 'USER_USERNAME'
  | 'USER_EMAIL'
  | 'USER_UPN';

export type IssuerModeEnum =
  | 'GLOBAL'
  | 'PER_PROVIDER';

export type Oauth2AccessTokensRetrieveResponse = TokenModel | ValidationError | GenericError;

export type Oauth2AccessTokensUsedByListResponse = UsedBy | ValidationError | GenericError;

export type Oauth2AuthorizationCodesListResponse = PaginatedExpiringBaseGrantModelList | ValidationError | GenericError;

export type PaginatedExpiringBaseGrantModelList = {
  pagination: Pagination;
  results: Array<Maybe<ExpiringBaseGrantModel>>;
};

/** Serializer for BaseGrantModel and ExpiringBaseGrant */
export type ExpiringBaseGrantModel = {
  pk: Scalars['Int']['output'];
  provider: OAuth2Provider;
  user: User;
  /** Check if token is expired yet. */
  isExpired: Scalars['Boolean']['output'];
  expires?: Maybe<Scalars['DateTime']['output']>;
  scope: Array<Maybe<Scalars['String']['output']>>;
};

export type Oauth2AuthorizationCodesRetrieveResponse = ExpiringBaseGrantModel | ValidationError | GenericError;

export type Oauth2AuthorizationCodesUsedByListResponse = UsedBy | ValidationError | GenericError;

export type Oauth2RefreshTokensListResponse = PaginatedTokenModelList | ValidationError | GenericError;

export type Oauth2RefreshTokensRetrieveResponse = TokenModel | ValidationError | GenericError;

export type Oauth2RefreshTokensUsedByListResponse = UsedBy | ValidationError | GenericError;

export type OutpostsInstancesListResponse = PaginatedOutpostList | ValidationError | GenericError;

export type PaginatedOutpostList = {
  pagination: Pagination;
  results: Array<Maybe<Outpost>>;
};

/** Outpost Serializer */
export type Outpost = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  type: OutpostTypeEnum;
  providers: Array<Maybe<Scalars['Int']['output']>>;
  providersObj: Array<Maybe<Provider>>;
  /** Select Service-Connection authentik should use to manage this outpost. Leave empty if authentik should not handle the deployment. */
  serviceConnection?: Maybe<Scalars['UUID']['output']>;
  serviceConnectionObj: ServiceConnection;
  /** Get Token identifier */
  tokenIdentifier: Scalars['String']['output'];
  config: Scalars['JSON']['output'];
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: Maybe<Scalars['String']['output']>;
};

export type OutpostTypeEnum =
  | 'PROXY'
  | 'LDAP'
  | 'RADIUS'
  | 'RAC';

/** ServiceConnection Serializer */
export type ServiceConnection = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** If enabled, use the local connection. Required Docker socket/Kubernetes Integration */
  local?: Maybe<Scalars['Boolean']['output']>;
  /** Return component used to edit this object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  additionalProperties?: Maybe<Scalars['JSON']['output']>;
};

export type OutpostsInstancesRetrieveResponse = Outpost | ValidationError | GenericError;

export type OutpostsInstancesHealthListResponse = OutpostHealth | ValidationError | GenericError;

/** Outpost health status */
export type OutpostHealth = {
  uid: Scalars['String']['output'];
  lastSeen: Scalars['DateTime']['output'];
  version: Scalars['String']['output'];
  versionShould: Scalars['String']['output'];
  versionOutdated: Scalars['Boolean']['output'];
  buildHash: Scalars['String']['output'];
  buildHashShould: Scalars['String']['output'];
  hostname: Scalars['String']['output'];
};

export type OutpostsInstancesUsedByListResponse = UsedBy | ValidationError | GenericError;

export type OutpostsInstancesDefaultSettingsRetrieveResponse = OutpostDefaultConfig | ValidationError | GenericError;

/** Global default outpost config */
export type OutpostDefaultConfig = {
  config: Scalars['JSON']['output'];
};

export type OutpostsLdapListResponse = PaginatedLdapOutpostConfigList | ValidationError | GenericError;

export type PaginatedLdapOutpostConfigList = {
  pagination: Pagination;
  results: Array<Maybe<LdapOutpostConfig>>;
};

/** LDAPProvider Serializer */
export type LdapOutpostConfig = {
  pk: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** DN under which objects are accessible. */
  baseDn?: Maybe<Scalars['String']['output']>;
  bindFlowSlug: Scalars['String']['output'];
  /** Prioritise backchannel slug over direct application slug */
  applicationSlug: Scalars['String']['output'];
  /** Users in this group can do search queries. If not set, every user can execute search queries. */
  searchGroup?: Maybe<Scalars['UUID']['output']>;
  certificate?: Maybe<Scalars['UUID']['output']>;
  tlsServerName?: Maybe<Scalars['String']['output']>;
  /** The start for uidNumbers, this number is added to the user.pk to make sure that the numbers aren't too low for POSIX users. Default is 2000 to ensure that we don't collide with local users uidNumber */
  uidStartNumber?: Maybe<Scalars['Int']['output']>;
  /** The start for gidNumbers, this number is added to a number generated from the group.pk to make sure that the numbers aren't too low for POSIX groups. Default is 4000 to ensure that we don't collide with local groups or users primary groups gidNumber */
  gidStartNumber?: Maybe<Scalars['Int']['output']>;
  searchMode?: Maybe<LdapapiAccessMode>;
  bindMode?: Maybe<LdapapiAccessMode>;
  /** When enabled, code-based multi-factor authentication can be used by appending a semicolon and the TOTP code to the password. This should only be enabled if all users that will bind to this provider have a TOTP device configured, as otherwise a password may incorrectly be rejected if it contains a semicolon. */
  mfaSupport?: Maybe<Scalars['Boolean']['output']>;
};

export type LdapapiAccessMode =
  | 'DIRECT'
  | 'CACHED';

export type OutpostsLdapRetrieveResponse = LdapOutpostConfig | ValidationError | GenericError;

export type OutpostsProxyListResponse = PaginatedProxyOutpostConfigList | ValidationError | GenericError;

export type PaginatedProxyOutpostConfigList = {
  pagination: Pagination;
  results: Array<Maybe<ProxyOutpostConfig>>;
};

/** Proxy provider serializer for outposts */
export type ProxyOutpostConfig = {
  pk: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  internalHost?: Maybe<Scalars['URL']['output']>;
  externalHost: Scalars['URL']['output'];
  /** Validate SSL Certificates of upstream servers */
  internalHostSslValidation?: Maybe<Scalars['Boolean']['output']>;
  clientId?: Maybe<Scalars['QueryOutpostsProxyListOneOf_0ResultsItemsClientId']['output']>;
  clientSecret?: Maybe<Scalars['QueryOutpostsProxyListOneOf_0ResultsItemsClientSecret']['output']>;
  oidcConfiguration: OpenIdConnectConfiguration;
  cookieSecret?: Maybe<Scalars['String']['output']>;
  certificate?: Maybe<Scalars['UUID']['output']>;
  /** Regular expressions for which authentication is not required. Each new line is interpreted as a new Regular Expression. */
  skipPathRegex?: Maybe<Scalars['String']['output']>;
  /** Set a custom HTTP-Basic Authentication header based on values from authentik. */
  basicAuthEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** User/Group Attribute used for the password part of the HTTP-Basic Header. */
  basicAuthPasswordAttribute?: Maybe<Scalars['String']['output']>;
  /** User/Group Attribute used for the user part of the HTTP-Basic Header. If not set, the user's Email address is used. */
  basicAuthUserAttribute?: Maybe<Scalars['String']['output']>;
  mode?: Maybe<ProxyMode>;
  cookieDomain?: Maybe<Scalars['String']['output']>;
  /** Get token validity as second count */
  accessTokenValidity?: Maybe<Scalars['Float']['output']>;
  /** When enabled, this provider will intercept the authorization header and authenticate requests based on its value. */
  interceptHeaderAuth?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Get all the scope names the outpost should request,
   * including custom-defined ones
   */
  scopesToRequest: Array<Maybe<Scalars['String']['output']>>;
  /** Internal application name, used in URLs. */
  assignedApplicationSlug: Scalars['String']['output'];
  /** Application's display Name. */
  assignedApplicationName: Scalars['String']['output'];
};

/** rest_framework Serializer for OIDC Configuration */
export type OpenIdConnectConfiguration = {
  issuer: Scalars['String']['output'];
  authorizationEndpoint: Scalars['String']['output'];
  tokenEndpoint: Scalars['String']['output'];
  userinfoEndpoint: Scalars['String']['output'];
  endSessionEndpoint: Scalars['String']['output'];
  introspectionEndpoint: Scalars['String']['output'];
  jwksUri: Scalars['String']['output'];
  responseTypesSupported: Array<Maybe<Scalars['String']['output']>>;
  idTokenSigningAlgValuesSupported: Array<Maybe<Scalars['String']['output']>>;
  subjectTypesSupported: Array<Maybe<Scalars['String']['output']>>;
  tokenEndpointAuthMethodsSupported: Array<Maybe<Scalars['String']['output']>>;
  additionalProperties?: Maybe<Scalars['JSON']['output']>;
};

export type ProxyMode =
  | 'PROXY'
  | 'FORWARD_SINGLE'
  | 'FORWARD_DOMAIN';

export type OutpostsProxyRetrieveResponse = ProxyOutpostConfig | ValidationError | GenericError;

export type OutpostsRadiusListResponse = PaginatedRadiusOutpostConfigList | ValidationError | GenericError;

export type PaginatedRadiusOutpostConfigList = {
  pagination: Pagination;
  results: Array<Maybe<RadiusOutpostConfig>>;
};

/** RadiusProvider Serializer */
export type RadiusOutpostConfig = {
  pk: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  applicationSlug: Scalars['String']['output'];
  authFlowSlug: Scalars['String']['output'];
  /** List of CIDRs (comma-separated) that clients can connect from. A more specific CIDR will match before a looser one. Clients connecting from a non-specified CIDR will be dropped. */
  clientNetworks?: Maybe<Scalars['String']['output']>;
  /** Shared secret between clients and server to hash packets. */
  sharedSecret?: Maybe<Scalars['String']['output']>;
  /** When enabled, code-based multi-factor authentication can be used by appending a semicolon and the TOTP code to the password. This should only be enabled if all users that will bind to this provider have a TOTP device configured, as otherwise a password may incorrectly be rejected if it contains a semicolon. */
  mfaSupport?: Maybe<Scalars['Boolean']['output']>;
};

export type OutpostsRadiusRetrieveResponse = RadiusOutpostConfig | ValidationError | GenericError;

export type OutpostsServiceConnectionsAllListResponse = PaginatedServiceConnectionList | ValidationError | GenericError;

export type PaginatedServiceConnectionList = {
  pagination: Pagination;
  results: Array<Maybe<ServiceConnection>>;
};

export type OutpostsServiceConnectionsAllRetrieveResponse = ServiceConnection | ValidationError | GenericError;

export type OutpostsServiceConnectionsAllStateRetrieveResponse = ServiceConnectionState | ValidationError | GenericError;

/** Serializer for Service connection state */
export type ServiceConnectionState = {
  healthy: Scalars['Boolean']['output'];
  version: Scalars['String']['output'];
};

export type OutpostsServiceConnectionsAllUsedByListResponse = UsedBy | ValidationError | GenericError;

export type OutpostsServiceConnectionsAllTypesListResponse = TypeCreate | ValidationError | GenericError;

export type OutpostsServiceConnectionsDockerListResponse = PaginatedDockerServiceConnectionList | ValidationError | GenericError;

export type PaginatedDockerServiceConnectionList = {
  pagination: Pagination;
  results: Array<Maybe<DockerServiceConnection>>;
};

/** DockerServiceConnection Serializer */
export type DockerServiceConnection = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** If enabled, use the local connection. Required Docker socket/Kubernetes Integration */
  local?: Maybe<Scalars['Boolean']['output']>;
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  /** Can be in the format of 'unix://<path>' when connecting to a local docker daemon, or 'https://<hostname>:2376' when connecting to a remote system. */
  url: Scalars['String']['output'];
  /** CA which the endpoint's Certificate is verified against. Can be left empty for no validation. */
  tlsVerification?: Maybe<Scalars['UUID']['output']>;
  /** Certificate/Key used for authentication. Can be left empty for no authentication. */
  tlsAuthentication?: Maybe<Scalars['UUID']['output']>;
};

export type OutpostsServiceConnectionsDockerRetrieveResponse = DockerServiceConnection | ValidationError | GenericError;

export type OutpostsServiceConnectionsDockerUsedByListResponse = UsedBy | ValidationError | GenericError;

export type OutpostsServiceConnectionsKubernetesListResponse = PaginatedKubernetesServiceConnectionList | ValidationError | GenericError;

export type PaginatedKubernetesServiceConnectionList = {
  pagination: Pagination;
  results: Array<Maybe<KubernetesServiceConnection>>;
};

/** KubernetesServiceConnection Serializer */
export type KubernetesServiceConnection = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** If enabled, use the local connection. Required Docker socket/Kubernetes Integration */
  local?: Maybe<Scalars['Boolean']['output']>;
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  /** Paste your kubeconfig here. authentik will automatically use the currently selected context. */
  kubeconfig?: Maybe<Scalars['JSON']['output']>;
  /** Verify SSL Certificates of the Kubernetes API endpoint */
  verifySsl?: Maybe<Scalars['Boolean']['output']>;
};

export type OutpostsServiceConnectionsKubernetesRetrieveResponse = KubernetesServiceConnection | ValidationError | GenericError;

export type OutpostsServiceConnectionsKubernetesUsedByListResponse = UsedBy | ValidationError | GenericError;

export type PoliciesAllListResponse = PaginatedPolicyList | ValidationError | GenericError;

export type PaginatedPolicyList = {
  pagination: Pagination;
  results: Array<Maybe<Policy>>;
};

/** Policy Serializer */
export type Policy = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged. */
  executionLogging?: Maybe<Scalars['Boolean']['output']>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  /** Return objects policy is bound to */
  boundTo: Scalars['Int']['output'];
  additionalProperties?: Maybe<Scalars['JSON']['output']>;
};

export type PoliciesAllRetrieveResponse = Policy | ValidationError | GenericError;

export type PoliciesAllUsedByListResponse = UsedBy | ValidationError | GenericError;

export type PoliciesAllCacheInfoRetrieveResponse = Cache | ValidationError | GenericError;

export type PoliciesAllTypesListResponse = TypeCreate | ValidationError | GenericError;

export type PoliciesBindingsListResponse = PaginatedPolicyBindingList | ValidationError | GenericError;

export type PaginatedPolicyBindingList = {
  pagination: Pagination;
  results: Array<Maybe<PolicyBinding>>;
};

/** PolicyBinding Serializer */
export type PolicyBinding = {
  pk: Scalars['UUID']['output'];
  policy?: Maybe<Scalars['UUID']['output']>;
  group?: Maybe<Scalars['UUID']['output']>;
  user?: Maybe<Scalars['Int']['output']>;
  policyObj: Policy;
  groupObj: Group;
  userObj: User;
  target: Scalars['UUID']['output'];
  /** Negates the outcome of the policy. Messages are unaffected. */
  negate?: Maybe<Scalars['Boolean']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  order: Scalars['Int']['output'];
  /** Timeout after which Policy execution is terminated. */
  timeout?: Maybe<Scalars['NonNegativeInt']['output']>;
  /** Result if the Policy execution fails. */
  failureResult?: Maybe<Scalars['Boolean']['output']>;
};

export type PoliciesBindingsRetrieveResponse = PolicyBinding | ValidationError | GenericError;

export type PoliciesBindingsUsedByListResponse = UsedBy | ValidationError | GenericError;

export type PoliciesDummyListResponse = PaginatedDummyPolicyList | ValidationError | GenericError;

export type PaginatedDummyPolicyList = {
  pagination: Pagination;
  results: Array<Maybe<DummyPolicy>>;
};

/** Dummy Policy Serializer */
export type DummyPolicy = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged. */
  executionLogging?: Maybe<Scalars['Boolean']['output']>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  /** Return objects policy is bound to */
  boundTo: Scalars['Int']['output'];
  result?: Maybe<Scalars['Boolean']['output']>;
  waitMin?: Maybe<Scalars['Int']['output']>;
  waitMax?: Maybe<Scalars['Int']['output']>;
};

export type PoliciesDummyRetrieveResponse = DummyPolicy | ValidationError | GenericError;

export type PoliciesDummyUsedByListResponse = UsedBy | ValidationError | GenericError;

export type PoliciesEventMatcherListResponse = PaginatedEventMatcherPolicyList | ValidationError | GenericError;

export type PaginatedEventMatcherPolicyList = {
  pagination: Pagination;
  results: Array<Maybe<EventMatcherPolicy>>;
};

/** Event Matcher Policy Serializer */
export type EventMatcherPolicy = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged. */
  executionLogging?: Maybe<Scalars['Boolean']['output']>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  /** Return objects policy is bound to */
  boundTo: Scalars['Int']['output'];
  action?: Maybe<EventActions>;
  /** Matches Event's Client IP (strict matching, for network matching use an Expression Policy) */
  clientIp?: Maybe<Scalars['String']['output']>;
  app?: Maybe<AppEnum>;
  model?: Maybe<ModelEnum>;
};

export type AppEnum =
  | 'AUTHENTIK_TENANTS'
  | 'AUTHENTIK_ADMIN'
  | 'AUTHENTIK_API'
  | 'AUTHENTIK_CRYPTO'
  | 'AUTHENTIK_FLOWS'
  | 'AUTHENTIK_OUTPOSTS'
  | 'AUTHENTIK_POLICIES_DUMMY'
  | 'AUTHENTIK_POLICIES_EVENT_MATCHER'
  | 'AUTHENTIK_POLICIES_EXPIRY'
  | 'AUTHENTIK_POLICIES_EXPRESSION'
  | 'AUTHENTIK_POLICIES_PASSWORD'
  | 'AUTHENTIK_POLICIES_REPUTATION'
  | 'AUTHENTIK_POLICIES'
  | 'AUTHENTIK_PROVIDERS_LDAP'
  | 'AUTHENTIK_PROVIDERS_OAUTH2'
  | 'AUTHENTIK_PROVIDERS_PROXY'
  | 'AUTHENTIK_PROVIDERS_RADIUS'
  | 'AUTHENTIK_PROVIDERS_SAML'
  | 'AUTHENTIK_PROVIDERS_SCIM'
  | 'AUTHENTIK_RBAC'
  | 'AUTHENTIK_RECOVERY'
  | 'AUTHENTIK_SOURCES_LDAP'
  | 'AUTHENTIK_SOURCES_OAUTH'
  | 'AUTHENTIK_SOURCES_PLEX'
  | 'AUTHENTIK_SOURCES_SAML'
  | 'AUTHENTIK_SOURCES_SCIM'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR_DUO'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR_SMS'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR_STATIC'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR_TOTP'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR_VALIDATE'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR_WEBAUTHN'
  | 'AUTHENTIK_STAGES_CAPTCHA'
  | 'AUTHENTIK_STAGES_CONSENT'
  | 'AUTHENTIK_STAGES_DENY'
  | 'AUTHENTIK_STAGES_DUMMY'
  | 'AUTHENTIK_STAGES_EMAIL'
  | 'AUTHENTIK_STAGES_IDENTIFICATION'
  | 'AUTHENTIK_STAGES_INVITATION'
  | 'AUTHENTIK_STAGES_PASSWORD'
  | 'AUTHENTIK_STAGES_PROMPT'
  | 'AUTHENTIK_STAGES_USER_DELETE'
  | 'AUTHENTIK_STAGES_USER_LOGIN'
  | 'AUTHENTIK_STAGES_USER_LOGOUT'
  | 'AUTHENTIK_STAGES_USER_WRITE'
  | 'AUTHENTIK_BRANDS'
  | 'AUTHENTIK_BLUEPRINTS'
  | 'AUTHENTIK_CORE'
  | 'AUTHENTIK_ENTERPRISE'
  | 'AUTHENTIK_ENTERPRISE_AUDIT'
  | 'AUTHENTIK_ENTERPRISE_PROVIDERS_RAC'
  | 'AUTHENTIK_ENTERPRISE_STAGES_SOURCE'
  | 'AUTHENTIK_EVENTS';

export type ModelEnum =
  | 'AUTHENTIK_TENANTS_DOMAIN'
  | 'AUTHENTIK_CRYPTO_CERTIFICATEKEYPAIR'
  | 'AUTHENTIK_FLOWS_FLOW'
  | 'AUTHENTIK_FLOWS_FLOWSTAGEBINDING'
  | 'AUTHENTIK_OUTPOSTS_DOCKERSERVICECONNECTION'
  | 'AUTHENTIK_OUTPOSTS_KUBERNETESSERVICECONNECTION'
  | 'AUTHENTIK_OUTPOSTS_OUTPOST'
  | 'AUTHENTIK_POLICIES_DUMMY_DUMMYPOLICY'
  | 'AUTHENTIK_POLICIES_EVENT_MATCHER_EVENTMATCHERPOLICY'
  | 'AUTHENTIK_POLICIES_EXPIRY_PASSWORDEXPIRYPOLICY'
  | 'AUTHENTIK_POLICIES_EXPRESSION_EXPRESSIONPOLICY'
  | 'AUTHENTIK_POLICIES_PASSWORD_PASSWORDPOLICY'
  | 'AUTHENTIK_POLICIES_REPUTATION_REPUTATIONPOLICY'
  | 'AUTHENTIK_POLICIES_POLICYBINDING'
  | 'AUTHENTIK_PROVIDERS_LDAP_LDAPPROVIDER'
  | 'AUTHENTIK_PROVIDERS_OAUTH2_SCOPEMAPPING'
  | 'AUTHENTIK_PROVIDERS_OAUTH2_OAUTH2PROVIDER'
  | 'AUTHENTIK_PROVIDERS_PROXY_PROXYPROVIDER'
  | 'AUTHENTIK_PROVIDERS_RADIUS_RADIUSPROVIDER'
  | 'AUTHENTIK_PROVIDERS_SAML_SAMLPROVIDER'
  | 'AUTHENTIK_PROVIDERS_SAML_SAMLPROPERTYMAPPING'
  | 'AUTHENTIK_PROVIDERS_SCIM_SCIMPROVIDER'
  | 'AUTHENTIK_PROVIDERS_SCIM_SCIMMAPPING'
  | 'AUTHENTIK_RBAC_ROLE'
  | 'AUTHENTIK_SOURCES_LDAP_LDAPSOURCE'
  | 'AUTHENTIK_SOURCES_LDAP_LDAPPROPERTYMAPPING'
  | 'AUTHENTIK_SOURCES_OAUTH_OAUTHSOURCE'
  | 'AUTHENTIK_SOURCES_OAUTH_USEROAUTHSOURCECONNECTION'
  | 'AUTHENTIK_SOURCES_PLEX_PLEXSOURCE'
  | 'AUTHENTIK_SOURCES_PLEX_PLEXSOURCECONNECTION'
  | 'AUTHENTIK_SOURCES_SAML_SAMLSOURCE'
  | 'AUTHENTIK_SOURCES_SAML_USERSAMLSOURCECONNECTION'
  | 'AUTHENTIK_SOURCES_SCIM_SCIMSOURCE'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR_DUO_AUTHENTICATORDUOSTAGE'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR_DUO_DUODEVICE'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR_SMS_AUTHENTICATORSMSSTAGE'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR_SMS_SMSDEVICE'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR_STATIC_AUTHENTICATORSTATICSTAGE'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR_STATIC_STATICDEVICE'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR_TOTP_AUTHENTICATORTOTPSTAGE'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR_TOTP_TOTPDEVICE'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR_VALIDATE_AUTHENTICATORVALIDATESTAGE'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR_WEBAUTHN_AUTHENTICATORWEBAUTHNSTAGE'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR_WEBAUTHN_WEBAUTHNDEVICE'
  | 'AUTHENTIK_STAGES_CAPTCHA_CAPTCHASTAGE'
  | 'AUTHENTIK_STAGES_CONSENT_CONSENTSTAGE'
  | 'AUTHENTIK_STAGES_CONSENT_USERCONSENT'
  | 'AUTHENTIK_STAGES_DENY_DENYSTAGE'
  | 'AUTHENTIK_STAGES_DUMMY_DUMMYSTAGE'
  | 'AUTHENTIK_STAGES_EMAIL_EMAILSTAGE'
  | 'AUTHENTIK_STAGES_IDENTIFICATION_IDENTIFICATIONSTAGE'
  | 'AUTHENTIK_STAGES_INVITATION_INVITATIONSTAGE'
  | 'AUTHENTIK_STAGES_INVITATION_INVITATION'
  | 'AUTHENTIK_STAGES_PASSWORD_PASSWORDSTAGE'
  | 'AUTHENTIK_STAGES_PROMPT_PROMPT'
  | 'AUTHENTIK_STAGES_PROMPT_PROMPTSTAGE'
  | 'AUTHENTIK_STAGES_USER_DELETE_USERDELETESTAGE'
  | 'AUTHENTIK_STAGES_USER_LOGIN_USERLOGINSTAGE'
  | 'AUTHENTIK_STAGES_USER_LOGOUT_USERLOGOUTSTAGE'
  | 'AUTHENTIK_STAGES_USER_WRITE_USERWRITESTAGE'
  | 'AUTHENTIK_BRANDS_BRAND'
  | 'AUTHENTIK_BLUEPRINTS_BLUEPRINTINSTANCE'
  | 'AUTHENTIK_CORE_GROUP'
  | 'AUTHENTIK_CORE_USER'
  | 'AUTHENTIK_CORE_APPLICATION'
  | 'AUTHENTIK_CORE_TOKEN'
  | 'AUTHENTIK_ENTERPRISE_LICENSE'
  | 'AUTHENTIK_PROVIDERS_RAC_RACPROVIDER'
  | 'AUTHENTIK_PROVIDERS_RAC_ENDPOINT'
  | 'AUTHENTIK_PROVIDERS_RAC_RACPROPERTYMAPPING'
  | 'AUTHENTIK_STAGES_SOURCE_SOURCESTAGE'
  | 'AUTHENTIK_EVENTS_EVENT'
  | 'AUTHENTIK_EVENTS_NOTIFICATIONTRANSPORT'
  | 'AUTHENTIK_EVENTS_NOTIFICATION'
  | 'AUTHENTIK_EVENTS_NOTIFICATIONRULE'
  | 'AUTHENTIK_EVENTS_NOTIFICATIONWEBHOOKMAPPING';

/** Match created events with this action type. When left empty, all action types will be matched. */
export type QueryInputPoliciesEventMatcherListAction =
  | 'AUTHORIZE_APPLICATION'
  | 'CONFIGURATION_ERROR'
  | 'CUSTOM_'
  | 'EMAIL_SENT'
  | 'FLOW_EXECUTION'
  | 'IMPERSONATION_ENDED'
  | 'IMPERSONATION_STARTED'
  | 'INVITATION_USED'
  | 'LOGIN'
  | 'LOGIN_FAILED'
  | 'LOGOUT'
  | 'MODEL_CREATED'
  | 'MODEL_DELETED'
  | 'MODEL_UPDATED'
  | 'PASSWORD_SET'
  | 'POLICY_EXCEPTION'
  | 'POLICY_EXECUTION'
  | 'PROPERTY_MAPPING_EXCEPTION'
  | 'SECRET_ROTATE'
  | 'SECRET_VIEW'
  | 'SOURCE_LINKED'
  | 'SUSPICIOUS_REQUEST'
  | 'SYSTEM_EXCEPTION'
  | 'SYSTEM_TASK_EXCEPTION'
  | 'SYSTEM_TASK_EXECUTION'
  | 'UPDATE_AVAILABLE'
  | 'USER_WRITE';

export type PoliciesEventMatcherRetrieveResponse = EventMatcherPolicy | ValidationError | GenericError;

export type PoliciesEventMatcherUsedByListResponse = UsedBy | ValidationError | GenericError;

export type PoliciesExpressionListResponse = PaginatedExpressionPolicyList | ValidationError | GenericError;

export type PaginatedExpressionPolicyList = {
  pagination: Pagination;
  results: Array<Maybe<ExpressionPolicy>>;
};

/** Group Membership Policy Serializer */
export type ExpressionPolicy = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged. */
  executionLogging?: Maybe<Scalars['Boolean']['output']>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  /** Return objects policy is bound to */
  boundTo: Scalars['Int']['output'];
  expression: Scalars['String']['output'];
};

export type PoliciesExpressionRetrieveResponse = ExpressionPolicy | ValidationError | GenericError;

export type PoliciesExpressionUsedByListResponse = UsedBy | ValidationError | GenericError;

export type PoliciesPasswordListResponse = PaginatedPasswordPolicyList | ValidationError | GenericError;

export type PaginatedPasswordPolicyList = {
  pagination: Pagination;
  results: Array<Maybe<PasswordPolicy>>;
};

/** Password Policy Serializer */
export type PasswordPolicy = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged. */
  executionLogging?: Maybe<Scalars['Boolean']['output']>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  /** Return objects policy is bound to */
  boundTo: Scalars['Int']['output'];
  /** Field key to check, field keys defined in Prompt stages are available. */
  passwordField?: Maybe<Scalars['String']['output']>;
  amountDigits?: Maybe<Scalars['NonNegativeInt']['output']>;
  amountUppercase?: Maybe<Scalars['NonNegativeInt']['output']>;
  amountLowercase?: Maybe<Scalars['NonNegativeInt']['output']>;
  amountSymbols?: Maybe<Scalars['NonNegativeInt']['output']>;
  lengthMin?: Maybe<Scalars['NonNegativeInt']['output']>;
  symbolCharset?: Maybe<Scalars['String']['output']>;
  errorMessage?: Maybe<Scalars['String']['output']>;
  checkStaticRules?: Maybe<Scalars['Boolean']['output']>;
  checkHaveIBeenPwned?: Maybe<Scalars['Boolean']['output']>;
  checkZxcvbn?: Maybe<Scalars['Boolean']['output']>;
  /** How many times the password hash is allowed to be on haveibeenpwned */
  hibpAllowedCount?: Maybe<Scalars['NonNegativeInt']['output']>;
  /** If the zxcvbn score is equal or less than this value, the policy will fail. */
  zxcvbnScoreThreshold?: Maybe<Scalars['NonNegativeInt']['output']>;
};

export type PoliciesPasswordRetrieveResponse = PasswordPolicy | ValidationError | GenericError;

export type PoliciesPasswordUsedByListResponse = UsedBy | ValidationError | GenericError;

export type PoliciesPasswordExpiryListResponse = PaginatedPasswordExpiryPolicyList | ValidationError | GenericError;

export type PaginatedPasswordExpiryPolicyList = {
  pagination: Pagination;
  results: Array<Maybe<PasswordExpiryPolicy>>;
};

/** Password Expiry Policy Serializer */
export type PasswordExpiryPolicy = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged. */
  executionLogging?: Maybe<Scalars['Boolean']['output']>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  /** Return objects policy is bound to */
  boundTo: Scalars['Int']['output'];
  days: Scalars['Int']['output'];
  denyOnly?: Maybe<Scalars['Boolean']['output']>;
};

export type PoliciesPasswordExpiryRetrieveResponse = PasswordExpiryPolicy | ValidationError | GenericError;

export type PoliciesPasswordExpiryUsedByListResponse = UsedBy | ValidationError | GenericError;

export type PoliciesReputationListResponse = PaginatedReputationPolicyList | ValidationError | GenericError;

export type PaginatedReputationPolicyList = {
  pagination: Pagination;
  results: Array<Maybe<ReputationPolicy>>;
};

/** Reputation Policy Serializer */
export type ReputationPolicy = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged. */
  executionLogging?: Maybe<Scalars['Boolean']['output']>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  /** Return objects policy is bound to */
  boundTo: Scalars['Int']['output'];
  checkIp?: Maybe<Scalars['Boolean']['output']>;
  checkUsername?: Maybe<Scalars['Boolean']['output']>;
  threshold?: Maybe<Scalars['Int']['output']>;
};

export type PoliciesReputationRetrieveResponse = ReputationPolicy | ValidationError | GenericError;

export type PoliciesReputationUsedByListResponse = UsedBy | ValidationError | GenericError;

export type PoliciesReputationScoresListResponse = PaginatedReputationList | ValidationError | GenericError;

export type PaginatedReputationList = {
  pagination: Pagination;
  results: Array<Maybe<Reputation>>;
};

/** Reputation Serializer */
export type Reputation = {
  pk?: Maybe<Scalars['UUID']['output']>;
  identifier: Scalars['String']['output'];
  ip: Scalars['String']['output'];
  ipGeoData?: Maybe<Scalars['JSON']['output']>;
  ipAsnData?: Maybe<Scalars['JSON']['output']>;
  score?: Maybe<Scalars['BigInt']['output']>;
  updated: Scalars['DateTime']['output'];
};

export type PoliciesReputationScoresRetrieveResponse = Reputation | ValidationError | GenericError;

export type PoliciesReputationScoresUsedByListResponse = UsedBy | ValidationError | GenericError;

export type PropertymappingsAllListResponse = PaginatedPropertyMappingList | ValidationError | GenericError;

export type PaginatedPropertyMappingList = {
  pagination: Pagination;
  results: Array<Maybe<PropertyMapping>>;
};

/** PropertyMapping Serializer */
export type PropertyMapping = {
  pk: Scalars['UUID']['output'];
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  expression: Scalars['String']['output'];
  /** Get object's component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
};

export type PropertymappingsAllRetrieveResponse = PropertyMapping | ValidationError | GenericError;

export type PropertymappingsAllUsedByListResponse = UsedBy | ValidationError | GenericError;

export type PropertymappingsAllTypesListResponse = TypeCreate | ValidationError | GenericError;

export type PropertymappingsLdapListResponse = PaginatedLdapPropertyMappingList | ValidationError | GenericError;

export type PaginatedLdapPropertyMappingList = {
  pagination: Pagination;
  results: Array<Maybe<LdapPropertyMapping>>;
};

/** LDAP PropertyMapping Serializer */
export type LdapPropertyMapping = {
  pk: Scalars['UUID']['output'];
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  expression: Scalars['String']['output'];
  /** Get object's component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  objectField: Scalars['String']['output'];
};

export type PropertymappingsLdapRetrieveResponse = LdapPropertyMapping | ValidationError | GenericError;

export type PropertymappingsLdapUsedByListResponse = UsedBy | ValidationError | GenericError;

export type PropertymappingsNotificationListResponse = PaginatedNotificationWebhookMappingList | ValidationError | GenericError;

export type PaginatedNotificationWebhookMappingList = {
  pagination: Pagination;
  results: Array<Maybe<NotificationWebhookMapping>>;
};

/** NotificationWebhookMapping Serializer */
export type NotificationWebhookMapping = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  expression: Scalars['String']['output'];
};

export type PropertymappingsNotificationRetrieveResponse = NotificationWebhookMapping | ValidationError | GenericError;

export type PropertymappingsNotificationUsedByListResponse = UsedBy | ValidationError | GenericError;

export type PropertymappingsRacListResponse = PaginatedRacPropertyMappingList | ValidationError | GenericError;

export type PaginatedRacPropertyMappingList = {
  pagination: Pagination;
  results: Array<Maybe<RacPropertyMapping>>;
};

/** RACPropertyMapping Serializer */
export type RacPropertyMapping = {
  pk: Scalars['UUID']['output'];
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  expression?: Maybe<Scalars['String']['output']>;
  /** Get object's component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  staticSettings: Scalars['JSON']['output'];
};

export type PropertymappingsRacRetrieveResponse = RacPropertyMapping | ValidationError | GenericError;

export type PropertymappingsRacUsedByListResponse = UsedBy | ValidationError | GenericError;

export type PropertymappingsSamlListResponse = PaginatedSamlPropertyMappingList | ValidationError | GenericError;

export type PaginatedSamlPropertyMappingList = {
  pagination: Pagination;
  results: Array<Maybe<SamlPropertyMapping>>;
};

/** SAMLPropertyMapping Serializer */
export type SamlPropertyMapping = {
  pk: Scalars['UUID']['output'];
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  expression: Scalars['String']['output'];
  /** Get object's component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  samlName: Scalars['String']['output'];
  friendlyName?: Maybe<Scalars['String']['output']>;
};

export type PropertymappingsSamlRetrieveResponse = SamlPropertyMapping | ValidationError | GenericError;

export type PropertymappingsSamlUsedByListResponse = UsedBy | ValidationError | GenericError;

export type PropertymappingsScimListResponse = PaginatedScimMappingList | ValidationError | GenericError;

export type PaginatedScimMappingList = {
  pagination: Pagination;
  results: Array<Maybe<ScimMapping>>;
};

/** SCIMMapping Serializer */
export type ScimMapping = {
  pk: Scalars['UUID']['output'];
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  expression: Scalars['String']['output'];
  /** Get object's component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
};

export type PropertymappingsScimRetrieveResponse = ScimMapping | ValidationError | GenericError;

export type PropertymappingsScimUsedByListResponse = UsedBy | ValidationError | GenericError;

export type PropertymappingsScopeListResponse = PaginatedScopeMappingList | ValidationError | GenericError;

export type PaginatedScopeMappingList = {
  pagination: Pagination;
  results: Array<Maybe<ScopeMapping>>;
};

/** ScopeMapping Serializer */
export type ScopeMapping = {
  pk: Scalars['UUID']['output'];
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  expression: Scalars['String']['output'];
  /** Get object's component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  /** Scope name requested by the client */
  scopeName: Scalars['String']['output'];
  /** Description shown to the user when consenting. If left empty, the user won't be informed. */
  description?: Maybe<Scalars['String']['output']>;
};

export type PropertymappingsScopeRetrieveResponse = ScopeMapping | ValidationError | GenericError;

export type PropertymappingsScopeUsedByListResponse = UsedBy | ValidationError | GenericError;

export type ProvidersAllListResponse = PaginatedProviderList | ValidationError | GenericError;

export type PaginatedProviderList = {
  pagination: Pagination;
  results: Array<Maybe<Provider>>;
};

export type ProvidersAllRetrieveResponse = Provider | ValidationError | GenericError;

export type ProvidersAllUsedByListResponse = UsedBy | ValidationError | GenericError;

export type ProvidersAllTypesListResponse = TypeCreate | ValidationError | GenericError;

export type ProvidersLdapListResponse = PaginatedLdapProviderList | ValidationError | GenericError;

export type PaginatedLdapProviderList = {
  pagination: Pagination;
  results: Array<Maybe<LdapProvider>>;
};

/** LDAPProvider Serializer */
export type LdapProvider = {
  pk: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** Flow used for authentication when the associated application is accessed by an un-authenticated user. */
  authenticationFlow?: Maybe<Scalars['UUID']['output']>;
  /** Flow used when authorizing this provider. */
  authorizationFlow: Scalars['UUID']['output'];
  propertyMappings?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Internal application name, used in URLs. */
  assignedApplicationSlug: Scalars['String']['output'];
  /** Application's display Name. */
  assignedApplicationName: Scalars['String']['output'];
  /** Internal application name, used in URLs. */
  assignedBackchannelApplicationSlug: Scalars['String']['output'];
  /** Application's display Name. */
  assignedBackchannelApplicationName: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  /** DN under which objects are accessible. */
  baseDn?: Maybe<Scalars['String']['output']>;
  /** Users in this group can do search queries. If not set, every user can execute search queries. */
  searchGroup?: Maybe<Scalars['UUID']['output']>;
  certificate?: Maybe<Scalars['UUID']['output']>;
  tlsServerName?: Maybe<Scalars['String']['output']>;
  /** The start for uidNumbers, this number is added to the user.pk to make sure that the numbers aren't too low for POSIX users. Default is 2000 to ensure that we don't collide with local users uidNumber */
  uidStartNumber?: Maybe<Scalars['Int']['output']>;
  /** The start for gidNumbers, this number is added to a number generated from the group.pk to make sure that the numbers aren't too low for POSIX groups. Default is 4000 to ensure that we don't collide with local groups or users primary groups gidNumber */
  gidStartNumber?: Maybe<Scalars['Int']['output']>;
  outpostSet: Array<Maybe<Scalars['String']['output']>>;
  searchMode?: Maybe<LdapapiAccessMode>;
  bindMode?: Maybe<LdapapiAccessMode>;
  /** When enabled, code-based multi-factor authentication can be used by appending a semicolon and the TOTP code to the password. This should only be enabled if all users that will bind to this provider have a TOTP device configured, as otherwise a password may incorrectly be rejected if it contains a semicolon. */
  mfaSupport?: Maybe<Scalars['Boolean']['output']>;
};

export type ProvidersLdapRetrieveResponse = LdapProvider | ValidationError | GenericError;

export type ProvidersLdapUsedByListResponse = UsedBy | ValidationError | GenericError;

export type ProvidersOauth2ListResponse = PaginatedOAuth2ProviderList | ValidationError | GenericError;

export type PaginatedOAuth2ProviderList = {
  pagination: Pagination;
  results: Array<Maybe<OAuth2Provider>>;
};

/** Confidential clients are capable of maintaining the confidentiality of their credentials. Public clients are incapable */
export type QueryInputProvidersOauth2ListClientType =
  | 'CONFIDENTIAL'
  | 'PUBLIC';

/** Configure how the issuer field of the ID Token should be filled. */
export type QueryInputProvidersOauth2ListIssuerMode =
  | 'GLOBAL'
  | 'PER_PROVIDER';

/** Configure what data should be used as unique User Identifier. For most cases, the default should be fine. */
export type QueryInputProvidersOauth2ListSubMode =
  | 'HASHED_USER_ID'
  | 'USER_EMAIL'
  | 'USER_ID'
  | 'USER_UPN'
  | 'USER_USERNAME'
  | 'USER_UUID';

export type ProvidersOauth2RetrieveResponse = OAuth2Provider | ValidationError | GenericError;

export type ProvidersOauth2PreviewUserRetrieveResponse = PropertyMappingPreview | GenericError;

/** Preview how the current user is mapped via the property mappings selected in a provider */
export type PropertyMappingPreview = {
  preview: Scalars['JSON']['output'];
};

export type ProvidersOauth2SetupUrlsRetrieveResponse = OAuth2ProviderSetupUrLs | ValidationError | GenericError;

/** OAuth2 Provider Metadata serializer */
export type OAuth2ProviderSetupUrLs = {
  issuer: Scalars['String']['output'];
  authorize: Scalars['String']['output'];
  token: Scalars['String']['output'];
  userInfo: Scalars['String']['output'];
  providerInfo: Scalars['String']['output'];
  logout: Scalars['String']['output'];
  jwks: Scalars['String']['output'];
};

export type ProvidersOauth2UsedByListResponse = UsedBy | ValidationError | GenericError;

export type ProvidersProxyListResponse = PaginatedProxyProviderList | ValidationError | GenericError;

export type PaginatedProxyProviderList = {
  pagination: Pagination;
  results: Array<Maybe<ProxyProvider>>;
};

/** ProxyProvider Serializer */
export type ProxyProvider = {
  pk: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** Flow used for authentication when the associated application is accessed by an un-authenticated user. */
  authenticationFlow?: Maybe<Scalars['UUID']['output']>;
  /** Flow used when authorizing this provider. */
  authorizationFlow: Scalars['UUID']['output'];
  propertyMappings?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Internal application name, used in URLs. */
  assignedApplicationSlug: Scalars['String']['output'];
  /** Application's display Name. */
  assignedApplicationName: Scalars['String']['output'];
  /** Internal application name, used in URLs. */
  assignedBackchannelApplicationSlug: Scalars['String']['output'];
  /** Application's display Name. */
  assignedBackchannelApplicationName: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  clientId: Scalars['String']['output'];
  internalHost?: Maybe<Scalars['URL']['output']>;
  externalHost: Scalars['URL']['output'];
  /** Validate SSL Certificates of upstream servers */
  internalHostSslValidation?: Maybe<Scalars['Boolean']['output']>;
  certificate?: Maybe<Scalars['UUID']['output']>;
  /** Regular expressions for which authentication is not required. Each new line is interpreted as a new Regular Expression. */
  skipPathRegex?: Maybe<Scalars['String']['output']>;
  /** Set a custom HTTP-Basic Authentication header based on values from authentik. */
  basicAuthEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** User/Group Attribute used for the password part of the HTTP-Basic Header. */
  basicAuthPasswordAttribute?: Maybe<Scalars['String']['output']>;
  /** User/Group Attribute used for the user part of the HTTP-Basic Header. If not set, the user's Email address is used. */
  basicAuthUserAttribute?: Maybe<Scalars['String']['output']>;
  mode?: Maybe<ProxyMode>;
  /** When enabled, this provider will intercept the authorization header and authenticate requests based on its value. */
  interceptHeaderAuth?: Maybe<Scalars['Boolean']['output']>;
  redirectUris: Scalars['String']['output'];
  cookieDomain?: Maybe<Scalars['String']['output']>;
  jwksSources?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  /** Tokens not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  accessTokenValidity?: Maybe<Scalars['String']['output']>;
  /** Tokens not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  refreshTokenValidity?: Maybe<Scalars['String']['output']>;
  outpostSet: Array<Maybe<Scalars['String']['output']>>;
};

export type ProvidersProxyRetrieveResponse = ProxyProvider | ValidationError | GenericError;

export type ProvidersProxyUsedByListResponse = UsedBy | ValidationError | GenericError;

export type ProvidersRacListResponse = PaginatedRacProviderList | ValidationError | GenericError;

export type PaginatedRacProviderList = {
  pagination: Pagination;
  results: Array<Maybe<RacProvider>>;
};

/** RACProvider Serializer */
export type RacProvider = {
  pk: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** Flow used for authentication when the associated application is accessed by an un-authenticated user. */
  authenticationFlow?: Maybe<Scalars['UUID']['output']>;
  /** Flow used when authorizing this provider. */
  authorizationFlow: Scalars['UUID']['output'];
  propertyMappings?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Internal application name, used in URLs. */
  assignedApplicationSlug: Scalars['String']['output'];
  /** Application's display Name. */
  assignedApplicationName: Scalars['String']['output'];
  /** Internal application name, used in URLs. */
  assignedBackchannelApplicationSlug: Scalars['String']['output'];
  /** Application's display Name. */
  assignedBackchannelApplicationName: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  settings?: Maybe<Scalars['JSON']['output']>;
  outpostSet: Array<Maybe<Scalars['String']['output']>>;
  /** Determines how long a session lasts. Default of 0 means that the sessions lasts until the browser is closed. (Format: hours=-1;minutes=-2;seconds=-3) */
  connectionExpiry?: Maybe<Scalars['String']['output']>;
  /** When set to true, connection tokens will be deleted upon disconnect. */
  deleteTokenOnDisconnect?: Maybe<Scalars['Boolean']['output']>;
  additionalProperties?: Maybe<Scalars['JSON']['output']>;
};

export type ProvidersRacRetrieveResponse = RacProvider | ValidationError | GenericError;

export type ProvidersRacUsedByListResponse = UsedBy | ValidationError | GenericError;

export type ProvidersRadiusListResponse = PaginatedRadiusProviderList | ValidationError | GenericError;

export type PaginatedRadiusProviderList = {
  pagination: Pagination;
  results: Array<Maybe<RadiusProvider>>;
};

/** RadiusProvider Serializer */
export type RadiusProvider = {
  pk: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** Flow used for authentication when the associated application is accessed by an un-authenticated user. */
  authenticationFlow?: Maybe<Scalars['UUID']['output']>;
  /** Flow used when authorizing this provider. */
  authorizationFlow: Scalars['UUID']['output'];
  propertyMappings?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Internal application name, used in URLs. */
  assignedApplicationSlug: Scalars['String']['output'];
  /** Application's display Name. */
  assignedApplicationName: Scalars['String']['output'];
  /** Internal application name, used in URLs. */
  assignedBackchannelApplicationSlug: Scalars['String']['output'];
  /** Application's display Name. */
  assignedBackchannelApplicationName: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  /** List of CIDRs (comma-separated) that clients can connect from. A more specific CIDR will match before a looser one. Clients connecting from a non-specified CIDR will be dropped. */
  clientNetworks?: Maybe<Scalars['String']['output']>;
  /** Shared secret between clients and server to hash packets. */
  sharedSecret?: Maybe<Scalars['String']['output']>;
  outpostSet: Array<Maybe<Scalars['String']['output']>>;
  /** When enabled, code-based multi-factor authentication can be used by appending a semicolon and the TOTP code to the password. This should only be enabled if all users that will bind to this provider have a TOTP device configured, as otherwise a password may incorrectly be rejected if it contains a semicolon. */
  mfaSupport?: Maybe<Scalars['Boolean']['output']>;
};

export type ProvidersRadiusRetrieveResponse = RadiusProvider | ValidationError | GenericError;

export type ProvidersRadiusUsedByListResponse = UsedBy | ValidationError | GenericError;

export type ProvidersSamlListResponse = PaginatedSamlProviderList | ValidationError | GenericError;

export type PaginatedSamlProviderList = {
  pagination: Pagination;
  results: Array<Maybe<SamlProvider>>;
};

/** SAMLProvider Serializer */
export type SamlProvider = {
  pk: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** Flow used for authentication when the associated application is accessed by an un-authenticated user. */
  authenticationFlow?: Maybe<Scalars['UUID']['output']>;
  /** Flow used when authorizing this provider. */
  authorizationFlow: Scalars['UUID']['output'];
  propertyMappings?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Internal application name, used in URLs. */
  assignedApplicationSlug: Scalars['String']['output'];
  /** Application's display Name. */
  assignedApplicationName: Scalars['String']['output'];
  /** Internal application name, used in URLs. */
  assignedBackchannelApplicationSlug: Scalars['String']['output'];
  /** Application's display Name. */
  assignedBackchannelApplicationName: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  acsUrl: Scalars['URL']['output'];
  /** Value of the audience restriction field of the assertion. When left empty, no audience restriction will be added. */
  audience?: Maybe<Scalars['String']['output']>;
  /** Also known as EntityID */
  issuer?: Maybe<Scalars['String']['output']>;
  /** Assertion valid not before current time + this value (Format: hours=-1;minutes=-2;seconds=-3). */
  assertionValidNotBefore?: Maybe<Scalars['String']['output']>;
  /** Assertion not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  assertionValidNotOnOrAfter?: Maybe<Scalars['String']['output']>;
  /** Session not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  sessionValidNotOnOrAfter?: Maybe<Scalars['String']['output']>;
  /** Configure how the NameID value will be created. When left empty, the NameIDPolicy of the incoming request will be considered */
  nameIdMapping?: Maybe<Scalars['UUID']['output']>;
  digestAlgorithm?: Maybe<DigestAlgorithmEnum>;
  signatureAlgorithm?: Maybe<SignatureAlgorithmEnum>;
  /** Keypair used to sign outgoing Responses going to the Service Provider. */
  signingKp?: Maybe<Scalars['UUID']['output']>;
  /** When selected, incoming assertion's Signatures will be validated against this certificate. To allow unsigned Requests, leave on default. */
  verificationKp?: Maybe<Scalars['UUID']['output']>;
  /** This determines how authentik sends the response back to the Service Provider. */
  spBinding?: Maybe<ServiceProviderBinding>;
  /** Default relay_state value for IDP-initiated logins */
  defaultRelayState?: Maybe<Scalars['String']['output']>;
  /** Get metadata download URL */
  urlDownloadMetadata: Scalars['String']['output'];
  /** Get SSO Post URL */
  urlSsoPost: Scalars['String']['output'];
  /** Get SSO Redirect URL */
  urlSsoRedirect: Scalars['String']['output'];
  /** Get SSO IDP-Initiated URL */
  urlSsoInit: Scalars['String']['output'];
  /** Get SLO POST URL */
  urlSloPost: Scalars['String']['output'];
  /** Get SLO redirect URL */
  urlSloRedirect: Scalars['String']['output'];
};

export type DigestAlgorithmEnum =
  | 'HTTP___WWW_W3_ORG_2000_09_XMLDSIG_POUND_SHA1'
  | 'HTTP___WWW_W3_ORG_2001_04_XMLENC_POUND_SHA256'
  | 'HTTP___WWW_W3_ORG_2001_04_XMLDSIG_MORE_POUND_SHA384'
  | 'HTTP___WWW_W3_ORG_2001_04_XMLENC_POUND_SHA512';

export type SignatureAlgorithmEnum =
  | 'HTTP___WWW_W3_ORG_2000_09_XMLDSIG_POUND_RSA_SHA1'
  | 'HTTP___WWW_W3_ORG_2001_04_XMLDSIG_MORE_POUND_RSA_SHA256'
  | 'HTTP___WWW_W3_ORG_2001_04_XMLDSIG_MORE_POUND_RSA_SHA384'
  | 'HTTP___WWW_W3_ORG_2001_04_XMLDSIG_MORE_POUND_RSA_SHA512'
  | 'HTTP___WWW_W3_ORG_2001_04_XMLDSIG_MORE_POUND_ECDSA_SHA1'
  | 'HTTP___WWW_W3_ORG_2001_04_XMLDSIG_MORE_POUND_ECDSA_SHA256'
  | 'HTTP___WWW_W3_ORG_2001_04_XMLDSIG_MORE_POUND_ECDSA_SHA384'
  | 'HTTP___WWW_W3_ORG_2001_04_XMLDSIG_MORE_POUND_ECDSA_SHA512'
  | 'HTTP___WWW_W3_ORG_2000_09_XMLDSIG_POUND_DSA_SHA1';

/** This determines how authentik sends the response back to the Service Provider. */
export type ServiceProviderBinding = {
  spBindingEnum?: Maybe<SpBindingEnum>;
};

export type SpBindingEnum =
  | 'REDIRECT'
  | 'POST';

export type QueryInputProvidersSamlListDigestAlgorithm =
  | 'HTTP___WWW_W3_ORG_2000_09_XMLDSIG_POUND_SHA1'
  | 'HTTP___WWW_W3_ORG_2001_04_XMLDSIG_MORE_POUND_SHA384'
  | 'HTTP___WWW_W3_ORG_2001_04_XMLENC_POUND_SHA256'
  | 'HTTP___WWW_W3_ORG_2001_04_XMLENC_POUND_SHA512';

export type QueryInputProvidersSamlListSignatureAlgorithm =
  | 'HTTP___WWW_W3_ORG_2000_09_XMLDSIG_POUND_DSA_SHA1'
  | 'HTTP___WWW_W3_ORG_2000_09_XMLDSIG_POUND_RSA_SHA1'
  | 'HTTP___WWW_W3_ORG_2001_04_XMLDSIG_MORE_POUND_ECDSA_SHA1'
  | 'HTTP___WWW_W3_ORG_2001_04_XMLDSIG_MORE_POUND_ECDSA_SHA256'
  | 'HTTP___WWW_W3_ORG_2001_04_XMLDSIG_MORE_POUND_ECDSA_SHA384'
  | 'HTTP___WWW_W3_ORG_2001_04_XMLDSIG_MORE_POUND_ECDSA_SHA512'
  | 'HTTP___WWW_W3_ORG_2001_04_XMLDSIG_MORE_POUND_RSA_SHA256'
  | 'HTTP___WWW_W3_ORG_2001_04_XMLDSIG_MORE_POUND_RSA_SHA384'
  | 'HTTP___WWW_W3_ORG_2001_04_XMLDSIG_MORE_POUND_RSA_SHA512';

/** This determines how authentik sends the response back to the Service Provider. */
export type QueryInputProvidersSamlListSpBinding =
  | 'POST'
  | 'REDIRECT';

export type ProvidersSamlRetrieveResponse = SamlProvider | ValidationError | GenericError;

export type ProvidersSamlMetadataRetrieveResponse = SamlMetadata | ValidationError | GenericError;

/** SAML Provider Metadata serializer */
export type SamlMetadata = {
  metadata: Scalars['String']['output'];
  downloadUrl: Scalars['String']['output'];
};

/** Optionally force the metadata to only include one binding. */
export type QueryInputProvidersSamlMetadataRetrieveForceBinding =
  | 'URN_OASIS_NAMES_TC_SAML_2_0_BINDINGS_HTTP_POST'
  | 'URN_OASIS_NAMES_TC_SAML_2_0_BINDINGS_HTTP_REDIRECT';

export type ProvidersSamlPreviewUserRetrieveResponse = PropertyMappingPreview | GenericError;

export type ProvidersSamlUsedByListResponse = UsedBy | ValidationError | GenericError;

export type ProvidersScimListResponse = PaginatedScimProviderList | ValidationError | GenericError;

export type PaginatedScimProviderList = {
  pagination: Pagination;
  results: Array<Maybe<ScimProvider>>;
};

/** SCIMProvider Serializer */
export type ScimProvider = {
  pk: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  propertyMappings?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  /** Property mappings used for group creation/updating. */
  propertyMappingsGroup?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Internal application name, used in URLs. */
  assignedBackchannelApplicationSlug: Scalars['String']['output'];
  /** Application's display Name. */
  assignedBackchannelApplicationName: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  /** Base URL to SCIM requests, usually ends in /v2 */
  url: Scalars['String']['output'];
  /** Authentication token */
  token: Scalars['String']['output'];
  excludeUsersServiceAccount?: Maybe<Scalars['Boolean']['output']>;
  filterGroup?: Maybe<Scalars['UUID']['output']>;
};

export type ProvidersScimRetrieveResponse = ScimProvider | ValidationError | GenericError;

export type ProvidersScimSyncStatusRetrieveResponse = ScimSyncStatus | ValidationError | GenericError;

/** SCIM Provider sync status */
export type ScimSyncStatus = {
  isRunning: Scalars['Boolean']['output'];
  tasks: Array<Maybe<SystemTask>>;
};

export type ProvidersScimUsedByListResponse = UsedBy | ValidationError | GenericError;

export type RacConnectionTokensListResponse = PaginatedConnectionTokenList | ValidationError | GenericError;

export type PaginatedConnectionTokenList = {
  pagination: Pagination;
  results: Array<Maybe<ConnectionToken>>;
};

/** ConnectionToken Serializer */
export type ConnectionToken = {
  pk?: Maybe<Scalars['UUID']['output']>;
  provider: Scalars['Int']['output'];
  providerObj: RacProvider;
  endpoint: Scalars['UUID']['output'];
  endpointObj: Endpoint;
  user: GroupMember;
};

/** Endpoint Serializer */
export type Endpoint = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  provider: Scalars['Int']['output'];
  providerObj: RacProvider;
  protocol: ProtocolEnum;
  host: Scalars['String']['output'];
  settings?: Maybe<Scalars['JSON']['output']>;
  propertyMappings?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  authMode: AuthModeEnum;
  /**
   * Build actual launch URL (the provider itself does not have one, just
   * individual endpoints)
   */
  launchUrl?: Maybe<Scalars['String']['output']>;
  maximumConnections?: Maybe<Scalars['Int']['output']>;
  additionalProperties?: Maybe<Scalars['JSON']['output']>;
};

export type ProtocolEnum =
  | 'RDP'
  | 'VNC'
  | 'SSH';

export type AuthModeEnum =
  | 'STATIC'
  | 'PROMPT';

export type RacConnectionTokensRetrieveResponse = ConnectionToken | ValidationError | GenericError;

export type RacConnectionTokensUsedByListResponse = UsedBy | ValidationError | GenericError;

export type RacEndpointsListResponse = PaginatedEndpointList | GenericError;

export type PaginatedEndpointList = {
  pagination: Pagination;
  results: Array<Maybe<Endpoint>>;
};

export type RacEndpointsRetrieveResponse = Endpoint | ValidationError | GenericError;

export type RacEndpointsUsedByListResponse = UsedBy | ValidationError | GenericError;

export type RbacPermissionsListResponse = PaginatedPermissionList | ValidationError | GenericError;

export type PaginatedPermissionList = {
  pagination: Pagination;
  results: Array<Maybe<Permission>>;
};

/** Global permission */
export type Permission = {
  id: Scalars['Int']['output'];
  name: Scalars['QueryRbacPermissionsListOneOf_0ResultsItemsName']['output'];
  codename: Scalars['QueryRbacPermissionsListOneOf_0ResultsItemsCodename']['output'];
  model: Scalars['String']['output'];
  appLabel: Scalars['String']['output'];
  /** Human-readable app label */
  appLabelVerbose: Scalars['String']['output'];
  /** Human-readable model name */
  modelVerbose: Scalars['String']['output'];
};

export type RbacPermissionsRetrieveResponse = Permission | ValidationError | GenericError;

export type RbacPermissionsAssignedByRolesListResponse = PaginatedRoleAssignedObjectPermissionList | ValidationError | GenericError;

export type PaginatedRoleAssignedObjectPermissionList = {
  pagination: Pagination;
  results: Array<Maybe<RoleAssignedObjectPermission>>;
};

/** Roles assigned object permission serializer */
export type RoleAssignedObjectPermission = {
  rolePk: Scalars['String']['output'];
  name: Scalars['String']['output'];
  permissions: Array<Maybe<RoleObjectPermission>>;
};

/** Role-bound object level permission */
export type RoleObjectPermission = {
  id: Scalars['Int']['output'];
  codename: Scalars['String']['output'];
  model: Scalars['String']['output'];
  appLabel: Scalars['String']['output'];
  objectPk: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type QueryInputRbacPermissionsAssignedByRolesListModel =
  | 'AUTHENTIK_BLUEPRINTS_BLUEPRINTINSTANCE'
  | 'AUTHENTIK_BRANDS_BRAND'
  | 'AUTHENTIK_CORE_APPLICATION'
  | 'AUTHENTIK_CORE_GROUP'
  | 'AUTHENTIK_CORE_TOKEN'
  | 'AUTHENTIK_CORE_USER'
  | 'AUTHENTIK_CRYPTO_CERTIFICATEKEYPAIR'
  | 'AUTHENTIK_ENTERPRISE_LICENSE'
  | 'AUTHENTIK_EVENTS_EVENT'
  | 'AUTHENTIK_EVENTS_NOTIFICATION'
  | 'AUTHENTIK_EVENTS_NOTIFICATIONRULE'
  | 'AUTHENTIK_EVENTS_NOTIFICATIONTRANSPORT'
  | 'AUTHENTIK_EVENTS_NOTIFICATIONWEBHOOKMAPPING'
  | 'AUTHENTIK_FLOWS_FLOW'
  | 'AUTHENTIK_FLOWS_FLOWSTAGEBINDING'
  | 'AUTHENTIK_OUTPOSTS_DOCKERSERVICECONNECTION'
  | 'AUTHENTIK_OUTPOSTS_KUBERNETESSERVICECONNECTION'
  | 'AUTHENTIK_OUTPOSTS_OUTPOST'
  | 'AUTHENTIK_POLICIES_POLICYBINDING'
  | 'AUTHENTIK_POLICIES_DUMMY_DUMMYPOLICY'
  | 'AUTHENTIK_POLICIES_EVENT_MATCHER_EVENTMATCHERPOLICY'
  | 'AUTHENTIK_POLICIES_EXPIRY_PASSWORDEXPIRYPOLICY'
  | 'AUTHENTIK_POLICIES_EXPRESSION_EXPRESSIONPOLICY'
  | 'AUTHENTIK_POLICIES_PASSWORD_PASSWORDPOLICY'
  | 'AUTHENTIK_POLICIES_REPUTATION_REPUTATIONPOLICY'
  | 'AUTHENTIK_PROVIDERS_LDAP_LDAPPROVIDER'
  | 'AUTHENTIK_PROVIDERS_OAUTH2_OAUTH2PROVIDER'
  | 'AUTHENTIK_PROVIDERS_OAUTH2_SCOPEMAPPING'
  | 'AUTHENTIK_PROVIDERS_PROXY_PROXYPROVIDER'
  | 'AUTHENTIK_PROVIDERS_RAC_ENDPOINT'
  | 'AUTHENTIK_PROVIDERS_RAC_RACPROPERTYMAPPING'
  | 'AUTHENTIK_PROVIDERS_RAC_RACPROVIDER'
  | 'AUTHENTIK_PROVIDERS_RADIUS_RADIUSPROVIDER'
  | 'AUTHENTIK_PROVIDERS_SAML_SAMLPROPERTYMAPPING'
  | 'AUTHENTIK_PROVIDERS_SAML_SAMLPROVIDER'
  | 'AUTHENTIK_PROVIDERS_SCIM_SCIMMAPPING'
  | 'AUTHENTIK_PROVIDERS_SCIM_SCIMPROVIDER'
  | 'AUTHENTIK_RBAC_ROLE'
  | 'AUTHENTIK_SOURCES_LDAP_LDAPPROPERTYMAPPING'
  | 'AUTHENTIK_SOURCES_LDAP_LDAPSOURCE'
  | 'AUTHENTIK_SOURCES_OAUTH_OAUTHSOURCE'
  | 'AUTHENTIK_SOURCES_OAUTH_USEROAUTHSOURCECONNECTION'
  | 'AUTHENTIK_SOURCES_PLEX_PLEXSOURCE'
  | 'AUTHENTIK_SOURCES_PLEX_PLEXSOURCECONNECTION'
  | 'AUTHENTIK_SOURCES_SAML_SAMLSOURCE'
  | 'AUTHENTIK_SOURCES_SAML_USERSAMLSOURCECONNECTION'
  | 'AUTHENTIK_SOURCES_SCIM_SCIMSOURCE'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR_DUO_AUTHENTICATORDUOSTAGE'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR_DUO_DUODEVICE'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR_SMS_AUTHENTICATORSMSSTAGE'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR_SMS_SMSDEVICE'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR_STATIC_AUTHENTICATORSTATICSTAGE'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR_STATIC_STATICDEVICE'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR_TOTP_AUTHENTICATORTOTPSTAGE'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR_TOTP_TOTPDEVICE'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR_VALIDATE_AUTHENTICATORVALIDATESTAGE'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR_WEBAUTHN_AUTHENTICATORWEBAUTHNSTAGE'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR_WEBAUTHN_WEBAUTHNDEVICE'
  | 'AUTHENTIK_STAGES_CAPTCHA_CAPTCHASTAGE'
  | 'AUTHENTIK_STAGES_CONSENT_CONSENTSTAGE'
  | 'AUTHENTIK_STAGES_CONSENT_USERCONSENT'
  | 'AUTHENTIK_STAGES_DENY_DENYSTAGE'
  | 'AUTHENTIK_STAGES_DUMMY_DUMMYSTAGE'
  | 'AUTHENTIK_STAGES_EMAIL_EMAILSTAGE'
  | 'AUTHENTIK_STAGES_IDENTIFICATION_IDENTIFICATIONSTAGE'
  | 'AUTHENTIK_STAGES_INVITATION_INVITATION'
  | 'AUTHENTIK_STAGES_INVITATION_INVITATIONSTAGE'
  | 'AUTHENTIK_STAGES_PASSWORD_PASSWORDSTAGE'
  | 'AUTHENTIK_STAGES_PROMPT_PROMPT'
  | 'AUTHENTIK_STAGES_PROMPT_PROMPTSTAGE'
  | 'AUTHENTIK_STAGES_SOURCE_SOURCESTAGE'
  | 'AUTHENTIK_STAGES_USER_DELETE_USERDELETESTAGE'
  | 'AUTHENTIK_STAGES_USER_LOGIN_USERLOGINSTAGE'
  | 'AUTHENTIK_STAGES_USER_LOGOUT_USERLOGOUTSTAGE'
  | 'AUTHENTIK_STAGES_USER_WRITE_USERWRITESTAGE'
  | 'AUTHENTIK_TENANTS_DOMAIN';

export type RbacPermissionsAssignedByUsersListResponse = PaginatedUserAssignedObjectPermissionList | ValidationError | GenericError;

export type PaginatedUserAssignedObjectPermissionList = {
  pagination: Pagination;
  results: Array<Maybe<UserAssignedObjectPermission>>;
};

/** Users assigned object permission serializer */
export type UserAssignedObjectPermission = {
  pk: Scalars['Int']['output'];
  username: Scalars['QueryRbacPermissionsAssignedByUsersListOneOf_0ResultsItemsUsername']['output'];
  /** User's display name. */
  name: Scalars['String']['output'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive?: Maybe<Scalars['Boolean']['output']>;
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['EmailAddress']['output']>;
  attributes?: Maybe<Scalars['JSON']['output']>;
  uid: Scalars['String']['output'];
  permissions: Array<Maybe<UserObjectPermission>>;
  isSuperuser: Scalars['Boolean']['output'];
};

/** User-bound object level permission */
export type UserObjectPermission = {
  id: Scalars['Int']['output'];
  codename: Scalars['String']['output'];
  model: Scalars['String']['output'];
  appLabel: Scalars['String']['output'];
  objectPk: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type QueryInputRbacPermissionsAssignedByUsersListModel =
  | 'AUTHENTIK_BLUEPRINTS_BLUEPRINTINSTANCE'
  | 'AUTHENTIK_BRANDS_BRAND'
  | 'AUTHENTIK_CORE_APPLICATION'
  | 'AUTHENTIK_CORE_GROUP'
  | 'AUTHENTIK_CORE_TOKEN'
  | 'AUTHENTIK_CORE_USER'
  | 'AUTHENTIK_CRYPTO_CERTIFICATEKEYPAIR'
  | 'AUTHENTIK_ENTERPRISE_LICENSE'
  | 'AUTHENTIK_EVENTS_EVENT'
  | 'AUTHENTIK_EVENTS_NOTIFICATION'
  | 'AUTHENTIK_EVENTS_NOTIFICATIONRULE'
  | 'AUTHENTIK_EVENTS_NOTIFICATIONTRANSPORT'
  | 'AUTHENTIK_EVENTS_NOTIFICATIONWEBHOOKMAPPING'
  | 'AUTHENTIK_FLOWS_FLOW'
  | 'AUTHENTIK_FLOWS_FLOWSTAGEBINDING'
  | 'AUTHENTIK_OUTPOSTS_DOCKERSERVICECONNECTION'
  | 'AUTHENTIK_OUTPOSTS_KUBERNETESSERVICECONNECTION'
  | 'AUTHENTIK_OUTPOSTS_OUTPOST'
  | 'AUTHENTIK_POLICIES_POLICYBINDING'
  | 'AUTHENTIK_POLICIES_DUMMY_DUMMYPOLICY'
  | 'AUTHENTIK_POLICIES_EVENT_MATCHER_EVENTMATCHERPOLICY'
  | 'AUTHENTIK_POLICIES_EXPIRY_PASSWORDEXPIRYPOLICY'
  | 'AUTHENTIK_POLICIES_EXPRESSION_EXPRESSIONPOLICY'
  | 'AUTHENTIK_POLICIES_PASSWORD_PASSWORDPOLICY'
  | 'AUTHENTIK_POLICIES_REPUTATION_REPUTATIONPOLICY'
  | 'AUTHENTIK_PROVIDERS_LDAP_LDAPPROVIDER'
  | 'AUTHENTIK_PROVIDERS_OAUTH2_OAUTH2PROVIDER'
  | 'AUTHENTIK_PROVIDERS_OAUTH2_SCOPEMAPPING'
  | 'AUTHENTIK_PROVIDERS_PROXY_PROXYPROVIDER'
  | 'AUTHENTIK_PROVIDERS_RAC_ENDPOINT'
  | 'AUTHENTIK_PROVIDERS_RAC_RACPROPERTYMAPPING'
  | 'AUTHENTIK_PROVIDERS_RAC_RACPROVIDER'
  | 'AUTHENTIK_PROVIDERS_RADIUS_RADIUSPROVIDER'
  | 'AUTHENTIK_PROVIDERS_SAML_SAMLPROPERTYMAPPING'
  | 'AUTHENTIK_PROVIDERS_SAML_SAMLPROVIDER'
  | 'AUTHENTIK_PROVIDERS_SCIM_SCIMMAPPING'
  | 'AUTHENTIK_PROVIDERS_SCIM_SCIMPROVIDER'
  | 'AUTHENTIK_RBAC_ROLE'
  | 'AUTHENTIK_SOURCES_LDAP_LDAPPROPERTYMAPPING'
  | 'AUTHENTIK_SOURCES_LDAP_LDAPSOURCE'
  | 'AUTHENTIK_SOURCES_OAUTH_OAUTHSOURCE'
  | 'AUTHENTIK_SOURCES_OAUTH_USEROAUTHSOURCECONNECTION'
  | 'AUTHENTIK_SOURCES_PLEX_PLEXSOURCE'
  | 'AUTHENTIK_SOURCES_PLEX_PLEXSOURCECONNECTION'
  | 'AUTHENTIK_SOURCES_SAML_SAMLSOURCE'
  | 'AUTHENTIK_SOURCES_SAML_USERSAMLSOURCECONNECTION'
  | 'AUTHENTIK_SOURCES_SCIM_SCIMSOURCE'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR_DUO_AUTHENTICATORDUOSTAGE'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR_DUO_DUODEVICE'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR_SMS_AUTHENTICATORSMSSTAGE'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR_SMS_SMSDEVICE'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR_STATIC_AUTHENTICATORSTATICSTAGE'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR_STATIC_STATICDEVICE'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR_TOTP_AUTHENTICATORTOTPSTAGE'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR_TOTP_TOTPDEVICE'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR_VALIDATE_AUTHENTICATORVALIDATESTAGE'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR_WEBAUTHN_AUTHENTICATORWEBAUTHNSTAGE'
  | 'AUTHENTIK_STAGES_AUTHENTICATOR_WEBAUTHN_WEBAUTHNDEVICE'
  | 'AUTHENTIK_STAGES_CAPTCHA_CAPTCHASTAGE'
  | 'AUTHENTIK_STAGES_CONSENT_CONSENTSTAGE'
  | 'AUTHENTIK_STAGES_CONSENT_USERCONSENT'
  | 'AUTHENTIK_STAGES_DENY_DENYSTAGE'
  | 'AUTHENTIK_STAGES_DUMMY_DUMMYSTAGE'
  | 'AUTHENTIK_STAGES_EMAIL_EMAILSTAGE'
  | 'AUTHENTIK_STAGES_IDENTIFICATION_IDENTIFICATIONSTAGE'
  | 'AUTHENTIK_STAGES_INVITATION_INVITATION'
  | 'AUTHENTIK_STAGES_INVITATION_INVITATIONSTAGE'
  | 'AUTHENTIK_STAGES_PASSWORD_PASSWORDSTAGE'
  | 'AUTHENTIK_STAGES_PROMPT_PROMPT'
  | 'AUTHENTIK_STAGES_PROMPT_PROMPTSTAGE'
  | 'AUTHENTIK_STAGES_SOURCE_SOURCESTAGE'
  | 'AUTHENTIK_STAGES_USER_DELETE_USERDELETESTAGE'
  | 'AUTHENTIK_STAGES_USER_LOGIN_USERLOGINSTAGE'
  | 'AUTHENTIK_STAGES_USER_LOGOUT_USERLOGOUTSTAGE'
  | 'AUTHENTIK_STAGES_USER_WRITE_USERWRITESTAGE'
  | 'AUTHENTIK_TENANTS_DOMAIN';

export type RbacPermissionsRolesListResponse = PaginatedExtraRoleObjectPermissionList | ValidationError | GenericError;

export type PaginatedExtraRoleObjectPermissionList = {
  pagination: Pagination;
  results: Array<Maybe<ExtraRoleObjectPermission>>;
};

/** User permission with additional object-related data */
export type ExtraRoleObjectPermission = {
  id: Scalars['Int']['output'];
  codename: Scalars['String']['output'];
  model: Scalars['String']['output'];
  appLabel: Scalars['String']['output'];
  objectPk: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** Get app label from permission's model */
  appLabelVerbose: Scalars['String']['output'];
  /** Get model label from permission's model */
  modelVerbose: Scalars['String']['output'];
  /**
   * Get model description from attached model. This operation takes at least
   * one additional query, and the description is only shown if the user/role has the
   * view_ permission on the object
   */
  objectDescription?: Maybe<Scalars['String']['output']>;
};

export type RbacPermissionsUsersListResponse = PaginatedExtraUserObjectPermissionList | ValidationError | GenericError;

export type PaginatedExtraUserObjectPermissionList = {
  pagination: Pagination;
  results: Array<Maybe<ExtraUserObjectPermission>>;
};

/** User permission with additional object-related data */
export type ExtraUserObjectPermission = {
  id: Scalars['Int']['output'];
  codename: Scalars['String']['output'];
  model: Scalars['String']['output'];
  appLabel: Scalars['String']['output'];
  objectPk: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** Get app label from permission's model */
  appLabelVerbose: Scalars['String']['output'];
  /** Get model label from permission's model */
  modelVerbose: Scalars['String']['output'];
  /**
   * Get model description from attached model. This operation takes at least
   * one additional query, and the description is only shown if the user/role has the
   * view_ permission on the object
   */
  objectDescription?: Maybe<Scalars['String']['output']>;
};

export type RbacRolesListResponse = PaginatedRoleList | ValidationError | GenericError;

export type PaginatedRoleList = {
  pagination: Pagination;
  results: Array<Maybe<Role>>;
};

export type RbacRolesRetrieveResponse = Role | ValidationError | GenericError;

export type RbacRolesUsedByListResponse = UsedBy | ValidationError | GenericError;

export type RootConfigRetrieveResponse = Config | ValidationError | GenericError;

/** Serialize authentik Config into DRF Object */
export type Config = {
  errorReporting: ErrorReportingConfig;
  capabilities: Array<Maybe<CapabilitiesEnum>>;
  cacheTimeout: Scalars['Int']['output'];
  cacheTimeoutFlows: Scalars['Int']['output'];
  cacheTimeoutPolicies: Scalars['Int']['output'];
  cacheTimeoutReputation: Scalars['Int']['output'];
};

/** Config for error reporting */
export type ErrorReportingConfig = {
  enabled: Scalars['Boolean']['output'];
  sentryDsn: Scalars['String']['output'];
  environment: Scalars['String']['output'];
  sendPii: Scalars['Boolean']['output'];
  tracesSampleRate: Scalars['Float']['output'];
};

export type CapabilitiesEnum =
  | 'CAN_SAVE_MEDIA'
  | 'CAN_GEO_IP'
  | 'CAN_ASN'
  | 'CAN_IMPERSONATE'
  | 'CAN_DEBUG'
  | 'IS_ENTERPRISE';

export type SchemaRetrieveResponse = JsonContainer | ValidationError | GenericError;

export type JsonContainer = {
  json?: Maybe<Scalars['JSON']['output']>;
};

export type QueryInputSchemaRetrieveFormat =
  | 'JSON'
  | 'YAML';

export type QueryInputSchemaRetrieveLang =
  | 'AF'
  | 'AR'
  | 'AR_DZ'
  | 'AST'
  | 'AZ'
  | 'BE'
  | 'BG'
  | 'BN'
  | 'BR'
  | 'BS'
  | 'CA'
  | 'CKB'
  | 'CS'
  | 'CY'
  | 'DA'
  | 'DE'
  | 'DSB'
  | 'EL'
  | 'EN'
  | 'EN_AU'
  | 'EN_GB'
  | 'EO'
  | 'ES'
  | 'ES_AR'
  | 'ES_CO'
  | 'ES_MX'
  | 'ES_NI'
  | 'ES_VE'
  | 'ET'
  | 'EU'
  | 'FA'
  | 'FI'
  | 'FR'
  | 'FY'
  | 'GA'
  | 'GD'
  | 'GL'
  | 'HE'
  | 'HI'
  | 'HR'
  | 'HSB'
  | 'HU'
  | 'HY'
  | 'IA'
  | 'ID'
  | 'IG'
  | 'IO'
  | 'IS'
  | 'IT'
  | 'JA'
  | 'KA'
  | 'KAB'
  | 'KK'
  | 'KM'
  | 'KN'
  | 'KO'
  | 'KY'
  | 'LB'
  | 'LT'
  | 'LV'
  | 'MK'
  | 'ML'
  | 'MN'
  | 'MR'
  | 'MS'
  | 'MY'
  | 'NB'
  | 'NE'
  | 'NL'
  | 'NN'
  | 'OS'
  | 'PA'
  | 'PL'
  | 'PT'
  | 'PT_BR'
  | 'RO'
  | 'RU'
  | 'SK'
  | 'SL'
  | 'SQ'
  | 'SR'
  | 'SR_LATN'
  | 'SV'
  | 'SW'
  | 'TA'
  | 'TE'
  | 'TG'
  | 'TH'
  | 'TK'
  | 'TR'
  | 'TT'
  | 'UDM'
  | 'UG'
  | 'UK'
  | 'UR'
  | 'UZ'
  | 'VI'
  | 'ZH_HANS'
  | 'ZH_HANT';

export type SourcesAllListResponse = PaginatedSourceList | ValidationError | GenericError;

export type PaginatedSourceList = {
  pagination: Pagination;
  results: Array<Maybe<Source>>;
};

/** Source Serializer */
export type Source = {
  pk: Scalars['UUID']['output'];
  /** Source's display Name. */
  name: Scalars['String']['output'];
  slug: Scalars['QuerySourcesAllListOneOf_0ResultsItemsSlug']['output'];
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Flow to use when authenticating existing users. */
  authenticationFlow?: Maybe<Scalars['UUID']['output']>;
  /** Flow to use when enrolling new users. */
  enrollmentFlow?: Maybe<Scalars['UUID']['output']>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  policyEngineMode?: Maybe<PolicyEngineMode>;
  userMatchingMode?: Maybe<UserMatchingModeEnum>;
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: Maybe<Scalars['String']['output']>;
  userPathTemplate?: Maybe<Scalars['String']['output']>;
  /**
   * Get the URL to the Icon. If the name is /static or
   * starts with http it is returned as-is
   */
  icon?: Maybe<Scalars['String']['output']>;
  additionalProperties?: Maybe<Scalars['JSON']['output']>;
};

export type UserMatchingModeEnum =
  | 'IDENTIFIER'
  | 'EMAIL_LINK'
  | 'EMAIL_DENY'
  | 'USERNAME_LINK'
  | 'USERNAME_DENY';

export type SourcesAllRetrieveResponse = Source | ValidationError | GenericError;

export type SourcesAllUsedByListResponse = UsedBy | ValidationError | GenericError;

export type SourcesAllTypesListResponse = TypeCreate | ValidationError | GenericError;

export type SourcesAllUserSettingsListResponse = UserSetting | ValidationError | GenericError;

/** Serializer for User settings for stages and sources */
export type UserSetting = {
  objectUid: Scalars['String']['output'];
  component: Scalars['String']['output'];
  title: Scalars['String']['output'];
  configureUrl?: Maybe<Scalars['String']['output']>;
  iconUrl?: Maybe<Scalars['String']['output']>;
};

export type SourcesLdapListResponse = PaginatedLdapSourceList | ValidationError | GenericError;

export type PaginatedLdapSourceList = {
  pagination: Pagination;
  results: Array<Maybe<LdapSource>>;
};

/** LDAP Source Serializer */
export type LdapSource = {
  pk: Scalars['UUID']['output'];
  /** Source's display Name. */
  name: Scalars['String']['output'];
  slug: Scalars['QuerySourcesLdapListOneOf_0ResultsItemsSlug']['output'];
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Flow to use when authenticating existing users. */
  authenticationFlow?: Maybe<Scalars['UUID']['output']>;
  /** Flow to use when enrolling new users. */
  enrollmentFlow?: Maybe<Scalars['UUID']['output']>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  policyEngineMode?: Maybe<PolicyEngineMode>;
  userMatchingMode?: Maybe<UserMatchingModeEnum>;
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: Maybe<Scalars['String']['output']>;
  userPathTemplate?: Maybe<Scalars['String']['output']>;
  /**
   * Get the URL to the Icon. If the name is /static or
   * starts with http it is returned as-is
   */
  icon?: Maybe<Scalars['String']['output']>;
  serverUri: Scalars['URL']['output'];
  /** Optionally verify the LDAP Server's Certificate against the CA Chain in this keypair. */
  peerCertificate?: Maybe<Scalars['UUID']['output']>;
  /** Client certificate to authenticate against the LDAP Server's Certificate. */
  clientCertificate?: Maybe<Scalars['UUID']['output']>;
  bindCn?: Maybe<Scalars['String']['output']>;
  startTls?: Maybe<Scalars['Boolean']['output']>;
  sni?: Maybe<Scalars['Boolean']['output']>;
  baseDn: Scalars['String']['output'];
  /** Prepended to Base DN for User-queries. */
  additionalUserDn?: Maybe<Scalars['String']['output']>;
  /** Prepended to Base DN for Group-queries. */
  additionalGroupDn?: Maybe<Scalars['String']['output']>;
  /** Consider Objects matching this filter to be Users. */
  userObjectFilter?: Maybe<Scalars['String']['output']>;
  /** Consider Objects matching this filter to be Groups. */
  groupObjectFilter?: Maybe<Scalars['String']['output']>;
  /** Field which contains members of a group. */
  groupMembershipField?: Maybe<Scalars['String']['output']>;
  /** Field which contains a unique Identifier. */
  objectUniquenessField?: Maybe<Scalars['String']['output']>;
  /** Update internal authentik password when login succeeds with LDAP */
  passwordLoginUpdateInternalPassword?: Maybe<Scalars['Boolean']['output']>;
  syncUsers?: Maybe<Scalars['Boolean']['output']>;
  /** When a user changes their password, sync it back to LDAP. This can only be enabled on a single LDAP source. */
  syncUsersPassword?: Maybe<Scalars['Boolean']['output']>;
  syncGroups?: Maybe<Scalars['Boolean']['output']>;
  syncParentGroup?: Maybe<Scalars['UUID']['output']>;
  propertyMappings?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  /** Property mappings used for group creation/updating. */
  propertyMappingsGroup?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  /** Get cached source connectivity */
  connectivity?: Maybe<Scalars['JSON']['output']>;
};

export type SourcesLdapRetrieveResponse = LdapSource | ValidationError | GenericError;

export type SourcesLdapDebugRetrieveResponse = LdapDebug | ValidationError | GenericError;

export type LdapDebug = {
  user: Array<Maybe<Scalars['JSON']['output']>>;
  group: Array<Maybe<Scalars['JSON']['output']>>;
  membership: Array<Maybe<Scalars['JSON']['output']>>;
};

export type SourcesLdapSyncStatusRetrieveResponse = LdapSyncStatus | ValidationError | GenericError;

/** LDAP Source sync status */
export type LdapSyncStatus = {
  isRunning: Scalars['Boolean']['output'];
  tasks: Array<Maybe<SystemTask>>;
};

export type SourcesLdapUsedByListResponse = UsedBy | ValidationError | GenericError;

export type SourcesOauthListResponse = PaginatedOAuthSourceList | ValidationError | GenericError;

export type PaginatedOAuthSourceList = {
  pagination: Pagination;
  results: Array<Maybe<OAuthSource>>;
};

/** OAuth Source Serializer */
export type OAuthSource = {
  pk: Scalars['UUID']['output'];
  /** Source's display Name. */
  name: Scalars['String']['output'];
  slug: Scalars['QuerySourcesOauthListOneOf_0ResultsItemsSlug']['output'];
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Flow to use when authenticating existing users. */
  authenticationFlow?: Maybe<Scalars['UUID']['output']>;
  /** Flow to use when enrolling new users. */
  enrollmentFlow?: Maybe<Scalars['UUID']['output']>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  policyEngineMode?: Maybe<PolicyEngineMode>;
  userMatchingMode?: Maybe<UserMatchingModeEnum>;
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: Maybe<Scalars['String']['output']>;
  userPathTemplate?: Maybe<Scalars['String']['output']>;
  /**
   * Get the URL to the Icon. If the name is /static or
   * starts with http it is returned as-is
   */
  icon?: Maybe<Scalars['String']['output']>;
  providerType: ProviderTypeEnum;
  /** URL used to request the initial token. This URL is only required for OAuth 1. */
  requestTokenUrl?: Maybe<Scalars['QuerySourcesOauthListOneOf_0ResultsItemsRequestTokenUrl']['output']>;
  /** URL the user is redirect to to conest the flow. */
  authorizationUrl?: Maybe<Scalars['QuerySourcesOauthListOneOf_0ResultsItemsAuthorizationUrl']['output']>;
  /** URL used by authentik to retrieve tokens. */
  accessTokenUrl?: Maybe<Scalars['QuerySourcesOauthListOneOf_0ResultsItemsAccessTokenUrl']['output']>;
  /** URL used by authentik to get user information. */
  profileUrl?: Maybe<Scalars['QuerySourcesOauthListOneOf_0ResultsItemsProfileUrl']['output']>;
  consumerKey: Scalars['String']['output'];
  /** Get OAuth Callback URL */
  callbackUrl: Scalars['String']['output'];
  additionalScopes?: Maybe<Scalars['String']['output']>;
  type: SourceType;
  oidcWellKnownUrl?: Maybe<Scalars['String']['output']>;
  oidcJwksUrl?: Maybe<Scalars['String']['output']>;
  oidcJwks?: Maybe<Scalars['JSON']['output']>;
};

export type ProviderTypeEnum =
  | 'APPLE'
  | 'OPENIDCONNECT'
  | 'AZUREAD'
  | 'DISCORD'
  | 'FACEBOOK'
  | 'GITHUB'
  | 'GITLAB'
  | 'GOOGLE'
  | 'MAILCOW'
  | 'OKTA'
  | 'PATREON'
  | 'REDDIT'
  | 'TWITCH'
  | 'TWITTER';

/** Serializer for SourceType */
export type SourceType = {
  name: Scalars['String']['output'];
  verboseName: Scalars['String']['output'];
  urlsCustomizable: Scalars['Boolean']['output'];
  requestTokenUrl?: Maybe<Scalars['String']['output']>;
  authorizationUrl?: Maybe<Scalars['String']['output']>;
  accessTokenUrl?: Maybe<Scalars['String']['output']>;
  profileUrl?: Maybe<Scalars['String']['output']>;
  oidcWellKnownUrl?: Maybe<Scalars['String']['output']>;
  oidcJwksUrl?: Maybe<Scalars['String']['output']>;
  additionalProperties?: Maybe<Scalars['JSON']['output']>;
};

export type QueryInputSourcesOauthListPolicyEngineMode =
  | 'ALL'
  | 'ANY';

/** How the source determines if an existing user should be authenticated or a new user enrolled. */
export type QueryInputSourcesOauthListUserMatchingMode =
  | 'EMAIL_DENY'
  | 'EMAIL_LINK'
  | 'IDENTIFIER'
  | 'USERNAME_DENY'
  | 'USERNAME_LINK';

export type SourcesOauthRetrieveResponse = OAuthSource | ValidationError | GenericError;

export type SourcesOauthUsedByListResponse = UsedBy | ValidationError | GenericError;

export type SourcesOauthSourceTypesListResponse = SourceType | ValidationError | GenericError;

export type SourcesPlexListResponse = PaginatedPlexSourceList | ValidationError | GenericError;

export type PaginatedPlexSourceList = {
  pagination: Pagination;
  results: Array<Maybe<PlexSource>>;
};

/** Plex Source Serializer */
export type PlexSource = {
  pk: Scalars['UUID']['output'];
  /** Source's display Name. */
  name: Scalars['String']['output'];
  slug: Scalars['QuerySourcesPlexListOneOf_0ResultsItemsSlug']['output'];
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Flow to use when authenticating existing users. */
  authenticationFlow?: Maybe<Scalars['UUID']['output']>;
  /** Flow to use when enrolling new users. */
  enrollmentFlow?: Maybe<Scalars['UUID']['output']>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  policyEngineMode?: Maybe<PolicyEngineMode>;
  userMatchingMode?: Maybe<UserMatchingModeEnum>;
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: Maybe<Scalars['String']['output']>;
  userPathTemplate?: Maybe<Scalars['String']['output']>;
  /**
   * Get the URL to the Icon. If the name is /static or
   * starts with http it is returned as-is
   */
  icon?: Maybe<Scalars['String']['output']>;
  /** Client identifier used to talk to Plex. */
  clientId?: Maybe<Scalars['String']['output']>;
  /** Which servers a user has to be a member of to be granted access. Empty list allows every server. */
  allowedServers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Allow friends to authenticate, even if you don't share a server. */
  allowFriends?: Maybe<Scalars['Boolean']['output']>;
  /** Plex token used to check friends */
  plexToken: Scalars['String']['output'];
};

export type QueryInputSourcesPlexListPolicyEngineMode =
  | 'ALL'
  | 'ANY';

/** How the source determines if an existing user should be authenticated or a new user enrolled. */
export type QueryInputSourcesPlexListUserMatchingMode =
  | 'EMAIL_DENY'
  | 'EMAIL_LINK'
  | 'IDENTIFIER'
  | 'USERNAME_DENY'
  | 'USERNAME_LINK';

export type SourcesPlexRetrieveResponse = PlexSource | ValidationError | GenericError;

export type SourcesPlexUsedByListResponse = UsedBy | ValidationError | GenericError;

export type SourcesSamlListResponse = PaginatedSamlSourceList | ValidationError | GenericError;

export type PaginatedSamlSourceList = {
  pagination: Pagination;
  results: Array<Maybe<SamlSource>>;
};

/** SAMLSource Serializer */
export type SamlSource = {
  pk: Scalars['UUID']['output'];
  /** Source's display Name. */
  name: Scalars['String']['output'];
  slug: Scalars['QuerySourcesSamlListOneOf_0ResultsItemsSlug']['output'];
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Flow to use when authenticating existing users. */
  authenticationFlow?: Maybe<Scalars['UUID']['output']>;
  /** Flow to use when enrolling new users. */
  enrollmentFlow?: Maybe<Scalars['UUID']['output']>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  policyEngineMode?: Maybe<PolicyEngineMode>;
  userMatchingMode?: Maybe<UserMatchingModeEnum>;
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: Maybe<Scalars['String']['output']>;
  userPathTemplate?: Maybe<Scalars['String']['output']>;
  /**
   * Get the URL to the Icon. If the name is /static or
   * starts with http it is returned as-is
   */
  icon?: Maybe<Scalars['String']['output']>;
  /** Flow used before authentication. */
  preAuthenticationFlow: Scalars['UUID']['output'];
  /** Also known as Entity ID. Defaults the Metadata URL. */
  issuer?: Maybe<Scalars['String']['output']>;
  /** URL that the initial Login request is sent to. */
  ssoUrl: Scalars['URL']['output'];
  /** Optional URL if your IDP supports Single-Logout. */
  sloUrl?: Maybe<Scalars['URL']['output']>;
  /** Allows authentication flows initiated by the IdP. This can be a security risk, as no validation of the request ID is done. */
  allowIdpInitiated?: Maybe<Scalars['Boolean']['output']>;
  nameIdPolicy?: Maybe<NameIdPolicyEnum>;
  bindingType?: Maybe<BindingTypeEnum>;
  /** When selected, incoming assertion's Signatures will be validated against this certificate. To allow unsigned Requests, leave on default. */
  verificationKp?: Maybe<Scalars['UUID']['output']>;
  /** Keypair used to sign outgoing Responses going to the Identity Provider. */
  signingKp?: Maybe<Scalars['UUID']['output']>;
  digestAlgorithm?: Maybe<DigestAlgorithmEnum>;
  signatureAlgorithm?: Maybe<SignatureAlgorithmEnum>;
  /** Time offset when temporary users should be deleted. This only applies if your IDP uses the NameID Format 'transient', and the user doesn't log out manually. (Format: hours=1;minutes=2;seconds=3). */
  temporaryUserDeleteAfter?: Maybe<Scalars['String']['output']>;
};

export type NameIdPolicyEnum =
  | 'URN_OASIS_NAMES_TC_SAML_1_1_NAMEID_FORMAT_EMAILADDRESS'
  | 'URN_OASIS_NAMES_TC_SAML_2_0_NAMEID_FORMAT_PERSISTENT'
  | 'URN_OASIS_NAMES_TC_SAML_2_0_NAMEID_FORMAT_X509SUBJECTNAME'
  | 'URN_OASIS_NAMES_TC_SAML_2_0_NAMEID_FORMAT_WINDOWSDOMAINQUALIFIEDNAME'
  | 'URN_OASIS_NAMES_TC_SAML_2_0_NAMEID_FORMAT_TRANSIENT';

export type BindingTypeEnum =
  | 'REDIRECT'
  | 'POST'
  | 'POST_AUTO';

export type QueryInputSourcesSamlListBindingType =
  | 'POST'
  | 'POST_AUTO'
  | 'REDIRECT';

export type QueryInputSourcesSamlListDigestAlgorithm =
  | 'HTTP___WWW_W3_ORG_2000_09_XMLDSIG_POUND_SHA1'
  | 'HTTP___WWW_W3_ORG_2001_04_XMLDSIG_MORE_POUND_SHA384'
  | 'HTTP___WWW_W3_ORG_2001_04_XMLENC_POUND_SHA256'
  | 'HTTP___WWW_W3_ORG_2001_04_XMLENC_POUND_SHA512';

/** NameID Policy sent to the IdP. Can be unset, in which case no Policy is sent. */
export type QueryInputSourcesSamlListNameIdPolicy =
  | 'URN_OASIS_NAMES_TC_SAML_1_1_NAMEID_FORMAT_EMAILADDRESS'
  | 'URN_OASIS_NAMES_TC_SAML_2_0_NAMEID_FORMAT_WINDOWSDOMAINQUALIFIEDNAME'
  | 'URN_OASIS_NAMES_TC_SAML_2_0_NAMEID_FORMAT_X509SUBJECTNAME'
  | 'URN_OASIS_NAMES_TC_SAML_2_0_NAMEID_FORMAT_PERSISTENT'
  | 'URN_OASIS_NAMES_TC_SAML_2_0_NAMEID_FORMAT_TRANSIENT';

export type QueryInputSourcesSamlListPolicyEngineMode =
  | 'ALL'
  | 'ANY';

export type QueryInputSourcesSamlListSignatureAlgorithm =
  | 'HTTP___WWW_W3_ORG_2000_09_XMLDSIG_POUND_DSA_SHA1'
  | 'HTTP___WWW_W3_ORG_2000_09_XMLDSIG_POUND_RSA_SHA1'
  | 'HTTP___WWW_W3_ORG_2001_04_XMLDSIG_MORE_POUND_ECDSA_SHA1'
  | 'HTTP___WWW_W3_ORG_2001_04_XMLDSIG_MORE_POUND_ECDSA_SHA256'
  | 'HTTP___WWW_W3_ORG_2001_04_XMLDSIG_MORE_POUND_ECDSA_SHA384'
  | 'HTTP___WWW_W3_ORG_2001_04_XMLDSIG_MORE_POUND_ECDSA_SHA512'
  | 'HTTP___WWW_W3_ORG_2001_04_XMLDSIG_MORE_POUND_RSA_SHA256'
  | 'HTTP___WWW_W3_ORG_2001_04_XMLDSIG_MORE_POUND_RSA_SHA384'
  | 'HTTP___WWW_W3_ORG_2001_04_XMLDSIG_MORE_POUND_RSA_SHA512';

/** How the source determines if an existing user should be authenticated or a new user enrolled. */
export type QueryInputSourcesSamlListUserMatchingMode =
  | 'EMAIL_DENY'
  | 'EMAIL_LINK'
  | 'IDENTIFIER'
  | 'USERNAME_DENY'
  | 'USERNAME_LINK';

export type SourcesSamlRetrieveResponse = SamlSource | ValidationError | GenericError;

export type SourcesSamlMetadataRetrieveResponse = SamlMetadata | ValidationError | GenericError;

export type SourcesSamlUsedByListResponse = UsedBy | ValidationError | GenericError;

export type SourcesScimListResponse = PaginatedScimSourceList | ValidationError | GenericError;

export type PaginatedScimSourceList = {
  pagination: Pagination;
  results: Array<Maybe<ScimSource>>;
};

/** SCIMSource Serializer */
export type ScimSource = {
  pk: Scalars['UUID']['output'];
  /** Source's display Name. */
  name: Scalars['String']['output'];
  slug: Scalars['QuerySourcesScimListOneOf_0ResultsItemsSlug']['output'];
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  userMatchingMode?: Maybe<UserMatchingModeEnum>;
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: Maybe<Scalars['String']['output']>;
  userPathTemplate?: Maybe<Scalars['String']['output']>;
  /** Get Root URL */
  rootUrl: Scalars['String']['output'];
  tokenObj: Token;
};

export type SourcesScimRetrieveResponse = ScimSource | ValidationError | GenericError;

export type SourcesScimUsedByListResponse = UsedBy | ValidationError | GenericError;

export type SourcesScimGroupsListResponse = PaginatedScimSourceGroupList | ValidationError | GenericError;

export type PaginatedScimSourceGroupList = {
  pagination: Pagination;
  results: Array<Maybe<ScimSourceGroup>>;
};

/** SCIMSourceGroup Serializer */
export type ScimSourceGroup = {
  id: Scalars['String']['output'];
  group: Scalars['UUID']['output'];
  groupObj: UserGroup;
  source: Scalars['UUID']['output'];
  attributes?: Maybe<Scalars['JSON']['output']>;
};

export type SourcesScimGroupsRetrieveResponse = ScimSourceGroup | ValidationError | GenericError;

export type SourcesScimGroupsUsedByListResponse = UsedBy | ValidationError | GenericError;

export type SourcesScimUsersListResponse = PaginatedScimSourceUserList | ValidationError | GenericError;

export type PaginatedScimSourceUserList = {
  pagination: Pagination;
  results: Array<Maybe<ScimSourceUser>>;
};

/** SCIMSourceUser Serializer */
export type ScimSourceUser = {
  id: Scalars['String']['output'];
  user: Scalars['Int']['output'];
  userObj: GroupMember;
  source: Scalars['UUID']['output'];
  attributes?: Maybe<Scalars['JSON']['output']>;
};

export type SourcesScimUsersRetrieveResponse = ScimSourceUser | ValidationError | GenericError;

export type SourcesScimUsersUsedByListResponse = UsedBy | ValidationError | GenericError;

export type SourcesUserConnectionsAllListResponse = PaginatedUserSourceConnectionList | ValidationError | GenericError;

export type PaginatedUserSourceConnectionList = {
  pagination: Pagination;
  results: Array<Maybe<UserSourceConnection>>;
};

/** OAuth Source Serializer */
export type UserSourceConnection = {
  pk: Scalars['Int']['output'];
  user: Scalars['Int']['output'];
  source: Source;
  created: Scalars['DateTime']['output'];
};

export type SourcesUserConnectionsAllRetrieveResponse = UserSourceConnection | ValidationError | GenericError;

export type SourcesUserConnectionsAllUsedByListResponse = UsedBy | ValidationError | GenericError;

export type SourcesUserConnectionsOauthListResponse = PaginatedUserOAuthSourceConnectionList | ValidationError | GenericError;

export type PaginatedUserOAuthSourceConnectionList = {
  pagination: Pagination;
  results: Array<Maybe<UserOAuthSourceConnection>>;
};

/** OAuth Source Serializer */
export type UserOAuthSourceConnection = {
  pk: Scalars['Int']['output'];
  user: Scalars['Int']['output'];
  source: Source;
  identifier: Scalars['QuerySourcesUserConnectionsOauthListOneOf_0ResultsItemsIdentifier']['output'];
};

export type SourcesUserConnectionsOauthRetrieveResponse = UserOAuthSourceConnection | ValidationError | GenericError;

export type SourcesUserConnectionsOauthUsedByListResponse = UsedBy | ValidationError | GenericError;

export type SourcesUserConnectionsPlexListResponse = PaginatedPlexSourceConnectionList | ValidationError | GenericError;

export type PaginatedPlexSourceConnectionList = {
  pagination: Pagination;
  results: Array<Maybe<PlexSourceConnection>>;
};

/** Plex Source connection Serializer */
export type PlexSourceConnection = {
  pk: Scalars['Int']['output'];
  user: Scalars['Int']['output'];
  source: Source;
  identifier: Scalars['String']['output'];
  plexToken: Scalars['String']['output'];
};

export type SourcesUserConnectionsPlexRetrieveResponse = PlexSourceConnection | ValidationError | GenericError;

export type SourcesUserConnectionsPlexUsedByListResponse = UsedBy | ValidationError | GenericError;

export type SourcesUserConnectionsSamlListResponse = PaginatedUserSamlSourceConnectionList | ValidationError | GenericError;

export type PaginatedUserSamlSourceConnectionList = {
  pagination: Pagination;
  results: Array<Maybe<UserSamlSourceConnection>>;
};

/** SAML Source Serializer */
export type UserSamlSourceConnection = {
  pk: Scalars['Int']['output'];
  user: Scalars['Int']['output'];
  source: Source;
  identifier: Scalars['String']['output'];
};

export type SourcesUserConnectionsSamlRetrieveResponse = UserSamlSourceConnection | ValidationError | GenericError;

export type SourcesUserConnectionsSamlUsedByListResponse = UsedBy | ValidationError | GenericError;

export type StagesAllListResponse = PaginatedStageList | ValidationError | GenericError;

export type PaginatedStageList = {
  pagination: Pagination;
  results: Array<Maybe<Stage>>;
};

export type StagesAllRetrieveResponse = Stage | ValidationError | GenericError;

export type StagesAllUsedByListResponse = UsedBy | ValidationError | GenericError;

export type StagesAllTypesListResponse = TypeCreate | ValidationError | GenericError;

export type StagesAllUserSettingsListResponse = UserSetting | ValidationError | GenericError;

export type StagesAuthenticatorDuoListResponse = PaginatedAuthenticatorDuoStageList | ValidationError | GenericError;

export type PaginatedAuthenticatorDuoStageList = {
  pagination: Pagination;
  results: Array<Maybe<AuthenticatorDuoStage>>;
};

/** AuthenticatorDuoStage Serializer */
export type AuthenticatorDuoStage = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Get object type so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  flowSet?: Maybe<Array<Maybe<FlowSet>>>;
  /** Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage. */
  configureFlow?: Maybe<Scalars['UUID']['output']>;
  friendlyName?: Maybe<Scalars['String']['output']>;
  clientId: Scalars['String']['output'];
  apiHostname: Scalars['String']['output'];
  adminIntegrationKey?: Maybe<Scalars['String']['output']>;
};

export type StagesAuthenticatorDuoRetrieveResponse = AuthenticatorDuoStage | ValidationError | GenericError;

export type StagesAuthenticatorDuoUsedByListResponse = UsedBy | ValidationError | GenericError;

export type StagesAuthenticatorSmsListResponse = PaginatedAuthenticatorSmsStageList | ValidationError | GenericError;

export type PaginatedAuthenticatorSmsStageList = {
  pagination: Pagination;
  results: Array<Maybe<AuthenticatorSmsStage>>;
};

/** AuthenticatorSMSStage Serializer */
export type AuthenticatorSmsStage = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Get object type so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  flowSet?: Maybe<Array<Maybe<FlowSet>>>;
  /** Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage. */
  configureFlow?: Maybe<Scalars['UUID']['output']>;
  friendlyName?: Maybe<Scalars['String']['output']>;
  provider: ProviderEnum;
  fromNumber: Scalars['String']['output'];
  accountSid: Scalars['String']['output'];
  auth: Scalars['String']['output'];
  authPassword?: Maybe<Scalars['String']['output']>;
  authType?: Maybe<AuthTypeEnum>;
  /** When enabled, the Phone number is only used during enrollment to verify the users authenticity. Only a hash of the phone number is saved to ensure it is not reused in the future. */
  verifyOnly?: Maybe<Scalars['Boolean']['output']>;
  /** Optionally modify the payload being sent to custom providers. */
  mapping?: Maybe<Scalars['UUID']['output']>;
};

export type ProviderEnum =
  | 'TWILIO'
  | 'GENERIC';

export type AuthTypeEnum =
  | 'BASIC'
  | 'BEARER';

export type QueryInputStagesAuthenticatorSmsListAuthType =
  | 'BASIC'
  | 'BEARER';

export type QueryInputStagesAuthenticatorSmsListProvider =
  | 'GENERIC'
  | 'TWILIO';

export type StagesAuthenticatorSmsRetrieveResponse = AuthenticatorSmsStage | ValidationError | GenericError;

export type StagesAuthenticatorSmsUsedByListResponse = UsedBy | ValidationError | GenericError;

export type StagesAuthenticatorStaticListResponse = PaginatedAuthenticatorStaticStageList | ValidationError | GenericError;

export type PaginatedAuthenticatorStaticStageList = {
  pagination: Pagination;
  results: Array<Maybe<AuthenticatorStaticStage>>;
};

/** AuthenticatorStaticStage Serializer */
export type AuthenticatorStaticStage = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Get object type so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  flowSet?: Maybe<Array<Maybe<FlowSet>>>;
  /** Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage. */
  configureFlow?: Maybe<Scalars['UUID']['output']>;
  friendlyName?: Maybe<Scalars['String']['output']>;
  tokenCount?: Maybe<Scalars['NonNegativeInt']['output']>;
  tokenLength?: Maybe<Scalars['NonNegativeInt']['output']>;
};

export type StagesAuthenticatorStaticRetrieveResponse = AuthenticatorStaticStage | ValidationError | GenericError;

export type StagesAuthenticatorStaticUsedByListResponse = UsedBy | ValidationError | GenericError;

export type StagesAuthenticatorTotpListResponse = PaginatedAuthenticatorTotpStageList | ValidationError | GenericError;

export type PaginatedAuthenticatorTotpStageList = {
  pagination: Pagination;
  results: Array<Maybe<AuthenticatorTotpStage>>;
};

/** AuthenticatorTOTPStage Serializer */
export type AuthenticatorTotpStage = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Get object type so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  flowSet?: Maybe<Array<Maybe<FlowSet>>>;
  /** Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage. */
  configureFlow?: Maybe<Scalars['UUID']['output']>;
  friendlyName?: Maybe<Scalars['String']['output']>;
  digits: DigitsEnum;
};

export type DigitsEnum =
  | '_6'
  | '_8';

export type QueryInputStagesAuthenticatorTotpListDigits =
  | '_6'
  | '_8';

export type StagesAuthenticatorTotpRetrieveResponse = AuthenticatorTotpStage | ValidationError | GenericError;

export type StagesAuthenticatorTotpUsedByListResponse = UsedBy | ValidationError | GenericError;

export type StagesAuthenticatorValidateListResponse = PaginatedAuthenticatorValidateStageList | ValidationError | GenericError;

export type PaginatedAuthenticatorValidateStageList = {
  pagination: Pagination;
  results: Array<Maybe<AuthenticatorValidateStage>>;
};

/** AuthenticatorValidateStage Serializer */
export type AuthenticatorValidateStage = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Get object type so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  flowSet?: Maybe<Array<Maybe<FlowSet>>>;
  notConfiguredAction?: Maybe<NotConfiguredActionEnum>;
  /** Device classes which can be used to authenticate */
  deviceClasses?: Maybe<Array<Maybe<DeviceClassesEnum>>>;
  /** Stages used to configure Authenticator when user doesn't have any compatible devices. After this configuration Stage passes, the user is not prompted again. */
  configurationStages?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  /** If any of the user's device has been used within this threshold, this stage will be skipped */
  lastAuthThreshold?: Maybe<Scalars['String']['output']>;
  webauthnUserVerification?: Maybe<UserVerificationEnum>;
  webauthnAllowedDeviceTypes?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  webauthnAllowedDeviceTypesObj: Array<Maybe<WebAuthnDeviceType>>;
};

export type NotConfiguredActionEnum =
  | 'SKIP'
  | 'DENY'
  | 'CONFIGURE';

export type DeviceClassesEnum =
  | 'STATIC'
  | 'TOTP'
  | 'WEBAUTHN'
  | 'DUO'
  | 'SMS';

export type UserVerificationEnum =
  | 'REQUIRED'
  | 'PREFERRED'
  | 'DISCOURAGED';

export type QueryInputStagesAuthenticatorValidateListNotConfiguredAction =
  | 'CONFIGURE'
  | 'DENY'
  | 'SKIP';

export type StagesAuthenticatorValidateRetrieveResponse = AuthenticatorValidateStage | ValidationError | GenericError;

export type StagesAuthenticatorValidateUsedByListResponse = UsedBy | ValidationError | GenericError;

export type StagesAuthenticatorWebauthnListResponse = PaginatedAuthenticatorWebAuthnStageList | ValidationError | GenericError;

export type PaginatedAuthenticatorWebAuthnStageList = {
  pagination: Pagination;
  results: Array<Maybe<AuthenticatorWebAuthnStage>>;
};

/** AuthenticatorWebAuthnStage Serializer */
export type AuthenticatorWebAuthnStage = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Get object type so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  flowSet?: Maybe<Array<Maybe<FlowSet>>>;
  /** Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage. */
  configureFlow?: Maybe<Scalars['UUID']['output']>;
  friendlyName?: Maybe<Scalars['String']['output']>;
  userVerification?: Maybe<UserVerificationEnum>;
  authenticatorAttachment?: Maybe<AuthenticatorAttachmentEnum>;
  residentKeyRequirement?: Maybe<ResidentKeyRequirementEnum>;
  deviceTypeRestrictions?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  deviceTypeRestrictionsObj: Array<Maybe<WebAuthnDeviceType>>;
};

export type AuthenticatorAttachmentEnum =
  | 'PLATFORM'
  | 'CROSS_PLATFORM';

export type ResidentKeyRequirementEnum =
  | 'DISCOURAGED'
  | 'PREFERRED'
  | 'REQUIRED';

export type QueryInputStagesAuthenticatorWebauthnListAuthenticatorAttachment =
  | 'CROSS_PLATFORM'
  | 'PLATFORM';

export type QueryInputStagesAuthenticatorWebauthnListResidentKeyRequirement =
  | 'DISCOURAGED'
  | 'PREFERRED'
  | 'REQUIRED';

export type QueryInputStagesAuthenticatorWebauthnListUserVerification =
  | 'DISCOURAGED'
  | 'PREFERRED'
  | 'REQUIRED';

export type StagesAuthenticatorWebauthnRetrieveResponse = AuthenticatorWebAuthnStage | ValidationError | GenericError;

export type StagesAuthenticatorWebauthnUsedByListResponse = UsedBy | ValidationError | GenericError;

export type StagesAuthenticatorWebauthnDeviceTypesListResponse = PaginatedWebAuthnDeviceTypeList | ValidationError | GenericError;

export type PaginatedWebAuthnDeviceTypeList = {
  pagination: Pagination;
  results: Array<Maybe<WebAuthnDeviceType>>;
};

export type StagesAuthenticatorWebauthnDeviceTypesRetrieveResponse = WebAuthnDeviceType | ValidationError | GenericError;

export type StagesCaptchaListResponse = PaginatedCaptchaStageList | ValidationError | GenericError;

export type PaginatedCaptchaStageList = {
  pagination: Pagination;
  results: Array<Maybe<CaptchaStage>>;
};

/** CaptchaStage Serializer */
export type CaptchaStage = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Get object type so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  flowSet?: Maybe<Array<Maybe<FlowSet>>>;
  /** Public key, acquired your captcha Provider. */
  publicKey: Scalars['String']['output'];
  jsUrl?: Maybe<Scalars['String']['output']>;
  apiUrl?: Maybe<Scalars['String']['output']>;
};

export type StagesCaptchaRetrieveResponse = CaptchaStage | ValidationError | GenericError;

export type StagesCaptchaUsedByListResponse = UsedBy | ValidationError | GenericError;

export type StagesConsentListResponse = PaginatedConsentStageList | ValidationError | GenericError;

export type PaginatedConsentStageList = {
  pagination: Pagination;
  results: Array<Maybe<ConsentStage>>;
};

/** ConsentStage Serializer */
export type ConsentStage = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Get object type so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  flowSet?: Maybe<Array<Maybe<FlowSet>>>;
  mode?: Maybe<ConsentStageModeEnum>;
  /** Offset after which consent expires. (Format: hours=1;minutes=2;seconds=3). */
  consentExpireIn?: Maybe<Scalars['String']['output']>;
};

export type ConsentStageModeEnum =
  | 'ALWAYS_REQUIRE'
  | 'PERMANENT'
  | 'EXPIRING';

export type QueryInputStagesConsentListMode =
  | 'ALWAYS_REQUIRE'
  | 'EXPIRING'
  | 'PERMANENT';

export type StagesConsentRetrieveResponse = ConsentStage | ValidationError | GenericError;

export type StagesConsentUsedByListResponse = UsedBy | ValidationError | GenericError;

export type StagesDenyListResponse = PaginatedDenyStageList | ValidationError | GenericError;

export type PaginatedDenyStageList = {
  pagination: Pagination;
  results: Array<Maybe<DenyStage>>;
};

/** DenyStage Serializer */
export type DenyStage = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Get object type so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  flowSet?: Maybe<Array<Maybe<FlowSet>>>;
  denyMessage?: Maybe<Scalars['String']['output']>;
};

export type StagesDenyRetrieveResponse = DenyStage | ValidationError | GenericError;

export type StagesDenyUsedByListResponse = UsedBy | ValidationError | GenericError;

export type StagesDummyListResponse = PaginatedDummyStageList | ValidationError | GenericError;

export type PaginatedDummyStageList = {
  pagination: Pagination;
  results: Array<Maybe<DummyStage>>;
};

/** DummyStage Serializer */
export type DummyStage = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Get object type so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  flowSet?: Maybe<Array<Maybe<FlowSet>>>;
  throwError?: Maybe<Scalars['Boolean']['output']>;
};

export type StagesDummyRetrieveResponse = DummyStage | ValidationError | GenericError;

export type StagesDummyUsedByListResponse = UsedBy | ValidationError | GenericError;

export type StagesEmailListResponse = PaginatedEmailStageList | ValidationError | GenericError;

export type PaginatedEmailStageList = {
  pagination: Pagination;
  results: Array<Maybe<EmailStage>>;
};

/** EmailStage Serializer */
export type EmailStage = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Get object type so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  flowSet?: Maybe<Array<Maybe<FlowSet>>>;
  /** When enabled, global Email connection settings will be used and connection settings below will be ignored. */
  useGlobalSettings?: Maybe<Scalars['Boolean']['output']>;
  host?: Maybe<Scalars['String']['output']>;
  port?: Maybe<Scalars['Int']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  useTls?: Maybe<Scalars['Boolean']['output']>;
  useSsl?: Maybe<Scalars['Boolean']['output']>;
  timeout?: Maybe<Scalars['Int']['output']>;
  fromAddress?: Maybe<Scalars['EmailAddress']['output']>;
  /** Time in minutes the token sent is valid. */
  tokenExpiry?: Maybe<Scalars['Int']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  template?: Maybe<Scalars['String']['output']>;
  /** Activate users upon completion of stage. */
  activateUserOnSuccess?: Maybe<Scalars['Boolean']['output']>;
};

export type StagesEmailRetrieveResponse = EmailStage | ValidationError | GenericError;

export type StagesEmailUsedByListResponse = UsedBy | ValidationError | GenericError;

export type StagesEmailTemplatesListResponse = TypeCreate | ValidationError | GenericError;

export type StagesIdentificationListResponse = PaginatedIdentificationStageList | ValidationError | GenericError;

export type PaginatedIdentificationStageList = {
  pagination: Pagination;
  results: Array<Maybe<IdentificationStage>>;
};

/** IdentificationStage Serializer */
export type IdentificationStage = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Get object type so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  flowSet?: Maybe<Array<Maybe<FlowSet>>>;
  /** Fields of the user object to match against. (Hold shift to select multiple options) */
  userFields?: Maybe<Array<Maybe<UserFieldsEnum>>>;
  /** When set, shows a password field, instead of showing the password field as seaprate step. */
  passwordStage?: Maybe<Scalars['UUID']['output']>;
  /** When enabled, user fields are matched regardless of their casing. */
  caseInsensitiveMatching?: Maybe<Scalars['Boolean']['output']>;
  /** When a valid username/email has been entered, and this option is enabled, the user's username and avatar will be shown. Otherwise, the text that the user entered will be shown */
  showMatchedUser?: Maybe<Scalars['Boolean']['output']>;
  /** Optional enrollment flow, which is linked at the bottom of the page. */
  enrollmentFlow?: Maybe<Scalars['UUID']['output']>;
  /** Optional recovery flow, which is linked at the bottom of the page. */
  recoveryFlow?: Maybe<Scalars['UUID']['output']>;
  /** Optional passwordless flow, which is linked at the bottom of the page. */
  passwordlessFlow?: Maybe<Scalars['UUID']['output']>;
  /** Specify which sources should be shown. */
  sources?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  showSourceLabels?: Maybe<Scalars['Boolean']['output']>;
  /** When enabled, the stage will succeed and continue even when incorrect user info is entered. */
  pretendUserExists?: Maybe<Scalars['Boolean']['output']>;
};

export type UserFieldsEnum =
  | 'EMAIL'
  | 'USERNAME'
  | 'UPN';

export type StagesIdentificationRetrieveResponse = IdentificationStage | ValidationError | GenericError;

export type StagesIdentificationUsedByListResponse = UsedBy | ValidationError | GenericError;

export type StagesInvitationInvitationsListResponse = PaginatedInvitationList | ValidationError | GenericError;

export type PaginatedInvitationList = {
  pagination: Pagination;
  results: Array<Maybe<Invitation>>;
};

/** Invitation Serializer */
export type Invitation = {
  pk: Scalars['UUID']['output'];
  name: Scalars['QueryStagesInvitationInvitationsListOneOf_0ResultsItemsName']['output'];
  expires?: Maybe<Scalars['DateTime']['output']>;
  fixedData?: Maybe<Scalars['JSON']['output']>;
  createdBy: GroupMember;
  /** When enabled, the invitation will be deleted after usage. */
  singleUse?: Maybe<Scalars['Boolean']['output']>;
  /** When set, only the configured flow can use this invitation. */
  flow?: Maybe<Scalars['UUID']['output']>;
  flowObj: Flow;
};

export type StagesInvitationInvitationsRetrieveResponse = Invitation | ValidationError | GenericError;

export type StagesInvitationInvitationsUsedByListResponse = UsedBy | ValidationError | GenericError;

export type StagesInvitationStagesListResponse = PaginatedInvitationStageList | ValidationError | GenericError;

export type PaginatedInvitationStageList = {
  pagination: Pagination;
  results: Array<Maybe<InvitationStage>>;
};

/** InvitationStage Serializer */
export type InvitationStage = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Get object type so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  flowSet?: Maybe<Array<Maybe<FlowSet>>>;
  /** If this flag is set, this Stage will jump to the next Stage when no Invitation is given. By default this Stage will cancel the Flow when no invitation is given. */
  continueFlowWithoutInvitation?: Maybe<Scalars['Boolean']['output']>;
};

export type StagesInvitationStagesRetrieveResponse = InvitationStage | ValidationError | GenericError;

export type StagesInvitationStagesUsedByListResponse = UsedBy | ValidationError | GenericError;

export type StagesPasswordListResponse = PaginatedPasswordStageList | ValidationError | GenericError;

export type PaginatedPasswordStageList = {
  pagination: Pagination;
  results: Array<Maybe<PasswordStage>>;
};

/** PasswordStage Serializer */
export type PasswordStage = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Get object type so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  flowSet?: Maybe<Array<Maybe<FlowSet>>>;
  /** Selection of backends to test the password against. */
  backends: Array<Maybe<BackendsEnum>>;
  /** Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage. */
  configureFlow?: Maybe<Scalars['UUID']['output']>;
  /** How many attempts a user has before the flow is canceled. To lock the user out, use a reputation policy and a user_write stage. */
  failedAttemptsBeforeCancel?: Maybe<Scalars['Int']['output']>;
};

export type BackendsEnum =
  | 'AUTHENTIK_CORE_AUTH_INBUILTBACKEND'
  | 'AUTHENTIK_CORE_AUTH_TOKENBACKEND'
  | 'AUTHENTIK_SOURCES_LDAP_AUTH_LDAPBACKEND';

export type StagesPasswordRetrieveResponse = PasswordStage | ValidationError | GenericError;

export type StagesPasswordUsedByListResponse = UsedBy | ValidationError | GenericError;

export type StagesPromptPromptsListResponse = PaginatedPromptList | ValidationError | GenericError;

export type PaginatedPromptList = {
  pagination: Pagination;
  results: Array<Maybe<Prompt>>;
};

/** Prompt Serializer */
export type Prompt = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Name of the form field, also used to store the value */
  fieldKey: Scalars['String']['output'];
  label: Scalars['String']['output'];
  type: PromptTypeEnum;
  required?: Maybe<Scalars['Boolean']['output']>;
  /** Optionally provide a short hint that describes the expected input value. When creating a fixed choice field, enable interpreting as expression and return a list to return multiple choices. */
  placeholder?: Maybe<Scalars['String']['output']>;
  /** Optionally pre-fill the input with an initial value. When creating a fixed choice field, enable interpreting as expression and return a list to return multiple default choices. */
  initialValue?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  promptstageSet?: Maybe<Array<Maybe<Stage>>>;
  subText?: Maybe<Scalars['String']['output']>;
  placeholderExpression?: Maybe<Scalars['Boolean']['output']>;
  initialValueExpression?: Maybe<Scalars['Boolean']['output']>;
};

export type QueryInputStagesPromptPromptsListType =
  | 'AK_LOCALE'
  | 'CHECKBOX'
  | 'DATE'
  | 'DATE_TIME'
  | 'DROPDOWN'
  | 'EMAIL'
  | 'FILE'
  | 'HIDDEN'
  | 'NUMBER'
  | 'PASSWORD'
  | 'RADIO_BUTTON_GROUP'
  | 'SEPARATOR'
  | 'STATIC'
  | 'TEXT'
  | 'TEXT_AREA'
  | 'TEXT_AREA_READ_ONLY'
  | 'TEXT_READ_ONLY'
  | 'USERNAME';

export type StagesPromptPromptsRetrieveResponse = Prompt | ValidationError | GenericError;

export type StagesPromptPromptsUsedByListResponse = UsedBy | ValidationError | GenericError;

export type StagesPromptStagesListResponse = PaginatedPromptStageList | ValidationError | GenericError;

export type PaginatedPromptStageList = {
  pagination: Pagination;
  results: Array<Maybe<PromptStage>>;
};

/** PromptStage Serializer */
export type PromptStage = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Get object type so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  flowSet?: Maybe<Array<Maybe<FlowSet>>>;
  fields: Array<Maybe<Scalars['UUID']['output']>>;
  validationPolicies?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
};

export type StagesPromptStagesRetrieveResponse = PromptStage | ValidationError | GenericError;

export type StagesPromptStagesUsedByListResponse = UsedBy | ValidationError | GenericError;

export type StagesSourceListResponse = PaginatedSourceStageList | ValidationError | GenericError;

export type PaginatedSourceStageList = {
  pagination: Pagination;
  results: Array<Maybe<SourceStage>>;
};

/** SourceStage Serializer */
export type SourceStage = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Get object type so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  flowSet?: Maybe<Array<Maybe<FlowSet>>>;
  source: Scalars['UUID']['output'];
  /** Amount of time a user can take to return from the source to continue the flow (Format: hours=-1;minutes=-2;seconds=-3) */
  resumeTimeout?: Maybe<Scalars['String']['output']>;
};

export type StagesSourceRetrieveResponse = SourceStage | ValidationError | GenericError;

export type StagesSourceUsedByListResponse = UsedBy | ValidationError | GenericError;

export type StagesUserDeleteListResponse = PaginatedUserDeleteStageList | ValidationError | GenericError;

export type PaginatedUserDeleteStageList = {
  pagination: Pagination;
  results: Array<Maybe<UserDeleteStage>>;
};

/** UserDeleteStage Serializer */
export type UserDeleteStage = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Get object type so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  flowSet?: Maybe<Array<Maybe<FlowSet>>>;
};

export type StagesUserDeleteRetrieveResponse = UserDeleteStage | ValidationError | GenericError;

export type StagesUserDeleteUsedByListResponse = UsedBy | ValidationError | GenericError;

export type StagesUserLoginListResponse = PaginatedUserLoginStageList | ValidationError | GenericError;

export type PaginatedUserLoginStageList = {
  pagination: Pagination;
  results: Array<Maybe<UserLoginStage>>;
};

/** UserLoginStage Serializer */
export type UserLoginStage = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Get object type so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  flowSet?: Maybe<Array<Maybe<FlowSet>>>;
  /** Determines how long a session lasts. Default of 0 means that the sessions lasts until the browser is closed. (Format: hours=-1;minutes=-2;seconds=-3) */
  sessionDuration?: Maybe<Scalars['String']['output']>;
  /** Terminate all other sessions of the user logging in. */
  terminateOtherSessions?: Maybe<Scalars['Boolean']['output']>;
  /** Offset the session will be extended by when the user picks the remember me option. Default of 0 means that the remember me option will not be shown. (Format: hours=-1;minutes=-2;seconds=-3) */
  rememberMeOffset?: Maybe<Scalars['String']['output']>;
  networkBinding?: Maybe<NetworkBindingEnum>;
  geoipBinding?: Maybe<GeoipBindingEnum>;
};

export type NetworkBindingEnum =
  | 'NO_BINDING'
  | 'BIND_ASN'
  | 'BIND_ASN_NETWORK'
  | 'BIND_ASN_NETWORK_IP';

export type GeoipBindingEnum =
  | 'NO_BINDING'
  | 'BIND_CONTINENT'
  | 'BIND_CONTINENT_COUNTRY'
  | 'BIND_CONTINENT_COUNTRY_CITY';

/** Bind sessions created by this stage to the configured GeoIP location */
export type QueryInputStagesUserLoginListGeoipBinding =
  | 'BIND_CONTINENT'
  | 'BIND_CONTINENT_COUNTRY'
  | 'BIND_CONTINENT_COUNTRY_CITY'
  | 'NO_BINDING';

/** Bind sessions created by this stage to the configured network */
export type QueryInputStagesUserLoginListNetworkBinding =
  | 'BIND_ASN'
  | 'BIND_ASN_NETWORK'
  | 'BIND_ASN_NETWORK_IP'
  | 'NO_BINDING';

export type StagesUserLoginRetrieveResponse = UserLoginStage | ValidationError | GenericError;

export type StagesUserLoginUsedByListResponse = UsedBy | ValidationError | GenericError;

export type StagesUserLogoutListResponse = PaginatedUserLogoutStageList | ValidationError | GenericError;

export type PaginatedUserLogoutStageList = {
  pagination: Pagination;
  results: Array<Maybe<UserLogoutStage>>;
};

/** UserLogoutStage Serializer */
export type UserLogoutStage = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Get object type so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  flowSet?: Maybe<Array<Maybe<FlowSet>>>;
};

export type StagesUserLogoutRetrieveResponse = UserLogoutStage | ValidationError | GenericError;

export type StagesUserLogoutUsedByListResponse = UsedBy | ValidationError | GenericError;

export type StagesUserWriteListResponse = PaginatedUserWriteStageList | ValidationError | GenericError;

export type PaginatedUserWriteStageList = {
  pagination: Pagination;
  results: Array<Maybe<UserWriteStage>>;
};

/** UserWriteStage Serializer */
export type UserWriteStage = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Get object type so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verboseName: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verboseNamePlural: Scalars['String']['output'];
  /** Return internal model name */
  metaModelName: Scalars['String']['output'];
  flowSet?: Maybe<Array<Maybe<FlowSet>>>;
  userCreationMode?: Maybe<UserCreationModeEnum>;
  /** When set, newly created users are inactive and cannot login. */
  createUsersAsInactive?: Maybe<Scalars['Boolean']['output']>;
  /** Optionally add newly created users to this group. */
  createUsersGroup?: Maybe<Scalars['UUID']['output']>;
  userType?: Maybe<UserTypeEnum>;
  userPathTemplate?: Maybe<Scalars['String']['output']>;
};

export type UserCreationModeEnum =
  | 'NEVER_CREATE'
  | 'CREATE_WHEN_REQUIRED'
  | 'ALWAYS_CREATE';

export type QueryInputStagesUserWriteListUserCreationMode =
  | 'ALWAYS_CREATE'
  | 'CREATE_WHEN_REQUIRED'
  | 'NEVER_CREATE';

export type QueryInputStagesUserWriteListUserType =
  | 'EXTERNAL'
  | 'INTERNAL'
  | 'INTERNAL_SERVICE_ACCOUNT'
  | 'SERVICE_ACCOUNT';

export type StagesUserWriteRetrieveResponse = UserWriteStage | ValidationError | GenericError;

export type StagesUserWriteUsedByListResponse = UsedBy | ValidationError | GenericError;

export type Mutation = {
  /** Application Viewset */
  coreApplicationsCreate?: Maybe<CoreApplicationsCreateResponse>;
  /** Application Viewset */
  coreApplicationsUpdate?: Maybe<CoreApplicationsUpdateResponse>;
  /** Application Viewset */
  coreApplicationsPartialUpdate?: Maybe<CoreApplicationsPartialUpdateResponse>;
  /** Application Viewset */
  coreApplicationsDestroy?: Maybe<CoreApplicationsDestroyResponse>;
  /** Set application icon */
  coreApplicationsSetIconCreate?: Maybe<GenericError>;
  /** Set application icon (as URL) */
  coreApplicationsSetIconUrlCreate?: Maybe<GenericError>;
  /** FlowStageBinding Viewset */
  flowsBindingsCreate?: Maybe<FlowsBindingsCreateResponse>;
  /** FlowStageBinding Viewset */
  flowsBindingsUpdate?: Maybe<FlowsBindingsUpdateResponse>;
  /** FlowStageBinding Viewset */
  flowsBindingsPartialUpdate?: Maybe<FlowsBindingsPartialUpdateResponse>;
  /** FlowStageBinding Viewset */
  flowsBindingsDestroy?: Maybe<FlowsBindingsDestroyResponse>;
  /** Solve the previously retrieved challenge and advanced to the next stage. */
  flowsExecutorSolve?: Maybe<FlowsExecutorSolveResponse>;
  /** Flow Viewset */
  flowsInstancesCreate?: Maybe<FlowsInstancesCreateResponse>;
  /** Flow Viewset */
  flowsInstancesUpdate?: Maybe<FlowsInstancesUpdateResponse>;
  /** Flow Viewset */
  flowsInstancesPartialUpdate?: Maybe<FlowsInstancesPartialUpdateResponse>;
  /** Flow Viewset */
  flowsInstancesDestroy?: Maybe<FlowsInstancesDestroyResponse>;
  /** Set Flow background */
  flowsInstancesSetBackgroundCreate?: Maybe<GenericError>;
  /** Set Flow background (as URL) */
  flowsInstancesSetBackgroundUrlCreate?: Maybe<GenericError>;
  /** Clear flow cache */
  flowsInstancesCacheClearCreate?: Maybe<FlowsInstancesCacheClearCreateResponse>;
  /** Import flow from .yaml file */
  flowsInstancesImportCreate?: Maybe<FlowsInstancesImportCreateResponse>;
  /** Provider Viewset */
  providersAllDestroy?: Maybe<ProvidersAllDestroyResponse>;
};


export type MutationcoreApplicationsCreateArgs = {
  input?: InputMaybe<ApplicationRequestInput>;
};


export type MutationcoreApplicationsUpdateArgs = {
  slug: Scalars['String']['input'];
  input?: InputMaybe<ApplicationRequestInput>;
};


export type MutationcoreApplicationsPartialUpdateArgs = {
  slug: Scalars['String']['input'];
  input?: InputMaybe<PatchedApplicationRequestInput>;
};


export type MutationcoreApplicationsDestroyArgs = {
  slug: Scalars['String']['input'];
};


export type MutationcoreApplicationsSetIconCreateArgs = {
  slug: Scalars['String']['input'];
  input?: InputMaybe<FileUploadRequestInput>;
};


export type MutationcoreApplicationsSetIconUrlCreateArgs = {
  slug: Scalars['String']['input'];
  input?: InputMaybe<FilePathRequestInput>;
};


export type MutationflowsBindingsCreateArgs = {
  input?: InputMaybe<FlowStageBindingRequestInput>;
};


export type MutationflowsBindingsUpdateArgs = {
  fsbUuid: Scalars['UUID']['input'];
  input?: InputMaybe<FlowStageBindingRequestInput>;
};


export type MutationflowsBindingsPartialUpdateArgs = {
  fsbUuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedFlowStageBindingRequestInput>;
};


export type MutationflowsBindingsDestroyArgs = {
  fsbUuid: Scalars['UUID']['input'];
};


export type MutationflowsExecutorSolveArgs = {
  flowSlug: Scalars['String']['input'];
  query: Scalars['String']['input'];
  input?: InputMaybe<FlowChallengeResponseRequestInput>;
};


export type MutationflowsInstancesCreateArgs = {
  input?: InputMaybe<FlowRequestInput>;
};


export type MutationflowsInstancesUpdateArgs = {
  slug: Scalars['String']['input'];
  input?: InputMaybe<FlowRequestInput>;
};


export type MutationflowsInstancesPartialUpdateArgs = {
  slug: Scalars['String']['input'];
  input?: InputMaybe<PatchedFlowRequestInput>;
};


export type MutationflowsInstancesDestroyArgs = {
  slug: Scalars['String']['input'];
};


export type MutationflowsInstancesSetBackgroundCreateArgs = {
  slug: Scalars['String']['input'];
  input?: InputMaybe<FileUploadRequestInput>;
};


export type MutationflowsInstancesSetBackgroundUrlCreateArgs = {
  slug: Scalars['String']['input'];
  input?: InputMaybe<FilePathRequestInput>;
};


export type MutationflowsInstancesImportCreateArgs = {
  input?: InputMaybe<FileUploadRequestInput>;
};


export type MutationprovidersAllDestroyArgs = {
  id: Scalars['Int']['input'];
};

export type AdminSettingsUpdateResponse = Settings | ValidationError | GenericError;

/** Settings Serializer */
export type SettingsRequestInput = {
  /** Configure how authentik should show avatars for users. */
  avatars?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Enable the ability for users to change their name. */
  defaultUserChangeName?: InputMaybe<Scalars['Boolean']['input']>;
  /** Enable the ability for users to change their email address. */
  defaultUserChangeEmail?: InputMaybe<Scalars['Boolean']['input']>;
  /** Enable the ability for users to change their username. */
  defaultUserChangeUsername?: InputMaybe<Scalars['Boolean']['input']>;
  /** Events will be deleted after this duration.(Format: weeks=3;days=2;hours=3,seconds=2). */
  eventRetention?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** The option configures the footer links on the flow executor pages. */
  footerLinks?: InputMaybe<Scalars['JSON']['input']>;
  /** When enabled, all the events caused by a user will be deleted upon the user's deletion. */
  gdprCompliance?: InputMaybe<Scalars['Boolean']['input']>;
  /** Globally enable/disable impersonation. */
  impersonation?: InputMaybe<Scalars['Boolean']['input']>;
  /** Default token duration */
  defaultTokenDuration?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Default token length */
  defaultTokenLength?: InputMaybe<Scalars['PositiveInt']['input']>;
};

export type AdminSettingsPartialUpdateResponse = Settings | ValidationError | GenericError;

/** Settings Serializer */
export type PatchedSettingsRequestInput = {
  /** Configure how authentik should show avatars for users. */
  avatars?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Enable the ability for users to change their name. */
  defaultUserChangeName?: InputMaybe<Scalars['Boolean']['input']>;
  /** Enable the ability for users to change their email address. */
  defaultUserChangeEmail?: InputMaybe<Scalars['Boolean']['input']>;
  /** Enable the ability for users to change their username. */
  defaultUserChangeUsername?: InputMaybe<Scalars['Boolean']['input']>;
  /** Events will be deleted after this duration.(Format: weeks=3;days=2;hours=3,seconds=2). */
  eventRetention?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** The option configures the footer links on the flow executor pages. */
  footerLinks?: InputMaybe<Scalars['JSON']['input']>;
  /** When enabled, all the events caused by a user will be deleted upon the user's deletion. */
  gdprCompliance?: InputMaybe<Scalars['Boolean']['input']>;
  /** Globally enable/disable impersonation. */
  impersonation?: InputMaybe<Scalars['Boolean']['input']>;
  /** Default token duration */
  defaultTokenDuration?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Default token length */
  defaultTokenLength?: InputMaybe<Scalars['PositiveInt']['input']>;
};

export type AdminSystemCreateResponse = SystemInfo | ValidationError | GenericError;

export type AuthenticatorsAdminDuoCreateResponse = DuoDevice | ValidationError | GenericError;

/** Serializer for Duo authenticator devices */
export type DuoDeviceRequestInput = {
  /** The human-readable name of this device. */
  name: Scalars['MutationInputAuthenticatorsAdminDuoCreateInputName']['input'];
};

export type AuthenticatorsAdminDuoUpdateResponse = DuoDevice | ValidationError | GenericError;

export type AuthenticatorsAdminDuoPartialUpdateResponse = DuoDevice | ValidationError | GenericError;

/** Serializer for Duo authenticator devices */
export type PatchedDuoDeviceRequestInput = {
  /** The human-readable name of this device. */
  name?: InputMaybe<Scalars['MutationInputAuthenticatorsAdminDuoPartialUpdateInputName']['input']>;
};

export type AuthenticatorsAdminDuoDestroyResponse = VoidContainer | ValidationError | GenericError;

export type AuthenticatorsAdminSmsCreateResponse = SmsDevice | ValidationError | GenericError;

/** Serializer for sms authenticator devices */
export type SmsDeviceRequestInput = {
  /** The human-readable name of this device. */
  name: Scalars['MutationInputAuthenticatorsAdminSmsCreateInputName']['input'];
};

export type AuthenticatorsAdminSmsUpdateResponse = SmsDevice | ValidationError | GenericError;

export type AuthenticatorsAdminSmsPartialUpdateResponse = SmsDevice | ValidationError | GenericError;

/** Serializer for sms authenticator devices */
export type PatchedSmsDeviceRequestInput = {
  /** The human-readable name of this device. */
  name?: InputMaybe<Scalars['MutationInputAuthenticatorsAdminSmsPartialUpdateInputName']['input']>;
};

export type AuthenticatorsAdminSmsDestroyResponse = VoidContainer | ValidationError | GenericError;

export type AuthenticatorsAdminStaticCreateResponse = StaticDevice | ValidationError | GenericError;

/** Serializer for static authenticator devices */
export type StaticDeviceRequestInput = {
  /** The human-readable name of this device. */
  name: Scalars['MutationInputAuthenticatorsAdminStaticCreateInputName']['input'];
};

export type AuthenticatorsAdminStaticUpdateResponse = StaticDevice | ValidationError | GenericError;

export type AuthenticatorsAdminStaticPartialUpdateResponse = StaticDevice | ValidationError | GenericError;

/** Serializer for static authenticator devices */
export type PatchedStaticDeviceRequestInput = {
  /** The human-readable name of this device. */
  name?: InputMaybe<Scalars['MutationInputAuthenticatorsAdminStaticPartialUpdateInputName']['input']>;
};

export type AuthenticatorsAdminStaticDestroyResponse = VoidContainer | ValidationError | GenericError;

export type AuthenticatorsAdminTotpCreateResponse = TotpDevice | ValidationError | GenericError;

/** Serializer for totp authenticator devices */
export type TotpDeviceRequestInput = {
  /** The human-readable name of this device. */
  name: Scalars['MutationInputAuthenticatorsAdminTotpCreateInputName']['input'];
};

export type AuthenticatorsAdminTotpUpdateResponse = TotpDevice | ValidationError | GenericError;

export type AuthenticatorsAdminTotpPartialUpdateResponse = TotpDevice | ValidationError | GenericError;

/** Serializer for totp authenticator devices */
export type PatchedTotpDeviceRequestInput = {
  /** The human-readable name of this device. */
  name?: InputMaybe<Scalars['MutationInputAuthenticatorsAdminTotpPartialUpdateInputName']['input']>;
};

export type AuthenticatorsAdminTotpDestroyResponse = VoidContainer | ValidationError | GenericError;

export type AuthenticatorsAdminWebauthnCreateResponse = WebAuthnDevice | ValidationError | GenericError;

/** Serializer for WebAuthn authenticator devices */
export type WebAuthnDeviceRequestInput = {
  name: Scalars['MutationInputAuthenticatorsAdminWebauthnCreateInputName']['input'];
};

export type AuthenticatorsAdminWebauthnUpdateResponse = WebAuthnDevice | ValidationError | GenericError;

export type AuthenticatorsAdminWebauthnPartialUpdateResponse = WebAuthnDevice | ValidationError | GenericError;

/** Serializer for WebAuthn authenticator devices */
export type PatchedWebAuthnDeviceRequestInput = {
  name?: InputMaybe<Scalars['MutationInputAuthenticatorsAdminWebauthnPartialUpdateInputName']['input']>;
};

export type AuthenticatorsAdminWebauthnDestroyResponse = VoidContainer | ValidationError | GenericError;

export type AuthenticatorsDuoUpdateResponse = DuoDevice | ValidationError | GenericError;

export type AuthenticatorsDuoPartialUpdateResponse = DuoDevice | ValidationError | GenericError;

export type AuthenticatorsDuoDestroyResponse = VoidContainer | ValidationError | GenericError;

export type AuthenticatorsSmsUpdateResponse = SmsDevice | ValidationError | GenericError;

export type AuthenticatorsSmsPartialUpdateResponse = SmsDevice | ValidationError | GenericError;

export type AuthenticatorsSmsDestroyResponse = VoidContainer | ValidationError | GenericError;

export type AuthenticatorsStaticUpdateResponse = StaticDevice | ValidationError | GenericError;

export type AuthenticatorsStaticPartialUpdateResponse = StaticDevice | ValidationError | GenericError;

export type AuthenticatorsStaticDestroyResponse = VoidContainer | ValidationError | GenericError;

export type AuthenticatorsTotpUpdateResponse = TotpDevice | ValidationError | GenericError;

export type AuthenticatorsTotpPartialUpdateResponse = TotpDevice | ValidationError | GenericError;

export type AuthenticatorsTotpDestroyResponse = VoidContainer | ValidationError | GenericError;

export type AuthenticatorsWebauthnUpdateResponse = WebAuthnDevice | ValidationError | GenericError;

export type AuthenticatorsWebauthnPartialUpdateResponse = WebAuthnDevice | ValidationError | GenericError;

export type AuthenticatorsWebauthnDestroyResponse = VoidContainer | ValidationError | GenericError;

export type CoreApplicationsCreateResponse = Application | ValidationError | GenericError;

/** Application Serializer */
export type ApplicationRequestInput = {
  /** Application's display Name. */
  name: Scalars['NonEmptyString']['input'];
  slug: Scalars['MutationInputCoreApplicationsCreateInputSlug']['input'];
  provider?: InputMaybe<Scalars['Int']['input']>;
  backchannelProviders?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** Open launch URL in a new browser tab or window. */
  openInNewTab?: InputMaybe<Scalars['Boolean']['input']>;
  metaLaunchUrl?: InputMaybe<Scalars['URL']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaPublisher?: InputMaybe<Scalars['String']['input']>;
  policyEngineMode?: InputMaybe<PolicyEngineMode>;
  group?: InputMaybe<Scalars['String']['input']>;
};

export type CoreApplicationsUpdateResponse = Application | ValidationError | GenericError;

export type CoreApplicationsPartialUpdateResponse = Application | ValidationError | GenericError;

/** Application Serializer */
export type PatchedApplicationRequestInput = {
  /** Application's display Name. */
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  slug?: InputMaybe<Scalars['MutationInputCoreApplicationsPartialUpdateInputSlug']['input']>;
  provider?: InputMaybe<Scalars['Int']['input']>;
  backchannelProviders?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** Open launch URL in a new browser tab or window. */
  openInNewTab?: InputMaybe<Scalars['Boolean']['input']>;
  metaLaunchUrl?: InputMaybe<Scalars['URL']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaPublisher?: InputMaybe<Scalars['String']['input']>;
  policyEngineMode?: InputMaybe<PolicyEngineMode>;
  group?: InputMaybe<Scalars['String']['input']>;
};

export type CoreApplicationsDestroyResponse = VoidContainer | ValidationError | GenericError;

/** Serializer to upload file */
export type FileUploadRequestInput = {
  file?: InputMaybe<Scalars['File']['input']>;
  clear?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Serializer to upload file */
export type FilePathRequestInput = {
  url: Scalars['NonEmptyString']['input'];
};

export type CoreAuthenticatedSessionsDestroyResponse = VoidContainer | ValidationError | GenericError;

export type CoreBrandsCreateResponse = Brand | ValidationError | GenericError;

/** Brand Serializer */
export type BrandRequestInput = {
  /** Domain that activates this brand. Can be a superset, i.e. `a.b` for `aa.b` and `ba.b` */
  domain: Scalars['NonEmptyString']['input'];
  default?: InputMaybe<Scalars['Boolean']['input']>;
  brandingTitle?: InputMaybe<Scalars['NonEmptyString']['input']>;
  brandingLogo?: InputMaybe<Scalars['NonEmptyString']['input']>;
  brandingFavicon?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flowAuthentication?: InputMaybe<Scalars['UUID']['input']>;
  flowInvalidation?: InputMaybe<Scalars['UUID']['input']>;
  flowRecovery?: InputMaybe<Scalars['UUID']['input']>;
  flowUnenrollment?: InputMaybe<Scalars['UUID']['input']>;
  flowUserSettings?: InputMaybe<Scalars['UUID']['input']>;
  flowDeviceCode?: InputMaybe<Scalars['UUID']['input']>;
  /** Web Certificate used by the authentik Core webserver. */
  webCertificate?: InputMaybe<Scalars['UUID']['input']>;
  attributes?: InputMaybe<Scalars['JSON']['input']>;
};

export type CoreBrandsUpdateResponse = Brand | ValidationError | GenericError;

export type CoreBrandsPartialUpdateResponse = Brand | ValidationError | GenericError;

/** Brand Serializer */
export type PatchedBrandRequestInput = {
  /** Domain that activates this brand. Can be a superset, i.e. `a.b` for `aa.b` and `ba.b` */
  domain?: InputMaybe<Scalars['NonEmptyString']['input']>;
  default?: InputMaybe<Scalars['Boolean']['input']>;
  brandingTitle?: InputMaybe<Scalars['NonEmptyString']['input']>;
  brandingLogo?: InputMaybe<Scalars['NonEmptyString']['input']>;
  brandingFavicon?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flowAuthentication?: InputMaybe<Scalars['UUID']['input']>;
  flowInvalidation?: InputMaybe<Scalars['UUID']['input']>;
  flowRecovery?: InputMaybe<Scalars['UUID']['input']>;
  flowUnenrollment?: InputMaybe<Scalars['UUID']['input']>;
  flowUserSettings?: InputMaybe<Scalars['UUID']['input']>;
  flowDeviceCode?: InputMaybe<Scalars['UUID']['input']>;
  /** Web Certificate used by the authentik Core webserver. */
  webCertificate?: InputMaybe<Scalars['UUID']['input']>;
  attributes?: InputMaybe<Scalars['JSON']['input']>;
};

export type CoreBrandsDestroyResponse = VoidContainer | ValidationError | GenericError;

export type CoreGroupsCreateResponse = Group | ValidationError | GenericError;

/** Group Serializer */
export type GroupRequestInput = {
  name: Scalars['MutationInputCoreGroupsCreateInputName']['input'];
  /** Users added to this group will be superusers. */
  isSuperuser?: InputMaybe<Scalars['Boolean']['input']>;
  parent?: InputMaybe<Scalars['UUID']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  attributes?: InputMaybe<Scalars['JSON']['input']>;
  roles?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
};

export type CoreGroupsUpdateResponse = Group | ValidationError | GenericError;

export type CoreGroupsPartialUpdateResponse = Group | ValidationError | GenericError;

/** Group Serializer */
export type PatchedGroupRequestInput = {
  name?: InputMaybe<Scalars['MutationInputCoreGroupsPartialUpdateInputName']['input']>;
  /** Users added to this group will be superusers. */
  isSuperuser?: InputMaybe<Scalars['Boolean']['input']>;
  parent?: InputMaybe<Scalars['UUID']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  attributes?: InputMaybe<Scalars['JSON']['input']>;
  roles?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
};

export type CoreGroupsDestroyResponse = VoidContainer | ValidationError | GenericError;

export type CoreGroupsAddUserCreateResponse = VoidContainer | ValidationError | GenericError;

/** Account adding/removing operations */
export type UserAccountRequestInput = {
  pk: Scalars['Int']['input'];
};

export type CoreGroupsRemoveUserCreateResponse = VoidContainer | ValidationError | GenericError;

export type CoreTokensCreateResponse = Token | ValidationError | GenericError;

/** Token Serializer */
export type TokenRequestInput = {
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: InputMaybe<Scalars['NonEmptyString']['input']>;
  identifier: Scalars['MutationInputCoreTokensCreateInputIdentifier']['input'];
  intent?: InputMaybe<IntentEnum>;
  user?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expires?: InputMaybe<Scalars['DateTime']['input']>;
  expiring?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CoreTokensUpdateResponse = Token | ValidationError | GenericError;

export type CoreTokensPartialUpdateResponse = Token | ValidationError | GenericError;

/** Token Serializer */
export type PatchedTokenRequestInput = {
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: InputMaybe<Scalars['NonEmptyString']['input']>;
  identifier?: InputMaybe<Scalars['MutationInputCoreTokensPartialUpdateInputIdentifier']['input']>;
  intent?: InputMaybe<IntentEnum>;
  user?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expires?: InputMaybe<Scalars['DateTime']['input']>;
  expiring?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CoreTokensDestroyResponse = VoidContainer | ValidationError | GenericError;

export type CoreTokensSetKeyCreateResponse = VoidContainer | GenericError;

export type TokenSetKeyRequestInput = {
  key: Scalars['NonEmptyString']['input'];
};

export type CoreTransactionalApplicationsUpdateResponse = TransactionApplicationResponse | ValidationError | GenericError;

/** Transactional creation response */
export type TransactionApplicationResponse = {
  applied: Scalars['Boolean']['output'];
  logs: Array<Maybe<Scalars['String']['output']>>;
};

/** Serializer for creating a provider and an application in one transaction */
export type TransactionApplicationRequestInput = {
  app: ApplicationRequestInput;
  providerModel: ProviderModelEnum;
  provider: ModelRequestInput;
};

export type ProviderModelEnum =
  | 'AUTHENTIK_PROVIDERS_LDAP_LDAPPROVIDER'
  | 'AUTHENTIK_PROVIDERS_OAUTH2_OAUTH2PROVIDER'
  | 'AUTHENTIK_PROVIDERS_PROXY_PROXYPROVIDER'
  | 'AUTHENTIK_PROVIDERS_RAC_RACPROVIDER'
  | 'AUTHENTIK_PROVIDERS_RADIUS_RADIUSPROVIDER'
  | 'AUTHENTIK_PROVIDERS_SAML_SAMLPROVIDER'
  | 'AUTHENTIK_PROVIDERS_SCIM_SCIMPROVIDER';

export type ModelRequestInput =
  { ldapProviderRequestInput: LdapProviderRequestInput; oAuth2ProviderRequestInput?: never; proxyProviderRequestInput?: never; racProviderRequestInput?: never; radiusProviderRequestInput?: never; samlProviderRequestInput?: never; scimProviderRequestInput?: never; }
  |  { ldapProviderRequestInput?: never; oAuth2ProviderRequestInput: OAuth2ProviderRequestInput; proxyProviderRequestInput?: never; racProviderRequestInput?: never; radiusProviderRequestInput?: never; samlProviderRequestInput?: never; scimProviderRequestInput?: never; }
  |  { ldapProviderRequestInput?: never; oAuth2ProviderRequestInput?: never; proxyProviderRequestInput: ProxyProviderRequestInput; racProviderRequestInput?: never; radiusProviderRequestInput?: never; samlProviderRequestInput?: never; scimProviderRequestInput?: never; }
  |  { ldapProviderRequestInput?: never; oAuth2ProviderRequestInput?: never; proxyProviderRequestInput?: never; racProviderRequestInput: RacProviderRequestInput; radiusProviderRequestInput?: never; samlProviderRequestInput?: never; scimProviderRequestInput?: never; }
  |  { ldapProviderRequestInput?: never; oAuth2ProviderRequestInput?: never; proxyProviderRequestInput?: never; racProviderRequestInput?: never; radiusProviderRequestInput: RadiusProviderRequestInput; samlProviderRequestInput?: never; scimProviderRequestInput?: never; }
  |  { ldapProviderRequestInput?: never; oAuth2ProviderRequestInput?: never; proxyProviderRequestInput?: never; racProviderRequestInput?: never; radiusProviderRequestInput?: never; samlProviderRequestInput: SamlProviderRequestInput; scimProviderRequestInput?: never; }
  |  { ldapProviderRequestInput?: never; oAuth2ProviderRequestInput?: never; proxyProviderRequestInput?: never; racProviderRequestInput?: never; radiusProviderRequestInput?: never; samlProviderRequestInput?: never; scimProviderRequestInput: ScimProviderRequestInput; };

/** LDAPProvider Serializer */
export type LdapProviderRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  /** Flow used for authentication when the associated application is accessed by an un-authenticated user. */
  authenticationFlow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow used when authorizing this provider. */
  authorizationFlow: Scalars['UUID']['input'];
  propertyMappings?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** DN under which objects are accessible. */
  baseDn?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Users in this group can do search queries. If not set, every user can execute search queries. */
  searchGroup?: InputMaybe<Scalars['UUID']['input']>;
  certificate?: InputMaybe<Scalars['UUID']['input']>;
  tlsServerName?: InputMaybe<Scalars['String']['input']>;
  /** The start for uidNumbers, this number is added to the user.pk to make sure that the numbers aren't too low for POSIX users. Default is 2000 to ensure that we don't collide with local users uidNumber */
  uidStartNumber?: InputMaybe<Scalars['Int']['input']>;
  /** The start for gidNumbers, this number is added to a number generated from the group.pk to make sure that the numbers aren't too low for POSIX groups. Default is 4000 to ensure that we don't collide with local groups or users primary groups gidNumber */
  gidStartNumber?: InputMaybe<Scalars['Int']['input']>;
  searchMode?: InputMaybe<LdapapiAccessMode>;
  bindMode?: InputMaybe<LdapapiAccessMode>;
  /** When enabled, code-based multi-factor authentication can be used by appending a semicolon and the TOTP code to the password. This should only be enabled if all users that will bind to this provider have a TOTP device configured, as otherwise a password may incorrectly be rejected if it contains a semicolon. */
  mfaSupport?: InputMaybe<Scalars['Boolean']['input']>;
};

/** OAuth2Provider Serializer */
export type OAuth2ProviderRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  /** Flow used for authentication when the associated application is accessed by an un-authenticated user. */
  authenticationFlow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow used when authorizing this provider. */
  authorizationFlow: Scalars['UUID']['input'];
  propertyMappings?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  clientType?: InputMaybe<ClientTypeEnum>;
  clientId?: InputMaybe<Scalars['MutationInputCoreTransactionalApplicationsUpdateInputProviderOneOf_1ClientId']['input']>;
  clientSecret?: InputMaybe<Scalars['MutationInputCoreTransactionalApplicationsUpdateInputProviderOneOf_1ClientSecret']['input']>;
  /** Access codes not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  accessCodeValidity?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Tokens not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  accessTokenValidity?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Tokens not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  refreshTokenValidity?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Include User claims from scopes in the id_token, for applications that don't access the userinfo endpoint. */
  includeClaimsInIdToken?: InputMaybe<Scalars['Boolean']['input']>;
  /** Key used to sign the tokens. Only required when JWT Algorithm is set to RS256. */
  signingKey?: InputMaybe<Scalars['UUID']['input']>;
  /** Enter each URI on a new line. */
  redirectUris?: InputMaybe<Scalars['String']['input']>;
  subMode?: InputMaybe<SubModeEnum>;
  issuerMode?: InputMaybe<IssuerModeEnum>;
  jwksSources?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
};

/** ProxyProvider Serializer */
export type ProxyProviderRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  /** Flow used for authentication when the associated application is accessed by an un-authenticated user. */
  authenticationFlow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow used when authorizing this provider. */
  authorizationFlow: Scalars['UUID']['input'];
  propertyMappings?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  internalHost?: InputMaybe<Scalars['URL']['input']>;
  externalHost: Scalars['URL']['input'];
  /** Validate SSL Certificates of upstream servers */
  internalHostSslValidation?: InputMaybe<Scalars['Boolean']['input']>;
  certificate?: InputMaybe<Scalars['UUID']['input']>;
  /** Regular expressions for which authentication is not required. Each new line is interpreted as a new Regular Expression. */
  skipPathRegex?: InputMaybe<Scalars['String']['input']>;
  /** Set a custom HTTP-Basic Authentication header based on values from authentik. */
  basicAuthEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** User/Group Attribute used for the password part of the HTTP-Basic Header. */
  basicAuthPasswordAttribute?: InputMaybe<Scalars['String']['input']>;
  /** User/Group Attribute used for the user part of the HTTP-Basic Header. If not set, the user's Email address is used. */
  basicAuthUserAttribute?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<ProxyMode>;
  /** When enabled, this provider will intercept the authorization header and authenticate requests based on its value. */
  interceptHeaderAuth?: InputMaybe<Scalars['Boolean']['input']>;
  cookieDomain?: InputMaybe<Scalars['String']['input']>;
  jwksSources?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** Tokens not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  accessTokenValidity?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Tokens not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  refreshTokenValidity?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

/** RACProvider Serializer */
export type RacProviderRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  /** Flow used for authentication when the associated application is accessed by an un-authenticated user. */
  authenticationFlow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow used when authorizing this provider. */
  authorizationFlow: Scalars['UUID']['input'];
  propertyMappings?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  settings?: InputMaybe<Scalars['JSON']['input']>;
  /** Determines how long a session lasts. Default of 0 means that the sessions lasts until the browser is closed. (Format: hours=-1;minutes=-2;seconds=-3) */
  connectionExpiry?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** When set to true, connection tokens will be deleted upon disconnect. */
  deleteTokenOnDisconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** RadiusProvider Serializer */
export type RadiusProviderRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  /** Flow used for authentication when the associated application is accessed by an un-authenticated user. */
  authenticationFlow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow used when authorizing this provider. */
  authorizationFlow: Scalars['UUID']['input'];
  propertyMappings?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** List of CIDRs (comma-separated) that clients can connect from. A more specific CIDR will match before a looser one. Clients connecting from a non-specified CIDR will be dropped. */
  clientNetworks?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Shared secret between clients and server to hash packets. */
  sharedSecret?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** When enabled, code-based multi-factor authentication can be used by appending a semicolon and the TOTP code to the password. This should only be enabled if all users that will bind to this provider have a TOTP device configured, as otherwise a password may incorrectly be rejected if it contains a semicolon. */
  mfaSupport?: InputMaybe<Scalars['Boolean']['input']>;
};

/** SAMLProvider Serializer */
export type SamlProviderRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  /** Flow used for authentication when the associated application is accessed by an un-authenticated user. */
  authenticationFlow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow used when authorizing this provider. */
  authorizationFlow: Scalars['UUID']['input'];
  propertyMappings?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  acsUrl: Scalars['URL']['input'];
  /** Value of the audience restriction field of the assertion. When left empty, no audience restriction will be added. */
  audience?: InputMaybe<Scalars['String']['input']>;
  /** Also known as EntityID */
  issuer?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Assertion valid not before current time + this value (Format: hours=-1;minutes=-2;seconds=-3). */
  assertionValidNotBefore?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Assertion not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  assertionValidNotOnOrAfter?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Session not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  sessionValidNotOnOrAfter?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Configure how the NameID value will be created. When left empty, the NameIDPolicy of the incoming request will be considered */
  nameIdMapping?: InputMaybe<Scalars['UUID']['input']>;
  digestAlgorithm?: InputMaybe<DigestAlgorithmEnum>;
  signatureAlgorithm?: InputMaybe<SignatureAlgorithmEnum>;
  /** Keypair used to sign outgoing Responses going to the Service Provider. */
  signingKp?: InputMaybe<Scalars['UUID']['input']>;
  /** When selected, incoming assertion's Signatures will be validated against this certificate. To allow unsigned Requests, leave on default. */
  verificationKp?: InputMaybe<Scalars['UUID']['input']>;
  /** This determines how authentik sends the response back to the Service Provider. */
  spBinding?: InputMaybe<Scalars['JSON']['input']>;
  /** Default relay_state value for IDP-initiated logins */
  defaultRelayState?: InputMaybe<Scalars['String']['input']>;
};

/** SCIMProvider Serializer */
export type ScimProviderRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  propertyMappings?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** Property mappings used for group creation/updating. */
  propertyMappingsGroup?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** Base URL to SCIM requests, usually ends in /v2 */
  url: Scalars['NonEmptyString']['input'];
  /** Authentication token */
  token: Scalars['NonEmptyString']['input'];
  excludeUsersServiceAccount?: InputMaybe<Scalars['Boolean']['input']>;
  filterGroup?: InputMaybe<Scalars['UUID']['input']>;
};

export type CoreUserConsentDestroyResponse = VoidContainer | ValidationError | GenericError;

export type CoreUsersCreateResponse = User | ValidationError | GenericError;

/** User Serializer */
export type UserRequestInput = {
  username: Scalars['MutationInputCoreUsersCreateInputUsername']['input'];
  /** User's display name. */
  name: Scalars['String']['input'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  lastLogin?: InputMaybe<Scalars['DateTime']['input']>;
  groups?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  email?: InputMaybe<Scalars['EmailAddress']['input']>;
  attributes?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Scalars['NonEmptyString']['input']>;
  type?: InputMaybe<UserTypeEnum>;
};

export type CoreUsersUpdateResponse = User | ValidationError | GenericError;

export type CoreUsersPartialUpdateResponse = User | ValidationError | GenericError;

/** User Serializer */
export type PatchedUserRequestInput = {
  username?: InputMaybe<Scalars['MutationInputCoreUsersPartialUpdateInputUsername']['input']>;
  /** User's display name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  lastLogin?: InputMaybe<Scalars['DateTime']['input']>;
  groups?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  email?: InputMaybe<Scalars['EmailAddress']['input']>;
  attributes?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Scalars['NonEmptyString']['input']>;
  type?: InputMaybe<UserTypeEnum>;
};

export type CoreUsersDestroyResponse = VoidContainer | ValidationError | GenericError;

export type CoreUsersImpersonateCreateResponse = VoidContainer | ValidationError | GenericError;

export type CoreUsersRecoveryCreateResponse = Link | ValidationError | GenericError;

export type CoreUsersRecoveryEmailCreateResponse = VoidContainer | ValidationError | GenericError;

export type CoreUsersSetPasswordCreateResponse = VoidContainer | GenericError;

export type UserPasswordSetRequestInput = {
  password: Scalars['NonEmptyString']['input'];
};

export type CoreUsersServiceAccountCreateResponse = UserServiceAccountResponse | ValidationError | GenericError;

export type UserServiceAccountResponse = {
  username: Scalars['String']['output'];
  token: Scalars['String']['output'];
  userUid: Scalars['String']['output'];
  userPk: Scalars['Int']['output'];
  groupPk?: Maybe<Scalars['String']['output']>;
};

export type UserServiceAccountRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  createGroup?: InputMaybe<Scalars['Boolean']['input']>;
  expiring?: InputMaybe<Scalars['Boolean']['input']>;
  /** If not provided, valid for 360 days */
  expires?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CryptoCertificatekeypairsCreateResponse = CertificateKeyPair | ValidationError | GenericError;

/** CertificateKeyPair Serializer */
export type CertificateKeyPairRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  /** PEM-encoded Certificate data */
  certificateData: Scalars['NonEmptyString']['input'];
  /** Optional Private Key. If this is set, you can use this keypair for encryption. */
  keyData?: InputMaybe<Scalars['String']['input']>;
};

export type CryptoCertificatekeypairsUpdateResponse = CertificateKeyPair | ValidationError | GenericError;

export type CryptoCertificatekeypairsPartialUpdateResponse = CertificateKeyPair | ValidationError | GenericError;

/** CertificateKeyPair Serializer */
export type PatchedCertificateKeyPairRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** PEM-encoded Certificate data */
  certificateData?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Optional Private Key. If this is set, you can use this keypair for encryption. */
  keyData?: InputMaybe<Scalars['String']['input']>;
};

export type CryptoCertificatekeypairsDestroyResponse = VoidContainer | ValidationError | GenericError;

export type CryptoCertificatekeypairsGenerateCreateResponse = CertificateKeyPair | GenericError;

/** Certificate generation parameters */
export type CertificateGenerationRequestInput = {
  commonName: Scalars['NonEmptyString']['input'];
  subjectAltName?: InputMaybe<Scalars['String']['input']>;
  validityDays: Scalars['Int']['input'];
  alg?: InputMaybe<AlgEnum>;
};

export type AlgEnum =
  | 'RSA'
  | 'ECDSA';

export type EnterpriseLicenseCreateResponse = License | ValidationError | GenericError;

/** License Serializer */
export type LicenseRequestInput = {
  key: Scalars['NonEmptyString']['input'];
};

export type EnterpriseLicenseUpdateResponse = License | ValidationError | GenericError;

export type EnterpriseLicensePartialUpdateResponse = License | ValidationError | GenericError;

/** License Serializer */
export type PatchedLicenseRequestInput = {
  key?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type EnterpriseLicenseDestroyResponse = VoidContainer | ValidationError | GenericError;

export type EventsEventsCreateResponse = Event | ValidationError | GenericError;

/** Event Serializer */
export type EventRequestInput = {
  user?: InputMaybe<Scalars['JSON']['input']>;
  action: EventActions;
  app: Scalars['NonEmptyString']['input'];
  context?: InputMaybe<Scalars['JSON']['input']>;
  clientIp?: InputMaybe<Scalars['NonEmptyString']['input']>;
  expires?: InputMaybe<Scalars['DateTime']['input']>;
  brand?: InputMaybe<Scalars['JSON']['input']>;
};

export type EventsEventsUpdateResponse = Event | ValidationError | GenericError;

export type EventsEventsPartialUpdateResponse = Event | ValidationError | GenericError;

/** Event Serializer */
export type PatchedEventRequestInput = {
  user?: InputMaybe<Scalars['JSON']['input']>;
  action?: InputMaybe<EventActions>;
  app?: InputMaybe<Scalars['NonEmptyString']['input']>;
  context?: InputMaybe<Scalars['JSON']['input']>;
  clientIp?: InputMaybe<Scalars['NonEmptyString']['input']>;
  expires?: InputMaybe<Scalars['DateTime']['input']>;
  brand?: InputMaybe<Scalars['JSON']['input']>;
};

export type EventsEventsDestroyResponse = VoidContainer | ValidationError | GenericError;

export type EventsNotificationsUpdateResponse = Notification | ValidationError | GenericError;

/** Notification Serializer */
export type NotificationRequestInput = {
  event?: InputMaybe<EventRequestInput>;
  seen?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EventsNotificationsPartialUpdateResponse = Notification | ValidationError | GenericError;

/** Notification Serializer */
export type PatchedNotificationRequestInput = {
  event?: InputMaybe<EventRequestInput>;
  seen?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EventsNotificationsDestroyResponse = VoidContainer | ValidationError | GenericError;

export type EventsNotificationsMarkAllSeenCreateResponse = VoidContainer | ValidationError | GenericError;

export type EventsRulesCreateResponse = NotificationRule | ValidationError | GenericError;

/** NotificationRule Serializer */
export type NotificationRuleRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  /** Select which transports should be used to notify the user. If none are selected, the notification will only be shown in the authentik UI. */
  transports?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  severity?: InputMaybe<SeverityEnum>;
  /** Define which group of users this notification should be sent and shown to. If left empty, Notification won't ben sent. */
  group?: InputMaybe<Scalars['UUID']['input']>;
};

export type EventsRulesUpdateResponse = NotificationRule | ValidationError | GenericError;

export type EventsRulesPartialUpdateResponse = NotificationRule | ValidationError | GenericError;

/** NotificationRule Serializer */
export type PatchedNotificationRuleRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Select which transports should be used to notify the user. If none are selected, the notification will only be shown in the authentik UI. */
  transports?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  severity?: InputMaybe<SeverityEnum>;
  /** Define which group of users this notification should be sent and shown to. If left empty, Notification won't ben sent. */
  group?: InputMaybe<Scalars['UUID']['input']>;
};

export type EventsRulesDestroyResponse = VoidContainer | ValidationError | GenericError;

export type EventsSystemTasksRunCreateResponse = VoidContainer | ValidationError | GenericError;

export type EventsTransportsCreateResponse = NotificationTransport | ValidationError | GenericError;

/** NotificationTransport Serializer */
export type NotificationTransportRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  mode?: InputMaybe<NotificationTransportModeEnum>;
  webhookUrl?: InputMaybe<Scalars['URL']['input']>;
  webhookMapping?: InputMaybe<Scalars['UUID']['input']>;
  /** Only send notification once, for example when sending a webhook into a chat channel. */
  sendOnce?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EventsTransportsUpdateResponse = NotificationTransport | ValidationError | GenericError;

export type EventsTransportsPartialUpdateResponse = NotificationTransport | ValidationError | GenericError;

/** NotificationTransport Serializer */
export type PatchedNotificationTransportRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  mode?: InputMaybe<NotificationTransportModeEnum>;
  webhookUrl?: InputMaybe<Scalars['URL']['input']>;
  webhookMapping?: InputMaybe<Scalars['UUID']['input']>;
  /** Only send notification once, for example when sending a webhook into a chat channel. */
  sendOnce?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EventsTransportsDestroyResponse = VoidContainer | ValidationError | GenericError;

export type EventsTransportsTestCreateResponse = NotificationTransportTest | ValidationError | GenericError;

/** Notification test serializer */
export type NotificationTransportTest = {
  messages: Array<Maybe<Scalars['String']['output']>>;
};

export type FlowsBindingsCreateResponse = FlowStageBinding | ValidationError | GenericError;

/** FlowStageBinding Serializer */
export type FlowStageBindingRequestInput = {
  target: Scalars['UUID']['input'];
  stage: Scalars['UUID']['input'];
  /** Evaluate policies during the Flow planning process. */
  evaluateOnPlan?: InputMaybe<Scalars['Boolean']['input']>;
  /** Evaluate policies when the Stage is present to the user. */
  reEvaluatePolicies?: InputMaybe<Scalars['Boolean']['input']>;
  order: Scalars['Int']['input'];
  policyEngineMode?: InputMaybe<PolicyEngineMode>;
  invalidResponseAction?: InputMaybe<InvalidResponseActionEnum>;
};

export type FlowsBindingsUpdateResponse = FlowStageBinding | ValidationError | GenericError;

export type FlowsBindingsPartialUpdateResponse = FlowStageBinding | ValidationError | GenericError;

/** FlowStageBinding Serializer */
export type PatchedFlowStageBindingRequestInput = {
  target?: InputMaybe<Scalars['UUID']['input']>;
  stage?: InputMaybe<Scalars['UUID']['input']>;
  /** Evaluate policies during the Flow planning process. */
  evaluateOnPlan?: InputMaybe<Scalars['Boolean']['input']>;
  /** Evaluate policies when the Stage is present to the user. */
  reEvaluatePolicies?: InputMaybe<Scalars['Boolean']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  policyEngineMode?: InputMaybe<PolicyEngineMode>;
  invalidResponseAction?: InputMaybe<InvalidResponseActionEnum>;
};

export type FlowsBindingsDestroyResponse = VoidContainer | ValidationError | GenericError;

export type FlowsExecutorSolveResponse = AccessDeniedChallenge | AppleLoginChallenge | AuthenticatorDuoChallenge | AuthenticatorSmsChallenge | AuthenticatorStaticChallenge | AuthenticatorTotpChallenge | AuthenticatorValidationChallenge | AuthenticatorWebAuthnChallenge | AutosubmitChallenge | CaptchaChallenge | ConsentChallenge | EmailChallenge | FlowErrorChallenge | IdentificationChallenge | OAuthDeviceCodeChallenge | OAuthDeviceCodeFinishChallenge | PasswordChallenge | PlexAuthenticationChallenge | PromptChallenge | RedirectChallenge | ShellChallenge | UserLoginChallenge | ValidationError | GenericError;

export type FlowChallengeResponseRequestInput =
  { appleChallengeResponseRequestInput: AppleChallengeResponseRequestInput; authenticatorDuoChallengeResponseRequestInput?: never; authenticatorSmsChallengeResponseRequestInput?: never; authenticatorStaticChallengeResponseRequestInput?: never; authenticatorTotpChallengeResponseRequestInput?: never; authenticatorValidationChallengeResponseRequestInput?: never; authenticatorWebAuthnChallengeResponseRequestInput?: never; autoSubmitChallengeResponseRequestInput?: never; captchaChallengeResponseRequestInput?: never; consentChallengeResponseRequestInput?: never; emailChallengeResponseRequestInput?: never; identificationChallengeResponseRequestInput?: never; oAuthDeviceCodeChallengeResponseRequestInput?: never; oAuthDeviceCodeFinishChallengeResponseRequestInput?: never; passwordChallengeResponseRequestInput?: never; plexAuthenticationChallengeResponseRequestInput?: never; promptChallengeResponseRequestInput?: never; userLoginChallengeResponseRequestInput?: never; }
  |  { appleChallengeResponseRequestInput?: never; authenticatorDuoChallengeResponseRequestInput: AuthenticatorDuoChallengeResponseRequestInput; authenticatorSmsChallengeResponseRequestInput?: never; authenticatorStaticChallengeResponseRequestInput?: never; authenticatorTotpChallengeResponseRequestInput?: never; authenticatorValidationChallengeResponseRequestInput?: never; authenticatorWebAuthnChallengeResponseRequestInput?: never; autoSubmitChallengeResponseRequestInput?: never; captchaChallengeResponseRequestInput?: never; consentChallengeResponseRequestInput?: never; emailChallengeResponseRequestInput?: never; identificationChallengeResponseRequestInput?: never; oAuthDeviceCodeChallengeResponseRequestInput?: never; oAuthDeviceCodeFinishChallengeResponseRequestInput?: never; passwordChallengeResponseRequestInput?: never; plexAuthenticationChallengeResponseRequestInput?: never; promptChallengeResponseRequestInput?: never; userLoginChallengeResponseRequestInput?: never; }
  |  { appleChallengeResponseRequestInput?: never; authenticatorDuoChallengeResponseRequestInput?: never; authenticatorSmsChallengeResponseRequestInput: AuthenticatorSmsChallengeResponseRequestInput; authenticatorStaticChallengeResponseRequestInput?: never; authenticatorTotpChallengeResponseRequestInput?: never; authenticatorValidationChallengeResponseRequestInput?: never; authenticatorWebAuthnChallengeResponseRequestInput?: never; autoSubmitChallengeResponseRequestInput?: never; captchaChallengeResponseRequestInput?: never; consentChallengeResponseRequestInput?: never; emailChallengeResponseRequestInput?: never; identificationChallengeResponseRequestInput?: never; oAuthDeviceCodeChallengeResponseRequestInput?: never; oAuthDeviceCodeFinishChallengeResponseRequestInput?: never; passwordChallengeResponseRequestInput?: never; plexAuthenticationChallengeResponseRequestInput?: never; promptChallengeResponseRequestInput?: never; userLoginChallengeResponseRequestInput?: never; }
  |  { appleChallengeResponseRequestInput?: never; authenticatorDuoChallengeResponseRequestInput?: never; authenticatorSmsChallengeResponseRequestInput?: never; authenticatorStaticChallengeResponseRequestInput: AuthenticatorStaticChallengeResponseRequestInput; authenticatorTotpChallengeResponseRequestInput?: never; authenticatorValidationChallengeResponseRequestInput?: never; authenticatorWebAuthnChallengeResponseRequestInput?: never; autoSubmitChallengeResponseRequestInput?: never; captchaChallengeResponseRequestInput?: never; consentChallengeResponseRequestInput?: never; emailChallengeResponseRequestInput?: never; identificationChallengeResponseRequestInput?: never; oAuthDeviceCodeChallengeResponseRequestInput?: never; oAuthDeviceCodeFinishChallengeResponseRequestInput?: never; passwordChallengeResponseRequestInput?: never; plexAuthenticationChallengeResponseRequestInput?: never; promptChallengeResponseRequestInput?: never; userLoginChallengeResponseRequestInput?: never; }
  |  { appleChallengeResponseRequestInput?: never; authenticatorDuoChallengeResponseRequestInput?: never; authenticatorSmsChallengeResponseRequestInput?: never; authenticatorStaticChallengeResponseRequestInput?: never; authenticatorTotpChallengeResponseRequestInput: AuthenticatorTotpChallengeResponseRequestInput; authenticatorValidationChallengeResponseRequestInput?: never; authenticatorWebAuthnChallengeResponseRequestInput?: never; autoSubmitChallengeResponseRequestInput?: never; captchaChallengeResponseRequestInput?: never; consentChallengeResponseRequestInput?: never; emailChallengeResponseRequestInput?: never; identificationChallengeResponseRequestInput?: never; oAuthDeviceCodeChallengeResponseRequestInput?: never; oAuthDeviceCodeFinishChallengeResponseRequestInput?: never; passwordChallengeResponseRequestInput?: never; plexAuthenticationChallengeResponseRequestInput?: never; promptChallengeResponseRequestInput?: never; userLoginChallengeResponseRequestInput?: never; }
  |  { appleChallengeResponseRequestInput?: never; authenticatorDuoChallengeResponseRequestInput?: never; authenticatorSmsChallengeResponseRequestInput?: never; authenticatorStaticChallengeResponseRequestInput?: never; authenticatorTotpChallengeResponseRequestInput?: never; authenticatorValidationChallengeResponseRequestInput: AuthenticatorValidationChallengeResponseRequestInput; authenticatorWebAuthnChallengeResponseRequestInput?: never; autoSubmitChallengeResponseRequestInput?: never; captchaChallengeResponseRequestInput?: never; consentChallengeResponseRequestInput?: never; emailChallengeResponseRequestInput?: never; identificationChallengeResponseRequestInput?: never; oAuthDeviceCodeChallengeResponseRequestInput?: never; oAuthDeviceCodeFinishChallengeResponseRequestInput?: never; passwordChallengeResponseRequestInput?: never; plexAuthenticationChallengeResponseRequestInput?: never; promptChallengeResponseRequestInput?: never; userLoginChallengeResponseRequestInput?: never; }
  |  { appleChallengeResponseRequestInput?: never; authenticatorDuoChallengeResponseRequestInput?: never; authenticatorSmsChallengeResponseRequestInput?: never; authenticatorStaticChallengeResponseRequestInput?: never; authenticatorTotpChallengeResponseRequestInput?: never; authenticatorValidationChallengeResponseRequestInput?: never; authenticatorWebAuthnChallengeResponseRequestInput: AuthenticatorWebAuthnChallengeResponseRequestInput; autoSubmitChallengeResponseRequestInput?: never; captchaChallengeResponseRequestInput?: never; consentChallengeResponseRequestInput?: never; emailChallengeResponseRequestInput?: never; identificationChallengeResponseRequestInput?: never; oAuthDeviceCodeChallengeResponseRequestInput?: never; oAuthDeviceCodeFinishChallengeResponseRequestInput?: never; passwordChallengeResponseRequestInput?: never; plexAuthenticationChallengeResponseRequestInput?: never; promptChallengeResponseRequestInput?: never; userLoginChallengeResponseRequestInput?: never; }
  |  { appleChallengeResponseRequestInput?: never; authenticatorDuoChallengeResponseRequestInput?: never; authenticatorSmsChallengeResponseRequestInput?: never; authenticatorStaticChallengeResponseRequestInput?: never; authenticatorTotpChallengeResponseRequestInput?: never; authenticatorValidationChallengeResponseRequestInput?: never; authenticatorWebAuthnChallengeResponseRequestInput?: never; autoSubmitChallengeResponseRequestInput: AutoSubmitChallengeResponseRequestInput; captchaChallengeResponseRequestInput?: never; consentChallengeResponseRequestInput?: never; emailChallengeResponseRequestInput?: never; identificationChallengeResponseRequestInput?: never; oAuthDeviceCodeChallengeResponseRequestInput?: never; oAuthDeviceCodeFinishChallengeResponseRequestInput?: never; passwordChallengeResponseRequestInput?: never; plexAuthenticationChallengeResponseRequestInput?: never; promptChallengeResponseRequestInput?: never; userLoginChallengeResponseRequestInput?: never; }
  |  { appleChallengeResponseRequestInput?: never; authenticatorDuoChallengeResponseRequestInput?: never; authenticatorSmsChallengeResponseRequestInput?: never; authenticatorStaticChallengeResponseRequestInput?: never; authenticatorTotpChallengeResponseRequestInput?: never; authenticatorValidationChallengeResponseRequestInput?: never; authenticatorWebAuthnChallengeResponseRequestInput?: never; autoSubmitChallengeResponseRequestInput?: never; captchaChallengeResponseRequestInput: CaptchaChallengeResponseRequestInput; consentChallengeResponseRequestInput?: never; emailChallengeResponseRequestInput?: never; identificationChallengeResponseRequestInput?: never; oAuthDeviceCodeChallengeResponseRequestInput?: never; oAuthDeviceCodeFinishChallengeResponseRequestInput?: never; passwordChallengeResponseRequestInput?: never; plexAuthenticationChallengeResponseRequestInput?: never; promptChallengeResponseRequestInput?: never; userLoginChallengeResponseRequestInput?: never; }
  |  { appleChallengeResponseRequestInput?: never; authenticatorDuoChallengeResponseRequestInput?: never; authenticatorSmsChallengeResponseRequestInput?: never; authenticatorStaticChallengeResponseRequestInput?: never; authenticatorTotpChallengeResponseRequestInput?: never; authenticatorValidationChallengeResponseRequestInput?: never; authenticatorWebAuthnChallengeResponseRequestInput?: never; autoSubmitChallengeResponseRequestInput?: never; captchaChallengeResponseRequestInput?: never; consentChallengeResponseRequestInput: ConsentChallengeResponseRequestInput; emailChallengeResponseRequestInput?: never; identificationChallengeResponseRequestInput?: never; oAuthDeviceCodeChallengeResponseRequestInput?: never; oAuthDeviceCodeFinishChallengeResponseRequestInput?: never; passwordChallengeResponseRequestInput?: never; plexAuthenticationChallengeResponseRequestInput?: never; promptChallengeResponseRequestInput?: never; userLoginChallengeResponseRequestInput?: never; }
  |  { appleChallengeResponseRequestInput?: never; authenticatorDuoChallengeResponseRequestInput?: never; authenticatorSmsChallengeResponseRequestInput?: never; authenticatorStaticChallengeResponseRequestInput?: never; authenticatorTotpChallengeResponseRequestInput?: never; authenticatorValidationChallengeResponseRequestInput?: never; authenticatorWebAuthnChallengeResponseRequestInput?: never; autoSubmitChallengeResponseRequestInput?: never; captchaChallengeResponseRequestInput?: never; consentChallengeResponseRequestInput?: never; emailChallengeResponseRequestInput: EmailChallengeResponseRequestInput; identificationChallengeResponseRequestInput?: never; oAuthDeviceCodeChallengeResponseRequestInput?: never; oAuthDeviceCodeFinishChallengeResponseRequestInput?: never; passwordChallengeResponseRequestInput?: never; plexAuthenticationChallengeResponseRequestInput?: never; promptChallengeResponseRequestInput?: never; userLoginChallengeResponseRequestInput?: never; }
  |  { appleChallengeResponseRequestInput?: never; authenticatorDuoChallengeResponseRequestInput?: never; authenticatorSmsChallengeResponseRequestInput?: never; authenticatorStaticChallengeResponseRequestInput?: never; authenticatorTotpChallengeResponseRequestInput?: never; authenticatorValidationChallengeResponseRequestInput?: never; authenticatorWebAuthnChallengeResponseRequestInput?: never; autoSubmitChallengeResponseRequestInput?: never; captchaChallengeResponseRequestInput?: never; consentChallengeResponseRequestInput?: never; emailChallengeResponseRequestInput?: never; identificationChallengeResponseRequestInput: IdentificationChallengeResponseRequestInput; oAuthDeviceCodeChallengeResponseRequestInput?: never; oAuthDeviceCodeFinishChallengeResponseRequestInput?: never; passwordChallengeResponseRequestInput?: never; plexAuthenticationChallengeResponseRequestInput?: never; promptChallengeResponseRequestInput?: never; userLoginChallengeResponseRequestInput?: never; }
  |  { appleChallengeResponseRequestInput?: never; authenticatorDuoChallengeResponseRequestInput?: never; authenticatorSmsChallengeResponseRequestInput?: never; authenticatorStaticChallengeResponseRequestInput?: never; authenticatorTotpChallengeResponseRequestInput?: never; authenticatorValidationChallengeResponseRequestInput?: never; authenticatorWebAuthnChallengeResponseRequestInput?: never; autoSubmitChallengeResponseRequestInput?: never; captchaChallengeResponseRequestInput?: never; consentChallengeResponseRequestInput?: never; emailChallengeResponseRequestInput?: never; identificationChallengeResponseRequestInput?: never; oAuthDeviceCodeChallengeResponseRequestInput: OAuthDeviceCodeChallengeResponseRequestInput; oAuthDeviceCodeFinishChallengeResponseRequestInput?: never; passwordChallengeResponseRequestInput?: never; plexAuthenticationChallengeResponseRequestInput?: never; promptChallengeResponseRequestInput?: never; userLoginChallengeResponseRequestInput?: never; }
  |  { appleChallengeResponseRequestInput?: never; authenticatorDuoChallengeResponseRequestInput?: never; authenticatorSmsChallengeResponseRequestInput?: never; authenticatorStaticChallengeResponseRequestInput?: never; authenticatorTotpChallengeResponseRequestInput?: never; authenticatorValidationChallengeResponseRequestInput?: never; authenticatorWebAuthnChallengeResponseRequestInput?: never; autoSubmitChallengeResponseRequestInput?: never; captchaChallengeResponseRequestInput?: never; consentChallengeResponseRequestInput?: never; emailChallengeResponseRequestInput?: never; identificationChallengeResponseRequestInput?: never; oAuthDeviceCodeChallengeResponseRequestInput?: never; oAuthDeviceCodeFinishChallengeResponseRequestInput: OAuthDeviceCodeFinishChallengeResponseRequestInput; passwordChallengeResponseRequestInput?: never; plexAuthenticationChallengeResponseRequestInput?: never; promptChallengeResponseRequestInput?: never; userLoginChallengeResponseRequestInput?: never; }
  |  { appleChallengeResponseRequestInput?: never; authenticatorDuoChallengeResponseRequestInput?: never; authenticatorSmsChallengeResponseRequestInput?: never; authenticatorStaticChallengeResponseRequestInput?: never; authenticatorTotpChallengeResponseRequestInput?: never; authenticatorValidationChallengeResponseRequestInput?: never; authenticatorWebAuthnChallengeResponseRequestInput?: never; autoSubmitChallengeResponseRequestInput?: never; captchaChallengeResponseRequestInput?: never; consentChallengeResponseRequestInput?: never; emailChallengeResponseRequestInput?: never; identificationChallengeResponseRequestInput?: never; oAuthDeviceCodeChallengeResponseRequestInput?: never; oAuthDeviceCodeFinishChallengeResponseRequestInput?: never; passwordChallengeResponseRequestInput: PasswordChallengeResponseRequestInput; plexAuthenticationChallengeResponseRequestInput?: never; promptChallengeResponseRequestInput?: never; userLoginChallengeResponseRequestInput?: never; }
  |  { appleChallengeResponseRequestInput?: never; authenticatorDuoChallengeResponseRequestInput?: never; authenticatorSmsChallengeResponseRequestInput?: never; authenticatorStaticChallengeResponseRequestInput?: never; authenticatorTotpChallengeResponseRequestInput?: never; authenticatorValidationChallengeResponseRequestInput?: never; authenticatorWebAuthnChallengeResponseRequestInput?: never; autoSubmitChallengeResponseRequestInput?: never; captchaChallengeResponseRequestInput?: never; consentChallengeResponseRequestInput?: never; emailChallengeResponseRequestInput?: never; identificationChallengeResponseRequestInput?: never; oAuthDeviceCodeChallengeResponseRequestInput?: never; oAuthDeviceCodeFinishChallengeResponseRequestInput?: never; passwordChallengeResponseRequestInput?: never; plexAuthenticationChallengeResponseRequestInput: PlexAuthenticationChallengeResponseRequestInput; promptChallengeResponseRequestInput?: never; userLoginChallengeResponseRequestInput?: never; }
  |  { appleChallengeResponseRequestInput?: never; authenticatorDuoChallengeResponseRequestInput?: never; authenticatorSmsChallengeResponseRequestInput?: never; authenticatorStaticChallengeResponseRequestInput?: never; authenticatorTotpChallengeResponseRequestInput?: never; authenticatorValidationChallengeResponseRequestInput?: never; authenticatorWebAuthnChallengeResponseRequestInput?: never; autoSubmitChallengeResponseRequestInput?: never; captchaChallengeResponseRequestInput?: never; consentChallengeResponseRequestInput?: never; emailChallengeResponseRequestInput?: never; identificationChallengeResponseRequestInput?: never; oAuthDeviceCodeChallengeResponseRequestInput?: never; oAuthDeviceCodeFinishChallengeResponseRequestInput?: never; passwordChallengeResponseRequestInput?: never; plexAuthenticationChallengeResponseRequestInput?: never; promptChallengeResponseRequestInput: PromptChallengeResponseRequestInput; userLoginChallengeResponseRequestInput?: never; }
  |  { appleChallengeResponseRequestInput?: never; authenticatorDuoChallengeResponseRequestInput?: never; authenticatorSmsChallengeResponseRequestInput?: never; authenticatorStaticChallengeResponseRequestInput?: never; authenticatorTotpChallengeResponseRequestInput?: never; authenticatorValidationChallengeResponseRequestInput?: never; authenticatorWebAuthnChallengeResponseRequestInput?: never; autoSubmitChallengeResponseRequestInput?: never; captchaChallengeResponseRequestInput?: never; consentChallengeResponseRequestInput?: never; emailChallengeResponseRequestInput?: never; identificationChallengeResponseRequestInput?: never; oAuthDeviceCodeChallengeResponseRequestInput?: never; oAuthDeviceCodeFinishChallengeResponseRequestInput?: never; passwordChallengeResponseRequestInput?: never; plexAuthenticationChallengeResponseRequestInput?: never; promptChallengeResponseRequestInput?: never; userLoginChallengeResponseRequestInput: UserLoginChallengeResponseRequestInput; };

/** Pseudo class for apple response */
export type AppleChallengeResponseRequestInput = {
  component?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

/** Pseudo class for duo response */
export type AuthenticatorDuoChallengeResponseRequestInput = {
  component?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

/** SMS Challenge response, device is set by get_response_instance */
export type AuthenticatorSmsChallengeResponseRequestInput = {
  component?: InputMaybe<Scalars['NonEmptyString']['input']>;
  code?: InputMaybe<Scalars['Int']['input']>;
  phoneNumber?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

/** Pseudo class for static response */
export type AuthenticatorStaticChallengeResponseRequestInput = {
  component?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

/** TOTP Challenge response, device is set by get_response_instance */
export type AuthenticatorTotpChallengeResponseRequestInput = {
  component?: InputMaybe<Scalars['NonEmptyString']['input']>;
  code: Scalars['Int']['input'];
};

/** Challenge used for Code-based and WebAuthn authenticators */
export type AuthenticatorValidationChallengeResponseRequestInput = {
  component?: InputMaybe<Scalars['NonEmptyString']['input']>;
  selectedChallenge?: InputMaybe<DeviceChallengeRequestInput>;
  selectedStage?: InputMaybe<Scalars['NonEmptyString']['input']>;
  code?: InputMaybe<Scalars['NonEmptyString']['input']>;
  webauthn?: InputMaybe<Scalars['JSON']['input']>;
  duo?: InputMaybe<Scalars['Int']['input']>;
};

/** Single device challenge */
export type DeviceChallengeRequestInput = {
  deviceClass: Scalars['NonEmptyString']['input'];
  deviceUid: Scalars['NonEmptyString']['input'];
  challenge: Scalars['JSON']['input'];
};

/** WebAuthn Challenge response */
export type AuthenticatorWebAuthnChallengeResponseRequestInput = {
  component?: InputMaybe<Scalars['NonEmptyString']['input']>;
  response: Scalars['JSON']['input'];
};

/** Pseudo class for autosubmit response */
export type AutoSubmitChallengeResponseRequestInput = {
  component?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

/** Validate captcha token */
export type CaptchaChallengeResponseRequestInput = {
  component?: InputMaybe<Scalars['NonEmptyString']['input']>;
  token: Scalars['NonEmptyString']['input'];
};

/** Consent challenge response, any valid response request is valid */
export type ConsentChallengeResponseRequestInput = {
  component?: InputMaybe<Scalars['NonEmptyString']['input']>;
  token: Scalars['NonEmptyString']['input'];
};

/**
 * Email challenge resposen. No fields. This challenge is
 * always declared invalid to give the user a chance to retry
 */
export type EmailChallengeResponseRequestInput = {
  component?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

/** Identification challenge */
export type IdentificationChallengeResponseRequestInput = {
  component?: InputMaybe<Scalars['NonEmptyString']['input']>;
  uidField: Scalars['NonEmptyString']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};

/** Response that includes the user-entered device code */
export type OAuthDeviceCodeChallengeResponseRequestInput = {
  component?: InputMaybe<Scalars['NonEmptyString']['input']>;
  code: Scalars['Int']['input'];
};

/** Response that device has been authenticated and tab can be closed */
export type OAuthDeviceCodeFinishChallengeResponseRequestInput = {
  component?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

/** Password challenge response */
export type PasswordChallengeResponseRequestInput = {
  component?: InputMaybe<Scalars['NonEmptyString']['input']>;
  password: Scalars['NonEmptyString']['input'];
};

/** Pseudo class for plex response */
export type PlexAuthenticationChallengeResponseRequestInput = {
  component?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

/**
 * Validate response, fields are dynamically created based
 * on the stage
 */
export type PromptChallengeResponseRequestInput = {
  component?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

/** User login challenge */
export type UserLoginChallengeResponseRequestInput = {
  component?: InputMaybe<Scalars['NonEmptyString']['input']>;
  rememberMe: Scalars['Boolean']['input'];
};

export type FlowsInstancesCreateResponse = Flow | ValidationError | GenericError;

/** Flow Serializer */
export type FlowRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  slug: Scalars['MutationInputFlowsInstancesCreateInputSlug']['input'];
  /** Shown as the Title in Flow pages. */
  title: Scalars['NonEmptyString']['input'];
  designation: FlowDesignationEnum;
  policyEngineMode?: InputMaybe<PolicyEngineMode>;
  /** Enable compatibility mode, increases compatibility with password managers on mobile devices. */
  compatibilityMode?: InputMaybe<Scalars['Boolean']['input']>;
  layout?: InputMaybe<FlowLayoutEnum>;
  deniedAction?: InputMaybe<DeniedActionEnum>;
  authentication?: InputMaybe<AuthenticationEnum>;
};

export type FlowsInstancesUpdateResponse = Flow | ValidationError | GenericError;

export type FlowsInstancesPartialUpdateResponse = Flow | ValidationError | GenericError;

/** Flow Serializer */
export type PatchedFlowRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  slug?: InputMaybe<Scalars['MutationInputFlowsInstancesPartialUpdateInputSlug']['input']>;
  /** Shown as the Title in Flow pages. */
  title?: InputMaybe<Scalars['NonEmptyString']['input']>;
  designation?: InputMaybe<FlowDesignationEnum>;
  policyEngineMode?: InputMaybe<PolicyEngineMode>;
  /** Enable compatibility mode, increases compatibility with password managers on mobile devices. */
  compatibilityMode?: InputMaybe<Scalars['Boolean']['input']>;
  layout?: InputMaybe<FlowLayoutEnum>;
  deniedAction?: InputMaybe<DeniedActionEnum>;
  authentication?: InputMaybe<AuthenticationEnum>;
};

export type FlowsInstancesDestroyResponse = VoidContainer | ValidationError | GenericError;

export type FlowsInstancesCacheClearCreateResponse = VoidContainer | GenericError;

export type FlowsInstancesImportCreateResponse = FlowImportResult | GenericError;

/** Logs of an attempted flow import */
export type FlowImportResult = {
  logs: Array<Maybe<LogEvent>>;
  success: Scalars['Boolean']['output'];
};

export type ManagedBlueprintsCreateResponse = BlueprintInstance | ValidationError | GenericError;

/** Info about a single blueprint instance file */
export type BlueprintInstanceRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  path?: InputMaybe<Scalars['String']['input']>;
  context?: InputMaybe<Scalars['JSON']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
};

export type ManagedBlueprintsUpdateResponse = BlueprintInstance | ValidationError | GenericError;

export type ManagedBlueprintsPartialUpdateResponse = BlueprintInstance | ValidationError | GenericError;

/** Info about a single blueprint instance file */
export type PatchedBlueprintInstanceRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  context?: InputMaybe<Scalars['JSON']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
};

export type ManagedBlueprintsDestroyResponse = VoidContainer | ValidationError | GenericError;

export type ManagedBlueprintsApplyCreateResponse = BlueprintInstance | ValidationError | GenericError;

export type Oauth2AccessTokensDestroyResponse = VoidContainer | ValidationError | GenericError;

export type Oauth2AuthorizationCodesDestroyResponse = VoidContainer | ValidationError | GenericError;

export type Oauth2RefreshTokensDestroyResponse = VoidContainer | ValidationError | GenericError;

export type OutpostsInstancesCreateResponse = Outpost | ValidationError | GenericError;

/** Outpost Serializer */
export type OutpostRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  type: OutpostTypeEnum;
  providers: Array<InputMaybe<Scalars['Int']['input']>>;
  /** Select Service-Connection authentik should use to manage this outpost. Leave empty if authentik should not handle the deployment. */
  serviceConnection?: InputMaybe<Scalars['UUID']['input']>;
  config: Scalars['JSON']['input'];
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type OutpostsInstancesUpdateResponse = Outpost | ValidationError | GenericError;

export type OutpostsInstancesPartialUpdateResponse = Outpost | ValidationError | GenericError;

/** Outpost Serializer */
export type PatchedOutpostRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  type?: InputMaybe<OutpostTypeEnum>;
  providers?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** Select Service-Connection authentik should use to manage this outpost. Leave empty if authentik should not handle the deployment. */
  serviceConnection?: InputMaybe<Scalars['UUID']['input']>;
  config?: InputMaybe<Scalars['JSON']['input']>;
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type OutpostsInstancesDestroyResponse = VoidContainer | ValidationError | GenericError;

export type OutpostsServiceConnectionsAllDestroyResponse = VoidContainer | ValidationError | GenericError;

export type OutpostsServiceConnectionsDockerCreateResponse = DockerServiceConnection | ValidationError | GenericError;

/** DockerServiceConnection Serializer */
export type DockerServiceConnectionRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  /** If enabled, use the local connection. Required Docker socket/Kubernetes Integration */
  local?: InputMaybe<Scalars['Boolean']['input']>;
  /** Can be in the format of 'unix://<path>' when connecting to a local docker daemon, or 'https://<hostname>:2376' when connecting to a remote system. */
  url: Scalars['NonEmptyString']['input'];
  /** CA which the endpoint's Certificate is verified against. Can be left empty for no validation. */
  tlsVerification?: InputMaybe<Scalars['UUID']['input']>;
  /** Certificate/Key used for authentication. Can be left empty for no authentication. */
  tlsAuthentication?: InputMaybe<Scalars['UUID']['input']>;
};

export type OutpostsServiceConnectionsDockerUpdateResponse = DockerServiceConnection | ValidationError | GenericError;

export type OutpostsServiceConnectionsDockerPartialUpdateResponse = DockerServiceConnection | ValidationError | GenericError;

/** DockerServiceConnection Serializer */
export type PatchedDockerServiceConnectionRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** If enabled, use the local connection. Required Docker socket/Kubernetes Integration */
  local?: InputMaybe<Scalars['Boolean']['input']>;
  /** Can be in the format of 'unix://<path>' when connecting to a local docker daemon, or 'https://<hostname>:2376' when connecting to a remote system. */
  url?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** CA which the endpoint's Certificate is verified against. Can be left empty for no validation. */
  tlsVerification?: InputMaybe<Scalars['UUID']['input']>;
  /** Certificate/Key used for authentication. Can be left empty for no authentication. */
  tlsAuthentication?: InputMaybe<Scalars['UUID']['input']>;
};

export type OutpostsServiceConnectionsDockerDestroyResponse = VoidContainer | ValidationError | GenericError;

export type OutpostsServiceConnectionsKubernetesCreateResponse = KubernetesServiceConnection | ValidationError | GenericError;

/** KubernetesServiceConnection Serializer */
export type KubernetesServiceConnectionRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  /** If enabled, use the local connection. Required Docker socket/Kubernetes Integration */
  local?: InputMaybe<Scalars['Boolean']['input']>;
  /** Paste your kubeconfig here. authentik will automatically use the currently selected context. */
  kubeconfig?: InputMaybe<Scalars['JSON']['input']>;
  /** Verify SSL Certificates of the Kubernetes API endpoint */
  verifySsl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OutpostsServiceConnectionsKubernetesUpdateResponse = KubernetesServiceConnection | ValidationError | GenericError;

export type OutpostsServiceConnectionsKubernetesPartialUpdateResponse = KubernetesServiceConnection | ValidationError | GenericError;

/** KubernetesServiceConnection Serializer */
export type PatchedKubernetesServiceConnectionRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** If enabled, use the local connection. Required Docker socket/Kubernetes Integration */
  local?: InputMaybe<Scalars['Boolean']['input']>;
  /** Paste your kubeconfig here. authentik will automatically use the currently selected context. */
  kubeconfig?: InputMaybe<Scalars['JSON']['input']>;
  /** Verify SSL Certificates of the Kubernetes API endpoint */
  verifySsl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OutpostsServiceConnectionsKubernetesDestroyResponse = VoidContainer | ValidationError | GenericError;

export type PoliciesAllDestroyResponse = VoidContainer | ValidationError | GenericError;

export type PoliciesAllTestCreateResponse = PolicyTestResult | GenericError;

/** Test policy execution for a user with context */
export type PolicyTestRequestInput = {
  user: Scalars['Int']['input'];
  context?: InputMaybe<Scalars['JSON']['input']>;
};

export type PoliciesAllCacheClearCreateResponse = VoidContainer | GenericError;

export type PoliciesBindingsCreateResponse = PolicyBinding | ValidationError | GenericError;

/** PolicyBinding Serializer */
export type PolicyBindingRequestInput = {
  policy?: InputMaybe<Scalars['UUID']['input']>;
  group?: InputMaybe<Scalars['UUID']['input']>;
  user?: InputMaybe<Scalars['Int']['input']>;
  target: Scalars['UUID']['input'];
  /** Negates the outcome of the policy. Messages are unaffected. */
  negate?: InputMaybe<Scalars['Boolean']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  order: Scalars['Int']['input'];
  /** Timeout after which Policy execution is terminated. */
  timeout?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  /** Result if the Policy execution fails. */
  failureResult?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PoliciesBindingsUpdateResponse = PolicyBinding | ValidationError | GenericError;

export type PoliciesBindingsPartialUpdateResponse = PolicyBinding | ValidationError | GenericError;

/** PolicyBinding Serializer */
export type PatchedPolicyBindingRequestInput = {
  policy?: InputMaybe<Scalars['UUID']['input']>;
  group?: InputMaybe<Scalars['UUID']['input']>;
  user?: InputMaybe<Scalars['Int']['input']>;
  target?: InputMaybe<Scalars['UUID']['input']>;
  /** Negates the outcome of the policy. Messages are unaffected. */
  negate?: InputMaybe<Scalars['Boolean']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  /** Timeout after which Policy execution is terminated. */
  timeout?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  /** Result if the Policy execution fails. */
  failureResult?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PoliciesBindingsDestroyResponse = VoidContainer | ValidationError | GenericError;

export type PoliciesDummyCreateResponse = DummyPolicy | ValidationError | GenericError;

/** Dummy Policy Serializer */
export type DummyPolicyRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  /** When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged. */
  executionLogging?: InputMaybe<Scalars['Boolean']['input']>;
  result?: InputMaybe<Scalars['Boolean']['input']>;
  waitMin?: InputMaybe<Scalars['Int']['input']>;
  waitMax?: InputMaybe<Scalars['Int']['input']>;
};

export type PoliciesDummyUpdateResponse = DummyPolicy | ValidationError | GenericError;

export type PoliciesDummyPartialUpdateResponse = DummyPolicy | ValidationError | GenericError;

/** Dummy Policy Serializer */
export type PatchedDummyPolicyRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged. */
  executionLogging?: InputMaybe<Scalars['Boolean']['input']>;
  result?: InputMaybe<Scalars['Boolean']['input']>;
  waitMin?: InputMaybe<Scalars['Int']['input']>;
  waitMax?: InputMaybe<Scalars['Int']['input']>;
};

export type PoliciesDummyDestroyResponse = VoidContainer | ValidationError | GenericError;

export type PoliciesEventMatcherCreateResponse = EventMatcherPolicy | ValidationError | GenericError;

/** Event Matcher Policy Serializer */
export type EventMatcherPolicyRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  /** When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged. */
  executionLogging?: InputMaybe<Scalars['Boolean']['input']>;
  action?: InputMaybe<EventActions>;
  /** Matches Event's Client IP (strict matching, for network matching use an Expression Policy) */
  clientIp?: InputMaybe<Scalars['NonEmptyString']['input']>;
  app?: InputMaybe<AppEnum>;
  model?: InputMaybe<ModelEnum>;
};

export type PoliciesEventMatcherUpdateResponse = EventMatcherPolicy | ValidationError | GenericError;

export type PoliciesEventMatcherPartialUpdateResponse = EventMatcherPolicy | ValidationError | GenericError;

/** Event Matcher Policy Serializer */
export type PatchedEventMatcherPolicyRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged. */
  executionLogging?: InputMaybe<Scalars['Boolean']['input']>;
  action?: InputMaybe<EventActions>;
  /** Matches Event's Client IP (strict matching, for network matching use an Expression Policy) */
  clientIp?: InputMaybe<Scalars['NonEmptyString']['input']>;
  app?: InputMaybe<AppEnum>;
  model?: InputMaybe<ModelEnum>;
};

export type PoliciesEventMatcherDestroyResponse = VoidContainer | ValidationError | GenericError;

export type PoliciesExpressionCreateResponse = ExpressionPolicy | ValidationError | GenericError;

/** Group Membership Policy Serializer */
export type ExpressionPolicyRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  /** When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged. */
  executionLogging?: InputMaybe<Scalars['Boolean']['input']>;
  expression: Scalars['NonEmptyString']['input'];
};

export type PoliciesExpressionUpdateResponse = ExpressionPolicy | ValidationError | GenericError;

export type PoliciesExpressionPartialUpdateResponse = ExpressionPolicy | ValidationError | GenericError;

/** Group Membership Policy Serializer */
export type PatchedExpressionPolicyRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged. */
  executionLogging?: InputMaybe<Scalars['Boolean']['input']>;
  expression?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type PoliciesExpressionDestroyResponse = VoidContainer | ValidationError | GenericError;

export type PoliciesPasswordCreateResponse = PasswordPolicy | ValidationError | GenericError;

/** Password Policy Serializer */
export type PasswordPolicyRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  /** When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged. */
  executionLogging?: InputMaybe<Scalars['Boolean']['input']>;
  /** Field key to check, field keys defined in Prompt stages are available. */
  passwordField?: InputMaybe<Scalars['NonEmptyString']['input']>;
  amountDigits?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  amountUppercase?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  amountLowercase?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  amountSymbols?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  lengthMin?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  symbolCharset?: InputMaybe<Scalars['NonEmptyString']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  checkStaticRules?: InputMaybe<Scalars['Boolean']['input']>;
  checkHaveIBeenPwned?: InputMaybe<Scalars['Boolean']['input']>;
  checkZxcvbn?: InputMaybe<Scalars['Boolean']['input']>;
  /** How many times the password hash is allowed to be on haveibeenpwned */
  hibpAllowedCount?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  /** If the zxcvbn score is equal or less than this value, the policy will fail. */
  zxcvbnScoreThreshold?: InputMaybe<Scalars['NonNegativeInt']['input']>;
};

export type PoliciesPasswordUpdateResponse = PasswordPolicy | ValidationError | GenericError;

export type PoliciesPasswordPartialUpdateResponse = PasswordPolicy | ValidationError | GenericError;

/** Password Policy Serializer */
export type PatchedPasswordPolicyRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged. */
  executionLogging?: InputMaybe<Scalars['Boolean']['input']>;
  /** Field key to check, field keys defined in Prompt stages are available. */
  passwordField?: InputMaybe<Scalars['NonEmptyString']['input']>;
  amountDigits?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  amountUppercase?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  amountLowercase?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  amountSymbols?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  lengthMin?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  symbolCharset?: InputMaybe<Scalars['NonEmptyString']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  checkStaticRules?: InputMaybe<Scalars['Boolean']['input']>;
  checkHaveIBeenPwned?: InputMaybe<Scalars['Boolean']['input']>;
  checkZxcvbn?: InputMaybe<Scalars['Boolean']['input']>;
  /** How many times the password hash is allowed to be on haveibeenpwned */
  hibpAllowedCount?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  /** If the zxcvbn score is equal or less than this value, the policy will fail. */
  zxcvbnScoreThreshold?: InputMaybe<Scalars['NonNegativeInt']['input']>;
};

export type PoliciesPasswordDestroyResponse = VoidContainer | ValidationError | GenericError;

export type PoliciesPasswordExpiryCreateResponse = PasswordExpiryPolicy | ValidationError | GenericError;

/** Password Expiry Policy Serializer */
export type PasswordExpiryPolicyRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  /** When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged. */
  executionLogging?: InputMaybe<Scalars['Boolean']['input']>;
  days: Scalars['Int']['input'];
  denyOnly?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PoliciesPasswordExpiryUpdateResponse = PasswordExpiryPolicy | ValidationError | GenericError;

export type PoliciesPasswordExpiryPartialUpdateResponse = PasswordExpiryPolicy | ValidationError | GenericError;

/** Password Expiry Policy Serializer */
export type PatchedPasswordExpiryPolicyRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged. */
  executionLogging?: InputMaybe<Scalars['Boolean']['input']>;
  days?: InputMaybe<Scalars['Int']['input']>;
  denyOnly?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PoliciesPasswordExpiryDestroyResponse = VoidContainer | ValidationError | GenericError;

export type PoliciesReputationCreateResponse = ReputationPolicy | ValidationError | GenericError;

/** Reputation Policy Serializer */
export type ReputationPolicyRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  /** When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged. */
  executionLogging?: InputMaybe<Scalars['Boolean']['input']>;
  checkIp?: InputMaybe<Scalars['Boolean']['input']>;
  checkUsername?: InputMaybe<Scalars['Boolean']['input']>;
  threshold?: InputMaybe<Scalars['Int']['input']>;
};

export type PoliciesReputationUpdateResponse = ReputationPolicy | ValidationError | GenericError;

export type PoliciesReputationPartialUpdateResponse = ReputationPolicy | ValidationError | GenericError;

/** Reputation Policy Serializer */
export type PatchedReputationPolicyRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged. */
  executionLogging?: InputMaybe<Scalars['Boolean']['input']>;
  checkIp?: InputMaybe<Scalars['Boolean']['input']>;
  checkUsername?: InputMaybe<Scalars['Boolean']['input']>;
  threshold?: InputMaybe<Scalars['Int']['input']>;
};

export type PoliciesReputationDestroyResponse = VoidContainer | ValidationError | GenericError;

export type PoliciesReputationScoresDestroyResponse = VoidContainer | ValidationError | GenericError;

export type PropertymappingsAllDestroyResponse = VoidContainer | ValidationError | GenericError;

export type PropertymappingsAllTestCreateResponse = PropertyMappingTestResult | GenericError;

/** Result of a Property-mapping test */
export type PropertyMappingTestResult = {
  result: Scalars['String']['output'];
  successful: Scalars['Boolean']['output'];
};

export type PropertymappingsLdapCreateResponse = LdapPropertyMapping | ValidationError | GenericError;

/** LDAP PropertyMapping Serializer */
export type LdapPropertyMappingRequestInput = {
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: InputMaybe<Scalars['NonEmptyString']['input']>;
  name: Scalars['NonEmptyString']['input'];
  expression: Scalars['NonEmptyString']['input'];
  objectField: Scalars['NonEmptyString']['input'];
};

export type PropertymappingsLdapUpdateResponse = LdapPropertyMapping | ValidationError | GenericError;

export type PropertymappingsLdapPartialUpdateResponse = LdapPropertyMapping | ValidationError | GenericError;

/** LDAP PropertyMapping Serializer */
export type PatchedLdapPropertyMappingRequestInput = {
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: InputMaybe<Scalars['NonEmptyString']['input']>;
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  expression?: InputMaybe<Scalars['NonEmptyString']['input']>;
  objectField?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type PropertymappingsLdapDestroyResponse = VoidContainer | ValidationError | GenericError;

export type PropertymappingsNotificationCreateResponse = NotificationWebhookMapping | ValidationError | GenericError;

/** NotificationWebhookMapping Serializer */
export type NotificationWebhookMappingRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  expression: Scalars['NonEmptyString']['input'];
};

export type PropertymappingsNotificationUpdateResponse = NotificationWebhookMapping | ValidationError | GenericError;

export type PropertymappingsNotificationPartialUpdateResponse = NotificationWebhookMapping | ValidationError | GenericError;

/** NotificationWebhookMapping Serializer */
export type PatchedNotificationWebhookMappingRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  expression?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type PropertymappingsNotificationDestroyResponse = VoidContainer | ValidationError | GenericError;

export type PropertymappingsRacCreateResponse = RacPropertyMapping | ValidationError | GenericError;

/** RACPropertyMapping Serializer */
export type RacPropertyMappingRequestInput = {
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: InputMaybe<Scalars['NonEmptyString']['input']>;
  name: Scalars['NonEmptyString']['input'];
  expression?: InputMaybe<Scalars['String']['input']>;
  staticSettings: Scalars['JSON']['input'];
};

export type PropertymappingsRacUpdateResponse = RacPropertyMapping | ValidationError | GenericError;

export type PropertymappingsRacPartialUpdateResponse = RacPropertyMapping | ValidationError | GenericError;

/** RACPropertyMapping Serializer */
export type PatchedRacPropertyMappingRequestInput = {
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: InputMaybe<Scalars['NonEmptyString']['input']>;
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  expression?: InputMaybe<Scalars['String']['input']>;
  staticSettings?: InputMaybe<Scalars['JSON']['input']>;
};

export type PropertymappingsRacDestroyResponse = VoidContainer | ValidationError | GenericError;

export type PropertymappingsSamlCreateResponse = SamlPropertyMapping | ValidationError | GenericError;

/** SAMLPropertyMapping Serializer */
export type SamlPropertyMappingRequestInput = {
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: InputMaybe<Scalars['NonEmptyString']['input']>;
  name: Scalars['NonEmptyString']['input'];
  expression: Scalars['NonEmptyString']['input'];
  samlName: Scalars['NonEmptyString']['input'];
  friendlyName?: InputMaybe<Scalars['String']['input']>;
};

export type PropertymappingsSamlUpdateResponse = SamlPropertyMapping | ValidationError | GenericError;

export type PropertymappingsSamlPartialUpdateResponse = SamlPropertyMapping | ValidationError | GenericError;

/** SAMLPropertyMapping Serializer */
export type PatchedSamlPropertyMappingRequestInput = {
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: InputMaybe<Scalars['NonEmptyString']['input']>;
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  expression?: InputMaybe<Scalars['NonEmptyString']['input']>;
  samlName?: InputMaybe<Scalars['NonEmptyString']['input']>;
  friendlyName?: InputMaybe<Scalars['String']['input']>;
};

export type PropertymappingsSamlDestroyResponse = VoidContainer | ValidationError | GenericError;

export type PropertymappingsScimCreateResponse = ScimMapping | ValidationError | GenericError;

/** SCIMMapping Serializer */
export type ScimMappingRequestInput = {
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: InputMaybe<Scalars['NonEmptyString']['input']>;
  name: Scalars['NonEmptyString']['input'];
  expression: Scalars['NonEmptyString']['input'];
};

export type PropertymappingsScimUpdateResponse = ScimMapping | ValidationError | GenericError;

export type PropertymappingsScimPartialUpdateResponse = ScimMapping | ValidationError | GenericError;

/** SCIMMapping Serializer */
export type PatchedScimMappingRequestInput = {
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: InputMaybe<Scalars['NonEmptyString']['input']>;
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  expression?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type PropertymappingsScimDestroyResponse = VoidContainer | ValidationError | GenericError;

export type PropertymappingsScopeCreateResponse = ScopeMapping | ValidationError | GenericError;

/** ScopeMapping Serializer */
export type ScopeMappingRequestInput = {
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: InputMaybe<Scalars['NonEmptyString']['input']>;
  name: Scalars['NonEmptyString']['input'];
  expression: Scalars['NonEmptyString']['input'];
  /** Scope name requested by the client */
  scopeName: Scalars['NonEmptyString']['input'];
  /** Description shown to the user when consenting. If left empty, the user won't be informed. */
  description?: InputMaybe<Scalars['String']['input']>;
};

export type PropertymappingsScopeUpdateResponse = ScopeMapping | ValidationError | GenericError;

export type PropertymappingsScopePartialUpdateResponse = ScopeMapping | ValidationError | GenericError;

/** ScopeMapping Serializer */
export type PatchedScopeMappingRequestInput = {
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: InputMaybe<Scalars['NonEmptyString']['input']>;
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  expression?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Scope name requested by the client */
  scopeName?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Description shown to the user when consenting. If left empty, the user won't be informed. */
  description?: InputMaybe<Scalars['String']['input']>;
};

export type PropertymappingsScopeDestroyResponse = VoidContainer | ValidationError | GenericError;

export type ProvidersAllDestroyResponse = VoidContainer | ValidationError | GenericError;

export type ProvidersLdapCreateResponse = LdapProvider | ValidationError | GenericError;

export type ProvidersLdapUpdateResponse = LdapProvider | ValidationError | GenericError;

export type ProvidersLdapPartialUpdateResponse = LdapProvider | ValidationError | GenericError;

/** LDAPProvider Serializer */
export type PatchedLdapProviderRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Flow used for authentication when the associated application is accessed by an un-authenticated user. */
  authenticationFlow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow used when authorizing this provider. */
  authorizationFlow?: InputMaybe<Scalars['UUID']['input']>;
  propertyMappings?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** DN under which objects are accessible. */
  baseDn?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Users in this group can do search queries. If not set, every user can execute search queries. */
  searchGroup?: InputMaybe<Scalars['UUID']['input']>;
  certificate?: InputMaybe<Scalars['UUID']['input']>;
  tlsServerName?: InputMaybe<Scalars['String']['input']>;
  /** The start for uidNumbers, this number is added to the user.pk to make sure that the numbers aren't too low for POSIX users. Default is 2000 to ensure that we don't collide with local users uidNumber */
  uidStartNumber?: InputMaybe<Scalars['Int']['input']>;
  /** The start for gidNumbers, this number is added to a number generated from the group.pk to make sure that the numbers aren't too low for POSIX groups. Default is 4000 to ensure that we don't collide with local groups or users primary groups gidNumber */
  gidStartNumber?: InputMaybe<Scalars['Int']['input']>;
  searchMode?: InputMaybe<LdapapiAccessMode>;
  bindMode?: InputMaybe<LdapapiAccessMode>;
  /** When enabled, code-based multi-factor authentication can be used by appending a semicolon and the TOTP code to the password. This should only be enabled if all users that will bind to this provider have a TOTP device configured, as otherwise a password may incorrectly be rejected if it contains a semicolon. */
  mfaSupport?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProvidersLdapDestroyResponse = VoidContainer | ValidationError | GenericError;

export type ProvidersOauth2CreateResponse = OAuth2Provider | ValidationError | GenericError;

export type ProvidersOauth2UpdateResponse = OAuth2Provider | ValidationError | GenericError;

export type ProvidersOauth2PartialUpdateResponse = OAuth2Provider | ValidationError | GenericError;

/** OAuth2Provider Serializer */
export type PatchedOAuth2ProviderRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Flow used for authentication when the associated application is accessed by an un-authenticated user. */
  authenticationFlow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow used when authorizing this provider. */
  authorizationFlow?: InputMaybe<Scalars['UUID']['input']>;
  propertyMappings?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  clientType?: InputMaybe<ClientTypeEnum>;
  clientId?: InputMaybe<Scalars['MutationInputProvidersOauth2PartialUpdateInputClientId']['input']>;
  clientSecret?: InputMaybe<Scalars['MutationInputProvidersOauth2PartialUpdateInputClientSecret']['input']>;
  /** Access codes not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  accessCodeValidity?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Tokens not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  accessTokenValidity?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Tokens not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  refreshTokenValidity?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Include User claims from scopes in the id_token, for applications that don't access the userinfo endpoint. */
  includeClaimsInIdToken?: InputMaybe<Scalars['Boolean']['input']>;
  /** Key used to sign the tokens. Only required when JWT Algorithm is set to RS256. */
  signingKey?: InputMaybe<Scalars['UUID']['input']>;
  /** Enter each URI on a new line. */
  redirectUris?: InputMaybe<Scalars['String']['input']>;
  subMode?: InputMaybe<SubModeEnum>;
  issuerMode?: InputMaybe<IssuerModeEnum>;
  jwksSources?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
};

export type ProvidersOauth2DestroyResponse = VoidContainer | ValidationError | GenericError;

export type ProvidersProxyCreateResponse = ProxyProvider | ValidationError | GenericError;

export type ProvidersProxyUpdateResponse = ProxyProvider | ValidationError | GenericError;

export type ProvidersProxyPartialUpdateResponse = ProxyProvider | ValidationError | GenericError;

/** ProxyProvider Serializer */
export type PatchedProxyProviderRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Flow used for authentication when the associated application is accessed by an un-authenticated user. */
  authenticationFlow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow used when authorizing this provider. */
  authorizationFlow?: InputMaybe<Scalars['UUID']['input']>;
  propertyMappings?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  internalHost?: InputMaybe<Scalars['URL']['input']>;
  externalHost?: InputMaybe<Scalars['URL']['input']>;
  /** Validate SSL Certificates of upstream servers */
  internalHostSslValidation?: InputMaybe<Scalars['Boolean']['input']>;
  certificate?: InputMaybe<Scalars['UUID']['input']>;
  /** Regular expressions for which authentication is not required. Each new line is interpreted as a new Regular Expression. */
  skipPathRegex?: InputMaybe<Scalars['String']['input']>;
  /** Set a custom HTTP-Basic Authentication header based on values from authentik. */
  basicAuthEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** User/Group Attribute used for the password part of the HTTP-Basic Header. */
  basicAuthPasswordAttribute?: InputMaybe<Scalars['String']['input']>;
  /** User/Group Attribute used for the user part of the HTTP-Basic Header. If not set, the user's Email address is used. */
  basicAuthUserAttribute?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<ProxyMode>;
  /** When enabled, this provider will intercept the authorization header and authenticate requests based on its value. */
  interceptHeaderAuth?: InputMaybe<Scalars['Boolean']['input']>;
  cookieDomain?: InputMaybe<Scalars['String']['input']>;
  jwksSources?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** Tokens not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  accessTokenValidity?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Tokens not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  refreshTokenValidity?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type ProvidersProxyDestroyResponse = VoidContainer | ValidationError | GenericError;

export type ProvidersRacCreateResponse = RacProvider | ValidationError | GenericError;

export type ProvidersRacUpdateResponse = RacProvider | ValidationError | GenericError;

export type ProvidersRacPartialUpdateResponse = RacProvider | ValidationError | GenericError;

/** RACProvider Serializer */
export type PatchedRacProviderRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Flow used for authentication when the associated application is accessed by an un-authenticated user. */
  authenticationFlow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow used when authorizing this provider. */
  authorizationFlow?: InputMaybe<Scalars['UUID']['input']>;
  propertyMappings?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  settings?: InputMaybe<Scalars['JSON']['input']>;
  /** Determines how long a session lasts. Default of 0 means that the sessions lasts until the browser is closed. (Format: hours=-1;minutes=-2;seconds=-3) */
  connectionExpiry?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** When set to true, connection tokens will be deleted upon disconnect. */
  deleteTokenOnDisconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProvidersRacDestroyResponse = VoidContainer | ValidationError | GenericError;

export type ProvidersRadiusCreateResponse = RadiusProvider | ValidationError | GenericError;

export type ProvidersRadiusUpdateResponse = RadiusProvider | ValidationError | GenericError;

export type ProvidersRadiusPartialUpdateResponse = RadiusProvider | ValidationError | GenericError;

/** RadiusProvider Serializer */
export type PatchedRadiusProviderRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Flow used for authentication when the associated application is accessed by an un-authenticated user. */
  authenticationFlow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow used when authorizing this provider. */
  authorizationFlow?: InputMaybe<Scalars['UUID']['input']>;
  propertyMappings?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** List of CIDRs (comma-separated) that clients can connect from. A more specific CIDR will match before a looser one. Clients connecting from a non-specified CIDR will be dropped. */
  clientNetworks?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Shared secret between clients and server to hash packets. */
  sharedSecret?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** When enabled, code-based multi-factor authentication can be used by appending a semicolon and the TOTP code to the password. This should only be enabled if all users that will bind to this provider have a TOTP device configured, as otherwise a password may incorrectly be rejected if it contains a semicolon. */
  mfaSupport?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProvidersRadiusDestroyResponse = VoidContainer | ValidationError | GenericError;

export type ProvidersSamlCreateResponse = SamlProvider | ValidationError | GenericError;

export type ProvidersSamlUpdateResponse = SamlProvider | ValidationError | GenericError;

export type ProvidersSamlPartialUpdateResponse = SamlProvider | ValidationError | GenericError;

/** SAMLProvider Serializer */
export type PatchedSamlProviderRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Flow used for authentication when the associated application is accessed by an un-authenticated user. */
  authenticationFlow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow used when authorizing this provider. */
  authorizationFlow?: InputMaybe<Scalars['UUID']['input']>;
  propertyMappings?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  acsUrl?: InputMaybe<Scalars['URL']['input']>;
  /** Value of the audience restriction field of the assertion. When left empty, no audience restriction will be added. */
  audience?: InputMaybe<Scalars['String']['input']>;
  /** Also known as EntityID */
  issuer?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Assertion valid not before current time + this value (Format: hours=-1;minutes=-2;seconds=-3). */
  assertionValidNotBefore?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Assertion not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  assertionValidNotOnOrAfter?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Session not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  sessionValidNotOnOrAfter?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Configure how the NameID value will be created. When left empty, the NameIDPolicy of the incoming request will be considered */
  nameIdMapping?: InputMaybe<Scalars['UUID']['input']>;
  digestAlgorithm?: InputMaybe<DigestAlgorithmEnum>;
  signatureAlgorithm?: InputMaybe<SignatureAlgorithmEnum>;
  /** Keypair used to sign outgoing Responses going to the Service Provider. */
  signingKp?: InputMaybe<Scalars['UUID']['input']>;
  /** When selected, incoming assertion's Signatures will be validated against this certificate. To allow unsigned Requests, leave on default. */
  verificationKp?: InputMaybe<Scalars['UUID']['input']>;
  /** This determines how authentik sends the response back to the Service Provider. */
  spBinding?: InputMaybe<Scalars['JSON']['input']>;
  /** Default relay_state value for IDP-initiated logins */
  defaultRelayState?: InputMaybe<Scalars['String']['input']>;
};

export type ProvidersSamlDestroyResponse = VoidContainer | ValidationError | GenericError;

export type ProvidersSamlImportMetadataCreateResponse = VoidContainer | GenericError;

/** Import saml provider from XML Metadata */
export type SamlProviderImportRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  authorizationFlow: Scalars['UUID']['input'];
  file: Scalars['File']['input'];
};

export type ProvidersScimCreateResponse = ScimProvider | ValidationError | GenericError;

export type ProvidersScimUpdateResponse = ScimProvider | ValidationError | GenericError;

export type ProvidersScimPartialUpdateResponse = ScimProvider | ValidationError | GenericError;

/** SCIMProvider Serializer */
export type PatchedScimProviderRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  propertyMappings?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** Property mappings used for group creation/updating. */
  propertyMappingsGroup?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** Base URL to SCIM requests, usually ends in /v2 */
  url?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Authentication token */
  token?: InputMaybe<Scalars['NonEmptyString']['input']>;
  excludeUsersServiceAccount?: InputMaybe<Scalars['Boolean']['input']>;
  filterGroup?: InputMaybe<Scalars['UUID']['input']>;
};

export type ProvidersScimDestroyResponse = VoidContainer | ValidationError | GenericError;

export type RacConnectionTokensUpdateResponse = ConnectionToken | ValidationError | GenericError;

/** ConnectionToken Serializer */
export type ConnectionTokenRequestInput = {
  pk?: InputMaybe<Scalars['UUID']['input']>;
  provider: Scalars['Int']['input'];
  endpoint: Scalars['UUID']['input'];
};

export type RacConnectionTokensPartialUpdateResponse = ConnectionToken | ValidationError | GenericError;

/** ConnectionToken Serializer */
export type PatchedConnectionTokenRequestInput = {
  pk?: InputMaybe<Scalars['UUID']['input']>;
  provider?: InputMaybe<Scalars['Int']['input']>;
  endpoint?: InputMaybe<Scalars['UUID']['input']>;
};

export type RacConnectionTokensDestroyResponse = VoidContainer | ValidationError | GenericError;

export type RacEndpointsCreateResponse = Endpoint | ValidationError | GenericError;

/** Endpoint Serializer */
export type EndpointRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  provider: Scalars['Int']['input'];
  protocol: ProtocolEnum;
  host: Scalars['NonEmptyString']['input'];
  settings?: InputMaybe<Scalars['JSON']['input']>;
  propertyMappings?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  authMode: AuthModeEnum;
  maximumConnections?: InputMaybe<Scalars['Int']['input']>;
};

export type RacEndpointsUpdateResponse = Endpoint | ValidationError | GenericError;

export type RacEndpointsPartialUpdateResponse = Endpoint | ValidationError | GenericError;

/** Endpoint Serializer */
export type PatchedEndpointRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  provider?: InputMaybe<Scalars['Int']['input']>;
  protocol?: InputMaybe<ProtocolEnum>;
  host?: InputMaybe<Scalars['NonEmptyString']['input']>;
  settings?: InputMaybe<Scalars['JSON']['input']>;
  propertyMappings?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  authMode?: InputMaybe<AuthModeEnum>;
  maximumConnections?: InputMaybe<Scalars['Int']['input']>;
};

export type RacEndpointsDestroyResponse = VoidContainer | ValidationError | GenericError;

export type RbacPermissionsAssignedByRolesAssignCreateResponse = VoidContainer | ValidationError | GenericError;

/** Request to assign a new permission */
export type PermissionAssignRequestInput = {
  permissions: Array<InputMaybe<Scalars['NonEmptyString']['input']>>;
  model?: InputMaybe<ModelEnum>;
  objectPk?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type RbacPermissionsAssignedByRolesUnassignPartialUpdateResponse = VoidContainer | ValidationError | GenericError;

/** Request to assign a new permission */
export type PatchedPermissionAssignRequestInput = {
  permissions?: InputMaybe<Array<InputMaybe<Scalars['NonEmptyString']['input']>>>;
  model?: InputMaybe<ModelEnum>;
  objectPk?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type RbacPermissionsAssignedByUsersAssignCreateResponse = VoidContainer | ValidationError | GenericError;

export type RbacPermissionsAssignedByUsersUnassignPartialUpdateResponse = VoidContainer | ValidationError | GenericError;

export type RbacRolesCreateResponse = Role | ValidationError | GenericError;

/** Role serializer */
export type RoleRequestInput = {
  name: Scalars['MutationInputRbacRolesCreateInputName']['input'];
};

export type RbacRolesUpdateResponse = Role | ValidationError | GenericError;

export type RbacRolesPartialUpdateResponse = Role | ValidationError | GenericError;

/** Role serializer */
export type PatchedRoleRequestInput = {
  name?: InputMaybe<Scalars['MutationInputRbacRolesPartialUpdateInputName']['input']>;
};

export type RbacRolesDestroyResponse = VoidContainer | ValidationError | GenericError;

export type SourcesAllDestroyResponse = VoidContainer | ValidationError | GenericError;

export type SourcesLdapCreateResponse = LdapSource | ValidationError | GenericError;

/** LDAP Source Serializer */
export type LdapSourceRequestInput = {
  /** Source's display Name. */
  name: Scalars['NonEmptyString']['input'];
  slug: Scalars['MutationInputSourcesLdapCreateInputSlug']['input'];
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Flow to use when authenticating existing users. */
  authenticationFlow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow to use when enrolling new users. */
  enrollmentFlow?: InputMaybe<Scalars['UUID']['input']>;
  policyEngineMode?: InputMaybe<PolicyEngineMode>;
  userMatchingMode?: InputMaybe<UserMatchingModeEnum>;
  userPathTemplate?: InputMaybe<Scalars['NonEmptyString']['input']>;
  serverUri: Scalars['URL']['input'];
  /** Optionally verify the LDAP Server's Certificate against the CA Chain in this keypair. */
  peerCertificate?: InputMaybe<Scalars['UUID']['input']>;
  /** Client certificate to authenticate against the LDAP Server's Certificate. */
  clientCertificate?: InputMaybe<Scalars['UUID']['input']>;
  bindCn?: InputMaybe<Scalars['String']['input']>;
  bindPassword?: InputMaybe<Scalars['String']['input']>;
  startTls?: InputMaybe<Scalars['Boolean']['input']>;
  sni?: InputMaybe<Scalars['Boolean']['input']>;
  baseDn: Scalars['NonEmptyString']['input'];
  /** Prepended to Base DN for User-queries. */
  additionalUserDn?: InputMaybe<Scalars['String']['input']>;
  /** Prepended to Base DN for Group-queries. */
  additionalGroupDn?: InputMaybe<Scalars['String']['input']>;
  /** Consider Objects matching this filter to be Users. */
  userObjectFilter?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Consider Objects matching this filter to be Groups. */
  groupObjectFilter?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Field which contains members of a group. */
  groupMembershipField?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Field which contains a unique Identifier. */
  objectUniquenessField?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Update internal authentik password when login succeeds with LDAP */
  passwordLoginUpdateInternalPassword?: InputMaybe<Scalars['Boolean']['input']>;
  syncUsers?: InputMaybe<Scalars['Boolean']['input']>;
  /** When a user changes their password, sync it back to LDAP. This can only be enabled on a single LDAP source. */
  syncUsersPassword?: InputMaybe<Scalars['Boolean']['input']>;
  syncGroups?: InputMaybe<Scalars['Boolean']['input']>;
  syncParentGroup?: InputMaybe<Scalars['UUID']['input']>;
  propertyMappings?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** Property mappings used for group creation/updating. */
  propertyMappingsGroup?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
};

export type SourcesLdapUpdateResponse = LdapSource | ValidationError | GenericError;

export type SourcesLdapPartialUpdateResponse = LdapSource | ValidationError | GenericError;

/** LDAP Source Serializer */
export type PatchedLdapSourceRequestInput = {
  /** Source's display Name. */
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  slug?: InputMaybe<Scalars['MutationInputSourcesLdapPartialUpdateInputSlug']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Flow to use when authenticating existing users. */
  authenticationFlow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow to use when enrolling new users. */
  enrollmentFlow?: InputMaybe<Scalars['UUID']['input']>;
  policyEngineMode?: InputMaybe<PolicyEngineMode>;
  userMatchingMode?: InputMaybe<UserMatchingModeEnum>;
  userPathTemplate?: InputMaybe<Scalars['NonEmptyString']['input']>;
  serverUri?: InputMaybe<Scalars['URL']['input']>;
  /** Optionally verify the LDAP Server's Certificate against the CA Chain in this keypair. */
  peerCertificate?: InputMaybe<Scalars['UUID']['input']>;
  /** Client certificate to authenticate against the LDAP Server's Certificate. */
  clientCertificate?: InputMaybe<Scalars['UUID']['input']>;
  bindCn?: InputMaybe<Scalars['String']['input']>;
  bindPassword?: InputMaybe<Scalars['String']['input']>;
  startTls?: InputMaybe<Scalars['Boolean']['input']>;
  sni?: InputMaybe<Scalars['Boolean']['input']>;
  baseDn?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Prepended to Base DN for User-queries. */
  additionalUserDn?: InputMaybe<Scalars['String']['input']>;
  /** Prepended to Base DN for Group-queries. */
  additionalGroupDn?: InputMaybe<Scalars['String']['input']>;
  /** Consider Objects matching this filter to be Users. */
  userObjectFilter?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Consider Objects matching this filter to be Groups. */
  groupObjectFilter?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Field which contains members of a group. */
  groupMembershipField?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Field which contains a unique Identifier. */
  objectUniquenessField?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Update internal authentik password when login succeeds with LDAP */
  passwordLoginUpdateInternalPassword?: InputMaybe<Scalars['Boolean']['input']>;
  syncUsers?: InputMaybe<Scalars['Boolean']['input']>;
  /** When a user changes their password, sync it back to LDAP. This can only be enabled on a single LDAP source. */
  syncUsersPassword?: InputMaybe<Scalars['Boolean']['input']>;
  syncGroups?: InputMaybe<Scalars['Boolean']['input']>;
  syncParentGroup?: InputMaybe<Scalars['UUID']['input']>;
  propertyMappings?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** Property mappings used for group creation/updating. */
  propertyMappingsGroup?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
};

export type SourcesLdapDestroyResponse = VoidContainer | ValidationError | GenericError;

export type SourcesOauthCreateResponse = OAuthSource | ValidationError | GenericError;

/** OAuth Source Serializer */
export type OAuthSourceRequestInput = {
  /** Source's display Name. */
  name: Scalars['NonEmptyString']['input'];
  slug: Scalars['MutationInputSourcesOauthCreateInputSlug']['input'];
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Flow to use when authenticating existing users. */
  authenticationFlow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow to use when enrolling new users. */
  enrollmentFlow?: InputMaybe<Scalars['UUID']['input']>;
  policyEngineMode?: InputMaybe<PolicyEngineMode>;
  userMatchingMode?: InputMaybe<UserMatchingModeEnum>;
  userPathTemplate?: InputMaybe<Scalars['NonEmptyString']['input']>;
  providerType: ProviderTypeEnum;
  /** URL used to request the initial token. This URL is only required for OAuth 1. */
  requestTokenUrl?: InputMaybe<Scalars['MutationInputSourcesOauthCreateInputRequestTokenUrl']['input']>;
  /** URL the user is redirect to to conest the flow. */
  authorizationUrl?: InputMaybe<Scalars['MutationInputSourcesOauthCreateInputAuthorizationUrl']['input']>;
  /** URL used by authentik to retrieve tokens. */
  accessTokenUrl?: InputMaybe<Scalars['MutationInputSourcesOauthCreateInputAccessTokenUrl']['input']>;
  /** URL used by authentik to get user information. */
  profileUrl?: InputMaybe<Scalars['MutationInputSourcesOauthCreateInputProfileUrl']['input']>;
  consumerKey: Scalars['NonEmptyString']['input'];
  consumerSecret: Scalars['NonEmptyString']['input'];
  additionalScopes?: InputMaybe<Scalars['String']['input']>;
  oidcWellKnownUrl?: InputMaybe<Scalars['String']['input']>;
  oidcJwksUrl?: InputMaybe<Scalars['String']['input']>;
  oidcJwks?: InputMaybe<Scalars['JSON']['input']>;
};

export type SourcesOauthUpdateResponse = OAuthSource | ValidationError | GenericError;

export type SourcesOauthPartialUpdateResponse = OAuthSource | ValidationError | GenericError;

/** OAuth Source Serializer */
export type PatchedOAuthSourceRequestInput = {
  /** Source's display Name. */
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  slug?: InputMaybe<Scalars['MutationInputSourcesOauthPartialUpdateInputSlug']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Flow to use when authenticating existing users. */
  authenticationFlow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow to use when enrolling new users. */
  enrollmentFlow?: InputMaybe<Scalars['UUID']['input']>;
  policyEngineMode?: InputMaybe<PolicyEngineMode>;
  userMatchingMode?: InputMaybe<UserMatchingModeEnum>;
  userPathTemplate?: InputMaybe<Scalars['NonEmptyString']['input']>;
  providerType?: InputMaybe<ProviderTypeEnum>;
  /** URL used to request the initial token. This URL is only required for OAuth 1. */
  requestTokenUrl?: InputMaybe<Scalars['MutationInputSourcesOauthPartialUpdateInputRequestTokenUrl']['input']>;
  /** URL the user is redirect to to conest the flow. */
  authorizationUrl?: InputMaybe<Scalars['MutationInputSourcesOauthPartialUpdateInputAuthorizationUrl']['input']>;
  /** URL used by authentik to retrieve tokens. */
  accessTokenUrl?: InputMaybe<Scalars['MutationInputSourcesOauthPartialUpdateInputAccessTokenUrl']['input']>;
  /** URL used by authentik to get user information. */
  profileUrl?: InputMaybe<Scalars['MutationInputSourcesOauthPartialUpdateInputProfileUrl']['input']>;
  consumerKey?: InputMaybe<Scalars['NonEmptyString']['input']>;
  consumerSecret?: InputMaybe<Scalars['NonEmptyString']['input']>;
  additionalScopes?: InputMaybe<Scalars['String']['input']>;
  oidcWellKnownUrl?: InputMaybe<Scalars['String']['input']>;
  oidcJwksUrl?: InputMaybe<Scalars['String']['input']>;
  oidcJwks?: InputMaybe<Scalars['JSON']['input']>;
};

export type SourcesOauthDestroyResponse = VoidContainer | ValidationError | GenericError;

export type SourcesPlexCreateResponse = PlexSource | ValidationError | GenericError;

/** Plex Source Serializer */
export type PlexSourceRequestInput = {
  /** Source's display Name. */
  name: Scalars['NonEmptyString']['input'];
  slug: Scalars['MutationInputSourcesPlexCreateInputSlug']['input'];
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Flow to use when authenticating existing users. */
  authenticationFlow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow to use when enrolling new users. */
  enrollmentFlow?: InputMaybe<Scalars['UUID']['input']>;
  policyEngineMode?: InputMaybe<PolicyEngineMode>;
  userMatchingMode?: InputMaybe<UserMatchingModeEnum>;
  userPathTemplate?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Client identifier used to talk to Plex. */
  clientId?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Which servers a user has to be a member of to be granted access. Empty list allows every server. */
  allowedServers?: InputMaybe<Array<InputMaybe<Scalars['NonEmptyString']['input']>>>;
  /** Allow friends to authenticate, even if you don't share a server. */
  allowFriends?: InputMaybe<Scalars['Boolean']['input']>;
  /** Plex token used to check friends */
  plexToken: Scalars['NonEmptyString']['input'];
};

export type SourcesPlexUpdateResponse = PlexSource | ValidationError | GenericError;

export type SourcesPlexPartialUpdateResponse = PlexSource | ValidationError | GenericError;

/** Plex Source Serializer */
export type PatchedPlexSourceRequestInput = {
  /** Source's display Name. */
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  slug?: InputMaybe<Scalars['MutationInputSourcesPlexPartialUpdateInputSlug']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Flow to use when authenticating existing users. */
  authenticationFlow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow to use when enrolling new users. */
  enrollmentFlow?: InputMaybe<Scalars['UUID']['input']>;
  policyEngineMode?: InputMaybe<PolicyEngineMode>;
  userMatchingMode?: InputMaybe<UserMatchingModeEnum>;
  userPathTemplate?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Client identifier used to talk to Plex. */
  clientId?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Which servers a user has to be a member of to be granted access. Empty list allows every server. */
  allowedServers?: InputMaybe<Array<InputMaybe<Scalars['NonEmptyString']['input']>>>;
  /** Allow friends to authenticate, even if you don't share a server. */
  allowFriends?: InputMaybe<Scalars['Boolean']['input']>;
  /** Plex token used to check friends */
  plexToken?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type SourcesPlexDestroyResponse = VoidContainer | ValidationError | GenericError;

/** Serializer to redeem a plex token */
export type PlexTokenRedeemRequestInput = {
  plexToken: Scalars['NonEmptyString']['input'];
};

export type SourcesSamlCreateResponse = SamlSource | ValidationError | GenericError;

/** SAMLSource Serializer */
export type SamlSourceRequestInput = {
  /** Source's display Name. */
  name: Scalars['NonEmptyString']['input'];
  slug: Scalars['MutationInputSourcesSamlCreateInputSlug']['input'];
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Flow to use when authenticating existing users. */
  authenticationFlow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow to use when enrolling new users. */
  enrollmentFlow?: InputMaybe<Scalars['UUID']['input']>;
  policyEngineMode?: InputMaybe<PolicyEngineMode>;
  userMatchingMode?: InputMaybe<UserMatchingModeEnum>;
  userPathTemplate?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Flow used before authentication. */
  preAuthenticationFlow: Scalars['UUID']['input'];
  /** Also known as Entity ID. Defaults the Metadata URL. */
  issuer?: InputMaybe<Scalars['String']['input']>;
  /** URL that the initial Login request is sent to. */
  ssoUrl: Scalars['URL']['input'];
  /** Optional URL if your IDP supports Single-Logout. */
  sloUrl?: InputMaybe<Scalars['URL']['input']>;
  /** Allows authentication flows initiated by the IdP. This can be a security risk, as no validation of the request ID is done. */
  allowIdpInitiated?: InputMaybe<Scalars['Boolean']['input']>;
  nameIdPolicy?: InputMaybe<NameIdPolicyEnum>;
  bindingType?: InputMaybe<BindingTypeEnum>;
  /** When selected, incoming assertion's Signatures will be validated against this certificate. To allow unsigned Requests, leave on default. */
  verificationKp?: InputMaybe<Scalars['UUID']['input']>;
  /** Keypair used to sign outgoing Responses going to the Identity Provider. */
  signingKp?: InputMaybe<Scalars['UUID']['input']>;
  digestAlgorithm?: InputMaybe<DigestAlgorithmEnum>;
  signatureAlgorithm?: InputMaybe<SignatureAlgorithmEnum>;
  /** Time offset when temporary users should be deleted. This only applies if your IDP uses the NameID Format 'transient', and the user doesn't log out manually. (Format: hours=1;minutes=2;seconds=3). */
  temporaryUserDeleteAfter?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type SourcesSamlUpdateResponse = SamlSource | ValidationError | GenericError;

export type SourcesSamlPartialUpdateResponse = SamlSource | ValidationError | GenericError;

/** SAMLSource Serializer */
export type PatchedSamlSourceRequestInput = {
  /** Source's display Name. */
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  slug?: InputMaybe<Scalars['MutationInputSourcesSamlPartialUpdateInputSlug']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Flow to use when authenticating existing users. */
  authenticationFlow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow to use when enrolling new users. */
  enrollmentFlow?: InputMaybe<Scalars['UUID']['input']>;
  policyEngineMode?: InputMaybe<PolicyEngineMode>;
  userMatchingMode?: InputMaybe<UserMatchingModeEnum>;
  userPathTemplate?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Flow used before authentication. */
  preAuthenticationFlow?: InputMaybe<Scalars['UUID']['input']>;
  /** Also known as Entity ID. Defaults the Metadata URL. */
  issuer?: InputMaybe<Scalars['String']['input']>;
  /** URL that the initial Login request is sent to. */
  ssoUrl?: InputMaybe<Scalars['URL']['input']>;
  /** Optional URL if your IDP supports Single-Logout. */
  sloUrl?: InputMaybe<Scalars['URL']['input']>;
  /** Allows authentication flows initiated by the IdP. This can be a security risk, as no validation of the request ID is done. */
  allowIdpInitiated?: InputMaybe<Scalars['Boolean']['input']>;
  nameIdPolicy?: InputMaybe<NameIdPolicyEnum>;
  bindingType?: InputMaybe<BindingTypeEnum>;
  /** When selected, incoming assertion's Signatures will be validated against this certificate. To allow unsigned Requests, leave on default. */
  verificationKp?: InputMaybe<Scalars['UUID']['input']>;
  /** Keypair used to sign outgoing Responses going to the Identity Provider. */
  signingKp?: InputMaybe<Scalars['UUID']['input']>;
  digestAlgorithm?: InputMaybe<DigestAlgorithmEnum>;
  signatureAlgorithm?: InputMaybe<SignatureAlgorithmEnum>;
  /** Time offset when temporary users should be deleted. This only applies if your IDP uses the NameID Format 'transient', and the user doesn't log out manually. (Format: hours=1;minutes=2;seconds=3). */
  temporaryUserDeleteAfter?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type SourcesSamlDestroyResponse = VoidContainer | ValidationError | GenericError;

export type SourcesScimCreateResponse = ScimSource | ValidationError | GenericError;

/** SCIMSource Serializer */
export type ScimSourceRequestInput = {
  /** Source's display Name. */
  name: Scalars['NonEmptyString']['input'];
  slug: Scalars['MutationInputSourcesScimCreateInputSlug']['input'];
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  userMatchingMode?: InputMaybe<UserMatchingModeEnum>;
  userPathTemplate?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type SourcesScimUpdateResponse = ScimSource | ValidationError | GenericError;

export type SourcesScimPartialUpdateResponse = ScimSource | ValidationError | GenericError;

/** SCIMSource Serializer */
export type PatchedScimSourceRequestInput = {
  /** Source's display Name. */
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  slug?: InputMaybe<Scalars['MutationInputSourcesScimPartialUpdateInputSlug']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  userMatchingMode?: InputMaybe<UserMatchingModeEnum>;
  userPathTemplate?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type SourcesScimDestroyResponse = VoidContainer | ValidationError | GenericError;

export type SourcesScimGroupsCreateResponse = ScimSourceGroup | ValidationError | GenericError;

/** SCIMSourceGroup Serializer */
export type ScimSourceGroupRequestInput = {
  id: Scalars['NonEmptyString']['input'];
  group: Scalars['UUID']['input'];
  source: Scalars['UUID']['input'];
  attributes?: InputMaybe<Scalars['JSON']['input']>;
};

export type SourcesScimGroupsUpdateResponse = ScimSourceGroup | ValidationError | GenericError;

export type SourcesScimGroupsPartialUpdateResponse = ScimSourceGroup | ValidationError | GenericError;

/** SCIMSourceGroup Serializer */
export type PatchedScimSourceGroupRequestInput = {
  id?: InputMaybe<Scalars['NonEmptyString']['input']>;
  group?: InputMaybe<Scalars['UUID']['input']>;
  source?: InputMaybe<Scalars['UUID']['input']>;
  attributes?: InputMaybe<Scalars['JSON']['input']>;
};

export type SourcesScimGroupsDestroyResponse = VoidContainer | ValidationError | GenericError;

export type SourcesScimUsersCreateResponse = ScimSourceUser | ValidationError | GenericError;

/** SCIMSourceUser Serializer */
export type ScimSourceUserRequestInput = {
  id: Scalars['NonEmptyString']['input'];
  user: Scalars['Int']['input'];
  source: Scalars['UUID']['input'];
  attributes?: InputMaybe<Scalars['JSON']['input']>;
};

export type SourcesScimUsersUpdateResponse = ScimSourceUser | ValidationError | GenericError;

export type SourcesScimUsersPartialUpdateResponse = ScimSourceUser | ValidationError | GenericError;

/** SCIMSourceUser Serializer */
export type PatchedScimSourceUserRequestInput = {
  id?: InputMaybe<Scalars['NonEmptyString']['input']>;
  user?: InputMaybe<Scalars['Int']['input']>;
  source?: InputMaybe<Scalars['UUID']['input']>;
  attributes?: InputMaybe<Scalars['JSON']['input']>;
};

export type SourcesScimUsersDestroyResponse = VoidContainer | ValidationError | GenericError;

export type SourcesUserConnectionsAllUpdateResponse = UserSourceConnection | ValidationError | GenericError;

export type SourcesUserConnectionsAllPartialUpdateResponse = UserSourceConnection | ValidationError | GenericError;

export type SourcesUserConnectionsAllDestroyResponse = VoidContainer | ValidationError | GenericError;

export type SourcesUserConnectionsOauthCreateResponse = UserOAuthSourceConnection | ValidationError | GenericError;

/** OAuth Source Serializer */
export type UserOAuthSourceConnectionRequestInput = {
  user: Scalars['Int']['input'];
  identifier: Scalars['MutationInputSourcesUserConnectionsOauthCreateInputIdentifier']['input'];
  accessToken?: InputMaybe<Scalars['String']['input']>;
};

export type SourcesUserConnectionsOauthUpdateResponse = UserOAuthSourceConnection | ValidationError | GenericError;

export type SourcesUserConnectionsOauthPartialUpdateResponse = UserOAuthSourceConnection | ValidationError | GenericError;

/** OAuth Source Serializer */
export type PatchedUserOAuthSourceConnectionRequestInput = {
  user?: InputMaybe<Scalars['Int']['input']>;
  identifier?: InputMaybe<Scalars['MutationInputSourcesUserConnectionsOauthPartialUpdateInputIdentifier']['input']>;
  accessToken?: InputMaybe<Scalars['String']['input']>;
};

export type SourcesUserConnectionsOauthDestroyResponse = VoidContainer | ValidationError | GenericError;

export type SourcesUserConnectionsPlexCreateResponse = PlexSourceConnection | ValidationError | GenericError;

/** Plex Source connection Serializer */
export type PlexSourceConnectionRequestInput = {
  identifier: Scalars['NonEmptyString']['input'];
  plexToken: Scalars['NonEmptyString']['input'];
};

export type SourcesUserConnectionsPlexUpdateResponse = PlexSourceConnection | ValidationError | GenericError;

export type SourcesUserConnectionsPlexPartialUpdateResponse = PlexSourceConnection | ValidationError | GenericError;

/** Plex Source connection Serializer */
export type PatchedPlexSourceConnectionRequestInput = {
  identifier?: InputMaybe<Scalars['NonEmptyString']['input']>;
  plexToken?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type SourcesUserConnectionsPlexDestroyResponse = VoidContainer | ValidationError | GenericError;

export type SourcesUserConnectionsSamlCreateResponse = UserSamlSourceConnection | ValidationError | GenericError;

/** SAML Source Serializer */
export type UserSamlSourceConnectionRequestInput = {
  user: Scalars['Int']['input'];
  identifier: Scalars['NonEmptyString']['input'];
};

export type SourcesUserConnectionsSamlUpdateResponse = UserSamlSourceConnection | ValidationError | GenericError;

export type SourcesUserConnectionsSamlPartialUpdateResponse = UserSamlSourceConnection | ValidationError | GenericError;

/** SAML Source Serializer */
export type PatchedUserSamlSourceConnectionRequestInput = {
  user?: InputMaybe<Scalars['Int']['input']>;
  identifier?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type SourcesUserConnectionsSamlDestroyResponse = VoidContainer | ValidationError | GenericError;

export type StagesAllDestroyResponse = VoidContainer | ValidationError | GenericError;

export type StagesAuthenticatorDuoCreateResponse = AuthenticatorDuoStage | ValidationError | GenericError;

/** AuthenticatorDuoStage Serializer */
export type AuthenticatorDuoStageRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
  /** Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage. */
  configureFlow?: InputMaybe<Scalars['UUID']['input']>;
  friendlyName?: InputMaybe<Scalars['NonEmptyString']['input']>;
  clientId: Scalars['NonEmptyString']['input'];
  clientSecret: Scalars['NonEmptyString']['input'];
  apiHostname: Scalars['NonEmptyString']['input'];
  adminIntegrationKey?: InputMaybe<Scalars['String']['input']>;
  adminSecretKey?: InputMaybe<Scalars['String']['input']>;
};

/** Stripped down flow serializer */
export type FlowSetRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  slug: Scalars['MutationInputStagesAuthenticatorDuoCreateInputFlowSetItemsSlug']['input'];
  /** Shown as the Title in Flow pages. */
  title: Scalars['NonEmptyString']['input'];
  designation: FlowDesignationEnum;
  policyEngineMode?: InputMaybe<PolicyEngineMode>;
  /** Enable compatibility mode, increases compatibility with password managers on mobile devices. */
  compatibilityMode?: InputMaybe<Scalars['Boolean']['input']>;
  layout?: InputMaybe<FlowLayoutEnum>;
  deniedAction?: InputMaybe<DeniedActionEnum>;
};

export type StagesAuthenticatorDuoUpdateResponse = AuthenticatorDuoStage | ValidationError | GenericError;

export type StagesAuthenticatorDuoPartialUpdateResponse = AuthenticatorDuoStage | ValidationError | GenericError;

/** AuthenticatorDuoStage Serializer */
export type PatchedAuthenticatorDuoStageRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
  /** Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage. */
  configureFlow?: InputMaybe<Scalars['UUID']['input']>;
  friendlyName?: InputMaybe<Scalars['NonEmptyString']['input']>;
  clientId?: InputMaybe<Scalars['NonEmptyString']['input']>;
  clientSecret?: InputMaybe<Scalars['NonEmptyString']['input']>;
  apiHostname?: InputMaybe<Scalars['NonEmptyString']['input']>;
  adminIntegrationKey?: InputMaybe<Scalars['String']['input']>;
  adminSecretKey?: InputMaybe<Scalars['String']['input']>;
};

export type StagesAuthenticatorDuoDestroyResponse = VoidContainer | ValidationError | GenericError;

export type StagesAuthenticatorDuoEnrollmentStatusCreateResponse = DuoDeviceEnrollmentStatus | ValidationError | GenericError;

export type DuoDeviceEnrollmentStatus = {
  duoResponse: DuoResponseEnum;
};

export type DuoResponseEnum =
  | 'SUCCESS'
  | 'WAITING'
  | 'INVALID';

export type StagesAuthenticatorDuoImportDeviceManualCreateResponse = VoidContainer | GenericError;

export type AuthenticatorDuoStageManualDeviceImportRequestInput = {
  duoUserId: Scalars['NonEmptyString']['input'];
  username: Scalars['NonEmptyString']['input'];
};

export type StagesAuthenticatorDuoImportDevicesAutomaticCreateResponse = AuthenticatorDuoStageDeviceImportResponse | GenericError;

export type AuthenticatorDuoStageDeviceImportResponse = {
  count: Scalars['Int']['output'];
  error: Scalars['String']['output'];
};

export type StagesAuthenticatorSmsCreateResponse = AuthenticatorSmsStage | ValidationError | GenericError;

/** AuthenticatorSMSStage Serializer */
export type AuthenticatorSmsStageRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
  /** Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage. */
  configureFlow?: InputMaybe<Scalars['UUID']['input']>;
  friendlyName?: InputMaybe<Scalars['NonEmptyString']['input']>;
  provider: ProviderEnum;
  fromNumber: Scalars['NonEmptyString']['input'];
  accountSid: Scalars['NonEmptyString']['input'];
  auth: Scalars['NonEmptyString']['input'];
  authPassword?: InputMaybe<Scalars['String']['input']>;
  authType?: InputMaybe<AuthTypeEnum>;
  /** When enabled, the Phone number is only used during enrollment to verify the users authenticity. Only a hash of the phone number is saved to ensure it is not reused in the future. */
  verifyOnly?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optionally modify the payload being sent to custom providers. */
  mapping?: InputMaybe<Scalars['UUID']['input']>;
};

export type StagesAuthenticatorSmsUpdateResponse = AuthenticatorSmsStage | ValidationError | GenericError;

export type StagesAuthenticatorSmsPartialUpdateResponse = AuthenticatorSmsStage | ValidationError | GenericError;

/** AuthenticatorSMSStage Serializer */
export type PatchedAuthenticatorSmsStageRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
  /** Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage. */
  configureFlow?: InputMaybe<Scalars['UUID']['input']>;
  friendlyName?: InputMaybe<Scalars['NonEmptyString']['input']>;
  provider?: InputMaybe<ProviderEnum>;
  fromNumber?: InputMaybe<Scalars['NonEmptyString']['input']>;
  accountSid?: InputMaybe<Scalars['NonEmptyString']['input']>;
  auth?: InputMaybe<Scalars['NonEmptyString']['input']>;
  authPassword?: InputMaybe<Scalars['String']['input']>;
  authType?: InputMaybe<AuthTypeEnum>;
  /** When enabled, the Phone number is only used during enrollment to verify the users authenticity. Only a hash of the phone number is saved to ensure it is not reused in the future. */
  verifyOnly?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optionally modify the payload being sent to custom providers. */
  mapping?: InputMaybe<Scalars['UUID']['input']>;
};

export type StagesAuthenticatorSmsDestroyResponse = VoidContainer | ValidationError | GenericError;

export type StagesAuthenticatorStaticCreateResponse = AuthenticatorStaticStage | ValidationError | GenericError;

/** AuthenticatorStaticStage Serializer */
export type AuthenticatorStaticStageRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
  /** Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage. */
  configureFlow?: InputMaybe<Scalars['UUID']['input']>;
  friendlyName?: InputMaybe<Scalars['NonEmptyString']['input']>;
  tokenCount?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  tokenLength?: InputMaybe<Scalars['NonNegativeInt']['input']>;
};

export type StagesAuthenticatorStaticUpdateResponse = AuthenticatorStaticStage | ValidationError | GenericError;

export type StagesAuthenticatorStaticPartialUpdateResponse = AuthenticatorStaticStage | ValidationError | GenericError;

/** AuthenticatorStaticStage Serializer */
export type PatchedAuthenticatorStaticStageRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
  /** Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage. */
  configureFlow?: InputMaybe<Scalars['UUID']['input']>;
  friendlyName?: InputMaybe<Scalars['NonEmptyString']['input']>;
  tokenCount?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  tokenLength?: InputMaybe<Scalars['NonNegativeInt']['input']>;
};

export type StagesAuthenticatorStaticDestroyResponse = VoidContainer | ValidationError | GenericError;

export type StagesAuthenticatorTotpCreateResponse = AuthenticatorTotpStage | ValidationError | GenericError;

/** AuthenticatorTOTPStage Serializer */
export type AuthenticatorTotpStageRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
  /** Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage. */
  configureFlow?: InputMaybe<Scalars['UUID']['input']>;
  friendlyName?: InputMaybe<Scalars['NonEmptyString']['input']>;
  digits: DigitsEnum;
};

export type StagesAuthenticatorTotpUpdateResponse = AuthenticatorTotpStage | ValidationError | GenericError;

export type StagesAuthenticatorTotpPartialUpdateResponse = AuthenticatorTotpStage | ValidationError | GenericError;

/** AuthenticatorTOTPStage Serializer */
export type PatchedAuthenticatorTotpStageRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
  /** Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage. */
  configureFlow?: InputMaybe<Scalars['UUID']['input']>;
  friendlyName?: InputMaybe<Scalars['NonEmptyString']['input']>;
  digits?: InputMaybe<DigitsEnum>;
};

export type StagesAuthenticatorTotpDestroyResponse = VoidContainer | ValidationError | GenericError;

export type StagesAuthenticatorValidateCreateResponse = AuthenticatorValidateStage | ValidationError | GenericError;

/** AuthenticatorValidateStage Serializer */
export type AuthenticatorValidateStageRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
  notConfiguredAction?: InputMaybe<NotConfiguredActionEnum>;
  /** Device classes which can be used to authenticate */
  deviceClasses?: InputMaybe<Array<InputMaybe<DeviceClassesEnum>>>;
  /** Stages used to configure Authenticator when user doesn't have any compatible devices. After this configuration Stage passes, the user is not prompted again. */
  configurationStages?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** If any of the user's device has been used within this threshold, this stage will be skipped */
  lastAuthThreshold?: InputMaybe<Scalars['NonEmptyString']['input']>;
  webauthnUserVerification?: InputMaybe<UserVerificationEnum>;
  webauthnAllowedDeviceTypes?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
};

export type StagesAuthenticatorValidateUpdateResponse = AuthenticatorValidateStage | ValidationError | GenericError;

export type StagesAuthenticatorValidatePartialUpdateResponse = AuthenticatorValidateStage | ValidationError | GenericError;

/** AuthenticatorValidateStage Serializer */
export type PatchedAuthenticatorValidateStageRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
  notConfiguredAction?: InputMaybe<NotConfiguredActionEnum>;
  /** Device classes which can be used to authenticate */
  deviceClasses?: InputMaybe<Array<InputMaybe<DeviceClassesEnum>>>;
  /** Stages used to configure Authenticator when user doesn't have any compatible devices. After this configuration Stage passes, the user is not prompted again. */
  configurationStages?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** If any of the user's device has been used within this threshold, this stage will be skipped */
  lastAuthThreshold?: InputMaybe<Scalars['NonEmptyString']['input']>;
  webauthnUserVerification?: InputMaybe<UserVerificationEnum>;
  webauthnAllowedDeviceTypes?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
};

export type StagesAuthenticatorValidateDestroyResponse = VoidContainer | ValidationError | GenericError;

export type StagesAuthenticatorWebauthnCreateResponse = AuthenticatorWebAuthnStage | ValidationError | GenericError;

/** AuthenticatorWebAuthnStage Serializer */
export type AuthenticatorWebAuthnStageRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
  /** Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage. */
  configureFlow?: InputMaybe<Scalars['UUID']['input']>;
  friendlyName?: InputMaybe<Scalars['NonEmptyString']['input']>;
  userVerification?: InputMaybe<UserVerificationEnum>;
  authenticatorAttachment?: InputMaybe<AuthenticatorAttachmentEnum>;
  residentKeyRequirement?: InputMaybe<ResidentKeyRequirementEnum>;
  deviceTypeRestrictions?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
};

export type StagesAuthenticatorWebauthnUpdateResponse = AuthenticatorWebAuthnStage | ValidationError | GenericError;

export type StagesAuthenticatorWebauthnPartialUpdateResponse = AuthenticatorWebAuthnStage | ValidationError | GenericError;

/** AuthenticatorWebAuthnStage Serializer */
export type PatchedAuthenticatorWebAuthnStageRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
  /** Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage. */
  configureFlow?: InputMaybe<Scalars['UUID']['input']>;
  friendlyName?: InputMaybe<Scalars['NonEmptyString']['input']>;
  userVerification?: InputMaybe<UserVerificationEnum>;
  authenticatorAttachment?: InputMaybe<AuthenticatorAttachmentEnum>;
  residentKeyRequirement?: InputMaybe<ResidentKeyRequirementEnum>;
  deviceTypeRestrictions?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
};

export type StagesAuthenticatorWebauthnDestroyResponse = VoidContainer | ValidationError | GenericError;

export type StagesCaptchaCreateResponse = CaptchaStage | ValidationError | GenericError;

/** CaptchaStage Serializer */
export type CaptchaStageRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
  /** Public key, acquired your captcha Provider. */
  publicKey: Scalars['NonEmptyString']['input'];
  /** Private key, acquired your captcha Provider. */
  privateKey: Scalars['NonEmptyString']['input'];
  jsUrl?: InputMaybe<Scalars['NonEmptyString']['input']>;
  apiUrl?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type StagesCaptchaUpdateResponse = CaptchaStage | ValidationError | GenericError;

export type StagesCaptchaPartialUpdateResponse = CaptchaStage | ValidationError | GenericError;

/** CaptchaStage Serializer */
export type PatchedCaptchaStageRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
  /** Public key, acquired your captcha Provider. */
  publicKey?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Private key, acquired your captcha Provider. */
  privateKey?: InputMaybe<Scalars['NonEmptyString']['input']>;
  jsUrl?: InputMaybe<Scalars['NonEmptyString']['input']>;
  apiUrl?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type StagesCaptchaDestroyResponse = VoidContainer | ValidationError | GenericError;

export type StagesConsentCreateResponse = ConsentStage | ValidationError | GenericError;

/** ConsentStage Serializer */
export type ConsentStageRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
  mode?: InputMaybe<ConsentStageModeEnum>;
  /** Offset after which consent expires. (Format: hours=1;minutes=2;seconds=3). */
  consentExpireIn?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type StagesConsentUpdateResponse = ConsentStage | ValidationError | GenericError;

export type StagesConsentPartialUpdateResponse = ConsentStage | ValidationError | GenericError;

/** ConsentStage Serializer */
export type PatchedConsentStageRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
  mode?: InputMaybe<ConsentStageModeEnum>;
  /** Offset after which consent expires. (Format: hours=1;minutes=2;seconds=3). */
  consentExpireIn?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type StagesConsentDestroyResponse = VoidContainer | ValidationError | GenericError;

export type StagesDenyCreateResponse = DenyStage | ValidationError | GenericError;

/** DenyStage Serializer */
export type DenyStageRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
  denyMessage?: InputMaybe<Scalars['String']['input']>;
};

export type StagesDenyUpdateResponse = DenyStage | ValidationError | GenericError;

export type StagesDenyPartialUpdateResponse = DenyStage | ValidationError | GenericError;

/** DenyStage Serializer */
export type PatchedDenyStageRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
  denyMessage?: InputMaybe<Scalars['String']['input']>;
};

export type StagesDenyDestroyResponse = VoidContainer | ValidationError | GenericError;

export type StagesDummyCreateResponse = DummyStage | ValidationError | GenericError;

/** DummyStage Serializer */
export type DummyStageRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
  throwError?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StagesDummyUpdateResponse = DummyStage | ValidationError | GenericError;

export type StagesDummyPartialUpdateResponse = DummyStage | ValidationError | GenericError;

/** DummyStage Serializer */
export type PatchedDummyStageRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
  throwError?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StagesDummyDestroyResponse = VoidContainer | ValidationError | GenericError;

export type StagesEmailCreateResponse = EmailStage | ValidationError | GenericError;

/** EmailStage Serializer */
export type EmailStageRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
  /** When enabled, global Email connection settings will be used and connection settings below will be ignored. */
  useGlobalSettings?: InputMaybe<Scalars['Boolean']['input']>;
  host?: InputMaybe<Scalars['NonEmptyString']['input']>;
  port?: InputMaybe<Scalars['Int']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  useTls?: InputMaybe<Scalars['Boolean']['input']>;
  useSsl?: InputMaybe<Scalars['Boolean']['input']>;
  timeout?: InputMaybe<Scalars['Int']['input']>;
  fromAddress?: InputMaybe<Scalars['EmailAddress']['input']>;
  /** Time in minutes the token sent is valid. */
  tokenExpiry?: InputMaybe<Scalars['Int']['input']>;
  subject?: InputMaybe<Scalars['NonEmptyString']['input']>;
  template?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Activate users upon completion of stage. */
  activateUserOnSuccess?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StagesEmailUpdateResponse = EmailStage | ValidationError | GenericError;

export type StagesEmailPartialUpdateResponse = EmailStage | ValidationError | GenericError;

/** EmailStage Serializer */
export type PatchedEmailStageRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
  /** When enabled, global Email connection settings will be used and connection settings below will be ignored. */
  useGlobalSettings?: InputMaybe<Scalars['Boolean']['input']>;
  host?: InputMaybe<Scalars['NonEmptyString']['input']>;
  port?: InputMaybe<Scalars['Int']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  useTls?: InputMaybe<Scalars['Boolean']['input']>;
  useSsl?: InputMaybe<Scalars['Boolean']['input']>;
  timeout?: InputMaybe<Scalars['Int']['input']>;
  fromAddress?: InputMaybe<Scalars['EmailAddress']['input']>;
  /** Time in minutes the token sent is valid. */
  tokenExpiry?: InputMaybe<Scalars['Int']['input']>;
  subject?: InputMaybe<Scalars['NonEmptyString']['input']>;
  template?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Activate users upon completion of stage. */
  activateUserOnSuccess?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StagesEmailDestroyResponse = VoidContainer | ValidationError | GenericError;

export type StagesIdentificationCreateResponse = IdentificationStage | ValidationError | GenericError;

/** IdentificationStage Serializer */
export type IdentificationStageRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
  /** Fields of the user object to match against. (Hold shift to select multiple options) */
  userFields?: InputMaybe<Array<InputMaybe<UserFieldsEnum>>>;
  /** When set, shows a password field, instead of showing the password field as seaprate step. */
  passwordStage?: InputMaybe<Scalars['UUID']['input']>;
  /** When enabled, user fields are matched regardless of their casing. */
  caseInsensitiveMatching?: InputMaybe<Scalars['Boolean']['input']>;
  /** When a valid username/email has been entered, and this option is enabled, the user's username and avatar will be shown. Otherwise, the text that the user entered will be shown */
  showMatchedUser?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optional enrollment flow, which is linked at the bottom of the page. */
  enrollmentFlow?: InputMaybe<Scalars['UUID']['input']>;
  /** Optional recovery flow, which is linked at the bottom of the page. */
  recoveryFlow?: InputMaybe<Scalars['UUID']['input']>;
  /** Optional passwordless flow, which is linked at the bottom of the page. */
  passwordlessFlow?: InputMaybe<Scalars['UUID']['input']>;
  /** Specify which sources should be shown. */
  sources?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  showSourceLabels?: InputMaybe<Scalars['Boolean']['input']>;
  /** When enabled, the stage will succeed and continue even when incorrect user info is entered. */
  pretendUserExists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StagesIdentificationUpdateResponse = IdentificationStage | ValidationError | GenericError;

export type StagesIdentificationPartialUpdateResponse = IdentificationStage | ValidationError | GenericError;

/** IdentificationStage Serializer */
export type PatchedIdentificationStageRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
  /** Fields of the user object to match against. (Hold shift to select multiple options) */
  userFields?: InputMaybe<Array<InputMaybe<UserFieldsEnum>>>;
  /** When set, shows a password field, instead of showing the password field as seaprate step. */
  passwordStage?: InputMaybe<Scalars['UUID']['input']>;
  /** When enabled, user fields are matched regardless of their casing. */
  caseInsensitiveMatching?: InputMaybe<Scalars['Boolean']['input']>;
  /** When a valid username/email has been entered, and this option is enabled, the user's username and avatar will be shown. Otherwise, the text that the user entered will be shown */
  showMatchedUser?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optional enrollment flow, which is linked at the bottom of the page. */
  enrollmentFlow?: InputMaybe<Scalars['UUID']['input']>;
  /** Optional recovery flow, which is linked at the bottom of the page. */
  recoveryFlow?: InputMaybe<Scalars['UUID']['input']>;
  /** Optional passwordless flow, which is linked at the bottom of the page. */
  passwordlessFlow?: InputMaybe<Scalars['UUID']['input']>;
  /** Specify which sources should be shown. */
  sources?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  showSourceLabels?: InputMaybe<Scalars['Boolean']['input']>;
  /** When enabled, the stage will succeed and continue even when incorrect user info is entered. */
  pretendUserExists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StagesIdentificationDestroyResponse = VoidContainer | ValidationError | GenericError;

export type StagesInvitationInvitationsCreateResponse = Invitation | ValidationError | GenericError;

/** Invitation Serializer */
export type InvitationRequestInput = {
  name: Scalars['MutationInputStagesInvitationInvitationsCreateInputName']['input'];
  expires?: InputMaybe<Scalars['DateTime']['input']>;
  fixedData?: InputMaybe<Scalars['JSON']['input']>;
  /** When enabled, the invitation will be deleted after usage. */
  singleUse?: InputMaybe<Scalars['Boolean']['input']>;
  /** When set, only the configured flow can use this invitation. */
  flow?: InputMaybe<Scalars['UUID']['input']>;
};

export type StagesInvitationInvitationsUpdateResponse = Invitation | ValidationError | GenericError;

export type StagesInvitationInvitationsPartialUpdateResponse = Invitation | ValidationError | GenericError;

/** Invitation Serializer */
export type PatchedInvitationRequestInput = {
  name?: InputMaybe<Scalars['MutationInputStagesInvitationInvitationsPartialUpdateInputName']['input']>;
  expires?: InputMaybe<Scalars['DateTime']['input']>;
  fixedData?: InputMaybe<Scalars['JSON']['input']>;
  /** When enabled, the invitation will be deleted after usage. */
  singleUse?: InputMaybe<Scalars['Boolean']['input']>;
  /** When set, only the configured flow can use this invitation. */
  flow?: InputMaybe<Scalars['UUID']['input']>;
};

export type StagesInvitationInvitationsDestroyResponse = VoidContainer | ValidationError | GenericError;

export type StagesInvitationStagesCreateResponse = InvitationStage | ValidationError | GenericError;

/** InvitationStage Serializer */
export type InvitationStageRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
  /** If this flag is set, this Stage will jump to the next Stage when no Invitation is given. By default this Stage will cancel the Flow when no invitation is given. */
  continueFlowWithoutInvitation?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StagesInvitationStagesUpdateResponse = InvitationStage | ValidationError | GenericError;

export type StagesInvitationStagesPartialUpdateResponse = InvitationStage | ValidationError | GenericError;

/** InvitationStage Serializer */
export type PatchedInvitationStageRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
  /** If this flag is set, this Stage will jump to the next Stage when no Invitation is given. By default this Stage will cancel the Flow when no invitation is given. */
  continueFlowWithoutInvitation?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StagesInvitationStagesDestroyResponse = VoidContainer | ValidationError | GenericError;

export type StagesPasswordCreateResponse = PasswordStage | ValidationError | GenericError;

/** PasswordStage Serializer */
export type PasswordStageRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
  /** Selection of backends to test the password against. */
  backends: Array<InputMaybe<BackendsEnum>>;
  /** Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage. */
  configureFlow?: InputMaybe<Scalars['UUID']['input']>;
  /** How many attempts a user has before the flow is canceled. To lock the user out, use a reputation policy and a user_write stage. */
  failedAttemptsBeforeCancel?: InputMaybe<Scalars['Int']['input']>;
};

export type StagesPasswordUpdateResponse = PasswordStage | ValidationError | GenericError;

export type StagesPasswordPartialUpdateResponse = PasswordStage | ValidationError | GenericError;

/** PasswordStage Serializer */
export type PatchedPasswordStageRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
  /** Selection of backends to test the password against. */
  backends?: InputMaybe<Array<InputMaybe<BackendsEnum>>>;
  /** Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage. */
  configureFlow?: InputMaybe<Scalars['UUID']['input']>;
  /** How many attempts a user has before the flow is canceled. To lock the user out, use a reputation policy and a user_write stage. */
  failedAttemptsBeforeCancel?: InputMaybe<Scalars['Int']['input']>;
};

export type StagesPasswordDestroyResponse = VoidContainer | ValidationError | GenericError;

export type StagesPromptPromptsCreateResponse = Prompt | ValidationError | GenericError;

/** Prompt Serializer */
export type PromptRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  /** Name of the form field, also used to store the value */
  fieldKey: Scalars['NonEmptyString']['input'];
  label: Scalars['NonEmptyString']['input'];
  type: PromptTypeEnum;
  required?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optionally provide a short hint that describes the expected input value. When creating a fixed choice field, enable interpreting as expression and return a list to return multiple choices. */
  placeholder?: InputMaybe<Scalars['String']['input']>;
  /** Optionally pre-fill the input with an initial value. When creating a fixed choice field, enable interpreting as expression and return a list to return multiple default choices. */
  initialValue?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  promptstageSet?: InputMaybe<Array<InputMaybe<StageRequestInput>>>;
  subText?: InputMaybe<Scalars['String']['input']>;
  placeholderExpression?: InputMaybe<Scalars['Boolean']['input']>;
  initialValueExpression?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Stage Serializer */
export type StageRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
};

export type StagesPromptPromptsUpdateResponse = Prompt | ValidationError | GenericError;

export type StagesPromptPromptsPartialUpdateResponse = Prompt | ValidationError | GenericError;

/** Prompt Serializer */
export type PatchedPromptRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Name of the form field, also used to store the value */
  fieldKey?: InputMaybe<Scalars['NonEmptyString']['input']>;
  label?: InputMaybe<Scalars['NonEmptyString']['input']>;
  type?: InputMaybe<PromptTypeEnum>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optionally provide a short hint that describes the expected input value. When creating a fixed choice field, enable interpreting as expression and return a list to return multiple choices. */
  placeholder?: InputMaybe<Scalars['String']['input']>;
  /** Optionally pre-fill the input with an initial value. When creating a fixed choice field, enable interpreting as expression and return a list to return multiple default choices. */
  initialValue?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  promptstageSet?: InputMaybe<Array<InputMaybe<StageRequestInput>>>;
  subText?: InputMaybe<Scalars['String']['input']>;
  placeholderExpression?: InputMaybe<Scalars['Boolean']['input']>;
  initialValueExpression?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StagesPromptPromptsDestroyResponse = VoidContainer | ValidationError | GenericError;

export type StagesPromptPromptsPreviewCreateResponse = PromptChallenge | ValidationError | GenericError;

export type StagesPromptStagesCreateResponse = PromptStage | ValidationError | GenericError;

/** PromptStage Serializer */
export type PromptStageRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
  fields: Array<InputMaybe<Scalars['UUID']['input']>>;
  validationPolicies?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
};

export type StagesPromptStagesUpdateResponse = PromptStage | ValidationError | GenericError;

export type StagesPromptStagesPartialUpdateResponse = PromptStage | ValidationError | GenericError;

/** PromptStage Serializer */
export type PatchedPromptStageRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  validationPolicies?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
};

export type StagesPromptStagesDestroyResponse = VoidContainer | ValidationError | GenericError;

export type StagesSourceCreateResponse = SourceStage | ValidationError | GenericError;

/** SourceStage Serializer */
export type SourceStageRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
  source: Scalars['UUID']['input'];
  /** Amount of time a user can take to return from the source to continue the flow (Format: hours=-1;minutes=-2;seconds=-3) */
  resumeTimeout?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type StagesSourceUpdateResponse = SourceStage | ValidationError | GenericError;

export type StagesSourcePartialUpdateResponse = SourceStage | ValidationError | GenericError;

/** SourceStage Serializer */
export type PatchedSourceStageRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
  source?: InputMaybe<Scalars['UUID']['input']>;
  /** Amount of time a user can take to return from the source to continue the flow (Format: hours=-1;minutes=-2;seconds=-3) */
  resumeTimeout?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type StagesSourceDestroyResponse = VoidContainer | ValidationError | GenericError;

export type StagesUserDeleteCreateResponse = UserDeleteStage | ValidationError | GenericError;

/** UserDeleteStage Serializer */
export type UserDeleteStageRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
};

export type StagesUserDeleteUpdateResponse = UserDeleteStage | ValidationError | GenericError;

export type StagesUserDeletePartialUpdateResponse = UserDeleteStage | ValidationError | GenericError;

/** UserDeleteStage Serializer */
export type PatchedUserDeleteStageRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
};

export type StagesUserDeleteDestroyResponse = VoidContainer | ValidationError | GenericError;

export type StagesUserLoginCreateResponse = UserLoginStage | ValidationError | GenericError;

/** UserLoginStage Serializer */
export type UserLoginStageRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
  /** Determines how long a session lasts. Default of 0 means that the sessions lasts until the browser is closed. (Format: hours=-1;minutes=-2;seconds=-3) */
  sessionDuration?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Terminate all other sessions of the user logging in. */
  terminateOtherSessions?: InputMaybe<Scalars['Boolean']['input']>;
  /** Offset the session will be extended by when the user picks the remember me option. Default of 0 means that the remember me option will not be shown. (Format: hours=-1;minutes=-2;seconds=-3) */
  rememberMeOffset?: InputMaybe<Scalars['NonEmptyString']['input']>;
  networkBinding?: InputMaybe<NetworkBindingEnum>;
  geoipBinding?: InputMaybe<GeoipBindingEnum>;
};

export type StagesUserLoginUpdateResponse = UserLoginStage | ValidationError | GenericError;

export type StagesUserLoginPartialUpdateResponse = UserLoginStage | ValidationError | GenericError;

/** UserLoginStage Serializer */
export type PatchedUserLoginStageRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
  /** Determines how long a session lasts. Default of 0 means that the sessions lasts until the browser is closed. (Format: hours=-1;minutes=-2;seconds=-3) */
  sessionDuration?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Terminate all other sessions of the user logging in. */
  terminateOtherSessions?: InputMaybe<Scalars['Boolean']['input']>;
  /** Offset the session will be extended by when the user picks the remember me option. Default of 0 means that the remember me option will not be shown. (Format: hours=-1;minutes=-2;seconds=-3) */
  rememberMeOffset?: InputMaybe<Scalars['NonEmptyString']['input']>;
  networkBinding?: InputMaybe<NetworkBindingEnum>;
  geoipBinding?: InputMaybe<GeoipBindingEnum>;
};

export type StagesUserLoginDestroyResponse = VoidContainer | ValidationError | GenericError;

export type StagesUserLogoutCreateResponse = UserLogoutStage | ValidationError | GenericError;

/** UserLogoutStage Serializer */
export type UserLogoutStageRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
};

export type StagesUserLogoutUpdateResponse = UserLogoutStage | ValidationError | GenericError;

export type StagesUserLogoutPartialUpdateResponse = UserLogoutStage | ValidationError | GenericError;

/** UserLogoutStage Serializer */
export type PatchedUserLogoutStageRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
};

export type StagesUserLogoutDestroyResponse = VoidContainer | ValidationError | GenericError;

export type StagesUserWriteCreateResponse = UserWriteStage | ValidationError | GenericError;

/** UserWriteStage Serializer */
export type UserWriteStageRequestInput = {
  name: Scalars['NonEmptyString']['input'];
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
  userCreationMode?: InputMaybe<UserCreationModeEnum>;
  /** When set, newly created users are inactive and cannot login. */
  createUsersAsInactive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optionally add newly created users to this group. */
  createUsersGroup?: InputMaybe<Scalars['UUID']['input']>;
  userType?: InputMaybe<UserTypeEnum>;
  userPathTemplate?: InputMaybe<Scalars['String']['input']>;
};

export type StagesUserWriteUpdateResponse = UserWriteStage | ValidationError | GenericError;

export type StagesUserWritePartialUpdateResponse = UserWriteStage | ValidationError | GenericError;

/** UserWriteStage Serializer */
export type PatchedUserWriteStageRequestInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flowSet?: InputMaybe<Array<InputMaybe<FlowSetRequestInput>>>;
  userCreationMode?: InputMaybe<UserCreationModeEnum>;
  /** When set, newly created users are inactive and cannot login. */
  createUsersAsInactive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optionally add newly created users to this group. */
  createUsersGroup?: InputMaybe<Scalars['UUID']['input']>;
  userType?: InputMaybe<UserTypeEnum>;
  userPathTemplate?: InputMaybe<Scalars['String']['input']>;
};

export type StagesUserWriteDestroyResponse = VoidContainer | ValidationError | GenericError;

export type HttpMethod =
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH';

  export type QuerySdk = {
      /** Custom list method that checks Policy based access instead of guardian **/
  applications: InContextSdkMethod<Query['applications'], QueryapplicationsArgs, MeshContext>,
  /** Application Viewset **/
  application: InContextSdkMethod<Query['application'], QueryapplicationArgs, MeshContext>,
  /** Check access to a single application by slug **/
  coreApplicationsCheckAccessRetrieve: InContextSdkMethod<Query['coreApplicationsCheckAccessRetrieve'], QuerycoreApplicationsCheckAccessRetrieveArgs, MeshContext>,
  /** Metrics for application logins **/
  applicationMetrics: InContextSdkMethod<Query['applicationMetrics'], QueryapplicationMetricsArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  coreApplicationsUsedByList: InContextSdkMethod<Query['coreApplicationsUsedByList'], QuerycoreApplicationsUsedByListArgs, MeshContext>,
  /** FlowStageBinding Viewset **/
  flowsBindingsList: InContextSdkMethod<Query['flowsBindingsList'], QueryflowsBindingsListArgs, MeshContext>,
  /** FlowStageBinding Viewset **/
  flowsBindingsRetrieve: InContextSdkMethod<Query['flowsBindingsRetrieve'], QueryflowsBindingsRetrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  flowsBindingsUsedByList: InContextSdkMethod<Query['flowsBindingsUsedByList'], QueryflowsBindingsUsedByListArgs, MeshContext>,
  /** Get the next pending challenge from the currently active flow. **/
  flowsExecutorGet: InContextSdkMethod<Query['flowsExecutorGet'], QueryflowsExecutorGetArgs, MeshContext>,
  /** Get current flow state and record it **/
  flowsInspectorGet: InContextSdkMethod<Query['flowsInspectorGet'], QueryflowsInspectorGetArgs, MeshContext>,
  /** Flow Viewset **/
  flowsInstancesList: InContextSdkMethod<Query['flowsInstancesList'], QueryflowsInstancesListArgs, MeshContext>,
  /** Flow Viewset **/
  flowsInstancesRetrieve: InContextSdkMethod<Query['flowsInstancesRetrieve'], QueryflowsInstancesRetrieveArgs, MeshContext>,
  /** Return diagram for flow with slug `slug`, in the format used by flowchart.js **/
  flowsInstancesDiagramRetrieve: InContextSdkMethod<Query['flowsInstancesDiagramRetrieve'], QueryflowsInstancesDiagramRetrieveArgs, MeshContext>,
  /** Execute flow for current user **/
  flowsInstancesExecuteRetrieve: InContextSdkMethod<Query['flowsInstancesExecuteRetrieve'], QueryflowsInstancesExecuteRetrieveArgs, MeshContext>,
  /** Export flow to .yaml file **/
  flowsInstancesExportRetrieve: InContextSdkMethod<Query['flowsInstancesExportRetrieve'], QueryflowsInstancesExportRetrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  flowsInstancesUsedByList: InContextSdkMethod<Query['flowsInstancesUsedByList'], QueryflowsInstancesUsedByListArgs, MeshContext>,
  /** Info about cached flows **/
  flowsInstancesCacheInfoRetrieve: InContextSdkMethod<Query['flowsInstancesCacheInfoRetrieve'], {}, MeshContext>,
  /** Provider Viewset **/
  providers: InContextSdkMethod<Query['providers'], QueryprovidersArgs, MeshContext>,
  /** Provider Viewset **/
  provider: InContextSdkMethod<Query['provider'], QueryproviderArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  providersAllUsedByList: InContextSdkMethod<Query['providersAllUsedByList'], QueryprovidersAllUsedByListArgs, MeshContext>,
  /** Get all creatable provider types **/
  providersAllTypesList: InContextSdkMethod<Query['providersAllTypesList'], {}, MeshContext>
  };

  export type MutationSdk = {
      /** Application Viewset **/
  coreApplicationsCreate: InContextSdkMethod<Mutation['coreApplicationsCreate'], MutationcoreApplicationsCreateArgs, MeshContext>,
  /** Application Viewset **/
  coreApplicationsUpdate: InContextSdkMethod<Mutation['coreApplicationsUpdate'], MutationcoreApplicationsUpdateArgs, MeshContext>,
  /** Application Viewset **/
  coreApplicationsPartialUpdate: InContextSdkMethod<Mutation['coreApplicationsPartialUpdate'], MutationcoreApplicationsPartialUpdateArgs, MeshContext>,
  /** Application Viewset **/
  coreApplicationsDestroy: InContextSdkMethod<Mutation['coreApplicationsDestroy'], MutationcoreApplicationsDestroyArgs, MeshContext>,
  /** Set application icon **/
  coreApplicationsSetIconCreate: InContextSdkMethod<Mutation['coreApplicationsSetIconCreate'], MutationcoreApplicationsSetIconCreateArgs, MeshContext>,
  /** Set application icon (as URL) **/
  coreApplicationsSetIconUrlCreate: InContextSdkMethod<Mutation['coreApplicationsSetIconUrlCreate'], MutationcoreApplicationsSetIconUrlCreateArgs, MeshContext>,
  /** FlowStageBinding Viewset **/
  flowsBindingsCreate: InContextSdkMethod<Mutation['flowsBindingsCreate'], MutationflowsBindingsCreateArgs, MeshContext>,
  /** FlowStageBinding Viewset **/
  flowsBindingsUpdate: InContextSdkMethod<Mutation['flowsBindingsUpdate'], MutationflowsBindingsUpdateArgs, MeshContext>,
  /** FlowStageBinding Viewset **/
  flowsBindingsPartialUpdate: InContextSdkMethod<Mutation['flowsBindingsPartialUpdate'], MutationflowsBindingsPartialUpdateArgs, MeshContext>,
  /** FlowStageBinding Viewset **/
  flowsBindingsDestroy: InContextSdkMethod<Mutation['flowsBindingsDestroy'], MutationflowsBindingsDestroyArgs, MeshContext>,
  /** Solve the previously retrieved challenge and advanced to the next stage. **/
  flowsExecutorSolve: InContextSdkMethod<Mutation['flowsExecutorSolve'], MutationflowsExecutorSolveArgs, MeshContext>,
  /** Flow Viewset **/
  flowsInstancesCreate: InContextSdkMethod<Mutation['flowsInstancesCreate'], MutationflowsInstancesCreateArgs, MeshContext>,
  /** Flow Viewset **/
  flowsInstancesUpdate: InContextSdkMethod<Mutation['flowsInstancesUpdate'], MutationflowsInstancesUpdateArgs, MeshContext>,
  /** Flow Viewset **/
  flowsInstancesPartialUpdate: InContextSdkMethod<Mutation['flowsInstancesPartialUpdate'], MutationflowsInstancesPartialUpdateArgs, MeshContext>,
  /** Flow Viewset **/
  flowsInstancesDestroy: InContextSdkMethod<Mutation['flowsInstancesDestroy'], MutationflowsInstancesDestroyArgs, MeshContext>,
  /** Set Flow background **/
  flowsInstancesSetBackgroundCreate: InContextSdkMethod<Mutation['flowsInstancesSetBackgroundCreate'], MutationflowsInstancesSetBackgroundCreateArgs, MeshContext>,
  /** Set Flow background (as URL) **/
  flowsInstancesSetBackgroundUrlCreate: InContextSdkMethod<Mutation['flowsInstancesSetBackgroundUrlCreate'], MutationflowsInstancesSetBackgroundUrlCreateArgs, MeshContext>,
  /** Clear flow cache **/
  flowsInstancesCacheClearCreate: InContextSdkMethod<Mutation['flowsInstancesCacheClearCreate'], {}, MeshContext>,
  /** Import flow from .yaml file **/
  flowsInstancesImportCreate: InContextSdkMethod<Mutation['flowsInstancesImportCreate'], MutationflowsInstancesImportCreateArgs, MeshContext>,
  /** Provider Viewset **/
  providersAllDestroy: InContextSdkMethod<Mutation['providersAllDestroy'], MutationprovidersAllDestroyArgs, MeshContext>
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["Authentik"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
