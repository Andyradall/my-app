import { c as create_ssr_component, d as add_attribute, v as validate_component, e as escape, f as each } from "../../chunks/index.js";
import "animejs";
const BgAnimated_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ':root{--pastel-blue:#A8DADC;--soft-coral:#F4A261;--dusk-blue:#457B9D;--muted-gold:#E9C46A;--off-white-green:#F1FAEE;--white-again:#F5F8FF;--turquoise:#2A9D8F;--almost-white:#FAFAFA}@keyframes svelte-1dl8a65-moveAnimation{25%{transform:translate3d(var(--transformX1), var(--transformY1), 0)}50%{transform:translate3d(var(--transformX2), var(--transformY2), 0)}75%{transform:translate3d(var(--transformX3), var(--transformY3), 0)}to{transform:translate3d(var(--transformX4), var(--transformY4), 0)}}.full-svg-bg.svelte-1dl8a65{position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1}.animatedCircle.svelte-1dl8a65{animation:svelte-1dl8a65-moveAnimation 30s infinite ease-in-out}.noise-overlay.svelte-1dl8a65{position:fixed;top:0;left:0;width:100vw;height:100vh;;;background-image:url("/images/backgrounds/transparent_transformed_noisetiny.gif");background-repeat:repeat;opacity:0.015;-webkit-backdrop-filter:blur(36px);backdrop-filter:blur(36px);pointer-events:none;z-index:-2;animation:animateNoise 5s infinite}.noise-overlay.svelte-1dl8a65::before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background-color:rgba(99, 149, 195, 0.26);z-index:0}',
  map: null
};
const BgAnimated = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const colors = [
    {
      id: "gradient-pastel-blue",
      color: "--pastel-blue"
    },
    {
      id: "gradient-soft-coral",
      color: "--soft-coral"
    },
    {
      id: "gradient-dusk-blue",
      color: "--dusk-blue"
    },
    {
      id: "gradient-muted-gold",
      color: "--muted-gold"
    },
    {
      id: "gradient-off-white-green",
      color: "--off-white-green"
    },
    {
      id: "gradient-white-again",
      color: "--white-again"
    },
    {
      id: "gradient-turquoise",
      color: "--turquoise"
    },
    {
      id: "gradient-almost-white-2",
      color: "--almost-white"
    }
  ];
  let gradients = colors.map(({ id, color }) => `
        <radialGradient id="${id}" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="var(${color})" stop-opacity="0.8" /> 
            <stop offset="20%" stop-color="var(${color})" stop-opacity="0.6" />
            <stop offset="40%" stop-color="var(${color})" stop-opacity="0.4" />
            <stop offset="60%" stop-color="var(${color})" stop-opacity="0.2" />
            <stop offset="80%" stop-color="var(${color})" stop-opacity="0.1" />
            <stop offset="100%" stop-color="var(${color})" stop-opacity="0" />
        </radialGradient>
    `).join("");
  let circles = "";
  for (let i = 0; i < 4; i++) {
    circles += colors.map(({ id }) => `
        <circle class="animatedCircle" 
                cx="${Math.random() * 800}" 
                cy="${Math.random() * 800}" 
                r="${Math.random() * 150 + 70}"  
                fill="url(#${id})" 
                style="--transformX1: ${Math.random() * 400 - 250}px; --transformY1: ${Math.random() * 200 - 50}px;
                       --transformX2: ${Math.random() * 400 - 250}px; --transformY2: ${Math.random() * 200 - 50}px; 
                       --transformX3: ${Math.random() * 400 - 250}px; --transformY3: ${Math.random() * 200 - 50}px;
                       --transformX4: ${Math.random() * 400 - 250}px; --transformY4: ${Math.random() * 200 - 50}px;">
        </circle>
    `).join("");
  }
  $$result.css.add(css$4);
  return `
<div class="noise-overlay animatedCircle svelte-1dl8a65"></div>
<svg class="full-svg-bg svelte-1dl8a65" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500" preserveAspectRatio="none"><defs><!-- HTML_TAG_START -->${gradients}<!-- HTML_TAG_END --></defs><!-- HTML_TAG_START -->${circles}<!-- HTML_TAG_END --></svg>`;
});
const NavArrow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "#work" } = $$props;
  let { ariaLabel = "Navigate to Case studies" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<p class="flex justify-center items-center pt-20 pb-20"><a${add_attribute("href", href, 0)}${add_attribute("aria-label", ariaLabel, 0)}><span class="svg-icon-down"><svg width="23" height="79" viewBox="0 0 23 79" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5003 77.9467L1.85742 67.94L4.10742 65.6051L9.89314 71.6091V2.10669H13.1074V71.6091L18.8931 65.6051L21.1431 67.94L11.5003 77.9467Z" fill="#303133"></path></svg></span></a></p>`;
});
const HeroSection_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "#hero.svelte-uq33t6 h1.svelte-uq33t6{font-size:82px;line-height:5.5rem}",
  map: null
};
const HeroSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section id="hero" class="pageSection max-w-[1297px] text-grey-800 mx-auto grid grid-cols-12 items-center pt-80 pb-50 text-gray-800 svelte-uq33t6"><div class="col-start-2 col-span-10 md:col-start-3 md:col-span-8 text-center"><h1 class="font-euclid font-bold pb-20 svelte-uq33t6">From Complexity to Clarity.
		</h1>
		<h2 class="font-euclid font-normal text-3xl">I design digital products that delight users and drive business success. Explore my case studies:
		</h2>
		${validate_component(NavArrow, "NavArrow").$$render($$result, {}, {}, {})}</div>
