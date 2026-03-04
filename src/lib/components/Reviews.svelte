<script lang="ts">
	import type { TeacherProfile } from '$lib/data/teacher';
	import SectionHeader from './SectionHeader.svelte';

	let {
		teacher,
		overallStars
	}: {
		teacher: TeacherProfile;
		overallStars: number[];
	} = $props();

	// TODO [REVIEWS]: Fetch reviews dynamically from the database via +page.server.ts
	//   - Add pagination or infinite scroll for review lists
	//   - Consider letting students submit reviews after completed lessons
</script>

<section class="reviews section" id="reviews">
	<div class="container">
		<SectionHeader label="Reviews" title="What Students Say" />

		<div class="reviews__layout">
			<div class="reviews__overall">
				<div class="reviews__score">
					<span class="reviews__score-number">{teacher.overallRating}</span>
					<div class="reviews__score-stars">
						{#each overallStars as fillPercentage}
							<span class="star">
								<span class="star__empty">★</span>
								<span class="star__fill" style="width: {fillPercentage}%">★</span>
							</span>
						{/each}
					</div>
					<span class="reviews__score-count">Based on {teacher.totalReviews} reviews</span>
				</div>

				<div class="reviews__detailed">
					{#each teacher.detailedRatings as rating}
						<div class="reviews__rating-row">
							<span class="reviews__rating-label">{rating.category}</span>
							<div class="reviews__rating-bar">
								<div
									class="reviews__rating-fill"
									style="--progress: {(rating.score / 5) * 100}%"
								></div>
							</div>
							<span class="reviews__rating-value">{rating.score.toFixed(1)}</span>
						</div>
					{/each}
				</div>
			</div>

			<div class="reviews__testimonials">
				{#each teacher.testimonials as testimonial}
					<div class="reviews__testimonial">
						<h3 class="reviews__testimonial-title">{testimonial.highlight}</h3>
						<p class="reviews__testimonial-text">"{testimonial.detail}"</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.reviews__layout {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-12);
		margin-top: var(--space-12);
	}

	.reviews__overall {
		display: flex;
		flex-direction: column;
		gap: var(--space-8);
	}

	.reviews__score {
		text-align: center;
		padding: var(--space-8);
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-xl);
	}

	.reviews__score-number {
		font-size: 4rem;
		font-weight: var(--font-bold);
		color: var(--color-text);
		line-height: 1;
		display: block;
		letter-spacing: -0.03em;
	}

	.reviews__score-stars {
		margin-top: var(--space-2);
		font-size: var(--font-size-xl);
		display: flex;
		justify-content: center;
		gap: 4px;
	}

	.star {
		position: relative;
		display: inline-block;
	}

	.star__empty {
		color: var(--color-border);
	}

	.star__fill {
		position: absolute;
		left: 0;
		top: 0;
		color: var(--color-star);
		overflow: hidden;
		white-space: nowrap;
	}

	.reviews__score-count {
		display: block;
		margin-top: var(--space-2);
		font-size: var(--font-size-sm);
		color: var(--color-text-muted);
	}

	.reviews__detailed {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}

	.reviews__rating-row {
		display: flex;
		align-items: center;
		gap: var(--space-4);
	}

	.reviews__rating-label {
		font-size: var(--font-size-sm);
		font-weight: var(--font-medium);
		color: var(--color-text-secondary);
		width: 110px;
		flex-shrink: 0;
	}

	.reviews__rating-bar {
		flex: 1;
		height: 8px;
		background: var(--color-bg-alt);
		border-radius: var(--radius-full);
		overflow: hidden;
	}

	.reviews__rating-fill {
		height: 100%;
		width: var(--progress);
		background: var(--color-accent);
		border-radius: var(--radius-full);
		transition: width 1s ease-out;
	}

	.reviews__rating-value {
		font-size: var(--font-size-sm);
		font-weight: var(--font-semibold);
		color: var(--color-text);
		width: 32px;
		text-align: right;
	}

	.reviews__testimonials {
		display: flex;
		flex-direction: column;
		gap: var(--space-6);
	}

	.reviews__testimonial {
		padding: var(--space-6);
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-xl);
		border-left: 3px solid var(--color-accent);
		transition: border-color var(--transition-fast);
	}

	.reviews__testimonial:hover {
		border-color: var(--color-accent-light);
		border-left-color: var(--color-accent);
	}

	.reviews__testimonial-title {
		font-size: var(--font-size-base);
		font-weight: var(--font-semibold);
		color: var(--color-text);
		margin-bottom: var(--space-2);
	}

	.reviews__testimonial-text {
		font-size: var(--font-size-sm);
		color: var(--color-text-secondary);
		line-height: 1.7;
		font-style: italic;
	}

	@media (max-width: 768px) {
		.reviews__layout {
			grid-template-columns: 1fr;
		}
	}
</style>
