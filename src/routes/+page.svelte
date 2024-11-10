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
	const apps = $derived.by(() => {
		if (!$PageHome) return [];
		if ($PageHome.data?.application?.__typename === 'Application') {
			return [$PageHome.data.application];
		}
		return [];
	});

	$effect(() => console.log($PageHome));

	onMount(async () => {
		if (form?.appSlug) {
			await goto(`/app/${form.appSlug}`);
		}
	});
</script>

<h1>Home</h1>

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

<div>
	{$PageHome?.errors?.map((e) => e.message).join('\n') ?? ''}
</div>
<ul>
	{#each apps as app}
		<li>
			{JSON.stringify(app)}
		</li>
	{/each}
</ul>
