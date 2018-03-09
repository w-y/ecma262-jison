'use strict';

module.exports = {
  conditions: [''],
  name: 'ContinueStatement',
  rules: ['continue ;', 'CONTINUE_LF', 'continue LabelIdentifier ;'],
  handlers: ['$$ = new (require(\'./ast/ContinueStatementNode\'))(null, { loc: this._$, yy });', '\n      throw new (require(\'./error\').NoLineTerminatorError)(\'no line terminator\', {\n        text: $1,\n        token: \'CONTINUE_LF\',\n        line: yy.lexer.yylloc.first_line,\n        loc: yy.lexer.yylloc,\n        offset: yy.lexer.offset,\n      });\n    ', '$$ = new (require(\'./ast/ContinueStatementNode\'))($2, { loc: this._$, yy });'],
  subRules: [require('./LabelIdentifier')]
};