module.exports = {
  conditions: [''],
  name: 'VariableDeclaration',
  rules: [
    'BindingIdentifier',
    'BindingIdentifier Initializer',
    'BindingPattern Initializer',
  ],
  handlers: [
    '$$ = new (require(\'./ast/VariableDeclaratorNode\'))($1, null, { loc: this._$, yy })',
    '$$ = new (require(\'./ast/VariableDeclaratorNode\'))($1, $2, { loc: this._$, yy })',
    '$$ = new (require(\'./ast/VariableDeclaratorNode\'))($1, $2, { loc: this._$, yy })',
  ],
  subRules: [
    require('./BindingIdentifier'),
    require('./Initializer'),
    require('./BindingPattern'),
  ],
};
