module.exports = {
  conditions: [''],
  name: 'Expression',
  rules: [
    'AssignmentExpression',
    'Expression , AssignmentExpression',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1 + $2 + $3;',
  ],
  subRules: [
    require('./AssignmentExpression'),
  ],
};
