'use strict';

var BaseNode = require('./Base');

function TryStatementNode(block, handler, finalizer) {
  for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'TryStatement' }].concat(args)));
  this.block = block;
  this.handler = handler;
  this.finalizer = finalizer;
}

function CatchNode(id, body) {
  for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'CatchClause' }].concat(args)));
  this.id = id;
  this.body = body;
}

exports.TryStatementNode = TryStatementNode;

exports.CatchNode = CatchNode;