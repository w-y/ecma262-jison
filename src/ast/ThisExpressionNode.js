const BaseNode = require('./Base');

function ThisExpressionNode(...args) {
  BaseNode.call(this, Object.assign({}, { type: 'ThisExpression' }, ...args));
}

module.exports = ThisExpressionNode;
