module.exports = {
  conditions: [''],
  name: 'MethodDefinition',
  rules: [
    'PropertyName LeftParenthesis StrictFormalParameters RightParenthesis LeftBrace FunctionBody RightBrace',
    'PropertyName LeftParenthesis StrictFormalParameters RightParenthesis LeftBrace RightBrace',
    'PropertyName LeftParenthesis RightParenthesis LeftBrace FunctionBody RightBrace',
    'PropertyName LeftParenthesis RightParenthesis LeftBrace RightBrace',

    'get PropertyName LeftParenthesis RightParenthesis LeftBrace FunctionBody RightBrace',
    'get PropertyName LeftParenthesis RightParenthesis LeftBrace RightBrace',

    'set PropertyName LeftParenthesis PropertySetParameterList RightParenthesis LeftBrace FunctionBody RightBrace',
    'set PropertyName LeftParenthesis PropertySetParameterList RightParenthesis LeftBrace RightBrace',

    'set PropertyName LeftParenthesis RightParenthesis LeftBrace FunctionBody RightBrace',
    'set PropertyName LeftParenthesis RightParenthesis LeftBrace RightBrace',
  ],
  handlers: [
    `
      $$ = new (require('./ast/Class').MethodDefinitionNode)($1,
        new (require('./ast/FunctionExpression').FunctionExpressionNode)(
          null,
          $3,
          $6,
          // function loc
          { loc: require('./util').mergeLoc($2, $7), yy }
        ), '', { loc: this._$, yy  })
    `,
    `
      $$ = new (require('./ast/Class').MethodDefinitionNode)($1,
        new (require('./ast/FunctionExpression').FunctionExpressionNode)(null, $3, new (require('./ast/BlockStatement').BlockStatementNode)(
            [],
            // block loc
            { loc: (require('./util').mergeLoc($5, $6)), yy }
          ),
            // function loc
          { loc: require('./util').mergeLoc($2, $6), yy }
        ), '', { loc: this._$, yy })
    `,
    `
      $$ = new (require('./ast/Class').MethodDefinitionNode)($1,
        new (require('./ast/FunctionExpression').FunctionExpressionNode)(
          null,
          [],
          $5,
          // function loc
          { loc: require('./util').mergeLoc($2, $6), yy }
        ), '', { loc: this._$, yy  })
    `,
    `
      $$ = new (require('./ast/Class').MethodDefinitionNode)($1,
        new (require('./ast/FunctionExpression').FunctionExpressionNode)(null, [], new (require('./ast/BlockStatement').BlockStatementNode)(
            [],
            // block loc
            { loc: (require('./util').mergeLoc($4, $5)), yy }
          ),
          // function loc
          { loc: require('./util').mergeLoc($2, $5), yy }
        ), '', { loc: this._$, yy })
    `,

    `
      $$ = new (require('./ast/Class').MethodDefinitionNode)($2,
        new (require('./ast/FunctionExpression').FunctionExpressionNode)(
          null,
          [],
          $6,
          // function loc
          { loc: require('./util').mergeLoc($2, $7), yy }
        ), 'get', { loc: this._$, yy })
    `,
    `
      $$ = new (require('./ast/Class').MethodDefinitionNode)($2,
        new (require('./ast/FunctionExpression').FunctionExpressionNode)(
          null,
          [],
          new (require('./ast/BlockStatement').BlockStatementNode)(
            [],
            // block loc
            { loc: (require('./util').mergeLoc($5, $6)), yy }
          ),
          // func loc
          { loc: require('./util').mergeLoc($2, $6), yy }
        ), '', { loc: this._$, yy })
    `,


    `
      $$ = new (require('./ast/Class').MethodDefinitionNode)($2,
        new (require('./ast/FunctionExpression').FunctionExpressionNode)(
          null,
          $4,
          $7,
          // func loc
          { loc: require('./util').mergeLoc($4, $8), yy }
        ), 'set', { loc: this._$, yy  })
    `,
    `
      $$ = new (require('./ast/Class').MethodDefinitionNode)($2,
        new (require('./ast/FunctionExpression').FunctionExpressionNode)(
          null,
          $4,
          new (require('./ast/BlockStatement').BlockStatementNode)(
            [],
            // block loc
            { loc: (require('./util').mergeLoc($6, $7)), yy }
          ),
          // func loc
          { loc: require('./util').mergeLoc($2, $7), yy }), 'set', { loc: this._$, yy })
    `,


    `
      $$ = new (require('./ast/Class').MethodDefinitionNode)($2,
        new (require('./ast/FunctionExpression').FunctionExpressionNode)(
          null,
          [],
          $6,
          // func loc
          { loc: require('./util').mergeLoc($2, $7), yy }
        ), 'set', { loc: this._$, yy  })
    `,
    `
      $$ = new (require('./ast/Class').MethodDefinitionNode)($2,
        new (require('./ast/FunctionExpression').FunctionExpressionNode)(
          null,
          $4,
          new (require('./ast/BlockStatement').BlockStatementNode)(
            [],
            // block loc
            { loc: (require('./util').mergeLoc($5, $6)), yy }
          ),
          // func loc
          { loc: require('./util').mergeLoc($2, $6), yy }
        ), 'set', { loc: this._$, yy })
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
