import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

export default {
    input: './src/js/app.js',
    treeshake: true,
    output: {
        file: './dev/js/app.js',
        format: 'iife'
    },
    plugins: [
      resolve({
        mainFields: ['module', 'main', 'browser'],
        extensions: [ '.mjs', '.js', '.jsx', '.json' ],
        preferBuiltins: true,
      }),
      commonjs(),
      babel(),
      replace({
        ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      })    
    ]
};