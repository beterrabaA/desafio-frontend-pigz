/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        '5xl': '4.5rem',
        '6xl': '5.5rem',
      },
      fontFamily: {
        sans: 'var(--font-poppins)',
      },
      fontSize: {
        '2xs': '0.625rem',
        '4xlb': '2.75rem',
      },
      colors: {
        black: {
          50: '#000000',
          67: '#333333',
        },
        orange: {
          50: '#FF881F',
          150: '#FA641E',
          200: '#FF671F',
        },
        gray: {
          50: '#FAFAFA',
          67: '#CCCCCC',
          70: '#666666',
          75: '#F0F0F0',
          80: '#676767',
          87: '#999999',
        },
        white: {
          50: '#FFFFFF',
          60: '#F0F0F0',
          100: '#00000000',
        },
      },
      height: {
        100: '25rem',
        120: '30rem',
        140: '35rem',
      },
    },
  },
  plugins: [],
}
