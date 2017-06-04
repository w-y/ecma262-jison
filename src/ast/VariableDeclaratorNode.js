const BaseNode = require('./Base');

function VariableDeclaratorNode(id, init, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'VariableDeclarator' }, ...args));
  this.id = id;
  this.init = init;
}

module.exports = VariableDeclaratorNode;
