import { env as secrets } from '$env/dynamic/private';
import { graphql } from '$houdini';
import { error } from '@sveltejs/kit';
import slug from 'slug';

export const actions = {
	async createApp(event) {
		// Get the two values the user submitted
		const { name, group } = Object.fromEntries(
			[...(await event.request.formData()).entries()].map(([key, value]) => [key, value.toString()])
		);

		// .mutate() or .fetch() calls that use this variable are done as the authentik admin user with the given token
		const fetchAsAdmin = {
			event,
			metadata: { tokenOverride: secrets.AUTHENTIK_ADMIN_TOKEN }
		};

		// Get the loggedin user
		const me = await graphql(`
			query AuthentikMe {
				me: coreUsersMeRetrieve {
					... on SessionUser {
						user {
							username
							groups {
								name
							}
						}
					}
				}
			}
		`)
			.fetch({ event })
			.then(({ data }) => (data?.me?.__typename === 'SessionUser' ? data.me.user : null));

		// Get the authentik group the user wants to create the app for
		let authentikGroups = await graphql(`
			query AuthentikGroup($name: String!) {
				authentikGroups(name: $name) {
					... on PaginatedGroupList {
						results {
							pk
							name
							roles
						}
					}
				}
			}
		`).fetch({ variables: { name: group }, ...fetchAsAdmin });

		const authentikGroup =
			authentikGroups.data?.authentikGroups?.__typename === 'PaginatedGroupList'
				? authentikGroups.data.authentikGroups.results.at(0)
				: null;

		// User can create app if: they are logged in, the group exists, and they are a member of the group
		if (!me) error(401, { message: "Tu n'es pas connecté·e en tant qu'utilisateur·ice" });

		if (!authentikGroup) error(400, { message: `Aucun groupe nommé ${group} n'existe` });

		if (!me.groups?.find((g) => g?.name === authentikGroup.name))
			error(403, { message: `Tu ne fais pas partie de ${group}` });

		// Get additional data for the group, such as its display name
		const churrosGroup = await graphql(`
			query ChurrosGroup($uid: String!) {
				group(uid: $uid) {
					name
					boardMembers {
						user {
							uid
						}
					}
				}
			}
		`)
			.fetch({ variables: { uid: authentikGroup.name }, ...fetchAsAdmin })
			.then(({ data }) => data?.group ?? null);

		// If the group references a Churros group, we can use additional security: only board membres can create apps. This effectively prevents random people from creating apps under a group's name: either they are a board member, or the group they are creating apps on is a dedicated group they could not be part of without being explicitly added by admins (as non-churros groups are managed on the Authentik admin interface)
		if (churrosGroup && !churrosGroup.boardMembers.some((m) => m.user.uid === me.username)) {
			error(403, {
				message: 'Tu dois être membre du bureau pour créer une application lié à un groupe Churros.'
			});
		}

		// Get the default flows for the app's OAuth2 provider
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

		// Create the OAuth2 provider
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
						redirectUris: [{ matchingMode: REGEX, url: ".*" }]
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
				// @ts-expect-error flows.(...) is not nullable thanks to checks above
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

		// Create the application (and link it to the provider)
		const app = await graphql(`
			mutation CreateApp(
				$name: NonEmptyString!
				$slug: MutationInputCoreApplicationsCreateInputSlug!
				$groupName: String!
				$provider: Int!
			) {
				coreApplicationsCreate(
					input: {
						metaPublisher: $groupName
						group: $groupName
						name: $name
						provider: $provider
						slug: $slug
					}
				) {
					... on Application {
						slug
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
					provider: provider.pk,
					name,
					groupName: churrosGroup?.name ?? authentikGroup.name,
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

		// RBAC handling:
		// 1. Get role with name == group name
		// 2. If it doesn't exist, create it
		// 2b. if we juste created the role, assign it to the group
		// 3. Give all permissions on the app and provider to the role

		// 1.
		const rolesOfGroup = await graphql(`
			query RoleOfGroup($groupName: String!) {
				rbacRolesList(groupName: $groupName) {
					... on PaginatedRoleList {
						results {
							pk
							name
						}
					}
				}
			}
		`).fetch({ variables: { groupName: group }, ...fetchAsAdmin });

		let role =
			rolesOfGroup.data?.rbacRolesList?.__typename === 'PaginatedRoleList'
				? rolesOfGroup.data.rbacRolesList.results.find((r) => r?.name === authentikGroup.name)
				: null;

		// 2.

		if (!role) {
			role = await graphql(`
				mutation CreateRole($name: MutationInputRbacRolesCreateInputName!) {
					rbacRolesCreate(input: { name: $name }) {
						... on Role {
							pk
							name
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
				.mutate({ name: authentikGroup.name }, fetchAsAdmin)
				.then(({ data, errors }) => {
					if (data && data.rbacRolesCreate?.__typename === 'Role') return data.rbacRolesCreate;
					if (errors) throw new Error(errors.map((e) => e.message).join('\n'));
					if (data?.rbacRolesCreate?.__typename === 'GenericError')
						error(400, { message: data.rbacRolesCreate.detail });
					if (data?.rbacRolesCreate?.__typename === 'ValidationError')
						error(400, { message: JSON.stringify(data.rbacRolesCreate) });
					error(500, { message: 'Unexpected error' });
				});

			if (!role) error(500, { message: 'Role creation failed' });

			// 2b.
			await graphql(`
				mutation AssignRoleToGroup($roles: [UUID!]!, $groupPk: UUID!) {
					coreGroupsPartialUpdate(groupUuid: $groupPk, input: { roles: $roles }) {
						... on Group {
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
			`).mutate(
				{
					groupPk: authentikGroup.pk,
					roles: [...(authentikGroup.roles?.filter((r) => r !== null) ?? []), role.pk]
				},
				fetchAsAdmin
			);
		}

		// 3.

		await graphql(`
			mutation AuthorizeRole($role: UUID!, $app: NonEmptyString!, $provider: NonEmptyString!) {
				assignToApp: rbacPermissionsAssignedByRolesAssign(
					uuid: $role
					input: {
						model: AUTHENTIK_CORE_APPLICATION
						objectPk: $app
						permissions: [
							"add_application"
							"change_application"
							"delete_application"
							"view_application"
						]
					}
				) {
					__typename
					... on GenericError {
						detail
					}
				}
				assignToProvider: rbacPermissionsAssignedByRolesAssign(
					uuid: $role
					input: {
						model: AUTHENTIK_PROVIDERS_OAUTH2_OAUTH2PROVIDER
						objectPk: $provider
						permissions: [
							"add_oauth2provider"
							"change_oauth2provider"
							"delete_oauth2provider"
							"view_oauth2provider"
						]
					}
				) {
					__typename
					... on GenericError {
						detail
					}
				}
			}
		`).mutate(
			{
				app: app.pk.toString(),
				provider: provider.pk.toString(),
				role: role.pk
			},
			fetchAsAdmin
		);

		return { appSlug: app.slug };
	}
};
