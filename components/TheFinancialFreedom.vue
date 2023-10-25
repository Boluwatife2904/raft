<script setup lang="ts">
const features = [
	{
		icon: "banknotes",
		name: "No minimum balance fees",
		description: "Say goodbye to minimum balance fees. Your account, your balance—no hidden charges",
	},
	{ icon: "circle-stack", name: "No monthly fees", description: "Bank with us without worrying about monthly fees. Keep more of your money where it belongs—in your account" },
	{ icon: "arrow-right-left", name: "No bank transfer fees", description: "Seamlessly transfer funds without the extra cost. Send and receive money with zero bank transfer fees." },
];
</script>

<template>
	<section class="pb-[9.6rem] md:pb-[13.2rem] px-[2.4rem] md:px-[7.2rem]">
		<div class="container">
			<div class="flex flex-col gap-[8rem] md:gap-[12.4rem]">
				<div class="flex flex-col gap-[2.4rem] text-center items-center">
					<h3 class="text-white text-[3.6rem] md:text-[7.6rem] max-w-[89.6rem]">Your Financial Freedom, Your Way</h3>
					<p class="text-silver md:text-[#989898] md:text-[2rem] leading-[2.4rem] md:leading-[2.8rem] max-w-[66.8rem]">
						We believe that managing your finances should be effortless and cost-effective. That's why we offer you the freedom you deserve
					</p>
				</div>
				<div class="flex flex-col gap-[5.6rem] md:gap-[8rem]">
					<div>
						<img src="/images/financial-freedom.webp" class="hidden md:block h-auto max-w-full" alt="image of people smilling" />
						<img src="/images/financial-freedom-mobile.webp" class="block md:hidden h-auto max-w-full" alt="image of people smilling" />
					</div>
					<Features>
						<FeaturesItem v-for="feature in features" :key="feature.icon" :feature="feature"></FeaturesItem>
					</Features>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
