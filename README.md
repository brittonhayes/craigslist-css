# craigslist-css

A Tailwind CSS theme that captures the classic Craigslist aesthetic - simple, functional, and straightforward.

## Live Demo

View the live demo: https://brittonhayes.github.io/craigslist-css/

See all components and utilities in action with a fully-styled Craigslist-inspired interface.

## Installation

Configure npm to use GitHub Packages for the @brittonhayes scope. Create or edit .npmrc in your project:

```
@brittonhayes:registry=https://npm.pkg.github.com
```

Install the package:

```bash
npm install @brittonhayes/craigslist-css
```

## Quick Start

Install dependencies:

```bash
npm install
```

Build the CSS:

```bash
npm run build
```

Include in your HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link href="./dist/output.css" rel="stylesheet">
</head>
<body>
    <div class="cl-header">
        <h1>My Site</h1>
    </div>

    <div class="cl-card">
        <p>Your content here</p>
        <a href="#" class="cl-link">Classic Blue Link</a>
    </div>
</body>
</html>
```

## Features

- Authentic Craigslist colors (#00e blue, #222 text)
- Purple visited links (#551a8b)
- Open Sans typography (matching real Craigslist)
- Subtle border radius (2-5px)
- Minimal, functional color palette
- Dense, efficient typography
- No box shadows
- Instant navigation (no smooth scroll)
- Responsive layouts

## Color Palette

Extracted from authentic Craigslist production CSS:

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| cl-blue | #00e | Primary links |
| cl-blue-selected | #5252ff | Selected button state |
| cl-purple | #551a8b | Visited links |
| cl-bg | #ffffff | Main background |
| cl-bg-alt | #f7f7f7 | Fieldset/alternate background |
| cl-bg-sidebar | #f4f4f4 | Sidebar background |
| cl-text | #222 | Body text (not pure black) |
| cl-text-muted | #777 | Gray text for metadata |
| cl-text-disabled | #aaa | Disabled/placeholder text |
| cl-border | #ccc | Primary borders |
| cl-border-light | #e0e0e0 | Button borders |
| cl-border-alt | #ddd | Section borders |
| cl-gray-dark | #999 | Dark gray accents |
| cl-gray-light | #eee | Light gray background/hover |
| cl-red | #ff0000 | Error emphasis |
| cl-red-light | #fbb | Error borders |
| cl-green | #090 | Success/post green |
| cl-orange | orange | Update indicators |

## Design Tokens

### Typography

- **Font Family**: Open Sans, Helvetica, Arial, sans-serif (matching authentic Craigslist)
- **Font Sizes**: 10px (xs), 12px (sm), 14px (base), 16px (lg), 18px (xl), plus percentage-based sizes (68%, 70%, 80%, 95%)
- **Line Heights**: Ultra-tight (1.1), tight (1.2), snug (1.3), normal (1.4), compact (1.43), relaxed (1.7)
- **Font Weights**: 400 (normal), 500 (medium), 700 (bold), 800 (bolder)

### Spacing

Hyper-specific values matching real Craigslist:
- 1px, 2px, 5px, 8px, 9px, 12px, 14px, 16px, 20px, 22px, 24px, 28px, 32px

### Border Radius

Subtle roundedness only:
- sm: 2px (fieldsets)
- DEFAULT: 3px (inputs, buttons)
- md: 5px (button groups)

## Components

### Buttons

```html
<button class="cl-button">Click Me</button>
```

### Inputs

```html
<input type="text" class="cl-input" placeholder="Search...">
<select class="cl-select">
    <option>Option 1</option>
</select>
```

### Cards

```html
<div class="cl-card">
    <h3>Card Title</h3>
    <p>Card content goes here</p>
</div>
```

### Links

```html
<a href="#" class="cl-link">Standard Link</a>
```

### Lists

```html
<ul class="cl-list">
    <li><a href="#" class="cl-link">Item 1</a></li>
    <li><a href="#" class="cl-link">Item 2</a></li>
    <li><a href="#" class="cl-link">Item 3</a></li>
</ul>
```

### Sections

```html
<div class="cl-section">
    <h2>Section Title</h2>
    <p>Section content with bottom border</p>
</div>
```

### Tables

```html
<table class="cl-table">
    <thead>
        <tr>
            <th>Column 1</th>
            <th>Column 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Data 1</td>
            <td>Data 2</td>
        </tr>
    </tbody>
</table>
```

### Alerts

```html
<div class="cl-alert">Standard alert message</div>
<div class="cl-alert-error">Error message</div>
<div class="cl-alert-success">Success message</div>
```

### Header & Footer

```html
<div class="cl-header">
    <h1>Site Title</h1>
</div>

<div class="cl-footer">
    <p>Footer content</p>
</div>
```

## Utility Classes

### Typography

- text-cl-small - 10px font size
- text-cl-base - 14px font size (default)
- dense - Tight line height (1.2)
- ultra-dense - Ultra tight line height (1.1)

### Layout

All standard Tailwind utilities work, but with Craigslist-themed values:

- Spacing: p-1 (4px), p-2 (8px), p-3 (12px), etc.
- No border radius by default
- No shadows by default

## Design Principles

This theme follows Craigslist's minimalist approach:

1. Function-focused - Minimal decoration
2. Dense information display
3. Fast interactions - No transitions or animations
4. High contrast colors
5. Familiar patterns

## Customization

Edit tailwind.config.js to tweak the theme:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'cl-blue': '#00e',     // Authentic Craigslist link blue
        'cl-text': '#222',     // Body text (not pure black)
        // ... see tailwind.config.js for all colors
      },
      fontFamily: {
        'sans': ['"Open Sans"', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
}
```

## Building for Production

```bash
# Development build
npm run build

# Watch mode
npm run build:watch

# Minified production build
npm run build:minify
```

## Examples

Check out demo/index.html for a full example page showcasing all components and utilities.

To view the demo:

1. Build the CSS: npm run build
2. Open demo/index.html in your browser

## Use Cases

Perfect for:

- Classified ad websites
- Job boards
- Marketplace applications
- News aggregators
- Retro/nostalgic projects
- Prototypes that don't need to look fancy
- Documentation sites
- Internal tools

## Philosophy

A simple, fast-loading alternative to more complex design systems.

## Contributing

Check out CONTRIBUTING.md for details on setting up your development environment and submitting pull requests.

Please maintain the minimalist aesthetic when contributing.

## License

MIT License - Use it however you want

## Credits

Inspired by the design of Craigslist.org.

Note: This project is not affiliated with or endorsed by Craigslist.

## FAQ

**Can I use this in production?**
Yes, it's a fully functional Tailwind theme.

**What about dark mode?**
Not included by default, but you can extend the theme to add it.

**Can I customize the colors?**
Yes, edit the color values in tailwind.config.js.

---

Made by Britton Hayes (https://github.com/brittonhayes)
