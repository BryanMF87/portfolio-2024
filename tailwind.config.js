/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'instagram-purple': '#833AB4',
        'instagram-red': '#FD1D1D',
        'instagram-yellow': '#FBBF24',
        'facebook-blue': '#1877F2',
        'linkedin-blue': '#0A66C2',
        'after-effects': '#00D8FF',
        'blender': '#F57900',
        'premiere-pro': '#2A56C6',
        'photoshop': '#26C9FF',
        'illustrator': '#FF7C00',
      }
    },
  },
  plugins: [],
}
