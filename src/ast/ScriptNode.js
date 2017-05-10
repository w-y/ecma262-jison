const BaseNode = require('./Base');

function ScriptNode(body, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'Script' }, ...args));
  this.body = body;
}

module.exports = ScriptNode;
