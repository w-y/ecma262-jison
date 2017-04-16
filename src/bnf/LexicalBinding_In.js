module.exports = {
  conditions: [''],
  name: 'LexicalBinding_In',
  rules: [
    'BindingIdentifier',
    'BindingIdentifier Initializer_In',
    'BindingPattern Initializer_In',
  ],
  handlers: [
    '$$ = new (require(\'./ast/VariableDeclaratorNode\'))($1)',
    '$$ = new (require(\'./ast/VariableDeclaratorNode\'))($1, $2)',
    '$$ = new (require(\'./ast/VariableDeclaratorNode\'))($1, $2)',
  ],
  subRules: [
    require('./BindingIdentifier'),
    require('./BindingPattern'),
    require('./Initializer_In'),
  ],
};
