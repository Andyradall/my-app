<script>
	import WorkBack from '../../../components/WorkBack.svelte';
	import { caseStudies } from '../../../lib/caseStudies.js';
	import WorkNav from '../../../components/WorkNav.svelte';
	import WorkFooter from '../../../components/WorkFooter.svelte';

	const links = [
		{ id: '#first', title: 'Research & Hooked', ariaLabel: 'Research & Hooked' },
		{ id: '#second', title: 'Onboarding Guide', ariaLabel: 'Onboarding Guide' },
		{ id: '#third', title: 'Psychological Hacks', ariaLabel: 'Psychological Hacks' },
		{ id: '#fourth', title: 'Onboarding Stories', ariaLabel: 'Onboarding Stories' },
        { id: '#fifth', title: 'Results', ariaLabel: 'Results' }
	];
</script>

<svelte:head>
	<title>Karrierestart UX Case Study</title>
	<meta name="description" content="Karrierestart UX Case Study" />
</svelte:head>

<header class="relative top-0">
	<WorkBack />
</header>

<article class="mx-auto font-euclid text-grey-800">
	<section class="max-w-6xl mx-auto justify-center px-4 pt-40 pb-20">
        <div class="hero">
            <h1 class="text-7xl font-bold text-grey-800 py-4">
                Karrierestart
                <span class="text-4xl font-medium text-grey-500 py-4"><br />Improving the Onboarding Experience for Job Portal</span>
            </h1>
        </div>
</section>
	
<section class="max-w-6xl flex flex-col md:flex-row mx-auto justify-center mb-20">
    <div class="md:flex-1 md:max-w-lg m-4">
                <h2 class="pb-2"> Challenge & Context</h2>
            </div>

            <div>
                <p>During 2020-2021 at Karrierestart, we noticed a substantial drop-off rate after sign-up. Many users weren't fully leveraging the full potential of the portal, leading us to a mission: revamp for better engagement.</p>
                <p>The project was particularly complex due to the platform's multi-sided nature, catering to both job-seekers, companies, and freelancers. At the same time covid put a strain on our resources. Our focus? Enhance UX without imposing heavy changes on our developers.<strong></strong></p>
            </div>

            <div>
                <h3>Project Snapshot:</h3>
                <ul class="list-custom">
                    <li><strong>Team:</strong> Founder Bjarne Vasset, UI designer Gurveer Dhindsa, and myself.</li>
                    <li><strong>Role:</strong> UX and product designer, responsible for all UX related aspects of the project.</li>
                    <li><strong>Deliverables:</strong> Research findings, design specs.</li>
                    <li><strong>Format:</strong> Desktop and mobile</li>
                    <li><strong>Tools:</strong> Figma, Zeplin.</li>
                </ul>
            </div>
            
        <div class="sm:max-w-2xl mx-auto">
            <div>
                <div><img src="/images/karrierestart/MacBook_Pro_16_01_FREE.webp" alt="KS mockup"></div>
            </div>
        </div>
</section>
			
<section class="">
    <div>
        <div class="sm:max-w-2xl mx-auto">
            <div>
                <h1>Process overview</h1>
            </div>
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


<!--section>
    <ul>
    <li><a href="#first">Research & Hooked</a></li>
    <li><a href="#second">Onboarding Guide</a></li>
    <li><a href="#third">Psychological Hacks</a></li>
    <li><a href="#fourth">Onboarding Stories</a></li>
    <li><a href="#fifth">Results</a></li>
    </ul> 
</section-->
	
<section class="">
    <div>
        <div class="sm:max-w-2xl mx-auto">
            <div id="first" class="pageSection">
                <h2>Doing Research in Covid Lockdown</h2>
            </div>
            <p>The objective was clear: enhance profile content on KS by increaing engagement. At the same time, there were challenges, like layoffs and the pandemic restrictions. The question we grappled with was, "How do we get user insights under these conditions?"</p>
            <h3>Proactive Measures:</h3>
            <p>To get insight into user behavior, I took initiative to integrate Hotjar on the portal. Its recordings and heatmaps vividly depicted areas where the user journey stuttered. Furthermore, I set up a feedback module, so we could zoom in on specific user pain points.</p>
            <h3>Remote Insights:</h3>
            <p>Traditional face-to-face interviews were off the table. Instead, I dispatched surveys for insights and turned to remote platforms like Teston.io and Usertesting.com. The remote validation of our designs turned out to be highly effective.</p>
            <h3>Fostering User Engagement:</h3>
            <p>With an eye on further amplifying user engagement, I studied Nir Eyal's Hook model. Then I explored ways to incorporate this framework into our platform.</p>
    
                    <img class="is-content lightbox-item" src="/images/karrierestart/Screenshot_2023_02_10_at_17_08_2.webp" alt="Hotjar Module">
                
            </div>
            <p>Hotjar feedback module gave me a lot of actionable feedback that I used to improve user exerience! Here on the whitelabled Aleris Company profile.</p>
            <h2>Key Actionable Insights</h2>
            <p>Through our research, several revelations stood out, shaping our approach and guiding the evolution of the Karrierestart platform. The insights became the pillars of our design strategy.</p>
            <p><strong>Enhance User Guidance:</strong> It was essential to offer users simple instructions on how to use the service to its fullest potential.</p>
            <p><strong>Gamify User Experience:</strong> Incorporating gamification elements like progress bars, badges, and challenges to motivate users and make the experience more enjoyable.<br><strong>Reduce Cognitive Load:</strong> Prioritizing essential features and minimizing the visual prominence of advanced options ensured that users weren't overwhelmed, leading to smoother navigation.<br></p>
            <p><strong>Leverage Behavioral Psychology:</strong> We integrated techniques such as variable rewards and nudges to subtly steer user behavior, aiming to magnify engagement levels.</p>
            <p><strong>Simplification and Standardization:</strong> To ensure consistency and foster collaboration, we built a design system and transitioned all design work to Figma.</p>
        </div>
