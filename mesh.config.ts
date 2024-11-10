import {
	loadGraphQLHTTPSubgraph,
	createFilterTransform,
	createPrefixTransform,
	createRenameTransform,
	createNamingConventionTransform,
	defineConfig as defineComposeConfig
} from '@graphql-mesh/compose-cli';
import { loadOpenAPISubgraph } from '@omnigraph/openapi';
import { defineConfig as defineGatewayConfig } from '@graphql-hive/gateway';

export const composeConfig = defineComposeConfig({
	subgraphs: [
		{
			sourceHandler: loadGraphQLHTTPSubgraph('Churros', {
				endpoint: 'https://churros.inpt.fr/graphql',
				operationHeaders: {
					Authorization: '{context.headers.Authorization}'
				}
			}),
			transforms: [
				createFilterTransform({
					filters: ['Query.{me,user,group}', 'Mutation.!*']
				}),
				createPrefixTransform({ value: 'Churros' })
			]
		},
		{
			sourceHandler: loadOpenAPISubgraph('Authentik', {
				source: './authentik.yaml',
				fallbackFormat: 'yaml',
				endpoint: 'https://auth.inpt.fr/api/v3/',

				operationHeaders: {
					'x-feur': 'qferzjofjer',
					Authorization: 'Bearer {context.headers["x-token"]}'
				}
			}),
			transforms: [
				createFilterTransform({
					filters: [
						'Query.{providers_all,providers_oauth2,flows,core_applications}*',
						'Mutation.{providers_all,providers_oauth2,flows,core_applications}*'
					]
				}),
				createRenameTransform({
					renames: [
						{
							from: { type: 'Query', field: 'core_applications_list' },
							to: { type: 'Query', field: 'applications' }
						},
						{
							from: { type: 'Query', field: 'core_applications_retrieve' },
							to: { type: 'Query', field: 'application' }
						},
						{
							from: { type: 'Query', field: 'core_applications_metrics_list' },
							to: { type: 'Query', field: 'applicationMetrics' }
						},
						{
							from: { type: 'Query', field: 'providers_all_list' },
							to: { type: 'Query', field: 'providers' }
						},
						{
							from: { type: 'Query', field: 'providers_all_retrieve' },
							to: { type: 'Query', field: 'provider' }
						},
						{
							from: { type: 'Query', field: 'providers_oauth2_retrieve' },
							to: { type: 'Query', field: 'oauth2Provider' }
						},
						{
							from: { type: 'Application', field: 'group' },
							to: { type: 'Application', field: 'groupSlug' }
						}
					]
				}),
				createNamingConventionTransform({
					typeNames: 'pascalCase',
					enumValues: 'upperCase',
					fieldNames: 'camelCase',
					fieldArgumentNames: 'camelCase'
				})
			]
		}
	],
	additionalTypeDefs: /* GraphQL */ `
		extend type Provider {
			application: CoreApplicationsRetrieveResponse
				@resolveTo(
					sourceName: "Authentik"
					sourceTypeName: "Query"
					sourceFieldName: "core_applications_retrieve"
					requiredSelectionSet: "{ assignedApplicationSlug }"
					sourceArgs: { slug: "{root.assignedApplicationSlug}" }
				)
		}

		extend type Application {
			churrosGroup: ChurrosGroup
				@resolveTo(
					sourceName: "Churros"
					sourceTypeName: "Query"
					sourceFieldName: "group"
					requiredSelectionSet: "{ metaPublisher }"
					sourceArgs: { uid: "{root.metaPublisher}" }
				)

			oauth2Provider: ProvidersOauth2RetrieveResponse
				@resolveTo(
					sourceName: "Authentik"
					sourceTypeName: "Query"
					sourceFieldName: "providers_oauth2_retrieve"
					requiredSelectionSet: "{provider}"
					sourceArgs: { id: "{root.provider}" }
					resultType: "OAuth2Provider"
				)

			metrics: [CoreApplicationsMetricsListResponse]
				@resolveTo(
					sourceName: "Authentik"
					sourceTypeName: "Query"
					sourceFieldName: "core_applications_metrics_list"
					requiredSelectionSet: "{ slug }"
					sourceArgs: { slug: "{root.slug}" }
				)
		}
	`
});

export const gatewayConfig = defineGatewayConfig({
	plugins: (ctx) => []
});
