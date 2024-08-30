<article id="about" class="pageSection text-slate-600 pb-0 md:pb-2 md:pt-10 mx-auto">
	<section
		class="max-w-3xl md:max-w-6xl text-slate-600 mx-auto pt-24 md:pt-26 pb-10 md:pb-20"
	>
		<div class="mx-auto">
			<h1 class="font-euclid text-center">
				<span
					class="mx-auto block max-w-2xl md:max-w-6xl font-bold text-5xl md:text-8xl leading-[4rem] md:leading-[8.5rem] pb-4 md:pb-6 text-slate-600"
				>
				A technical creative with years of experience
				</span>
				<!--span
					class="mx-auto block font-semibold text-3xl md:text-[2.375rem] max-w-xs md:max-w-3xl leading-[3.5rem] text-slate-600"
				>
					Who is Anders? 
				</span-->
			</h1>
		</div>
	</section>
	<div class="mx-4 md:mx-auto md:min-mx-16 md:max-w-7xl mb-2">
		<section class="">
			<h2 class="font-euclid text-2xl md:text-3xl text-slate-600 font-semibold pl-6 my-4">
				ABOUT ME
			</h2>
		</section>

		<section class="grid grid-cols-1 md:grid-cols-12 gap-10 mb-0">
			<!-- Text Card -->
			<div
				class="text-card card-one shadow-custom col-span-1 md:col-span-6 rounded-3xl bg-zinc-100 bg-opacity-75 backdrop-blur-sm outline-4 outline-offset-[-4px] outline-zinc-350/30 p-6 md:p-10"
			>
				<h2 class="font-euclid text-3xl font-semibold pb-3">From a young age</h2>
				<p class="font-euclid font-normal pb-4 text-lg">
					Born in 84, I grew up building computers and playing games like Wolfenstein. I remember
					pulling a network cable across my parents lawn to download music and chat on IRC. I have
					also always been creative and interested in art and design.
				</p>
				<h2 class="font-euclid text-3xl font-semibold pb-3">Design with Impact</h2>
				<p class="font-euclid font-normal pb-4 text-lg">
					I fell in love with Interaction design when I realised it allowed me to mix coding,
					creativity, and business strategy all into one, it was like the stars aligned and it just
					made sense. In my work, I aim for solutions that look good, works well for the users and
					support business growth.
				</p>
			</div>

			<!-- Image Card -->
			<div
				class="image-card card-two shadow-custom col-span-1 md:col-span-6 flex justify-center items-center overflow-hidden outline-2 outline-offset-[-4px] outline-zinc-350/30 rounded-3xl"
			>
				<img
					class="object-cover w-full max-h-[540px] h-full"
					alt="Profile"
					src="/images/about/profil.webp"
					height="620px"
					width="622.55"
					style="object-position: center top;"
				/>
			</div>
		</section>
	</div>
</article>

<style lang="postcss">
	.image-card,
	.text-card {
		position: relative;
	}
	.image-card::before,
	.text-card::before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		border-radius: inherit;
		border: 1.3px solid rgba(178, 183, 192, 0.3); /* transparent border */
		z-index: 1;
		pointer-events: none; /* to allow interaction with the content underneath */
	}
</style>
