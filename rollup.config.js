import babel from 'rollup-plugin-babel'

export default {
  entry: 'src/index.js',
  format: 'umd',
  plugins: [ babel() ],
  dest: 'dist/reselect-map.js',
  moduleId: 'reselect-map',
  moduleName: 'ReselectMap',
  globals: {
    reselect: 'Reselect'
  }
}
