/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#8E99A8',
					50: '#F8F9FA',
					100: '#E8EAED',
					200: '#D4D7DC',
					300: '#BFC4CA',
					400: '#A8B2BC',
					500: '#8E99A8',
					600: '#6B7885',
					700: '#515964',
					800: '#3A4149',
					900: '#252B32',
				},
				secondary: {
					DEFAULT: '#D4A647',
					50: '#FDF8F0',
					100: '#FAEDDB',
					200: '#F5DDBA',
					300: '#EFCD96',
					400: '#E5B75F',
					500: '#D4A647',
					600: '#B88B2F',
					700: '#967120',
					800: '#6E5217',
					900: '#4A3610',
				},
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
