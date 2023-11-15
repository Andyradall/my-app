<script>
	import WorkBack from '../../../components/WorkBack.svelte';
	import { caseStudies } from '../../../lib/caseStudies.js';
	import WorkNav from '../../../components/WorkNav.svelte';
	import WorkFooter from '../../../components/WorkFooter.svelte';

	const links = [
		{ id: '#first', title: 'Team Dynamics', ariaLabel: 'Team Dynamics' },
		{ id: '#second', title: 'Customer Research', ariaLabel: 'Customer Research' },
		{ id: '#third', title: 'Design Process', ariaLabel: 'Design Process' },
		{ id: '#fourth', title: 'Results', ariaLabel: 'Results' }
	];
</script>

<svelte:head>
	<title>Solar Choice Case Study</title>
	<meta name="description" content="Solar Choice Case Study" />
</svelte:head>

<article class="mx-auto text-grey-800">
	<section class="max-w-6xl mx-auto justify-center px-4 pt-40 pb-20">
		<div class="hero">
        <h1>Solar Choice</h1>
        <h1>Crafting a Premium Brand Identity for Solar Panels</h1>
    </div>
</section>

<section class="">
    <div class="mx-auto sm:max-w-2xl pb-2">
        <h2>Project Overview</h2>
        <p>
            <strong>Brief:</strong> Create a visual brand document that presents the company in a understandable and appealing way to their target audience through the main communication channels.
            <strong><br>Team:</strong> Patric Iu, Divya Kavadia, Tessa Holgersson, and myself.
            <strong><br>Role:</strong> As part of the Design Lead program at Hyper Island in 2022, our team collaborated on this client project. My contributions spanned from designing logos and stylescapes to developing website mockups and producing extensive content for the brand book. I also led a class presentation detailing our process.
            <strong><br>Key Deliverables:</strong> Comprehensive Brand Book.
            <strong><br>See our Work:</strong> <a href="https://www.solarchoice.se/" title="Solar Choice website.">Solar Choice website.</a>
            <strong><br>Tools used:</strong> Figma, Figjam, Illustrator.
        </p>
        <img src="/images/solarchoice/Crew.webp" alt="Crew">
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
<!--section class="">
    <div class="mx-auto sm:max-w-2xl">
        <h2>Process overview</h2>
        <p class="center-text">Team Dynamics</p>
        <p class="center-text"><a href="#second" title="Research">Customer Research</a></p>
        <p class="center-text"><a href="#third" title="3. Redesigned sign up flow">Design Process</a></p>
        <p class="center-text"><a href="#fourth">Results</a></p>
    </div>
</section-->
		

<section class="pageSection">
    <div class="mx-auto sm:max-w-2xl pb-2">
        <h2>Team Dynamics and Initial Steps</h2>
        <p>In the initial phase, it was important for us to understand each other's strengths and work dynamics. We dedicated a few days to this, employing specific tools from the Hyper Island toolbox. Here are some of the key tools we found most beneficial:</p>
        <img src="/images/solarchoice/Zoom.webp" alt="First Meeting">
    </div>
</section>

<section class="pageSection">
    <div class="mx-auto sm:max-w-2xl pb-2">
        <h2>Team Canvas</h2>
        <p>This tool facilitated our alignment on individual strengths, shared values, overarching goals, and team norms. It's a tool I personally find valuable because it helped us to get everything on the table so that we can avoid misunderstandings later on.</p>
        <img src="/images/solarchoice/Team-canvas.webp" alt="Team-canvas">
    </div>
</section>

<section class="pageSection">
    <div class="mx-auto sm:max-w-2xl pb-2">
        <h2>Time Management with Figjam</h2>
        <p>To stay on track and ensure everyone was synced, we structured our timeline on Figjam. This calendar helped pinpoint crucial deadlines, schedule meetings, and ensure we always began each day with a transparent and focused roadmap.</p>
        <img src="/images/solarchoice/Agenda.webp" alt="Agenda">
    </div>
</section>
			
