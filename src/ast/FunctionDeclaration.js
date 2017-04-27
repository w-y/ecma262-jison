const BaseNode = require('./Base');

function FunctionDeclarationNode(id, params, body, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'FunctionDeclaration' }, ...args));
  this.id = id;
  this.params = params;
  this.body = body;
}

exports.FunctionDeclarationNode = FunctionDeclarationNode;
