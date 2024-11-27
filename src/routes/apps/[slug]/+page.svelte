<script lang="ts">
	import { env } from '$env/dynamic/public';
	import SensitiveValue from '$lib/SensitiveValue.svelte';
	import type { PageData } from './$houdini';
	interface Props {
		data: PageData;
	}
	const { data }: Props = $props();
	const { PageApplication } = $derived(data);
	let editingLaunchURL = $state(false);

	function enumerate<T>(a: T[]): Array<[number, T]> {
		return Object.entries(a).map(([k, v]) => [parseInt(k), v]);
	}
</script>

{#if $PageApplication?.errors}
	<section class="errors">
		<h2>Oops!</h2>
		<p>Il y a eu des erreurs</p>
		<ul>
			{#each $PageApplication.errors as { message }}
				<li>{message}</li>
			{/each}
		</ul>
	</section>
{/if}

{#if $PageApplication?.data?.application?.__typename === 'GenericError'}
	<section class="errors">
		<h1>Ooops</h1>
		<p>{$PageApplication.data.application.detail}</p>
		<a class="button" href="/login">Connexion</a>
	</section>
{/if}

{#snippet copyable(value: string, { sensitive = false, long = false } = {})}
	<dd class:vertical={long}>
		<button
			onclick={() => {
				navigator.clipboard.writeText(value);
			}}>copier</button
		>
		{#if sensitive}
			<SensitiveValue>{value}</SensitiveValue>
		{:else if long}
			<pre>{value}</pre>
		{:else}
			{value}
		{/if}
	</dd>
{/snippet}

{#if $PageApplication.fetching}
	<p>Loading...</p>
{/if}

{#if $PageApplication?.data?.application && $PageApplication.data.application.__typename === 'Application'}
	{@const app = $PageApplication.data.application}
	<header>
		<img src={app.metaIcon} alt="Icone" class="logo" />
		<div class="name">
			<h1>{app.name}</h1>
			<span class="desc">{app.metaDescription}</span>
			<a
				href="https://{env.PUBLIC_AUTHENTIK_INSTANCE}/if/admin/#/core/applications/{app.slug}"
				class="to-authentik">sur {env.PUBLIC_AUTHENTIK_INSTANCE}</a
			>
		</div>
	</header>
	<section class="launchurl">
		{#if editingLaunchURL || !app.launchUrl}
			<form action="?/editLaunchURL" method="post">
				<dl>
					<dt><label for="launchurl">Adresse du site</label></dt>
					<dd>
						<input
							id="launchurl"
							placeholder="https://example.com"
							type="url"
							name="url"
							value={app.launchUrl ?? ''}
						/>
						<button type="submit">OK</button>
					</dd>
				</dl>
			</form>
		{:else if app.launchUrl}
			<dl>
				<dt>Adresse du site</dt>
				<dd>
					<a href={app.launchUrl}>https://{new URL(app.launchUrl).hostname}</a>
					<button
						onclick={() => {
							editingLaunchURL = true;
						}}>changer</button
					>
				</dd>
			</dl>
		{/if}
	</section>
	{#if app.oauth2Provider?.__typename === 'OAuth2Provider'}
		{@const authorizedUris = app.oauth2Provider.redirectUris
			.filter((x) => x !== null)
			.map(({ url }) => url)}
		<dl>
			<dt>Client ID</dt>
			{@render copyable(app.oauth2Provider.clientId)}
			<dt>
				{#if app.oauth2Provider.clientType !== 'PUBLIC'}
					Client secret
				{:else}
					<s>Client secret</s>
				{/if}
			</dt>
			{#if app.oauth2Provider.clientType !== 'PUBLIC'}
				{@render copyable(app.oauth2Provider.clientSecret, { sensitive: true })}
			{:else}
				<dd>
					Client public, il n'y a pas de <code><strong>client_secret</strong></code> nécéssaire
				</dd>
				<dd>
					Il faut utiliser le
					<a
						href="https://blog.postman.com/pkce-oauth-how-to/#:~:text=and%20browser%2Dbased%20apps.-,What%20is%20PKCE?,-%E2%80%9CPKCE%20(Proof%20Key"
						target="_blank"
					>
						flow OAuth2 “PKCE”
					</a>
				</dd>
			{/if}
			<dt>Allowed redirect URIs</dt>
			<dd class="vertical redirecturis">
				<small>Peut être un motif Regex d'URIs</small>
				{#if authorizedUris.includes('.*') && app.launchUrl}
					<p class="warn">
						Attention: utiliser <code>.*</code> est dangereux,
						<button
							onclick={() => {
								document.querySelectorAll('.redirecturis input').forEach((node) => {
									if (!(node instanceof HTMLInputElement)) return;
									if (!app.launchUrl) return;
									if (node.value !== '.*') return;
									node.value = `https?://(localhost|${new URL(app.launchUrl).hostname}).*`;
								});
							}}>utiliser localhost et {new URL(app.launchUrl).hostname}</button
						>
					</p>
				{/if}
				<form method="post" action="?/editAllowedURIs">
					<ul>
						{#each enumerate(authorizedUris) as [i, uri]}
							<li>
								<input type="text" name="uri:{i}" value={uri} />
							</li>
						{/each}
						<li class="new">
							<input
								placeholder="Ajouter une URI"
								type="text"
								name="uri:{app.oauth2Provider.redirectUris.length}"
							/>
						</li>
					</ul>
					<input type="hidden" name="providerid" value={app.oauth2Provider.pk} />
					<button type="submit">enregistrer</button>
				</form>
			</dd>
			<p><em>Ne pas oublier le <code>/</code> à la fin des URLs 🙃</em></p>
			<dt>Authorize URL</dt>
			{@render copyable(`https://${env.PUBLIC_AUTHENTIK_INSTANCE}/application/o/authorize/`)}
			<dt>Token URL</dt>
			{@render copyable(`https://${env.PUBLIC_AUTHENTIK_INSTANCE}/application/o/token/`)}
			<dt>User-info URL</dt>
			{@render copyable(`https://${env.PUBLIC_AUTHENTIK_INSTANCE}/application/o/userinfo/`)}
			<dt>Logout URL</dt>
			{@render copyable(
				`https://${env.PUBLIC_AUTHENTIK_INSTANCE}/application/o/${app.slug}/end-session/`
			)}
		</dl>

		<h2>Programming ideas</h2>

		<dl>
			<dt>Your .env file (don't commit this!!)</dt>
			{@render copyable(
				`PUBLIC_CLIENT_ID=${app.oauth2Provider.clientId}\nCLIENT_SECRET=${app.oauth2Provider.clientSecret}`,
				{ long: true }
			)}
			<dt>JavaScript / TypeScript</dt>
			<dd>Use <a href="https://arcticjs.dev/providers/authentik" target="_blank">Arctic </a></dd>
			{@render copyable(
				`
// npm install arctic
import { Authentik } from "arctic";
import { generateState, generateCodeVerifier } from "arctic";

const domain = "auth.inpt.fr";
const authentik = new Authentik(domain, process.env.CLIENT_ID, process.env.CLIENT_SECRET, "Ton URI de redirection");

// redirection vers l'autorisation
const state = generateState();
const codeVerifier = generateCodeVerifier();
const authorizationUrl = authentik.getAuthorizationUrl(state, codeVerifier);
console.log("Please go here and authorize:", authorizationUrl);

// récupération du token
const code = new URLSearchParams(window.location.search).get("code");
const token = await authentik.getToken(code, codeVerifier);`,
				{ long: true }
			)}

			<dt>Python</dt>
			<dd>
				Use <a href="https://requests-oauthlib.readthedocs.io/en/latest/" target="_blank"
					>requests-oauthlib</a
				>
			</dd>
			{@render copyable(
				`
# pip install requests requests-oauthlib
from requests_oauthlib import OAuth2Session
import os

client_id = os.getenv("PUBLIC_CLIENT_ID")
client_secret = os.getenv("CLIENT_SECRET")
redirect_uri = "Ton URI de redirection"

auth = OAuth2Session(client_id, redirect_uri=redirect_uri)

# redirection vers l'autorisation
authorization_url, state = auth.authorization_url("https://${env.PUBLIC_AUTHENTIK_INSTANCE}/application/o/authorize/")
print('Please go here and authorize,', authorization_url)

# récupération du token
token_url = "https://${env.PUBLIC_AUTHENTIK_INSTANCE}/application/o/token/"
auth.fetch_token(token_url, client_secret=client_secret, authorization_response=input('Enter the full callback URL'))`,
				{ long: true }
			)}

			<dt>PHP</dt>
			<dd>
				Using <a href="https://github.com/ivan-novakov/php-openid-connect-client" target="_blank">
					php-openid-connect-client
				</a>
			</dd>
			{@render copyable(
				`
// add to composer.json: { "require" { "ivan-novakov/php-openid-connect-client": "dev-master" } }
use InoOicClient\Flow\Basic;

$config = array(
    'client_info' => array(
        'client_id' => getenv("PUBLIC_CLIENT_ID"),
        'redirect_uri' => 'Your redirect URI',
        
        'authorization_endpoint' => 'https://${env.PUBLIC_AUTHENTIK_INSTANCE}/application/o/authorize',
        'token_endpoint' => 'https://${env.PUBLIC_AUTHENTIK_INSTANCE}/application/o/token',
        'user_info_endpoint' => 'https://${env.PUBLIC_AUTHENTIK_INSTANCE}/application/o/userinfo',
        
        'authentication_info' => array(
            'method' => 'client_secret_post',
            'params' => array(
                'client_secret' => getenv("CLIENT_SECRET"),
            )
        )
    )
);

$flow = new Basic($config);

if (! isset($_GET['redirect'])) {
    try {
        $uri = $flow->getAuthorizationRequestUri('openid email profile');
        printf("<a href=\"%s\">Login</a>", $uri);
    } catch (\Exception $e) {
        printf("Exception during authorization URI creation: [%s] %s", get_class($e), $e->getMessage());
    }
} else {
    try {
        $userInfo = $flow->process();
    } catch (\Exception $e) {
        printf("Exception during user authentication: [%s] %s", get_class($e), $e->getMessage());
    }
}
				`,
				{ long: true }
			)}
		</dl>
	{/if}
{/if}

<style>
	section.errors * {
		color: rgb(255, 33, 118);
		border-color: rgb(255, 33, 118);
	}

	.logo {
		height: 2.5lh;
		padding: 0.5rem;
		background-color: white;
	}

	header {
		display: flex;
		align-items: center;
		gap: 0 1ch;
		margin-bottom: 2rem;
	}

	header .name {
		display: flex;
		flex-direction: column;
	}

	header .usage {
		margin-left: auto;
	}

	header .usage .label {
		color: rgb(124, 124, 124);
		text-align: center;
	}

	header a {
		font-size: 1rem;
	}

	dd:not(.vertical) {
		display: flex;
		align-items: center;
		gap: 0 1ch;
	}

	dd {
		margin-bottom: 1rem;
	}
	dt {
		margin-bottom: 0.5rem;
	}

	pre {
		font-family: 'Fira Code', monospace;
		overflow-x: scroll;
	}

	.redirecturis input {
		width: 40ch;
	}
</style>
