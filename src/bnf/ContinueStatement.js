module.exports = {
  conditions: [''],
  name: 'ContinueStatement',
  rules: [
    'continue ;',
    'CONTINUE_LF',
    'continue LabelIdentifier ;',
  ],
  handlers: [
    '$$ = new (require(\'./ast/ContinueStatementNode\'))(null, { loc: this._$, yy });',
    `
      throw new (require('./error').NoLineTerminatorError)('no line terminator', {
        text: $1,
        token: 'CONTINUE_LF',
        line: yy.lexer.yylloc.first_line,
        loc: yy.lexer.yylloc,
        offset: yy.lexer.offset,
      });
    `,
    '$$ = new (require(\'./ast/ContinueStatementNode\'))($2, { loc: this._$, yy });',
  ],
  subRules: [
    require('./LabelIdentifier'),
  ],
};
