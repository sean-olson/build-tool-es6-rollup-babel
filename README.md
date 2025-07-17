# ES6+ Rollup Build Tool

A modern ES6 build environment for developers who want to build JavaScript applications without the overhead of a framework. This tool provides a complete development workflow with live reloading, SCSS compilation, and optimized production builds using Rollup.js and Babel.

## Features

- **Modern ES6+ Support** - Write modern JavaScript with automatic transpilation
- **Live Development Server** - Auto-reloading development server with file watching
- **SCSS Compilation** - Compile and watch SCSS files with source maps
- **Environment Variable Management** - Flexible configuration for different environments
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
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start development**
   ```bash
   npm run dev
   ```

5. **Build for production**
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

# Environment Configuration
.env.example            # Template for environment variables
.env.development        # Development environment settings
.env.production         # Production environment settings
.env.local              # Local overrides (gitignored)
```

## Environment Variables

The build tool supports flexible environment variable management for different deployment scenarios. Environment variables are injected into your JavaScript code at build time using `@rollup/plugin-replace`.

### Environment Files

The build system loads environment variables from multiple files in this order:

1. **`.env.{environment}`** - Environment-specific variables
   - `.env.development` - Loaded during development
   - `.env.production` - Loaded during production builds
   - `.env.test` - Loaded during testing

2. **`.env.local`** - Local overrides (development only)
   - Overrides any variables from environment-specific files
   - Should be added to `.gitignore` (already configured)
   - Used for local development customization

### Available Variables

The following environment variables are automatically replaced in your JavaScript code:

- `process.env.NODE_ENV` - Current environment (development/production)
- `process.env.API_URL` - API endpoint URL
- `process.env.DB_URL` - Database connection URL
- `process.env.DEBUG_MODE` - Enable/disable debug mode
- `process.env.APP_NAME` - Application name
- `process.env.VERSION` - Application version

### Setting Up Environment Variables

1. **Copy the example file:**
   ```bash
   cp .env.example .env.local
   ```

2. **Edit `.env.local` with your local settings:**
   ```bash
   API_URL=http://localhost:3001/api
   DB_URL=http://localhost:5432
   DEBUG_MODE=true
   APP_NAME=MyApp Local
   VERSION=1.0.0-local
   ```

3. **Create environment-specific files as needed:**
   ```bash
   # .env.development
   API_URL=https://dev-api.example.com
   DEBUG_MODE=true
   APP_NAME=MyApp Development
   
   # .env.production
   API_URL=https://api.example.com
   DEBUG_MODE=false
   APP_NAME=MyApp
   ```

### Using Environment Variables in Code

Environment variables are available in your JavaScript code as compile-time constants:

```javascript
// API configuration
const apiUrl = process.env.API_URL;
const isDebugMode = process.env.DEBUG_MODE === 'true';

// Conditional code based on environment
if (process.env.NODE_ENV === 'development') {
    console.log('Running in development mode');
}

// App configuration
const appConfig = {
    name: process.env.APP_NAME,
    version: process.env.VERSION,
    apiUrl: process.env.API_URL,
    debug: process.env.DEBUG_MODE === 'true'
};
```

### Adding New Environment Variables

To add new environment variables:

1. **Update the Rollup configurations** (`rollup.config.dev.js` and `rollup.config.dist.js`):
   ```javascript
   replace({
       preventAssignment: true,
       values: {
           // ... existing variables
           'process.env.YOUR_NEW_VAR': JSON.stringify(process.env.YOUR_NEW_VAR),
       }
   })
   ```

2. **Add to your environment files:**
   ```bash
   # .env.example
   YOUR_NEW_VAR=example-value
   
   # .env.local
   YOUR_NEW_VAR=local-value
   ```

3. **Use in your JavaScript code:**
   ```javascript
   const myVar = process.env.YOUR_NEW_VAR;
   ```

### Environment Security

- **Never commit sensitive data** to version control
- **Use `.env.local`** for sensitive local development variables
- **Add `.env.production`** to `.gitignore` if it contains sensitive data
- **Use separate environment files** for different deployment stages

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
- Loads `.env.development` and `.env.local`

#### Production (`rollup.config.dist.js`)
- Minified output with Terser
- Tree-shaking enabled
- Console and debugger statements removed
- Optimized for file size and performance
- Loads `.env.production` only

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
- **browser-sync** - Development server with live reload
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