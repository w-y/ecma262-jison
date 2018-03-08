'use strict';

module.exports = {
  conditions: [''],
  name: 'ObjectLiteral',
  rules: ['BRACE_START }', 'BRACE_START PropertyDefinitionList }', 'BRACE_START PropertyDefinitionList , }'],
  handlers: ['$$ = new (require(\'./ast/Literal\').ObjectLiteralNode)([], { loc: this._$, yy })', '$$ = new (require(\'./ast/Literal\').ObjectLiteralNode)($2, { loc: this._$, yy })', '$$ = new (require(\'./ast/Literal\').ObjectLiteralNode)($2, { loc: this._$, yy })'],
  subRules: [require('./PropertyDefinitionList')]
};