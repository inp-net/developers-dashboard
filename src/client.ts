import { HoudiniClient } from '$houdini';

export default new HoudiniClient({
	url: 'http://localhost:5000/graphql',
	fetchParams({ session, metadata }) {
		return {
			headers: {
				// 'x-token': metadata?.tokenOverride ?? session?.token ?? ''
				'x-token': session?.token ?? ''
			}
		};
	}
});
