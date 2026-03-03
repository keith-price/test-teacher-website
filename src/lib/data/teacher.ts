export interface Certification {
	name: string;
	year: number;
	hours?: number;
	verified: boolean;
}

export interface Rating {
	category: string;
	score: number;
}

export interface Testimonial {
	highlight: string;
	detail: string;
}

export interface CareerMilestone {
	period: string;
	role: string;
	location: string;
	description: string;
}

export interface TeacherProfile {
	name: string;
	tagline: string;
	origin: string;
	currentLocation: string;
	personalLife: string;
	yearsExperience: number;
	countriesTaught: string[];
	totalLessons: number;
	overallRating: number;
	totalReviews: number;
	careerMilestones: CareerMilestone[];
	certifications: Certification[];
	specialties: string[];
	methodologyPillars: { title: string; description: string; icon: string }[];
	detailedRatings: Rating[];
	testimonials: Testimonial[];

	// TODO [BOOKING]: Add availability and pricing fields when booking system is built:
	//   timezone: string;
	//   hourlyRate: number;
	//   currency: string;
	//   trialLessonRate: number;
	//   availableSlots: AvailabilitySlot[];  (define a new interface)
	//   lessonDurations: number[];           (e.g. [25, 50] minutes)

	// TODO [CHAT]: Add chat/online-status fields when live chat is implemented:
	//   isOnline: boolean;
	//   chatEnabled: boolean;
}

export const teacher: TeacherProfile = {
	name: 'Keith Price',
	tagline: '20 Years Teaching English Worldwide',
	origin: 'British teacher from the North of England',
	currentLocation: 'Indonesia',
	personalLife:
		'Married with three children. Enjoys traveling, exploring new foods with family, and making music.',
	yearsExperience: 20,
	countriesTaught: ['China', 'Thailand', 'India', 'Kazakhstan', 'Russia', 'Italy', 'Indonesia'],
	totalLessons: 1520,
	overallRating: 4.8,
	totalReviews: 61,

	careerMilestones: [
		{
			period: '2005',
			role: 'IELTS Training Volunteer',
			location: 'India',
			description: 'Began career as a volunteer in an IELTS training academy'
		},
		{
			period: '2006–2007',
			role: 'Business English Instructor',
			location: 'Moscow, Russia',
			description: 'Taught Business English in-company for corporate clients'
		},
		{
			period: '2007–2020',
			role: 'International ESL Teacher',
			location: 'China, Thailand, Kazakhstan, Italy',
			description: 'Taught all age groups from kindergarten to corporate business clients'
		},
		{
			period: '2020–Present',
			role: 'Online ESL Teacher',
			location: 'Preply (from Indonesia)',
			description: 'Teaching exclusively online with over 1,520 completed lessons'
		}
	],

	certifications: [
		{ name: 'TEFL/TESOL', year: 2005, hours: 80, verified: true },
		{ name: 'Preply Language Teaching Certificate', year: 2025, verified: true },
		{ name: 'IELTS Certification', year: 2026, verified: true },
		{ name: 'Teaching IELTS Preparation Course', year: 2026, hours: 30, verified: true }
	],

	specialties: [
		'Conversational English',
		'Business English',
		'IELTS Preparation',
		'British English',
		'English for Traveling',
		'Job Interview Preparation'
	],

	methodologyPillars: [
		{
			title: 'Real World English',
			description:
				'Natural language acquisition using authentic materials — TED Talks, YouTube videos, short movie clips, and newspaper articles.',
			icon: '🌍'
		},
		{
			title: 'Structured Lessons',
			description:
				'Vocabulary list sent the day before. Each lesson pairs a worksheet with a video or article, followed by deep discussions.',
			icon: '📋'
		},
		{
			title: 'Active Error Correction',
			description:
				'Active listening for areas needing improvement. Mistakes are addressed directly — not ignored — to accelerate learning.',
			icon: '✏️'
		},
		{
			title: 'Goal-Oriented Approach',
			description:
				'Trial lessons assess your level and define clear goals — whether general fluency, business English, or IELTS preparation.',
			icon: '🎯'
		}
	],

	detailedRatings: [
		{ category: 'Reassurance', score: 5.0 },
		{ category: 'Preparation', score: 5.0 },
		{ category: 'Clarity', score: 4.9 },
		{ category: 'Progress', score: 5.0 }
	],

	testimonials: [
		{
			highlight: 'Patience & Support',
			detail: 'Creates a relaxed, comfortable, and motivating learning environment.'
		},
		{
			highlight: 'Preparation',
			detail: 'Lessons are consistently described as optimally prepared and well-organized.'
		}
	]
};
