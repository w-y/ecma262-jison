const BaseNode = require('./Base');

function parseStringLiteral() {
  return '';
}

function LiteralNode(value, ...args) {
  BaseNode.call(this, 'Literal', ...args);
  this.value = value;
}

function NullLiteralNode() {
  LiteralNode.call(this, null);
}

function BooleanLiteralNode(value) {
  if (value === 'true') {
    LiteralNode.call(this, true);
  } else {
    LiteralNode.call(this, false);
  }
}

function StringLiteralNode(value) {
  LiteralNode.call(this, parseStringLiteral(value));
}

exports.NullLiteralNode = NullLiteralNode;
exports.BooleanLiteralNode = BooleanLiteralNode;
exports.StringLiteralNode = StringLiteralNode;
