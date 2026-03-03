import { describe, it, expect } from 'vitest';
import { render } from 'svelte/server';
import Footer from '../Footer.svelte';

describe('Footer', () => {
	it('renders copyright with current year', () => {
		const { html } = render(Footer);
		const year = new Date().getFullYear();
		expect(html).toContain(`© ${year} Keith Price`);
	});

	it('renders tagline', () => {
		const { html } = render(Footer);
		expect(html).toContain('ESL Teacher');
		expect(html).toContain('20 Years of Experience');
	});
});
