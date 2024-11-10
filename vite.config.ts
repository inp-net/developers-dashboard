import { sveltekit } from '@sveltejs/kit/vite';
import houdini from '@ewen-lbh/houdini/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [houdini({ autoCodeGen: 'smart' }), sveltekit()]
});
