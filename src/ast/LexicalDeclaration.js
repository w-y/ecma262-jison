const BaseNode = require('./Base');

function LexicalDeclarationNode(kind, declarations, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'LexicalDeclaration' }, ...args));
  this.kind = kind;
  this.declarations = declarations;
}

exports.LexicalDeclarationNode = LexicalDeclarationNode;
