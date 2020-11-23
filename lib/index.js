'use strict';

var parser = require('./parser');

module.exports.parse = function parse(src, opts) {
  return parser.parse(src, opts);
};