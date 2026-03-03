import { describe, it, expect } from 'vitest';
import { render } from 'svelte/server';
import Methodology from '../Methodology.svelte';

describe('Methodology', () => {
	it('renders section heading', () => {
		const { html } = render(Methodology);
		expect(html).toContain('How Lessons Work');
	});

	it('renders all four pillars', () => {
		const { html } = render(Methodology);
		expect(html).toContain('Real World English');
		expect(html).toContain('Structured Lessons');
		expect(html).toContain('Active Error Correction');
		expect(html).toContain('Goal-Oriented Approach');
	});

	it('renders pillar descriptions', () => {
		const { html } = render(Methodology);
		expect(html).toContain('TED Talks');
		expect(html).toContain('Vocabulary list');
	});
});
