import { graphql } from '$houdini';
import { error } from '@sveltejs/kit';

export const actions = {
	async editAllowedURIs(event) {
		const formdata = [...(await event.request.formData()).entries()];
		const uris = formdata
			.filter(([k]) => k.startsWith('uri:'))
			.sort(([a], [b]) => b - a)
			.map(([_, v]) => v)
			.filter(Boolean)
			.join('\n');
		const providerId = parseInt(Object.fromEntries(formdata).providerid);

		const { data, errors } = await graphql(`
			mutation EditAllowedURIs($providerId: Int!, $uris: String!) {
				providersOauth2PartialUpdate(id: $providerId, input: { redirectUris: $uris }) {
					__typename
				}
			}
		`).mutate(
			{
				providerId,
				uris
			},
			{ event }
		);

		if (errors) {
			error(400, {
				message: errors.map((e) => e.message).join('\n')
			});
		}

		return {};
	}
};
