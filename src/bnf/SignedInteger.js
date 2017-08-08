module.exports = {
  conditions: [''],
  name: 'SignedInteger',
  rules: [
    'DecimalDigits',
    'AdditiveOperator DecimalDigits',
  ],
  handlers: [
    'console.log(\'DecimalDigits \');$$ = $1;',
    'console.log(\'+/- DecimalDigits \');$$ = $1 + $2;',
  ],
  subRules: [
    require('./DecimalDigits'),
  ],
};
