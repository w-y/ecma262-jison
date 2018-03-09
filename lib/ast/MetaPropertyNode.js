'use strict';

var BaseNode = require('./Base');

function MetaPropertyNode(meta, property) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'MetaProperty' }].concat(args)));
  this.meta = meta;
  this.property = property;
}

module.exports = MetaPropertyNode;