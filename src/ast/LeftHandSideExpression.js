const BaseNode = require('./Base');

function LeftHandSideExpressionNode(type, ...args) {
  BaseNode.call(this, Object.assign({}, { type }, ...args));
}

function NewExpressionNode(callee, parameters, ...args) {
  LeftHandSideExpressionNode.call(this, 'NewExpressionNode', ...args);
  this.callee = callee;
  this.parameters = parameters;
}

function CallExpressionNode(callee, parameters, ...args) {
  LeftHandSideExpressionNode.call(this, 'CallExpressionNode', ...args);
  this.callee = callee;
  this.parameters = parameters;
}

function MemberExpressionNode(element, property, ...args) {
  LeftHandSideExpressionNode.call(this, 'MemberExpressionNode', ...args);
  this.element = element;
  this.property = property;
}

exports.NewExpressionNode = NewExpressionNode;
exports.CallExpressionNode = CallExpressionNode;
exports.MemberExpressionNode = MemberExpressionNode;
