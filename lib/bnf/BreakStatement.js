'use strict';

module.exports = {
  conditions: [''],
  name: 'BreakStatement',
  rules: ['break ;', 'BREAK_LF', 'break LabelIdentifier ;'],
  handlers: ['$$ = new (require(\'./ast/BreakStatementNode\'))(null, { loc: this._$, yy })', '\n      throw new (require(\'./error\').NoLineTerminatorError)(\'no line terminator\', {\n        text: $1,\n        token: \'BREAK_LF\',\n        line: yy.lexer.yylloc.first_line,\n        loc: yy.lexer.yylloc,\n        offset: yy.lexer.offset,\n      });\n    ', '$$ = new (require(\'./ast/BreakStatementNode\'))($2, { loc: this._$, yy })'],
  subRules: [require('./LabelIdentifier')]
};