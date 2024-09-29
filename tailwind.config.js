/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}" // Corrected the '>' to '/' here
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6100',  // Primary color
        secondary: '#fb9658',
        bgcolor:'#4b4e54', 
        textmain:"#073b4c", 
        bgdark: "#0a1128",
        bglight:"#e9d69e"
        // Add your secondary color hex code
      },
      fontFamily: {
        'poppins-thin': ['Poppins-Thin', 'sans-serif'],
        'poppins-extralight': ['Poppins-ExtraLight', 'sans-serif'],
        'poppins-light': ['Poppins-Light', 'sans-serif'],
        'poppins-regular': ['Poppins-Regular', 'sans-serif'],
        'poppins-medium': ['Poppins-Medium', 'sans-serif'],
        'poppins-semibold': ['Poppins-SemiBold', 'sans-serif'],
        'poppins-bold': ['Poppins-Bold', 'sans-serif'],
        'poppins-extrabold': ['Poppins-ExtraBold', 'sans-serif'],
        'poppins-black': ['Poppins-Black', 'sans-serif'],
        'poppins-extrabolditalic': ['Poppins-ExtraBoldItalic', 'sans-serif'],
        'poppins-mediumitalic': ['Poppins-MediumItalic', 'sans-serif'],
        'poppins-lightitalic': ['Poppins-LightItalic', 'sans-serif'],
        'poppins-italic': ['Poppins-Italic', 'sans-serif'],
        'poppins-semibolditalic': ['Poppins-SemiBoldItalic', 'sans-serif'],
        'poppins-bolditalic': ['Poppins-BoldItalic', 'sans-serif'],
        'poppins-extralightitalic': ['Poppins-ExtraLightItalic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
