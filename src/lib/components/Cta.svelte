<script lang="ts">
	import Button from './Button.svelte';
	import { bookingUrl } from '$lib/data/config';

	// TODO [BOOKING]: This section will evolve into an inline booking form.
	//   - Replace the external link Button with a BookingCalendar component
	//   - Show available time slots fetched from +page.server.ts or an API route
	//   - Integrate Stripe Checkout for payment after slot selection
	// TODO [SCHEDULING]: Import teacher availability data and display next available slots
</script>

<section class="cta section section--alt" id="contact">
	<div class="container">
		<div class="cta__inner">
			<span class="section-label">Get Started</span>
			<h2 class="cta__title">Ready to Improve Your English?</h2>
			<p class="cta__description">
				Book a trial lesson to assess your level, set goals, and experience the teaching method
				first-hand. Whether you need general fluency, business English, or IELTS preparation — let's
				build a plan together.
			</p>
			<Button href={bookingUrl} target="_blank" variant="lg">Book a Trial Lesson</Button>
			<p class="cta__note">Free introductory consultation · No commitment required</p>
		</div>
	</div>
</section>

<style>
	.cta__inner {
		text-align: center;
		max-width: 600px;
		margin-inline: auto;
		padding-block: var(--space-8);
	}

	.cta__title {
		font-size: var(--font-size-3xl);
		font-weight: var(--font-bold);
		color: var(--color-text);
		line-height: 1.2;
		margin-bottom: var(--space-4);
	}

	.cta__description {
		font-size: var(--font-size-lg);
		color: var(--color-text-secondary);
		line-height: 1.7;
		margin-bottom: var(--space-8);
	}

	.cta__note {
		margin-top: var(--space-4);
		font-size: var(--font-size-sm);
		color: var(--color-text-muted);
	}

	@media (max-width: 768px) {
		.cta__title {
			font-size: var(--font-size-2xl);
		}
	}
</style>
