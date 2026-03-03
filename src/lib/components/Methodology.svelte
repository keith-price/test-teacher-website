<script lang="ts">
	import { teacher } from '$lib/data/teacher';
</script>

<section class="methodology section" id="methodology">
	<div class="container">
		<span class="section-label">Teaching Method</span>
		<h2 class="section-title">How Lessons Work</h2>
		<p class="section-subtitle">
			A proven approach built on authentic materials, structure, and active correction.
		</p>

		<div class="methodology__grid">
			{#each teacher.methodologyPillars as pillar, i}
				<div class="methodology__card" style="--delay: {i * 80}ms">
					<span class="methodology__icon">{pillar.icon}</span>
					<h3 class="methodology__card-title">{pillar.title}</h3>
					<p class="methodology__card-description">{pillar.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.methodology__grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--space-6);
		margin-top: var(--space-12);
	}

	.methodology__card {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-xl);
		padding: var(--space-8);
		transition: all var(--transition-base);
		animation: fade-in-up var(--transition-slow) ease-out both;
		animation-delay: var(--delay);
	}

	.methodology__card:hover {
		border-color: var(--color-accent-light);
		box-shadow: var(--shadow-lg);
		transform: translateY(-2px);
	}

	.methodology__icon {
		font-size: var(--font-size-3xl);
		display: block;
		margin-bottom: var(--space-4);
	}

	.methodology__card-title {
		font-size: var(--font-size-lg);
		font-weight: var(--font-semibold);
		color: var(--color-text);
		margin-bottom: var(--space-3);
	}

	.methodology__card-description {
		font-size: var(--font-size-sm);
		color: var(--color-text-secondary);
		line-height: 1.7;
	}

	@media (max-width: 768px) {
		.methodology__grid {
			grid-template-columns: 1fr;
		}

		.methodology__card {
			padding: var(--space-6);
		}
	}
</style>
