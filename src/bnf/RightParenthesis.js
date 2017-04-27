module.exports = {
  conditions: [''],
  name: 'RightParenthesis',
  rules: [
    ')',
  ],
  handlers: [
    '$$ = yy.lexer.yylloc',
  ],
  subRules: [
  ],
};
