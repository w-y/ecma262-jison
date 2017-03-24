module.exports = {
  conditions: [''],
  name: 'SingleLineCommentChars',
  rules: [
    'SingleLineCommentChars SingleLineCommentChar',
    'SingleLineCommentChar',
  ],
  handlers: [
    '$$ = $1 + $2;',
    '$$ = $1;',
  ],
  subRules: [
  ],
};
