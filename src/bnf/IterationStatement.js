module.exports = {
  name: 'IterationStatement',
  conditions: [''],
  rules: [
    'do Statement while LeftParenthesis Expression_In RightParenthesis ;',
    'while LeftParenthesis Expression_In RightParenthesis Statement',

    'for LeftParenthesis LexicalDeclaration Expression_In ; Expression_In RightParenthesis Statement',
    'for LeftParenthesis VAR VariableDeclarationList ; Expression_In ; Expression_In RightParenthesis Statement',

    'for LeftParenthesis LeftHandSideExpression in Expression_In RightParenthesis Statement',
    'for LeftParenthesis ForDeclaration in Expression_In RightParenthesis Statement',

    'for LeftParenthesis LeftHandSideExpression of AssignmentExpression_In RightParenthesis Statement',
    'for LeftParenthesis VAR ForBinding of AssignmentExpression_In RightParenthesis Statement',
    'for LeftParenthesis ForDeclaration of AssignmentExpression_In RightParenthesis Statement',

    'for LeftParenthesis Expression ; Expression_In ; Expression_In RightParenthesis Statement',
    'for LeftParenthesis Expression ; ; Expression_In RightParenthesis Statement',
    'for LeftParenthesis Expression ; ; RightParenthesis Statement',
    'for LeftParenthesis Expression ; Expression_In ; RightParenthesis Statement',

    'for LeftParenthesis ; Expression_In ; Expression_In RightParenthesis Statement',
    'for LeftParenthesis ; ; Expression_In RightParenthesis Statement',
    'for LeftParenthesis ; ; RightParenthesis Statement',
    'for LeftParenthesis ; Expression_In ; RightParenthesis Statement',

    'for LeftParenthesis VAR VariableDeclarationList ; ; Expression_In RightParenthesis Statement',
    'for LeftParenthesis VAR VariableDeclarationList ; Expression_In ; RightParenthesis Statement',
    'for LeftParenthesis VAR VariableDeclarationList ; ; RightParenthesis Statement',
    'for LeftParenthesis LexicalDeclaration ; Expression_In RightParenthesis Statement',
    'for LeftParenthesis LexicalDeclaration Expression_In ; RightParenthesis Statement',
    'for LeftParenthesis LexicalDeclaration ; RightParenthesis Statement',
  ],
  handlers: [
    '$$ = new (require(\'./ast/IterationStatement\').DoWhileStatementNode)($5, $2, { loc: this._$, yy })',
    '$$ = new (require(\'./ast/IterationStatement\').WhileStatementNode)($3, $5, { loc: this._$, yy })',
    `
      require('./ast/IterationStatement').checkForAutoSemicolonInsertion(yy.autoInsertionOffset, $2.range, $7.range, yy.lexer.yylloc);
      $$ = new (require('./ast/IterationStatement').ForStatementNode)($3, $4, $6, $8, { loc: this._$, yy })
    `,
    `
      require('./ast/IterationStatement').checkForAutoSemicolonInsertion(yy.autoInsertionOffset, $2.range, $9.range, yy.lexer.yylloc);
      $$ = new (require('./ast/IterationStatement').ForStatementNode)(
        // NOTICE:
        // we need to merge the VAR's loc and VariableDeclarator's to get VaribleStatement's range
        // var a = 100
        // VaribleStatement' range is [0, 9]
        // VariableDeclarator's range is [4, 9]
        // $4 is an array of VariableDeclarator, we need the last one's range
        new (require('./ast/VariableStatement').VariableStatementNode)($4, { loc: {
          first_line: $3.first_line,
          last_line: $4[$4.length-1].lastLine,
          first_column: $3.firts_column,
          last_column:  $4[$4.length-1].lastColumnu,
          range: [$3.range[0], $4[$4.length-1].range[1]],
        }, yy }), $6, $8, $10, { loc: this._$, yy });
    `,

    `
      require('./ast/IterationStatement').checkForAutoSemicolonInsertion(yy.autoInsertionOffset, $2.range, $6.range, yy.lexer.yylloc);
      $$ = new (require('./ast/IterationStatement').ForInStatementNode)($3, $5, $7, { loc: this._$, yy })
    `,
    `
      require('./ast/IterationStatement').checkForAutoSemicolonInsertion(yy.autoInsertionOffset, $2.range, $6.range, yy.lexer.yylloc);
      $$ = new (require('./ast/IterationStatement').ForInStatementNode)($3, $5, $7, { loc: this._$, yy })
    `,

    `
      require('./ast/IterationStatement').checkForAutoSemicolonInsertion(yy.autoInsertionOffset, $2.range, $6.range, yy.lexer.yylloc);
      $$ = new (require('./ast/IterationStatement').ForOfStatementNode)($3, $5, $7, { loc: this._$, yy })
    `,
    `
      require('./ast/IterationStatement').checkForAutoSemicolonInsertion(yy.autoInsertionOffset, $2.range, $7.range, yy.lexer.yylloc);
      $$ = new (require('./ast/IterationStatement').ForOfStatementNode)(
        // NOTICE:
        // we need to merge the VAR's loc and VariableDeclarator's to get VaribleStatement's range
        // $4 is a single VariableDeclarator
        new (require('./ast/VariableStatement').VariableStatementNode)($4, { loc: {
          first_line: $3.first_line,
          last_line: $4.lastLine,
          first_column: $3.firts_column,
          last_column:  $4.lastColumnu,
          range: [$3.range[0], $4.range[1]],
        }, yy }), $6, $8, { loc: this._$, yy });
    `,
    `
      require('./ast/IterationStatement').checkForAutoSemicolonInsertion(yy.autoInsertionOffset, $2.range, $6.range, yy.lexer.yylloc);
      $$ = new (require('./ast/IterationStatement').ForOfStatementNode)($3, $5, $7, { loc: this._$, yy })
    `,

    `
      require('./ast/IterationStatement').checkForAutoSemicolonInsertion(yy.autoInsertionOffset, $2.range, $8.range, yy.lexer.yylloc);
      $$ = new (require('./ast/IterationStatement').ForStatementNode)($3, $5, $7, $9, { loc: this._$, yy })
    `,
    `
      require('./ast/IterationStatement').checkForAutoSemicolonInsertion(yy.autoInsertionOffset, $2.range, $7.range, yy.lexer.yylloc);
      $$ = new (require('./ast/IterationStatement').ForStatementNode)($3, null, $6, $7, { loc: this._$, yy })
    `,
    `
      require('./ast/IterationStatement').checkForAutoSemicolonInsertion(yy.autoInsertionOffset, $2.range, $6.range, yy.lexer.yylloc);
      $$ = new (require('./ast/IterationStatement').ForStatementNode)($3, null, null, $7, { loc: this._$, yy })
    `,
    `
      require('./ast/IterationStatement').checkForAutoSemicolonInsertion(yy.autoInsertionOffset, $2.range, $7.range, yy.lexer.yylloc);
      $$ = new (require('./ast/IterationStatement').ForStatementNode)($3, $5, null, $8, { loc: this._$, yy })
    `,

    `
      require('./ast/IterationStatement').checkForAutoSemicolonInsertion(yy.autoInsertionOffset, $2.range, $7.range, yy.lexer.yylloc);
      $$ = new (require('./ast/IterationStatement').ForStatementNode)(null, $4, $6, $8, { loc: this._$, yy })
    `,
    `
      require('./ast/IterationStatement').checkForAutoSemicolonInsertion(yy.autoInsertionOffset, $2.range, $6.range, yy.lexer.yylloc);
      $$ = new (require('./ast/IterationStatement').ForStatementNode)(null, null, $5, $7, { loc: this._$, yy })
    `,
    `
      require('./ast/IterationStatement').checkForAutoSemicolonInsertion(yy.autoInsertionOffset, $2.range, $5.range, yy.lexer.yylloc);
      $$ = new (require('./ast/IterationStatement').ForStatementNode)(null, null, null, $6, { loc: this._$, yy })
    `,
    `
      require('./ast/IterationStatement').checkForAutoSemicolonInsertion(yy.autoInsertionOffset, $2.range, $6.range, yy.lexer.yylloc);
      $$ = new (require('./ast/IterationStatement').ForStatementNode)(null, $4, null, $7, { loc: this._$, yy })
    `,
    `
      require('./ast/IterationStatement').checkForAutoSemicolonInsertion(yy.autoInsertionOffset, $2.range, $8.range, yy.lexer.yylloc);
      $$ = new (require('./ast/IterationStatement').ForStatementNode)(
        new (require('./ast/VariableStatement').VariableStatementNode)($4, { loc: {
          first_line: $3.first_line,
          last_line: $4[$4.length-1].lastLine,
          first_column: $3.firts_column,
          last_column:  $4[$4.length-1].lastColumnu,
          range: [$3.range[0], $4[$4.length-1].range[1]],
        }, yy }), null, $7, $9, { loc: this._$, yy });
    `,
    `
      require('./ast/IterationStatement').checkForAutoSemicolonInsertion(yy.autoInsertionOffset, $2.range, $8.range, yy.lexer.yylloc);
      $$ = new (require('./ast/IterationStatement').ForStatementNode)(
        new (require('./ast/VariableStatement').VariableStatementNode)($4, { loc: {
          first_line: $3.first_line,
          last_line: $4[$4.length-1].lastLine,
          first_column: $3.firts_column,
          last_column:  $4[$4.length-1].lastColumnu,
          range: [$3.range[0], $4[$4.length-1].range[1]],
        }, yy }), $6, null, $9, { loc: this._$, yy });
    `,
    `
      require('./ast/IterationStatement').checkForAutoSemicolonInsertion(yy.autoInsertionOffset, $2.range, $7.range, yy.lexer.yylloc);
      $$ = new (require('./ast/IterationStatement').ForStatementNode)(
        new (require('./ast/VariableStatement').VariableStatementNode)($4, { loc: {
          first_line: $3.first_line,
          last_line: $4[$4.length-1].lastLine,
          first_column: $3.firts_column,
          last_column:  $4[$4.length-1].lastColumnu,
          range: [$3.range[0], $4[$4.length-1].range[1]],
        }, yy }), null, null, $8, { loc: this._$, yy });
    `,
    `
      require('./ast/IterationStatement').checkForAutoSemicolonInsertion(yy.autoInsertionOffset, $2.range, $6.range, yy.lexer.yylloc);
      $$ = new (require('./ast/IterationStatement').ForStatementNode)($3, null, $5, $7, { loc: this._$, yy })
    `,
    `
      require('./ast/IterationStatement').checkForAutoSemicolonInsertion(yy.autoInsertionOffset, $2.range, $6.range, yy.lexer.yylloc);
      $$ = new (require('./ast/IterationStatement').ForStatementNode)($3, $4, null, $7, { loc: this._$, yy })
    `,
    `
      require('./ast/IterationStatement').checkForAutoSemicolonInsertion(yy.autoInsertionOffset, $2.range, $5.range, yy.lexer.yylloc);
      $$ = new (require('./ast/IterationStatement').ForStatementNode)($3, null, null, $6, { loc: this._$, yy })
    `,
  ],
  subRules: [
    require('./Expression_In'),
    require('./Statement'),
    require('./LexicalDeclaration'),
    require('./VariableDeclarationList'),
    require('./LeftHandSideExpression'),
    require('./ForDeclaration'),
    require('./AssignmentExpression_In'),
    require('./ForBinding'),
    require('./Expression'),
    require('./LeftParenthesis'),
    require('./RightParenthesis'),
    require('./Var'),
  ],
};
