module.exports = {
  conditions: [''],
  name: 'EqualityExpression',
  rules: [
    'RelationalExpression',
    'EqualityExpression EqualityOperator RelationalExpression',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1 + $2 + $3;',
  ],
  subRules: [
    require('./RelationalExpression'),
  ],
};
