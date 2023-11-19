<script>
    import { onMount } from 'svelte';
  
    let finalSvg = '';
  
    onMount(() => {
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
        </radialGradient>
        `;
      });
  
      let circles = '';
      for(let i = 0; i < 2; i++) {
        colors.forEach(({ id }) => {
          circles += `
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
          `;
        });
      }
  
      const svgBg = `
      <div class="noise-overlay"></div>
      <svg class="full-svg-bg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500" preserveAspectRatio="none">
        <defs>
          ${gradients}
        </defs>
        ${circles}
      </svg>`;
  
      finalSvg = svgBg;
    });
  </script>
  
  <div>
    <!-- Other content -->
    {@html finalSvg} <!-- This line renders the final SVG -->
  </div>

  <style lang="postcss">
    :root {
      --pastel-blue: #a8dadc;
      --soft-coral: #f4a261;
      --dusk-blue: #457b9d;
      --muted-gold: #e9c46a;
      --off-white-green: #f1faee;
      --white-again: #f5f8ff;
      --turquoise: #2a9d8f;
      --almost-white: #fafafa;
    }
  
    .animatedCircle {
      animation: moveAnimation 30s infinite ease-in-out;
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
  
    .full-svg-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  
    .noise-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-image: url('/images/backgrounds/texturesone.webp');
      background-repeat: repeat;
      opacity: 0.08;
      backdrop-filter: blur(36px);
      pointer-events: none;
      z-index: -2;
      animation: noiseAnimation 0.2s infinite linear;
    }
  
    @keyframes noiseAnimation {
      0% {
        background-image: url('/images/backgrounds/texturesone.webp');
      }
      50% {
        background-image: url('/images/backgrounds/texturestwo.webp');
      }
      100% {
        background-image: url('/images/backgrounds/texturesthree.webp');
      }
    }
  
    .noise-overlay::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(99, 149, 195, 0.26); /* #6395C3 with 26% opacity */
      z-index: 0; /* Stacked above the noise */
    }
  </style>
  
