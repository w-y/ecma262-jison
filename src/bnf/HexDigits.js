module.exports = {
  conditions: [''],
  name: 'HexDigits',
  rules: [
    'HexDigit',
    'HexDigits HexDigit',
  ],
  handlers: [
    '$$ = $1',
    '$$ = $1 + $2',
  ],
  subRules: [
  ],
};
