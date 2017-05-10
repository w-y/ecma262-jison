const BaseNode = require('./Base');

function ExpressionStatementNode(expression, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'ExpressionStatementNode' }, ...args));

  this.expression = expression;
}

exports.ExpressionStatementNode = ExpressionStatementNode;
