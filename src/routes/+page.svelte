<script lang="ts">
	import type { ActionData } from './$types';
	import type { PageData } from './$houdini';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	interface Props {
		data: PageData;
		form: ActionData;
	}

	const { data, form }: Props = $props();
	const { PageHome } = $derived(data);
	let creating = $derived($page.url.hash === '#new');

	const apps = $derived(
		$PageHome.data?.applications?.__typename === 'PaginatedApplicationList'
			? $PageHome.data.applications.results.filter((app) => app !== null)
			: []
	);

	const authentikGroups = $derived(
		$PageHome.data?.authentikMe?.__typename === 'SessionUser'
			? $PageHome.data.authentikMe.user.groups.filter((x) => x !== null)
			: []
	);

	$effect(() => console.log($PageHome));

	onMount(async () => {
		if (form?.appSlug) {
			await goto(`/apps/${form.appSlug}`);
		}
	});
</script>

{#if $PageHome.fetching}
	<p>Loading...</p>
{/if}

{#if apps.length === 0}
	<a class="button" href="/login">Connexion</a>
{:else}
	{#if creating}
		<form class="new" action="?/createApp" method="post">
			<label for="new-group">
				<span>Groupe responsable</span>
			</label>
			<input
				id="new-group"
				type="text"
				name="group"
				autocomplete="off"
				list="churros-group-names"
			/>
			<label for="new-name">
				<span>Nom de l'app</span>
			</label>
			<input id="new-name" type="text" name="name" />

			<datalist id="churros-group-names">
				{#each authentikGroups as { name }}
					<option>{name}</option>
				{/each}
			</datalist>

			<section class="submit">
				<button type="submit">Créer</button>
			</section>
		</form>
	{/if}

	<ul>
		{#each apps as app}
			<li>
				<a href="/apps/{app.slug}">
					<img src={app.metaIcon} alt="[]" />
					{app.name}
					<small>
						by {app?.metaPublisher}
					</small>
				</a>
			</li>
		{/each}
	</ul>
{/if}

<style>
	form.new {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 3rem 1rem;
		gap: 1rem 0;
		max-width: 600px;
		margin: 0 auto;
	}
	ul {
		--itemsize: 10rem;
		list-style: none;
		padding-left: 0;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(var(--itemsize), 1fr));
		gap: 1px;
		background-color: var(--green);
		border: 1px solid var(--green);
	}
	li > a {
		display: flex;
		align-items: center;
		gap: 1ch;
		text-decoration: none;
		flex-direction: column;
		height: var(--itemsize);
		justify-content: center;
		align-items: center;
		padding: 2ch;
		background-color: black;
		text-align: center;
	}
	li > a:hover,
	li > a:focus-visible {
		background-color: var(--green);
		color: black;
	}
	li img {
		height: 1.5rem;
	}
</style>
