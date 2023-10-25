<script setup lang="ts"></script>

<template>
	<section class="pb-[10rem] md:pb-[18rem] px-[2.4rem] md:px-[7.2rem]">
		<div class="container">
			<div class="flex flex-col gap-[10.8rem]">
				<div class="flex flex-col items-center text-center gap-[2.4rem]">
					<h3 class="text-white text-[3.6rem] md:text-[7.6rem] max-w-[89.6rem]">Elevate Your Financial Journey with RAFT</h3>
					<p class="text-[#989898] md:text-[2rem] leading-[2.4rem] md:leading-[2.8rem] max-w-[66.8rem]">
						RAFT offers a world of financial possibilities. From investments to payments, we've got you covered. Join us and unlock your financial potential today.
					</p>
				</div>
				<div class="flex flex-col gap-[3.2rem]">
					<div class="elevate--top grid gap-[3.3rem]">
						<SeamlessPayments />
						<SmartInvesting />
					</div>
					<div class="elevate--bottom grid gap-[3.3rem]">
						<WealthManagement />
						<FinancialPlanning />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.elevate--top {
	@media screen and (min-width: 992px) {
		grid-template-columns: 63.6% 34.3%;
	}
}

.elevate--bottom {
	@media screen and (min-width: 992px) {
		grid-template-columns: 34.3% 63.6%;
	}
}
</style>
