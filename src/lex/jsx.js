const JSXTextCharacter = {
  conditions: ['*'],
  rule: '.',
  handler: `
  `,
};

exports.JSXTextCharacter = JSXTextCharacter;

const JSXSelfClosing = {
  conditions: ['*'],
  rule: '/[\\u0009|\\u0020]*>',
  handler: `

    if (this.topState() === 'single_line_comment_start') {
      require('./lex/comment').onComment(this, this.match);
      return '';
    }
    // <a/>
    if (this.topState() === 'identifier_start') {
      this.popState();
    }
    this.popState();
    this.popState(); //jsxtag_start
    this.popState(); //jsx_start

    return 'JSXSelfClosing';
  `,
};

const JSXClosing = {
  conditions: ['jsx_start'],
  rule: '<[\\u0009|\\u0020]*/',
  handler: `
    this.begin('jsxtag_closing');
    return 'JSXClosing';
  `,
};

const JSXTextCharacters = {
  conditions: ['jsx_start'],
  rule: '[^{<>}]+',
  handler: `
    debugger;
    return 'JSXTextCharacters';
  `,
};

exports.JSXTextCharacters = JSXTextCharacters;

const JSXChildBlockStart = {
  conditions: ['jsx_start'],
  rule: '{',
  handler: `
    this.begin('jsx_child_block_start');
    return '{';
  `,
};

const JSXChildBlockEnd = {
  conditions: ['jsx_child_block_start'],
  rule: '}',
  handler: `
    debugger;
    this.popState();
    return '}';
  `,
};

exports.JSXChildBlockStart = JSXChildBlockStart;

exports.JSXChildBlockEnd = JSXChildBlockEnd;

const JSXSeperator = {
  conditions: ['jsxtag_start'],
  rule: '[\\u0009|\\u0020]+',
  handler: `
    const input = this.matches.input;
    const { ch } = require('./util').lookAhead(this.matches.input, this.matches.index + this.match.length, true, true);

    // <div a={a} b={b} >
    // NOTICE: ignore empty chars before '>'
    if (ch === '>') {
      return '';
    }

    return 'JSXSeperator';
  `,
};

exports.JSXSelfClosing = JSXSelfClosing;

exports.JSXClosing = JSXClosing;

exports.JSXSeperator = JSXSeperator;

const JSXSingleStringCharacter = {
  conditions: ['jsx_single_string_start'],
  rule: '.',
  handler: `
    return require('./util').parseJSXString.call(this, 'JSXSingleStringCharacter');
  `,
};

const JSXSingleStringCharacterLineTerminator = {
  conditions: ['jsx_single_string_start'],
  rule: '\\u000A|\\u000D',
  handler: `
    return require('./util').parseString.call(this, 'JSXSingleStringCharacter');
  `,
};

const JSXSingleStringEscapeStart = {
  conditions: ['jsx_single_escape_string'],
  rule: '\\u|\\U',
  handler: `
   return require('./util').parseEscapeString.call(this, this.match);
  `,
};

const JSXSingleStringEscape = {
  conditions: ['jsx_single_escape_string'],
  rule: '.',
  handler: `
    return require('./util').parseEscapeStringCharacter.call(this, this.match);
  `,
};

const JSXSingleQuoteStart = {
  conditions: ['jsxtag_attr_value_start'],
  rule: '\\\'',
  handler: `
    this.begin('jsx_single_string_start');
    return 'JSXSingleQuoteStart';
  `,
};

const JSXDoubleStringCharacter = {
  conditions: ['jsx_double_string_start'],
  rule: '.',
  handler: `
    return require('./util').parseJSXString.call(this, 'JSXDoubleStringCharacter');
  `,
};

const JSXDoubleStringCharacterLineTerminator = {
  conditions: ['jsx_double_string_start'],
  rule: '\\u000A|\\u000D',
  handler: `
    return require('./util').parseJSXString.call(this, 'JSXDoubleStringCharacter');
  `,
};

const JSXDoubleStringEscapeStart = {
  conditions: ['jsx_double_escape_string'],
  rule: '\\u|\\U',
  handler: `
   return require('./util').parseEscapeString.call(this, this.match);
  `,
};

const JSXDoubleStringEscape = {
  conditions: ['jsx_double_escape_string'],
  rule: '.',
  handler: `
    return require('./util').parseEscapeStringCharacter.call(this, this.match);
  `,
};

const JSXDoubleQuoteStart = {
  conditions: ['jsxtag_attr_value_start'],
  rule: '"',
  handler: `
    this.begin('jsx_double_string_start');
    return 'JSXDoubleQuoteStart';
  `,
};

/*exports.singleString = [
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
];*/

exports.JSXSingleString = [
  JSXSingleStringCharacter,
  JSXSingleStringCharacterLineTerminator,
  JSXSingleStringEscapeStart,
  JSXSingleStringEscape,
  JSXSingleQuoteStart,
];

exports.JSXDoubleString = [
  JSXDoubleStringCharacter,
  JSXDoubleStringCharacterLineTerminator,
  JSXDoubleStringEscapeStart,
  JSXDoubleStringEscape,
  JSXDoubleQuoteStart,
];