</section>
		

<section class="">
    <div class="sm:max-w-2xl mx-auto">
                <img class="" src="/images/karrierestart/Frame_10.webp" alt="Nir Eyal summary">
    </div>
</section>

<section class="">
        <div id="second" class="pageSection">
            <h2>Designing the Onboarding Guide</h2>
        </div>
        <p>I designed onboarding guides that we put on all the profiles.</p>
        <p><strong>Company Profile:</strong> In the company profile it was important to make it very simple to get started, and not overwhelm the users with complexity causing them to leave.</p>
        <p><strong>Progressive Unlocking:</strong> I designed the onboarding so that as users earned new badges, new sections and functionalities became accessible, gradually increasing their engagement with the platform.</p>
        <p><strong>Professionalism in Job Ads:</strong> We made certain steps like having a logo and "about us" text mandatory for publishing job ads, this ensured a consistently polished appearance for all published job listings.</p>
                <img class="is-content lightbox-item" src="/images/karrierestart/Aleris23.webp" alt="Onboarding guide step 1">
  
        <p>First step of onboarding guide.</p>
   
            <img class="is-content" src="/images/karrierestart/onb33.webp" alt="onboarding step 3">
  
        <p>Step 3 of onboarding guide.</p>
   
          
                <img class="is-content lightbox-item" src="/images/karrierestart/onb4w3.webp" alt="Onboarding alternative">
    
        <p>Alternative more tactile view of step 3. I explored and discarded many different solutions like this in the ideation phase.</p>

</section>
		

<section>
        <div id="third" class="section">
            <h2>Variable rewards and nudges. Messages, badges, likes and followers.</h2>
        </div>
        <h3>Congratulatory Milestones</h3>
        <p>As users reached significant content milestones, I integrated congratulatory messages with confetti effect. These not only served as dopamine boosts in line with the Hooked methodology, but also oriented users towards the subsequent steps to enhance their profile.</p>
  
                <img class="" src="/images/karrierestart/Freelance2.webp" alt="Freelance congrats message">
           
   
        <p>Motivational message from freelancer profile.</p>

</section>

<section class="pageSection">
    <div class="container">
        <h3 class="font_iqslf467d">Engagement Ecosystem</h3>
        <p>I created a ecosystem of triggers to sustain users attention. For instance, a simple "like" on a portfolio project instantly notified the user via email, infusing vibrancy and a sense of community within the platform. Additionally, the incorporation of followers and recommendations further enriched user engagement.</p>
        <div class="ce-image" data-align="left">
            <img src="/images/karrierestart/Congratulatory.webp" alt="Freelance user profile">
        </div>
        <p>Here showing Likes and Followers in a user profile.</p>
    </div>
</section>
			

<section class="">
        <div id="fourth" class="section">
            <h2>Stories and Guides</h2>
        </div>
        <div>
        <p>To better serve the user's need for information, I created stories to convey a lot of information quickly and easily. The challenging element here was working with the developers to and creating the CMS for creating the stories and getting the code perfect. I decided to use Undraw for all illustrations on the portal as it provided a free and consistent resource for illustrations fitting well with the overall brand.</p>

                <img class="" src="/images/karrierestart/Candidate_test_with_illustrations_20pct_smaller_-scaled.webp" alt="Stories sketch">
           
            </div>
            <div>
        <p>From story ideation process</p>
   
            <img src="/images/karrierestart/ksscreent_.webp" alt="Screenshot">
        </div>
        <div>
        <p>Screenshot from live page.</p>

                <img src="/images/karrierestart/Storyedit.webp" alt="Storyedit CMS">
        <p>Some designs from CMS of stories, we created many customisation options for the stories.</p>
    </div>
</section>

<section class="">
        <div id="fifth" class="pageSection">
            <h2>Summary and Outcome</h2>
       
        <p>Through my experience improving onboarding on a 200k+ user portal, I gained a better understanding of how to retain and activate users.</p>
        <h3>Key outcomes</h3>
        <p><strong>Enhanced Engagement:</strong> Our improvements resulted in a rise in user engagement. This was evident in the richer content they uploaded and their heightened frequency of visits.</p>
        <p><strong>Analytics Proficiency:</strong> This project further honed my skills in agile analytics, particularly with tools like Hotjar.</p>
        <p><strong>Team Collaboration:</strong> The collaborative nature of this project deepened my experience in working cohesively with fellow designers and developers.</p>
        <p><strong>Tangible Impact:</strong> In the grand scheme, our onboarding enhancements culminated in a significant increase in user retention and engagement. This ripple effect was also visible in the increased number of job postings and subsequent applications on the portal.</p>
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
