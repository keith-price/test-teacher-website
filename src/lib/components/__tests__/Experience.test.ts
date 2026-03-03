import { describe, it, expect } from 'vitest';
import { render } from 'svelte/server';
import Experience from '../Experience.svelte';

describe('Experience', () => {
	it('renders section heading', () => {
		const { html } = render(Experience);
		expect(html).toContain('A Global Teaching Journey');
	});

	it('renders all career milestones', () => {
		const { html } = render(Experience);
		expect(html).toContain('IELTS Training Volunteer');
		expect(html).toContain('Business English Instructor');
		expect(html).toContain('International ESL Teacher');
		expect(html).toContain('Online ESL Teacher');
	});

	it('renders milestone locations', () => {
		const { html } = render(Experience);
		expect(html).toContain('India');
		expect(html).toContain('Moscow');
		expect(html).toContain('Preply');
	});
});
