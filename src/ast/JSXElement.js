const BaseNode = require('./Base');

function JSXElementNode(openingElement, closingElement, children, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'JSXElement' }, ...args));

  this.openingElement = openingElement;
  this.closingElement = closingElement;
  this.children = children;
}

exports.JSXElementNode = JSXElementNode;

function JSXOpeningElementNode(name, attributes, selfClosing, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'JSXOpeningElement' }, ...args));

  this.name = name;
  this.attributes = attributes;
  this.selfClosing = selfClosing;
}

exports.JSXOpeningElementNode = JSXOpeningElementNode;

exports.JSXClosingElementNode = JSXOpeningElementNode;

function JSXAttributeNode(name, value, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'JSXAttribute' }, ...args));

  this.name = name;
  this.value = value;
}

exports.JSXAttributeNode = JSXAttributeNode;

function JSXSpreadAttributeNode(argument, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'JSXSpreadAttribute' }, ...args));

  this.argument = argument;
}

exports.JSXSpreadAttributeNode = JSXSpreadAttributeNode;

function JSXExpressionContainerNode(expression, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'JSXExpressionContainer' }, ...args));
  this.expression = expression;
}

exports.JSXExpressionContainerNode = JSXExpressionContainerNode;


function JSXMemberExpressionNode(object, property, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'JSXMemberExpression' }, ...args));

  this.object = object;
  this.property = property;
}

exports.JSXMemberExpressionNode = JSXMemberExpressionNode;

function JSXIdentifierNode(name, ...args) {
  BaseNode.call(this, Object.assign({ type: 'JSXIdentifier' }, ...args));
  this.name = name;
}

exports.JSXIdentifierNode = JSXIdentifierNode;
