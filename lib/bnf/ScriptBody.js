'use strict';

module.exports = {
  conditions: [''],
  name: 'ScriptBody',
  rules: ['StatementList'],
  handlers: ['$$ = $1;'],
  subRules: [require('./StatementList')]
};