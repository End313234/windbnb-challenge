const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
                mulish: ["Mulish", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
