# INP Developers

Live at <https://developers.inpt.fr>

Stack:

- <a href="https://the-guild.dev/graphql/mesh">GraphQL Mesh</a>: to unify Churros' API and Authentik's API into a single GraphQL API
- <a href="https://svelte.dev">Svelte</a>: for the UI
- <a href="https://houdinigraphql.com">Houdini GraphQL</a>: to interact with the unified API

## Development

```
cp .env.example .env
# fill out .env
bun i
bun dev
```

## Updating superschema.graphql

After making changes to Mesh's config (`mesh.config.ts`)

The dev environment will reload itself

```sh
sh update-supergraph.sh
```
