import { authentik } from '$lib/server/oauth';
import { redirect } from '@sveltejs/kit';
import { generateCodeVerifier, generateState } from 'arctic';

export async function GET({ cookies }) {
	const state = generateState();
	const codeVerifier = generateCodeVerifier();
	const scopes = ['openid', 'profile', 'goauthentik.io/api'];
	const url = authentik.createAuthorizationURL(state, codeVerifier, scopes);
	cookies.set('codeVerifier', codeVerifier, { path: '/' });
	cookies.set('oauthState', state, { path: '/' });
    redirect(302, url)
}
