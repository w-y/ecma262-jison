'use strict';

module.exports = {
  conditions: [''],
  name: 'ModuleSpecifier',
  rules: ['StringLiteral'],
  handlers: ['$$ = new (require(\'./ast/Literal\').StringLiteralNode)($1, { raw: $1, loc: this._$, yy });'],
  subRules: [require('./StringLiteral')]
};