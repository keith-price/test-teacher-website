<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		href = undefined,
		target = '',
		rel = '',
		variant = 'default',
		onclick,
		children
	}: {
		href?: string | undefined;
		target?: string;
		rel?: string;
		variant?: 'default' | 'lg';
		onclick?: () => void;
		children: Snippet;
	} = $props();
</script>

{#if href !== undefined}
	<a
		{href}
		{target}
		rel={target === '_blank' ? 'noopener noreferrer' : rel}
		class="btn btn--{variant}"
		{onclick}
	>
		{@render children()}
	</a>
{:else}
	<button class="btn btn--{variant}" {onclick}>
		{@render children()}
	</button>
{/if}

<style>
	.btn {
		display: inline-block;
		padding: var(--space-3) var(--space-8);
		background: var(--color-accent);
		color: #fff;
		font-weight: var(--font-semibold);
		font-size: var(--font-size-base);
		border-radius: var(--radius-lg);
		transition: all var(--transition-fast);
		box-shadow: var(--shadow-md);
		text-align: center;
		cursor: pointer;
	}

	.btn:hover {
		background: var(--color-accent-hover);
		color: #fff;
		transform: translateY(-1px);
		box-shadow: var(--shadow-lg);
	}

	.btn--lg {
		padding: var(--space-4) var(--space-10);
		font-size: var(--font-size-lg);
	}

	.btn--lg:hover {
		transform: translateY(-2px);
	}
</style>
