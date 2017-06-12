module.exports = {
  name: 'EmptyStatement',
  conditions: [''],
  rules: [
    ';',
  ],
  handlers: [
    `
      if (yy.autoInsertions) {
        for (let i = 0; i < yy.autoInsertions.length; i++) {
          const autoInsertionOffset = yy.autoInsertions[i];
          if (autoInsertionOffset && autoInsertionOffset === this._$.range[1]) {
            throw new (require('./error').ParseError)('a semicolon is never inserted automatically if the semicolon would then be parsed as an empty statement', {
              text: $$[$0],
              token: $$[$0],
              line: yy.lexer.yylloc.first_line,
              loc: yy.lexer.yylloc,
              failedAutoSemicolon: true,
            });
          }
        }
      }
      $$ = new (require('./ast/EmptyStatement').EmptyStatementNode)({
        loc: this._$,
        yy,
      });
    `,
  ],
  subRules: [],
};
