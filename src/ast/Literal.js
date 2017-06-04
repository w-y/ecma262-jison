const BaseNode = require('./Base');

function getStringLiteralValue(raw) {
  return raw.substring(1, raw.length - 1);
}

function getDecimalLiteralValue(raw) {
  return parseFloat(raw);
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

function ArrayLiteralNode(elements, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'ArrayLiteral' }, ...args));
  this.elements = elements;
}

function ObjectLiteralNode(properties, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'ObjectLiteral' }, ...args));
  this.properties = properties;
}

exports.NullLiteralNode = NullLiteralNode;
exports.BooleanLiteralNode = BooleanLiteralNode;
exports.StringLiteralNode = StringLiteralNode;
exports.DecimalLiteralNode = DecimalLiteralNode;
exports.ArrayLiteralNode = ArrayLiteralNode;
exports.ObjectLiteralNode = ObjectLiteralNode;
