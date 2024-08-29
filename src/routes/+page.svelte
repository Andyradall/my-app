<script>
	import Navbar from './Navbar.svelte';
	import HeroSection from '../components/HeroSection.svelte';
	import BgAnimated from '../components/BgAnimated.svelte';
	import CaseStudySectionScale from '../components/CaseStudySection.svelte';
	import AboutSection from '../components/AboutSection.svelte';
	import Footer from '../components/Footer.svelte';
	import SvelteSeo from 'svelte-seo';
	import { OnMount } from 'fractils';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import ServicesSection from '../components/ServicesSection.svelte';
	//import Testimonials from '../components/TestimonialsSection.svelte';
	//import BlogPosts from '../components/BlogPostsSection.svelte';
	import Background from '../components/BackgroundSection.svelte';
</script>

<svelte:head>
	<link rel="preload" href="/fonts/euclid-circular-b/EuclidCircularB-Regular.woff2" as="font" type="font/woff2" crossorigin="anonymous">
    <link rel="preload" href="/fonts/euclid-circular-b/EuclidCircularB-Bold.woff2" as="font" type="font/woff2" crossorigin="anonymous">
	<SvelteSeo
	title="Anders Rådal Portfolio"
	description="Portfolio for Anders Rådal - Product & UX Designer"
	canonical="https://www.andersra.com"
	keywords="Anders Rådal, UX-Design, Product designer, Oslo, Norway, UX, UI, Design, Portfolio, Hyper Island, Hyper-Island, Anders Rådal UX Portfolio, Anders Rådal UX, Anders Rådal Portfolio, Anders Rådal UX-Design, Anders Rådal Product designer, Anders Rådal Oslo, Anders Rådal Norway, Anders Rådal UX, Anders Rådal UI, Anders Rådal Design, Anders Rådal Portfolio"
	openGraph={{
	  title: "Anders Rådal UX Portfolio",
	  description: "Portfolio for Anders Rådal - Product & UX Designer",
	  images: [
		{
		  url: "https://www.andersra.com/images/thumbs/PageThumb.webp",
		  width: 500,
		  height: 333,
		  alt: "Page Thumbnail", 
		}  ],
	  url: "https://www.andersra.com",
	  type: "website",
	}}
	twitter={{
	  card: "summary_large_image",
	  site: "@AndersRadal",
	  title: "Portfolio for Anders Rådal - Product & UX Designer",
	  description: "Portfolio for Anders Rådal - Product & UX Designer",
	  image: "https://www.andersra.com/images/thumbs/PageThumb.webp",
	}}
	jsonLd={{
	  "@context": "https://schema.org",
	  "@type": "WebSite",
	  name: "Anders Rådal Portfolio",
	  description: "Portfolio for Anders Rådal - Product & UX Designer",
	  url: "https://www.andersra.com/",
	}}
	/>

</svelte:head>

<OnMount>
	<BgAnimated />
	<div in:fly|global={{ y: -100, opacity: 0.5, duration: 600, easing: cubicOut }}>
		<Navbar />
	</div>
	<div in:fly|global={{ y: 100, opacity: 0.4, duration: 600, easing: cubicOut }}>
		<HeroSection />
	</div>
	<CaseStudySectionScale />
	<!--BlogPosts /-->
	<!--Testimonials /-->
	<ServicesSection />
	<AboutSection />
	<Background />
	<Footer />
</OnMount>


	