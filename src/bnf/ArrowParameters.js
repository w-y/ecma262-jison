module.exports = {
  conditions: [''],
  name: 'ArrowParameters',
  rules: [
    'BindingIdentifier',
    'CoverParenthesizedExpressionAndArrowParameterList',
  ],
  handlers: [
    '$$ = $1',
    '$$ = $1',
  ],
  subRules: [
    require('./BindingIdentifier'),
    require('./CoverParenthesizedExpressionAndArrowParameterList'),
  ],
};
