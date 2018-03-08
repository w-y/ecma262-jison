'use strict';

var BaseNode = require('./Base');

function IfStatementNode(test, consequent, alternate) {
  for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'IfStatement' }].concat(args)));
  this.test = test;
  this.consequent = consequent;
  this.alternate = alternate;
}

exports.IfStatementNode = IfStatementNode;