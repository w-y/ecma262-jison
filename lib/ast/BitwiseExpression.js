'use strict';

var BaseNode = require('./Base');

function BitwiseExpression(type, operator, left, right) {
  for (var _len = arguments.length, args = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
    args[_key - 4] = arguments[_key];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: type }].concat(args)));
  this.operator = operator;
  this.left = left;
  this.right = right;
}

function BitwiseORExpressionNode(operator, left, right) {
  for (var _len2 = arguments.length, args = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
    args[_key2 - 3] = arguments[_key2];
  }

  BitwiseExpression.call.apply(BitwiseExpression, [this, 'BitwiseORExpression', operator, left, right].concat(args));
}

function BitwiseXORExpressionNode(operator, left, right) {
  for (var _len3 = arguments.length, args = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
    args[_key3 - 3] = arguments[_key3];
  }

  BitwiseExpression.call.apply(BitwiseExpression, [this, 'BitwiseXORExpression', operator, left, right].concat(args));
}

function BitwiseANDExpressionNode(operator, left, right) {
  for (var _len4 = arguments.length, args = Array(_len4 > 3 ? _len4 - 3 : 0), _key4 = 3; _key4 < _len4; _key4++) {
    args[_key4 - 3] = arguments[_key4];
  }

  BitwiseExpression.call.apply(BitwiseExpression, [this, 'BitwiseANDExpression', operator, left, right].concat(args));
}

exports.BitwiseORExpressionNode = BitwiseORExpressionNode;
exports.BitwiseXORExpressionNode = BitwiseXORExpressionNode;
exports.BitwiseANDExpressionNode = BitwiseANDExpressionNode;