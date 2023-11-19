<script>
// Background Animation Effect:
function backgroundEffectFunction() {   
    const svgBg = `
    <div class="noise-overlay"><\/div>
    <svg class="full-svg-bg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500" preserveAspectRatio="none">
        <!-- Gradient Definitions -->
        <defs>
            {GRADIENTS}
        <\/defs>
        <!-- Placeholder for circles -->
        {CIRCLES}
    <\/svg>`;

// colors "farm theme" (Note: Remember to set 700 to 800 if adding another color)
const colors = [
    { id: "gradient-pastel-blue", color: "--pastel-blue" },
    { id: "gradient-soft-coral", color: "--soft-coral" },
    { id: "gradient-dusk-blue", color: "--dusk-blue" },
    { id: "gradient-muted-gold", color: "--muted-gold" },
    { id: "gradient-off-white-green", color: "--off-white-green" },
    { id: "gradient-white-again", color: "--white-again" },
    { id: "gradient-turquoise", color: "--turquoise" },
    { id: "gradient-almost-white-2", color: "--almost-white" }
];

    // Generate gradients for each color
    let gradients = '';
    colors.forEach(({ id, color }) => {
        gradients += `
        <radialGradient id="${id}" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="var(${color})" stop-opacity="0.8" /> 
            <stop offset="20%" stop-color="var(${color})" stop-opacity="0.6" />
            <stop offset="40%" stop-color="var(${color})" stop-opacity="0.4" />
            <stop offset="60%" stop-color="var(${color})" stop-opacity="0.2" />
            <stop offset="80%" stop-color="var(${color})" stop-opacity="0.1" />
            <stop offset="100%" stop-color="var(${color})" stop-opacity="0" />
        <\/radialGradient>
        `;
    });
    // Generate circles with random movement
    let circles = '';
    for(let i = 0; i < 2; i++) {  // Reduced to 2 times to be less resource-intensive
        colors.forEach(({ id }) => {
            circles += `
                <circle class="animatedCircle" 
                        cx="${Math.random() * 800}" 
                        cy="${Math.random() * 800}" 
                        r="${Math.random() * 150 + 70}"  // Increased radius for bigger bubbles
                        fill="url(#${id})" 
                        style="--transformX1: ${Math.random() * 400 - 250}px; --transformY1: ${Math.random() * 200 - 50}px;
                               --transformX2: ${Math.random() * 400 - 250}px; --transformY2: ${Math.random() * 200 - 50}px; 
                               --transformX3: ${Math.random() * 400 - 250}px; --transformY3: ${Math.random() * 200 - 50}px;
                               --transformX4: ${Math.random() * 400 - 250}px; --transformY4: ${Math.random() * 200 - 50}px;">
                <\/circle>
            `;
        });
    }

    // Insert the SVG into the body with gradients and circles
    const finalSvg = svgBg.replace('{GRADIENTS}', gradients).replace('{CIRCLES}', circles);
    document.body.insertAdjacentHTML('beforeend', finalSvg);
}

</script>

<style>
:root {
    --pastel-blue: #A8DADC;
    --soft-coral: #F4A261;
    --dusk-blue: #457B9D;
    --muted-gold: #E9C46A;
    --off-white-green: #F1FAEE;
    --white-again: #F5F8FF;
    --turquoise: #2A9D8F;
    --almost-white: #FAFAFA; 
}

@keyframes moveAnimation {
    25% {
        transform: translate3d(var(--transformX1), var(--transformY1), 0);
    }
    50% {
        transform: translate3d(var(--transformX2), var(--transformY2), 0);
    }
    75% {
        transform: translate3d(var(--transformX3), var(--transformY3), 0);
    }
    to {
        transform: translate3d(var(--transformX4), var(--transformY4), 0);
    }
}

.animatedCircle {
    animation: moveAnimation 30s infinite ease-in-out;
}

.noise-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-image: url('/images/backgrounds/Texturesone.webp'); // Initial background image
		background-repeat: repeat;
		opacity: 0.08;
		backdrop-filter: blur(36px);
		pointer-events: none;
		z-index: -2;
		animation: noiseAnimation 0.2s infinite linear;
	}

	@keyframes noiseAnimation {
		0% {
			background-image: url('/images/backgrounds/Texturesone.webp');
		}
		50% {
			background-image: url('/images/backgrounds/Texturestwo.webp');
		}
		100% {
			background-image: url('/images/backgrounds/Texturesthree.webp');
		}
	}


.noise-overlay::before {
content: "";
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(99, 149, 195, 0.26); /* #6395C3 with 26% opacity */
z-index: 0; /* Stacked above the noise */
}  

</style>