<script> 
import WorkBack from '../../../components/WorkBack.svelte';
import { caseStudies } from '../../../lib/caseStudies.js';
import WorkNav from '../../../components/WorkNav.svelte';
import WorkFooter from '../../../components/WorkFooter.svelte';

const links = [
    { id: '#first', title: 'Our Process', ariaLabel: 'Our process' },
    { id: '#second', title: 'Discovery Phase', ariaLabel: 'Discovery Phase' },
    { id: '#third', title: 'Planning & Structuring', ariaLabel: 'Planning & Structuring' },
    { id: '#fourth', title: 'Final Deliverables', ariaLabel: 'Final Deliverables' },
    { id: '#fifth', title: 'Reflections', ariaLabel: 'Reflections' }
];

</script>

<svelte:head>
	<title>Svenska Mässkonsult Case Study</title>
	<meta name="description" content="Svenska Mässkonsult Case Study" />
</svelte:head>

<header class="relative top-0">
	<WorkBack />
</header>

<article class="mx-auto text-grey-800">
	<section class="max-w-6xl mx-auto justify-center px-4 pt-40 pb-20">
		<div class="hero">
            <h1 class=" text-7xl font-bold text-grey-800 py-4">Svenska Mässkonsult</h1>
			<h1 class=" text-4xl font-medium text-grey-600 py-4">
				A Rebranding Journey with Hyper Island
			</h1>
		</div>
	</section>
	
	<section class="max-w-6xl flex flex-col md:flex-row mx-auto justify-center mb-20">
		<div class="md:flex-1 md:max-w-lg m-4">
        <div class="pb-2"><h2>Introducing Svenska Mässkonsult</h2></div>
        <div>
            <p><span>Svenska Mässkonsult build exhibition spaces. They reached out to Hyper Island for a rebrand. Our design lead class were doing a module where we ran our own design agencies in groups at Hyper Island and took on paying clients.</span></p>
        </div>
        <div>
            <p><span><strong>Project Brief & Objectives:</strong> We need help to review/re-invent how we are seen externally, both offline and online. Today we lack a common thread in our communication and that is something we need to be able to develop and implement in printed material, website, mail signatures, invoices, proposals and other profiling.</span></p>
            <p><strong>Team Composition & My Role:</strong> Our team consisted of five designers. Two focused on branding while the other two, including myself, concentrated on UX. I took the lead in the UX process and collaborated closely with designers Viktoria and Catalina. My responsibilities was leading the UX process, UI/UX/Web-design, prototyping, user testing, handoff and presenting the final design.</p>
            <p><span><strong>Key Tools & Project Timeline:</strong> Figma, Figmjam, Adobe CC. We spent around 5 weeks on this design process.</span></p>
        </div>
    </div>
    <div class="mx-auto sm:max-w-2xl">
        <div class="content-wrapper">
            <img src="/images/smab/Smabmockup.webp" alt="Smabmockup">
        </div>
    </div>
</section>
		
<section class="mt-20 hidden sm:block">
    <div>
        <h1 class="text-3xl font-medium text-grey-800 text-center">Process overview</h1>
    </div>
</section>

<section class="hidden sm:block">
    <WorkNav {links} />
</section>

<!-- display only on mobile, fix this later-->
<!--section>
                <ul class="list-custom">
                    <li><strong><a href="#first" aria-label="Our Process" aria-disabled="true">Our process</a></strong></li>
                    <li><strong><a href="#second" aria-label="Discovery Phase" aria-disabled="true">Discovery phase</a></strong></li>
                    <li><strong><a href="#third" aria-label="Planning & Structuring" aria-disabled="true">Planning & Structuring</a></strong></li>
                    <li><strong><a href="#fourth" aria-label="Final Deliverables" aria-disabled="true">Final Deliverables</a></strong></li>
                    <li><strong><a href="#fifth" aria-label="Reflections" aria-disabled="true">Reflections</a></strong></li>
                </ul>
            </section-->

<section id="first" class="pageSection bg-grey-800 text-grey-100 pt-32 pb-20">
                <div class="max-w-2xl mx-auto">
        <h2>Double Diamond: Our Methodological Approach</h2>
    </div>
    <div class="mx-auto sm:max-w-2xl">
        <h3>Balancing Branding with Website Design</h3>
        <p>After our initial meetings we decided we had time to deliver a brandbook, print materials and a webpage design in about five weeks where 2-3 days a week went to lectures. To save time, we decided to divide the team and work side by side on the two main deliveries, the branding and the website.</p>
        <h3>Mentoring in UX Design</h3>
        <p>I led two designers that was new to UX trough a double diamond process to design the website.</p>
    </div>
    <div class="mx-auto sm:max-w-2xl">
        <img src="/images/smab/DD2-scaled.webp" alt="Double diamond process">
    </div>
