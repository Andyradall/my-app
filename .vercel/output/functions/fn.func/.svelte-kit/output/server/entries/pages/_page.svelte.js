import { c as create_ssr_component, d as add_attribute, v as validate_component, e as escape, f as each } from "../../chunks/index.js";
import "animejs";
const Navbar_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "#nav-container.svelte-1wxch0j.svelte-1wxch0j{display:flex;justify-content:center;align-items:center}.menu-custom-link.svelte-1wxch0j.svelte-1wxch0j{display:inline-flex;align-items:baseline}.menu-custom-link.svelte-1wxch0j.svelte-1wxch0j:hover,.menu-custom-link.svelte-1wxch0j.svelte-1wxch0j:focus{color:#616366 !important}.menu-svg-icon.svelte-1wxch0j.svelte-1wxch0j{margin-left:2px;transform:translateY(3px);transition:transform 0.1s}.menu-custom-link.svelte-1wxch0j:hover .menu-svg-icon.svelte-1wxch0j{transform:translateY(1px) translateX(2px)}.menu-svg-icon.svelte-1wxch0j svg path.svelte-1wxch0j{fill:currentColor}@media(max-width: 768px){.menu-custom-link.svelte-1wxch0j.svelte-1wxch0j{display:none}.menu-effect.svelte-1wxch0j.svelte-1wxch0j{transform:translateX(4px)}#nav-container.svelte-1wxch0j.svelte-1wxch0j{width:92% !important;margin:0 auto !important}.main-navbar.svelte-1wxch0j.svelte-1wxch0j{width:92% !important;margin:0 auto !important;top:12px !important;padding:0px 4px !important;max-height:48px !important}.main-navbar.svelte-1wxch0j a.svelte-1wxch0j{font-size:calc(0.9em)!important;padding:3px 4px !important;white-space:nowrap}.main-navbar.svelte-1wxch0j ul.svelte-1wxch0j{padding:4px 16px !important;margin:4px !important;gap:0!important;display:flex;justify-content:center;justify-content:space-between;margin-block-start:0!important;margin-block-end:0!important;padding-inline-start:40px!important}.menu-effect.svelte-1wxch0j.svelte-1wxch0j{max-height:32px}}.main-navbar.svelte-1wxch0j.svelte-1wxch0j{position:fixed;top:24px;padding:0px 8px;align-items:center;height:64px;border:1px solid #DDE0E6;border-radius:198px;z-index:100;overflow:visible;background:#F7FBFF !important;box-shadow:0px 8px 16px 0px rgba(0, 0, 0, 0.01), \n                    0px 4px 6px 0px rgba(0, 0, 0, 0.03), \n                    0px 2px 3px 0px rgba(0, 0, 0, 0.02)}.main-navbar.svelte-1wxch0j ul.svelte-1wxch0j{list-style-type:none;padding:16px 0;margin:0;display:flex;position:relative;justify-content:center;align-items:center;gap:8px}.main-navbar.svelte-1wxch0j li.svelte-1wxch0j{display:flex;padding:0 8px;flex-direction:column;justify-content:center;align-items:flex-start}.main-navbar.svelte-1wxch0j a.svelte-1wxch0j{font-family:Euclid Circular B, sans-serif;color:#242527;font-size:calc(1em + 2px);font-style:normal;font-weight:500;line-height:33.33px;z-index:102;text-decoration:none;z-index:103;position:relative;padding:0 20px}.main-navbar.svelte-1wxch0j a.svelte-1wxch0j:hover{color:#616366}.menu-effect-container.svelte-1wxch0j.svelte-1wxch0j{width:163px;height:48px;position:absolute;width:100%;height:100%;top:0px;display:flex;align-items:center;justify-content:center;pointer-events:none}.menu-effect.svelte-1wxch0j.svelte-1wxch0j{opacity:1;background:#DDE0E6;height:48px;position:absolute;border-radius:104px;z-index:101}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<nav><div id="nav-container" class="svelte-1wxch0j"><div id="main-navigation" class="main-navbar svelte-1wxch0j" role="navigation" aria-label="Main Navigation"><div class="menu-effect-container svelte-1wxch0j"><div class="menu-effect svelte-1wxch0j"></div></div>

