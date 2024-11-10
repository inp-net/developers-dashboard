/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
	schemaPath: 'supergraph.graphql',
	plugins: {
		'houdini-svelte': {}
	},
	scalars: {
		UUID: {
			type: 'string'
		},
		JSON: {
			type: 'string'
		},
		NonEmptyString: {
			type: 'string'
		}
	}
};

export default config;
