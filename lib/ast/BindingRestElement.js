'use strict';

var BaseNode = require('./Base');

function BindingIdentifierNode(id) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'BindingRestElement' }].concat(args)));
  this.id = id;
}

function BindingPatternNode(elements) {
  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'BindingPattern' }].concat(args)));
  this.elements = elements;
}

exports.BindingIdentifierNode = BindingIdentifierNode;
exports.BindingPatternNode = BindingPatternNode;