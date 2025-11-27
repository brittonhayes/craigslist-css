/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./demo/**/*.{html,js}",
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Classic Craigslist color palette
        'cl-blue': '#0000ff',        // Link blue
        'cl-purple': '#551a8b',      // Visited link purple
        'cl-bg': '#ffffff',          // Main background
        'cl-bg-alt': '#f7f7f7',      // Alternate background
        'cl-text': '#000000',        // Main text
        'cl-gray': '#cccccc',        // Border/separator gray
        'cl-gray-dark': '#999999',   // Dark gray
        'cl-gray-light': '#eeeeee',  // Light gray background
        'cl-red': '#ff0000',         // Error/alert red
        'cl-green': '#008000',       // Success green
      },
      fontFamily: {
        'sans': ['Arial', 'Helvetica', 'sans-serif'],
        'serif': ['Times New Roman', 'Times', 'serif'],
      },
      fontSize: {
        'xs': '10px',
        'sm': '12px',
        'base': '14px',
        'lg': '16px',
        'xl': '18px',
        '2xl': '20px',
        '3xl': '24px',
      },
      lineHeight: {
        'tight': '1.2',
        'normal': '1.4',
        'relaxed': '1.6',
      },
      spacing: {
        '0.5': '2px',
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
      },
      borderRadius: {
        'none': '0',
        'sm': '2px',
        'DEFAULT': '0',
      },
      boxShadow: {
        'none': 'none',
        'DEFAULT': 'none',
      },
    },
  },
  plugins: [
    function({ addBase, addComponents, theme }) {
      addBase({
        // Base styles matching Craigslist
        'body': {
          fontFamily: theme('fontFamily.sans'),
          fontSize: theme('fontSize.base'),
          lineHeight: theme('lineHeight.normal'),
          color: theme('colors.cl-text'),
          backgroundColor: theme('colors.cl-bg'),
        },
        'a': {
          color: theme('colors.cl-blue'),
          textDecoration: 'underline',
        },
        'a:visited': {
          color: theme('colors.cl-purple'),
        },
        'a:hover': {
          textDecoration: 'underline',
        },
        'h1': {
          fontSize: theme('fontSize.3xl'),
          fontWeight: '700',
          marginBottom: theme('spacing.4'),
        },
        'h2': {
          fontSize: theme('fontSize.2xl'),
          fontWeight: '700',
          marginBottom: theme('spacing.3'),
        },
        'h3': {
          fontSize: theme('fontSize.xl'),
          fontWeight: '700',
          marginBottom: theme('spacing.2'),
        },
        'p': {
          marginBottom: theme('spacing.2'),
        },
        'ul, ol': {
          marginLeft: theme('spacing.5'),
          marginBottom: theme('spacing.2'),
        },
        'table': {
          borderCollapse: 'collapse',
          width: '100%',
        },
        'th, td': {
          padding: theme('spacing.2'),
          textAlign: 'left',
          borderBottom: `1px solid ${theme('colors.cl-gray')}`,
        },
        'th': {
          fontWeight: '700',
        },
      });

      addComponents({
        // Craigslist-style components
        '.cl-button': {
          padding: `${theme('spacing.1')} ${theme('spacing.3')}`,
          backgroundColor: theme('colors.cl-bg-alt'),
          border: `1px solid ${theme('colors.cl-gray')}`,
          fontSize: theme('fontSize.sm'),
          cursor: 'pointer',
          textDecoration: 'none',
          display: 'inline-block',
          '&:hover': {
            backgroundColor: theme('colors.cl-gray-light'),
          },
        },
        '.cl-input': {
          padding: theme('spacing.1'),
          border: `1px solid ${theme('colors.cl-gray')}`,
          fontSize: theme('fontSize.sm'),
          fontFamily: theme('fontFamily.sans'),
          width: '100%',
          '&:focus': {
            outline: `2px solid ${theme('colors.cl-blue')}`,
            outlineOffset: '0',
          },
        },
        '.cl-select': {
          padding: theme('spacing.1'),
          border: `1px solid ${theme('colors.cl-gray')}`,
          fontSize: theme('fontSize.sm'),
          fontFamily: theme('fontFamily.sans'),
          backgroundColor: theme('colors.cl-bg'),
          '&:focus': {
            outline: `2px solid ${theme('colors.cl-blue')}`,
            outlineOffset: '0',
          },
        },
        '.cl-card': {
          border: `1px solid ${theme('colors.cl-gray')}`,
          padding: theme('spacing.3'),
          marginBottom: theme('spacing.2'),
          backgroundColor: theme('colors.cl-bg'),
        },
        '.cl-section': {
          marginBottom: theme('spacing.5'),
          paddingBottom: theme('spacing.3'),
          borderBottom: `1px solid ${theme('colors.cl-gray')}`,
        },
        '.cl-list': {
          listStyle: 'none',
          padding: '0',
          margin: '0',
          '& li': {
            paddingTop: theme('spacing.1'),
            paddingBottom: theme('spacing.1'),
          },
        },
        '.cl-link': {
          color: theme('colors.cl-blue'),
          textDecoration: 'underline',
          '&:visited': {
            color: theme('colors.cl-purple'),
          },
          '&:hover': {
            textDecoration: 'underline',
          },
        },
        '.cl-header': {
          backgroundColor: theme('colors.cl-bg-alt'),
          padding: theme('spacing.2'),
          borderBottom: `1px solid ${theme('colors.cl-gray')}`,
          marginBottom: theme('spacing.4'),
        },
        '.cl-footer': {
          borderTop: `1px solid ${theme('colors.cl-gray')}`,
          paddingTop: theme('spacing.3'),
          marginTop: theme('spacing.6'),
          fontSize: theme('fontSize.sm'),
          color: theme('colors.cl-gray-dark'),
        },
        '.cl-table': {
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: theme('fontSize.sm'),
          '& th': {
            backgroundColor: theme('colors.cl-bg-alt'),
            padding: theme('spacing.2'),
            textAlign: 'left',
            borderBottom: `1px solid ${theme('colors.cl-gray')}`,
            fontWeight: '700',
          },
          '& td': {
            padding: theme('spacing.2'),
            borderBottom: `1px solid ${theme('colors.cl-gray-light')}`,
          },
        },
      });
    },
  ],
}
