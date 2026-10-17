<article id="about" class="pageSection text-slate-600 pb-0 md:pb-2 md:pt-10 mx-auto">
	<section class="max-w-3xl md:max-w-6xl text-slate-600 mx-auto pt-24 md:pt-26 pb-10 md:pb-20">
		<div class="mx-auto">
			<h2 class="font-euclid text-center">
				<span
					class="mx-auto block max-w-2xl md:max-w-6xl font-bold text-5xl md:text-8xl leading-16 md:leading-[8.2rem] pb-4 md:pb-6 text-slate-600"
				>
					A technical creative with years of experience
				</span>
			</h2>
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
				class="text-card card-one shadow-custom col-span-1 md:col-span-6 rounded-3xl bg-zinc-100/75 backdrop-blur-xs p-6 md:p-10"
			>
				<h2 class="font-euclid text-3xl font-semibold pb-3">Youth</h2>
				<p class="font-euclid font-normal pb-4 text-lg">
					Born in ’84, I grew up building computers and pirating games on floppy disks between
					friends. I remember pulling a Cat5 cable across my parents’ lawn for web access to chat on
					IRC. Art, spiritual development and design are my main passions in life.
				</p>
				<h2 class="font-euclid text-3xl font-semibold pb-3">Design with Impact</h2>
				<p class="font-euclid font-normal pb-4 text-lg">
					Interaction design allows me to work creatively with technology and business strategy. It
					was like the stars aligned when I discovered it – everything suddenly made sense!
				</p>
				<p class="font-euclid font-normal pb-4 text-lg">
					I’d love to help you get the same feeling, discover your core passion and communicate it
					in a way that resonates with your audience.
				</p>
			</div>

			<!-- Image Card -->
			<div
				class="image-card card-two shadow-custom col-span-1 md:col-span-6 flex justify-center items-center overflow-hidden rounded-3xl"
			>
				<img
					class="object-cover w-full max-h-[560px] h-full"
					alt="Anders Rådal smiling and dancing"
					src="/images/about/profile1.webp"
					height="620"
					width="620"
					style="object-position: center center;"
				/>
				<!--img
				class="object-cover w-full max-h-[540px] h-full"
				alt="Profile"
				src="/images/about/profil.webp"
				height="620px"
				width="622.55"
				style="object-position: center top;"
			/-->
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
