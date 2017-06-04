const BaseNode = require('./Base');

function EqualityExpressionNode(operator, left, right, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'EqualityExpression' }, ...args));
  this.operator = operator;
  this.left = left;
  this.right = right;
}

exports.EqualityExpressionNode = EqualityExpressionNode;
