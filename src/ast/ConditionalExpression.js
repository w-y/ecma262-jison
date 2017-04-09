const BaseNode = require('./Base');

function ConditionalExpressionNode(test, consequent, alternate, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'ConditionalExpression' }, ...args));
  this.test = test;
  this.consequent = consequent;
  this.alternate = alternate;
}

exports.ConditionalExpressionNode = ConditionalExpressionNode;
