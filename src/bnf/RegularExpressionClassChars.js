module.exports = {
  conditions: [''],
  name: 'RegularExpressionClassChars',
  rules: [
    'RegularExpressionClassChars RegularExpressionClassChar',
  ],
  handlers: [
    '$$ = $1 + $2',
  ],
  subRules: [
    require('./RegularExpressionClassChar'),
  ],
};
