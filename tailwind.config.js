/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    "./app/page.tsx",
    "./components/studioNavbar.tsx",
    "./components/logo.tsx",
    "./components/navbar.tsx",
    "./components/banner.tsx",
    "./components/blogList.tsx",

  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
