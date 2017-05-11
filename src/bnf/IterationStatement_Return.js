module.exports = {
  name: 'IterationStatement_Return',
  conditions: [''],
  rules: [
    'do Statement_Return while LeftParenthesis Expression_In RightParenthesis ;',
    'while LeftParenthesis Expression_In RightParenthesis Statement_Return',

    'for LeftParenthesis LexicalDeclaration Expression_In ; Expression_In RightParenthesis Statement_Return',
    'for LeftParenthesis var VariableDeclarationList ; Expression_In ; Expression_In RightParenthesis Statement_Return',

    'for LeftParenthesis LeftHandSideExpression in Expression_In RightParenthesis Statement_Return',
    'for LeftParenthesis ForDeclaration in Expression_In RightParenthesis Statement_Return',

    'for LeftParenthesis LeftHandSideExpression of AssignmentExpression_In RightParenthesis Statement_Return',
    'for LeftParenthesis var ForBinding of AssignmentExpression_In RightParenthesis Statement_Return',
    'for LeftParenthesis ForDeclaration of AssignmentExpression_In RightParenthesis Statement_Return',

    'for LeftParenthesis Expression ; Expression_In ; Expression_In RightParenthesis Statement_Return',
    'for LeftParenthesis Expression ; ; Expression_In RightParenthesis Statement_Return',
    'for LeftParenthesis Expression ; ; RightParenthesis Statement_Return',
    'for LeftParenthesis Expression ; Expression_In ; RightParenthesis Statement_Return',

    'for LeftParenthesis ; Expression_In ; Expression_In RightParenthesis Statement_Return',
    'for LeftParenthesis ; ; Expression_In RightParenthesis Statement_Return',
    'for LeftParenthesis ; ; RightParenthesis Statement_Return',
    'for LeftParenthesis ; Expression_In ; RightParenthesis Statement_Return',
  ],
  handlers: [
    '$$ = new (require(\'./ast/IterationStatement\').DoWhileStatementNode)($5, $2, { loc: this._$, lexer: yy.lexer })',
    '$$ = new (require(\'./ast/IterationStatement\').WhileStatementNode)($3, $5, { loc: this._$, lexer: yy.lexer })',
    `
      require('./ast/IterationStatement').checkForAutoSemicolonInsertion(yy.autoInsertionOffset, $2.range, $7.range, yy.lexer.yylloc);
      $$ = new (require('./ast/IterationStatement').ForStatementNode)($3, $4, $6, $8, { loc: this._$, lexer: yy.lexer })
    `,
    `
      require('./ast/IterationStatement').checkForAutoSemicolonInsertion(yy.autoInsertionOffset, $2.range, $9.range, yy.lexer.yylloc);
      $$ = new (require('./ast/IterationStatement').ForStatementNode)($4, $6, $8, $10, { loc: this._$, lexer: yy.lexer })
    `,

    `
      require('./ast/IterationStatement').checkForAutoSemicolonInsertion(yy.autoInsertionOffset, $2.range, $6.range, yy.lexer.yylloc);
      $$ = new (require('./ast/IterationStatement').ForInStatementNode)($3, $5, $7, { loc: this._$, lexer: yy.lexer })
    `,
    `
      require('./ast/IterationStatement').checkForAutoSemicolonInsertion(yy.autoInsertionOffset, $2.range, $6.range, yy.lexer.yylloc);
      $$ = new (require('./ast/IterationStatement').ForInStatementNode)($3, $5, $7, { loc: this._$, lexer: yy.lexer })
    `,

    `
      require('./ast/IterationStatement').checkForAutoSemicolonInsertion(yy.autoInsertionOffset, $2.range, $6.range, yy.lexer.yylloc);
      $$ = new (require('./ast/IterationStatement').ForOfStatementNode)($3, $5, $7, { loc: this._$, lexer: yy.lexer })
    `,
    `
      require('./ast/IterationStatement').checkForAutoSemicolonInsertion(yy.autoInsertionOffset, $2.range, $7.range, yy.lexer.yylloc);
      $$ = new (require('./ast/IterationStatement').ForOfStatementNode)($4, $6, $8, { loc: this._$, lexer: yy.lexer })
    `,
    `
      require('./ast/IterationStatement').checkForAutoSemicolonInsertion(yy.autoInsertionOffset, $2.range, $6.range, yy.lexer.yylloc);
      $$ = new (require('./ast/IterationStatement').ForOfStatementNode)($3, $5, $7, { loc: this._$, lexer: yy.lexer })
    `,

    `
      require('./ast/IterationStatement').checkForAutoSemicolonInsertion(yy.autoInsertionOffset, $2.range, $8.range, yy.lexer.yylloc);
      $$ = new (require('./ast/IterationStatement').ForStatementNode)($3, $5, $7, $9, { loc: this._$, lexer: yy.lexer })
    `,
    `
      require('./ast/IterationStatement').checkForAutoSemicolonInsertion(yy.autoInsertionOffset, $2.range, $7.range, yy.lexer.yylloc);
      $$ = new (require('./ast/IterationStatement').ForStatementNode)($3, null, $6, $7, { loc: this._$, lexer: yy.lexer })
    `,
    `
      require('./ast/IterationStatement').checkForAutoSemicolonInsertion(yy.autoInsertionOffset, $2.range, $6.range, yy.lexer.yylloc);
      $$ = new (require('./ast/IterationStatement').ForStatementNode)($3, null, null, $7, { loc: this._$, lexer: yy.lexer })
    `,
    `
      require('./ast/IterationStatement').checkForAutoSemicolonInsertion(yy.autoInsertionOffset, $2.range, $7.range, yy.lexer.yylloc);
      $$ = new (require('./ast/IterationStatement').ForStatementNode)($3, $5, null, $8, { loc: this._$, lexer: yy.lexer })
    `,

    `
      require('./ast/IterationStatement').checkForAutoSemicolonInsertion(yy.autoInsertionOffset, $2.range, $7.range, yy.lexer.yylloc);
      $$ = new (require('./ast/IterationStatement').ForStatementNode)(null, $4, $6, $8, { loc: this._$, lexer: yy.lexer })
    `,
    `
      require('./ast/IterationStatement').checkForAutoSemicolonInsertion(yy.autoInsertionOffset, $2.range, $6.range, yy.lexer.yylloc);
      $$ = new (require('./ast/IterationStatement').ForStatementNode)(null, null, $5, $7, { loc: this._$, lexer: yy.lexer })
    `,
    `
      require('./ast/IterationStatement').checkForAutoSemicolonInsertion(yy.autoInsertionOffset, $2.range, $5.range, yy.lexer.yylloc);
      $$ = new (require('./ast/IterationStatement').ForStatementNode)(null, null, null, $6, { loc: this._$, lexer: yy.lexer })
    `,
    `
      require('./ast/IterationStatement').checkForAutoSemicolonInsertion(yy.autoInsertionOffset, $2.range, $6.range, yy.lexer.yylloc);
      $$ = new (require('./ast/IterationStatement').ForStatementNode)(null, $4, null, $7, { loc: this._$, lexer: yy.lexer })
    `,
  ],
  subRules: [
    require('./Expression_In'),
    require('./Statement_Return'),
    require('./LexicalDeclaration'),
    require('./VariableDeclarationList'),
    require('./LeftHandSideExpression'),
    require('./ForDeclaration'),
    require('./AssignmentExpression_In'),
    require('./ForBinding'),
    require('./Expression'),
    require('./LeftParenthesis'),
    require('./RightParenthesis'),
  ],
};
