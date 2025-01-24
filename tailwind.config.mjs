module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // For App Router
    './pages/**/*.{js,ts,jsx,tsx}', // For Pages Router
    './components/**/*.{js,ts,jsx,tsx}', // For Components
  ],
  theme: {
    extend: {
      colors: {
        parchment: '#031616', // Background color
        porpoise: '#161414', // Header, footer, and container background
        irisII: '#D9D9D9', // Light text color
        chartreuse: '#F7FDE1', // Hover accent color
        accent: '#2D2D2D', // Link and text color
      },
      fontFamily: {
        sans: ['Helvetica Neue Light', 'Arial', 'sans-serif'], // Clean typography
      },
    },
  },
  plugins: [],
};
