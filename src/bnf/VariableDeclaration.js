module.exports = {
  conditions: [''],
  name: 'VariableDeclaration',
  rules: [
    'BindingIdentifier',
    'BindingIdentifier Initializer',
    'BindingPattern Initializer',
  ],
  handlers: [
    '$$ = new (require(\'./ast/VariableDeclaratorNode\'))($1, { loc: this._$, lexer: yy.lexer })',
    '$$ = new (require(\'./ast/VariableDeclaratorNode\'))($1, $2, { loc: this._$, lexer: yy.lexer })',
    '$$ = new (require(\'./ast/VariableDeclaratorNode\'))($1, $2, { loc: this._$, lexer: yy.lexer })',
  ],
  subRules: [
    require('./BindingIdentifier'),
    require('./Initializer'),
    require('./BindingPattern'),
  ],
};
