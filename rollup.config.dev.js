import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs'

export default {
    input: './src/js/app.js',
    treeshake: true,
    output: {
        file: './dev/js/app.js',
        format: 'iife',
        name: 'App',
        sourcemap: true
    },
    plugins: [
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
                  "corejs": 3,
                  "debug": false // Set to true if you want to see what's being transpiled
              }]
          ]
      }),      
    ],
    watch: {
        include: 'src/js/**',
        exclude: 'node_modules/**'
    }    
};