function BaseNode({
  type,
  raw,
  leadingComments = [],
  trailingComments = [],
  loc,
  lexer,
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

    this.range = range;

    this.firstLine = firstLine;
    this.firstColumn = firstColumn;

    this.lastLine = lastLine;
    this.lastColumn = lastColumn;
  }

  this.leadingComments = leadingComments;
  this.trailingComments = trailingComments;

  if (lexer.comments && lexer.comments.length > 0) {
    for (let i = 0; i < lexer.comments.length; i++) {
      const comment = lexer.comments[i];
      const loc = lexer.comments[i].loc;
      const range = lexer.comments[i].range;

      if (range[0] < this.range[0] && !comment.hasLeading) {
        comment.hasLeading = true;
        this.leadingComments.push({
          type: comment.type,
          value: comment.buffer.join(''),
          range: comment.range,
       });
      }

      if (range[1] > this.range[1] && !comment.hasTrailing) {
        comment.hasTrailing = true;
        this.trailingComments.push({
          type: comment.type,
          value: comment.buffer.join(''),
          range: comment.range,
       });
      }
    }
  }
}

module.exports = BaseNode;