<section class="">
    <div class="mx-auto sm:max-w-2xl pb-2">
        <h2>Customer Insight, our Approach to Research</h2>
        <p>To gain a better understanding of our target audience, I reached out on solar panel groups on Facebook to find people to interview. Through these interviews, we aimed to gain insights into what was most important to our target customers.</p>
        <h3>Challenging Our Assumptions</h3>
        <p>One example of the insights we gained was debunking my initial hypothesis. I believed that environmental considerations were paramount to solar panel buyers. However, when we posed unbiased questions, we discovered that the primary motivation was the allure of saving money. Discoveries like this were instrumental in tailoring our brand visuals and messages, ensuring that we were creating a brand that truly resonated with our target audience.</p>
        <h3>Research Process Breakdown</h3>
        <p>To ensure our findings were relevant, we set up a methodical research process:</p>
        <ul class="list-custom">
            <li><strong>Structured Interview Guide:</strong> A tool to maintain consistency and depth across all interviews.</li>
            <li><strong>Interactive Zoom Sessions:</strong> Live interviews with solar panel owners, complemented by a dedicated note-taker to capture all insights.</li>
            <li><strong>Clustering Technique:</strong> After collecting responses, we categorized similar answers into overarching themes.</li>
            <li><strong>Deriving Key Insights:</strong> From these clusters, we derived significant insights that became the foundation of our brand development efforts.</li>
        </ul>
        <img src="/images/solarchoice/Research.webp" alt="Research">
    </div>
</section>
	

<section class="">
    <div class="mx-auto sm:max-w-2xl pb-2">
        <h3>Establishing Brand Identity</h3>
        <p>To successfully communicate a brand's essence, it's essential to define the brand personality and the vision of its stakeholders.</p>
        <h3>Diving into Brand Personality</h3>
        <p>Through dialogue with our client in a workshop, we not only deciphered their current perspective of their brand but also mapped out their future roadmap so our branding would stand the test of time.</p>
        <img src="/images/solarchoice/Screenshot_2023_01_20_at_15_15_1.webp" alt="Workshop insights">
        <h3>Key Insight</h3>
        <p>Our client envisions Solar Choice as a premium provider. Their unique selling point isn't price but the unmatched quality they offer, working exclusively with the market's finest panels.</p>
    </div>
</section>

<section class="">
    <div class="mx-auto sm:max-w-2xl">
        <h3>UCDC - The Heart of User-Centered Design</h3>
        <p>The User-Centered Design Canvas (UCDC) stands out as one of my go-to tools. It offers a comprehensive overview of a company, shining light on potential avenues from both business and user perspectives. Throughout our project, the UCDC acted as a dynamic reference point, continually updated to reflect evolving insights.</p>
        <img src="/images/solarchoice/UCDC_Solar_Choice_1.webp" alt="UCDC_Solar_Choice_1">
    </div>
</section>
			
<section class="">
    <div class="mx-auto sm:max-w-2xl pb-2">
        <h2>Crafting a Brand's Visual DNA</h2>
        <p>A brand isn't just about logos or colors; it's the very essence that resonates with its audience. This essence stems from core values, beliefs, and personality traits. To encapsulate this essence visually, a structured and deep-rooted design process is imperative.</p>
        <h3>Defining Brand Values</h3>
        <p>Collaborating with our client, we delved deep into Solar Choice's ethos, aiming to extract the inherent values and personality traits that form its core. Our iterative process of brainstorming and feedback led us to distill these vast notions into four definitive brand pillars:</p>
        <ul class="list-custom">
            <li><strong>Innovative:</strong> Pioneering in offering cutting-edge, technologically novel solutions.</li>
            <li><strong>Trustworthy:</strong> Guaranteeing native, Swedish-speaking installers for authentic interactions.</li>
            <li><strong>Premium:</strong> An unwavering commitment to purvey only the elite panels and equipment.</li>
            <li><strong>Journey:</strong> A holistic approach to customer service, guiding clients from initial order, through installation, and beyond, ensuring consistent satisfaction.</li>
        </ul>
        <p>These pillars acted as our North Star throughout the design phase, guiding our choices to ensure a cohesive and genuine brand portrayal.</p>
    </div>
</section>

<section class="">
    <div class="mx-auto sm:max-w-2xl">
        <h3>The Birth of Stylescapes</h3>
        <p>Armed with a robust understanding of Solar Choice's brand identity, we transitioned into the visual exploration phase. Here, we translated our textual understanding into tangible moodboards and stylescapes. These visual representations offered the client glimpses into potential brand design directions, allowing them to envision Solar Choice's future identity.</p>
        <h3>My stylescapes:</h3>
    </div>
</section>
<section class="">
    <div class="mx-auto sm:max-w-2xl">
        <img src="/images/solarchoice/Solarblue8_4.webp" alt="Stylescape 1">
        <img src="/images/solarchoice/Solarblue2goldidentity.webp" alt="My stylescape edited">
    </div>
</section>

<section class="">
    <div class="mx-auto sm:max-w-2xl pb-2">
        <h2>Our Color and Logo Process</h2>
        <p>Crafting a logo is an intricate art. The logo is more than just a graphic; it's the embodiment of a brand's ethos, values, and aspirations. Similarly, color isn't merely an aesthetic choice but a vital component in evoking desired emotions and perceptions.</p>
        <h3>Diamond in the Rough</h3>
        <p>Looking at the actual solar panels, I was inspired by the diamond shape in the panel structure. The diamond is not only an representation of strength but also exudes an aura of exclusivity. By stylizing this shape, I sought to manifest these attributes in Solar Choice's logo, representing both their focus on premium products and robustness.</p>
    </div>
