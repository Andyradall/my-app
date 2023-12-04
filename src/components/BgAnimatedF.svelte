<script>
  // for interactive circle use onmount
  import { onMount } from 'svelte';

	const colors = [
		'#A8DADC',
		'#F4A261',
		'#457B9D',
		'#E9C46A',
		'#F1FAEE',
		'#B6B9BD',
		'#2A9D8F',
		'#FAFAFA'
	];

	function getRandom(min, max) {
		return Math.random() * (max - min) + min;
	}

  let circles = [];
  for (let i = 0; i < 2; i++) {
    colors.forEach((color, index) => {
      circles.push({
        cx: getRandom(70, 700),
        cy: getRandom(0, 900),
        rx: getRandom(200, 390),
        ry: getRandom(100, 190),
        fill: `url(#gradient${index})`, // Use gradient ID
        transformX: getRandom(-250, 250),
        transformY: getRandom(-250, 250),
        duration: getRandom(15, 25),
        delay: getRandom(0, 5)
      });
    });
  }

  // Add only one interactive circle
  circles.push({
    cx: 400,
    cy: 400,
    rx: 200, // Equal rx and ry for a perfect circle
    ry: 50,
    fill: 'url(#gradient0)', // Example gradient
    class: 'interactive' // Class for targeting
  });
 
	// Generate gradients for each color
	let gradients = colors
		.map(
			(color, index) => `
      <radialGradient id="gradient${index}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${color}" stop-opacity="0.8" /> 
          <stop offset="20%" stop-color="${color}" stop-opacity="0.6" />
          <stop offset="40%" stop-color="${color}" stop-opacity="0.4" />
          <stop offset="60%" stop-color="${color}" stop-opacity="0.2" />
          <stop offset="80%" stop-color="${color}" stop-opacity="0.1" />
          <stop offset="100%" stop-color="${color}" stop-opacity="0" />
      </radialGradient>
    `
		)
		.join('');

    onMount(() => {
    const svgElement = document.querySelector('.full-svg-bg');
    let curX = window.innerWidth / 2;
    let curY = window.innerHeight / 2;

    window.addEventListener('mousemove', event => {
      if (svgElement) {
        var pt = svgElement.createSVGPoint();
        pt.x = event.clientX;
        pt.y = event.clientY;
        var cursorpt = pt.matrixTransform(svgElement.getScreenCTM().inverse());
        curX = cursorpt.x;
        curY = cursorpt.y;

        // Find the index of the interactive circle
        const interactiveIndex = circles.findIndex(circle => circle.class === 'interactive');
        if (interactiveIndex !== -1) {
          // Create a new circles array with the updated interactive circle
          circles = [
            ...circles.slice(0, interactiveIndex),
            { ...circles[interactiveIndex], cx: curX, cy: curY },
            ...circles.slice(interactiveIndex + 1)
          ];
        }
      }
    });
  });
</script>

<svg class="full-svg-bg" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
  <defs>
    { @html gradients }
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
      <feBlend in="SourceGraphic" in2="goo" />
    </filter>
  </defs>
  <!-- Add the rect element for the background -->
  <rect width="800" height="800" fill="#E4F2FF" />
  {#each circles as circle, index (index)}
    <ellipse
      class:interactive={circle.class === 'interactive'}
      class:animatedCircle={circle.class !== 'interactive'}
      cx={circle.cx}
      cy={circle.cy}
      rx={circle.rx}  
      ry={circle.ry}
      fill={circle.fill}
      style={`--transformX: ${circle.transformX}px; --transformY: ${circle.transformY}px; --duration: ${circle.duration}s; --delay: ${circle.delay}s;`}
      filter="url(#goo)"
    />
  {/each}
</svg>

<style lang="postcss">
	@keyframes moveAnimation {
		0%,
		100% {
			transform: translate3d(0, 0, 0);
		}
		25% {
			transform: translate3d(var(--transformX), var(--transformY), 0);
		}
		50% {
			transform: translate3d(0, 0, 0);
		}
		75% {
			transform: translate3d(var(--transformX), var(--transformY), 0);
		}
	}

	.animatedCircle {
		animation: moveAnimation var(--duration) infinite ease-in-out var(--delay);
	}

	.full-svg-bg {
		position: absolute;
		overflow: hidden;
    filter: url(#goo) blur(40px) ;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		opacity: 1;
	}

  .interactive {
    opacity: 1;
}
</style>
