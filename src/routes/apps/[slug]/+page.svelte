<script lang="ts">
	import { env } from '$env/dynamic/public';
	import SensitiveValue from '$lib/SensitiveValue.svelte';
	import { LinkedChart } from 'svelte-tiny-linked-charts';
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
		<a class="button" href="/login">Connexion</a>
	</section>
{/if}

{#snippet copyable(value: string, sensitive = false)}
	<dd>
		<button
			onclick={() => {
				navigator.clipboard.writeText(value);
			}}>copier</button
		>
		{#if sensitive}
			<SensitiveValue>{value}</SensitiveValue>
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
		{#if app.metrics}
			{@const usage = Object.fromEntries(
				app.metrics
					.filter((xy) => xy !== null)
					.map(({ xCord, yCord }) => [new Date(xCord).toISOString(), yCord])
			)}
			<div class="usage">
				<LinkedChart
					data={usage}
					type="line"
					fill="white"
					lineColor="var(--green)"
					showValue
					valueAppend="this day"
				/>
				<div class="label">Logins this week</div>
			</div>
		{/if}
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
			{@render copyable(`https://${env.PUBLIC_AUTHENTIK_INSTANCE}/application/o/authorize/`)}
			<dt>Token URL</dt>
			{@render copyable(`https://${env.PUBLIC_AUTHENTIK_INSTANCE}/application/o/token/`)}
			<dt>User-info URL</dt>
			{@render copyable(`https://${env.PUBLIC_AUTHENTIK_INSTANCE}/application/o/userinfo/`)}
			<dt>Logout URL</dt>
			{@render copyable(`https://${env.PUBLIC_AUTHENTIK_INSTANCE}/application/o/${app.slug}/end-session/`)}
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

	dd:not(.redirecturis) {
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

	.redirecturis input {
		width: 40ch;
	}
</style>
