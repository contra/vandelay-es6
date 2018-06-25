import { transform } from 'babel-core'
import { babel } from '../package'

const babelOptions = {
  babelrc: false,
  ast: false,
  sourceMaps: 'inline',
  filename: 'user-transform.js',
  ...babel
}

export default (code) =>
  transform(code, babelOptions).code
