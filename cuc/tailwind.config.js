
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D16327', 
        },
        secondary: {
          DEFAULT: '#0F1944', 
        },
        accent: {
          DEFAULT: '#C85B2F', 
        },
        background: {
          DEFAULT: '#FFFFFF', 
        },
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'], 
      },
      spacing: {
        'custom-gap': '1.5rem', 
      },
    },
  },
  plugins: [],
};
