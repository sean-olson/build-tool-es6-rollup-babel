import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

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
        resolve({
            browser: true,
            preferBuiltins: false
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