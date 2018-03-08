'use strict';

var BaseNode = require('./Base');

function UpdateExpressionNode(operator, operand, prefix) {
  for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'UpdateExpression' }].concat(args)));
  this.operator = operator;
  this.operand = operand;
  this.prefix = prefix;
}

exports.UpdateExpressionNode = UpdateExpressionNode;