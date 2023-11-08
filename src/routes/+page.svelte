<script>
	import BgAnimated from '../components/BgAnimated.svelte';
	import HeroSection from '../components/HeroSection.svelte';
	import CaseStudySection from '../components/CaseStudySection.svelte';
	import AboutSection from '../components/AboutSection.svelte';
	import Navbar from './Navbar.svelte';
</script>

<svelte:head>
	<title>Anders Rådal UX Portfolio</title>
	<meta name="description" content="Anders Rådal UX Portfolio site" />
</svelte:head>

    <BgAnimated />
	<HeroSection />
	<CaseStudySection />
	<AboutSection />
	<Navbar />