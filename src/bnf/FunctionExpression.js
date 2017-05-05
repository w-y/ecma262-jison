module.exports = {
  conditions: [''],
  name: 'FunctionExpression',
  rules: [
    'function ( ) { }',
    'function BindingIdentifier ( ) { }',
    'function ( ) { FunctionBody }',
    'function BindingIdentifier ( ) { FunctionBody }',

    'function ( FormalParameters ) { }',
    'function BindingIdentifier ( FormalParameters ) { }',
    'function ( FormalParameters ) { FunctionBody }',
    'function BindingIdentifier ( FormalParameters ) { FunctionBody }',
  ],
  handlers: [
    '$$ = new (require(\'./ast/FunctionExpression\').FunctionExpressionNode)(null, [], null, { loc: this._$, lexer: yy.lexer })',
    '$$ = new (require(\'./ast/FunctionExpression\').FunctionExpressionNode)($2, [], null, { loc: this._$, lexer: yy.lexer })',
    '$$ = new (require(\'./ast/FunctionExpression\').FunctionExpressionNode)(null, [], $5, { loc: this._$, lexer: yy.lexer })',
    '$$ = new (require(\'./ast/FunctionExpression\').FunctionExpressionNode)($2, [], $6, { loc: this._$, lexer: yy.lexer })',
    '$$ = new (require(\'./ast/FunctionExpression\').FunctionExpressionNode)(null, $3, null, { loc: this._$, lexer: yy.lexer })',
    '$$ = new (require(\'./ast/FunctionExpression\').FunctionExpressionNode)($2, $4, null, { loc: this._$, lexer: yy.lexer })',
    '$$ = new (require(\'./ast/FunctionExpression\').FunctionExpressionNode)(null, $3, $6, { loc: this._$, lexer: yy.lexer })',
    '$$ = new (require(\'./ast/FunctionExpression\').FunctionExpressionNode)($2, $4, $7, { loc: this._$, lexer: yy.lexer })',
  ],
  subRules: [
    require('./BindingIdentifier'),
    require('./FunctionBody'),
    require('./FormalParameters'),
  ],
};
