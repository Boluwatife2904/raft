<script setup lang="ts">
import { gsap } from "gsap";

onMounted(() => {
	document.body.classList.toggle("overflow-hidden");
	const tl = gsap.timeline({
		onComplete: () => {
			document.body.classList.toggle("overflow-hidden");
		},
	});
	tl.to(".preloader", { width: 0, duration: 1, autoAlpha: 0 }).to(".preloader span", { autoAlpha: 0, duration: 0.75 }, "<0.1");
});
</script>

<template>
	<div class="preloader fixed bg-[#070606] w-full h-screen flex items-center justify-center right-0 top-0 z-10">
		<span class="fixed block top-[50%] left-[50%]">
			<AppLogo />
		</span>
	</div>
</template>

<style scoped>
.preloader {
	z-index: 111;
}

span {
	transform: translate(-50%, -50%);
}
</style>
