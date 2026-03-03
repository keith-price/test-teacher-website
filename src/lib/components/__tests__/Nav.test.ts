import { describe, it, expect } from 'vitest';
import { render } from 'svelte/server';
import Nav from '../Nav.svelte';

describe('Nav', () => {
	it('renders the teacher name as logo', () => {
		const { html } = render(Nav);
		expect(html).toContain('Keith Price');
	});

	it('renders all navigation links', () => {
		const { html } = render(Nav);
		expect(html).toContain('About');
		expect(html).toContain('Experience');
		expect(html).toContain('Method');
		expect(html).toContain('Qualifications');
		expect(html).toContain('Reviews');
		expect(html).toContain('Contact');
	});

	it('nav links use correct anchor hrefs', () => {
		const { html } = render(Nav);
		expect(html).toContain('href="#about"');
		expect(html).toContain('href="#experience"');
		expect(html).toContain('href="#methodology"');
		expect(html).toContain('href="#qualifications"');
		expect(html).toContain('href="#reviews"');
		expect(html).toContain('href="#contact"');
	});

	it('renders mobile menu toggle', () => {
		const { html } = render(Nav);
		expect(html).toContain('id="mobile-menu-toggle"');
	});
});
