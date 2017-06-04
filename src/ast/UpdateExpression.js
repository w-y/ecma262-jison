const BaseNode = require('./Base');

function UpdateExpressionNode(operator, operand, prefix, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'UpdateExpression' }, ...args));
  this.operator = operator;
  this.operand = operand;
  this.prefix = prefix;
}

exports.UpdateExpressionNode = UpdateExpressionNode;
