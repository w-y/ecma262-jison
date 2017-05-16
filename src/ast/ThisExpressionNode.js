const BaseNode = require('./Base');

function ThisExpressionNode(body, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'ThisExpression' }, ...args));
  this.body = body;
}

module.exports = ThisExpressionNode;
