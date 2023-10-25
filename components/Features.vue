<script setup lang="ts"></script>

<template>
	<ul class="grid gap-y-[3.2rem] gap-x-[2.4rem] flex-wrap features">
		<slot />
	</ul>
</template>

<style lang="scss" scoped>
.features {
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
}
</style>
