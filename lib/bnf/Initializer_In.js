'use strict';

module.exports = {
  conditions: [''],
  name: 'Initializer_In',
  rules: ['= AssignmentExpression_In'],
  handlers: ['$$ = $2'],
  subRules: [require('./AssignmentExpression_In')]
};