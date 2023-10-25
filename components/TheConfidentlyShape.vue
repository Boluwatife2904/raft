<script setup lang="ts">
const cards = [
	{ icon: "money-send", heading: "Spend better", description: "Set and achieve financial goals with ease, automate your savings, and watch your money grow without the stress." },
	{ icon: "wallet-minus", heading: "Invest better", description: "Set and achieve financial goals with ease, automate your savings, and watch your money grow without the stress." },
];
</script>

<template>
	<section class="px-[2.4rem] md:px-[7.2rem] pt-[9.6rem] md:pt-[12.4rem]">
		<div class="container">
			<div class="flex flex-col gap-[8rem] md:gap-[10rem]">
				<div class="flex flex-col gap-[2.4rem]">
					<h1 class="text-white text-[3.6rem] md:text-[7.6rem] max-w-[46rem] md:max-w-[89.6rem]">Confidently Shape Your Financial Future</h1>
					<p class="md:text-[2rem] leading-[2.4rem] text-[#989898] md:text-silver md:leading-[2.8rem] max-w-[67rem]">
						At RAFT, we empower you to confidently shape your financial future. Our modern approach simplifies saving and investing, making it easier than ever.
					</p>
				</div>
				<div class="grid lg:grid-cols-2 gap-y-[3.2rem] gap-x-[5.6rem]">
					<div v-for="card in cards" :key="card.icon" class="shape-card pt-[2.4rem] md:pt-[5.2rem] pb-[2.75rem] md:pb-[7.8rem] bg-[#131313] rounded-[1.2rem] flex flex-col gap-[2.8rem] md:gap-[4.7rem]">
						<div class="flex flex-col gap-[1.6rem] px-[2.4rem] md:px-[5.2rem]">
							<h6 class="text-white text-[2.4rem] md:text-[3.2rem] leading-[2.8rem] font-medium">{{ card.heading }}</h6>
							<p class="text-silver md:text-[2rem] leading-[2.4rem] md:leading-[2.8rem]">{{ card.description }}</p>
						</div>
						<div class="icon bg-no-repeat bg-cover bg-center h-[24.5rem] md:h-[39.3rem] flex items-center justify-center relativce">
							<span class="block h-[12rem] md:h-[20rem] w-[12rem] md:w-[20rem]">
								<BaseIcon :name="card.icon" />
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.shape-card {
	border: 1px solid var(--stroke, rgba(255, 255, 255, 0.04));

	.icon {
		background-image: url("@/assets/images/shape-bg.png");
	}
}
</style>
