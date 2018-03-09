'use strict';

var BaseNode = require('./Base');

function getStringLiteralValue(raw) {
  return raw.substring(1, raw.length - 1);
}

function getDecimalLiteralValue(raw) {
  return parseFloat(raw);
}

function getHexLiteralValue(raw) {
  return parseInt(raw, 16);
}

function LiteralNode(value) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'Literal' }].concat(args)));
  this.value = value;
}

function NullLiteralNode() {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  LiteralNode.call.apply(LiteralNode, [this, 'null'].concat(args));
}

function BooleanLiteralNode(value) {
  for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  if (value === 'true') {
    LiteralNode.call.apply(LiteralNode, [this, true].concat(args));
  } else {
    LiteralNode.call.apply(LiteralNode, [this, false].concat(args));
  }
}

function StringLiteralNode(value) {
  for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }

  LiteralNode.call.apply(LiteralNode, [this, getStringLiteralValue(value)].concat(args));
}

function DecimalLiteralNode(value) {
  for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    args[_key5 - 1] = arguments[_key5];
  }

  LiteralNode.call.apply(LiteralNode, [this, getDecimalLiteralValue(value)].concat(args));
}

function HexIntegerLiteralNode(value) {
  for (var _len6 = arguments.length, args = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
    args[_key6 - 1] = arguments[_key6];
  }

  LiteralNode.call.apply(LiteralNode, [this, getHexLiteralValue(value)].concat(args));
}

function ArrayLiteralNode(elements) {
  for (var _len7 = arguments.length, args = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
    args[_key7 - 1] = arguments[_key7];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'ArrayLiteral' }].concat(args)));
  this.elements = elements;
}

function ObjectLiteralNode(properties) {
  for (var _len8 = arguments.length, args = Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
    args[_key8 - 1] = arguments[_key8];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'ObjectLiteral' }].concat(args)));
  this.properties = properties;
}

function TemplateLiteralNode(quasis, expressions) {
  for (var _len9 = arguments.length, args = Array(_len9 > 2 ? _len9 - 2 : 0), _key9 = 2; _key9 < _len9; _key9++) {
    args[_key9 - 2] = arguments[_key9];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'TemplateLiteral' }].concat(args)));
  this.quasis = quasis;
  this.expressions = expressions;
}

function TemplateElementNode(raw, isTail) {
  for (var _len10 = arguments.length, args = Array(_len10 > 2 ? _len10 - 2 : 0), _key10 = 2; _key10 < _len10; _key10++) {
    args[_key10 - 2] = arguments[_key10];
  }

  LiteralNode.call(this, raw, Object.assign.apply(Object, [{}, { type: 'TemplateElement' }].concat(args)));
  this.isTail = isTail;
}

function RegexpLiteralNode(raw, pattern, flags) {
  for (var _len11 = arguments.length, args = Array(_len11 > 3 ? _len11 - 3 : 0), _key11 = 3; _key11 < _len11; _key11++) {
    args[_key11 - 3] = arguments[_key11];
  }

  LiteralNode.call(this, raw, Object.assign.apply(Object, [{}, { type: 'RegexpLiteral' }].concat(args)));
  this.pattern = pattern;
  this.flags = flags;
}

exports.NullLiteralNode = NullLiteralNode;
exports.BooleanLiteralNode = BooleanLiteralNode;
exports.StringLiteralNode = StringLiteralNode;
exports.DecimalLiteralNode = DecimalLiteralNode;
exports.HexIntegerLiteralNode = HexIntegerLiteralNode;
exports.ArrayLiteralNode = ArrayLiteralNode;
exports.ObjectLiteralNode = ObjectLiteralNode;
exports.TemplateLiteralNode = TemplateLiteralNode;
exports.TemplateElementNode = TemplateElementNode;
exports.RegexpLiteralNode = RegexpLiteralNode;