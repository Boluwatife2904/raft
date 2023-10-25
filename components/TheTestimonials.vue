<script setup lang="ts">
const testimonials = [
	{
		message:
			"RAFT has transformed my approach to finance. Their smart investing options have helped me grow my wealth, and their user-friendly platform makes managing my money a breeze. I've never felt more confident about my financial future.",
		user: { name: "Robert Fox", image: "/images/testimonial-1.png" },
		id: "1",
	},
	{
		message:
			"I can't express how grateful I am to RAFT. Their wealth management services have been a game-changer for my family's financial security. The expert guidance and personalized strategies have given us peace of mind, knowing that our future is in capable hands.",
		user: { name: "Cameron Williamson", image: "/images/testimonial-2.png" },
		id: "2",
	},
	{
		message:
			"RAFT's financial planning services have been a lifeline for me. I always struggled with managing my money, but their team crafted a tailored plan that addressed my goals and concerns. It's been a game-changer in achieving my financial dreams",
		user: { name: "Esther Howard", image: "/images/testimonial-3.png" },
		id: "3",
	},
];

const scrollButtons = ["left", "right"];

const testimonialsContainer = ref(null);

const scrollTestimonialsSection = (direction: string) => {
	if (direction === "left") testimonialsContainer.value.scrollLeft -= 250;
	else testimonialsContainer.value.scrollLeft += 250;
};
</script>

<template>
	<div class="bg-emerald py-[3.2rem] md:py-[10rem] px-[2.4rem] md:px-[7.2rem]">
		<div class="container">
			<div class="flex flex-col gap-[6.4rem] md:gap-[10.4rem]">
				<h4 class="text-center text-cod-gray text-[3.2rem] md:text-[6rem] lg:text-[7.6rem] max-w-[77.6rem] mx-auto">Join over 3 million members</h4>
				<div class="flex flex-col gap-[4rem]">
					<ul ref="testimonialsContainer" class="flex gap-[2.4rem] overflow-y-scroll no-scrollbar scroll-smooth">
						<li
							v-for="testimonial in testimonials"
							:key="testimonial.id"
							class="w-[27.8rem] lg:w-[35.2rem] shrink-0 py-[2.4rem] px-[3.2rem] md:border-l-2 md:border-solid md:border-cod-gray flex flex-col gap-[2.4rem]">
							<p class="text-[#292929] lg:text-[2.4rem] leading-[2.8rem] lg:leading-[3.2rem]">{{ testimonial.message }}</p>
							<div class="mt-auto flex items-center justify-between">
								<div class="flex flex-col gap-[0.4rem] md:gap-[0.8rem]">
									<h6 class="text-cod-gray text-[2rem] lg:text-[2.4rem] lg:leading-[2.4rem] font-medium">{{ testimonial.user.name }}</h6>
									<p class="text-[#292929] text-[1.4rem]">Happy RAFT User</p>
								</div>
								<img class="h-[4rem] lg:h-[8rem] w-[4rem] lg:w-[8rem] object-cover" :src="testimonial.user.image" :alt="`${testimonial.user.name} image`" />
							</div>
						</li>
					</ul>
					<div class="flex gap-[1.6rem] justify-end">
						<button
							v-for="button in scrollButtons"
							:key="button"
							class="w-[4rem] lg:w-[6rem] h-[4rem] lg:h-[6rem] rounded-full flex items-center justify-center bg-white border border-solid border-black"
							@click="scrollTestimonialsSection(button)">
							<span class="w-[1.6rem] lg:w-[2.4rem] h-[1.6rem] lg:h-[2.4rem]"><BaseIcon :name="`arrow-${button}`" /></span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
