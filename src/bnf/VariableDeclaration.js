module.exports = {
  conditions: [''],
  name: 'VariableDeclaration',
  rules: [
    'BindingIdentifier',
    'BindingIdentifier Initializer',
    'BindingPattern Initializer',
  ],
  handlers: [
    '$$ = new (require(\'./ast/VariableStatement\').VariableDeclarationNode)($1)',
    '$$ = new (require(\'./ast/VariableStatement\').VariableDeclarationNode)($1, $2)',
    '$$ = new (require(\'./ast/VariableStatement\').VariableDeclarationNode)($1, $2)',
  ],
  subRules: [
    require('./BindingIdentifier'),
    require('./Initializer'),
    require('./BindingPattern'),
  ],
};
