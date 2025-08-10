module.exports = {
    darkMode: 'class',
    content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
    ],
    plugins: [require('daisyui')],
    theme: {
      extend: {
        animation: {
          'slide-left': 'slideLeft 20s linear infinite',
        },
        keyframes: {
          slideLeft: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-50%)' },
          },
        },
        blur:{
          xs:'2px',
        },
        colors: {
          journalBg: '#D5B7AD',
        },
      },
    },
    plugins: [],
  }
  