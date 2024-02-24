/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    textColor: {
      primary: 'var(--text-primary)',
      inverted: 'var(--text-inverted)',
      success: 'var(--text-success)',
      warning: 'var(--text-warning)',
      failure: 'var(--text-failure)',
      hint: 'var(--text-hint)',
      highlight: {
        DEFAULT: 'var(--text-highlight)',
        lighten: 'var(--text-highlight-lighten)',
        darken: 'var(--text-highlight-darken)',
      },
    },
    backgroundColor: {
      primary: 'var(--bg-primary)',
      secondary: 'var(--bg-secondary)',
      success: 'var(--bg-success)',
      warning: 'var(--bg-warning)',
      failure: {
        DEFAULT: 'var(--bg-failure)',
        darken: 'var(--bg-failure-darken)',
      },
      info: 'var(--bg-info)',
      highlight: {
        DEFAULT: 'var(--bg-highlight)',
        lighten: 'var(--bg-highlight-lighten)',
        darken: 'var(--bg-highlight-darken)',
      },
      lowlight: 'var(--bg-lowlight)',
      transaction: {
        DEFAULT: 'var(--bg-transaction)',
        darken: 'var(--bg-transaction-darken)',
        lighten: 'var(--bg-transaction-lighten)',
        lightest: 'var(--bg-transaction-lightest)',
      },
      overlay: 'hsla(0, 0%, 0%, 0.5)',
    },
    borderColor: {
      primary: 'var(--b-primary)',
      secondary: 'var(--b-secondary)',
      highlight: {
        DEFAULT: 'var(--b-highlight)',
        lighten: 'var(--b-highlight-lighten)',
        darken: 'var(--b-highlight-darken)',
      },
      lowlight: 'var(--b-lowlight)',
      success: 'var(--b-success)',
      failure: 'var(--b-failure)',
      warning: 'var(--b-warning)',
    },
    divideColor: {
      primary: 'var(--divide-primary)',
      secondary: 'var(--divide-secondary)',
      highlight: 'var(--divide-highlight)',
      lowlight: 'var(--divide-lowlight)',
      success: 'var(--divide-success)',
      failure: 'var(--divide-failure)',
    },
    ringColor: {
      primary: 'var(--ring-primary)',
      secondary: 'var(--ring-secondary)',
      highlight: 'var(--ring-highlight)',
      lowlight: 'var(--ring-lowlight)',
      success: 'var(--ring-success)',
      failure: 'var(--ring-failure)',
    },
    stroke: {
      highlight: 'var(--stroke-highlight)',
    },
    outlineColor: {},
    textDecorationColor: {},
    ringOffsetColor: {},
    caretColor: {},
    accentColor: {},
    fontFamily: {
      sans: ['Inter', 'Arial', 'sans-serif'],
    },
  },
  plugins: [],
}
