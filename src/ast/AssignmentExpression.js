const BaseNode = require('./Base');

function AssignmentExpressionNode(operator, left, right, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'AssignmentExpression' }, ...args));
  this.operator = operator;
  this.left = left;
  this.right = right;
}

exports.AssignmentExpressionNode = AssignmentExpressionNode;
