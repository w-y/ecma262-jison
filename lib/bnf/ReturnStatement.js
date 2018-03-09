'use strict';

module.exports = {
  conditions: [''],
  name: 'ReturnStatement',
  rules: ['return ;', 'RETURN_LF', 'return Expression_In ;'],
  handlers: ['$$ = new (require(\'./ast/ReturnStatementNode\'))(null, { loc: this._$, yy })', '\n      throw new (require(\'./error\').NoLineTerminatorError)(\'no line terminator\', {\n        text: $1,\n        token: \'RETURN_LF\',\n        line: yy.lexer.yylloc.first_line,\n        loc: yy.lexer.yylloc,\n        offset: yy.lexer.offset,\n      });\n    ', '$$ = new (require(\'./ast/ReturnStatementNode\'))($2, { loc: this._$, yy })'],
  subRules: [require('./Expression_In'), require('./Statement_Return')]
};