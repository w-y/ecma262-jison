const SingleLineCommentCharsStart = {
  conditions: ['*'],
  rule: '//',
  handler: `
    this.begin('single_line_comment_start');
    return '//';
  `,
};

const SingleLineCommentChar = {
  conditions: ['single_line_comment_start'],
  rule: '.',
  handler: `return 'SingleLineCommentChar';`,
};

exports.singleLineComment = [
  SingleLineCommentCharsStart,
  SingleLineCommentChar,
];
