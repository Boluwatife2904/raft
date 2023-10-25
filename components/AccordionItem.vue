<script setup lang="ts">
interface Accordion {
	id: string;
	question: string;
	answer: string;
}

interface Props {
	accordion: Accordion;
	isActive?: boolean;
}

interface Emits {
	(event: "toggle-accordion", id: string): void;
}

const { isActive = false } = defineProps<Props>();
defineEmits<Emits>();

const start = (element: any) => {
	element.style.height = element.scrollHeight + "px";
};

const end = (element: any) => {
	element.style.height = "";
};
</script>

<template>
	<div class="accordion border-b border-solid border-mine-shaft pb-[1.4rem] md:pb-[2.2rem] cursor-pointer" :class="{ 'accordion--active': isActive }">
		<div class="accordion__header flex justify-between pb-[1.8rem]" @click="$emit('toggle-accordion', accordion.id)">
			<h4 class="text-white font-medium md:text-[2.4rem]">{{ accordion.question }}</h4>
			<button class="w-[2.4rem] h-[2.4rem] transition-all" :class="{ 'rotate-180': isActive }">
				<BaseIcon name="chevron-down" />
			</button>
		</div>
		<transition name="accordion" @enter="start" @after-enter="end" @before-leave="start" @after-leave="end">
			<div v-if="isActive" class="accordion__body">
				<p class="text-white md:max-w-[80%] leading-[3rem]">{{ accordion.answer }}</p>
			</div>
		</transition>
	</div>
</template>

<style></style>
