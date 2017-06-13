module.exports = {
  conditions: [''],
  name: 'ConciseBody',
  rules: [
    'AssignmentExpression',
    'LEFT_ARROW_BRACE FunctionBody RIGHT_ARROW_BRACE',
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
