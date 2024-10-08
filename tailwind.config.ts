import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors"
import "@nextui-org/react"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(accordion|button|modal|divider|ripple|spinner).js",
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: colors.white,
        gold: colors.amber,
      },
    },
  },
  plugins: [nextui()],
};
export default config;