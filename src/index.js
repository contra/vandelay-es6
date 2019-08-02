import { transform } from '@babel/core'
import babelConfig from '@stae/babel-node'

const babelOptions = {
  babelrc: false,
  ast: false,
  sourceMaps: 'inline',
  filename: 'user-transform.js',
  ...babelConfig
}

export default (code) =>
  transform(code, babelOptions).code
