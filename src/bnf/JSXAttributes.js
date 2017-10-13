module.exports = {
  conditions: [''],
  name: 'JSXAttributes',
  rules: [
    'JSXSpreadAttribute',
    'JSXSpreadAttribute JSXAttributes',
    'JSXAttribute',
    'JSXAttribute JSXAttributes',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1 + $2;',
    '$$ = $1;',
    '$$ = $1 + $2;',
  ],
  subRules: [
    require('./JSXAttribute'),
    require('./JSXSpreadAttribute'),
  ],
};
