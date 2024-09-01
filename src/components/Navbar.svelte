<script>
	import anime from 'animejs';
	import { onMount, afterUpdate } from 'svelte';

	// Mobile menu
	let isMobileMenuOpen = false;

	// Toggle mobile menu
	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
		
	}

	// set the size correct from starts
	let effectX = 0; // Initial position. This matches 'left: 0px;'
	let effectWidth = 0; // Initial size. This matches 'width: 170px;'

	afterUpdate(() => {
		const activeLink = document.querySelector('#main-navigation > ul > li > a.active');
		if (activeLink instanceof HTMLElement) {
			effectX = activeLink.offsetLeft - 7; // Subtract 8 for the left padding
			effectWidth = activeLink.offsetWidth + 14; // Add 16 for total padding (8 on each side)
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

<!-- Desktop Navigation -->
<nav class="flyIn hidden md:block">
	<div
		class="nav-container flex justify-center align-middle font-euclid font-medium text-base md:text-lg"
	>
		<div
			id="main-navigation"
			class="main-navbar shadow-custom rounded-2xl bg-zinc-100 bg-opacity-80 backdrop-blur"
			role="navigation"
			aria-label="Main Navigation"
		>
			<div class="menu-effect-container">
				<div
					class="menu-effect bg-red-500 bg-opacity-80 min-w-90px rounded-xl"
					style="left: {effectX}px; width: {effectWidth}px;"
				/>
			</div>

			<ul>
				<li>
					<a
						href="#hero"
						class:active={isActive}
						aria-label="Anders Rådal"
						class="text-slate-500 hover:text-slate-600">Anders Rådal</a
					>
				</li>
				<li>
					<a href="#work" aria-label="Case Studies" class="text-slate-500 hover:text-slate-600"
						>Case Studies</a
					>
				</li>
				<li>
					<a href="#services" aria-label="Services" class="text-slate-500 hover:text-slate-600"
						>Services</a
					>
				</li>
				<li>
					<a href="#about" aria-label="About me" class="text-slate-500 hover:text-slate-600"
						>About me</a
					>
				</li>
				<li>
					<a
						href="https://drive.google.com/file/d/1VqrsvjfF7dU8N12q_kXG7xupsPX7s64U/view?usp=sharing"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Resumé - opens in a new window"
						class="menu-custom-link text-slate-500 hover:text-slate-600"
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
						class="menu-custom-link text-slate-500 hover:text-slate-600"
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



<!-- Mobile Hamburger Icon -->
<div class="absolute top-4 z-50 right-4 md:hidden">
	<button on:click={toggleMobileMenu} class="text-gray-500 focus:outline-none">
		<svg class="w-9 h-9" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#20282C"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>	</button>
</div>

<!-- Mobile Menu Overlay -->
{#if isMobileMenuOpen}
<div class="fixed inset-0 bg-zinc-100 bg-opacity-90 backdrop-blur z-50 flex flex-col items-center justify-center space-y-8">
	<!-- Close Button -->
	<button on:click={toggleMobileMenu} class="absolute top-4 right-4 text-slate-600 focus:outline-none">
		<svg class="w-9 h-9" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#20282C"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
	</button>

	<!-- Mobile Menu Items -->
	<ul class="flex flex-col items-center space-y-8 text-slate-600 font-normal text-4xl">
		<li>
			<a href="#hero" aria-label="Anders Rådal" on:click={toggleMobileMenu}>Anders Rådal</a>
		</li>
		<li>
			<a href="#work" aria-label="Case Studies" on:click={toggleMobileMenu}>Case Studies</a>
		</li>
		<li>
			<a href="#services" aria-label="Services" on:click={toggleMobileMenu}>Services</a>
		</li>
		<li>
			<a href="#about" aria-label="About Me" on:click={toggleMobileMenu}>About Me</a>
		</li>
		<li>
			<a
				href="https://drive.google.com/file/d/1VqrsvjfF7dU8N12q_kXG7xupsPX7s64U/view?usp=sharing"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Resumé - opens in a new window"
				class="flex text-slate-600"
			>
				Resumé
				<!--span class=" mt-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="32"
						viewBox="0 -960 960 960"
						width="32"
					>
						<path
							d="M215.522-152.348 151.869-216l460.892-460.891H356.413v-91h411v411h-91v-256.348L215.522-152.348Z"
							fill="currentColor"
						/>
					</svg>
				</span-->
			</a>
		</li>
		<li>
			<a
				href="https://www.linkedin.com/in/andersraa/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Connect on LinkedIn, opens in a new window"
				class="flex text-slate-600"
			>
				LinkedIn
				<!--span class=" mt-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="32"
						viewBox="0 -960 960 960"
						width="32"
					>
						<path
							d="M215.522-152.348 151.869-216l460.892-460.891H356.413v-91h411v411h-91v-256.348L215.522-152.348Z"
							fill="currentColor"
						/>
					</svg>
				</span-->
			</a>
		</li>

		<!-- Add more mobile menu items if needed -->
	</ul>
</div>
{/if}

<style lang="postcss">
	/* content styles */

	a.active {
		color: #f5f6f7;
		opacity: 0.96;
		transition: 0.1s;
		transition-timing-function: ease-out;
	}

	/*.main-navbar a:hover {
		 color: #2A363B;

	}*/

	.menu-custom-link {
		display: inline-flex;
		align-items: center;
	}

	/*.menu-custom-link:hover,
	.menu-custom-link:focus {
		color: #2A363B;
	}*/

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
		padding: 0 5px;
		align-items: center;
		height: 56px;
		z-index: 100;
		overflow: visible;
		transition: 0.2s;
	}

	.main-navbar::before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		border-radius: inherit;
		border: 1.2px solid rgba(178, 183, 192, 0.3);
		pointer-events: none;
	}

	.main-navbar ul {
		list-style-type: none;
		padding: 12px 0;
		margin: 0;
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
		gap: 8px;
	}

	.main-navbar li {
		display: flex;
		padding: 1px 8px;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}

	.main-navbar a {
		z-index: 102;
		text-decoration: none;
		position: relative;
		padding: 0 20px;
		margin-top: 1.5px;
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
		height: 46px;
		position: absolute;
		left: 0; /*old Initial position if code live on Work page */
		/*left: 109.372px; */ /*Initial position if code live on About page */
		z-index: 101;
	}

	@media (max-width: 768px) {
		.nav-container {
			width: 97%;
			margin: 0 auto;
		}

		.menu-custom-link {
			display: none;
		}

		.menu-effect {
			transform: translateX(1px);
		}

		.main-navbar {
			width: 97%;
			margin: 0 auto;
			top: 6px;
			padding: 3px 4px;
			max-height: 48px;
		}

		.main-navbar a {
			/*	font-size: calc(0.9em); */
			padding: 3px 4.5px;
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
			left: 0;
			max-height: 38px;
		}
	}
</style>
