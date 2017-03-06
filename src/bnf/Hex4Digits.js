module.exports = {
  conditions: [''],
  name: 'Hex4Digits',
  rules: [
    `HexDigit HexDigit HexDigit HexDigit`,
  ],
  handlers: [
    `$$ = $1 + $2 +$3 + $4;`,
  ],
  subRules: [
  ],
};
