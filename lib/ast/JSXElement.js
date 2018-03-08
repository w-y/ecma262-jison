'use strict';

var BaseNode = require('./Base');

function JSXElementNode(openingElement, closingElement, children) {
  for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'JSXElement' }].concat(args)));

  this.openingElement = openingElement;
  this.closingElement = closingElement;
  this.children = children;
}

exports.JSXElementNode = JSXElementNode;

function JSXOpeningElementNode(name, attributes, selfClosing) {
  for (var _len2 = arguments.length, args = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
    args[_key2 - 3] = arguments[_key2];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'JSXOpeningElement' }].concat(args)));

  this.name = name;
  this.attributes = attributes;
  this.selfClosing = selfClosing;
}

exports.JSXOpeningElementNode = JSXOpeningElementNode;

exports.JSXClosingElementNode = JSXOpeningElementNode;

function JSXAttributeNode(name, value) {
  for (var _len3 = arguments.length, args = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    args[_key3 - 2] = arguments[_key3];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'JSXAttribute' }].concat(args)));

  this.name = name;
  this.value = value;
}

exports.JSXAttributeNode = JSXAttributeNode;

function JSXSpreadAttributeNode(argument) {
  for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'JSXSpreadAttribute' }].concat(args)));

  this.argument = argument;
}

exports.JSXSpreadAttributeNode = JSXSpreadAttributeNode;

function JSXExpressionContainerNode(expression) {
  for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    args[_key5 - 1] = arguments[_key5];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'JSXExpressionContainer' }].concat(args)));
  this.expression = expression;
}

exports.JSXExpressionContainerNode = JSXExpressionContainerNode;

function JSXMemberExpressionNode(object, property) {
  for (var _len6 = arguments.length, args = Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
    args[_key6 - 2] = arguments[_key6];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'JSXMemberExpression' }].concat(args)));

  this.object = object;
  this.property = property;
}

exports.JSXMemberExpressionNode = JSXMemberExpressionNode;

function JSXIdentifierNode(name) {
  for (var _len7 = arguments.length, args = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
    args[_key7 - 1] = arguments[_key7];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{ type: 'JSXIdentifier' }].concat(args)));
  this.name = name;
}

exports.JSXIdentifierNode = JSXIdentifierNode;