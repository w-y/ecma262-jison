'use strict';

var BaseNode = require('./Base');

function FunctionDeclarationNode(id, params, body) {
  for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'FunctionDeclaration' }].concat(args)));
  this.id = id;
  this.params = params;
  this.body = body;
}

exports.FunctionDeclarationNode = FunctionDeclarationNode;