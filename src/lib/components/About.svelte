<script lang="ts">
	import type { TeacherProfile } from '$lib/data/teacher';
	import SectionHeader from './SectionHeader.svelte';

	let { teacher }: { teacher: TeacherProfile } = $props();
</script>

<section class="about section" id="about">
	<div class="container">
		<div class="about__grid">
			<div class="about__avatar">
				<div class="about__avatar-placeholder">
					<img
						src="/images/keith-profile.jpg"
						alt={teacher.name || 'Teacher profile photo'}
						class="about__avatar-img"
						width="200"
						height="200"
						loading="eager"
						onerror={(e) => (e.currentTarget as HTMLElement).style.display = 'none'}
					/>
				</div>
				<div class="about__avatar-badge">
					<span>🇬🇧</span> British English
				</div>
			</div>

			<div class="about__content">
				<SectionHeader label="About" title="Meet Your Teacher" />
				<p class="about__bio">
					{teacher.origin}, Keith has spent {teacher.yearsExperience} years helping students across
					{teacher.countriesTaught.length} countries master English. Now based in {teacher.currentLocation},
					he teaches exclusively online — bringing decades of classroom experience to every session.
				</p>
				<p class="about__personal">
					{teacher.personalLife}
				</p>
				<div class="about__countries">
					<span class="about__countries-label">Countries taught in:</span>
					<div class="about__country-list">
						{#each teacher.countriesTaught as country}
							<span class="about__country-tag">{country}</span>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.about__grid {
		display: grid;
		grid-template-columns: 280px 1fr;
		gap: var(--space-16);
		align-items: start;
	}

	.about__avatar {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-4);
	}

	.about__avatar-placeholder {
		width: 200px;
		height: 200px;
		border-radius: var(--radius-full);
		background: linear-gradient(135deg, var(--color-accent-light), var(--color-accent-soft));
		display: flex;
		align-items: center;
		justify-content: center;
		border: 3px solid var(--color-accent);
	}

	.about__avatar-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: var(--radius-full);
	}

	.about__avatar-badge {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		font-size: var(--font-size-sm);
		font-weight: var(--font-medium);
		color: var(--color-text-secondary);
		background: var(--color-surface);
		padding: var(--space-2) var(--space-4);
		border-radius: var(--radius-full);
		border: 1px solid var(--color-border);
	}

	.about__bio {
		font-size: var(--font-size-lg);
		color: var(--color-text-secondary);
		line-height: 1.7;
		margin-bottom: var(--space-4);
	}

	.about__personal {
		font-size: var(--font-size-base);
		color: var(--color-text-muted);
		margin-bottom: var(--space-8);
	}

	.about__countries-label {
		font-size: var(--font-size-sm);
		font-weight: var(--font-semibold);
		color: var(--color-text);
		display: block;
		margin-bottom: var(--space-3);
	}

	.about__country-list {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
	}

	.about__country-tag {
		display: inline-block;
		padding: var(--space-1) var(--space-3);
		background: var(--color-accent-soft);
		color: var(--color-accent);
		font-size: var(--font-size-sm);
		font-weight: var(--font-medium);
		border-radius: var(--radius-full);
		border: 1px solid var(--color-accent-light);
	}

	@media (max-width: 768px) {
		.about__grid {
			grid-template-columns: 1fr;
			gap: var(--space-8);
		}

		.about__avatar {
			align-items: center;
		}

		.about__avatar-placeholder {
			width: 160px;
			height: 160px;
		}
	}
</style>
