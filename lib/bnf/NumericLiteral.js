'use strict';

module.exports = {
  conditions: [''],
  name: 'NumericLiteral',
  rules: ['DecimalLiteral', 'HexIntegerLiteral'],
  handlers: ['$$ = $1', '$$ = $1'],
  subRules: [require('./DecimalLiteral'), require('./HexIntegerLiteral')]
};