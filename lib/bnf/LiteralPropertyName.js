'use strict';

module.exports = {
  conditions: [''],
  name: 'LiteralPropertyName',
  rules: ['IdentifierName', 'StringLiteral', 'NumericLiteral', 'of', 'set', 'get', 'from'],
  handlers: ['$$ = $1', '$$ = new (require(\'./ast/Literal\').StringLiteralNode)($1, { raw: $1, loc: this._$, yy });', '$$ = $1', '$$ = new (require(\'./ast/Identifier\').IdentifierNode)($1, { loc: this._$, yy })', '$$ = new (require(\'./ast/Identifier\').IdentifierNode)($1, { loc: this._$, yy })', '$$ = new (require(\'./ast/Identifier\').IdentifierNode)($1, { loc: this._$, yy })', '$$ = new (require(\'./ast/Identifier\').IdentifierNode)($1, { loc: this._$, yy })'],
  subRules: [require('./IdentifierName'), require('./StringLiteral'), require('./NumericLiteral')]
};