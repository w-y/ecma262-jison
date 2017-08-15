module.exports = {
  conditions: [''],
  name: 'RegularExpressionClassChar',
  rules: [
    'RegularExpressionNonTerminator',
    'RegularExpressionBackslashSequence',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1;',
  ],
  subRules: [
  ],
};
