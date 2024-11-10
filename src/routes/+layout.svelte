<script lang="ts">
	import { page } from '$app/stores';

	let { children } = $props();
</script>

<header>
	<h1>
		<a href="/">
			<img
				src="https://git.inpt.fr/inp-net/visual-identity/-/raw/main/favicon-green-on-black.svg"
				alt=">_"
			/>
			INP Developers
		</a>
	</h1>
	<a class="button" href={$page.url.hash === '#new' && $page.url.pathname === '/' ? '#' : '/#new'}
		>new app</a
	>
</header>

<main>{@render children()}</main>

<footer>
	Un service INP-net.
	<br />
	source @
	<a href="https://git.inpt.fr/inp-net/developers-dashboard"
		>git.inpt.fr/inp-net/developers-dashboard</a
	>
	<br />
	stack = &lbrace; <a href="https://the-guild.dev/graphql/mesh">GraphQL Mesh</a>,
	<a href="https://svelte.dev">Svelte</a>, <a href="https://houdinigraphql.com">Houdini GraphQL</a> &rbrace;
</footer>

<style>
	h1 a {
		display: flex;
		align-items: center;
		gap: 0 1ch;
		text-decoration: none;
	}
	h1 img {
		height: 1.2em;
	}

	header,
	main,
	footer {
		max-width: 1000px;
		margin: 0 auto;
	}
	header {
		margin-bottom: 3rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	footer {
		margin-top: 5rem;
		opacity: 0.5;
	}
</style>