</section>`;
});
const CaseStudyCard_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".case-card-bg.svelte-yx1y8n.svelte-yx1y8n{padding:16px 0;border:1px solid #f6faff}.case-card.svelte-yx1y8n:hover .case-card-image img.svelte-yx1y8n{transform:scale(1.02);transition:transform 0.3s ease-out;opacity:0.94}.case-card.svelte-yx1y8n:hover .case-card-text .custom-link-front.svelte-yx1y8n,.case-card.svelte-yx1y8n:hover h2.svelte-yx1y8n,.case-card.svelte-yx1y8n:hover h3.svelte-yx1y8n,.case-card.svelte-yx1y8n:hover span.svelte-yx1y8n{color:#404244 !important}.custom-link-front.svelte-yx1y8n.svelte-yx1y8n{display:inline-flex}.custom-link-front.svelte-yx1y8n.svelte-yx1y8n:hover,.custom-link-front.svelte-yx1y8n.svelte-yx1y8n:focus{color:#404244 !important}.svg-icon-right.svelte-yx1y8n.svelte-yx1y8n{margin-left:4px;transform:translateX(4px) translateY(2px);transition:transform 0.09s;transition-timing-function:ease-out}.case-card.svelte-yx1y8n:hover .custom-link-front .svg-icon-right.svelte-yx1y8n{transform:translateX(8px) translateY(2px)}.svg-icon-right.svelte-yx1y8n svg path.svelte-yx1y8n{fill:currentColor}",
  map: null
};
const CaseStudyCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { link = "#" } = $$props;
  let { ariaLabel = "" } = $$props;
  let { category = "" } = $$props;
  let { image = "" } = $$props;
  let { alt = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.category === void 0 && $$bindings.category && category !== void 0)
    $$bindings.category(category);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  $$result.css.add(css$2);
  return `<div class="case-card svelte-yx1y8n"><div class="case-card-bg shadow-custom py-4 rounded-3xl bg-grey-50 max-w-[800px] max-h-[600px] svelte-yx1y8n"><a${add_attribute("href", link, 0)} aria-label="hidden" class="case-card-image"><img class="card-thumbnail svelte-yx1y8n"${add_attribute("src", image, 0)}${add_attribute("alt", alt, 0)}></a></div>
	<div class="case-card-text"><h3 class="font-euclid font-medium text-gray-800 text-base pt-2 pb-1 leading-9 svelte-yx1y8n">${escape(category)}</h3>
		<a${add_attribute("href", link, 0)}${add_attribute("aria-label", ariaLabel, 0)} class="custom-link-front font-euclid text-gray-800 text-2xl leading-11 pb-1 font-semibold svelte-yx1y8n"><h2 class="svelte-yx1y8n">${escape(title)}</h2>
			<span class="svg-icon-right svelte-yx1y8n"><svg xmlns="http://www.w3.org/2000/svg" width="33" height="28" viewBox="0 0 33 28"><path d="M16.1 0.583252L13.2624 2.94794L24.4921 12.3228H0V15.677H24.4921L13.2624 25.0519L16.1 27.4166L32.2 13.9999L16.1 0.583252Z" fill="currentColor" class="svelte-yx1y8n"></path></svg></span></a></div>
