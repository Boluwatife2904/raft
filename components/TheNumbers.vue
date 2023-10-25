<script setup lang="ts">
const numbers = [
	{ figure: "50+", text: "cities" },
	{ figure: "50,000+", text: "transactions" },
	{ figure: "3M+", text: "users" },
	{ figure: "5", text: "user rating" },
];
</script>

<template>
	<section class="px-[2.4rem] md:px-[7.2rem] py-[6rem] md:py-[10rem]">
		<div class="container">
			<ul class="flex justify-between">
				<li v-for="data in numbers" :key="data.text" class="flex items-center text-center flex-col gap-[1.6rem]">
					<h5 class="text-white font-semibold text-[2rem] md:text-[8rem]">{{ data.figure }}</h5>
					<p class="text-silver text-[1.2rem] md:text-[1.8rem] uppercase font-medium">{{ data.text }}</p>
				</li>
			</ul>
		</div>
	</section>
</template>

<style scoped></style>
