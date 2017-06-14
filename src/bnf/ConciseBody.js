module.exports = {
  conditions: [''],
  name: 'ConciseBody',
  rules: [
    'AssignmentExpression',
    'LEFT_ARROW_BRACE FunctionBody }',
  ],
  handlers: [
    '$$ = $1',
    '$$ = $2',
  ],
  subRules: [
    require('./AssignmentExpression'),
    require('./FunctionBody'),
  ],
};
