'use strict';

module.exports = {
  conditions: [''],
  name: 'SingleLineComment',
  rules: ['// SingleLineCommentChars', '//'],
  handlers: ['$$ = $2;', '$$ = \'\';'],
  subRules: [require('./SingleLineCommentChars')]
};