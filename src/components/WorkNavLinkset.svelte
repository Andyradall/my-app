<script>
	import { onMount, afterUpdate } from 'svelte';
	import anime from 'animejs';
	// export let links = [];

	let sticky = false;
	let currentActiveId;
	let navigationLinks;
	let sections;
	let isActive = false;
	let effectX = 0; // Initial position
	let effectWidth = 0; // Initial size

	function throttle(fn, interval) {
		var lastCall = 0;
		var timeoutId = null;
		return function () {
			var now = new Date().getTime();
			if (lastCall && now < lastCall + interval) {
				clearTimeout(timeoutId);
				timeoutId = setTimeout(function () {
					lastCall = now;
					fn.call();
				}, interval - (now - lastCall));
			} else {
				lastCall = now;
				fn.call();
			}
		};
	}

	function updateActiveLink() {
		const offset = 155; // Offset for activating the section
		let foundMatch = false; // Flag to indicate if we've found our match
		let activeSection = sections.find((section) => {
			const sectionTop = section.offsetTop - offset;
			if (foundMatch) return false;
			if (window.scrollY >= sectionTop) {
				foundMatch = true;
				return true;
			}
			return false;
		});

		currentActiveId = activeSection ? activeSection.id : sections[0].id;
		animateIndicator();
	}

	function animateIndicator() {
		anime({
			targets: '.effect',
			left: effectX,
			width: effectWidth,
			duration: 600,
			easing: 'easeOutElastic(1, 0.4)' // Adjust for a bouncy effect
		});
	}

	function scrollToSection(event) {
		const href = event.currentTarget.getAttribute('href');
		const id = href.replace('#', '');
		const section = document.getElementById(id);

		if (section) {
			event.preventDefault();
			section.scrollIntoView({ behavior: 'smooth' });
		}
	}

	onMount(() => {
		const stickyMenu = document.getElementById('sub-navigation');
		const stickyNavTop = stickyMenu.offsetTop;
		navigationLinks = Array.from(document.querySelectorAll('#sub-navigation > ul > li > a'));
		sections = Array.from(document.querySelectorAll('.pageSection')).reverse();

		if (window.location.hash === '#first') {
			isActive = false;
		}

		const handleScroll = throttle(() => {
			sticky = window.scrollY > stickyNavTop;
			updateActiveLink();
		}, 20); // Throttle every 20ms

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	afterUpdate(() => {
		const activeLink = document.querySelector('#sub-navigation > ul > li > a.active');
		if (activeLink instanceof HTMLElement) {
			effectX = activeLink.offsetLeft - 16; // Subtracted 8 for the left padding
			effectWidth = activeLink.offsetWidth + 32; // Added 16 for total padding (8 on each side)
		}
	});

    // Extract the relevant part of the path
    // For example, if the URL is '/work/karrierestart', you get 'karrierestart'
    const currentPage = derived(page, $page => {
    const pathSegments = $page.url.pathname.split('/');
    return pathSegments[pathSegments.length - 1]; // Adjust this if necessary
  });

  	// Imports for page and links functionality
	import { page } from '$app/stores';
    import { derived } from 'svelte/store';

// Links
	const linkSets = {
    'designmaskinen': [
		{ id: '#first', title: 'The challenge', ariaLabel: 'Navigate to "The challenge" section' },
		{ id: '#second', title: 'Design Process', ariaLabel: 'Navigate to "Design Process" section' },
		{ id: '#third', title: 'Final prototype', ariaLabel: 'Navigate to "Final prototype" section' },
		{ id: '#fourth', title: 'Insights', ariaLabel: 'Navigate to "Insights" section' }
	],
    'karrierestart': [ 
		{ id: '#first', title: 'Research & Hooked', ariaLabel: 'Research & Hooked' },
		{ id: '#second', title: 'Onboarding Guide', ariaLabel: 'Onboarding Guide' },
		{ id: '#third', title: 'Psychological Hacks', ariaLabel: 'Psychological Hacks' },
		{ id: '#fourth', title: 'Onboarding Stories', ariaLabel: 'Onboarding Stories' },
		{ id: '#fifth', title: 'Results', ariaLabel: 'Results' }
	],
    'smab': [ 
		{ id: '#first', title: 'Our Process', ariaLabel: 'Our process' },
		{ id: '#second', title: 'Discovery Phase', ariaLabel: 'Discovery Phase' },
		{ id: '#third', title: 'Planning & Structuring', ariaLabel: 'Planning & Structuring' },
		{ id: '#fourth', title: 'Final Deliverables', ariaLabel: 'Final Deliverables' },
		{ id: '#fifth', title: 'Reflections', ariaLabel: 'Reflections' }
	],
	'solarchoice': [ 
	{ id: '#first', title: 'Team Dynamics', ariaLabel: 'Team Dynamics' },
		{ id: '#second', title: 'Customer Research', ariaLabel: 'Customer Research' },
		{ id: '#third', title: 'Design Process', ariaLabel: 'Design Process' },
		{ id: '#fourth', title: 'Results', ariaLabel: 'Results' }
	],
};

// use current page path to use the correct link set

 let links;
  currentPage.subscribe(value => {
    links = linkSets[value] || [];
  });

    // Use current page path to use the correct link with Reactive assignment of links
	//$: links = linkSets[$currentPage] || [];
</script>

<!----------->
<nav>
	<div id="sub-navigation" class="header-navbar font-euclid font-normal text-base" class:sticky>
		<button
			class="back font-euclid text-base font-normal"
			on:click={() => (window.location.href = '/')}
			aria-label="Back to frontpage"
			type="button"
		>
			<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
				<path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z" />
			</svg> Home
		</button>
		<div class="con-effect">
			<div class="effect bg-grey-200" />
		</div>
		<ul>
			{#each links as link}
				<li>
					<a
						class="font-euclid text-base"
						href={link.id}
						aria-label={link.ariaLabel}
						class:active={link.id === `#${currentActiveId}`}
						on:click={scrollToSection}
					>
						{link.title}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style lang="postcss">
	/* main css to refactor -> Tailwind */
	.header-navbar {
		border-bottom: 1px solid #ebeef4;
		padding: 0;
		margin: 0;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		width: 100%;
		background: #fff;
		height: 96px;
		padding: 2px 0;
		transition: all 200ms ease;
	}

	.header-navbar.sticky {
		padding: 0;
		margin: 0;
		height: 52px;
		position: fixed;
		top: 0;
		z-index: 100;
		opacity: 1;
		/*box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06), 0 2px 4px rgba(0, 0, 0, 0.06),
			0 4px 8px rgba(0, 0, 0, 0.06), 0 8px 16px rgba(0, 0, 0, 0.06), 0 16px 32px rgba(0, 0, 0, 0.06),
			0 32px 64px rgba(0, 0, 0, 0.06);*/
	}

	.header-navbar.sticky .effect {
		opacity: 1;
	}

	.header-navbar ul {
		padding: 0;
		margin: 0 4rem 0 4rem;
		list-style: none;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		width: 100%;
		background: #fff;
	}

	@media screen and (max-width: 460px) {
		.header-navbar ul {
			margin: 0 1rem 0 1rem;
		}
	}

	@media screen and (max-width: 460px) {
		.header-navbar a {
			font-size: 10px;
		}
	}

	.header-navbar li {
		width: 200px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 0;
		background: transparent;
		border-radius: 20px;
		z-index: 104;
		transition: all 0.45s ease;
	}

	.header-navbar a {
		/*padding: 2px 0 0 0;*/
		color: #616366;
		font-size: 16px;
		text-decoration: none;
	}

	.header-navbar a.active {
		z-index: 5 !important;
		color: #242527 !important;
	}

	/* :not excludes class for specific use */
	.header-navbar a:active:not(.back) {
		transform: scale(1.2);
	}

	.header-navbar button.back {
		opacity: 0;
		padding-left: 2vw;
		font-size: 16px;
		border: 0px;
		outline: none;
		background: none;
		color: #303133;
		height: 52px;
		cursor: pointer;
		transition: all 0.45s ease;
		display: inline-flex;
		align-items: center;
	}

	.header-navbar button.back svg {
		margin-right: 0.2em;
		fill: #303133;
	}

	.header-navbar button.back:hover,
	.header-navbar button.back:hover svg path {
		color: #616366;
		fill: #616366;
	}

	.header-navbar.sticky button.back {
		opacity: 1;
	}

	.con-effect {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0px;
		/*overflow: hidden;*/
		pointer-events: none;
		display: flex;
		align-items: center;
		justify-content: center;
		will-change: transform;
	}

	.effect {
		opacity: 0;
		width: 164px;
		height: 40px;
		position: absolute;
		border-radius: 104px;
		z-index: 102;
		will-change: transform;
	}
</style>
