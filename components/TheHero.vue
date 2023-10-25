<script setup lang="ts"></script>

<template>
	<section class="pt-[3.7rem] md:pt-[5.3rem] pb-[10.4rem] px-[2.4rem] md:px-[4rem]">
		<div class="container container--large">
			<div class="flex flex-col gap-[4rem]">
				<div class="hero__content pb-[4rem] md:pb-[6rem] pt-[4.7rem] max-w-[89.6rem] mx-auto text-center">
					<span
						class="label rounded-[10rem] backdrop-blur-[1rem] text-[1.4rem] md:text-[1.6rem] text-[#DCDCDC] py-[0.6rem] md:py-[0.65rem] px-[1.2rem] inline-flex items-center gap-[0.8rem] md:gap-[1rem]">
						Introducing Raft Cards
						<span class="w-[1.6rem] md:w-[2rem] h-[1.6rem] md:h-[2rem] block"><BaseIcon name="chevron-right" /></span>
					</span>
					<div class="flex flex-col gap-[1.6rem] md:gap-[2.4rem] mb-[2.4rem] md:mb-[3.2rem] mt-[1.6rem]">
						<h1 class="text-white text-[4rem] md:text-[9.6rem]">Building the future of banking.</h1>
						<p class="text-silver md:text-[2.4rem] leading-[2.rem] md:leading-normal max-w-[66.8rem] mx-auto">
							Experience the future of banking with RAFT. We're here to empower your financial journey.
						</p>
					</div>
					<button class="bg-forest-green rounded-[10rem] text-white font-semibold px-[3.2rem] py-[1.6rem]">Get started</button>
				</div>
				<div class="hero__image">
					<img src="/images/hero.webp" class="hidden md:block object-cover" alt="" />
					<img src="/images/hero-mobile.webp" class="block md:hidden object-cover" alt="" />
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.hero {
	&__content {
		background-image: url("@/assets/images/hero-bg.png");
		background-size: 100%;
		background-repeat: no-repeat;
		background-position: center center;
	}
}
.label {
	border: 0.2px solid #989898;
	background: rgba(255, 255, 255, 0.15);
}
</style>
