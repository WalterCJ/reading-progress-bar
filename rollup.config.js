import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const input = 'src/index.js';
const name = pkg.name;
const external = Object.keys(pkg.peerDependencies || {});
const esExternal = external.concat(Object.keys(pkg.dependencies || {}));
const banner = `/*
 * ${pkg.name}
 * ${pkg.description}
 * ${pkg.repository.url}
 * v${pkg.version}
 * ${pkg.license} License
 */
`;

export default [
  {
    input,
    output: {
      name,
      file: pkg.browser,
      format: 'umd',
      banner
    },
    external,
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: 'node_modules/**'
      })
    ]
  },
  {
    input,
    output: [{ file: pkg.main, format: 'cjs' }, { file: pkg.module, format: 'es' }],
    external: esExternal,
    plugins: [
      babel({
        exclude: 'node_modules/**'
      })
    ]
  }
];
