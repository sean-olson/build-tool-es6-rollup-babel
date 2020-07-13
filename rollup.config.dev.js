import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs'

export default {
    input: './src/js/app.js',
    treeshake: true,
    output: {
        file: './dev/js/app.js',
        format: 'iife',
        sourcemap: true
    },
    plugins: [
      resolve({
        mainFields: ['module', 'main', 'browser'],
        extensions: [ '.mjs', '.js', '.jsx', '.json' ],
        preferBuiltins: true,
      }),
      commonjs(),
      babel()]
};