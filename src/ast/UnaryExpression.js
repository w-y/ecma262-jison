const BaseNode = require('./Base');

function UnaryExpressionNode(operator, operand, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'UnaryExpression' }, ...args));
  this.operator = operator;
  this.operand = operand;
}

exports.UnaryExpressionNode = UnaryExpressionNode;
