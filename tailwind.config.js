/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				poppins: "Poppins , sans-serif",
				lilita: "Lilita One, sans-serif",
				roboto: "Roboto, sans-serif",
			},
			colors: {
				skill: "#58d3c0",
				skillPercentage: "#053967",
				projectSec: "#f5faff",
				footer: "#171921",
				color1: "rgb(245 136 136)",
			},
			height: {
				section: "calc( 100vh + 1rem)",
				ul: "45rem",
			},
			width: {
				projectCard: "28rem",
			},
			transitionDuration: {
				2000: "2000ms",
			},
			aspectRatio: {
				"4/3": "4 / 3",
				"6/4": "6 / 4",
			},
		},
		screens: {
			sm: "330px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
		minWidth: {
			note: "20rem",
			projectCard: "28rem",
		},
	},
	plugins: [],
};
