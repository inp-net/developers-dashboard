import { authentik } from '$lib/server/oauth';
import { error, redirect } from '@sveltejs/kit';
import { ArcticFetchError, OAuth2RequestError } from 'arctic';

export async function GET(event) {
	const { url, cookies } = event;
	const code = url.searchParams.get('code');
	const codeVerifier = cookies.get('codeVerifier');
	const storedState = cookies.get('oauthState');

	if (storedState !== url.searchParams.get('state'))
		error(400, {
			message: 'Invalid oauth state. Try again'
		});

	if (!code || !codeVerifier) error(400, { message: 'Autorisation non fournie' });

	try {
		// console.log({ pr: secrets.PRIVATE_OAUTH2_SECRET });
		const tokens = await authentik.validateAuthorizationCode(code, codeVerifier);
		// console.log(tokens);

		cookies.set('accessToken', tokens.accessToken(), { path: '/' });
		// cookies.set('accessTokenExpiresInSeconds', tokens.accessTokenExpiresInSeconds().toString(), {
		// path: '/'
		// });
	} catch (e) {
		if (e instanceof OAuth2RequestError) {
			// Invalid authorization code, credentials, or redirect URI
			const code = e.code;
			error(400, { message: code });
		}
		if (e instanceof ArcticFetchError) {
			// Failed to call `fetch()`
			const cause = e.cause;
			error(500, { message: cause?.toString() ?? 'Unknown error' });
		}
		console.error(e);
		error(500, { message: 'Invalid response' });
	}

	redirect(301, '/');
}
