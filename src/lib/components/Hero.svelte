<script lang="ts">
	import type { TeacherProfile } from '$lib/data/teacher';
	import Button from './Button.svelte';

	let { teacher }: { teacher: TeacherProfile } = $props();

	// TODO [BOOKING]: Show next available slot below the CTA button
	//   e.g. "Next available: Tomorrow at 3:00 PM (your time)"
	// TODO [SCHEDULING]: Replace the #contact anchor with a direct /book link or modal trigger

	const stats = $derived([
		{ value: teacher.yearsExperience, suffix: '', label: 'Years Experience' },
		{ value: teacher.countriesTaught.length, suffix: '', label: 'Countries' },
		{ value: teacher.totalLessons, suffix: '+', label: 'Lessons Completed' },
		{ value: teacher.overallRating, suffix: '★', label: 'Student Rating' }
	]);
</script>

<section class="hero" id="hero">
	<div class="hero__inner container">
		<div class="hero__content">
			<p class="hero__label">ESL Teacher</p>
			<h1 class="hero__name">{teacher.name}</h1>
			<p class="hero__tagline">{teacher.tagline}</p>
			<p class="hero__origin">{teacher.origin}, currently based in {teacher.currentLocation}</p>
			<Button href="#contact">Book a Trial Lesson</Button>
		</div>

		<div class="hero__stats" id="hero-stats">
			{#each stats as stat}
				<div class="hero__stat">
					<span class="hero__stat-value">
						{stat.value}{stat.suffix}
					</span>
					<span class="hero__stat-label">{stat.label}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.hero {
		padding-block: var(--space-24) var(--space-16);
		background: linear-gradient(180deg, var(--color-accent-soft) 0%, var(--color-bg) 100%);
	}

	.hero__inner {
		display: flex;
		flex-direction: column;
		gap: var(--space-16);
	}

	.hero__content {
		max-width: 640px;
	}

	.hero__label {
		font-size: var(--font-size-sm);
		font-weight: var(--font-semibold);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--color-accent);
		margin-bottom: var(--space-4);
	}

	.hero__name {
		font-size: var(--font-size-5xl);
		font-weight: var(--font-bold);
		line-height: 1.1;
		letter-spacing: -0.03em;
		color: var(--color-text);
		margin-bottom: var(--space-4);
	}

	.hero__tagline {
		font-size: var(--font-size-xl);
		font-weight: var(--font-light);
		color: var(--color-text-secondary);
		margin-bottom: var(--space-3);
	}

	.hero__origin {
		font-size: var(--font-size-base);
		color: var(--color-text-muted);
		margin-bottom: var(--space-8);
	}

	.hero__stats {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: var(--space-6);
		padding-top: var(--space-8);
		border-top: 1px solid var(--color-border);
	}

	.hero__stat {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
	}

	.hero__stat-value {
		font-size: var(--font-size-3xl);
		font-weight: var(--font-bold);
		color: var(--color-text);
		letter-spacing: -0.02em;
	}

	.hero__stat-label {
		font-size: var(--font-size-sm);
		color: var(--color-text-muted);
		font-weight: var(--font-medium);
	}

	@media (max-width: 768px) {
		.hero {
			padding-block: var(--space-16) var(--space-12);
		}

		.hero__name {
			font-size: var(--font-size-4xl);
		}

		.hero__stats {
			grid-template-columns: repeat(2, 1fr);
			gap: var(--space-8);
		}
	}
</style>
