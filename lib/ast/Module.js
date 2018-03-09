'use strict';

var BaseNode = require('./Base');

function ImportDeclarationNode(source, specifiers) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'ImportDeclaration' }].concat(args)));

  this.source = source;
  this.specifiers = specifiers || [];
}

exports.ImportDeclarationNode = ImportDeclarationNode;

function ImportedDefaultBindingNode(local) {
  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'ImportedDefaultBinding' }].concat(args)));

  this.local = local;
}

exports.ImportedDefaultBindingNode = ImportedDefaultBindingNode;

function ImportNamespaceBindingNode(local) {
  for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'ImportNamespaceBinding' }].concat(args)));

  this.local = local;
}

exports.ImportNamespaceBindingNode = ImportNamespaceBindingNode;

function ImportSpecifierNode(local, imported) {
  for (var _len4 = arguments.length, args = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
    args[_key4 - 2] = arguments[_key4];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'ImportSpecifier' }].concat(args)));

  this.local = local;
  this.imported = imported;
}

exports.ImportSpecifierNode = ImportSpecifierNode;

function ExportAllDeclarationNode(source) {
  for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    args[_key5 - 1] = arguments[_key5];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'ExportAllDeclaration' }].concat(args)));

  this.source = source;
}

exports.ExportAllDeclarationNode = ExportAllDeclarationNode;

function ExportNamedDeclarationNode(specifiers, source, declaration) {
  for (var _len6 = arguments.length, args = Array(_len6 > 3 ? _len6 - 3 : 0), _key6 = 3; _key6 < _len6; _key6++) {
    args[_key6 - 3] = arguments[_key6];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'ExportNamedDeclaration' }].concat(args)));

  this.specifiers = specifiers;
  this.source = source;
  this.declaration = declaration;
}

exports.ExportNamedDeclarationNode = ExportNamedDeclarationNode;

function ExportDefaultDeclarationNode(declaration) {
  for (var _len7 = arguments.length, args = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
    args[_key7 - 1] = arguments[_key7];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'ExportDefaultDeclaration' }].concat(args)));
  this.declaration = declaration;
}

exports.ExportDefaultDeclarationNode = ExportDefaultDeclarationNode;

function ExportSpecifierNode(local, exported) {
  for (var _len8 = arguments.length, args = Array(_len8 > 2 ? _len8 - 2 : 0), _key8 = 2; _key8 < _len8; _key8++) {
    args[_key8 - 2] = arguments[_key8];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'ExportSpecifier' }].concat(args)));

  this.local = local;
  this.exported = exported;
}

exports.ExportSpecifierNode = ExportSpecifierNode;