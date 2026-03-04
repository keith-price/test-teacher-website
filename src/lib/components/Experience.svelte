<script lang="ts">
	import type { TeacherProfile } from '$lib/data/teacher';
	import SectionHeader from './SectionHeader.svelte';

	let { teacher }: { teacher: TeacherProfile } = $props();
</script>

<section class="experience section section--alt" id="experience">
	<div class="container">
		<SectionHeader label="Experience" title="A Global Teaching Journey" />
		<p class="section-subtitle">
			From volunteering in India to teaching online worldwide — two decades of dedicated ESL
			instruction.
		</p>

		<div class="timeline">
			{#each teacher.careerMilestones as milestone, i}
				<div class="timeline__item" style="--delay: {i * 100}ms">
					<div class="timeline__marker">
						<div class="timeline__dot"></div>
						{#if i < teacher.careerMilestones.length - 1}
							<div class="timeline__line"></div>
						{/if}
					</div>
					<div class="timeline__content">
						<span class="timeline__period">{milestone.period}</span>
						<h3 class="timeline__role">{milestone.role}</h3>
						<span class="timeline__location">📍 {milestone.location}</span>
						<p class="timeline__description">{milestone.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.timeline {
		margin-top: var(--space-12);
		max-width: 640px;
	}

	.timeline__item {
		display: flex;
		gap: var(--space-6);
		animation: fade-in-up var(--transition-slow) ease-out both;
		animation-delay: var(--delay);
	}

	.timeline__marker {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex-shrink: 0;
		width: 20px;
	}

	.timeline__dot {
		width: 14px;
		height: 14px;
		border-radius: var(--radius-full);
		background: var(--color-accent);
		border: 3px solid var(--color-accent-light);
		flex-shrink: 0;
	}

	.timeline__line {
		width: 2px;
		flex: 1;
		background: var(--color-border);
		margin-block: var(--space-2);
	}

	.timeline__content {
		padding-bottom: var(--space-10);
	}

	.timeline__period {
		font-size: var(--font-size-xs);
		font-weight: var(--font-semibold);
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--color-accent);
	}

	.timeline__role {
		font-size: var(--font-size-lg);
		font-weight: var(--font-semibold);
		color: var(--color-text);
		margin-top: var(--space-1);
		margin-bottom: var(--space-1);
	}

	.timeline__location {
		font-size: var(--font-size-sm);
		color: var(--color-text-muted);
	}

	.timeline__description {
		font-size: var(--font-size-base);
		color: var(--color-text-secondary);
		margin-top: var(--space-2);
		line-height: 1.6;
	}

	@media (max-width: 768px) {
		.timeline__content {
			padding-bottom: var(--space-8);
		}
	}
</style>
