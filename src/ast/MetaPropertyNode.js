const BaseNode = require('./Base');

function MetaPropertyNode(meta, property, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'MetaProperty' }, ...args));
  this.meta = meta;
  this.property = property;
}

module.exports = MetaPropertyNode;
