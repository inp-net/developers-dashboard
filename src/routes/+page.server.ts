import { env as secrets } from '$env/dynamic/private';
import { graphql } from '$houdini';
import { error } from '@sveltejs/kit';
import slug from 'slug';

export const actions = {
	async createApp(event) {
		const { name, group } = Object.fromEntries(
			[...(await event.request.formData()).entries()].map(([key, value]) => [key, value.toString()])
		);

		const churrosGroup = await graphql(`
			query ChurrosGroup($uid: String!) {
				group(uid: $uid) {
					name
					uid
					membership {
						onBoard
					}
				}
			}
		`)
			.fetch({
				event,
				variables: { uid: group }
			})
			.then(({ data, errors }) => {
				if (data) return data.group;
				if (errors) throw new Error(errors.map((e) => e.message).join('\n'));
				error(500, { message: 'Unexpected error' });
			});

		// if (!churrosGroup.membership?.onBoard) {
		// 	error(403, {
		// 		message: "Tu ne peux pas créer d'applications au non de ce groupe, il faut être au bureau."
		// 	});
		// }

		const fetchAsAdmin = {
			event,
			metadata: { tokenOverride: secrets.AUTHENTIK_ADMIN_TOKEN }
		};

		const flows = await graphql(`
			query GetFlows {
				authorize: flowsInstancesRetrieve(slug: "default-provider-authorization-explicit-consent") {
					... on Flow {
						pk
					}
					... on GenericError {
						detail
					}
				}
				invalidate: flowsInstancesRetrieve(slug: "default-provider-invalidation-flow") {
					... on Flow {
						pk
					}
					... on GenericError {
						detail
					}
				}
			}
		`)
			.fetch(fetchAsAdmin)
			.then(({ data, errors }) => {
				console.dir({ flows: { data, errors } }, { depth: null });
				if (data) {
					return {
						invalidate: data.invalidate?.__typename === 'Flow' ? data.invalidate.pk : null,
						authorize: data.authorize?.__typename === 'Flow' ? data.authorize.pk : null
					};
				}
				throw new Error((errors ?? []).map((m) => m.message).join('\n'));
			});

		if (!flows.authorize) error(500, { message: 'Default authorization flow not found' });
		if (!flows.invalidate) error(500, { message: 'Default invalidation flow not found' });

		const provider = await graphql(`
			mutation CreateProvider(
				$name: NonEmptyString!
				$authorize: UUID!
				$invalidate: UUID!
				$type: ClientTypeEnum
			) {
				providersOauth2Create(
					input: {
						authorizationFlow: $authorize
						invalidationFlow: $invalidate
						clientType: $type
						name: $name
						redirectUris: ".*"
					}
				) {
					... on OAuth2Provider {
						pk
					}
					... on ValidationError {
						nonFieldErrors
						code
						additionalProperties
					}
					... on GenericError {
						detail
					}
				}
			}
		`)
			.mutate(
				{
					...flows,
					name,
					type: 'CONFIDENTIAL'
				},
				fetchAsAdmin
			)
			.then(({ data, errors }) => {
				console.log({ providerC: { data, errors } });
				if (data && data.providersOauth2Create?.__typename === 'OAuth2Provider')
					return data.providersOauth2Create;
				if (errors) throw new Error(errors.map((e) => e.message).join('\n'));
				if (data?.providersOauth2Create?.__typename === 'GenericError')
					error(400, { message: data.providersOauth2Create.detail });
				if (data?.providersOauth2Create?.__typename === 'ValidationError')
					error(400, { message: JSON.stringify(data.providersOauth2Create) });
				error(500, { message: 'Unexpected error' });
			});

		const app = await graphql(`
			mutation CreateApp(
				$name: NonEmptyString!
				$slug: MutationInputCoreApplicationsCreateInputSlug!
				$groupName: String!
				$groupUid: String!
				$provider: Int!
			) {
				coreApplicationsCreate(
					input: {
						group: $groupName
						metaPublisher: $groupUid
						name: $name
						provider: $provider
						slug: $slug
					}
				) {
					... on Application {
						slug
					}
					... on ValidationError {
						nonFieldErrors
						code
						additionalProperties
					}
					... on GenericError {
						detail
					}
				}
			}
		`)
			.mutate(
				{
					provider: provider.pk,
					name,
					groupName: churrosGroup.name,
					groupUid: churrosGroup.uid,
					slug: slug(name)
				},
				fetchAsAdmin
			)
			.then(({ data, errors }) => {
				if (data && data.coreApplicationsCreate?.__typename === 'Application')
					return data.coreApplicationsCreate;
				if (errors) throw new Error(errors.map((e) => e.message).join('\n'));
				if (data?.coreApplicationsCreate?.__typename === 'GenericError')
					error(400, { message: data.coreApplicationsCreate.detail });
				if (data?.coreApplicationsCreate?.__typename === 'ValidationError')
					error(400, { message: JSON.stringify(data.coreApplicationsCreate) });
				error(500, { message: 'Unexpected error' });
			});

		return { appSlug: app.slug };
	}
};
