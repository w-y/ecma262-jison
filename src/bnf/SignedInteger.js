module.exports = {
  conditions: [''],
  name: 'SignedInteger',
  rules: [
    'DecimalDigits',
    'AdditiveOperator DecimalDigits',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1 + $2;',
  ],
  subRules: [
    require('./DecimalDigits'),
  ],
};
