import { describe, it, expect } from 'vitest';
import { render } from 'svelte/server';
import About from '../About.svelte';

describe('About', () => {
	it('renders section heading', () => {
		const { html } = render(About);
		expect(html).toContain('Meet Your Teacher');
	});

	it('renders avatar image', () => {
		const { html } = render(About);
		expect(html).toContain('keith-profile.jpg');
	});

	it('renders all countries taught', () => {
		const { html } = render(About);
		for (const country of [
			'China',
			'Thailand',
			'India',
			'Kazakhstan',
			'Russia',
			'Italy',
			'Indonesia'
		]) {
			expect(html).toContain(country);
		}
	});

	it('renders personal info', () => {
		const { html } = render(About);
		expect(html).toContain('Married with three children');
	});
});
