import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ['"Libre Baskerville"', 'serif'],
        body: ['"Montserrat"', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Flips via CSS vars: brown in light, cream in dark
        ink: {
          DEFAULT: "hsl(var(--color-ink))",
          light: "hsl(var(--color-ink-light))",
          surface: "hsl(var(--color-ink-surface))",
        },
        // Flips via CSS vars: cream in light, dark brown in dark
        parchment: {
          DEFAULT: "hsl(var(--color-parchment))",
          deep: "hsl(var(--color-parchment-deep))",
        },
        // Card surface — near-white in light, dark brown in dark
        surface: "hsl(var(--color-surface))",
        // Warm teal — bridges earthy browns and fresh water
        // Shifted from cold sky blue toward blue-green so it reads
        // as natural spring water rather than clinical/pharma blue
        water: {
          DEFAULT: "#4E9FB3",
          light: "#7BBFC8",
        },
        gold: {
          DEFAULT: "#C9A84C",
          bright: "#E8C96A",
        },
        cream: "#F0EBE0",
        sand: "#C1A37F",
        blush: "#D4A896",
        brown: {
          DEFAULT: "#493423",
          accent: "#493423",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scroll-line": {
          "0%, 100%": { height: "0px", opacity: "0" },
          "50%": { height: "40px", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "scroll-line": "scroll-line 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
