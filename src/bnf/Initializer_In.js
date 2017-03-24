module.exports = {
  conditions: [''],
  name: 'Initializer_In',
  rules: [
    '= AssignmentExpression_In',
  ],
  handlers: [
    '$$ = $1 + $2',
  ],
  subRules: [
    require('./AssignmentExpression_In'),
  ],
};
