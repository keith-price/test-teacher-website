<script lang="ts">
	import '$lib/styles/global.css';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();

	// TODO [AUTH]: Wrap the layout in an auth context provider (e.g. Supabase auth, Lucia)
	//   to make user session available to all child routes
	// TODO [CHAT]: Add a global ChatWidget component here (outside {children})
	//   so it persists across all page navigations
</script>

{@render children()}
