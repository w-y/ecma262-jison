'use strict';

var BaseNode = require('./Base');

function LeftHandSideExpressionNode(type) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: type }].concat(args)));
}

function NewExpressionNode(callee, parameters) {
  for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  LeftHandSideExpressionNode.call.apply(LeftHandSideExpressionNode, [this, 'NewExpression'].concat(args));
  this.callee = callee;
  this.params = parameters;
}

function CallExpressionNode(callee, parameters) {
  for (var _len3 = arguments.length, args = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    args[_key3 - 2] = arguments[_key3];
  }

  LeftHandSideExpressionNode.call.apply(LeftHandSideExpressionNode, [this, 'CallExpression'].concat(args));
  this.callee = callee;
  this.params = parameters;
}

function SuperCallExpressionNode(callee, parameters) {
  for (var _len4 = arguments.length, args = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
    args[_key4 - 2] = arguments[_key4];
  }

  LeftHandSideExpressionNode.call.apply(LeftHandSideExpressionNode, [this, 'SuperCallExpression'].concat(args));
  this.callee = callee;
  this.params = parameters;
}

function MemberExpressionNode(element, property, computed) {
  for (var _len5 = arguments.length, args = Array(_len5 > 3 ? _len5 - 3 : 0), _key5 = 3; _key5 < _len5; _key5++) {
    args[_key5 - 3] = arguments[_key5];
  }

  LeftHandSideExpressionNode.call.apply(LeftHandSideExpressionNode, [this, 'MemberExpression'].concat(args));
  this.element = element;
  this.property = property;
  this.computed = computed;
}

exports.NewExpressionNode = NewExpressionNode;
exports.CallExpressionNode = CallExpressionNode;
exports.MemberExpressionNode = MemberExpressionNode;
exports.SuperCallExpressionNode = SuperCallExpressionNode;