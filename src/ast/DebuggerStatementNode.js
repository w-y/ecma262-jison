const BaseNode = require('./Base');

function DebuggerStatementNode(...args) {
  BaseNode.call(this, Object.assign({}, { type: 'DebuggerStatement' }, ...args));
}

exports.DebuggerStatementNode = DebuggerStatementNode;
