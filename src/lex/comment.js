const MultiLineCommentCharsStart = {
  conditions: ['INITIAL'],
  rule: '/\\*',
  handler: `
    this.begin('multi_line_comment_start');
    this.comment = {
      range: [
        [yylloc.first_line, yylloc.first_column],
      ],
      type: 'MuliLine',
      value: [],
    };
    return '';
  `,
};

const MultiLineCommentCharsEnd = {
  conditions: ['multi_line_comment_start'],
  rule: '\\*/',
  handler: `
    this.popState();
    return '';
  `,
};

const MultiLineNotAsteriskChar = {
  conditions: ['multi_line_comment_start'],
  rule: '[^*]',
  handler: `
    console.log('===============');
    console.log(this.match);
    console.log('===============');
    return '';
  `,
};

const PostAsteriskCommentCharsStart = {
  conditions: ['multi_line_comment_start'],
  rule: '[*]',
  handler: `
    this.begin('multi_line_comment_post_asterisk_start');
    return '';
  `,
};

const PostAsteriskCommentChars = {
  conditions: ['multi_line_comment_post_asterisk_start'],
  rule: '.',
  handler: `
    if (this.match === '*') {
      this.begin('multi_line_comment_post_asterisk_start');
      return '';
    } else if (this.match === '/') {
      ;  
    } else {
      // MultiLineNotForwardSlashOrAsteriskChar
      this.popState();
    }
    return '';
  `,
};

const SingleLineCommentCharsStart = {
  conditions: ['INITIAL'],
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

exports.multiLineComment = [
  MultiLineCommentCharsStart,
  MultiLineNotAsteriskChar,
];
