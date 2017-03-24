module.exports = {
  conditions: [''],
  name: 'Initializer',
  rules: [
    '= AssignmentExpression',
  ],
  handlers: [
    '$$ = $1 + $2',
  ],
  subRules: [
    require('./AssignmentExpression'),
  ],
};
