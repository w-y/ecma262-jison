'use strict';

var BaseNode = require('./Base');

function VariableDeclaratorNode(id, init) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'VariableDeclarator' }].concat(args)));
  this.id = id;
  this.init = init;
}

module.exports = VariableDeclaratorNode;