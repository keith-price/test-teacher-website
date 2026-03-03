import { describe, it, expect } from 'vitest';
import { teacher } from '$lib/data/teacher';

describe('Teacher Data', () => {
	it('has correct name', () => {
		expect(teacher.name).toBe('Keith Price');
	});

	it('has 20 years experience', () => {
		expect(teacher.yearsExperience).toBe(20);
	});

	it('has 7 countries', () => {
		expect(teacher.countriesTaught).toHaveLength(7);
	});

	it('has 1520+ lessons', () => {
		expect(teacher.totalLessons).toBeGreaterThanOrEqual(1520);
	});

	it('has 4.8 rating', () => {
		expect(teacher.overallRating).toBe(4.8);
	});

	it('has 4 methodology pillars', () => {
		expect(teacher.methodologyPillars).toHaveLength(4);
	});

	it('has 4 certifications', () => {
		expect(teacher.certifications).toHaveLength(4);
	});

	it('has 6 specialties', () => {
		expect(teacher.specialties).toHaveLength(6);
	});

	it('has 4 detailed ratings', () => {
		expect(teacher.detailedRatings).toHaveLength(4);
	});

	it('has all verified certifications', () => {
		for (const cert of teacher.certifications) {
			expect(cert.verified).toBe(true);
		}
	});

	it('has 4 career milestones', () => {
		expect(teacher.careerMilestones).toHaveLength(4);
	});
});
