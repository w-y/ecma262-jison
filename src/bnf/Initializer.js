module.exports = {
  conditions: [''],
  name: 'Initializer',
  rules: [
    '= AssignmentExpression',
  ],
  handlers: [
    '$$ = $2',
  ],
  subRules: [
    require('./AssignmentExpression'),
  ],
};
