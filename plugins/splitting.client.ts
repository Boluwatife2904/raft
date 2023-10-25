import Splitting from "splitting";

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.provide("splitting", Splitting);
});
