const BaseNode = require('./Base');

function CoverParenthesizedExpressionNode(expressions, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'CoverParenthesizedExpression' }, ...args));
  this.expressions = expressions;
}

module.exports = CoverParenthesizedExpressionNode;
