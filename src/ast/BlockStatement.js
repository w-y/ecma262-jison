const BaseNode = require('./Base');

function BlockStatementNode(body, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'BlockStatement' }, ...args));
  this.body = body;
}

exports.BlockStatementNode = BlockStatementNode;
