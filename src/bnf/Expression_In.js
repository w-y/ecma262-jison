module.exports = {
  conditions: [''],
  name: 'Expression_In',
  rules: [
    'AssignmentExpression_In',
    'Expression_In , AssignmentExpression_In',
  ],
  handlers: [
    '$$ = $1;',
    ';',
  ],
  subRules: [
    require('./AssignmentExpression_In'),
  ],
};
