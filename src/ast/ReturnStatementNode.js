const BaseNode = require('./Base');

function ReturnStatementNode(params, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'ReturnStatement' }, ...args));
  this.params = params;
}

module.exports = ReturnStatementNode;