</section>


<section class="">
    <div class="mx-auto sm:max-w-2xl pb-2">
        <h2>The Discovery Phase: Understanding Our Client</h2>
    </div>
    <div class="mx-auto sm:max-w-2xl">
        <h3>Engaging in Client Workshops</h3>
        <p>The first step in the design process was to understand the clients needs and goals. We held workshops and had meetings to learn as much as we could about the company, their customers and their branding and website goals.</p>
        <h3>Getting Insights from Competitors</h3>
        <p>We reviewed the client's existing website and visual identity, and we evaluated their competitors' websites. This helped us to understand the clients current strengths and weaknesses, and it gave us insights into the opportunities for improvement.</p>
        <img src="/images/smab/Team3.webp" alt="Team_picture">
        <p>One of our meetings where we presented stylescapes, font choices and sketches of the webpage. Between client meetings, we stayed in touch on Slack.</p>
    </div>
</section>

<section class="">
    <div class="mx-auto sm:max-w-2xl pb-2">
        <h2>Customer Journey: From Empathy to Insight</h2>
    </div>
    <div class="mx-auto sm:max-w-2xl">
        <h3>Mapping the User Experience</h3>
        <p>We created a simple customer journey map to empathize with the target customers and identify their pain points and where they were likely at in their journey before and when they reach the website. This helped us to understand the users point of view and to identify areas where the website could improve the customer journey.</p>
        <h3>Challenges with Svenska Mässkonsult's Online Presence</h3>
        <ul class="list-custom">
            <li><strong>If you search on Google for exhibition builders, exhibiton stand builders, or even the company by name - the webpage was hard to find.</strong></li>
            <li><strong>It was hard to understand exactly what value they offer from reading their webpage.</strong></li>
            <li><strong>Their online presence undersold their capabilites.</strong></li>
            <li><strong>Their website lacked trust building elements, like reviews or statements from their customers.</strong></li>
        </ul>
        <img src="/images/smab/Customer_journey.webp" alt="Customer journey">
        <p>Customer journey map.</p>
    </div>
</section>
				

<section class="">
    <div class="mx-auto sm:max-w-2xl pb-2">
        <h2>Crafting the Brand: Workshops to Final Choices</h2>
    </div>
    <div class="mx-auto sm:max-w-2xl">
        <h3>Interactive Brand Exploration</h3>
        <p>We held a workshop with the client where we used some exercises to explore their brand. This helped us identify how the company saw themself and how customers saw them.</p>
        <h3>The Evolution of Stylescapes</h3>
        <p>From our insights we did three rounds of stylescapes that we presented to the client.</p>
        <h3>Navigating Diverse Opinions</h3>
        <p>In the end the founders of the company wanted to keep their colour and logo but add a secondary colour, graphical elements based on their existing logo, adding a new font. This was a interesting part of the process to navigate because the different people in the company did not always agree on the direction.</p>
    </div>
</section>

<section class="">
    <div class="mx-auto sm:max-w-2xl">
        <img src="/images/smab/Stylescapes-scaled.webp" alt="Stylescapes">
    </div>
</section>


<section class="">
    <div class="mx-auto sm:max-w-2xl pb-2">
        <h2>Defining, Planning & Structuring</h2>
    </div>
    <div class="mx-auto sm:max-w-2xl">
        <h3>Defining Content and Structure</h3>
        <p>We defined what to include, then sketched out each page.</p>
        <img src="/images/smab/Discussing4.webp" alt="team discussing">
        <p>Sketching and discussing webpage elements.</p>
    </div>
</section>

<section class="">
    <div class="mx-auto sm:max-w-2xl">
        <h3>SEO-driven Sitemap Creation</h3>
        <p>To optimize SEO, we created separate subpages for every primary service offered by the company. This strategy added improved interlinking and content depth, both key for improved search rankings. We meticulously mapped out all sections to keep track:</p>
        <img src="/images/smab/Site_map_alt-1.webp" alt="Site map">
    </div>
</section>
		
<section class="">
    <div class="mx-auto sm:max-w-2xl pb-2">
        <h2>Design Process</h2>
    </div>
    <div class="mx-auto sm:max-w-2xl">
        <h3>From Sketches to Wireframes</h3>
        <p>We first sketched out all screens on paper, discussed our sketches and then transformed the final sketches into wireframes in Figma. This process gave us to keep a strong focus on the content and layout.</p>
        <h3>High Fidelity Designs</h3>
        <p>Transitioning from wireframes, we developed high-fidelity designs, infused with colors and images, resulting in a comprehensive page prototype. For instance, the "About/History" page underwent various iterations before culminating in a streamlined carousel/slideshow.</p>
        <img src="/images/smab/Wireframes1x-scaled.webp" alt="Wireframes">
    </div>
