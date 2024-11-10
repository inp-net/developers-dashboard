<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children }: { children: Snippet<[]> } = $props();

	let shown = $state(false);
</script>

<div class="sensitive-value">
	<button
		onclick={() => {
			shown = !shown;
		}}
		>{#if shown}cacher{:else}montrer{/if}</button
	>
	{#if shown}
		{@render children?.()}
	{:else}
		{Array.from({ length: 20 })
			.map(() => '*')
			.join('')}
	{/if}
</div>
