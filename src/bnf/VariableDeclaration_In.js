module.exports = {
  conditions: [''],
  name: 'VariableDeclaration_In',
  rules: [
    'BindingIdentifier',
    'BindingIdentifier Initializer_In',
    'BindingPattern Initializer_In',
  ],
  handlers: [
    '$$ = new (require(\'./ast/VariableStatement\').VariableDeclarationNode)($1)',
    '$$ = new (require(\'./ast/VariableStatement\').VariableDeclarationNode)($1, $2)',
    '$$ = new (require(\'./ast/VariableStatement\').VariableDeclarationNode)($1, $2)',
  ],
  subRules: [
    require('./BindingIdentifier'),
    require('./Initializer_In'),
    require('./BindingPattern'),
  ],
};
