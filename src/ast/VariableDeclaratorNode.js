const BaseNode = require('./Base');

function BindingIdentifier(id, init, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'BindingIdentifier' }, ...args));
  this.id = id;
  this.init = init;
}

module.exports = BindingIdentifier;
