<script lang="ts">
	import type { PageData } from './$houdini';
	interface Props {
		data: PageData;
	}
	const { data }: Props = $props();
	const { PageApplication } = $derived(data);
</script>

{JSON.stringify($PageApplication, null, 8)}
