module.exports = {
  conditions: [''],
  name: 'LeftParenthesis',
  rules: [
    '(',
  ],
  handlers: [
    '$$ = yy.lexer.yylloc',
  ],
  subRules: [
  ],
};
