const BaseNode = require('./Base');

function EmptyStatementNode(...args) {
  BaseNode.call(this, Object.assign({}, { type: 'EmptyStatement' }, ...args));
}

exports.EmptyStatementNode = EmptyStatementNode;
