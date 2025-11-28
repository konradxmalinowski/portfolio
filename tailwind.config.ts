import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // Add your custom colors, fonts, animations etc.
    },
  },
  plugins: [],
} satisfies Config
