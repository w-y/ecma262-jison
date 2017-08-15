module.exports = {
  conditions: [''],
  name: 'RegularExpressionClassChars',
  rules: [
    'RegularExpressionClassChar',
    'RegularExpressionClassChars RegularExpressionClassChar',
  ],
  handlers: [
    '$$ = $1',
    '$$ = $1 + $2',
  ],
  subRules: [
    require('./RegularExpressionClassChar'),
  ],
};
