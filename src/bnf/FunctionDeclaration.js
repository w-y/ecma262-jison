module.exports = {
  conditions: [''],
  name: 'FunctionDeclaration',
  rules: [
    'FUNCTION BindingIdentifier ( ) { FunctionBody }',
    'FUNCTION BindingIdentifier ( ) { }',
    'FUNCTION BindingIdentifier ( FormalParameters ) { FunctionBody }',
    'FUNCTION BindingIdentifier ( FormalParameters ) { }',
  ],
  handlers: [
    '$$ = new (require(\'./ast/FunctionDeclaration\').FunctionDeclarationNode)($2, [], $6, { loc: this._$, lexer: yy.lexer })',
    '$$ = new (require(\'./ast/FunctionDeclaration\').FunctionDeclarationNode)($2, [], null, { loc: this._$, lexer: yy.lexer })',
    '$$ = new (require(\'./ast/FunctionDeclaration\').FunctionDeclarationNode)($2, $4, $7, { loc: this._$, lexer: yy.lexer })',
    '$$ = new (require(\'./ast/FunctionDeclaration\').FunctionDeclarationNode)($2, $4, null, { loc: this._$, lexer: yy.lexer })',
  ],
  subRules: [
    require('./BindingIdentifier'),
    require('./FunctionBody'),
    require('./FormalParameters'),
  ],
};
