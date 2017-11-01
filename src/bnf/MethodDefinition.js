module.exports = {
  conditions: [''],
  name: 'MethodDefinition',
  rules: [
    'PropertyName ( StrictFormalParameters ) { FunctionBody }',
    'PropertyName ( StrictFormalParameters ) LeftBrace RightBrace',
    'PropertyName ( ) { FunctionBody }',
    'PropertyName ( ) LeftBrace RightBrace',

    'get PropertyName ( ) { FunctionBody }',
    'get PropertyName ( ) LeftBrace RightBrace',

    'set PropertyName ( PropertySetParameterList ) { FunctionBody }',
    'set PropertyName ( PropertySetParameterList ) LeftBrace RightBrace',

    'set PropertyName ( ) { FunctionBody }',
    'set PropertyName ( ) LeftBrace RightBrace',
  ],
  handlers: [
    `
      $$ = new (require('./ast/Class').MethodDefinitionNode)($1,
        new (require('./ast/FunctionExpression').FunctionExpressionNode)(null, $3, $6, { loc: this._$, yy }), '', { loc: this._$, yy  })
    `,
    `
      $$ = new (require('./ast/Class').MethodDefinitionNode)($1,
        new (require('./ast/FunctionExpression').FunctionExpressionNode)(null, $3, new (require('./ast/BlockStatement').BlockStatementNode)([], { loc: (require('./util').mergeLoc($5, $6)), yy }), { loc: this._$, yy }), '', { loc: this._$, yy })
    `,
    `
      $$ = new (require('./ast/Class').MethodDefinitionNode)($1,
        new (require('./ast/FunctionExpression').FunctionExpressionNode)(null, [], $5, { loc: this._$, yy }), '', { loc: this._$, yy  })
    `,
    `
      $$ = new (require('./ast/Class').MethodDefinitionNode)($1,
        new (require('./ast/FunctionExpression').FunctionExpressionNode)(null, [], new (require('./ast/BlockStatement').BlockStatementNode)([], { loc: (require('./util').mergeLoc($4, $5)), yy }), { loc: this._$, yy }), '', { loc: this._$, yy })
    `,

    `
      $$ = new (require('./ast/Class').MethodDefinitionNode)($2,
        new (require('./ast/FunctionExpression').FunctionExpressionNode)(null, [], $6, { loc: this._$, yy }), 'get', { loc: this._$, yy  })
    `,
    `
      $$ = new (require('./ast/Class').MethodDefinitionNode)($2,
        new (require('./ast/FunctionExpression').FunctionExpressionNode)(null, [], new (require('./ast/BlockStatement').BlockStatementNode)([], { loc: (require('./util').mergeLoc($5, $6)), yy }), { loc: this._$, yy }), '', { loc: this._$, yy })
    `,


    `
      $$ = new (require('./ast/Class').MethodDefinitionNode)($2,
        new (require('./ast/FunctionExpression').FunctionExpressionNode)(null, $4, $7, { loc: this._$, yy }), 'set', { loc: this._$, yy  })
    `,
    `
      $$ = new (require('./ast/Class').MethodDefinitionNode)($2,
        new (require('./ast/FunctionExpression').FunctionExpressionNode)(null, $4, new (require('./ast/BlockStatement').BlockStatementNode)([], { loc: (require('./util').mergeLoc($6, $7)), yy }), { loc: this._$, yy }), 'set', { loc: this._$, yy })
    `,


    `
      $$ = new (require('./ast/Class').MethodDefinitionNode)($2,
        new (require('./ast/FunctionExpression').FunctionExpressionNode)(null, [], $6, { loc: this._$, yy }), 'set', { loc: this._$, yy  })
    `,
    `
      $$ = new (require('./ast/Class').MethodDefinitionNode)($2,
        new (require('./ast/FunctionExpression').FunctionExpressionNode)(null, $4, new (require('./ast/BlockStatement').BlockStatementNode)([], { loc: (require('./util').mergeLoc($5, $6)), yy }), { loc: this._$, yy }), 'set', { loc: this._$, yy })
    `,
  ],
  subRules: [
    require('./PropertyName'),
    require('./StrictFormalParameters'),
    require('./PropertySetParameterList'),
    require('./FunctionBody'),
    require('./LeftBrace'),
    require('./RightBrace'),
  ],
};
