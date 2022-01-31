module.exports = {
	mode: 'jit',
	content: [
		'./components/**/*.{vue,js}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
	],
	darkMode: true, // or 'media' or 'class'
	theme: {
		extend: {},
		fontFamily: {
			sans: ['Poppins', 'sans-serif'],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}