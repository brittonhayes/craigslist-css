# craigslist-css

A Tailwind CSS theme that captures the Craigslist aesthetic.

No fancy gradients, no smooth animations, no rounded corners. Just pure, functional web design.

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
        <h1>Welcome to the Past</h1>
    </div>

    <div class="cl-card">
        <p>Your content here</p>
        <a href="#" class="cl-link">Classic Blue Link</a>
    </div>
</body>
</html>
```

## Features

- Classic blue links (#0000ff)
- Purple visited links
- Zero border radius
- Minimal color palette
- Dense typography
- No shadows
- Instant navigation
- Responsive

## Color Palette

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| cl-blue | #0000ff | Primary links |
| cl-purple | #551a8b | Visited links |
| cl-bg | #ffffff | Main background |
| cl-bg-alt | #f7f7f7 | Alternate background |
| cl-text | #000000 | Text color |
| cl-gray | #cccccc | Borders |
| cl-gray-dark | #999999 | Dark gray text |
| cl-gray-light | #eeeeee | Light backgrounds |
| cl-red | #ff0000 | Errors |
| cl-green | #008000 | Success messages |

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

This theme follows the core principles that made Craigslist a design icon:

1. Function over form - Every element serves a purpose
2. No unnecessary decoration - If it doesn't help users, it doesn't exist
3. Dense information display - Screen space is valuable
4. Instant feedback - No loading spinners, no smooth transitions
5. Accessible colors - High contrast, clear visual hierarchy
6. Familiar patterns - Users know exactly what to expect

## Customization

Edit tailwind.config.js to tweak the theme:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'cl-blue': '#0000ff', // Change to your preferred blue
        // ... other colors
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

In a world of over-designed, JavaScript-heavy, CPU-melting web applications, sometimes you just want a simple page that loads instantly and gets out of your way. This theme is for people who remember when the web was about content, not animations.

## Contributing

Found a way to make it even more utilitarian? Check out CONTRIBUTING.md for details on setting up your development environment and submitting pull requests.

All contributions should maintain the minimalist, utilitarian aesthetic that makes Craigslist iconic.

## License

MIT License - Use it however you want

## Credits

Inspired by the timeless design of Craigslist.org, a website that has remained functionally perfect since 1995.

Note: This project is not affiliated with or endorsed by Craigslist. It's a loving tribute to their iconic design aesthetic.

## FAQ

Q: Is this serious?
A: Absolutely. There's beauty in simplicity.

Q: Can I use this in production?
A: Why not? Craigslist has been using a similar design for decades and it's one of the most successful websites ever.

Q: What about dark mode?
A: Dark mode is a modern luxury. But if you must, you can extend the theme yourself.

Q: Why no animations?
A: They slow things down. We're here for information, not entertainment.

Q: Can I add rounded corners?
A: You can, but why would you want to?

---

Made by Britton Hayes (https://github.com/brittonhayes)

"Don't fix what isn't broken." - Craig Newmark (probably)
