module.exports = {
  conditions: [''],
  name: 'ForBinding',
  rules: [
    'BindingIdentifier',
    'BindingPattern',
  ],
  handlers: [
    '$$ = new (require(\'./ast/VariableDeclaratorNode\'))($1, null, { loc: this._$, lexer: yy.lexer })',
    '$$ = new (require(\'./ast/VariableDeclaratorNode\'))($1, null, { loc: this._$, lexer: yy.lexer })',
  ],
  subRules: [
    require('./BindingIdentifier'),
    require('./BindingPattern'),
  ],
};
