module.exports = {
  conditions: [''],
  name: 'JSXChild',
  rules: [
    'JSXText',
    'JSXElement',
    '{ AssignmentExpression }',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1;',
    '$$ = $1 + $2 + $3;',
  ],
  subRules: [
    require('./JSXText'),
    require('./JSXElement'),
    require('./AssignmentExpression'),
  ],
};
