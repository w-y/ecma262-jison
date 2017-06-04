module.exports = {
  conditions: [''],
  name: 'ForBinding',
  rules: [
    'BindingIdentifier',
    'BindingPattern',
  ],
  handlers: [
    '$$ = new (require(\'./ast/VariableDeclaratorNode\'))($1, null, { loc: this._$, yy })',
    '$$ = new (require(\'./ast/VariableDeclaratorNode\'))($1, null, { loc: this._$, yy })',
  ],
  subRules: [
    require('./BindingIdentifier'),
    require('./BindingPattern'),
  ],
};
