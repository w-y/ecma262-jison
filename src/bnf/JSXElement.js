module.exports = {
  conditions: [''],
  name: 'JSXElement',
  rules: [
    'JSXSelfClosingElement',
    'JSXOpeningElement JSXClosingElement',
    'JSXOpeningElement JSXChildren JSXClosingElement',
  ],
  handlers: [
    '$$ = $1;',
    `$$ = new (require('./ast/JSXElement').JSXElementNode)($1, $2, null, { loc: this._$, yy });`,
    `$$ = new (require('./ast/JSXElement').JSXElementNode)($1, $3, $2, { loc: this._$, yy });`,
  ],
  subRules: [
    require('./JSXSelfClosingElement'),
    require('./JSXOpeningElement'),
    require('./JSXClosingElement'),
    require('./JSXChildren'),
  ],
};
