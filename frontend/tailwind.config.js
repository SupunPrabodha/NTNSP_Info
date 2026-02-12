/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "hsl(var(--base))",
        surface: "hsl(var(--surface))",
        primary: "hsl(var(--primary))",
        primaryForeground: "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        accent: "hsl(var(--accent))",
        muted: "hsl(var(--muted))",
        border: "hsl(var(--border))",
      },
      boxShadow: {
        soft: "0 12px 40px -20px hsl(var(--primary) / 0.5)",
        glow: "0 0 30px -5px hsl(var(--accent) / 0.4)",
        neon: "0 0 20px -2px hsl(var(--primary) / 0.6)",
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
