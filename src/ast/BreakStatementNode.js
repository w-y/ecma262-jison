const BaseNode = require('./Base');

function BreakStatementNode(label, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'BreakStatement' }, ...args));
  this.label = label;
}

module.exports = BreakStatementNode;
