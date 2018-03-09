'use strict';

var BaseNode = require('./Base');

function UnaryExpressionNode(operator, operand) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'UnaryExpression' }].concat(args)));
  this.operator = operator;
  this.operand = operand;
}

exports.UnaryExpressionNode = UnaryExpressionNode;