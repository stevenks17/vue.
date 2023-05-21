/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.ts',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      maxWidth: {
        'md': '600px',
      },
    },
  },
  plugins: [],
}