</section>

<section class="">
    <div class="mx-auto sm:max-w-2xl">
        <img src="/images/solarchoice/Logo_exploret_1-scaled.webp" alt="Logo_exploret_1">
    </div>
</section>
			

<section class="">
    <div class="mx-auto sm:max-w-2xl pb-2">
        <h3>Logo End Result: Killing Your Darling</h3>
        <p>Navigating the redesign of a logo always needs a balance between innovation and brand preservation. While our initial new logo suggestions resonated with the client, there was a clear desire to maintain the essence of their existing identity. Recognizing this, we approached the task with a focus on refining their current logo. My recommendation was to streamline and contemporize the existing design, culminating in a more flattened and modern look.</p>
        <h3>Here is the results showing first the old logo, then the new ones:</h3>
        <img src="/images/solarchoice/solar_choice_logo_30.webp" alt="solar_choice_logo_30">
        <img src="/images/solarchoice/solar_choice_logo_31.webp" alt="solar_choice_logo_31">
        <h3>Versatility in Design: Variants and Monochrome</h3>
        <p>Adapting to diverse applications and ensuring consistent representation is crucial in branding. Keeping this in mind, we conceptualized a new format tailored for the webpage header, mirroring our envisioned aesthetics. Furthermore, in anticipation of scenarios like black & white printing or lower-resolution, we created monochrome versions. These serve as reliable alternatives, ensuring the logo's integrity across varied contexts.</p>
        <img src="/images/solarchoice/solar_choice_logo_10_10-scaled.webp" alt="solar_choice_logo_10_10">
        <img src="/images/solarchoice/solar_choice_logo_10_38-scaled.webp" alt="solar_choice_logo_10_38">
    </div>
</section>

<section class="">
    <div class="mx-auto sm:max-w-2xl pb-2">
        <h3>Painting the Brand: The Colour Palette Journey</h3>
        <p>Colors play a crucial role in brand perception. Initially, we proposed a dark blue and gold palette. However, our client's vision led us elsewhere. Taking their feedback constructively, we crafted three novel palettes: 'Blue Lagoon,' reminiscent of deep waters; 'Northern Light,' playing on the beauty of the northern light; and 'Emerald,' a gem of vivid green. The latter, 'Emerald,' won the client's heart. This palette choice couldn't have been more fitting. It's not just contemporary and refreshing but also seamlessly aligns with Solar Choice's commitment to sustainability and pioneering spirit.</p>
        <img src="/images/solarchoice/Deep-Lagoon.webp" alt="Deep-Lagoon">
        <img src="/images/solarchoice/Northern-Light.webp" alt="Northern-Light">
        <img src="/images/solarchoice/Emerald.webp" alt="Emerald theme">
    </div>
</section>

<section class="">
    <div class="mx-auto sm:max-w-2xl pb-2">
        <h2>Webpage Mockups</h2>
        <p>To give life to our newly crafted visual identity, I designed a set of webpage mockups. These mockups served as a practical illustration, enabling the client to envision the transformation of their website with the integration of the fresh design elements. Here comparing old page on the left and mockup on the right side:</p>
        <img src="/images/solarchoice/oldpage.webp" alt="oldpage">
        <img src="/images/solarchoice/mockup.webp" alt="mockup">
    </div>
</section>

<section class="">
    <div class="mx-auto sm:max-w-2xl pb-2">
        <h2>Achievements and Insights</h2>
        <p>Our effort to create a new brand identity for Solar Choice was a success.</p>
        <p><strong>Swift Rollout:</strong> three weeks post the unveiling of the final brand book, the client astoundingly rolled out the new branding on every platform, including a revamped Solar Choice website</p>
        <p><strong>Effective Collaboration:</strong> This quick implementation is a testament to the effectiveness of our design process and the strong partnership we established with the client.</p>
        <p><strong>Effective Hyper Island Methods:</strong> The foundational work we did with Hyper Island methods, creating team alignment and structure, proved to be very valuable. It not only facilitated seamless collaboration but also made sure our workdays were filled with a lot of joy and fun!</p>
        <p>Screenshot from the new Solar Choice website:</p>
        <img src="/images/solarchoice/Solar_Choice_Solceller_energi_laddboxar_Stockholms_la_n_www_solarchoice_se-1.webp" alt="Solar_Choice_Solceller_energi_laddboxar_Stockholms_la_n_www_solarchoice_se-1">
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
