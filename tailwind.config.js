/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,ts,tsx,html,js}"],
  theme: {
    fontFamily: {
      primary: 'Open Sans',
      secondary: 'Montserrat',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1170px',
    },
    extend: {
      colors: {
        primary: '#FFD700', // Darker Yellow
        secondary: '#666666', // Dark color
        background: '#ffffff', // White background
        accent: {
          primary: '#FFF300',
          primary_hover: '#DFD500',
          secondary: '#F063BB',
          secondary_hover: '#E350A9',
          tertiary: '#68C9BA',
        },
      },
    },
  },
  plugins: [],
}
