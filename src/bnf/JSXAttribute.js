module.exports = {
  conditions: [''],
  name: 'JSXAttribute',
  rules: [
    'JSXAttributeName = JSXAttributeValue',
    'JSXAttributeName',
  ],
  handlers: [
    '$$ = $1 + $2;',
    '$$ = $1;',
  ],
  subRules: [
    require('./JSXAttributeName'),
    require('./JSXAttributeValue'),
  ],
};
