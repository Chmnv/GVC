import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // ── Surface system ─────────────────────────────────────────────
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        surface: {
          DEFAULT: "hsl(var(--surface) / <alpha-value>)",
          elevated: "hsl(var(--surface-elevated) / <alpha-value>)",
          overlay: "hsl(var(--surface-overlay) / <alpha-value>)",
        },
        border: {
          DEFAULT: "hsl(var(--border) / <alpha-value>)",
          subtle: "hsl(var(--border-subtle) / <alpha-value>)",
          strong: "hsl(var(--border-strong) / <alpha-value>)",
        },
        ring: "hsl(var(--ring) / <alpha-value>)",
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },

        // ── Brand / palette ────────────────────────────────────────────
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },
        nebula: {
          DEFAULT: "hsl(var(--nebula) / <alpha-value>)",
          foreground: "hsl(var(--nebula-foreground) / <alpha-value>)",
        },
        star: "hsl(var(--star) / <alpha-value>)",

        // ── Neon accents (volleyball-tech) ─────────────────────────────
        neon: {
          blue: "hsl(var(--neon-blue) / <alpha-value>)",
          cyan: "hsl(var(--neon-cyan) / <alpha-value>)",
          violet: "hsl(var(--neon-violet) / <alpha-value>)",
          magenta: "hsl(var(--neon-magenta) / <alpha-value>)",
          pink: "hsl(var(--neon-pink) / <alpha-value>)",
          lime: "hsl(var(--neon-lime) / <alpha-value>)",
        },

        // ── Semantic ───────────────────────────────────────────────────
        success: "hsl(var(--success) / <alpha-value>)",
        warning: "hsl(var(--warning) / <alpha-value>)",
        info: "hsl(var(--info) / <alpha-value>)",
        destructive: "hsl(var(--destructive) / <alpha-value>)",
      },

      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },

      // ── Typography scale with paired line-heights ────────────────────
      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1rem", letterSpacing: "0.02em" }],
        xs: ["0.75rem", { lineHeight: "1.125rem" }],
        sm: ["0.875rem", { lineHeight: "1.375rem" }],
        base: ["1rem", { lineHeight: "1.625rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.875rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem", letterSpacing: "-0.01em" }],
        "3xl": [
          "1.875rem",
          { lineHeight: "2.375rem", letterSpacing: "-0.015em" },
        ],
        "4xl": ["2.25rem", { lineHeight: "2.5rem", letterSpacing: "-0.02em" }],
        "5xl": ["3rem", { lineHeight: "3.25rem", letterSpacing: "-0.025em" }],
        "6xl": ["3.75rem", { lineHeight: "4rem", letterSpacing: "-0.03em" }],
        "7xl": [
          "4.5rem",
          { lineHeight: "4.75rem", letterSpacing: "-0.035em" },
        ],
        "8xl": ["6rem", { lineHeight: "6.25rem", letterSpacing: "-0.04em" }],
      },

      // ── Spacing extensions for sections, gutters ─────────────────────
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
        section: "clamp(4rem, 8vw, 7.5rem)",
        gutter: "clamp(1rem, 4vw, 2.5rem)",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },

      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, hsl(var(--border) / 0.4) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border) / 0.4) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse at top, hsl(var(--primary) / 0.25), transparent 60%)",
        "nebula-glow":
          "conic-gradient(from 180deg at 50% 50%, hsl(var(--primary) / 0.3) 0deg, hsl(var(--nebula) / 0.3) 120deg, hsl(var(--star) / 0.25) 240deg, hsl(var(--primary) / 0.3) 360deg)",
        "holographic":
          "linear-gradient(110deg, hsl(var(--neon-cyan) / 0.18), hsl(var(--neon-violet) / 0.22) 45%, hsl(var(--neon-magenta) / 0.18) 80%)",
        "scan-lines":
          "repeating-linear-gradient(to bottom, hsl(var(--foreground) / 0.06) 0px, hsl(var(--foreground) / 0.06) 1px, transparent 1px, transparent 4px)",
      },

      boxShadow: {
        glow: "0 0 40px -10px hsl(var(--primary) / 0.55)",
        "glow-strong":
          "0 0 60px -10px hsl(var(--primary) / 0.7), 0 0 120px -40px hsl(var(--nebula) / 0.5)",
        "glow-cyan": "0 0 36px -6px hsl(var(--neon-cyan) / 0.65)",
        "glow-violet": "0 0 36px -6px hsl(var(--neon-violet) / 0.7)",
        "glow-magenta": "0 0 36px -6px hsl(var(--neon-magenta) / 0.65)",
        "glow-lime": "0 0 32px -6px hsl(var(--neon-lime) / 0.6)",
        "inner-border":
          "inset 0 0 0 1px hsl(var(--border) / 0.6), 0 1px 0 0 hsl(var(--foreground) / 0.04)",
        "inner-highlight":
          "inset 0 1px 0 0 hsl(var(--foreground) / 0.08), inset 0 -1px 0 0 hsl(var(--background) / 0.6)",
        elevated:
          "0 12px 40px -12px hsl(var(--background) / 0.7), 0 4px 12px -4px hsl(var(--primary) / 0.15)",
      },

      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        "glow-pulse": {
          "0%, 100%": {
            boxShadow:
              "0 0 24px -6px hsl(var(--primary) / 0.5), 0 0 0 0 hsl(var(--primary) / 0.0)",
          },
          "50%": {
            boxShadow:
              "0 0 48px -4px hsl(var(--primary) / 0.85), 0 0 0 4px hsl(var(--primary) / 0.08)",
          },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },

      animation: {
        "fade-in": "fade-in 0.5s ease-out both",
        "fade-up": "fade-up 0.7s ease-out both",
        shimmer: "shimmer 2.5s linear infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 18s linear infinite",
        "glow-pulse": "glow-pulse 2.6s ease-in-out infinite",
        "gradient-shift": "gradient-shift 6s ease-in-out infinite",
        "scan-line": "scan-line 4s linear infinite",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
        snap: "cubic-bezier(0.16, 1, 0.3, 1)",
        bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },

      transitionDuration: {
        250: "250ms",
        400: "400ms",
        600: "600ms",
        800: "800ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
