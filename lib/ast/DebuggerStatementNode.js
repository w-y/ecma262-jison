'use strict';

var BaseNode = require('./Base');

function DebuggerStatementNode() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'DebuggerStatement' }].concat(args)));
}

exports.DebuggerStatementNode = DebuggerStatementNode;