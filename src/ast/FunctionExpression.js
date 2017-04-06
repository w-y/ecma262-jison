const BaseNode = require('./Base');

function FunctionExpressionNode(id, params, body, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'FunctionExpression' }, ...args));
  this.id = id;
  this.params = params;
  this.body = body;
}

exports.FunctionExpressionNode = FunctionExpressionNode;
