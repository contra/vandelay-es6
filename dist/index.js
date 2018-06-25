'use strict';

exports.__esModule = true;

var _babelCore = require('babel-core');

var _package = require('../package');

const babelOptions = Object.assign({
  babelrc: false,
  ast: false,
  sourceMaps: 'inline',
  filename: 'user-transform.js'
}, _package.babel);

exports.default = code => (0, _babelCore.transform)(code, babelOptions).code;

module.exports = exports['default'];