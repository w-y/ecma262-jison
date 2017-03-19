module.exports = {
  conditions: [''],
  name: 'UnicodeEscapeSequence',
  rules: [
    'UnicodeEscapeSequenceStart Hex4Digits',
  ],
  handlers: [
    '$$ = $1 + $2;',
  ],
  subRules: [
    require('./Hex4Digits'),
  ],
};
