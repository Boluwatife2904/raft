<script setup lang="ts">
const features = [
	{
		icon: "document-duplicate",
		name: "Contactless Technology",
		description: "Our new cards come equipped with contactless technology, allowing you to make swift, secure payments with a simple tap.",
	},
	{ icon: "identification", name: "Personalization", description: "Customize your card to reflect your unique style. Choose from a range of designs that suit your personality." },
	{ icon: "lock-closed", name: "Enhanced Security", description: "Your peace of mind is our priority. Our cards feature advanced security measures to protect your transactions and data." },
];
</script>

<template>
	<section class="pt-[9.6rem] md:pt-[12rem] pb-[9.6rem] md:pb-[13.7rem] px-[2.4rem] md:px-[7.2rem]">
		<div class="container">
			<div class="flex flex-col gap-[9.2rem] md:gap-[11.8rem]">
				<div class="flex flex-col items-center text-center gap-[1.6rem] md:gap-[2.4rem]">
					<div class="flex flex-col items-center text-center gap-[1.6rem]">
						<span class="text-emerald uppercase text-[1.6rem] md:text-[1.8rem] font-medium">Introducing</span>
						<h3 class="text-white text-[3.6rem] md:text-[7.6rem] mx-auto max-w-[89.6rem]">Introducing RAFT's Next-Gen Cards</h3>
					</div>
					<p class="text-silver mx-auto md:text-[2rem] leading-[2.4rem] md:leading-[2.8rem] max-w-[66.8rem]">
						Discover RAFT's latest innovation – our new cards. Elevate your banking experience with cutting-edge features, security, and unprecedented convenience.
					</p>
				</div>
				<div class="flex flex-col gap-[5.7rem] md:gap-[8rem]">
					<div class="flex items-start justify-center min-h-[40rem]">
						<BaseIcon name="raft-card" />
					</div>
					<Features>
						<FeaturesItem v-for="feature in features" :key="feature.icon" :feature="feature"></FeaturesItem>
					</Features>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.features {
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
}
</style>
