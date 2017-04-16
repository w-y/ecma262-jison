module.exports = {
  conditions: [''],
  name: 'LexicalBinding',
  rules: [
    'BindingIdentifier',
    'BindingIdentifier Initializer',
    'BindingPattern Initializer',
  ],
  handlers: [
    '$$ = new (require(\'./ast/VariableDeclaratorNode\'))($1)',
    '$$ = new (require(\'./ast/VariableDeclaratorNode\'))($1, $2)',
    '$$ = new (require(\'./ast/VariableDeclaratorNode\'))($1, $2)',
  ],
  subRules: [
    require('./BindingIdentifier'),
    require('./BindingPattern'),
    require('./Initializer'),
  ],
};
