module.exports = {
  conditions: [''],
  name: 'ReturnStatement',
  rules: [
    'return ;',
    'RETURN_LF',
    'return Expression_In error',
    'return Expression_In ;',
  ],
  handlers: [
    '$$ = new (require(\'./ast/ReturnStatementNode\'))(null, { loc: this._$, yy })',
    '$$ = require(\'./asi/ReturnLF\')(this, $1, this._$)',

    // `
    //   throw new (require('./error').NoLineTerminatorError)('no line terminator', {
    //     text: $1,
    //     token: 'RETURN_LF',
    //     line: yy.lexer.yylloc.first_line,
    //     loc: yy.lexer.yylloc,
    //     offset: yy.lexer.offset,
    //   });
    // `,
    '$$ = require(\'./asi/Return\')(this, $2, $3, @2, @3, this._$)',
    '$$ = new (require(\'./ast/ReturnStatementNode\'))($2, { loc: this._$, yy })',

  ],
  subRules: [
    require('./Expression_In'),
    require('./Statement_Return'),
  ],
};
