<script setup lang="ts">
const links = ["Solutions", "Learn", "About"];
</script>

<template>
	<nav class="py-[1.6rem] px-[2.4rem] md:px-[4rem]">
		<div class="max-w-[144rem] mx-auto flex gap-[1rem] justify-between">
			<div class="min-w-[12rem]">
				<AppLogo size="small" />
			</div>
			<ul class="hidden md:flex items-center gap-[6rem]">
				<li v-for="link in links" :key="link">
					<NuxtLink to="" class="text-silver">{{ link }}</NuxtLink>
				</li>
			</ul>
			<div class="hidden md:flex items-center gap-[1.6rem]">
				<NuxtLink to="" class="text-white py-[0.8rem]">Login</NuxtLink>
				<NuxtLink to="" class="text-white py-[0.8rem] px-[1.2rem] bg-forest-green rounded-[10rem]">Get started</NuxtLink>
			</div>
		</div>
	</nav>
</template>

<style scoped>
nav {
	border-bottom: 0.5px solid #3d3d3d;
}
</style>
