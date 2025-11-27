# Contributing to craigslist-css

Thanks for considering contributing to craigslist-css! This guide will help you get started.

## Philosophy

When contributing, remember our core principles:

- **Function Over Form** - Every change should serve a purpose
- **No Unnecessary Decoration** - If it doesn't help users, it doesn't belong
- **Stay True to the Aesthetic** - This is about capturing the classic Craigslist feel
- **Simple is Better** - Don't over-engineer solutions

## Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/craigslist-css.git
   cd craigslist-css
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Building the CSS

```bash
# Development build
npm run build

# Watch mode (rebuilds on changes)
npm run build:watch

# Minified production build
npm run build:minify
```

### Testing Your Changes

1. Make your changes to the Tailwind configuration or CSS files
2. Build the CSS: `npm run build`
3. Open `demo/index.html` in your browser to see your changes
4. Ensure your changes don't break existing components

## What to Contribute

### Good Contributions

- Bug fixes for existing components
- New components that match the Craigslist aesthetic
- Documentation improvements
- Performance optimizations
- Accessibility improvements
- Examples and demos

### Things to Avoid

- Modern design features (rounded corners, shadows, gradients, animations)
- Breaking changes to existing components without discussion
- Over-engineered solutions
- Features that contradict the minimalist philosophy

## Component Guidelines

When adding new components:

1. **Keep it simple** - Use minimal CSS
2. **Use the color palette** - Stick to the defined Craigslist colors
3. **No border radius** - Corners should be sharp (0 radius)
4. **No shadows** - Flat design only
5. **Minimal spacing** - Dense, compact layouts
6. **Semantic naming** - Use the `cl-` prefix for component classes

Example:

```css
.cl-my-component {
  border: 1px solid theme('colors.cl-gray');
  padding: theme('spacing.2');
  background: theme('colors.cl-bg');
}
```

## Pull Request Process

1. Update the README.md if you're adding new components
2. Update the demo/index.html to showcase new features
3. Build the CSS and include the dist files in your commit
4. Write a clear PR description explaining:
   - What you changed and why
   - How to test the changes
   - Any breaking changes
5. Link to any related issues

### PR Title Format

- `feat: Add new component for [purpose]`
- `fix: Correct [issue] in [component]`
- `docs: Update [documentation section]`
- `chore: [maintenance task]`

## Code Style

- Use Tailwind's `@apply` directive in components when possible
- Follow the existing code formatting
- Keep CSS organized in logical sections
- Comment complex CSS when necessary
- Use the theme() function for accessing design tokens

## Commit Messages

Write clear, descriptive commit messages:

```
feat: Add cl-pagination component

- Adds classic pagination links
- Includes prev/next navigation
- Maintains minimalist aesthetic
```

## Reporting Issues

When reporting bugs:

1. Check if the issue already exists
2. Provide a clear description
3. Include steps to reproduce
4. Mention your environment (browser, OS)
5. Include screenshots if relevant

## Questions?

Feel free to open an issue with the `question` label if you're unsure about anything.

## Code of Conduct

- Be respectful and constructive
- Welcome newcomers
- Focus on what's best for the project
- Assume good intentions

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thanks for helping make the web a more utilitarian place!
