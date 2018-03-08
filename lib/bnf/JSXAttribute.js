'use strict';

module.exports = {
  conditions: [''],
  name: 'JSXAttribute',
  rules: ['JSXAttributeName = JSXAttributeValue', 'JSXAttributeName'],
  handlers: ['$$ = new (require(\'./ast/JSXElement\').JSXAttributeNode)($1, $3, { loc: this._$, yy });', '$$ = new (require(\'./ast/JSXElement\').JSXAttributeNode)($1, null, { loc: this._$, yy });'],
  subRules: [require('./JSXAttributeName'), require('./JSXAttributeValue')]
};