const BaseNode = require('./Base');

function BindingIdentifierNode(id, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'BindingRestElement' }, ...args));
  this.id = id;
}

function BindingPatternNode(elements, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'BindingPattern' }, ...args));
  this.elements = elements;
}

exports.BindingIdentifierNode = BindingIdentifierNode;
exports.BindingPatternNode = BindingPatternNode;
