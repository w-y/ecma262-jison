const BaseNode = require('./Base');

function MultiplicativeExpressionNode(operator, left, right, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'MultiplicativeExpression' }, ...args));
  this.operator = operator;
  this.left = left;
  this.right = right;
}

exports.MultiplicativeExpressionNode = MultiplicativeExpressionNode;
