module.exports = {
  name: 'EmptyStatement',
  conditions: [''],
  rules: [
    ';',
  ],
  handlers: [
    `
      if (yy.autoInsertionOffset && yy.autoInsertionOffset === yy.lexer.offset) {
        throw new (require('./error').ParseError)('a semicolon is never inserted automatically if the semicolon would then be parsed as an empty       statement', {
          text: $1,
          token: $1,
          line: yy.lexer.yylloc.first_line,
          loc: yy.lexer.yylloc,
          failedAutoSemicolon: true,
        });
      }
      $$ = new (require('./ast/EmptyStatement').EmptyStatementNode)();
    `,
  ],
  subRules: [],
};
