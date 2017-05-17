module.exports = {
  conditions: [''],
  name: 'BreakStatement',
  rules: [
    'break ;',
    'BREAK_LF',
    'break LabelIdentifier ;',
  ],
  handlers: [
    '$$ = new (require(\'./ast/BreakStatementNode\'))(null, { loc: this._$, yy })',
    `
      throw new (require('./error').NoLineTerminatorError)('no line terminator', {
        text: $1,
        token: 'BREAK_LF',
        line: yy.lexer.yylloc.first_line,
        loc: yy.lexer.yylloc,
        offset: yy.lexer.offset,
      });
    `,
    '$$ = new (require(\'./ast/BreakStatementNode\'))($2, { loc: this._$, yy })',
  ],
  subRules: [
    require('./LabelIdentifier'),
  ],
};
