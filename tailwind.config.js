/** @type {import('tailwindcss').Config} */

// const pallete = color => {
//   const h = `var(--color-${color}-h)`;
//   const s = `var(--color-${color}-s)`;
//   const l = `var(--color-${color}-l)`;

//   return {
//     DEFAULT: dynamicHsl(h, s, l),
//     100: dynamicHsl(h, s, `calc(${l} + 30%)`),
//     200: dynamicHsl(h, s, `calc(${l} + 24%)`),
//     300: dynamicHsl(h, s, `calc(${l} + 18%)`),
//     400: dynamicHsl(h, s, `calc(${l} + 12%)`),
//     500: dynamicHsl(h, s, `calc(${l} + 6%)`),
//     600: dynamicHsl(h, s, l),
//     700: dynamicHsl(h, s, `calc(${l} - 6%)`),
//     800: dynamicHsl(h, s, `calc(${l} - 12%)`),
//     900: dynamicHsl(h, s, `calc(${l} - 18%)`),
//   };
// };

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/modules/**/*.{js,ts,jsx,tsx}',
    './src/shared/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-1': 'hsl(0,0%,93.3%)',
        'gray-2': 'hsl(0,0%,92.9%)',
        'gray-3': 'hsl(0,0%,31%)',
        'black-1': 'hsl(240,0.9%,22.9%)',
        'blue-1': 'hsl(221.3,51.1%,18.4%)',
        'blue-2': 'hsl(206.2,63%,58.6%)',
        'blue-3': 'hsl(183.2,67.1%,48.8%)',
        'orange-1': 'hsl(15,83.5%,64.3%)',
        'orange-1-hover': 'hsl(15,60.5%,64.3%)',
        'green-1': 'hsl(100,35.3%,93.3%)',
        'red-1': 'hsl(300,23.5%,93.3%)',
        'sea-1': 'hsl(182,100%,39%)',
        'white-1': 'hsl(225,11%,93%)',
      },
    },
  },
  plugins: [],
};
