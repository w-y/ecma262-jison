module.exports = {
  conditions: [''],
  name: 'UnicodeEscapeSequence',
  rules: [
    'UnicodeEscapeSequenceStart Hex4Digits',
  ],
  handlers: [
    '$$ = String.fromCodePoint($2);',
  ],
  subRules: [
    require('./Hex4Digits'),
  ],
};
