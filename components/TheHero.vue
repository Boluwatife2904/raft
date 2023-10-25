<script setup lang="ts">
import { gsap } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";

gsap.registerPlugin(CSSRulePlugin);

onMounted(() => {
	const timeline = gsap.timeline({ delay: 0.1 });
	gsap.set(".hero", { autoAlpha: 0 });
	timeline
		.to(".hero", { autoAlpha: 1 })
		.from(".hero .label", { opacity: 0, y: 50, duration: 0.6 }, "<0.1")
		.from(".hero h1 span", { opacity: 0, y: 120, duration: 0.75, ease: "Power3.inOut" }, "<0.1")
		.from(".hero p span", { opacity: 0, y: 80, ease: "Power2.in", duration: 0.6 }, "<0.1")
		.from(".hero button", { opacity: 0, y: 70 }, "<0.1")
		.to('.hero .before', { width: 0, duration: 1.2, ease: 'power2.inOut' }, "<")
		.to('.hero .after', { width: 0, duration: 1.2, ease: 'power2.inOut' }, "-=0.8")
		.from('.hero .img', { scale: 2, duration: 2 }, 0)
});
</script>

<template>
	<section class="pt-[3.7rem] md:pt-[5.3rem] pb-[10.4rem] px-[2.4rem] md:px-[4rem] hero overflow-hidden">
		<div class="container container--large">
			<div class="flex flex-col gap-[4rem]">
				<div class="hero__content pb-[4rem] md:pb-[6rem] pt-[4.7rem] max-w-[89.6rem] mx-auto text-center">
					<span
						class="label rounded-[10rem] backdrop-blur-[1rem] text-[1.4rem] md:text-[1.6rem] text-[#DCDCDC] py-[0.6rem] md:py-[0.65rem] px-[1.2rem] inline-flex items-center gap-[0.8rem] md:gap-[1rem]">
						Introducing Raft Cards
						<span class="w-[1.6rem] md:w-[2rem] h-[1.6rem] md:h-[2rem] block"><BaseIcon name="chevron-right" /></span>
					</span>
					<div class="flex flex-col gap-[1.6rem] md:gap-[2.4rem] mb-[2.4rem] md:mb-[3.2rem] mt-[1.6rem]">
						<h1 class="text-white text-[4rem] md:text-[9.6rem] overflow-hidden">
							<span class="block">Building the future of banking.</span>
						</h1>
						<p class="text-silver md:text-[2.4rem] leading-[2.rem] md:leading-normal max-w-[66.8rem] mx-auto overflow-hidden">
							<span class="block">Experience the future of banking with RAFT. We're here to empower your financial journey.</span>
						</p>
					</div>
					<button class="bg-forest-green rounded-[10rem] text-white font-semibold px-[3.2rem] py-[1.6rem]">Get started</button>
				</div>
				<div class="hero__image w-full relative overflow-hidden rounded-[2rem]">
					<img src="/images/hero.webp" class="hidden md:block object-cover img" alt="" />
					<img src="/images/hero-mobile.webp" class="block md:hidden object-cover img" alt="" />
					<div class="before absolute top-0 right-0 bg-white w-full h-full"></div>
					<div class="after absolute top-0 right-0 bg-red-900 w-full h-full"></div>
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

.before {
	background-color: #070606;
	z-index: 3;
}

.after {
	background-color: rgb(230, 211, 170);
	z-index: 2;
}
</style>