<ul class="svelte-1wxch0j"><li class="svelte-1wxch0j"><a href="#hero" aria-label="Anders Rådal" class="${["svelte-1wxch0j", ""].join(" ").trim()}">Anders Rådal</a></li>
    <li class="svelte-1wxch0j"><a href="#work" aria-label="Case Studies" class="svelte-1wxch0j">Case Studies</a></li>
    <li class="svelte-1wxch0j"><a href="#about" aria-label="About me" class="svelte-1wxch0j">About me</a></li>
    <li class="svelte-1wxch0j"><a href="https://drive.google.com/file/d/1W6rt980ZRd3HG_2QqSCYhX3zE7FIRdLl/view?usp=sharing" target="_blank" rel="noopener noreferrer" aria-label="Read more in my resume, opens in a new window" class="menu-custom-link svelte-1wxch0j">Resumé
            <span class="menu-svg-icon svelte-1wxch0j"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M215.522-152.348 151.869-216l460.892-460.891H356.413v-91h411v411h-91v-256.348L215.522-152.348Z" fill="currentColor" class="svelte-1wxch0j"></path></svg></span></a></li>
    <li class="svelte-1wxch0j"><a href="https://www.linkedin.com/in/andersraa/" target="_blank" rel="noopener noreferrer" aria-label="Connect on LinkedIn, opens in a new window" class="menu-custom-link svelte-1wxch0j">LinkedIn
            <span class="menu-svg-icon svelte-1wxch0j"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M215.522-152.348 151.869-216l460.892-460.891H356.413v-91h411v411h-91v-256.348L215.522-152.348Z" fill="currentColor" class="svelte-1wxch0j"></path></svg></span></a></li></ul></div></div> 
</nav>`;
});
const BgAnimated_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ':root{--pastel-blue:#A8DADC;--soft-coral:#F4A261;--dusk-blue:#457B9D;--muted-gold:#E9C46A;--off-white-green:#F1FAEE;--white-again:#F5F8FF;--turquoise:#2A9D8F;--almost-white:#FAFAFA}@keyframes svelte-1hyjt6y-moveAnimation{25%{transform:translate3d(var(--transformX1), var(--transformY1), 0)}50%{transform:translate3d(var(--transformX2), var(--transformY2), 0)}75%{transform:translate3d(var(--transformX3), var(--transformY3), 0)}to{transform:translate3d(var(--transformX4), var(--transformY4), 0)}}.full-svg-bg.svelte-1hyjt6y{position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1}.animatedCircle.svelte-1hyjt6y{animation:svelte-1hyjt6y-moveAnimation 30s infinite ease-in-out}.noise-overlay.svelte-1hyjt6y{position:fixed;top:0;left:0;width:100vw;height:100vh;;;background-image:url("/images/backgrounds/transparent_transformed_noisetiny.gif");background-repeat:repeat;opacity:0.015;backdrop-filter:blur(36px);pointer-events:none;z-index:-2;animation:animateNoise 5s infinite}.noise-overlay.svelte-1hyjt6y::before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background-color:rgba(99, 149, 195, 0.26);z-index:0}',
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
  $$result.css.add(css$2);
  return `
<div class="noise-overlay animatedCircle svelte-1hyjt6y"></div>
<svg class="full-svg-bg svelte-1hyjt6y" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500" preserveAspectRatio="none"><defs><!-- HTML_TAG_START -->${gradients}<!-- HTML_TAG_END --></defs><!-- HTML_TAG_START -->${circles}<!-- HTML_TAG_END --></svg>`;
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
const HeroSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="hero" class="pageSection text-center pt-80 pb-50 text-gray-800"><h1 class="font-euclid text-7xl font-bold pb-20">From Complexity to Clarity.
	</h1>
	<h2 class="font-euclid font-medium text-4xl">I design digital products that delight users and drive business success. Explore my case studies:
	</h2>
	${validate_component(NavArrow, "NavArrow").$$render($$result, {}, {}, {})}
