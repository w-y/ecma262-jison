'use strict';

module.exports = {
  conditions: [''],
  name: 'JSXOpeningElement',
  rules: ['< JSXElementName >', '< JSXElementName JSXAttributes >'],
  handlers: ['$$ = new (require(\'./ast/JSXElement\').JSXOpeningElementNode)($2, [], false, { loc: this._$, yy });', '$$ = new (require(\'./ast/JSXElement\').JSXOpeningElementNode)($2, $3, false, { loc: this._$, yy });'],
  subRules: [require('./JSXElementName'), require('./JSXAttributes')]
};