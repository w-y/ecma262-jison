'use strict';

var BaseNode = require('./Base');

function ClassExpressionNode(id, body, superClass) {
  for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'ClassExpression' }].concat(args)));

  this.id = id;
  this.body = body;
  this.superClass = superClass;
}

exports.ClassExpressionNode = ClassExpressionNode;

function ClassDeclarationNode(id, body, superClass) {
  for (var _len2 = arguments.length, args = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
    args[_key2 - 3] = arguments[_key2];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'ClassDeclaration' }].concat(args)));

  this.id = id;
  this.body = body;
  this.superClass = superClass;
}

exports.ClassDeclarationNode = ClassDeclarationNode;

function MethodDefinitionNode(key, value, kind) {
  for (var _len3 = arguments.length, args = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
    args[_key3 - 3] = arguments[_key3];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'MethodDefinition' }].concat(args)));

  this.key = key;
  this.value = value;
  this.kind = kind;
}

exports.MethodDefinitionNode = MethodDefinitionNode;

function ClassBody(body) {
  for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'ClassBody' }].concat(args)));

  this.body = body;
}

exports.ClassBody = ClassBody;