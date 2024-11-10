<script lang="ts">
	import type { ActionData } from './$types';
	import type { PageData } from './$houdini';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	interface Props {
		data: PageData;
		form: ActionData;
	}

	const { data, form }: Props = $props();
	const { PageHome } = $derived(data);

	const apps = $derived(
		$PageHome.data?.applications?.__typename === 'PaginatedApplicationList'
			? $PageHome.data.applications.results.filter((app) => app !== null)
			: []
	);

	$effect(() => console.log($PageHome));

	onMount(async () => {
		if (form?.appSlug) {
			await goto(`/apps/${form.appSlug}`);
		}
	});
</script>

<h1>Home</h1>
{#if apps.length === 0}
	<a href="/login">Connexion</a>
{/if}

<form action="?/createApp" method="post">
	<label>
		<span>Groupe Churros</span>
		<input type="text" name="group" />
	</label>
	<label>
		<span>Nom de l'app</span>
		<input type="text" name="name" />
	</label>

	<section class="submit">
		<button type="submit">Créer</button>
	</section>
</form>

<ul>
	{#each apps as app}
		<li>
			<a href="/apps/{app.slug}">
				<img src={app.metaIcon} alt="Icone" />
				{app.name} by {app?.metaPublisher}
			</a>
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
		padding-left: 0;
	}
	li > a {
		display: flex;
		align-items: center;
		gap: 0 1ch;
	}
	li img {
		height: 1.5rem;
	}
</style>