</div>`;
});
const CaseStudySection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let caseStudies = [
    {
      title: "Designmaskinen",
      href: "/work/designmaskinen",
      ariaLabel: "Designmaskinen Case Study",
      category: "UX | PRODUCT DESIGN | 2023",
      image: "/images/thumbs/DMthumb800500.webp",
      alt: "Designmaskinen Case Study"
    },
    {
      title: "Svenska Mässkonsult",
      href: "/work/smab",
      ariaLabel: "Svenska Mässkonsult Case Study",
      category: "BRANDING | WEB DESIGN | 2023",
      image: "/images/thumbs/Smabthumb800500.webp",
      alt: "Svenska Mässkonsult Case Study"
    },
    {
      title: "Solar Choice",
      href: "/work/solarchoice",
      ariaLabel: "Solar Choice Case Study",
      category: "BRAND DESIGN | 2022",
      image: "/images/thumbs/Solarthumblg-1.webp",
      alt: "Solar Choice Case Study"
    },
    {
      title: "Karrierestart",
      href: "/work/karrierestart",
      ariaLabel: "Karrierestart Case Study",
      category: "UX | PRODUCT DESIGN | 2021",
      image: "/images/thumbs/KSthumb8005001.webp",
      alt: "Karrierestart Case Study"
    }
  ];
  return `

