/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
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
        'xl': '1200px',
      },
      colors: {
        'vue-green': '#42b883',
      },
    },
  },
  plugins: [],
}

