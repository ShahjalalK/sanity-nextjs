/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    "./pages/index.jsx",
    "./pages/blog/[slug].jsx",
    "./components/studioNavbar.jsx",
    "./components/navbar.jsx",
    "./components/myportablecomponents.jsx",

  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
