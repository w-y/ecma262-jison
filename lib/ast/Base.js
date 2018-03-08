'use strict';

var _require = require('../util'),
    isLineTerminator = _require.isLineTerminator;

function BaseNode(_ref) {
  var type = _ref.type,
      raw = _ref.raw,
      _ref$leadingComments = _ref.leadingComments,
      leadingComments = _ref$leadingComments === undefined ? [] : _ref$leadingComments,
      _ref$trailingComments = _ref.trailingComments,
      trailingComments = _ref$trailingComments === undefined ? [] : _ref$trailingComments,
      loc = _ref.loc,
      yy = _ref.yy;

  this.type = type;
  this.raw = raw;

  if (loc) {
    var range = loc.range,
        firstLine = loc.first_line,
        firstColumn = loc.first_column,
        lastLine = loc.last_line,
        lastColumn = loc.last_column;

    // NOTICE: need to fix range after auto semicolon insertion
    // subtract insertion offset

    var rangeStart = range[0];
    var rangeEnd = range[1];
    var countStart = 0;
    var countEnd = 0;

    if (yy.autoInsertions) {
      for (var i = 0; i < yy.autoInsertions.length; i++) {
        if (yy.autoInsertions[i]) {
          // NOTICE: each insertion make next insertion's offset plus 1

          if (yy.autoInsertions[i] <= rangeStart) {
            countStart++;
          }
          if (yy.autoInsertions[i] <= rangeEnd) {
            countEnd++;
          }
          if (yy.autoInsertions[i] === rangeEnd) {
            // NOTICE: [rangeStart, ... 'INSERT SEMICOLON', rangeEnd]
            // here we neet to jump over the LF,
            // rangeEnd - 1 is the offset where we insert semicolon,
            // rangeEnd - 2 is the character before insertion

            var ptr = rangeEnd - 2;
            while (ptr >= rangeStart && isLineTerminator(yy.lexer.matched[ptr])) {
              countEnd++;
              ptr--;
            }
          }
        }
      }
    }

    this.range = [rangeStart - countStart, rangeEnd - countEnd];

    this.firstLine = firstLine;
    this.firstColumn = firstColumn;

    this.lastLine = lastLine;
    this.lastColumn = lastColumn;
  }

  this.leadingComments = leadingComments;
  this.trailingComments = trailingComments;

  if (yy.comments && yy.comments.length > 0) {
    for (var _i = 0; _i < yy.comments.length; _i++) {
      var comment = yy.comments[_i];
      var commentRange = yy.comments[_i].range;

      if (comment.leadingLinkNode) {
        if (comment.leadingLinkNode.range[0] >= this.range[0] && comment.leadingLinkNode.range[1] <= this.range[1]) {
          if (commentRange[1] <= this.range[0]) {
            comment.leadingLinkNode = this;
          }
        }
      } else if (commentRange[1] <= this.range[0] && !comment.leadingLinkNode) {
        comment.leadingLinkNode = this;
      }

      if (comment.trailingLinkNode) {
        if (comment.trailingLinkNode.range[0] >= this.range[0] && comment.trailingLinkNode.range[1] <= this.range[1]) {
          if (commentRange[0] > this.range[1]) {
            comment.trailingLinkNode = this;
          }
        }
      } else if (commentRange[0] > this.range[1] && !comment.trailingLinkNode) {
        comment.trailingLinkNode = this;
      }
    }
  }
}

module.exports = BaseNode;