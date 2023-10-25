<script setup lang="ts">
const links = ["Solutions", "Learn", "About"];

const showMobileNavbar = ref(false);
</script>

<template>
	<nav class="py-[1.6rem] px-[2.4rem] md:px-[4rem] nav-desktop sticky top-0 left-0 bg-[#070606]">
		<div class="max-w-[144rem] mx-auto flex gap-[1rem] items-center justify-between">
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
			<button class="flex md:hidden flex-col gap-[0.4rem]" @click="showMobileNavbar = !showMobileNavbar">
				<span v-for="button in 3" :key="button" class="block bg-white h-[0.1rem] w-[2rem]"></span>
			</button>
		</div>
	</nav>

	<nav v-if="showMobileNavbar" class="nav-mobile w-full flex flex-col gap-[4rem] bg-[#070606] fixed top-[8rem] max-w-[30rem] left-[50%] p-10">
		<ul class="flex flex-col items-center gap-[4rem]">
			<li v-for="link in links" :key="link">
				<NuxtLink to="" class="text-silver">{{ link }}</NuxtLink>
			</li>
		</ul>
		<div class="flex flex-col items-center gap-[4rem]">
			<NuxtLink to="" class="text-white py-[0.8rem]">Login</NuxtLink>
			<NuxtLink to="" class="text-white py-[0.8rem] px-[1.2rem] bg-forest-green rounded-[10rem]">Get started</NuxtLink>
		</div>
	</nav>
</template>

<style scoped>
.nav-desktop {
	border-bottom: 0.5px solid #3d3d3d;
	z-index: 51;
}

.nav-mobile {
	transform: translateX(-50%);
	z-index: 100;
}
</style>
