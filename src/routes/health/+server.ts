import { env as secrets } from '$env/dynamic/private';
import { graphql } from '$houdini';
import { text } from '@sveltejs/kit';

export async function GET(event) {
	const fetchAsAdmin = {
		event,
		metadata: { tokenOverride: secrets.AUTHENTIK_ADMIN_TOKEN }
	};

	const ok = await graphql(`
		query Healthcheck @cache(policy: NetworkOnly) {
			authentik: applications {
				__typename
			}
			churros: healthcheck {
				database {
					prisma
				}
			}
		}
	`)
		.fetch(fetchAsAdmin)
		.then(({ data, errors }) => {
			console.info({ errors, data });
			return (
				data?.churros?.database.prisma && data.authentik?.__typename === 'PaginatedApplicationList'
			);
		})
		.catch((error) => {
			console.info(error?.toString() ?? '<unknown error>');
			return false;
		});

	return text(ok ? 'OK' : 'FAIL', {
		status: ok ? 200 : 500
	});
}
