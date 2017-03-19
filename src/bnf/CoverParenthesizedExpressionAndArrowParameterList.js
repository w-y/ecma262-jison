module.exports = {
  conditions: [''],
  name: 'CoverParenthesizedExpressionAndArrowParameterList',
  rules: [
    '( Expression_In )',
    '( )',
    '( ... BindingIdentifier )',
    '( ... BindingPattern )',
    '( Expression_In , ... BindingIdentifier )',
    '( Expression_In , ... BindingPattern )',
  ],
  handlers: [
    '$$ = $1 + $2 + $3',
    '$$ = $1 + $2',
    '$$ = $1 + $2 + $3 + $4',
    '$$ = $1 + $2 + $3 + $4',
    '$$ = $1 + $2 + $3 + $4 + $5 + $6',
    '$$ = $1 + $2 + $3 + $4 + $5 + $6',
  ],
  subRules: [
    require('./Expression_In'),
    require('./BindingIdentifier'),
    require('./BindingPattern'),
  ],
};
