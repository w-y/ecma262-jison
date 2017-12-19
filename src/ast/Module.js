const BaseNode = require('./Base');

function ImportDeclarationNode(source, specifiers, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'ImportDeclaration' }, ...args));

  this.source = source;
  this.specifiers = specifiers || [];
}

exports.ImportDeclarationNode = ImportDeclarationNode;


function ImportedDefaultBindingNode(local, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'ImportedDefaultBinding' }, ...args));

  this.local = local;
}

exports.ImportedDefaultBindingNode = ImportedDefaultBindingNode;

function ImportNamespaceBindingNode(local, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'ImportNamespaceBinding' }, ...args));

  this.local = local;
}

exports.ImportNamespaceBindingNode = ImportNamespaceBindingNode;

function ImportSpecifierNode(local, imported, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'ImportSpecifier' }, ...args));

  this.local = local;
  this.imported = imported;
}

exports.ImportSpecifierNode = ImportSpecifierNode;

function ExportAllDeclarationNode(source, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'ExportAllDeclaration' }, ...args));

  this.source = source;
}

exports.ExportAllDeclarationNode = ExportAllDeclarationNode;

function ExportNamedDeclarationNode(specifiers, source, declaration, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'ExportNamedDeclaration' }, ...args));

  this.specifiers = specifiers;
  this.source = source;
  this.declaration = declaration;
}

exports.ExportNamedDeclarationNode = ExportNamedDeclarationNode;

function ExportDefaultDeclarationNode(declaration, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'ExportDefaultDeclaration' }, ...args));
  this.declaration = declaration;
}

exports.ExportDefaultDeclarationNode = ExportDefaultDeclarationNode;

function ExportSpecifierNode(local, exported, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'ExportSpecifier' }, ...args));

  this.local = local;
  this.exported = exported;
}

exports.ExportSpecifierNode = ExportSpecifierNode;
