import type { Config } from "tailwindcss";

export default <Partial<Config>>{
	content: [],
	theme: {
		extend: {
			colors: {
				"cod-gray": "#070606",
				"forest-green": "#2B892E",
				emerald: "#48D64C",
				"mine-shaft": "#3D3D3D",
				silver: "#BDBDBD",
			},
		},
	},
	plugins: [],
};
