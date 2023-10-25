<script setup lang="ts">
const faqs = [
	{
		id: "1",
		question: "How do I create an account with RAFT?",
		answer: "To create a RAFT account, visit their website or mobile app, provide your personal information, set up login credentials, verify your identity if required, agree to the terms, enable two-factor authentication for security, fund your account, and start using their services.",
	},
	{
		id: "2",
		question: "How does RAFT ensure the security of my financial data?",
		answer: "RAFT takes data security and customer privacy very seriously. We employ state-of-the-art encryption and security protocols to protect customer data. We regularly conduct security audits and invest in cybersecurity measures to ensure that customer information remains safe and confidential.",
	},
	{
		id: "3",
		question: "What types of transactions can I perform with RAFT?",
		answer: "With RAFT, you can engage in a diverse range of financial transactions, including payments, transfers, investments, loans, savings plans, financial education, and efficient account management.",
	},
	{
		id: "4",
		question: "What benefits does RAFT offer for wealth management?",
		answer: "RAFT provides several benefits for wealth management, including personalized investment strategies, portfolio diversification, and access to financial experts to help you achieve your long-term financial goals.",
	},
];

const activeFAQ = ref<null | string>(null);

const toggleAccordion = (id: string) => {
	if (id === activeFAQ.value) return (activeFAQ.value = null);
	activeFAQ.value = id;
};
</script>

<template>
	<section>
		<div class="container">
			<div class="flex flex-col gap-[7.45rem] md:gap-[10rem]">
				<h3 class="text-[6rem] lg:text-[9.6rem] text-white max-w-[89.6rem]">Frequently asked questions</h3>
				<div class="flex flex-col gap-[2.4rem]">
					<AccordionItem v-for="faq in faqs" :key="faq.id" :accordion="faq" :is-active="activeFAQ === faq.id" @toggle-accordion="toggleAccordion" />
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
