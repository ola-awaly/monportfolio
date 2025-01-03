/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				customDark: '#010101',
				customLight: '#484848',
				textLight: '#f6f6f6',
			},
		},
	},
	plugins: [],
};
