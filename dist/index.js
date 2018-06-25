'use strict';

exports.__esModule = true;

var _babelCore = require('babel-core');

const babelOptions = {
  babelrc: true,
  ast: false,
  sourceMaps: 'inline',
  filename: 'user-transform.js'
};

exports.default = code => (0, _babelCore.transform)(code, babelOptions).code;

module.exports = exports['default'];