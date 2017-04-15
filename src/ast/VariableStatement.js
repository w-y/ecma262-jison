const BaseNode = require('./Base');

function VariableStatementNode(...args) {
  BaseNode.call(this, Object.assign({}, { type: 'VariableStatement' }, ...args));
}

function VariableDeclarationNode(id, init, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'VariableDeclaration' }, ...args));
  this.id = id;
  this.init = init;
}

exports.VariableStatementNode = VariableStatementNode;
exports.VariableDeclarationNode = VariableDeclarationNode;
