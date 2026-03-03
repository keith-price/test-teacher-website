// TODO: Before implementing the booking/payment system, switch from adapter-static
// to a server-capable adapter (e.g. adapter-node, adapter-vercel, or adapter-auto).
// Static adapters cannot handle secure server-side endpoints (+server.ts, form actions)
// needed for payment processing and calendar state management.
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		})
	}
};

export default config;
