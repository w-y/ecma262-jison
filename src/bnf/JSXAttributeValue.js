module.exports = {
  conditions: [''],
  name: 'JSXAttributeValue',
  rules: [
    'JSXSingleQuoteStart JSXSingleStringCharacters JSXSingleQuoteEnd',
    'JSXDoubleQuoteStart JSXDoubleStringCharacters JSXDoubleQuoteEnd',
    '{ AssignmentExpression }',
    'JSXElement',
  ],
  handlers: [
    '$$ = $1 + $2 +$3;',
    '$$ = $1 + $2 +$3;',
    '$$ = $1 + $2 +$3;',
    '$$ = $1;',
  ],
  subRules: [
    require('./JSXAttributeValue'),
    require('./AssignmentExpression'),
    require('./JSXSingleStringCharacters'),
    require('./JSXDoubleStringCharacters'),
  ],
};
