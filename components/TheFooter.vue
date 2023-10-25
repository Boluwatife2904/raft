<script setup lang="ts">
const footerLinks = [
	{
		title: "About us",
		links: [
			{ to: "", title: "Our company" },
			{ to: "", title: "Careers" },
			{ to: "", title: "Press kits" },
		],
	},
	{
		title: "Legal",
		links: [
			{ to: "", title: "Terms of use" },
			{ to: "", title: "Privacy policy" },
			{ to: "", title: "About us" },
		],
	},
	{
		title: "Support",
		links: [
			{ to: "", title: "Contact us" },
			{ to: "", title: "FAQ" },
		],
	},
];

const downloadLinks = [
	{ icon: "playstore", link: "#" },
	{ icon: "applestore", link: "#" },
];
</script>

<template>
	<footer>
		<div class="container">
			<div class="footer--top pb-[4rem] md:pb-[6rem] mb-[6rem] border-b border-solid border-mine-shaft">
				<AppLogo />
			</div>
			<div class="footer--bottom flex flex-col gap-[3.2rem] md:gap-[5.2rem]">
				<div class="flex items-start flex-wrap gap-[5.6rem] justify-between">
					<div class="footer__download max-w-fit flex gap-[1.2rem] rounded-[0.8rem] border border-dashed border-white py-[2rem] px-[1.6rem]">
						<BaseIcon name="qr" />
						<div class="flex flex-col gap-[1.6rem] max-w-[31.3rem]">
							<h6 class="text-white md:text-[2rem]">Scan to download App on the Playstore and Appstore.</h6>
							<ul class="flex gap-[1.2rem]">
								<li v-for="link in downloadLinks" :key="link.icon">
									<a :href="link.link" target="_blank" rel="noopener noreferrer">
										<BaseIcon :name="link.icon" />
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="footer__links flex flex-wrap gap-y-[4.8rem] gap-x-[6rem] md:gap-x-[5.2rem]">
						<div v-for="section in footerLinks" class="flex flex-col gap-[1.6rem] min-w-[14.1rem] md:min-w-[20rem]">
							<h6 class="text-white text-[2rem] font-medium">{{ section.title }}</h6>
							<ul class="flex flex-col gap-[1.2rem]">
								<li v-for="link in section.links">
									<NuxtLink to="/" class="text-[#efefef]">{{ link.title }}</NuxtLink>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="flex items-center justify-between">
					<div class="flex items-center gap-[0.8rem] md:gap-[1.8rem]">
						<span class="text-white text-[1.4rem] md:text-[2.4rem]">English (United Kingdom)</span>
						<span class="h-[1.6rem] w-[1.6rem] md:h-[2.4rem] md:w-[2.4rem]"><BaseIcon name="chevron-down" /></span>
					</div>
					<p class="flex gap-[0.4rem] text-[1.4rem] md:text-[1.6rem] items-center text-white">
						<span class="h-[1.6rem] w-[1.6rem] md:h-[2rem] md:w-[2rem]"><BaseIcon name="copyright" /></span>
						Raft Corp, LLC.
					</p>
				</div>
			</div>
		</div>
	</footer>
</template>

<style scoped></style>
