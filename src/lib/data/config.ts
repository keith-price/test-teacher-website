export const navLinks = [
	{ label: 'About', href: '#about' },
	{ label: 'Experience', href: '#experience' },
	{ label: 'Method', href: '#methodology' },
	{ label: 'Qualifications', href: '#qualifications' },
	{ label: 'Reviews', href: '#reviews' },
	{ label: 'Contact', href: '#contact' }
	// TODO [BOOKING]: Add 'Book a Lesson' nav link pointing to /book or opening a booking modal
	// TODO [DASHBOARD]: Add student dashboard link (visible only when authenticated)
	//   e.g. { label: 'My Lessons', href: '/dashboard', auth: true }
];

// TODO [BOOKING]: Replace this external URL with an internal route (e.g. '/book')
// once the scheduling system is built. This is the single source of truth for all
// "Book a Lesson" CTAs across the site.
export const bookingUrl = 'https://preply.com';
