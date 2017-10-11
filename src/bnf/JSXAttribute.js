module.exports = {
  conditions: [''],
  name: 'JSXAttribute',
  rules: [
    'JSXSeperator JSXAttributeName = JSXAttributeValue',
  ],
  handlers: [
    '$$ = $1 + $2 + $3;',
  ],
  subRules: [
    require('./JSXAttributeName'),
    require('./JSXAttributeValue'),
  ],
};
