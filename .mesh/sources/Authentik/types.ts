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
  query_authenticators_admin_duo_list_oneOf_0_results_items_name: { input: any; output: any; }
  /** The human-readable name of this device. */
  query_authenticators_admin_sms_list_oneOf_0_results_items_name: { input: any; output: any; }
  /** The human-readable name of this device. */
  query_authenticators_admin_static_list_oneOf_0_results_items_name: { input: any; output: any; }
  query_authenticators_admin_static_list_oneOf_0_results_items_token_set_items_token: { input: any; output: any; }
  /** The human-readable name of this device. */
  query_authenticators_admin_totp_list_oneOf_0_results_items_name: { input: any; output: any; }
  query_authenticators_admin_webauthn_list_oneOf_0_results_items_name: { input: any; output: any; }
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  UUID: { input: string; output: string; }
  query_core_applications_list_oneOf_0_results_items_slug: { input: string; output: string; }
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: { input: URL | string; output: URL | string; }
  query_core_groups_list_oneOf_0_results_items_name: { input: any; output: any; }
  query_core_groups_list_oneOf_0_results_items_users_obj_items_username: { input: string; output: string; }
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: { input: string; output: string; }
  query_core_groups_list_oneOf_0_results_items_roles_obj_items_name: { input: any; output: any; }
  query_core_tokens_list_oneOf_0_results_items_identifier: { input: string; output: string; }
  query_core_tokens_list_oneOf_0_results_items_user_obj_username: { input: any; output: any; }
  query_core_tokens_list_oneOf_0_results_items_user_obj_groups_obj_items_name: { input: any; output: any; }
  /** Represents empty values */
  Void: { input: void; output: void; }
  query_core_users_me_retrieve_oneOf_0_user_username: { input: string; output: string; }
  query_flows_bindings_list_oneOf_0_results_items_stage_obj_flow_set_items_slug: { input: string; output: string; }
  query_flows_instances_list_oneOf_0_results_items_slug: { input: string; output: string; }
  /** The `File` scalar type represents a file upload. */
  File: { input: File; output: File; }
  query_oauth2_access_tokens_list_oneOf_0_results_items_provider_client_id: { input: any; output: any; }
  query_oauth2_access_tokens_list_oneOf_0_results_items_provider_client_secret: { input: any; output: any; }
  query_outposts_proxy_list_oneOf_0_results_items_client_id: { input: any; output: any; }
  query_outposts_proxy_list_oneOf_0_results_items_client_secret: { input: any; output: any; }
  /** Integers that will have a value of 0 or more. */
  NonNegativeInt: { input: number; output: number; }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: { input: bigint; output: bigint; }
  query_rbac_permissions_list_oneOf_0_results_items_name: { input: any; output: any; }
  query_rbac_permissions_list_oneOf_0_results_items_codename: { input: any; output: any; }
  query_rbac_permissions_assigned_by_users_list_oneOf_0_results_items_username: { input: string; output: string; }
  query_sources_all_list_oneOf_0_results_items_slug: { input: string; output: string; }
  query_sources_ldap_list_oneOf_0_results_items_slug: { input: string; output: string; }
  query_sources_oauth_list_oneOf_0_results_items_slug: { input: string; output: string; }
  /** URL used to request the initial token. This URL is only required for OAuth 1. */
  query_sources_oauth_list_oneOf_0_results_items_request_token_url: { input: any; output: any; }
  /** URL the user is redirect to to conest the flow. */
  query_sources_oauth_list_oneOf_0_results_items_authorization_url: { input: any; output: any; }
  /** URL used by authentik to retrieve tokens. */
  query_sources_oauth_list_oneOf_0_results_items_access_token_url: { input: any; output: any; }
  /** URL used by authentik to get user information. */
  query_sources_oauth_list_oneOf_0_results_items_profile_url: { input: any; output: any; }
  query_sources_plex_list_oneOf_0_results_items_slug: { input: string; output: string; }
  query_sources_saml_list_oneOf_0_results_items_slug: { input: string; output: string; }
  query_sources_scim_list_oneOf_0_results_items_slug: { input: string; output: string; }
  query_sources_user_connections_oauth_list_oneOf_0_results_items_identifier: { input: any; output: any; }
  query_stages_invitation_invitations_list_oneOf_0_results_items_name: { input: string; output: string; }
  /** A string that cannot be passed as an empty value */
  NonEmptyString: { input: string; output: string; }
  /** The human-readable name of this device. */
  mutationInput_authenticators_admin_duo_create_input_name: { input: any; output: any; }
  /** The human-readable name of this device. */
  mutationInput_authenticators_admin_duo_partial_update_input_name: { input: any; output: any; }
  /** The human-readable name of this device. */
  mutationInput_authenticators_admin_sms_create_input_name: { input: any; output: any; }
  /** The human-readable name of this device. */
  mutationInput_authenticators_admin_sms_partial_update_input_name: { input: any; output: any; }
  /** The human-readable name of this device. */
  mutationInput_authenticators_admin_static_create_input_name: { input: any; output: any; }
  /** The human-readable name of this device. */
  mutationInput_authenticators_admin_static_partial_update_input_name: { input: any; output: any; }
  /** The human-readable name of this device. */
  mutationInput_authenticators_admin_totp_create_input_name: { input: any; output: any; }
  /** The human-readable name of this device. */
  mutationInput_authenticators_admin_totp_partial_update_input_name: { input: any; output: any; }
  mutationInput_authenticators_admin_webauthn_create_input_name: { input: any; output: any; }
  mutationInput_authenticators_admin_webauthn_partial_update_input_name: { input: any; output: any; }
  mutationInput_core_applications_create_input_slug: { input: string; output: string; }
  mutationInput_core_applications_partial_update_input_slug: { input: string; output: string; }
  mutationInput_core_groups_create_input_name: { input: any; output: any; }
  mutationInput_core_groups_partial_update_input_name: { input: any; output: any; }
  mutationInput_core_tokens_create_input_identifier: { input: string; output: string; }
  mutationInput_core_tokens_partial_update_input_identifier: { input: string; output: string; }
  mutationInput_core_transactional_applications_update_input_provider_oneOf_1_client_id: { input: any; output: any; }
  mutationInput_core_transactional_applications_update_input_provider_oneOf_1_client_secret: { input: any; output: any; }
  mutationInput_core_users_create_input_username: { input: any; output: any; }
  mutationInput_core_users_partial_update_input_username: { input: any; output: any; }
  mutationInput_flows_instances_create_input_slug: { input: string; output: string; }
  mutationInput_flows_instances_partial_update_input_slug: { input: string; output: string; }
  mutationInput_providers_oauth2_partial_update_input_client_id: { input: any; output: any; }
  mutationInput_providers_oauth2_partial_update_input_client_secret: { input: any; output: any; }
  mutationInput_rbac_roles_create_input_name: { input: any; output: any; }
  mutationInput_rbac_roles_partial_update_input_name: { input: any; output: any; }
  mutationInput_sources_ldap_create_input_slug: { input: string; output: string; }
  mutationInput_sources_ldap_partial_update_input_slug: { input: string; output: string; }
  mutationInput_sources_oauth_create_input_slug: { input: string; output: string; }
  /** URL used to request the initial token. This URL is only required for OAuth 1. */
  mutationInput_sources_oauth_create_input_request_token_url: { input: any; output: any; }
  /** URL the user is redirect to to conest the flow. */
  mutationInput_sources_oauth_create_input_authorization_url: { input: any; output: any; }
  /** URL used by authentik to retrieve tokens. */
  mutationInput_sources_oauth_create_input_access_token_url: { input: any; output: any; }
  /** URL used by authentik to get user information. */
  mutationInput_sources_oauth_create_input_profile_url: { input: any; output: any; }
  mutationInput_sources_oauth_partial_update_input_slug: { input: string; output: string; }
  /** URL used to request the initial token. This URL is only required for OAuth 1. */
  mutationInput_sources_oauth_partial_update_input_request_token_url: { input: any; output: any; }
  /** URL the user is redirect to to conest the flow. */
  mutationInput_sources_oauth_partial_update_input_authorization_url: { input: any; output: any; }
  /** URL used by authentik to retrieve tokens. */
  mutationInput_sources_oauth_partial_update_input_access_token_url: { input: any; output: any; }
  /** URL used by authentik to get user information. */
  mutationInput_sources_oauth_partial_update_input_profile_url: { input: any; output: any; }
  mutationInput_sources_plex_create_input_slug: { input: string; output: string; }
  mutationInput_sources_plex_partial_update_input_slug: { input: string; output: string; }
  mutationInput_sources_saml_create_input_slug: { input: string; output: string; }
  mutationInput_sources_saml_partial_update_input_slug: { input: string; output: string; }
  mutationInput_sources_scim_create_input_slug: { input: string; output: string; }
  mutationInput_sources_scim_partial_update_input_slug: { input: string; output: string; }
  mutationInput_sources_user_connections_oauth_create_input_identifier: { input: any; output: any; }
  mutationInput_sources_user_connections_oauth_partial_update_input_identifier: { input: any; output: any; }
  mutationInput_stages_authenticator_duo_create_input_flow_set_items_slug: { input: string; output: string; }
  mutationInput_stages_invitation_invitations_create_input_name: { input: string; output: string; }
  mutationInput_stages_invitation_invitations_partial_update_input_name: { input: string; output: string; }
  ObjMap: { input: any; output: any; }
};

export type Query = {
  /** Read-only view list all installed apps */
  admin_apps_list?: Maybe<Array<Maybe<admin_apps_list_response>>>;
  /** Login Metrics per 1h */
  admin_metrics_retrieve?: Maybe<admin_metrics_retrieve_response>;
  /** Read-only view list all installed models */
  admin_models_list?: Maybe<Array<Maybe<admin_models_list_response>>>;
  /** Settings view */
  admin_settings_retrieve?: Maybe<admin_settings_retrieve_response>;
  /** Get system information. */
  admin_system_retrieve?: Maybe<admin_system_retrieve_response>;
  /** Get running and latest version. */
  admin_version_retrieve?: Maybe<admin_version_retrieve_response>;
  /** Get currently connected worker count. */
  admin_workers_retrieve?: Maybe<admin_workers_retrieve_response>;
  /** Get all devices for current user */
  authenticators_admin_all_list?: Maybe<Array<Maybe<authenticators_admin_all_list_response>>>;
  /** Viewset for Duo authenticator devices (for admins) */
  authenticators_admin_duo_list?: Maybe<authenticators_admin_duo_list_response>;
  /** Viewset for Duo authenticator devices (for admins) */
  authenticators_admin_duo_retrieve?: Maybe<authenticators_admin_duo_retrieve_response>;
  /** Viewset for sms authenticator devices (for admins) */
  authenticators_admin_sms_list?: Maybe<authenticators_admin_sms_list_response>;
  /** Viewset for sms authenticator devices (for admins) */
  authenticators_admin_sms_retrieve?: Maybe<authenticators_admin_sms_retrieve_response>;
  /** Viewset for static authenticator devices (for admins) */
  authenticators_admin_static_list?: Maybe<authenticators_admin_static_list_response>;
  /** Viewset for static authenticator devices (for admins) */
  authenticators_admin_static_retrieve?: Maybe<authenticators_admin_static_retrieve_response>;
  /** Viewset for totp authenticator devices (for admins) */
  authenticators_admin_totp_list?: Maybe<authenticators_admin_totp_list_response>;
  /** Viewset for totp authenticator devices (for admins) */
  authenticators_admin_totp_retrieve?: Maybe<authenticators_admin_totp_retrieve_response>;
  /** Viewset for WebAuthn authenticator devices (for admins) */
  authenticators_admin_webauthn_list?: Maybe<authenticators_admin_webauthn_list_response>;
  /** Viewset for WebAuthn authenticator devices (for admins) */
  authenticators_admin_webauthn_retrieve?: Maybe<authenticators_admin_webauthn_retrieve_response>;
  /** Get all devices for current user */
  authenticators_all_list?: Maybe<Array<Maybe<authenticators_all_list_response>>>;
  /** Viewset for Duo authenticator devices */
  authenticators_duo_list?: Maybe<authenticators_duo_list_response>;
  /** Viewset for Duo authenticator devices */
  authenticators_duo_retrieve?: Maybe<authenticators_duo_retrieve_response>;
  /** Get a list of all objects that use this object */
  authenticators_duo_used_by_list?: Maybe<Array<Maybe<authenticators_duo_used_by_list_response>>>;
  /** Viewset for sms authenticator devices */
  authenticators_sms_list?: Maybe<authenticators_sms_list_response>;
  /** Viewset for sms authenticator devices */
  authenticators_sms_retrieve?: Maybe<authenticators_sms_retrieve_response>;
  /** Get a list of all objects that use this object */
  authenticators_sms_used_by_list?: Maybe<Array<Maybe<authenticators_sms_used_by_list_response>>>;
  /** Viewset for static authenticator devices */
  authenticators_static_list?: Maybe<authenticators_static_list_response>;
  /** Viewset for static authenticator devices */
  authenticators_static_retrieve?: Maybe<authenticators_static_retrieve_response>;
  /** Get a list of all objects that use this object */
  authenticators_static_used_by_list?: Maybe<Array<Maybe<authenticators_static_used_by_list_response>>>;
  /** Viewset for totp authenticator devices */
  authenticators_totp_list?: Maybe<authenticators_totp_list_response>;
  /** Viewset for totp authenticator devices */
  authenticators_totp_retrieve?: Maybe<authenticators_totp_retrieve_response>;
  /** Get a list of all objects that use this object */
  authenticators_totp_used_by_list?: Maybe<Array<Maybe<authenticators_totp_used_by_list_response>>>;
  /** Viewset for WebAuthn authenticator devices */
  authenticators_webauthn_list?: Maybe<authenticators_webauthn_list_response>;
  /** Viewset for WebAuthn authenticator devices */
  authenticators_webauthn_retrieve?: Maybe<authenticators_webauthn_retrieve_response>;
  /** Get a list of all objects that use this object */
  authenticators_webauthn_used_by_list?: Maybe<Array<Maybe<authenticators_webauthn_used_by_list_response>>>;
  /** Custom list method that checks Policy based access instead of guardian */
  core_applications_list?: Maybe<core_applications_list_response>;
  /** Application Viewset */
  core_applications_retrieve?: Maybe<core_applications_retrieve_response>;
  /** Check access to a single application by slug */
  core_applications_check_access_retrieve?: Maybe<core_applications_check_access_retrieve_response>;
  /** Metrics for application logins */
  core_applications_metrics_list?: Maybe<Array<Maybe<core_applications_metrics_list_response>>>;
  /** Get a list of all objects that use this object */
  core_applications_used_by_list?: Maybe<Array<Maybe<core_applications_used_by_list_response>>>;
  /** AuthenticatedSession Viewset */
  core_authenticated_sessions_list?: Maybe<core_authenticated_sessions_list_response>;
  /** AuthenticatedSession Viewset */
  core_authenticated_sessions_retrieve?: Maybe<core_authenticated_sessions_retrieve_response>;
  /** Get a list of all objects that use this object */
  core_authenticated_sessions_used_by_list?: Maybe<Array<Maybe<core_authenticated_sessions_used_by_list_response>>>;
  /** Brand Viewset */
  core_brands_list?: Maybe<core_brands_list_response>;
  /** Brand Viewset */
  core_brands_retrieve?: Maybe<core_brands_retrieve_response>;
  /** Get a list of all objects that use this object */
  core_brands_used_by_list?: Maybe<Array<Maybe<core_brands_used_by_list_response>>>;
  /** Get current brand */
  core_brands_current_retrieve?: Maybe<core_brands_current_retrieve_response>;
  /** Group Viewset */
  core_groups_list?: Maybe<core_groups_list_response>;
  /** Group Viewset */
  core_groups_retrieve?: Maybe<core_groups_retrieve_response>;
  /** Get a list of all objects that use this object */
  core_groups_used_by_list?: Maybe<Array<Maybe<core_groups_used_by_list_response>>>;
  /** Token Viewset */
  core_tokens_list?: Maybe<core_tokens_list_response>;
  /** Token Viewset */
  core_tokens_retrieve?: Maybe<core_tokens_retrieve_response>;
  /** Get a list of all objects that use this object */
  core_tokens_used_by_list?: Maybe<Array<Maybe<core_tokens_used_by_list_response>>>;
  /** Return token key and log access */
  core_tokens_view_key_retrieve?: Maybe<core_tokens_view_key_retrieve_response>;
  /** UserConsent Viewset */
  core_user_consent_list?: Maybe<core_user_consent_list_response>;
  /** UserConsent Viewset */
  core_user_consent_retrieve?: Maybe<core_user_consent_retrieve_response>;
  /** Get a list of all objects that use this object */
  core_user_consent_used_by_list?: Maybe<Array<Maybe<core_user_consent_used_by_list_response>>>;
  /** User Viewset */
  core_users_list?: Maybe<core_users_list_response>;
  /** User Viewset */
  core_users_retrieve?: Maybe<core_users_retrieve_response>;
  /** User metrics per 1h */
  core_users_metrics_retrieve?: Maybe<core_users_metrics_retrieve_response>;
  /** Get a list of all objects that use this object */
  core_users_used_by_list?: Maybe<Array<Maybe<core_users_used_by_list_response>>>;
  /** End Impersonation a user */
  core_users_impersonate_end_retrieve?: Maybe<core_users_impersonate_end_retrieve_response>;
  /** Get information about current user */
  core_users_me_retrieve?: Maybe<core_users_me_retrieve_response>;
  /** Get all user paths */
  core_users_paths_retrieve?: Maybe<core_users_paths_retrieve_response>;
  /** CertificateKeyPair Viewset */
  crypto_certificatekeypairs_list?: Maybe<crypto_certificatekeypairs_list_response>;
  /** CertificateKeyPair Viewset */
  crypto_certificatekeypairs_retrieve?: Maybe<crypto_certificatekeypairs_retrieve_response>;
  /** Get a list of all objects that use this object */
  crypto_certificatekeypairs_used_by_list?: Maybe<Array<Maybe<crypto_certificatekeypairs_used_by_list_response>>>;
  /** Return certificate-key pairs certificate and log access */
  crypto_certificatekeypairs_view_certificate_retrieve?: Maybe<crypto_certificatekeypairs_view_certificate_retrieve_response>;
  /** Return certificate-key pairs private key and log access */
  crypto_certificatekeypairs_view_private_key_retrieve?: Maybe<crypto_certificatekeypairs_view_private_key_retrieve_response>;
  /** License Viewset */
  enterprise_license_list?: Maybe<enterprise_license_list_response>;
  /** License Viewset */
  enterprise_license_retrieve?: Maybe<enterprise_license_retrieve_response>;
  /** Get a list of all objects that use this object */
  enterprise_license_used_by_list?: Maybe<Array<Maybe<enterprise_license_used_by_list_response>>>;
  /** Forecast how many users will be required in a year */
  enterprise_license_forecast_retrieve?: Maybe<enterprise_license_forecast_retrieve_response>;
  /** Get install_id */
  enterprise_license_get_install_id_retrieve?: Maybe<enterprise_license_get_install_id_retrieve_response>;
  /** Get the total license status */
  enterprise_license_summary_retrieve?: Maybe<enterprise_license_summary_retrieve_response>;
  /** Event Read-Only Viewset */
  events_events_list?: Maybe<events_events_list_response>;
  /** Event Read-Only Viewset */
  events_events_retrieve?: Maybe<events_events_retrieve_response>;
  /** Get all actions */
  events_events_actions_list?: Maybe<Array<Maybe<events_events_actions_list_response>>>;
  /** Get the count of events per month */
  events_events_per_month_list?: Maybe<Array<Maybe<events_events_per_month_list_response>>>;
  /** Get the top_n events grouped by user count */
  events_events_top_per_user_list?: Maybe<Array<Maybe<events_events_top_per_user_list_response>>>;
  /** Get event volume for specified filters and timeframe */
  events_events_volume_list?: Maybe<Array<Maybe<events_events_volume_list_response>>>;
  /** Notification Viewset */
  events_notifications_list?: Maybe<events_notifications_list_response>;
  /** Notification Viewset */
  events_notifications_retrieve?: Maybe<events_notifications_retrieve_response>;
  /** Get a list of all objects that use this object */
  events_notifications_used_by_list?: Maybe<Array<Maybe<events_notifications_used_by_list_response>>>;
  /** NotificationRule Viewset */
  events_rules_list?: Maybe<events_rules_list_response>;
  /** NotificationRule Viewset */
  events_rules_retrieve?: Maybe<events_rules_retrieve_response>;
  /** Get a list of all objects that use this object */
  events_rules_used_by_list?: Maybe<Array<Maybe<events_rules_used_by_list_response>>>;
  /** Read-only view set that returns all background tasks */
  events_system_tasks_list?: Maybe<events_system_tasks_list_response>;
  /** Read-only view set that returns all background tasks */
  events_system_tasks_retrieve?: Maybe<events_system_tasks_retrieve_response>;
  /** NotificationTransport Viewset */
  events_transports_list?: Maybe<events_transports_list_response>;
  /** NotificationTransport Viewset */
  events_transports_retrieve?: Maybe<events_transports_retrieve_response>;
  /** Get a list of all objects that use this object */
  events_transports_used_by_list?: Maybe<Array<Maybe<events_transports_used_by_list_response>>>;
  /** FlowStageBinding Viewset */
  flows_bindings_list?: Maybe<flows_bindings_list_response>;
  /** FlowStageBinding Viewset */
  flows_bindings_retrieve?: Maybe<flows_bindings_retrieve_response>;
  /** Get a list of all objects that use this object */
  flows_bindings_used_by_list?: Maybe<Array<Maybe<flows_bindings_used_by_list_response>>>;
  /** Get the next pending challenge from the currently active flow. */
  flows_executor_get?: Maybe<flows_executor_get_response>;
  /** Get current flow state and record it */
  flows_inspector_get?: Maybe<flows_inspector_get_response>;
  /** Flow Viewset */
  flows_instances_list?: Maybe<flows_instances_list_response>;
  /** Flow Viewset */
  flows_instances_retrieve?: Maybe<flows_instances_retrieve_response>;
  /** Return diagram for flow with slug `slug`, in the format used by flowchart.js */
  flows_instances_diagram_retrieve?: Maybe<flows_instances_diagram_retrieve_response>;
  /** Execute flow for current user */
  flows_instances_execute_retrieve?: Maybe<flows_instances_execute_retrieve_response>;
  /** Export flow to .yaml file */
  flows_instances_export_retrieve?: Maybe<flows_instances_export_retrieve_response>;
  /** Get a list of all objects that use this object */
  flows_instances_used_by_list?: Maybe<Array<Maybe<flows_instances_used_by_list_response>>>;
  /** Info about cached flows */
  flows_instances_cache_info_retrieve?: Maybe<flows_instances_cache_info_retrieve_response>;
  /** Blueprint instances */
  managed_blueprints_list?: Maybe<managed_blueprints_list_response>;
  /** Blueprint instances */
  managed_blueprints_retrieve?: Maybe<managed_blueprints_retrieve_response>;
  /** Get a list of all objects that use this object */
  managed_blueprints_used_by_list?: Maybe<Array<Maybe<managed_blueprints_used_by_list_response>>>;
  /** Get blueprints */
  managed_blueprints_available_list?: Maybe<Array<Maybe<managed_blueprints_available_list_response>>>;
  /** AccessToken Viewset */
  oauth2_access_tokens_list?: Maybe<oauth2_access_tokens_list_response>;
  /** AccessToken Viewset */
  oauth2_access_tokens_retrieve?: Maybe<oauth2_access_tokens_retrieve_response>;
  /** Get a list of all objects that use this object */
  oauth2_access_tokens_used_by_list?: Maybe<Array<Maybe<oauth2_access_tokens_used_by_list_response>>>;
  /** AuthorizationCode Viewset */
  oauth2_authorization_codes_list?: Maybe<oauth2_authorization_codes_list_response>;
  /** AuthorizationCode Viewset */
  oauth2_authorization_codes_retrieve?: Maybe<oauth2_authorization_codes_retrieve_response>;
  /** Get a list of all objects that use this object */
  oauth2_authorization_codes_used_by_list?: Maybe<Array<Maybe<oauth2_authorization_codes_used_by_list_response>>>;
  /** RefreshToken Viewset */
  oauth2_refresh_tokens_list?: Maybe<oauth2_refresh_tokens_list_response>;
  /** RefreshToken Viewset */
  oauth2_refresh_tokens_retrieve?: Maybe<oauth2_refresh_tokens_retrieve_response>;
  /** Get a list of all objects that use this object */
  oauth2_refresh_tokens_used_by_list?: Maybe<Array<Maybe<oauth2_refresh_tokens_used_by_list_response>>>;
  /** Outpost Viewset */
  outposts_instances_list?: Maybe<outposts_instances_list_response>;
  /** Outpost Viewset */
  outposts_instances_retrieve?: Maybe<outposts_instances_retrieve_response>;
  /** Get outposts current health */
  outposts_instances_health_list?: Maybe<Array<Maybe<outposts_instances_health_list_response>>>;
  /** Get a list of all objects that use this object */
  outposts_instances_used_by_list?: Maybe<Array<Maybe<outposts_instances_used_by_list_response>>>;
  /** Global default outpost config */
  outposts_instances_default_settings_retrieve?: Maybe<outposts_instances_default_settings_retrieve_response>;
  /** LDAPProvider Viewset */
  outposts_ldap_list?: Maybe<outposts_ldap_list_response>;
  /** LDAPProvider Viewset */
  outposts_ldap_retrieve?: Maybe<outposts_ldap_retrieve_response>;
  /** ProxyProvider Viewset */
  outposts_proxy_list?: Maybe<outposts_proxy_list_response>;
  /** ProxyProvider Viewset */
  outposts_proxy_retrieve?: Maybe<outposts_proxy_retrieve_response>;
  /** RadiusProvider Viewset */
  outposts_radius_list?: Maybe<outposts_radius_list_response>;
  /** RadiusProvider Viewset */
  outposts_radius_retrieve?: Maybe<outposts_radius_retrieve_response>;
  /** ServiceConnection Viewset */
  outposts_service_connections_all_list?: Maybe<outposts_service_connections_all_list_response>;
  /** ServiceConnection Viewset */
  outposts_service_connections_all_retrieve?: Maybe<outposts_service_connections_all_retrieve_response>;
  /** Get the service connection's state */
  outposts_service_connections_all_state_retrieve?: Maybe<outposts_service_connections_all_state_retrieve_response>;
  /** Get a list of all objects that use this object */
  outposts_service_connections_all_used_by_list?: Maybe<Array<Maybe<outposts_service_connections_all_used_by_list_response>>>;
  /** Get all creatable service connection types */
  outposts_service_connections_all_types_list?: Maybe<Array<Maybe<outposts_service_connections_all_types_list_response>>>;
  /** DockerServiceConnection Viewset */
  outposts_service_connections_docker_list?: Maybe<outposts_service_connections_docker_list_response>;
  /** DockerServiceConnection Viewset */
  outposts_service_connections_docker_retrieve?: Maybe<outposts_service_connections_docker_retrieve_response>;
  /** Get a list of all objects that use this object */
  outposts_service_connections_docker_used_by_list?: Maybe<Array<Maybe<outposts_service_connections_docker_used_by_list_response>>>;
  /** KubernetesServiceConnection Viewset */
  outposts_service_connections_kubernetes_list?: Maybe<outposts_service_connections_kubernetes_list_response>;
  /** KubernetesServiceConnection Viewset */
  outposts_service_connections_kubernetes_retrieve?: Maybe<outposts_service_connections_kubernetes_retrieve_response>;
  /** Get a list of all objects that use this object */
  outposts_service_connections_kubernetes_used_by_list?: Maybe<Array<Maybe<outposts_service_connections_kubernetes_used_by_list_response>>>;
  /** Policy Viewset */
  policies_all_list?: Maybe<policies_all_list_response>;
  /** Policy Viewset */
  policies_all_retrieve?: Maybe<policies_all_retrieve_response>;
  /** Get a list of all objects that use this object */
  policies_all_used_by_list?: Maybe<Array<Maybe<policies_all_used_by_list_response>>>;
  /** Info about cached policies */
  policies_all_cache_info_retrieve?: Maybe<policies_all_cache_info_retrieve_response>;
  /** Get all creatable policy types */
  policies_all_types_list?: Maybe<Array<Maybe<policies_all_types_list_response>>>;
  /** PolicyBinding Viewset */
  policies_bindings_list?: Maybe<policies_bindings_list_response>;
  /** PolicyBinding Viewset */
  policies_bindings_retrieve?: Maybe<policies_bindings_retrieve_response>;
  /** Get a list of all objects that use this object */
  policies_bindings_used_by_list?: Maybe<Array<Maybe<policies_bindings_used_by_list_response>>>;
  /** Dummy Viewset */
  policies_dummy_list?: Maybe<policies_dummy_list_response>;
  /** Dummy Viewset */
  policies_dummy_retrieve?: Maybe<policies_dummy_retrieve_response>;
  /** Get a list of all objects that use this object */
  policies_dummy_used_by_list?: Maybe<Array<Maybe<policies_dummy_used_by_list_response>>>;
  /** Event Matcher Policy Viewset */
  policies_event_matcher_list?: Maybe<policies_event_matcher_list_response>;
  /** Event Matcher Policy Viewset */
  policies_event_matcher_retrieve?: Maybe<policies_event_matcher_retrieve_response>;
  /** Get a list of all objects that use this object */
  policies_event_matcher_used_by_list?: Maybe<Array<Maybe<policies_event_matcher_used_by_list_response>>>;
  /** Source Viewset */
  policies_expression_list?: Maybe<policies_expression_list_response>;
  /** Source Viewset */
  policies_expression_retrieve?: Maybe<policies_expression_retrieve_response>;
  /** Get a list of all objects that use this object */
  policies_expression_used_by_list?: Maybe<Array<Maybe<policies_expression_used_by_list_response>>>;
  /** Password Policy Viewset */
  policies_password_list?: Maybe<policies_password_list_response>;
  /** Password Policy Viewset */
  policies_password_retrieve?: Maybe<policies_password_retrieve_response>;
  /** Get a list of all objects that use this object */
  policies_password_used_by_list?: Maybe<Array<Maybe<policies_password_used_by_list_response>>>;
  /** Password Expiry Viewset */
  policies_password_expiry_list?: Maybe<policies_password_expiry_list_response>;
  /** Password Expiry Viewset */
  policies_password_expiry_retrieve?: Maybe<policies_password_expiry_retrieve_response>;
  /** Get a list of all objects that use this object */
  policies_password_expiry_used_by_list?: Maybe<Array<Maybe<policies_password_expiry_used_by_list_response>>>;
  /** Reputation Policy Viewset */
  policies_reputation_list?: Maybe<policies_reputation_list_response>;
  /** Reputation Policy Viewset */
  policies_reputation_retrieve?: Maybe<policies_reputation_retrieve_response>;
  /** Get a list of all objects that use this object */
  policies_reputation_used_by_list?: Maybe<Array<Maybe<policies_reputation_used_by_list_response>>>;
  /** Reputation Viewset */
  policies_reputation_scores_list?: Maybe<policies_reputation_scores_list_response>;
  /** Reputation Viewset */
  policies_reputation_scores_retrieve?: Maybe<policies_reputation_scores_retrieve_response>;
  /** Get a list of all objects that use this object */
  policies_reputation_scores_used_by_list?: Maybe<Array<Maybe<policies_reputation_scores_used_by_list_response>>>;
  /** PropertyMapping Viewset */
  propertymappings_all_list?: Maybe<propertymappings_all_list_response>;
  /** PropertyMapping Viewset */
  propertymappings_all_retrieve?: Maybe<propertymappings_all_retrieve_response>;
  /** Get a list of all objects that use this object */
  propertymappings_all_used_by_list?: Maybe<Array<Maybe<propertymappings_all_used_by_list_response>>>;
  /** Get all creatable property-mapping types */
  propertymappings_all_types_list?: Maybe<Array<Maybe<propertymappings_all_types_list_response>>>;
  /** LDAP PropertyMapping Viewset */
  propertymappings_ldap_list?: Maybe<propertymappings_ldap_list_response>;
  /** LDAP PropertyMapping Viewset */
  propertymappings_ldap_retrieve?: Maybe<propertymappings_ldap_retrieve_response>;
  /** Get a list of all objects that use this object */
  propertymappings_ldap_used_by_list?: Maybe<Array<Maybe<propertymappings_ldap_used_by_list_response>>>;
  /** NotificationWebhookMapping Viewset */
  propertymappings_notification_list?: Maybe<propertymappings_notification_list_response>;
  /** NotificationWebhookMapping Viewset */
  propertymappings_notification_retrieve?: Maybe<propertymappings_notification_retrieve_response>;
  /** Get a list of all objects that use this object */
  propertymappings_notification_used_by_list?: Maybe<Array<Maybe<propertymappings_notification_used_by_list_response>>>;
  /** RACPropertyMapping Viewset */
  propertymappings_rac_list?: Maybe<propertymappings_rac_list_response>;
  /** RACPropertyMapping Viewset */
  propertymappings_rac_retrieve?: Maybe<propertymappings_rac_retrieve_response>;
  /** Get a list of all objects that use this object */
  propertymappings_rac_used_by_list?: Maybe<Array<Maybe<propertymappings_rac_used_by_list_response>>>;
  /** SAMLPropertyMapping Viewset */
  propertymappings_saml_list?: Maybe<propertymappings_saml_list_response>;
  /** SAMLPropertyMapping Viewset */
  propertymappings_saml_retrieve?: Maybe<propertymappings_saml_retrieve_response>;
  /** Get a list of all objects that use this object */
  propertymappings_saml_used_by_list?: Maybe<Array<Maybe<propertymappings_saml_used_by_list_response>>>;
  /** SCIMMapping Viewset */
  propertymappings_scim_list?: Maybe<propertymappings_scim_list_response>;
  /** SCIMMapping Viewset */
  propertymappings_scim_retrieve?: Maybe<propertymappings_scim_retrieve_response>;
  /** Get a list of all objects that use this object */
  propertymappings_scim_used_by_list?: Maybe<Array<Maybe<propertymappings_scim_used_by_list_response>>>;
  /** ScopeMapping Viewset */
  propertymappings_scope_list?: Maybe<propertymappings_scope_list_response>;
  /** ScopeMapping Viewset */
  propertymappings_scope_retrieve?: Maybe<propertymappings_scope_retrieve_response>;
  /** Get a list of all objects that use this object */
  propertymappings_scope_used_by_list?: Maybe<Array<Maybe<propertymappings_scope_used_by_list_response>>>;
  /** Provider Viewset */
  providers_all_list?: Maybe<providers_all_list_response>;
  /** Provider Viewset */
  providers_all_retrieve?: Maybe<providers_all_retrieve_response>;
  /** Get a list of all objects that use this object */
  providers_all_used_by_list?: Maybe<Array<Maybe<providers_all_used_by_list_response>>>;
  /** Get all creatable provider types */
  providers_all_types_list?: Maybe<Array<Maybe<providers_all_types_list_response>>>;
  /** LDAPProvider Viewset */
  providers_ldap_list?: Maybe<providers_ldap_list_response>;
  /** LDAPProvider Viewset */
  providers_ldap_retrieve?: Maybe<providers_ldap_retrieve_response>;
  /** Get a list of all objects that use this object */
  providers_ldap_used_by_list?: Maybe<Array<Maybe<providers_ldap_used_by_list_response>>>;
  /** OAuth2Provider Viewset */
  providers_oauth2_list?: Maybe<providers_oauth2_list_response>;
  /** OAuth2Provider Viewset */
  providers_oauth2_retrieve?: Maybe<providers_oauth2_retrieve_response>;
  /** Preview user data for provider */
  providers_oauth2_preview_user_retrieve?: Maybe<providers_oauth2_preview_user_retrieve_response>;
  /** Get Providers setup URLs */
  providers_oauth2_setup_urls_retrieve?: Maybe<providers_oauth2_setup_urls_retrieve_response>;
  /** Get a list of all objects that use this object */
  providers_oauth2_used_by_list?: Maybe<Array<Maybe<providers_oauth2_used_by_list_response>>>;
  /** ProxyProvider Viewset */
  providers_proxy_list?: Maybe<providers_proxy_list_response>;
  /** ProxyProvider Viewset */
  providers_proxy_retrieve?: Maybe<providers_proxy_retrieve_response>;
  /** Get a list of all objects that use this object */
  providers_proxy_used_by_list?: Maybe<Array<Maybe<providers_proxy_used_by_list_response>>>;
  /** RACProvider Viewset */
  providers_rac_list?: Maybe<providers_rac_list_response>;
  /** RACProvider Viewset */
  providers_rac_retrieve?: Maybe<providers_rac_retrieve_response>;
  /** Get a list of all objects that use this object */
  providers_rac_used_by_list?: Maybe<Array<Maybe<providers_rac_used_by_list_response>>>;
  /** RadiusProvider Viewset */
  providers_radius_list?: Maybe<providers_radius_list_response>;
  /** RadiusProvider Viewset */
  providers_radius_retrieve?: Maybe<providers_radius_retrieve_response>;
  /** Get a list of all objects that use this object */
  providers_radius_used_by_list?: Maybe<Array<Maybe<providers_radius_used_by_list_response>>>;
  /** SAMLProvider Viewset */
  providers_saml_list?: Maybe<providers_saml_list_response>;
  /** SAMLProvider Viewset */
  providers_saml_retrieve?: Maybe<providers_saml_retrieve_response>;
  /** Return metadata as XML string */
  providers_saml_metadata_retrieve?: Maybe<providers_saml_metadata_retrieve_response>;
  /** Preview user data for provider */
  providers_saml_preview_user_retrieve?: Maybe<providers_saml_preview_user_retrieve_response>;
  /** Get a list of all objects that use this object */
  providers_saml_used_by_list?: Maybe<Array<Maybe<providers_saml_used_by_list_response>>>;
  /** SCIMProvider Viewset */
  providers_scim_list?: Maybe<providers_scim_list_response>;
  /** SCIMProvider Viewset */
  providers_scim_retrieve?: Maybe<providers_scim_retrieve_response>;
  /** Get provider's sync status */
  providers_scim_sync_status_retrieve?: Maybe<providers_scim_sync_status_retrieve_response>;
  /** Get a list of all objects that use this object */
  providers_scim_used_by_list?: Maybe<Array<Maybe<providers_scim_used_by_list_response>>>;
  /** ConnectionToken Viewset */
  rac_connection_tokens_list?: Maybe<rac_connection_tokens_list_response>;
  /** ConnectionToken Viewset */
  rac_connection_tokens_retrieve?: Maybe<rac_connection_tokens_retrieve_response>;
  /** Get a list of all objects that use this object */
  rac_connection_tokens_used_by_list?: Maybe<Array<Maybe<rac_connection_tokens_used_by_list_response>>>;
  /** List accessible endpoints */
  rac_endpoints_list?: Maybe<rac_endpoints_list_response>;
  /** Endpoint Viewset */
  rac_endpoints_retrieve?: Maybe<rac_endpoints_retrieve_response>;
  /** Get a list of all objects that use this object */
  rac_endpoints_used_by_list?: Maybe<Array<Maybe<rac_endpoints_used_by_list_response>>>;
  /** Read-only list of all permissions, filterable by model and app */
  rbac_permissions_list?: Maybe<rbac_permissions_list_response>;
  /** Read-only list of all permissions, filterable by model and app */
  rbac_permissions_retrieve?: Maybe<rbac_permissions_retrieve_response>;
  /** Get assigned object permissions for a single object */
  rbac_permissions_assigned_by_roles_list?: Maybe<rbac_permissions_assigned_by_roles_list_response>;
  /** Get assigned object permissions for a single object */
  rbac_permissions_assigned_by_users_list?: Maybe<rbac_permissions_assigned_by_users_list_response>;
  /** Get a role's assigned object permissions */
  rbac_permissions_roles_list?: Maybe<rbac_permissions_roles_list_response>;
  /** Get a users's assigned object permissions */
  rbac_permissions_users_list?: Maybe<rbac_permissions_users_list_response>;
  /** Role viewset */
  rbac_roles_list?: Maybe<rbac_roles_list_response>;
  /** Role viewset */
  rbac_roles_retrieve?: Maybe<rbac_roles_retrieve_response>;
  /** Get a list of all objects that use this object */
  rbac_roles_used_by_list?: Maybe<Array<Maybe<rbac_roles_used_by_list_response>>>;
  /** Retrieve public configuration options */
  root_config_retrieve?: Maybe<root_config_retrieve_response>;
  /**
   * OpenApi3 schema for this API. Format can be selected via content negotiation.
   *
   * - YAML: application/vnd.oai.openapi
   * - JSON: application/vnd.oai.openapi+json
   */
  schema_retrieve?: Maybe<schema_retrieve_response>;
  /** Source Viewset */
  sources_all_list?: Maybe<sources_all_list_response>;
  /** Source Viewset */
  sources_all_retrieve?: Maybe<sources_all_retrieve_response>;
  /** Get a list of all objects that use this object */
  sources_all_used_by_list?: Maybe<Array<Maybe<sources_all_used_by_list_response>>>;
  /** Get all creatable source types */
  sources_all_types_list?: Maybe<Array<Maybe<sources_all_types_list_response>>>;
  /** Get all sources the user can configure */
  sources_all_user_settings_list?: Maybe<Array<Maybe<sources_all_user_settings_list_response>>>;
  /** LDAP Source Viewset */
  sources_ldap_list?: Maybe<sources_ldap_list_response>;
  /** LDAP Source Viewset */
  sources_ldap_retrieve?: Maybe<sources_ldap_retrieve_response>;
  /** Get raw LDAP data to debug */
  sources_ldap_debug_retrieve?: Maybe<sources_ldap_debug_retrieve_response>;
  /** Get source's sync status */
  sources_ldap_sync_status_retrieve?: Maybe<sources_ldap_sync_status_retrieve_response>;
  /** Get a list of all objects that use this object */
  sources_ldap_used_by_list?: Maybe<Array<Maybe<sources_ldap_used_by_list_response>>>;
  /** Source Viewset */
  sources_oauth_list?: Maybe<sources_oauth_list_response>;
  /** Source Viewset */
  sources_oauth_retrieve?: Maybe<sources_oauth_retrieve_response>;
  /** Get a list of all objects that use this object */
  sources_oauth_used_by_list?: Maybe<Array<Maybe<sources_oauth_used_by_list_response>>>;
  /**
   * Get all creatable source types. If ?name is set, only returns the type for <name>.
   * If <name> isn't found, returns the default type.
   */
  sources_oauth_source_types_list?: Maybe<Array<Maybe<sources_oauth_source_types_list_response>>>;
  /** Plex source Viewset */
  sources_plex_list?: Maybe<sources_plex_list_response>;
  /** Plex source Viewset */
  sources_plex_retrieve?: Maybe<sources_plex_retrieve_response>;
  /** Get a list of all objects that use this object */
  sources_plex_used_by_list?: Maybe<Array<Maybe<sources_plex_used_by_list_response>>>;
  /** SAMLSource Viewset */
  sources_saml_list?: Maybe<sources_saml_list_response>;
  /** SAMLSource Viewset */
  sources_saml_retrieve?: Maybe<sources_saml_retrieve_response>;
  /** Return metadata as XML string */
  sources_saml_metadata_retrieve?: Maybe<sources_saml_metadata_retrieve_response>;
  /** Get a list of all objects that use this object */
  sources_saml_used_by_list?: Maybe<Array<Maybe<sources_saml_used_by_list_response>>>;
  /** SCIMSource Viewset */
  sources_scim_list?: Maybe<sources_scim_list_response>;
  /** SCIMSource Viewset */
  sources_scim_retrieve?: Maybe<sources_scim_retrieve_response>;
  /** Get a list of all objects that use this object */
  sources_scim_used_by_list?: Maybe<Array<Maybe<sources_scim_used_by_list_response>>>;
  /** SCIMSourceGroup Viewset */
  sources_scim_groups_list?: Maybe<sources_scim_groups_list_response>;
  /** SCIMSourceGroup Viewset */
  sources_scim_groups_retrieve?: Maybe<sources_scim_groups_retrieve_response>;
  /** Get a list of all objects that use this object */
  sources_scim_groups_used_by_list?: Maybe<Array<Maybe<sources_scim_groups_used_by_list_response>>>;
  /** SCIMSourceUser Viewset */
  sources_scim_users_list?: Maybe<sources_scim_users_list_response>;
  /** SCIMSourceUser Viewset */
  sources_scim_users_retrieve?: Maybe<sources_scim_users_retrieve_response>;
  /** Get a list of all objects that use this object */
  sources_scim_users_used_by_list?: Maybe<Array<Maybe<sources_scim_users_used_by_list_response>>>;
  /** User-source connection Viewset */
  sources_user_connections_all_list?: Maybe<sources_user_connections_all_list_response>;
  /** User-source connection Viewset */
  sources_user_connections_all_retrieve?: Maybe<sources_user_connections_all_retrieve_response>;
  /** Get a list of all objects that use this object */
  sources_user_connections_all_used_by_list?: Maybe<Array<Maybe<sources_user_connections_all_used_by_list_response>>>;
  /** Source Viewset */
  sources_user_connections_oauth_list?: Maybe<sources_user_connections_oauth_list_response>;
  /** Source Viewset */
  sources_user_connections_oauth_retrieve?: Maybe<sources_user_connections_oauth_retrieve_response>;
  /** Get a list of all objects that use this object */
  sources_user_connections_oauth_used_by_list?: Maybe<Array<Maybe<sources_user_connections_oauth_used_by_list_response>>>;
  /** Plex Source connection Serializer */
  sources_user_connections_plex_list?: Maybe<sources_user_connections_plex_list_response>;
  /** Plex Source connection Serializer */
  sources_user_connections_plex_retrieve?: Maybe<sources_user_connections_plex_retrieve_response>;
  /** Get a list of all objects that use this object */
  sources_user_connections_plex_used_by_list?: Maybe<Array<Maybe<sources_user_connections_plex_used_by_list_response>>>;
  /** Source Viewset */
  sources_user_connections_saml_list?: Maybe<sources_user_connections_saml_list_response>;
  /** Source Viewset */
  sources_user_connections_saml_retrieve?: Maybe<sources_user_connections_saml_retrieve_response>;
  /** Get a list of all objects that use this object */
  sources_user_connections_saml_used_by_list?: Maybe<Array<Maybe<sources_user_connections_saml_used_by_list_response>>>;
  /** Stage Viewset */
  stages_all_list?: Maybe<stages_all_list_response>;
  /** Stage Viewset */
  stages_all_retrieve?: Maybe<stages_all_retrieve_response>;
  /** Get a list of all objects that use this object */
  stages_all_used_by_list?: Maybe<Array<Maybe<stages_all_used_by_list_response>>>;
  /** Get all creatable stage types */
  stages_all_types_list?: Maybe<Array<Maybe<stages_all_types_list_response>>>;
  /** Get all stages the user can configure */
  stages_all_user_settings_list?: Maybe<Array<Maybe<stages_all_user_settings_list_response>>>;
  /** AuthenticatorDuoStage Viewset */
  stages_authenticator_duo_list?: Maybe<stages_authenticator_duo_list_response>;
  /** AuthenticatorDuoStage Viewset */
  stages_authenticator_duo_retrieve?: Maybe<stages_authenticator_duo_retrieve_response>;
  /** Get a list of all objects that use this object */
  stages_authenticator_duo_used_by_list?: Maybe<Array<Maybe<stages_authenticator_duo_used_by_list_response>>>;
  /** AuthenticatorSMSStage Viewset */
  stages_authenticator_sms_list?: Maybe<stages_authenticator_sms_list_response>;
  /** AuthenticatorSMSStage Viewset */
  stages_authenticator_sms_retrieve?: Maybe<stages_authenticator_sms_retrieve_response>;
  /** Get a list of all objects that use this object */
  stages_authenticator_sms_used_by_list?: Maybe<Array<Maybe<stages_authenticator_sms_used_by_list_response>>>;
  /** AuthenticatorStaticStage Viewset */
  stages_authenticator_static_list?: Maybe<stages_authenticator_static_list_response>;
  /** AuthenticatorStaticStage Viewset */
  stages_authenticator_static_retrieve?: Maybe<stages_authenticator_static_retrieve_response>;
  /** Get a list of all objects that use this object */
  stages_authenticator_static_used_by_list?: Maybe<Array<Maybe<stages_authenticator_static_used_by_list_response>>>;
  /** AuthenticatorTOTPStage Viewset */
  stages_authenticator_totp_list?: Maybe<stages_authenticator_totp_list_response>;
  /** AuthenticatorTOTPStage Viewset */
  stages_authenticator_totp_retrieve?: Maybe<stages_authenticator_totp_retrieve_response>;
  /** Get a list of all objects that use this object */
  stages_authenticator_totp_used_by_list?: Maybe<Array<Maybe<stages_authenticator_totp_used_by_list_response>>>;
  /** AuthenticatorValidateStage Viewset */
  stages_authenticator_validate_list?: Maybe<stages_authenticator_validate_list_response>;
  /** AuthenticatorValidateStage Viewset */
  stages_authenticator_validate_retrieve?: Maybe<stages_authenticator_validate_retrieve_response>;
  /** Get a list of all objects that use this object */
  stages_authenticator_validate_used_by_list?: Maybe<Array<Maybe<stages_authenticator_validate_used_by_list_response>>>;
  /** AuthenticatorWebAuthnStage Viewset */
  stages_authenticator_webauthn_list?: Maybe<stages_authenticator_webauthn_list_response>;
  /** AuthenticatorWebAuthnStage Viewset */
  stages_authenticator_webauthn_retrieve?: Maybe<stages_authenticator_webauthn_retrieve_response>;
  /** Get a list of all objects that use this object */
  stages_authenticator_webauthn_used_by_list?: Maybe<Array<Maybe<stages_authenticator_webauthn_used_by_list_response>>>;
  /** WebAuthnDeviceType Viewset */
  stages_authenticator_webauthn_device_types_list?: Maybe<stages_authenticator_webauthn_device_types_list_response>;
  /** WebAuthnDeviceType Viewset */
  stages_authenticator_webauthn_device_types_retrieve?: Maybe<stages_authenticator_webauthn_device_types_retrieve_response>;
  /** CaptchaStage Viewset */
  stages_captcha_list?: Maybe<stages_captcha_list_response>;
  /** CaptchaStage Viewset */
  stages_captcha_retrieve?: Maybe<stages_captcha_retrieve_response>;
  /** Get a list of all objects that use this object */
  stages_captcha_used_by_list?: Maybe<Array<Maybe<stages_captcha_used_by_list_response>>>;
  /** ConsentStage Viewset */
  stages_consent_list?: Maybe<stages_consent_list_response>;
  /** ConsentStage Viewset */
  stages_consent_retrieve?: Maybe<stages_consent_retrieve_response>;
  /** Get a list of all objects that use this object */
  stages_consent_used_by_list?: Maybe<Array<Maybe<stages_consent_used_by_list_response>>>;
  /** DenyStage Viewset */
  stages_deny_list?: Maybe<stages_deny_list_response>;
  /** DenyStage Viewset */
  stages_deny_retrieve?: Maybe<stages_deny_retrieve_response>;
  /** Get a list of all objects that use this object */
  stages_deny_used_by_list?: Maybe<Array<Maybe<stages_deny_used_by_list_response>>>;
  /** DummyStage Viewset */
  stages_dummy_list?: Maybe<stages_dummy_list_response>;
  /** DummyStage Viewset */
  stages_dummy_retrieve?: Maybe<stages_dummy_retrieve_response>;
  /** Get a list of all objects that use this object */
  stages_dummy_used_by_list?: Maybe<Array<Maybe<stages_dummy_used_by_list_response>>>;
  /** EmailStage Viewset */
  stages_email_list?: Maybe<stages_email_list_response>;
  /** EmailStage Viewset */
  stages_email_retrieve?: Maybe<stages_email_retrieve_response>;
  /** Get a list of all objects that use this object */
  stages_email_used_by_list?: Maybe<Array<Maybe<stages_email_used_by_list_response>>>;
  /** Get all available templates, including custom templates */
  stages_email_templates_list?: Maybe<Array<Maybe<stages_email_templates_list_response>>>;
  /** IdentificationStage Viewset */
  stages_identification_list?: Maybe<stages_identification_list_response>;
  /** IdentificationStage Viewset */
  stages_identification_retrieve?: Maybe<stages_identification_retrieve_response>;
  /** Get a list of all objects that use this object */
  stages_identification_used_by_list?: Maybe<Array<Maybe<stages_identification_used_by_list_response>>>;
  /** Invitation Viewset */
  stages_invitation_invitations_list?: Maybe<stages_invitation_invitations_list_response>;
  /** Invitation Viewset */
  stages_invitation_invitations_retrieve?: Maybe<stages_invitation_invitations_retrieve_response>;
  /** Get a list of all objects that use this object */
  stages_invitation_invitations_used_by_list?: Maybe<Array<Maybe<stages_invitation_invitations_used_by_list_response>>>;
  /** InvitationStage Viewset */
  stages_invitation_stages_list?: Maybe<stages_invitation_stages_list_response>;
  /** InvitationStage Viewset */
  stages_invitation_stages_retrieve?: Maybe<stages_invitation_stages_retrieve_response>;
  /** Get a list of all objects that use this object */
  stages_invitation_stages_used_by_list?: Maybe<Array<Maybe<stages_invitation_stages_used_by_list_response>>>;
  /** PasswordStage Viewset */
  stages_password_list?: Maybe<stages_password_list_response>;
  /** PasswordStage Viewset */
  stages_password_retrieve?: Maybe<stages_password_retrieve_response>;
  /** Get a list of all objects that use this object */
  stages_password_used_by_list?: Maybe<Array<Maybe<stages_password_used_by_list_response>>>;
  /** Prompt Viewset */
  stages_prompt_prompts_list?: Maybe<stages_prompt_prompts_list_response>;
  /** Prompt Viewset */
  stages_prompt_prompts_retrieve?: Maybe<stages_prompt_prompts_retrieve_response>;
  /** Get a list of all objects that use this object */
  stages_prompt_prompts_used_by_list?: Maybe<Array<Maybe<stages_prompt_prompts_used_by_list_response>>>;
  /** PromptStage Viewset */
  stages_prompt_stages_list?: Maybe<stages_prompt_stages_list_response>;
  /** PromptStage Viewset */
  stages_prompt_stages_retrieve?: Maybe<stages_prompt_stages_retrieve_response>;
  /** Get a list of all objects that use this object */
  stages_prompt_stages_used_by_list?: Maybe<Array<Maybe<stages_prompt_stages_used_by_list_response>>>;
  /** SourceStage Viewset */
  stages_source_list?: Maybe<stages_source_list_response>;
  /** SourceStage Viewset */
  stages_source_retrieve?: Maybe<stages_source_retrieve_response>;
  /** Get a list of all objects that use this object */
  stages_source_used_by_list?: Maybe<Array<Maybe<stages_source_used_by_list_response>>>;
  /** UserDeleteStage Viewset */
  stages_user_delete_list?: Maybe<stages_user_delete_list_response>;
  /** UserDeleteStage Viewset */
  stages_user_delete_retrieve?: Maybe<stages_user_delete_retrieve_response>;
  /** Get a list of all objects that use this object */
  stages_user_delete_used_by_list?: Maybe<Array<Maybe<stages_user_delete_used_by_list_response>>>;
  /** UserLoginStage Viewset */
  stages_user_login_list?: Maybe<stages_user_login_list_response>;
  /** UserLoginStage Viewset */
  stages_user_login_retrieve?: Maybe<stages_user_login_retrieve_response>;
  /** Get a list of all objects that use this object */
  stages_user_login_used_by_list?: Maybe<Array<Maybe<stages_user_login_used_by_list_response>>>;
  /** UserLogoutStage Viewset */
  stages_user_logout_list?: Maybe<stages_user_logout_list_response>;
  /** UserLogoutStage Viewset */
  stages_user_logout_retrieve?: Maybe<stages_user_logout_retrieve_response>;
  /** Get a list of all objects that use this object */
  stages_user_logout_used_by_list?: Maybe<Array<Maybe<stages_user_logout_used_by_list_response>>>;
  /** UserWriteStage Viewset */
  stages_user_write_list?: Maybe<stages_user_write_list_response>;
  /** UserWriteStage Viewset */
  stages_user_write_retrieve?: Maybe<stages_user_write_retrieve_response>;
  /** Get a list of all objects that use this object */
  stages_user_write_used_by_list?: Maybe<Array<Maybe<stages_user_write_used_by_list_response>>>;
};


export type Queryauthenticators_admin_all_listArgs = {
  user?: InputMaybe<Scalars['Int']['input']>;
};


export type Queryauthenticators_admin_duo_listArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Queryauthenticators_admin_duo_retrieveArgs = {
  id: Scalars['Int']['input'];
};


export type Queryauthenticators_admin_sms_listArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Queryauthenticators_admin_sms_retrieveArgs = {
  id: Scalars['Int']['input'];
};


export type Queryauthenticators_admin_static_listArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Queryauthenticators_admin_static_retrieveArgs = {
  id: Scalars['Int']['input'];
};


export type Queryauthenticators_admin_totp_listArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Queryauthenticators_admin_totp_retrieveArgs = {
  id: Scalars['Int']['input'];
};


export type Queryauthenticators_admin_webauthn_listArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Queryauthenticators_admin_webauthn_retrieveArgs = {
  id: Scalars['Int']['input'];
};


export type Queryauthenticators_duo_listArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Queryauthenticators_duo_retrieveArgs = {
  id: Scalars['Int']['input'];
};


export type Queryauthenticators_duo_used_by_listArgs = {
  id: Scalars['Int']['input'];
};


export type Queryauthenticators_sms_listArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Queryauthenticators_sms_retrieveArgs = {
  id: Scalars['Int']['input'];
};


export type Queryauthenticators_sms_used_by_listArgs = {
  id: Scalars['Int']['input'];
};


export type Queryauthenticators_static_listArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Queryauthenticators_static_retrieveArgs = {
  id: Scalars['Int']['input'];
};


export type Queryauthenticators_static_used_by_listArgs = {
  id: Scalars['Int']['input'];
};


export type Queryauthenticators_totp_listArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Queryauthenticators_totp_retrieveArgs = {
  id: Scalars['Int']['input'];
};


export type Queryauthenticators_totp_used_by_listArgs = {
  id: Scalars['Int']['input'];
};


export type Queryauthenticators_webauthn_listArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Queryauthenticators_webauthn_retrieveArgs = {
  id: Scalars['Int']['input'];
};


export type Queryauthenticators_webauthn_used_by_listArgs = {
  id: Scalars['Int']['input'];
};


export type Querycore_applications_listArgs = {
  for_user?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Scalars['String']['input']>;
  meta_description?: InputMaybe<Scalars['String']['input']>;
  meta_launch_url?: InputMaybe<Scalars['String']['input']>;
  meta_publisher?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  superuser_full_list?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Querycore_applications_retrieveArgs = {
  slug: Scalars['String']['input'];
};


export type Querycore_applications_check_access_retrieveArgs = {
  slug: Scalars['String']['input'];
  for_user?: InputMaybe<Scalars['Int']['input']>;
};


export type Querycore_applications_metrics_listArgs = {
  slug: Scalars['String']['input'];
};


export type Querycore_applications_used_by_listArgs = {
  slug: Scalars['String']['input'];
};


export type Querycore_authenticated_sessions_listArgs = {
  last_ip?: InputMaybe<Scalars['String']['input']>;
  last_user_agent?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  user__username?: InputMaybe<Scalars['String']['input']>;
};


export type Querycore_authenticated_sessions_retrieveArgs = {
  uuid: Scalars['UUID']['input'];
};


export type Querycore_authenticated_sessions_used_by_listArgs = {
  uuid: Scalars['UUID']['input'];
};


export type Querycore_brands_listArgs = {
  brand_uuid?: InputMaybe<Scalars['UUID']['input']>;
  branding_favicon?: InputMaybe<Scalars['String']['input']>;
  branding_logo?: InputMaybe<Scalars['String']['input']>;
  branding_title?: InputMaybe<Scalars['String']['input']>;
  default?: InputMaybe<Scalars['Boolean']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  flow_authentication?: InputMaybe<Scalars['UUID']['input']>;
  flow_device_code?: InputMaybe<Scalars['UUID']['input']>;
  flow_invalidation?: InputMaybe<Scalars['UUID']['input']>;
  flow_recovery?: InputMaybe<Scalars['UUID']['input']>;
  flow_unenrollment?: InputMaybe<Scalars['UUID']['input']>;
  flow_user_settings?: InputMaybe<Scalars['UUID']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  web_certificate?: InputMaybe<Scalars['UUID']['input']>;
};


export type Querycore_brands_retrieveArgs = {
  brand_uuid: Scalars['UUID']['input'];
};


export type Querycore_brands_used_by_listArgs = {
  brand_uuid: Scalars['UUID']['input'];
};


export type Querycore_groups_listArgs = {
  attributes?: InputMaybe<Scalars['String']['input']>;
  include_users?: InputMaybe<Scalars['Boolean']['input']>;
  is_superuser?: InputMaybe<Scalars['Boolean']['input']>;
  members_by_pk?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  members_by_username?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Querycore_groups_retrieveArgs = {
  group_uuid: Scalars['UUID']['input'];
};


export type Querycore_groups_used_by_listArgs = {
  group_uuid: Scalars['UUID']['input'];
};


export type Querycore_tokens_listArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  expires?: InputMaybe<Scalars['DateTime']['input']>;
  expiring?: InputMaybe<Scalars['Boolean']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  intent?: InputMaybe<queryInput_core_tokens_list_intent>;
  managed?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  user__username?: InputMaybe<Scalars['String']['input']>;
};


export type Querycore_tokens_retrieveArgs = {
  identifier: Scalars['String']['input'];
};


export type Querycore_tokens_used_by_listArgs = {
  identifier: Scalars['String']['input'];
};


export type Querycore_tokens_view_key_retrieveArgs = {
  identifier: Scalars['String']['input'];
};


export type Querycore_user_consent_listArgs = {
  application?: InputMaybe<Scalars['UUID']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['Int']['input']>;
};


export type Querycore_user_consent_retrieveArgs = {
  id: Scalars['Int']['input'];
};


export type Querycore_user_consent_used_by_listArgs = {
  id: Scalars['Int']['input'];
};


export type Querycore_users_listArgs = {
  attributes?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  groups_by_name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groups_by_pk?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  include_groups?: InputMaybe<Scalars['Boolean']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  is_superuser?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  path_startswith?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Array<InputMaybe<queryInput_core_users_list_type_items>>>;
  username?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


export type Querycore_users_retrieveArgs = {
  id: Scalars['Int']['input'];
};


export type Querycore_users_metrics_retrieveArgs = {
  id: Scalars['Int']['input'];
};


export type Querycore_users_used_by_listArgs = {
  id: Scalars['Int']['input'];
};


export type Querycore_users_paths_retrieveArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Querycrypto_certificatekeypairs_listArgs = {
  has_key?: InputMaybe<Scalars['Boolean']['input']>;
  include_details?: InputMaybe<Scalars['Boolean']['input']>;
  managed?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Querycrypto_certificatekeypairs_retrieveArgs = {
  kp_uuid: Scalars['UUID']['input'];
};


export type Querycrypto_certificatekeypairs_used_by_listArgs = {
  kp_uuid: Scalars['UUID']['input'];
};


export type Querycrypto_certificatekeypairs_view_certificate_retrieveArgs = {
  kp_uuid: Scalars['UUID']['input'];
  download?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Querycrypto_certificatekeypairs_view_private_key_retrieveArgs = {
  kp_uuid: Scalars['UUID']['input'];
  download?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Queryenterprise_license_listArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Queryenterprise_license_retrieveArgs = {
  license_uuid: Scalars['UUID']['input'];
};


export type Queryenterprise_license_used_by_listArgs = {
  license_uuid: Scalars['UUID']['input'];
};


export type Queryevents_events_listArgs = {
  action?: InputMaybe<Scalars['String']['input']>;
  brand_name?: InputMaybe<Scalars['String']['input']>;
  client_ip?: InputMaybe<Scalars['String']['input']>;
  context_authorized_app?: InputMaybe<Scalars['String']['input']>;
  context_model_app?: InputMaybe<Scalars['String']['input']>;
  context_model_name?: InputMaybe<Scalars['String']['input']>;
  context_model_pk?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


export type Queryevents_events_retrieveArgs = {
  event_uuid: Scalars['UUID']['input'];
};


export type Queryevents_events_per_month_listArgs = {
  action?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};


export type Queryevents_events_top_per_user_listArgs = {
  action?: InputMaybe<Scalars['String']['input']>;
  top_n?: InputMaybe<Scalars['Int']['input']>;
};


export type Queryevents_events_volume_listArgs = {
  action?: InputMaybe<Scalars['String']['input']>;
  brand_name?: InputMaybe<Scalars['String']['input']>;
  client_ip?: InputMaybe<Scalars['String']['input']>;
  context_authorized_app?: InputMaybe<Scalars['String']['input']>;
  context_model_app?: InputMaybe<Scalars['String']['input']>;
  context_model_name?: InputMaybe<Scalars['String']['input']>;
  context_model_pk?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


export type Queryevents_notifications_listArgs = {
  body?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['DateTime']['input']>;
  event?: InputMaybe<Scalars['UUID']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  seen?: InputMaybe<Scalars['Boolean']['input']>;
  severity?: InputMaybe<queryInput_events_notifications_list_severity>;
  user?: InputMaybe<Scalars['Int']['input']>;
};


export type Queryevents_notifications_retrieveArgs = {
  uuid: Scalars['UUID']['input'];
};


export type Queryevents_notifications_used_by_listArgs = {
  uuid: Scalars['UUID']['input'];
};


export type Queryevents_rules_listArgs = {
  group__name?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  severity?: InputMaybe<queryInput_events_rules_list_severity>;
};


export type Queryevents_rules_retrieveArgs = {
  pbm_uuid: Scalars['UUID']['input'];
};


export type Queryevents_rules_used_by_listArgs = {
  pbm_uuid: Scalars['UUID']['input'];
};


export type Queryevents_system_tasks_listArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<queryInput_events_system_tasks_list_status>;
  uid?: InputMaybe<Scalars['String']['input']>;
};


export type Queryevents_system_tasks_retrieveArgs = {
  uuid: Scalars['UUID']['input'];
};


export type Queryevents_transports_listArgs = {
  mode?: InputMaybe<queryInput_events_transports_list_mode>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  send_once?: InputMaybe<Scalars['Boolean']['input']>;
  webhook_url?: InputMaybe<Scalars['String']['input']>;
};


export type Queryevents_transports_retrieveArgs = {
  uuid: Scalars['UUID']['input'];
};


export type Queryevents_transports_used_by_listArgs = {
  uuid: Scalars['UUID']['input'];
};


export type Queryflows_bindings_listArgs = {
  evaluate_on_plan?: InputMaybe<Scalars['Boolean']['input']>;
  fsb_uuid?: InputMaybe<Scalars['UUID']['input']>;
  invalid_response_action?: InputMaybe<queryInput_flows_bindings_list_invalid_response_action>;
  order?: InputMaybe<Scalars['Int']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  pbm_uuid?: InputMaybe<Scalars['UUID']['input']>;
  policies?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  policy_engine_mode?: InputMaybe<queryInput_flows_bindings_list_policy_engine_mode>;
  re_evaluate_policies?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stage?: InputMaybe<Scalars['UUID']['input']>;
  target?: InputMaybe<Scalars['UUID']['input']>;
};


export type Queryflows_bindings_retrieveArgs = {
  fsb_uuid: Scalars['UUID']['input'];
};


export type Queryflows_bindings_used_by_listArgs = {
  fsb_uuid: Scalars['UUID']['input'];
};


export type Queryflows_executor_getArgs = {
  flow_slug: Scalars['String']['input'];
  query: Scalars['String']['input'];
};


export type Queryflows_inspector_getArgs = {
  flow_slug: Scalars['String']['input'];
};


export type Queryflows_instances_listArgs = {
  denied_action?: InputMaybe<queryInput_flows_instances_list_denied_action>;
  designation?: InputMaybe<queryInput_flows_instances_list_designation>;
  flow_uuid?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type Queryflows_instances_retrieveArgs = {
  slug: Scalars['String']['input'];
};


export type Queryflows_instances_diagram_retrieveArgs = {
  slug: Scalars['String']['input'];
};


export type Queryflows_instances_execute_retrieveArgs = {
  slug: Scalars['String']['input'];
};


export type Queryflows_instances_export_retrieveArgs = {
  slug: Scalars['String']['input'];
};


export type Queryflows_instances_used_by_listArgs = {
  slug: Scalars['String']['input'];
};


export type Querymanaged_blueprints_listArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Querymanaged_blueprints_retrieveArgs = {
  instance_uuid: Scalars['UUID']['input'];
};


export type Querymanaged_blueprints_used_by_listArgs = {
  instance_uuid: Scalars['UUID']['input'];
};


export type Queryoauth2_access_tokens_listArgs = {
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  provider?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['Int']['input']>;
};


export type Queryoauth2_access_tokens_retrieveArgs = {
  id: Scalars['Int']['input'];
};


export type Queryoauth2_access_tokens_used_by_listArgs = {
  id: Scalars['Int']['input'];
};


export type Queryoauth2_authorization_codes_listArgs = {
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  provider?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['Int']['input']>;
};


export type Queryoauth2_authorization_codes_retrieveArgs = {
  id: Scalars['Int']['input'];
};


export type Queryoauth2_authorization_codes_used_by_listArgs = {
  id: Scalars['Int']['input'];
};


export type Queryoauth2_refresh_tokens_listArgs = {
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  provider?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['Int']['input']>;
};


export type Queryoauth2_refresh_tokens_retrieveArgs = {
  id: Scalars['Int']['input'];
};


export type Queryoauth2_refresh_tokens_used_by_listArgs = {
  id: Scalars['Int']['input'];
};


export type Queryoutposts_instances_listArgs = {
  managed__icontains?: InputMaybe<Scalars['String']['input']>;
  managed__iexact?: InputMaybe<Scalars['String']['input']>;
  name__icontains?: InputMaybe<Scalars['String']['input']>;
  name__iexact?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  providers__isnull?: InputMaybe<Scalars['Boolean']['input']>;
  providers_by_pk?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  service_connection__name__icontains?: InputMaybe<Scalars['String']['input']>;
  service_connection__name__iexact?: InputMaybe<Scalars['String']['input']>;
};


export type Queryoutposts_instances_retrieveArgs = {
  uuid: Scalars['UUID']['input'];
};


export type Queryoutposts_instances_health_listArgs = {
  uuid: Scalars['UUID']['input'];
  managed__icontains?: InputMaybe<Scalars['String']['input']>;
  managed__iexact?: InputMaybe<Scalars['String']['input']>;
  name__icontains?: InputMaybe<Scalars['String']['input']>;
  name__iexact?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  providers__isnull?: InputMaybe<Scalars['Boolean']['input']>;
  providers_by_pk?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  service_connection__name__icontains?: InputMaybe<Scalars['String']['input']>;
  service_connection__name__iexact?: InputMaybe<Scalars['String']['input']>;
};


export type Queryoutposts_instances_used_by_listArgs = {
  uuid: Scalars['UUID']['input'];
};


export type Queryoutposts_ldap_listArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Queryoutposts_ldap_retrieveArgs = {
  id: Scalars['Int']['input'];
};


export type Queryoutposts_proxy_listArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Queryoutposts_proxy_retrieveArgs = {
  id: Scalars['Int']['input'];
};


export type Queryoutposts_radius_listArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Queryoutposts_radius_retrieveArgs = {
  id: Scalars['Int']['input'];
};


export type Queryoutposts_service_connections_all_listArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Queryoutposts_service_connections_all_retrieveArgs = {
  uuid: Scalars['UUID']['input'];
};


export type Queryoutposts_service_connections_all_state_retrieveArgs = {
  uuid: Scalars['UUID']['input'];
};


export type Queryoutposts_service_connections_all_used_by_listArgs = {
  uuid: Scalars['UUID']['input'];
};


export type Queryoutposts_service_connections_docker_listArgs = {
  local?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  tls_authentication?: InputMaybe<Scalars['UUID']['input']>;
  tls_verification?: InputMaybe<Scalars['UUID']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};


export type Queryoutposts_service_connections_docker_retrieveArgs = {
  uuid: Scalars['UUID']['input'];
};


export type Queryoutposts_service_connections_docker_used_by_listArgs = {
  uuid: Scalars['UUID']['input'];
};


export type Queryoutposts_service_connections_kubernetes_listArgs = {
  local?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Queryoutposts_service_connections_kubernetes_retrieveArgs = {
  uuid: Scalars['UUID']['input'];
};


export type Queryoutposts_service_connections_kubernetes_used_by_listArgs = {
  uuid: Scalars['UUID']['input'];
};


export type Querypolicies_all_listArgs = {
  bindings__isnull?: InputMaybe<Scalars['Boolean']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  promptstage__isnull?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Querypolicies_all_retrieveArgs = {
  policy_uuid: Scalars['UUID']['input'];
};


export type Querypolicies_all_used_by_listArgs = {
  policy_uuid: Scalars['UUID']['input'];
};


export type Querypolicies_bindings_listArgs = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  policy?: InputMaybe<Scalars['UUID']['input']>;
  policy__isnull?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  target?: InputMaybe<Scalars['UUID']['input']>;
  target_in?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  timeout?: InputMaybe<Scalars['Int']['input']>;
};


export type Querypolicies_bindings_retrieveArgs = {
  policy_binding_uuid: Scalars['UUID']['input'];
};


export type Querypolicies_bindings_used_by_listArgs = {
  policy_binding_uuid: Scalars['UUID']['input'];
};


export type Querypolicies_dummy_listArgs = {
  created?: InputMaybe<Scalars['DateTime']['input']>;
  execution_logging?: InputMaybe<Scalars['Boolean']['input']>;
  last_updated?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  policy_uuid?: InputMaybe<Scalars['UUID']['input']>;
  result?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  wait_max?: InputMaybe<Scalars['Int']['input']>;
  wait_min?: InputMaybe<Scalars['Int']['input']>;
};


export type Querypolicies_dummy_retrieveArgs = {
  policy_uuid: Scalars['UUID']['input'];
};


export type Querypolicies_dummy_used_by_listArgs = {
  policy_uuid: Scalars['UUID']['input'];
};


export type Querypolicies_event_matcher_listArgs = {
  action?: InputMaybe<queryInput_policies_event_matcher_list_action>;
  app?: InputMaybe<Scalars['String']['input']>;
  client_ip?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['DateTime']['input']>;
  execution_logging?: InputMaybe<Scalars['Boolean']['input']>;
  last_updated?: InputMaybe<Scalars['DateTime']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  policy_uuid?: InputMaybe<Scalars['UUID']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Querypolicies_event_matcher_retrieveArgs = {
  policy_uuid: Scalars['UUID']['input'];
};


export type Querypolicies_event_matcher_used_by_listArgs = {
  policy_uuid: Scalars['UUID']['input'];
};


export type Querypolicies_expression_listArgs = {
  created?: InputMaybe<Scalars['DateTime']['input']>;
  execution_logging?: InputMaybe<Scalars['Boolean']['input']>;
  expression?: InputMaybe<Scalars['String']['input']>;
  last_updated?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  policy_uuid?: InputMaybe<Scalars['UUID']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Querypolicies_expression_retrieveArgs = {
  policy_uuid: Scalars['UUID']['input'];
};


export type Querypolicies_expression_used_by_listArgs = {
  policy_uuid: Scalars['UUID']['input'];
};


export type Querypolicies_password_listArgs = {
  amount_digits?: InputMaybe<Scalars['Int']['input']>;
  amount_lowercase?: InputMaybe<Scalars['Int']['input']>;
  amount_symbols?: InputMaybe<Scalars['Int']['input']>;
  amount_uppercase?: InputMaybe<Scalars['Int']['input']>;
  check_have_i_been_pwned?: InputMaybe<Scalars['Boolean']['input']>;
  check_static_rules?: InputMaybe<Scalars['Boolean']['input']>;
  check_zxcvbn?: InputMaybe<Scalars['Boolean']['input']>;
  created?: InputMaybe<Scalars['DateTime']['input']>;
  error_message?: InputMaybe<Scalars['String']['input']>;
  execution_logging?: InputMaybe<Scalars['Boolean']['input']>;
  hibp_allowed_count?: InputMaybe<Scalars['Int']['input']>;
  last_updated?: InputMaybe<Scalars['DateTime']['input']>;
  length_min?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  password_field?: InputMaybe<Scalars['String']['input']>;
  policy_uuid?: InputMaybe<Scalars['UUID']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  symbol_charset?: InputMaybe<Scalars['String']['input']>;
  zxcvbn_score_threshold?: InputMaybe<Scalars['Int']['input']>;
};


export type Querypolicies_password_retrieveArgs = {
  policy_uuid: Scalars['UUID']['input'];
};


export type Querypolicies_password_used_by_listArgs = {
  policy_uuid: Scalars['UUID']['input'];
};


export type Querypolicies_password_expiry_listArgs = {
  created?: InputMaybe<Scalars['DateTime']['input']>;
  days?: InputMaybe<Scalars['Int']['input']>;
  deny_only?: InputMaybe<Scalars['Boolean']['input']>;
  execution_logging?: InputMaybe<Scalars['Boolean']['input']>;
  last_updated?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  policy_uuid?: InputMaybe<Scalars['UUID']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Querypolicies_password_expiry_retrieveArgs = {
  policy_uuid: Scalars['UUID']['input'];
};


export type Querypolicies_password_expiry_used_by_listArgs = {
  policy_uuid: Scalars['UUID']['input'];
};


export type Querypolicies_reputation_listArgs = {
  check_ip?: InputMaybe<Scalars['Boolean']['input']>;
  check_username?: InputMaybe<Scalars['Boolean']['input']>;
  created?: InputMaybe<Scalars['DateTime']['input']>;
  execution_logging?: InputMaybe<Scalars['Boolean']['input']>;
  last_updated?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  policy_uuid?: InputMaybe<Scalars['UUID']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  threshold?: InputMaybe<Scalars['Int']['input']>;
};


export type Querypolicies_reputation_retrieveArgs = {
  policy_uuid: Scalars['UUID']['input'];
};


export type Querypolicies_reputation_used_by_listArgs = {
  policy_uuid: Scalars['UUID']['input'];
};


export type Querypolicies_reputation_scores_listArgs = {
  identifier?: InputMaybe<Scalars['String']['input']>;
  ip?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Querypolicies_reputation_scores_retrieveArgs = {
  reputation_uuid: Scalars['UUID']['input'];
};


export type Querypolicies_reputation_scores_used_by_listArgs = {
  reputation_uuid: Scalars['UUID']['input'];
};


export type Querypropertymappings_all_listArgs = {
  managed__isnull?: InputMaybe<Scalars['Boolean']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Querypropertymappings_all_retrieveArgs = {
  pm_uuid: Scalars['UUID']['input'];
};


export type Querypropertymappings_all_used_by_listArgs = {
  pm_uuid: Scalars['UUID']['input'];
};


export type Querypropertymappings_ldap_listArgs = {
  expression?: InputMaybe<Scalars['String']['input']>;
  managed?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  object_field?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  pm_uuid?: InputMaybe<Scalars['UUID']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Querypropertymappings_ldap_retrieveArgs = {
  pm_uuid: Scalars['UUID']['input'];
};


export type Querypropertymappings_ldap_used_by_listArgs = {
  pm_uuid: Scalars['UUID']['input'];
};


export type Querypropertymappings_notification_listArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Querypropertymappings_notification_retrieveArgs = {
  pm_uuid: Scalars['UUID']['input'];
};


export type Querypropertymappings_notification_used_by_listArgs = {
  pm_uuid: Scalars['UUID']['input'];
};


export type Querypropertymappings_rac_listArgs = {
  managed?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Querypropertymappings_rac_retrieveArgs = {
  pm_uuid: Scalars['UUID']['input'];
};


export type Querypropertymappings_rac_used_by_listArgs = {
  pm_uuid: Scalars['UUID']['input'];
};


export type Querypropertymappings_saml_listArgs = {
  expression?: InputMaybe<Scalars['String']['input']>;
  friendly_name?: InputMaybe<Scalars['String']['input']>;
  managed?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  pm_uuid?: InputMaybe<Scalars['UUID']['input']>;
  saml_name?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Querypropertymappings_saml_retrieveArgs = {
  pm_uuid: Scalars['UUID']['input'];
};


export type Querypropertymappings_saml_used_by_listArgs = {
  pm_uuid: Scalars['UUID']['input'];
};


export type Querypropertymappings_scim_listArgs = {
  expression?: InputMaybe<Scalars['String']['input']>;
  managed?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  pm_uuid?: InputMaybe<Scalars['UUID']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Querypropertymappings_scim_retrieveArgs = {
  pm_uuid: Scalars['UUID']['input'];
};


export type Querypropertymappings_scim_used_by_listArgs = {
  pm_uuid: Scalars['UUID']['input'];
};


export type Querypropertymappings_scope_listArgs = {
  managed?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  scope_name?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Querypropertymappings_scope_retrieveArgs = {
  pm_uuid: Scalars['UUID']['input'];
};


export type Querypropertymappings_scope_used_by_listArgs = {
  pm_uuid: Scalars['UUID']['input'];
};


export type Queryproviders_all_listArgs = {
  application__isnull?: InputMaybe<Scalars['Boolean']['input']>;
  backchannel_only?: InputMaybe<Scalars['Boolean']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Queryproviders_all_retrieveArgs = {
  id: Scalars['Int']['input'];
};


export type Queryproviders_all_used_by_listArgs = {
  id: Scalars['Int']['input'];
};


export type Queryproviders_ldap_listArgs = {
  application__isnull?: InputMaybe<Scalars['Boolean']['input']>;
  authorization_flow__slug__iexact?: InputMaybe<Scalars['String']['input']>;
  base_dn__iexact?: InputMaybe<Scalars['String']['input']>;
  certificate__kp_uuid__iexact?: InputMaybe<Scalars['UUID']['input']>;
  certificate__name__iexact?: InputMaybe<Scalars['String']['input']>;
  gid_start_number__iexact?: InputMaybe<Scalars['Int']['input']>;
  name__iexact?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  search_group__group_uuid__iexact?: InputMaybe<Scalars['UUID']['input']>;
  search_group__name__iexact?: InputMaybe<Scalars['String']['input']>;
  tls_server_name__iexact?: InputMaybe<Scalars['String']['input']>;
  uid_start_number__iexact?: InputMaybe<Scalars['Int']['input']>;
};


export type Queryproviders_ldap_retrieveArgs = {
  id: Scalars['Int']['input'];
};


export type Queryproviders_ldap_used_by_listArgs = {
  id: Scalars['Int']['input'];
};


export type Queryproviders_oauth2_listArgs = {
  access_code_validity?: InputMaybe<Scalars['String']['input']>;
  access_token_validity?: InputMaybe<Scalars['String']['input']>;
  application?: InputMaybe<Scalars['UUID']['input']>;
  authorization_flow?: InputMaybe<Scalars['UUID']['input']>;
  client_id?: InputMaybe<Scalars['String']['input']>;
  client_type?: InputMaybe<queryInput_providers_oauth2_list_client_type>;
  include_claims_in_id_token?: InputMaybe<Scalars['Boolean']['input']>;
  issuer_mode?: InputMaybe<queryInput_providers_oauth2_list_issuer_mode>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  property_mappings?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  redirect_uris?: InputMaybe<Scalars['String']['input']>;
  refresh_token_validity?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  signing_key?: InputMaybe<Scalars['UUID']['input']>;
  sub_mode?: InputMaybe<queryInput_providers_oauth2_list_sub_mode>;
};


export type Queryproviders_oauth2_retrieveArgs = {
  id: Scalars['Int']['input'];
};


export type Queryproviders_oauth2_preview_user_retrieveArgs = {
  id: Scalars['Int']['input'];
  for_user?: InputMaybe<Scalars['Int']['input']>;
};


export type Queryproviders_oauth2_setup_urls_retrieveArgs = {
  id: Scalars['Int']['input'];
};


export type Queryproviders_oauth2_used_by_listArgs = {
  id: Scalars['Int']['input'];
};


export type Queryproviders_proxy_listArgs = {
  application__isnull?: InputMaybe<Scalars['Boolean']['input']>;
  authorization_flow__slug__iexact?: InputMaybe<Scalars['String']['input']>;
  basic_auth_enabled__iexact?: InputMaybe<Scalars['Boolean']['input']>;
  basic_auth_password_attribute__iexact?: InputMaybe<Scalars['String']['input']>;
  basic_auth_user_attribute__iexact?: InputMaybe<Scalars['String']['input']>;
  certificate__kp_uuid__iexact?: InputMaybe<Scalars['UUID']['input']>;
  certificate__name__iexact?: InputMaybe<Scalars['String']['input']>;
  cookie_domain__iexact?: InputMaybe<Scalars['String']['input']>;
  external_host__iexact?: InputMaybe<Scalars['String']['input']>;
  internal_host__iexact?: InputMaybe<Scalars['String']['input']>;
  internal_host_ssl_validation__iexact?: InputMaybe<Scalars['Boolean']['input']>;
  mode__iexact?: InputMaybe<Scalars['String']['input']>;
  name__iexact?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  property_mappings__iexact?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  redirect_uris__iexact?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip_path_regex__iexact?: InputMaybe<Scalars['String']['input']>;
};


export type Queryproviders_proxy_retrieveArgs = {
  id: Scalars['Int']['input'];
};


export type Queryproviders_proxy_used_by_listArgs = {
  id: Scalars['Int']['input'];
};


export type Queryproviders_rac_listArgs = {
  application__isnull?: InputMaybe<Scalars['Boolean']['input']>;
  name__iexact?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Queryproviders_rac_retrieveArgs = {
  id: Scalars['Int']['input'];
};


export type Queryproviders_rac_used_by_listArgs = {
  id: Scalars['Int']['input'];
};


export type Queryproviders_radius_listArgs = {
  application__isnull?: InputMaybe<Scalars['Boolean']['input']>;
  authorization_flow__slug__iexact?: InputMaybe<Scalars['String']['input']>;
  client_networks__iexact?: InputMaybe<Scalars['String']['input']>;
  name__iexact?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Queryproviders_radius_retrieveArgs = {
  id: Scalars['Int']['input'];
};


export type Queryproviders_radius_used_by_listArgs = {
  id: Scalars['Int']['input'];
};


export type Queryproviders_saml_listArgs = {
  acs_url?: InputMaybe<Scalars['String']['input']>;
  assertion_valid_not_before?: InputMaybe<Scalars['String']['input']>;
  assertion_valid_not_on_or_after?: InputMaybe<Scalars['String']['input']>;
  audience?: InputMaybe<Scalars['String']['input']>;
  authentication_flow?: InputMaybe<Scalars['UUID']['input']>;
  authorization_flow?: InputMaybe<Scalars['UUID']['input']>;
  backchannel_application?: InputMaybe<Scalars['UUID']['input']>;
  default_relay_state?: InputMaybe<Scalars['String']['input']>;
  digest_algorithm?: InputMaybe<queryInput_providers_saml_list_digest_algorithm>;
  is_backchannel?: InputMaybe<Scalars['Boolean']['input']>;
  issuer?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_id_mapping?: InputMaybe<Scalars['UUID']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  property_mappings?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  session_valid_not_on_or_after?: InputMaybe<Scalars['String']['input']>;
  signature_algorithm?: InputMaybe<queryInput_providers_saml_list_signature_algorithm>;
  signing_kp?: InputMaybe<Scalars['UUID']['input']>;
  sp_binding?: InputMaybe<queryInput_providers_saml_list_sp_binding>;
  verification_kp?: InputMaybe<Scalars['UUID']['input']>;
};


export type Queryproviders_saml_retrieveArgs = {
  id: Scalars['Int']['input'];
};


export type Queryproviders_saml_metadata_retrieveArgs = {
  id: Scalars['Int']['input'];
  download?: InputMaybe<Scalars['Boolean']['input']>;
  force_binding?: InputMaybe<queryInput_providers_saml_metadata_retrieve_force_binding>;
};


export type Queryproviders_saml_preview_user_retrieveArgs = {
  id: Scalars['Int']['input'];
  for_user?: InputMaybe<Scalars['Int']['input']>;
};


export type Queryproviders_saml_used_by_listArgs = {
  id: Scalars['Int']['input'];
};


export type Queryproviders_scim_listArgs = {
  exclude_users_service_account?: InputMaybe<Scalars['Boolean']['input']>;
  filter_group?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};


export type Queryproviders_scim_retrieveArgs = {
  id: Scalars['Int']['input'];
};


export type Queryproviders_scim_sync_status_retrieveArgs = {
  id: Scalars['Int']['input'];
};


export type Queryproviders_scim_used_by_listArgs = {
  id: Scalars['Int']['input'];
};


export type Queryrac_connection_tokens_listArgs = {
  endpoint?: InputMaybe<Scalars['UUID']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  provider?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  session__user?: InputMaybe<Scalars['Int']['input']>;
};


export type Queryrac_connection_tokens_retrieveArgs = {
  connection_token_uuid: Scalars['UUID']['input'];
};


export type Queryrac_connection_tokens_used_by_listArgs = {
  connection_token_uuid: Scalars['UUID']['input'];
};


export type Queryrac_endpoints_listArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  provider?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  superuser_full_list?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Queryrac_endpoints_retrieveArgs = {
  pbm_uuid: Scalars['UUID']['input'];
};


export type Queryrac_endpoints_used_by_listArgs = {
  pbm_uuid: Scalars['UUID']['input'];
};


export type Queryrbac_permissions_listArgs = {
  codename?: InputMaybe<Scalars['String']['input']>;
  content_type__app_label?: InputMaybe<Scalars['String']['input']>;
  content_type__model?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['Int']['input']>;
};


export type Queryrbac_permissions_retrieveArgs = {
  id: Scalars['Int']['input'];
};


export type Queryrbac_permissions_assigned_by_roles_listArgs = {
  model: queryInput_rbac_permissions_assigned_by_roles_list_model;
  object_pk?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Queryrbac_permissions_assigned_by_users_listArgs = {
  model: queryInput_rbac_permissions_assigned_by_users_list_model;
  object_pk?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Queryrbac_permissions_roles_listArgs = {
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  uuid: Scalars['UUID']['input'];
};


export type Queryrbac_permissions_users_listArgs = {
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  user_id: Scalars['Int']['input'];
};


export type Queryrbac_roles_listArgs = {
  group__name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Queryrbac_roles_retrieveArgs = {
  uuid: Scalars['UUID']['input'];
};


export type Queryrbac_roles_used_by_listArgs = {
  uuid: Scalars['UUID']['input'];
};


export type Queryschema_retrieveArgs = {
  format?: InputMaybe<queryInput_schema_retrieve_format>;
  lang?: InputMaybe<queryInput_schema_retrieve_lang>;
};


export type Querysources_all_listArgs = {
  managed?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type Querysources_all_retrieveArgs = {
  slug: Scalars['String']['input'];
};


export type Querysources_all_used_by_listArgs = {
  slug: Scalars['String']['input'];
};


export type Querysources_ldap_listArgs = {
  additional_group_dn?: InputMaybe<Scalars['String']['input']>;
  additional_user_dn?: InputMaybe<Scalars['String']['input']>;
  base_dn?: InputMaybe<Scalars['String']['input']>;
  bind_cn?: InputMaybe<Scalars['String']['input']>;
  client_certificate?: InputMaybe<Scalars['UUID']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  group_membership_field?: InputMaybe<Scalars['String']['input']>;
  group_object_filter?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  object_uniqueness_field?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  password_login_update_internal_password?: InputMaybe<Scalars['Boolean']['input']>;
  peer_certificate?: InputMaybe<Scalars['UUID']['input']>;
  property_mappings?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  property_mappings_group?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  server_uri?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sni?: InputMaybe<Scalars['Boolean']['input']>;
  start_tls?: InputMaybe<Scalars['Boolean']['input']>;
  sync_groups?: InputMaybe<Scalars['Boolean']['input']>;
  sync_parent_group?: InputMaybe<Scalars['UUID']['input']>;
  sync_users?: InputMaybe<Scalars['Boolean']['input']>;
  sync_users_password?: InputMaybe<Scalars['Boolean']['input']>;
  user_object_filter?: InputMaybe<Scalars['String']['input']>;
};


export type Querysources_ldap_retrieveArgs = {
  slug: Scalars['String']['input'];
};


export type Querysources_ldap_debug_retrieveArgs = {
  slug: Scalars['String']['input'];
};


export type Querysources_ldap_sync_status_retrieveArgs = {
  slug: Scalars['String']['input'];
};


export type Querysources_ldap_used_by_listArgs = {
  slug: Scalars['String']['input'];
};


export type Querysources_oauth_listArgs = {
  access_token_url?: InputMaybe<Scalars['String']['input']>;
  additional_scopes?: InputMaybe<Scalars['String']['input']>;
  authentication_flow?: InputMaybe<Scalars['UUID']['input']>;
  authorization_url?: InputMaybe<Scalars['String']['input']>;
  consumer_key?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  enrollment_flow?: InputMaybe<Scalars['UUID']['input']>;
  has_jwks?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  policy_engine_mode?: InputMaybe<queryInput_sources_oauth_list_policy_engine_mode>;
  profile_url?: InputMaybe<Scalars['String']['input']>;
  provider_type?: InputMaybe<Scalars['String']['input']>;
  request_token_url?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  user_matching_mode?: InputMaybe<queryInput_sources_oauth_list_user_matching_mode>;
};


export type Querysources_oauth_retrieveArgs = {
  slug: Scalars['String']['input'];
};


export type Querysources_oauth_used_by_listArgs = {
  slug: Scalars['String']['input'];
};


export type Querysources_oauth_source_types_listArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type Querysources_plex_listArgs = {
  allow_friends?: InputMaybe<Scalars['Boolean']['input']>;
  authentication_flow?: InputMaybe<Scalars['UUID']['input']>;
  client_id?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  enrollment_flow?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  policy_engine_mode?: InputMaybe<queryInput_sources_plex_list_policy_engine_mode>;
  search?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  user_matching_mode?: InputMaybe<queryInput_sources_plex_list_user_matching_mode>;
};


export type Querysources_plex_retrieveArgs = {
  slug: Scalars['String']['input'];
};


export type Querysources_plex_used_by_listArgs = {
  slug: Scalars['String']['input'];
};


export type Querysources_saml_listArgs = {
  allow_idp_initiated?: InputMaybe<Scalars['Boolean']['input']>;
  authentication_flow?: InputMaybe<Scalars['UUID']['input']>;
  binding_type?: InputMaybe<queryInput_sources_saml_list_binding_type>;
  digest_algorithm?: InputMaybe<queryInput_sources_saml_list_digest_algorithm>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  enrollment_flow?: InputMaybe<Scalars['UUID']['input']>;
  issuer?: InputMaybe<Scalars['String']['input']>;
  managed?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_id_policy?: InputMaybe<queryInput_sources_saml_list_name_id_policy>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  policy_engine_mode?: InputMaybe<queryInput_sources_saml_list_policy_engine_mode>;
  pre_authentication_flow?: InputMaybe<Scalars['UUID']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  signature_algorithm?: InputMaybe<queryInput_sources_saml_list_signature_algorithm>;
  signing_kp?: InputMaybe<Scalars['UUID']['input']>;
  slo_url?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sso_url?: InputMaybe<Scalars['String']['input']>;
  temporary_user_delete_after?: InputMaybe<Scalars['String']['input']>;
  user_matching_mode?: InputMaybe<queryInput_sources_saml_list_user_matching_mode>;
  verification_kp?: InputMaybe<Scalars['UUID']['input']>;
};


export type Querysources_saml_retrieveArgs = {
  slug: Scalars['String']['input'];
};


export type Querysources_saml_metadata_retrieveArgs = {
  slug: Scalars['String']['input'];
};


export type Querysources_saml_used_by_listArgs = {
  slug: Scalars['String']['input'];
};


export type Querysources_scim_listArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type Querysources_scim_retrieveArgs = {
  slug: Scalars['String']['input'];
};


export type Querysources_scim_used_by_listArgs = {
  slug: Scalars['String']['input'];
};


export type Querysources_scim_groups_listArgs = {
  group__group_uuid?: InputMaybe<Scalars['UUID']['input']>;
  group__name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  source__slug?: InputMaybe<Scalars['String']['input']>;
};


export type Querysources_scim_groups_retrieveArgs = {
  id: Scalars['String']['input'];
};


export type Querysources_scim_groups_used_by_listArgs = {
  id: Scalars['String']['input'];
};


export type Querysources_scim_users_listArgs = {
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  source__slug?: InputMaybe<Scalars['String']['input']>;
  user__id?: InputMaybe<Scalars['Int']['input']>;
  user__username?: InputMaybe<Scalars['String']['input']>;
};


export type Querysources_scim_users_retrieveArgs = {
  id: Scalars['String']['input'];
};


export type Querysources_scim_users_used_by_listArgs = {
  id: Scalars['String']['input'];
};


export type Querysources_user_connections_all_listArgs = {
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['Int']['input']>;
};


export type Querysources_user_connections_all_retrieveArgs = {
  id: Scalars['Int']['input'];
};


export type Querysources_user_connections_all_used_by_listArgs = {
  id: Scalars['Int']['input'];
};


export type Querysources_user_connections_oauth_listArgs = {
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  source__slug?: InputMaybe<Scalars['String']['input']>;
};


export type Querysources_user_connections_oauth_retrieveArgs = {
  id: Scalars['Int']['input'];
};


export type Querysources_user_connections_oauth_used_by_listArgs = {
  id: Scalars['Int']['input'];
};


export type Querysources_user_connections_plex_listArgs = {
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  source__slug?: InputMaybe<Scalars['String']['input']>;
};


export type Querysources_user_connections_plex_retrieveArgs = {
  id: Scalars['Int']['input'];
};


export type Querysources_user_connections_plex_used_by_listArgs = {
  id: Scalars['Int']['input'];
};


export type Querysources_user_connections_saml_listArgs = {
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  source__slug?: InputMaybe<Scalars['String']['input']>;
};


export type Querysources_user_connections_saml_retrieveArgs = {
  id: Scalars['Int']['input'];
};


export type Querysources_user_connections_saml_used_by_listArgs = {
  id: Scalars['Int']['input'];
};


export type Querystages_all_listArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Querystages_all_retrieveArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_all_used_by_listArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_authenticator_duo_listArgs = {
  api_hostname?: InputMaybe<Scalars['String']['input']>;
  client_id?: InputMaybe<Scalars['String']['input']>;
  configure_flow?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Querystages_authenticator_duo_retrieveArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_authenticator_duo_used_by_listArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_authenticator_sms_listArgs = {
  account_sid?: InputMaybe<Scalars['String']['input']>;
  auth?: InputMaybe<Scalars['String']['input']>;
  auth_password?: InputMaybe<Scalars['String']['input']>;
  auth_type?: InputMaybe<queryInput_stages_authenticator_sms_list_auth_type>;
  configure_flow?: InputMaybe<Scalars['UUID']['input']>;
  friendly_name?: InputMaybe<Scalars['String']['input']>;
  from_number?: InputMaybe<Scalars['String']['input']>;
  mapping?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  provider?: InputMaybe<queryInput_stages_authenticator_sms_list_provider>;
  search?: InputMaybe<Scalars['String']['input']>;
  stage_uuid?: InputMaybe<Scalars['UUID']['input']>;
  verify_only?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Querystages_authenticator_sms_retrieveArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_authenticator_sms_used_by_listArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_authenticator_static_listArgs = {
  configure_flow?: InputMaybe<Scalars['UUID']['input']>;
  friendly_name?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stage_uuid?: InputMaybe<Scalars['UUID']['input']>;
  token_count?: InputMaybe<Scalars['Int']['input']>;
  token_length?: InputMaybe<Scalars['Int']['input']>;
};


export type Querystages_authenticator_static_retrieveArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_authenticator_static_used_by_listArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_authenticator_totp_listArgs = {
  configure_flow?: InputMaybe<Scalars['UUID']['input']>;
  digits?: InputMaybe<queryInput_stages_authenticator_totp_list_digits>;
  friendly_name?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stage_uuid?: InputMaybe<Scalars['UUID']['input']>;
};


export type Querystages_authenticator_totp_retrieveArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_authenticator_totp_used_by_listArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_authenticator_validate_listArgs = {
  configuration_stages?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  not_configured_action?: InputMaybe<queryInput_stages_authenticator_validate_list_not_configured_action>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Querystages_authenticator_validate_retrieveArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_authenticator_validate_used_by_listArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_authenticator_webauthn_listArgs = {
  authenticator_attachment?: InputMaybe<queryInput_stages_authenticator_webauthn_list_authenticator_attachment>;
  configure_flow?: InputMaybe<Scalars['UUID']['input']>;
  device_type_restrictions?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  friendly_name?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  resident_key_requirement?: InputMaybe<queryInput_stages_authenticator_webauthn_list_resident_key_requirement>;
  search?: InputMaybe<Scalars['String']['input']>;
  stage_uuid?: InputMaybe<Scalars['UUID']['input']>;
  user_verification?: InputMaybe<queryInput_stages_authenticator_webauthn_list_user_verification>;
};


export type Querystages_authenticator_webauthn_retrieveArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_authenticator_webauthn_used_by_listArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_authenticator_webauthn_device_types_listArgs = {
  aaguid?: InputMaybe<Scalars['UUID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Querystages_authenticator_webauthn_device_types_retrieveArgs = {
  aaguid: Scalars['UUID']['input'];
};


export type Querystages_captcha_listArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  public_key?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Querystages_captcha_retrieveArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_captcha_used_by_listArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_consent_listArgs = {
  consent_expire_in?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<queryInput_stages_consent_list_mode>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stage_uuid?: InputMaybe<Scalars['UUID']['input']>;
};


export type Querystages_consent_retrieveArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_consent_used_by_listArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_deny_listArgs = {
  deny_message?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stage_uuid?: InputMaybe<Scalars['UUID']['input']>;
};


export type Querystages_deny_retrieveArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_deny_used_by_listArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_dummy_listArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stage_uuid?: InputMaybe<Scalars['UUID']['input']>;
  throw_error?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Querystages_dummy_retrieveArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_dummy_used_by_listArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_email_listArgs = {
  activate_user_on_success?: InputMaybe<Scalars['Boolean']['input']>;
  from_address?: InputMaybe<Scalars['String']['input']>;
  host?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  port?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  template?: InputMaybe<Scalars['String']['input']>;
  timeout?: InputMaybe<Scalars['Int']['input']>;
  token_expiry?: InputMaybe<Scalars['Int']['input']>;
  use_global_settings?: InputMaybe<Scalars['Boolean']['input']>;
  use_ssl?: InputMaybe<Scalars['Boolean']['input']>;
  use_tls?: InputMaybe<Scalars['Boolean']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


export type Querystages_email_retrieveArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_email_used_by_listArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_identification_listArgs = {
  case_insensitive_matching?: InputMaybe<Scalars['Boolean']['input']>;
  enrollment_flow?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  password_stage?: InputMaybe<Scalars['UUID']['input']>;
  passwordless_flow?: InputMaybe<Scalars['UUID']['input']>;
  recovery_flow?: InputMaybe<Scalars['UUID']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  show_matched_user?: InputMaybe<Scalars['Boolean']['input']>;
  show_source_labels?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Querystages_identification_retrieveArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_identification_used_by_listArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_invitation_invitations_listArgs = {
  created_by__username?: InputMaybe<Scalars['String']['input']>;
  expires?: InputMaybe<Scalars['DateTime']['input']>;
  flow__slug?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Querystages_invitation_invitations_retrieveArgs = {
  invite_uuid: Scalars['UUID']['input'];
};


export type Querystages_invitation_invitations_used_by_listArgs = {
  invite_uuid: Scalars['UUID']['input'];
};


export type Querystages_invitation_stages_listArgs = {
  continue_flow_without_invitation?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  no_flows?: InputMaybe<Scalars['Boolean']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stage_uuid?: InputMaybe<Scalars['UUID']['input']>;
};


export type Querystages_invitation_stages_retrieveArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_invitation_stages_used_by_listArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_password_listArgs = {
  configure_flow?: InputMaybe<Scalars['UUID']['input']>;
  failed_attempts_before_cancel?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Querystages_password_retrieveArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_password_used_by_listArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_prompt_prompts_listArgs = {
  field_key?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  placeholder?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<queryInput_stages_prompt_prompts_list_type>;
};


export type Querystages_prompt_prompts_retrieveArgs = {
  prompt_uuid: Scalars['UUID']['input'];
};


export type Querystages_prompt_prompts_used_by_listArgs = {
  prompt_uuid: Scalars['UUID']['input'];
};


export type Querystages_prompt_stages_listArgs = {
  fields?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stage_uuid?: InputMaybe<Scalars['UUID']['input']>;
  validation_policies?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
};


export type Querystages_prompt_stages_retrieveArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_prompt_stages_used_by_listArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_source_listArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  resume_timeout?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['UUID']['input']>;
  stage_uuid?: InputMaybe<Scalars['UUID']['input']>;
};


export type Querystages_source_retrieveArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_source_used_by_listArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_user_delete_listArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stage_uuid?: InputMaybe<Scalars['UUID']['input']>;
};


export type Querystages_user_delete_retrieveArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_user_delete_used_by_listArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_user_login_listArgs = {
  geoip_binding?: InputMaybe<queryInput_stages_user_login_list_geoip_binding>;
  name?: InputMaybe<Scalars['String']['input']>;
  network_binding?: InputMaybe<queryInput_stages_user_login_list_network_binding>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  remember_me_offset?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  session_duration?: InputMaybe<Scalars['String']['input']>;
  stage_uuid?: InputMaybe<Scalars['UUID']['input']>;
  terminate_other_sessions?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Querystages_user_login_retrieveArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_user_login_used_by_listArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_user_logout_listArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stage_uuid?: InputMaybe<Scalars['UUID']['input']>;
};


export type Querystages_user_logout_retrieveArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_user_logout_used_by_listArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_user_write_listArgs = {
  create_users_as_inactive?: InputMaybe<Scalars['Boolean']['input']>;
  create_users_group?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordering?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stage_uuid?: InputMaybe<Scalars['UUID']['input']>;
  user_creation_mode?: InputMaybe<queryInput_stages_user_write_list_user_creation_mode>;
  user_path_template?: InputMaybe<Scalars['String']['input']>;
  user_type?: InputMaybe<queryInput_stages_user_write_list_user_type>;
};


export type Querystages_user_write_retrieveArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Querystages_user_write_used_by_listArgs = {
  stage_uuid: Scalars['UUID']['input'];
};

export type admin_apps_list_response = App | ValidationError | GenericError;

/** Serialize Application info */
export type App = {
  name: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

/** Validation Error */
export type ValidationError = {
  non_field_errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  code?: Maybe<Scalars['String']['output']>;
  additionalProperties?: Maybe<Scalars['JSON']['output']>;
};

/** Generic API Error */
export type GenericError = {
  detail: Scalars['String']['output'];
  code?: Maybe<Scalars['String']['output']>;
};

export type admin_metrics_retrieve_response = LoginMetrics | ValidationError | GenericError;

/** Login Metrics per 1h */
export type LoginMetrics = {
  logins: Array<Maybe<Coordinate>>;
  logins_failed: Array<Maybe<Coordinate>>;
  authorizations: Array<Maybe<Coordinate>>;
};

/** Coordinates for diagrams */
export type Coordinate = {
  x_cord: Scalars['Int']['output'];
  y_cord: Scalars['Int']['output'];
};

export type admin_models_list_response = App | ValidationError | GenericError;

export type admin_settings_retrieve_response = Settings | ValidationError | GenericError;

/** Settings Serializer */
export type Settings = {
  /** Configure how authentik should show avatars for users. */
  avatars?: Maybe<Scalars['String']['output']>;
  /** Enable the ability for users to change their name. */
  default_user_change_name?: Maybe<Scalars['Boolean']['output']>;
  /** Enable the ability for users to change their email address. */
  default_user_change_email?: Maybe<Scalars['Boolean']['output']>;
  /** Enable the ability for users to change their username. */
  default_user_change_username?: Maybe<Scalars['Boolean']['output']>;
  /** Events will be deleted after this duration.(Format: weeks=3;days=2;hours=3,seconds=2). */
  event_retention?: Maybe<Scalars['String']['output']>;
  /** The option configures the footer links on the flow executor pages. */
  footer_links?: Maybe<Scalars['JSON']['output']>;
  /** When enabled, all the events caused by a user will be deleted upon the user's deletion. */
  gdpr_compliance?: Maybe<Scalars['Boolean']['output']>;
  /** Globally enable/disable impersonation. */
  impersonation?: Maybe<Scalars['Boolean']['output']>;
  /** Default token duration */
  default_token_duration?: Maybe<Scalars['String']['output']>;
  /** Default token length */
  default_token_length?: Maybe<Scalars['PositiveInt']['output']>;
};

export type admin_system_retrieve_response = SystemInfo | ValidationError | GenericError;

/** Get system information. */
export type SystemInfo = {
  /** Get HTTP Request headers */
  http_headers: Scalars['JSON']['output'];
  /** Get HTTP host */
  http_host: Scalars['String']['output'];
  /** Get HTTP Secure flag */
  http_is_secure: Scalars['Boolean']['output'];
  runtime: query_admin_system_retrieve_oneOf_0_runtime;
  /** Currently active brand */
  brand: Scalars['String']['output'];
  /** Current server time */
  server_time: Scalars['DateTime']['output'];
  /** Whether the embedded outpost is disabled */
  embedded_outpost_disabled: Scalars['Boolean']['output'];
  /** Get the FQDN configured on the embedded outpost */
  embedded_outpost_host: Scalars['String']['output'];
};

/** Get versions */
export type query_admin_system_retrieve_oneOf_0_runtime = {
  python_version: Scalars['String']['output'];
  gunicorn_version: Scalars['String']['output'];
  environment: Scalars['String']['output'];
  architecture: Scalars['String']['output'];
  platform: Scalars['String']['output'];
  uname: Scalars['String']['output'];
};

export type admin_version_retrieve_response = Version | ValidationError | GenericError;

/** Get running and latest version. */
export type Version = {
  /** Get current version */
  version_current: Scalars['String']['output'];
  /** Get latest version from cache */
  version_latest: Scalars['String']['output'];
  /** Check if latest version is valid */
  version_latest_valid: Scalars['Boolean']['output'];
  /** Get build hash, if version is not latest or released */
  build_hash: Scalars['String']['output'];
  /** Check if we're running the latest version */
  outdated: Scalars['Boolean']['output'];
};

export type admin_workers_retrieve_response = Workers | ValidationError | GenericError;

export type Workers = {
  count: Scalars['Int']['output'];
};

export type authenticators_admin_all_list_response = Device | ValidationError | GenericError;

/** Serializer for Duo authenticator devices */
export type Device = {
  /** Return object's verbose_name */
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  pk: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** Get type of device */
  type: Scalars['String']['output'];
  confirmed: Scalars['Boolean']['output'];
};

export type authenticators_admin_duo_list_response = PaginatedDuoDeviceList | ValidationError | GenericError;

export type PaginatedDuoDeviceList = {
  pagination: Pagination;
  results: Array<Maybe<DuoDevice>>;
};

export type Pagination = {
  next: Scalars['Float']['output'];
  previous: Scalars['Float']['output'];
  count: Scalars['Float']['output'];
  current: Scalars['Float']['output'];
  total_pages: Scalars['Float']['output'];
  start_index: Scalars['Float']['output'];
  end_index: Scalars['Float']['output'];
};

/** Serializer for Duo authenticator devices */
export type DuoDevice = {
  pk: Scalars['Int']['output'];
  /** The human-readable name of this device. */
  name: Scalars['query_authenticators_admin_duo_list_oneOf_0_results_items_name']['output'];
};

export type authenticators_admin_duo_retrieve_response = DuoDevice | ValidationError | GenericError;

export type authenticators_admin_sms_list_response = PaginatedSMSDeviceList | ValidationError | GenericError;

export type PaginatedSMSDeviceList = {
  pagination: Pagination;
  results: Array<Maybe<SMSDevice>>;
};

/** Serializer for sms authenticator devices */
export type SMSDevice = {
  /** The human-readable name of this device. */
  name: Scalars['query_authenticators_admin_sms_list_oneOf_0_results_items_name']['output'];
  pk: Scalars['Int']['output'];
  phone_number: Scalars['String']['output'];
};

export type authenticators_admin_sms_retrieve_response = SMSDevice | ValidationError | GenericError;

export type authenticators_admin_static_list_response = PaginatedStaticDeviceList | ValidationError | GenericError;

export type PaginatedStaticDeviceList = {
  pagination: Pagination;
  results: Array<Maybe<StaticDevice>>;
};

/** Serializer for static authenticator devices */
export type StaticDevice = {
  /** The human-readable name of this device. */
  name: Scalars['query_authenticators_admin_static_list_oneOf_0_results_items_name']['output'];
  token_set: Array<Maybe<StaticDeviceToken>>;
  pk: Scalars['Int']['output'];
};

/** Serializer for static device's tokens */
export type StaticDeviceToken = {
  token: Scalars['query_authenticators_admin_static_list_oneOf_0_results_items_token_set_items_token']['output'];
};

export type authenticators_admin_static_retrieve_response = StaticDevice | ValidationError | GenericError;

export type authenticators_admin_totp_list_response = PaginatedTOTPDeviceList | ValidationError | GenericError;

export type PaginatedTOTPDeviceList = {
  pagination: Pagination;
  results: Array<Maybe<TOTPDevice>>;
};

/** Serializer for totp authenticator devices */
export type TOTPDevice = {
  /** The human-readable name of this device. */
  name: Scalars['query_authenticators_admin_totp_list_oneOf_0_results_items_name']['output'];
  pk: Scalars['Int']['output'];
};

export type authenticators_admin_totp_retrieve_response = TOTPDevice | ValidationError | GenericError;

export type authenticators_admin_webauthn_list_response = PaginatedWebAuthnDeviceList | ValidationError | GenericError;

export type PaginatedWebAuthnDeviceList = {
  pagination: Pagination;
  results: Array<Maybe<WebAuthnDevice>>;
};

/** Serializer for WebAuthn authenticator devices */
export type WebAuthnDevice = {
  pk: Scalars['Int']['output'];
  name: Scalars['query_authenticators_admin_webauthn_list_oneOf_0_results_items_name']['output'];
  created_on: Scalars['DateTime']['output'];
  device_type: WebAuthnDeviceType;
  aaguid: Scalars['String']['output'];
};

/** WebAuthnDeviceType Serializer */
export type WebAuthnDeviceType = {
  aaguid: Scalars['UUID']['output'];
  description: Scalars['String']['output'];
};

export type authenticators_admin_webauthn_retrieve_response = WebAuthnDevice | ValidationError | GenericError;

export type authenticators_all_list_response = Device | ValidationError | GenericError;

export type authenticators_duo_list_response = PaginatedDuoDeviceList | ValidationError | GenericError;

export type authenticators_duo_retrieve_response = DuoDevice | ValidationError | GenericError;

export type authenticators_duo_used_by_list_response = UsedBy | ValidationError | GenericError;

/** A list of all objects referencing the queried object */
export type UsedBy = {
  app: Scalars['String']['output'];
  model_name: Scalars['String']['output'];
  pk: Scalars['String']['output'];
  name: Scalars['String']['output'];
  action: UsedByActionEnum;
};

export type UsedByActionEnum =
  | 'cascade'
  | 'cascade_many'
  | 'set_null'
  | 'set_default';

export type authenticators_sms_list_response = PaginatedSMSDeviceList | ValidationError | GenericError;

export type authenticators_sms_retrieve_response = SMSDevice | ValidationError | GenericError;

export type authenticators_sms_used_by_list_response = UsedBy | ValidationError | GenericError;

export type authenticators_static_list_response = PaginatedStaticDeviceList | ValidationError | GenericError;

export type authenticators_static_retrieve_response = StaticDevice | ValidationError | GenericError;

export type authenticators_static_used_by_list_response = UsedBy | ValidationError | GenericError;

export type authenticators_totp_list_response = PaginatedTOTPDeviceList | ValidationError | GenericError;

export type authenticators_totp_retrieve_response = TOTPDevice | ValidationError | GenericError;

export type authenticators_totp_used_by_list_response = UsedBy | ValidationError | GenericError;

export type authenticators_webauthn_list_response = PaginatedWebAuthnDeviceList | ValidationError | GenericError;

export type authenticators_webauthn_retrieve_response = WebAuthnDevice | ValidationError | GenericError;

export type authenticators_webauthn_used_by_list_response = UsedBy | ValidationError | GenericError;

export type core_applications_list_response = PaginatedApplicationList | ValidationError | GenericError;

export type PaginatedApplicationList = {
  pagination: Pagination;
  results: Array<Maybe<Application>>;
};

/** Application Serializer */
export type Application = {
  pk: Scalars['UUID']['output'];
  /** Application's display Name. */
  name: Scalars['String']['output'];
  slug: Scalars['query_core_applications_list_oneOf_0_results_items_slug']['output'];
  provider?: Maybe<Scalars['Int']['output']>;
  provider_obj: Provider;
  backchannel_providers?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  backchannel_providers_obj: Array<Maybe<Provider>>;
  /** Allow formatting of launch URL */
  launch_url?: Maybe<Scalars['String']['output']>;
  /** Open launch URL in a new browser tab or window. */
  open_in_new_tab?: Maybe<Scalars['Boolean']['output']>;
  meta_launch_url?: Maybe<Scalars['URL']['output']>;
  /**
   * Get the URL to the App Icon image. If the name is /static or starts with http
   * it is returned as-is
   */
  meta_icon?: Maybe<Scalars['String']['output']>;
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_publisher?: Maybe<Scalars['String']['output']>;
  policy_engine_mode?: Maybe<PolicyEngineMode>;
  group?: Maybe<Scalars['String']['output']>;
};

/** Provider Serializer */
export type Provider = {
  pk: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** Flow used for authentication when the associated application is accessed by an un-authenticated user. */
  authentication_flow?: Maybe<Scalars['UUID']['output']>;
  /** Flow used when authorizing this provider. */
  authorization_flow: Scalars['UUID']['output'];
  property_mappings?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Internal application name, used in URLs. */
  assigned_application_slug: Scalars['String']['output'];
  /** Application's display Name. */
  assigned_application_name: Scalars['String']['output'];
  /** Internal application name, used in URLs. */
  assigned_backchannel_application_slug: Scalars['String']['output'];
  /** Application's display Name. */
  assigned_backchannel_application_name: Scalars['String']['output'];
  /** Return object's verbose_name */
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  additionalProperties?: Maybe<Scalars['JSON']['output']>;
};

export type PolicyEngineMode =
  | 'all'
  | 'any';

export type core_applications_retrieve_response = Application | ValidationError | GenericError;

export type core_applications_check_access_retrieve_response = PolicyTestResult | ValidationError | GenericError;

/** result of a policy test */
export type PolicyTestResult = {
  passing: Scalars['Boolean']['output'];
  messages: Array<Maybe<Scalars['String']['output']>>;
  log_messages: Array<Maybe<LogEvent>>;
};

/** Single log message with all context logged. */
export type LogEvent = {
  timestamp: Scalars['DateTime']['output'];
  log_level: LogLevelEnum;
  logger: Scalars['String']['output'];
  event: Scalars['String']['output'];
  attributes: Scalars['JSON']['output'];
};

export type LogLevelEnum =
  | 'critical'
  | 'exception'
  | 'error'
  | 'warn'
  | 'warning'
  | 'info'
  | 'debug'
  | 'notset';

export type core_applications_metrics_list_response = Coordinate | ValidationError | GenericError;

export type core_applications_used_by_list_response = UsedBy | ValidationError | GenericError;

export type core_authenticated_sessions_list_response = PaginatedAuthenticatedSessionList | ValidationError | GenericError;

export type PaginatedAuthenticatedSessionList = {
  pagination: Pagination;
  results: Array<Maybe<AuthenticatedSession>>;
};

/** AuthenticatedSession Serializer */
export type AuthenticatedSession = {
  uuid?: Maybe<Scalars['UUID']['output']>;
  /** Check if session is currently active session */
  current: Scalars['Boolean']['output'];
  user_agent: query_core_authenticated_sessions_list_oneOf_0_results_items_user_agent;
  geo_ip?: Maybe<query_core_authenticated_sessions_list_oneOf_0_results_items_geo_ip>;
  asn?: Maybe<query_core_authenticated_sessions_list_oneOf_0_results_items_asn>;
  user: Scalars['Int']['output'];
  last_ip: Scalars['String']['output'];
  last_user_agent?: Maybe<Scalars['String']['output']>;
  last_used: Scalars['DateTime']['output'];
  expires?: Maybe<Scalars['DateTime']['output']>;
};

/** Get parsed user agent */
export type query_core_authenticated_sessions_list_oneOf_0_results_items_user_agent = {
  device: query_core_authenticated_sessions_list_oneOf_0_results_items_user_agent_device;
  os: query_core_authenticated_sessions_list_oneOf_0_results_items_user_agent_os;
  user_agent: query_core_authenticated_sessions_list_oneOf_0_results_items_user_agent_user_agent;
  string: Scalars['String']['output'];
};

/** User agent device */
export type query_core_authenticated_sessions_list_oneOf_0_results_items_user_agent_device = {
  brand: Scalars['String']['output'];
  family: Scalars['String']['output'];
  model: Scalars['String']['output'];
};

/** User agent os */
export type query_core_authenticated_sessions_list_oneOf_0_results_items_user_agent_os = {
  family: Scalars['String']['output'];
  major: Scalars['String']['output'];
  minor: Scalars['String']['output'];
  patch: Scalars['String']['output'];
  patch_minor: Scalars['String']['output'];
};

/** User agent browser */
export type query_core_authenticated_sessions_list_oneOf_0_results_items_user_agent_user_agent = {
  family: Scalars['String']['output'];
  major: Scalars['String']['output'];
  minor: Scalars['String']['output'];
  patch: Scalars['String']['output'];
};

/** Get GeoIP Data */
export type query_core_authenticated_sessions_list_oneOf_0_results_items_geo_ip = {
  continent: Scalars['String']['output'];
  country: Scalars['String']['output'];
  lat: Scalars['Float']['output'];
  long: Scalars['Float']['output'];
  city: Scalars['String']['output'];
};

/** Get ASN Data */
export type query_core_authenticated_sessions_list_oneOf_0_results_items_asn = {
  asn: Scalars['Int']['output'];
  as_org?: Maybe<Scalars['String']['output']>;
  network?: Maybe<Scalars['String']['output']>;
};

export type core_authenticated_sessions_retrieve_response = AuthenticatedSession | ValidationError | GenericError;

export type core_authenticated_sessions_used_by_list_response = UsedBy | ValidationError | GenericError;

export type core_brands_list_response = PaginatedBrandList | ValidationError | GenericError;

export type PaginatedBrandList = {
  pagination: Pagination;
  results: Array<Maybe<Brand>>;
};

/** Brand Serializer */
export type Brand = {
  brand_uuid: Scalars['UUID']['output'];
  /** Domain that activates this brand. Can be a superset, i.e. `a.b` for `aa.b` and `ba.b` */
  domain: Scalars['String']['output'];
  default?: Maybe<Scalars['Boolean']['output']>;
  branding_title?: Maybe<Scalars['String']['output']>;
  branding_logo?: Maybe<Scalars['String']['output']>;
  branding_favicon?: Maybe<Scalars['String']['output']>;
  flow_authentication?: Maybe<Scalars['UUID']['output']>;
  flow_invalidation?: Maybe<Scalars['UUID']['output']>;
  flow_recovery?: Maybe<Scalars['UUID']['output']>;
  flow_unenrollment?: Maybe<Scalars['UUID']['output']>;
  flow_user_settings?: Maybe<Scalars['UUID']['output']>;
  flow_device_code?: Maybe<Scalars['UUID']['output']>;
  /** Web Certificate used by the authentik Core webserver. */
  web_certificate?: Maybe<Scalars['UUID']['output']>;
  attributes?: Maybe<Scalars['JSON']['output']>;
};

export type core_brands_retrieve_response = Brand | ValidationError | GenericError;

export type core_brands_used_by_list_response = UsedBy | ValidationError | GenericError;

export type core_brands_current_retrieve_response = CurrentBrand | ValidationError | GenericError;

/** Partial brand information for styling */
export type CurrentBrand = {
  matched_domain: Scalars['String']['output'];
  branding_title: Scalars['String']['output'];
  branding_logo: Scalars['String']['output'];
  branding_favicon: Scalars['String']['output'];
  ui_footer_links: Array<Maybe<FooterLink>>;
  ui_theme: UiThemeEnum;
  flow_authentication?: Maybe<Scalars['String']['output']>;
  flow_invalidation?: Maybe<Scalars['String']['output']>;
  flow_recovery?: Maybe<Scalars['String']['output']>;
  flow_unenrollment?: Maybe<Scalars['String']['output']>;
  flow_user_settings?: Maybe<Scalars['String']['output']>;
  flow_device_code?: Maybe<Scalars['String']['output']>;
  default_locale: Scalars['String']['output'];
};

/** Links returned in Config API */
export type FooterLink = {
  href: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type UiThemeEnum =
  | 'automatic'
  | 'light'
  | 'dark';

export type core_groups_list_response = PaginatedGroupList | ValidationError | GenericError;

export type PaginatedGroupList = {
  pagination: Pagination;
  results: Array<Maybe<Group>>;
};

/** Group Serializer */
export type Group = {
  pk: Scalars['UUID']['output'];
  num_pk: Scalars['Int']['output'];
  name: Scalars['query_core_groups_list_oneOf_0_results_items_name']['output'];
  /** Users added to this group will be superusers. */
  is_superuser?: Maybe<Scalars['Boolean']['output']>;
  parent?: Maybe<Scalars['UUID']['output']>;
  parent_name?: Maybe<Scalars['String']['output']>;
  users?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  users_obj?: Maybe<Array<Maybe<GroupMember>>>;
  attributes?: Maybe<Scalars['JSON']['output']>;
  roles?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  roles_obj: Array<Maybe<Role>>;
  additionalProperties?: Maybe<Scalars['JSON']['output']>;
};

/** Stripped down user serializer to show relevant users for groups */
export type GroupMember = {
  pk: Scalars['Int']['output'];
  username: Scalars['query_core_groups_list_oneOf_0_results_items_users_obj_items_username']['output'];
  /** User's display name. */
  name: Scalars['String']['output'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  is_active?: Maybe<Scalars['Boolean']['output']>;
  last_login?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['EmailAddress']['output']>;
  attributes?: Maybe<Scalars['JSON']['output']>;
  uid: Scalars['String']['output'];
  additionalProperties?: Maybe<Scalars['JSON']['output']>;
};

/** Role serializer */
export type Role = {
  pk: Scalars['UUID']['output'];
  name: Scalars['query_core_groups_list_oneOf_0_results_items_roles_obj_items_name']['output'];
};

export type core_groups_retrieve_response = Group | ValidationError | GenericError;

export type core_groups_used_by_list_response = UsedBy | ValidationError | GenericError;

export type core_tokens_list_response = PaginatedTokenList | ValidationError | GenericError;

export type PaginatedTokenList = {
  pagination: Pagination;
  results: Array<Maybe<Token>>;
};

/** Token Serializer */
export type Token = {
  pk: Scalars['UUID']['output'];
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: Maybe<Scalars['String']['output']>;
  identifier: Scalars['query_core_tokens_list_oneOf_0_results_items_identifier']['output'];
  intent?: Maybe<IntentEnum>;
  user?: Maybe<Scalars['Int']['output']>;
  user_obj: User;
  description?: Maybe<Scalars['String']['output']>;
  expires?: Maybe<Scalars['DateTime']['output']>;
  expiring?: Maybe<Scalars['Boolean']['output']>;
  additionalProperties?: Maybe<Scalars['JSON']['output']>;
};

export type IntentEnum =
  | 'verification'
  | 'api'
  | 'recovery'
  | 'app_password';

/** User Serializer */
export type User = {
  pk: Scalars['Int']['output'];
  username: Scalars['query_core_tokens_list_oneOf_0_results_items_user_obj_username']['output'];
  /** User's display name. */
  name: Scalars['String']['output'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  is_active?: Maybe<Scalars['Boolean']['output']>;
  last_login?: Maybe<Scalars['DateTime']['output']>;
  is_superuser: Scalars['Boolean']['output'];
  groups?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  groups_obj?: Maybe<Array<Maybe<UserGroup>>>;
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
  num_pk: Scalars['Int']['output'];
  name: Scalars['query_core_tokens_list_oneOf_0_results_items_user_obj_groups_obj_items_name']['output'];
  /** Users added to this group will be superusers. */
  is_superuser?: Maybe<Scalars['Boolean']['output']>;
  parent?: Maybe<Scalars['UUID']['output']>;
  parent_name?: Maybe<Scalars['String']['output']>;
  attributes?: Maybe<Scalars['JSON']['output']>;
  additionalProperties?: Maybe<Scalars['JSON']['output']>;
};

export type UserTypeEnum =
  | 'internal'
  | 'external'
  | 'service_account'
  | 'internal_service_account';

export type queryInput_core_tokens_list_intent =
  | 'api'
  | 'app_password'
  | 'recovery'
  | 'verification';

export type core_tokens_retrieve_response = Token | ValidationError | GenericError;

export type core_tokens_used_by_list_response = UsedBy | ValidationError | GenericError;

export type core_tokens_view_key_retrieve_response = TokenView | ValidationError | GenericError;

/** Show token's current key */
export type TokenView = {
  key: Scalars['String']['output'];
};

export type core_user_consent_list_response = PaginatedUserConsentList | ValidationError | GenericError;

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

export type core_user_consent_retrieve_response = UserConsent | ValidationError | GenericError;

export type core_user_consent_used_by_list_response = UsedBy | ValidationError | GenericError;

export type core_users_list_response = PaginatedUserList | ValidationError | GenericError;

export type PaginatedUserList = {
  pagination: Pagination;
  results: Array<Maybe<User>>;
};

export type queryInput_core_users_list_type_items =
  | 'external'
  | 'internal'
  | 'internal_service_account'
  | 'service_account';

export type core_users_retrieve_response = User | ValidationError | GenericError;

export type core_users_metrics_retrieve_response = UserMetrics | ValidationError | GenericError;

/** User Metrics */
export type UserMetrics = {
  logins: Array<Maybe<Coordinate>>;
  logins_failed: Array<Maybe<Coordinate>>;
  authorizations: Array<Maybe<Coordinate>>;
};

export type core_users_used_by_list_response = UsedBy | ValidationError | GenericError;

export type core_users_impersonate_end_retrieve_response = Void_container | ValidationError | GenericError;

export type Void_container = {
  Void?: Maybe<Scalars['Void']['output']>;
};

export type core_users_me_retrieve_response = SessionUser | ValidationError | GenericError;

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
  username: Scalars['query_core_users_me_retrieve_oneOf_0_user_username']['output'];
  /** User's display name. */
  name: Scalars['String']['output'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  is_active: Scalars['Boolean']['output'];
  is_superuser: Scalars['Boolean']['output'];
  groups: Array<Maybe<UserSelfGroups>>;
  email?: Maybe<Scalars['EmailAddress']['output']>;
  /** User's avatar, either a http/https URL or a data URI */
  avatar: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  /** Get user settings with brand and group settings applied */
  settings: Scalars['JSON']['output'];
  type?: Maybe<UserTypeEnum>;
  /** Get all system permissions assigned to the user */
  system_permissions: Array<Maybe<Scalars['String']['output']>>;
};

export type UserSelfGroups = {
  name: Scalars['String']['output'];
  pk: Scalars['String']['output'];
};

export type core_users_paths_retrieve_response = UserPath | ValidationError | GenericError;

export type UserPath = {
  paths: Array<Maybe<Scalars['String']['output']>>;
};

export type crypto_certificatekeypairs_list_response = PaginatedCertificateKeyPairList | ValidationError | GenericError;

export type PaginatedCertificateKeyPairList = {
  pagination: Pagination;
  results: Array<Maybe<CertificateKeyPair>>;
};

/** CertificateKeyPair Serializer */
export type CertificateKeyPair = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Get certificate Hash (SHA256) */
  fingerprint_sha256?: Maybe<Scalars['String']['output']>;
  /** Get certificate Hash (SHA1) */
  fingerprint_sha1?: Maybe<Scalars['String']['output']>;
  /** Get certificate expiry */
  cert_expiry?: Maybe<Scalars['DateTime']['output']>;
  /** Get certificate subject as full rfc4514 */
  cert_subject?: Maybe<Scalars['String']['output']>;
  /** Show if this keypair has a private key configured or not */
  private_key_available: Scalars['Boolean']['output'];
  /** Get the private key's type, if set */
  private_key_type?: Maybe<Scalars['String']['output']>;
  /** Get URL to download certificate */
  certificate_download_url: Scalars['String']['output'];
  /** Get URL to download private key */
  private_key_download_url: Scalars['String']['output'];
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: Maybe<Scalars['String']['output']>;
};

export type crypto_certificatekeypairs_retrieve_response = CertificateKeyPair | ValidationError | GenericError;

export type crypto_certificatekeypairs_used_by_list_response = UsedBy | ValidationError | GenericError;

export type crypto_certificatekeypairs_view_certificate_retrieve_response = CertificateData | ValidationError | GenericError;

/** Get CertificateKeyPair's data */
export type CertificateData = {
  data: Scalars['String']['output'];
};

export type crypto_certificatekeypairs_view_private_key_retrieve_response = CertificateData | ValidationError | GenericError;

export type enterprise_license_list_response = PaginatedLicenseList | ValidationError | GenericError;

export type PaginatedLicenseList = {
  pagination: Pagination;
  results: Array<Maybe<License>>;
};

/** License Serializer */
export type License = {
  license_uuid: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  key: Scalars['String']['output'];
  expiry: Scalars['DateTime']['output'];
  internal_users: Scalars['Int']['output'];
  external_users: Scalars['Int']['output'];
};

export type enterprise_license_retrieve_response = License | ValidationError | GenericError;

export type enterprise_license_used_by_list_response = UsedBy | ValidationError | GenericError;

export type enterprise_license_forecast_retrieve_response = LicenseForecast | ValidationError | GenericError;

/** Serializer for license forecast */
export type LicenseForecast = {
  internal_users: Scalars['Int']['output'];
  external_users: Scalars['Int']['output'];
  forecasted_internal_users: Scalars['Int']['output'];
  forecasted_external_users: Scalars['Int']['output'];
};

export type enterprise_license_get_install_id_retrieve_response = InstallID | ValidationError | GenericError;

export type InstallID = {
  install_id: Scalars['String']['output'];
};

export type enterprise_license_summary_retrieve_response = LicenseSummary | ValidationError | GenericError;

/** Serializer for license status */
export type LicenseSummary = {
  internal_users: Scalars['Int']['output'];
  external_users: Scalars['Int']['output'];
  valid: Scalars['Boolean']['output'];
  show_admin_warning: Scalars['Boolean']['output'];
  show_user_warning: Scalars['Boolean']['output'];
  read_only: Scalars['Boolean']['output'];
  latest_valid: Scalars['DateTime']['output'];
  has_license: Scalars['Boolean']['output'];
};

export type events_events_list_response = PaginatedEventList | ValidationError | GenericError;

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
  client_ip?: Maybe<Scalars['String']['output']>;
  created: Scalars['DateTime']['output'];
  expires?: Maybe<Scalars['DateTime']['output']>;
  brand?: Maybe<Scalars['JSON']['output']>;
};

export type EventActions =
  | 'login'
  | 'login_failed'
  | 'logout'
  | 'user_write'
  | 'suspicious_request'
  | 'password_set'
  | 'secret_view'
  | 'secret_rotate'
  | 'invitation_used'
  | 'authorize_application'
  | 'source_linked'
  | 'impersonation_started'
  | 'impersonation_ended'
  | 'flow_execution'
  | 'policy_execution'
  | 'policy_exception'
  | 'property_mapping_exception'
  | 'system_task_execution'
  | 'system_task_exception'
  | 'system_exception'
  | 'configuration_error'
  | 'model_created'
  | 'model_updated'
  | 'model_deleted'
  | 'email_sent'
  | 'update_available'
  | 'custom_';

export type events_events_retrieve_response = Event | ValidationError | GenericError;

export type events_events_actions_list_response = TypeCreate | ValidationError | GenericError;

/** Types of an object that can be created */
export type TypeCreate = {
  name: Scalars['String']['output'];
  description: Scalars['String']['output'];
  component: Scalars['String']['output'];
  model_name: Scalars['String']['output'];
  requires_enterprise?: Maybe<Scalars['Boolean']['output']>;
};

export type events_events_per_month_list_response = Coordinate | ValidationError | GenericError;

export type events_events_top_per_user_list_response = EventTopPerUser | ValidationError | GenericError;

/** Response object of Event's top_per_user */
export type EventTopPerUser = {
  application: Scalars['JSON']['output'];
  counted_events: Scalars['Int']['output'];
  unique_users: Scalars['Int']['output'];
};

export type events_events_volume_list_response = Coordinate | ValidationError | GenericError;

export type events_notifications_list_response = PaginatedNotificationList | ValidationError | GenericError;

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
  | 'notice'
  | 'warning'
  | 'alert';

export type queryInput_events_notifications_list_severity =
  | 'alert'
  | 'notice'
  | 'warning';

export type events_notifications_retrieve_response = Notification | ValidationError | GenericError;

export type events_notifications_used_by_list_response = UsedBy | ValidationError | GenericError;

export type events_rules_list_response = PaginatedNotificationRuleList | ValidationError | GenericError;

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
  group_obj: Group;
};

/** Controls which severity level the created notifications will have. */
export type queryInput_events_rules_list_severity =
  | 'alert'
  | 'notice'
  | 'warning';

export type events_rules_retrieve_response = NotificationRule | ValidationError | GenericError;

export type events_rules_used_by_list_response = UsedBy | ValidationError | GenericError;

export type events_system_tasks_list_response = PaginatedSystemTaskList | ValidationError | GenericError;

export type PaginatedSystemTaskList = {
  pagination: Pagination;
  results: Array<Maybe<SystemTask>>;
};

/** Serialize TaskInfo and TaskResult */
export type SystemTask = {
  uuid: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Get full name with UID */
  full_name: Scalars['String']['output'];
  uid?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  start_timestamp: Scalars['DateTime']['output'];
  finish_timestamp: Scalars['DateTime']['output'];
  duration: Scalars['Float']['output'];
  status: SystemTaskStatusEnum;
  messages: Array<Maybe<LogEvent>>;
};

export type SystemTaskStatusEnum =
  | 'unknown'
  | 'successful'
  | 'warning'
  | 'error';

export type queryInput_events_system_tasks_list_status =
  | 'error'
  | 'successful'
  | 'unknown'
  | 'warning';

export type events_system_tasks_retrieve_response = SystemTask | ValidationError | GenericError;

export type events_transports_list_response = PaginatedNotificationTransportList | ValidationError | GenericError;

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
  mode_verbose: Scalars['String']['output'];
  webhook_url?: Maybe<Scalars['URL']['output']>;
  webhook_mapping?: Maybe<Scalars['UUID']['output']>;
  /** Only send notification once, for example when sending a webhook into a chat channel. */
  send_once?: Maybe<Scalars['Boolean']['output']>;
};

export type NotificationTransportModeEnum =
  | 'local'
  | 'webhook'
  | 'webhook_slack'
  | 'email';

export type queryInput_events_transports_list_mode =
  | 'email'
  | 'local'
  | 'webhook'
  | 'webhook_slack';

export type events_transports_retrieve_response = NotificationTransport | ValidationError | GenericError;

export type events_transports_used_by_list_response = UsedBy | ValidationError | GenericError;

export type flows_bindings_list_response = PaginatedFlowStageBindingList | ValidationError | GenericError;

export type PaginatedFlowStageBindingList = {
  pagination: Pagination;
  results: Array<Maybe<FlowStageBinding>>;
};

/** FlowStageBinding Serializer */
export type FlowStageBinding = {
  pk: Scalars['UUID']['output'];
  policybindingmodel_ptr_id: Scalars['UUID']['output'];
  target: Scalars['UUID']['output'];
  stage: Scalars['UUID']['output'];
  stage_obj: Stage;
  /** Evaluate policies during the Flow planning process. */
  evaluate_on_plan?: Maybe<Scalars['Boolean']['output']>;
  /** Evaluate policies when the Stage is present to the user. */
  re_evaluate_policies?: Maybe<Scalars['Boolean']['output']>;
  order: Scalars['Int']['output'];
  policy_engine_mode?: Maybe<PolicyEngineMode>;
  invalid_response_action?: Maybe<InvalidResponseActionEnum>;
  additionalProperties?: Maybe<Scalars['JSON']['output']>;
};

/** Stage Serializer */
export type Stage = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Get object type so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  flow_set?: Maybe<Array<Maybe<FlowSet>>>;
  additionalProperties?: Maybe<Scalars['JSON']['output']>;
};

/** Stripped down flow serializer */
export type FlowSet = {
  pk: Scalars['UUID']['output'];
  policybindingmodel_ptr_id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['query_flows_bindings_list_oneOf_0_results_items_stage_obj_flow_set_items_slug']['output'];
  /** Shown as the Title in Flow pages. */
  title: Scalars['String']['output'];
  designation: FlowDesignationEnum;
  /**
   * Get the URL to the background image. If the name is /static or starts with http
   * it is returned as-is
   */
  background: Scalars['String']['output'];
  policy_engine_mode?: Maybe<PolicyEngineMode>;
  /** Enable compatibility mode, increases compatibility with password managers on mobile devices. */
  compatibility_mode?: Maybe<Scalars['Boolean']['output']>;
  /** Get export URL for flow */
  export_url: Scalars['String']['output'];
  layout?: Maybe<FlowLayoutEnum>;
  denied_action?: Maybe<DeniedActionEnum>;
};

export type FlowDesignationEnum =
  | 'authentication'
  | 'authorization'
  | 'invalidation'
  | 'enrollment'
  | 'unenrollment'
  | 'recovery'
  | 'stage_configuration';

export type FlowLayoutEnum =
  | 'stacked'
  | 'content_left'
  | 'content_right'
  | 'sidebar_left'
  | 'sidebar_right';

export type DeniedActionEnum =
  | 'message_continue'
  | 'message'
  | 'continue';

export type InvalidResponseActionEnum =
  | 'retry'
  | 'restart'
  | 'restart_with_context';

/** Configure how the flow executor should handle an invalid response to a challenge. RETRY returns the error message and a similar challenge to the executor. RESTART restarts the flow from the beginning, and RESTART_WITH_CONTEXT restarts the flow while keeping the current context. */
export type queryInput_flows_bindings_list_invalid_response_action =
  | 'restart'
  | 'restart_with_context'
  | 'retry';

export type queryInput_flows_bindings_list_policy_engine_mode =
  | 'all'
  | 'any';

export type flows_bindings_retrieve_response = FlowStageBinding | ValidationError | GenericError;

export type flows_bindings_used_by_list_response = UsedBy | ValidationError | GenericError;

export type flows_executor_get_response = AccessDeniedChallenge | AppleLoginChallenge | AuthenticatorDuoChallenge | AuthenticatorSMSChallenge | AuthenticatorStaticChallenge | AuthenticatorTOTPChallenge | AuthenticatorValidationChallenge | AuthenticatorWebAuthnChallenge | AutosubmitChallenge | CaptchaChallenge | ConsentChallenge | EmailChallenge | FlowErrorChallenge | IdentificationChallenge | OAuthDeviceCodeChallenge | OAuthDeviceCodeFinishChallenge | PasswordChallenge | PlexAuthenticationChallenge | PromptChallenge | RedirectChallenge | ShellChallenge | UserLoginChallenge | ValidationError | GenericError;

/** Challenge when a flow's active stage calls `stage_invalid()`. */
export type AccessDeniedChallenge = {
  type: ChallengeChoices;
  flow_info?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  response_errors?: Maybe<Scalars['JSON']['output']>;
  pending_user: Scalars['String']['output'];
  pending_user_avatar: Scalars['String']['output'];
  error_message?: Maybe<Scalars['String']['output']>;
};

export type ChallengeChoices =
  | 'native'
  | 'shell'
  | 'redirect';

/** Contextual flow information for a challenge */
export type ContextualFlowInfo = {
  title?: Maybe<Scalars['String']['output']>;
  background?: Maybe<Scalars['String']['output']>;
  cancel_url: Scalars['String']['output'];
  layout: ContextualFlowInfoLayoutEnum;
};

export type ContextualFlowInfoLayoutEnum =
  | 'stacked'
  | 'content_left'
  | 'content_right'
  | 'sidebar_left'
  | 'sidebar_right';

/** Special challenge for apple-native authentication flow, which happens on the client. */
export type AppleLoginChallenge = {
  type: ChallengeChoices;
  flow_info?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  response_errors?: Maybe<Scalars['JSON']['output']>;
  client_id: Scalars['String']['output'];
  scope: Scalars['String']['output'];
  redirect_uri: Scalars['String']['output'];
  state: Scalars['String']['output'];
};

/** Duo Challenge */
export type AuthenticatorDuoChallenge = {
  type: ChallengeChoices;
  flow_info?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  response_errors?: Maybe<Scalars['JSON']['output']>;
  pending_user: Scalars['String']['output'];
  pending_user_avatar: Scalars['String']['output'];
  activation_barcode: Scalars['String']['output'];
  activation_code: Scalars['String']['output'];
  stage_uuid: Scalars['String']['output'];
};

/** SMS Setup challenge */
export type AuthenticatorSMSChallenge = {
  type: ChallengeChoices;
  flow_info?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  response_errors?: Maybe<Scalars['JSON']['output']>;
  pending_user: Scalars['String']['output'];
  pending_user_avatar: Scalars['String']['output'];
  phone_number_required?: Maybe<Scalars['Boolean']['output']>;
};

/** Static authenticator challenge */
export type AuthenticatorStaticChallenge = {
  type: ChallengeChoices;
  flow_info?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  response_errors?: Maybe<Scalars['JSON']['output']>;
  pending_user: Scalars['String']['output'];
  pending_user_avatar: Scalars['String']['output'];
  codes: Array<Maybe<Scalars['String']['output']>>;
};

/** TOTP Setup challenge */
export type AuthenticatorTOTPChallenge = {
  type: ChallengeChoices;
  flow_info?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  response_errors?: Maybe<Scalars['JSON']['output']>;
  pending_user: Scalars['String']['output'];
  pending_user_avatar: Scalars['String']['output'];
  config_url: Scalars['String']['output'];
};

/** Authenticator challenge */
export type AuthenticatorValidationChallenge = {
  type: ChallengeChoices;
  flow_info?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  response_errors?: Maybe<Scalars['JSON']['output']>;
  pending_user: Scalars['String']['output'];
  pending_user_avatar: Scalars['String']['output'];
  device_challenges: Array<Maybe<DeviceChallenge>>;
  configuration_stages: Array<Maybe<SelectableStage>>;
};

/** Single device challenge */
export type DeviceChallenge = {
  device_class: Scalars['String']['output'];
  device_uid: Scalars['String']['output'];
  challenge: Scalars['JSON']['output'];
};

/** Serializer for stages which can be selected by users */
export type SelectableStage = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  verbose_name: Scalars['String']['output'];
  meta_model_name: Scalars['String']['output'];
};

/** WebAuthn Challenge */
export type AuthenticatorWebAuthnChallenge = {
  type: ChallengeChoices;
  flow_info?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  response_errors?: Maybe<Scalars['JSON']['output']>;
  pending_user: Scalars['String']['output'];
  pending_user_avatar: Scalars['String']['output'];
  registration: Scalars['JSON']['output'];
};

/** Autosubmit challenge used to send and navigate a POST request */
export type AutosubmitChallenge = {
  type: ChallengeChoices;
  flow_info?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  response_errors?: Maybe<Scalars['JSON']['output']>;
  url: Scalars['String']['output'];
  attrs: Scalars['JSON']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

/** Site public key */
export type CaptchaChallenge = {
  type: ChallengeChoices;
  flow_info?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  response_errors?: Maybe<Scalars['JSON']['output']>;
  pending_user: Scalars['String']['output'];
  pending_user_avatar: Scalars['String']['output'];
  site_key: Scalars['String']['output'];
  js_url: Scalars['String']['output'];
};

/** Challenge info for consent screens */
export type ConsentChallenge = {
  type: ChallengeChoices;
  flow_info?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  response_errors?: Maybe<Scalars['JSON']['output']>;
  pending_user: Scalars['String']['output'];
  pending_user_avatar: Scalars['String']['output'];
  header_text?: Maybe<Scalars['String']['output']>;
  permissions: Array<Maybe<ConsentPermission>>;
  additional_permissions: Array<Maybe<ConsentPermission>>;
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
  flow_info?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  response_errors?: Maybe<Scalars['JSON']['output']>;
};

/**
 * Challenge class when an unhandled error occurs during a stage. Normal users
 * are shown an error message, superusers are shown a full stacktrace.
 */
export type FlowErrorChallenge = {
  type?: Maybe<Scalars['String']['output']>;
  flow_info?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  response_errors?: Maybe<Scalars['JSON']['output']>;
  request_id: Scalars['String']['output'];
  error?: Maybe<Scalars['String']['output']>;
  traceback?: Maybe<Scalars['String']['output']>;
};

/** Identification challenges with all UI elements */
export type IdentificationChallenge = {
  type: ChallengeChoices;
  flow_info?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  response_errors?: Maybe<Scalars['JSON']['output']>;
  user_fields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  password_fields: Scalars['Boolean']['output'];
  application_pre?: Maybe<Scalars['String']['output']>;
  flow_designation: FlowDesignationEnum;
  enroll_url?: Maybe<Scalars['String']['output']>;
  recovery_url?: Maybe<Scalars['String']['output']>;
  passwordless_url?: Maybe<Scalars['String']['output']>;
  primary_action: Scalars['String']['output'];
  sources?: Maybe<Array<Maybe<LoginSource>>>;
  show_source_labels: Scalars['Boolean']['output'];
};

/** Serializer for Login buttons of sources */
export type LoginSource = {
  name: Scalars['String']['output'];
  icon_url?: Maybe<Scalars['String']['output']>;
  challenge: LoginChallengeTypes;
};

export type LoginChallengeTypes = RedirectChallenge | PlexAuthenticationChallenge | AppleLoginChallenge;

/** Challenge type to redirect the client */
export type RedirectChallenge = {
  type: ChallengeChoices;
  flow_info?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  response_errors?: Maybe<Scalars['JSON']['output']>;
  to: Scalars['String']['output'];
};

/** Challenge shown to the user in identification stage */
export type PlexAuthenticationChallenge = {
  type: ChallengeChoices;
  flow_info?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  response_errors?: Maybe<Scalars['JSON']['output']>;
  client_id: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

/** OAuth Device code challenge */
export type OAuthDeviceCodeChallenge = {
  type: ChallengeChoices;
  flow_info?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  response_errors?: Maybe<Scalars['JSON']['output']>;
};

/** Final challenge after user enters their code */
export type OAuthDeviceCodeFinishChallenge = {
  type: ChallengeChoices;
  flow_info?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  response_errors?: Maybe<Scalars['JSON']['output']>;
};

/** Password challenge UI fields */
export type PasswordChallenge = {
  type: ChallengeChoices;
  flow_info?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  response_errors?: Maybe<Scalars['JSON']['output']>;
  pending_user: Scalars['String']['output'];
  pending_user_avatar: Scalars['String']['output'];
  recovery_url?: Maybe<Scalars['String']['output']>;
};

/** Initial challenge being sent, define fields */
export type PromptChallenge = {
  type: ChallengeChoices;
  flow_info?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  response_errors?: Maybe<Scalars['JSON']['output']>;
  fields: Array<Maybe<StagePrompt>>;
};

/** Serializer for a single Prompt field */
export type StagePrompt = {
  field_key: Scalars['String']['output'];
  label: Scalars['String']['output'];
  type: PromptTypeEnum;
  required: Scalars['Boolean']['output'];
  placeholder: Scalars['String']['output'];
  initial_value: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  sub_text: Scalars['String']['output'];
  choices?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type PromptTypeEnum =
  | 'text'
  | 'text_area'
  | 'text_read_only'
  | 'text_area_read_only'
  | 'username'
  | 'email'
  | 'password'
  | 'number'
  | 'checkbox'
  | 'radio_button_group'
  | 'dropdown'
  | 'date'
  | 'date_time'
  | 'file'
  | 'separator'
  | 'hidden'
  | 'static'
  | 'ak_locale';

/** challenge type to render HTML as-is */
export type ShellChallenge = {
  type: ChallengeChoices;
  flow_info?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  response_errors?: Maybe<Scalars['JSON']['output']>;
  body: Scalars['String']['output'];
};

/** Empty challenge */
export type UserLoginChallenge = {
  type: ChallengeChoices;
  flow_info?: Maybe<ContextualFlowInfo>;
  component?: Maybe<Scalars['String']['output']>;
  response_errors?: Maybe<Scalars['JSON']['output']>;
  pending_user: Scalars['String']['output'];
  pending_user_avatar: Scalars['String']['output'];
};

export type flows_inspector_get_response = FlowInspection | GenericError;

/** Serializer for inspect endpoint */
export type FlowInspection = {
  plans: Array<Maybe<FlowInspectorPlan>>;
  current_plan?: Maybe<FlowInspectorPlan>;
  is_completed: Scalars['Boolean']['output'];
};

/** Serializer for an active FlowPlan */
export type FlowInspectorPlan = {
  current_stage: FlowStageBinding;
  next_planned_stage: FlowStageBinding;
  /** Get the plan's context, sanitized */
  plan_context: Scalars['JSON']['output'];
  /** Get a unique session ID */
  session_id: Scalars['String']['output'];
};

export type flows_instances_list_response = PaginatedFlowList | ValidationError | GenericError;

export type PaginatedFlowList = {
  pagination: Pagination;
  results: Array<Maybe<Flow>>;
};

/** Flow Serializer */
export type Flow = {
  pk: Scalars['UUID']['output'];
  policybindingmodel_ptr_id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['query_flows_instances_list_oneOf_0_results_items_slug']['output'];
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
  cache_count: Scalars['Int']['output'];
  policy_engine_mode?: Maybe<PolicyEngineMode>;
  /** Enable compatibility mode, increases compatibility with password managers on mobile devices. */
  compatibility_mode?: Maybe<Scalars['Boolean']['output']>;
  /** Get export URL for flow */
  export_url: Scalars['String']['output'];
  layout?: Maybe<FlowLayoutEnum>;
  denied_action?: Maybe<DeniedActionEnum>;
  authentication?: Maybe<AuthenticationEnum>;
  additionalProperties?: Maybe<Scalars['JSON']['output']>;
};

export type AuthenticationEnum =
  | 'none'
  | 'require_authenticated'
  | 'require_unauthenticated'
  | 'require_superuser'
  | 'require_outpost';

/** Configure what should happen when a flow denies access to a user. */
export type queryInput_flows_instances_list_denied_action =
  | 'continue'
  | 'message'
  | 'message_continue';

/** Decides what this Flow is used for. For example, the Authentication flow is redirect to when an un-authenticated user visits authentik. */
export type queryInput_flows_instances_list_designation =
  | 'authentication'
  | 'authorization'
  | 'enrollment'
  | 'invalidation'
  | 'recovery'
  | 'stage_configuration'
  | 'unenrollment';

export type flows_instances_retrieve_response = Flow | ValidationError | GenericError;

export type flows_instances_diagram_retrieve_response = FlowDiagram | ValidationError | GenericError;

/** response of the flow's diagram action */
export type FlowDiagram = {
  diagram: Scalars['String']['output'];
};

export type flows_instances_execute_retrieve_response = Link | GenericError;

/** Returns a single link */
export type Link = {
  link: Scalars['String']['output'];
};

export type flows_instances_export_retrieve_response = File_container | ValidationError | GenericError;

export type File_container = {
  File?: Maybe<Scalars['File']['output']>;
};

export type flows_instances_used_by_list_response = UsedBy | ValidationError | GenericError;

export type flows_instances_cache_info_retrieve_response = Cache | ValidationError | GenericError;

/** Generic cache stats for an object */
export type Cache = {
  count: Scalars['Int']['output'];
};

export type managed_blueprints_list_response = PaginatedBlueprintInstanceList | ValidationError | GenericError;

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
  last_applied: Scalars['DateTime']['output'];
  last_applied_hash: Scalars['String']['output'];
  status: BlueprintInstanceStatusEnum;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  managed_models: Array<Maybe<Scalars['String']['output']>>;
  metadata: Scalars['JSON']['output'];
  content?: Maybe<Scalars['String']['output']>;
};

export type BlueprintInstanceStatusEnum =
  | 'successful'
  | 'warning'
  | 'error'
  | 'orphaned'
  | 'unknown';

export type managed_blueprints_retrieve_response = BlueprintInstance | ValidationError | GenericError;

export type managed_blueprints_used_by_list_response = UsedBy | ValidationError | GenericError;

export type managed_blueprints_available_list_response = BlueprintFile | ValidationError | GenericError;

export type BlueprintFile = {
  path: Scalars['String']['output'];
  last_m: Scalars['DateTime']['output'];
  hash: Scalars['String']['output'];
  meta: Metadata;
};

/** Serializer for blueprint metadata */
export type Metadata = {
  name: Scalars['String']['output'];
  labels: Scalars['JSON']['output'];
  additionalProperties?: Maybe<Scalars['JSON']['output']>;
};

export type oauth2_access_tokens_list_response = PaginatedTokenModelList | ValidationError | GenericError;

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
  is_expired: Scalars['Boolean']['output'];
  expires?: Maybe<Scalars['DateTime']['output']>;
  scope: Array<Maybe<Scalars['String']['output']>>;
  /** Get the token's id_token as JSON String */
  id_token: Scalars['String']['output'];
  revoked?: Maybe<Scalars['Boolean']['output']>;
};

/** OAuth2Provider Serializer */
export type OAuth2Provider = {
  pk: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** Flow used for authentication when the associated application is accessed by an un-authenticated user. */
  authentication_flow?: Maybe<Scalars['UUID']['output']>;
  /** Flow used when authorizing this provider. */
  authorization_flow: Scalars['UUID']['output'];
  property_mappings?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Internal application name, used in URLs. */
  assigned_application_slug: Scalars['String']['output'];
  /** Application's display Name. */
  assigned_application_name: Scalars['String']['output'];
  /** Internal application name, used in URLs. */
  assigned_backchannel_application_slug: Scalars['String']['output'];
  /** Application's display Name. */
  assigned_backchannel_application_name: Scalars['String']['output'];
  /** Return object's verbose_name */
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  client_type?: Maybe<ClientTypeEnum>;
  client_id?: Maybe<Scalars['query_oauth2_access_tokens_list_oneOf_0_results_items_provider_client_id']['output']>;
  client_secret?: Maybe<Scalars['query_oauth2_access_tokens_list_oneOf_0_results_items_provider_client_secret']['output']>;
  /** Access codes not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  access_code_validity?: Maybe<Scalars['String']['output']>;
  /** Tokens not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  access_token_validity?: Maybe<Scalars['String']['output']>;
  /** Tokens not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  refresh_token_validity?: Maybe<Scalars['String']['output']>;
  /** Include User claims from scopes in the id_token, for applications that don't access the userinfo endpoint. */
  include_claims_in_id_token?: Maybe<Scalars['Boolean']['output']>;
  /** Key used to sign the tokens. Only required when JWT Algorithm is set to RS256. */
  signing_key?: Maybe<Scalars['UUID']['output']>;
  /** Enter each URI on a new line. */
  redirect_uris?: Maybe<Scalars['String']['output']>;
  sub_mode?: Maybe<SubModeEnum>;
  issuer_mode?: Maybe<IssuerModeEnum>;
  jwks_sources?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
};

export type ClientTypeEnum =
  | 'confidential'
  | 'public';

export type SubModeEnum =
  | 'hashed_user_id'
  | 'user_id'
  | 'user_uuid'
  | 'user_username'
  | 'user_email'
  | 'user_upn';

export type IssuerModeEnum =
  | 'global'
  | 'per_provider';

export type oauth2_access_tokens_retrieve_response = TokenModel | ValidationError | GenericError;

export type oauth2_access_tokens_used_by_list_response = UsedBy | ValidationError | GenericError;

export type oauth2_authorization_codes_list_response = PaginatedExpiringBaseGrantModelList | ValidationError | GenericError;

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
  is_expired: Scalars['Boolean']['output'];
  expires?: Maybe<Scalars['DateTime']['output']>;
  scope: Array<Maybe<Scalars['String']['output']>>;
};

export type oauth2_authorization_codes_retrieve_response = ExpiringBaseGrantModel | ValidationError | GenericError;

export type oauth2_authorization_codes_used_by_list_response = UsedBy | ValidationError | GenericError;

export type oauth2_refresh_tokens_list_response = PaginatedTokenModelList | ValidationError | GenericError;

export type oauth2_refresh_tokens_retrieve_response = TokenModel | ValidationError | GenericError;

export type oauth2_refresh_tokens_used_by_list_response = UsedBy | ValidationError | GenericError;

export type outposts_instances_list_response = PaginatedOutpostList | ValidationError | GenericError;

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
  providers_obj: Array<Maybe<Provider>>;
  /** Select Service-Connection authentik should use to manage this outpost. Leave empty if authentik should not handle the deployment. */
  service_connection?: Maybe<Scalars['UUID']['output']>;
  service_connection_obj: ServiceConnection;
  /** Get Token identifier */
  token_identifier: Scalars['String']['output'];
  config: Scalars['JSON']['output'];
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: Maybe<Scalars['String']['output']>;
};

export type OutpostTypeEnum =
  | 'proxy'
  | 'ldap'
  | 'radius'
  | 'rac';

/** ServiceConnection Serializer */
export type ServiceConnection = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** If enabled, use the local connection. Required Docker socket/Kubernetes Integration */
  local?: Maybe<Scalars['Boolean']['output']>;
  /** Return component used to edit this object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  additionalProperties?: Maybe<Scalars['JSON']['output']>;
};

export type outposts_instances_retrieve_response = Outpost | ValidationError | GenericError;

export type outposts_instances_health_list_response = OutpostHealth | ValidationError | GenericError;

/** Outpost health status */
export type OutpostHealth = {
  uid: Scalars['String']['output'];
  last_seen: Scalars['DateTime']['output'];
  version: Scalars['String']['output'];
  version_should: Scalars['String']['output'];
  version_outdated: Scalars['Boolean']['output'];
  build_hash: Scalars['String']['output'];
  build_hash_should: Scalars['String']['output'];
  hostname: Scalars['String']['output'];
};

export type outposts_instances_used_by_list_response = UsedBy | ValidationError | GenericError;

export type outposts_instances_default_settings_retrieve_response = OutpostDefaultConfig | ValidationError | GenericError;

/** Global default outpost config */
export type OutpostDefaultConfig = {
  config: Scalars['JSON']['output'];
};

export type outposts_ldap_list_response = PaginatedLDAPOutpostConfigList | ValidationError | GenericError;

export type PaginatedLDAPOutpostConfigList = {
  pagination: Pagination;
  results: Array<Maybe<LDAPOutpostConfig>>;
};

/** LDAPProvider Serializer */
export type LDAPOutpostConfig = {
  pk: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** DN under which objects are accessible. */
  base_dn?: Maybe<Scalars['String']['output']>;
  bind_flow_slug: Scalars['String']['output'];
  /** Prioritise backchannel slug over direct application slug */
  application_slug: Scalars['String']['output'];
  /** Users in this group can do search queries. If not set, every user can execute search queries. */
  search_group?: Maybe<Scalars['UUID']['output']>;
  certificate?: Maybe<Scalars['UUID']['output']>;
  tls_server_name?: Maybe<Scalars['String']['output']>;
  /** The start for uidNumbers, this number is added to the user.pk to make sure that the numbers aren't too low for POSIX users. Default is 2000 to ensure that we don't collide with local users uidNumber */
  uid_start_number?: Maybe<Scalars['Int']['output']>;
  /** The start for gidNumbers, this number is added to a number generated from the group.pk to make sure that the numbers aren't too low for POSIX groups. Default is 4000 to ensure that we don't collide with local groups or users primary groups gidNumber */
  gid_start_number?: Maybe<Scalars['Int']['output']>;
  search_mode?: Maybe<LDAPAPIAccessMode>;
  bind_mode?: Maybe<LDAPAPIAccessMode>;
  /** When enabled, code-based multi-factor authentication can be used by appending a semicolon and the TOTP code to the password. This should only be enabled if all users that will bind to this provider have a TOTP device configured, as otherwise a password may incorrectly be rejected if it contains a semicolon. */
  mfa_support?: Maybe<Scalars['Boolean']['output']>;
};

export type LDAPAPIAccessMode =
  | 'direct'
  | 'cached';

export type outposts_ldap_retrieve_response = LDAPOutpostConfig | ValidationError | GenericError;

export type outposts_proxy_list_response = PaginatedProxyOutpostConfigList | ValidationError | GenericError;

export type PaginatedProxyOutpostConfigList = {
  pagination: Pagination;
  results: Array<Maybe<ProxyOutpostConfig>>;
};

/** Proxy provider serializer for outposts */
export type ProxyOutpostConfig = {
  pk: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  internal_host?: Maybe<Scalars['URL']['output']>;
  external_host: Scalars['URL']['output'];
  /** Validate SSL Certificates of upstream servers */
  internal_host_ssl_validation?: Maybe<Scalars['Boolean']['output']>;
  client_id?: Maybe<Scalars['query_outposts_proxy_list_oneOf_0_results_items_client_id']['output']>;
  client_secret?: Maybe<Scalars['query_outposts_proxy_list_oneOf_0_results_items_client_secret']['output']>;
  oidc_configuration: OpenIDConnectConfiguration;
  cookie_secret?: Maybe<Scalars['String']['output']>;
  certificate?: Maybe<Scalars['UUID']['output']>;
  /** Regular expressions for which authentication is not required. Each new line is interpreted as a new Regular Expression. */
  skip_path_regex?: Maybe<Scalars['String']['output']>;
  /** Set a custom HTTP-Basic Authentication header based on values from authentik. */
  basic_auth_enabled?: Maybe<Scalars['Boolean']['output']>;
  /** User/Group Attribute used for the password part of the HTTP-Basic Header. */
  basic_auth_password_attribute?: Maybe<Scalars['String']['output']>;
  /** User/Group Attribute used for the user part of the HTTP-Basic Header. If not set, the user's Email address is used. */
  basic_auth_user_attribute?: Maybe<Scalars['String']['output']>;
  mode?: Maybe<ProxyMode>;
  cookie_domain?: Maybe<Scalars['String']['output']>;
  /** Get token validity as second count */
  access_token_validity?: Maybe<Scalars['Float']['output']>;
  /** When enabled, this provider will intercept the authorization header and authenticate requests based on its value. */
  intercept_header_auth?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Get all the scope names the outpost should request,
   * including custom-defined ones
   */
  scopes_to_request: Array<Maybe<Scalars['String']['output']>>;
  /** Internal application name, used in URLs. */
  assigned_application_slug: Scalars['String']['output'];
  /** Application's display Name. */
  assigned_application_name: Scalars['String']['output'];
};

/** rest_framework Serializer for OIDC Configuration */
export type OpenIDConnectConfiguration = {
  issuer: Scalars['String']['output'];
  authorization_endpoint: Scalars['String']['output'];
  token_endpoint: Scalars['String']['output'];
  userinfo_endpoint: Scalars['String']['output'];
  end_session_endpoint: Scalars['String']['output'];
  introspection_endpoint: Scalars['String']['output'];
  jwks_uri: Scalars['String']['output'];
  response_types_supported: Array<Maybe<Scalars['String']['output']>>;
  id_token_signing_alg_values_supported: Array<Maybe<Scalars['String']['output']>>;
  subject_types_supported: Array<Maybe<Scalars['String']['output']>>;
  token_endpoint_auth_methods_supported: Array<Maybe<Scalars['String']['output']>>;
  additionalProperties?: Maybe<Scalars['JSON']['output']>;
};

export type ProxyMode =
  | 'proxy'
  | 'forward_single'
  | 'forward_domain';

export type outposts_proxy_retrieve_response = ProxyOutpostConfig | ValidationError | GenericError;

export type outposts_radius_list_response = PaginatedRadiusOutpostConfigList | ValidationError | GenericError;

export type PaginatedRadiusOutpostConfigList = {
  pagination: Pagination;
  results: Array<Maybe<RadiusOutpostConfig>>;
};

/** RadiusProvider Serializer */
export type RadiusOutpostConfig = {
  pk: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  application_slug: Scalars['String']['output'];
  auth_flow_slug: Scalars['String']['output'];
  /** List of CIDRs (comma-separated) that clients can connect from. A more specific CIDR will match before a looser one. Clients connecting from a non-specified CIDR will be dropped. */
  client_networks?: Maybe<Scalars['String']['output']>;
  /** Shared secret between clients and server to hash packets. */
  shared_secret?: Maybe<Scalars['String']['output']>;
  /** When enabled, code-based multi-factor authentication can be used by appending a semicolon and the TOTP code to the password. This should only be enabled if all users that will bind to this provider have a TOTP device configured, as otherwise a password may incorrectly be rejected if it contains a semicolon. */
  mfa_support?: Maybe<Scalars['Boolean']['output']>;
};

export type outposts_radius_retrieve_response = RadiusOutpostConfig | ValidationError | GenericError;

export type outposts_service_connections_all_list_response = PaginatedServiceConnectionList | ValidationError | GenericError;

export type PaginatedServiceConnectionList = {
  pagination: Pagination;
  results: Array<Maybe<ServiceConnection>>;
};

export type outposts_service_connections_all_retrieve_response = ServiceConnection | ValidationError | GenericError;

export type outposts_service_connections_all_state_retrieve_response = ServiceConnectionState | ValidationError | GenericError;

/** Serializer for Service connection state */
export type ServiceConnectionState = {
  healthy: Scalars['Boolean']['output'];
  version: Scalars['String']['output'];
};

export type outposts_service_connections_all_used_by_list_response = UsedBy | ValidationError | GenericError;

export type outposts_service_connections_all_types_list_response = TypeCreate | ValidationError | GenericError;

export type outposts_service_connections_docker_list_response = PaginatedDockerServiceConnectionList | ValidationError | GenericError;

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
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  /** Can be in the format of 'unix://<path>' when connecting to a local docker daemon, or 'https://<hostname>:2376' when connecting to a remote system. */
  url: Scalars['String']['output'];
  /** CA which the endpoint's Certificate is verified against. Can be left empty for no validation. */
  tls_verification?: Maybe<Scalars['UUID']['output']>;
  /** Certificate/Key used for authentication. Can be left empty for no authentication. */
  tls_authentication?: Maybe<Scalars['UUID']['output']>;
};

export type outposts_service_connections_docker_retrieve_response = DockerServiceConnection | ValidationError | GenericError;

export type outposts_service_connections_docker_used_by_list_response = UsedBy | ValidationError | GenericError;

export type outposts_service_connections_kubernetes_list_response = PaginatedKubernetesServiceConnectionList | ValidationError | GenericError;

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
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  /** Paste your kubeconfig here. authentik will automatically use the currently selected context. */
  kubeconfig?: Maybe<Scalars['JSON']['output']>;
  /** Verify SSL Certificates of the Kubernetes API endpoint */
  verify_ssl?: Maybe<Scalars['Boolean']['output']>;
};

export type outposts_service_connections_kubernetes_retrieve_response = KubernetesServiceConnection | ValidationError | GenericError;

export type outposts_service_connections_kubernetes_used_by_list_response = UsedBy | ValidationError | GenericError;

export type policies_all_list_response = PaginatedPolicyList | ValidationError | GenericError;

export type PaginatedPolicyList = {
  pagination: Pagination;
  results: Array<Maybe<Policy>>;
};

/** Policy Serializer */
export type Policy = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged. */
  execution_logging?: Maybe<Scalars['Boolean']['output']>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  /** Return objects policy is bound to */
  bound_to: Scalars['Int']['output'];
  additionalProperties?: Maybe<Scalars['JSON']['output']>;
};

export type policies_all_retrieve_response = Policy | ValidationError | GenericError;

export type policies_all_used_by_list_response = UsedBy | ValidationError | GenericError;

export type policies_all_cache_info_retrieve_response = Cache | ValidationError | GenericError;

export type policies_all_types_list_response = TypeCreate | ValidationError | GenericError;

export type policies_bindings_list_response = PaginatedPolicyBindingList | ValidationError | GenericError;

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
  policy_obj: Policy;
  group_obj: Group;
  user_obj: User;
  target: Scalars['UUID']['output'];
  /** Negates the outcome of the policy. Messages are unaffected. */
  negate?: Maybe<Scalars['Boolean']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  order: Scalars['Int']['output'];
  /** Timeout after which Policy execution is terminated. */
  timeout?: Maybe<Scalars['NonNegativeInt']['output']>;
  /** Result if the Policy execution fails. */
  failure_result?: Maybe<Scalars['Boolean']['output']>;
};

export type policies_bindings_retrieve_response = PolicyBinding | ValidationError | GenericError;

export type policies_bindings_used_by_list_response = UsedBy | ValidationError | GenericError;

export type policies_dummy_list_response = PaginatedDummyPolicyList | ValidationError | GenericError;

export type PaginatedDummyPolicyList = {
  pagination: Pagination;
  results: Array<Maybe<DummyPolicy>>;
};

/** Dummy Policy Serializer */
export type DummyPolicy = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged. */
  execution_logging?: Maybe<Scalars['Boolean']['output']>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  /** Return objects policy is bound to */
  bound_to: Scalars['Int']['output'];
  result?: Maybe<Scalars['Boolean']['output']>;
  wait_min?: Maybe<Scalars['Int']['output']>;
  wait_max?: Maybe<Scalars['Int']['output']>;
};

export type policies_dummy_retrieve_response = DummyPolicy | ValidationError | GenericError;

export type policies_dummy_used_by_list_response = UsedBy | ValidationError | GenericError;

export type policies_event_matcher_list_response = PaginatedEventMatcherPolicyList | ValidationError | GenericError;

export type PaginatedEventMatcherPolicyList = {
  pagination: Pagination;
  results: Array<Maybe<EventMatcherPolicy>>;
};

/** Event Matcher Policy Serializer */
export type EventMatcherPolicy = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged. */
  execution_logging?: Maybe<Scalars['Boolean']['output']>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  /** Return objects policy is bound to */
  bound_to: Scalars['Int']['output'];
  action?: Maybe<EventActions>;
  /** Matches Event's Client IP (strict matching, for network matching use an Expression Policy) */
  client_ip?: Maybe<Scalars['String']['output']>;
  app?: Maybe<AppEnum>;
  model?: Maybe<ModelEnum>;
};

export type AppEnum =
  | 'authentik_tenants'
  | 'authentik_admin'
  | 'authentik_api'
  | 'authentik_crypto'
  | 'authentik_flows'
  | 'authentik_outposts'
  | 'authentik_policies_dummy'
  | 'authentik_policies_event_matcher'
  | 'authentik_policies_expiry'
  | 'authentik_policies_expression'
  | 'authentik_policies_password'
  | 'authentik_policies_reputation'
  | 'authentik_policies'
  | 'authentik_providers_ldap'
  | 'authentik_providers_oauth2'
  | 'authentik_providers_proxy'
  | 'authentik_providers_radius'
  | 'authentik_providers_saml'
  | 'authentik_providers_scim'
  | 'authentik_rbac'
  | 'authentik_recovery'
  | 'authentik_sources_ldap'
  | 'authentik_sources_oauth'
  | 'authentik_sources_plex'
  | 'authentik_sources_saml'
  | 'authentik_sources_scim'
  | 'authentik_stages_authenticator'
  | 'authentik_stages_authenticator_duo'
  | 'authentik_stages_authenticator_sms'
  | 'authentik_stages_authenticator_static'
  | 'authentik_stages_authenticator_totp'
  | 'authentik_stages_authenticator_validate'
  | 'authentik_stages_authenticator_webauthn'
  | 'authentik_stages_captcha'
  | 'authentik_stages_consent'
  | 'authentik_stages_deny'
  | 'authentik_stages_dummy'
  | 'authentik_stages_email'
  | 'authentik_stages_identification'
  | 'authentik_stages_invitation'
  | 'authentik_stages_password'
  | 'authentik_stages_prompt'
  | 'authentik_stages_user_delete'
  | 'authentik_stages_user_login'
  | 'authentik_stages_user_logout'
  | 'authentik_stages_user_write'
  | 'authentik_brands'
  | 'authentik_blueprints'
  | 'authentik_core'
  | 'authentik_enterprise'
  | 'authentik_enterprise_audit'
  | 'authentik_enterprise_providers_rac'
  | 'authentik_enterprise_stages_source'
  | 'authentik_events';

export type ModelEnum =
  | 'authentik_tenants_domain'
  | 'authentik_crypto_certificatekeypair'
  | 'authentik_flows_flow'
  | 'authentik_flows_flowstagebinding'
  | 'authentik_outposts_dockerserviceconnection'
  | 'authentik_outposts_kubernetesserviceconnection'
  | 'authentik_outposts_outpost'
  | 'authentik_policies_dummy_dummypolicy'
  | 'authentik_policies_event_matcher_eventmatcherpolicy'
  | 'authentik_policies_expiry_passwordexpirypolicy'
  | 'authentik_policies_expression_expressionpolicy'
  | 'authentik_policies_password_passwordpolicy'
  | 'authentik_policies_reputation_reputationpolicy'
  | 'authentik_policies_policybinding'
  | 'authentik_providers_ldap_ldapprovider'
  | 'authentik_providers_oauth2_scopemapping'
  | 'authentik_providers_oauth2_oauth2provider'
  | 'authentik_providers_proxy_proxyprovider'
  | 'authentik_providers_radius_radiusprovider'
  | 'authentik_providers_saml_samlprovider'
  | 'authentik_providers_saml_samlpropertymapping'
  | 'authentik_providers_scim_scimprovider'
  | 'authentik_providers_scim_scimmapping'
  | 'authentik_rbac_role'
  | 'authentik_sources_ldap_ldapsource'
  | 'authentik_sources_ldap_ldappropertymapping'
  | 'authentik_sources_oauth_oauthsource'
  | 'authentik_sources_oauth_useroauthsourceconnection'
  | 'authentik_sources_plex_plexsource'
  | 'authentik_sources_plex_plexsourceconnection'
  | 'authentik_sources_saml_samlsource'
  | 'authentik_sources_saml_usersamlsourceconnection'
  | 'authentik_sources_scim_scimsource'
  | 'authentik_stages_authenticator_duo_authenticatorduostage'
  | 'authentik_stages_authenticator_duo_duodevice'
  | 'authentik_stages_authenticator_sms_authenticatorsmsstage'
  | 'authentik_stages_authenticator_sms_smsdevice'
  | 'authentik_stages_authenticator_static_authenticatorstaticstage'
  | 'authentik_stages_authenticator_static_staticdevice'
  | 'authentik_stages_authenticator_totp_authenticatortotpstage'
  | 'authentik_stages_authenticator_totp_totpdevice'
  | 'authentik_stages_authenticator_validate_authenticatorvalidatestage'
  | 'authentik_stages_authenticator_webauthn_authenticatorwebauthnstage'
  | 'authentik_stages_authenticator_webauthn_webauthndevice'
  | 'authentik_stages_captcha_captchastage'
  | 'authentik_stages_consent_consentstage'
  | 'authentik_stages_consent_userconsent'
  | 'authentik_stages_deny_denystage'
  | 'authentik_stages_dummy_dummystage'
  | 'authentik_stages_email_emailstage'
  | 'authentik_stages_identification_identificationstage'
  | 'authentik_stages_invitation_invitationstage'
  | 'authentik_stages_invitation_invitation'
  | 'authentik_stages_password_passwordstage'
  | 'authentik_stages_prompt_prompt'
  | 'authentik_stages_prompt_promptstage'
  | 'authentik_stages_user_delete_userdeletestage'
  | 'authentik_stages_user_login_userloginstage'
  | 'authentik_stages_user_logout_userlogoutstage'
  | 'authentik_stages_user_write_userwritestage'
  | 'authentik_brands_brand'
  | 'authentik_blueprints_blueprintinstance'
  | 'authentik_core_group'
  | 'authentik_core_user'
  | 'authentik_core_application'
  | 'authentik_core_token'
  | 'authentik_enterprise_license'
  | 'authentik_providers_rac_racprovider'
  | 'authentik_providers_rac_endpoint'
  | 'authentik_providers_rac_racpropertymapping'
  | 'authentik_stages_source_sourcestage'
  | 'authentik_events_event'
  | 'authentik_events_notificationtransport'
  | 'authentik_events_notification'
  | 'authentik_events_notificationrule'
  | 'authentik_events_notificationwebhookmapping';

/** Match created events with this action type. When left empty, all action types will be matched. */
export type queryInput_policies_event_matcher_list_action =
  | 'authorize_application'
  | 'configuration_error'
  | 'custom_'
  | 'email_sent'
  | 'flow_execution'
  | 'impersonation_ended'
  | 'impersonation_started'
  | 'invitation_used'
  | 'login'
  | 'login_failed'
  | 'logout'
  | 'model_created'
  | 'model_deleted'
  | 'model_updated'
  | 'password_set'
  | 'policy_exception'
  | 'policy_execution'
  | 'property_mapping_exception'
  | 'secret_rotate'
  | 'secret_view'
  | 'source_linked'
  | 'suspicious_request'
  | 'system_exception'
  | 'system_task_exception'
  | 'system_task_execution'
  | 'update_available'
  | 'user_write';

export type policies_event_matcher_retrieve_response = EventMatcherPolicy | ValidationError | GenericError;

export type policies_event_matcher_used_by_list_response = UsedBy | ValidationError | GenericError;

export type policies_expression_list_response = PaginatedExpressionPolicyList | ValidationError | GenericError;

export type PaginatedExpressionPolicyList = {
  pagination: Pagination;
  results: Array<Maybe<ExpressionPolicy>>;
};

/** Group Membership Policy Serializer */
export type ExpressionPolicy = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged. */
  execution_logging?: Maybe<Scalars['Boolean']['output']>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  /** Return objects policy is bound to */
  bound_to: Scalars['Int']['output'];
  expression: Scalars['String']['output'];
};

export type policies_expression_retrieve_response = ExpressionPolicy | ValidationError | GenericError;

export type policies_expression_used_by_list_response = UsedBy | ValidationError | GenericError;

export type policies_password_list_response = PaginatedPasswordPolicyList | ValidationError | GenericError;

export type PaginatedPasswordPolicyList = {
  pagination: Pagination;
  results: Array<Maybe<PasswordPolicy>>;
};

/** Password Policy Serializer */
export type PasswordPolicy = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged. */
  execution_logging?: Maybe<Scalars['Boolean']['output']>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  /** Return objects policy is bound to */
  bound_to: Scalars['Int']['output'];
  /** Field key to check, field keys defined in Prompt stages are available. */
  password_field?: Maybe<Scalars['String']['output']>;
  amount_digits?: Maybe<Scalars['NonNegativeInt']['output']>;
  amount_uppercase?: Maybe<Scalars['NonNegativeInt']['output']>;
  amount_lowercase?: Maybe<Scalars['NonNegativeInt']['output']>;
  amount_symbols?: Maybe<Scalars['NonNegativeInt']['output']>;
  length_min?: Maybe<Scalars['NonNegativeInt']['output']>;
  symbol_charset?: Maybe<Scalars['String']['output']>;
  error_message?: Maybe<Scalars['String']['output']>;
  check_static_rules?: Maybe<Scalars['Boolean']['output']>;
  check_have_i_been_pwned?: Maybe<Scalars['Boolean']['output']>;
  check_zxcvbn?: Maybe<Scalars['Boolean']['output']>;
  /** How many times the password hash is allowed to be on haveibeenpwned */
  hibp_allowed_count?: Maybe<Scalars['NonNegativeInt']['output']>;
  /** If the zxcvbn score is equal or less than this value, the policy will fail. */
  zxcvbn_score_threshold?: Maybe<Scalars['NonNegativeInt']['output']>;
};

export type policies_password_retrieve_response = PasswordPolicy | ValidationError | GenericError;

export type policies_password_used_by_list_response = UsedBy | ValidationError | GenericError;

export type policies_password_expiry_list_response = PaginatedPasswordExpiryPolicyList | ValidationError | GenericError;

export type PaginatedPasswordExpiryPolicyList = {
  pagination: Pagination;
  results: Array<Maybe<PasswordExpiryPolicy>>;
};

/** Password Expiry Policy Serializer */
export type PasswordExpiryPolicy = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged. */
  execution_logging?: Maybe<Scalars['Boolean']['output']>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  /** Return objects policy is bound to */
  bound_to: Scalars['Int']['output'];
  days: Scalars['Int']['output'];
  deny_only?: Maybe<Scalars['Boolean']['output']>;
};

export type policies_password_expiry_retrieve_response = PasswordExpiryPolicy | ValidationError | GenericError;

export type policies_password_expiry_used_by_list_response = UsedBy | ValidationError | GenericError;

export type policies_reputation_list_response = PaginatedReputationPolicyList | ValidationError | GenericError;

export type PaginatedReputationPolicyList = {
  pagination: Pagination;
  results: Array<Maybe<ReputationPolicy>>;
};

/** Reputation Policy Serializer */
export type ReputationPolicy = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged. */
  execution_logging?: Maybe<Scalars['Boolean']['output']>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  /** Return objects policy is bound to */
  bound_to: Scalars['Int']['output'];
  check_ip?: Maybe<Scalars['Boolean']['output']>;
  check_username?: Maybe<Scalars['Boolean']['output']>;
  threshold?: Maybe<Scalars['Int']['output']>;
};

export type policies_reputation_retrieve_response = ReputationPolicy | ValidationError | GenericError;

export type policies_reputation_used_by_list_response = UsedBy | ValidationError | GenericError;

export type policies_reputation_scores_list_response = PaginatedReputationList | ValidationError | GenericError;

export type PaginatedReputationList = {
  pagination: Pagination;
  results: Array<Maybe<Reputation>>;
};

/** Reputation Serializer */
export type Reputation = {
  pk?: Maybe<Scalars['UUID']['output']>;
  identifier: Scalars['String']['output'];
  ip: Scalars['String']['output'];
  ip_geo_data?: Maybe<Scalars['JSON']['output']>;
  ip_asn_data?: Maybe<Scalars['JSON']['output']>;
  score?: Maybe<Scalars['BigInt']['output']>;
  updated: Scalars['DateTime']['output'];
};

export type policies_reputation_scores_retrieve_response = Reputation | ValidationError | GenericError;

export type policies_reputation_scores_used_by_list_response = UsedBy | ValidationError | GenericError;

export type propertymappings_all_list_response = PaginatedPropertyMappingList | ValidationError | GenericError;

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
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
};

export type propertymappings_all_retrieve_response = PropertyMapping | ValidationError | GenericError;

export type propertymappings_all_used_by_list_response = UsedBy | ValidationError | GenericError;

export type propertymappings_all_types_list_response = TypeCreate | ValidationError | GenericError;

export type propertymappings_ldap_list_response = PaginatedLDAPPropertyMappingList | ValidationError | GenericError;

export type PaginatedLDAPPropertyMappingList = {
  pagination: Pagination;
  results: Array<Maybe<LDAPPropertyMapping>>;
};

/** LDAP PropertyMapping Serializer */
export type LDAPPropertyMapping = {
  pk: Scalars['UUID']['output'];
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  expression: Scalars['String']['output'];
  /** Get object's component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  object_field: Scalars['String']['output'];
};

export type propertymappings_ldap_retrieve_response = LDAPPropertyMapping | ValidationError | GenericError;

export type propertymappings_ldap_used_by_list_response = UsedBy | ValidationError | GenericError;

export type propertymappings_notification_list_response = PaginatedNotificationWebhookMappingList | ValidationError | GenericError;

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

export type propertymappings_notification_retrieve_response = NotificationWebhookMapping | ValidationError | GenericError;

export type propertymappings_notification_used_by_list_response = UsedBy | ValidationError | GenericError;

export type propertymappings_rac_list_response = PaginatedRACPropertyMappingList | ValidationError | GenericError;

export type PaginatedRACPropertyMappingList = {
  pagination: Pagination;
  results: Array<Maybe<RACPropertyMapping>>;
};

/** RACPropertyMapping Serializer */
export type RACPropertyMapping = {
  pk: Scalars['UUID']['output'];
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  expression?: Maybe<Scalars['String']['output']>;
  /** Get object's component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  static_settings: Scalars['JSON']['output'];
};

export type propertymappings_rac_retrieve_response = RACPropertyMapping | ValidationError | GenericError;

export type propertymappings_rac_used_by_list_response = UsedBy | ValidationError | GenericError;

export type propertymappings_saml_list_response = PaginatedSAMLPropertyMappingList | ValidationError | GenericError;

export type PaginatedSAMLPropertyMappingList = {
  pagination: Pagination;
  results: Array<Maybe<SAMLPropertyMapping>>;
};

/** SAMLPropertyMapping Serializer */
export type SAMLPropertyMapping = {
  pk: Scalars['UUID']['output'];
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  expression: Scalars['String']['output'];
  /** Get object's component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  saml_name: Scalars['String']['output'];
  friendly_name?: Maybe<Scalars['String']['output']>;
};

export type propertymappings_saml_retrieve_response = SAMLPropertyMapping | ValidationError | GenericError;

export type propertymappings_saml_used_by_list_response = UsedBy | ValidationError | GenericError;

export type propertymappings_scim_list_response = PaginatedSCIMMappingList | ValidationError | GenericError;

export type PaginatedSCIMMappingList = {
  pagination: Pagination;
  results: Array<Maybe<SCIMMapping>>;
};

/** SCIMMapping Serializer */
export type SCIMMapping = {
  pk: Scalars['UUID']['output'];
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  expression: Scalars['String']['output'];
  /** Get object's component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
};

export type propertymappings_scim_retrieve_response = SCIMMapping | ValidationError | GenericError;

export type propertymappings_scim_used_by_list_response = UsedBy | ValidationError | GenericError;

export type propertymappings_scope_list_response = PaginatedScopeMappingList | ValidationError | GenericError;

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
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  /** Scope name requested by the client */
  scope_name: Scalars['String']['output'];
  /** Description shown to the user when consenting. If left empty, the user won't be informed. */
  description?: Maybe<Scalars['String']['output']>;
};

export type propertymappings_scope_retrieve_response = ScopeMapping | ValidationError | GenericError;

export type propertymappings_scope_used_by_list_response = UsedBy | ValidationError | GenericError;

export type providers_all_list_response = PaginatedProviderList | ValidationError | GenericError;

export type PaginatedProviderList = {
  pagination: Pagination;
  results: Array<Maybe<Provider>>;
};

export type providers_all_retrieve_response = Provider | ValidationError | GenericError;

export type providers_all_used_by_list_response = UsedBy | ValidationError | GenericError;

export type providers_all_types_list_response = TypeCreate | ValidationError | GenericError;

export type providers_ldap_list_response = PaginatedLDAPProviderList | ValidationError | GenericError;

export type PaginatedLDAPProviderList = {
  pagination: Pagination;
  results: Array<Maybe<LDAPProvider>>;
};

/** LDAPProvider Serializer */
export type LDAPProvider = {
  pk: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** Flow used for authentication when the associated application is accessed by an un-authenticated user. */
  authentication_flow?: Maybe<Scalars['UUID']['output']>;
  /** Flow used when authorizing this provider. */
  authorization_flow: Scalars['UUID']['output'];
  property_mappings?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Internal application name, used in URLs. */
  assigned_application_slug: Scalars['String']['output'];
  /** Application's display Name. */
  assigned_application_name: Scalars['String']['output'];
  /** Internal application name, used in URLs. */
  assigned_backchannel_application_slug: Scalars['String']['output'];
  /** Application's display Name. */
  assigned_backchannel_application_name: Scalars['String']['output'];
  /** Return object's verbose_name */
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  /** DN under which objects are accessible. */
  base_dn?: Maybe<Scalars['String']['output']>;
  /** Users in this group can do search queries. If not set, every user can execute search queries. */
  search_group?: Maybe<Scalars['UUID']['output']>;
  certificate?: Maybe<Scalars['UUID']['output']>;
  tls_server_name?: Maybe<Scalars['String']['output']>;
  /** The start for uidNumbers, this number is added to the user.pk to make sure that the numbers aren't too low for POSIX users. Default is 2000 to ensure that we don't collide with local users uidNumber */
  uid_start_number?: Maybe<Scalars['Int']['output']>;
  /** The start for gidNumbers, this number is added to a number generated from the group.pk to make sure that the numbers aren't too low for POSIX groups. Default is 4000 to ensure that we don't collide with local groups or users primary groups gidNumber */
  gid_start_number?: Maybe<Scalars['Int']['output']>;
  outpost_set: Array<Maybe<Scalars['String']['output']>>;
  search_mode?: Maybe<LDAPAPIAccessMode>;
  bind_mode?: Maybe<LDAPAPIAccessMode>;
  /** When enabled, code-based multi-factor authentication can be used by appending a semicolon and the TOTP code to the password. This should only be enabled if all users that will bind to this provider have a TOTP device configured, as otherwise a password may incorrectly be rejected if it contains a semicolon. */
  mfa_support?: Maybe<Scalars['Boolean']['output']>;
};

export type providers_ldap_retrieve_response = LDAPProvider | ValidationError | GenericError;

export type providers_ldap_used_by_list_response = UsedBy | ValidationError | GenericError;

export type providers_oauth2_list_response = PaginatedOAuth2ProviderList | ValidationError | GenericError;

export type PaginatedOAuth2ProviderList = {
  pagination: Pagination;
  results: Array<Maybe<OAuth2Provider>>;
};

/** Confidential clients are capable of maintaining the confidentiality of their credentials. Public clients are incapable */
export type queryInput_providers_oauth2_list_client_type =
  | 'confidential'
  | 'public';

/** Configure how the issuer field of the ID Token should be filled. */
export type queryInput_providers_oauth2_list_issuer_mode =
  | 'global'
  | 'per_provider';

/** Configure what data should be used as unique User Identifier. For most cases, the default should be fine. */
export type queryInput_providers_oauth2_list_sub_mode =
  | 'hashed_user_id'
  | 'user_email'
  | 'user_id'
  | 'user_upn'
  | 'user_username'
  | 'user_uuid';

export type providers_oauth2_retrieve_response = OAuth2Provider | ValidationError | GenericError;

export type providers_oauth2_preview_user_retrieve_response = PropertyMappingPreview | GenericError;

/** Preview how the current user is mapped via the property mappings selected in a provider */
export type PropertyMappingPreview = {
  preview: Scalars['JSON']['output'];
};

export type providers_oauth2_setup_urls_retrieve_response = OAuth2ProviderSetupURLs | ValidationError | GenericError;

/** OAuth2 Provider Metadata serializer */
export type OAuth2ProviderSetupURLs = {
  issuer: Scalars['String']['output'];
  authorize: Scalars['String']['output'];
  token: Scalars['String']['output'];
  user_info: Scalars['String']['output'];
  provider_info: Scalars['String']['output'];
  logout: Scalars['String']['output'];
  jwks: Scalars['String']['output'];
};

export type providers_oauth2_used_by_list_response = UsedBy | ValidationError | GenericError;

export type providers_proxy_list_response = PaginatedProxyProviderList | ValidationError | GenericError;

export type PaginatedProxyProviderList = {
  pagination: Pagination;
  results: Array<Maybe<ProxyProvider>>;
};

/** ProxyProvider Serializer */
export type ProxyProvider = {
  pk: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** Flow used for authentication when the associated application is accessed by an un-authenticated user. */
  authentication_flow?: Maybe<Scalars['UUID']['output']>;
  /** Flow used when authorizing this provider. */
  authorization_flow: Scalars['UUID']['output'];
  property_mappings?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Internal application name, used in URLs. */
  assigned_application_slug: Scalars['String']['output'];
  /** Application's display Name. */
  assigned_application_name: Scalars['String']['output'];
  /** Internal application name, used in URLs. */
  assigned_backchannel_application_slug: Scalars['String']['output'];
  /** Application's display Name. */
  assigned_backchannel_application_name: Scalars['String']['output'];
  /** Return object's verbose_name */
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  client_id: Scalars['String']['output'];
  internal_host?: Maybe<Scalars['URL']['output']>;
  external_host: Scalars['URL']['output'];
  /** Validate SSL Certificates of upstream servers */
  internal_host_ssl_validation?: Maybe<Scalars['Boolean']['output']>;
  certificate?: Maybe<Scalars['UUID']['output']>;
  /** Regular expressions for which authentication is not required. Each new line is interpreted as a new Regular Expression. */
  skip_path_regex?: Maybe<Scalars['String']['output']>;
  /** Set a custom HTTP-Basic Authentication header based on values from authentik. */
  basic_auth_enabled?: Maybe<Scalars['Boolean']['output']>;
  /** User/Group Attribute used for the password part of the HTTP-Basic Header. */
  basic_auth_password_attribute?: Maybe<Scalars['String']['output']>;
  /** User/Group Attribute used for the user part of the HTTP-Basic Header. If not set, the user's Email address is used. */
  basic_auth_user_attribute?: Maybe<Scalars['String']['output']>;
  mode?: Maybe<ProxyMode>;
  /** When enabled, this provider will intercept the authorization header and authenticate requests based on its value. */
  intercept_header_auth?: Maybe<Scalars['Boolean']['output']>;
  redirect_uris: Scalars['String']['output'];
  cookie_domain?: Maybe<Scalars['String']['output']>;
  jwks_sources?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  /** Tokens not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  access_token_validity?: Maybe<Scalars['String']['output']>;
  /** Tokens not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  refresh_token_validity?: Maybe<Scalars['String']['output']>;
  outpost_set: Array<Maybe<Scalars['String']['output']>>;
};

export type providers_proxy_retrieve_response = ProxyProvider | ValidationError | GenericError;

export type providers_proxy_used_by_list_response = UsedBy | ValidationError | GenericError;

export type providers_rac_list_response = PaginatedRACProviderList | ValidationError | GenericError;

export type PaginatedRACProviderList = {
  pagination: Pagination;
  results: Array<Maybe<RACProvider>>;
};

/** RACProvider Serializer */
export type RACProvider = {
  pk: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** Flow used for authentication when the associated application is accessed by an un-authenticated user. */
  authentication_flow?: Maybe<Scalars['UUID']['output']>;
  /** Flow used when authorizing this provider. */
  authorization_flow: Scalars['UUID']['output'];
  property_mappings?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Internal application name, used in URLs. */
  assigned_application_slug: Scalars['String']['output'];
  /** Application's display Name. */
  assigned_application_name: Scalars['String']['output'];
  /** Internal application name, used in URLs. */
  assigned_backchannel_application_slug: Scalars['String']['output'];
  /** Application's display Name. */
  assigned_backchannel_application_name: Scalars['String']['output'];
  /** Return object's verbose_name */
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  settings?: Maybe<Scalars['JSON']['output']>;
  outpost_set: Array<Maybe<Scalars['String']['output']>>;
  /** Determines how long a session lasts. Default of 0 means that the sessions lasts until the browser is closed. (Format: hours=-1;minutes=-2;seconds=-3) */
  connection_expiry?: Maybe<Scalars['String']['output']>;
  /** When set to true, connection tokens will be deleted upon disconnect. */
  delete_token_on_disconnect?: Maybe<Scalars['Boolean']['output']>;
  additionalProperties?: Maybe<Scalars['JSON']['output']>;
};

export type providers_rac_retrieve_response = RACProvider | ValidationError | GenericError;

export type providers_rac_used_by_list_response = UsedBy | ValidationError | GenericError;

export type providers_radius_list_response = PaginatedRadiusProviderList | ValidationError | GenericError;

export type PaginatedRadiusProviderList = {
  pagination: Pagination;
  results: Array<Maybe<RadiusProvider>>;
};

/** RadiusProvider Serializer */
export type RadiusProvider = {
  pk: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** Flow used for authentication when the associated application is accessed by an un-authenticated user. */
  authentication_flow?: Maybe<Scalars['UUID']['output']>;
  /** Flow used when authorizing this provider. */
  authorization_flow: Scalars['UUID']['output'];
  property_mappings?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Internal application name, used in URLs. */
  assigned_application_slug: Scalars['String']['output'];
  /** Application's display Name. */
  assigned_application_name: Scalars['String']['output'];
  /** Internal application name, used in URLs. */
  assigned_backchannel_application_slug: Scalars['String']['output'];
  /** Application's display Name. */
  assigned_backchannel_application_name: Scalars['String']['output'];
  /** Return object's verbose_name */
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  /** List of CIDRs (comma-separated) that clients can connect from. A more specific CIDR will match before a looser one. Clients connecting from a non-specified CIDR will be dropped. */
  client_networks?: Maybe<Scalars['String']['output']>;
  /** Shared secret between clients and server to hash packets. */
  shared_secret?: Maybe<Scalars['String']['output']>;
  outpost_set: Array<Maybe<Scalars['String']['output']>>;
  /** When enabled, code-based multi-factor authentication can be used by appending a semicolon and the TOTP code to the password. This should only be enabled if all users that will bind to this provider have a TOTP device configured, as otherwise a password may incorrectly be rejected if it contains a semicolon. */
  mfa_support?: Maybe<Scalars['Boolean']['output']>;
};

export type providers_radius_retrieve_response = RadiusProvider | ValidationError | GenericError;

export type providers_radius_used_by_list_response = UsedBy | ValidationError | GenericError;

export type providers_saml_list_response = PaginatedSAMLProviderList | ValidationError | GenericError;

export type PaginatedSAMLProviderList = {
  pagination: Pagination;
  results: Array<Maybe<SAMLProvider>>;
};

/** SAMLProvider Serializer */
export type SAMLProvider = {
  pk: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** Flow used for authentication when the associated application is accessed by an un-authenticated user. */
  authentication_flow?: Maybe<Scalars['UUID']['output']>;
  /** Flow used when authorizing this provider. */
  authorization_flow: Scalars['UUID']['output'];
  property_mappings?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Internal application name, used in URLs. */
  assigned_application_slug: Scalars['String']['output'];
  /** Application's display Name. */
  assigned_application_name: Scalars['String']['output'];
  /** Internal application name, used in URLs. */
  assigned_backchannel_application_slug: Scalars['String']['output'];
  /** Application's display Name. */
  assigned_backchannel_application_name: Scalars['String']['output'];
  /** Return object's verbose_name */
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  acs_url: Scalars['URL']['output'];
  /** Value of the audience restriction field of the assertion. When left empty, no audience restriction will be added. */
  audience?: Maybe<Scalars['String']['output']>;
  /** Also known as EntityID */
  issuer?: Maybe<Scalars['String']['output']>;
  /** Assertion valid not before current time + this value (Format: hours=-1;minutes=-2;seconds=-3). */
  assertion_valid_not_before?: Maybe<Scalars['String']['output']>;
  /** Assertion not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  assertion_valid_not_on_or_after?: Maybe<Scalars['String']['output']>;
  /** Session not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  session_valid_not_on_or_after?: Maybe<Scalars['String']['output']>;
  /** Configure how the NameID value will be created. When left empty, the NameIDPolicy of the incoming request will be considered */
  name_id_mapping?: Maybe<Scalars['UUID']['output']>;
  digest_algorithm?: Maybe<DigestAlgorithmEnum>;
  signature_algorithm?: Maybe<SignatureAlgorithmEnum>;
  /** Keypair used to sign outgoing Responses going to the Service Provider. */
  signing_kp?: Maybe<Scalars['UUID']['output']>;
  /** When selected, incoming assertion's Signatures will be validated against this certificate. To allow unsigned Requests, leave on default. */
  verification_kp?: Maybe<Scalars['UUID']['output']>;
  /** This determines how authentik sends the response back to the Service Provider. */
  sp_binding?: Maybe<Service_Provider_Binding>;
  /** Default relay_state value for IDP-initiated logins */
  default_relay_state?: Maybe<Scalars['String']['output']>;
  /** Get metadata download URL */
  url_download_metadata: Scalars['String']['output'];
  /** Get SSO Post URL */
  url_sso_post: Scalars['String']['output'];
  /** Get SSO Redirect URL */
  url_sso_redirect: Scalars['String']['output'];
  /** Get SSO IDP-Initiated URL */
  url_sso_init: Scalars['String']['output'];
  /** Get SLO POST URL */
  url_slo_post: Scalars['String']['output'];
  /** Get SLO redirect URL */
  url_slo_redirect: Scalars['String']['output'];
};

export type DigestAlgorithmEnum =
  | 'http___www_w3_org_2000_09_xmldsig_POUND_sha1'
  | 'http___www_w3_org_2001_04_xmlenc_POUND_sha256'
  | 'http___www_w3_org_2001_04_xmldsig_more_POUND_sha384'
  | 'http___www_w3_org_2001_04_xmlenc_POUND_sha512';

export type SignatureAlgorithmEnum =
  | 'http___www_w3_org_2000_09_xmldsig_POUND_rsa_sha1'
  | 'http___www_w3_org_2001_04_xmldsig_more_POUND_rsa_sha256'
  | 'http___www_w3_org_2001_04_xmldsig_more_POUND_rsa_sha384'
  | 'http___www_w3_org_2001_04_xmldsig_more_POUND_rsa_sha512'
  | 'http___www_w3_org_2001_04_xmldsig_more_POUND_ecdsa_sha1'
  | 'http___www_w3_org_2001_04_xmldsig_more_POUND_ecdsa_sha256'
  | 'http___www_w3_org_2001_04_xmldsig_more_POUND_ecdsa_sha384'
  | 'http___www_w3_org_2001_04_xmldsig_more_POUND_ecdsa_sha512'
  | 'http___www_w3_org_2000_09_xmldsig_POUND_dsa_sha1';

/** This determines how authentik sends the response back to the Service Provider. */
export type Service_Provider_Binding = {
  SpBindingEnum?: Maybe<SpBindingEnum>;
};

export type SpBindingEnum =
  | 'redirect'
  | 'post';

export type queryInput_providers_saml_list_digest_algorithm =
  | 'http___www_w3_org_2000_09_xmldsig_POUND_sha1'
  | 'http___www_w3_org_2001_04_xmldsig_more_POUND_sha384'
  | 'http___www_w3_org_2001_04_xmlenc_POUND_sha256'
  | 'http___www_w3_org_2001_04_xmlenc_POUND_sha512';

export type queryInput_providers_saml_list_signature_algorithm =
  | 'http___www_w3_org_2000_09_xmldsig_POUND_dsa_sha1'
  | 'http___www_w3_org_2000_09_xmldsig_POUND_rsa_sha1'
  | 'http___www_w3_org_2001_04_xmldsig_more_POUND_ecdsa_sha1'
  | 'http___www_w3_org_2001_04_xmldsig_more_POUND_ecdsa_sha256'
  | 'http___www_w3_org_2001_04_xmldsig_more_POUND_ecdsa_sha384'
  | 'http___www_w3_org_2001_04_xmldsig_more_POUND_ecdsa_sha512'
  | 'http___www_w3_org_2001_04_xmldsig_more_POUND_rsa_sha256'
  | 'http___www_w3_org_2001_04_xmldsig_more_POUND_rsa_sha384'
  | 'http___www_w3_org_2001_04_xmldsig_more_POUND_rsa_sha512';

/** This determines how authentik sends the response back to the Service Provider. */
export type queryInput_providers_saml_list_sp_binding =
  | 'post'
  | 'redirect';

export type providers_saml_retrieve_response = SAMLProvider | ValidationError | GenericError;

export type providers_saml_metadata_retrieve_response = SAMLMetadata | ValidationError | GenericError;

/** SAML Provider Metadata serializer */
export type SAMLMetadata = {
  metadata: Scalars['String']['output'];
  download_url: Scalars['String']['output'];
};

/** Optionally force the metadata to only include one binding. */
export type queryInput_providers_saml_metadata_retrieve_force_binding =
  | 'urn_oasis_names_tc_SAML_2_0_bindings_HTTP_POST'
  | 'urn_oasis_names_tc_SAML_2_0_bindings_HTTP_Redirect';

export type providers_saml_preview_user_retrieve_response = PropertyMappingPreview | GenericError;

export type providers_saml_used_by_list_response = UsedBy | ValidationError | GenericError;

export type providers_scim_list_response = PaginatedSCIMProviderList | ValidationError | GenericError;

export type PaginatedSCIMProviderList = {
  pagination: Pagination;
  results: Array<Maybe<SCIMProvider>>;
};

/** SCIMProvider Serializer */
export type SCIMProvider = {
  pk: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  property_mappings?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  /** Property mappings used for group creation/updating. */
  property_mappings_group?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Internal application name, used in URLs. */
  assigned_backchannel_application_slug: Scalars['String']['output'];
  /** Application's display Name. */
  assigned_backchannel_application_name: Scalars['String']['output'];
  /** Return object's verbose_name */
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  /** Base URL to SCIM requests, usually ends in /v2 */
  url: Scalars['String']['output'];
  /** Authentication token */
  token: Scalars['String']['output'];
  exclude_users_service_account?: Maybe<Scalars['Boolean']['output']>;
  filter_group?: Maybe<Scalars['UUID']['output']>;
};

export type providers_scim_retrieve_response = SCIMProvider | ValidationError | GenericError;

export type providers_scim_sync_status_retrieve_response = SCIMSyncStatus | ValidationError | GenericError;

/** SCIM Provider sync status */
export type SCIMSyncStatus = {
  is_running: Scalars['Boolean']['output'];
  tasks: Array<Maybe<SystemTask>>;
};

export type providers_scim_used_by_list_response = UsedBy | ValidationError | GenericError;

export type rac_connection_tokens_list_response = PaginatedConnectionTokenList | ValidationError | GenericError;

export type PaginatedConnectionTokenList = {
  pagination: Pagination;
  results: Array<Maybe<ConnectionToken>>;
};

/** ConnectionToken Serializer */
export type ConnectionToken = {
  pk?: Maybe<Scalars['UUID']['output']>;
  provider: Scalars['Int']['output'];
  provider_obj: RACProvider;
  endpoint: Scalars['UUID']['output'];
  endpoint_obj: Endpoint;
  user: GroupMember;
};

/** Endpoint Serializer */
export type Endpoint = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  provider: Scalars['Int']['output'];
  provider_obj: RACProvider;
  protocol: ProtocolEnum;
  host: Scalars['String']['output'];
  settings?: Maybe<Scalars['JSON']['output']>;
  property_mappings?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  auth_mode: AuthModeEnum;
  /**
   * Build actual launch URL (the provider itself does not have one, just
   * individual endpoints)
   */
  launch_url?: Maybe<Scalars['String']['output']>;
  maximum_connections?: Maybe<Scalars['Int']['output']>;
  additionalProperties?: Maybe<Scalars['JSON']['output']>;
};

export type ProtocolEnum =
  | 'rdp'
  | 'vnc'
  | 'ssh';

export type AuthModeEnum =
  | 'static'
  | 'prompt';

export type rac_connection_tokens_retrieve_response = ConnectionToken | ValidationError | GenericError;

export type rac_connection_tokens_used_by_list_response = UsedBy | ValidationError | GenericError;

export type rac_endpoints_list_response = PaginatedEndpointList | GenericError;

export type PaginatedEndpointList = {
  pagination: Pagination;
  results: Array<Maybe<Endpoint>>;
};

export type rac_endpoints_retrieve_response = Endpoint | ValidationError | GenericError;

export type rac_endpoints_used_by_list_response = UsedBy | ValidationError | GenericError;

export type rbac_permissions_list_response = PaginatedPermissionList | ValidationError | GenericError;

export type PaginatedPermissionList = {
  pagination: Pagination;
  results: Array<Maybe<Permission>>;
};

/** Global permission */
export type Permission = {
  id: Scalars['Int']['output'];
  name: Scalars['query_rbac_permissions_list_oneOf_0_results_items_name']['output'];
  codename: Scalars['query_rbac_permissions_list_oneOf_0_results_items_codename']['output'];
  model: Scalars['String']['output'];
  app_label: Scalars['String']['output'];
  /** Human-readable app label */
  app_label_verbose: Scalars['String']['output'];
  /** Human-readable model name */
  model_verbose: Scalars['String']['output'];
};

export type rbac_permissions_retrieve_response = Permission | ValidationError | GenericError;

export type rbac_permissions_assigned_by_roles_list_response = PaginatedRoleAssignedObjectPermissionList | ValidationError | GenericError;

export type PaginatedRoleAssignedObjectPermissionList = {
  pagination: Pagination;
  results: Array<Maybe<RoleAssignedObjectPermission>>;
};

/** Roles assigned object permission serializer */
export type RoleAssignedObjectPermission = {
  role_pk: Scalars['String']['output'];
  name: Scalars['String']['output'];
  permissions: Array<Maybe<RoleObjectPermission>>;
};

/** Role-bound object level permission */
export type RoleObjectPermission = {
  id: Scalars['Int']['output'];
  codename: Scalars['String']['output'];
  model: Scalars['String']['output'];
  app_label: Scalars['String']['output'];
  object_pk: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type queryInput_rbac_permissions_assigned_by_roles_list_model =
  | 'authentik_blueprints_blueprintinstance'
  | 'authentik_brands_brand'
  | 'authentik_core_application'
  | 'authentik_core_group'
  | 'authentik_core_token'
  | 'authentik_core_user'
  | 'authentik_crypto_certificatekeypair'
  | 'authentik_enterprise_license'
  | 'authentik_events_event'
  | 'authentik_events_notification'
  | 'authentik_events_notificationrule'
  | 'authentik_events_notificationtransport'
  | 'authentik_events_notificationwebhookmapping'
  | 'authentik_flows_flow'
  | 'authentik_flows_flowstagebinding'
  | 'authentik_outposts_dockerserviceconnection'
  | 'authentik_outposts_kubernetesserviceconnection'
  | 'authentik_outposts_outpost'
  | 'authentik_policies_policybinding'
  | 'authentik_policies_dummy_dummypolicy'
  | 'authentik_policies_event_matcher_eventmatcherpolicy'
  | 'authentik_policies_expiry_passwordexpirypolicy'
  | 'authentik_policies_expression_expressionpolicy'
  | 'authentik_policies_password_passwordpolicy'
  | 'authentik_policies_reputation_reputationpolicy'
  | 'authentik_providers_ldap_ldapprovider'
  | 'authentik_providers_oauth2_oauth2provider'
  | 'authentik_providers_oauth2_scopemapping'
  | 'authentik_providers_proxy_proxyprovider'
  | 'authentik_providers_rac_endpoint'
  | 'authentik_providers_rac_racpropertymapping'
  | 'authentik_providers_rac_racprovider'
  | 'authentik_providers_radius_radiusprovider'
  | 'authentik_providers_saml_samlpropertymapping'
  | 'authentik_providers_saml_samlprovider'
  | 'authentik_providers_scim_scimmapping'
  | 'authentik_providers_scim_scimprovider'
  | 'authentik_rbac_role'
  | 'authentik_sources_ldap_ldappropertymapping'
  | 'authentik_sources_ldap_ldapsource'
  | 'authentik_sources_oauth_oauthsource'
  | 'authentik_sources_oauth_useroauthsourceconnection'
  | 'authentik_sources_plex_plexsource'
  | 'authentik_sources_plex_plexsourceconnection'
  | 'authentik_sources_saml_samlsource'
  | 'authentik_sources_saml_usersamlsourceconnection'
  | 'authentik_sources_scim_scimsource'
  | 'authentik_stages_authenticator_duo_authenticatorduostage'
  | 'authentik_stages_authenticator_duo_duodevice'
  | 'authentik_stages_authenticator_sms_authenticatorsmsstage'
  | 'authentik_stages_authenticator_sms_smsdevice'
  | 'authentik_stages_authenticator_static_authenticatorstaticstage'
  | 'authentik_stages_authenticator_static_staticdevice'
  | 'authentik_stages_authenticator_totp_authenticatortotpstage'
  | 'authentik_stages_authenticator_totp_totpdevice'
  | 'authentik_stages_authenticator_validate_authenticatorvalidatestage'
  | 'authentik_stages_authenticator_webauthn_authenticatorwebauthnstage'
  | 'authentik_stages_authenticator_webauthn_webauthndevice'
  | 'authentik_stages_captcha_captchastage'
  | 'authentik_stages_consent_consentstage'
  | 'authentik_stages_consent_userconsent'
  | 'authentik_stages_deny_denystage'
  | 'authentik_stages_dummy_dummystage'
  | 'authentik_stages_email_emailstage'
  | 'authentik_stages_identification_identificationstage'
  | 'authentik_stages_invitation_invitation'
  | 'authentik_stages_invitation_invitationstage'
  | 'authentik_stages_password_passwordstage'
  | 'authentik_stages_prompt_prompt'
  | 'authentik_stages_prompt_promptstage'
  | 'authentik_stages_source_sourcestage'
  | 'authentik_stages_user_delete_userdeletestage'
  | 'authentik_stages_user_login_userloginstage'
  | 'authentik_stages_user_logout_userlogoutstage'
  | 'authentik_stages_user_write_userwritestage'
  | 'authentik_tenants_domain';

export type rbac_permissions_assigned_by_users_list_response = PaginatedUserAssignedObjectPermissionList | ValidationError | GenericError;

export type PaginatedUserAssignedObjectPermissionList = {
  pagination: Pagination;
  results: Array<Maybe<UserAssignedObjectPermission>>;
};

/** Users assigned object permission serializer */
export type UserAssignedObjectPermission = {
  pk: Scalars['Int']['output'];
  username: Scalars['query_rbac_permissions_assigned_by_users_list_oneOf_0_results_items_username']['output'];
  /** User's display name. */
  name: Scalars['String']['output'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  is_active?: Maybe<Scalars['Boolean']['output']>;
  last_login?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['EmailAddress']['output']>;
  attributes?: Maybe<Scalars['JSON']['output']>;
  uid: Scalars['String']['output'];
  permissions: Array<Maybe<UserObjectPermission>>;
  is_superuser: Scalars['Boolean']['output'];
};

/** User-bound object level permission */
export type UserObjectPermission = {
  id: Scalars['Int']['output'];
  codename: Scalars['String']['output'];
  model: Scalars['String']['output'];
  app_label: Scalars['String']['output'];
  object_pk: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type queryInput_rbac_permissions_assigned_by_users_list_model =
  | 'authentik_blueprints_blueprintinstance'
  | 'authentik_brands_brand'
  | 'authentik_core_application'
  | 'authentik_core_group'
  | 'authentik_core_token'
  | 'authentik_core_user'
  | 'authentik_crypto_certificatekeypair'
  | 'authentik_enterprise_license'
  | 'authentik_events_event'
  | 'authentik_events_notification'
  | 'authentik_events_notificationrule'
  | 'authentik_events_notificationtransport'
  | 'authentik_events_notificationwebhookmapping'
  | 'authentik_flows_flow'
  | 'authentik_flows_flowstagebinding'
  | 'authentik_outposts_dockerserviceconnection'
  | 'authentik_outposts_kubernetesserviceconnection'
  | 'authentik_outposts_outpost'
  | 'authentik_policies_policybinding'
  | 'authentik_policies_dummy_dummypolicy'
  | 'authentik_policies_event_matcher_eventmatcherpolicy'
  | 'authentik_policies_expiry_passwordexpirypolicy'
  | 'authentik_policies_expression_expressionpolicy'
  | 'authentik_policies_password_passwordpolicy'
  | 'authentik_policies_reputation_reputationpolicy'
  | 'authentik_providers_ldap_ldapprovider'
  | 'authentik_providers_oauth2_oauth2provider'
  | 'authentik_providers_oauth2_scopemapping'
  | 'authentik_providers_proxy_proxyprovider'
  | 'authentik_providers_rac_endpoint'
  | 'authentik_providers_rac_racpropertymapping'
  | 'authentik_providers_rac_racprovider'
  | 'authentik_providers_radius_radiusprovider'
  | 'authentik_providers_saml_samlpropertymapping'
  | 'authentik_providers_saml_samlprovider'
  | 'authentik_providers_scim_scimmapping'
  | 'authentik_providers_scim_scimprovider'
  | 'authentik_rbac_role'
  | 'authentik_sources_ldap_ldappropertymapping'
  | 'authentik_sources_ldap_ldapsource'
  | 'authentik_sources_oauth_oauthsource'
  | 'authentik_sources_oauth_useroauthsourceconnection'
  | 'authentik_sources_plex_plexsource'
  | 'authentik_sources_plex_plexsourceconnection'
  | 'authentik_sources_saml_samlsource'
  | 'authentik_sources_saml_usersamlsourceconnection'
  | 'authentik_sources_scim_scimsource'
  | 'authentik_stages_authenticator_duo_authenticatorduostage'
  | 'authentik_stages_authenticator_duo_duodevice'
  | 'authentik_stages_authenticator_sms_authenticatorsmsstage'
  | 'authentik_stages_authenticator_sms_smsdevice'
  | 'authentik_stages_authenticator_static_authenticatorstaticstage'
  | 'authentik_stages_authenticator_static_staticdevice'
  | 'authentik_stages_authenticator_totp_authenticatortotpstage'
  | 'authentik_stages_authenticator_totp_totpdevice'
  | 'authentik_stages_authenticator_validate_authenticatorvalidatestage'
  | 'authentik_stages_authenticator_webauthn_authenticatorwebauthnstage'
  | 'authentik_stages_authenticator_webauthn_webauthndevice'
  | 'authentik_stages_captcha_captchastage'
  | 'authentik_stages_consent_consentstage'
  | 'authentik_stages_consent_userconsent'
  | 'authentik_stages_deny_denystage'
  | 'authentik_stages_dummy_dummystage'
  | 'authentik_stages_email_emailstage'
  | 'authentik_stages_identification_identificationstage'
  | 'authentik_stages_invitation_invitation'
  | 'authentik_stages_invitation_invitationstage'
  | 'authentik_stages_password_passwordstage'
  | 'authentik_stages_prompt_prompt'
  | 'authentik_stages_prompt_promptstage'
  | 'authentik_stages_source_sourcestage'
  | 'authentik_stages_user_delete_userdeletestage'
  | 'authentik_stages_user_login_userloginstage'
  | 'authentik_stages_user_logout_userlogoutstage'
  | 'authentik_stages_user_write_userwritestage'
  | 'authentik_tenants_domain';

export type rbac_permissions_roles_list_response = PaginatedExtraRoleObjectPermissionList | ValidationError | GenericError;

export type PaginatedExtraRoleObjectPermissionList = {
  pagination: Pagination;
  results: Array<Maybe<ExtraRoleObjectPermission>>;
};

/** User permission with additional object-related data */
export type ExtraRoleObjectPermission = {
  id: Scalars['Int']['output'];
  codename: Scalars['String']['output'];
  model: Scalars['String']['output'];
  app_label: Scalars['String']['output'];
  object_pk: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** Get app label from permission's model */
  app_label_verbose: Scalars['String']['output'];
  /** Get model label from permission's model */
  model_verbose: Scalars['String']['output'];
  /**
   * Get model description from attached model. This operation takes at least
   * one additional query, and the description is only shown if the user/role has the
   * view_ permission on the object
   */
  object_description?: Maybe<Scalars['String']['output']>;
};

export type rbac_permissions_users_list_response = PaginatedExtraUserObjectPermissionList | ValidationError | GenericError;

export type PaginatedExtraUserObjectPermissionList = {
  pagination: Pagination;
  results: Array<Maybe<ExtraUserObjectPermission>>;
};

/** User permission with additional object-related data */
export type ExtraUserObjectPermission = {
  id: Scalars['Int']['output'];
  codename: Scalars['String']['output'];
  model: Scalars['String']['output'];
  app_label: Scalars['String']['output'];
  object_pk: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** Get app label from permission's model */
  app_label_verbose: Scalars['String']['output'];
  /** Get model label from permission's model */
  model_verbose: Scalars['String']['output'];
  /**
   * Get model description from attached model. This operation takes at least
   * one additional query, and the description is only shown if the user/role has the
   * view_ permission on the object
   */
  object_description?: Maybe<Scalars['String']['output']>;
};

export type rbac_roles_list_response = PaginatedRoleList | ValidationError | GenericError;

export type PaginatedRoleList = {
  pagination: Pagination;
  results: Array<Maybe<Role>>;
};

export type rbac_roles_retrieve_response = Role | ValidationError | GenericError;

export type rbac_roles_used_by_list_response = UsedBy | ValidationError | GenericError;

export type root_config_retrieve_response = Config | ValidationError | GenericError;

/** Serialize authentik Config into DRF Object */
export type Config = {
  error_reporting: ErrorReportingConfig;
  capabilities: Array<Maybe<CapabilitiesEnum>>;
  cache_timeout: Scalars['Int']['output'];
  cache_timeout_flows: Scalars['Int']['output'];
  cache_timeout_policies: Scalars['Int']['output'];
  cache_timeout_reputation: Scalars['Int']['output'];
};

/** Config for error reporting */
export type ErrorReportingConfig = {
  enabled: Scalars['Boolean']['output'];
  sentry_dsn: Scalars['String']['output'];
  environment: Scalars['String']['output'];
  send_pii: Scalars['Boolean']['output'];
  traces_sample_rate: Scalars['Float']['output'];
};

export type CapabilitiesEnum =
  | 'can_save_media'
  | 'can_geo_ip'
  | 'can_asn'
  | 'can_impersonate'
  | 'can_debug'
  | 'is_enterprise';

export type schema_retrieve_response = JSON_container | ValidationError | GenericError;

export type JSON_container = {
  JSON?: Maybe<Scalars['JSON']['output']>;
};

export type queryInput_schema_retrieve_format =
  | 'json'
  | 'yaml';

export type queryInput_schema_retrieve_lang =
  | 'af'
  | 'ar'
  | 'ar_dz'
  | 'ast'
  | 'az'
  | 'be'
  | 'bg'
  | 'bn'
  | 'br'
  | 'bs'
  | 'ca'
  | 'ckb'
  | 'cs'
  | 'cy'
  | 'da'
  | 'de'
  | 'dsb'
  | 'el'
  | 'en'
  | 'en_au'
  | 'en_gb'
  | 'eo'
  | 'es'
  | 'es_ar'
  | 'es_co'
  | 'es_mx'
  | 'es_ni'
  | 'es_ve'
  | 'et'
  | 'eu'
  | 'fa'
  | 'fi'
  | 'fr'
  | 'fy'
  | 'ga'
  | 'gd'
  | 'gl'
  | 'he'
  | 'hi'
  | 'hr'
  | 'hsb'
  | 'hu'
  | 'hy'
  | 'ia'
  | 'id'
  | 'ig'
  | 'io'
  | 'is'
  | 'it'
  | 'ja'
  | 'ka'
  | 'kab'
  | 'kk'
  | 'km'
  | 'kn'
  | 'ko'
  | 'ky'
  | 'lb'
  | 'lt'
  | 'lv'
  | 'mk'
  | 'ml'
  | 'mn'
  | 'mr'
  | 'ms'
  | 'my'
  | 'nb'
  | 'ne'
  | 'nl'
  | 'nn'
  | 'os'
  | 'pa'
  | 'pl'
  | 'pt'
  | 'pt_br'
  | 'ro'
  | 'ru'
  | 'sk'
  | 'sl'
  | 'sq'
  | 'sr'
  | 'sr_latn'
  | 'sv'
  | 'sw'
  | 'ta'
  | 'te'
  | 'tg'
  | 'th'
  | 'tk'
  | 'tr'
  | 'tt'
  | 'udm'
  | 'ug'
  | 'uk'
  | 'ur'
  | 'uz'
  | 'vi'
  | 'zh_hans'
  | 'zh_hant';

export type sources_all_list_response = PaginatedSourceList | ValidationError | GenericError;

export type PaginatedSourceList = {
  pagination: Pagination;
  results: Array<Maybe<Source>>;
};

/** Source Serializer */
export type Source = {
  pk: Scalars['UUID']['output'];
  /** Source's display Name. */
  name: Scalars['String']['output'];
  slug: Scalars['query_sources_all_list_oneOf_0_results_items_slug']['output'];
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Flow to use when authenticating existing users. */
  authentication_flow?: Maybe<Scalars['UUID']['output']>;
  /** Flow to use when enrolling new users. */
  enrollment_flow?: Maybe<Scalars['UUID']['output']>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  policy_engine_mode?: Maybe<PolicyEngineMode>;
  user_matching_mode?: Maybe<UserMatchingModeEnum>;
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: Maybe<Scalars['String']['output']>;
  user_path_template?: Maybe<Scalars['String']['output']>;
  /**
   * Get the URL to the Icon. If the name is /static or
   * starts with http it is returned as-is
   */
  icon?: Maybe<Scalars['String']['output']>;
  additionalProperties?: Maybe<Scalars['JSON']['output']>;
};

export type UserMatchingModeEnum =
  | 'identifier'
  | 'email_link'
  | 'email_deny'
  | 'username_link'
  | 'username_deny';

export type sources_all_retrieve_response = Source | ValidationError | GenericError;

export type sources_all_used_by_list_response = UsedBy | ValidationError | GenericError;

export type sources_all_types_list_response = TypeCreate | ValidationError | GenericError;

export type sources_all_user_settings_list_response = UserSetting | ValidationError | GenericError;

/** Serializer for User settings for stages and sources */
export type UserSetting = {
  object_uid: Scalars['String']['output'];
  component: Scalars['String']['output'];
  title: Scalars['String']['output'];
  configure_url?: Maybe<Scalars['String']['output']>;
  icon_url?: Maybe<Scalars['String']['output']>;
};

export type sources_ldap_list_response = PaginatedLDAPSourceList | ValidationError | GenericError;

export type PaginatedLDAPSourceList = {
  pagination: Pagination;
  results: Array<Maybe<LDAPSource>>;
};

/** LDAP Source Serializer */
export type LDAPSource = {
  pk: Scalars['UUID']['output'];
  /** Source's display Name. */
  name: Scalars['String']['output'];
  slug: Scalars['query_sources_ldap_list_oneOf_0_results_items_slug']['output'];
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Flow to use when authenticating existing users. */
  authentication_flow?: Maybe<Scalars['UUID']['output']>;
  /** Flow to use when enrolling new users. */
  enrollment_flow?: Maybe<Scalars['UUID']['output']>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  policy_engine_mode?: Maybe<PolicyEngineMode>;
  user_matching_mode?: Maybe<UserMatchingModeEnum>;
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: Maybe<Scalars['String']['output']>;
  user_path_template?: Maybe<Scalars['String']['output']>;
  /**
   * Get the URL to the Icon. If the name is /static or
   * starts with http it is returned as-is
   */
  icon?: Maybe<Scalars['String']['output']>;
  server_uri: Scalars['URL']['output'];
  /** Optionally verify the LDAP Server's Certificate against the CA Chain in this keypair. */
  peer_certificate?: Maybe<Scalars['UUID']['output']>;
  /** Client certificate to authenticate against the LDAP Server's Certificate. */
  client_certificate?: Maybe<Scalars['UUID']['output']>;
  bind_cn?: Maybe<Scalars['String']['output']>;
  start_tls?: Maybe<Scalars['Boolean']['output']>;
  sni?: Maybe<Scalars['Boolean']['output']>;
  base_dn: Scalars['String']['output'];
  /** Prepended to Base DN for User-queries. */
  additional_user_dn?: Maybe<Scalars['String']['output']>;
  /** Prepended to Base DN for Group-queries. */
  additional_group_dn?: Maybe<Scalars['String']['output']>;
  /** Consider Objects matching this filter to be Users. */
  user_object_filter?: Maybe<Scalars['String']['output']>;
  /** Consider Objects matching this filter to be Groups. */
  group_object_filter?: Maybe<Scalars['String']['output']>;
  /** Field which contains members of a group. */
  group_membership_field?: Maybe<Scalars['String']['output']>;
  /** Field which contains a unique Identifier. */
  object_uniqueness_field?: Maybe<Scalars['String']['output']>;
  /** Update internal authentik password when login succeeds with LDAP */
  password_login_update_internal_password?: Maybe<Scalars['Boolean']['output']>;
  sync_users?: Maybe<Scalars['Boolean']['output']>;
  /** When a user changes their password, sync it back to LDAP. This can only be enabled on a single LDAP source. */
  sync_users_password?: Maybe<Scalars['Boolean']['output']>;
  sync_groups?: Maybe<Scalars['Boolean']['output']>;
  sync_parent_group?: Maybe<Scalars['UUID']['output']>;
  property_mappings?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  /** Property mappings used for group creation/updating. */
  property_mappings_group?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  /** Get cached source connectivity */
  connectivity?: Maybe<Scalars['JSON']['output']>;
};

export type sources_ldap_retrieve_response = LDAPSource | ValidationError | GenericError;

export type sources_ldap_debug_retrieve_response = LDAPDebug | ValidationError | GenericError;

export type LDAPDebug = {
  user: Array<Maybe<Scalars['JSON']['output']>>;
  group: Array<Maybe<Scalars['JSON']['output']>>;
  membership: Array<Maybe<Scalars['JSON']['output']>>;
};

export type sources_ldap_sync_status_retrieve_response = LDAPSyncStatus | ValidationError | GenericError;

/** LDAP Source sync status */
export type LDAPSyncStatus = {
  is_running: Scalars['Boolean']['output'];
  tasks: Array<Maybe<SystemTask>>;
};

export type sources_ldap_used_by_list_response = UsedBy | ValidationError | GenericError;

export type sources_oauth_list_response = PaginatedOAuthSourceList | ValidationError | GenericError;

export type PaginatedOAuthSourceList = {
  pagination: Pagination;
  results: Array<Maybe<OAuthSource>>;
};

/** OAuth Source Serializer */
export type OAuthSource = {
  pk: Scalars['UUID']['output'];
  /** Source's display Name. */
  name: Scalars['String']['output'];
  slug: Scalars['query_sources_oauth_list_oneOf_0_results_items_slug']['output'];
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Flow to use when authenticating existing users. */
  authentication_flow?: Maybe<Scalars['UUID']['output']>;
  /** Flow to use when enrolling new users. */
  enrollment_flow?: Maybe<Scalars['UUID']['output']>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  policy_engine_mode?: Maybe<PolicyEngineMode>;
  user_matching_mode?: Maybe<UserMatchingModeEnum>;
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: Maybe<Scalars['String']['output']>;
  user_path_template?: Maybe<Scalars['String']['output']>;
  /**
   * Get the URL to the Icon. If the name is /static or
   * starts with http it is returned as-is
   */
  icon?: Maybe<Scalars['String']['output']>;
  provider_type: ProviderTypeEnum;
  /** URL used to request the initial token. This URL is only required for OAuth 1. */
  request_token_url?: Maybe<Scalars['query_sources_oauth_list_oneOf_0_results_items_request_token_url']['output']>;
  /** URL the user is redirect to to conest the flow. */
  authorization_url?: Maybe<Scalars['query_sources_oauth_list_oneOf_0_results_items_authorization_url']['output']>;
  /** URL used by authentik to retrieve tokens. */
  access_token_url?: Maybe<Scalars['query_sources_oauth_list_oneOf_0_results_items_access_token_url']['output']>;
  /** URL used by authentik to get user information. */
  profile_url?: Maybe<Scalars['query_sources_oauth_list_oneOf_0_results_items_profile_url']['output']>;
  consumer_key: Scalars['String']['output'];
  /** Get OAuth Callback URL */
  callback_url: Scalars['String']['output'];
  additional_scopes?: Maybe<Scalars['String']['output']>;
  type: SourceType;
  oidc_well_known_url?: Maybe<Scalars['String']['output']>;
  oidc_jwks_url?: Maybe<Scalars['String']['output']>;
  oidc_jwks?: Maybe<Scalars['JSON']['output']>;
};

export type ProviderTypeEnum =
  | 'apple'
  | 'openidconnect'
  | 'azuread'
  | 'discord'
  | 'facebook'
  | 'github'
  | 'gitlab'
  | 'google'
  | 'mailcow'
  | 'okta'
  | 'patreon'
  | 'reddit'
  | 'twitch'
  | 'twitter';

/** Serializer for SourceType */
export type SourceType = {
  name: Scalars['String']['output'];
  verbose_name: Scalars['String']['output'];
  urls_customizable: Scalars['Boolean']['output'];
  request_token_url?: Maybe<Scalars['String']['output']>;
  authorization_url?: Maybe<Scalars['String']['output']>;
  access_token_url?: Maybe<Scalars['String']['output']>;
  profile_url?: Maybe<Scalars['String']['output']>;
  oidc_well_known_url?: Maybe<Scalars['String']['output']>;
  oidc_jwks_url?: Maybe<Scalars['String']['output']>;
  additionalProperties?: Maybe<Scalars['JSON']['output']>;
};

export type queryInput_sources_oauth_list_policy_engine_mode =
  | 'all'
  | 'any';

/** How the source determines if an existing user should be authenticated or a new user enrolled. */
export type queryInput_sources_oauth_list_user_matching_mode =
  | 'email_deny'
  | 'email_link'
  | 'identifier'
  | 'username_deny'
  | 'username_link';

export type sources_oauth_retrieve_response = OAuthSource | ValidationError | GenericError;

export type sources_oauth_used_by_list_response = UsedBy | ValidationError | GenericError;

export type sources_oauth_source_types_list_response = SourceType | ValidationError | GenericError;

export type sources_plex_list_response = PaginatedPlexSourceList | ValidationError | GenericError;

export type PaginatedPlexSourceList = {
  pagination: Pagination;
  results: Array<Maybe<PlexSource>>;
};

/** Plex Source Serializer */
export type PlexSource = {
  pk: Scalars['UUID']['output'];
  /** Source's display Name. */
  name: Scalars['String']['output'];
  slug: Scalars['query_sources_plex_list_oneOf_0_results_items_slug']['output'];
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Flow to use when authenticating existing users. */
  authentication_flow?: Maybe<Scalars['UUID']['output']>;
  /** Flow to use when enrolling new users. */
  enrollment_flow?: Maybe<Scalars['UUID']['output']>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  policy_engine_mode?: Maybe<PolicyEngineMode>;
  user_matching_mode?: Maybe<UserMatchingModeEnum>;
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: Maybe<Scalars['String']['output']>;
  user_path_template?: Maybe<Scalars['String']['output']>;
  /**
   * Get the URL to the Icon. If the name is /static or
   * starts with http it is returned as-is
   */
  icon?: Maybe<Scalars['String']['output']>;
  /** Client identifier used to talk to Plex. */
  client_id?: Maybe<Scalars['String']['output']>;
  /** Which servers a user has to be a member of to be granted access. Empty list allows every server. */
  allowed_servers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Allow friends to authenticate, even if you don't share a server. */
  allow_friends?: Maybe<Scalars['Boolean']['output']>;
  /** Plex token used to check friends */
  plex_token: Scalars['String']['output'];
};

export type queryInput_sources_plex_list_policy_engine_mode =
  | 'all'
  | 'any';

/** How the source determines if an existing user should be authenticated or a new user enrolled. */
export type queryInput_sources_plex_list_user_matching_mode =
  | 'email_deny'
  | 'email_link'
  | 'identifier'
  | 'username_deny'
  | 'username_link';

export type sources_plex_retrieve_response = PlexSource | ValidationError | GenericError;

export type sources_plex_used_by_list_response = UsedBy | ValidationError | GenericError;

export type sources_saml_list_response = PaginatedSAMLSourceList | ValidationError | GenericError;

export type PaginatedSAMLSourceList = {
  pagination: Pagination;
  results: Array<Maybe<SAMLSource>>;
};

/** SAMLSource Serializer */
export type SAMLSource = {
  pk: Scalars['UUID']['output'];
  /** Source's display Name. */
  name: Scalars['String']['output'];
  slug: Scalars['query_sources_saml_list_oneOf_0_results_items_slug']['output'];
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Flow to use when authenticating existing users. */
  authentication_flow?: Maybe<Scalars['UUID']['output']>;
  /** Flow to use when enrolling new users. */
  enrollment_flow?: Maybe<Scalars['UUID']['output']>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  policy_engine_mode?: Maybe<PolicyEngineMode>;
  user_matching_mode?: Maybe<UserMatchingModeEnum>;
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: Maybe<Scalars['String']['output']>;
  user_path_template?: Maybe<Scalars['String']['output']>;
  /**
   * Get the URL to the Icon. If the name is /static or
   * starts with http it is returned as-is
   */
  icon?: Maybe<Scalars['String']['output']>;
  /** Flow used before authentication. */
  pre_authentication_flow: Scalars['UUID']['output'];
  /** Also known as Entity ID. Defaults the Metadata URL. */
  issuer?: Maybe<Scalars['String']['output']>;
  /** URL that the initial Login request is sent to. */
  sso_url: Scalars['URL']['output'];
  /** Optional URL if your IDP supports Single-Logout. */
  slo_url?: Maybe<Scalars['URL']['output']>;
  /** Allows authentication flows initiated by the IdP. This can be a security risk, as no validation of the request ID is done. */
  allow_idp_initiated?: Maybe<Scalars['Boolean']['output']>;
  name_id_policy?: Maybe<NameIdPolicyEnum>;
  binding_type?: Maybe<BindingTypeEnum>;
  /** When selected, incoming assertion's Signatures will be validated against this certificate. To allow unsigned Requests, leave on default. */
  verification_kp?: Maybe<Scalars['UUID']['output']>;
  /** Keypair used to sign outgoing Responses going to the Identity Provider. */
  signing_kp?: Maybe<Scalars['UUID']['output']>;
  digest_algorithm?: Maybe<DigestAlgorithmEnum>;
  signature_algorithm?: Maybe<SignatureAlgorithmEnum>;
  /** Time offset when temporary users should be deleted. This only applies if your IDP uses the NameID Format 'transient', and the user doesn't log out manually. (Format: hours=1;minutes=2;seconds=3). */
  temporary_user_delete_after?: Maybe<Scalars['String']['output']>;
};

export type NameIdPolicyEnum =
  | 'urn_oasis_names_tc_SAML_1_1_nameid_format_emailAddress'
  | 'urn_oasis_names_tc_SAML_2_0_nameid_format_persistent'
  | 'urn_oasis_names_tc_SAML_2_0_nameid_format_X509SubjectName'
  | 'urn_oasis_names_tc_SAML_2_0_nameid_format_WindowsDomainQualifiedName'
  | 'urn_oasis_names_tc_SAML_2_0_nameid_format_transient';

export type BindingTypeEnum =
  | 'REDIRECT'
  | 'POST'
  | 'POST_AUTO';

export type queryInput_sources_saml_list_binding_type =
  | 'POST'
  | 'POST_AUTO'
  | 'REDIRECT';

export type queryInput_sources_saml_list_digest_algorithm =
  | 'http___www_w3_org_2000_09_xmldsig_POUND_sha1'
  | 'http___www_w3_org_2001_04_xmldsig_more_POUND_sha384'
  | 'http___www_w3_org_2001_04_xmlenc_POUND_sha256'
  | 'http___www_w3_org_2001_04_xmlenc_POUND_sha512';

/** NameID Policy sent to the IdP. Can be unset, in which case no Policy is sent. */
export type queryInput_sources_saml_list_name_id_policy =
  | 'urn_oasis_names_tc_SAML_1_1_nameid_format_emailAddress'
  | 'urn_oasis_names_tc_SAML_2_0_nameid_format_WindowsDomainQualifiedName'
  | 'urn_oasis_names_tc_SAML_2_0_nameid_format_X509SubjectName'
  | 'urn_oasis_names_tc_SAML_2_0_nameid_format_persistent'
  | 'urn_oasis_names_tc_SAML_2_0_nameid_format_transient';

export type queryInput_sources_saml_list_policy_engine_mode =
  | 'all'
  | 'any';

export type queryInput_sources_saml_list_signature_algorithm =
  | 'http___www_w3_org_2000_09_xmldsig_POUND_dsa_sha1'
  | 'http___www_w3_org_2000_09_xmldsig_POUND_rsa_sha1'
  | 'http___www_w3_org_2001_04_xmldsig_more_POUND_ecdsa_sha1'
  | 'http___www_w3_org_2001_04_xmldsig_more_POUND_ecdsa_sha256'
  | 'http___www_w3_org_2001_04_xmldsig_more_POUND_ecdsa_sha384'
  | 'http___www_w3_org_2001_04_xmldsig_more_POUND_ecdsa_sha512'
  | 'http___www_w3_org_2001_04_xmldsig_more_POUND_rsa_sha256'
  | 'http___www_w3_org_2001_04_xmldsig_more_POUND_rsa_sha384'
  | 'http___www_w3_org_2001_04_xmldsig_more_POUND_rsa_sha512';

/** How the source determines if an existing user should be authenticated or a new user enrolled. */
export type queryInput_sources_saml_list_user_matching_mode =
  | 'email_deny'
  | 'email_link'
  | 'identifier'
  | 'username_deny'
  | 'username_link';

export type sources_saml_retrieve_response = SAMLSource | ValidationError | GenericError;

export type sources_saml_metadata_retrieve_response = SAMLMetadata | ValidationError | GenericError;

export type sources_saml_used_by_list_response = UsedBy | ValidationError | GenericError;

export type sources_scim_list_response = PaginatedSCIMSourceList | ValidationError | GenericError;

export type PaginatedSCIMSourceList = {
  pagination: Pagination;
  results: Array<Maybe<SCIMSource>>;
};

/** SCIMSource Serializer */
export type SCIMSource = {
  pk: Scalars['UUID']['output'];
  /** Source's display Name. */
  name: Scalars['String']['output'];
  slug: Scalars['query_sources_scim_list_oneOf_0_results_items_slug']['output'];
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Get object component so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  user_matching_mode?: Maybe<UserMatchingModeEnum>;
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: Maybe<Scalars['String']['output']>;
  user_path_template?: Maybe<Scalars['String']['output']>;
  /** Get Root URL */
  root_url: Scalars['String']['output'];
  token_obj: Token;
};

export type sources_scim_retrieve_response = SCIMSource | ValidationError | GenericError;

export type sources_scim_used_by_list_response = UsedBy | ValidationError | GenericError;

export type sources_scim_groups_list_response = PaginatedSCIMSourceGroupList | ValidationError | GenericError;

export type PaginatedSCIMSourceGroupList = {
  pagination: Pagination;
  results: Array<Maybe<SCIMSourceGroup>>;
};

/** SCIMSourceGroup Serializer */
export type SCIMSourceGroup = {
  id: Scalars['String']['output'];
  group: Scalars['UUID']['output'];
  group_obj: UserGroup;
  source: Scalars['UUID']['output'];
  attributes?: Maybe<Scalars['JSON']['output']>;
};

export type sources_scim_groups_retrieve_response = SCIMSourceGroup | ValidationError | GenericError;

export type sources_scim_groups_used_by_list_response = UsedBy | ValidationError | GenericError;

export type sources_scim_users_list_response = PaginatedSCIMSourceUserList | ValidationError | GenericError;

export type PaginatedSCIMSourceUserList = {
  pagination: Pagination;
  results: Array<Maybe<SCIMSourceUser>>;
};

/** SCIMSourceUser Serializer */
export type SCIMSourceUser = {
  id: Scalars['String']['output'];
  user: Scalars['Int']['output'];
  user_obj: GroupMember;
  source: Scalars['UUID']['output'];
  attributes?: Maybe<Scalars['JSON']['output']>;
};

export type sources_scim_users_retrieve_response = SCIMSourceUser | ValidationError | GenericError;

export type sources_scim_users_used_by_list_response = UsedBy | ValidationError | GenericError;

export type sources_user_connections_all_list_response = PaginatedUserSourceConnectionList | ValidationError | GenericError;

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

export type sources_user_connections_all_retrieve_response = UserSourceConnection | ValidationError | GenericError;

export type sources_user_connections_all_used_by_list_response = UsedBy | ValidationError | GenericError;

export type sources_user_connections_oauth_list_response = PaginatedUserOAuthSourceConnectionList | ValidationError | GenericError;

export type PaginatedUserOAuthSourceConnectionList = {
  pagination: Pagination;
  results: Array<Maybe<UserOAuthSourceConnection>>;
};

/** OAuth Source Serializer */
export type UserOAuthSourceConnection = {
  pk: Scalars['Int']['output'];
  user: Scalars['Int']['output'];
  source: Source;
  identifier: Scalars['query_sources_user_connections_oauth_list_oneOf_0_results_items_identifier']['output'];
};

export type sources_user_connections_oauth_retrieve_response = UserOAuthSourceConnection | ValidationError | GenericError;

export type sources_user_connections_oauth_used_by_list_response = UsedBy | ValidationError | GenericError;

export type sources_user_connections_plex_list_response = PaginatedPlexSourceConnectionList | ValidationError | GenericError;

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
  plex_token: Scalars['String']['output'];
};

export type sources_user_connections_plex_retrieve_response = PlexSourceConnection | ValidationError | GenericError;

export type sources_user_connections_plex_used_by_list_response = UsedBy | ValidationError | GenericError;

export type sources_user_connections_saml_list_response = PaginatedUserSAMLSourceConnectionList | ValidationError | GenericError;

export type PaginatedUserSAMLSourceConnectionList = {
  pagination: Pagination;
  results: Array<Maybe<UserSAMLSourceConnection>>;
};

/** SAML Source Serializer */
export type UserSAMLSourceConnection = {
  pk: Scalars['Int']['output'];
  user: Scalars['Int']['output'];
  source: Source;
  identifier: Scalars['String']['output'];
};

export type sources_user_connections_saml_retrieve_response = UserSAMLSourceConnection | ValidationError | GenericError;

export type sources_user_connections_saml_used_by_list_response = UsedBy | ValidationError | GenericError;

export type stages_all_list_response = PaginatedStageList | ValidationError | GenericError;

export type PaginatedStageList = {
  pagination: Pagination;
  results: Array<Maybe<Stage>>;
};

export type stages_all_retrieve_response = Stage | ValidationError | GenericError;

export type stages_all_used_by_list_response = UsedBy | ValidationError | GenericError;

export type stages_all_types_list_response = TypeCreate | ValidationError | GenericError;

export type stages_all_user_settings_list_response = UserSetting | ValidationError | GenericError;

export type stages_authenticator_duo_list_response = PaginatedAuthenticatorDuoStageList | ValidationError | GenericError;

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
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  flow_set?: Maybe<Array<Maybe<FlowSet>>>;
  /** Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage. */
  configure_flow?: Maybe<Scalars['UUID']['output']>;
  friendly_name?: Maybe<Scalars['String']['output']>;
  client_id: Scalars['String']['output'];
  api_hostname: Scalars['String']['output'];
  admin_integration_key?: Maybe<Scalars['String']['output']>;
};

export type stages_authenticator_duo_retrieve_response = AuthenticatorDuoStage | ValidationError | GenericError;

export type stages_authenticator_duo_used_by_list_response = UsedBy | ValidationError | GenericError;

export type stages_authenticator_sms_list_response = PaginatedAuthenticatorSMSStageList | ValidationError | GenericError;

export type PaginatedAuthenticatorSMSStageList = {
  pagination: Pagination;
  results: Array<Maybe<AuthenticatorSMSStage>>;
};

/** AuthenticatorSMSStage Serializer */
export type AuthenticatorSMSStage = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Get object type so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  flow_set?: Maybe<Array<Maybe<FlowSet>>>;
  /** Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage. */
  configure_flow?: Maybe<Scalars['UUID']['output']>;
  friendly_name?: Maybe<Scalars['String']['output']>;
  provider: ProviderEnum;
  from_number: Scalars['String']['output'];
  account_sid: Scalars['String']['output'];
  auth: Scalars['String']['output'];
  auth_password?: Maybe<Scalars['String']['output']>;
  auth_type?: Maybe<AuthTypeEnum>;
  /** When enabled, the Phone number is only used during enrollment to verify the users authenticity. Only a hash of the phone number is saved to ensure it is not reused in the future. */
  verify_only?: Maybe<Scalars['Boolean']['output']>;
  /** Optionally modify the payload being sent to custom providers. */
  mapping?: Maybe<Scalars['UUID']['output']>;
};

export type ProviderEnum =
  | 'twilio'
  | 'generic';

export type AuthTypeEnum =
  | 'basic'
  | 'bearer';

export type queryInput_stages_authenticator_sms_list_auth_type =
  | 'basic'
  | 'bearer';

export type queryInput_stages_authenticator_sms_list_provider =
  | 'generic'
  | 'twilio';

export type stages_authenticator_sms_retrieve_response = AuthenticatorSMSStage | ValidationError | GenericError;

export type stages_authenticator_sms_used_by_list_response = UsedBy | ValidationError | GenericError;

export type stages_authenticator_static_list_response = PaginatedAuthenticatorStaticStageList | ValidationError | GenericError;

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
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  flow_set?: Maybe<Array<Maybe<FlowSet>>>;
  /** Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage. */
  configure_flow?: Maybe<Scalars['UUID']['output']>;
  friendly_name?: Maybe<Scalars['String']['output']>;
  token_count?: Maybe<Scalars['NonNegativeInt']['output']>;
  token_length?: Maybe<Scalars['NonNegativeInt']['output']>;
};

export type stages_authenticator_static_retrieve_response = AuthenticatorStaticStage | ValidationError | GenericError;

export type stages_authenticator_static_used_by_list_response = UsedBy | ValidationError | GenericError;

export type stages_authenticator_totp_list_response = PaginatedAuthenticatorTOTPStageList | ValidationError | GenericError;

export type PaginatedAuthenticatorTOTPStageList = {
  pagination: Pagination;
  results: Array<Maybe<AuthenticatorTOTPStage>>;
};

/** AuthenticatorTOTPStage Serializer */
export type AuthenticatorTOTPStage = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Get object type so that we know how to edit the object */
  component: Scalars['String']['output'];
  /** Return object's verbose_name */
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  flow_set?: Maybe<Array<Maybe<FlowSet>>>;
  /** Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage. */
  configure_flow?: Maybe<Scalars['UUID']['output']>;
  friendly_name?: Maybe<Scalars['String']['output']>;
  digits: DigitsEnum;
};

export type DigitsEnum =
  | '_6'
  | '_8';

export type queryInput_stages_authenticator_totp_list_digits =
  | '_6'
  | '_8';

export type stages_authenticator_totp_retrieve_response = AuthenticatorTOTPStage | ValidationError | GenericError;

export type stages_authenticator_totp_used_by_list_response = UsedBy | ValidationError | GenericError;

export type stages_authenticator_validate_list_response = PaginatedAuthenticatorValidateStageList | ValidationError | GenericError;

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
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  flow_set?: Maybe<Array<Maybe<FlowSet>>>;
  not_configured_action?: Maybe<NotConfiguredActionEnum>;
  /** Device classes which can be used to authenticate */
  device_classes?: Maybe<Array<Maybe<DeviceClassesEnum>>>;
  /** Stages used to configure Authenticator when user doesn't have any compatible devices. After this configuration Stage passes, the user is not prompted again. */
  configuration_stages?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  /** If any of the user's device has been used within this threshold, this stage will be skipped */
  last_auth_threshold?: Maybe<Scalars['String']['output']>;
  webauthn_user_verification?: Maybe<UserVerificationEnum>;
  webauthn_allowed_device_types?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  webauthn_allowed_device_types_obj: Array<Maybe<WebAuthnDeviceType>>;
};

export type NotConfiguredActionEnum =
  | 'skip'
  | 'deny'
  | 'configure';

export type DeviceClassesEnum =
  | 'static'
  | 'totp'
  | 'webauthn'
  | 'duo'
  | 'sms';

export type UserVerificationEnum =
  | 'required'
  | 'preferred'
  | 'discouraged';

export type queryInput_stages_authenticator_validate_list_not_configured_action =
  | 'configure'
  | 'deny'
  | 'skip';

export type stages_authenticator_validate_retrieve_response = AuthenticatorValidateStage | ValidationError | GenericError;

export type stages_authenticator_validate_used_by_list_response = UsedBy | ValidationError | GenericError;

export type stages_authenticator_webauthn_list_response = PaginatedAuthenticatorWebAuthnStageList | ValidationError | GenericError;

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
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  flow_set?: Maybe<Array<Maybe<FlowSet>>>;
  /** Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage. */
  configure_flow?: Maybe<Scalars['UUID']['output']>;
  friendly_name?: Maybe<Scalars['String']['output']>;
  user_verification?: Maybe<UserVerificationEnum>;
  authenticator_attachment?: Maybe<AuthenticatorAttachmentEnum>;
  resident_key_requirement?: Maybe<ResidentKeyRequirementEnum>;
  device_type_restrictions?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  device_type_restrictions_obj: Array<Maybe<WebAuthnDeviceType>>;
};

export type AuthenticatorAttachmentEnum =
  | 'platform'
  | 'cross_platform';

export type ResidentKeyRequirementEnum =
  | 'discouraged'
  | 'preferred'
  | 'required';

export type queryInput_stages_authenticator_webauthn_list_authenticator_attachment =
  | 'cross_platform'
  | 'platform';

export type queryInput_stages_authenticator_webauthn_list_resident_key_requirement =
  | 'discouraged'
  | 'preferred'
  | 'required';

export type queryInput_stages_authenticator_webauthn_list_user_verification =
  | 'discouraged'
  | 'preferred'
  | 'required';

export type stages_authenticator_webauthn_retrieve_response = AuthenticatorWebAuthnStage | ValidationError | GenericError;

export type stages_authenticator_webauthn_used_by_list_response = UsedBy | ValidationError | GenericError;

export type stages_authenticator_webauthn_device_types_list_response = PaginatedWebAuthnDeviceTypeList | ValidationError | GenericError;

export type PaginatedWebAuthnDeviceTypeList = {
  pagination: Pagination;
  results: Array<Maybe<WebAuthnDeviceType>>;
};

export type stages_authenticator_webauthn_device_types_retrieve_response = WebAuthnDeviceType | ValidationError | GenericError;

export type stages_captcha_list_response = PaginatedCaptchaStageList | ValidationError | GenericError;

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
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  flow_set?: Maybe<Array<Maybe<FlowSet>>>;
  /** Public key, acquired your captcha Provider. */
  public_key: Scalars['String']['output'];
  js_url?: Maybe<Scalars['String']['output']>;
  api_url?: Maybe<Scalars['String']['output']>;
};

export type stages_captcha_retrieve_response = CaptchaStage | ValidationError | GenericError;

export type stages_captcha_used_by_list_response = UsedBy | ValidationError | GenericError;

export type stages_consent_list_response = PaginatedConsentStageList | ValidationError | GenericError;

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
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  flow_set?: Maybe<Array<Maybe<FlowSet>>>;
  mode?: Maybe<ConsentStageModeEnum>;
  /** Offset after which consent expires. (Format: hours=1;minutes=2;seconds=3). */
  consent_expire_in?: Maybe<Scalars['String']['output']>;
};

export type ConsentStageModeEnum =
  | 'always_require'
  | 'permanent'
  | 'expiring';

export type queryInput_stages_consent_list_mode =
  | 'always_require'
  | 'expiring'
  | 'permanent';

export type stages_consent_retrieve_response = ConsentStage | ValidationError | GenericError;

export type stages_consent_used_by_list_response = UsedBy | ValidationError | GenericError;

export type stages_deny_list_response = PaginatedDenyStageList | ValidationError | GenericError;

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
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  flow_set?: Maybe<Array<Maybe<FlowSet>>>;
  deny_message?: Maybe<Scalars['String']['output']>;
};

export type stages_deny_retrieve_response = DenyStage | ValidationError | GenericError;

export type stages_deny_used_by_list_response = UsedBy | ValidationError | GenericError;

export type stages_dummy_list_response = PaginatedDummyStageList | ValidationError | GenericError;

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
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  flow_set?: Maybe<Array<Maybe<FlowSet>>>;
  throw_error?: Maybe<Scalars['Boolean']['output']>;
};

export type stages_dummy_retrieve_response = DummyStage | ValidationError | GenericError;

export type stages_dummy_used_by_list_response = UsedBy | ValidationError | GenericError;

export type stages_email_list_response = PaginatedEmailStageList | ValidationError | GenericError;

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
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  flow_set?: Maybe<Array<Maybe<FlowSet>>>;
  /** When enabled, global Email connection settings will be used and connection settings below will be ignored. */
  use_global_settings?: Maybe<Scalars['Boolean']['output']>;
  host?: Maybe<Scalars['String']['output']>;
  port?: Maybe<Scalars['Int']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  use_tls?: Maybe<Scalars['Boolean']['output']>;
  use_ssl?: Maybe<Scalars['Boolean']['output']>;
  timeout?: Maybe<Scalars['Int']['output']>;
  from_address?: Maybe<Scalars['EmailAddress']['output']>;
  /** Time in minutes the token sent is valid. */
  token_expiry?: Maybe<Scalars['Int']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  template?: Maybe<Scalars['String']['output']>;
  /** Activate users upon completion of stage. */
  activate_user_on_success?: Maybe<Scalars['Boolean']['output']>;
};

export type stages_email_retrieve_response = EmailStage | ValidationError | GenericError;

export type stages_email_used_by_list_response = UsedBy | ValidationError | GenericError;

export type stages_email_templates_list_response = TypeCreate | ValidationError | GenericError;

export type stages_identification_list_response = PaginatedIdentificationStageList | ValidationError | GenericError;

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
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  flow_set?: Maybe<Array<Maybe<FlowSet>>>;
  /** Fields of the user object to match against. (Hold shift to select multiple options) */
  user_fields?: Maybe<Array<Maybe<UserFieldsEnum>>>;
  /** When set, shows a password field, instead of showing the password field as seaprate step. */
  password_stage?: Maybe<Scalars['UUID']['output']>;
  /** When enabled, user fields are matched regardless of their casing. */
  case_insensitive_matching?: Maybe<Scalars['Boolean']['output']>;
  /** When a valid username/email has been entered, and this option is enabled, the user's username and avatar will be shown. Otherwise, the text that the user entered will be shown */
  show_matched_user?: Maybe<Scalars['Boolean']['output']>;
  /** Optional enrollment flow, which is linked at the bottom of the page. */
  enrollment_flow?: Maybe<Scalars['UUID']['output']>;
  /** Optional recovery flow, which is linked at the bottom of the page. */
  recovery_flow?: Maybe<Scalars['UUID']['output']>;
  /** Optional passwordless flow, which is linked at the bottom of the page. */
  passwordless_flow?: Maybe<Scalars['UUID']['output']>;
  /** Specify which sources should be shown. */
  sources?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  show_source_labels?: Maybe<Scalars['Boolean']['output']>;
  /** When enabled, the stage will succeed and continue even when incorrect user info is entered. */
  pretend_user_exists?: Maybe<Scalars['Boolean']['output']>;
};

export type UserFieldsEnum =
  | 'email'
  | 'username'
  | 'upn';

export type stages_identification_retrieve_response = IdentificationStage | ValidationError | GenericError;

export type stages_identification_used_by_list_response = UsedBy | ValidationError | GenericError;

export type stages_invitation_invitations_list_response = PaginatedInvitationList | ValidationError | GenericError;

export type PaginatedInvitationList = {
  pagination: Pagination;
  results: Array<Maybe<Invitation>>;
};

/** Invitation Serializer */
export type Invitation = {
  pk: Scalars['UUID']['output'];
  name: Scalars['query_stages_invitation_invitations_list_oneOf_0_results_items_name']['output'];
  expires?: Maybe<Scalars['DateTime']['output']>;
  fixed_data?: Maybe<Scalars['JSON']['output']>;
  created_by: GroupMember;
  /** When enabled, the invitation will be deleted after usage. */
  single_use?: Maybe<Scalars['Boolean']['output']>;
  /** When set, only the configured flow can use this invitation. */
  flow?: Maybe<Scalars['UUID']['output']>;
  flow_obj: Flow;
};

export type stages_invitation_invitations_retrieve_response = Invitation | ValidationError | GenericError;

export type stages_invitation_invitations_used_by_list_response = UsedBy | ValidationError | GenericError;

export type stages_invitation_stages_list_response = PaginatedInvitationStageList | ValidationError | GenericError;

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
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  flow_set?: Maybe<Array<Maybe<FlowSet>>>;
  /** If this flag is set, this Stage will jump to the next Stage when no Invitation is given. By default this Stage will cancel the Flow when no invitation is given. */
  continue_flow_without_invitation?: Maybe<Scalars['Boolean']['output']>;
};

export type stages_invitation_stages_retrieve_response = InvitationStage | ValidationError | GenericError;

export type stages_invitation_stages_used_by_list_response = UsedBy | ValidationError | GenericError;

export type stages_password_list_response = PaginatedPasswordStageList | ValidationError | GenericError;

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
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  flow_set?: Maybe<Array<Maybe<FlowSet>>>;
  /** Selection of backends to test the password against. */
  backends: Array<Maybe<BackendsEnum>>;
  /** Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage. */
  configure_flow?: Maybe<Scalars['UUID']['output']>;
  /** How many attempts a user has before the flow is canceled. To lock the user out, use a reputation policy and a user_write stage. */
  failed_attempts_before_cancel?: Maybe<Scalars['Int']['output']>;
};

export type BackendsEnum =
  | 'authentik_core_auth_InbuiltBackend'
  | 'authentik_core_auth_TokenBackend'
  | 'authentik_sources_ldap_auth_LDAPBackend';

export type stages_password_retrieve_response = PasswordStage | ValidationError | GenericError;

export type stages_password_used_by_list_response = UsedBy | ValidationError | GenericError;

export type stages_prompt_prompts_list_response = PaginatedPromptList | ValidationError | GenericError;

export type PaginatedPromptList = {
  pagination: Pagination;
  results: Array<Maybe<Prompt>>;
};

/** Prompt Serializer */
export type Prompt = {
  pk: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Name of the form field, also used to store the value */
  field_key: Scalars['String']['output'];
  label: Scalars['String']['output'];
  type: PromptTypeEnum;
  required?: Maybe<Scalars['Boolean']['output']>;
  /** Optionally provide a short hint that describes the expected input value. When creating a fixed choice field, enable interpreting as expression and return a list to return multiple choices. */
  placeholder?: Maybe<Scalars['String']['output']>;
  /** Optionally pre-fill the input with an initial value. When creating a fixed choice field, enable interpreting as expression and return a list to return multiple default choices. */
  initial_value?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  promptstage_set?: Maybe<Array<Maybe<Stage>>>;
  sub_text?: Maybe<Scalars['String']['output']>;
  placeholder_expression?: Maybe<Scalars['Boolean']['output']>;
  initial_value_expression?: Maybe<Scalars['Boolean']['output']>;
};

export type queryInput_stages_prompt_prompts_list_type =
  | 'ak_locale'
  | 'checkbox'
  | 'date'
  | 'date_time'
  | 'dropdown'
  | 'email'
  | 'file'
  | 'hidden'
  | 'number'
  | 'password'
  | 'radio_button_group'
  | 'separator'
  | 'static'
  | 'text'
  | 'text_area'
  | 'text_area_read_only'
  | 'text_read_only'
  | 'username';

export type stages_prompt_prompts_retrieve_response = Prompt | ValidationError | GenericError;

export type stages_prompt_prompts_used_by_list_response = UsedBy | ValidationError | GenericError;

export type stages_prompt_stages_list_response = PaginatedPromptStageList | ValidationError | GenericError;

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
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  flow_set?: Maybe<Array<Maybe<FlowSet>>>;
  fields: Array<Maybe<Scalars['UUID']['output']>>;
  validation_policies?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
};

export type stages_prompt_stages_retrieve_response = PromptStage | ValidationError | GenericError;

export type stages_prompt_stages_used_by_list_response = UsedBy | ValidationError | GenericError;

export type stages_source_list_response = PaginatedSourceStageList | ValidationError | GenericError;

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
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  flow_set?: Maybe<Array<Maybe<FlowSet>>>;
  source: Scalars['UUID']['output'];
  /** Amount of time a user can take to return from the source to continue the flow (Format: hours=-1;minutes=-2;seconds=-3) */
  resume_timeout?: Maybe<Scalars['String']['output']>;
};

export type stages_source_retrieve_response = SourceStage | ValidationError | GenericError;

export type stages_source_used_by_list_response = UsedBy | ValidationError | GenericError;

export type stages_user_delete_list_response = PaginatedUserDeleteStageList | ValidationError | GenericError;

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
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  flow_set?: Maybe<Array<Maybe<FlowSet>>>;
};

export type stages_user_delete_retrieve_response = UserDeleteStage | ValidationError | GenericError;

export type stages_user_delete_used_by_list_response = UsedBy | ValidationError | GenericError;

export type stages_user_login_list_response = PaginatedUserLoginStageList | ValidationError | GenericError;

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
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  flow_set?: Maybe<Array<Maybe<FlowSet>>>;
  /** Determines how long a session lasts. Default of 0 means that the sessions lasts until the browser is closed. (Format: hours=-1;minutes=-2;seconds=-3) */
  session_duration?: Maybe<Scalars['String']['output']>;
  /** Terminate all other sessions of the user logging in. */
  terminate_other_sessions?: Maybe<Scalars['Boolean']['output']>;
  /** Offset the session will be extended by when the user picks the remember me option. Default of 0 means that the remember me option will not be shown. (Format: hours=-1;minutes=-2;seconds=-3) */
  remember_me_offset?: Maybe<Scalars['String']['output']>;
  network_binding?: Maybe<NetworkBindingEnum>;
  geoip_binding?: Maybe<GeoipBindingEnum>;
};

export type NetworkBindingEnum =
  | 'no_binding'
  | 'bind_asn'
  | 'bind_asn_network'
  | 'bind_asn_network_ip';

export type GeoipBindingEnum =
  | 'no_binding'
  | 'bind_continent'
  | 'bind_continent_country'
  | 'bind_continent_country_city';

/** Bind sessions created by this stage to the configured GeoIP location */
export type queryInput_stages_user_login_list_geoip_binding =
  | 'bind_continent'
  | 'bind_continent_country'
  | 'bind_continent_country_city'
  | 'no_binding';

/** Bind sessions created by this stage to the configured network */
export type queryInput_stages_user_login_list_network_binding =
  | 'bind_asn'
  | 'bind_asn_network'
  | 'bind_asn_network_ip'
  | 'no_binding';

export type stages_user_login_retrieve_response = UserLoginStage | ValidationError | GenericError;

export type stages_user_login_used_by_list_response = UsedBy | ValidationError | GenericError;

export type stages_user_logout_list_response = PaginatedUserLogoutStageList | ValidationError | GenericError;

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
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  flow_set?: Maybe<Array<Maybe<FlowSet>>>;
};

export type stages_user_logout_retrieve_response = UserLogoutStage | ValidationError | GenericError;

export type stages_user_logout_used_by_list_response = UsedBy | ValidationError | GenericError;

export type stages_user_write_list_response = PaginatedUserWriteStageList | ValidationError | GenericError;

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
  verbose_name: Scalars['String']['output'];
  /** Return object's plural verbose_name */
  verbose_name_plural: Scalars['String']['output'];
  /** Return internal model name */
  meta_model_name: Scalars['String']['output'];
  flow_set?: Maybe<Array<Maybe<FlowSet>>>;
  user_creation_mode?: Maybe<UserCreationModeEnum>;
  /** When set, newly created users are inactive and cannot login. */
  create_users_as_inactive?: Maybe<Scalars['Boolean']['output']>;
  /** Optionally add newly created users to this group. */
  create_users_group?: Maybe<Scalars['UUID']['output']>;
  user_type?: Maybe<UserTypeEnum>;
  user_path_template?: Maybe<Scalars['String']['output']>;
};

export type UserCreationModeEnum =
  | 'never_create'
  | 'create_when_required'
  | 'always_create';

export type queryInput_stages_user_write_list_user_creation_mode =
  | 'always_create'
  | 'create_when_required'
  | 'never_create';

export type queryInput_stages_user_write_list_user_type =
  | 'external'
  | 'internal'
  | 'internal_service_account'
  | 'service_account';

export type stages_user_write_retrieve_response = UserWriteStage | ValidationError | GenericError;

export type stages_user_write_used_by_list_response = UsedBy | ValidationError | GenericError;

export type Mutation = {
  /** Settings view */
  admin_settings_update?: Maybe<admin_settings_update_response>;
  /** Settings view */
  admin_settings_partial_update?: Maybe<admin_settings_partial_update_response>;
  /** Get system information. */
  admin_system_create?: Maybe<admin_system_create_response>;
  /** Viewset for Duo authenticator devices (for admins) */
  authenticators_admin_duo_create?: Maybe<authenticators_admin_duo_create_response>;
  /** Viewset for Duo authenticator devices (for admins) */
  authenticators_admin_duo_update?: Maybe<authenticators_admin_duo_update_response>;
  /** Viewset for Duo authenticator devices (for admins) */
  authenticators_admin_duo_partial_update?: Maybe<authenticators_admin_duo_partial_update_response>;
  /** Viewset for Duo authenticator devices (for admins) */
  authenticators_admin_duo_destroy?: Maybe<authenticators_admin_duo_destroy_response>;
  /** Viewset for sms authenticator devices (for admins) */
  authenticators_admin_sms_create?: Maybe<authenticators_admin_sms_create_response>;
  /** Viewset for sms authenticator devices (for admins) */
  authenticators_admin_sms_update?: Maybe<authenticators_admin_sms_update_response>;
  /** Viewset for sms authenticator devices (for admins) */
  authenticators_admin_sms_partial_update?: Maybe<authenticators_admin_sms_partial_update_response>;
  /** Viewset for sms authenticator devices (for admins) */
  authenticators_admin_sms_destroy?: Maybe<authenticators_admin_sms_destroy_response>;
  /** Viewset for static authenticator devices (for admins) */
  authenticators_admin_static_create?: Maybe<authenticators_admin_static_create_response>;
  /** Viewset for static authenticator devices (for admins) */
  authenticators_admin_static_update?: Maybe<authenticators_admin_static_update_response>;
  /** Viewset for static authenticator devices (for admins) */
  authenticators_admin_static_partial_update?: Maybe<authenticators_admin_static_partial_update_response>;
  /** Viewset for static authenticator devices (for admins) */
  authenticators_admin_static_destroy?: Maybe<authenticators_admin_static_destroy_response>;
  /** Viewset for totp authenticator devices (for admins) */
  authenticators_admin_totp_create?: Maybe<authenticators_admin_totp_create_response>;
  /** Viewset for totp authenticator devices (for admins) */
  authenticators_admin_totp_update?: Maybe<authenticators_admin_totp_update_response>;
  /** Viewset for totp authenticator devices (for admins) */
  authenticators_admin_totp_partial_update?: Maybe<authenticators_admin_totp_partial_update_response>;
  /** Viewset for totp authenticator devices (for admins) */
  authenticators_admin_totp_destroy?: Maybe<authenticators_admin_totp_destroy_response>;
  /** Viewset for WebAuthn authenticator devices (for admins) */
  authenticators_admin_webauthn_create?: Maybe<authenticators_admin_webauthn_create_response>;
  /** Viewset for WebAuthn authenticator devices (for admins) */
  authenticators_admin_webauthn_update?: Maybe<authenticators_admin_webauthn_update_response>;
  /** Viewset for WebAuthn authenticator devices (for admins) */
  authenticators_admin_webauthn_partial_update?: Maybe<authenticators_admin_webauthn_partial_update_response>;
  /** Viewset for WebAuthn authenticator devices (for admins) */
  authenticators_admin_webauthn_destroy?: Maybe<authenticators_admin_webauthn_destroy_response>;
  /** Viewset for Duo authenticator devices */
  authenticators_duo_update?: Maybe<authenticators_duo_update_response>;
  /** Viewset for Duo authenticator devices */
  authenticators_duo_partial_update?: Maybe<authenticators_duo_partial_update_response>;
  /** Viewset for Duo authenticator devices */
  authenticators_duo_destroy?: Maybe<authenticators_duo_destroy_response>;
  /** Viewset for sms authenticator devices */
  authenticators_sms_update?: Maybe<authenticators_sms_update_response>;
  /** Viewset for sms authenticator devices */
  authenticators_sms_partial_update?: Maybe<authenticators_sms_partial_update_response>;
  /** Viewset for sms authenticator devices */
  authenticators_sms_destroy?: Maybe<authenticators_sms_destroy_response>;
  /** Viewset for static authenticator devices */
  authenticators_static_update?: Maybe<authenticators_static_update_response>;
  /** Viewset for static authenticator devices */
  authenticators_static_partial_update?: Maybe<authenticators_static_partial_update_response>;
  /** Viewset for static authenticator devices */
  authenticators_static_destroy?: Maybe<authenticators_static_destroy_response>;
  /** Viewset for totp authenticator devices */
  authenticators_totp_update?: Maybe<authenticators_totp_update_response>;
  /** Viewset for totp authenticator devices */
  authenticators_totp_partial_update?: Maybe<authenticators_totp_partial_update_response>;
  /** Viewset for totp authenticator devices */
  authenticators_totp_destroy?: Maybe<authenticators_totp_destroy_response>;
  /** Viewset for WebAuthn authenticator devices */
  authenticators_webauthn_update?: Maybe<authenticators_webauthn_update_response>;
  /** Viewset for WebAuthn authenticator devices */
  authenticators_webauthn_partial_update?: Maybe<authenticators_webauthn_partial_update_response>;
  /** Viewset for WebAuthn authenticator devices */
  authenticators_webauthn_destroy?: Maybe<authenticators_webauthn_destroy_response>;
  /** Application Viewset */
  core_applications_create?: Maybe<core_applications_create_response>;
  /** Application Viewset */
  core_applications_update?: Maybe<core_applications_update_response>;
  /** Application Viewset */
  core_applications_partial_update?: Maybe<core_applications_partial_update_response>;
  /** Application Viewset */
  core_applications_destroy?: Maybe<core_applications_destroy_response>;
  /** Set application icon */
  core_applications_set_icon_create?: Maybe<GenericError>;
  /** Set application icon (as URL) */
  core_applications_set_icon_url_create?: Maybe<GenericError>;
  /** AuthenticatedSession Viewset */
  core_authenticated_sessions_destroy?: Maybe<core_authenticated_sessions_destroy_response>;
  /** Brand Viewset */
  core_brands_create?: Maybe<core_brands_create_response>;
  /** Brand Viewset */
  core_brands_update?: Maybe<core_brands_update_response>;
  /** Brand Viewset */
  core_brands_partial_update?: Maybe<core_brands_partial_update_response>;
  /** Brand Viewset */
  core_brands_destroy?: Maybe<core_brands_destroy_response>;
  /** Group Viewset */
  core_groups_create?: Maybe<core_groups_create_response>;
  /** Group Viewset */
  core_groups_update?: Maybe<core_groups_update_response>;
  /** Group Viewset */
  core_groups_partial_update?: Maybe<core_groups_partial_update_response>;
  /** Group Viewset */
  core_groups_destroy?: Maybe<core_groups_destroy_response>;
  /** Add user to group */
  core_groups_add_user_create?: Maybe<core_groups_add_user_create_response>;
  /** Add user to group */
  core_groups_remove_user_create?: Maybe<core_groups_remove_user_create_response>;
  /** Token Viewset */
  core_tokens_create?: Maybe<core_tokens_create_response>;
  /** Token Viewset */
  core_tokens_update?: Maybe<core_tokens_update_response>;
  /** Token Viewset */
  core_tokens_partial_update?: Maybe<core_tokens_partial_update_response>;
  /** Token Viewset */
  core_tokens_destroy?: Maybe<core_tokens_destroy_response>;
  /**
   * Set token key. Action is logged as event. `authentik_core.set_token_key` permission
   * is required.
   */
  core_tokens_set_key_create?: Maybe<core_tokens_set_key_create_response>;
  /** Convert data into a blueprint, validate it and apply it */
  core_transactional_applications_update?: Maybe<core_transactional_applications_update_response>;
  /** UserConsent Viewset */
  core_user_consent_destroy?: Maybe<core_user_consent_destroy_response>;
  /** User Viewset */
  core_users_create?: Maybe<core_users_create_response>;
  /** User Viewset */
  core_users_update?: Maybe<core_users_update_response>;
  /** User Viewset */
  core_users_partial_update?: Maybe<core_users_partial_update_response>;
  /** User Viewset */
  core_users_destroy?: Maybe<core_users_destroy_response>;
  /** Impersonate a user */
  core_users_impersonate_create?: Maybe<core_users_impersonate_create_response>;
  /** Create a temporary link that a user can use to recover their accounts */
  core_users_recovery_create?: Maybe<core_users_recovery_create_response>;
  /** Create a temporary link that a user can use to recover their accounts */
  core_users_recovery_email_create?: Maybe<core_users_recovery_email_create_response>;
  /** Set password for user */
  core_users_set_password_create?: Maybe<core_users_set_password_create_response>;
  /** Create a new user account that is marked as a service account */
  core_users_service_account_create?: Maybe<core_users_service_account_create_response>;
  /** CertificateKeyPair Viewset */
  crypto_certificatekeypairs_create?: Maybe<crypto_certificatekeypairs_create_response>;
  /** CertificateKeyPair Viewset */
  crypto_certificatekeypairs_update?: Maybe<crypto_certificatekeypairs_update_response>;
  /** CertificateKeyPair Viewset */
  crypto_certificatekeypairs_partial_update?: Maybe<crypto_certificatekeypairs_partial_update_response>;
  /** CertificateKeyPair Viewset */
  crypto_certificatekeypairs_destroy?: Maybe<crypto_certificatekeypairs_destroy_response>;
  /** Generate a new, self-signed certificate-key pair */
  crypto_certificatekeypairs_generate_create?: Maybe<crypto_certificatekeypairs_generate_create_response>;
  /** License Viewset */
  enterprise_license_create?: Maybe<enterprise_license_create_response>;
  /** License Viewset */
  enterprise_license_update?: Maybe<enterprise_license_update_response>;
  /** License Viewset */
  enterprise_license_partial_update?: Maybe<enterprise_license_partial_update_response>;
  /** License Viewset */
  enterprise_license_destroy?: Maybe<enterprise_license_destroy_response>;
  /** Event Read-Only Viewset */
  events_events_create?: Maybe<events_events_create_response>;
  /** Event Read-Only Viewset */
  events_events_update?: Maybe<events_events_update_response>;
  /** Event Read-Only Viewset */
  events_events_partial_update?: Maybe<events_events_partial_update_response>;
  /** Event Read-Only Viewset */
  events_events_destroy?: Maybe<events_events_destroy_response>;
  /** Notification Viewset */
  events_notifications_update?: Maybe<events_notifications_update_response>;
  /** Notification Viewset */
  events_notifications_partial_update?: Maybe<events_notifications_partial_update_response>;
  /** Notification Viewset */
  events_notifications_destroy?: Maybe<events_notifications_destroy_response>;
  /** Mark all the user's notifications as seen */
  events_notifications_mark_all_seen_create?: Maybe<events_notifications_mark_all_seen_create_response>;
  /** NotificationRule Viewset */
  events_rules_create?: Maybe<events_rules_create_response>;
  /** NotificationRule Viewset */
  events_rules_update?: Maybe<events_rules_update_response>;
  /** NotificationRule Viewset */
  events_rules_partial_update?: Maybe<events_rules_partial_update_response>;
  /** NotificationRule Viewset */
  events_rules_destroy?: Maybe<events_rules_destroy_response>;
  /** Run task */
  events_system_tasks_run_create?: Maybe<events_system_tasks_run_create_response>;
  /** NotificationTransport Viewset */
  events_transports_create?: Maybe<events_transports_create_response>;
  /** NotificationTransport Viewset */
  events_transports_update?: Maybe<events_transports_update_response>;
  /** NotificationTransport Viewset */
  events_transports_partial_update?: Maybe<events_transports_partial_update_response>;
  /** NotificationTransport Viewset */
  events_transports_destroy?: Maybe<events_transports_destroy_response>;
  /**
   * Send example notification using selected transport. Requires
   * Modify permissions.
   */
  events_transports_test_create?: Maybe<events_transports_test_create_response>;
  /** FlowStageBinding Viewset */
  flows_bindings_create?: Maybe<flows_bindings_create_response>;
  /** FlowStageBinding Viewset */
  flows_bindings_update?: Maybe<flows_bindings_update_response>;
  /** FlowStageBinding Viewset */
  flows_bindings_partial_update?: Maybe<flows_bindings_partial_update_response>;
  /** FlowStageBinding Viewset */
  flows_bindings_destroy?: Maybe<flows_bindings_destroy_response>;
  /** Solve the previously retrieved challenge and advanced to the next stage. */
  flows_executor_solve?: Maybe<flows_executor_solve_response>;
  /** Flow Viewset */
  flows_instances_create?: Maybe<flows_instances_create_response>;
  /** Flow Viewset */
  flows_instances_update?: Maybe<flows_instances_update_response>;
  /** Flow Viewset */
  flows_instances_partial_update?: Maybe<flows_instances_partial_update_response>;
  /** Flow Viewset */
  flows_instances_destroy?: Maybe<flows_instances_destroy_response>;
  /** Set Flow background */
  flows_instances_set_background_create?: Maybe<GenericError>;
  /** Set Flow background (as URL) */
  flows_instances_set_background_url_create?: Maybe<GenericError>;
  /** Clear flow cache */
  flows_instances_cache_clear_create?: Maybe<flows_instances_cache_clear_create_response>;
  /** Import flow from .yaml file */
  flows_instances_import_create?: Maybe<flows_instances_import_create_response>;
  /** Blueprint instances */
  managed_blueprints_create?: Maybe<managed_blueprints_create_response>;
  /** Blueprint instances */
  managed_blueprints_update?: Maybe<managed_blueprints_update_response>;
  /** Blueprint instances */
  managed_blueprints_partial_update?: Maybe<managed_blueprints_partial_update_response>;
  /** Blueprint instances */
  managed_blueprints_destroy?: Maybe<managed_blueprints_destroy_response>;
  /** Apply a blueprint */
  managed_blueprints_apply_create?: Maybe<managed_blueprints_apply_create_response>;
  /** AccessToken Viewset */
  oauth2_access_tokens_destroy?: Maybe<oauth2_access_tokens_destroy_response>;
  /** AuthorizationCode Viewset */
  oauth2_authorization_codes_destroy?: Maybe<oauth2_authorization_codes_destroy_response>;
  /** RefreshToken Viewset */
  oauth2_refresh_tokens_destroy?: Maybe<oauth2_refresh_tokens_destroy_response>;
  /** Outpost Viewset */
  outposts_instances_create?: Maybe<outposts_instances_create_response>;
  /** Outpost Viewset */
  outposts_instances_update?: Maybe<outposts_instances_update_response>;
  /** Outpost Viewset */
  outposts_instances_partial_update?: Maybe<outposts_instances_partial_update_response>;
  /** Outpost Viewset */
  outposts_instances_destroy?: Maybe<outposts_instances_destroy_response>;
  /** ServiceConnection Viewset */
  outposts_service_connections_all_destroy?: Maybe<outposts_service_connections_all_destroy_response>;
  /** DockerServiceConnection Viewset */
  outposts_service_connections_docker_create?: Maybe<outposts_service_connections_docker_create_response>;
  /** DockerServiceConnection Viewset */
  outposts_service_connections_docker_update?: Maybe<outposts_service_connections_docker_update_response>;
  /** DockerServiceConnection Viewset */
  outposts_service_connections_docker_partial_update?: Maybe<outposts_service_connections_docker_partial_update_response>;
  /** DockerServiceConnection Viewset */
  outposts_service_connections_docker_destroy?: Maybe<outposts_service_connections_docker_destroy_response>;
  /** KubernetesServiceConnection Viewset */
  outposts_service_connections_kubernetes_create?: Maybe<outposts_service_connections_kubernetes_create_response>;
  /** KubernetesServiceConnection Viewset */
  outposts_service_connections_kubernetes_update?: Maybe<outposts_service_connections_kubernetes_update_response>;
  /** KubernetesServiceConnection Viewset */
  outposts_service_connections_kubernetes_partial_update?: Maybe<outposts_service_connections_kubernetes_partial_update_response>;
  /** KubernetesServiceConnection Viewset */
  outposts_service_connections_kubernetes_destroy?: Maybe<outposts_service_connections_kubernetes_destroy_response>;
  /** Policy Viewset */
  policies_all_destroy?: Maybe<policies_all_destroy_response>;
  /** Test policy */
  policies_all_test_create?: Maybe<policies_all_test_create_response>;
  /** Clear policy cache */
  policies_all_cache_clear_create?: Maybe<policies_all_cache_clear_create_response>;
  /** PolicyBinding Viewset */
  policies_bindings_create?: Maybe<policies_bindings_create_response>;
  /** PolicyBinding Viewset */
  policies_bindings_update?: Maybe<policies_bindings_update_response>;
  /** PolicyBinding Viewset */
  policies_bindings_partial_update?: Maybe<policies_bindings_partial_update_response>;
  /** PolicyBinding Viewset */
  policies_bindings_destroy?: Maybe<policies_bindings_destroy_response>;
  /** Dummy Viewset */
  policies_dummy_create?: Maybe<policies_dummy_create_response>;
  /** Dummy Viewset */
  policies_dummy_update?: Maybe<policies_dummy_update_response>;
  /** Dummy Viewset */
  policies_dummy_partial_update?: Maybe<policies_dummy_partial_update_response>;
  /** Dummy Viewset */
  policies_dummy_destroy?: Maybe<policies_dummy_destroy_response>;
  /** Event Matcher Policy Viewset */
  policies_event_matcher_create?: Maybe<policies_event_matcher_create_response>;
  /** Event Matcher Policy Viewset */
  policies_event_matcher_update?: Maybe<policies_event_matcher_update_response>;
  /** Event Matcher Policy Viewset */
  policies_event_matcher_partial_update?: Maybe<policies_event_matcher_partial_update_response>;
  /** Event Matcher Policy Viewset */
  policies_event_matcher_destroy?: Maybe<policies_event_matcher_destroy_response>;
  /** Source Viewset */
  policies_expression_create?: Maybe<policies_expression_create_response>;
  /** Source Viewset */
  policies_expression_update?: Maybe<policies_expression_update_response>;
  /** Source Viewset */
  policies_expression_partial_update?: Maybe<policies_expression_partial_update_response>;
  /** Source Viewset */
  policies_expression_destroy?: Maybe<policies_expression_destroy_response>;
  /** Password Policy Viewset */
  policies_password_create?: Maybe<policies_password_create_response>;
  /** Password Policy Viewset */
  policies_password_update?: Maybe<policies_password_update_response>;
  /** Password Policy Viewset */
  policies_password_partial_update?: Maybe<policies_password_partial_update_response>;
  /** Password Policy Viewset */
  policies_password_destroy?: Maybe<policies_password_destroy_response>;
  /** Password Expiry Viewset */
  policies_password_expiry_create?: Maybe<policies_password_expiry_create_response>;
  /** Password Expiry Viewset */
  policies_password_expiry_update?: Maybe<policies_password_expiry_update_response>;
  /** Password Expiry Viewset */
  policies_password_expiry_partial_update?: Maybe<policies_password_expiry_partial_update_response>;
  /** Password Expiry Viewset */
  policies_password_expiry_destroy?: Maybe<policies_password_expiry_destroy_response>;
  /** Reputation Policy Viewset */
  policies_reputation_create?: Maybe<policies_reputation_create_response>;
  /** Reputation Policy Viewset */
  policies_reputation_update?: Maybe<policies_reputation_update_response>;
  /** Reputation Policy Viewset */
  policies_reputation_partial_update?: Maybe<policies_reputation_partial_update_response>;
  /** Reputation Policy Viewset */
  policies_reputation_destroy?: Maybe<policies_reputation_destroy_response>;
  /** Reputation Viewset */
  policies_reputation_scores_destroy?: Maybe<policies_reputation_scores_destroy_response>;
  /** PropertyMapping Viewset */
  propertymappings_all_destroy?: Maybe<propertymappings_all_destroy_response>;
  /** Test Property Mapping */
  propertymappings_all_test_create?: Maybe<propertymappings_all_test_create_response>;
  /** LDAP PropertyMapping Viewset */
  propertymappings_ldap_create?: Maybe<propertymappings_ldap_create_response>;
  /** LDAP PropertyMapping Viewset */
  propertymappings_ldap_update?: Maybe<propertymappings_ldap_update_response>;
  /** LDAP PropertyMapping Viewset */
  propertymappings_ldap_partial_update?: Maybe<propertymappings_ldap_partial_update_response>;
  /** LDAP PropertyMapping Viewset */
  propertymappings_ldap_destroy?: Maybe<propertymappings_ldap_destroy_response>;
  /** NotificationWebhookMapping Viewset */
  propertymappings_notification_create?: Maybe<propertymappings_notification_create_response>;
  /** NotificationWebhookMapping Viewset */
  propertymappings_notification_update?: Maybe<propertymappings_notification_update_response>;
  /** NotificationWebhookMapping Viewset */
  propertymappings_notification_partial_update?: Maybe<propertymappings_notification_partial_update_response>;
  /** NotificationWebhookMapping Viewset */
  propertymappings_notification_destroy?: Maybe<propertymappings_notification_destroy_response>;
  /** RACPropertyMapping Viewset */
  propertymappings_rac_create?: Maybe<propertymappings_rac_create_response>;
  /** RACPropertyMapping Viewset */
  propertymappings_rac_update?: Maybe<propertymappings_rac_update_response>;
  /** RACPropertyMapping Viewset */
  propertymappings_rac_partial_update?: Maybe<propertymappings_rac_partial_update_response>;
  /** RACPropertyMapping Viewset */
  propertymappings_rac_destroy?: Maybe<propertymappings_rac_destroy_response>;
  /** SAMLPropertyMapping Viewset */
  propertymappings_saml_create?: Maybe<propertymappings_saml_create_response>;
  /** SAMLPropertyMapping Viewset */
  propertymappings_saml_update?: Maybe<propertymappings_saml_update_response>;
  /** SAMLPropertyMapping Viewset */
  propertymappings_saml_partial_update?: Maybe<propertymappings_saml_partial_update_response>;
  /** SAMLPropertyMapping Viewset */
  propertymappings_saml_destroy?: Maybe<propertymappings_saml_destroy_response>;
  /** SCIMMapping Viewset */
  propertymappings_scim_create?: Maybe<propertymappings_scim_create_response>;
  /** SCIMMapping Viewset */
  propertymappings_scim_update?: Maybe<propertymappings_scim_update_response>;
  /** SCIMMapping Viewset */
  propertymappings_scim_partial_update?: Maybe<propertymappings_scim_partial_update_response>;
  /** SCIMMapping Viewset */
  propertymappings_scim_destroy?: Maybe<propertymappings_scim_destroy_response>;
  /** ScopeMapping Viewset */
  propertymappings_scope_create?: Maybe<propertymappings_scope_create_response>;
  /** ScopeMapping Viewset */
  propertymappings_scope_update?: Maybe<propertymappings_scope_update_response>;
  /** ScopeMapping Viewset */
  propertymappings_scope_partial_update?: Maybe<propertymappings_scope_partial_update_response>;
  /** ScopeMapping Viewset */
  propertymappings_scope_destroy?: Maybe<propertymappings_scope_destroy_response>;
  /** Provider Viewset */
  providers_all_destroy?: Maybe<providers_all_destroy_response>;
  /** LDAPProvider Viewset */
  providers_ldap_create?: Maybe<providers_ldap_create_response>;
  /** LDAPProvider Viewset */
  providers_ldap_update?: Maybe<providers_ldap_update_response>;
  /** LDAPProvider Viewset */
  providers_ldap_partial_update?: Maybe<providers_ldap_partial_update_response>;
  /** LDAPProvider Viewset */
  providers_ldap_destroy?: Maybe<providers_ldap_destroy_response>;
  /** OAuth2Provider Viewset */
  providers_oauth2_create?: Maybe<providers_oauth2_create_response>;
  /** OAuth2Provider Viewset */
  providers_oauth2_update?: Maybe<providers_oauth2_update_response>;
  /** OAuth2Provider Viewset */
  providers_oauth2_partial_update?: Maybe<providers_oauth2_partial_update_response>;
  /** OAuth2Provider Viewset */
  providers_oauth2_destroy?: Maybe<providers_oauth2_destroy_response>;
  /** ProxyProvider Viewset */
  providers_proxy_create?: Maybe<providers_proxy_create_response>;
  /** ProxyProvider Viewset */
  providers_proxy_update?: Maybe<providers_proxy_update_response>;
  /** ProxyProvider Viewset */
  providers_proxy_partial_update?: Maybe<providers_proxy_partial_update_response>;
  /** ProxyProvider Viewset */
  providers_proxy_destroy?: Maybe<providers_proxy_destroy_response>;
  /** RACProvider Viewset */
  providers_rac_create?: Maybe<providers_rac_create_response>;
  /** RACProvider Viewset */
  providers_rac_update?: Maybe<providers_rac_update_response>;
  /** RACProvider Viewset */
  providers_rac_partial_update?: Maybe<providers_rac_partial_update_response>;
  /** RACProvider Viewset */
  providers_rac_destroy?: Maybe<providers_rac_destroy_response>;
  /** RadiusProvider Viewset */
  providers_radius_create?: Maybe<providers_radius_create_response>;
  /** RadiusProvider Viewset */
  providers_radius_update?: Maybe<providers_radius_update_response>;
  /** RadiusProvider Viewset */
  providers_radius_partial_update?: Maybe<providers_radius_partial_update_response>;
  /** RadiusProvider Viewset */
  providers_radius_destroy?: Maybe<providers_radius_destroy_response>;
  /** SAMLProvider Viewset */
  providers_saml_create?: Maybe<providers_saml_create_response>;
  /** SAMLProvider Viewset */
  providers_saml_update?: Maybe<providers_saml_update_response>;
  /** SAMLProvider Viewset */
  providers_saml_partial_update?: Maybe<providers_saml_partial_update_response>;
  /** SAMLProvider Viewset */
  providers_saml_destroy?: Maybe<providers_saml_destroy_response>;
  /** Create provider from SAML Metadata */
  providers_saml_import_metadata_create?: Maybe<providers_saml_import_metadata_create_response>;
  /** SCIMProvider Viewset */
  providers_scim_create?: Maybe<providers_scim_create_response>;
  /** SCIMProvider Viewset */
  providers_scim_update?: Maybe<providers_scim_update_response>;
  /** SCIMProvider Viewset */
  providers_scim_partial_update?: Maybe<providers_scim_partial_update_response>;
  /** SCIMProvider Viewset */
  providers_scim_destroy?: Maybe<providers_scim_destroy_response>;
  /** ConnectionToken Viewset */
  rac_connection_tokens_update?: Maybe<rac_connection_tokens_update_response>;
  /** ConnectionToken Viewset */
  rac_connection_tokens_partial_update?: Maybe<rac_connection_tokens_partial_update_response>;
  /** ConnectionToken Viewset */
  rac_connection_tokens_destroy?: Maybe<rac_connection_tokens_destroy_response>;
  /** Endpoint Viewset */
  rac_endpoints_create?: Maybe<rac_endpoints_create_response>;
  /** Endpoint Viewset */
  rac_endpoints_update?: Maybe<rac_endpoints_update_response>;
  /** Endpoint Viewset */
  rac_endpoints_partial_update?: Maybe<rac_endpoints_partial_update_response>;
  /** Endpoint Viewset */
  rac_endpoints_destroy?: Maybe<rac_endpoints_destroy_response>;
  /**
   * Assign permission(s) to role. When `object_pk` is set, the permissions
   * are only assigned to the specific object, otherwise they are assigned globally.
   */
  rbac_permissions_assigned_by_roles_assign_create?: Maybe<rbac_permissions_assigned_by_roles_assign_create_response>;
  /**
   * Unassign permission(s) to role. When `object_pk` is set, the permissions
   * are only assigned to the specific object, otherwise they are assigned globally.
   */
  rbac_permissions_assigned_by_roles_unassign_partial_update?: Maybe<rbac_permissions_assigned_by_roles_unassign_partial_update_response>;
  /** Assign permission(s) to user */
  rbac_permissions_assigned_by_users_assign_create?: Maybe<rbac_permissions_assigned_by_users_assign_create_response>;
  /**
   * Unassign permission(s) to user. When `object_pk` is set, the permissions
   * are only assigned to the specific object, otherwise they are assigned globally.
   */
  rbac_permissions_assigned_by_users_unassign_partial_update?: Maybe<rbac_permissions_assigned_by_users_unassign_partial_update_response>;
  /** Role viewset */
  rbac_roles_create?: Maybe<rbac_roles_create_response>;
  /** Role viewset */
  rbac_roles_update?: Maybe<rbac_roles_update_response>;
  /** Role viewset */
  rbac_roles_partial_update?: Maybe<rbac_roles_partial_update_response>;
  /** Role viewset */
  rbac_roles_destroy?: Maybe<rbac_roles_destroy_response>;
  /** Source Viewset */
  sources_all_destroy?: Maybe<sources_all_destroy_response>;
  /** Set source icon */
  sources_all_set_icon_create?: Maybe<GenericError>;
  /** Set source icon (as URL) */
  sources_all_set_icon_url_create?: Maybe<GenericError>;
  /** LDAP Source Viewset */
  sources_ldap_create?: Maybe<sources_ldap_create_response>;
  /** LDAP Source Viewset */
  sources_ldap_update?: Maybe<sources_ldap_update_response>;
  /** LDAP Source Viewset */
  sources_ldap_partial_update?: Maybe<sources_ldap_partial_update_response>;
  /** LDAP Source Viewset */
  sources_ldap_destroy?: Maybe<sources_ldap_destroy_response>;
  /** Source Viewset */
  sources_oauth_create?: Maybe<sources_oauth_create_response>;
  /** Source Viewset */
  sources_oauth_update?: Maybe<sources_oauth_update_response>;
  /** Source Viewset */
  sources_oauth_partial_update?: Maybe<sources_oauth_partial_update_response>;
  /** Source Viewset */
  sources_oauth_destroy?: Maybe<sources_oauth_destroy_response>;
  /** Plex source Viewset */
  sources_plex_create?: Maybe<sources_plex_create_response>;
  /** Plex source Viewset */
  sources_plex_update?: Maybe<sources_plex_update_response>;
  /** Plex source Viewset */
  sources_plex_partial_update?: Maybe<sources_plex_partial_update_response>;
  /** Plex source Viewset */
  sources_plex_destroy?: Maybe<sources_plex_destroy_response>;
  /**
   * Redeem a plex token, check it's access to resources against what's allowed
   * for the source, and redirect to an authentication/enrollment flow.
   */
  sources_plex_redeem_token_create?: Maybe<RedirectChallenge>;
  /** Redeem a plex token for an authenticated user, creating a connection */
  sources_plex_redeem_token_authenticated_create?: Maybe<Scalars['Void']['output']>;
  /** SAMLSource Viewset */
  sources_saml_create?: Maybe<sources_saml_create_response>;
  /** SAMLSource Viewset */
  sources_saml_update?: Maybe<sources_saml_update_response>;
  /** SAMLSource Viewset */
  sources_saml_partial_update?: Maybe<sources_saml_partial_update_response>;
  /** SAMLSource Viewset */
  sources_saml_destroy?: Maybe<sources_saml_destroy_response>;
  /** SCIMSource Viewset */
  sources_scim_create?: Maybe<sources_scim_create_response>;
  /** SCIMSource Viewset */
  sources_scim_update?: Maybe<sources_scim_update_response>;
  /** SCIMSource Viewset */
  sources_scim_partial_update?: Maybe<sources_scim_partial_update_response>;
  /** SCIMSource Viewset */
  sources_scim_destroy?: Maybe<sources_scim_destroy_response>;
  /** SCIMSourceGroup Viewset */
  sources_scim_groups_create?: Maybe<sources_scim_groups_create_response>;
  /** SCIMSourceGroup Viewset */
  sources_scim_groups_update?: Maybe<sources_scim_groups_update_response>;
  /** SCIMSourceGroup Viewset */
  sources_scim_groups_partial_update?: Maybe<sources_scim_groups_partial_update_response>;
  /** SCIMSourceGroup Viewset */
  sources_scim_groups_destroy?: Maybe<sources_scim_groups_destroy_response>;
  /** SCIMSourceUser Viewset */
  sources_scim_users_create?: Maybe<sources_scim_users_create_response>;
  /** SCIMSourceUser Viewset */
  sources_scim_users_update?: Maybe<sources_scim_users_update_response>;
  /** SCIMSourceUser Viewset */
  sources_scim_users_partial_update?: Maybe<sources_scim_users_partial_update_response>;
  /** SCIMSourceUser Viewset */
  sources_scim_users_destroy?: Maybe<sources_scim_users_destroy_response>;
  /** User-source connection Viewset */
  sources_user_connections_all_update?: Maybe<sources_user_connections_all_update_response>;
  /** User-source connection Viewset */
  sources_user_connections_all_partial_update?: Maybe<sources_user_connections_all_partial_update_response>;
  /** User-source connection Viewset */
  sources_user_connections_all_destroy?: Maybe<sources_user_connections_all_destroy_response>;
  /** Source Viewset */
  sources_user_connections_oauth_create?: Maybe<sources_user_connections_oauth_create_response>;
  /** Source Viewset */
  sources_user_connections_oauth_update?: Maybe<sources_user_connections_oauth_update_response>;
  /** Source Viewset */
  sources_user_connections_oauth_partial_update?: Maybe<sources_user_connections_oauth_partial_update_response>;
  /** Source Viewset */
  sources_user_connections_oauth_destroy?: Maybe<sources_user_connections_oauth_destroy_response>;
  /** Plex Source connection Serializer */
  sources_user_connections_plex_create?: Maybe<sources_user_connections_plex_create_response>;
  /** Plex Source connection Serializer */
  sources_user_connections_plex_update?: Maybe<sources_user_connections_plex_update_response>;
  /** Plex Source connection Serializer */
  sources_user_connections_plex_partial_update?: Maybe<sources_user_connections_plex_partial_update_response>;
  /** Plex Source connection Serializer */
  sources_user_connections_plex_destroy?: Maybe<sources_user_connections_plex_destroy_response>;
  /** Source Viewset */
  sources_user_connections_saml_create?: Maybe<sources_user_connections_saml_create_response>;
  /** Source Viewset */
  sources_user_connections_saml_update?: Maybe<sources_user_connections_saml_update_response>;
  /** Source Viewset */
  sources_user_connections_saml_partial_update?: Maybe<sources_user_connections_saml_partial_update_response>;
  /** Source Viewset */
  sources_user_connections_saml_destroy?: Maybe<sources_user_connections_saml_destroy_response>;
  /** Stage Viewset */
  stages_all_destroy?: Maybe<stages_all_destroy_response>;
  /** AuthenticatorDuoStage Viewset */
  stages_authenticator_duo_create?: Maybe<stages_authenticator_duo_create_response>;
  /** AuthenticatorDuoStage Viewset */
  stages_authenticator_duo_update?: Maybe<stages_authenticator_duo_update_response>;
  /** AuthenticatorDuoStage Viewset */
  stages_authenticator_duo_partial_update?: Maybe<stages_authenticator_duo_partial_update_response>;
  /** AuthenticatorDuoStage Viewset */
  stages_authenticator_duo_destroy?: Maybe<stages_authenticator_duo_destroy_response>;
  /** Check enrollment status of user details in current session */
  stages_authenticator_duo_enrollment_status_create?: Maybe<stages_authenticator_duo_enrollment_status_create_response>;
  /** Import duo devices into authentik */
  stages_authenticator_duo_import_device_manual_create?: Maybe<stages_authenticator_duo_import_device_manual_create_response>;
  /** Import duo devices into authentik */
  stages_authenticator_duo_import_devices_automatic_create?: Maybe<stages_authenticator_duo_import_devices_automatic_create_response>;
  /** AuthenticatorSMSStage Viewset */
  stages_authenticator_sms_create?: Maybe<stages_authenticator_sms_create_response>;
  /** AuthenticatorSMSStage Viewset */
  stages_authenticator_sms_update?: Maybe<stages_authenticator_sms_update_response>;
  /** AuthenticatorSMSStage Viewset */
  stages_authenticator_sms_partial_update?: Maybe<stages_authenticator_sms_partial_update_response>;
  /** AuthenticatorSMSStage Viewset */
  stages_authenticator_sms_destroy?: Maybe<stages_authenticator_sms_destroy_response>;
  /** AuthenticatorStaticStage Viewset */
  stages_authenticator_static_create?: Maybe<stages_authenticator_static_create_response>;
  /** AuthenticatorStaticStage Viewset */
  stages_authenticator_static_update?: Maybe<stages_authenticator_static_update_response>;
  /** AuthenticatorStaticStage Viewset */
  stages_authenticator_static_partial_update?: Maybe<stages_authenticator_static_partial_update_response>;
  /** AuthenticatorStaticStage Viewset */
  stages_authenticator_static_destroy?: Maybe<stages_authenticator_static_destroy_response>;
  /** AuthenticatorTOTPStage Viewset */
  stages_authenticator_totp_create?: Maybe<stages_authenticator_totp_create_response>;
  /** AuthenticatorTOTPStage Viewset */
  stages_authenticator_totp_update?: Maybe<stages_authenticator_totp_update_response>;
  /** AuthenticatorTOTPStage Viewset */
  stages_authenticator_totp_partial_update?: Maybe<stages_authenticator_totp_partial_update_response>;
  /** AuthenticatorTOTPStage Viewset */
  stages_authenticator_totp_destroy?: Maybe<stages_authenticator_totp_destroy_response>;
  /** AuthenticatorValidateStage Viewset */
  stages_authenticator_validate_create?: Maybe<stages_authenticator_validate_create_response>;
  /** AuthenticatorValidateStage Viewset */
  stages_authenticator_validate_update?: Maybe<stages_authenticator_validate_update_response>;
  /** AuthenticatorValidateStage Viewset */
  stages_authenticator_validate_partial_update?: Maybe<stages_authenticator_validate_partial_update_response>;
  /** AuthenticatorValidateStage Viewset */
  stages_authenticator_validate_destroy?: Maybe<stages_authenticator_validate_destroy_response>;
  /** AuthenticatorWebAuthnStage Viewset */
  stages_authenticator_webauthn_create?: Maybe<stages_authenticator_webauthn_create_response>;
  /** AuthenticatorWebAuthnStage Viewset */
  stages_authenticator_webauthn_update?: Maybe<stages_authenticator_webauthn_update_response>;
  /** AuthenticatorWebAuthnStage Viewset */
  stages_authenticator_webauthn_partial_update?: Maybe<stages_authenticator_webauthn_partial_update_response>;
  /** AuthenticatorWebAuthnStage Viewset */
  stages_authenticator_webauthn_destroy?: Maybe<stages_authenticator_webauthn_destroy_response>;
  /** CaptchaStage Viewset */
  stages_captcha_create?: Maybe<stages_captcha_create_response>;
  /** CaptchaStage Viewset */
  stages_captcha_update?: Maybe<stages_captcha_update_response>;
  /** CaptchaStage Viewset */
  stages_captcha_partial_update?: Maybe<stages_captcha_partial_update_response>;
  /** CaptchaStage Viewset */
  stages_captcha_destroy?: Maybe<stages_captcha_destroy_response>;
  /** ConsentStage Viewset */
  stages_consent_create?: Maybe<stages_consent_create_response>;
  /** ConsentStage Viewset */
  stages_consent_update?: Maybe<stages_consent_update_response>;
  /** ConsentStage Viewset */
  stages_consent_partial_update?: Maybe<stages_consent_partial_update_response>;
  /** ConsentStage Viewset */
  stages_consent_destroy?: Maybe<stages_consent_destroy_response>;
  /** DenyStage Viewset */
  stages_deny_create?: Maybe<stages_deny_create_response>;
  /** DenyStage Viewset */
  stages_deny_update?: Maybe<stages_deny_update_response>;
  /** DenyStage Viewset */
  stages_deny_partial_update?: Maybe<stages_deny_partial_update_response>;
  /** DenyStage Viewset */
  stages_deny_destroy?: Maybe<stages_deny_destroy_response>;
  /** DummyStage Viewset */
  stages_dummy_create?: Maybe<stages_dummy_create_response>;
  /** DummyStage Viewset */
  stages_dummy_update?: Maybe<stages_dummy_update_response>;
  /** DummyStage Viewset */
  stages_dummy_partial_update?: Maybe<stages_dummy_partial_update_response>;
  /** DummyStage Viewset */
  stages_dummy_destroy?: Maybe<stages_dummy_destroy_response>;
  /** EmailStage Viewset */
  stages_email_create?: Maybe<stages_email_create_response>;
  /** EmailStage Viewset */
  stages_email_update?: Maybe<stages_email_update_response>;
  /** EmailStage Viewset */
  stages_email_partial_update?: Maybe<stages_email_partial_update_response>;
  /** EmailStage Viewset */
  stages_email_destroy?: Maybe<stages_email_destroy_response>;
  /** IdentificationStage Viewset */
  stages_identification_create?: Maybe<stages_identification_create_response>;
  /** IdentificationStage Viewset */
  stages_identification_update?: Maybe<stages_identification_update_response>;
  /** IdentificationStage Viewset */
  stages_identification_partial_update?: Maybe<stages_identification_partial_update_response>;
  /** IdentificationStage Viewset */
  stages_identification_destroy?: Maybe<stages_identification_destroy_response>;
  /** Invitation Viewset */
  stages_invitation_invitations_create?: Maybe<stages_invitation_invitations_create_response>;
  /** Invitation Viewset */
  stages_invitation_invitations_update?: Maybe<stages_invitation_invitations_update_response>;
  /** Invitation Viewset */
  stages_invitation_invitations_partial_update?: Maybe<stages_invitation_invitations_partial_update_response>;
  /** Invitation Viewset */
  stages_invitation_invitations_destroy?: Maybe<stages_invitation_invitations_destroy_response>;
  /** InvitationStage Viewset */
  stages_invitation_stages_create?: Maybe<stages_invitation_stages_create_response>;
  /** InvitationStage Viewset */
  stages_invitation_stages_update?: Maybe<stages_invitation_stages_update_response>;
  /** InvitationStage Viewset */
  stages_invitation_stages_partial_update?: Maybe<stages_invitation_stages_partial_update_response>;
  /** InvitationStage Viewset */
  stages_invitation_stages_destroy?: Maybe<stages_invitation_stages_destroy_response>;
  /** PasswordStage Viewset */
  stages_password_create?: Maybe<stages_password_create_response>;
  /** PasswordStage Viewset */
  stages_password_update?: Maybe<stages_password_update_response>;
  /** PasswordStage Viewset */
  stages_password_partial_update?: Maybe<stages_password_partial_update_response>;
  /** PasswordStage Viewset */
  stages_password_destroy?: Maybe<stages_password_destroy_response>;
  /** Prompt Viewset */
  stages_prompt_prompts_create?: Maybe<stages_prompt_prompts_create_response>;
  /** Prompt Viewset */
  stages_prompt_prompts_update?: Maybe<stages_prompt_prompts_update_response>;
  /** Prompt Viewset */
  stages_prompt_prompts_partial_update?: Maybe<stages_prompt_prompts_partial_update_response>;
  /** Prompt Viewset */
  stages_prompt_prompts_destroy?: Maybe<stages_prompt_prompts_destroy_response>;
  /** Preview a prompt as a challenge, just like a flow would receive */
  stages_prompt_prompts_preview_create?: Maybe<stages_prompt_prompts_preview_create_response>;
  /** PromptStage Viewset */
  stages_prompt_stages_create?: Maybe<stages_prompt_stages_create_response>;
  /** PromptStage Viewset */
  stages_prompt_stages_update?: Maybe<stages_prompt_stages_update_response>;
  /** PromptStage Viewset */
  stages_prompt_stages_partial_update?: Maybe<stages_prompt_stages_partial_update_response>;
  /** PromptStage Viewset */
  stages_prompt_stages_destroy?: Maybe<stages_prompt_stages_destroy_response>;
  /** SourceStage Viewset */
  stages_source_create?: Maybe<stages_source_create_response>;
  /** SourceStage Viewset */
  stages_source_update?: Maybe<stages_source_update_response>;
  /** SourceStage Viewset */
  stages_source_partial_update?: Maybe<stages_source_partial_update_response>;
  /** SourceStage Viewset */
  stages_source_destroy?: Maybe<stages_source_destroy_response>;
  /** UserDeleteStage Viewset */
  stages_user_delete_create?: Maybe<stages_user_delete_create_response>;
  /** UserDeleteStage Viewset */
  stages_user_delete_update?: Maybe<stages_user_delete_update_response>;
  /** UserDeleteStage Viewset */
  stages_user_delete_partial_update?: Maybe<stages_user_delete_partial_update_response>;
  /** UserDeleteStage Viewset */
  stages_user_delete_destroy?: Maybe<stages_user_delete_destroy_response>;
  /** UserLoginStage Viewset */
  stages_user_login_create?: Maybe<stages_user_login_create_response>;
  /** UserLoginStage Viewset */
  stages_user_login_update?: Maybe<stages_user_login_update_response>;
  /** UserLoginStage Viewset */
  stages_user_login_partial_update?: Maybe<stages_user_login_partial_update_response>;
  /** UserLoginStage Viewset */
  stages_user_login_destroy?: Maybe<stages_user_login_destroy_response>;
  /** UserLogoutStage Viewset */
  stages_user_logout_create?: Maybe<stages_user_logout_create_response>;
  /** UserLogoutStage Viewset */
  stages_user_logout_update?: Maybe<stages_user_logout_update_response>;
  /** UserLogoutStage Viewset */
  stages_user_logout_partial_update?: Maybe<stages_user_logout_partial_update_response>;
  /** UserLogoutStage Viewset */
  stages_user_logout_destroy?: Maybe<stages_user_logout_destroy_response>;
  /** UserWriteStage Viewset */
  stages_user_write_create?: Maybe<stages_user_write_create_response>;
  /** UserWriteStage Viewset */
  stages_user_write_update?: Maybe<stages_user_write_update_response>;
  /** UserWriteStage Viewset */
  stages_user_write_partial_update?: Maybe<stages_user_write_partial_update_response>;
  /** UserWriteStage Viewset */
  stages_user_write_destroy?: Maybe<stages_user_write_destroy_response>;
};


export type Mutationadmin_settings_updateArgs = {
  input?: InputMaybe<SettingsRequest_Input>;
};


export type Mutationadmin_settings_partial_updateArgs = {
  input?: InputMaybe<PatchedSettingsRequest_Input>;
};


export type Mutationauthenticators_admin_duo_createArgs = {
  input?: InputMaybe<DuoDeviceRequest_Input>;
};


export type Mutationauthenticators_admin_duo_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<DuoDeviceRequest_Input>;
};


export type Mutationauthenticators_admin_duo_partial_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<PatchedDuoDeviceRequest_Input>;
};


export type Mutationauthenticators_admin_duo_destroyArgs = {
  id: Scalars['Int']['input'];
};


export type Mutationauthenticators_admin_sms_createArgs = {
  input?: InputMaybe<SMSDeviceRequest_Input>;
};


export type Mutationauthenticators_admin_sms_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<SMSDeviceRequest_Input>;
};


export type Mutationauthenticators_admin_sms_partial_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<PatchedSMSDeviceRequest_Input>;
};


export type Mutationauthenticators_admin_sms_destroyArgs = {
  id: Scalars['Int']['input'];
};


export type Mutationauthenticators_admin_static_createArgs = {
  input?: InputMaybe<StaticDeviceRequest_Input>;
};


export type Mutationauthenticators_admin_static_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<StaticDeviceRequest_Input>;
};


export type Mutationauthenticators_admin_static_partial_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<PatchedStaticDeviceRequest_Input>;
};


export type Mutationauthenticators_admin_static_destroyArgs = {
  id: Scalars['Int']['input'];
};


export type Mutationauthenticators_admin_totp_createArgs = {
  input?: InputMaybe<TOTPDeviceRequest_Input>;
};


export type Mutationauthenticators_admin_totp_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<TOTPDeviceRequest_Input>;
};


export type Mutationauthenticators_admin_totp_partial_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<PatchedTOTPDeviceRequest_Input>;
};


export type Mutationauthenticators_admin_totp_destroyArgs = {
  id: Scalars['Int']['input'];
};


export type Mutationauthenticators_admin_webauthn_createArgs = {
  input?: InputMaybe<WebAuthnDeviceRequest_Input>;
};


export type Mutationauthenticators_admin_webauthn_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<WebAuthnDeviceRequest_Input>;
};


export type Mutationauthenticators_admin_webauthn_partial_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<PatchedWebAuthnDeviceRequest_Input>;
};


export type Mutationauthenticators_admin_webauthn_destroyArgs = {
  id: Scalars['Int']['input'];
};


export type Mutationauthenticators_duo_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<DuoDeviceRequest_Input>;
};


export type Mutationauthenticators_duo_partial_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<PatchedDuoDeviceRequest_Input>;
};


export type Mutationauthenticators_duo_destroyArgs = {
  id: Scalars['Int']['input'];
};


export type Mutationauthenticators_sms_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<SMSDeviceRequest_Input>;
};


export type Mutationauthenticators_sms_partial_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<PatchedSMSDeviceRequest_Input>;
};


export type Mutationauthenticators_sms_destroyArgs = {
  id: Scalars['Int']['input'];
};


export type Mutationauthenticators_static_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<StaticDeviceRequest_Input>;
};


export type Mutationauthenticators_static_partial_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<PatchedStaticDeviceRequest_Input>;
};


export type Mutationauthenticators_static_destroyArgs = {
  id: Scalars['Int']['input'];
};


export type Mutationauthenticators_totp_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<TOTPDeviceRequest_Input>;
};


export type Mutationauthenticators_totp_partial_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<PatchedTOTPDeviceRequest_Input>;
};


export type Mutationauthenticators_totp_destroyArgs = {
  id: Scalars['Int']['input'];
};


export type Mutationauthenticators_webauthn_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<WebAuthnDeviceRequest_Input>;
};


export type Mutationauthenticators_webauthn_partial_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<PatchedWebAuthnDeviceRequest_Input>;
};


export type Mutationauthenticators_webauthn_destroyArgs = {
  id: Scalars['Int']['input'];
};


export type Mutationcore_applications_createArgs = {
  input?: InputMaybe<ApplicationRequest_Input>;
};


export type Mutationcore_applications_updateArgs = {
  slug: Scalars['String']['input'];
  input?: InputMaybe<ApplicationRequest_Input>;
};


export type Mutationcore_applications_partial_updateArgs = {
  slug: Scalars['String']['input'];
  input?: InputMaybe<PatchedApplicationRequest_Input>;
};


export type Mutationcore_applications_destroyArgs = {
  slug: Scalars['String']['input'];
};


export type Mutationcore_applications_set_icon_createArgs = {
  slug: Scalars['String']['input'];
  input?: InputMaybe<FileUploadRequest_Input>;
};


export type Mutationcore_applications_set_icon_url_createArgs = {
  slug: Scalars['String']['input'];
  input?: InputMaybe<FilePathRequest_Input>;
};


export type Mutationcore_authenticated_sessions_destroyArgs = {
  uuid: Scalars['UUID']['input'];
};


export type Mutationcore_brands_createArgs = {
  input?: InputMaybe<BrandRequest_Input>;
};


export type Mutationcore_brands_updateArgs = {
  brand_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<BrandRequest_Input>;
};


export type Mutationcore_brands_partial_updateArgs = {
  brand_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedBrandRequest_Input>;
};


export type Mutationcore_brands_destroyArgs = {
  brand_uuid: Scalars['UUID']['input'];
};


export type Mutationcore_groups_createArgs = {
  input?: InputMaybe<GroupRequest_Input>;
};


export type Mutationcore_groups_updateArgs = {
  group_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<GroupRequest_Input>;
};


export type Mutationcore_groups_partial_updateArgs = {
  group_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedGroupRequest_Input>;
};


export type Mutationcore_groups_destroyArgs = {
  group_uuid: Scalars['UUID']['input'];
};


export type Mutationcore_groups_add_user_createArgs = {
  group_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<UserAccountRequest_Input>;
};


export type Mutationcore_groups_remove_user_createArgs = {
  group_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<UserAccountRequest_Input>;
};


export type Mutationcore_tokens_createArgs = {
  input?: InputMaybe<TokenRequest_Input>;
};


export type Mutationcore_tokens_updateArgs = {
  identifier: Scalars['String']['input'];
  input?: InputMaybe<TokenRequest_Input>;
};


export type Mutationcore_tokens_partial_updateArgs = {
  identifier: Scalars['String']['input'];
  input?: InputMaybe<PatchedTokenRequest_Input>;
};


export type Mutationcore_tokens_destroyArgs = {
  identifier: Scalars['String']['input'];
};


export type Mutationcore_tokens_set_key_createArgs = {
  identifier: Scalars['String']['input'];
  input?: InputMaybe<TokenSetKeyRequest_Input>;
};


export type Mutationcore_transactional_applications_updateArgs = {
  input?: InputMaybe<TransactionApplicationRequest_Input>;
};


export type Mutationcore_user_consent_destroyArgs = {
  id: Scalars['Int']['input'];
};


export type Mutationcore_users_createArgs = {
  input?: InputMaybe<UserRequest_Input>;
};


export type Mutationcore_users_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<UserRequest_Input>;
};


export type Mutationcore_users_partial_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<PatchedUserRequest_Input>;
};


export type Mutationcore_users_destroyArgs = {
  id: Scalars['Int']['input'];
};


export type Mutationcore_users_impersonate_createArgs = {
  id: Scalars['Int']['input'];
};


export type Mutationcore_users_recovery_createArgs = {
  id: Scalars['Int']['input'];
};


export type Mutationcore_users_recovery_email_createArgs = {
  id: Scalars['Int']['input'];
  email_stage: Scalars['String']['input'];
};


export type Mutationcore_users_set_password_createArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<UserPasswordSetRequest_Input>;
};


export type Mutationcore_users_service_account_createArgs = {
  input?: InputMaybe<UserServiceAccountRequest_Input>;
};


export type Mutationcrypto_certificatekeypairs_createArgs = {
  input?: InputMaybe<CertificateKeyPairRequest_Input>;
};


export type Mutationcrypto_certificatekeypairs_updateArgs = {
  kp_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<CertificateKeyPairRequest_Input>;
};


export type Mutationcrypto_certificatekeypairs_partial_updateArgs = {
  kp_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedCertificateKeyPairRequest_Input>;
};


export type Mutationcrypto_certificatekeypairs_destroyArgs = {
  kp_uuid: Scalars['UUID']['input'];
};


export type Mutationcrypto_certificatekeypairs_generate_createArgs = {
  input?: InputMaybe<CertificateGenerationRequest_Input>;
};


export type Mutationenterprise_license_createArgs = {
  input?: InputMaybe<LicenseRequest_Input>;
};


export type Mutationenterprise_license_updateArgs = {
  license_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<LicenseRequest_Input>;
};


export type Mutationenterprise_license_partial_updateArgs = {
  license_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedLicenseRequest_Input>;
};


export type Mutationenterprise_license_destroyArgs = {
  license_uuid: Scalars['UUID']['input'];
};


export type Mutationevents_events_createArgs = {
  input?: InputMaybe<EventRequest_Input>;
};


export type Mutationevents_events_updateArgs = {
  event_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<EventRequest_Input>;
};


export type Mutationevents_events_partial_updateArgs = {
  event_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedEventRequest_Input>;
};


export type Mutationevents_events_destroyArgs = {
  event_uuid: Scalars['UUID']['input'];
};


export type Mutationevents_notifications_updateArgs = {
  uuid: Scalars['UUID']['input'];
  input?: InputMaybe<NotificationRequest_Input>;
};


export type Mutationevents_notifications_partial_updateArgs = {
  uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedNotificationRequest_Input>;
};


export type Mutationevents_notifications_destroyArgs = {
  uuid: Scalars['UUID']['input'];
};


export type Mutationevents_rules_createArgs = {
  input?: InputMaybe<NotificationRuleRequest_Input>;
};


export type Mutationevents_rules_updateArgs = {
  pbm_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<NotificationRuleRequest_Input>;
};


export type Mutationevents_rules_partial_updateArgs = {
  pbm_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedNotificationRuleRequest_Input>;
};


export type Mutationevents_rules_destroyArgs = {
  pbm_uuid: Scalars['UUID']['input'];
};


export type Mutationevents_system_tasks_run_createArgs = {
  uuid: Scalars['UUID']['input'];
};


export type Mutationevents_transports_createArgs = {
  input?: InputMaybe<NotificationTransportRequest_Input>;
};


export type Mutationevents_transports_updateArgs = {
  uuid: Scalars['UUID']['input'];
  input?: InputMaybe<NotificationTransportRequest_Input>;
};


export type Mutationevents_transports_partial_updateArgs = {
  uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedNotificationTransportRequest_Input>;
};


export type Mutationevents_transports_destroyArgs = {
  uuid: Scalars['UUID']['input'];
};


export type Mutationevents_transports_test_createArgs = {
  uuid: Scalars['UUID']['input'];
};


export type Mutationflows_bindings_createArgs = {
  input?: InputMaybe<FlowStageBindingRequest_Input>;
};


export type Mutationflows_bindings_updateArgs = {
  fsb_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<FlowStageBindingRequest_Input>;
};


export type Mutationflows_bindings_partial_updateArgs = {
  fsb_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedFlowStageBindingRequest_Input>;
};


export type Mutationflows_bindings_destroyArgs = {
  fsb_uuid: Scalars['UUID']['input'];
};


export type Mutationflows_executor_solveArgs = {
  flow_slug: Scalars['String']['input'];
  query: Scalars['String']['input'];
  input?: InputMaybe<FlowChallengeResponseRequest_Input>;
};


export type Mutationflows_instances_createArgs = {
  input?: InputMaybe<FlowRequest_Input>;
};


export type Mutationflows_instances_updateArgs = {
  slug: Scalars['String']['input'];
  input?: InputMaybe<FlowRequest_Input>;
};


export type Mutationflows_instances_partial_updateArgs = {
  slug: Scalars['String']['input'];
  input?: InputMaybe<PatchedFlowRequest_Input>;
};


export type Mutationflows_instances_destroyArgs = {
  slug: Scalars['String']['input'];
};


export type Mutationflows_instances_set_background_createArgs = {
  slug: Scalars['String']['input'];
  input?: InputMaybe<FileUploadRequest_Input>;
};


export type Mutationflows_instances_set_background_url_createArgs = {
  slug: Scalars['String']['input'];
  input?: InputMaybe<FilePathRequest_Input>;
};


export type Mutationflows_instances_import_createArgs = {
  input?: InputMaybe<FileUploadRequest_Input>;
};


export type Mutationmanaged_blueprints_createArgs = {
  input?: InputMaybe<BlueprintInstanceRequest_Input>;
};


export type Mutationmanaged_blueprints_updateArgs = {
  instance_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<BlueprintInstanceRequest_Input>;
};


export type Mutationmanaged_blueprints_partial_updateArgs = {
  instance_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedBlueprintInstanceRequest_Input>;
};


export type Mutationmanaged_blueprints_destroyArgs = {
  instance_uuid: Scalars['UUID']['input'];
};


export type Mutationmanaged_blueprints_apply_createArgs = {
  instance_uuid: Scalars['UUID']['input'];
};


export type Mutationoauth2_access_tokens_destroyArgs = {
  id: Scalars['Int']['input'];
};


export type Mutationoauth2_authorization_codes_destroyArgs = {
  id: Scalars['Int']['input'];
};


export type Mutationoauth2_refresh_tokens_destroyArgs = {
  id: Scalars['Int']['input'];
};


export type Mutationoutposts_instances_createArgs = {
  input?: InputMaybe<OutpostRequest_Input>;
};


export type Mutationoutposts_instances_updateArgs = {
  uuid: Scalars['UUID']['input'];
  input?: InputMaybe<OutpostRequest_Input>;
};


export type Mutationoutposts_instances_partial_updateArgs = {
  uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedOutpostRequest_Input>;
};


export type Mutationoutposts_instances_destroyArgs = {
  uuid: Scalars['UUID']['input'];
};


export type Mutationoutposts_service_connections_all_destroyArgs = {
  uuid: Scalars['UUID']['input'];
};


export type Mutationoutposts_service_connections_docker_createArgs = {
  input?: InputMaybe<DockerServiceConnectionRequest_Input>;
};


export type Mutationoutposts_service_connections_docker_updateArgs = {
  uuid: Scalars['UUID']['input'];
  input?: InputMaybe<DockerServiceConnectionRequest_Input>;
};


export type Mutationoutposts_service_connections_docker_partial_updateArgs = {
  uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedDockerServiceConnectionRequest_Input>;
};


export type Mutationoutposts_service_connections_docker_destroyArgs = {
  uuid: Scalars['UUID']['input'];
};


export type Mutationoutposts_service_connections_kubernetes_createArgs = {
  input?: InputMaybe<KubernetesServiceConnectionRequest_Input>;
};


export type Mutationoutposts_service_connections_kubernetes_updateArgs = {
  uuid: Scalars['UUID']['input'];
  input?: InputMaybe<KubernetesServiceConnectionRequest_Input>;
};


export type Mutationoutposts_service_connections_kubernetes_partial_updateArgs = {
  uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedKubernetesServiceConnectionRequest_Input>;
};


export type Mutationoutposts_service_connections_kubernetes_destroyArgs = {
  uuid: Scalars['UUID']['input'];
};


export type Mutationpolicies_all_destroyArgs = {
  policy_uuid: Scalars['UUID']['input'];
};


export type Mutationpolicies_all_test_createArgs = {
  policy_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PolicyTestRequest_Input>;
};


export type Mutationpolicies_bindings_createArgs = {
  input?: InputMaybe<PolicyBindingRequest_Input>;
};


export type Mutationpolicies_bindings_updateArgs = {
  policy_binding_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PolicyBindingRequest_Input>;
};


export type Mutationpolicies_bindings_partial_updateArgs = {
  policy_binding_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedPolicyBindingRequest_Input>;
};


export type Mutationpolicies_bindings_destroyArgs = {
  policy_binding_uuid: Scalars['UUID']['input'];
};


export type Mutationpolicies_dummy_createArgs = {
  input?: InputMaybe<DummyPolicyRequest_Input>;
};


export type Mutationpolicies_dummy_updateArgs = {
  policy_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<DummyPolicyRequest_Input>;
};


export type Mutationpolicies_dummy_partial_updateArgs = {
  policy_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedDummyPolicyRequest_Input>;
};


export type Mutationpolicies_dummy_destroyArgs = {
  policy_uuid: Scalars['UUID']['input'];
};


export type Mutationpolicies_event_matcher_createArgs = {
  input?: InputMaybe<EventMatcherPolicyRequest_Input>;
};


export type Mutationpolicies_event_matcher_updateArgs = {
  policy_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<EventMatcherPolicyRequest_Input>;
};


export type Mutationpolicies_event_matcher_partial_updateArgs = {
  policy_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedEventMatcherPolicyRequest_Input>;
};


export type Mutationpolicies_event_matcher_destroyArgs = {
  policy_uuid: Scalars['UUID']['input'];
};


export type Mutationpolicies_expression_createArgs = {
  input?: InputMaybe<ExpressionPolicyRequest_Input>;
};


export type Mutationpolicies_expression_updateArgs = {
  policy_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<ExpressionPolicyRequest_Input>;
};


export type Mutationpolicies_expression_partial_updateArgs = {
  policy_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedExpressionPolicyRequest_Input>;
};


export type Mutationpolicies_expression_destroyArgs = {
  policy_uuid: Scalars['UUID']['input'];
};


export type Mutationpolicies_password_createArgs = {
  input?: InputMaybe<PasswordPolicyRequest_Input>;
};


export type Mutationpolicies_password_updateArgs = {
  policy_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PasswordPolicyRequest_Input>;
};


export type Mutationpolicies_password_partial_updateArgs = {
  policy_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedPasswordPolicyRequest_Input>;
};


export type Mutationpolicies_password_destroyArgs = {
  policy_uuid: Scalars['UUID']['input'];
};


export type Mutationpolicies_password_expiry_createArgs = {
  input?: InputMaybe<PasswordExpiryPolicyRequest_Input>;
};


export type Mutationpolicies_password_expiry_updateArgs = {
  policy_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PasswordExpiryPolicyRequest_Input>;
};


export type Mutationpolicies_password_expiry_partial_updateArgs = {
  policy_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedPasswordExpiryPolicyRequest_Input>;
};


export type Mutationpolicies_password_expiry_destroyArgs = {
  policy_uuid: Scalars['UUID']['input'];
};


export type Mutationpolicies_reputation_createArgs = {
  input?: InputMaybe<ReputationPolicyRequest_Input>;
};


export type Mutationpolicies_reputation_updateArgs = {
  policy_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<ReputationPolicyRequest_Input>;
};


export type Mutationpolicies_reputation_partial_updateArgs = {
  policy_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedReputationPolicyRequest_Input>;
};


export type Mutationpolicies_reputation_destroyArgs = {
  policy_uuid: Scalars['UUID']['input'];
};


export type Mutationpolicies_reputation_scores_destroyArgs = {
  reputation_uuid: Scalars['UUID']['input'];
};


export type Mutationpropertymappings_all_destroyArgs = {
  pm_uuid: Scalars['UUID']['input'];
};


export type Mutationpropertymappings_all_test_createArgs = {
  pm_uuid: Scalars['UUID']['input'];
  format_result?: InputMaybe<Scalars['Boolean']['input']>;
  input?: InputMaybe<PolicyTestRequest_Input>;
};


export type Mutationpropertymappings_ldap_createArgs = {
  input?: InputMaybe<LDAPPropertyMappingRequest_Input>;
};


export type Mutationpropertymappings_ldap_updateArgs = {
  pm_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<LDAPPropertyMappingRequest_Input>;
};


export type Mutationpropertymappings_ldap_partial_updateArgs = {
  pm_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedLDAPPropertyMappingRequest_Input>;
};


export type Mutationpropertymappings_ldap_destroyArgs = {
  pm_uuid: Scalars['UUID']['input'];
};


export type Mutationpropertymappings_notification_createArgs = {
  input?: InputMaybe<NotificationWebhookMappingRequest_Input>;
};


export type Mutationpropertymappings_notification_updateArgs = {
  pm_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<NotificationWebhookMappingRequest_Input>;
};


export type Mutationpropertymappings_notification_partial_updateArgs = {
  pm_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedNotificationWebhookMappingRequest_Input>;
};


export type Mutationpropertymappings_notification_destroyArgs = {
  pm_uuid: Scalars['UUID']['input'];
};


export type Mutationpropertymappings_rac_createArgs = {
  input?: InputMaybe<RACPropertyMappingRequest_Input>;
};


export type Mutationpropertymappings_rac_updateArgs = {
  pm_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<RACPropertyMappingRequest_Input>;
};


export type Mutationpropertymappings_rac_partial_updateArgs = {
  pm_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedRACPropertyMappingRequest_Input>;
};


export type Mutationpropertymappings_rac_destroyArgs = {
  pm_uuid: Scalars['UUID']['input'];
};


export type Mutationpropertymappings_saml_createArgs = {
  input?: InputMaybe<SAMLPropertyMappingRequest_Input>;
};


export type Mutationpropertymappings_saml_updateArgs = {
  pm_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<SAMLPropertyMappingRequest_Input>;
};


export type Mutationpropertymappings_saml_partial_updateArgs = {
  pm_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedSAMLPropertyMappingRequest_Input>;
};


export type Mutationpropertymappings_saml_destroyArgs = {
  pm_uuid: Scalars['UUID']['input'];
};


export type Mutationpropertymappings_scim_createArgs = {
  input?: InputMaybe<SCIMMappingRequest_Input>;
};


export type Mutationpropertymappings_scim_updateArgs = {
  pm_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<SCIMMappingRequest_Input>;
};


export type Mutationpropertymappings_scim_partial_updateArgs = {
  pm_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedSCIMMappingRequest_Input>;
};


export type Mutationpropertymappings_scim_destroyArgs = {
  pm_uuid: Scalars['UUID']['input'];
};


export type Mutationpropertymappings_scope_createArgs = {
  input?: InputMaybe<ScopeMappingRequest_Input>;
};


export type Mutationpropertymappings_scope_updateArgs = {
  pm_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<ScopeMappingRequest_Input>;
};


export type Mutationpropertymappings_scope_partial_updateArgs = {
  pm_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedScopeMappingRequest_Input>;
};


export type Mutationpropertymappings_scope_destroyArgs = {
  pm_uuid: Scalars['UUID']['input'];
};


export type Mutationproviders_all_destroyArgs = {
  id: Scalars['Int']['input'];
};


export type Mutationproviders_ldap_createArgs = {
  input?: InputMaybe<LDAPProviderRequest_Input>;
};


export type Mutationproviders_ldap_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<LDAPProviderRequest_Input>;
};


export type Mutationproviders_ldap_partial_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<PatchedLDAPProviderRequest_Input>;
};


export type Mutationproviders_ldap_destroyArgs = {
  id: Scalars['Int']['input'];
};


export type Mutationproviders_oauth2_createArgs = {
  input?: InputMaybe<OAuth2ProviderRequest_Input>;
};


export type Mutationproviders_oauth2_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<OAuth2ProviderRequest_Input>;
};


export type Mutationproviders_oauth2_partial_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<PatchedOAuth2ProviderRequest_Input>;
};


export type Mutationproviders_oauth2_destroyArgs = {
  id: Scalars['Int']['input'];
};


export type Mutationproviders_proxy_createArgs = {
  input?: InputMaybe<ProxyProviderRequest_Input>;
};


export type Mutationproviders_proxy_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<ProxyProviderRequest_Input>;
};


export type Mutationproviders_proxy_partial_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<PatchedProxyProviderRequest_Input>;
};


export type Mutationproviders_proxy_destroyArgs = {
  id: Scalars['Int']['input'];
};


export type Mutationproviders_rac_createArgs = {
  input?: InputMaybe<RACProviderRequest_Input>;
};


export type Mutationproviders_rac_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<RACProviderRequest_Input>;
};


export type Mutationproviders_rac_partial_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<PatchedRACProviderRequest_Input>;
};


export type Mutationproviders_rac_destroyArgs = {
  id: Scalars['Int']['input'];
};


export type Mutationproviders_radius_createArgs = {
  input?: InputMaybe<RadiusProviderRequest_Input>;
};


export type Mutationproviders_radius_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<RadiusProviderRequest_Input>;
};


export type Mutationproviders_radius_partial_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<PatchedRadiusProviderRequest_Input>;
};


export type Mutationproviders_radius_destroyArgs = {
  id: Scalars['Int']['input'];
};


export type Mutationproviders_saml_createArgs = {
  input?: InputMaybe<SAMLProviderRequest_Input>;
};


export type Mutationproviders_saml_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<SAMLProviderRequest_Input>;
};


export type Mutationproviders_saml_partial_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<PatchedSAMLProviderRequest_Input>;
};


export type Mutationproviders_saml_destroyArgs = {
  id: Scalars['Int']['input'];
};


export type Mutationproviders_saml_import_metadata_createArgs = {
  input?: InputMaybe<SAMLProviderImportRequest_Input>;
};


export type Mutationproviders_scim_createArgs = {
  input?: InputMaybe<SCIMProviderRequest_Input>;
};


export type Mutationproviders_scim_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<SCIMProviderRequest_Input>;
};


export type Mutationproviders_scim_partial_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<PatchedSCIMProviderRequest_Input>;
};


export type Mutationproviders_scim_destroyArgs = {
  id: Scalars['Int']['input'];
};


export type Mutationrac_connection_tokens_updateArgs = {
  connection_token_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<ConnectionTokenRequest_Input>;
};


export type Mutationrac_connection_tokens_partial_updateArgs = {
  connection_token_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedConnectionTokenRequest_Input>;
};


export type Mutationrac_connection_tokens_destroyArgs = {
  connection_token_uuid: Scalars['UUID']['input'];
};


export type Mutationrac_endpoints_createArgs = {
  input?: InputMaybe<EndpointRequest_Input>;
};


export type Mutationrac_endpoints_updateArgs = {
  pbm_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<EndpointRequest_Input>;
};


export type Mutationrac_endpoints_partial_updateArgs = {
  pbm_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedEndpointRequest_Input>;
};


export type Mutationrac_endpoints_destroyArgs = {
  pbm_uuid: Scalars['UUID']['input'];
};


export type Mutationrbac_permissions_assigned_by_roles_assign_createArgs = {
  uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PermissionAssignRequest_Input>;
};


export type Mutationrbac_permissions_assigned_by_roles_unassign_partial_updateArgs = {
  uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedPermissionAssignRequest_Input>;
};


export type Mutationrbac_permissions_assigned_by_users_assign_createArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<PermissionAssignRequest_Input>;
};


export type Mutationrbac_permissions_assigned_by_users_unassign_partial_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<PatchedPermissionAssignRequest_Input>;
};


export type Mutationrbac_roles_createArgs = {
  input?: InputMaybe<RoleRequest_Input>;
};


export type Mutationrbac_roles_updateArgs = {
  uuid: Scalars['UUID']['input'];
  input?: InputMaybe<RoleRequest_Input>;
};


export type Mutationrbac_roles_partial_updateArgs = {
  uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedRoleRequest_Input>;
};


export type Mutationrbac_roles_destroyArgs = {
  uuid: Scalars['UUID']['input'];
};


export type Mutationsources_all_destroyArgs = {
  slug: Scalars['String']['input'];
};


export type Mutationsources_all_set_icon_createArgs = {
  slug: Scalars['String']['input'];
  input?: InputMaybe<FileUploadRequest_Input>;
};


export type Mutationsources_all_set_icon_url_createArgs = {
  slug: Scalars['String']['input'];
  input?: InputMaybe<FilePathRequest_Input>;
};


export type Mutationsources_ldap_createArgs = {
  input?: InputMaybe<LDAPSourceRequest_Input>;
};


export type Mutationsources_ldap_updateArgs = {
  slug: Scalars['String']['input'];
  input?: InputMaybe<LDAPSourceRequest_Input>;
};


export type Mutationsources_ldap_partial_updateArgs = {
  slug: Scalars['String']['input'];
  input?: InputMaybe<PatchedLDAPSourceRequest_Input>;
};


export type Mutationsources_ldap_destroyArgs = {
  slug: Scalars['String']['input'];
};


export type Mutationsources_oauth_createArgs = {
  input?: InputMaybe<OAuthSourceRequest_Input>;
};


export type Mutationsources_oauth_updateArgs = {
  slug: Scalars['String']['input'];
  input?: InputMaybe<OAuthSourceRequest_Input>;
};


export type Mutationsources_oauth_partial_updateArgs = {
  slug: Scalars['String']['input'];
  input?: InputMaybe<PatchedOAuthSourceRequest_Input>;
};


export type Mutationsources_oauth_destroyArgs = {
  slug: Scalars['String']['input'];
};


export type Mutationsources_plex_createArgs = {
  input?: InputMaybe<PlexSourceRequest_Input>;
};


export type Mutationsources_plex_updateArgs = {
  slug: Scalars['String']['input'];
  input?: InputMaybe<PlexSourceRequest_Input>;
};


export type Mutationsources_plex_partial_updateArgs = {
  slug: Scalars['String']['input'];
  input?: InputMaybe<PatchedPlexSourceRequest_Input>;
};


export type Mutationsources_plex_destroyArgs = {
  slug: Scalars['String']['input'];
};


export type Mutationsources_plex_redeem_token_createArgs = {
  slug?: InputMaybe<Scalars['String']['input']>;
  input?: InputMaybe<PlexTokenRedeemRequest_Input>;
};


export type Mutationsources_plex_redeem_token_authenticated_createArgs = {
  slug?: InputMaybe<Scalars['String']['input']>;
  input?: InputMaybe<PlexTokenRedeemRequest_Input>;
};


export type Mutationsources_saml_createArgs = {
  input?: InputMaybe<SAMLSourceRequest_Input>;
};


export type Mutationsources_saml_updateArgs = {
  slug: Scalars['String']['input'];
  input?: InputMaybe<SAMLSourceRequest_Input>;
};


export type Mutationsources_saml_partial_updateArgs = {
  slug: Scalars['String']['input'];
  input?: InputMaybe<PatchedSAMLSourceRequest_Input>;
};


export type Mutationsources_saml_destroyArgs = {
  slug: Scalars['String']['input'];
};


export type Mutationsources_scim_createArgs = {
  input?: InputMaybe<SCIMSourceRequest_Input>;
};


export type Mutationsources_scim_updateArgs = {
  slug: Scalars['String']['input'];
  input?: InputMaybe<SCIMSourceRequest_Input>;
};


export type Mutationsources_scim_partial_updateArgs = {
  slug: Scalars['String']['input'];
  input?: InputMaybe<PatchedSCIMSourceRequest_Input>;
};


export type Mutationsources_scim_destroyArgs = {
  slug: Scalars['String']['input'];
};


export type Mutationsources_scim_groups_createArgs = {
  input?: InputMaybe<SCIMSourceGroupRequest_Input>;
};


export type Mutationsources_scim_groups_updateArgs = {
  id: Scalars['String']['input'];
  input?: InputMaybe<SCIMSourceGroupRequest_Input>;
};


export type Mutationsources_scim_groups_partial_updateArgs = {
  id: Scalars['String']['input'];
  input?: InputMaybe<PatchedSCIMSourceGroupRequest_Input>;
};


export type Mutationsources_scim_groups_destroyArgs = {
  id: Scalars['String']['input'];
};


export type Mutationsources_scim_users_createArgs = {
  input?: InputMaybe<SCIMSourceUserRequest_Input>;
};


export type Mutationsources_scim_users_updateArgs = {
  id: Scalars['String']['input'];
  input?: InputMaybe<SCIMSourceUserRequest_Input>;
};


export type Mutationsources_scim_users_partial_updateArgs = {
  id: Scalars['String']['input'];
  input?: InputMaybe<PatchedSCIMSourceUserRequest_Input>;
};


export type Mutationsources_scim_users_destroyArgs = {
  id: Scalars['String']['input'];
};


export type Mutationsources_user_connections_all_updateArgs = {
  id: Scalars['Int']['input'];
};


export type Mutationsources_user_connections_all_partial_updateArgs = {
  id: Scalars['Int']['input'];
};


export type Mutationsources_user_connections_all_destroyArgs = {
  id: Scalars['Int']['input'];
};


export type Mutationsources_user_connections_oauth_createArgs = {
  input?: InputMaybe<UserOAuthSourceConnectionRequest_Input>;
};


export type Mutationsources_user_connections_oauth_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<UserOAuthSourceConnectionRequest_Input>;
};


export type Mutationsources_user_connections_oauth_partial_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<PatchedUserOAuthSourceConnectionRequest_Input>;
};


export type Mutationsources_user_connections_oauth_destroyArgs = {
  id: Scalars['Int']['input'];
};


export type Mutationsources_user_connections_plex_createArgs = {
  input?: InputMaybe<PlexSourceConnectionRequest_Input>;
};


export type Mutationsources_user_connections_plex_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<PlexSourceConnectionRequest_Input>;
};


export type Mutationsources_user_connections_plex_partial_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<PatchedPlexSourceConnectionRequest_Input>;
};


export type Mutationsources_user_connections_plex_destroyArgs = {
  id: Scalars['Int']['input'];
};


export type Mutationsources_user_connections_saml_createArgs = {
  input?: InputMaybe<UserSAMLSourceConnectionRequest_Input>;
};


export type Mutationsources_user_connections_saml_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<UserSAMLSourceConnectionRequest_Input>;
};


export type Mutationsources_user_connections_saml_partial_updateArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<PatchedUserSAMLSourceConnectionRequest_Input>;
};


export type Mutationsources_user_connections_saml_destroyArgs = {
  id: Scalars['Int']['input'];
};


export type Mutationstages_all_destroyArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Mutationstages_authenticator_duo_createArgs = {
  input?: InputMaybe<AuthenticatorDuoStageRequest_Input>;
};


export type Mutationstages_authenticator_duo_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<AuthenticatorDuoStageRequest_Input>;
};


export type Mutationstages_authenticator_duo_partial_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedAuthenticatorDuoStageRequest_Input>;
};


export type Mutationstages_authenticator_duo_destroyArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Mutationstages_authenticator_duo_enrollment_status_createArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Mutationstages_authenticator_duo_import_device_manual_createArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<AuthenticatorDuoStageManualDeviceImportRequest_Input>;
};


export type Mutationstages_authenticator_duo_import_devices_automatic_createArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Mutationstages_authenticator_sms_createArgs = {
  input?: InputMaybe<AuthenticatorSMSStageRequest_Input>;
};


export type Mutationstages_authenticator_sms_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<AuthenticatorSMSStageRequest_Input>;
};


export type Mutationstages_authenticator_sms_partial_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedAuthenticatorSMSStageRequest_Input>;
};


export type Mutationstages_authenticator_sms_destroyArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Mutationstages_authenticator_static_createArgs = {
  input?: InputMaybe<AuthenticatorStaticStageRequest_Input>;
};


export type Mutationstages_authenticator_static_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<AuthenticatorStaticStageRequest_Input>;
};


export type Mutationstages_authenticator_static_partial_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedAuthenticatorStaticStageRequest_Input>;
};


export type Mutationstages_authenticator_static_destroyArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Mutationstages_authenticator_totp_createArgs = {
  input?: InputMaybe<AuthenticatorTOTPStageRequest_Input>;
};


export type Mutationstages_authenticator_totp_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<AuthenticatorTOTPStageRequest_Input>;
};


export type Mutationstages_authenticator_totp_partial_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedAuthenticatorTOTPStageRequest_Input>;
};


export type Mutationstages_authenticator_totp_destroyArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Mutationstages_authenticator_validate_createArgs = {
  input?: InputMaybe<AuthenticatorValidateStageRequest_Input>;
};


export type Mutationstages_authenticator_validate_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<AuthenticatorValidateStageRequest_Input>;
};


export type Mutationstages_authenticator_validate_partial_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedAuthenticatorValidateStageRequest_Input>;
};


export type Mutationstages_authenticator_validate_destroyArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Mutationstages_authenticator_webauthn_createArgs = {
  input?: InputMaybe<AuthenticatorWebAuthnStageRequest_Input>;
};


export type Mutationstages_authenticator_webauthn_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<AuthenticatorWebAuthnStageRequest_Input>;
};


export type Mutationstages_authenticator_webauthn_partial_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedAuthenticatorWebAuthnStageRequest_Input>;
};


export type Mutationstages_authenticator_webauthn_destroyArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Mutationstages_captcha_createArgs = {
  input?: InputMaybe<CaptchaStageRequest_Input>;
};


export type Mutationstages_captcha_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<CaptchaStageRequest_Input>;
};


export type Mutationstages_captcha_partial_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedCaptchaStageRequest_Input>;
};


export type Mutationstages_captcha_destroyArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Mutationstages_consent_createArgs = {
  input?: InputMaybe<ConsentStageRequest_Input>;
};


export type Mutationstages_consent_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<ConsentStageRequest_Input>;
};


export type Mutationstages_consent_partial_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedConsentStageRequest_Input>;
};


export type Mutationstages_consent_destroyArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Mutationstages_deny_createArgs = {
  input?: InputMaybe<DenyStageRequest_Input>;
};


export type Mutationstages_deny_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<DenyStageRequest_Input>;
};


export type Mutationstages_deny_partial_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedDenyStageRequest_Input>;
};


export type Mutationstages_deny_destroyArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Mutationstages_dummy_createArgs = {
  input?: InputMaybe<DummyStageRequest_Input>;
};


export type Mutationstages_dummy_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<DummyStageRequest_Input>;
};


export type Mutationstages_dummy_partial_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedDummyStageRequest_Input>;
};


export type Mutationstages_dummy_destroyArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Mutationstages_email_createArgs = {
  input?: InputMaybe<EmailStageRequest_Input>;
};


export type Mutationstages_email_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<EmailStageRequest_Input>;
};


export type Mutationstages_email_partial_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedEmailStageRequest_Input>;
};


export type Mutationstages_email_destroyArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Mutationstages_identification_createArgs = {
  input?: InputMaybe<IdentificationStageRequest_Input>;
};


export type Mutationstages_identification_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<IdentificationStageRequest_Input>;
};


export type Mutationstages_identification_partial_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedIdentificationStageRequest_Input>;
};


export type Mutationstages_identification_destroyArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Mutationstages_invitation_invitations_createArgs = {
  input?: InputMaybe<InvitationRequest_Input>;
};


export type Mutationstages_invitation_invitations_updateArgs = {
  invite_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<InvitationRequest_Input>;
};


export type Mutationstages_invitation_invitations_partial_updateArgs = {
  invite_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedInvitationRequest_Input>;
};


export type Mutationstages_invitation_invitations_destroyArgs = {
  invite_uuid: Scalars['UUID']['input'];
};


export type Mutationstages_invitation_stages_createArgs = {
  input?: InputMaybe<InvitationStageRequest_Input>;
};


export type Mutationstages_invitation_stages_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<InvitationStageRequest_Input>;
};


export type Mutationstages_invitation_stages_partial_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedInvitationStageRequest_Input>;
};


export type Mutationstages_invitation_stages_destroyArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Mutationstages_password_createArgs = {
  input?: InputMaybe<PasswordStageRequest_Input>;
};


export type Mutationstages_password_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PasswordStageRequest_Input>;
};


export type Mutationstages_password_partial_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedPasswordStageRequest_Input>;
};


export type Mutationstages_password_destroyArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Mutationstages_prompt_prompts_createArgs = {
  input?: InputMaybe<PromptRequest_Input>;
};


export type Mutationstages_prompt_prompts_updateArgs = {
  prompt_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PromptRequest_Input>;
};


export type Mutationstages_prompt_prompts_partial_updateArgs = {
  prompt_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedPromptRequest_Input>;
};


export type Mutationstages_prompt_prompts_destroyArgs = {
  prompt_uuid: Scalars['UUID']['input'];
};


export type Mutationstages_prompt_prompts_preview_createArgs = {
  input?: InputMaybe<PromptRequest_Input>;
};


export type Mutationstages_prompt_stages_createArgs = {
  input?: InputMaybe<PromptStageRequest_Input>;
};


export type Mutationstages_prompt_stages_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PromptStageRequest_Input>;
};


export type Mutationstages_prompt_stages_partial_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedPromptStageRequest_Input>;
};


export type Mutationstages_prompt_stages_destroyArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Mutationstages_source_createArgs = {
  input?: InputMaybe<SourceStageRequest_Input>;
};


export type Mutationstages_source_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<SourceStageRequest_Input>;
};


export type Mutationstages_source_partial_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedSourceStageRequest_Input>;
};


export type Mutationstages_source_destroyArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Mutationstages_user_delete_createArgs = {
  input?: InputMaybe<UserDeleteStageRequest_Input>;
};


export type Mutationstages_user_delete_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<UserDeleteStageRequest_Input>;
};


export type Mutationstages_user_delete_partial_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedUserDeleteStageRequest_Input>;
};


export type Mutationstages_user_delete_destroyArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Mutationstages_user_login_createArgs = {
  input?: InputMaybe<UserLoginStageRequest_Input>;
};


export type Mutationstages_user_login_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<UserLoginStageRequest_Input>;
};


export type Mutationstages_user_login_partial_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedUserLoginStageRequest_Input>;
};


export type Mutationstages_user_login_destroyArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Mutationstages_user_logout_createArgs = {
  input?: InputMaybe<UserLogoutStageRequest_Input>;
};


export type Mutationstages_user_logout_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<UserLogoutStageRequest_Input>;
};


export type Mutationstages_user_logout_partial_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedUserLogoutStageRequest_Input>;
};


export type Mutationstages_user_logout_destroyArgs = {
  stage_uuid: Scalars['UUID']['input'];
};


export type Mutationstages_user_write_createArgs = {
  input?: InputMaybe<UserWriteStageRequest_Input>;
};


export type Mutationstages_user_write_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<UserWriteStageRequest_Input>;
};


export type Mutationstages_user_write_partial_updateArgs = {
  stage_uuid: Scalars['UUID']['input'];
  input?: InputMaybe<PatchedUserWriteStageRequest_Input>;
};


export type Mutationstages_user_write_destroyArgs = {
  stage_uuid: Scalars['UUID']['input'];
};

export type admin_settings_update_response = Settings | ValidationError | GenericError;

/** Settings Serializer */
export type SettingsRequest_Input = {
  /** Configure how authentik should show avatars for users. */
  avatars?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Enable the ability for users to change their name. */
  default_user_change_name?: InputMaybe<Scalars['Boolean']['input']>;
  /** Enable the ability for users to change their email address. */
  default_user_change_email?: InputMaybe<Scalars['Boolean']['input']>;
  /** Enable the ability for users to change their username. */
  default_user_change_username?: InputMaybe<Scalars['Boolean']['input']>;
  /** Events will be deleted after this duration.(Format: weeks=3;days=2;hours=3,seconds=2). */
  event_retention?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** The option configures the footer links on the flow executor pages. */
  footer_links?: InputMaybe<Scalars['JSON']['input']>;
  /** When enabled, all the events caused by a user will be deleted upon the user's deletion. */
  gdpr_compliance?: InputMaybe<Scalars['Boolean']['input']>;
  /** Globally enable/disable impersonation. */
  impersonation?: InputMaybe<Scalars['Boolean']['input']>;
  /** Default token duration */
  default_token_duration?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Default token length */
  default_token_length?: InputMaybe<Scalars['PositiveInt']['input']>;
};

export type admin_settings_partial_update_response = Settings | ValidationError | GenericError;

/** Settings Serializer */
export type PatchedSettingsRequest_Input = {
  /** Configure how authentik should show avatars for users. */
  avatars?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Enable the ability for users to change their name. */
  default_user_change_name?: InputMaybe<Scalars['Boolean']['input']>;
  /** Enable the ability for users to change their email address. */
  default_user_change_email?: InputMaybe<Scalars['Boolean']['input']>;
  /** Enable the ability for users to change their username. */
  default_user_change_username?: InputMaybe<Scalars['Boolean']['input']>;
  /** Events will be deleted after this duration.(Format: weeks=3;days=2;hours=3,seconds=2). */
  event_retention?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** The option configures the footer links on the flow executor pages. */
  footer_links?: InputMaybe<Scalars['JSON']['input']>;
  /** When enabled, all the events caused by a user will be deleted upon the user's deletion. */
  gdpr_compliance?: InputMaybe<Scalars['Boolean']['input']>;
  /** Globally enable/disable impersonation. */
  impersonation?: InputMaybe<Scalars['Boolean']['input']>;
  /** Default token duration */
  default_token_duration?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Default token length */
  default_token_length?: InputMaybe<Scalars['PositiveInt']['input']>;
};

export type admin_system_create_response = SystemInfo | ValidationError | GenericError;

export type authenticators_admin_duo_create_response = DuoDevice | ValidationError | GenericError;

/** Serializer for Duo authenticator devices */
export type DuoDeviceRequest_Input = {
  /** The human-readable name of this device. */
  name: Scalars['mutationInput_authenticators_admin_duo_create_input_name']['input'];
};

export type authenticators_admin_duo_update_response = DuoDevice | ValidationError | GenericError;

export type authenticators_admin_duo_partial_update_response = DuoDevice | ValidationError | GenericError;

/** Serializer for Duo authenticator devices */
export type PatchedDuoDeviceRequest_Input = {
  /** The human-readable name of this device. */
  name?: InputMaybe<Scalars['mutationInput_authenticators_admin_duo_partial_update_input_name']['input']>;
};

export type authenticators_admin_duo_destroy_response = Void_container | ValidationError | GenericError;

export type authenticators_admin_sms_create_response = SMSDevice | ValidationError | GenericError;

/** Serializer for sms authenticator devices */
export type SMSDeviceRequest_Input = {
  /** The human-readable name of this device. */
  name: Scalars['mutationInput_authenticators_admin_sms_create_input_name']['input'];
};

export type authenticators_admin_sms_update_response = SMSDevice | ValidationError | GenericError;

export type authenticators_admin_sms_partial_update_response = SMSDevice | ValidationError | GenericError;

/** Serializer for sms authenticator devices */
export type PatchedSMSDeviceRequest_Input = {
  /** The human-readable name of this device. */
  name?: InputMaybe<Scalars['mutationInput_authenticators_admin_sms_partial_update_input_name']['input']>;
};

export type authenticators_admin_sms_destroy_response = Void_container | ValidationError | GenericError;

export type authenticators_admin_static_create_response = StaticDevice | ValidationError | GenericError;

/** Serializer for static authenticator devices */
export type StaticDeviceRequest_Input = {
  /** The human-readable name of this device. */
  name: Scalars['mutationInput_authenticators_admin_static_create_input_name']['input'];
};

export type authenticators_admin_static_update_response = StaticDevice | ValidationError | GenericError;

export type authenticators_admin_static_partial_update_response = StaticDevice | ValidationError | GenericError;

/** Serializer for static authenticator devices */
export type PatchedStaticDeviceRequest_Input = {
  /** The human-readable name of this device. */
  name?: InputMaybe<Scalars['mutationInput_authenticators_admin_static_partial_update_input_name']['input']>;
};

export type authenticators_admin_static_destroy_response = Void_container | ValidationError | GenericError;

export type authenticators_admin_totp_create_response = TOTPDevice | ValidationError | GenericError;

/** Serializer for totp authenticator devices */
export type TOTPDeviceRequest_Input = {
  /** The human-readable name of this device. */
  name: Scalars['mutationInput_authenticators_admin_totp_create_input_name']['input'];
};

export type authenticators_admin_totp_update_response = TOTPDevice | ValidationError | GenericError;

export type authenticators_admin_totp_partial_update_response = TOTPDevice | ValidationError | GenericError;

/** Serializer for totp authenticator devices */
export type PatchedTOTPDeviceRequest_Input = {
  /** The human-readable name of this device. */
  name?: InputMaybe<Scalars['mutationInput_authenticators_admin_totp_partial_update_input_name']['input']>;
};

export type authenticators_admin_totp_destroy_response = Void_container | ValidationError | GenericError;

export type authenticators_admin_webauthn_create_response = WebAuthnDevice | ValidationError | GenericError;

/** Serializer for WebAuthn authenticator devices */
export type WebAuthnDeviceRequest_Input = {
  name: Scalars['mutationInput_authenticators_admin_webauthn_create_input_name']['input'];
};

export type authenticators_admin_webauthn_update_response = WebAuthnDevice | ValidationError | GenericError;

export type authenticators_admin_webauthn_partial_update_response = WebAuthnDevice | ValidationError | GenericError;

/** Serializer for WebAuthn authenticator devices */
export type PatchedWebAuthnDeviceRequest_Input = {
  name?: InputMaybe<Scalars['mutationInput_authenticators_admin_webauthn_partial_update_input_name']['input']>;
};

export type authenticators_admin_webauthn_destroy_response = Void_container | ValidationError | GenericError;

export type authenticators_duo_update_response = DuoDevice | ValidationError | GenericError;

export type authenticators_duo_partial_update_response = DuoDevice | ValidationError | GenericError;

export type authenticators_duo_destroy_response = Void_container | ValidationError | GenericError;

export type authenticators_sms_update_response = SMSDevice | ValidationError | GenericError;

export type authenticators_sms_partial_update_response = SMSDevice | ValidationError | GenericError;

export type authenticators_sms_destroy_response = Void_container | ValidationError | GenericError;

export type authenticators_static_update_response = StaticDevice | ValidationError | GenericError;

export type authenticators_static_partial_update_response = StaticDevice | ValidationError | GenericError;

export type authenticators_static_destroy_response = Void_container | ValidationError | GenericError;

export type authenticators_totp_update_response = TOTPDevice | ValidationError | GenericError;

export type authenticators_totp_partial_update_response = TOTPDevice | ValidationError | GenericError;

export type authenticators_totp_destroy_response = Void_container | ValidationError | GenericError;

export type authenticators_webauthn_update_response = WebAuthnDevice | ValidationError | GenericError;

export type authenticators_webauthn_partial_update_response = WebAuthnDevice | ValidationError | GenericError;

export type authenticators_webauthn_destroy_response = Void_container | ValidationError | GenericError;

export type core_applications_create_response = Application | ValidationError | GenericError;

/** Application Serializer */
export type ApplicationRequest_Input = {
  /** Application's display Name. */
  name: Scalars['NonEmptyString']['input'];
  slug: Scalars['mutationInput_core_applications_create_input_slug']['input'];
  provider?: InputMaybe<Scalars['Int']['input']>;
  backchannel_providers?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** Open launch URL in a new browser tab or window. */
  open_in_new_tab?: InputMaybe<Scalars['Boolean']['input']>;
  meta_launch_url?: InputMaybe<Scalars['URL']['input']>;
  meta_description?: InputMaybe<Scalars['String']['input']>;
  meta_publisher?: InputMaybe<Scalars['String']['input']>;
  policy_engine_mode?: InputMaybe<PolicyEngineMode>;
  group?: InputMaybe<Scalars['String']['input']>;
};

export type core_applications_update_response = Application | ValidationError | GenericError;

export type core_applications_partial_update_response = Application | ValidationError | GenericError;

/** Application Serializer */
export type PatchedApplicationRequest_Input = {
  /** Application's display Name. */
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  slug?: InputMaybe<Scalars['mutationInput_core_applications_partial_update_input_slug']['input']>;
  provider?: InputMaybe<Scalars['Int']['input']>;
  backchannel_providers?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** Open launch URL in a new browser tab or window. */
  open_in_new_tab?: InputMaybe<Scalars['Boolean']['input']>;
  meta_launch_url?: InputMaybe<Scalars['URL']['input']>;
  meta_description?: InputMaybe<Scalars['String']['input']>;
  meta_publisher?: InputMaybe<Scalars['String']['input']>;
  policy_engine_mode?: InputMaybe<PolicyEngineMode>;
  group?: InputMaybe<Scalars['String']['input']>;
};

export type core_applications_destroy_response = Void_container | ValidationError | GenericError;

/** Serializer to upload file */
export type FileUploadRequest_Input = {
  file?: InputMaybe<Scalars['File']['input']>;
  clear?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Serializer to upload file */
export type FilePathRequest_Input = {
  url: Scalars['NonEmptyString']['input'];
};

export type core_authenticated_sessions_destroy_response = Void_container | ValidationError | GenericError;

export type core_brands_create_response = Brand | ValidationError | GenericError;

/** Brand Serializer */
export type BrandRequest_Input = {
  /** Domain that activates this brand. Can be a superset, i.e. `a.b` for `aa.b` and `ba.b` */
  domain: Scalars['NonEmptyString']['input'];
  default?: InputMaybe<Scalars['Boolean']['input']>;
  branding_title?: InputMaybe<Scalars['NonEmptyString']['input']>;
  branding_logo?: InputMaybe<Scalars['NonEmptyString']['input']>;
  branding_favicon?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flow_authentication?: InputMaybe<Scalars['UUID']['input']>;
  flow_invalidation?: InputMaybe<Scalars['UUID']['input']>;
  flow_recovery?: InputMaybe<Scalars['UUID']['input']>;
  flow_unenrollment?: InputMaybe<Scalars['UUID']['input']>;
  flow_user_settings?: InputMaybe<Scalars['UUID']['input']>;
  flow_device_code?: InputMaybe<Scalars['UUID']['input']>;
  /** Web Certificate used by the authentik Core webserver. */
  web_certificate?: InputMaybe<Scalars['UUID']['input']>;
  attributes?: InputMaybe<Scalars['JSON']['input']>;
};

export type core_brands_update_response = Brand | ValidationError | GenericError;

export type core_brands_partial_update_response = Brand | ValidationError | GenericError;

/** Brand Serializer */
export type PatchedBrandRequest_Input = {
  /** Domain that activates this brand. Can be a superset, i.e. `a.b` for `aa.b` and `ba.b` */
  domain?: InputMaybe<Scalars['NonEmptyString']['input']>;
  default?: InputMaybe<Scalars['Boolean']['input']>;
  branding_title?: InputMaybe<Scalars['NonEmptyString']['input']>;
  branding_logo?: InputMaybe<Scalars['NonEmptyString']['input']>;
  branding_favicon?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flow_authentication?: InputMaybe<Scalars['UUID']['input']>;
  flow_invalidation?: InputMaybe<Scalars['UUID']['input']>;
  flow_recovery?: InputMaybe<Scalars['UUID']['input']>;
  flow_unenrollment?: InputMaybe<Scalars['UUID']['input']>;
  flow_user_settings?: InputMaybe<Scalars['UUID']['input']>;
  flow_device_code?: InputMaybe<Scalars['UUID']['input']>;
  /** Web Certificate used by the authentik Core webserver. */
  web_certificate?: InputMaybe<Scalars['UUID']['input']>;
  attributes?: InputMaybe<Scalars['JSON']['input']>;
};

export type core_brands_destroy_response = Void_container | ValidationError | GenericError;

export type core_groups_create_response = Group | ValidationError | GenericError;

/** Group Serializer */
export type GroupRequest_Input = {
  name: Scalars['mutationInput_core_groups_create_input_name']['input'];
  /** Users added to this group will be superusers. */
  is_superuser?: InputMaybe<Scalars['Boolean']['input']>;
  parent?: InputMaybe<Scalars['UUID']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  attributes?: InputMaybe<Scalars['JSON']['input']>;
  roles?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
};

export type core_groups_update_response = Group | ValidationError | GenericError;

export type core_groups_partial_update_response = Group | ValidationError | GenericError;

/** Group Serializer */
export type PatchedGroupRequest_Input = {
  name?: InputMaybe<Scalars['mutationInput_core_groups_partial_update_input_name']['input']>;
  /** Users added to this group will be superusers. */
  is_superuser?: InputMaybe<Scalars['Boolean']['input']>;
  parent?: InputMaybe<Scalars['UUID']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  attributes?: InputMaybe<Scalars['JSON']['input']>;
  roles?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
};

export type core_groups_destroy_response = Void_container | ValidationError | GenericError;

export type core_groups_add_user_create_response = Void_container | ValidationError | GenericError;

/** Account adding/removing operations */
export type UserAccountRequest_Input = {
  pk: Scalars['Int']['input'];
};

export type core_groups_remove_user_create_response = Void_container | ValidationError | GenericError;

export type core_tokens_create_response = Token | ValidationError | GenericError;

/** Token Serializer */
export type TokenRequest_Input = {
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: InputMaybe<Scalars['NonEmptyString']['input']>;
  identifier: Scalars['mutationInput_core_tokens_create_input_identifier']['input'];
  intent?: InputMaybe<IntentEnum>;
  user?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expires?: InputMaybe<Scalars['DateTime']['input']>;
  expiring?: InputMaybe<Scalars['Boolean']['input']>;
};

export type core_tokens_update_response = Token | ValidationError | GenericError;

export type core_tokens_partial_update_response = Token | ValidationError | GenericError;

/** Token Serializer */
export type PatchedTokenRequest_Input = {
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: InputMaybe<Scalars['NonEmptyString']['input']>;
  identifier?: InputMaybe<Scalars['mutationInput_core_tokens_partial_update_input_identifier']['input']>;
  intent?: InputMaybe<IntentEnum>;
  user?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expires?: InputMaybe<Scalars['DateTime']['input']>;
  expiring?: InputMaybe<Scalars['Boolean']['input']>;
};

export type core_tokens_destroy_response = Void_container | ValidationError | GenericError;

export type core_tokens_set_key_create_response = Void_container | GenericError;

export type TokenSetKeyRequest_Input = {
  key: Scalars['NonEmptyString']['input'];
};

export type core_transactional_applications_update_response = TransactionApplicationResponse | ValidationError | GenericError;

/** Transactional creation response */
export type TransactionApplicationResponse = {
  applied: Scalars['Boolean']['output'];
  logs: Array<Maybe<Scalars['String']['output']>>;
};

/** Serializer for creating a provider and an application in one transaction */
export type TransactionApplicationRequest_Input = {
  app: ApplicationRequest_Input;
  provider_model: ProviderModelEnum;
  provider: modelRequest_Input;
};

export type ProviderModelEnum =
  | 'authentik_providers_ldap_ldapprovider'
  | 'authentik_providers_oauth2_oauth2provider'
  | 'authentik_providers_proxy_proxyprovider'
  | 'authentik_providers_rac_racprovider'
  | 'authentik_providers_radius_radiusprovider'
  | 'authentik_providers_saml_samlprovider'
  | 'authentik_providers_scim_scimprovider';

export type modelRequest_Input =
  { LDAPProviderRequest_Input: LDAPProviderRequest_Input; OAuth2ProviderRequest_Input?: never; ProxyProviderRequest_Input?: never; RACProviderRequest_Input?: never; RadiusProviderRequest_Input?: never; SAMLProviderRequest_Input?: never; SCIMProviderRequest_Input?: never; }
  |  { LDAPProviderRequest_Input?: never; OAuth2ProviderRequest_Input: OAuth2ProviderRequest_Input; ProxyProviderRequest_Input?: never; RACProviderRequest_Input?: never; RadiusProviderRequest_Input?: never; SAMLProviderRequest_Input?: never; SCIMProviderRequest_Input?: never; }
  |  { LDAPProviderRequest_Input?: never; OAuth2ProviderRequest_Input?: never; ProxyProviderRequest_Input: ProxyProviderRequest_Input; RACProviderRequest_Input?: never; RadiusProviderRequest_Input?: never; SAMLProviderRequest_Input?: never; SCIMProviderRequest_Input?: never; }
  |  { LDAPProviderRequest_Input?: never; OAuth2ProviderRequest_Input?: never; ProxyProviderRequest_Input?: never; RACProviderRequest_Input: RACProviderRequest_Input; RadiusProviderRequest_Input?: never; SAMLProviderRequest_Input?: never; SCIMProviderRequest_Input?: never; }
  |  { LDAPProviderRequest_Input?: never; OAuth2ProviderRequest_Input?: never; ProxyProviderRequest_Input?: never; RACProviderRequest_Input?: never; RadiusProviderRequest_Input: RadiusProviderRequest_Input; SAMLProviderRequest_Input?: never; SCIMProviderRequest_Input?: never; }
  |  { LDAPProviderRequest_Input?: never; OAuth2ProviderRequest_Input?: never; ProxyProviderRequest_Input?: never; RACProviderRequest_Input?: never; RadiusProviderRequest_Input?: never; SAMLProviderRequest_Input: SAMLProviderRequest_Input; SCIMProviderRequest_Input?: never; }
  |  { LDAPProviderRequest_Input?: never; OAuth2ProviderRequest_Input?: never; ProxyProviderRequest_Input?: never; RACProviderRequest_Input?: never; RadiusProviderRequest_Input?: never; SAMLProviderRequest_Input?: never; SCIMProviderRequest_Input: SCIMProviderRequest_Input; };

/** LDAPProvider Serializer */
export type LDAPProviderRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  /** Flow used for authentication when the associated application is accessed by an un-authenticated user. */
  authentication_flow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow used when authorizing this provider. */
  authorization_flow: Scalars['UUID']['input'];
  property_mappings?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** DN under which objects are accessible. */
  base_dn?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Users in this group can do search queries. If not set, every user can execute search queries. */
  search_group?: InputMaybe<Scalars['UUID']['input']>;
  certificate?: InputMaybe<Scalars['UUID']['input']>;
  tls_server_name?: InputMaybe<Scalars['String']['input']>;
  /** The start for uidNumbers, this number is added to the user.pk to make sure that the numbers aren't too low for POSIX users. Default is 2000 to ensure that we don't collide with local users uidNumber */
  uid_start_number?: InputMaybe<Scalars['Int']['input']>;
  /** The start for gidNumbers, this number is added to a number generated from the group.pk to make sure that the numbers aren't too low for POSIX groups. Default is 4000 to ensure that we don't collide with local groups or users primary groups gidNumber */
  gid_start_number?: InputMaybe<Scalars['Int']['input']>;
  search_mode?: InputMaybe<LDAPAPIAccessMode>;
  bind_mode?: InputMaybe<LDAPAPIAccessMode>;
  /** When enabled, code-based multi-factor authentication can be used by appending a semicolon and the TOTP code to the password. This should only be enabled if all users that will bind to this provider have a TOTP device configured, as otherwise a password may incorrectly be rejected if it contains a semicolon. */
  mfa_support?: InputMaybe<Scalars['Boolean']['input']>;
};

/** OAuth2Provider Serializer */
export type OAuth2ProviderRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  /** Flow used for authentication when the associated application is accessed by an un-authenticated user. */
  authentication_flow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow used when authorizing this provider. */
  authorization_flow: Scalars['UUID']['input'];
  property_mappings?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  client_type?: InputMaybe<ClientTypeEnum>;
  client_id?: InputMaybe<Scalars['mutationInput_core_transactional_applications_update_input_provider_oneOf_1_client_id']['input']>;
  client_secret?: InputMaybe<Scalars['mutationInput_core_transactional_applications_update_input_provider_oneOf_1_client_secret']['input']>;
  /** Access codes not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  access_code_validity?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Tokens not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  access_token_validity?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Tokens not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  refresh_token_validity?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Include User claims from scopes in the id_token, for applications that don't access the userinfo endpoint. */
  include_claims_in_id_token?: InputMaybe<Scalars['Boolean']['input']>;
  /** Key used to sign the tokens. Only required when JWT Algorithm is set to RS256. */
  signing_key?: InputMaybe<Scalars['UUID']['input']>;
  /** Enter each URI on a new line. */
  redirect_uris?: InputMaybe<Scalars['String']['input']>;
  sub_mode?: InputMaybe<SubModeEnum>;
  issuer_mode?: InputMaybe<IssuerModeEnum>;
  jwks_sources?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
};

/** ProxyProvider Serializer */
export type ProxyProviderRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  /** Flow used for authentication when the associated application is accessed by an un-authenticated user. */
  authentication_flow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow used when authorizing this provider. */
  authorization_flow: Scalars['UUID']['input'];
  property_mappings?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  internal_host?: InputMaybe<Scalars['URL']['input']>;
  external_host: Scalars['URL']['input'];
  /** Validate SSL Certificates of upstream servers */
  internal_host_ssl_validation?: InputMaybe<Scalars['Boolean']['input']>;
  certificate?: InputMaybe<Scalars['UUID']['input']>;
  /** Regular expressions for which authentication is not required. Each new line is interpreted as a new Regular Expression. */
  skip_path_regex?: InputMaybe<Scalars['String']['input']>;
  /** Set a custom HTTP-Basic Authentication header based on values from authentik. */
  basic_auth_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** User/Group Attribute used for the password part of the HTTP-Basic Header. */
  basic_auth_password_attribute?: InputMaybe<Scalars['String']['input']>;
  /** User/Group Attribute used for the user part of the HTTP-Basic Header. If not set, the user's Email address is used. */
  basic_auth_user_attribute?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<ProxyMode>;
  /** When enabled, this provider will intercept the authorization header and authenticate requests based on its value. */
  intercept_header_auth?: InputMaybe<Scalars['Boolean']['input']>;
  cookie_domain?: InputMaybe<Scalars['String']['input']>;
  jwks_sources?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** Tokens not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  access_token_validity?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Tokens not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  refresh_token_validity?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

/** RACProvider Serializer */
export type RACProviderRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  /** Flow used for authentication when the associated application is accessed by an un-authenticated user. */
  authentication_flow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow used when authorizing this provider. */
  authorization_flow: Scalars['UUID']['input'];
  property_mappings?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  settings?: InputMaybe<Scalars['JSON']['input']>;
  /** Determines how long a session lasts. Default of 0 means that the sessions lasts until the browser is closed. (Format: hours=-1;minutes=-2;seconds=-3) */
  connection_expiry?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** When set to true, connection tokens will be deleted upon disconnect. */
  delete_token_on_disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** RadiusProvider Serializer */
export type RadiusProviderRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  /** Flow used for authentication when the associated application is accessed by an un-authenticated user. */
  authentication_flow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow used when authorizing this provider. */
  authorization_flow: Scalars['UUID']['input'];
  property_mappings?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** List of CIDRs (comma-separated) that clients can connect from. A more specific CIDR will match before a looser one. Clients connecting from a non-specified CIDR will be dropped. */
  client_networks?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Shared secret between clients and server to hash packets. */
  shared_secret?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** When enabled, code-based multi-factor authentication can be used by appending a semicolon and the TOTP code to the password. This should only be enabled if all users that will bind to this provider have a TOTP device configured, as otherwise a password may incorrectly be rejected if it contains a semicolon. */
  mfa_support?: InputMaybe<Scalars['Boolean']['input']>;
};

/** SAMLProvider Serializer */
export type SAMLProviderRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  /** Flow used for authentication when the associated application is accessed by an un-authenticated user. */
  authentication_flow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow used when authorizing this provider. */
  authorization_flow: Scalars['UUID']['input'];
  property_mappings?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  acs_url: Scalars['URL']['input'];
  /** Value of the audience restriction field of the assertion. When left empty, no audience restriction will be added. */
  audience?: InputMaybe<Scalars['String']['input']>;
  /** Also known as EntityID */
  issuer?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Assertion valid not before current time + this value (Format: hours=-1;minutes=-2;seconds=-3). */
  assertion_valid_not_before?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Assertion not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  assertion_valid_not_on_or_after?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Session not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  session_valid_not_on_or_after?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Configure how the NameID value will be created. When left empty, the NameIDPolicy of the incoming request will be considered */
  name_id_mapping?: InputMaybe<Scalars['UUID']['input']>;
  digest_algorithm?: InputMaybe<DigestAlgorithmEnum>;
  signature_algorithm?: InputMaybe<SignatureAlgorithmEnum>;
  /** Keypair used to sign outgoing Responses going to the Service Provider. */
  signing_kp?: InputMaybe<Scalars['UUID']['input']>;
  /** When selected, incoming assertion's Signatures will be validated against this certificate. To allow unsigned Requests, leave on default. */
  verification_kp?: InputMaybe<Scalars['UUID']['input']>;
  /** This determines how authentik sends the response back to the Service Provider. */
  sp_binding?: InputMaybe<Scalars['JSON']['input']>;
  /** Default relay_state value for IDP-initiated logins */
  default_relay_state?: InputMaybe<Scalars['String']['input']>;
};

/** SCIMProvider Serializer */
export type SCIMProviderRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  property_mappings?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** Property mappings used for group creation/updating. */
  property_mappings_group?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** Base URL to SCIM requests, usually ends in /v2 */
  url: Scalars['NonEmptyString']['input'];
  /** Authentication token */
  token: Scalars['NonEmptyString']['input'];
  exclude_users_service_account?: InputMaybe<Scalars['Boolean']['input']>;
  filter_group?: InputMaybe<Scalars['UUID']['input']>;
};

export type core_user_consent_destroy_response = Void_container | ValidationError | GenericError;

export type core_users_create_response = User | ValidationError | GenericError;

/** User Serializer */
export type UserRequest_Input = {
  username: Scalars['mutationInput_core_users_create_input_username']['input'];
  /** User's display name. */
  name: Scalars['String']['input'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  last_login?: InputMaybe<Scalars['DateTime']['input']>;
  groups?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  email?: InputMaybe<Scalars['EmailAddress']['input']>;
  attributes?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Scalars['NonEmptyString']['input']>;
  type?: InputMaybe<UserTypeEnum>;
};

export type core_users_update_response = User | ValidationError | GenericError;

export type core_users_partial_update_response = User | ValidationError | GenericError;

/** User Serializer */
export type PatchedUserRequest_Input = {
  username?: InputMaybe<Scalars['mutationInput_core_users_partial_update_input_username']['input']>;
  /** User's display name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  last_login?: InputMaybe<Scalars['DateTime']['input']>;
  groups?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  email?: InputMaybe<Scalars['EmailAddress']['input']>;
  attributes?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Scalars['NonEmptyString']['input']>;
  type?: InputMaybe<UserTypeEnum>;
};

export type core_users_destroy_response = Void_container | ValidationError | GenericError;

export type core_users_impersonate_create_response = Void_container | ValidationError | GenericError;

export type core_users_recovery_create_response = Link | ValidationError | GenericError;

export type core_users_recovery_email_create_response = Void_container | ValidationError | GenericError;

export type core_users_set_password_create_response = Void_container | GenericError;

export type UserPasswordSetRequest_Input = {
  password: Scalars['NonEmptyString']['input'];
};

export type core_users_service_account_create_response = UserServiceAccountResponse | ValidationError | GenericError;

export type UserServiceAccountResponse = {
  username: Scalars['String']['output'];
  token: Scalars['String']['output'];
  user_uid: Scalars['String']['output'];
  user_pk: Scalars['Int']['output'];
  group_pk?: Maybe<Scalars['String']['output']>;
};

export type UserServiceAccountRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  create_group?: InputMaybe<Scalars['Boolean']['input']>;
  expiring?: InputMaybe<Scalars['Boolean']['input']>;
  /** If not provided, valid for 360 days */
  expires?: InputMaybe<Scalars['DateTime']['input']>;
};

export type crypto_certificatekeypairs_create_response = CertificateKeyPair | ValidationError | GenericError;

/** CertificateKeyPair Serializer */
export type CertificateKeyPairRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  /** PEM-encoded Certificate data */
  certificate_data: Scalars['NonEmptyString']['input'];
  /** Optional Private Key. If this is set, you can use this keypair for encryption. */
  key_data?: InputMaybe<Scalars['String']['input']>;
};

export type crypto_certificatekeypairs_update_response = CertificateKeyPair | ValidationError | GenericError;

export type crypto_certificatekeypairs_partial_update_response = CertificateKeyPair | ValidationError | GenericError;

/** CertificateKeyPair Serializer */
export type PatchedCertificateKeyPairRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** PEM-encoded Certificate data */
  certificate_data?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Optional Private Key. If this is set, you can use this keypair for encryption. */
  key_data?: InputMaybe<Scalars['String']['input']>;
};

export type crypto_certificatekeypairs_destroy_response = Void_container | ValidationError | GenericError;

export type crypto_certificatekeypairs_generate_create_response = CertificateKeyPair | GenericError;

/** Certificate generation parameters */
export type CertificateGenerationRequest_Input = {
  common_name: Scalars['NonEmptyString']['input'];
  subject_alt_name?: InputMaybe<Scalars['String']['input']>;
  validity_days: Scalars['Int']['input'];
  alg?: InputMaybe<AlgEnum>;
};

export type AlgEnum =
  | 'rsa'
  | 'ecdsa';

export type enterprise_license_create_response = License | ValidationError | GenericError;

/** License Serializer */
export type LicenseRequest_Input = {
  key: Scalars['NonEmptyString']['input'];
};

export type enterprise_license_update_response = License | ValidationError | GenericError;

export type enterprise_license_partial_update_response = License | ValidationError | GenericError;

/** License Serializer */
export type PatchedLicenseRequest_Input = {
  key?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type enterprise_license_destroy_response = Void_container | ValidationError | GenericError;

export type events_events_create_response = Event | ValidationError | GenericError;

/** Event Serializer */
export type EventRequest_Input = {
  user?: InputMaybe<Scalars['JSON']['input']>;
  action: EventActions;
  app: Scalars['NonEmptyString']['input'];
  context?: InputMaybe<Scalars['JSON']['input']>;
  client_ip?: InputMaybe<Scalars['NonEmptyString']['input']>;
  expires?: InputMaybe<Scalars['DateTime']['input']>;
  brand?: InputMaybe<Scalars['JSON']['input']>;
};

export type events_events_update_response = Event | ValidationError | GenericError;

export type events_events_partial_update_response = Event | ValidationError | GenericError;

/** Event Serializer */
export type PatchedEventRequest_Input = {
  user?: InputMaybe<Scalars['JSON']['input']>;
  action?: InputMaybe<EventActions>;
  app?: InputMaybe<Scalars['NonEmptyString']['input']>;
  context?: InputMaybe<Scalars['JSON']['input']>;
  client_ip?: InputMaybe<Scalars['NonEmptyString']['input']>;
  expires?: InputMaybe<Scalars['DateTime']['input']>;
  brand?: InputMaybe<Scalars['JSON']['input']>;
};

export type events_events_destroy_response = Void_container | ValidationError | GenericError;

export type events_notifications_update_response = Notification | ValidationError | GenericError;

/** Notification Serializer */
export type NotificationRequest_Input = {
  event?: InputMaybe<EventRequest_Input>;
  seen?: InputMaybe<Scalars['Boolean']['input']>;
};

export type events_notifications_partial_update_response = Notification | ValidationError | GenericError;

/** Notification Serializer */
export type PatchedNotificationRequest_Input = {
  event?: InputMaybe<EventRequest_Input>;
  seen?: InputMaybe<Scalars['Boolean']['input']>;
};

export type events_notifications_destroy_response = Void_container | ValidationError | GenericError;

export type events_notifications_mark_all_seen_create_response = Void_container | ValidationError | GenericError;

export type events_rules_create_response = NotificationRule | ValidationError | GenericError;

/** NotificationRule Serializer */
export type NotificationRuleRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  /** Select which transports should be used to notify the user. If none are selected, the notification will only be shown in the authentik UI. */
  transports?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  severity?: InputMaybe<SeverityEnum>;
  /** Define which group of users this notification should be sent and shown to. If left empty, Notification won't ben sent. */
  group?: InputMaybe<Scalars['UUID']['input']>;
};

export type events_rules_update_response = NotificationRule | ValidationError | GenericError;

export type events_rules_partial_update_response = NotificationRule | ValidationError | GenericError;

/** NotificationRule Serializer */
export type PatchedNotificationRuleRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Select which transports should be used to notify the user. If none are selected, the notification will only be shown in the authentik UI. */
  transports?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  severity?: InputMaybe<SeverityEnum>;
  /** Define which group of users this notification should be sent and shown to. If left empty, Notification won't ben sent. */
  group?: InputMaybe<Scalars['UUID']['input']>;
};

export type events_rules_destroy_response = Void_container | ValidationError | GenericError;

export type events_system_tasks_run_create_response = Void_container | ValidationError | GenericError;

export type events_transports_create_response = NotificationTransport | ValidationError | GenericError;

/** NotificationTransport Serializer */
export type NotificationTransportRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  mode?: InputMaybe<NotificationTransportModeEnum>;
  webhook_url?: InputMaybe<Scalars['URL']['input']>;
  webhook_mapping?: InputMaybe<Scalars['UUID']['input']>;
  /** Only send notification once, for example when sending a webhook into a chat channel. */
  send_once?: InputMaybe<Scalars['Boolean']['input']>;
};

export type events_transports_update_response = NotificationTransport | ValidationError | GenericError;

export type events_transports_partial_update_response = NotificationTransport | ValidationError | GenericError;

/** NotificationTransport Serializer */
export type PatchedNotificationTransportRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  mode?: InputMaybe<NotificationTransportModeEnum>;
  webhook_url?: InputMaybe<Scalars['URL']['input']>;
  webhook_mapping?: InputMaybe<Scalars['UUID']['input']>;
  /** Only send notification once, for example when sending a webhook into a chat channel. */
  send_once?: InputMaybe<Scalars['Boolean']['input']>;
};

export type events_transports_destroy_response = Void_container | ValidationError | GenericError;

export type events_transports_test_create_response = NotificationTransportTest | ValidationError | GenericError;

/** Notification test serializer */
export type NotificationTransportTest = {
  messages: Array<Maybe<Scalars['String']['output']>>;
};

export type flows_bindings_create_response = FlowStageBinding | ValidationError | GenericError;

/** FlowStageBinding Serializer */
export type FlowStageBindingRequest_Input = {
  target: Scalars['UUID']['input'];
  stage: Scalars['UUID']['input'];
  /** Evaluate policies during the Flow planning process. */
  evaluate_on_plan?: InputMaybe<Scalars['Boolean']['input']>;
  /** Evaluate policies when the Stage is present to the user. */
  re_evaluate_policies?: InputMaybe<Scalars['Boolean']['input']>;
  order: Scalars['Int']['input'];
  policy_engine_mode?: InputMaybe<PolicyEngineMode>;
  invalid_response_action?: InputMaybe<InvalidResponseActionEnum>;
};

export type flows_bindings_update_response = FlowStageBinding | ValidationError | GenericError;

export type flows_bindings_partial_update_response = FlowStageBinding | ValidationError | GenericError;

/** FlowStageBinding Serializer */
export type PatchedFlowStageBindingRequest_Input = {
  target?: InputMaybe<Scalars['UUID']['input']>;
  stage?: InputMaybe<Scalars['UUID']['input']>;
  /** Evaluate policies during the Flow planning process. */
  evaluate_on_plan?: InputMaybe<Scalars['Boolean']['input']>;
  /** Evaluate policies when the Stage is present to the user. */
  re_evaluate_policies?: InputMaybe<Scalars['Boolean']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  policy_engine_mode?: InputMaybe<PolicyEngineMode>;
  invalid_response_action?: InputMaybe<InvalidResponseActionEnum>;
};

export type flows_bindings_destroy_response = Void_container | ValidationError | GenericError;

export type flows_executor_solve_response = AccessDeniedChallenge | AppleLoginChallenge | AuthenticatorDuoChallenge | AuthenticatorSMSChallenge | AuthenticatorStaticChallenge | AuthenticatorTOTPChallenge | AuthenticatorValidationChallenge | AuthenticatorWebAuthnChallenge | AutosubmitChallenge | CaptchaChallenge | ConsentChallenge | EmailChallenge | FlowErrorChallenge | IdentificationChallenge | OAuthDeviceCodeChallenge | OAuthDeviceCodeFinishChallenge | PasswordChallenge | PlexAuthenticationChallenge | PromptChallenge | RedirectChallenge | ShellChallenge | UserLoginChallenge | ValidationError | GenericError;

export type FlowChallengeResponseRequest_Input =
  { AppleChallengeResponseRequest_Input: AppleChallengeResponseRequest_Input; AuthenticatorDuoChallengeResponseRequest_Input?: never; AuthenticatorSMSChallengeResponseRequest_Input?: never; AuthenticatorStaticChallengeResponseRequest_Input?: never; AuthenticatorTOTPChallengeResponseRequest_Input?: never; AuthenticatorValidationChallengeResponseRequest_Input?: never; AuthenticatorWebAuthnChallengeResponseRequest_Input?: never; AutoSubmitChallengeResponseRequest_Input?: never; CaptchaChallengeResponseRequest_Input?: never; ConsentChallengeResponseRequest_Input?: never; EmailChallengeResponseRequest_Input?: never; IdentificationChallengeResponseRequest_Input?: never; OAuthDeviceCodeChallengeResponseRequest_Input?: never; OAuthDeviceCodeFinishChallengeResponseRequest_Input?: never; PasswordChallengeResponseRequest_Input?: never; PlexAuthenticationChallengeResponseRequest_Input?: never; PromptChallengeResponseRequest_Input?: never; UserLoginChallengeResponseRequest_Input?: never; }
  |  { AppleChallengeResponseRequest_Input?: never; AuthenticatorDuoChallengeResponseRequest_Input: AuthenticatorDuoChallengeResponseRequest_Input; AuthenticatorSMSChallengeResponseRequest_Input?: never; AuthenticatorStaticChallengeResponseRequest_Input?: never; AuthenticatorTOTPChallengeResponseRequest_Input?: never; AuthenticatorValidationChallengeResponseRequest_Input?: never; AuthenticatorWebAuthnChallengeResponseRequest_Input?: never; AutoSubmitChallengeResponseRequest_Input?: never; CaptchaChallengeResponseRequest_Input?: never; ConsentChallengeResponseRequest_Input?: never; EmailChallengeResponseRequest_Input?: never; IdentificationChallengeResponseRequest_Input?: never; OAuthDeviceCodeChallengeResponseRequest_Input?: never; OAuthDeviceCodeFinishChallengeResponseRequest_Input?: never; PasswordChallengeResponseRequest_Input?: never; PlexAuthenticationChallengeResponseRequest_Input?: never; PromptChallengeResponseRequest_Input?: never; UserLoginChallengeResponseRequest_Input?: never; }
  |  { AppleChallengeResponseRequest_Input?: never; AuthenticatorDuoChallengeResponseRequest_Input?: never; AuthenticatorSMSChallengeResponseRequest_Input: AuthenticatorSMSChallengeResponseRequest_Input; AuthenticatorStaticChallengeResponseRequest_Input?: never; AuthenticatorTOTPChallengeResponseRequest_Input?: never; AuthenticatorValidationChallengeResponseRequest_Input?: never; AuthenticatorWebAuthnChallengeResponseRequest_Input?: never; AutoSubmitChallengeResponseRequest_Input?: never; CaptchaChallengeResponseRequest_Input?: never; ConsentChallengeResponseRequest_Input?: never; EmailChallengeResponseRequest_Input?: never; IdentificationChallengeResponseRequest_Input?: never; OAuthDeviceCodeChallengeResponseRequest_Input?: never; OAuthDeviceCodeFinishChallengeResponseRequest_Input?: never; PasswordChallengeResponseRequest_Input?: never; PlexAuthenticationChallengeResponseRequest_Input?: never; PromptChallengeResponseRequest_Input?: never; UserLoginChallengeResponseRequest_Input?: never; }
  |  { AppleChallengeResponseRequest_Input?: never; AuthenticatorDuoChallengeResponseRequest_Input?: never; AuthenticatorSMSChallengeResponseRequest_Input?: never; AuthenticatorStaticChallengeResponseRequest_Input: AuthenticatorStaticChallengeResponseRequest_Input; AuthenticatorTOTPChallengeResponseRequest_Input?: never; AuthenticatorValidationChallengeResponseRequest_Input?: never; AuthenticatorWebAuthnChallengeResponseRequest_Input?: never; AutoSubmitChallengeResponseRequest_Input?: never; CaptchaChallengeResponseRequest_Input?: never; ConsentChallengeResponseRequest_Input?: never; EmailChallengeResponseRequest_Input?: never; IdentificationChallengeResponseRequest_Input?: never; OAuthDeviceCodeChallengeResponseRequest_Input?: never; OAuthDeviceCodeFinishChallengeResponseRequest_Input?: never; PasswordChallengeResponseRequest_Input?: never; PlexAuthenticationChallengeResponseRequest_Input?: never; PromptChallengeResponseRequest_Input?: never; UserLoginChallengeResponseRequest_Input?: never; }
  |  { AppleChallengeResponseRequest_Input?: never; AuthenticatorDuoChallengeResponseRequest_Input?: never; AuthenticatorSMSChallengeResponseRequest_Input?: never; AuthenticatorStaticChallengeResponseRequest_Input?: never; AuthenticatorTOTPChallengeResponseRequest_Input: AuthenticatorTOTPChallengeResponseRequest_Input; AuthenticatorValidationChallengeResponseRequest_Input?: never; AuthenticatorWebAuthnChallengeResponseRequest_Input?: never; AutoSubmitChallengeResponseRequest_Input?: never; CaptchaChallengeResponseRequest_Input?: never; ConsentChallengeResponseRequest_Input?: never; EmailChallengeResponseRequest_Input?: never; IdentificationChallengeResponseRequest_Input?: never; OAuthDeviceCodeChallengeResponseRequest_Input?: never; OAuthDeviceCodeFinishChallengeResponseRequest_Input?: never; PasswordChallengeResponseRequest_Input?: never; PlexAuthenticationChallengeResponseRequest_Input?: never; PromptChallengeResponseRequest_Input?: never; UserLoginChallengeResponseRequest_Input?: never; }
  |  { AppleChallengeResponseRequest_Input?: never; AuthenticatorDuoChallengeResponseRequest_Input?: never; AuthenticatorSMSChallengeResponseRequest_Input?: never; AuthenticatorStaticChallengeResponseRequest_Input?: never; AuthenticatorTOTPChallengeResponseRequest_Input?: never; AuthenticatorValidationChallengeResponseRequest_Input: AuthenticatorValidationChallengeResponseRequest_Input; AuthenticatorWebAuthnChallengeResponseRequest_Input?: never; AutoSubmitChallengeResponseRequest_Input?: never; CaptchaChallengeResponseRequest_Input?: never; ConsentChallengeResponseRequest_Input?: never; EmailChallengeResponseRequest_Input?: never; IdentificationChallengeResponseRequest_Input?: never; OAuthDeviceCodeChallengeResponseRequest_Input?: never; OAuthDeviceCodeFinishChallengeResponseRequest_Input?: never; PasswordChallengeResponseRequest_Input?: never; PlexAuthenticationChallengeResponseRequest_Input?: never; PromptChallengeResponseRequest_Input?: never; UserLoginChallengeResponseRequest_Input?: never; }
  |  { AppleChallengeResponseRequest_Input?: never; AuthenticatorDuoChallengeResponseRequest_Input?: never; AuthenticatorSMSChallengeResponseRequest_Input?: never; AuthenticatorStaticChallengeResponseRequest_Input?: never; AuthenticatorTOTPChallengeResponseRequest_Input?: never; AuthenticatorValidationChallengeResponseRequest_Input?: never; AuthenticatorWebAuthnChallengeResponseRequest_Input: AuthenticatorWebAuthnChallengeResponseRequest_Input; AutoSubmitChallengeResponseRequest_Input?: never; CaptchaChallengeResponseRequest_Input?: never; ConsentChallengeResponseRequest_Input?: never; EmailChallengeResponseRequest_Input?: never; IdentificationChallengeResponseRequest_Input?: never; OAuthDeviceCodeChallengeResponseRequest_Input?: never; OAuthDeviceCodeFinishChallengeResponseRequest_Input?: never; PasswordChallengeResponseRequest_Input?: never; PlexAuthenticationChallengeResponseRequest_Input?: never; PromptChallengeResponseRequest_Input?: never; UserLoginChallengeResponseRequest_Input?: never; }
  |  { AppleChallengeResponseRequest_Input?: never; AuthenticatorDuoChallengeResponseRequest_Input?: never; AuthenticatorSMSChallengeResponseRequest_Input?: never; AuthenticatorStaticChallengeResponseRequest_Input?: never; AuthenticatorTOTPChallengeResponseRequest_Input?: never; AuthenticatorValidationChallengeResponseRequest_Input?: never; AuthenticatorWebAuthnChallengeResponseRequest_Input?: never; AutoSubmitChallengeResponseRequest_Input: AutoSubmitChallengeResponseRequest_Input; CaptchaChallengeResponseRequest_Input?: never; ConsentChallengeResponseRequest_Input?: never; EmailChallengeResponseRequest_Input?: never; IdentificationChallengeResponseRequest_Input?: never; OAuthDeviceCodeChallengeResponseRequest_Input?: never; OAuthDeviceCodeFinishChallengeResponseRequest_Input?: never; PasswordChallengeResponseRequest_Input?: never; PlexAuthenticationChallengeResponseRequest_Input?: never; PromptChallengeResponseRequest_Input?: never; UserLoginChallengeResponseRequest_Input?: never; }
  |  { AppleChallengeResponseRequest_Input?: never; AuthenticatorDuoChallengeResponseRequest_Input?: never; AuthenticatorSMSChallengeResponseRequest_Input?: never; AuthenticatorStaticChallengeResponseRequest_Input?: never; AuthenticatorTOTPChallengeResponseRequest_Input?: never; AuthenticatorValidationChallengeResponseRequest_Input?: never; AuthenticatorWebAuthnChallengeResponseRequest_Input?: never; AutoSubmitChallengeResponseRequest_Input?: never; CaptchaChallengeResponseRequest_Input: CaptchaChallengeResponseRequest_Input; ConsentChallengeResponseRequest_Input?: never; EmailChallengeResponseRequest_Input?: never; IdentificationChallengeResponseRequest_Input?: never; OAuthDeviceCodeChallengeResponseRequest_Input?: never; OAuthDeviceCodeFinishChallengeResponseRequest_Input?: never; PasswordChallengeResponseRequest_Input?: never; PlexAuthenticationChallengeResponseRequest_Input?: never; PromptChallengeResponseRequest_Input?: never; UserLoginChallengeResponseRequest_Input?: never; }
  |  { AppleChallengeResponseRequest_Input?: never; AuthenticatorDuoChallengeResponseRequest_Input?: never; AuthenticatorSMSChallengeResponseRequest_Input?: never; AuthenticatorStaticChallengeResponseRequest_Input?: never; AuthenticatorTOTPChallengeResponseRequest_Input?: never; AuthenticatorValidationChallengeResponseRequest_Input?: never; AuthenticatorWebAuthnChallengeResponseRequest_Input?: never; AutoSubmitChallengeResponseRequest_Input?: never; CaptchaChallengeResponseRequest_Input?: never; ConsentChallengeResponseRequest_Input: ConsentChallengeResponseRequest_Input; EmailChallengeResponseRequest_Input?: never; IdentificationChallengeResponseRequest_Input?: never; OAuthDeviceCodeChallengeResponseRequest_Input?: never; OAuthDeviceCodeFinishChallengeResponseRequest_Input?: never; PasswordChallengeResponseRequest_Input?: never; PlexAuthenticationChallengeResponseRequest_Input?: never; PromptChallengeResponseRequest_Input?: never; UserLoginChallengeResponseRequest_Input?: never; }
  |  { AppleChallengeResponseRequest_Input?: never; AuthenticatorDuoChallengeResponseRequest_Input?: never; AuthenticatorSMSChallengeResponseRequest_Input?: never; AuthenticatorStaticChallengeResponseRequest_Input?: never; AuthenticatorTOTPChallengeResponseRequest_Input?: never; AuthenticatorValidationChallengeResponseRequest_Input?: never; AuthenticatorWebAuthnChallengeResponseRequest_Input?: never; AutoSubmitChallengeResponseRequest_Input?: never; CaptchaChallengeResponseRequest_Input?: never; ConsentChallengeResponseRequest_Input?: never; EmailChallengeResponseRequest_Input: EmailChallengeResponseRequest_Input; IdentificationChallengeResponseRequest_Input?: never; OAuthDeviceCodeChallengeResponseRequest_Input?: never; OAuthDeviceCodeFinishChallengeResponseRequest_Input?: never; PasswordChallengeResponseRequest_Input?: never; PlexAuthenticationChallengeResponseRequest_Input?: never; PromptChallengeResponseRequest_Input?: never; UserLoginChallengeResponseRequest_Input?: never; }
  |  { AppleChallengeResponseRequest_Input?: never; AuthenticatorDuoChallengeResponseRequest_Input?: never; AuthenticatorSMSChallengeResponseRequest_Input?: never; AuthenticatorStaticChallengeResponseRequest_Input?: never; AuthenticatorTOTPChallengeResponseRequest_Input?: never; AuthenticatorValidationChallengeResponseRequest_Input?: never; AuthenticatorWebAuthnChallengeResponseRequest_Input?: never; AutoSubmitChallengeResponseRequest_Input?: never; CaptchaChallengeResponseRequest_Input?: never; ConsentChallengeResponseRequest_Input?: never; EmailChallengeResponseRequest_Input?: never; IdentificationChallengeResponseRequest_Input: IdentificationChallengeResponseRequest_Input; OAuthDeviceCodeChallengeResponseRequest_Input?: never; OAuthDeviceCodeFinishChallengeResponseRequest_Input?: never; PasswordChallengeResponseRequest_Input?: never; PlexAuthenticationChallengeResponseRequest_Input?: never; PromptChallengeResponseRequest_Input?: never; UserLoginChallengeResponseRequest_Input?: never; }
  |  { AppleChallengeResponseRequest_Input?: never; AuthenticatorDuoChallengeResponseRequest_Input?: never; AuthenticatorSMSChallengeResponseRequest_Input?: never; AuthenticatorStaticChallengeResponseRequest_Input?: never; AuthenticatorTOTPChallengeResponseRequest_Input?: never; AuthenticatorValidationChallengeResponseRequest_Input?: never; AuthenticatorWebAuthnChallengeResponseRequest_Input?: never; AutoSubmitChallengeResponseRequest_Input?: never; CaptchaChallengeResponseRequest_Input?: never; ConsentChallengeResponseRequest_Input?: never; EmailChallengeResponseRequest_Input?: never; IdentificationChallengeResponseRequest_Input?: never; OAuthDeviceCodeChallengeResponseRequest_Input: OAuthDeviceCodeChallengeResponseRequest_Input; OAuthDeviceCodeFinishChallengeResponseRequest_Input?: never; PasswordChallengeResponseRequest_Input?: never; PlexAuthenticationChallengeResponseRequest_Input?: never; PromptChallengeResponseRequest_Input?: never; UserLoginChallengeResponseRequest_Input?: never; }
  |  { AppleChallengeResponseRequest_Input?: never; AuthenticatorDuoChallengeResponseRequest_Input?: never; AuthenticatorSMSChallengeResponseRequest_Input?: never; AuthenticatorStaticChallengeResponseRequest_Input?: never; AuthenticatorTOTPChallengeResponseRequest_Input?: never; AuthenticatorValidationChallengeResponseRequest_Input?: never; AuthenticatorWebAuthnChallengeResponseRequest_Input?: never; AutoSubmitChallengeResponseRequest_Input?: never; CaptchaChallengeResponseRequest_Input?: never; ConsentChallengeResponseRequest_Input?: never; EmailChallengeResponseRequest_Input?: never; IdentificationChallengeResponseRequest_Input?: never; OAuthDeviceCodeChallengeResponseRequest_Input?: never; OAuthDeviceCodeFinishChallengeResponseRequest_Input: OAuthDeviceCodeFinishChallengeResponseRequest_Input; PasswordChallengeResponseRequest_Input?: never; PlexAuthenticationChallengeResponseRequest_Input?: never; PromptChallengeResponseRequest_Input?: never; UserLoginChallengeResponseRequest_Input?: never; }
  |  { AppleChallengeResponseRequest_Input?: never; AuthenticatorDuoChallengeResponseRequest_Input?: never; AuthenticatorSMSChallengeResponseRequest_Input?: never; AuthenticatorStaticChallengeResponseRequest_Input?: never; AuthenticatorTOTPChallengeResponseRequest_Input?: never; AuthenticatorValidationChallengeResponseRequest_Input?: never; AuthenticatorWebAuthnChallengeResponseRequest_Input?: never; AutoSubmitChallengeResponseRequest_Input?: never; CaptchaChallengeResponseRequest_Input?: never; ConsentChallengeResponseRequest_Input?: never; EmailChallengeResponseRequest_Input?: never; IdentificationChallengeResponseRequest_Input?: never; OAuthDeviceCodeChallengeResponseRequest_Input?: never; OAuthDeviceCodeFinishChallengeResponseRequest_Input?: never; PasswordChallengeResponseRequest_Input: PasswordChallengeResponseRequest_Input; PlexAuthenticationChallengeResponseRequest_Input?: never; PromptChallengeResponseRequest_Input?: never; UserLoginChallengeResponseRequest_Input?: never; }
  |  { AppleChallengeResponseRequest_Input?: never; AuthenticatorDuoChallengeResponseRequest_Input?: never; AuthenticatorSMSChallengeResponseRequest_Input?: never; AuthenticatorStaticChallengeResponseRequest_Input?: never; AuthenticatorTOTPChallengeResponseRequest_Input?: never; AuthenticatorValidationChallengeResponseRequest_Input?: never; AuthenticatorWebAuthnChallengeResponseRequest_Input?: never; AutoSubmitChallengeResponseRequest_Input?: never; CaptchaChallengeResponseRequest_Input?: never; ConsentChallengeResponseRequest_Input?: never; EmailChallengeResponseRequest_Input?: never; IdentificationChallengeResponseRequest_Input?: never; OAuthDeviceCodeChallengeResponseRequest_Input?: never; OAuthDeviceCodeFinishChallengeResponseRequest_Input?: never; PasswordChallengeResponseRequest_Input?: never; PlexAuthenticationChallengeResponseRequest_Input: PlexAuthenticationChallengeResponseRequest_Input; PromptChallengeResponseRequest_Input?: never; UserLoginChallengeResponseRequest_Input?: never; }
  |  { AppleChallengeResponseRequest_Input?: never; AuthenticatorDuoChallengeResponseRequest_Input?: never; AuthenticatorSMSChallengeResponseRequest_Input?: never; AuthenticatorStaticChallengeResponseRequest_Input?: never; AuthenticatorTOTPChallengeResponseRequest_Input?: never; AuthenticatorValidationChallengeResponseRequest_Input?: never; AuthenticatorWebAuthnChallengeResponseRequest_Input?: never; AutoSubmitChallengeResponseRequest_Input?: never; CaptchaChallengeResponseRequest_Input?: never; ConsentChallengeResponseRequest_Input?: never; EmailChallengeResponseRequest_Input?: never; IdentificationChallengeResponseRequest_Input?: never; OAuthDeviceCodeChallengeResponseRequest_Input?: never; OAuthDeviceCodeFinishChallengeResponseRequest_Input?: never; PasswordChallengeResponseRequest_Input?: never; PlexAuthenticationChallengeResponseRequest_Input?: never; PromptChallengeResponseRequest_Input: PromptChallengeResponseRequest_Input; UserLoginChallengeResponseRequest_Input?: never; }
  |  { AppleChallengeResponseRequest_Input?: never; AuthenticatorDuoChallengeResponseRequest_Input?: never; AuthenticatorSMSChallengeResponseRequest_Input?: never; AuthenticatorStaticChallengeResponseRequest_Input?: never; AuthenticatorTOTPChallengeResponseRequest_Input?: never; AuthenticatorValidationChallengeResponseRequest_Input?: never; AuthenticatorWebAuthnChallengeResponseRequest_Input?: never; AutoSubmitChallengeResponseRequest_Input?: never; CaptchaChallengeResponseRequest_Input?: never; ConsentChallengeResponseRequest_Input?: never; EmailChallengeResponseRequest_Input?: never; IdentificationChallengeResponseRequest_Input?: never; OAuthDeviceCodeChallengeResponseRequest_Input?: never; OAuthDeviceCodeFinishChallengeResponseRequest_Input?: never; PasswordChallengeResponseRequest_Input?: never; PlexAuthenticationChallengeResponseRequest_Input?: never; PromptChallengeResponseRequest_Input?: never; UserLoginChallengeResponseRequest_Input: UserLoginChallengeResponseRequest_Input; };

/** Pseudo class for apple response */
export type AppleChallengeResponseRequest_Input = {
  component?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

/** Pseudo class for duo response */
export type AuthenticatorDuoChallengeResponseRequest_Input = {
  component?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

/** SMS Challenge response, device is set by get_response_instance */
export type AuthenticatorSMSChallengeResponseRequest_Input = {
  component?: InputMaybe<Scalars['NonEmptyString']['input']>;
  code?: InputMaybe<Scalars['Int']['input']>;
  phone_number?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

/** Pseudo class for static response */
export type AuthenticatorStaticChallengeResponseRequest_Input = {
  component?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

/** TOTP Challenge response, device is set by get_response_instance */
export type AuthenticatorTOTPChallengeResponseRequest_Input = {
  component?: InputMaybe<Scalars['NonEmptyString']['input']>;
  code: Scalars['Int']['input'];
};

/** Challenge used for Code-based and WebAuthn authenticators */
export type AuthenticatorValidationChallengeResponseRequest_Input = {
  component?: InputMaybe<Scalars['NonEmptyString']['input']>;
  selected_challenge?: InputMaybe<DeviceChallengeRequest_Input>;
  selected_stage?: InputMaybe<Scalars['NonEmptyString']['input']>;
  code?: InputMaybe<Scalars['NonEmptyString']['input']>;
  webauthn?: InputMaybe<Scalars['JSON']['input']>;
  duo?: InputMaybe<Scalars['Int']['input']>;
};

/** Single device challenge */
export type DeviceChallengeRequest_Input = {
  device_class: Scalars['NonEmptyString']['input'];
  device_uid: Scalars['NonEmptyString']['input'];
  challenge: Scalars['JSON']['input'];
};

/** WebAuthn Challenge response */
export type AuthenticatorWebAuthnChallengeResponseRequest_Input = {
  component?: InputMaybe<Scalars['NonEmptyString']['input']>;
  response: Scalars['JSON']['input'];
};

/** Pseudo class for autosubmit response */
export type AutoSubmitChallengeResponseRequest_Input = {
  component?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

/** Validate captcha token */
export type CaptchaChallengeResponseRequest_Input = {
  component?: InputMaybe<Scalars['NonEmptyString']['input']>;
  token: Scalars['NonEmptyString']['input'];
};

/** Consent challenge response, any valid response request is valid */
export type ConsentChallengeResponseRequest_Input = {
  component?: InputMaybe<Scalars['NonEmptyString']['input']>;
  token: Scalars['NonEmptyString']['input'];
};

/**
 * Email challenge resposen. No fields. This challenge is
 * always declared invalid to give the user a chance to retry
 */
export type EmailChallengeResponseRequest_Input = {
  component?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

/** Identification challenge */
export type IdentificationChallengeResponseRequest_Input = {
  component?: InputMaybe<Scalars['NonEmptyString']['input']>;
  uid_field: Scalars['NonEmptyString']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};

/** Response that includes the user-entered device code */
export type OAuthDeviceCodeChallengeResponseRequest_Input = {
  component?: InputMaybe<Scalars['NonEmptyString']['input']>;
  code: Scalars['Int']['input'];
};

/** Response that device has been authenticated and tab can be closed */
export type OAuthDeviceCodeFinishChallengeResponseRequest_Input = {
  component?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

/** Password challenge response */
export type PasswordChallengeResponseRequest_Input = {
  component?: InputMaybe<Scalars['NonEmptyString']['input']>;
  password: Scalars['NonEmptyString']['input'];
};

/** Pseudo class for plex response */
export type PlexAuthenticationChallengeResponseRequest_Input = {
  component?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

/**
 * Validate response, fields are dynamically created based
 * on the stage
 */
export type PromptChallengeResponseRequest_Input = {
  component?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

/** User login challenge */
export type UserLoginChallengeResponseRequest_Input = {
  component?: InputMaybe<Scalars['NonEmptyString']['input']>;
  remember_me: Scalars['Boolean']['input'];
};

export type flows_instances_create_response = Flow | ValidationError | GenericError;

/** Flow Serializer */
export type FlowRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  slug: Scalars['mutationInput_flows_instances_create_input_slug']['input'];
  /** Shown as the Title in Flow pages. */
  title: Scalars['NonEmptyString']['input'];
  designation: FlowDesignationEnum;
  policy_engine_mode?: InputMaybe<PolicyEngineMode>;
  /** Enable compatibility mode, increases compatibility with password managers on mobile devices. */
  compatibility_mode?: InputMaybe<Scalars['Boolean']['input']>;
  layout?: InputMaybe<FlowLayoutEnum>;
  denied_action?: InputMaybe<DeniedActionEnum>;
  authentication?: InputMaybe<AuthenticationEnum>;
};

export type flows_instances_update_response = Flow | ValidationError | GenericError;

export type flows_instances_partial_update_response = Flow | ValidationError | GenericError;

/** Flow Serializer */
export type PatchedFlowRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  slug?: InputMaybe<Scalars['mutationInput_flows_instances_partial_update_input_slug']['input']>;
  /** Shown as the Title in Flow pages. */
  title?: InputMaybe<Scalars['NonEmptyString']['input']>;
  designation?: InputMaybe<FlowDesignationEnum>;
  policy_engine_mode?: InputMaybe<PolicyEngineMode>;
  /** Enable compatibility mode, increases compatibility with password managers on mobile devices. */
  compatibility_mode?: InputMaybe<Scalars['Boolean']['input']>;
  layout?: InputMaybe<FlowLayoutEnum>;
  denied_action?: InputMaybe<DeniedActionEnum>;
  authentication?: InputMaybe<AuthenticationEnum>;
};

export type flows_instances_destroy_response = Void_container | ValidationError | GenericError;

export type flows_instances_cache_clear_create_response = Void_container | GenericError;

export type flows_instances_import_create_response = FlowImportResult | GenericError;

/** Logs of an attempted flow import */
export type FlowImportResult = {
  logs: Array<Maybe<LogEvent>>;
  success: Scalars['Boolean']['output'];
};

export type managed_blueprints_create_response = BlueprintInstance | ValidationError | GenericError;

/** Info about a single blueprint instance file */
export type BlueprintInstanceRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  path?: InputMaybe<Scalars['String']['input']>;
  context?: InputMaybe<Scalars['JSON']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
};

export type managed_blueprints_update_response = BlueprintInstance | ValidationError | GenericError;

export type managed_blueprints_partial_update_response = BlueprintInstance | ValidationError | GenericError;

/** Info about a single blueprint instance file */
export type PatchedBlueprintInstanceRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  context?: InputMaybe<Scalars['JSON']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
};

export type managed_blueprints_destroy_response = Void_container | ValidationError | GenericError;

export type managed_blueprints_apply_create_response = BlueprintInstance | ValidationError | GenericError;

export type oauth2_access_tokens_destroy_response = Void_container | ValidationError | GenericError;

export type oauth2_authorization_codes_destroy_response = Void_container | ValidationError | GenericError;

export type oauth2_refresh_tokens_destroy_response = Void_container | ValidationError | GenericError;

export type outposts_instances_create_response = Outpost | ValidationError | GenericError;

/** Outpost Serializer */
export type OutpostRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  type: OutpostTypeEnum;
  providers: Array<InputMaybe<Scalars['Int']['input']>>;
  /** Select Service-Connection authentik should use to manage this outpost. Leave empty if authentik should not handle the deployment. */
  service_connection?: InputMaybe<Scalars['UUID']['input']>;
  config: Scalars['JSON']['input'];
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type outposts_instances_update_response = Outpost | ValidationError | GenericError;

export type outposts_instances_partial_update_response = Outpost | ValidationError | GenericError;

/** Outpost Serializer */
export type PatchedOutpostRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  type?: InputMaybe<OutpostTypeEnum>;
  providers?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** Select Service-Connection authentik should use to manage this outpost. Leave empty if authentik should not handle the deployment. */
  service_connection?: InputMaybe<Scalars['UUID']['input']>;
  config?: InputMaybe<Scalars['JSON']['input']>;
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type outposts_instances_destroy_response = Void_container | ValidationError | GenericError;

export type outposts_service_connections_all_destroy_response = Void_container | ValidationError | GenericError;

export type outposts_service_connections_docker_create_response = DockerServiceConnection | ValidationError | GenericError;

/** DockerServiceConnection Serializer */
export type DockerServiceConnectionRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  /** If enabled, use the local connection. Required Docker socket/Kubernetes Integration */
  local?: InputMaybe<Scalars['Boolean']['input']>;
  /** Can be in the format of 'unix://<path>' when connecting to a local docker daemon, or 'https://<hostname>:2376' when connecting to a remote system. */
  url: Scalars['NonEmptyString']['input'];
  /** CA which the endpoint's Certificate is verified against. Can be left empty for no validation. */
  tls_verification?: InputMaybe<Scalars['UUID']['input']>;
  /** Certificate/Key used for authentication. Can be left empty for no authentication. */
  tls_authentication?: InputMaybe<Scalars['UUID']['input']>;
};

export type outposts_service_connections_docker_update_response = DockerServiceConnection | ValidationError | GenericError;

export type outposts_service_connections_docker_partial_update_response = DockerServiceConnection | ValidationError | GenericError;

/** DockerServiceConnection Serializer */
export type PatchedDockerServiceConnectionRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** If enabled, use the local connection. Required Docker socket/Kubernetes Integration */
  local?: InputMaybe<Scalars['Boolean']['input']>;
  /** Can be in the format of 'unix://<path>' when connecting to a local docker daemon, or 'https://<hostname>:2376' when connecting to a remote system. */
  url?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** CA which the endpoint's Certificate is verified against. Can be left empty for no validation. */
  tls_verification?: InputMaybe<Scalars['UUID']['input']>;
  /** Certificate/Key used for authentication. Can be left empty for no authentication. */
  tls_authentication?: InputMaybe<Scalars['UUID']['input']>;
};

export type outposts_service_connections_docker_destroy_response = Void_container | ValidationError | GenericError;

export type outposts_service_connections_kubernetes_create_response = KubernetesServiceConnection | ValidationError | GenericError;

/** KubernetesServiceConnection Serializer */
export type KubernetesServiceConnectionRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  /** If enabled, use the local connection. Required Docker socket/Kubernetes Integration */
  local?: InputMaybe<Scalars['Boolean']['input']>;
  /** Paste your kubeconfig here. authentik will automatically use the currently selected context. */
  kubeconfig?: InputMaybe<Scalars['JSON']['input']>;
  /** Verify SSL Certificates of the Kubernetes API endpoint */
  verify_ssl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type outposts_service_connections_kubernetes_update_response = KubernetesServiceConnection | ValidationError | GenericError;

export type outposts_service_connections_kubernetes_partial_update_response = KubernetesServiceConnection | ValidationError | GenericError;

/** KubernetesServiceConnection Serializer */
export type PatchedKubernetesServiceConnectionRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** If enabled, use the local connection. Required Docker socket/Kubernetes Integration */
  local?: InputMaybe<Scalars['Boolean']['input']>;
  /** Paste your kubeconfig here. authentik will automatically use the currently selected context. */
  kubeconfig?: InputMaybe<Scalars['JSON']['input']>;
  /** Verify SSL Certificates of the Kubernetes API endpoint */
  verify_ssl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type outposts_service_connections_kubernetes_destroy_response = Void_container | ValidationError | GenericError;

export type policies_all_destroy_response = Void_container | ValidationError | GenericError;

export type policies_all_test_create_response = PolicyTestResult | GenericError;

/** Test policy execution for a user with context */
export type PolicyTestRequest_Input = {
  user: Scalars['Int']['input'];
  context?: InputMaybe<Scalars['JSON']['input']>;
};

export type policies_all_cache_clear_create_response = Void_container | GenericError;

export type policies_bindings_create_response = PolicyBinding | ValidationError | GenericError;

/** PolicyBinding Serializer */
export type PolicyBindingRequest_Input = {
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
  failure_result?: InputMaybe<Scalars['Boolean']['input']>;
};

export type policies_bindings_update_response = PolicyBinding | ValidationError | GenericError;

export type policies_bindings_partial_update_response = PolicyBinding | ValidationError | GenericError;

/** PolicyBinding Serializer */
export type PatchedPolicyBindingRequest_Input = {
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
  failure_result?: InputMaybe<Scalars['Boolean']['input']>;
};

export type policies_bindings_destroy_response = Void_container | ValidationError | GenericError;

export type policies_dummy_create_response = DummyPolicy | ValidationError | GenericError;

/** Dummy Policy Serializer */
export type DummyPolicyRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  /** When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged. */
  execution_logging?: InputMaybe<Scalars['Boolean']['input']>;
  result?: InputMaybe<Scalars['Boolean']['input']>;
  wait_min?: InputMaybe<Scalars['Int']['input']>;
  wait_max?: InputMaybe<Scalars['Int']['input']>;
};

export type policies_dummy_update_response = DummyPolicy | ValidationError | GenericError;

export type policies_dummy_partial_update_response = DummyPolicy | ValidationError | GenericError;

/** Dummy Policy Serializer */
export type PatchedDummyPolicyRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged. */
  execution_logging?: InputMaybe<Scalars['Boolean']['input']>;
  result?: InputMaybe<Scalars['Boolean']['input']>;
  wait_min?: InputMaybe<Scalars['Int']['input']>;
  wait_max?: InputMaybe<Scalars['Int']['input']>;
};

export type policies_dummy_destroy_response = Void_container | ValidationError | GenericError;

export type policies_event_matcher_create_response = EventMatcherPolicy | ValidationError | GenericError;

/** Event Matcher Policy Serializer */
export type EventMatcherPolicyRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  /** When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged. */
  execution_logging?: InputMaybe<Scalars['Boolean']['input']>;
  action?: InputMaybe<EventActions>;
  /** Matches Event's Client IP (strict matching, for network matching use an Expression Policy) */
  client_ip?: InputMaybe<Scalars['NonEmptyString']['input']>;
  app?: InputMaybe<AppEnum>;
  model?: InputMaybe<ModelEnum>;
};

export type policies_event_matcher_update_response = EventMatcherPolicy | ValidationError | GenericError;

export type policies_event_matcher_partial_update_response = EventMatcherPolicy | ValidationError | GenericError;

/** Event Matcher Policy Serializer */
export type PatchedEventMatcherPolicyRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged. */
  execution_logging?: InputMaybe<Scalars['Boolean']['input']>;
  action?: InputMaybe<EventActions>;
  /** Matches Event's Client IP (strict matching, for network matching use an Expression Policy) */
  client_ip?: InputMaybe<Scalars['NonEmptyString']['input']>;
  app?: InputMaybe<AppEnum>;
  model?: InputMaybe<ModelEnum>;
};

export type policies_event_matcher_destroy_response = Void_container | ValidationError | GenericError;

export type policies_expression_create_response = ExpressionPolicy | ValidationError | GenericError;

/** Group Membership Policy Serializer */
export type ExpressionPolicyRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  /** When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged. */
  execution_logging?: InputMaybe<Scalars['Boolean']['input']>;
  expression: Scalars['NonEmptyString']['input'];
};

export type policies_expression_update_response = ExpressionPolicy | ValidationError | GenericError;

export type policies_expression_partial_update_response = ExpressionPolicy | ValidationError | GenericError;

/** Group Membership Policy Serializer */
export type PatchedExpressionPolicyRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged. */
  execution_logging?: InputMaybe<Scalars['Boolean']['input']>;
  expression?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type policies_expression_destroy_response = Void_container | ValidationError | GenericError;

export type policies_password_create_response = PasswordPolicy | ValidationError | GenericError;

/** Password Policy Serializer */
export type PasswordPolicyRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  /** When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged. */
  execution_logging?: InputMaybe<Scalars['Boolean']['input']>;
  /** Field key to check, field keys defined in Prompt stages are available. */
  password_field?: InputMaybe<Scalars['NonEmptyString']['input']>;
  amount_digits?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  amount_uppercase?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  amount_lowercase?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  amount_symbols?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  length_min?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  symbol_charset?: InputMaybe<Scalars['NonEmptyString']['input']>;
  error_message?: InputMaybe<Scalars['String']['input']>;
  check_static_rules?: InputMaybe<Scalars['Boolean']['input']>;
  check_have_i_been_pwned?: InputMaybe<Scalars['Boolean']['input']>;
  check_zxcvbn?: InputMaybe<Scalars['Boolean']['input']>;
  /** How many times the password hash is allowed to be on haveibeenpwned */
  hibp_allowed_count?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  /** If the zxcvbn score is equal or less than this value, the policy will fail. */
  zxcvbn_score_threshold?: InputMaybe<Scalars['NonNegativeInt']['input']>;
};

export type policies_password_update_response = PasswordPolicy | ValidationError | GenericError;

export type policies_password_partial_update_response = PasswordPolicy | ValidationError | GenericError;

/** Password Policy Serializer */
export type PatchedPasswordPolicyRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged. */
  execution_logging?: InputMaybe<Scalars['Boolean']['input']>;
  /** Field key to check, field keys defined in Prompt stages are available. */
  password_field?: InputMaybe<Scalars['NonEmptyString']['input']>;
  amount_digits?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  amount_uppercase?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  amount_lowercase?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  amount_symbols?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  length_min?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  symbol_charset?: InputMaybe<Scalars['NonEmptyString']['input']>;
  error_message?: InputMaybe<Scalars['String']['input']>;
  check_static_rules?: InputMaybe<Scalars['Boolean']['input']>;
  check_have_i_been_pwned?: InputMaybe<Scalars['Boolean']['input']>;
  check_zxcvbn?: InputMaybe<Scalars['Boolean']['input']>;
  /** How many times the password hash is allowed to be on haveibeenpwned */
  hibp_allowed_count?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  /** If the zxcvbn score is equal or less than this value, the policy will fail. */
  zxcvbn_score_threshold?: InputMaybe<Scalars['NonNegativeInt']['input']>;
};

export type policies_password_destroy_response = Void_container | ValidationError | GenericError;

export type policies_password_expiry_create_response = PasswordExpiryPolicy | ValidationError | GenericError;

/** Password Expiry Policy Serializer */
export type PasswordExpiryPolicyRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  /** When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged. */
  execution_logging?: InputMaybe<Scalars['Boolean']['input']>;
  days: Scalars['Int']['input'];
  deny_only?: InputMaybe<Scalars['Boolean']['input']>;
};

export type policies_password_expiry_update_response = PasswordExpiryPolicy | ValidationError | GenericError;

export type policies_password_expiry_partial_update_response = PasswordExpiryPolicy | ValidationError | GenericError;

/** Password Expiry Policy Serializer */
export type PatchedPasswordExpiryPolicyRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged. */
  execution_logging?: InputMaybe<Scalars['Boolean']['input']>;
  days?: InputMaybe<Scalars['Int']['input']>;
  deny_only?: InputMaybe<Scalars['Boolean']['input']>;
};

export type policies_password_expiry_destroy_response = Void_container | ValidationError | GenericError;

export type policies_reputation_create_response = ReputationPolicy | ValidationError | GenericError;

/** Reputation Policy Serializer */
export type ReputationPolicyRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  /** When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged. */
  execution_logging?: InputMaybe<Scalars['Boolean']['input']>;
  check_ip?: InputMaybe<Scalars['Boolean']['input']>;
  check_username?: InputMaybe<Scalars['Boolean']['input']>;
  threshold?: InputMaybe<Scalars['Int']['input']>;
};

export type policies_reputation_update_response = ReputationPolicy | ValidationError | GenericError;

export type policies_reputation_partial_update_response = ReputationPolicy | ValidationError | GenericError;

/** Reputation Policy Serializer */
export type PatchedReputationPolicyRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged. */
  execution_logging?: InputMaybe<Scalars['Boolean']['input']>;
  check_ip?: InputMaybe<Scalars['Boolean']['input']>;
  check_username?: InputMaybe<Scalars['Boolean']['input']>;
  threshold?: InputMaybe<Scalars['Int']['input']>;
};

export type policies_reputation_destroy_response = Void_container | ValidationError | GenericError;

export type policies_reputation_scores_destroy_response = Void_container | ValidationError | GenericError;

export type propertymappings_all_destroy_response = Void_container | ValidationError | GenericError;

export type propertymappings_all_test_create_response = PropertyMappingTestResult | GenericError;

/** Result of a Property-mapping test */
export type PropertyMappingTestResult = {
  result: Scalars['String']['output'];
  successful: Scalars['Boolean']['output'];
};

export type propertymappings_ldap_create_response = LDAPPropertyMapping | ValidationError | GenericError;

/** LDAP PropertyMapping Serializer */
export type LDAPPropertyMappingRequest_Input = {
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: InputMaybe<Scalars['NonEmptyString']['input']>;
  name: Scalars['NonEmptyString']['input'];
  expression: Scalars['NonEmptyString']['input'];
  object_field: Scalars['NonEmptyString']['input'];
};

export type propertymappings_ldap_update_response = LDAPPropertyMapping | ValidationError | GenericError;

export type propertymappings_ldap_partial_update_response = LDAPPropertyMapping | ValidationError | GenericError;

/** LDAP PropertyMapping Serializer */
export type PatchedLDAPPropertyMappingRequest_Input = {
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: InputMaybe<Scalars['NonEmptyString']['input']>;
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  expression?: InputMaybe<Scalars['NonEmptyString']['input']>;
  object_field?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type propertymappings_ldap_destroy_response = Void_container | ValidationError | GenericError;

export type propertymappings_notification_create_response = NotificationWebhookMapping | ValidationError | GenericError;

/** NotificationWebhookMapping Serializer */
export type NotificationWebhookMappingRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  expression: Scalars['NonEmptyString']['input'];
};

export type propertymappings_notification_update_response = NotificationWebhookMapping | ValidationError | GenericError;

export type propertymappings_notification_partial_update_response = NotificationWebhookMapping | ValidationError | GenericError;

/** NotificationWebhookMapping Serializer */
export type PatchedNotificationWebhookMappingRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  expression?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type propertymappings_notification_destroy_response = Void_container | ValidationError | GenericError;

export type propertymappings_rac_create_response = RACPropertyMapping | ValidationError | GenericError;

/** RACPropertyMapping Serializer */
export type RACPropertyMappingRequest_Input = {
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: InputMaybe<Scalars['NonEmptyString']['input']>;
  name: Scalars['NonEmptyString']['input'];
  expression?: InputMaybe<Scalars['String']['input']>;
  static_settings: Scalars['JSON']['input'];
};

export type propertymappings_rac_update_response = RACPropertyMapping | ValidationError | GenericError;

export type propertymappings_rac_partial_update_response = RACPropertyMapping | ValidationError | GenericError;

/** RACPropertyMapping Serializer */
export type PatchedRACPropertyMappingRequest_Input = {
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: InputMaybe<Scalars['NonEmptyString']['input']>;
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  expression?: InputMaybe<Scalars['String']['input']>;
  static_settings?: InputMaybe<Scalars['JSON']['input']>;
};

export type propertymappings_rac_destroy_response = Void_container | ValidationError | GenericError;

export type propertymappings_saml_create_response = SAMLPropertyMapping | ValidationError | GenericError;

/** SAMLPropertyMapping Serializer */
export type SAMLPropertyMappingRequest_Input = {
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: InputMaybe<Scalars['NonEmptyString']['input']>;
  name: Scalars['NonEmptyString']['input'];
  expression: Scalars['NonEmptyString']['input'];
  saml_name: Scalars['NonEmptyString']['input'];
  friendly_name?: InputMaybe<Scalars['String']['input']>;
};

export type propertymappings_saml_update_response = SAMLPropertyMapping | ValidationError | GenericError;

export type propertymappings_saml_partial_update_response = SAMLPropertyMapping | ValidationError | GenericError;

/** SAMLPropertyMapping Serializer */
export type PatchedSAMLPropertyMappingRequest_Input = {
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: InputMaybe<Scalars['NonEmptyString']['input']>;
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  expression?: InputMaybe<Scalars['NonEmptyString']['input']>;
  saml_name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  friendly_name?: InputMaybe<Scalars['String']['input']>;
};

export type propertymappings_saml_destroy_response = Void_container | ValidationError | GenericError;

export type propertymappings_scim_create_response = SCIMMapping | ValidationError | GenericError;

/** SCIMMapping Serializer */
export type SCIMMappingRequest_Input = {
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: InputMaybe<Scalars['NonEmptyString']['input']>;
  name: Scalars['NonEmptyString']['input'];
  expression: Scalars['NonEmptyString']['input'];
};

export type propertymappings_scim_update_response = SCIMMapping | ValidationError | GenericError;

export type propertymappings_scim_partial_update_response = SCIMMapping | ValidationError | GenericError;

/** SCIMMapping Serializer */
export type PatchedSCIMMappingRequest_Input = {
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: InputMaybe<Scalars['NonEmptyString']['input']>;
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  expression?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type propertymappings_scim_destroy_response = Void_container | ValidationError | GenericError;

export type propertymappings_scope_create_response = ScopeMapping | ValidationError | GenericError;

/** ScopeMapping Serializer */
export type ScopeMappingRequest_Input = {
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: InputMaybe<Scalars['NonEmptyString']['input']>;
  name: Scalars['NonEmptyString']['input'];
  expression: Scalars['NonEmptyString']['input'];
  /** Scope name requested by the client */
  scope_name: Scalars['NonEmptyString']['input'];
  /** Description shown to the user when consenting. If left empty, the user won't be informed. */
  description?: InputMaybe<Scalars['String']['input']>;
};

export type propertymappings_scope_update_response = ScopeMapping | ValidationError | GenericError;

export type propertymappings_scope_partial_update_response = ScopeMapping | ValidationError | GenericError;

/** ScopeMapping Serializer */
export type PatchedScopeMappingRequest_Input = {
  /** Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update. */
  managed?: InputMaybe<Scalars['NonEmptyString']['input']>;
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  expression?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Scope name requested by the client */
  scope_name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Description shown to the user when consenting. If left empty, the user won't be informed. */
  description?: InputMaybe<Scalars['String']['input']>;
};

export type propertymappings_scope_destroy_response = Void_container | ValidationError | GenericError;

export type providers_all_destroy_response = Void_container | ValidationError | GenericError;

export type providers_ldap_create_response = LDAPProvider | ValidationError | GenericError;

export type providers_ldap_update_response = LDAPProvider | ValidationError | GenericError;

export type providers_ldap_partial_update_response = LDAPProvider | ValidationError | GenericError;

/** LDAPProvider Serializer */
export type PatchedLDAPProviderRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Flow used for authentication when the associated application is accessed by an un-authenticated user. */
  authentication_flow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow used when authorizing this provider. */
  authorization_flow?: InputMaybe<Scalars['UUID']['input']>;
  property_mappings?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** DN under which objects are accessible. */
  base_dn?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Users in this group can do search queries. If not set, every user can execute search queries. */
  search_group?: InputMaybe<Scalars['UUID']['input']>;
  certificate?: InputMaybe<Scalars['UUID']['input']>;
  tls_server_name?: InputMaybe<Scalars['String']['input']>;
  /** The start for uidNumbers, this number is added to the user.pk to make sure that the numbers aren't too low for POSIX users. Default is 2000 to ensure that we don't collide with local users uidNumber */
  uid_start_number?: InputMaybe<Scalars['Int']['input']>;
  /** The start for gidNumbers, this number is added to a number generated from the group.pk to make sure that the numbers aren't too low for POSIX groups. Default is 4000 to ensure that we don't collide with local groups or users primary groups gidNumber */
  gid_start_number?: InputMaybe<Scalars['Int']['input']>;
  search_mode?: InputMaybe<LDAPAPIAccessMode>;
  bind_mode?: InputMaybe<LDAPAPIAccessMode>;
  /** When enabled, code-based multi-factor authentication can be used by appending a semicolon and the TOTP code to the password. This should only be enabled if all users that will bind to this provider have a TOTP device configured, as otherwise a password may incorrectly be rejected if it contains a semicolon. */
  mfa_support?: InputMaybe<Scalars['Boolean']['input']>;
};

export type providers_ldap_destroy_response = Void_container | ValidationError | GenericError;

export type providers_oauth2_create_response = OAuth2Provider | ValidationError | GenericError;

export type providers_oauth2_update_response = OAuth2Provider | ValidationError | GenericError;

export type providers_oauth2_partial_update_response = OAuth2Provider | ValidationError | GenericError;

/** OAuth2Provider Serializer */
export type PatchedOAuth2ProviderRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Flow used for authentication when the associated application is accessed by an un-authenticated user. */
  authentication_flow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow used when authorizing this provider. */
  authorization_flow?: InputMaybe<Scalars['UUID']['input']>;
  property_mappings?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  client_type?: InputMaybe<ClientTypeEnum>;
  client_id?: InputMaybe<Scalars['mutationInput_providers_oauth2_partial_update_input_client_id']['input']>;
  client_secret?: InputMaybe<Scalars['mutationInput_providers_oauth2_partial_update_input_client_secret']['input']>;
  /** Access codes not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  access_code_validity?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Tokens not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  access_token_validity?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Tokens not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  refresh_token_validity?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Include User claims from scopes in the id_token, for applications that don't access the userinfo endpoint. */
  include_claims_in_id_token?: InputMaybe<Scalars['Boolean']['input']>;
  /** Key used to sign the tokens. Only required when JWT Algorithm is set to RS256. */
  signing_key?: InputMaybe<Scalars['UUID']['input']>;
  /** Enter each URI on a new line. */
  redirect_uris?: InputMaybe<Scalars['String']['input']>;
  sub_mode?: InputMaybe<SubModeEnum>;
  issuer_mode?: InputMaybe<IssuerModeEnum>;
  jwks_sources?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
};

export type providers_oauth2_destroy_response = Void_container | ValidationError | GenericError;

export type providers_proxy_create_response = ProxyProvider | ValidationError | GenericError;

export type providers_proxy_update_response = ProxyProvider | ValidationError | GenericError;

export type providers_proxy_partial_update_response = ProxyProvider | ValidationError | GenericError;

/** ProxyProvider Serializer */
export type PatchedProxyProviderRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Flow used for authentication when the associated application is accessed by an un-authenticated user. */
  authentication_flow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow used when authorizing this provider. */
  authorization_flow?: InputMaybe<Scalars['UUID']['input']>;
  property_mappings?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  internal_host?: InputMaybe<Scalars['URL']['input']>;
  external_host?: InputMaybe<Scalars['URL']['input']>;
  /** Validate SSL Certificates of upstream servers */
  internal_host_ssl_validation?: InputMaybe<Scalars['Boolean']['input']>;
  certificate?: InputMaybe<Scalars['UUID']['input']>;
  /** Regular expressions for which authentication is not required. Each new line is interpreted as a new Regular Expression. */
  skip_path_regex?: InputMaybe<Scalars['String']['input']>;
  /** Set a custom HTTP-Basic Authentication header based on values from authentik. */
  basic_auth_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** User/Group Attribute used for the password part of the HTTP-Basic Header. */
  basic_auth_password_attribute?: InputMaybe<Scalars['String']['input']>;
  /** User/Group Attribute used for the user part of the HTTP-Basic Header. If not set, the user's Email address is used. */
  basic_auth_user_attribute?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<ProxyMode>;
  /** When enabled, this provider will intercept the authorization header and authenticate requests based on its value. */
  intercept_header_auth?: InputMaybe<Scalars['Boolean']['input']>;
  cookie_domain?: InputMaybe<Scalars['String']['input']>;
  jwks_sources?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** Tokens not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  access_token_validity?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Tokens not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  refresh_token_validity?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type providers_proxy_destroy_response = Void_container | ValidationError | GenericError;

export type providers_rac_create_response = RACProvider | ValidationError | GenericError;

export type providers_rac_update_response = RACProvider | ValidationError | GenericError;

export type providers_rac_partial_update_response = RACProvider | ValidationError | GenericError;

/** RACProvider Serializer */
export type PatchedRACProviderRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Flow used for authentication when the associated application is accessed by an un-authenticated user. */
  authentication_flow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow used when authorizing this provider. */
  authorization_flow?: InputMaybe<Scalars['UUID']['input']>;
  property_mappings?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  settings?: InputMaybe<Scalars['JSON']['input']>;
  /** Determines how long a session lasts. Default of 0 means that the sessions lasts until the browser is closed. (Format: hours=-1;minutes=-2;seconds=-3) */
  connection_expiry?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** When set to true, connection tokens will be deleted upon disconnect. */
  delete_token_on_disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type providers_rac_destroy_response = Void_container | ValidationError | GenericError;

export type providers_radius_create_response = RadiusProvider | ValidationError | GenericError;

export type providers_radius_update_response = RadiusProvider | ValidationError | GenericError;

export type providers_radius_partial_update_response = RadiusProvider | ValidationError | GenericError;

/** RadiusProvider Serializer */
export type PatchedRadiusProviderRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Flow used for authentication when the associated application is accessed by an un-authenticated user. */
  authentication_flow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow used when authorizing this provider. */
  authorization_flow?: InputMaybe<Scalars['UUID']['input']>;
  property_mappings?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** List of CIDRs (comma-separated) that clients can connect from. A more specific CIDR will match before a looser one. Clients connecting from a non-specified CIDR will be dropped. */
  client_networks?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Shared secret between clients and server to hash packets. */
  shared_secret?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** When enabled, code-based multi-factor authentication can be used by appending a semicolon and the TOTP code to the password. This should only be enabled if all users that will bind to this provider have a TOTP device configured, as otherwise a password may incorrectly be rejected if it contains a semicolon. */
  mfa_support?: InputMaybe<Scalars['Boolean']['input']>;
};

export type providers_radius_destroy_response = Void_container | ValidationError | GenericError;

export type providers_saml_create_response = SAMLProvider | ValidationError | GenericError;

export type providers_saml_update_response = SAMLProvider | ValidationError | GenericError;

export type providers_saml_partial_update_response = SAMLProvider | ValidationError | GenericError;

/** SAMLProvider Serializer */
export type PatchedSAMLProviderRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Flow used for authentication when the associated application is accessed by an un-authenticated user. */
  authentication_flow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow used when authorizing this provider. */
  authorization_flow?: InputMaybe<Scalars['UUID']['input']>;
  property_mappings?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  acs_url?: InputMaybe<Scalars['URL']['input']>;
  /** Value of the audience restriction field of the assertion. When left empty, no audience restriction will be added. */
  audience?: InputMaybe<Scalars['String']['input']>;
  /** Also known as EntityID */
  issuer?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Assertion valid not before current time + this value (Format: hours=-1;minutes=-2;seconds=-3). */
  assertion_valid_not_before?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Assertion not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  assertion_valid_not_on_or_after?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Session not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3). */
  session_valid_not_on_or_after?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Configure how the NameID value will be created. When left empty, the NameIDPolicy of the incoming request will be considered */
  name_id_mapping?: InputMaybe<Scalars['UUID']['input']>;
  digest_algorithm?: InputMaybe<DigestAlgorithmEnum>;
  signature_algorithm?: InputMaybe<SignatureAlgorithmEnum>;
  /** Keypair used to sign outgoing Responses going to the Service Provider. */
  signing_kp?: InputMaybe<Scalars['UUID']['input']>;
  /** When selected, incoming assertion's Signatures will be validated against this certificate. To allow unsigned Requests, leave on default. */
  verification_kp?: InputMaybe<Scalars['UUID']['input']>;
  /** This determines how authentik sends the response back to the Service Provider. */
  sp_binding?: InputMaybe<Scalars['JSON']['input']>;
  /** Default relay_state value for IDP-initiated logins */
  default_relay_state?: InputMaybe<Scalars['String']['input']>;
};

export type providers_saml_destroy_response = Void_container | ValidationError | GenericError;

export type providers_saml_import_metadata_create_response = Void_container | GenericError;

/** Import saml provider from XML Metadata */
export type SAMLProviderImportRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  authorization_flow: Scalars['UUID']['input'];
  file: Scalars['File']['input'];
};

export type providers_scim_create_response = SCIMProvider | ValidationError | GenericError;

export type providers_scim_update_response = SCIMProvider | ValidationError | GenericError;

export type providers_scim_partial_update_response = SCIMProvider | ValidationError | GenericError;

/** SCIMProvider Serializer */
export type PatchedSCIMProviderRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  property_mappings?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** Property mappings used for group creation/updating. */
  property_mappings_group?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** Base URL to SCIM requests, usually ends in /v2 */
  url?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Authentication token */
  token?: InputMaybe<Scalars['NonEmptyString']['input']>;
  exclude_users_service_account?: InputMaybe<Scalars['Boolean']['input']>;
  filter_group?: InputMaybe<Scalars['UUID']['input']>;
};

export type providers_scim_destroy_response = Void_container | ValidationError | GenericError;

export type rac_connection_tokens_update_response = ConnectionToken | ValidationError | GenericError;

/** ConnectionToken Serializer */
export type ConnectionTokenRequest_Input = {
  pk?: InputMaybe<Scalars['UUID']['input']>;
  provider: Scalars['Int']['input'];
  endpoint: Scalars['UUID']['input'];
};

export type rac_connection_tokens_partial_update_response = ConnectionToken | ValidationError | GenericError;

/** ConnectionToken Serializer */
export type PatchedConnectionTokenRequest_Input = {
  pk?: InputMaybe<Scalars['UUID']['input']>;
  provider?: InputMaybe<Scalars['Int']['input']>;
  endpoint?: InputMaybe<Scalars['UUID']['input']>;
};

export type rac_connection_tokens_destroy_response = Void_container | ValidationError | GenericError;

export type rac_endpoints_create_response = Endpoint | ValidationError | GenericError;

/** Endpoint Serializer */
export type EndpointRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  provider: Scalars['Int']['input'];
  protocol: ProtocolEnum;
  host: Scalars['NonEmptyString']['input'];
  settings?: InputMaybe<Scalars['JSON']['input']>;
  property_mappings?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  auth_mode: AuthModeEnum;
  maximum_connections?: InputMaybe<Scalars['Int']['input']>;
};

export type rac_endpoints_update_response = Endpoint | ValidationError | GenericError;

export type rac_endpoints_partial_update_response = Endpoint | ValidationError | GenericError;

/** Endpoint Serializer */
export type PatchedEndpointRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  provider?: InputMaybe<Scalars['Int']['input']>;
  protocol?: InputMaybe<ProtocolEnum>;
  host?: InputMaybe<Scalars['NonEmptyString']['input']>;
  settings?: InputMaybe<Scalars['JSON']['input']>;
  property_mappings?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  auth_mode?: InputMaybe<AuthModeEnum>;
  maximum_connections?: InputMaybe<Scalars['Int']['input']>;
};

export type rac_endpoints_destroy_response = Void_container | ValidationError | GenericError;

export type rbac_permissions_assigned_by_roles_assign_create_response = Void_container | ValidationError | GenericError;

/** Request to assign a new permission */
export type PermissionAssignRequest_Input = {
  permissions: Array<InputMaybe<Scalars['NonEmptyString']['input']>>;
  model?: InputMaybe<ModelEnum>;
  object_pk?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type rbac_permissions_assigned_by_roles_unassign_partial_update_response = Void_container | ValidationError | GenericError;

/** Request to assign a new permission */
export type PatchedPermissionAssignRequest_Input = {
  permissions?: InputMaybe<Array<InputMaybe<Scalars['NonEmptyString']['input']>>>;
  model?: InputMaybe<ModelEnum>;
  object_pk?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type rbac_permissions_assigned_by_users_assign_create_response = Void_container | ValidationError | GenericError;

export type rbac_permissions_assigned_by_users_unassign_partial_update_response = Void_container | ValidationError | GenericError;

export type rbac_roles_create_response = Role | ValidationError | GenericError;

/** Role serializer */
export type RoleRequest_Input = {
  name: Scalars['mutationInput_rbac_roles_create_input_name']['input'];
};

export type rbac_roles_update_response = Role | ValidationError | GenericError;

export type rbac_roles_partial_update_response = Role | ValidationError | GenericError;

/** Role serializer */
export type PatchedRoleRequest_Input = {
  name?: InputMaybe<Scalars['mutationInput_rbac_roles_partial_update_input_name']['input']>;
};

export type rbac_roles_destroy_response = Void_container | ValidationError | GenericError;

export type sources_all_destroy_response = Void_container | ValidationError | GenericError;

export type sources_ldap_create_response = LDAPSource | ValidationError | GenericError;

/** LDAP Source Serializer */
export type LDAPSourceRequest_Input = {
  /** Source's display Name. */
  name: Scalars['NonEmptyString']['input'];
  slug: Scalars['mutationInput_sources_ldap_create_input_slug']['input'];
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Flow to use when authenticating existing users. */
  authentication_flow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow to use when enrolling new users. */
  enrollment_flow?: InputMaybe<Scalars['UUID']['input']>;
  policy_engine_mode?: InputMaybe<PolicyEngineMode>;
  user_matching_mode?: InputMaybe<UserMatchingModeEnum>;
  user_path_template?: InputMaybe<Scalars['NonEmptyString']['input']>;
  server_uri: Scalars['URL']['input'];
  /** Optionally verify the LDAP Server's Certificate against the CA Chain in this keypair. */
  peer_certificate?: InputMaybe<Scalars['UUID']['input']>;
  /** Client certificate to authenticate against the LDAP Server's Certificate. */
  client_certificate?: InputMaybe<Scalars['UUID']['input']>;
  bind_cn?: InputMaybe<Scalars['String']['input']>;
  bind_password?: InputMaybe<Scalars['String']['input']>;
  start_tls?: InputMaybe<Scalars['Boolean']['input']>;
  sni?: InputMaybe<Scalars['Boolean']['input']>;
  base_dn: Scalars['NonEmptyString']['input'];
  /** Prepended to Base DN for User-queries. */
  additional_user_dn?: InputMaybe<Scalars['String']['input']>;
  /** Prepended to Base DN for Group-queries. */
  additional_group_dn?: InputMaybe<Scalars['String']['input']>;
  /** Consider Objects matching this filter to be Users. */
  user_object_filter?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Consider Objects matching this filter to be Groups. */
  group_object_filter?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Field which contains members of a group. */
  group_membership_field?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Field which contains a unique Identifier. */
  object_uniqueness_field?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Update internal authentik password when login succeeds with LDAP */
  password_login_update_internal_password?: InputMaybe<Scalars['Boolean']['input']>;
  sync_users?: InputMaybe<Scalars['Boolean']['input']>;
  /** When a user changes their password, sync it back to LDAP. This can only be enabled on a single LDAP source. */
  sync_users_password?: InputMaybe<Scalars['Boolean']['input']>;
  sync_groups?: InputMaybe<Scalars['Boolean']['input']>;
  sync_parent_group?: InputMaybe<Scalars['UUID']['input']>;
  property_mappings?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** Property mappings used for group creation/updating. */
  property_mappings_group?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
};

export type sources_ldap_update_response = LDAPSource | ValidationError | GenericError;

export type sources_ldap_partial_update_response = LDAPSource | ValidationError | GenericError;

/** LDAP Source Serializer */
export type PatchedLDAPSourceRequest_Input = {
  /** Source's display Name. */
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  slug?: InputMaybe<Scalars['mutationInput_sources_ldap_partial_update_input_slug']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Flow to use when authenticating existing users. */
  authentication_flow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow to use when enrolling new users. */
  enrollment_flow?: InputMaybe<Scalars['UUID']['input']>;
  policy_engine_mode?: InputMaybe<PolicyEngineMode>;
  user_matching_mode?: InputMaybe<UserMatchingModeEnum>;
  user_path_template?: InputMaybe<Scalars['NonEmptyString']['input']>;
  server_uri?: InputMaybe<Scalars['URL']['input']>;
  /** Optionally verify the LDAP Server's Certificate against the CA Chain in this keypair. */
  peer_certificate?: InputMaybe<Scalars['UUID']['input']>;
  /** Client certificate to authenticate against the LDAP Server's Certificate. */
  client_certificate?: InputMaybe<Scalars['UUID']['input']>;
  bind_cn?: InputMaybe<Scalars['String']['input']>;
  bind_password?: InputMaybe<Scalars['String']['input']>;
  start_tls?: InputMaybe<Scalars['Boolean']['input']>;
  sni?: InputMaybe<Scalars['Boolean']['input']>;
  base_dn?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Prepended to Base DN for User-queries. */
  additional_user_dn?: InputMaybe<Scalars['String']['input']>;
  /** Prepended to Base DN for Group-queries. */
  additional_group_dn?: InputMaybe<Scalars['String']['input']>;
  /** Consider Objects matching this filter to be Users. */
  user_object_filter?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Consider Objects matching this filter to be Groups. */
  group_object_filter?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Field which contains members of a group. */
  group_membership_field?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Field which contains a unique Identifier. */
  object_uniqueness_field?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Update internal authentik password when login succeeds with LDAP */
  password_login_update_internal_password?: InputMaybe<Scalars['Boolean']['input']>;
  sync_users?: InputMaybe<Scalars['Boolean']['input']>;
  /** When a user changes their password, sync it back to LDAP. This can only be enabled on a single LDAP source. */
  sync_users_password?: InputMaybe<Scalars['Boolean']['input']>;
  sync_groups?: InputMaybe<Scalars['Boolean']['input']>;
  sync_parent_group?: InputMaybe<Scalars['UUID']['input']>;
  property_mappings?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** Property mappings used for group creation/updating. */
  property_mappings_group?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
};

export type sources_ldap_destroy_response = Void_container | ValidationError | GenericError;

export type sources_oauth_create_response = OAuthSource | ValidationError | GenericError;

/** OAuth Source Serializer */
export type OAuthSourceRequest_Input = {
  /** Source's display Name. */
  name: Scalars['NonEmptyString']['input'];
  slug: Scalars['mutationInput_sources_oauth_create_input_slug']['input'];
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Flow to use when authenticating existing users. */
  authentication_flow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow to use when enrolling new users. */
  enrollment_flow?: InputMaybe<Scalars['UUID']['input']>;
  policy_engine_mode?: InputMaybe<PolicyEngineMode>;
  user_matching_mode?: InputMaybe<UserMatchingModeEnum>;
  user_path_template?: InputMaybe<Scalars['NonEmptyString']['input']>;
  provider_type: ProviderTypeEnum;
  /** URL used to request the initial token. This URL is only required for OAuth 1. */
  request_token_url?: InputMaybe<Scalars['mutationInput_sources_oauth_create_input_request_token_url']['input']>;
  /** URL the user is redirect to to conest the flow. */
  authorization_url?: InputMaybe<Scalars['mutationInput_sources_oauth_create_input_authorization_url']['input']>;
  /** URL used by authentik to retrieve tokens. */
  access_token_url?: InputMaybe<Scalars['mutationInput_sources_oauth_create_input_access_token_url']['input']>;
  /** URL used by authentik to get user information. */
  profile_url?: InputMaybe<Scalars['mutationInput_sources_oauth_create_input_profile_url']['input']>;
  consumer_key: Scalars['NonEmptyString']['input'];
  consumer_secret: Scalars['NonEmptyString']['input'];
  additional_scopes?: InputMaybe<Scalars['String']['input']>;
  oidc_well_known_url?: InputMaybe<Scalars['String']['input']>;
  oidc_jwks_url?: InputMaybe<Scalars['String']['input']>;
  oidc_jwks?: InputMaybe<Scalars['JSON']['input']>;
};

export type sources_oauth_update_response = OAuthSource | ValidationError | GenericError;

export type sources_oauth_partial_update_response = OAuthSource | ValidationError | GenericError;

/** OAuth Source Serializer */
export type PatchedOAuthSourceRequest_Input = {
  /** Source's display Name. */
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  slug?: InputMaybe<Scalars['mutationInput_sources_oauth_partial_update_input_slug']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Flow to use when authenticating existing users. */
  authentication_flow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow to use when enrolling new users. */
  enrollment_flow?: InputMaybe<Scalars['UUID']['input']>;
  policy_engine_mode?: InputMaybe<PolicyEngineMode>;
  user_matching_mode?: InputMaybe<UserMatchingModeEnum>;
  user_path_template?: InputMaybe<Scalars['NonEmptyString']['input']>;
  provider_type?: InputMaybe<ProviderTypeEnum>;
  /** URL used to request the initial token. This URL is only required for OAuth 1. */
  request_token_url?: InputMaybe<Scalars['mutationInput_sources_oauth_partial_update_input_request_token_url']['input']>;
  /** URL the user is redirect to to conest the flow. */
  authorization_url?: InputMaybe<Scalars['mutationInput_sources_oauth_partial_update_input_authorization_url']['input']>;
  /** URL used by authentik to retrieve tokens. */
  access_token_url?: InputMaybe<Scalars['mutationInput_sources_oauth_partial_update_input_access_token_url']['input']>;
  /** URL used by authentik to get user information. */
  profile_url?: InputMaybe<Scalars['mutationInput_sources_oauth_partial_update_input_profile_url']['input']>;
  consumer_key?: InputMaybe<Scalars['NonEmptyString']['input']>;
  consumer_secret?: InputMaybe<Scalars['NonEmptyString']['input']>;
  additional_scopes?: InputMaybe<Scalars['String']['input']>;
  oidc_well_known_url?: InputMaybe<Scalars['String']['input']>;
  oidc_jwks_url?: InputMaybe<Scalars['String']['input']>;
  oidc_jwks?: InputMaybe<Scalars['JSON']['input']>;
};

export type sources_oauth_destroy_response = Void_container | ValidationError | GenericError;

export type sources_plex_create_response = PlexSource | ValidationError | GenericError;

/** Plex Source Serializer */
export type PlexSourceRequest_Input = {
  /** Source's display Name. */
  name: Scalars['NonEmptyString']['input'];
  slug: Scalars['mutationInput_sources_plex_create_input_slug']['input'];
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Flow to use when authenticating existing users. */
  authentication_flow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow to use when enrolling new users. */
  enrollment_flow?: InputMaybe<Scalars['UUID']['input']>;
  policy_engine_mode?: InputMaybe<PolicyEngineMode>;
  user_matching_mode?: InputMaybe<UserMatchingModeEnum>;
  user_path_template?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Client identifier used to talk to Plex. */
  client_id?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Which servers a user has to be a member of to be granted access. Empty list allows every server. */
  allowed_servers?: InputMaybe<Array<InputMaybe<Scalars['NonEmptyString']['input']>>>;
  /** Allow friends to authenticate, even if you don't share a server. */
  allow_friends?: InputMaybe<Scalars['Boolean']['input']>;
  /** Plex token used to check friends */
  plex_token: Scalars['NonEmptyString']['input'];
};

export type sources_plex_update_response = PlexSource | ValidationError | GenericError;

export type sources_plex_partial_update_response = PlexSource | ValidationError | GenericError;

/** Plex Source Serializer */
export type PatchedPlexSourceRequest_Input = {
  /** Source's display Name. */
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  slug?: InputMaybe<Scalars['mutationInput_sources_plex_partial_update_input_slug']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Flow to use when authenticating existing users. */
  authentication_flow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow to use when enrolling new users. */
  enrollment_flow?: InputMaybe<Scalars['UUID']['input']>;
  policy_engine_mode?: InputMaybe<PolicyEngineMode>;
  user_matching_mode?: InputMaybe<UserMatchingModeEnum>;
  user_path_template?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Client identifier used to talk to Plex. */
  client_id?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Which servers a user has to be a member of to be granted access. Empty list allows every server. */
  allowed_servers?: InputMaybe<Array<InputMaybe<Scalars['NonEmptyString']['input']>>>;
  /** Allow friends to authenticate, even if you don't share a server. */
  allow_friends?: InputMaybe<Scalars['Boolean']['input']>;
  /** Plex token used to check friends */
  plex_token?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type sources_plex_destroy_response = Void_container | ValidationError | GenericError;

/** Serializer to redeem a plex token */
export type PlexTokenRedeemRequest_Input = {
  plex_token: Scalars['NonEmptyString']['input'];
};

export type sources_saml_create_response = SAMLSource | ValidationError | GenericError;

/** SAMLSource Serializer */
export type SAMLSourceRequest_Input = {
  /** Source's display Name. */
  name: Scalars['NonEmptyString']['input'];
  slug: Scalars['mutationInput_sources_saml_create_input_slug']['input'];
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Flow to use when authenticating existing users. */
  authentication_flow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow to use when enrolling new users. */
  enrollment_flow?: InputMaybe<Scalars['UUID']['input']>;
  policy_engine_mode?: InputMaybe<PolicyEngineMode>;
  user_matching_mode?: InputMaybe<UserMatchingModeEnum>;
  user_path_template?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Flow used before authentication. */
  pre_authentication_flow: Scalars['UUID']['input'];
  /** Also known as Entity ID. Defaults the Metadata URL. */
  issuer?: InputMaybe<Scalars['String']['input']>;
  /** URL that the initial Login request is sent to. */
  sso_url: Scalars['URL']['input'];
  /** Optional URL if your IDP supports Single-Logout. */
  slo_url?: InputMaybe<Scalars['URL']['input']>;
  /** Allows authentication flows initiated by the IdP. This can be a security risk, as no validation of the request ID is done. */
  allow_idp_initiated?: InputMaybe<Scalars['Boolean']['input']>;
  name_id_policy?: InputMaybe<NameIdPolicyEnum>;
  binding_type?: InputMaybe<BindingTypeEnum>;
  /** When selected, incoming assertion's Signatures will be validated against this certificate. To allow unsigned Requests, leave on default. */
  verification_kp?: InputMaybe<Scalars['UUID']['input']>;
  /** Keypair used to sign outgoing Responses going to the Identity Provider. */
  signing_kp?: InputMaybe<Scalars['UUID']['input']>;
  digest_algorithm?: InputMaybe<DigestAlgorithmEnum>;
  signature_algorithm?: InputMaybe<SignatureAlgorithmEnum>;
  /** Time offset when temporary users should be deleted. This only applies if your IDP uses the NameID Format 'transient', and the user doesn't log out manually. (Format: hours=1;minutes=2;seconds=3). */
  temporary_user_delete_after?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type sources_saml_update_response = SAMLSource | ValidationError | GenericError;

export type sources_saml_partial_update_response = SAMLSource | ValidationError | GenericError;

/** SAMLSource Serializer */
export type PatchedSAMLSourceRequest_Input = {
  /** Source's display Name. */
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  slug?: InputMaybe<Scalars['mutationInput_sources_saml_partial_update_input_slug']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Flow to use when authenticating existing users. */
  authentication_flow?: InputMaybe<Scalars['UUID']['input']>;
  /** Flow to use when enrolling new users. */
  enrollment_flow?: InputMaybe<Scalars['UUID']['input']>;
  policy_engine_mode?: InputMaybe<PolicyEngineMode>;
  user_matching_mode?: InputMaybe<UserMatchingModeEnum>;
  user_path_template?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Flow used before authentication. */
  pre_authentication_flow?: InputMaybe<Scalars['UUID']['input']>;
  /** Also known as Entity ID. Defaults the Metadata URL. */
  issuer?: InputMaybe<Scalars['String']['input']>;
  /** URL that the initial Login request is sent to. */
  sso_url?: InputMaybe<Scalars['URL']['input']>;
  /** Optional URL if your IDP supports Single-Logout. */
  slo_url?: InputMaybe<Scalars['URL']['input']>;
  /** Allows authentication flows initiated by the IdP. This can be a security risk, as no validation of the request ID is done. */
  allow_idp_initiated?: InputMaybe<Scalars['Boolean']['input']>;
  name_id_policy?: InputMaybe<NameIdPolicyEnum>;
  binding_type?: InputMaybe<BindingTypeEnum>;
  /** When selected, incoming assertion's Signatures will be validated against this certificate. To allow unsigned Requests, leave on default. */
  verification_kp?: InputMaybe<Scalars['UUID']['input']>;
  /** Keypair used to sign outgoing Responses going to the Identity Provider. */
  signing_kp?: InputMaybe<Scalars['UUID']['input']>;
  digest_algorithm?: InputMaybe<DigestAlgorithmEnum>;
  signature_algorithm?: InputMaybe<SignatureAlgorithmEnum>;
  /** Time offset when temporary users should be deleted. This only applies if your IDP uses the NameID Format 'transient', and the user doesn't log out manually. (Format: hours=1;minutes=2;seconds=3). */
  temporary_user_delete_after?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type sources_saml_destroy_response = Void_container | ValidationError | GenericError;

export type sources_scim_create_response = SCIMSource | ValidationError | GenericError;

/** SCIMSource Serializer */
export type SCIMSourceRequest_Input = {
  /** Source's display Name. */
  name: Scalars['NonEmptyString']['input'];
  slug: Scalars['mutationInput_sources_scim_create_input_slug']['input'];
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  user_matching_mode?: InputMaybe<UserMatchingModeEnum>;
  user_path_template?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type sources_scim_update_response = SCIMSource | ValidationError | GenericError;

export type sources_scim_partial_update_response = SCIMSource | ValidationError | GenericError;

/** SCIMSource Serializer */
export type PatchedSCIMSourceRequest_Input = {
  /** Source's display Name. */
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  slug?: InputMaybe<Scalars['mutationInput_sources_scim_partial_update_input_slug']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  user_matching_mode?: InputMaybe<UserMatchingModeEnum>;
  user_path_template?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type sources_scim_destroy_response = Void_container | ValidationError | GenericError;

export type sources_scim_groups_create_response = SCIMSourceGroup | ValidationError | GenericError;

/** SCIMSourceGroup Serializer */
export type SCIMSourceGroupRequest_Input = {
  id: Scalars['NonEmptyString']['input'];
  group: Scalars['UUID']['input'];
  source: Scalars['UUID']['input'];
  attributes?: InputMaybe<Scalars['JSON']['input']>;
};

export type sources_scim_groups_update_response = SCIMSourceGroup | ValidationError | GenericError;

export type sources_scim_groups_partial_update_response = SCIMSourceGroup | ValidationError | GenericError;

/** SCIMSourceGroup Serializer */
export type PatchedSCIMSourceGroupRequest_Input = {
  id?: InputMaybe<Scalars['NonEmptyString']['input']>;
  group?: InputMaybe<Scalars['UUID']['input']>;
  source?: InputMaybe<Scalars['UUID']['input']>;
  attributes?: InputMaybe<Scalars['JSON']['input']>;
};

export type sources_scim_groups_destroy_response = Void_container | ValidationError | GenericError;

export type sources_scim_users_create_response = SCIMSourceUser | ValidationError | GenericError;

/** SCIMSourceUser Serializer */
export type SCIMSourceUserRequest_Input = {
  id: Scalars['NonEmptyString']['input'];
  user: Scalars['Int']['input'];
  source: Scalars['UUID']['input'];
  attributes?: InputMaybe<Scalars['JSON']['input']>;
};

export type sources_scim_users_update_response = SCIMSourceUser | ValidationError | GenericError;

export type sources_scim_users_partial_update_response = SCIMSourceUser | ValidationError | GenericError;

/** SCIMSourceUser Serializer */
export type PatchedSCIMSourceUserRequest_Input = {
  id?: InputMaybe<Scalars['NonEmptyString']['input']>;
  user?: InputMaybe<Scalars['Int']['input']>;
  source?: InputMaybe<Scalars['UUID']['input']>;
  attributes?: InputMaybe<Scalars['JSON']['input']>;
};

export type sources_scim_users_destroy_response = Void_container | ValidationError | GenericError;

export type sources_user_connections_all_update_response = UserSourceConnection | ValidationError | GenericError;

export type sources_user_connections_all_partial_update_response = UserSourceConnection | ValidationError | GenericError;

export type sources_user_connections_all_destroy_response = Void_container | ValidationError | GenericError;

export type sources_user_connections_oauth_create_response = UserOAuthSourceConnection | ValidationError | GenericError;

/** OAuth Source Serializer */
export type UserOAuthSourceConnectionRequest_Input = {
  user: Scalars['Int']['input'];
  identifier: Scalars['mutationInput_sources_user_connections_oauth_create_input_identifier']['input'];
  access_token?: InputMaybe<Scalars['String']['input']>;
};

export type sources_user_connections_oauth_update_response = UserOAuthSourceConnection | ValidationError | GenericError;

export type sources_user_connections_oauth_partial_update_response = UserOAuthSourceConnection | ValidationError | GenericError;

/** OAuth Source Serializer */
export type PatchedUserOAuthSourceConnectionRequest_Input = {
  user?: InputMaybe<Scalars['Int']['input']>;
  identifier?: InputMaybe<Scalars['mutationInput_sources_user_connections_oauth_partial_update_input_identifier']['input']>;
  access_token?: InputMaybe<Scalars['String']['input']>;
};

export type sources_user_connections_oauth_destroy_response = Void_container | ValidationError | GenericError;

export type sources_user_connections_plex_create_response = PlexSourceConnection | ValidationError | GenericError;

/** Plex Source connection Serializer */
export type PlexSourceConnectionRequest_Input = {
  identifier: Scalars['NonEmptyString']['input'];
  plex_token: Scalars['NonEmptyString']['input'];
};

export type sources_user_connections_plex_update_response = PlexSourceConnection | ValidationError | GenericError;

export type sources_user_connections_plex_partial_update_response = PlexSourceConnection | ValidationError | GenericError;

/** Plex Source connection Serializer */
export type PatchedPlexSourceConnectionRequest_Input = {
  identifier?: InputMaybe<Scalars['NonEmptyString']['input']>;
  plex_token?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type sources_user_connections_plex_destroy_response = Void_container | ValidationError | GenericError;

export type sources_user_connections_saml_create_response = UserSAMLSourceConnection | ValidationError | GenericError;

/** SAML Source Serializer */
export type UserSAMLSourceConnectionRequest_Input = {
  user: Scalars['Int']['input'];
  identifier: Scalars['NonEmptyString']['input'];
};

export type sources_user_connections_saml_update_response = UserSAMLSourceConnection | ValidationError | GenericError;

export type sources_user_connections_saml_partial_update_response = UserSAMLSourceConnection | ValidationError | GenericError;

/** SAML Source Serializer */
export type PatchedUserSAMLSourceConnectionRequest_Input = {
  user?: InputMaybe<Scalars['Int']['input']>;
  identifier?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type sources_user_connections_saml_destroy_response = Void_container | ValidationError | GenericError;

export type stages_all_destroy_response = Void_container | ValidationError | GenericError;

export type stages_authenticator_duo_create_response = AuthenticatorDuoStage | ValidationError | GenericError;

/** AuthenticatorDuoStage Serializer */
export type AuthenticatorDuoStageRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
  /** Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage. */
  configure_flow?: InputMaybe<Scalars['UUID']['input']>;
  friendly_name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  client_id: Scalars['NonEmptyString']['input'];
  client_secret: Scalars['NonEmptyString']['input'];
  api_hostname: Scalars['NonEmptyString']['input'];
  admin_integration_key?: InputMaybe<Scalars['String']['input']>;
  admin_secret_key?: InputMaybe<Scalars['String']['input']>;
};

/** Stripped down flow serializer */
export type FlowSetRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  slug: Scalars['mutationInput_stages_authenticator_duo_create_input_flow_set_items_slug']['input'];
  /** Shown as the Title in Flow pages. */
  title: Scalars['NonEmptyString']['input'];
  designation: FlowDesignationEnum;
  policy_engine_mode?: InputMaybe<PolicyEngineMode>;
  /** Enable compatibility mode, increases compatibility with password managers on mobile devices. */
  compatibility_mode?: InputMaybe<Scalars['Boolean']['input']>;
  layout?: InputMaybe<FlowLayoutEnum>;
  denied_action?: InputMaybe<DeniedActionEnum>;
};

export type stages_authenticator_duo_update_response = AuthenticatorDuoStage | ValidationError | GenericError;

export type stages_authenticator_duo_partial_update_response = AuthenticatorDuoStage | ValidationError | GenericError;

/** AuthenticatorDuoStage Serializer */
export type PatchedAuthenticatorDuoStageRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
  /** Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage. */
  configure_flow?: InputMaybe<Scalars['UUID']['input']>;
  friendly_name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  client_id?: InputMaybe<Scalars['NonEmptyString']['input']>;
  client_secret?: InputMaybe<Scalars['NonEmptyString']['input']>;
  api_hostname?: InputMaybe<Scalars['NonEmptyString']['input']>;
  admin_integration_key?: InputMaybe<Scalars['String']['input']>;
  admin_secret_key?: InputMaybe<Scalars['String']['input']>;
};

export type stages_authenticator_duo_destroy_response = Void_container | ValidationError | GenericError;

export type stages_authenticator_duo_enrollment_status_create_response = DuoDeviceEnrollmentStatus | ValidationError | GenericError;

export type DuoDeviceEnrollmentStatus = {
  duo_response: DuoResponseEnum;
};

export type DuoResponseEnum =
  | 'success'
  | 'waiting'
  | 'invalid';

export type stages_authenticator_duo_import_device_manual_create_response = Void_container | GenericError;

export type AuthenticatorDuoStageManualDeviceImportRequest_Input = {
  duo_user_id: Scalars['NonEmptyString']['input'];
  username: Scalars['NonEmptyString']['input'];
};

export type stages_authenticator_duo_import_devices_automatic_create_response = AuthenticatorDuoStageDeviceImportResponse | GenericError;

export type AuthenticatorDuoStageDeviceImportResponse = {
  count: Scalars['Int']['output'];
  error: Scalars['String']['output'];
};

export type stages_authenticator_sms_create_response = AuthenticatorSMSStage | ValidationError | GenericError;

/** AuthenticatorSMSStage Serializer */
export type AuthenticatorSMSStageRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
  /** Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage. */
  configure_flow?: InputMaybe<Scalars['UUID']['input']>;
  friendly_name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  provider: ProviderEnum;
  from_number: Scalars['NonEmptyString']['input'];
  account_sid: Scalars['NonEmptyString']['input'];
  auth: Scalars['NonEmptyString']['input'];
  auth_password?: InputMaybe<Scalars['String']['input']>;
  auth_type?: InputMaybe<AuthTypeEnum>;
  /** When enabled, the Phone number is only used during enrollment to verify the users authenticity. Only a hash of the phone number is saved to ensure it is not reused in the future. */
  verify_only?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optionally modify the payload being sent to custom providers. */
  mapping?: InputMaybe<Scalars['UUID']['input']>;
};

export type stages_authenticator_sms_update_response = AuthenticatorSMSStage | ValidationError | GenericError;

export type stages_authenticator_sms_partial_update_response = AuthenticatorSMSStage | ValidationError | GenericError;

/** AuthenticatorSMSStage Serializer */
export type PatchedAuthenticatorSMSStageRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
  /** Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage. */
  configure_flow?: InputMaybe<Scalars['UUID']['input']>;
  friendly_name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  provider?: InputMaybe<ProviderEnum>;
  from_number?: InputMaybe<Scalars['NonEmptyString']['input']>;
  account_sid?: InputMaybe<Scalars['NonEmptyString']['input']>;
  auth?: InputMaybe<Scalars['NonEmptyString']['input']>;
  auth_password?: InputMaybe<Scalars['String']['input']>;
  auth_type?: InputMaybe<AuthTypeEnum>;
  /** When enabled, the Phone number is only used during enrollment to verify the users authenticity. Only a hash of the phone number is saved to ensure it is not reused in the future. */
  verify_only?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optionally modify the payload being sent to custom providers. */
  mapping?: InputMaybe<Scalars['UUID']['input']>;
};

export type stages_authenticator_sms_destroy_response = Void_container | ValidationError | GenericError;

export type stages_authenticator_static_create_response = AuthenticatorStaticStage | ValidationError | GenericError;

/** AuthenticatorStaticStage Serializer */
export type AuthenticatorStaticStageRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
  /** Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage. */
  configure_flow?: InputMaybe<Scalars['UUID']['input']>;
  friendly_name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  token_count?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  token_length?: InputMaybe<Scalars['NonNegativeInt']['input']>;
};

export type stages_authenticator_static_update_response = AuthenticatorStaticStage | ValidationError | GenericError;

export type stages_authenticator_static_partial_update_response = AuthenticatorStaticStage | ValidationError | GenericError;

/** AuthenticatorStaticStage Serializer */
export type PatchedAuthenticatorStaticStageRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
  /** Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage. */
  configure_flow?: InputMaybe<Scalars['UUID']['input']>;
  friendly_name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  token_count?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  token_length?: InputMaybe<Scalars['NonNegativeInt']['input']>;
};

export type stages_authenticator_static_destroy_response = Void_container | ValidationError | GenericError;

export type stages_authenticator_totp_create_response = AuthenticatorTOTPStage | ValidationError | GenericError;

/** AuthenticatorTOTPStage Serializer */
export type AuthenticatorTOTPStageRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
  /** Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage. */
  configure_flow?: InputMaybe<Scalars['UUID']['input']>;
  friendly_name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  digits: DigitsEnum;
};

export type stages_authenticator_totp_update_response = AuthenticatorTOTPStage | ValidationError | GenericError;

export type stages_authenticator_totp_partial_update_response = AuthenticatorTOTPStage | ValidationError | GenericError;

/** AuthenticatorTOTPStage Serializer */
export type PatchedAuthenticatorTOTPStageRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
  /** Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage. */
  configure_flow?: InputMaybe<Scalars['UUID']['input']>;
  friendly_name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  digits?: InputMaybe<DigitsEnum>;
};

export type stages_authenticator_totp_destroy_response = Void_container | ValidationError | GenericError;

export type stages_authenticator_validate_create_response = AuthenticatorValidateStage | ValidationError | GenericError;

/** AuthenticatorValidateStage Serializer */
export type AuthenticatorValidateStageRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
  not_configured_action?: InputMaybe<NotConfiguredActionEnum>;
  /** Device classes which can be used to authenticate */
  device_classes?: InputMaybe<Array<InputMaybe<DeviceClassesEnum>>>;
  /** Stages used to configure Authenticator when user doesn't have any compatible devices. After this configuration Stage passes, the user is not prompted again. */
  configuration_stages?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** If any of the user's device has been used within this threshold, this stage will be skipped */
  last_auth_threshold?: InputMaybe<Scalars['NonEmptyString']['input']>;
  webauthn_user_verification?: InputMaybe<UserVerificationEnum>;
  webauthn_allowed_device_types?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
};

export type stages_authenticator_validate_update_response = AuthenticatorValidateStage | ValidationError | GenericError;

export type stages_authenticator_validate_partial_update_response = AuthenticatorValidateStage | ValidationError | GenericError;

/** AuthenticatorValidateStage Serializer */
export type PatchedAuthenticatorValidateStageRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
  not_configured_action?: InputMaybe<NotConfiguredActionEnum>;
  /** Device classes which can be used to authenticate */
  device_classes?: InputMaybe<Array<InputMaybe<DeviceClassesEnum>>>;
  /** Stages used to configure Authenticator when user doesn't have any compatible devices. After this configuration Stage passes, the user is not prompted again. */
  configuration_stages?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** If any of the user's device has been used within this threshold, this stage will be skipped */
  last_auth_threshold?: InputMaybe<Scalars['NonEmptyString']['input']>;
  webauthn_user_verification?: InputMaybe<UserVerificationEnum>;
  webauthn_allowed_device_types?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
};

export type stages_authenticator_validate_destroy_response = Void_container | ValidationError | GenericError;

export type stages_authenticator_webauthn_create_response = AuthenticatorWebAuthnStage | ValidationError | GenericError;

/** AuthenticatorWebAuthnStage Serializer */
export type AuthenticatorWebAuthnStageRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
  /** Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage. */
  configure_flow?: InputMaybe<Scalars['UUID']['input']>;
  friendly_name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  user_verification?: InputMaybe<UserVerificationEnum>;
  authenticator_attachment?: InputMaybe<AuthenticatorAttachmentEnum>;
  resident_key_requirement?: InputMaybe<ResidentKeyRequirementEnum>;
  device_type_restrictions?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
};

export type stages_authenticator_webauthn_update_response = AuthenticatorWebAuthnStage | ValidationError | GenericError;

export type stages_authenticator_webauthn_partial_update_response = AuthenticatorWebAuthnStage | ValidationError | GenericError;

/** AuthenticatorWebAuthnStage Serializer */
export type PatchedAuthenticatorWebAuthnStageRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
  /** Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage. */
  configure_flow?: InputMaybe<Scalars['UUID']['input']>;
  friendly_name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  user_verification?: InputMaybe<UserVerificationEnum>;
  authenticator_attachment?: InputMaybe<AuthenticatorAttachmentEnum>;
  resident_key_requirement?: InputMaybe<ResidentKeyRequirementEnum>;
  device_type_restrictions?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
};

export type stages_authenticator_webauthn_destroy_response = Void_container | ValidationError | GenericError;

export type stages_captcha_create_response = CaptchaStage | ValidationError | GenericError;

/** CaptchaStage Serializer */
export type CaptchaStageRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
  /** Public key, acquired your captcha Provider. */
  public_key: Scalars['NonEmptyString']['input'];
  /** Private key, acquired your captcha Provider. */
  private_key: Scalars['NonEmptyString']['input'];
  js_url?: InputMaybe<Scalars['NonEmptyString']['input']>;
  api_url?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type stages_captcha_update_response = CaptchaStage | ValidationError | GenericError;

export type stages_captcha_partial_update_response = CaptchaStage | ValidationError | GenericError;

/** CaptchaStage Serializer */
export type PatchedCaptchaStageRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
  /** Public key, acquired your captcha Provider. */
  public_key?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Private key, acquired your captcha Provider. */
  private_key?: InputMaybe<Scalars['NonEmptyString']['input']>;
  js_url?: InputMaybe<Scalars['NonEmptyString']['input']>;
  api_url?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type stages_captcha_destroy_response = Void_container | ValidationError | GenericError;

export type stages_consent_create_response = ConsentStage | ValidationError | GenericError;

/** ConsentStage Serializer */
export type ConsentStageRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
  mode?: InputMaybe<ConsentStageModeEnum>;
  /** Offset after which consent expires. (Format: hours=1;minutes=2;seconds=3). */
  consent_expire_in?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type stages_consent_update_response = ConsentStage | ValidationError | GenericError;

export type stages_consent_partial_update_response = ConsentStage | ValidationError | GenericError;

/** ConsentStage Serializer */
export type PatchedConsentStageRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
  mode?: InputMaybe<ConsentStageModeEnum>;
  /** Offset after which consent expires. (Format: hours=1;minutes=2;seconds=3). */
  consent_expire_in?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type stages_consent_destroy_response = Void_container | ValidationError | GenericError;

export type stages_deny_create_response = DenyStage | ValidationError | GenericError;

/** DenyStage Serializer */
export type DenyStageRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
  deny_message?: InputMaybe<Scalars['String']['input']>;
};

export type stages_deny_update_response = DenyStage | ValidationError | GenericError;

export type stages_deny_partial_update_response = DenyStage | ValidationError | GenericError;

/** DenyStage Serializer */
export type PatchedDenyStageRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
  deny_message?: InputMaybe<Scalars['String']['input']>;
};

export type stages_deny_destroy_response = Void_container | ValidationError | GenericError;

export type stages_dummy_create_response = DummyStage | ValidationError | GenericError;

/** DummyStage Serializer */
export type DummyStageRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
  throw_error?: InputMaybe<Scalars['Boolean']['input']>;
};

export type stages_dummy_update_response = DummyStage | ValidationError | GenericError;

export type stages_dummy_partial_update_response = DummyStage | ValidationError | GenericError;

/** DummyStage Serializer */
export type PatchedDummyStageRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
  throw_error?: InputMaybe<Scalars['Boolean']['input']>;
};

export type stages_dummy_destroy_response = Void_container | ValidationError | GenericError;

export type stages_email_create_response = EmailStage | ValidationError | GenericError;

/** EmailStage Serializer */
export type EmailStageRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
  /** When enabled, global Email connection settings will be used and connection settings below will be ignored. */
  use_global_settings?: InputMaybe<Scalars['Boolean']['input']>;
  host?: InputMaybe<Scalars['NonEmptyString']['input']>;
  port?: InputMaybe<Scalars['Int']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  use_tls?: InputMaybe<Scalars['Boolean']['input']>;
  use_ssl?: InputMaybe<Scalars['Boolean']['input']>;
  timeout?: InputMaybe<Scalars['Int']['input']>;
  from_address?: InputMaybe<Scalars['EmailAddress']['input']>;
  /** Time in minutes the token sent is valid. */
  token_expiry?: InputMaybe<Scalars['Int']['input']>;
  subject?: InputMaybe<Scalars['NonEmptyString']['input']>;
  template?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Activate users upon completion of stage. */
  activate_user_on_success?: InputMaybe<Scalars['Boolean']['input']>;
};

export type stages_email_update_response = EmailStage | ValidationError | GenericError;

export type stages_email_partial_update_response = EmailStage | ValidationError | GenericError;

/** EmailStage Serializer */
export type PatchedEmailStageRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
  /** When enabled, global Email connection settings will be used and connection settings below will be ignored. */
  use_global_settings?: InputMaybe<Scalars['Boolean']['input']>;
  host?: InputMaybe<Scalars['NonEmptyString']['input']>;
  port?: InputMaybe<Scalars['Int']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  use_tls?: InputMaybe<Scalars['Boolean']['input']>;
  use_ssl?: InputMaybe<Scalars['Boolean']['input']>;
  timeout?: InputMaybe<Scalars['Int']['input']>;
  from_address?: InputMaybe<Scalars['EmailAddress']['input']>;
  /** Time in minutes the token sent is valid. */
  token_expiry?: InputMaybe<Scalars['Int']['input']>;
  subject?: InputMaybe<Scalars['NonEmptyString']['input']>;
  template?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Activate users upon completion of stage. */
  activate_user_on_success?: InputMaybe<Scalars['Boolean']['input']>;
};

export type stages_email_destroy_response = Void_container | ValidationError | GenericError;

export type stages_identification_create_response = IdentificationStage | ValidationError | GenericError;

/** IdentificationStage Serializer */
export type IdentificationStageRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
  /** Fields of the user object to match against. (Hold shift to select multiple options) */
  user_fields?: InputMaybe<Array<InputMaybe<UserFieldsEnum>>>;
  /** When set, shows a password field, instead of showing the password field as seaprate step. */
  password_stage?: InputMaybe<Scalars['UUID']['input']>;
  /** When enabled, user fields are matched regardless of their casing. */
  case_insensitive_matching?: InputMaybe<Scalars['Boolean']['input']>;
  /** When a valid username/email has been entered, and this option is enabled, the user's username and avatar will be shown. Otherwise, the text that the user entered will be shown */
  show_matched_user?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optional enrollment flow, which is linked at the bottom of the page. */
  enrollment_flow?: InputMaybe<Scalars['UUID']['input']>;
  /** Optional recovery flow, which is linked at the bottom of the page. */
  recovery_flow?: InputMaybe<Scalars['UUID']['input']>;
  /** Optional passwordless flow, which is linked at the bottom of the page. */
  passwordless_flow?: InputMaybe<Scalars['UUID']['input']>;
  /** Specify which sources should be shown. */
  sources?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  show_source_labels?: InputMaybe<Scalars['Boolean']['input']>;
  /** When enabled, the stage will succeed and continue even when incorrect user info is entered. */
  pretend_user_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type stages_identification_update_response = IdentificationStage | ValidationError | GenericError;

export type stages_identification_partial_update_response = IdentificationStage | ValidationError | GenericError;

/** IdentificationStage Serializer */
export type PatchedIdentificationStageRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
  /** Fields of the user object to match against. (Hold shift to select multiple options) */
  user_fields?: InputMaybe<Array<InputMaybe<UserFieldsEnum>>>;
  /** When set, shows a password field, instead of showing the password field as seaprate step. */
  password_stage?: InputMaybe<Scalars['UUID']['input']>;
  /** When enabled, user fields are matched regardless of their casing. */
  case_insensitive_matching?: InputMaybe<Scalars['Boolean']['input']>;
  /** When a valid username/email has been entered, and this option is enabled, the user's username and avatar will be shown. Otherwise, the text that the user entered will be shown */
  show_matched_user?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optional enrollment flow, which is linked at the bottom of the page. */
  enrollment_flow?: InputMaybe<Scalars['UUID']['input']>;
  /** Optional recovery flow, which is linked at the bottom of the page. */
  recovery_flow?: InputMaybe<Scalars['UUID']['input']>;
  /** Optional passwordless flow, which is linked at the bottom of the page. */
  passwordless_flow?: InputMaybe<Scalars['UUID']['input']>;
  /** Specify which sources should be shown. */
  sources?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  show_source_labels?: InputMaybe<Scalars['Boolean']['input']>;
  /** When enabled, the stage will succeed and continue even when incorrect user info is entered. */
  pretend_user_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type stages_identification_destroy_response = Void_container | ValidationError | GenericError;

export type stages_invitation_invitations_create_response = Invitation | ValidationError | GenericError;

/** Invitation Serializer */
export type InvitationRequest_Input = {
  name: Scalars['mutationInput_stages_invitation_invitations_create_input_name']['input'];
  expires?: InputMaybe<Scalars['DateTime']['input']>;
  fixed_data?: InputMaybe<Scalars['JSON']['input']>;
  /** When enabled, the invitation will be deleted after usage. */
  single_use?: InputMaybe<Scalars['Boolean']['input']>;
  /** When set, only the configured flow can use this invitation. */
  flow?: InputMaybe<Scalars['UUID']['input']>;
};

export type stages_invitation_invitations_update_response = Invitation | ValidationError | GenericError;

export type stages_invitation_invitations_partial_update_response = Invitation | ValidationError | GenericError;

/** Invitation Serializer */
export type PatchedInvitationRequest_Input = {
  name?: InputMaybe<Scalars['mutationInput_stages_invitation_invitations_partial_update_input_name']['input']>;
  expires?: InputMaybe<Scalars['DateTime']['input']>;
  fixed_data?: InputMaybe<Scalars['JSON']['input']>;
  /** When enabled, the invitation will be deleted after usage. */
  single_use?: InputMaybe<Scalars['Boolean']['input']>;
  /** When set, only the configured flow can use this invitation. */
  flow?: InputMaybe<Scalars['UUID']['input']>;
};

export type stages_invitation_invitations_destroy_response = Void_container | ValidationError | GenericError;

export type stages_invitation_stages_create_response = InvitationStage | ValidationError | GenericError;

/** InvitationStage Serializer */
export type InvitationStageRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
  /** If this flag is set, this Stage will jump to the next Stage when no Invitation is given. By default this Stage will cancel the Flow when no invitation is given. */
  continue_flow_without_invitation?: InputMaybe<Scalars['Boolean']['input']>;
};

export type stages_invitation_stages_update_response = InvitationStage | ValidationError | GenericError;

export type stages_invitation_stages_partial_update_response = InvitationStage | ValidationError | GenericError;

/** InvitationStage Serializer */
export type PatchedInvitationStageRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
  /** If this flag is set, this Stage will jump to the next Stage when no Invitation is given. By default this Stage will cancel the Flow when no invitation is given. */
  continue_flow_without_invitation?: InputMaybe<Scalars['Boolean']['input']>;
};

export type stages_invitation_stages_destroy_response = Void_container | ValidationError | GenericError;

export type stages_password_create_response = PasswordStage | ValidationError | GenericError;

/** PasswordStage Serializer */
export type PasswordStageRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
  /** Selection of backends to test the password against. */
  backends: Array<InputMaybe<BackendsEnum>>;
  /** Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage. */
  configure_flow?: InputMaybe<Scalars['UUID']['input']>;
  /** How many attempts a user has before the flow is canceled. To lock the user out, use a reputation policy and a user_write stage. */
  failed_attempts_before_cancel?: InputMaybe<Scalars['Int']['input']>;
};

export type stages_password_update_response = PasswordStage | ValidationError | GenericError;

export type stages_password_partial_update_response = PasswordStage | ValidationError | GenericError;

/** PasswordStage Serializer */
export type PatchedPasswordStageRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
  /** Selection of backends to test the password against. */
  backends?: InputMaybe<Array<InputMaybe<BackendsEnum>>>;
  /** Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage. */
  configure_flow?: InputMaybe<Scalars['UUID']['input']>;
  /** How many attempts a user has before the flow is canceled. To lock the user out, use a reputation policy and a user_write stage. */
  failed_attempts_before_cancel?: InputMaybe<Scalars['Int']['input']>;
};

export type stages_password_destroy_response = Void_container | ValidationError | GenericError;

export type stages_prompt_prompts_create_response = Prompt | ValidationError | GenericError;

/** Prompt Serializer */
export type PromptRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  /** Name of the form field, also used to store the value */
  field_key: Scalars['NonEmptyString']['input'];
  label: Scalars['NonEmptyString']['input'];
  type: PromptTypeEnum;
  required?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optionally provide a short hint that describes the expected input value. When creating a fixed choice field, enable interpreting as expression and return a list to return multiple choices. */
  placeholder?: InputMaybe<Scalars['String']['input']>;
  /** Optionally pre-fill the input with an initial value. When creating a fixed choice field, enable interpreting as expression and return a list to return multiple default choices. */
  initial_value?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  promptstage_set?: InputMaybe<Array<InputMaybe<StageRequest_Input>>>;
  sub_text?: InputMaybe<Scalars['String']['input']>;
  placeholder_expression?: InputMaybe<Scalars['Boolean']['input']>;
  initial_value_expression?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Stage Serializer */
export type StageRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
};

export type stages_prompt_prompts_update_response = Prompt | ValidationError | GenericError;

export type stages_prompt_prompts_partial_update_response = Prompt | ValidationError | GenericError;

/** Prompt Serializer */
export type PatchedPromptRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Name of the form field, also used to store the value */
  field_key?: InputMaybe<Scalars['NonEmptyString']['input']>;
  label?: InputMaybe<Scalars['NonEmptyString']['input']>;
  type?: InputMaybe<PromptTypeEnum>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optionally provide a short hint that describes the expected input value. When creating a fixed choice field, enable interpreting as expression and return a list to return multiple choices. */
  placeholder?: InputMaybe<Scalars['String']['input']>;
  /** Optionally pre-fill the input with an initial value. When creating a fixed choice field, enable interpreting as expression and return a list to return multiple default choices. */
  initial_value?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  promptstage_set?: InputMaybe<Array<InputMaybe<StageRequest_Input>>>;
  sub_text?: InputMaybe<Scalars['String']['input']>;
  placeholder_expression?: InputMaybe<Scalars['Boolean']['input']>;
  initial_value_expression?: InputMaybe<Scalars['Boolean']['input']>;
};

export type stages_prompt_prompts_destroy_response = Void_container | ValidationError | GenericError;

export type stages_prompt_prompts_preview_create_response = PromptChallenge | ValidationError | GenericError;

export type stages_prompt_stages_create_response = PromptStage | ValidationError | GenericError;

/** PromptStage Serializer */
export type PromptStageRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
  fields: Array<InputMaybe<Scalars['UUID']['input']>>;
  validation_policies?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
};

export type stages_prompt_stages_update_response = PromptStage | ValidationError | GenericError;

export type stages_prompt_stages_partial_update_response = PromptStage | ValidationError | GenericError;

/** PromptStage Serializer */
export type PatchedPromptStageRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  validation_policies?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
};

export type stages_prompt_stages_destroy_response = Void_container | ValidationError | GenericError;

export type stages_source_create_response = SourceStage | ValidationError | GenericError;

/** SourceStage Serializer */
export type SourceStageRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
  source: Scalars['UUID']['input'];
  /** Amount of time a user can take to return from the source to continue the flow (Format: hours=-1;minutes=-2;seconds=-3) */
  resume_timeout?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type stages_source_update_response = SourceStage | ValidationError | GenericError;

export type stages_source_partial_update_response = SourceStage | ValidationError | GenericError;

/** SourceStage Serializer */
export type PatchedSourceStageRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
  source?: InputMaybe<Scalars['UUID']['input']>;
  /** Amount of time a user can take to return from the source to continue the flow (Format: hours=-1;minutes=-2;seconds=-3) */
  resume_timeout?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type stages_source_destroy_response = Void_container | ValidationError | GenericError;

export type stages_user_delete_create_response = UserDeleteStage | ValidationError | GenericError;

/** UserDeleteStage Serializer */
export type UserDeleteStageRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
};

export type stages_user_delete_update_response = UserDeleteStage | ValidationError | GenericError;

export type stages_user_delete_partial_update_response = UserDeleteStage | ValidationError | GenericError;

/** UserDeleteStage Serializer */
export type PatchedUserDeleteStageRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
};

export type stages_user_delete_destroy_response = Void_container | ValidationError | GenericError;

export type stages_user_login_create_response = UserLoginStage | ValidationError | GenericError;

/** UserLoginStage Serializer */
export type UserLoginStageRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
  /** Determines how long a session lasts. Default of 0 means that the sessions lasts until the browser is closed. (Format: hours=-1;minutes=-2;seconds=-3) */
  session_duration?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Terminate all other sessions of the user logging in. */
  terminate_other_sessions?: InputMaybe<Scalars['Boolean']['input']>;
  /** Offset the session will be extended by when the user picks the remember me option. Default of 0 means that the remember me option will not be shown. (Format: hours=-1;minutes=-2;seconds=-3) */
  remember_me_offset?: InputMaybe<Scalars['NonEmptyString']['input']>;
  network_binding?: InputMaybe<NetworkBindingEnum>;
  geoip_binding?: InputMaybe<GeoipBindingEnum>;
};

export type stages_user_login_update_response = UserLoginStage | ValidationError | GenericError;

export type stages_user_login_partial_update_response = UserLoginStage | ValidationError | GenericError;

/** UserLoginStage Serializer */
export type PatchedUserLoginStageRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
  /** Determines how long a session lasts. Default of 0 means that the sessions lasts until the browser is closed. (Format: hours=-1;minutes=-2;seconds=-3) */
  session_duration?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Terminate all other sessions of the user logging in. */
  terminate_other_sessions?: InputMaybe<Scalars['Boolean']['input']>;
  /** Offset the session will be extended by when the user picks the remember me option. Default of 0 means that the remember me option will not be shown. (Format: hours=-1;minutes=-2;seconds=-3) */
  remember_me_offset?: InputMaybe<Scalars['NonEmptyString']['input']>;
  network_binding?: InputMaybe<NetworkBindingEnum>;
  geoip_binding?: InputMaybe<GeoipBindingEnum>;
};

export type stages_user_login_destroy_response = Void_container | ValidationError | GenericError;

export type stages_user_logout_create_response = UserLogoutStage | ValidationError | GenericError;

/** UserLogoutStage Serializer */
export type UserLogoutStageRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
};

export type stages_user_logout_update_response = UserLogoutStage | ValidationError | GenericError;

export type stages_user_logout_partial_update_response = UserLogoutStage | ValidationError | GenericError;

/** UserLogoutStage Serializer */
export type PatchedUserLogoutStageRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
};

export type stages_user_logout_destroy_response = Void_container | ValidationError | GenericError;

export type stages_user_write_create_response = UserWriteStage | ValidationError | GenericError;

/** UserWriteStage Serializer */
export type UserWriteStageRequest_Input = {
  name: Scalars['NonEmptyString']['input'];
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
  user_creation_mode?: InputMaybe<UserCreationModeEnum>;
  /** When set, newly created users are inactive and cannot login. */
  create_users_as_inactive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optionally add newly created users to this group. */
  create_users_group?: InputMaybe<Scalars['UUID']['input']>;
  user_type?: InputMaybe<UserTypeEnum>;
  user_path_template?: InputMaybe<Scalars['String']['input']>;
};

export type stages_user_write_update_response = UserWriteStage | ValidationError | GenericError;

export type stages_user_write_partial_update_response = UserWriteStage | ValidationError | GenericError;

/** UserWriteStage Serializer */
export type PatchedUserWriteStageRequest_Input = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  flow_set?: InputMaybe<Array<InputMaybe<FlowSetRequest_Input>>>;
  user_creation_mode?: InputMaybe<UserCreationModeEnum>;
  /** When set, newly created users are inactive and cannot login. */
  create_users_as_inactive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optionally add newly created users to this group. */
  create_users_group?: InputMaybe<Scalars['UUID']['input']>;
  user_type?: InputMaybe<UserTypeEnum>;
  user_path_template?: InputMaybe<Scalars['String']['input']>;
};

export type stages_user_write_destroy_response = Void_container | ValidationError | GenericError;

export type HTTPMethod =
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
      /** Read-only view list all installed apps **/
  admin_apps_list: InContextSdkMethod<Query['admin_apps_list'], {}, MeshContext>,
  /** Login Metrics per 1h **/
  admin_metrics_retrieve: InContextSdkMethod<Query['admin_metrics_retrieve'], {}, MeshContext>,
  /** Read-only view list all installed models **/
  admin_models_list: InContextSdkMethod<Query['admin_models_list'], {}, MeshContext>,
  /** Settings view **/
  admin_settings_retrieve: InContextSdkMethod<Query['admin_settings_retrieve'], {}, MeshContext>,
  /** Get system information. **/
  admin_system_retrieve: InContextSdkMethod<Query['admin_system_retrieve'], {}, MeshContext>,
  /** Get running and latest version. **/
  admin_version_retrieve: InContextSdkMethod<Query['admin_version_retrieve'], {}, MeshContext>,
  /** Get currently connected worker count. **/
  admin_workers_retrieve: InContextSdkMethod<Query['admin_workers_retrieve'], {}, MeshContext>,
  /** Get all devices for current user **/
  authenticators_admin_all_list: InContextSdkMethod<Query['authenticators_admin_all_list'], Queryauthenticators_admin_all_listArgs, MeshContext>,
  /** Viewset for Duo authenticator devices (for admins) **/
  authenticators_admin_duo_list: InContextSdkMethod<Query['authenticators_admin_duo_list'], Queryauthenticators_admin_duo_listArgs, MeshContext>,
  /** Viewset for Duo authenticator devices (for admins) **/
  authenticators_admin_duo_retrieve: InContextSdkMethod<Query['authenticators_admin_duo_retrieve'], Queryauthenticators_admin_duo_retrieveArgs, MeshContext>,
  /** Viewset for sms authenticator devices (for admins) **/
  authenticators_admin_sms_list: InContextSdkMethod<Query['authenticators_admin_sms_list'], Queryauthenticators_admin_sms_listArgs, MeshContext>,
  /** Viewset for sms authenticator devices (for admins) **/
  authenticators_admin_sms_retrieve: InContextSdkMethod<Query['authenticators_admin_sms_retrieve'], Queryauthenticators_admin_sms_retrieveArgs, MeshContext>,
  /** Viewset for static authenticator devices (for admins) **/
  authenticators_admin_static_list: InContextSdkMethod<Query['authenticators_admin_static_list'], Queryauthenticators_admin_static_listArgs, MeshContext>,
  /** Viewset for static authenticator devices (for admins) **/
  authenticators_admin_static_retrieve: InContextSdkMethod<Query['authenticators_admin_static_retrieve'], Queryauthenticators_admin_static_retrieveArgs, MeshContext>,
  /** Viewset for totp authenticator devices (for admins) **/
  authenticators_admin_totp_list: InContextSdkMethod<Query['authenticators_admin_totp_list'], Queryauthenticators_admin_totp_listArgs, MeshContext>,
  /** Viewset for totp authenticator devices (for admins) **/
  authenticators_admin_totp_retrieve: InContextSdkMethod<Query['authenticators_admin_totp_retrieve'], Queryauthenticators_admin_totp_retrieveArgs, MeshContext>,
  /** Viewset for WebAuthn authenticator devices (for admins) **/
  authenticators_admin_webauthn_list: InContextSdkMethod<Query['authenticators_admin_webauthn_list'], Queryauthenticators_admin_webauthn_listArgs, MeshContext>,
  /** Viewset for WebAuthn authenticator devices (for admins) **/
  authenticators_admin_webauthn_retrieve: InContextSdkMethod<Query['authenticators_admin_webauthn_retrieve'], Queryauthenticators_admin_webauthn_retrieveArgs, MeshContext>,
  /** Get all devices for current user **/
  authenticators_all_list: InContextSdkMethod<Query['authenticators_all_list'], {}, MeshContext>,
  /** Viewset for Duo authenticator devices **/
  authenticators_duo_list: InContextSdkMethod<Query['authenticators_duo_list'], Queryauthenticators_duo_listArgs, MeshContext>,
  /** Viewset for Duo authenticator devices **/
  authenticators_duo_retrieve: InContextSdkMethod<Query['authenticators_duo_retrieve'], Queryauthenticators_duo_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  authenticators_duo_used_by_list: InContextSdkMethod<Query['authenticators_duo_used_by_list'], Queryauthenticators_duo_used_by_listArgs, MeshContext>,
  /** Viewset for sms authenticator devices **/
  authenticators_sms_list: InContextSdkMethod<Query['authenticators_sms_list'], Queryauthenticators_sms_listArgs, MeshContext>,
  /** Viewset for sms authenticator devices **/
  authenticators_sms_retrieve: InContextSdkMethod<Query['authenticators_sms_retrieve'], Queryauthenticators_sms_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  authenticators_sms_used_by_list: InContextSdkMethod<Query['authenticators_sms_used_by_list'], Queryauthenticators_sms_used_by_listArgs, MeshContext>,
  /** Viewset for static authenticator devices **/
  authenticators_static_list: InContextSdkMethod<Query['authenticators_static_list'], Queryauthenticators_static_listArgs, MeshContext>,
  /** Viewset for static authenticator devices **/
  authenticators_static_retrieve: InContextSdkMethod<Query['authenticators_static_retrieve'], Queryauthenticators_static_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  authenticators_static_used_by_list: InContextSdkMethod<Query['authenticators_static_used_by_list'], Queryauthenticators_static_used_by_listArgs, MeshContext>,
  /** Viewset for totp authenticator devices **/
  authenticators_totp_list: InContextSdkMethod<Query['authenticators_totp_list'], Queryauthenticators_totp_listArgs, MeshContext>,
  /** Viewset for totp authenticator devices **/
  authenticators_totp_retrieve: InContextSdkMethod<Query['authenticators_totp_retrieve'], Queryauthenticators_totp_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  authenticators_totp_used_by_list: InContextSdkMethod<Query['authenticators_totp_used_by_list'], Queryauthenticators_totp_used_by_listArgs, MeshContext>,
  /** Viewset for WebAuthn authenticator devices **/
  authenticators_webauthn_list: InContextSdkMethod<Query['authenticators_webauthn_list'], Queryauthenticators_webauthn_listArgs, MeshContext>,
  /** Viewset for WebAuthn authenticator devices **/
  authenticators_webauthn_retrieve: InContextSdkMethod<Query['authenticators_webauthn_retrieve'], Queryauthenticators_webauthn_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  authenticators_webauthn_used_by_list: InContextSdkMethod<Query['authenticators_webauthn_used_by_list'], Queryauthenticators_webauthn_used_by_listArgs, MeshContext>,
  /** Custom list method that checks Policy based access instead of guardian **/
  core_applications_list: InContextSdkMethod<Query['core_applications_list'], Querycore_applications_listArgs, MeshContext>,
  /** Application Viewset **/
  core_applications_retrieve: InContextSdkMethod<Query['core_applications_retrieve'], Querycore_applications_retrieveArgs, MeshContext>,
  /** Check access to a single application by slug **/
  core_applications_check_access_retrieve: InContextSdkMethod<Query['core_applications_check_access_retrieve'], Querycore_applications_check_access_retrieveArgs, MeshContext>,
  /** Metrics for application logins **/
  core_applications_metrics_list: InContextSdkMethod<Query['core_applications_metrics_list'], Querycore_applications_metrics_listArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  core_applications_used_by_list: InContextSdkMethod<Query['core_applications_used_by_list'], Querycore_applications_used_by_listArgs, MeshContext>,
  /** AuthenticatedSession Viewset **/
  core_authenticated_sessions_list: InContextSdkMethod<Query['core_authenticated_sessions_list'], Querycore_authenticated_sessions_listArgs, MeshContext>,
  /** AuthenticatedSession Viewset **/
  core_authenticated_sessions_retrieve: InContextSdkMethod<Query['core_authenticated_sessions_retrieve'], Querycore_authenticated_sessions_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  core_authenticated_sessions_used_by_list: InContextSdkMethod<Query['core_authenticated_sessions_used_by_list'], Querycore_authenticated_sessions_used_by_listArgs, MeshContext>,
  /** Brand Viewset **/
  core_brands_list: InContextSdkMethod<Query['core_brands_list'], Querycore_brands_listArgs, MeshContext>,
  /** Brand Viewset **/
  core_brands_retrieve: InContextSdkMethod<Query['core_brands_retrieve'], Querycore_brands_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  core_brands_used_by_list: InContextSdkMethod<Query['core_brands_used_by_list'], Querycore_brands_used_by_listArgs, MeshContext>,
  /** Get current brand **/
  core_brands_current_retrieve: InContextSdkMethod<Query['core_brands_current_retrieve'], {}, MeshContext>,
  /** Group Viewset **/
  core_groups_list: InContextSdkMethod<Query['core_groups_list'], Querycore_groups_listArgs, MeshContext>,
  /** Group Viewset **/
  core_groups_retrieve: InContextSdkMethod<Query['core_groups_retrieve'], Querycore_groups_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  core_groups_used_by_list: InContextSdkMethod<Query['core_groups_used_by_list'], Querycore_groups_used_by_listArgs, MeshContext>,
  /** Token Viewset **/
  core_tokens_list: InContextSdkMethod<Query['core_tokens_list'], Querycore_tokens_listArgs, MeshContext>,
  /** Token Viewset **/
  core_tokens_retrieve: InContextSdkMethod<Query['core_tokens_retrieve'], Querycore_tokens_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  core_tokens_used_by_list: InContextSdkMethod<Query['core_tokens_used_by_list'], Querycore_tokens_used_by_listArgs, MeshContext>,
  /** Return token key and log access **/
  core_tokens_view_key_retrieve: InContextSdkMethod<Query['core_tokens_view_key_retrieve'], Querycore_tokens_view_key_retrieveArgs, MeshContext>,
  /** UserConsent Viewset **/
  core_user_consent_list: InContextSdkMethod<Query['core_user_consent_list'], Querycore_user_consent_listArgs, MeshContext>,
  /** UserConsent Viewset **/
  core_user_consent_retrieve: InContextSdkMethod<Query['core_user_consent_retrieve'], Querycore_user_consent_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  core_user_consent_used_by_list: InContextSdkMethod<Query['core_user_consent_used_by_list'], Querycore_user_consent_used_by_listArgs, MeshContext>,
  /** User Viewset **/
  core_users_list: InContextSdkMethod<Query['core_users_list'], Querycore_users_listArgs, MeshContext>,
  /** User Viewset **/
  core_users_retrieve: InContextSdkMethod<Query['core_users_retrieve'], Querycore_users_retrieveArgs, MeshContext>,
  /** User metrics per 1h **/
  core_users_metrics_retrieve: InContextSdkMethod<Query['core_users_metrics_retrieve'], Querycore_users_metrics_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  core_users_used_by_list: InContextSdkMethod<Query['core_users_used_by_list'], Querycore_users_used_by_listArgs, MeshContext>,
  /** End Impersonation a user **/
  core_users_impersonate_end_retrieve: InContextSdkMethod<Query['core_users_impersonate_end_retrieve'], {}, MeshContext>,
  /** Get information about current user **/
  core_users_me_retrieve: InContextSdkMethod<Query['core_users_me_retrieve'], {}, MeshContext>,
  /** Get all user paths **/
  core_users_paths_retrieve: InContextSdkMethod<Query['core_users_paths_retrieve'], Querycore_users_paths_retrieveArgs, MeshContext>,
  /** CertificateKeyPair Viewset **/
  crypto_certificatekeypairs_list: InContextSdkMethod<Query['crypto_certificatekeypairs_list'], Querycrypto_certificatekeypairs_listArgs, MeshContext>,
  /** CertificateKeyPair Viewset **/
  crypto_certificatekeypairs_retrieve: InContextSdkMethod<Query['crypto_certificatekeypairs_retrieve'], Querycrypto_certificatekeypairs_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  crypto_certificatekeypairs_used_by_list: InContextSdkMethod<Query['crypto_certificatekeypairs_used_by_list'], Querycrypto_certificatekeypairs_used_by_listArgs, MeshContext>,
  /** Return certificate-key pairs certificate and log access **/
  crypto_certificatekeypairs_view_certificate_retrieve: InContextSdkMethod<Query['crypto_certificatekeypairs_view_certificate_retrieve'], Querycrypto_certificatekeypairs_view_certificate_retrieveArgs, MeshContext>,
  /** Return certificate-key pairs private key and log access **/
  crypto_certificatekeypairs_view_private_key_retrieve: InContextSdkMethod<Query['crypto_certificatekeypairs_view_private_key_retrieve'], Querycrypto_certificatekeypairs_view_private_key_retrieveArgs, MeshContext>,
  /** License Viewset **/
  enterprise_license_list: InContextSdkMethod<Query['enterprise_license_list'], Queryenterprise_license_listArgs, MeshContext>,
  /** License Viewset **/
  enterprise_license_retrieve: InContextSdkMethod<Query['enterprise_license_retrieve'], Queryenterprise_license_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  enterprise_license_used_by_list: InContextSdkMethod<Query['enterprise_license_used_by_list'], Queryenterprise_license_used_by_listArgs, MeshContext>,
  /** Forecast how many users will be required in a year **/
  enterprise_license_forecast_retrieve: InContextSdkMethod<Query['enterprise_license_forecast_retrieve'], {}, MeshContext>,
  /** Get install_id **/
  enterprise_license_get_install_id_retrieve: InContextSdkMethod<Query['enterprise_license_get_install_id_retrieve'], {}, MeshContext>,
  /** Get the total license status **/
  enterprise_license_summary_retrieve: InContextSdkMethod<Query['enterprise_license_summary_retrieve'], {}, MeshContext>,
  /** Event Read-Only Viewset **/
  events_events_list: InContextSdkMethod<Query['events_events_list'], Queryevents_events_listArgs, MeshContext>,
  /** Event Read-Only Viewset **/
  events_events_retrieve: InContextSdkMethod<Query['events_events_retrieve'], Queryevents_events_retrieveArgs, MeshContext>,
  /** Get all actions **/
  events_events_actions_list: InContextSdkMethod<Query['events_events_actions_list'], {}, MeshContext>,
  /** Get the count of events per month **/
  events_events_per_month_list: InContextSdkMethod<Query['events_events_per_month_list'], Queryevents_events_per_month_listArgs, MeshContext>,
  /** Get the top_n events grouped by user count **/
  events_events_top_per_user_list: InContextSdkMethod<Query['events_events_top_per_user_list'], Queryevents_events_top_per_user_listArgs, MeshContext>,
  /** Get event volume for specified filters and timeframe **/
  events_events_volume_list: InContextSdkMethod<Query['events_events_volume_list'], Queryevents_events_volume_listArgs, MeshContext>,
  /** Notification Viewset **/
  events_notifications_list: InContextSdkMethod<Query['events_notifications_list'], Queryevents_notifications_listArgs, MeshContext>,
  /** Notification Viewset **/
  events_notifications_retrieve: InContextSdkMethod<Query['events_notifications_retrieve'], Queryevents_notifications_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  events_notifications_used_by_list: InContextSdkMethod<Query['events_notifications_used_by_list'], Queryevents_notifications_used_by_listArgs, MeshContext>,
  /** NotificationRule Viewset **/
  events_rules_list: InContextSdkMethod<Query['events_rules_list'], Queryevents_rules_listArgs, MeshContext>,
  /** NotificationRule Viewset **/
  events_rules_retrieve: InContextSdkMethod<Query['events_rules_retrieve'], Queryevents_rules_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  events_rules_used_by_list: InContextSdkMethod<Query['events_rules_used_by_list'], Queryevents_rules_used_by_listArgs, MeshContext>,
  /** Read-only view set that returns all background tasks **/
  events_system_tasks_list: InContextSdkMethod<Query['events_system_tasks_list'], Queryevents_system_tasks_listArgs, MeshContext>,
  /** Read-only view set that returns all background tasks **/
  events_system_tasks_retrieve: InContextSdkMethod<Query['events_system_tasks_retrieve'], Queryevents_system_tasks_retrieveArgs, MeshContext>,
  /** NotificationTransport Viewset **/
  events_transports_list: InContextSdkMethod<Query['events_transports_list'], Queryevents_transports_listArgs, MeshContext>,
  /** NotificationTransport Viewset **/
  events_transports_retrieve: InContextSdkMethod<Query['events_transports_retrieve'], Queryevents_transports_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  events_transports_used_by_list: InContextSdkMethod<Query['events_transports_used_by_list'], Queryevents_transports_used_by_listArgs, MeshContext>,
  /** FlowStageBinding Viewset **/
  flows_bindings_list: InContextSdkMethod<Query['flows_bindings_list'], Queryflows_bindings_listArgs, MeshContext>,
  /** FlowStageBinding Viewset **/
  flows_bindings_retrieve: InContextSdkMethod<Query['flows_bindings_retrieve'], Queryflows_bindings_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  flows_bindings_used_by_list: InContextSdkMethod<Query['flows_bindings_used_by_list'], Queryflows_bindings_used_by_listArgs, MeshContext>,
  /** Get the next pending challenge from the currently active flow. **/
  flows_executor_get: InContextSdkMethod<Query['flows_executor_get'], Queryflows_executor_getArgs, MeshContext>,
  /** Get current flow state and record it **/
  flows_inspector_get: InContextSdkMethod<Query['flows_inspector_get'], Queryflows_inspector_getArgs, MeshContext>,
  /** Flow Viewset **/
  flows_instances_list: InContextSdkMethod<Query['flows_instances_list'], Queryflows_instances_listArgs, MeshContext>,
  /** Flow Viewset **/
  flows_instances_retrieve: InContextSdkMethod<Query['flows_instances_retrieve'], Queryflows_instances_retrieveArgs, MeshContext>,
  /** Return diagram for flow with slug `slug`, in the format used by flowchart.js **/
  flows_instances_diagram_retrieve: InContextSdkMethod<Query['flows_instances_diagram_retrieve'], Queryflows_instances_diagram_retrieveArgs, MeshContext>,
  /** Execute flow for current user **/
  flows_instances_execute_retrieve: InContextSdkMethod<Query['flows_instances_execute_retrieve'], Queryflows_instances_execute_retrieveArgs, MeshContext>,
  /** Export flow to .yaml file **/
  flows_instances_export_retrieve: InContextSdkMethod<Query['flows_instances_export_retrieve'], Queryflows_instances_export_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  flows_instances_used_by_list: InContextSdkMethod<Query['flows_instances_used_by_list'], Queryflows_instances_used_by_listArgs, MeshContext>,
  /** Info about cached flows **/
  flows_instances_cache_info_retrieve: InContextSdkMethod<Query['flows_instances_cache_info_retrieve'], {}, MeshContext>,
  /** Blueprint instances **/
  managed_blueprints_list: InContextSdkMethod<Query['managed_blueprints_list'], Querymanaged_blueprints_listArgs, MeshContext>,
  /** Blueprint instances **/
  managed_blueprints_retrieve: InContextSdkMethod<Query['managed_blueprints_retrieve'], Querymanaged_blueprints_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  managed_blueprints_used_by_list: InContextSdkMethod<Query['managed_blueprints_used_by_list'], Querymanaged_blueprints_used_by_listArgs, MeshContext>,
  /** Get blueprints **/
  managed_blueprints_available_list: InContextSdkMethod<Query['managed_blueprints_available_list'], {}, MeshContext>,
  /** AccessToken Viewset **/
  oauth2_access_tokens_list: InContextSdkMethod<Query['oauth2_access_tokens_list'], Queryoauth2_access_tokens_listArgs, MeshContext>,
  /** AccessToken Viewset **/
  oauth2_access_tokens_retrieve: InContextSdkMethod<Query['oauth2_access_tokens_retrieve'], Queryoauth2_access_tokens_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  oauth2_access_tokens_used_by_list: InContextSdkMethod<Query['oauth2_access_tokens_used_by_list'], Queryoauth2_access_tokens_used_by_listArgs, MeshContext>,
  /** AuthorizationCode Viewset **/
  oauth2_authorization_codes_list: InContextSdkMethod<Query['oauth2_authorization_codes_list'], Queryoauth2_authorization_codes_listArgs, MeshContext>,
  /** AuthorizationCode Viewset **/
  oauth2_authorization_codes_retrieve: InContextSdkMethod<Query['oauth2_authorization_codes_retrieve'], Queryoauth2_authorization_codes_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  oauth2_authorization_codes_used_by_list: InContextSdkMethod<Query['oauth2_authorization_codes_used_by_list'], Queryoauth2_authorization_codes_used_by_listArgs, MeshContext>,
  /** RefreshToken Viewset **/
  oauth2_refresh_tokens_list: InContextSdkMethod<Query['oauth2_refresh_tokens_list'], Queryoauth2_refresh_tokens_listArgs, MeshContext>,
  /** RefreshToken Viewset **/
  oauth2_refresh_tokens_retrieve: InContextSdkMethod<Query['oauth2_refresh_tokens_retrieve'], Queryoauth2_refresh_tokens_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  oauth2_refresh_tokens_used_by_list: InContextSdkMethod<Query['oauth2_refresh_tokens_used_by_list'], Queryoauth2_refresh_tokens_used_by_listArgs, MeshContext>,
  /** Outpost Viewset **/
  outposts_instances_list: InContextSdkMethod<Query['outposts_instances_list'], Queryoutposts_instances_listArgs, MeshContext>,
  /** Outpost Viewset **/
  outposts_instances_retrieve: InContextSdkMethod<Query['outposts_instances_retrieve'], Queryoutposts_instances_retrieveArgs, MeshContext>,
  /** Get outposts current health **/
  outposts_instances_health_list: InContextSdkMethod<Query['outposts_instances_health_list'], Queryoutposts_instances_health_listArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  outposts_instances_used_by_list: InContextSdkMethod<Query['outposts_instances_used_by_list'], Queryoutposts_instances_used_by_listArgs, MeshContext>,
  /** Global default outpost config **/
  outposts_instances_default_settings_retrieve: InContextSdkMethod<Query['outposts_instances_default_settings_retrieve'], {}, MeshContext>,
  /** LDAPProvider Viewset **/
  outposts_ldap_list: InContextSdkMethod<Query['outposts_ldap_list'], Queryoutposts_ldap_listArgs, MeshContext>,
  /** LDAPProvider Viewset **/
  outposts_ldap_retrieve: InContextSdkMethod<Query['outposts_ldap_retrieve'], Queryoutposts_ldap_retrieveArgs, MeshContext>,
  /** ProxyProvider Viewset **/
  outposts_proxy_list: InContextSdkMethod<Query['outposts_proxy_list'], Queryoutposts_proxy_listArgs, MeshContext>,
  /** ProxyProvider Viewset **/
  outposts_proxy_retrieve: InContextSdkMethod<Query['outposts_proxy_retrieve'], Queryoutposts_proxy_retrieveArgs, MeshContext>,
  /** RadiusProvider Viewset **/
  outposts_radius_list: InContextSdkMethod<Query['outposts_radius_list'], Queryoutposts_radius_listArgs, MeshContext>,
  /** RadiusProvider Viewset **/
  outposts_radius_retrieve: InContextSdkMethod<Query['outposts_radius_retrieve'], Queryoutposts_radius_retrieveArgs, MeshContext>,
  /** ServiceConnection Viewset **/
  outposts_service_connections_all_list: InContextSdkMethod<Query['outposts_service_connections_all_list'], Queryoutposts_service_connections_all_listArgs, MeshContext>,
  /** ServiceConnection Viewset **/
  outposts_service_connections_all_retrieve: InContextSdkMethod<Query['outposts_service_connections_all_retrieve'], Queryoutposts_service_connections_all_retrieveArgs, MeshContext>,
  /** Get the service connection's state **/
  outposts_service_connections_all_state_retrieve: InContextSdkMethod<Query['outposts_service_connections_all_state_retrieve'], Queryoutposts_service_connections_all_state_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  outposts_service_connections_all_used_by_list: InContextSdkMethod<Query['outposts_service_connections_all_used_by_list'], Queryoutposts_service_connections_all_used_by_listArgs, MeshContext>,
  /** Get all creatable service connection types **/
  outposts_service_connections_all_types_list: InContextSdkMethod<Query['outposts_service_connections_all_types_list'], {}, MeshContext>,
  /** DockerServiceConnection Viewset **/
  outposts_service_connections_docker_list: InContextSdkMethod<Query['outposts_service_connections_docker_list'], Queryoutposts_service_connections_docker_listArgs, MeshContext>,
  /** DockerServiceConnection Viewset **/
  outposts_service_connections_docker_retrieve: InContextSdkMethod<Query['outposts_service_connections_docker_retrieve'], Queryoutposts_service_connections_docker_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  outposts_service_connections_docker_used_by_list: InContextSdkMethod<Query['outposts_service_connections_docker_used_by_list'], Queryoutposts_service_connections_docker_used_by_listArgs, MeshContext>,
  /** KubernetesServiceConnection Viewset **/
  outposts_service_connections_kubernetes_list: InContextSdkMethod<Query['outposts_service_connections_kubernetes_list'], Queryoutposts_service_connections_kubernetes_listArgs, MeshContext>,
  /** KubernetesServiceConnection Viewset **/
  outposts_service_connections_kubernetes_retrieve: InContextSdkMethod<Query['outposts_service_connections_kubernetes_retrieve'], Queryoutposts_service_connections_kubernetes_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  outposts_service_connections_kubernetes_used_by_list: InContextSdkMethod<Query['outposts_service_connections_kubernetes_used_by_list'], Queryoutposts_service_connections_kubernetes_used_by_listArgs, MeshContext>,
  /** Policy Viewset **/
  policies_all_list: InContextSdkMethod<Query['policies_all_list'], Querypolicies_all_listArgs, MeshContext>,
  /** Policy Viewset **/
  policies_all_retrieve: InContextSdkMethod<Query['policies_all_retrieve'], Querypolicies_all_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  policies_all_used_by_list: InContextSdkMethod<Query['policies_all_used_by_list'], Querypolicies_all_used_by_listArgs, MeshContext>,
  /** Info about cached policies **/
  policies_all_cache_info_retrieve: InContextSdkMethod<Query['policies_all_cache_info_retrieve'], {}, MeshContext>,
  /** Get all creatable policy types **/
  policies_all_types_list: InContextSdkMethod<Query['policies_all_types_list'], {}, MeshContext>,
  /** PolicyBinding Viewset **/
  policies_bindings_list: InContextSdkMethod<Query['policies_bindings_list'], Querypolicies_bindings_listArgs, MeshContext>,
  /** PolicyBinding Viewset **/
  policies_bindings_retrieve: InContextSdkMethod<Query['policies_bindings_retrieve'], Querypolicies_bindings_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  policies_bindings_used_by_list: InContextSdkMethod<Query['policies_bindings_used_by_list'], Querypolicies_bindings_used_by_listArgs, MeshContext>,
  /** Dummy Viewset **/
  policies_dummy_list: InContextSdkMethod<Query['policies_dummy_list'], Querypolicies_dummy_listArgs, MeshContext>,
  /** Dummy Viewset **/
  policies_dummy_retrieve: InContextSdkMethod<Query['policies_dummy_retrieve'], Querypolicies_dummy_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  policies_dummy_used_by_list: InContextSdkMethod<Query['policies_dummy_used_by_list'], Querypolicies_dummy_used_by_listArgs, MeshContext>,
  /** Event Matcher Policy Viewset **/
  policies_event_matcher_list: InContextSdkMethod<Query['policies_event_matcher_list'], Querypolicies_event_matcher_listArgs, MeshContext>,
  /** Event Matcher Policy Viewset **/
  policies_event_matcher_retrieve: InContextSdkMethod<Query['policies_event_matcher_retrieve'], Querypolicies_event_matcher_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  policies_event_matcher_used_by_list: InContextSdkMethod<Query['policies_event_matcher_used_by_list'], Querypolicies_event_matcher_used_by_listArgs, MeshContext>,
  /** Source Viewset **/
  policies_expression_list: InContextSdkMethod<Query['policies_expression_list'], Querypolicies_expression_listArgs, MeshContext>,
  /** Source Viewset **/
  policies_expression_retrieve: InContextSdkMethod<Query['policies_expression_retrieve'], Querypolicies_expression_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  policies_expression_used_by_list: InContextSdkMethod<Query['policies_expression_used_by_list'], Querypolicies_expression_used_by_listArgs, MeshContext>,
  /** Password Policy Viewset **/
  policies_password_list: InContextSdkMethod<Query['policies_password_list'], Querypolicies_password_listArgs, MeshContext>,
  /** Password Policy Viewset **/
  policies_password_retrieve: InContextSdkMethod<Query['policies_password_retrieve'], Querypolicies_password_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  policies_password_used_by_list: InContextSdkMethod<Query['policies_password_used_by_list'], Querypolicies_password_used_by_listArgs, MeshContext>,
  /** Password Expiry Viewset **/
  policies_password_expiry_list: InContextSdkMethod<Query['policies_password_expiry_list'], Querypolicies_password_expiry_listArgs, MeshContext>,
  /** Password Expiry Viewset **/
  policies_password_expiry_retrieve: InContextSdkMethod<Query['policies_password_expiry_retrieve'], Querypolicies_password_expiry_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  policies_password_expiry_used_by_list: InContextSdkMethod<Query['policies_password_expiry_used_by_list'], Querypolicies_password_expiry_used_by_listArgs, MeshContext>,
  /** Reputation Policy Viewset **/
  policies_reputation_list: InContextSdkMethod<Query['policies_reputation_list'], Querypolicies_reputation_listArgs, MeshContext>,
  /** Reputation Policy Viewset **/
  policies_reputation_retrieve: InContextSdkMethod<Query['policies_reputation_retrieve'], Querypolicies_reputation_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  policies_reputation_used_by_list: InContextSdkMethod<Query['policies_reputation_used_by_list'], Querypolicies_reputation_used_by_listArgs, MeshContext>,
  /** Reputation Viewset **/
  policies_reputation_scores_list: InContextSdkMethod<Query['policies_reputation_scores_list'], Querypolicies_reputation_scores_listArgs, MeshContext>,
  /** Reputation Viewset **/
  policies_reputation_scores_retrieve: InContextSdkMethod<Query['policies_reputation_scores_retrieve'], Querypolicies_reputation_scores_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  policies_reputation_scores_used_by_list: InContextSdkMethod<Query['policies_reputation_scores_used_by_list'], Querypolicies_reputation_scores_used_by_listArgs, MeshContext>,
  /** PropertyMapping Viewset **/
  propertymappings_all_list: InContextSdkMethod<Query['propertymappings_all_list'], Querypropertymappings_all_listArgs, MeshContext>,
  /** PropertyMapping Viewset **/
  propertymappings_all_retrieve: InContextSdkMethod<Query['propertymappings_all_retrieve'], Querypropertymappings_all_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  propertymappings_all_used_by_list: InContextSdkMethod<Query['propertymappings_all_used_by_list'], Querypropertymappings_all_used_by_listArgs, MeshContext>,
  /** Get all creatable property-mapping types **/
  propertymappings_all_types_list: InContextSdkMethod<Query['propertymappings_all_types_list'], {}, MeshContext>,
  /** LDAP PropertyMapping Viewset **/
  propertymappings_ldap_list: InContextSdkMethod<Query['propertymappings_ldap_list'], Querypropertymappings_ldap_listArgs, MeshContext>,
  /** LDAP PropertyMapping Viewset **/
  propertymappings_ldap_retrieve: InContextSdkMethod<Query['propertymappings_ldap_retrieve'], Querypropertymappings_ldap_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  propertymappings_ldap_used_by_list: InContextSdkMethod<Query['propertymappings_ldap_used_by_list'], Querypropertymappings_ldap_used_by_listArgs, MeshContext>,
  /** NotificationWebhookMapping Viewset **/
  propertymappings_notification_list: InContextSdkMethod<Query['propertymappings_notification_list'], Querypropertymappings_notification_listArgs, MeshContext>,
  /** NotificationWebhookMapping Viewset **/
  propertymappings_notification_retrieve: InContextSdkMethod<Query['propertymappings_notification_retrieve'], Querypropertymappings_notification_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  propertymappings_notification_used_by_list: InContextSdkMethod<Query['propertymappings_notification_used_by_list'], Querypropertymappings_notification_used_by_listArgs, MeshContext>,
  /** RACPropertyMapping Viewset **/
  propertymappings_rac_list: InContextSdkMethod<Query['propertymappings_rac_list'], Querypropertymappings_rac_listArgs, MeshContext>,
  /** RACPropertyMapping Viewset **/
  propertymappings_rac_retrieve: InContextSdkMethod<Query['propertymappings_rac_retrieve'], Querypropertymappings_rac_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  propertymappings_rac_used_by_list: InContextSdkMethod<Query['propertymappings_rac_used_by_list'], Querypropertymappings_rac_used_by_listArgs, MeshContext>,
  /** SAMLPropertyMapping Viewset **/
  propertymappings_saml_list: InContextSdkMethod<Query['propertymappings_saml_list'], Querypropertymappings_saml_listArgs, MeshContext>,
  /** SAMLPropertyMapping Viewset **/
  propertymappings_saml_retrieve: InContextSdkMethod<Query['propertymappings_saml_retrieve'], Querypropertymappings_saml_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  propertymappings_saml_used_by_list: InContextSdkMethod<Query['propertymappings_saml_used_by_list'], Querypropertymappings_saml_used_by_listArgs, MeshContext>,
  /** SCIMMapping Viewset **/
  propertymappings_scim_list: InContextSdkMethod<Query['propertymappings_scim_list'], Querypropertymappings_scim_listArgs, MeshContext>,
  /** SCIMMapping Viewset **/
  propertymappings_scim_retrieve: InContextSdkMethod<Query['propertymappings_scim_retrieve'], Querypropertymappings_scim_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  propertymappings_scim_used_by_list: InContextSdkMethod<Query['propertymappings_scim_used_by_list'], Querypropertymappings_scim_used_by_listArgs, MeshContext>,
  /** ScopeMapping Viewset **/
  propertymappings_scope_list: InContextSdkMethod<Query['propertymappings_scope_list'], Querypropertymappings_scope_listArgs, MeshContext>,
  /** ScopeMapping Viewset **/
  propertymappings_scope_retrieve: InContextSdkMethod<Query['propertymappings_scope_retrieve'], Querypropertymappings_scope_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  propertymappings_scope_used_by_list: InContextSdkMethod<Query['propertymappings_scope_used_by_list'], Querypropertymappings_scope_used_by_listArgs, MeshContext>,
  /** Provider Viewset **/
  providers_all_list: InContextSdkMethod<Query['providers_all_list'], Queryproviders_all_listArgs, MeshContext>,
  /** Provider Viewset **/
  providers_all_retrieve: InContextSdkMethod<Query['providers_all_retrieve'], Queryproviders_all_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  providers_all_used_by_list: InContextSdkMethod<Query['providers_all_used_by_list'], Queryproviders_all_used_by_listArgs, MeshContext>,
  /** Get all creatable provider types **/
  providers_all_types_list: InContextSdkMethod<Query['providers_all_types_list'], {}, MeshContext>,
  /** LDAPProvider Viewset **/
  providers_ldap_list: InContextSdkMethod<Query['providers_ldap_list'], Queryproviders_ldap_listArgs, MeshContext>,
  /** LDAPProvider Viewset **/
  providers_ldap_retrieve: InContextSdkMethod<Query['providers_ldap_retrieve'], Queryproviders_ldap_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  providers_ldap_used_by_list: InContextSdkMethod<Query['providers_ldap_used_by_list'], Queryproviders_ldap_used_by_listArgs, MeshContext>,
  /** OAuth2Provider Viewset **/
  providers_oauth2_list: InContextSdkMethod<Query['providers_oauth2_list'], Queryproviders_oauth2_listArgs, MeshContext>,
  /** OAuth2Provider Viewset **/
  providers_oauth2_retrieve: InContextSdkMethod<Query['providers_oauth2_retrieve'], Queryproviders_oauth2_retrieveArgs, MeshContext>,
  /** Preview user data for provider **/
  providers_oauth2_preview_user_retrieve: InContextSdkMethod<Query['providers_oauth2_preview_user_retrieve'], Queryproviders_oauth2_preview_user_retrieveArgs, MeshContext>,
  /** Get Providers setup URLs **/
  providers_oauth2_setup_urls_retrieve: InContextSdkMethod<Query['providers_oauth2_setup_urls_retrieve'], Queryproviders_oauth2_setup_urls_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  providers_oauth2_used_by_list: InContextSdkMethod<Query['providers_oauth2_used_by_list'], Queryproviders_oauth2_used_by_listArgs, MeshContext>,
  /** ProxyProvider Viewset **/
  providers_proxy_list: InContextSdkMethod<Query['providers_proxy_list'], Queryproviders_proxy_listArgs, MeshContext>,
  /** ProxyProvider Viewset **/
  providers_proxy_retrieve: InContextSdkMethod<Query['providers_proxy_retrieve'], Queryproviders_proxy_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  providers_proxy_used_by_list: InContextSdkMethod<Query['providers_proxy_used_by_list'], Queryproviders_proxy_used_by_listArgs, MeshContext>,
  /** RACProvider Viewset **/
  providers_rac_list: InContextSdkMethod<Query['providers_rac_list'], Queryproviders_rac_listArgs, MeshContext>,
  /** RACProvider Viewset **/
  providers_rac_retrieve: InContextSdkMethod<Query['providers_rac_retrieve'], Queryproviders_rac_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  providers_rac_used_by_list: InContextSdkMethod<Query['providers_rac_used_by_list'], Queryproviders_rac_used_by_listArgs, MeshContext>,
  /** RadiusProvider Viewset **/
  providers_radius_list: InContextSdkMethod<Query['providers_radius_list'], Queryproviders_radius_listArgs, MeshContext>,
  /** RadiusProvider Viewset **/
  providers_radius_retrieve: InContextSdkMethod<Query['providers_radius_retrieve'], Queryproviders_radius_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  providers_radius_used_by_list: InContextSdkMethod<Query['providers_radius_used_by_list'], Queryproviders_radius_used_by_listArgs, MeshContext>,
  /** SAMLProvider Viewset **/
  providers_saml_list: InContextSdkMethod<Query['providers_saml_list'], Queryproviders_saml_listArgs, MeshContext>,
  /** SAMLProvider Viewset **/
  providers_saml_retrieve: InContextSdkMethod<Query['providers_saml_retrieve'], Queryproviders_saml_retrieveArgs, MeshContext>,
  /** Return metadata as XML string **/
  providers_saml_metadata_retrieve: InContextSdkMethod<Query['providers_saml_metadata_retrieve'], Queryproviders_saml_metadata_retrieveArgs, MeshContext>,
  /** Preview user data for provider **/
  providers_saml_preview_user_retrieve: InContextSdkMethod<Query['providers_saml_preview_user_retrieve'], Queryproviders_saml_preview_user_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  providers_saml_used_by_list: InContextSdkMethod<Query['providers_saml_used_by_list'], Queryproviders_saml_used_by_listArgs, MeshContext>,
  /** SCIMProvider Viewset **/
  providers_scim_list: InContextSdkMethod<Query['providers_scim_list'], Queryproviders_scim_listArgs, MeshContext>,
  /** SCIMProvider Viewset **/
  providers_scim_retrieve: InContextSdkMethod<Query['providers_scim_retrieve'], Queryproviders_scim_retrieveArgs, MeshContext>,
  /** Get provider's sync status **/
  providers_scim_sync_status_retrieve: InContextSdkMethod<Query['providers_scim_sync_status_retrieve'], Queryproviders_scim_sync_status_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  providers_scim_used_by_list: InContextSdkMethod<Query['providers_scim_used_by_list'], Queryproviders_scim_used_by_listArgs, MeshContext>,
  /** ConnectionToken Viewset **/
  rac_connection_tokens_list: InContextSdkMethod<Query['rac_connection_tokens_list'], Queryrac_connection_tokens_listArgs, MeshContext>,
  /** ConnectionToken Viewset **/
  rac_connection_tokens_retrieve: InContextSdkMethod<Query['rac_connection_tokens_retrieve'], Queryrac_connection_tokens_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  rac_connection_tokens_used_by_list: InContextSdkMethod<Query['rac_connection_tokens_used_by_list'], Queryrac_connection_tokens_used_by_listArgs, MeshContext>,
  /** List accessible endpoints **/
  rac_endpoints_list: InContextSdkMethod<Query['rac_endpoints_list'], Queryrac_endpoints_listArgs, MeshContext>,
  /** Endpoint Viewset **/
  rac_endpoints_retrieve: InContextSdkMethod<Query['rac_endpoints_retrieve'], Queryrac_endpoints_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  rac_endpoints_used_by_list: InContextSdkMethod<Query['rac_endpoints_used_by_list'], Queryrac_endpoints_used_by_listArgs, MeshContext>,
  /** Read-only list of all permissions, filterable by model and app **/
  rbac_permissions_list: InContextSdkMethod<Query['rbac_permissions_list'], Queryrbac_permissions_listArgs, MeshContext>,
  /** Read-only list of all permissions, filterable by model and app **/
  rbac_permissions_retrieve: InContextSdkMethod<Query['rbac_permissions_retrieve'], Queryrbac_permissions_retrieveArgs, MeshContext>,
  /** Get assigned object permissions for a single object **/
  rbac_permissions_assigned_by_roles_list: InContextSdkMethod<Query['rbac_permissions_assigned_by_roles_list'], Queryrbac_permissions_assigned_by_roles_listArgs, MeshContext>,
  /** Get assigned object permissions for a single object **/
  rbac_permissions_assigned_by_users_list: InContextSdkMethod<Query['rbac_permissions_assigned_by_users_list'], Queryrbac_permissions_assigned_by_users_listArgs, MeshContext>,
  /** Get a role's assigned object permissions **/
  rbac_permissions_roles_list: InContextSdkMethod<Query['rbac_permissions_roles_list'], Queryrbac_permissions_roles_listArgs, MeshContext>,
  /** Get a users's assigned object permissions **/
  rbac_permissions_users_list: InContextSdkMethod<Query['rbac_permissions_users_list'], Queryrbac_permissions_users_listArgs, MeshContext>,
  /** Role viewset **/
  rbac_roles_list: InContextSdkMethod<Query['rbac_roles_list'], Queryrbac_roles_listArgs, MeshContext>,
  /** Role viewset **/
  rbac_roles_retrieve: InContextSdkMethod<Query['rbac_roles_retrieve'], Queryrbac_roles_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  rbac_roles_used_by_list: InContextSdkMethod<Query['rbac_roles_used_by_list'], Queryrbac_roles_used_by_listArgs, MeshContext>,
  /** Retrieve public configuration options **/
  root_config_retrieve: InContextSdkMethod<Query['root_config_retrieve'], {}, MeshContext>,
  /** OpenApi3 schema for this API. Format can be selected via content negotiation.

- YAML: application/vnd.oai.openapi
- JSON: application/vnd.oai.openapi+json **/
  schema_retrieve: InContextSdkMethod<Query['schema_retrieve'], Queryschema_retrieveArgs, MeshContext>,
  /** Source Viewset **/
  sources_all_list: InContextSdkMethod<Query['sources_all_list'], Querysources_all_listArgs, MeshContext>,
  /** Source Viewset **/
  sources_all_retrieve: InContextSdkMethod<Query['sources_all_retrieve'], Querysources_all_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  sources_all_used_by_list: InContextSdkMethod<Query['sources_all_used_by_list'], Querysources_all_used_by_listArgs, MeshContext>,
  /** Get all creatable source types **/
  sources_all_types_list: InContextSdkMethod<Query['sources_all_types_list'], {}, MeshContext>,
  /** Get all sources the user can configure **/
  sources_all_user_settings_list: InContextSdkMethod<Query['sources_all_user_settings_list'], {}, MeshContext>,
  /** LDAP Source Viewset **/
  sources_ldap_list: InContextSdkMethod<Query['sources_ldap_list'], Querysources_ldap_listArgs, MeshContext>,
  /** LDAP Source Viewset **/
  sources_ldap_retrieve: InContextSdkMethod<Query['sources_ldap_retrieve'], Querysources_ldap_retrieveArgs, MeshContext>,
  /** Get raw LDAP data to debug **/
  sources_ldap_debug_retrieve: InContextSdkMethod<Query['sources_ldap_debug_retrieve'], Querysources_ldap_debug_retrieveArgs, MeshContext>,
  /** Get source's sync status **/
  sources_ldap_sync_status_retrieve: InContextSdkMethod<Query['sources_ldap_sync_status_retrieve'], Querysources_ldap_sync_status_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  sources_ldap_used_by_list: InContextSdkMethod<Query['sources_ldap_used_by_list'], Querysources_ldap_used_by_listArgs, MeshContext>,
  /** Source Viewset **/
  sources_oauth_list: InContextSdkMethod<Query['sources_oauth_list'], Querysources_oauth_listArgs, MeshContext>,
  /** Source Viewset **/
  sources_oauth_retrieve: InContextSdkMethod<Query['sources_oauth_retrieve'], Querysources_oauth_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  sources_oauth_used_by_list: InContextSdkMethod<Query['sources_oauth_used_by_list'], Querysources_oauth_used_by_listArgs, MeshContext>,
  /** Get all creatable source types. If ?name is set, only returns the type for <name>.
If <name> isn't found, returns the default type. **/
  sources_oauth_source_types_list: InContextSdkMethod<Query['sources_oauth_source_types_list'], Querysources_oauth_source_types_listArgs, MeshContext>,
  /** Plex source Viewset **/
  sources_plex_list: InContextSdkMethod<Query['sources_plex_list'], Querysources_plex_listArgs, MeshContext>,
  /** Plex source Viewset **/
  sources_plex_retrieve: InContextSdkMethod<Query['sources_plex_retrieve'], Querysources_plex_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  sources_plex_used_by_list: InContextSdkMethod<Query['sources_plex_used_by_list'], Querysources_plex_used_by_listArgs, MeshContext>,
  /** SAMLSource Viewset **/
  sources_saml_list: InContextSdkMethod<Query['sources_saml_list'], Querysources_saml_listArgs, MeshContext>,
  /** SAMLSource Viewset **/
  sources_saml_retrieve: InContextSdkMethod<Query['sources_saml_retrieve'], Querysources_saml_retrieveArgs, MeshContext>,
  /** Return metadata as XML string **/
  sources_saml_metadata_retrieve: InContextSdkMethod<Query['sources_saml_metadata_retrieve'], Querysources_saml_metadata_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  sources_saml_used_by_list: InContextSdkMethod<Query['sources_saml_used_by_list'], Querysources_saml_used_by_listArgs, MeshContext>,
  /** SCIMSource Viewset **/
  sources_scim_list: InContextSdkMethod<Query['sources_scim_list'], Querysources_scim_listArgs, MeshContext>,
  /** SCIMSource Viewset **/
  sources_scim_retrieve: InContextSdkMethod<Query['sources_scim_retrieve'], Querysources_scim_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  sources_scim_used_by_list: InContextSdkMethod<Query['sources_scim_used_by_list'], Querysources_scim_used_by_listArgs, MeshContext>,
  /** SCIMSourceGroup Viewset **/
  sources_scim_groups_list: InContextSdkMethod<Query['sources_scim_groups_list'], Querysources_scim_groups_listArgs, MeshContext>,
  /** SCIMSourceGroup Viewset **/
  sources_scim_groups_retrieve: InContextSdkMethod<Query['sources_scim_groups_retrieve'], Querysources_scim_groups_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  sources_scim_groups_used_by_list: InContextSdkMethod<Query['sources_scim_groups_used_by_list'], Querysources_scim_groups_used_by_listArgs, MeshContext>,
  /** SCIMSourceUser Viewset **/
  sources_scim_users_list: InContextSdkMethod<Query['sources_scim_users_list'], Querysources_scim_users_listArgs, MeshContext>,
  /** SCIMSourceUser Viewset **/
  sources_scim_users_retrieve: InContextSdkMethod<Query['sources_scim_users_retrieve'], Querysources_scim_users_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  sources_scim_users_used_by_list: InContextSdkMethod<Query['sources_scim_users_used_by_list'], Querysources_scim_users_used_by_listArgs, MeshContext>,
  /** User-source connection Viewset **/
  sources_user_connections_all_list: InContextSdkMethod<Query['sources_user_connections_all_list'], Querysources_user_connections_all_listArgs, MeshContext>,
  /** User-source connection Viewset **/
  sources_user_connections_all_retrieve: InContextSdkMethod<Query['sources_user_connections_all_retrieve'], Querysources_user_connections_all_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  sources_user_connections_all_used_by_list: InContextSdkMethod<Query['sources_user_connections_all_used_by_list'], Querysources_user_connections_all_used_by_listArgs, MeshContext>,
  /** Source Viewset **/
  sources_user_connections_oauth_list: InContextSdkMethod<Query['sources_user_connections_oauth_list'], Querysources_user_connections_oauth_listArgs, MeshContext>,
  /** Source Viewset **/
  sources_user_connections_oauth_retrieve: InContextSdkMethod<Query['sources_user_connections_oauth_retrieve'], Querysources_user_connections_oauth_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  sources_user_connections_oauth_used_by_list: InContextSdkMethod<Query['sources_user_connections_oauth_used_by_list'], Querysources_user_connections_oauth_used_by_listArgs, MeshContext>,
  /** Plex Source connection Serializer **/
  sources_user_connections_plex_list: InContextSdkMethod<Query['sources_user_connections_plex_list'], Querysources_user_connections_plex_listArgs, MeshContext>,
  /** Plex Source connection Serializer **/
  sources_user_connections_plex_retrieve: InContextSdkMethod<Query['sources_user_connections_plex_retrieve'], Querysources_user_connections_plex_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  sources_user_connections_plex_used_by_list: InContextSdkMethod<Query['sources_user_connections_plex_used_by_list'], Querysources_user_connections_plex_used_by_listArgs, MeshContext>,
  /** Source Viewset **/
  sources_user_connections_saml_list: InContextSdkMethod<Query['sources_user_connections_saml_list'], Querysources_user_connections_saml_listArgs, MeshContext>,
  /** Source Viewset **/
  sources_user_connections_saml_retrieve: InContextSdkMethod<Query['sources_user_connections_saml_retrieve'], Querysources_user_connections_saml_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  sources_user_connections_saml_used_by_list: InContextSdkMethod<Query['sources_user_connections_saml_used_by_list'], Querysources_user_connections_saml_used_by_listArgs, MeshContext>,
  /** Stage Viewset **/
  stages_all_list: InContextSdkMethod<Query['stages_all_list'], Querystages_all_listArgs, MeshContext>,
  /** Stage Viewset **/
  stages_all_retrieve: InContextSdkMethod<Query['stages_all_retrieve'], Querystages_all_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  stages_all_used_by_list: InContextSdkMethod<Query['stages_all_used_by_list'], Querystages_all_used_by_listArgs, MeshContext>,
  /** Get all creatable stage types **/
  stages_all_types_list: InContextSdkMethod<Query['stages_all_types_list'], {}, MeshContext>,
  /** Get all stages the user can configure **/
  stages_all_user_settings_list: InContextSdkMethod<Query['stages_all_user_settings_list'], {}, MeshContext>,
  /** AuthenticatorDuoStage Viewset **/
  stages_authenticator_duo_list: InContextSdkMethod<Query['stages_authenticator_duo_list'], Querystages_authenticator_duo_listArgs, MeshContext>,
  /** AuthenticatorDuoStage Viewset **/
  stages_authenticator_duo_retrieve: InContextSdkMethod<Query['stages_authenticator_duo_retrieve'], Querystages_authenticator_duo_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  stages_authenticator_duo_used_by_list: InContextSdkMethod<Query['stages_authenticator_duo_used_by_list'], Querystages_authenticator_duo_used_by_listArgs, MeshContext>,
  /** AuthenticatorSMSStage Viewset **/
  stages_authenticator_sms_list: InContextSdkMethod<Query['stages_authenticator_sms_list'], Querystages_authenticator_sms_listArgs, MeshContext>,
  /** AuthenticatorSMSStage Viewset **/
  stages_authenticator_sms_retrieve: InContextSdkMethod<Query['stages_authenticator_sms_retrieve'], Querystages_authenticator_sms_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  stages_authenticator_sms_used_by_list: InContextSdkMethod<Query['stages_authenticator_sms_used_by_list'], Querystages_authenticator_sms_used_by_listArgs, MeshContext>,
  /** AuthenticatorStaticStage Viewset **/
  stages_authenticator_static_list: InContextSdkMethod<Query['stages_authenticator_static_list'], Querystages_authenticator_static_listArgs, MeshContext>,
  /** AuthenticatorStaticStage Viewset **/
  stages_authenticator_static_retrieve: InContextSdkMethod<Query['stages_authenticator_static_retrieve'], Querystages_authenticator_static_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  stages_authenticator_static_used_by_list: InContextSdkMethod<Query['stages_authenticator_static_used_by_list'], Querystages_authenticator_static_used_by_listArgs, MeshContext>,
  /** AuthenticatorTOTPStage Viewset **/
  stages_authenticator_totp_list: InContextSdkMethod<Query['stages_authenticator_totp_list'], Querystages_authenticator_totp_listArgs, MeshContext>,
  /** AuthenticatorTOTPStage Viewset **/
  stages_authenticator_totp_retrieve: InContextSdkMethod<Query['stages_authenticator_totp_retrieve'], Querystages_authenticator_totp_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  stages_authenticator_totp_used_by_list: InContextSdkMethod<Query['stages_authenticator_totp_used_by_list'], Querystages_authenticator_totp_used_by_listArgs, MeshContext>,
  /** AuthenticatorValidateStage Viewset **/
  stages_authenticator_validate_list: InContextSdkMethod<Query['stages_authenticator_validate_list'], Querystages_authenticator_validate_listArgs, MeshContext>,
  /** AuthenticatorValidateStage Viewset **/
  stages_authenticator_validate_retrieve: InContextSdkMethod<Query['stages_authenticator_validate_retrieve'], Querystages_authenticator_validate_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  stages_authenticator_validate_used_by_list: InContextSdkMethod<Query['stages_authenticator_validate_used_by_list'], Querystages_authenticator_validate_used_by_listArgs, MeshContext>,
  /** AuthenticatorWebAuthnStage Viewset **/
  stages_authenticator_webauthn_list: InContextSdkMethod<Query['stages_authenticator_webauthn_list'], Querystages_authenticator_webauthn_listArgs, MeshContext>,
  /** AuthenticatorWebAuthnStage Viewset **/
  stages_authenticator_webauthn_retrieve: InContextSdkMethod<Query['stages_authenticator_webauthn_retrieve'], Querystages_authenticator_webauthn_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  stages_authenticator_webauthn_used_by_list: InContextSdkMethod<Query['stages_authenticator_webauthn_used_by_list'], Querystages_authenticator_webauthn_used_by_listArgs, MeshContext>,
  /** WebAuthnDeviceType Viewset **/
  stages_authenticator_webauthn_device_types_list: InContextSdkMethod<Query['stages_authenticator_webauthn_device_types_list'], Querystages_authenticator_webauthn_device_types_listArgs, MeshContext>,
  /** WebAuthnDeviceType Viewset **/
  stages_authenticator_webauthn_device_types_retrieve: InContextSdkMethod<Query['stages_authenticator_webauthn_device_types_retrieve'], Querystages_authenticator_webauthn_device_types_retrieveArgs, MeshContext>,
  /** CaptchaStage Viewset **/
  stages_captcha_list: InContextSdkMethod<Query['stages_captcha_list'], Querystages_captcha_listArgs, MeshContext>,
  /** CaptchaStage Viewset **/
  stages_captcha_retrieve: InContextSdkMethod<Query['stages_captcha_retrieve'], Querystages_captcha_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  stages_captcha_used_by_list: InContextSdkMethod<Query['stages_captcha_used_by_list'], Querystages_captcha_used_by_listArgs, MeshContext>,
  /** ConsentStage Viewset **/
  stages_consent_list: InContextSdkMethod<Query['stages_consent_list'], Querystages_consent_listArgs, MeshContext>,
  /** ConsentStage Viewset **/
  stages_consent_retrieve: InContextSdkMethod<Query['stages_consent_retrieve'], Querystages_consent_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  stages_consent_used_by_list: InContextSdkMethod<Query['stages_consent_used_by_list'], Querystages_consent_used_by_listArgs, MeshContext>,
  /** DenyStage Viewset **/
  stages_deny_list: InContextSdkMethod<Query['stages_deny_list'], Querystages_deny_listArgs, MeshContext>,
  /** DenyStage Viewset **/
  stages_deny_retrieve: InContextSdkMethod<Query['stages_deny_retrieve'], Querystages_deny_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  stages_deny_used_by_list: InContextSdkMethod<Query['stages_deny_used_by_list'], Querystages_deny_used_by_listArgs, MeshContext>,
  /** DummyStage Viewset **/
  stages_dummy_list: InContextSdkMethod<Query['stages_dummy_list'], Querystages_dummy_listArgs, MeshContext>,
  /** DummyStage Viewset **/
  stages_dummy_retrieve: InContextSdkMethod<Query['stages_dummy_retrieve'], Querystages_dummy_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  stages_dummy_used_by_list: InContextSdkMethod<Query['stages_dummy_used_by_list'], Querystages_dummy_used_by_listArgs, MeshContext>,
  /** EmailStage Viewset **/
  stages_email_list: InContextSdkMethod<Query['stages_email_list'], Querystages_email_listArgs, MeshContext>,
  /** EmailStage Viewset **/
  stages_email_retrieve: InContextSdkMethod<Query['stages_email_retrieve'], Querystages_email_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  stages_email_used_by_list: InContextSdkMethod<Query['stages_email_used_by_list'], Querystages_email_used_by_listArgs, MeshContext>,
  /** Get all available templates, including custom templates **/
  stages_email_templates_list: InContextSdkMethod<Query['stages_email_templates_list'], {}, MeshContext>,
  /** IdentificationStage Viewset **/
  stages_identification_list: InContextSdkMethod<Query['stages_identification_list'], Querystages_identification_listArgs, MeshContext>,
  /** IdentificationStage Viewset **/
  stages_identification_retrieve: InContextSdkMethod<Query['stages_identification_retrieve'], Querystages_identification_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  stages_identification_used_by_list: InContextSdkMethod<Query['stages_identification_used_by_list'], Querystages_identification_used_by_listArgs, MeshContext>,
  /** Invitation Viewset **/
  stages_invitation_invitations_list: InContextSdkMethod<Query['stages_invitation_invitations_list'], Querystages_invitation_invitations_listArgs, MeshContext>,
  /** Invitation Viewset **/
  stages_invitation_invitations_retrieve: InContextSdkMethod<Query['stages_invitation_invitations_retrieve'], Querystages_invitation_invitations_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  stages_invitation_invitations_used_by_list: InContextSdkMethod<Query['stages_invitation_invitations_used_by_list'], Querystages_invitation_invitations_used_by_listArgs, MeshContext>,
  /** InvitationStage Viewset **/
  stages_invitation_stages_list: InContextSdkMethod<Query['stages_invitation_stages_list'], Querystages_invitation_stages_listArgs, MeshContext>,
  /** InvitationStage Viewset **/
  stages_invitation_stages_retrieve: InContextSdkMethod<Query['stages_invitation_stages_retrieve'], Querystages_invitation_stages_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  stages_invitation_stages_used_by_list: InContextSdkMethod<Query['stages_invitation_stages_used_by_list'], Querystages_invitation_stages_used_by_listArgs, MeshContext>,
  /** PasswordStage Viewset **/
  stages_password_list: InContextSdkMethod<Query['stages_password_list'], Querystages_password_listArgs, MeshContext>,
  /** PasswordStage Viewset **/
  stages_password_retrieve: InContextSdkMethod<Query['stages_password_retrieve'], Querystages_password_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  stages_password_used_by_list: InContextSdkMethod<Query['stages_password_used_by_list'], Querystages_password_used_by_listArgs, MeshContext>,
  /** Prompt Viewset **/
  stages_prompt_prompts_list: InContextSdkMethod<Query['stages_prompt_prompts_list'], Querystages_prompt_prompts_listArgs, MeshContext>,
  /** Prompt Viewset **/
  stages_prompt_prompts_retrieve: InContextSdkMethod<Query['stages_prompt_prompts_retrieve'], Querystages_prompt_prompts_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  stages_prompt_prompts_used_by_list: InContextSdkMethod<Query['stages_prompt_prompts_used_by_list'], Querystages_prompt_prompts_used_by_listArgs, MeshContext>,
  /** PromptStage Viewset **/
  stages_prompt_stages_list: InContextSdkMethod<Query['stages_prompt_stages_list'], Querystages_prompt_stages_listArgs, MeshContext>,
  /** PromptStage Viewset **/
  stages_prompt_stages_retrieve: InContextSdkMethod<Query['stages_prompt_stages_retrieve'], Querystages_prompt_stages_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  stages_prompt_stages_used_by_list: InContextSdkMethod<Query['stages_prompt_stages_used_by_list'], Querystages_prompt_stages_used_by_listArgs, MeshContext>,
  /** SourceStage Viewset **/
  stages_source_list: InContextSdkMethod<Query['stages_source_list'], Querystages_source_listArgs, MeshContext>,
  /** SourceStage Viewset **/
  stages_source_retrieve: InContextSdkMethod<Query['stages_source_retrieve'], Querystages_source_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  stages_source_used_by_list: InContextSdkMethod<Query['stages_source_used_by_list'], Querystages_source_used_by_listArgs, MeshContext>,
  /** UserDeleteStage Viewset **/
  stages_user_delete_list: InContextSdkMethod<Query['stages_user_delete_list'], Querystages_user_delete_listArgs, MeshContext>,
  /** UserDeleteStage Viewset **/
  stages_user_delete_retrieve: InContextSdkMethod<Query['stages_user_delete_retrieve'], Querystages_user_delete_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  stages_user_delete_used_by_list: InContextSdkMethod<Query['stages_user_delete_used_by_list'], Querystages_user_delete_used_by_listArgs, MeshContext>,
  /** UserLoginStage Viewset **/
  stages_user_login_list: InContextSdkMethod<Query['stages_user_login_list'], Querystages_user_login_listArgs, MeshContext>,
  /** UserLoginStage Viewset **/
  stages_user_login_retrieve: InContextSdkMethod<Query['stages_user_login_retrieve'], Querystages_user_login_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  stages_user_login_used_by_list: InContextSdkMethod<Query['stages_user_login_used_by_list'], Querystages_user_login_used_by_listArgs, MeshContext>,
  /** UserLogoutStage Viewset **/
  stages_user_logout_list: InContextSdkMethod<Query['stages_user_logout_list'], Querystages_user_logout_listArgs, MeshContext>,
  /** UserLogoutStage Viewset **/
  stages_user_logout_retrieve: InContextSdkMethod<Query['stages_user_logout_retrieve'], Querystages_user_logout_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  stages_user_logout_used_by_list: InContextSdkMethod<Query['stages_user_logout_used_by_list'], Querystages_user_logout_used_by_listArgs, MeshContext>,
  /** UserWriteStage Viewset **/
  stages_user_write_list: InContextSdkMethod<Query['stages_user_write_list'], Querystages_user_write_listArgs, MeshContext>,
  /** UserWriteStage Viewset **/
  stages_user_write_retrieve: InContextSdkMethod<Query['stages_user_write_retrieve'], Querystages_user_write_retrieveArgs, MeshContext>,
  /** Get a list of all objects that use this object **/
  stages_user_write_used_by_list: InContextSdkMethod<Query['stages_user_write_used_by_list'], Querystages_user_write_used_by_listArgs, MeshContext>
  };

  export type MutationSdk = {
      /** Settings view **/
  admin_settings_update: InContextSdkMethod<Mutation['admin_settings_update'], Mutationadmin_settings_updateArgs, MeshContext>,
  /** Settings view **/
  admin_settings_partial_update: InContextSdkMethod<Mutation['admin_settings_partial_update'], Mutationadmin_settings_partial_updateArgs, MeshContext>,
  /** Get system information. **/
  admin_system_create: InContextSdkMethod<Mutation['admin_system_create'], {}, MeshContext>,
  /** Viewset for Duo authenticator devices (for admins) **/
  authenticators_admin_duo_create: InContextSdkMethod<Mutation['authenticators_admin_duo_create'], Mutationauthenticators_admin_duo_createArgs, MeshContext>,
  /** Viewset for Duo authenticator devices (for admins) **/
  authenticators_admin_duo_update: InContextSdkMethod<Mutation['authenticators_admin_duo_update'], Mutationauthenticators_admin_duo_updateArgs, MeshContext>,
  /** Viewset for Duo authenticator devices (for admins) **/
  authenticators_admin_duo_partial_update: InContextSdkMethod<Mutation['authenticators_admin_duo_partial_update'], Mutationauthenticators_admin_duo_partial_updateArgs, MeshContext>,
  /** Viewset for Duo authenticator devices (for admins) **/
  authenticators_admin_duo_destroy: InContextSdkMethod<Mutation['authenticators_admin_duo_destroy'], Mutationauthenticators_admin_duo_destroyArgs, MeshContext>,
  /** Viewset for sms authenticator devices (for admins) **/
  authenticators_admin_sms_create: InContextSdkMethod<Mutation['authenticators_admin_sms_create'], Mutationauthenticators_admin_sms_createArgs, MeshContext>,
  /** Viewset for sms authenticator devices (for admins) **/
  authenticators_admin_sms_update: InContextSdkMethod<Mutation['authenticators_admin_sms_update'], Mutationauthenticators_admin_sms_updateArgs, MeshContext>,
  /** Viewset for sms authenticator devices (for admins) **/
  authenticators_admin_sms_partial_update: InContextSdkMethod<Mutation['authenticators_admin_sms_partial_update'], Mutationauthenticators_admin_sms_partial_updateArgs, MeshContext>,
  /** Viewset for sms authenticator devices (for admins) **/
  authenticators_admin_sms_destroy: InContextSdkMethod<Mutation['authenticators_admin_sms_destroy'], Mutationauthenticators_admin_sms_destroyArgs, MeshContext>,
  /** Viewset for static authenticator devices (for admins) **/
  authenticators_admin_static_create: InContextSdkMethod<Mutation['authenticators_admin_static_create'], Mutationauthenticators_admin_static_createArgs, MeshContext>,
  /** Viewset for static authenticator devices (for admins) **/
  authenticators_admin_static_update: InContextSdkMethod<Mutation['authenticators_admin_static_update'], Mutationauthenticators_admin_static_updateArgs, MeshContext>,
  /** Viewset for static authenticator devices (for admins) **/
  authenticators_admin_static_partial_update: InContextSdkMethod<Mutation['authenticators_admin_static_partial_update'], Mutationauthenticators_admin_static_partial_updateArgs, MeshContext>,
  /** Viewset for static authenticator devices (for admins) **/
  authenticators_admin_static_destroy: InContextSdkMethod<Mutation['authenticators_admin_static_destroy'], Mutationauthenticators_admin_static_destroyArgs, MeshContext>,
  /** Viewset for totp authenticator devices (for admins) **/
  authenticators_admin_totp_create: InContextSdkMethod<Mutation['authenticators_admin_totp_create'], Mutationauthenticators_admin_totp_createArgs, MeshContext>,
  /** Viewset for totp authenticator devices (for admins) **/
  authenticators_admin_totp_update: InContextSdkMethod<Mutation['authenticators_admin_totp_update'], Mutationauthenticators_admin_totp_updateArgs, MeshContext>,
  /** Viewset for totp authenticator devices (for admins) **/
  authenticators_admin_totp_partial_update: InContextSdkMethod<Mutation['authenticators_admin_totp_partial_update'], Mutationauthenticators_admin_totp_partial_updateArgs, MeshContext>,
  /** Viewset for totp authenticator devices (for admins) **/
  authenticators_admin_totp_destroy: InContextSdkMethod<Mutation['authenticators_admin_totp_destroy'], Mutationauthenticators_admin_totp_destroyArgs, MeshContext>,
  /** Viewset for WebAuthn authenticator devices (for admins) **/
  authenticators_admin_webauthn_create: InContextSdkMethod<Mutation['authenticators_admin_webauthn_create'], Mutationauthenticators_admin_webauthn_createArgs, MeshContext>,
  /** Viewset for WebAuthn authenticator devices (for admins) **/
  authenticators_admin_webauthn_update: InContextSdkMethod<Mutation['authenticators_admin_webauthn_update'], Mutationauthenticators_admin_webauthn_updateArgs, MeshContext>,
  /** Viewset for WebAuthn authenticator devices (for admins) **/
  authenticators_admin_webauthn_partial_update: InContextSdkMethod<Mutation['authenticators_admin_webauthn_partial_update'], Mutationauthenticators_admin_webauthn_partial_updateArgs, MeshContext>,
  /** Viewset for WebAuthn authenticator devices (for admins) **/
  authenticators_admin_webauthn_destroy: InContextSdkMethod<Mutation['authenticators_admin_webauthn_destroy'], Mutationauthenticators_admin_webauthn_destroyArgs, MeshContext>,
  /** Viewset for Duo authenticator devices **/
  authenticators_duo_update: InContextSdkMethod<Mutation['authenticators_duo_update'], Mutationauthenticators_duo_updateArgs, MeshContext>,
  /** Viewset for Duo authenticator devices **/
  authenticators_duo_partial_update: InContextSdkMethod<Mutation['authenticators_duo_partial_update'], Mutationauthenticators_duo_partial_updateArgs, MeshContext>,
  /** Viewset for Duo authenticator devices **/
  authenticators_duo_destroy: InContextSdkMethod<Mutation['authenticators_duo_destroy'], Mutationauthenticators_duo_destroyArgs, MeshContext>,
  /** Viewset for sms authenticator devices **/
  authenticators_sms_update: InContextSdkMethod<Mutation['authenticators_sms_update'], Mutationauthenticators_sms_updateArgs, MeshContext>,
  /** Viewset for sms authenticator devices **/
  authenticators_sms_partial_update: InContextSdkMethod<Mutation['authenticators_sms_partial_update'], Mutationauthenticators_sms_partial_updateArgs, MeshContext>,
  /** Viewset for sms authenticator devices **/
  authenticators_sms_destroy: InContextSdkMethod<Mutation['authenticators_sms_destroy'], Mutationauthenticators_sms_destroyArgs, MeshContext>,
  /** Viewset for static authenticator devices **/
  authenticators_static_update: InContextSdkMethod<Mutation['authenticators_static_update'], Mutationauthenticators_static_updateArgs, MeshContext>,
  /** Viewset for static authenticator devices **/
  authenticators_static_partial_update: InContextSdkMethod<Mutation['authenticators_static_partial_update'], Mutationauthenticators_static_partial_updateArgs, MeshContext>,
  /** Viewset for static authenticator devices **/
  authenticators_static_destroy: InContextSdkMethod<Mutation['authenticators_static_destroy'], Mutationauthenticators_static_destroyArgs, MeshContext>,
  /** Viewset for totp authenticator devices **/
  authenticators_totp_update: InContextSdkMethod<Mutation['authenticators_totp_update'], Mutationauthenticators_totp_updateArgs, MeshContext>,
  /** Viewset for totp authenticator devices **/
  authenticators_totp_partial_update: InContextSdkMethod<Mutation['authenticators_totp_partial_update'], Mutationauthenticators_totp_partial_updateArgs, MeshContext>,
  /** Viewset for totp authenticator devices **/
  authenticators_totp_destroy: InContextSdkMethod<Mutation['authenticators_totp_destroy'], Mutationauthenticators_totp_destroyArgs, MeshContext>,
  /** Viewset for WebAuthn authenticator devices **/
  authenticators_webauthn_update: InContextSdkMethod<Mutation['authenticators_webauthn_update'], Mutationauthenticators_webauthn_updateArgs, MeshContext>,
  /** Viewset for WebAuthn authenticator devices **/
  authenticators_webauthn_partial_update: InContextSdkMethod<Mutation['authenticators_webauthn_partial_update'], Mutationauthenticators_webauthn_partial_updateArgs, MeshContext>,
  /** Viewset for WebAuthn authenticator devices **/
  authenticators_webauthn_destroy: InContextSdkMethod<Mutation['authenticators_webauthn_destroy'], Mutationauthenticators_webauthn_destroyArgs, MeshContext>,
  /** Application Viewset **/
  core_applications_create: InContextSdkMethod<Mutation['core_applications_create'], Mutationcore_applications_createArgs, MeshContext>,
  /** Application Viewset **/
  core_applications_update: InContextSdkMethod<Mutation['core_applications_update'], Mutationcore_applications_updateArgs, MeshContext>,
  /** Application Viewset **/
  core_applications_partial_update: InContextSdkMethod<Mutation['core_applications_partial_update'], Mutationcore_applications_partial_updateArgs, MeshContext>,
  /** Application Viewset **/
  core_applications_destroy: InContextSdkMethod<Mutation['core_applications_destroy'], Mutationcore_applications_destroyArgs, MeshContext>,
  /** Set application icon **/
  core_applications_set_icon_create: InContextSdkMethod<Mutation['core_applications_set_icon_create'], Mutationcore_applications_set_icon_createArgs, MeshContext>,
  /** Set application icon (as URL) **/
  core_applications_set_icon_url_create: InContextSdkMethod<Mutation['core_applications_set_icon_url_create'], Mutationcore_applications_set_icon_url_createArgs, MeshContext>,
  /** AuthenticatedSession Viewset **/
  core_authenticated_sessions_destroy: InContextSdkMethod<Mutation['core_authenticated_sessions_destroy'], Mutationcore_authenticated_sessions_destroyArgs, MeshContext>,
  /** Brand Viewset **/
  core_brands_create: InContextSdkMethod<Mutation['core_brands_create'], Mutationcore_brands_createArgs, MeshContext>,
  /** Brand Viewset **/
  core_brands_update: InContextSdkMethod<Mutation['core_brands_update'], Mutationcore_brands_updateArgs, MeshContext>,
  /** Brand Viewset **/
  core_brands_partial_update: InContextSdkMethod<Mutation['core_brands_partial_update'], Mutationcore_brands_partial_updateArgs, MeshContext>,
  /** Brand Viewset **/
  core_brands_destroy: InContextSdkMethod<Mutation['core_brands_destroy'], Mutationcore_brands_destroyArgs, MeshContext>,
  /** Group Viewset **/
  core_groups_create: InContextSdkMethod<Mutation['core_groups_create'], Mutationcore_groups_createArgs, MeshContext>,
  /** Group Viewset **/
  core_groups_update: InContextSdkMethod<Mutation['core_groups_update'], Mutationcore_groups_updateArgs, MeshContext>,
  /** Group Viewset **/
  core_groups_partial_update: InContextSdkMethod<Mutation['core_groups_partial_update'], Mutationcore_groups_partial_updateArgs, MeshContext>,
  /** Group Viewset **/
  core_groups_destroy: InContextSdkMethod<Mutation['core_groups_destroy'], Mutationcore_groups_destroyArgs, MeshContext>,
  /** Add user to group **/
  core_groups_add_user_create: InContextSdkMethod<Mutation['core_groups_add_user_create'], Mutationcore_groups_add_user_createArgs, MeshContext>,
  /** Add user to group **/
  core_groups_remove_user_create: InContextSdkMethod<Mutation['core_groups_remove_user_create'], Mutationcore_groups_remove_user_createArgs, MeshContext>,
  /** Token Viewset **/
  core_tokens_create: InContextSdkMethod<Mutation['core_tokens_create'], Mutationcore_tokens_createArgs, MeshContext>,
  /** Token Viewset **/
  core_tokens_update: InContextSdkMethod<Mutation['core_tokens_update'], Mutationcore_tokens_updateArgs, MeshContext>,
  /** Token Viewset **/
  core_tokens_partial_update: InContextSdkMethod<Mutation['core_tokens_partial_update'], Mutationcore_tokens_partial_updateArgs, MeshContext>,
  /** Token Viewset **/
  core_tokens_destroy: InContextSdkMethod<Mutation['core_tokens_destroy'], Mutationcore_tokens_destroyArgs, MeshContext>,
  /** Set token key. Action is logged as event. `authentik_core.set_token_key` permission
is required. **/
  core_tokens_set_key_create: InContextSdkMethod<Mutation['core_tokens_set_key_create'], Mutationcore_tokens_set_key_createArgs, MeshContext>,
  /** Convert data into a blueprint, validate it and apply it **/
  core_transactional_applications_update: InContextSdkMethod<Mutation['core_transactional_applications_update'], Mutationcore_transactional_applications_updateArgs, MeshContext>,
  /** UserConsent Viewset **/
  core_user_consent_destroy: InContextSdkMethod<Mutation['core_user_consent_destroy'], Mutationcore_user_consent_destroyArgs, MeshContext>,
  /** User Viewset **/
  core_users_create: InContextSdkMethod<Mutation['core_users_create'], Mutationcore_users_createArgs, MeshContext>,
  /** User Viewset **/
  core_users_update: InContextSdkMethod<Mutation['core_users_update'], Mutationcore_users_updateArgs, MeshContext>,
  /** User Viewset **/
  core_users_partial_update: InContextSdkMethod<Mutation['core_users_partial_update'], Mutationcore_users_partial_updateArgs, MeshContext>,
  /** User Viewset **/
  core_users_destroy: InContextSdkMethod<Mutation['core_users_destroy'], Mutationcore_users_destroyArgs, MeshContext>,
  /** Impersonate a user **/
  core_users_impersonate_create: InContextSdkMethod<Mutation['core_users_impersonate_create'], Mutationcore_users_impersonate_createArgs, MeshContext>,
  /** Create a temporary link that a user can use to recover their accounts **/
  core_users_recovery_create: InContextSdkMethod<Mutation['core_users_recovery_create'], Mutationcore_users_recovery_createArgs, MeshContext>,
  /** Create a temporary link that a user can use to recover their accounts **/
  core_users_recovery_email_create: InContextSdkMethod<Mutation['core_users_recovery_email_create'], Mutationcore_users_recovery_email_createArgs, MeshContext>,
  /** Set password for user **/
  core_users_set_password_create: InContextSdkMethod<Mutation['core_users_set_password_create'], Mutationcore_users_set_password_createArgs, MeshContext>,
  /** Create a new user account that is marked as a service account **/
  core_users_service_account_create: InContextSdkMethod<Mutation['core_users_service_account_create'], Mutationcore_users_service_account_createArgs, MeshContext>,
  /** CertificateKeyPair Viewset **/
  crypto_certificatekeypairs_create: InContextSdkMethod<Mutation['crypto_certificatekeypairs_create'], Mutationcrypto_certificatekeypairs_createArgs, MeshContext>,
  /** CertificateKeyPair Viewset **/
  crypto_certificatekeypairs_update: InContextSdkMethod<Mutation['crypto_certificatekeypairs_update'], Mutationcrypto_certificatekeypairs_updateArgs, MeshContext>,
  /** CertificateKeyPair Viewset **/
  crypto_certificatekeypairs_partial_update: InContextSdkMethod<Mutation['crypto_certificatekeypairs_partial_update'], Mutationcrypto_certificatekeypairs_partial_updateArgs, MeshContext>,
  /** CertificateKeyPair Viewset **/
  crypto_certificatekeypairs_destroy: InContextSdkMethod<Mutation['crypto_certificatekeypairs_destroy'], Mutationcrypto_certificatekeypairs_destroyArgs, MeshContext>,
  /** Generate a new, self-signed certificate-key pair **/
  crypto_certificatekeypairs_generate_create: InContextSdkMethod<Mutation['crypto_certificatekeypairs_generate_create'], Mutationcrypto_certificatekeypairs_generate_createArgs, MeshContext>,
  /** License Viewset **/
  enterprise_license_create: InContextSdkMethod<Mutation['enterprise_license_create'], Mutationenterprise_license_createArgs, MeshContext>,
  /** License Viewset **/
  enterprise_license_update: InContextSdkMethod<Mutation['enterprise_license_update'], Mutationenterprise_license_updateArgs, MeshContext>,
  /** License Viewset **/
  enterprise_license_partial_update: InContextSdkMethod<Mutation['enterprise_license_partial_update'], Mutationenterprise_license_partial_updateArgs, MeshContext>,
  /** License Viewset **/
  enterprise_license_destroy: InContextSdkMethod<Mutation['enterprise_license_destroy'], Mutationenterprise_license_destroyArgs, MeshContext>,
  /** Event Read-Only Viewset **/
  events_events_create: InContextSdkMethod<Mutation['events_events_create'], Mutationevents_events_createArgs, MeshContext>,
  /** Event Read-Only Viewset **/
  events_events_update: InContextSdkMethod<Mutation['events_events_update'], Mutationevents_events_updateArgs, MeshContext>,
  /** Event Read-Only Viewset **/
  events_events_partial_update: InContextSdkMethod<Mutation['events_events_partial_update'], Mutationevents_events_partial_updateArgs, MeshContext>,
  /** Event Read-Only Viewset **/
  events_events_destroy: InContextSdkMethod<Mutation['events_events_destroy'], Mutationevents_events_destroyArgs, MeshContext>,
  /** Notification Viewset **/
  events_notifications_update: InContextSdkMethod<Mutation['events_notifications_update'], Mutationevents_notifications_updateArgs, MeshContext>,
  /** Notification Viewset **/
  events_notifications_partial_update: InContextSdkMethod<Mutation['events_notifications_partial_update'], Mutationevents_notifications_partial_updateArgs, MeshContext>,
  /** Notification Viewset **/
  events_notifications_destroy: InContextSdkMethod<Mutation['events_notifications_destroy'], Mutationevents_notifications_destroyArgs, MeshContext>,
  /** Mark all the user's notifications as seen **/
  events_notifications_mark_all_seen_create: InContextSdkMethod<Mutation['events_notifications_mark_all_seen_create'], {}, MeshContext>,
  /** NotificationRule Viewset **/
  events_rules_create: InContextSdkMethod<Mutation['events_rules_create'], Mutationevents_rules_createArgs, MeshContext>,
  /** NotificationRule Viewset **/
  events_rules_update: InContextSdkMethod<Mutation['events_rules_update'], Mutationevents_rules_updateArgs, MeshContext>,
  /** NotificationRule Viewset **/
  events_rules_partial_update: InContextSdkMethod<Mutation['events_rules_partial_update'], Mutationevents_rules_partial_updateArgs, MeshContext>,
  /** NotificationRule Viewset **/
  events_rules_destroy: InContextSdkMethod<Mutation['events_rules_destroy'], Mutationevents_rules_destroyArgs, MeshContext>,
  /** Run task **/
  events_system_tasks_run_create: InContextSdkMethod<Mutation['events_system_tasks_run_create'], Mutationevents_system_tasks_run_createArgs, MeshContext>,
  /** NotificationTransport Viewset **/
  events_transports_create: InContextSdkMethod<Mutation['events_transports_create'], Mutationevents_transports_createArgs, MeshContext>,
  /** NotificationTransport Viewset **/
  events_transports_update: InContextSdkMethod<Mutation['events_transports_update'], Mutationevents_transports_updateArgs, MeshContext>,
  /** NotificationTransport Viewset **/
  events_transports_partial_update: InContextSdkMethod<Mutation['events_transports_partial_update'], Mutationevents_transports_partial_updateArgs, MeshContext>,
  /** NotificationTransport Viewset **/
  events_transports_destroy: InContextSdkMethod<Mutation['events_transports_destroy'], Mutationevents_transports_destroyArgs, MeshContext>,
  /** Send example notification using selected transport. Requires
Modify permissions. **/
  events_transports_test_create: InContextSdkMethod<Mutation['events_transports_test_create'], Mutationevents_transports_test_createArgs, MeshContext>,
  /** FlowStageBinding Viewset **/
  flows_bindings_create: InContextSdkMethod<Mutation['flows_bindings_create'], Mutationflows_bindings_createArgs, MeshContext>,
  /** FlowStageBinding Viewset **/
  flows_bindings_update: InContextSdkMethod<Mutation['flows_bindings_update'], Mutationflows_bindings_updateArgs, MeshContext>,
  /** FlowStageBinding Viewset **/
  flows_bindings_partial_update: InContextSdkMethod<Mutation['flows_bindings_partial_update'], Mutationflows_bindings_partial_updateArgs, MeshContext>,
  /** FlowStageBinding Viewset **/
  flows_bindings_destroy: InContextSdkMethod<Mutation['flows_bindings_destroy'], Mutationflows_bindings_destroyArgs, MeshContext>,
  /** Solve the previously retrieved challenge and advanced to the next stage. **/
  flows_executor_solve: InContextSdkMethod<Mutation['flows_executor_solve'], Mutationflows_executor_solveArgs, MeshContext>,
  /** Flow Viewset **/
  flows_instances_create: InContextSdkMethod<Mutation['flows_instances_create'], Mutationflows_instances_createArgs, MeshContext>,
  /** Flow Viewset **/
  flows_instances_update: InContextSdkMethod<Mutation['flows_instances_update'], Mutationflows_instances_updateArgs, MeshContext>,
  /** Flow Viewset **/
  flows_instances_partial_update: InContextSdkMethod<Mutation['flows_instances_partial_update'], Mutationflows_instances_partial_updateArgs, MeshContext>,
  /** Flow Viewset **/
  flows_instances_destroy: InContextSdkMethod<Mutation['flows_instances_destroy'], Mutationflows_instances_destroyArgs, MeshContext>,
  /** Set Flow background **/
  flows_instances_set_background_create: InContextSdkMethod<Mutation['flows_instances_set_background_create'], Mutationflows_instances_set_background_createArgs, MeshContext>,
  /** Set Flow background (as URL) **/
  flows_instances_set_background_url_create: InContextSdkMethod<Mutation['flows_instances_set_background_url_create'], Mutationflows_instances_set_background_url_createArgs, MeshContext>,
  /** Clear flow cache **/
  flows_instances_cache_clear_create: InContextSdkMethod<Mutation['flows_instances_cache_clear_create'], {}, MeshContext>,
  /** Import flow from .yaml file **/
  flows_instances_import_create: InContextSdkMethod<Mutation['flows_instances_import_create'], Mutationflows_instances_import_createArgs, MeshContext>,
  /** Blueprint instances **/
  managed_blueprints_create: InContextSdkMethod<Mutation['managed_blueprints_create'], Mutationmanaged_blueprints_createArgs, MeshContext>,
  /** Blueprint instances **/
  managed_blueprints_update: InContextSdkMethod<Mutation['managed_blueprints_update'], Mutationmanaged_blueprints_updateArgs, MeshContext>,
  /** Blueprint instances **/
  managed_blueprints_partial_update: InContextSdkMethod<Mutation['managed_blueprints_partial_update'], Mutationmanaged_blueprints_partial_updateArgs, MeshContext>,
  /** Blueprint instances **/
  managed_blueprints_destroy: InContextSdkMethod<Mutation['managed_blueprints_destroy'], Mutationmanaged_blueprints_destroyArgs, MeshContext>,
  /** Apply a blueprint **/
  managed_blueprints_apply_create: InContextSdkMethod<Mutation['managed_blueprints_apply_create'], Mutationmanaged_blueprints_apply_createArgs, MeshContext>,
  /** AccessToken Viewset **/
  oauth2_access_tokens_destroy: InContextSdkMethod<Mutation['oauth2_access_tokens_destroy'], Mutationoauth2_access_tokens_destroyArgs, MeshContext>,
  /** AuthorizationCode Viewset **/
  oauth2_authorization_codes_destroy: InContextSdkMethod<Mutation['oauth2_authorization_codes_destroy'], Mutationoauth2_authorization_codes_destroyArgs, MeshContext>,
  /** RefreshToken Viewset **/
  oauth2_refresh_tokens_destroy: InContextSdkMethod<Mutation['oauth2_refresh_tokens_destroy'], Mutationoauth2_refresh_tokens_destroyArgs, MeshContext>,
  /** Outpost Viewset **/
  outposts_instances_create: InContextSdkMethod<Mutation['outposts_instances_create'], Mutationoutposts_instances_createArgs, MeshContext>,
  /** Outpost Viewset **/
  outposts_instances_update: InContextSdkMethod<Mutation['outposts_instances_update'], Mutationoutposts_instances_updateArgs, MeshContext>,
  /** Outpost Viewset **/
  outposts_instances_partial_update: InContextSdkMethod<Mutation['outposts_instances_partial_update'], Mutationoutposts_instances_partial_updateArgs, MeshContext>,
  /** Outpost Viewset **/
  outposts_instances_destroy: InContextSdkMethod<Mutation['outposts_instances_destroy'], Mutationoutposts_instances_destroyArgs, MeshContext>,
  /** ServiceConnection Viewset **/
  outposts_service_connections_all_destroy: InContextSdkMethod<Mutation['outposts_service_connections_all_destroy'], Mutationoutposts_service_connections_all_destroyArgs, MeshContext>,
  /** DockerServiceConnection Viewset **/
  outposts_service_connections_docker_create: InContextSdkMethod<Mutation['outposts_service_connections_docker_create'], Mutationoutposts_service_connections_docker_createArgs, MeshContext>,
  /** DockerServiceConnection Viewset **/
  outposts_service_connections_docker_update: InContextSdkMethod<Mutation['outposts_service_connections_docker_update'], Mutationoutposts_service_connections_docker_updateArgs, MeshContext>,
  /** DockerServiceConnection Viewset **/
  outposts_service_connections_docker_partial_update: InContextSdkMethod<Mutation['outposts_service_connections_docker_partial_update'], Mutationoutposts_service_connections_docker_partial_updateArgs, MeshContext>,
  /** DockerServiceConnection Viewset **/
  outposts_service_connections_docker_destroy: InContextSdkMethod<Mutation['outposts_service_connections_docker_destroy'], Mutationoutposts_service_connections_docker_destroyArgs, MeshContext>,
  /** KubernetesServiceConnection Viewset **/
  outposts_service_connections_kubernetes_create: InContextSdkMethod<Mutation['outposts_service_connections_kubernetes_create'], Mutationoutposts_service_connections_kubernetes_createArgs, MeshContext>,
  /** KubernetesServiceConnection Viewset **/
  outposts_service_connections_kubernetes_update: InContextSdkMethod<Mutation['outposts_service_connections_kubernetes_update'], Mutationoutposts_service_connections_kubernetes_updateArgs, MeshContext>,
  /** KubernetesServiceConnection Viewset **/
  outposts_service_connections_kubernetes_partial_update: InContextSdkMethod<Mutation['outposts_service_connections_kubernetes_partial_update'], Mutationoutposts_service_connections_kubernetes_partial_updateArgs, MeshContext>,
  /** KubernetesServiceConnection Viewset **/
  outposts_service_connections_kubernetes_destroy: InContextSdkMethod<Mutation['outposts_service_connections_kubernetes_destroy'], Mutationoutposts_service_connections_kubernetes_destroyArgs, MeshContext>,
  /** Policy Viewset **/
  policies_all_destroy: InContextSdkMethod<Mutation['policies_all_destroy'], Mutationpolicies_all_destroyArgs, MeshContext>,
  /** Test policy **/
  policies_all_test_create: InContextSdkMethod<Mutation['policies_all_test_create'], Mutationpolicies_all_test_createArgs, MeshContext>,
  /** Clear policy cache **/
  policies_all_cache_clear_create: InContextSdkMethod<Mutation['policies_all_cache_clear_create'], {}, MeshContext>,
  /** PolicyBinding Viewset **/
  policies_bindings_create: InContextSdkMethod<Mutation['policies_bindings_create'], Mutationpolicies_bindings_createArgs, MeshContext>,
  /** PolicyBinding Viewset **/
  policies_bindings_update: InContextSdkMethod<Mutation['policies_bindings_update'], Mutationpolicies_bindings_updateArgs, MeshContext>,
  /** PolicyBinding Viewset **/
  policies_bindings_partial_update: InContextSdkMethod<Mutation['policies_bindings_partial_update'], Mutationpolicies_bindings_partial_updateArgs, MeshContext>,
  /** PolicyBinding Viewset **/
  policies_bindings_destroy: InContextSdkMethod<Mutation['policies_bindings_destroy'], Mutationpolicies_bindings_destroyArgs, MeshContext>,
  /** Dummy Viewset **/
  policies_dummy_create: InContextSdkMethod<Mutation['policies_dummy_create'], Mutationpolicies_dummy_createArgs, MeshContext>,
  /** Dummy Viewset **/
  policies_dummy_update: InContextSdkMethod<Mutation['policies_dummy_update'], Mutationpolicies_dummy_updateArgs, MeshContext>,
  /** Dummy Viewset **/
  policies_dummy_partial_update: InContextSdkMethod<Mutation['policies_dummy_partial_update'], Mutationpolicies_dummy_partial_updateArgs, MeshContext>,
  /** Dummy Viewset **/
  policies_dummy_destroy: InContextSdkMethod<Mutation['policies_dummy_destroy'], Mutationpolicies_dummy_destroyArgs, MeshContext>,
  /** Event Matcher Policy Viewset **/
  policies_event_matcher_create: InContextSdkMethod<Mutation['policies_event_matcher_create'], Mutationpolicies_event_matcher_createArgs, MeshContext>,
  /** Event Matcher Policy Viewset **/
  policies_event_matcher_update: InContextSdkMethod<Mutation['policies_event_matcher_update'], Mutationpolicies_event_matcher_updateArgs, MeshContext>,
  /** Event Matcher Policy Viewset **/
  policies_event_matcher_partial_update: InContextSdkMethod<Mutation['policies_event_matcher_partial_update'], Mutationpolicies_event_matcher_partial_updateArgs, MeshContext>,
  /** Event Matcher Policy Viewset **/
  policies_event_matcher_destroy: InContextSdkMethod<Mutation['policies_event_matcher_destroy'], Mutationpolicies_event_matcher_destroyArgs, MeshContext>,
  /** Source Viewset **/
  policies_expression_create: InContextSdkMethod<Mutation['policies_expression_create'], Mutationpolicies_expression_createArgs, MeshContext>,
  /** Source Viewset **/
  policies_expression_update: InContextSdkMethod<Mutation['policies_expression_update'], Mutationpolicies_expression_updateArgs, MeshContext>,
  /** Source Viewset **/
  policies_expression_partial_update: InContextSdkMethod<Mutation['policies_expression_partial_update'], Mutationpolicies_expression_partial_updateArgs, MeshContext>,
  /** Source Viewset **/
  policies_expression_destroy: InContextSdkMethod<Mutation['policies_expression_destroy'], Mutationpolicies_expression_destroyArgs, MeshContext>,
  /** Password Policy Viewset **/
  policies_password_create: InContextSdkMethod<Mutation['policies_password_create'], Mutationpolicies_password_createArgs, MeshContext>,
  /** Password Policy Viewset **/
  policies_password_update: InContextSdkMethod<Mutation['policies_password_update'], Mutationpolicies_password_updateArgs, MeshContext>,
  /** Password Policy Viewset **/
  policies_password_partial_update: InContextSdkMethod<Mutation['policies_password_partial_update'], Mutationpolicies_password_partial_updateArgs, MeshContext>,
  /** Password Policy Viewset **/
  policies_password_destroy: InContextSdkMethod<Mutation['policies_password_destroy'], Mutationpolicies_password_destroyArgs, MeshContext>,
  /** Password Expiry Viewset **/
  policies_password_expiry_create: InContextSdkMethod<Mutation['policies_password_expiry_create'], Mutationpolicies_password_expiry_createArgs, MeshContext>,
  /** Password Expiry Viewset **/
  policies_password_expiry_update: InContextSdkMethod<Mutation['policies_password_expiry_update'], Mutationpolicies_password_expiry_updateArgs, MeshContext>,
  /** Password Expiry Viewset **/
  policies_password_expiry_partial_update: InContextSdkMethod<Mutation['policies_password_expiry_partial_update'], Mutationpolicies_password_expiry_partial_updateArgs, MeshContext>,
  /** Password Expiry Viewset **/
  policies_password_expiry_destroy: InContextSdkMethod<Mutation['policies_password_expiry_destroy'], Mutationpolicies_password_expiry_destroyArgs, MeshContext>,
  /** Reputation Policy Viewset **/
  policies_reputation_create: InContextSdkMethod<Mutation['policies_reputation_create'], Mutationpolicies_reputation_createArgs, MeshContext>,
  /** Reputation Policy Viewset **/
  policies_reputation_update: InContextSdkMethod<Mutation['policies_reputation_update'], Mutationpolicies_reputation_updateArgs, MeshContext>,
  /** Reputation Policy Viewset **/
  policies_reputation_partial_update: InContextSdkMethod<Mutation['policies_reputation_partial_update'], Mutationpolicies_reputation_partial_updateArgs, MeshContext>,
  /** Reputation Policy Viewset **/
  policies_reputation_destroy: InContextSdkMethod<Mutation['policies_reputation_destroy'], Mutationpolicies_reputation_destroyArgs, MeshContext>,
  /** Reputation Viewset **/
  policies_reputation_scores_destroy: InContextSdkMethod<Mutation['policies_reputation_scores_destroy'], Mutationpolicies_reputation_scores_destroyArgs, MeshContext>,
  /** PropertyMapping Viewset **/
  propertymappings_all_destroy: InContextSdkMethod<Mutation['propertymappings_all_destroy'], Mutationpropertymappings_all_destroyArgs, MeshContext>,
  /** Test Property Mapping **/
  propertymappings_all_test_create: InContextSdkMethod<Mutation['propertymappings_all_test_create'], Mutationpropertymappings_all_test_createArgs, MeshContext>,
  /** LDAP PropertyMapping Viewset **/
  propertymappings_ldap_create: InContextSdkMethod<Mutation['propertymappings_ldap_create'], Mutationpropertymappings_ldap_createArgs, MeshContext>,
  /** LDAP PropertyMapping Viewset **/
  propertymappings_ldap_update: InContextSdkMethod<Mutation['propertymappings_ldap_update'], Mutationpropertymappings_ldap_updateArgs, MeshContext>,
  /** LDAP PropertyMapping Viewset **/
  propertymappings_ldap_partial_update: InContextSdkMethod<Mutation['propertymappings_ldap_partial_update'], Mutationpropertymappings_ldap_partial_updateArgs, MeshContext>,
  /** LDAP PropertyMapping Viewset **/
  propertymappings_ldap_destroy: InContextSdkMethod<Mutation['propertymappings_ldap_destroy'], Mutationpropertymappings_ldap_destroyArgs, MeshContext>,
  /** NotificationWebhookMapping Viewset **/
  propertymappings_notification_create: InContextSdkMethod<Mutation['propertymappings_notification_create'], Mutationpropertymappings_notification_createArgs, MeshContext>,
  /** NotificationWebhookMapping Viewset **/
  propertymappings_notification_update: InContextSdkMethod<Mutation['propertymappings_notification_update'], Mutationpropertymappings_notification_updateArgs, MeshContext>,
  /** NotificationWebhookMapping Viewset **/
  propertymappings_notification_partial_update: InContextSdkMethod<Mutation['propertymappings_notification_partial_update'], Mutationpropertymappings_notification_partial_updateArgs, MeshContext>,
  /** NotificationWebhookMapping Viewset **/
  propertymappings_notification_destroy: InContextSdkMethod<Mutation['propertymappings_notification_destroy'], Mutationpropertymappings_notification_destroyArgs, MeshContext>,
  /** RACPropertyMapping Viewset **/
  propertymappings_rac_create: InContextSdkMethod<Mutation['propertymappings_rac_create'], Mutationpropertymappings_rac_createArgs, MeshContext>,
  /** RACPropertyMapping Viewset **/
  propertymappings_rac_update: InContextSdkMethod<Mutation['propertymappings_rac_update'], Mutationpropertymappings_rac_updateArgs, MeshContext>,
  /** RACPropertyMapping Viewset **/
  propertymappings_rac_partial_update: InContextSdkMethod<Mutation['propertymappings_rac_partial_update'], Mutationpropertymappings_rac_partial_updateArgs, MeshContext>,
  /** RACPropertyMapping Viewset **/
  propertymappings_rac_destroy: InContextSdkMethod<Mutation['propertymappings_rac_destroy'], Mutationpropertymappings_rac_destroyArgs, MeshContext>,
  /** SAMLPropertyMapping Viewset **/
  propertymappings_saml_create: InContextSdkMethod<Mutation['propertymappings_saml_create'], Mutationpropertymappings_saml_createArgs, MeshContext>,
  /** SAMLPropertyMapping Viewset **/
  propertymappings_saml_update: InContextSdkMethod<Mutation['propertymappings_saml_update'], Mutationpropertymappings_saml_updateArgs, MeshContext>,
  /** SAMLPropertyMapping Viewset **/
  propertymappings_saml_partial_update: InContextSdkMethod<Mutation['propertymappings_saml_partial_update'], Mutationpropertymappings_saml_partial_updateArgs, MeshContext>,
  /** SAMLPropertyMapping Viewset **/
  propertymappings_saml_destroy: InContextSdkMethod<Mutation['propertymappings_saml_destroy'], Mutationpropertymappings_saml_destroyArgs, MeshContext>,
  /** SCIMMapping Viewset **/
  propertymappings_scim_create: InContextSdkMethod<Mutation['propertymappings_scim_create'], Mutationpropertymappings_scim_createArgs, MeshContext>,
  /** SCIMMapping Viewset **/
  propertymappings_scim_update: InContextSdkMethod<Mutation['propertymappings_scim_update'], Mutationpropertymappings_scim_updateArgs, MeshContext>,
  /** SCIMMapping Viewset **/
  propertymappings_scim_partial_update: InContextSdkMethod<Mutation['propertymappings_scim_partial_update'], Mutationpropertymappings_scim_partial_updateArgs, MeshContext>,
  /** SCIMMapping Viewset **/
  propertymappings_scim_destroy: InContextSdkMethod<Mutation['propertymappings_scim_destroy'], Mutationpropertymappings_scim_destroyArgs, MeshContext>,
  /** ScopeMapping Viewset **/
  propertymappings_scope_create: InContextSdkMethod<Mutation['propertymappings_scope_create'], Mutationpropertymappings_scope_createArgs, MeshContext>,
  /** ScopeMapping Viewset **/
  propertymappings_scope_update: InContextSdkMethod<Mutation['propertymappings_scope_update'], Mutationpropertymappings_scope_updateArgs, MeshContext>,
  /** ScopeMapping Viewset **/
  propertymappings_scope_partial_update: InContextSdkMethod<Mutation['propertymappings_scope_partial_update'], Mutationpropertymappings_scope_partial_updateArgs, MeshContext>,
  /** ScopeMapping Viewset **/
  propertymappings_scope_destroy: InContextSdkMethod<Mutation['propertymappings_scope_destroy'], Mutationpropertymappings_scope_destroyArgs, MeshContext>,
  /** Provider Viewset **/
  providers_all_destroy: InContextSdkMethod<Mutation['providers_all_destroy'], Mutationproviders_all_destroyArgs, MeshContext>,
  /** LDAPProvider Viewset **/
  providers_ldap_create: InContextSdkMethod<Mutation['providers_ldap_create'], Mutationproviders_ldap_createArgs, MeshContext>,
  /** LDAPProvider Viewset **/
  providers_ldap_update: InContextSdkMethod<Mutation['providers_ldap_update'], Mutationproviders_ldap_updateArgs, MeshContext>,
  /** LDAPProvider Viewset **/
  providers_ldap_partial_update: InContextSdkMethod<Mutation['providers_ldap_partial_update'], Mutationproviders_ldap_partial_updateArgs, MeshContext>,
  /** LDAPProvider Viewset **/
  providers_ldap_destroy: InContextSdkMethod<Mutation['providers_ldap_destroy'], Mutationproviders_ldap_destroyArgs, MeshContext>,
  /** OAuth2Provider Viewset **/
  providers_oauth2_create: InContextSdkMethod<Mutation['providers_oauth2_create'], Mutationproviders_oauth2_createArgs, MeshContext>,
  /** OAuth2Provider Viewset **/
  providers_oauth2_update: InContextSdkMethod<Mutation['providers_oauth2_update'], Mutationproviders_oauth2_updateArgs, MeshContext>,
  /** OAuth2Provider Viewset **/
  providers_oauth2_partial_update: InContextSdkMethod<Mutation['providers_oauth2_partial_update'], Mutationproviders_oauth2_partial_updateArgs, MeshContext>,
  /** OAuth2Provider Viewset **/
  providers_oauth2_destroy: InContextSdkMethod<Mutation['providers_oauth2_destroy'], Mutationproviders_oauth2_destroyArgs, MeshContext>,
  /** ProxyProvider Viewset **/
  providers_proxy_create: InContextSdkMethod<Mutation['providers_proxy_create'], Mutationproviders_proxy_createArgs, MeshContext>,
  /** ProxyProvider Viewset **/
  providers_proxy_update: InContextSdkMethod<Mutation['providers_proxy_update'], Mutationproviders_proxy_updateArgs, MeshContext>,
  /** ProxyProvider Viewset **/
  providers_proxy_partial_update: InContextSdkMethod<Mutation['providers_proxy_partial_update'], Mutationproviders_proxy_partial_updateArgs, MeshContext>,
  /** ProxyProvider Viewset **/
  providers_proxy_destroy: InContextSdkMethod<Mutation['providers_proxy_destroy'], Mutationproviders_proxy_destroyArgs, MeshContext>,
  /** RACProvider Viewset **/
  providers_rac_create: InContextSdkMethod<Mutation['providers_rac_create'], Mutationproviders_rac_createArgs, MeshContext>,
  /** RACProvider Viewset **/
  providers_rac_update: InContextSdkMethod<Mutation['providers_rac_update'], Mutationproviders_rac_updateArgs, MeshContext>,
  /** RACProvider Viewset **/
  providers_rac_partial_update: InContextSdkMethod<Mutation['providers_rac_partial_update'], Mutationproviders_rac_partial_updateArgs, MeshContext>,
  /** RACProvider Viewset **/
  providers_rac_destroy: InContextSdkMethod<Mutation['providers_rac_destroy'], Mutationproviders_rac_destroyArgs, MeshContext>,
  /** RadiusProvider Viewset **/
  providers_radius_create: InContextSdkMethod<Mutation['providers_radius_create'], Mutationproviders_radius_createArgs, MeshContext>,
  /** RadiusProvider Viewset **/
  providers_radius_update: InContextSdkMethod<Mutation['providers_radius_update'], Mutationproviders_radius_updateArgs, MeshContext>,
  /** RadiusProvider Viewset **/
  providers_radius_partial_update: InContextSdkMethod<Mutation['providers_radius_partial_update'], Mutationproviders_radius_partial_updateArgs, MeshContext>,
  /** RadiusProvider Viewset **/
  providers_radius_destroy: InContextSdkMethod<Mutation['providers_radius_destroy'], Mutationproviders_radius_destroyArgs, MeshContext>,
  /** SAMLProvider Viewset **/
  providers_saml_create: InContextSdkMethod<Mutation['providers_saml_create'], Mutationproviders_saml_createArgs, MeshContext>,
  /** SAMLProvider Viewset **/
  providers_saml_update: InContextSdkMethod<Mutation['providers_saml_update'], Mutationproviders_saml_updateArgs, MeshContext>,
  /** SAMLProvider Viewset **/
  providers_saml_partial_update: InContextSdkMethod<Mutation['providers_saml_partial_update'], Mutationproviders_saml_partial_updateArgs, MeshContext>,
  /** SAMLProvider Viewset **/
  providers_saml_destroy: InContextSdkMethod<Mutation['providers_saml_destroy'], Mutationproviders_saml_destroyArgs, MeshContext>,
  /** Create provider from SAML Metadata **/
  providers_saml_import_metadata_create: InContextSdkMethod<Mutation['providers_saml_import_metadata_create'], Mutationproviders_saml_import_metadata_createArgs, MeshContext>,
  /** SCIMProvider Viewset **/
  providers_scim_create: InContextSdkMethod<Mutation['providers_scim_create'], Mutationproviders_scim_createArgs, MeshContext>,
  /** SCIMProvider Viewset **/
  providers_scim_update: InContextSdkMethod<Mutation['providers_scim_update'], Mutationproviders_scim_updateArgs, MeshContext>,
  /** SCIMProvider Viewset **/
  providers_scim_partial_update: InContextSdkMethod<Mutation['providers_scim_partial_update'], Mutationproviders_scim_partial_updateArgs, MeshContext>,
  /** SCIMProvider Viewset **/
  providers_scim_destroy: InContextSdkMethod<Mutation['providers_scim_destroy'], Mutationproviders_scim_destroyArgs, MeshContext>,
  /** ConnectionToken Viewset **/
  rac_connection_tokens_update: InContextSdkMethod<Mutation['rac_connection_tokens_update'], Mutationrac_connection_tokens_updateArgs, MeshContext>,
  /** ConnectionToken Viewset **/
  rac_connection_tokens_partial_update: InContextSdkMethod<Mutation['rac_connection_tokens_partial_update'], Mutationrac_connection_tokens_partial_updateArgs, MeshContext>,
  /** ConnectionToken Viewset **/
  rac_connection_tokens_destroy: InContextSdkMethod<Mutation['rac_connection_tokens_destroy'], Mutationrac_connection_tokens_destroyArgs, MeshContext>,
  /** Endpoint Viewset **/
  rac_endpoints_create: InContextSdkMethod<Mutation['rac_endpoints_create'], Mutationrac_endpoints_createArgs, MeshContext>,
  /** Endpoint Viewset **/
  rac_endpoints_update: InContextSdkMethod<Mutation['rac_endpoints_update'], Mutationrac_endpoints_updateArgs, MeshContext>,
  /** Endpoint Viewset **/
  rac_endpoints_partial_update: InContextSdkMethod<Mutation['rac_endpoints_partial_update'], Mutationrac_endpoints_partial_updateArgs, MeshContext>,
  /** Endpoint Viewset **/
  rac_endpoints_destroy: InContextSdkMethod<Mutation['rac_endpoints_destroy'], Mutationrac_endpoints_destroyArgs, MeshContext>,
  /** Assign permission(s) to role. When `object_pk` is set, the permissions
are only assigned to the specific object, otherwise they are assigned globally. **/
  rbac_permissions_assigned_by_roles_assign_create: InContextSdkMethod<Mutation['rbac_permissions_assigned_by_roles_assign_create'], Mutationrbac_permissions_assigned_by_roles_assign_createArgs, MeshContext>,
  /** Unassign permission(s) to role. When `object_pk` is set, the permissions
are only assigned to the specific object, otherwise they are assigned globally. **/
  rbac_permissions_assigned_by_roles_unassign_partial_update: InContextSdkMethod<Mutation['rbac_permissions_assigned_by_roles_unassign_partial_update'], Mutationrbac_permissions_assigned_by_roles_unassign_partial_updateArgs, MeshContext>,
  /** Assign permission(s) to user **/
  rbac_permissions_assigned_by_users_assign_create: InContextSdkMethod<Mutation['rbac_permissions_assigned_by_users_assign_create'], Mutationrbac_permissions_assigned_by_users_assign_createArgs, MeshContext>,
  /** Unassign permission(s) to user. When `object_pk` is set, the permissions
are only assigned to the specific object, otherwise they are assigned globally. **/
  rbac_permissions_assigned_by_users_unassign_partial_update: InContextSdkMethod<Mutation['rbac_permissions_assigned_by_users_unassign_partial_update'], Mutationrbac_permissions_assigned_by_users_unassign_partial_updateArgs, MeshContext>,
  /** Role viewset **/
  rbac_roles_create: InContextSdkMethod<Mutation['rbac_roles_create'], Mutationrbac_roles_createArgs, MeshContext>,
  /** Role viewset **/
  rbac_roles_update: InContextSdkMethod<Mutation['rbac_roles_update'], Mutationrbac_roles_updateArgs, MeshContext>,
  /** Role viewset **/
  rbac_roles_partial_update: InContextSdkMethod<Mutation['rbac_roles_partial_update'], Mutationrbac_roles_partial_updateArgs, MeshContext>,
  /** Role viewset **/
  rbac_roles_destroy: InContextSdkMethod<Mutation['rbac_roles_destroy'], Mutationrbac_roles_destroyArgs, MeshContext>,
  /** Source Viewset **/
  sources_all_destroy: InContextSdkMethod<Mutation['sources_all_destroy'], Mutationsources_all_destroyArgs, MeshContext>,
  /** Set source icon **/
  sources_all_set_icon_create: InContextSdkMethod<Mutation['sources_all_set_icon_create'], Mutationsources_all_set_icon_createArgs, MeshContext>,
  /** Set source icon (as URL) **/
  sources_all_set_icon_url_create: InContextSdkMethod<Mutation['sources_all_set_icon_url_create'], Mutationsources_all_set_icon_url_createArgs, MeshContext>,
  /** LDAP Source Viewset **/
  sources_ldap_create: InContextSdkMethod<Mutation['sources_ldap_create'], Mutationsources_ldap_createArgs, MeshContext>,
  /** LDAP Source Viewset **/
  sources_ldap_update: InContextSdkMethod<Mutation['sources_ldap_update'], Mutationsources_ldap_updateArgs, MeshContext>,
  /** LDAP Source Viewset **/
  sources_ldap_partial_update: InContextSdkMethod<Mutation['sources_ldap_partial_update'], Mutationsources_ldap_partial_updateArgs, MeshContext>,
  /** LDAP Source Viewset **/
  sources_ldap_destroy: InContextSdkMethod<Mutation['sources_ldap_destroy'], Mutationsources_ldap_destroyArgs, MeshContext>,
  /** Source Viewset **/
  sources_oauth_create: InContextSdkMethod<Mutation['sources_oauth_create'], Mutationsources_oauth_createArgs, MeshContext>,
  /** Source Viewset **/
  sources_oauth_update: InContextSdkMethod<Mutation['sources_oauth_update'], Mutationsources_oauth_updateArgs, MeshContext>,
  /** Source Viewset **/
  sources_oauth_partial_update: InContextSdkMethod<Mutation['sources_oauth_partial_update'], Mutationsources_oauth_partial_updateArgs, MeshContext>,
  /** Source Viewset **/
  sources_oauth_destroy: InContextSdkMethod<Mutation['sources_oauth_destroy'], Mutationsources_oauth_destroyArgs, MeshContext>,
  /** Plex source Viewset **/
  sources_plex_create: InContextSdkMethod<Mutation['sources_plex_create'], Mutationsources_plex_createArgs, MeshContext>,
  /** Plex source Viewset **/
  sources_plex_update: InContextSdkMethod<Mutation['sources_plex_update'], Mutationsources_plex_updateArgs, MeshContext>,
  /** Plex source Viewset **/
  sources_plex_partial_update: InContextSdkMethod<Mutation['sources_plex_partial_update'], Mutationsources_plex_partial_updateArgs, MeshContext>,
  /** Plex source Viewset **/
  sources_plex_destroy: InContextSdkMethod<Mutation['sources_plex_destroy'], Mutationsources_plex_destroyArgs, MeshContext>,
  /** Redeem a plex token, check it's access to resources against what's allowed
for the source, and redirect to an authentication/enrollment flow. **/
  sources_plex_redeem_token_create: InContextSdkMethod<Mutation['sources_plex_redeem_token_create'], Mutationsources_plex_redeem_token_createArgs, MeshContext>,
  /** Redeem a plex token for an authenticated user, creating a connection **/
  sources_plex_redeem_token_authenticated_create: InContextSdkMethod<Mutation['sources_plex_redeem_token_authenticated_create'], Mutationsources_plex_redeem_token_authenticated_createArgs, MeshContext>,
  /** SAMLSource Viewset **/
  sources_saml_create: InContextSdkMethod<Mutation['sources_saml_create'], Mutationsources_saml_createArgs, MeshContext>,
  /** SAMLSource Viewset **/
  sources_saml_update: InContextSdkMethod<Mutation['sources_saml_update'], Mutationsources_saml_updateArgs, MeshContext>,
  /** SAMLSource Viewset **/
  sources_saml_partial_update: InContextSdkMethod<Mutation['sources_saml_partial_update'], Mutationsources_saml_partial_updateArgs, MeshContext>,
  /** SAMLSource Viewset **/
  sources_saml_destroy: InContextSdkMethod<Mutation['sources_saml_destroy'], Mutationsources_saml_destroyArgs, MeshContext>,
  /** SCIMSource Viewset **/
  sources_scim_create: InContextSdkMethod<Mutation['sources_scim_create'], Mutationsources_scim_createArgs, MeshContext>,
  /** SCIMSource Viewset **/
  sources_scim_update: InContextSdkMethod<Mutation['sources_scim_update'], Mutationsources_scim_updateArgs, MeshContext>,
  /** SCIMSource Viewset **/
  sources_scim_partial_update: InContextSdkMethod<Mutation['sources_scim_partial_update'], Mutationsources_scim_partial_updateArgs, MeshContext>,
  /** SCIMSource Viewset **/
  sources_scim_destroy: InContextSdkMethod<Mutation['sources_scim_destroy'], Mutationsources_scim_destroyArgs, MeshContext>,
  /** SCIMSourceGroup Viewset **/
  sources_scim_groups_create: InContextSdkMethod<Mutation['sources_scim_groups_create'], Mutationsources_scim_groups_createArgs, MeshContext>,
  /** SCIMSourceGroup Viewset **/
  sources_scim_groups_update: InContextSdkMethod<Mutation['sources_scim_groups_update'], Mutationsources_scim_groups_updateArgs, MeshContext>,
  /** SCIMSourceGroup Viewset **/
  sources_scim_groups_partial_update: InContextSdkMethod<Mutation['sources_scim_groups_partial_update'], Mutationsources_scim_groups_partial_updateArgs, MeshContext>,
  /** SCIMSourceGroup Viewset **/
  sources_scim_groups_destroy: InContextSdkMethod<Mutation['sources_scim_groups_destroy'], Mutationsources_scim_groups_destroyArgs, MeshContext>,
  /** SCIMSourceUser Viewset **/
  sources_scim_users_create: InContextSdkMethod<Mutation['sources_scim_users_create'], Mutationsources_scim_users_createArgs, MeshContext>,
  /** SCIMSourceUser Viewset **/
  sources_scim_users_update: InContextSdkMethod<Mutation['sources_scim_users_update'], Mutationsources_scim_users_updateArgs, MeshContext>,
  /** SCIMSourceUser Viewset **/
  sources_scim_users_partial_update: InContextSdkMethod<Mutation['sources_scim_users_partial_update'], Mutationsources_scim_users_partial_updateArgs, MeshContext>,
  /** SCIMSourceUser Viewset **/
  sources_scim_users_destroy: InContextSdkMethod<Mutation['sources_scim_users_destroy'], Mutationsources_scim_users_destroyArgs, MeshContext>,
  /** User-source connection Viewset **/
  sources_user_connections_all_update: InContextSdkMethod<Mutation['sources_user_connections_all_update'], Mutationsources_user_connections_all_updateArgs, MeshContext>,
  /** User-source connection Viewset **/
  sources_user_connections_all_partial_update: InContextSdkMethod<Mutation['sources_user_connections_all_partial_update'], Mutationsources_user_connections_all_partial_updateArgs, MeshContext>,
  /** User-source connection Viewset **/
  sources_user_connections_all_destroy: InContextSdkMethod<Mutation['sources_user_connections_all_destroy'], Mutationsources_user_connections_all_destroyArgs, MeshContext>,
  /** Source Viewset **/
  sources_user_connections_oauth_create: InContextSdkMethod<Mutation['sources_user_connections_oauth_create'], Mutationsources_user_connections_oauth_createArgs, MeshContext>,
  /** Source Viewset **/
  sources_user_connections_oauth_update: InContextSdkMethod<Mutation['sources_user_connections_oauth_update'], Mutationsources_user_connections_oauth_updateArgs, MeshContext>,
  /** Source Viewset **/
  sources_user_connections_oauth_partial_update: InContextSdkMethod<Mutation['sources_user_connections_oauth_partial_update'], Mutationsources_user_connections_oauth_partial_updateArgs, MeshContext>,
  /** Source Viewset **/
  sources_user_connections_oauth_destroy: InContextSdkMethod<Mutation['sources_user_connections_oauth_destroy'], Mutationsources_user_connections_oauth_destroyArgs, MeshContext>,
  /** Plex Source connection Serializer **/
  sources_user_connections_plex_create: InContextSdkMethod<Mutation['sources_user_connections_plex_create'], Mutationsources_user_connections_plex_createArgs, MeshContext>,
  /** Plex Source connection Serializer **/
  sources_user_connections_plex_update: InContextSdkMethod<Mutation['sources_user_connections_plex_update'], Mutationsources_user_connections_plex_updateArgs, MeshContext>,
  /** Plex Source connection Serializer **/
  sources_user_connections_plex_partial_update: InContextSdkMethod<Mutation['sources_user_connections_plex_partial_update'], Mutationsources_user_connections_plex_partial_updateArgs, MeshContext>,
  /** Plex Source connection Serializer **/
  sources_user_connections_plex_destroy: InContextSdkMethod<Mutation['sources_user_connections_plex_destroy'], Mutationsources_user_connections_plex_destroyArgs, MeshContext>,
  /** Source Viewset **/
  sources_user_connections_saml_create: InContextSdkMethod<Mutation['sources_user_connections_saml_create'], Mutationsources_user_connections_saml_createArgs, MeshContext>,
  /** Source Viewset **/
  sources_user_connections_saml_update: InContextSdkMethod<Mutation['sources_user_connections_saml_update'], Mutationsources_user_connections_saml_updateArgs, MeshContext>,
  /** Source Viewset **/
  sources_user_connections_saml_partial_update: InContextSdkMethod<Mutation['sources_user_connections_saml_partial_update'], Mutationsources_user_connections_saml_partial_updateArgs, MeshContext>,
  /** Source Viewset **/
  sources_user_connections_saml_destroy: InContextSdkMethod<Mutation['sources_user_connections_saml_destroy'], Mutationsources_user_connections_saml_destroyArgs, MeshContext>,
  /** Stage Viewset **/
  stages_all_destroy: InContextSdkMethod<Mutation['stages_all_destroy'], Mutationstages_all_destroyArgs, MeshContext>,
  /** AuthenticatorDuoStage Viewset **/
  stages_authenticator_duo_create: InContextSdkMethod<Mutation['stages_authenticator_duo_create'], Mutationstages_authenticator_duo_createArgs, MeshContext>,
  /** AuthenticatorDuoStage Viewset **/
  stages_authenticator_duo_update: InContextSdkMethod<Mutation['stages_authenticator_duo_update'], Mutationstages_authenticator_duo_updateArgs, MeshContext>,
  /** AuthenticatorDuoStage Viewset **/
  stages_authenticator_duo_partial_update: InContextSdkMethod<Mutation['stages_authenticator_duo_partial_update'], Mutationstages_authenticator_duo_partial_updateArgs, MeshContext>,
  /** AuthenticatorDuoStage Viewset **/
  stages_authenticator_duo_destroy: InContextSdkMethod<Mutation['stages_authenticator_duo_destroy'], Mutationstages_authenticator_duo_destroyArgs, MeshContext>,
  /** Check enrollment status of user details in current session **/
  stages_authenticator_duo_enrollment_status_create: InContextSdkMethod<Mutation['stages_authenticator_duo_enrollment_status_create'], Mutationstages_authenticator_duo_enrollment_status_createArgs, MeshContext>,
  /** Import duo devices into authentik **/
  stages_authenticator_duo_import_device_manual_create: InContextSdkMethod<Mutation['stages_authenticator_duo_import_device_manual_create'], Mutationstages_authenticator_duo_import_device_manual_createArgs, MeshContext>,
  /** Import duo devices into authentik **/
  stages_authenticator_duo_import_devices_automatic_create: InContextSdkMethod<Mutation['stages_authenticator_duo_import_devices_automatic_create'], Mutationstages_authenticator_duo_import_devices_automatic_createArgs, MeshContext>,
  /** AuthenticatorSMSStage Viewset **/
  stages_authenticator_sms_create: InContextSdkMethod<Mutation['stages_authenticator_sms_create'], Mutationstages_authenticator_sms_createArgs, MeshContext>,
  /** AuthenticatorSMSStage Viewset **/
  stages_authenticator_sms_update: InContextSdkMethod<Mutation['stages_authenticator_sms_update'], Mutationstages_authenticator_sms_updateArgs, MeshContext>,
  /** AuthenticatorSMSStage Viewset **/
  stages_authenticator_sms_partial_update: InContextSdkMethod<Mutation['stages_authenticator_sms_partial_update'], Mutationstages_authenticator_sms_partial_updateArgs, MeshContext>,
  /** AuthenticatorSMSStage Viewset **/
  stages_authenticator_sms_destroy: InContextSdkMethod<Mutation['stages_authenticator_sms_destroy'], Mutationstages_authenticator_sms_destroyArgs, MeshContext>,
  /** AuthenticatorStaticStage Viewset **/
  stages_authenticator_static_create: InContextSdkMethod<Mutation['stages_authenticator_static_create'], Mutationstages_authenticator_static_createArgs, MeshContext>,
  /** AuthenticatorStaticStage Viewset **/
  stages_authenticator_static_update: InContextSdkMethod<Mutation['stages_authenticator_static_update'], Mutationstages_authenticator_static_updateArgs, MeshContext>,
  /** AuthenticatorStaticStage Viewset **/
  stages_authenticator_static_partial_update: InContextSdkMethod<Mutation['stages_authenticator_static_partial_update'], Mutationstages_authenticator_static_partial_updateArgs, MeshContext>,
  /** AuthenticatorStaticStage Viewset **/
  stages_authenticator_static_destroy: InContextSdkMethod<Mutation['stages_authenticator_static_destroy'], Mutationstages_authenticator_static_destroyArgs, MeshContext>,
  /** AuthenticatorTOTPStage Viewset **/
  stages_authenticator_totp_create: InContextSdkMethod<Mutation['stages_authenticator_totp_create'], Mutationstages_authenticator_totp_createArgs, MeshContext>,
  /** AuthenticatorTOTPStage Viewset **/
  stages_authenticator_totp_update: InContextSdkMethod<Mutation['stages_authenticator_totp_update'], Mutationstages_authenticator_totp_updateArgs, MeshContext>,
  /** AuthenticatorTOTPStage Viewset **/
  stages_authenticator_totp_partial_update: InContextSdkMethod<Mutation['stages_authenticator_totp_partial_update'], Mutationstages_authenticator_totp_partial_updateArgs, MeshContext>,
  /** AuthenticatorTOTPStage Viewset **/
  stages_authenticator_totp_destroy: InContextSdkMethod<Mutation['stages_authenticator_totp_destroy'], Mutationstages_authenticator_totp_destroyArgs, MeshContext>,
  /** AuthenticatorValidateStage Viewset **/
  stages_authenticator_validate_create: InContextSdkMethod<Mutation['stages_authenticator_validate_create'], Mutationstages_authenticator_validate_createArgs, MeshContext>,
  /** AuthenticatorValidateStage Viewset **/
  stages_authenticator_validate_update: InContextSdkMethod<Mutation['stages_authenticator_validate_update'], Mutationstages_authenticator_validate_updateArgs, MeshContext>,
  /** AuthenticatorValidateStage Viewset **/
  stages_authenticator_validate_partial_update: InContextSdkMethod<Mutation['stages_authenticator_validate_partial_update'], Mutationstages_authenticator_validate_partial_updateArgs, MeshContext>,
  /** AuthenticatorValidateStage Viewset **/
  stages_authenticator_validate_destroy: InContextSdkMethod<Mutation['stages_authenticator_validate_destroy'], Mutationstages_authenticator_validate_destroyArgs, MeshContext>,
  /** AuthenticatorWebAuthnStage Viewset **/
  stages_authenticator_webauthn_create: InContextSdkMethod<Mutation['stages_authenticator_webauthn_create'], Mutationstages_authenticator_webauthn_createArgs, MeshContext>,
  /** AuthenticatorWebAuthnStage Viewset **/
  stages_authenticator_webauthn_update: InContextSdkMethod<Mutation['stages_authenticator_webauthn_update'], Mutationstages_authenticator_webauthn_updateArgs, MeshContext>,
  /** AuthenticatorWebAuthnStage Viewset **/
  stages_authenticator_webauthn_partial_update: InContextSdkMethod<Mutation['stages_authenticator_webauthn_partial_update'], Mutationstages_authenticator_webauthn_partial_updateArgs, MeshContext>,
  /** AuthenticatorWebAuthnStage Viewset **/
  stages_authenticator_webauthn_destroy: InContextSdkMethod<Mutation['stages_authenticator_webauthn_destroy'], Mutationstages_authenticator_webauthn_destroyArgs, MeshContext>,
  /** CaptchaStage Viewset **/
  stages_captcha_create: InContextSdkMethod<Mutation['stages_captcha_create'], Mutationstages_captcha_createArgs, MeshContext>,
  /** CaptchaStage Viewset **/
  stages_captcha_update: InContextSdkMethod<Mutation['stages_captcha_update'], Mutationstages_captcha_updateArgs, MeshContext>,
  /** CaptchaStage Viewset **/
  stages_captcha_partial_update: InContextSdkMethod<Mutation['stages_captcha_partial_update'], Mutationstages_captcha_partial_updateArgs, MeshContext>,
  /** CaptchaStage Viewset **/
  stages_captcha_destroy: InContextSdkMethod<Mutation['stages_captcha_destroy'], Mutationstages_captcha_destroyArgs, MeshContext>,
  /** ConsentStage Viewset **/
  stages_consent_create: InContextSdkMethod<Mutation['stages_consent_create'], Mutationstages_consent_createArgs, MeshContext>,
  /** ConsentStage Viewset **/
  stages_consent_update: InContextSdkMethod<Mutation['stages_consent_update'], Mutationstages_consent_updateArgs, MeshContext>,
  /** ConsentStage Viewset **/
  stages_consent_partial_update: InContextSdkMethod<Mutation['stages_consent_partial_update'], Mutationstages_consent_partial_updateArgs, MeshContext>,
  /** ConsentStage Viewset **/
  stages_consent_destroy: InContextSdkMethod<Mutation['stages_consent_destroy'], Mutationstages_consent_destroyArgs, MeshContext>,
  /** DenyStage Viewset **/
  stages_deny_create: InContextSdkMethod<Mutation['stages_deny_create'], Mutationstages_deny_createArgs, MeshContext>,
  /** DenyStage Viewset **/
  stages_deny_update: InContextSdkMethod<Mutation['stages_deny_update'], Mutationstages_deny_updateArgs, MeshContext>,
  /** DenyStage Viewset **/
  stages_deny_partial_update: InContextSdkMethod<Mutation['stages_deny_partial_update'], Mutationstages_deny_partial_updateArgs, MeshContext>,
  /** DenyStage Viewset **/
  stages_deny_destroy: InContextSdkMethod<Mutation['stages_deny_destroy'], Mutationstages_deny_destroyArgs, MeshContext>,
  /** DummyStage Viewset **/
  stages_dummy_create: InContextSdkMethod<Mutation['stages_dummy_create'], Mutationstages_dummy_createArgs, MeshContext>,
  /** DummyStage Viewset **/
  stages_dummy_update: InContextSdkMethod<Mutation['stages_dummy_update'], Mutationstages_dummy_updateArgs, MeshContext>,
  /** DummyStage Viewset **/
  stages_dummy_partial_update: InContextSdkMethod<Mutation['stages_dummy_partial_update'], Mutationstages_dummy_partial_updateArgs, MeshContext>,
  /** DummyStage Viewset **/
  stages_dummy_destroy: InContextSdkMethod<Mutation['stages_dummy_destroy'], Mutationstages_dummy_destroyArgs, MeshContext>,
  /** EmailStage Viewset **/
  stages_email_create: InContextSdkMethod<Mutation['stages_email_create'], Mutationstages_email_createArgs, MeshContext>,
  /** EmailStage Viewset **/
  stages_email_update: InContextSdkMethod<Mutation['stages_email_update'], Mutationstages_email_updateArgs, MeshContext>,
  /** EmailStage Viewset **/
  stages_email_partial_update: InContextSdkMethod<Mutation['stages_email_partial_update'], Mutationstages_email_partial_updateArgs, MeshContext>,
  /** EmailStage Viewset **/
  stages_email_destroy: InContextSdkMethod<Mutation['stages_email_destroy'], Mutationstages_email_destroyArgs, MeshContext>,
  /** IdentificationStage Viewset **/
  stages_identification_create: InContextSdkMethod<Mutation['stages_identification_create'], Mutationstages_identification_createArgs, MeshContext>,
  /** IdentificationStage Viewset **/
  stages_identification_update: InContextSdkMethod<Mutation['stages_identification_update'], Mutationstages_identification_updateArgs, MeshContext>,
  /** IdentificationStage Viewset **/
  stages_identification_partial_update: InContextSdkMethod<Mutation['stages_identification_partial_update'], Mutationstages_identification_partial_updateArgs, MeshContext>,
  /** IdentificationStage Viewset **/
  stages_identification_destroy: InContextSdkMethod<Mutation['stages_identification_destroy'], Mutationstages_identification_destroyArgs, MeshContext>,
  /** Invitation Viewset **/
  stages_invitation_invitations_create: InContextSdkMethod<Mutation['stages_invitation_invitations_create'], Mutationstages_invitation_invitations_createArgs, MeshContext>,
  /** Invitation Viewset **/
  stages_invitation_invitations_update: InContextSdkMethod<Mutation['stages_invitation_invitations_update'], Mutationstages_invitation_invitations_updateArgs, MeshContext>,
  /** Invitation Viewset **/
  stages_invitation_invitations_partial_update: InContextSdkMethod<Mutation['stages_invitation_invitations_partial_update'], Mutationstages_invitation_invitations_partial_updateArgs, MeshContext>,
  /** Invitation Viewset **/
  stages_invitation_invitations_destroy: InContextSdkMethod<Mutation['stages_invitation_invitations_destroy'], Mutationstages_invitation_invitations_destroyArgs, MeshContext>,
  /** InvitationStage Viewset **/
  stages_invitation_stages_create: InContextSdkMethod<Mutation['stages_invitation_stages_create'], Mutationstages_invitation_stages_createArgs, MeshContext>,
  /** InvitationStage Viewset **/
  stages_invitation_stages_update: InContextSdkMethod<Mutation['stages_invitation_stages_update'], Mutationstages_invitation_stages_updateArgs, MeshContext>,
  /** InvitationStage Viewset **/
  stages_invitation_stages_partial_update: InContextSdkMethod<Mutation['stages_invitation_stages_partial_update'], Mutationstages_invitation_stages_partial_updateArgs, MeshContext>,
  /** InvitationStage Viewset **/
  stages_invitation_stages_destroy: InContextSdkMethod<Mutation['stages_invitation_stages_destroy'], Mutationstages_invitation_stages_destroyArgs, MeshContext>,
  /** PasswordStage Viewset **/
  stages_password_create: InContextSdkMethod<Mutation['stages_password_create'], Mutationstages_password_createArgs, MeshContext>,
  /** PasswordStage Viewset **/
  stages_password_update: InContextSdkMethod<Mutation['stages_password_update'], Mutationstages_password_updateArgs, MeshContext>,
  /** PasswordStage Viewset **/
  stages_password_partial_update: InContextSdkMethod<Mutation['stages_password_partial_update'], Mutationstages_password_partial_updateArgs, MeshContext>,
  /** PasswordStage Viewset **/
  stages_password_destroy: InContextSdkMethod<Mutation['stages_password_destroy'], Mutationstages_password_destroyArgs, MeshContext>,
  /** Prompt Viewset **/
  stages_prompt_prompts_create: InContextSdkMethod<Mutation['stages_prompt_prompts_create'], Mutationstages_prompt_prompts_createArgs, MeshContext>,
  /** Prompt Viewset **/
  stages_prompt_prompts_update: InContextSdkMethod<Mutation['stages_prompt_prompts_update'], Mutationstages_prompt_prompts_updateArgs, MeshContext>,
  /** Prompt Viewset **/
  stages_prompt_prompts_partial_update: InContextSdkMethod<Mutation['stages_prompt_prompts_partial_update'], Mutationstages_prompt_prompts_partial_updateArgs, MeshContext>,
  /** Prompt Viewset **/
  stages_prompt_prompts_destroy: InContextSdkMethod<Mutation['stages_prompt_prompts_destroy'], Mutationstages_prompt_prompts_destroyArgs, MeshContext>,
  /** Preview a prompt as a challenge, just like a flow would receive **/
  stages_prompt_prompts_preview_create: InContextSdkMethod<Mutation['stages_prompt_prompts_preview_create'], Mutationstages_prompt_prompts_preview_createArgs, MeshContext>,
  /** PromptStage Viewset **/
  stages_prompt_stages_create: InContextSdkMethod<Mutation['stages_prompt_stages_create'], Mutationstages_prompt_stages_createArgs, MeshContext>,
  /** PromptStage Viewset **/
  stages_prompt_stages_update: InContextSdkMethod<Mutation['stages_prompt_stages_update'], Mutationstages_prompt_stages_updateArgs, MeshContext>,
  /** PromptStage Viewset **/
  stages_prompt_stages_partial_update: InContextSdkMethod<Mutation['stages_prompt_stages_partial_update'], Mutationstages_prompt_stages_partial_updateArgs, MeshContext>,
  /** PromptStage Viewset **/
  stages_prompt_stages_destroy: InContextSdkMethod<Mutation['stages_prompt_stages_destroy'], Mutationstages_prompt_stages_destroyArgs, MeshContext>,
  /** SourceStage Viewset **/
  stages_source_create: InContextSdkMethod<Mutation['stages_source_create'], Mutationstages_source_createArgs, MeshContext>,
  /** SourceStage Viewset **/
  stages_source_update: InContextSdkMethod<Mutation['stages_source_update'], Mutationstages_source_updateArgs, MeshContext>,
  /** SourceStage Viewset **/
  stages_source_partial_update: InContextSdkMethod<Mutation['stages_source_partial_update'], Mutationstages_source_partial_updateArgs, MeshContext>,
  /** SourceStage Viewset **/
  stages_source_destroy: InContextSdkMethod<Mutation['stages_source_destroy'], Mutationstages_source_destroyArgs, MeshContext>,
  /** UserDeleteStage Viewset **/
  stages_user_delete_create: InContextSdkMethod<Mutation['stages_user_delete_create'], Mutationstages_user_delete_createArgs, MeshContext>,
  /** UserDeleteStage Viewset **/
  stages_user_delete_update: InContextSdkMethod<Mutation['stages_user_delete_update'], Mutationstages_user_delete_updateArgs, MeshContext>,
  /** UserDeleteStage Viewset **/
  stages_user_delete_partial_update: InContextSdkMethod<Mutation['stages_user_delete_partial_update'], Mutationstages_user_delete_partial_updateArgs, MeshContext>,
  /** UserDeleteStage Viewset **/
  stages_user_delete_destroy: InContextSdkMethod<Mutation['stages_user_delete_destroy'], Mutationstages_user_delete_destroyArgs, MeshContext>,
  /** UserLoginStage Viewset **/
  stages_user_login_create: InContextSdkMethod<Mutation['stages_user_login_create'], Mutationstages_user_login_createArgs, MeshContext>,
  /** UserLoginStage Viewset **/
  stages_user_login_update: InContextSdkMethod<Mutation['stages_user_login_update'], Mutationstages_user_login_updateArgs, MeshContext>,
  /** UserLoginStage Viewset **/
  stages_user_login_partial_update: InContextSdkMethod<Mutation['stages_user_login_partial_update'], Mutationstages_user_login_partial_updateArgs, MeshContext>,
  /** UserLoginStage Viewset **/
  stages_user_login_destroy: InContextSdkMethod<Mutation['stages_user_login_destroy'], Mutationstages_user_login_destroyArgs, MeshContext>,
  /** UserLogoutStage Viewset **/
  stages_user_logout_create: InContextSdkMethod<Mutation['stages_user_logout_create'], Mutationstages_user_logout_createArgs, MeshContext>,
  /** UserLogoutStage Viewset **/
  stages_user_logout_update: InContextSdkMethod<Mutation['stages_user_logout_update'], Mutationstages_user_logout_updateArgs, MeshContext>,
  /** UserLogoutStage Viewset **/
  stages_user_logout_partial_update: InContextSdkMethod<Mutation['stages_user_logout_partial_update'], Mutationstages_user_logout_partial_updateArgs, MeshContext>,
  /** UserLogoutStage Viewset **/
  stages_user_logout_destroy: InContextSdkMethod<Mutation['stages_user_logout_destroy'], Mutationstages_user_logout_destroyArgs, MeshContext>,
  /** UserWriteStage Viewset **/
  stages_user_write_create: InContextSdkMethod<Mutation['stages_user_write_create'], Mutationstages_user_write_createArgs, MeshContext>,
  /** UserWriteStage Viewset **/
  stages_user_write_update: InContextSdkMethod<Mutation['stages_user_write_update'], Mutationstages_user_write_updateArgs, MeshContext>,
  /** UserWriteStage Viewset **/
  stages_user_write_partial_update: InContextSdkMethod<Mutation['stages_user_write_partial_update'], Mutationstages_user_write_partial_updateArgs, MeshContext>,
  /** UserWriteStage Viewset **/
  stages_user_write_destroy: InContextSdkMethod<Mutation['stages_user_write_destroy'], Mutationstages_user_write_destroyArgs, MeshContext>
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["Authentik"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
