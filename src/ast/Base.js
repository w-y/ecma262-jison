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

  if (lexer.comments && lexer.comments.length > 0) {
    for (let i = 0; i < lexer.comments.length; i++) {
      console.log(lexer.comments[i].range);
    }
  }

  this.leadingComments = leadingComments;
  this.trailingComments = trailingComments;
}

module.exports = BaseNode;
