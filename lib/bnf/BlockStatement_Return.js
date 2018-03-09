'use strict';

module.exports = {
  conditions: [''],
  name: 'BlockStatement_Return',
  rules: ['Block_Return'],
  handlers: ['$$ = $1;'],
  subRules: [require('./Block_Return')]
};