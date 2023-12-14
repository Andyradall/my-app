<script>
	import anime from 'animejs';
	import { onMount, afterUpdate } from 'svelte';

	// set the size correct from starts
	let effectX = 0; // Initial position. This matches 'left: 0px;'
	let effectWidth = 0; // Initial size. This matches 'width: 170px;'

	afterUpdate(() => {

		const activeLink = document.querySelector('#main-navigation > ul > li > a.active');
		if (activeLink instanceof HTMLElement) {
			effectX = activeLink.offsetLeft - 8; // Subtracted 8 for the left padding
			effectWidth = activeLink.offsetWidth + 16; // Added 16 for total padding (8 on each side)
		} else {
		}
	});

	// Cache navigation links and sections
	let pageNavigationLinks = [];
	let pageSections = [];
	let pageSectionIdToNavigationLink = {};
	let pageInitialX = 0;

	// throttle function, enforces a minimum time interval

	/**
	 * Throttle function, enforces a minimum time interval.
	 * @param {Function} fn - The function to throttle.
	 * @param {number} interval - The minimum time interval in milliseconds.
	 */
	function throttle(fn, interval) {
		var lastCall = 0,
			timeoutId = null;
		return function () {
			var now = new Date().getTime();
			if (lastCall && now < lastCall + interval) {
				// if we are inside the interval we wait
				clearTimeout(timeoutId);
				timeoutId = setTimeout(function () {
					lastCall = now;
					fn.call();
				}, interval - (now - lastCall));
			} else {
				// otherwise, we directly call the function
				lastCall = now;
				fn.call();
			}
		};
	}

	function highlightPageNavigation() {
		const scrollPosition = window.scrollY;
		const offset = 160; // Adjust this offset if needed
		let foundMatch = false; // Flag to indicate if we've found our match

		// We're reversing the pageSections order to start checking from bottom to top
		pageSections.forEach((section) => {
			if (foundMatch) return; // Skip the rest of the sections once a match is found

			const sectionTop = section.offsetTop - offset;
			const id = section.getAttribute('id');
			// Check if we've scrolled past the section's top
			if (scrollPosition >= sectionTop) {
				foundMatch = true; // We found our match, set the flag to true

				const navLink = pageSectionIdToNavigationLink[id];
				if (navLink && !navLink.classList.contains('active')) {
					// Remove 'active' class from all navigation links
					pageNavigationLinks.forEach((link) => link.classList.remove('active'));
					// Add 'active' class to the matched section's navigation link
					navLink.classList.add('active');

					// Calculate new position and width for the highlight effect
					const x = navLink.offsetLeft - 8;
					const width = navLink.offsetWidth + 16;

					// Animate the highlight effect to the new position and width
					anime({
						targets: '.menu-effect',
						left: `${x}px`,
						width: `${width}px`,
						duration: 600,
						endDelay: 1000
					});
				}
			}
		});
	}

	onMount(() => {
		// Cache navigation links and sections
		pageNavigationLinks = document.querySelectorAll(
			'#main-navigation > ul > li > a:not(.menu-custom-link)'
		);
		pageSections = Array.from(document.querySelectorAll('.pageSection')).reverse();

		// Map each section id to their corresponding navigation link
		pageSections.forEach((section) => {
			let id = section.getAttribute('id');
			let correspondingNavLink = document.querySelector(
				`#main-navigation > ul > li > a[href="#${id}"]`
			);
			pageSectionIdToNavigationLink[id] = correspondingNavLink;
		});

		// Calculate the initial X position from the first navigation link
		const firstNavLink = pageNavigationLinks[0];
		if (firstNavLink instanceof HTMLElement) {
			pageInitialX = firstNavLink.offsetLeft;
		}

		const pageEffectElement = document.querySelector('.menu-effect');
		if (pageEffectElement instanceof HTMLElement) {
			pageEffectElement.style.left = `${pageInitialX}px`;
		}

		// Add scroll listener
		window.addEventListener('scroll', throttle(highlightPageNavigation, 50));
	});

		// set #hero as active
		let isActive = false;

// On component mount, we'll check the condition
onMount(() => {
	// If the current window location hash is "#hero", set isActive to true
	if (window.location.hash === '#hero') {
		isActive = true;
	}
});
</script>

