<script setup lang="ts">
interface Props {
	size?: string; // 'small', 'large'
}

const { size = "large" } = defineProps<Props>();
</script>

<template>
	<NuxtLink to="/" class="flex items-center gap-[0.4rem]">
		<span class="shrink-0" :class="[size === 'large' ? 'h-[7.2rem] w-[7.2rem] md:h-[12rem] md:w-[12rem]' : 'h-[2.4rem] w-[2.4rem]']">
			<BaseIcon name="logo" />
		</span>
		<span class="text-white" :class="[size === 'large' ? 'text-[7.2rem] md:text-[12.8rem]' : 'text-[2.4rem]']">Raft</span>
	</NuxtLink>
</template>

<style scoped></style>
