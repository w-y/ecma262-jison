const BaseNode = require('./Base');

function SuperNode(meta, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'Super' }, ...args));
}

module.exports = SuperNode;
