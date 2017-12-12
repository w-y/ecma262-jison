const SingleStringCharacter = {
  conditions: ['single_string_start'],
  rule: '.',
  handler: `
    return require('./util').parseString.call(this, 'SingleStringCharacter');
  `,
};

const SingleStringCharacterLineTerminator = {
  conditions: ['single_string_start'],
  rule: '\\u000A|\\u000D',
  handler: `
    return require('./util').parseString.call(this, 'SingleStringCharacter');
  `,
};

const SingleStringEscapeStart = {
  conditions: ['single_escape_string'],
  rule: 'u|U',
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
  conditions: ['INITIAL', 'case_start', 'arrow_brace_start', 'template_string_head_start', 'brace_start', 'function_brace_start', 'block_brace_start', 'condition_start', 'parentheses_start', 'function_parentheses_start', 'jsx_child_block_start', 'jsx_spread_attr_start', 'import_start'],
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

const DoubleStringCharacterLineTerminator = {
  conditions: ['double_string_start'],
  rule: '\\u000A|\\u000D',
  handler: `
    return require('./util').parseString.call(this, 'DoubleStringCharacter');
  `,
};

const DoubleStringEscapeStart = {
  conditions: ['double_escape_string'],
  rule: 'u|U',
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
  conditions: ['INITIAL', 'case_start', 'arrow_brace_start', 'template_string_head_start', 'brace_start', 'function_brace_start', 'block_brace_start', 'condition_start', 'parentheses_start', 'function_parentheses_start', 'jsx_child_block_start', 'jsx_spread_attr_start', 'import_start'],
  rule: '"',
  handler: `
    this.begin('double_string_start');
    return 'DoubleQuoteStart';
  `,
};

exports.singleString = [
  SingleStringCharacter,
  SingleStringCharacterLineTerminator,
  SingleStringEscapeStart,
  SingleStringEscape,
  SingleQuoteStart,
];

exports.doubleString = [
  DoubleStringCharacter,
  DoubleStringCharacterLineTerminator,
  DoubleStringEscapeStart,
  DoubleStringEscape,
  DoubleQuoteStart,
];
