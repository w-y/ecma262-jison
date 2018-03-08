'use strict';

var BaseNode = require('./Base');

function SwitchStatementNode(discriminant, cases) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'SwitchStatement' }].concat(args)));
  this.discriminant = discriminant;
  this.cases = cases;
}

function SwitchCaseNode(test, consequent) {
  for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'SwitchCase' }].concat(args)));
  this.test = test;
  this.consequent = consequent;
}

exports.SwitchStatementNode = SwitchStatementNode;

exports.SwitchCaseNode = SwitchCaseNode;