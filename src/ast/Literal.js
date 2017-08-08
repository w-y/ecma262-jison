const BaseNode = require('./Base');

function getStringLiteralValue(raw) {
  return raw.substring(1, raw.length - 1);
}

function getDecimalLiteralValue(raw) {
  return parseFloat(raw);
}

function getHexLiteralValue(raw) {
  return parseInt(raw, 16);
}

function LiteralNode(value, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'Literal' }, ...args));
  this.value = value;
}

function NullLiteralNode(...args) {
  LiteralNode.call(this, 'null', ...args);
}

function BooleanLiteralNode(value, ...args) {
  if (value === 'true') {
    LiteralNode.call(this, true, ...args);
  } else {
    LiteralNode.call(this, false, ...args);
  }
}

function StringLiteralNode(value, ...args) {
  LiteralNode.call(this, getStringLiteralValue(value), ...args);
}

function DecimalLiteralNode(value, ...args) {
  LiteralNode.call(this, getDecimalLiteralValue(value), ...args);
}

function HexIntegerLiteralNode(value, ...args) {
  LiteralNode.call(this, getHexLiteralValue(value), ...args);
}

function ArrayLiteralNode(elements, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'ArrayLiteral' }, ...args));
  this.elements = elements;
}

function ObjectLiteralNode(properties, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'ObjectLiteral' }, ...args));
  this.properties = properties;
}

function TemplateLiteralNode(quasis, expressions, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'TemplateLiteral' }, ...args));
  this.quasis = quasis;
  this.expressions = expressions;
}

function TemplateElementNode(raw, isTail, ...args) {
  LiteralNode.call(this, raw, Object.assign({}, { type: 'TemplateElement' }, ...args));
  this.isTail = isTail;
}

function RegexpLiteralNode(raw, pattern, flags, ...args) {
  LiteralNode.call(this, raw, Object.assign({}, { type: 'RegexpLiteral' }, ...args));
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
