'use strict';

module.exports = {
  conditions: [''],
  name: 'ComputedPropertyName',
  rules: ['[ AssignmentExpression_In ]'],
  handlers: ['\n      $2.computed = true; \n      $$ = $2;\n    '],
  subRules: [require('./AssignmentExpression_In')]
};