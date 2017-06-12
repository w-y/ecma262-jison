module.exports = {
  conditions: [''],
  name: 'ConciseBody_In',
  rules: [
    'AssignmentExpression_In',
    '{ FunctionBody }',
  ],
  handlers: [
    '$$ = $1',
    '$$ = $1',
  ],
  subRules: [
    require('./AssignmentExpression_In'),
    require('./FunctionBody'),
  ],
};
