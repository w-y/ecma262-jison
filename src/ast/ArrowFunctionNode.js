const BaseNode = require('./Base');

function ArrowFunctionNode(params, body, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'ArrowFunction' }, ...args));
  this.params = params;
  this.body = body;
}

module.exports = ArrowFunctionNode;
