const BaseNode = require('./Base');

function parseStringLiteral(raw) {
  console.log(raw);
  return raw.substring(1, raw.length - 1);
}

function LiteralNode(value, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'Literal' }, ...args));
  this.value = value;
}

function NullLiteralNode(...args) {
  LiteralNode.call(this, null, ...args);
}

function BooleanLiteralNode(value, ...args) {
  if (value === 'true') {
    LiteralNode.call(this, true, ...args);
  } else {
    LiteralNode.call(this, false, ...args);
  }
}

function StringLiteralNode(value, ...args) {
  LiteralNode.call(this, parseStringLiteral(value), ...args);
}

exports.NullLiteralNode = NullLiteralNode;
exports.BooleanLiteralNode = BooleanLiteralNode;
exports.StringLiteralNode = StringLiteralNode;
