'use strict';

var BaseNode = require('./Base');

function LabelledStatementNode(label, body) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'LabelledStatement' }].concat(args)));
  this.label = label;
  this.body = body;
}

exports.LabelledStatementNode = LabelledStatementNode;