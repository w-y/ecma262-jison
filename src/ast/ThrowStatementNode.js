const BaseNode = require('./Base');

function ThrowStatementNode(params, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'ThrowStatement' }, ...args));
  this.params = params;
}

module.exports = ThrowStatementNode;
