const BaseNode = require('./Base');

function UpdateExpressionNode(type, operator, operand, prefix, ...args) {
  BaseNode.call(this, Object.assign({}, { type }, ...args));
  this.operator = operator;
  this.operand = operand;
  this.prefix = prefix;
}

exports.UpdateExpressionNode = UpdateExpressionNode;
