// See https://svelte.dev/docs/kit/types#app.d.ts

import type { OAuth2Tokens } from "arctic";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		interface Session {
			token?: string
		}
		interface Metadata {
			tokenOverride?: string
		}
	}
}

export {};
