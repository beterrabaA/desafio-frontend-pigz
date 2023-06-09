/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Poppins', 'Bold','sans-serif'],
      },
      colors: {
        black: {
          50: '#000000',
          67: '#333333'
        },
        orange: {
          50: '#FF881F',
          150: '#FA641E',
          200: '#FF671F',
        },
        gray: {
          50: '#FAFAFA',
          75: '#F0F0F0',
          87: '#999999',
        },
        white: {
          50: '#FFFFFF',
          100: '#00000000',
        }
      }
    },
  },
  plugins: [],
}
