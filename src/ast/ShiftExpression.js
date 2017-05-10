const BaseNode = require('./Base');

function ShiftExpressionNode(type, operator, left, right, ...args) {
  BaseNode.call(this, Object.assign({}, { type }, ...args));
  this.operator = operator;
  this.left = left;
  this.right = right;
}

exports.ShiftExpressionNode = ShiftExpressionNode;
