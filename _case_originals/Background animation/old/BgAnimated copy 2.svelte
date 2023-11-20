<script>
  const colors = [
    "#A8DADC", "#F4A261", "#457B9D", "#E9C46A", 
    "#F1FAEE", "#F5F8FF", "#2A9D8F", "#FAFAFA",
    // Add more colors or repeat existing ones
  ];

  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }


  let circles = [];
  for (let i = 0; i < 2; i++) {
    colors.forEach((color) => {
      circles.push({
        cx: getRandom(0, 800),
        cy: getRandom(0, 700),
        rx: getRandom(130, 350),
        ry: getRandom(70, 180),
        fill: color,
        transformX: getRandom(-250, 250),
        transformY: getRandom(-250, 250),
        duration: getRandom(20, 40), // Random duration between 20s and 40s
        delay: getRandom(0, 10), // Random delay up to 10s
      });
    });
  }
</script>

<svg class="full-svg-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" preserveAspectRatio="none">
  <!-- Background rectangle -->
  <rect width="100%" height="100%" fill="#222222" />

  {#each circles as circle, index (index)}
  <ellipse 
    class="animatedCircle"
    cx={circle.cx}
    cy={circle.cy}
    rx={circle.rx}
    ry={circle.ry}
    fill={circle.fill}
    style={`--transformX: ${circle.transformX}px; --transformY: ${circle.transformY}px;`}
  />
{/each}
</svg>
  
  <style>
  @keyframes moveAnimation {
    0%, 100% {
      transform: translate3d(0, 0, 0);
    }
    25% {
      transform: translate3d(var(--transformX), var(--transformY), 0) rotate(10deg);
    }
    50% {
      transform: translate3d(0, 0, 0) scale(1.1);
    }
    75% {
      transform: translate3d(var(--transformX), var(--transformY), 0) rotate(-10deg);
    }
  }
  
    .animatedCircle {
      animation: moveAnimation 30s infinite ease-in-out;
    }
  
    .full-svg-bg {
      position: absolute;
      overflow: hidden; /* Add this to prevent overflow of circles */
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 0.8;
    }
  </style>
  