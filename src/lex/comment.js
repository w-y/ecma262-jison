const WHITESPACES = '\\u000A|\\u000D|\\u2028\\|\\u2029';

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
  rule: `.|${WHITESPACES}`,
  handler: `
    this.popState();
    if (this.match === '*') {
      //  asterist again
      this.begin('multi_line_comment_post_asterisk_start');
      return '';
    } else if (this.match === '/') {
      // since '*/' match first
      // should never enter this
    } else {
      // MultiLineNotForwardSlashOrAsteriskChar
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

const SingleLineCommentCharEnd = {
  conditions: ['single_line_comment_start'],
  rule: WHITESPACES,
  handler: `
    //SourceCharacterbut not LineTerminator
    this.comment.range.push([yylloc.last_line, yylloc.last_column]);
    this.popState();
    return '';
  `,
};

const SingleLineCommentChar = {
  conditions: ['single_line_comment_start'],
  rule: '.',
  handler: `
    if (this.comment) {
      this.comment.value.push(this.match);
    }
    return '';
  `,
};

exports.singleLineComment = [
  SingleLineCommentCharsStart,
  SingleLineCommentCharEnd,
  SingleLineCommentChar,
];

exports.multiLineComment = [
  MultiLineCommentCharsEnd,
  MultiLineCommentCharsStart,
  MultiLineNotAsteriskChar,
  PostAsteriskCommentCharsStart,
  PostAsteriskCommentChars,
];
