module.exports = {
  conditions: [''],
  name: 'ThrowStatement',
  rules: [
    'throw Expression_In ;',
    'THROW_LF',
  ],
  handlers: [
    '$$ = new (require(\'./ast/ThrowStatementNode\'))($2)',
    `
      throw new (require('./error').NoLineTerminatorError)('no line terminator', {
        text: $1,
        token: 'THROW_LF',
        line: yy.lexer.yylloc.first_line,
        loc: yy.lexer.yylloc,
        offset: yy.lexer.offset,
      });
    `,
  ],
  subRules: [
    require('./Expression_In'),
  ],
};
