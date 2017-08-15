module.exports = {
  conditions: [''],
  name: 'HexIntegerLiteral',
  rules: [
    '0x HexDigits',
    '0X HexDigits',
  ],
  handlers: [
    '$$ = $2',
    '$$ = $2',
  ],
  subRules: [
    require('./HexDigits'),
  ],
};
