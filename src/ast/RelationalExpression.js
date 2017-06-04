const BaseNode = require('./Base');

function RelationalExpressionNode(operator, left, right, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'RelationalExpression' }, ...args));
  this.operator = operator;
  this.left = left;
  this.right = right;
}

exports.RelationalExpressionNode = RelationalExpressionNode;
