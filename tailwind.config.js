module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0b1a30",
        secondary: "#1c3b6b",
        accent: "#4a90e2",
        "text-dark": "#333333",
        "text-light": "#f4f7f6",
        "bg-light": "#ffffff",
        "bg-alt": "#f8f9fa",
      },
      fontFamily: {
        heading: ['var(--font-playfair-display)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
