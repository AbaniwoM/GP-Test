/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      'spxx': {'min': '320px', 'max': '320px'},

      'spxxx': {'min': '375px', 'max': '375px'},

      'sp': {'min': '360px', 'max': '360px'},

      'spx': {'min': '428px', 'max': '428px'}
    },
  },
  plugins: [],
}



