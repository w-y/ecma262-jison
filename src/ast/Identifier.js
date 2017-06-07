const BaseNode = require('./Base');

function IdentifierNode(name, ...args) {
  BaseNode.call(this, Object.assign({ type: 'Identifier' }, ...args));
  this.name = name;
}

exports.IdentifierNode = IdentifierNode;
