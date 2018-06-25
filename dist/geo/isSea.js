'use strict';

exports.__esModule = true;

var _isSea = require('is-sea');

var _isSea2 = _interopRequireDefault(_isSea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// switch to lon, lat for consistency with geojson
exports.default = (lon, lat) => (0, _isSea2.default)(lat, lon);

module.exports = exports['default'];