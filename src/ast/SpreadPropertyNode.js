const BaseNode = require('./Base');

function SpreadPropertyNode(argument, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'SpreadProperty' }, ...args));
  this.argument = argument;
}

module.exports = SpreadPropertyNode;
