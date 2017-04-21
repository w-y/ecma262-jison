module.exports = {
  name: 'EmptyStatement',
  conditions: [''],
  rules: [
    ';',
  ],
  handlers: [
    `{
     const loc = yy.lexer.yylloc;
     const locAutoInsertion = yy.autoinsertion_loc;
     if (locAutoInsertion) {
        if (locAutoInsertion.first_line === loc.first_line &&
          locAutoInsertion.first_column === loc.first_column &&
          locAutoInsertion.first_line === loc.first_line &&
          locAutoInsertion.last_column === loc.last_column) {

          throw new ((require('./error').ParseError)('a semicolon is never inserted automatically if the semicolon would then be parsed as an empty statement', {
            text: this.$,
            token: this.$,
            line: loc.first_line,
            loc: loc,
            offset: yy.autoinsertion,
            failedAutoSemicolon: true,
          }));
        }
      }
      $$ = new (require('./ast/EmptyStatement').EmptyStatementNode)();
    }`,
  ],
  subRules: [],
};
