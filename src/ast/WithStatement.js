const BaseNode = require('./Base');

function WithStatementNode(id, body, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'WithStatement' }, ...args));
  this.id = id;
  this.body = body;
}

exports.WithStatementNode = WithStatementNode;
