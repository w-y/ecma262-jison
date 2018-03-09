'use strict';

module.exports = {
  conditions: [''],
  name: 'ThrowStatement',
  rules: ['throw Expression_In ;', 'THROW_LF'],
  handlers: ['$$ = new (require(\'./ast/ThrowStatementNode\'))($2, { loc: this._$, yy })', '\n      throw new (require(\'./error\').NoLineTerminatorError)(\'no line terminator\', {\n        text: $1,\n        token: \'THROW_LF\',\n        line: yy.lexer.yylloc.first_line,\n        loc: yy.lexer.yylloc,\n        offset: yy.lexer.offset,\n      });\n    '],
  subRules: [require('./Expression_In')]
};