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
        // Authentic Craigslist color palette (extracted from production CSS)
        'cl-blue': '#00e',           // Primary link blue
        'cl-blue-selected': '#5252ff', // Selected button state
        'cl-purple': '#551a8b',      // Visited link purple
        'cl-bg': '#ffffff',          // Main background
        'cl-bg-alt': '#f7f7f7',      // Fieldset/alternate background
        'cl-bg-sidebar': '#f4f4f4',  // Sidebar background
        'cl-text': '#222',           // Body text (not pure black)
        'cl-text-muted': '#777',     // Gray text for metadata
        'cl-text-disabled': '#aaa',  // Disabled/placeholder text
        'cl-border': '#ccc',         // Primary borders
        'cl-border-light': '#e0e0e0', // Button borders
        'cl-border-alt': '#ddd',     // Section borders
        'cl-gray-dark': '#999',      // Dark gray accents
        'cl-gray-light': '#eee',     // Light gray background/hover
        'cl-red': '#ff0000',         // Error emphasis
        'cl-red-light': '#fbb',      // Error borders
        'cl-green': '#090',          // Success/post green
        'cl-orange': 'orange',       // Update indicators
      },
      fontFamily: {
        'sans': ['"Open Sans"', 'Helvetica', 'Arial', 'sans-serif'], // Real CL uses Open Sans
        'serif': ['"Times New Roman"', 'Times', 'serif'],
      },
      fontSize: {
        'xs': '10px',      // Small metadata
        'sm': '12px',      // Standard small text
        'base': '14px',    // Default body text
        'lg': '16px',      // Slightly larger
        'xl': '18px',      // Autocomplete, search
        '2xl': '20px',     // Headings
        '3xl': '24px',     // Logo elements
        'tiny': '68%',     // Forum links size
        'micro': '70%',    // Rightbar text
        'minor': '80%',    // Warning text
        'legend': '95%',   // Legend text
      },
      lineHeight: {
        'ultra-tight': '1.1',   // Ultra dense
        'tight': '1.2',         // Tight
        'snug': '1.3',          // List items
        'normal': '1.4',        // Body default
        'compact': '1.43',      // Rightbar
        'relaxed': '1.7',       // Area/topban
      },
      spacing: {
        'px': '1px',
        '0.5': '2px',
        '1': '4px',
        '1.5': '5px',    // Common CL value
        '2': '8px',
        '2.5': '9px',    // Body padding
        '3': '12px',
        '3.5': '14px',   // Topban margin
        '4': '16px',
        '5': '20px',
        '5.5': '22px',   // Column padding
        '6': '24px',
        '7': '28px',
        '8': '32px',
      },
      borderRadius: {
        'none': '0',
        'sm': '2px',     // Fieldset
        'DEFAULT': '3px', // Flatinput, searchbtn
        'md': '5px',     // Buttongroup
      },
      boxShadow: {
        'none': 'none',
        'DEFAULT': 'none',
      },
      opacity: {
        '0': '0',
        '25': '0.25',  // Background logo watermark
        '100': '1',
      },
      fontWeight: {
        'normal': '400',
        'medium': '500', // Logo weight
        'bold': '700',
        'bolder': '800',
      },
    },
  },
  plugins: [
    function({ addBase, addComponents, theme }) {
      addBase({
        // Base styles matching authentic Craigslist
        'body': {
          fontFamily: theme('fontFamily.sans'),
          fontSize: theme('fontSize.base'),
          lineHeight: theme('lineHeight.normal'),
          color: theme('colors.cl-text'), // #222, not pure black
          backgroundColor: theme('colors.cl-bg'),
        },
        'a': {
          color: theme('colors.cl-blue'), // #00e authentic blue
          textDecoration: 'none',
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
          borderBottom: `1px solid ${theme('colors.cl-border')}`,
        },
        'th': {
          fontWeight: '700',
        },
      });

      addComponents({
        // Authentic Craigslist-style components
        '.cl-button': {
          padding: `${theme('spacing.1')} ${theme('spacing.3')}`,
          backgroundColor: theme('colors.cl-bg-alt'),
          border: `1px solid ${theme('colors.cl-border')}`,
          borderRadius: theme('borderRadius.DEFAULT'),
          fontSize: theme('fontSize.sm'),
          cursor: 'pointer',
          textDecoration: 'none',
          display: 'inline-block',
          '&:hover': {
            borderColor: theme('colors.cl-gray-dark'),
            backgroundColor: theme('colors.cl-gray-light'),
          },
        },
        '.cl-input': {
          padding: `${theme('spacing.0.5')} ${theme('spacing.1')}`, // flatinput: 2px
          border: `1px solid ${theme('colors.cl-border')}`,
          borderRadius: theme('borderRadius.DEFAULT'),
          fontSize: theme('fontSize.sm'),
          fontFamily: theme('fontFamily.sans'),
          width: '100%',
          '&:hover': {
            borderColor: theme('colors.cl-gray-dark'),
          },
          '&:focus': {
            outline: `2px solid ${theme('colors.cl-blue')}`,
            outlineOffset: '0',
          },
        },
        '.cl-select': {
          padding: `${theme('spacing.0.5')} ${theme('spacing.1')}`,
          border: `1px solid ${theme('colors.cl-border')}`,
          borderRadius: theme('borderRadius.DEFAULT'),
          fontSize: theme('fontSize.sm'),
          fontFamily: theme('fontFamily.sans'),
          backgroundColor: theme('colors.cl-bg'),
          '&:hover': {
            borderColor: theme('colors.cl-gray-dark'),
          },
          '&:focus': {
            outline: `2px solid ${theme('colors.cl-blue')}`,
            outlineOffset: '0',
          },
        },
        '.cl-card': {
          border: `1px solid ${theme('colors.cl-border')}`,
          padding: theme('spacing.3'),
          marginBottom: theme('spacing.2'),
          backgroundColor: theme('colors.cl-bg'),
        },
        '.cl-section': {
          marginBottom: theme('spacing.5'),
          paddingBottom: theme('spacing.3'),
          borderBottom: `1px solid ${theme('colors.cl-border')}`,
        },
        '.cl-ban': {
          textAlign: 'center',
          fontWeight: '700',
          padding: `${theme('spacing.0.5')} ${theme('spacing.1.5')}`,
          borderTop: `1px solid ${theme('colors.cl-border-alt')}`,
          borderBottom: `1px solid ${theme('colors.cl-border-alt')}`,
          backgroundColor: theme('colors.cl-gray-light'),
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
          borderBottom: `1px solid ${theme('colors.cl-border')}`,
          marginBottom: theme('spacing.4'),
        },
        '.cl-footer': {
          borderTop: `1px solid ${theme('colors.cl-border')}`,
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
            borderBottom: `1px solid ${theme('colors.cl-border')}`,
            fontWeight: '700',
          },
          '& td': {
            padding: theme('spacing.2'),
            borderBottom: `1px solid ${theme('colors.cl-gray-light')}`,
          },
        },
        '.cl-fieldset': {
          backgroundColor: theme('colors.cl-bg-alt'),
          border: `1px solid ${theme('colors.cl-border')}`,
          padding: `${theme('spacing.2')} ${theme('spacing.3')}`,
          borderRadius: theme('borderRadius.sm'), // 2px
        },
        '.cl-legend': {
          fontSize: theme('fontSize.legend'), // 95%
          padding: `0 ${theme('spacing.1')}`,
        },
        '.cl-buttongroup': {
          backgroundColor: theme('colors.cl-bg'),
          height: '1.3em',
          lineHeight: '1.3em',
          border: `1px solid ${theme('colors.cl-border-light')}`,
          borderRadius: theme('borderRadius.md'), // 5px
          display: 'inline-block',
          overflow: 'hidden',
          '& .button': {
            display: 'inline-block',
            borderLeft: `1px solid ${theme('colors.cl-border-light')}`,
            padding: `0 ${theme('spacing.2')}`,
            height: '100%',
          },
          '& .button:first-child': {
            borderLeft: '0',
          },
          '& .button.sel': {
            color: theme('colors.cl-bg'),
            backgroundColor: theme('colors.cl-blue-selected'),
            cursor: 'text',
          },
        },
        '.cl-greytext': {
          color: theme('colors.cl-text-muted'),
          fontSize: theme('fontSize.sm'),
          fontWeight: 'normal',
          fontFamily: theme('fontFamily.serif'),
        },
        '.cl-alert': {
          backgroundColor: theme('colors.cl-bg'),
          border: `1px solid ${theme('colors.cl-border')}`,
          padding: theme('spacing.1.5'),
          fontFamily: theme('fontFamily.sans'),
        },
        '.cl-alert-error': {
          backgroundColor: theme('colors.cl-bg'),
          border: `1px solid ${theme('colors.cl-red-light')}`,
          padding: theme('spacing.1.5'),
          fontFamily: theme('fontFamily.sans'),
        },
        '.cl-alert-success': {
          backgroundColor: theme('colors.cl-bg'),
          border: `1px solid ${theme('colors.cl-green')}`,
          padding: theme('spacing.1.5'),
          fontFamily: theme('fontFamily.sans'),
        },
      });
    },
  ],
}
