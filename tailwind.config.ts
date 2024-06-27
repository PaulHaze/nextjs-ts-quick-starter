import type { Config } from 'tailwindcss';
import typographyPlugin from '@tailwindcss/typography';
import daisyui from 'daisyui';

import themes from 'daisyui/src/theming/themes';

import plugin from 'tailwindcss/plugin';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    screens: {
      xs: '431px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      mxs: { max: '431px' },
      msm: { max: '640px' },
      mmd: { max: '768px' },
      mlg: { max: '1024px' },
      mxl: { max: '1280px' },
      m2xl: { max: '1536px' },
      xsm: { min: '431px' },
      smm: { min: '640px' },
      mdm: { min: '768px' },
      lgm: { min: '1024px' },
      xlm: { min: '1280px' },
      '2xlm': { min: '1536px' },
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        'primary-muted': 'oklch(var(--primary-muted-oklch) / <alpha-value>)',
      },
      minWidth: {
        xs: '431px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      maxWidth: {
        xs: '431px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      spacing: {
        sm: '1rem',
        md: '2rem',
        lg: '4rem',
        xl: '8rem',
        '2xl': '16rem',
        '4xl': '32rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    typographyPlugin,
    daisyui,
    plugin(({ addUtilities, matchUtilities, theme }) => {
      addUtilities({
        '.flex-center': {
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'center',
        },
        '.bb': {
          borderWidth: '1px',
          'border-color': 'rgb(220, 38, 38)',
          '@media (min-width: 431px)': {
            'border-color': '#64D267',
          },
          '@media (min-width: 640px)': {
            'border-color': '#F5BD4F',
          },
          '@media (min-width: 768px)': {
            'border-color': 'rgb(81, 142, 227)',
          },
          '@media (min-width: 1024px)': {
            'border-color': 'rgb(220, 38, 38)',
          },
          '@media (min-width: 1280px)': {
            'border-color': 'rgb(37, 99, 235)',
          },
        },
        '.bb2': {
          borderWidth: '1px',
          'border-color': '#3b82f6',

          '@media (min-width: 431px)': {
            'border-color': '#d946ef',
          },
          '@media (min-width: 640px)': {
            'border-color': '#84cc16',
          },
          '@media (min-width: 768px)': {
            'border-color': '#ef4444',
          },
          '@media (min-width: 1024px)': {
            'border-color': '#64748b',
          },
          '@media (min-width: 1280px)': {
            'border-color': '#1e3a8a',
          },
        },
      });
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value,
            };
          },
        },
        {
          values: theme('transitionDelay'),
        },
      );
    }),
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...themes.light,
          '--primary-muted': '338 83% 66%', // this is here just as an example of HSL
          '--primary-muted-oklch': '62.49% 0.1667 272.93', // this is here just as an example of OKLCH
          neutral: '#A7ADBA',
          'neutral-content': '#2d343f',
          // add individual colours here to customize theme
          /* 
					*EXAMPLE - ESSENTIAL
					"primary": "#a991f7",
          "secondary": "#f6d860",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff",

					*EXAMPLE - OPTIONAL
					* These are set automatically based on the colours chosen above
					* But they can be overriden
					"primary-content": "#d0e3ff", - Colour of text in 'Primary'
					"secondary-content": "#0a0900", - Colour of text in 'Secondary'
					"accent-content": "#00050d",- Colour of text in 'Accent'
					"neutral-content": "#d2cdd2", - Colour of text in 'Neutral
					"base-200": "#dbdbdb", - Slightly darker shade of base-100
					"base-300": "#bbbbbb", - Even darker shade of base-100
					"base-content": "#161616", - Contrasting colour for text on base-100

					* Additional colours to be added if needed
					"info": "#00b1ff",
					"info-content": "#000c16",
					"success": "#85ee00",
					"success-content": "#061400",
					"warning": "#c28700",
					"warning-content": "#0e0600",
					"error": "#ff768e",
					"error-content": "#160507",


					* Additional CSS variables used
          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs */
        },
      },
      {
        dark: {
          ...themes.dark,
          '--primary-muted': '38 83% 66%',
          '--primary-muted-oklch': '48.11% 0.1667 272.93',
          neutral: '#2d343f',
          'neutral-content': '#A7ADBA',
          // add individual colours here to customize theme
        },
      },
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"],
    darkTheme: 'dark', // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ':root', // The element that receives theme color CSS variables
  },
} satisfies Config;
