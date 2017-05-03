function BaseNode({
  type,
  raw,
  leadingComments = [],
  trailingComments = [],
  loc,
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
}

module.exports = BaseNode;
