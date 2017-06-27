const BaseNode = require('./Base');

function FunctionExpressionNode(id, parameters, body, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'FunctionExpression' }, ...args));
  this.id = id;
  this.params = parameters;
  this.body = body;
}

exports.FunctionExpressionNode = FunctionExpressionNode;
