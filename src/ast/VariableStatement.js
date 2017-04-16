const BaseNode = require('./Base');

function VariableStatementNode(...args) {
  BaseNode.call(this, Object.assign({}, { type: 'VariableStatement' }, ...args));
}

exports.VariableStatementNode = VariableStatementNode;
