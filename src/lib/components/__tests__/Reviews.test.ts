import { describe, it, expect } from 'vitest';
import { render } from 'svelte/server';
import Reviews from '../Reviews.svelte';

describe('Reviews', () => {
	it('renders section heading', () => {
		const { html } = render(Reviews);
		expect(html).toContain('What Students Say');
	});

	it('renders overall rating', () => {
		const { html } = render(Reviews);
		expect(html).toContain('4.8');
	});

	it('renders review count', () => {
		const { html } = render(Reviews);
		expect(html).toContain('61 reviews');
	});

	it('renders all detailed rating categories', () => {
		const { html } = render(Reviews);
		expect(html).toContain('Reassurance');
		expect(html).toContain('Preparation');
		expect(html).toContain('Clarity');
		expect(html).toContain('Progress');
	});

	it('renders testimonials', () => {
		const { html } = render(Reviews);
		expect(html).toContain('Patience &amp; Support');
		expect(html).toContain('relaxed, comfortable');
	});
});
