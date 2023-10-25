<script setup lang="ts">
interface Feature {
	icon: string;
	name: string;
	description: string;
}

interface Props {
	feature: Feature;
}

defineProps<Props>();
</script>

<template>
	<li class="flex flex-col gap-[1rem] max-w-[41.6rem]">
		<h6 class="text-white font-medium text-[2rem] md:text-[2.4rem] flex items-center gap-[0.8rem]">
			<BaseIcon :name="feature.icon" />
			{{ feature.name }}
		</h6>
		<p class="text-silver leading-[2.4rem]">{{ feature.description }}</p>
	</li>
</template>

<style scoped></style>
