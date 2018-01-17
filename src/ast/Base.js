const { isLineTerminator } = require('../util');

function BaseNode({
  type,
  raw,
  leadingComments = [],
  trailingComments = [],
  loc,
  yy,
}) {
  this.type = type;
  this.raw = raw;

  if (loc) {
    const {
      range,
      first_line: firstLine,
      first_column: firstColumn,
      last_line: lastLine,
      last_column: lastColumn,
    } = loc;

    // NOTICE: need to fix range after auto semicolon insertion
    // subtract insertion offset
    const rangeStart = range[0];
    const rangeEnd = range[1];
    let countStart = 0;
    let countEnd = 0;

    if (yy.autoInsertions) {
      for (let i = 0; i < yy.autoInsertions.length; i++) {
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

            let ptr = rangeEnd - 2;
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
    for (let i = 0; i < yy.comments.length; i++) {
      const comment = yy.comments[i];
      const commentRange = yy.comments[i].range;

      if (comment.leadingLinkNode) {
        if (comment.leadingLinkNode.range[0] >= this.range[0] &&
            comment.leadingLinkNode.range[1] <= this.range[1]) {
          if (commentRange[1] <= this.range[0]) {
            comment.leadingLinkNode = this;
          }
        }
      } else if (commentRange[1] <= this.range[0] && !comment.leadingLinkNode) {
        comment.leadingLinkNode = this;
      }

      if (comment.trailingLinkNode) {
        if (comment.trailingLinkNode.range[0] >= this.range[0] &&
            comment.trailingLinkNode.range[1] <= this.range[1]) {
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
