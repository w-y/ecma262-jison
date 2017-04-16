module.exports = {
  conditions: [''],
  name: 'ForBinding',
  rules: [
    'BindingIdentifier',
    'BindingPattern',
  ],
  handlers: [
    '$$ = new (require(\'./ast/VariableDeclaratorNode\'))($1)',
    '$$ = new (require(\'./ast/VariableDeclaratorNode\'))($1)',
  ],
  subRules: [
    require('./BindingIdentifier'),
    require('./BindingPattern'),
  ],
};
