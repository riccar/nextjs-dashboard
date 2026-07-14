import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Semantic design tokens backed by the CSS variables in app/ui/global.css.
      // Values stay as variables so runtime theming (e.g. a future light mode)
      // keeps working; these names just give them first-class Tailwind support.
      colors: {
        surface: {
          DEFAULT: 'var(--bg-color)',
          light: 'var(--bg-color-light)',
          lighter: 'var(--bg-color-lighter)',
        },
        content: {
          // rgb channels so opacity modifiers work, e.g. text-content/40
          DEFAULT: 'rgb(var(--text-color-rgb) / <alpha-value>)',
          light: 'var(--text-color-light)',
          accent: 'var(--text-accent-color)',
        },
        accent: 'var(--accent-color)',
        ok: 'var(--ok-color)',
        warning: 'var(--warning-color)',
        error: 'var(--error-color)',
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      keyframes: {
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
      },
    },
  },
  plugins: [forms],
};
export default config;
