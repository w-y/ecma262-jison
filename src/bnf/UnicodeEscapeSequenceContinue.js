module.exports = {
  conditions: [''],
  name: 'UnicodeEscapeSequenceContinue',
  rules: [
    'UnicodeEscapeSequenceContinueStart Hex4Digits', // TODO: id condition true
  ],
  handlers: [
    '$$ = String.fromCodePoint($2);',
  ],
  subRules: [
    require('./Hex4Digits'),
  ],
};
