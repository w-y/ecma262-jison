function BaseNode(
  type,
  raw,
  firstRange, lastRange,
  firstLine, firstColumn,
  lastLine, lastColumn,
  leadingComments = [],
  trailingComments = [],
) {
  this.type = type;
  this.raw = raw;
  this.firstRange = firstRange;
  this.lastRange = lastRange;
  this.firstLine = firstLine;
  this.firstColumn = firstColumn;
  this.lastLine = lastLine;
  this.lastColumn = lastColumn;

  this.leadingComments = leadingComments;
  this.trailingComments = trailingComments;
}

module.exports = BaseNode;
