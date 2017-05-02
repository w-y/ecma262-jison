const BaseNode = require('./Base');

function ArrayBindingPattern(elements, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'ArrayBindingPattern' }, ...args));
  this.elements = elements;
}

module.exports = ArrayBindingPattern;
