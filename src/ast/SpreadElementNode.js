const BaseNode = require('./Base');

function SpreadElementNode(element, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'SpreadElement' }, ...args));
  this.element = element;
}

module.exports = SpreadElementNode;
