'use strict';

var BaseNode = require('./Base');

function AssignmentExpressionNode(operator, left, right) {
  for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'AssignmentExpression' }].concat(args)));
  this.operator = operator;
  this.left = left;
  this.right = right;
}

exports.AssignmentExpressionNode = AssignmentExpressionNode;