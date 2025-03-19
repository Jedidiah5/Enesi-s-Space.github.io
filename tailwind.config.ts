import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-orange': '#FF6B6B',
        'custom-dark': '#1A1A1A',
        'custom-gold': '#FFD700',
        'custom-gold-dark': '#E6B800',
        'custom-blue': '#3A506B',
        'custom-blue-dark': '#1E3D58',
        'custom-gray': '#E0E0E0',
        'custom-gray-light': '#F5F5F5',
        'custom-purple': '#5D3A9B',
        'custom-purple-dark': '#6A0572',
      },
      fontFamily: {
        sans: ['var(--font-poppins)'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
