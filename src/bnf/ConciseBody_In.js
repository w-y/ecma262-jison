module.exports = {
  conditions: [''],
  name: 'ConciseBody_In',
  rules: [
    'AssignmentExpression_In',
    'LEFT_ARROW_BRACE FunctionBody RIGHT_ARROW_BRACE',
  ],
  handlers: [
    '$$ = $1',
    '$$ = $2',
  ],
  subRules: [
    require('./AssignmentExpression_In'),
    require('./FunctionBody'),
  ],
};
