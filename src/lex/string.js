const SingleStringCharacter = {
  conditions: ['single_string_start'],
  rule: '.',
  handler: `
    return require('./util').parseString.call(this, 'SingleStringCharacter');
  `,
};

const SingleStringEscapeStart = {
  conditions: ['single_escape_string'],
  rule: '\\\\u|\\\\U',
  handler: `
   return require('./util').parseEscapeString.call(this, this.match);
  `,
};

const SingleStringEscape = {
  conditions: ['single_escape_string'],
  rule: '.',
  handler: `
    return require('./util').parseEscapeStringCharacter.call(this, this.match);
  `,
};

const SingleQuoteStart = {
  conditions: ['INITIAL'],
  rule: '\\\'',
  handler: `
    this.begin('single_string_start');
    return 'SingleQuoteStart';
  `,
};

const DoubleStringCharacter = {
  conditions: ['double_string_start'],
  rule: '.',
  handler: `
    return require('./util').parseString.call(this, 'DoubleStringCharacter');
  `,
};

const DoubleStringEscapeStart = {
  conditions: ['double_escape_string'],
  rule: '\\\\u|\\\\U',
  handler: `
   return require('./util').parseEscapeString.call(this, this.match);
  `,
};

const DoubleStringEscape = {
  conditions: ['double_escape_string'],
  rule: '.',
  handler: `
    return require('./util').parseEscapeStringCharacter.call(this, this.match);
  `,
};

const DoubleQuoteStart = {
  conditions: ['INITIAL'],
  rule: '\\\'',
  handler: `
    this.begin('double_escape_string');
    return 'DoubleQuoteStart';
  `,
};

exports.singleString = [SingleStringCharacter, SingleStringEscapeStart, SingleStringEscape, SingleQuoteStart];

exports.doubleString = [DoubleStringCharacter, DoubleStringEscapeStart, DoubleStringEscape, DoubleQuoteStart];
