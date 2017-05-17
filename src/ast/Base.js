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


    // subtract insertion offset
    let rangeStart = range[0];
    let rangeEnd = range[1];

    if (yy.autoInsertions) {
      for (let i = 0; i < yy.autoInsertions.length; i++) {
        if (yy.autoInsertions[i]) {
          if (yy.autoInsertions[i] < rangeStart) {
            rangeStart--;
          }
          if (yy.autoInsertions[i] < rangeEnd) {
            rangeEnd--;
          }
        }
      }
    }

    this.range = [rangeStart, rangeEnd];

    this.firstLine = firstLine;
    this.firstColumn = firstColumn;

    this.lastLine = lastLine;
    this.lastColumn = lastColumn;
  }

  this.leadingComments = leadingComments;
  this.trailingComments = trailingComments;

  const lexer = yy.lexer;

  if (lexer.comments && lexer.comments.length > 0) {
    for (let i = 0; i < lexer.comments.length; i++) {
      const comment = lexer.comments[i];
      const commentRange = lexer.comments[i].range;

      if (comment.leadingLinkNode) {
        if (comment.leadingLinkNode.range[0] >= this.range[0] &&
            comment.leadingLinkNode.range[1] <= this.range[1]) {
          if (commentRange[1] < this.range[0]) {
            comment.leadingLinkNode = this;
          }
        }
      } else if (commentRange[1] < this.range[0] && !comment.leadingLinkNode) {
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
