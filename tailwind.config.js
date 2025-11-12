/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{ts,tsx,jsx,js,mdx}",
    "./src/components/**/*.{ts,tsx,jsx,js,mdx}",
    "./node_modules/@shadcn/ui/dist/**/*.js",
  ],
  theme: {
    extend: {
      borderRadius: {
        xl: "1rem",
      },
    },
  },
  plugins: [],
};
