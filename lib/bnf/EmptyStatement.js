'use strict';

module.exports = {
  name: 'EmptyStatement',
  conditions: [''],
  rules: [';'],
  handlers: ['\n      if (yy.autoInsertions) {\n        for (let i = 0; i < yy.autoInsertions.length; i++) {\n          const autoInsertionOffset = yy.autoInsertions[i];\n          if (autoInsertionOffset && autoInsertionOffset === this._$.range[1]) {\n            throw new (require(\'./error\').ParseError)(\'a semicolon is never inserted automatically if the semicolon would then be parsed as an empty statement\', {\n              text: $$[$0],\n              token: $$[$0],\n              line: yy.lexer.yylloc.first_line,\n              loc: yy.lexer.yylloc,\n              failedAutoSemicolon: true,\n            });\n          }\n        }\n      }\n      $$ = new (require(\'./ast/EmptyStatement\').EmptyStatementNode)({\n        loc: this._$,\n        yy,\n      });\n    '],
  subRules: []
};