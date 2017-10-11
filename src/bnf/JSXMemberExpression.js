module.exports = {
  conditions: [''],
  name: 'JSXMemberExpression',
  rules: [
    'JSXIdentifier . JSXIdentifier',
    'JSXMemberExpression . JSXIdentifier',
  ],
  handlers: [
    '$$ = $1 + $2 + $3;',
    '$$ = $1 + $2 + $3;',
  ],
  subRules: [
    require('./JSXIdentifier'),
  ],
};
