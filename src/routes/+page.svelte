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

	let { data } = $props();

	// TODO [BOOKING]: Import and render a BookingCalendar component in the contact section
	// TODO [CHAT]: Import and render a floating ChatWidget component
</script>

<svelte:head>
	<title>Keith Price | ESL Teacher — 20 Years Teaching English Worldwide</title>
	<meta
		name="description"
		content="Experienced British ESL teacher with 20 years of global teaching experience. Specializing in Conversational English, Business English, and IELTS preparation. Book a trial lesson today."
	/>
	<meta property="og:title" content="Keith Price | ESL Teacher" />
	<meta property="og:description" content="20 Years Teaching English Worldwide" />
	<meta property="og:image" content="/images/keith-profile.jpg" />
	<meta name="robots" content="index, follow" />
	<link rel="preload" as="image" href="/images/keith-profile.jpg" />
</svelte:head>

<Nav teacher={data.teacher} />

<main>
	<Hero teacher={data.teacher} />
	<About teacher={data.teacher} />
	<Experience teacher={data.teacher} />
	<Methodology teacher={data.teacher} />
	<Qualifications teacher={data.teacher} />
	<Reviews teacher={data.teacher} overallStars={data.overallStars} />
	<Cta />
</main>

<Footer teacher={data.teacher} />
