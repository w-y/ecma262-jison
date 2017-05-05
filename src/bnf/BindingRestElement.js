module.exports = {
  conditions: [''],
  name: 'BindingRestElement',
  rules: [
    '... BindingIdentifier',
    '... BindingPattern',
  ],
  handlers: [
    '$$ = new (require(\'./ast/BindingRestElement\').BindingIdentifierNode)($2, { loc: this._$, lexer: yy.lexer })',
    '$$ = new (require(\'./ast/BindingRestElement\').BindingPatternNode)($2, { loc: this._$, lexer: yy.lexer })',
  ],
  subRules: [
    require('./BindingIdentifier'),
    require('./BindingPattern'),
  ],
};
