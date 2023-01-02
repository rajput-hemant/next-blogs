/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			oswald: ["Oswald", "Roboto", "sans-serif"],
			roboto: ["Roboto", "sans-serif"],
		},
		extend: {},
	},
	plugins: [],
};
