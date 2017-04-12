const BaseNode = require('./Base');

function AdditiveExpressionNode(operator, left, right, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'AdditiveExpression' }, ...args));
  this.operator = operator;
  this.left = left;
  this.right = right;
}

exports.AdditiveExpressionNode = AdditiveExpressionNode;
