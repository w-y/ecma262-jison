const BaseNode = require('./Base');

function LogicalExpressionNode(type, operator, left, right, ...args) {
  BaseNode.call(this, Object.assign({}, { type }, ...args));
  this.operator = operator;
  this.left = left;
  this.right = right;
}

function LogicalORExpressionNode(operator, left, right, ...args) {
  LogicalExpressionNode.call(this, 'LogicalORExpression', operator, left, right, ...args);
}

function LogicalANDExpressionNode(operator, left, right, ...args) {
  LogicalExpressionNode.call(this, 'LogicalANDExpression', operator, left, right, ...args);
}

exports.LogicalORExpressionNode = LogicalORExpressionNode;
exports.LogicalANDExpressionNode = LogicalANDExpressionNode;
