module.exports = {
  conditions: [''],
  name: 'JSXSpreadAttribute',
  rules: [
    '{ ... AssignmentExpression }',
  ],
  handlers: [
    '$$ = $1;',
  ],
  subRules: [
    require('./AssignmentExpression'),
  ],
};
