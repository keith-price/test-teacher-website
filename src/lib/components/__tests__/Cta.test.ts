import { describe, it, expect } from 'vitest';
import { render } from 'svelte/server';
import Cta from '../Cta.svelte';

describe('Cta', () => {
	it('renders heading', () => {
		const { html } = render(Cta);
		expect(html).toContain('Ready to Improve Your English?');
	});

	it('renders booking button with Preply link', () => {
		const { html } = render(Cta);
		expect(html).toContain('href="https://preply.com"');
		expect(html).toContain('Book a Trial Lesson');
	});

	it('renders free consultation note', () => {
		const { html } = render(Cta);
		expect(html).toContain('Free introductory consultation');
	});
});
