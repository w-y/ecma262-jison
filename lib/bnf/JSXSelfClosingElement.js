'use strict';

module.exports = {
  conditions: [''],
  name: 'JSXSelfClosingElement',
  rules: ['< JSXElementName JSXSelfClosing', '< JSXElementName JSXAttributes JSXSelfClosing'],
  handlers: ['$$ = new (require(\'./ast/JSXElement\').JSXOpeningElementNode)($2, [], true, { loc: this._$, yy });', '$$ = new (require(\'./ast/JSXElement\').JSXOpeningElementNode)($2, $3, true, { loc: this._$, yy });'],
  subRules: [require('./JSXElementName'), require('./JSXAttributes')]
};