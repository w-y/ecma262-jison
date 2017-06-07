const BaseNode = require('./Base');

function ExponentiationExpressionNode(operator, left, right, ...args) {
  BaseNode.call(this, Object.assign({ type: 'ExponentiationExpression' }, ...args));
  this.operator = operator;
  this.left = left;
  this.right = right;
}

exports.ExponentiationExpressionNode = ExponentiationExpressionNode;