</section>

<section class="">
    <div class="mx-auto sm:max-w-2xl pb-2">
        <h2>User Experience Testing</h2>
    </div>
    <div class="mx-auto sm:max-w-2xl">
        <h3>Testing Methodology</h3>
        <p>We did an extensive user testing of our prototype, aiming to validate its design integrity and user-friendly navigation. Filming these sessions allowed us to review and analyse them together.</p>
        <h3>Navigational Insights</h3>
        <p>An intriguing find from our tests was the users intuitive reliance on the top-left logo for navigating back to the homepage, this eliminated the need for a separate menu element for navigating to home.</p>
        <img src="/images/smab/user_test_2.webp" alt="user test 2">
        <img src="/images/smab/User_testb.webp" alt="User test">
    </div>
</section>
			

<section class="">
    <div class="mx-auto sm:max-w-2xl pb-2">
        <h2>Final Deliverables</h2>
    </div>
    <div class="mx-auto sm:max-w-2xl">
        <h3>Frontpage Evolution</h3>
        <p>A deep dive into the design decisions behind our front page:</p>
        <img src="/images/smab/Front-scaled.webp" alt="Frontpage of Svenska Masskonsult">
        <img src="/images/smab/Front2-scaled.webp" alt="Frontpage of Svenska Masskonsult 2">
    </div>
</section>

<section class="">
    <div class="mx-auto sm:max-w-2xl">
        <h3>Final Prototype:</h3>
        <p>Dive into our final prototype (loading might take a moment):</p>
        <div id="iframe-container"></div>
        <div id="message">
            <p>Sorry, the prototype only shows on larger screens.</p>
        </div>
        <script>
            const iframeContainer = document.getElementById('iframe-container');
            const message = document.getElementById('message');

            // Detect if the device is mobile
            if (window.innerWidth > 768) {
                // Create the iframe element
                const iframe = document.createElement('iframe');
                iframe.title = 'Figma prototype';
                iframe.loading = 'lazy';
                iframe.style = 'transform: scale(1.1); border: none;';
                iframe.style.width = '75vw';
                iframe.style.height = '90vh';
                iframe.src = 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fcd1Vf8F7kOnH79RX5yvTTq%2FPrototype-for-portfolio%3Fkind%3D%26node-id%3D1-335%26page-id%3D0%253A1%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A335%26t%3DLmekNtL5CCmEdEjF-1%26type%3Ddesign%26viewport%3D1141%252C951%252C0.26%26mode%3Ddesign%26hide-ui%3D1';
                // Append the iframe to the container
                iframeContainer.appendChild(iframe);
            } else {
                // Display the message
                message.style.display = 'block';
            }
        </script>
    </div>
</section>

<section class="">
    <div class="mx-auto sm:max-w-2xl pb-2">
        <h2>Reflections & Learnings.</h2>
    </div>
    <div class="mx-auto sm:max-w-2xl">
        <p>This project was both a display of our skills and a journey of personal growth and understanding.</p>
        <ul class="list-custom">
            <li><strong>Team Synergy:</strong> Leading the UX process and working alongside the branding team showcased the power of teamwork. We accomplished more together than I thought possible.</li>
            <li><strong>Time Management:</strong> Tight schedules reinforced the importance of good planning. We had to be strategic and focused throughout the project.</li>
            <li><strong>Teaching and Learning:</strong> Introducing Figma to my team was both a challenge and a rewarding experience. Sharing knowledge with my colleagues and helping them master new tools was fulfilling.</li>
            <li><strong>Client Relations:</strong> Our coursework on stakeholder management was incredibly helpful. It emphasized the importance of setting clear expectations to avoid constant changes and ensure the quality of our deliverables.</li>
            <li><strong>Feedback and Growth:</strong> I learned a lot about my leadership style. In situations where I felt a task wasn't done right, I should've provided clearer guidance instead of intervening directly. This was a significant learning point for me.</li>
            <li><strong>Responsive Over Mobile-first:</strong> I would've preferred a mobile-specific design, but due to time limits, we chose a design that would work well on all devices.</li>
            <li><strong>Client Satisfaction:</strong> A highlight of the project was the client's positive feedback and their decision to bring our designs to life and implement it. It was a testament to the team's effort and commitment.</li>
        </ul>
    </div>
</section>
</article>

<footer>
	<WorkFooter />
</footer>

<style>
	/*#message {
		display: none;
	}*/

	h2 {
		@apply text-[34px] font-euclid font-semibold leading-[48px];
	}
	h3 {
		@apply text-[24px] font-euclid font-normal leading-[48px];
	}
	p {
		@apply text-[18px] font-euclid font-light leading-[30px];
	}
	.list-custom {
		@apply text-[18px] font-euclid font-normal leading-[30px] list-disc;
	}
</style>
