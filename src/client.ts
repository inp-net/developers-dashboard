import { env } from '$env/dynamic/public';
import { HoudiniClient } from '$houdini';

export default new HoudiniClient({
	url: `${env.PUBLIC_GATEWAY_ORIGIN}/graphql`,
	fetchParams({ session, metadata }) {
		return {
			headers: {
				// 'x-token': metadata?.tokenOverride ?? session?.token ?? ''
				'x-token': session?.token ?? ''
			}
		};
	}
});
