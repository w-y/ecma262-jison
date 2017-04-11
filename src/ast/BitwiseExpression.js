const BaseNode = require('./Base');

function BitwiseExpression(type, operator, left, right, ...args) {
  BaseNode.call(this, Object.assign({}, { type }, ...args));
  this.operator = operator;
  this.left = left;
  this.right = right;
}

function BitwiseORExpressionNode(operator, left, right, ...args) {
  BitwiseExpression.call(this, 'BitwiseORExpression', operator, left, right, ...args);
}

function BitwiseXORExpressionNode(operator, left, right, ...args) {
  BitwiseExpression.call(this, 'BitwiseXORExpression', operator, left, right, ...args);
}

function BitwiseANDExpressionNode(operator, left, right, ...args) {
  BitwiseExpression.call(this, 'BitwiseANDExpression', operator, left, right, ...args);
}

exports.BitwiseORExpressionNode = BitwiseORExpressionNode;
exports.BitwiseXORExpressionNode = BitwiseXORExpressionNode;
exports.BitwiseANDExpressionNode = BitwiseANDExpressionNode;
