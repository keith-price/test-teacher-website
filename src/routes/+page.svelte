<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Methodology from '$lib/components/Methodology.svelte';
	import Qualifications from '$lib/components/Qualifications.svelte';
	import Reviews from '$lib/components/Reviews.svelte';
	import Cta from '$lib/components/Cta.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// TODO [BOOKING]: Import and render a BookingCalendar component in the contact section
	// TODO [CHAT]: Import and render a floating ChatWidget component
</script>

<svelte:head>
	<title>Keith Price | ESL Teacher — 20 Years Teaching English Worldwide</title>
	<meta
		name="description"
		content="Experienced British ESL teacher with 20 years of global teaching experience. Specializing in Conversational English, Business English, and IELTS preparation. Book a trial lesson today."
	/>
</svelte:head>

<Nav />

<main>
	<Hero />
	<About />
	<Experience />
	<Methodology />
	<Qualifications />
	<Reviews />
	<Cta />
</main>

<Footer />
