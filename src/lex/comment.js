const SingleLineCommentCharsStart = {
  conditions: ['*'],
  rule: '//',
  handler: `
    this.begin('single_line_comment_start');
    this.comment = {
      range: [
        [yylloc.first_line, yylloc.first_column],
      ],
      type: 'SingleLine',
      value: [],
    };
    return '';
  `,
};

const SingleLineCommentChar = {
  conditions: ['single_line_comment_start'],
  rule: '.',
  handler: `
    //SourceCharacterbut not LineTerminator
    if (this.comment) {
      this.comment.value.push(this.match);
    }
    return '';
  `,
};

exports.singleLineComment = [
  SingleLineCommentCharsStart,
  SingleLineCommentChar,
];
