module.exports = {
  conditions: [''],
  name: 'JSXAttributes',
  rules: [
    // 'JSXSpreadAttribute',
    'JSXAttribute',
    'JSXAttribute JSXAttributes',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1;',
    '$$ = $1 + $2;',
  ],
  subRules: [
    require('./JSXAttribute'),
    // require('./JSXSpreadAttribute'),
  ],
};
