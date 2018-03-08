/* eslint no-param-reassign: 0 */
const LINE_TERMINATORS = '\\u000A|\\u000D|\\u2028\\|\\u2029';

exports.onCommentStart = (yy, type, line, column, range) => {
  if (!yy.comments) {
    yy.comments = [];
  }
  // range: [[first_line, first_column], [end_line, end_column]]
  yy.comment = {
    loc: [
      [line, column],
    ],
    range: [range],
    type,
    buffer: [],
  };
};

exports.onCommentEnd = (yy, type, line, column, range) => {
  if (!yy.comments) {
    yy.comments = [];
  }
  yy.comment.loc.push([line, column]);
  yy.comment.range.push(range);

  // NOTICE: need to fix range after auto semicolon insertion
  // subtract insertion offset
  if (yy.autoInsertions) {
    const rangeStart = yy.comment.range[0];
    let countStart = 0;

    for (let i = 0; i < yy.autoInsertions.length; i++) {
      if (yy.autoInsertions[i]) {
        if (yy.autoInsertions[i] <= rangeStart) {
          countStart++;
        }
      }
    }
    yy.comment.range[0] -= countStart;
    yy.comment.range[1] -= countStart;
  }

  yy.comments.push(yy.comment);
};

exports.onComment = (yy, value) => {
  yy.comment.buffer.push(value);
};

const MultiLineCommentCharsStart = {
  conditions: ['*'],
  rule: '/\\*',
  handler: `
    if (this.topState() === 'single_line_comment_start') {
      return require('./lex/comment').onComment(yy, this.match);
    }
    if (this.topState() === 'single_string_start') {
      return 'SingleStringCharacter';
    }
    if (this.topState() === 'double_string_start') {
      return 'DoubleStringCharacter';
    }
    if (this.topState() === 'multi_line_comment_start') {
    } else {
      this.begin('multi_line_comment_start');
    }
    require('./lex/comment').onCommentStart(yy, 'MultiLine', yylloc.first_line, yylloc.first_column, yylloc.range[0]);
    return '';
  `,
};

const MultiLineCommentCharsEnd = {
  conditions: ['multi_line_comment_start', 'multi_line_comment_post_asterisk_start'],
  rule: '\\*/',
  handler: `
    if (this.topState() === 'multi_line_comment_post_asterisk_start') {
      this.popState();
    }
    this.popState();
    require('./lex/comment').onCommentEnd(yy, 'MultiLine', yylloc.last_line, yylloc.last_column, yylloc.range[1]);
    return '';
  `,
};

const MultiLineNotAsteriskChar = {
  conditions: ['multi_line_comment_start'],
  rule: '[^*]',
  handler: `
    require('./lex/comment').onComment(yy, this.match);
    return '';
  `,
};

const PostAsteriskCommentCharsStart = {
  conditions: ['multi_line_comment_start'],
  rule: '[*]',
  handler: `
    this.begin('multi_line_comment_post_asterisk_start');
    require('./lex/comment').onComment(yy, this.match);
    return '';
  `,
};

const PostAsteriskCommentChars = {
  conditions: ['multi_line_comment_post_asterisk_start'],
  rule: `.|${LINE_TERMINATORS}`,
  handler: `
    this.popState();
    require('./lex/comment').onComment(yy, this.match);
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
  conditions: ['*'],
  rule: '//',
  handler: `
    // //// will not begin new state
    if (this.topState() !== 'single_line_comment_start') {
      this.begin('single_line_comment_start');
    }
    if (this.topState() === 'single_string_start') {
      return 'SingleStringCharacter';
    }
    if (this.topState() === 'double_string_start') {
      return 'DoubleStringCharacter';
    }
    require('./lex/comment').onCommentStart(yy, 'SingleLine', yylloc.first_line, yylloc.first_column, yylloc.range[0]);
    return '';
  `,
};

const SingleLineCommentCharEnd = {
  conditions: ['single_line_comment_start'],
  rule: LINE_TERMINATORS,
  handler: `
    this.popState();
    // SourceCharacterbut not LineTerminator
    require('./lex/comment').onCommentEnd(yy, 'SingleLine', yylloc.first_line, yylloc.first_column, yylloc.range[0]);
    return '';
  `,
};

const SingleLineCommentChar = {
  conditions: ['single_line_comment_start'],
  rule: '.',
  handler: `
    require('./lex/comment').onComment(yy, this.match);
    return '';
  `,
};

exports.singleLineComment = [
  SingleLineCommentCharsStart,
  SingleLineCommentCharEnd,
  SingleLineCommentChar,
];

exports.SingleLineCommentCharsStart = SingleLineCommentCharsStart;
exports.SingleLineCommentCharEnd = SingleLineCommentCharEnd;
exports.SingleLineCommentChar = SingleLineCommentChar;

exports.multiLineComment = [
  MultiLineCommentCharsEnd,
  MultiLineCommentCharsStart,
  MultiLineNotAsteriskChar,
  PostAsteriskCommentCharsStart,
  PostAsteriskCommentChars,
];
