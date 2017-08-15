const LINE_TERMINATORS = '\\u000A|\\u000D|\\u2028\\|\\u2029';

exports.onCommentStart = (lexerRef, type, line, column, range) => {
  const lexer = lexerRef;
  if (!lexer.comments) {
    lexer.comments = [];
  }
  // range: [[first_line, first_column], [end_line, end_column]]
  lexer.comment = {
    loc: [
      [line, column],
    ],
    range: [range],
    type,
    buffer: [],
  };
};

exports.onCommentEnd = (lexerRef, type, line, column, range) => {
  const lexer = lexerRef;
  if (!lexer.comments) {
    lexer.comments = [];
  }
  lexer.comment.loc.push([line, column]);
  lexer.comment.range.push(range);
  lexer.comments.push(lexer.comment);
};

exports.onComment = (lexerRef, value) => {
  const lexer = lexerRef;
  lexer.comment.buffer.push(value);
};

const MultiLineCommentCharsStart = {
  conditions: ['*'],
  rule: '/\\*',
  handler: `
    this.begin('multi_line_comment_start');
    require('./lex/comment').onCommentStart(this, 'MultiLine', yylloc.first_line, yylloc.first_column, yylloc.range[0]);
    return '';
  `,
};

const MultiLineCommentCharsEnd = {
  conditions: ['multi_line_comment_start'],
  rule: '\\*/',
  handler: `
    this.popState();
    require('./lex/comment').onCommentEnd(this, 'MultiLine', yylloc.last_line, yylloc.last_column, yylloc.range[1]);
    return '';
  `,
};

const MultiLineNotAsteriskChar = {
  conditions: ['multi_line_comment_start'],
  rule: '[^*]',
  handler: `
    require('./lex/comment').onComment(this, this.match);
    return '';
  `,
};

const PostAsteriskCommentCharsStart = {
  conditions: ['multi_line_comment_start'],
  rule: '[*]',
  handler: `
    this.begin('multi_line_comment_post_asterisk_start');
    require('./lex/comment').onComment(this, this.match);
    return '';
  `,
};

const PostAsteriskCommentChars = {
  conditions: ['multi_line_comment_post_asterisk_start'],
  rule: `.|${LINE_TERMINATORS}`,
  handler: `
    this.popState();
    require('./lex/comment').onComment(this, this.match);
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
    require('./lex/comment').onCommentStart(this, 'SingleLine', yylloc.first_line, yylloc.first_column, yylloc.range[0]);
    return '';
  `,
};

const SingleLineCommentCharEnd = {
  conditions: ['single_line_comment_start'],
  rule: LINE_TERMINATORS,
  handler: `
    this.popState();
    // SourceCharacterbut not LineTerminator
    require('./lex/comment').onCommentEnd(this, 'SingleLine', yylloc.first_line, yylloc.first_column, yylloc.range[0]);
    return '';
  `,
};

const SingleLineCommentChar = {
  conditions: ['single_line_comment_start'],
  rule: '.',
  handler: `
    require('./lex/comment').onComment(this, this.match);
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
