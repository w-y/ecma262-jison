const BaseNode = require('./Base');

function ShiftExpressionNode(operator, left, right, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'ShiftExpression' }, ...args));
  this.operator = operator;
  this.left = left;
  this.right = right;
}

exports.ShiftExpressionNode = ShiftExpressionNode;
