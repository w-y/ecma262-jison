const BaseNode = require('./Base');
const BlockStatementNode = require('./BlockStatement').BlockStatementNode;

function FunctionExpressionNode(id, params, body, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'FunctionExpression' }, ...args));
  this.id = id;
  this.params = params;
  this.body = body;

  // TODO: empty body comment range

  if (!this.body) {
    this.body = new BlockStatementNode([], ...args);
  }
}

exports.FunctionExpressionNode = FunctionExpressionNode;
