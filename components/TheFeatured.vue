<script setup lang="ts">
const medias = [
	{ icon: "forbes", classes: "w-[12rem] h-[3.1rem] md:h-[3.2rem]" },
	{ icon: "cbnc", classes: "w-[6rem] h-[4.5rem] md:w-[8rem] md:h-[6rem]" },
	{ icon: "bloomberg", classes: "w-[10rem] h-[4rem] md:w-[12rem] md:h-[4.8rem]" },
	{ icon: "reuters", classes: "w-[10rem] h-[2.8rem] md:w-[12rem] md:h-[3.4rem]" },
	{ icon: "cnn", classes: "w-[10rem] h-[4.6rem]" },
];
</script>

<template>
	<section class="pb-[10rem] md:pb-[19.2rem]">
		<div class="container">
			<div class="flex flex-col items-center gap-[2.8rem] md:gap-[4.8rem] px-[2.4rem]">
				<p class="uppercase font-medium text-silver text-[1.6rem] md:text-[2rem]">Featured and seen in</p>
				<ul class="w-full max-w-[86rem] px-[2.4rem] flex items-center gap-[6rem] md:gap-[8rem] overflow-y-auto no-scrollbar">
					<li v-for="media in medias" :key="media.icon" class="shrink-0" :class="media.classes">
						<BaseIcon :name="media.icon" />
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
