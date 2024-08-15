/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
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

      fontSize: {
        'xs-fluid': 'clamp(0.75rem, 1vw, 0.875rem)', // Extra small, scaling between 0.75rem and 0.875rem
        'sm-fluid': 'clamp(1rem, 2vw, 1rem)', // Small, scaling between 0.875rem and 1rem
        'base-fluid': 'clamp(1rem, 2.5vw, 1.125rem)', // Base, scaling between 1rem and 1.125rem
        'lg-fluid': 'clamp(1.125rem, 3vw, 1.25rem)', // Large, scaling between 1.125rem and 1.25rem
        'xl-fluid': 'clamp(1.25rem, 3.5vw, 1.5rem)', // Extra large, scaling between 1.25rem and 1.5rem
        '2xl-fluid': 'clamp(1.5rem, 4vw, 2rem)', // 2X large, scaling between 1.5rem and 2rem
        '3xl-fluid': 'clamp(1.875rem, 4.5vw, 2.25rem)', // 3X large, scaling between 1.875rem and 2.25rem
        '4xl-fluid': 'clamp(2rem, 5vw, 2.8rem)', // 4X large, scaling between 2.25rem and 3rem
        '5xl-fluid': 'clamp(2rem, 6vw, 3.2rem)', // 5X large, scaling between 3rem and 4rem
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
        text: {
          DEFAULT: "hsl(var(--muted-foreground))",
          foreground: "hsl(var(--muted-foreground))",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
})