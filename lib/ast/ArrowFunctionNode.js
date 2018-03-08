'use strict';

var BaseNode = require('./Base');

function ArrowFunctionNode(params, body) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'ArrowFunction' }].concat(args)));
  this.params = params;
  this.body = body;
}

module.exports = ArrowFunctionNode;