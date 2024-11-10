<script lang="ts">
	import { env } from '$env/dynamic/public';
	import SensitiveValue from '$lib/SensitiveValue.svelte';
	import type { PageData } from './$houdini';
	interface Props {
		data: PageData;
	}
	const { data }: Props = $props();
	const { PageApplication } = $derived(data);

	function enumerate<T>(a: T[]): Array<[number, T]> {
		return Object.entries(a).map(([k, v]) => [parseInt(k), v]);
	}

	function uris(allUris?: string | null): string[] {
		if (!allUris) return [];
		return allUris.split('\n');
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
		<a href="/login">Connexion</a>
	</section>
{/if}

{#snippet copyable(value: string, sensitive = false)}
	<dd>
		<button
			onclick={() => {
				const clipboard = new Clipboard();
				clipboard.writeText(value);
			}}>copier</button
		>
		{#if sensitive}
			<SensitiveValue>{value}</SensitiveValue>
		{:else}
			{value}
		{/if}
	</dd>
{/snippet}

{#if $PageApplication?.data?.application && $PageApplication.data.application.__typename === 'Application'}
	{@const app = $PageApplication.data.application}
	<h1>
		<img src={app.metaIcon} alt="Icone" class="logo" />
		{app.name}
	</h1>
	{#if app.launchUrl}
		<a href={app.launchUrl}>https://{new URL(app.launchUrl).hostname}</a>
	{/if}
	<p class="desc">{app.metaDescription}</p>
	{#if app.oauth2Provider?.__typename === 'OAuth2Provider'}
		{@const authorizedUris = uris(app.oauth2Provider.redirectUris)}
		<dl>
			<dt>Client ID</dt>
			{@render copyable(app.oauth2Provider.clientId)}
			<dt>Client secret</dt>
			{@render copyable(app.oauth2Provider.clientSecret, true)}
			<dt>Allowed redirect URIs</dt>
			<dd class="redirecturis">
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
								name="uri:{uris(app.oauth2Provider.redirectUris).length}"
							/>
						</li>
					</ul>
					<input type="hidden" name="providerid" value={app.oauth2Provider.pk} />
					<button type="submit">enregistrer</button>
				</form>
			</dd>
			<p><em>Ne pas oublier le <code>/</code> à la fin des URLs 🙃</em></p>
			<dt>Authorize URL</dt>
			{@render copyable(`https://${env.PUBLIC_AUTHENTIK_INSTANCE}/o/authorize/`)}
			<dt>Token URL</dt>
			{@render copyable(`https://${env.PUBLIC_AUTHENTIK_INSTANCE}/o/token/`)}
			<dt>User-info URL</dt>
			{@render copyable(`https://${env.PUBLIC_AUTHENTIK_INSTANCE}/o/userinfo/`)}
			<dt>Logout URL</dt>
			{@render copyable(`https://${env.PUBLIC_AUTHENTIK_INSTANCE}/o/${app.slug}/end-session/`)}
		</dl>
	{/if}
{/if}

<style>
	section.errors {
		color: red;
		background-color: lightpink;
	}

	.logo {
		height: 1.2em;
	}

	h1 {
		display: flex;
		align-items: center;
		gap: 0 1ch;
	}

	dd:not(.redirecturis) {
		display: flex;
		align-items: center;
		gap: 0 1ch;
	}

	.redirecturis input {
		width: 40ch;
	}
</style>
