'use strict';

/* eslint no-param-reassign: 0 */
var LINE_TERMINATORS = '\\u000A|\\u000D|\\u2028\\|\\u2029';

exports.onCommentStart = function (yy, type, line, column, range) {
  if (!yy.comments) {
    yy.comments = [];
  }
  // range: [[first_line, first_column], [end_line, end_column]]
  yy.comment = {
    loc: [[line, column]],
    range: [range],
    type: type,
    buffer: []
  };
};

exports.onCommentEnd = function (yy, type, line, column, range) {
  if (!yy.comments) {
    yy.comments = [];
  }
  yy.comment.loc.push([line, column]);
  yy.comment.range.push(range);

  // NOTICE: need to fix range after auto semicolon insertion
  // subtract insertion offset
  if (yy.autoInsertions) {
    var rangeStart = yy.comment.range[0];
    var countStart = 0;

    for (var i = 0; i < yy.autoInsertions.length; i++) {
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

exports.onComment = function (yy, value) {
  yy.comment.buffer.push(value);
};

var MultiLineCommentCharsStart = {
  conditions: ['*'],
  rule: '/\\*',
  handler: '\n    if (this.topState() === \'single_line_comment_start\') {\n      return require(\'./lex/comment\').onComment(yy, this.match);\n    }\n    if (this.topState() === \'single_string_start\') {\n      return \'SingleStringCharacter\';\n    }\n    if (this.topState() === \'double_string_start\') {\n      return \'DoubleStringCharacter\';\n    }\n    if (this.topState() === \'multi_line_comment_start\') {\n    } else {\n      this.begin(\'multi_line_comment_start\');\n    }\n    require(\'./lex/comment\').onCommentStart(yy, \'MultiLine\', yylloc.first_line, yylloc.first_column, yylloc.range[0]);\n    return \'\';\n  '
};

var MultiLineCommentCharsEnd = {
  conditions: ['multi_line_comment_start', 'multi_line_comment_post_asterisk_start'],
  rule: '\\*/',
  handler: '\n    if (this.topState() === \'multi_line_comment_post_asterisk_start\') {\n      this.popState();\n    }\n    this.popState();\n    require(\'./lex/comment\').onCommentEnd(yy, \'MultiLine\', yylloc.last_line, yylloc.last_column, yylloc.range[1]);\n    return \'\';\n  '
};

var MultiLineNotAsteriskChar = {
  conditions: ['multi_line_comment_start'],
  rule: '[^*]',
  handler: '\n    require(\'./lex/comment\').onComment(yy, this.match);\n    return \'\';\n  '
};

var PostAsteriskCommentCharsStart = {
  conditions: ['multi_line_comment_start'],
  rule: '[*]',
  handler: '\n    this.begin(\'multi_line_comment_post_asterisk_start\');\n    require(\'./lex/comment\').onComment(yy, this.match);\n    return \'\';\n  '
};

var PostAsteriskCommentChars = {
  conditions: ['multi_line_comment_post_asterisk_start'],
  rule: '.|' + LINE_TERMINATORS,
  handler: '\n    this.popState();\n    require(\'./lex/comment\').onComment(yy, this.match);\n    if (this.match === \'*\') {\n      //  asterist again\n      this.begin(\'multi_line_comment_post_asterisk_start\');\n      return \'\';\n    } else if (this.match === \'/\') {\n      // since \'*/\' match first\n      // should never enter this\n    } else {\n      // MultiLineNotForwardSlashOrAsteriskChar\n    }\n    return \'\';\n  '
};

var SingleLineCommentCharsStart = {
  conditions: ['*'],
  rule: '//',
  handler: '\n    // //// will not begin new state\n    if (this.topState() !== \'single_line_comment_start\') {\n      this.begin(\'single_line_comment_start\');\n    }\n    if (this.topState() === \'single_string_start\') {\n      return \'SingleStringCharacter\';\n    }\n    if (this.topState() === \'double_string_start\') {\n      return \'DoubleStringCharacter\';\n    }\n    require(\'./lex/comment\').onCommentStart(yy, \'SingleLine\', yylloc.first_line, yylloc.first_column, yylloc.range[0]);\n    return \'\';\n  '
};

var SingleLineCommentCharEnd = {
  conditions: ['single_line_comment_start'],
  rule: LINE_TERMINATORS,
  handler: '\n    this.popState();\n    // SourceCharacterbut not LineTerminator\n    require(\'./lex/comment\').onCommentEnd(yy, \'SingleLine\', yylloc.first_line, yylloc.first_column, yylloc.range[0]);\n    return \'\';\n  '
};

var SingleLineCommentChar = {
  conditions: ['single_line_comment_start'],
  rule: '.',
  handler: '\n    require(\'./lex/comment\').onComment(yy, this.match);\n    return \'\';\n  '
};

exports.singleLineComment = [SingleLineCommentCharsStart, SingleLineCommentCharEnd, SingleLineCommentChar];

exports.SingleLineCommentCharsStart = SingleLineCommentCharsStart;
exports.SingleLineCommentCharEnd = SingleLineCommentCharEnd;
exports.SingleLineCommentChar = SingleLineCommentChar;

exports.multiLineComment = [MultiLineCommentCharsEnd, MultiLineCommentCharsStart, MultiLineNotAsteriskChar, PostAsteriskCommentCharsStart, PostAsteriskCommentChars];