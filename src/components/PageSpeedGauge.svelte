<script>
	/**
	 * PageSpeed Insights style score gauge for case studies.
	 * The green / orange colours mirror PageSpeed's own score scale (90+ good, 50–89 average),
	 * so they are content here, not part of the site palette.
	 *
	 * @typedef {Object} Props
	 * @property {number} score
	 * @property {string} label - e.g. "Desktop" or "Mobile"
	 * @property {string} lcp - e.g. "LCP 0.9 s"
	 */

	/** @type {Props} */
	let { score, label, lcp } = $props();

	const circumference = 213.6; // 2π × r (r = 34)
	let dash = $derived(((score / 100) * circumference).toFixed(1));
	let good = $derived(score >= 90);
</script>

<div class="flex flex-1 flex-col items-center gap-2">
	<svg
		viewBox="0 0 80 80"
		width="104"
		height="104"
		role="img"
		aria-label={`${label} performance ${score}`}
	>
		<circle
			cx="40"
			cy="40"
			r="34"
			fill={good ? '#EAF6EF' : '#FFF4E0'}
			stroke={good ? '#D5E9DD' : '#F3E2C2'}
			stroke-width="6"
		/>
		<circle
			cx="40"
			cy="40"
			r="34"
			fill="none"
			stroke={good ? '#0C8A4D' : '#C76A00'}
			stroke-width="6"
			stroke-linecap={score < 100 ? 'round' : 'butt'}
			stroke-dasharray={`${dash} ${circumference}`}
			transform="rotate(-90 40 40)"
		/>
		<text
			x="40"
			y="48"
			text-anchor="middle"
			font-size="24"
			font-weight="500"
			fill={good ? '#0A5C34' : '#8A4A00'}>{score}</text
		>
	</svg>
	<span class="font-euclid text-base font-medium">{label}</span>
	<span class="font-euclid text-sm font-light text-slate-400">{lcp}</span>
</div>
