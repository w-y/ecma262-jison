module.exports = {
  conditions: [''],
  name: 'FunctionDeclaration_Default',
  rules: [
    'FUNCTION BindingIdentifier ( ) { FunctionBody }',
    'FUNCTION BindingIdentifier ( ) { }',
    'FUNCTION BindingIdentifier ( FormalParameters ) { FunctionBody }',
    'FUNCTION BindingIdentifier ( FormalParameters ) { }',
    'FUNCTION ( ) { }',
    'FUNCTION ( ) { FunctionBody }',
    'FUNCTION ( FormalParameters  ) { }',
    'FUNCTION ( FormalParameters  ) { FunctionBody }',
  ],
  handlers: [
    '$$ = new (require(\'./ast/FunctionDeclaration\').FunctionDeclarationNode)($2, [], $6)',
    '$$ = new (require(\'./ast/FunctionDeclaration\').FunctionDeclarationNode)($2, [], null)',
    '$$ = new (require(\'./ast/FunctionDeclaration\').FunctionDeclarationNode)($2, $4, $7)',
    '$$ = new (require(\'./ast/FunctionDeclaration\').FunctionDeclarationNode)($2, $4, null)',
    '$$ = new (require(\'./ast/FunctionDeclaration\').FunctionDeclarationNode)(null, [], null)',
    '$$ = new (require(\'./ast/FunctionDeclaration\').FunctionDeclarationNode)(null, [], $5)',
    '$$ = new (require(\'./ast/FunctionDeclaration\').FunctionDeclarationNode)(null, $3, null)',
    '$$ = new (require(\'./ast/FunctionDeclaration\').FunctionDeclarationNode)(null, $3, $6)',
  ],
  subRules: [
    require('./BindingIdentifier'),
    require('./FunctionBody'),
    require('./FormalParameters'),
  ],
};
