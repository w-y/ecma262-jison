const BaseNode = require('./Base');

function ContinueStatementNode(label, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'ContinueStatement' }, ...args));
  this.label = label;
}

module.exports = ContinueStatementNode;
