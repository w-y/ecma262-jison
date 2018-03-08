'use strict';

var BaseNode = require('./Base');

function LogicalExpressionNode(type, operator, left, right) {
  for (var _len = arguments.length, args = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
    args[_key - 4] = arguments[_key];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: type }].concat(args)));
  this.operator = operator;
  this.left = left;
  this.right = right;
}

function LogicalORExpressionNode(operator, left, right) {
  for (var _len2 = arguments.length, args = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
    args[_key2 - 3] = arguments[_key2];
  }

  LogicalExpressionNode.call.apply(LogicalExpressionNode, [this, 'LogicalORExpression', operator, left, right].concat(args));
}

function LogicalANDExpressionNode(operator, left, right) {
  for (var _len3 = arguments.length, args = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
    args[_key3 - 3] = arguments[_key3];
  }

  LogicalExpressionNode.call.apply(LogicalExpressionNode, [this, 'LogicalANDExpression', operator, left, right].concat(args));
}

exports.LogicalORExpressionNode = LogicalORExpressionNode;
exports.LogicalANDExpressionNode = LogicalANDExpressionNode;