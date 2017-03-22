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
  handler: `
    //SourceCharacterbut not LineTerminator
    if (require('./util').isLineTerminator(this.match)) {
      this.popState();
      return '';
    }
    return 'SingleLineCommentChar';
  `,
};

exports.singleLineComment = [
  SingleLineCommentCharsStart,
  SingleLineCommentChar,
];
