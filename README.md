# ES6 Rollup Build Tool

A modern ES6 build environment for developers who want to build JavaScript applications without the overhead of a framework. This tool provides a complete development workflow with live reloading, SCSS compilation, and optimized production builds using Rollup.js and Babel.

## Features

- **Modern ES6+ Support** - Write modern JavaScript with automatic transpilation
- **Live Development Server** - Auto-reloading development server with file watching
- **SCSS Compilation** - Compile and watch SCSS files with source maps
- **Optimized Production Builds** - Minified, tree-shaken bundles for production
- **Zero Configuration** - Works out of the box with sensible defaults
- **Modern Browser Targets** - Supports last 2 versions of major browsers

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/sean-olson/es6_rollup_build_tool.git
   cd es6_rollup_build_tool
   ```

2. **Install dependencies**
   ```bash
   npm install
   npm install --save-dev core-js@3
   ```

3. **Start development**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── js/
│   └── app.js          # Main JavaScript entry point
├── scss/
│   └── app.scss        # Main SCSS file
├── img/                # Images directory
└── index.html          # HTML files

dev/                    # Development build output
dist/                   # Production build output
```

## Available Scripts

### Development
- `npm run dev` - Start the complete development workflow
- `npm run watch` - Watch files for changes (used internally)

### Building
- `npm run build` - Create optimized production build
- `npm run compile-js` - Compile JavaScript only
- `npm run compile-scss` - Compile SCSS only

### Individual Tasks
- `npm run copy-html` - Copy HTML files
- `npm run copy-images` - Copy image assets
- `npm run create-folders` - Create build directories

## Configuration

### Browser Support
The build tool targets modern browsers using the browserslist configuration:
- Last 2 versions of major browsers
- Browsers that are not dead
- Browsers with >0.5% market share

### Babel Configuration
JavaScript is transpiled using `@babel/preset-env` with:
- Automatic polyfill injection via `core-js`
- ES modules preserved for tree-shaking
- Modern browser targets for optimal performance

### Rollup Configuration
Two separate configurations are provided:

#### Development (`rollup.config.dev.js`)
- Source maps enabled for debugging
- Fast rebuilds with file watching
- Unminified output for development

#### Production (`rollup.config.dist.js`)
- Minified output with Terser
- Tree-shaking enabled
- Console and debugger statements removed
- Optimized for file size and performance

## Development Workflow

1. **Start the dev server**: `npm run dev`
   - Creates development folders
   - Copies HTML and images
   - Compiles SCSS with source maps
   - Bundles JavaScript with Rollup
   - Starts live-reload server on port 3000
   - Watches for file changes

2. **Edit your files** in the `src/` directory:
   - JavaScript files in `src/js/`
   - SCSS files in `src/scss/`
   - HTML files in `src/`
   - Images in `src/img/`

3. **Files are automatically rebuilt** and the browser refreshes

## Production Build

Run `npm run build` to create an optimized production build:

- **JavaScript**: Minified, tree-shaken bundle in `dist/js/app.js`
- **CSS**: Compressed CSS with source maps in `dist/css/app.css`
- **HTML**: Copied to `dist/`
- **Images**: Optimized and copied to `dist/img/`

## Customization

### Adding New JavaScript Files
Import them in your main `src/js/app.js` file:
```javascript
import { myFunction } from './modules/myModule.js';
```

### Adding New SCSS Files
Import them in your main `src/scss/app.scss` file:
```scss
@import 'components/header';
@import 'components/footer';
```

### Changing Browser Targets
Edit the `browserslist` field in `package.json`:
```json
"browserslist": [
  "last 3 versions",
  "not dead",
  "> 1%"
]
```

### Modifying Build Output
Edit the Rollup configuration files:
- `rollup.config.dev.js` - Development settings
- `rollup.config.dist.js` - Production settings

## Dependencies

### Build Tools
- **Rollup** - Module bundler
- **Babel** - JavaScript transpiler
- **Sass** - SCSS compiler
- **Terser** - JavaScript minifier

### Development Tools
- **sirv-cli** - Development server with live reload
- **chokidar-cli** - File watching
- **npm-run-all** - Run multiple npm scripts

## Requirements

- Node.js 16+ recommended
- npm 7+ or yarn 1.22+

## License

MIT License - see LICENSE file for details

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## Support

For issues and questions:
- Check the [Issues](https://github.com/sean-olson/es6_rollup_build_tool/issues) page
- Create a new issue if needed

---

**Happy coding!** 🚀