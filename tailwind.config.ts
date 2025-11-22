import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ouberg: {
          50: "#f2f9ff",
          100: "#e6f2ff",
          200: "#bfdcff",
          300: "#80bbff",
          400: "#3396ff",
          500: "#0075ff",
          600: "#005ee6",
          700: "#0046b3",
          800: "#003080",
          900: "#001a4d"
        }
      },
      fontFamily: {
        sans: ["var(--font-sora)"]
      }
    }
  },
  plugins: []
};

export default config;
