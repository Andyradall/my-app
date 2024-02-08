<script>
    const colors = [
      "#CF381C", "#909BA1", "#CF381C", "#909BA1", 
      "#CF381C", "#909BA1", "#CF381C", "#909BA1",
    ];



    function getRandom(min, max) {
      return Math.random() * (max - min) + min;
    }

    let circles = [];
    for (let i = 0; i < 2; i++) {
      colors.forEach((color, index) => {
        circles.push({
          cx: getRandom(90, 700),
          cy: getRandom(0, 900),
          rx: getRandom(200, 390),
          ry: getRandom(100, 190),
          fill: `url(#gradient${index})`, // Use gradient ID
          transformX: getRandom(-250, 250),
          transformY: getRandom(-250, 250),
          duration: getRandom(15, 25),
          delay: getRandom(0, 5),
        });
      });
    }

    // Generate gradients for each color
    let gradients = colors.map((color, index) => `
      <radialGradient id="gradient${index}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${color}" stop-opacity="0.8" /> 
          <stop offset="20%" stop-color="${color}" stop-opacity="0.6" />
          <stop offset="40%" stop-color="${color}" stop-opacity="0.4" />
          <stop offset="60%" stop-color="${color}" stop-opacity="0.2" />
          <stop offset="80%" stop-color="${color}" stop-opacity="0.1" />
          <stop offset="100%" stop-color="${color}" stop-opacity="0" />
      </radialGradient>
    `).join('');
</script>
<div class="grain"></div>
<svg class="full-svg-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" preserveAspectRatio="none">
    <rect width="100%" height="100%" fill="#F5F6F7" />
    <defs>
      {@html gradients} <!-- Insert the gradient definitions --> 
    </defs>

    {#each circles as circle, index (index)}
      <ellipse
        class="animatedCircle"
        cx={circle.cx}
        cy={circle.cy}
        rx={circle.rx}
        ry={circle.ry}
        fill={circle.fill} 
        style={`--transformX: ${circle.transformX}px; --transformY: ${circle.transformY}px; --duration: ${circle.duration}s; --delay: ${circle.delay}s;`}
      />
    {/each}
</svg>
  <style lang="postcss">
    @keyframes moveAnimation {
      0%, 100% {
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
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 0.85;
    }

    .grain {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url('/images/backgrounds/bg_grain.webp');
  background-repeat: repeat;
  opacity: 0.53;
  z-index: 0;
}
  </style>
  