module.exports = {
  conditions: [''],
  name: 'SingleLineCommentChars',
  rules: [
    'SingleLineCommentChar SingleLineCommentChars',
    'SingleLineCommentChar',
  ],
  handlers: [
    '$$ = $1 + $2;',
    '$$ = $1;',
  ],
  subRules: [
  ],
};
