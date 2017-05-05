const BaseNode = require('./Base');

function SequenceExpressionNode(expressions, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'SequenceExpression' }, ...args));
  this.expressions = expressions;
}

module.exports = SequenceExpressionNode;
