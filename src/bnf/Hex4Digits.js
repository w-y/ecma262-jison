module.exports = {
  conditions: [''],
  name: 'Hex4Digits',
  rules: [
    'HexDigit HexDigit HexDigit HexDigit',
  ],
  handlers: [
    '$$ = require(\'./utils\').getMVHexDigits($1, $2, $3, $4);',
  ],
  subRules: [
  ],
};
