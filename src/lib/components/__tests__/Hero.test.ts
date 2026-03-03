import { describe, it, expect } from 'vitest';
import { render } from 'svelte/server';
import Hero from '../Hero.svelte';

describe('Hero', () => {
	it('renders the teacher name', () => {
		const { html } = render(Hero);
		expect(html).toContain('Keith Price');
	});

	it('renders the tagline', () => {
		const { html } = render(Hero);
		expect(html).toContain('20 Years Teaching English Worldwide');
	});

	it('renders key statistics', () => {
		const { html } = render(Hero);
		expect(html).toContain('>20<');
		expect(html).toContain('>7<');
		expect(html).toContain('1520');
		expect(html).toContain('4.8');
	});

	it('renders stat labels', () => {
		const { html } = render(Hero);
		expect(html).toContain('Years Experience');
		expect(html).toContain('Countries');
		expect(html).toContain('Lessons Completed');
		expect(html).toContain('Student Rating');
	});

	it('renders CTA link to contact section', () => {
		const { html } = render(Hero);
		expect(html).toContain('href="#contact"');
		expect(html).toContain('Book a Trial Lesson');
	});
});
