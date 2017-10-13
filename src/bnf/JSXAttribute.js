module.exports = {
  conditions: [''],
  name: 'JSXAttribute',
  rules: [
    // 'JSXSeperator JSXAttributeName = JSXAttributeValue',
    'JSXAttributeName = JSXAttributeValue',
  ],
  handlers: [
    '$$ = $1 + $2;',
  ],
  subRules: [
    require('./JSXAttributeName'),
    require('./JSXAttributeValue'),
  ],
};
