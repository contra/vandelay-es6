import { transform } from '@babel/core'
import babelConfig from '../.babelrc.js'

const babelOptions = {
  babelrc: false,
  ast: false,
  highlightCode: false,
  sourceMaps: 'inline',
  filename: 'user-transform.js',
  ...babelConfig
}

export default (code) =>
  transform(code, babelOptions).code
