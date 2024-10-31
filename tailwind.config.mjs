import _default from 'astro/runtime/client/idle.prebuilt.js';

import _defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				'myFont':['"myFont"', ..._defaultTheme.fontFamily.sans],
			}
		},
	},
	plugins: [],
}


//yoav alejandro ronquillo cruz
//22 years
//22/05/2002
//mexicano