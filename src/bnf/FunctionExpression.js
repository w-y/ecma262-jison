module.exports = {
  conditions: [''],
  name: 'FunctionExpression',
  rules: [
    'function ( ) LeftBrace RightBrace',
    'function BindingIdentifier ( ) LeftBrace RightBrace',
    'function ( ) { FunctionBody }',
    'function BindingIdentifier ( ) { FunctionBody }',

    'function ( FormalParameters ) LeftBrace RightBrace',
    'function BindingIdentifier ( FormalParameters ) LeftBrace RightBrace',
    'function ( FormalParameters ) { FunctionBody }',
    'function BindingIdentifier ( FormalParameters ) { FunctionBody }',
  ],
  handlers: [
    `
      $$ = new (require('./ast/FunctionExpression').FunctionExpressionNode)(null, [],
        new (require('./ast/BlockStatement').BlockStatementNode)(
          [], 
          // block location
          { loc: (require('./util').mergeLoc($4, $5)), yy }
        ), { loc: this._$, yy })
    `,
    `
      $$ = new (require('./ast/FunctionExpression').FunctionExpressionNode)($2, [],
        new (require('./ast/BlockStatement').BlockStatementNode)(
          [], 
          // block location
          { loc: (require('./util').mergeLoc($5, $6)), yy }
        ), { loc: this._$, yy })
    `,
    '$$ = new (require(\'./ast/FunctionExpression\').FunctionExpressionNode)(null, [], $5, { loc: this._$, yy })',
    '$$ = new (require(\'./ast/FunctionExpression\').FunctionExpressionNode)($2, [], $6, { loc: this._$, yy })',
    `
      $$ = new (require('./ast/FunctionExpression').FunctionExpressionNode)(null, $3,
        new (require('./ast/BlockStatement').BlockStatementNode)(
          [], 
          // block location
          { loc: (require('./util').mergeLoc($5, $6)), yy }
        ), { loc: this._$, yy })
    `,
    `
      $$ = new (require('./ast/FunctionExpression').FunctionExpressionNode)($2, $4,
        new (require('./ast/BlockStatement').BlockStatementNode)(
          [], 
          // block location
          { loc: (require('./util').mergeLoc($6, $7)), yy }
        ), { loc: this._$, yy })
    `,
    '$$ = new (require(\'./ast/FunctionExpression\').FunctionExpressionNode)(null, $3, $6, { loc: this._$, yy })',
    '$$ = new (require(\'./ast/FunctionExpression\').FunctionExpressionNode)($2, $4, $7, { loc: this._$, yy })',
  ],
  subRules: [
    require('./BindingIdentifier'),
    require('./FunctionBody'),
    require('./FormalParameters'),
    require('./LeftBrace'),
    require('./RightBrace'),
  ],
};
