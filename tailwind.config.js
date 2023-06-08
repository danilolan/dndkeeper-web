/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xxs: "180px",
      xs: "320px",
      xsl: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    colors: {
      primary: "#d72334",
      white: {
        100: "#f5f5f5",
        200: "#ededed",
        300: "#c0c0c0",
        400: "d3d3d3",
      },
      black: {
        500: "#34353e",
        600: "#27282f",
        700: "#282a2e",
        800: "#1e1f23",
        900: "#17181c",
      },
      bordo: {
        400: "#d72334",
        500: "#b91324",
        600: "#821325",
        700: "#571623",
        900: "#4b0f21",
      },
      creme: {
        300: "#fffdd0",
        400: "#faebd7",
        500: "#fffff0",
        600: "#fffaf4",
        700: "#ffdead",
        800: "#f4a460",
      },
      green: {
        700: "#597561",
        800: "#228b22",
        900: "#004225",
      },
      brown: {
        800: "#8b4513",
        900: "#654321",
      },
      gold: {
        200: "#ecc83b",
        300: "#e59628",
        400: "#cf581c",
      },

    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary-disabled': 'linear-gradient(125.94deg, #D72334 5%, #821325 31%)'
      },
      gradientColorStops: {
        'primary': '#D72334 37.91%, #821325 104.64%',
      },
    },
  },
  plugins: [],
}
