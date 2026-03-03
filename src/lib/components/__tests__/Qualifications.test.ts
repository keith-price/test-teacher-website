import { describe, it, expect } from 'vitest';
import { render } from 'svelte/server';
import Qualifications from '../Qualifications.svelte';

describe('Qualifications', () => {
	it('renders certifications heading', () => {
		const { html } = render(Qualifications);
		expect(html).toContain('Certifications');
	});

	it('renders all certifications', () => {
		const { html } = render(Qualifications);
		expect(html).toContain('TEFL/TESOL');
		expect(html).toContain('Preply Language Teaching Certificate');
		expect(html).toContain('IELTS Certification');
		expect(html).toContain('Teaching IELTS Preparation Course');
	});

	it('renders verified badges', () => {
		const { html } = render(Qualifications);
		expect(html).toContain('Verified');
	});

	it('renders all specialties', () => {
		const { html } = render(Qualifications);
		for (const s of [
			'Conversational English',
			'Business English',
			'IELTS Preparation',
			'British English',
			'English for Traveling',
			'Job Interview Preparation'
		]) {
			expect(html).toContain(s);
		}
	});
});
