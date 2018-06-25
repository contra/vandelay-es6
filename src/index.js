import { transform } from 'babel-core'

const babelOptions = {
  babelrc: true,
  ast: false,
  sourceMaps: 'inline',
  filename: 'user-transform.js'
}

export default (code) =>
  transform(code, babelOptions).code
