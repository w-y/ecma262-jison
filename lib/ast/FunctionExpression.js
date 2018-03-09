'use strict';

var BaseNode = require('./Base');

function FunctionExpressionNode(id, parameters, body) {
  for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'FunctionExpression' }].concat(args)));
  this.id = id;
  this.params = parameters;
  this.body = body;
}

exports.FunctionExpressionNode = FunctionExpressionNode;