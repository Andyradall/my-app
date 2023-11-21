<script>
	export let title = '';
	export let link = '#';
	export let ariaLabel = '';
	export let category = '';
	export let image = '';
	export let alt = '';
</script>

<div class="case-card">
	<div class="case-card-bg shadow-custom py-4 rounded-3xl bg-grey-50 max-w-[800px] max-h-[600px]">
		<a href={link} aria-label="hidden" class="case-card-image">
			<img class="card-thumbnail" src={image} {alt} width="900" height="560" />
		</a>
	</div>
	<div class="case-card-text pl-2">
		<h3 class="font-euclid font-medium text-gray-800 text-base pt-2 pb-1 leading-9">{category}</h3>
		<a
			href={link}
			aria-label={ariaLabel}
			class="custom-link-front font-euclid text-gray-800 text-2xl leading-11 pb-1 font-semibold"
		>
			<h2>{title}</h2>
			<span class="svg-icon-right">
				<svg xmlns="http://www.w3.org/2000/svg" width="33" height="28" viewBox="0 0 33 28"
					><path
						d="M16.1 0.583252L13.2624 2.94794L24.4921 12.3228H0V15.677H24.4921L13.2624 25.0519L16.1 27.4166L32.2 13.9999L16.1 0.583252Z"
						fill="currentColor"
					/></svg
				>
			</span>
		</a>
	</div>
</div>

<style lang="postcss">
	/* case card specific css */
	.case-card-bg {
     /* max-width: 800px;
        max-height: 500px; */
		padding: 16px 0;
		border: 1px solid #f6faff;
	}

	.case-card:hover .case-card-image img {
		transform: scale(1.02);
		transition: transform 0.3s ease-out;
		opacity: 0.94;
	}

	.case-card:hover .case-card-text .custom-link-front,
	.case-card:hover h2,
	.case-card:hover h3,
	.case-card:hover span {
		color: #404244 !important;
	}

	/* style for the custom links under cards */
	.custom-link-front {
		display: inline-flex;
	}

	.custom-link-front:hover,
	.custom-link-front:focus {
		color: #404244 !important;
	}

	/* move the arrow icon on hover */
	.svg-icon-right {
		margin-left: 4px;
		transform: translateX(4px) translateY(2px);
		transition: transform 0.09s;
		transition-timing-function: ease-out;
	}

	.case-card:hover .custom-link-front .svg-icon-right {
		transform: translateX(8px) translateY(2px);
	}

	.svg-icon-right svg path {
		fill: currentColor;
	}
</style>
