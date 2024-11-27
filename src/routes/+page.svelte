<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$houdini';
	import type { ActionData } from './$types';

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

	let selectedClientType: 'CONFIDENTIAL' | 'PUBLIC' = $state('CONFIDENTIAL');
	let selectedGroup: string | null = $state(null);
</script>

{#if $PageHome.fetching}
	<p>Loading...</p>
{/if}

{#if apps.length === 0}
	<a class="button" href="/login">Connexion</a>
{:else}
	{#if creating}
		<form class="new" action="?/createApp" method="post">
			<section class="side-by-side">
				<section class="basic">
					<label for="new-group">
						<span>Groupe responsable</span>
					</label>
					<div class="input-with-pic">
						{#await fetch(`https://churros.inpt.fr/${selectedGroup}.png`)}
							<div class="placeholder-group-logo"></div>
						{:then response}
							{#if response.ok && authentikGroups.some((g) => g.name === selectedGroup)}
								<img
									src="https://churros.inpt.fr/{selectedGroup}.png"
									alt="Logo de {selectedGroup}"
								/>
							{:else}
								<div class="placeholder-group-logo"></div>
							{/if}
						{:catch}
							<div class="placeholder-group-logo"></div>
						{/await}
						<input
							id="new-group"
							type="text"
							name="group"
							autocomplete="off"
							list="churros-group-names"
							bind:value={selectedGroup}
						/>
					</div>
					<label for="new-name">
						<span>Nom de l'app</span>
					</label>
					<div class="input-with-pic">
						<!-- just there for alignment purposes -->
						<div class="placeholder-group-logo"></div>
						<input id="new-name" type="text" name="name" />
					</div>
					<datalist id="churros-group-names">
						{#each authentikGroups as { name }}
							<option>{name}</option>
						{/each}
					</datalist>
				</section>
				<fieldset class="client-type">
					<legend>Type d'app</legend>
					<label>
						<input
							type="radio"
							name="type"
							value="CONFIDENTIAL"
							checked={selectedClientType === 'CONFIDENTIAL'}
							on:change={() => (selectedClientType = 'CONFIDENTIAL')}
						/>
						Normal
						<p class="client-type-explanation">
							Nécéssite un serveur pour stocker un secret
							<br />
							Le plus commun
						</p>
					</label>
					<label>
						<input
							type="radio"
							name="type"
							value="PUBLIC"
							checked={selectedClientType === 'PUBLIC'}
							on:change={() => (selectedClientType = 'PUBLIC')}
						/>
						Publique
						<p class="client-type-explanation">
							Ne nécéssite pas de serveur (Github Pages, par exemple).
							<br />
							Il faut utiliser le
							<a
								href="https://blog.postman.com/pkce-oauth-how-to/#:~:text=and%20browser%2Dbased%20apps.-,What%20is%20PKCE?,-%E2%80%9CPKCE%20(Proof%20Key"
								target="_blank"
							>
								flow OAuth2 “PKCE”
							</a>
						</p>
					</label>
				</fieldset>
			</section>

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
		align-items: center;
		flex-wrap: wrap;
		padding: 3rem 1rem;
		gap: 1rem 0;
		margin: 0 auto;
		flex-direction: column;
	}
	form .side-by-side {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}
	form.new .basic {
		display: flex;
		flex-direction: column;
		padding: 3rem 1rem;
		gap: 1rem 0;
	}
	form.new .submit {
		margin-top: 2rem;
	}
	.input-with-pic {
		display: flex;
		align-items: center;
		gap: 1em;
	}
	.input-with-pic :is(.placeholder-group-logo, img) {
		height: 1.5em;
		width: 1.5em;
		object-fit: cover;
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

	label input[type='radio'] {
		display: none;
	}
	label:has(input[type='radio'])::before {
		content: '';
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		display: inline-block;
		vertical-align: middle;
		background-color: black;
		border: 1px solid var(--green);
	}
	label:has(input[type='radio']:checked)::before {
		background-color: var(--green);
	}
	label:has(input[type='radio']:not(:checked)) p {
		opacity: 0.5;
	}

	
</style>
