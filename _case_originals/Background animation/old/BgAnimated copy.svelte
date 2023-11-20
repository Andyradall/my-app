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
    for (let i = 0; i < 3; i++) { // Increase the number of shapes
      colors.forEach((color) => {
        circles.push({
          cx: getRandom(0, 800),
          cy: getRandom(0, 700),
          rx: getRandom(130, 350), // wider shapes
          ry: getRandom(70, 180), // shorter shapes
          fill: color,
          transformX: getRandom(-250, 250),
          transformY: getRandom(-250, 250),
        });
      });
    }
  </script>
  
  <!-- SVG and styles remain the same -->
  
  
  <svg class="full-svg-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" preserveAspectRatio="none">
    <!-- Background rectangle -->
    <rect width="100%" height="100%" fill="#A8DADC" />
  
    {#each circles as circle (circle.fill)}
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
      0% {
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
      100% {
        transform: translate3d(0, 0, 0);
      }
    }
  
    .animatedCircle {
      animation: moveAnimation 30s infinite ease-in-out;
    }
  
    .full-svg-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 0.8;
    }
  </style>
  