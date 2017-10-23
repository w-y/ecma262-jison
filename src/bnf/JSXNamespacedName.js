module.exports = {
  conditions: [''],
  name: 'JSXNamespacedName',
  rules: [
    'JSXIdentifier : JSXIdentifier',
  ],
  handlers: [
    '$$ = $1 + $2 + $3;',
  ],
  subRules: [
    require('./JSXIdentifier'),
  ],
};
