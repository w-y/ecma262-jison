module.exports = {
  conditions: [''],
  name: 'ArrowFunction',
  rules: [
    'ArrowParameters => ConciseBody',
    'ArrowParameters LF_ARROW ConciseBody',
  ],
  handlers: [
    '$$ = new (require(\'./ast/ArrowFunctionNode\'))($1, $3, { loc: this._$, yy })',
    `
      throw new (require('./error').NoLineTerminatorError)('no line terminator', {
        text: $1,
        token: 'ArrowFunction_LF',
        line: yy.lexer.yylloc.first_line,
        loc: yy.lexer.yylloc,
        offset: yy.lexer.offset,
      });
    `,
  ],
  subRules: [
    require('./ArrowParameters'),
    require('./ConciseBody'),
  ],
};
