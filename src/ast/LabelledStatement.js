const BaseNode = require('./Base');

function LabelledStatementNode(label, body, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'LabelledStatement' }, ...args));
  this.label = label;
  this.body = body;
}

exports.LabelledStatementNode = LabelledStatementNode;
