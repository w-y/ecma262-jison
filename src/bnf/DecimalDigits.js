module.exports = {
  conditions: [''],
  name: 'DecimalDigits',
  rules: [
    'DecimalDigit',
    'DecimalDigits DecimalDigit',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1 + $2;',
  ],
  subRules: [
  ],
};
