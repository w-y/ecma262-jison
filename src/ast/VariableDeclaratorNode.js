const BaseNode = require('./Base');

function VariableDeclaratorNode(id, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'VariableDeclarator' }, ...args));
  this.id = id;
}

module.exports = VariableDeclaratorNode;
