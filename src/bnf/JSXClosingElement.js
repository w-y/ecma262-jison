module.exports = {
  conditions: [''],
  name: 'JSXClosingElement',
  rules: [
    'JSXClosing JSXElementName >',
  ],
  handlers: [
    '$$ = new (require(\'./ast/JSXElement\').JSXClosingElementNode)($2, [], false, { loc: this._$, yy });',
  ],
  subRules: [
    require('./JSXElementName'),
  ],
};
