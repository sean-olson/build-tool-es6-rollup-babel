import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import replace from '@rollup/plugin-replace';
import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve as pathResolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
const env = process.env.NODE_ENV || 'production';
config({ path: pathResolve(__dirname, `.env.${env}`) });

export default {
    input: './src/js/app.js',
    treeshake: true,
    output: {
        file: './dist/js/app.js',
        format: 'iife',
        name: 'App',
        sourcemap: false        
    },
    plugins: [
        replace({
            preventAssignment: true,
            values: {
                'process.env.NODE_ENV': JSON.stringify(env),
                'process.env.API_URL': JSON.stringify(process.env.API_URL),
                'process.env.DB_URL': JSON.stringify(process.env.DB_URL),
                'process.env.DEBUG_MODE': JSON.stringify(process.env.DEBUG_MODE),
                'process.env.APP_NAME': JSON.stringify(process.env.APP_NAME),
                'process.env.VERSION': JSON.stringify(process.env.VERSION)
            }
        }),        
        resolve({
            browser: true,
            preferBuiltins: false,
            extensions: ['.mjs', '.js', '.jsx', '.json']
        }),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled',
            babelrc: false,
            presets: [
                ["@babel/preset-env", { 
                    "modules": false,
                    "useBuiltIns": "usage",
                    "corejs": 3
                }]
            ]
        }),
        terser({
            format: {
                comments: false
            },
            compress: {
                drop_console: true,
                drop_debugger: true
            }
        })        
    ]
};