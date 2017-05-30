const BaseNode = require('./Base');

function SwitchStatementNode(discriminant, cases, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'SwitchStatement' }, ...args));
  this.discriminant = discriminant;
  this.cases = cases;
}

function SwitchCaseNode(test, consequent, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'SwitchCase' }, ...args));
  this.test = test;
  this.consequent = consequent;
}

exports.SwitchStatementNode = SwitchStatementNode;

exports.SwitchCaseNode = SwitchCaseNode;
