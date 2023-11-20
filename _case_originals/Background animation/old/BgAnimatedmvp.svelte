<script>
    // Define the colors array and any other constants here
    const colors = [
      "#A8DADC",
      "#F4A261",
      "#457B9D",
      "#E9C46A",
      "#F1FAEE",
      "#F5F8FF",
      "#2A9D8F",
      "#FAFAFA",
    ];
  
    // Function to generate a random number within a range
    function getRandom(min, max) {
      return Math.random() * (max - min) + min;
    }
  
    // Generate circles with animations
    let circles = colors.map((color) => ({
      cx: getRandom(0, 800),
      cy: getRandom(0, 800),
      r: getRandom(70, 220),
      fill: color,
      transformX: getRandom(-250, 250),
      transformY: getRandom(-250, 250),
    }));
  </script>
  
  <!-- SVG element for the moving circles -->
  <svg class="full-svg-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" preserveAspectRatio="none">
    <!-- Generate circles with animations dynamically -->
    {#each circles as circle (circle.fill)}
      <circle
        class="animatedCircle"
        cx={circle.cx}
        cy={circle.cy}
        r={circle.r}
        fill={circle.fill}
        style={`--transformX: ${circle.transformX}px; --transformY: ${circle.transformY}px;`}
      />
    {/each}
  </svg>
  
  <style>
    /* Define the animation */
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
  
    /* Apply the animation to the circles */
    .animatedCircle {
      animation: moveAnimation 30s infinite ease-in-out;
    }
  
    /* Additional styles as needed */
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
  