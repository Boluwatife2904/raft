// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	app: {
		head: {
			htmlAttrs: { lang: "en" },
			title: "Raft",
			charset: "UTF-8",
			viewport: "width=device-width, initial-scale=1",
			meta: [
				{ hid: "theme-color", name: "theme-color", content: "#070606" },
				{ hid: "description", name: "description", content: "Experience the future of banking with RAFT. We're here to empower your financial journey." },
				{ hid: "og:description", name: "og:description", content: "Experience the future of banking with RAFT. We're here to empower your financial journey." },
				{ hid: "twitter:description", name: "twitter:description", content: "Experience the future of banking with RAFT. We're here to empower your financial journey." },
				{ hid: "og:title", name: "og:title", content: "Raft" },
				{ hid: "twitter:title", name: "twitter:title", content: "Raft" },
				{ hid: "og:site_name", name: "og:site_name", content: "Raft" },
				{ hid: "og:url", name: "og:url", content: "https://raft-six.vercel.app/" },
				{ hid: "og:type", name: "og:type", content: "website" },
				{ hid: "og:image", name: "og:image", content: "https://res.cloudinary.com/juwon-tech/image/upload/v1698228041/Desktop_-_2_ccty2y.png" },
				{ hid: "twitter:image", name: "twitter:image", content: "https://res.cloudinary.com/juwon-tech/image/upload/v1698228041/Desktop_-_2_ccty2y.png" },
				{ hid: "twitter:card", name: "twitter:card", content: "summary_large_image" },
			],
			link: [{ rel: "icon", type: "image/png", href: "/favicon.ico" }],
		},
	},
	modules: ["@nuxtjs/tailwindcss"],
	devServer: {
		port: 3001,
	},
	vite: {
		vue: {
			script: {
				defineModel: true,
				propsDestructure: true,
			},
		},
	},
	css: ["@/assets/scss/index.scss", "@/assets/scss/font.scss"],
	tailwindcss: {
		configPath: "~/tailwind.config.ts",
	},
	build: {
		transpile: ["gsap"],
	},
});
