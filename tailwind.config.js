/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.html", "./src/**/{*.js,*.jsx,*.ts,*.tsx}"],
	// darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			maxWidth: {
				"8xl": "90rem",
				"9xl": "100rem",
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@headlessui/tailwindcss")({ prefix: "ui" })],
};
