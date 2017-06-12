module.exports = {
  conditions: [''],
  name: 'ConciseBody',
  rules: [
    'AssignmentExpression',
    '{ FunctionBody }',
  ],
  handlers: [
    '$$ = $1',
    '$$ = $1',
  ],
  subRules: [
    require('./AssignmentExpression'),
    require('./FunctionBody'),
  ],
};
