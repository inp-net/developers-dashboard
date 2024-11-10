import { env } from '$env/dynamic/public';
import { env as secrets } from '$env/dynamic/private';
import { Authentik } from 'arctic';

export const authentik = new Authentik(
	env.PUBLIC_AUTHENTIK_INSTANCE,
	env.PUBLIC_OAUTH2_ID,
	secrets.PRIVATE_OAUTH2_SECRET,
	'http://localhost:5173/login/callback'
);
