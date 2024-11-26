import { env } from '$env/dynamic/public';
import { HoudiniClient } from '$houdini';

export default new HoudiniClient({
	url: `${env.PUBLIC_GATEWAY_ORIGIN}/graphql`,
	fetchParams({ session, metadata, document }) {
		if (metadata?.tokenOverride) console.log(`${document.name}: using token override`);
		return {
			headers: {
				'x-token': metadata?.tokenOverride ?? session?.token ?? ''
			}
		};
	}
});
