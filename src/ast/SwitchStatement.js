const BaseNode = require('./Base');

function SwitchStatementNode(discrimnant, cases, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'SwitchStatement' }, ...args));
  this.discrimnant = discrimnant;
  this.cases = cases;
}

function SwitchCaseNode(test, consequent, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'SwitchCase' }, ...args));
  this.test = test;
  this.consequent = consequent;
}

exports.SwitchStatementNode = SwitchStatementNode;

exports.SwitchCaseNode = SwitchCaseNode;