<nav class="flyIn">
	<div
		class="nav-container flex justify-center align-middle font-euclid font-medium text-grey-800 text-base md:text-lg"
	>
		<div
			id="main-navigation"
			class="main-navbar shadow-custom rounded-full bg-white"
			role="navigation"
			aria-label="Main Navigation"
		>
			<div class="menu-effect-container">
				<div
					class="menu-effect bg-grey-200 min-w-90px rounded-full"
					style="left: {effectX}px; width: {effectWidth}px;"
				/>
			</div>

			<ul>
				<li>
					<a href="#hero" class:active={isActive} aria-label="Anders Rådal">Anders Rådal</a>
				</li>
				<li>
					<a href="#work" aria-label="Case Studies">Case Studies</a>
				</li>
				<li>
					<a href="#about" aria-label="About me">About me</a>
				</li>
				<li>
					<a
						href="https://drive.google.com/file/d/1W6rt980ZRd3HG_2QqSCYhX3zE7FIRdLl/view?usp=sharing"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Resumé - opens in a new window"
						class="menu-custom-link"
					>
						Resumé
						<span class="menu-svg-icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="24"
								viewBox="0 -960 960 960"
								width="24"
							>
								<path
									d="M215.522-152.348 151.869-216l460.892-460.891H356.413v-91h411v411h-91v-256.348L215.522-152.348Z"
									fill="currentColor"
								/>
							</svg>
						</span>
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/andersraa/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Connect on LinkedIn, opens in a new window"
						class="menu-custom-link"
					>
						LinkedIn
						<span class="menu-svg-icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="24"
								viewBox="0 -960 960 960"
								width="24"
							>
								<path
									d="M215.522-152.348 151.869-216l460.892-460.891H356.413v-91h411v411h-91v-256.348L215.522-152.348Z"
									fill="currentColor"
								/>
							</svg>
						</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
</nav>

<style lang="postcss">
	/* content styles */

	.menu-custom-link {
		display: inline-flex;
		align-items: center;
	}

	.menu-custom-link:hover,
	.menu-custom-link:focus {
		color: #616366;
	}

	.menu-svg-icon {
		margin-left: 2px;
		transform: translateY(-1px);
		transition: transform 0.1s;
	}

	.menu-custom-link:hover .menu-svg-icon {
		transform: translateY(-3px) translateX(2px);
	}

	.menu-svg-icon svg path {
		fill: currentColor;
	}

	/* Main navigation styles */

	.main-navbar {
		position: fixed;
		top: 24px;
		padding: 0px 8px;
		align-items: center;
		height: 64px;
		border: 1px solid #dde0e6;
		z-index: 100;
		overflow: visible;
		transition: 0.2s;
	}

	.main-navbar ul {
		list-style-type: none;
		padding: 16px 0;
		margin: 0;
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
		gap: 8px;
	}

	.main-navbar li {
		display: flex;
		padding: 0 8px;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}

	.main-navbar a {
		z-index: 102;
		text-decoration: none;
		position: relative;
		padding: 0 20px;
		margin-top: 2px; 
	}

	.main-navbar a:hover {
		color: #616366;
	}

	.menu-effect-container {
		width: 163px;
		height: 48px;
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0px;
		display: flex;
		align-items: center;
		justify-content: center;
		pointer-events: none;
	}

	.menu-effect {
		opacity: 1;
		/*min-width: 90.5677px;*/
		height: 48px;
		position: absolute;
		left: 0; /*old Initial position if code live on Work page */
		/*left: 109.372px; */ /*Initial position if code live on About page */
		z-index: 101;
	}

	@media (max-width: 768px) {
		.nav-container {
			width: 96%;
			margin: 0 auto;
		}

		.menu-custom-link {
			display: none;
		}

		.menu-effect {
			transform: translateX(4px);
		}

		.main-navbar {
			width: 96%;
			margin: 0 auto;
			top: 8px;
			padding: 4px 4px;
			max-height: 48px;
		}

		.main-navbar a {
			/*	font-size: calc(0.9em); */
			padding: 3px 4px;
			white-space: nowrap;
		}

		.main-navbar ul {
			padding: 4px 16px;
			margin: 2px;
			gap: 0;
			display: flex; /* Use flexbox */
			justify-content: space-around;
			margin-block-start: 0;
			margin-block-end: 0;
			padding-inline-start: 40px;
		}

		.menu-effect {
			max-height: 32px;
		}
	}
</style>