</section>`;
});
const CaseStudyCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".case-card-bg.svelte-siboew.svelte-siboew{max-width:800px;max-height:500px;padding:16px 0;background-color:#F6FAFF;border:1px solid #F6FAFF;border-radius:18px;box-shadow:0 1px 5px rgba(36, 37, 39, .04), \n        0 2px 9px rgba(36, 37, 39, .06),\n        0 4px 14px rgba(36, 37, 39, .04)}.case-card.svelte-siboew:hover .case-card-image.svelte-siboew{transform:scale(1.02);transition:transform 0.3s ease-out;opacity:0.94}.case-card.svelte-siboew:hover .case-card-text .custom-link-front.svelte-siboew,.case-card.svelte-siboew:hover h2.svelte-siboew,.case-card.svelte-siboew:hover h3.svelte-siboew,.case-card.svelte-siboew:hover span.svelte-siboew{color:#404244 !important}.custom-link-front.svelte-siboew.svelte-siboew{display:inline-flex}.custom-link-front.svelte-siboew.svelte-siboew:hover,.custom-link-front.svelte-siboew.svelte-siboew:focus{color:#404244 !important}.svg-icon-right.svelte-siboew.svelte-siboew{margin-left:4px;transform:translateX(4px) translateY(2px);transition:transform 0.09s;transition-timing-function:ease-out}.case-card.svelte-siboew:hover .custom-link-front .svg-icon-right.svelte-siboew{transform:translateX(8px) translateY(2px)}.svg-icon-right.svelte-siboew svg path.svelte-siboew{fill:currentColor}",
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
  $$result.css.add(css$1);
  return `<div class="case-card svelte-siboew"><div class="case-card-bg shadow-custom py-4 rounded-lg max-w-[800px] max-h-[500px] svelte-siboew"><a${add_attribute("href", link, 0)} aria="hidden" class="case-card-image svelte-siboew"><img class="card-thumbnail"${add_attribute("src", image, 0)}${add_attribute("alt", alt, 0)}></a></div>
    <div class="case-card-text"><h3 class="font-euclid font-medium text-gray-800 text-base leading-9 svelte-siboew">${escape(category)}</h3>
            <a${add_attribute("href", link, 0)}${add_attribute("aria-label", ariaLabel, 0)} class="custom-link-front font-euclid text-gray-800 text-2xl leading-11 font-semibold svelte-siboew"><h2 class="svelte-siboew">${escape(title)}</h2>
                 <span class="svg-icon-right svelte-siboew"><svg xmlns="http://www.w3.org/2000/svg" width="33" height="28" viewBox="0 0 33 28"><path d="M16.1 0.583252L13.2624 2.94794L24.4921 12.3228H0V15.677H24.4921L13.2624 25.0519L16.1 27.4166L32.2 13.9999L16.1 0.583252Z" fill="currentColor" class="svelte-siboew"></path></svg></span></a></div>
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
  return `<section id="work" class="pageSection pt-40 pb-40"><h2 class="font-euclid font-medium">CASE STUDIES:</h2>

  <div class="flex flex-wrap">${each(caseStudies, (study) => {
    return `<div class="w-full sm:w-1/2 p-2">${validate_component(CaseStudyCard, "CaseStudyCard").$$render(
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
    )}
      </div>`;
  })}</div></section>`;
});
const AboutSection_svelte_svelte_type_style_lang = "";
const css = {
  code: ".card-one.svelte-1tvlwj9,.card-two.svelte-1tvlwj9{max-width:630px;min-height:415px}.card-one.svelte-1tvlwj9,.card-two.svelte-1tvlwj9,.split-card.svelte-1tvlwj9,.skills-card.svelte-1tvlwj9{--tw-shadow:0 1px 5px rgba(36, 37, 39, .04), 0 2px 9px rgba(36, 37, 39, .06), 0 4px 14px rgba(36, 37, 39, .04);--tw-shadow-colored:0 1px 5px var(--tw-shadow-color), 0 2px 9px var(--tw-shadow-color), 0 4px 14px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}",
  map: null
};
const AboutSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<container class="max-w-[1297px] mx-auto px-16 md:px-5 pt-40 pb-80 gap-10 text-gray-100"><section id="about" class="pageSection"><h2 class="font-euclid text-3xl font-semibold my-4">ABOUT ME:</h2></section>

	<section class="grid grid-cols-12 gap-10 mb-10">
        <div class="text-card card-one md:col-span-6 col-span-12 rounded-3xl bg-grey-50 p-10 svelte-1tvlwj9"><h2 class="font-euclid text-3xl font-semibold my-4">Designing Impact: From Pixel to Performance
			</h2>
			<p>My love for product &amp; interaction design began when I realized I could mix coding, creative
				design, and business strategy all into one. For me, it&#39;s not just about making things look
				good. I pride myself on design that delivers real-world results.
			</p></div>

		
        <div class="image-card card-two md:col-span-6 col-span-12 flex justify-center overflow-hidden bg-grey-800 rounded-3xl svelte-1tvlwj9"><img class="max-w-full h-auto bg-grey-800" alt="Profile" src="/images/about/profil-1.webp"></div></section>
	<section class="skills-card text-grey-50 bg-grey-800 rounded-3xl p-10 svelte-1tvlwj9">
		<header class="text-left"><h2 class="font-euclid text-3xl font-semibold my-4">Services</h2>
			<p class="">Essential skills and services I offer:</p></header>

		
		<div class="skills grid grid-cols-1 md:grid-cols-5 gap-4">
			<article class="skill"><div class="skill-image"><img alt="ResearchIcon" src="/images/about/ResearchIco.svg"></div>
				<ul><li><h3>Customer Research</h3></li>
					<li>Interviews</li>
					<li>Journey Mapping</li>
					<li>Insights Analysis</li>
					<li>Heuristic Evaluation</li></ul></article>
			
			<article class="skill"><div class="skill-image"><img alt="User Centred Design Icon" src="/images/about/ServiceDesignIco.svg"></div>
				<ul><li><h3>User Centred Design</h3></li>
					<li>Websites</li>
					<li>Applications</li>
					<li>Enterprise Design</li>
					<li>Brand Design</li></ul></article>

			
			<article class="skill"><div class="skill-image"><img alt="Facililitation Icon" src="/images/about/UserIco.svg"></div>
				<ul><li><h3>Facililitation</h3></li>
					<li>User Testing</li>
					<li>Design Sprints</li>
					<li>Workshops</li>
					<li>Agile Workflow</li></ul></article>

			
			<article class="skill"><div class="skill-image"><img alt="Figma Icon" src="/images/about/FigIco.svg"></div>
				<ul><li><h3>Figma</h3></li>
					<li>Design Systems</li>
					<li>Components</li>
					<li>Prototyping</li>
					<li>Handoff &amp; QA</li></ul></article>

			
			<article class="skill"><div class="skill-image"><img alt="Development Icon" src="/images/about/CodeIco.svg"></div>
				<ul><li><h3>Development</h3></li>
					<li>Accessibility</li>
					<li>Responsive Design</li>
					<li>SEO</li>
					<li>HTML, CSS &amp; JS</li></ul></article></div></section>

	<section class="pt-10"><h2 class="font-euclid text-3xl font-semibold my-4">BACKGROUND:</h2></section>

	<section class="split-card flex flex-wrap -mx-2 mb-10 rounded-3xl bg-grey-50 svelte-1tvlwj9">
		<div class="split-card-image w-full md:w-1/2 px-2"><img alt="bildeholder" src="/images/about/bildeholder.webp"></div>

		
		<div class="split-card-text w-full md:w-1/2 px-2"><h2 class="font-euclid text-3xl font-semibold my-4">Education</h2>
			<p>I finished my <strong>Interaction Design</strong> studies in 2019. Here I learned both
				coding and user centred design. I never stop learning, and completed the
				<strong>Design Lead</strong> study at Hyper Island in 2023. It was a hybrid work/school environment
				where we focused both on brand design, and on building soft skills like performance in teams
				and leadership.
			</p>

			<h2 class="font-euclid text-3xl font-semibold my-4">Work</h2>
			<p>I worked at Studenttorget from 2019 with UX and product design. Here, I refined the user
				experience on <strong>Karrierestart.no</strong>, transforming the onboarding processes, and
				driving user engagement. I recently did an internship at <strong>Netlife Design</strong>,
				where I designed an administrator area for the tool, Designmaskinen.
			</p>

			<a href="https://drive.google.com/file/d/1W6rt980ZRd3HG_2QqSCYhX3zE7FIRdLl/view?usp=sharing" target="_blank" rel="noopener noreferrer" aria-label="My Resumé" class="resume-btn-custom-link">My Full Resumé
				<span class="resume-btn-svg-icon"><svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M215.522-152.348 151.869-216l460.892-460.891H356.413v-91h411v411h-91v-256.348L215.522-152.348Z" fill="currentColor"></path></svg></span></a></div></section>

	<section class="card-one-two grid grid-cols-12 gap-10">
        <div class="text-card card-one md:col-span-6 col-span-12 rounded-3xl bg-grey-50 p-10 svelte-1tvlwj9"><h2 class="font-euclid text-3xl font-semibold my-4">Life Beyond Pixels</h2>
			<p>I love nature, and enjoy going skiing and cycling in Nordmarka, or running with our
				greyhound. I also practice Ashtanga yoga, as it gives me energy and focus.
			</p></div>

		
        <div class="image-card card-two md:col-span-6 col-span-12 flex justify-center overflow-hidden bg-grey-800 rounded-3xl svelte-1tvlwj9"><img class="image-to-stretch skibilde bg-grey-800" alt="Skibilde" src="/images/about/Skibilde.webp"></div></section>
</container>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1qizn2k_START -->${$$result.title = `<title>Anders Rådal UX Portfolio</title>`, ""}<meta name="description" content="Anders Rådal UX Portfolio site"><!-- HEAD_svelte-1qizn2k_END -->`, ""}
    ${validate_component(BgAnimated, "BgAnimated").$$render($$result, {}, {}, {})}
	${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
	${validate_component(HeroSection, "HeroSection").$$render($$result, {}, {}, {})}
	${validate_component(CaseStudySection, "CaseStudySection").$$render($$result, {}, {}, {})}
	${validate_component(AboutSection, "AboutSection").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
