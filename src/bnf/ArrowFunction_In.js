module.exports = {
  conditions: [''],
  name: 'ArrowFunction_In',
  rules: [
    'ArrowParameters => ConciseBody_In',
    'ArrowParameters ARROW_LF ConciseBody_In',
  ],
  handlers: [
    '$$ = new (require(\'./ast/ArrowFunctionNode\'))(null, { loc: this._$, yy })',
    `
      throw new (require('./error').NoLineTerminatorError)('no line terminator', {
        text: $1,
        token: 'ArrowParameters_LF',
        line: yy.lexer.yylloc.first_line,
        loc: yy.lexer.yylloc,
        offset: yy.lexer.offset,
      });
    `,
  ],
  subRules: [
    require('./ArrowParameters'),
    require('./ConciseBody_In'),
  ],
};
