'use strict';

module.exports = {
  conditions: [''],
  name: 'ClassTail',
  rules: ['{ }', '{ ClassBody }', 'ClassHeritage { ClassBody }'],
  handlers: ['\n      $$ = { body: new (require(\'./ast/Class\').ClassBody)([], { loc: this._$, yy }), superClass: null }\n    ', '\n      $$ = { body: new (require(\'./ast/Class\').ClassBody)($2, { loc: this._$, yy }), superClass: null }\n    ', '\n      $$ = { body: new (require(\'./ast/Class\').ClassBody)($3, { loc: this._$, yy }), superClass: $1 }\n    '],
  subRules: [require('./ClassHeritage'), require('./ClassBody')]
};