const BaseNode = require('./Base');

function TryStatementNode(block, handler, finalizer, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'TryStatement' }, ...args));
  this.block = block;
  this.handler = handler;
  this.finalizer = finalizer;
}

exports.TryStatementNode = TryStatementNode;
