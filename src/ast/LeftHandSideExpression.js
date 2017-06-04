const BaseNode = require('./Base');

function LeftHandSideExpressionNode(type, ...args) {
  BaseNode.call(this, Object.assign({}, { type }, ...args));
}

function NewExpressionNode(callee, parameters, ...args) {
  LeftHandSideExpressionNode.call(this, 'NewExpression', ...args);
  this.callee = callee;
  this.params = parameters;
}

function CallExpressionNode(callee, parameters, ...args) {
  LeftHandSideExpressionNode.call(this, 'CallExpression', ...args);
  this.callee = callee;
  this.params = parameters;
}

function SuperCallExpressionNode(callee, parameters, ...args) {
  LeftHandSideExpressionNode.call(this, 'SuperCallExpression', ...args);
  this.callee = callee;
  this.params = parameters;
}

function MemberExpressionNode(element, property, computed, ...args) {
  LeftHandSideExpressionNode.call(this, 'MemberExpression', ...args);
  this.element = element;
  this.property = property;
  this.computed = computed;
}

exports.NewExpressionNode = NewExpressionNode;
exports.CallExpressionNode = CallExpressionNode;
exports.MemberExpressionNode = MemberExpressionNode;
exports.SuperCallExpressionNode = SuperCallExpressionNode;
