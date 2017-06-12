const BaseNode = require('./Base');

function ExpressionStatementNode(expression, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'ExpressionStatement' }, ...args));
  this.expression = expression;
}

exports.ExpressionStatementNode = ExpressionStatementNode;
