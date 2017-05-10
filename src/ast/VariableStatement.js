const BaseNode = require('./Base');

function VariableStatementNode(declarations, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'VariableStatement' }, ...args));
  this.declarations = declarations;
}

exports.VariableStatementNode = VariableStatementNode;
