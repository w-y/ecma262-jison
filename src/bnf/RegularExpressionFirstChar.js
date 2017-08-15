module.exports = {
  conditions: [''],
  name: 'RegularExpressionFirstChar',
  rules: [
    'RegularExpressionNonTerminator',
    'RegularExpressionBackslashSequence',
    'RegularExpressionClass',
  ],
  handlers: [
    '$$ = $1',
    '$$ = $1',
    '$$ = $1',
  ],
  subRules: [
    require('./RegularExpressionBackslashSequence'),
    require('./RegularExpressionClass'),
  ],
};
