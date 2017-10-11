module.exports = {
  conditions: [''],
  name: 'JSXElementName',
  rules: [
    'JSXIdentifier',
    'JSXMemberExpression',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1;',
  ],
  subRules: [
    require('./JSXIdentifier'),
    require('./JSXMemberExpression'),
  ],
};
