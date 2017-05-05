const BaseNode = require('./Base');

function TryStatementNode(block, handler, finalizer, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'TryStatement' }, ...args));
  this.block = block;
  this.handler = handler;
  this.finalizer = finalizer;
}

function CatchNode(id, body, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'CatchClause' }, ...args));
  this.id =  id;
  this.body = body;
}

exports.TryStatementNode = TryStatementNode;

exports.CatchNode = CatchNode;
