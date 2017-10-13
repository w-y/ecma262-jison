module.exports = {
  conditions: [''],
  name: 'JSXSpreadAttribute',
  rules: [
    // 'JSXSeperator { ... AssignmentExpression }',
    '{ ... AssignmentExpression }',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1;',
  ],
  subRules: [
    require('./AssignmentExpression'),
  ],
};