<section class="text-grey-800 pageSection" id="work"><div class="max-w-[1297px] mx-5 md:mx-16 px-16 mt-40 mb-30"><section><h2 class="font-euclid text-xl pl-6 font-semibold my-4">CASE STUDIES:</h2></section>
    <section class="grid grid-cols-1 sm:grid-cols-2 gap-10">${each(caseStudies, (study) => {
    return `${validate_component(CaseStudyCard, "CaseStudyCard").$$render(
      $$result,
      {
        title: study.title,
        link: study.href,
        ariaLabel: study.ariaLabel,
        category: study.category,
        image: study.image,
        alt: study.alt
      },
      {},
      {}
    )}`;
  })}</section></div></section>`;
});
const AboutSection_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".resume-btn-custom-link.svelte-aneuen:hover .resume-btn-svg-icon.svelte-aneuen{transform:translateY(-2px) translateX(2px)}.resume-btn-svg-icon.svelte-aneuen.svelte-aneuen{transform:translateY(-1px);transition:transform 0.1s}",
  map: null
};
const AboutSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<main class="text-grey-800 mb-52"><div class="max-w-[1297px] mx-5 md:mx-16 px-16 mt-40 mb-30 gap-10"><section id="about" class="pageSection"><h2 class="font-euclid text-xl font-semibold pl-6 my-4">ABOUT ME:</h2></section>

		<section class="grid grid-cols-12 gap-10 mb-10">
			<div class="text-card card-one shadow-custom md:col-span-6 col-span-12 rounded-3xl bg-grey-50 p-10"><h2 class="font-euclid text-3xl font-semibold mb-4">Designing Impact: From Pixel to Performance
				</h2>
				<p class="font-euclid font-normal text-lg">My love for product &amp; interaction design began when I realized I could mix coding,
					creative design, and business strategy all into one. For me, it&#39;s not just about making
					things look good. I pride myself on design that delivers real-world results.
				</p></div>

			
			<div class="image-card card-two shadow-custom md:col-span-6 col-span-12 flex justify-center items-center overflow-hidden bg-grey-800 rounded-3xl"><img class="object-cover w-full h-full" alt="Profile" src="/images/about/profil-1.webp"></div></section>
		<section class="skills-card shadow-custom text-grey-50 bg-grey-800 rounded-3xl p-10">
			<header class="text-left"><h2 class="font-euclid text-3xl font-semibold pb-2">Services</h2>
				<p class="font-euclid font-normal text-lg">Essential skills and services I offer:</p></header>

			
			<div class="skills flex flex-wrap justify-around gap-2">
				<article class="skill flex-1 min-w-[180px] m-1 p-4"><div class="skill-image flex justify-center py-2 my-2 max-h-[48px]"><img alt="ResearchIcon" src="/images/about/ResearchIco.svg"></div>
					<ul class="text-center font-euclid text-base space-y-2"><li><h3 class="font-euclid text-lg font-bold">Customer Research</h3></li>
						<li>Interviews</li>
						<li>Journey Mapping</li>
						<li>Insights Analysis</li>
						<li>Heuristic Evaluation</li></ul></article>
				
				<article class="skill flex-1 min-w-[180px] m-1 p-4"><div class="skill-image flex justify-center py-2 my-2 max-h-[48px]"><img alt="User Centred Design Icon" src="/images/about/ServiceDesignIco.svg"></div>
					<ul class="text-center font-euclid text-base space-y-2"><li><h3 class="text-lg font-bold">User Centred Design</h3></li>
						<li>Websites</li>
						<li>Applications</li>
						<li>Enterprise Design</li>
						<li>Brand Design</li></ul></article>
				
				<article class="skill flex-1 min-w-[180px] m-1 p-4"><div class="skill-image flex justify-center max-h-[48px] my-2 py-2"><img alt="Facilitation Icon" src="/images/about/UserIco.svg"></div>
					<ul class="text-center font-euclid text-base space-y-2"><li><h3 class="text-lg font-bold">Facilitation</h3></li>
						<li>User Testing</li>
						<li>Design Sprints</li>
						<li>Workshops</li>
						<li>Agile Workflow</li></ul></article>
				
				<article class="skill flex-1 min-w-[180px] m-1 p-4"><div class="skill-image flex justify-center max-h-[48px] my-2 py-2"><img alt="Figma Icon" src="/images/about/FigIco.svg"></div>
					<ul class="text-center font-euclid text-base space-y-2"><li><h3 class="text-lg font-bold">Figma</h3></li>
						<li>Design Systems</li>
						<li>Components</li>
						<li>Prototyping</li>
						<li>Handoff &amp; QA</li></ul></article>
				
				<article class="skill flex-1 min-w-[180px] m-2 p-4"><div class="skill-image flex justify-center max-h-[48px] my-2 py-2"><img alt="Development Icon" src="/images/about/CodeIco.svg"></div>
					<ul class="text-center font-euclid text-base space-y-2"><li><h3 class="text-lg font-bold">Development</h3></li>
						<li>Accessibility</li>
						<li>Responsive Design</li>
						<li>SEO</li>
						<li>HTML, CSS, JS, <br>SvelteKit, Tailwind, Git</li></ul></article></div></section>

		<section class="pt-10"><h2 class="font-euclid text-xl pl-6 font-semibold my-4">BACKGROUND:</h2></section>

		<section class="split-card flex overflow-clip flex-wrap shadow-custom mb-10 rounded-3xl bg-grey-50">
			
			<div class="split-card-image w-full md:w-1/2 bg-grey-800 flex justify-center items-center overflow-hidden"><img alt="bildeholder" src="/images/about/bildeholder.webp" class="object-contain md:object-scale-down h-auto"></div>

			
			<div class="split-card-text w-full md:w-1/2 py-4 px-8"><h2 class="font-euclid text-3xl font-semibold my-4">Education</h2>
				<p class="font-euclid font-normal text-lg">I finished my <strong>Interaction Design</strong> studies in 2019. Here I learned both
					coding and user centred design. I never stop learning, and completed the
					<strong>Design Lead</strong> study at Hyper Island in 2023. It was a hybrid work/school environment
					where we focused both on brand design, and on building soft skills like performance in teams
					and leadership.
				</p>

				<h2 class="font-euclid text-3xl font-semibold my-4">Work</h2>
				<p class="font-euclid font-normal text-lg">I worked at Studenttorget from 2019 with UX and product design. Here, I refined the user
					experience on <strong>Karrierestart.no</strong>, transforming the onboarding processes,
					and driving user engagement. I recently did an internship at
					<strong>Netlife Design</strong>, where I designed an administrator area for the tool,
					Designmaskinen.
				</p>

				<div class="flex justify-center">
					<button class="inline-flex items-center bg-grey-200 font-euclid font-medium hover:text-grey-600 my-8 py-2.5 px-6 rounded-full transition-all mx-auto"><a href="https://drive.google.com/file/d/1W6rt980ZRd3HG_2QqSCYhX3zE7FIRdLl/view?usp=sharing" target="_blank" rel="noopener noreferrer" aria-label="My Resumé" class="resume-btn-custom-link flex items-center svelte-aneuen">My Full Resumé
							<span class="resume-btn-svg-icon ml-0.5 transition-transform svelte-aneuen"><svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M215.522-152.348 151.869-216l460.892-460.891H356.413v-91h411v411h-91v-256.348L215.522-152.348Z" fill="currentColor"></path></svg></span></a></button></div></div></section>

		<section class="card-one-two grid grid-cols-12 gap-10">
			<div class="text-card card-one shadow-custom md:col-span-6 col-span-12 rounded-3xl bg-grey-50 p-10"><h2 class="font-euclid text-3xl font-semibold mb-4">Life Beyond Pixels</h2>
				<p class="font-euclid font-normal text-lg">I love nature, and enjoy going skiing and cycling in Nordmarka, or running with our
					greyhound. I also practice Ashtanga yoga, as it gives me energy and focus. I also enjoy
					staying up to date on modern frontend development and I built this portfolio in SvelteKit
					with Tailwind CSS and self hosted it on Vercel, using Sanity.io as a headless CMS.
				</p></div>

			
			<div class="image-card card-two shadow-custom md:col-span-6 col-span-12 flex justify-center overflow-hidden bg-grey-800 rounded-3xl"><img class="image-to-stretch skibilde bg-grey-800" alt="Skibilde" src="/images/about/Skibilde.webp"></div></section></div>
</main>`;
});
const Navbar_svelte_svelte_type_style_lang = "";
const css = {
  code: ".menu-custom-link.svelte-g3oc3h.svelte-g3oc3h{display:inline-flex;align-items:baseline}.menu-custom-link.svelte-g3oc3h.svelte-g3oc3h:hover,.menu-custom-link.svelte-g3oc3h.svelte-g3oc3h:focus{color:#616366}.menu-svg-icon.svelte-g3oc3h.svelte-g3oc3h{margin-left:2px;transform:translateY(3px);transition:transform 0.1s}.menu-custom-link.svelte-g3oc3h:hover .menu-svg-icon.svelte-g3oc3h{transform:translateY(1px) translateX(2px)}.menu-svg-icon.svelte-g3oc3h svg path.svelte-g3oc3h{fill:currentColor}.main-navbar.svelte-g3oc3h.svelte-g3oc3h{position:fixed;top:24px;padding:0px 8px;align-items:center;height:64px;border:1px solid #dde0e6;z-index:100;overflow:visible}.main-navbar.svelte-g3oc3h ul.svelte-g3oc3h{list-style-type:none;padding:16px 0;margin:0;display:flex;position:relative;justify-content:center;align-items:center;gap:8px}.main-navbar.svelte-g3oc3h li.svelte-g3oc3h{display:flex;padding:0 8px;flex-direction:column;justify-content:center;align-items:flex-start}.main-navbar.svelte-g3oc3h a.svelte-g3oc3h{z-index:102;text-decoration:none;position:relative;padding:0 20px}.main-navbar.svelte-g3oc3h a.svelte-g3oc3h:hover{color:#616366}.menu-effect-container.svelte-g3oc3h.svelte-g3oc3h{width:163px;height:48px;position:absolute;width:100%;height:100%;top:0px;display:flex;align-items:center;justify-content:center;pointer-events:none}.menu-effect.svelte-g3oc3h.svelte-g3oc3h{opacity:1;height:48px;position:absolute;z-index:101}@media(max-width: 768px){.nav-container.svelte-g3oc3h.svelte-g3oc3h{width:92%;margin:0 auto}.menu-custom-link.svelte-g3oc3h.svelte-g3oc3h{display:none}.menu-effect.svelte-g3oc3h.svelte-g3oc3h{transform:translateX(4px)}.main-navbar.svelte-g3oc3h.svelte-g3oc3h{width:92%;margin:0 auto;top:12px;padding:0px 4px;max-height:48px}.main-navbar.svelte-g3oc3h a.svelte-g3oc3h{padding:3px 4px;white-space:nowrap}.main-navbar.svelte-g3oc3h ul.svelte-g3oc3h{padding:4px 16px;margin:4px;gap:0;display:flex;justify-content:space-between;margin-block-start:0;margin-block-end:0;padding-inline-start:40px}.menu-effect.svelte-g3oc3h.svelte-g3oc3h{max-height:32px}}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav><div class="nav-container flex justify-center align-middle font-euclid font-medium text-grey-800 text-lg svelte-g3oc3h"><div id="main-navigation" class="main-navbar shadow-custom rounded-full bg-white svelte-g3oc3h" role="navigation" aria-label="Main Navigation"><div class="menu-effect-container svelte-g3oc3h"><div class="menu-effect bg-grey-200 min-w-90px rounded-full svelte-g3oc3h"></div></div>

			<ul class="svelte-g3oc3h"><li class="svelte-g3oc3h"><a href="#hero" aria-label="Anders Rådal" class="${["svelte-g3oc3h", ""].join(" ").trim()}">Anders Rådal</a></li>
				<li class="svelte-g3oc3h"><a href="#work" aria-label="Case Studies" class="svelte-g3oc3h">Case Studies</a></li>
				<li class="svelte-g3oc3h"><a href="#about" aria-label="About me" class="svelte-g3oc3h">About me</a></li>
				<li class="svelte-g3oc3h"><a href="https://drive.google.com/file/d/1W6rt980ZRd3HG_2QqSCYhX3zE7FIRdLl/view?usp=sharing" target="_blank" rel="noopener noreferrer" aria-label="Read more in my resume, opens in a new window" class="menu-custom-link svelte-g3oc3h">Resumé
						<span class="menu-svg-icon svelte-g3oc3h"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M215.522-152.348 151.869-216l460.892-460.891H356.413v-91h411v411h-91v-256.348L215.522-152.348Z" fill="currentColor" class="svelte-g3oc3h"></path></svg></span></a></li>
				<li class="svelte-g3oc3h"><a href="https://www.linkedin.com/in/andersraa/" target="_blank" rel="noopener noreferrer" aria-label="Connect on LinkedIn, opens in a new window" class="menu-custom-link svelte-g3oc3h">LinkedIn
						<span class="menu-svg-icon svelte-g3oc3h"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M215.522-152.348 151.869-216l460.892-460.891H356.413v-91h411v411h-91v-256.348L215.522-152.348Z" fill="currentColor" class="svelte-g3oc3h"></path></svg></span></a></li></ul></div></div>
</nav>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1qizn2k_START -->${$$result.title = `<title>Anders Rådal UX Portfolio</title>`, ""}<meta name="description" content="Anders Rådal UX Portfolio site"><!-- HEAD_svelte-1qizn2k_END -->`, ""}

    ${validate_component(BgAnimated, "BgAnimated").$$render($$result, {}, {}, {})}
	${validate_component(HeroSection, "HeroSection").$$render($$result, {}, {}, {})}
	${validate_component(CaseStudySection, "CaseStudySection").$$render($$result, {}, {}, {})}
	${validate_component(AboutSection, "AboutSection").$$render($$result, {}, {}, {})}
	${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
