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
    '$$ = new (require(\'./ast/FunctionDeclaration\').FunctionDeclarationNode)($2, [], $6, { loc: this._$, yy })',
    '$$ = new (require(\'./ast/FunctionDeclaration\').FunctionDeclarationNode)($2, [], null, { loc: this._$, yy })',
    '$$ = new (require(\'./ast/FunctionDeclaration\').FunctionDeclarationNode)($2, $4, $7, { loc: this._$, yy })',
    '$$ = new (require(\'./ast/FunctionDeclaration\').FunctionDeclarationNode)($2, $4, null, { loc: this._$, yy })',
    '$$ = new (require(\'./ast/FunctionDeclaration\').FunctionDeclarationNode)(null, [], null, { loc: this._$, yy })',
    '$$ = new (require(\'./ast/FunctionDeclaration\').FunctionDeclarationNode)(null, [], $5, { loc: this._$, yy })',
    '$$ = new (require(\'./ast/FunctionDeclaration\').FunctionDeclarationNode)(null, $3, null, { loc: this._$, yy })',
    '$$ = new (require(\'./ast/FunctionDeclaration\').FunctionDeclarationNode)(null, $3, $6, { loc: this._$, yy })',
  ],
  subRules: [
    require('./BindingIdentifier'),
    require('./FunctionBody'),
    require('./FormalParameters'),
  ],
};
