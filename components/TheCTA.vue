<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const { $splitting } = useNuxtApp();

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
	const result = $splitting({ target: ".cta-text", by: "lines" });
	const lines = result[0].lines;
	const timeline = gsap.timeline({
		scrollTrigger: {
			trigger: ".cta",
			start: "top center",
			end: "bottom center",
			scrub: true,
			toggleActions: "play none none none",
		},
	});

	lines.forEach((line) => {
		timeline.from(line, { opacity: 0, yPercent: 100 });
	});
});
</script>

<template>
	<section class="cta px-[2.4rem] md:px-[7.2rem] py-[3.2rem] md:py-[13.2rem] bg-emerald">
		<div class="container">
			<h1 class="text-cod-gray text-[6rem] md:text-[12.8rem] cta-text overflow-hidden flex flex-wrap gap-4">
				Smart investments, secure payments,
				<br />
				and expert guidance, all in one place.
			</h1>
		</div>
	</section>
</template>

<style>
.cta-text span {
	display: inline-block !important;
}
</style>
