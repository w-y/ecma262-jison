const BaseNode = require('./Base');

function CoverParenthesizedExpressionNode(expressions, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'CoverParenthesizedExpression' }, ...args));
  this.expressions = expressions;
  console.log('vvvvvvvvvvvvvv');
  console.log(this.expressions);
  console.log('vvvvvvvvvvvvvv');
}

module.exports = CoverParenthesizedExpressionNode;
