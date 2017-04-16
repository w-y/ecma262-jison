const BaseNode = require('./Base');

function IfStatementNode(test, consequent, alternate, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'IfStatement' }, ...args));
  this.test = test;
  this.consequent = consequent;
  this.alternate = alternate;
}

exports.IfStatementNode = IfStatementNode;
