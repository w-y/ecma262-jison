const JSXTextCharacter = {
  conditions: ['*'],
  rule: '.',
  handler: `
  `,
};

exports.JSXTextCharacter = JSXTextCharacter;

// />/ is regular expression
// <a a/ >
const JSXSelfClosing = {
  conditions: ['jsxtag_start', 'identifier_start'],
  rule: '/[\\u0009|\\u0020]*>',
  handler: `

    if (this.topState() === 'single_line_comment_start') {
      require('./lex/comment').onComment(yy, this.match);
      return '';
    }

    // <a/>
    if (this.topState() === 'identifier_start') {
      this.popState();
    }

    // <a/> or <a />
    if (this.topState() === 'jsxtagname_start') {
      this.popState(); //jsxtagname_start
    }

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
    this.popState();
    return '}';
  `,
};

exports.JSXChildBlockStart = JSXChildBlockStart;

exports.JSXChildBlockEnd = JSXChildBlockEnd;

const JSXSpreadAttributeStart = {
  conditions: ['jsxtag_start', 'jsxtagname_start'],
  rule: '{',
  handler: `
    if (this.topState() === 'jsxtagname_start') {
      this.popState();
    }
    this.begin('jsx_spread_attr_start');
    return '{';
  `,
};

const JSXSpreadAttributeEnd = {
  conditions: ['jsx_spread_attr_start'],
  rule: '}',
  handler: `
    this.popState();
    return '}';
  `,
};

exports.JSXSpreadAttributeStart = JSXSpreadAttributeStart;

exports.JSXSpreadAttributeEnd = JSXSpreadAttributeEnd;

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
    // <div a={a} b={b} />
    if (ch === '/') {
      return '';
    }

    return '';
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
  rule: 'u|U',
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
  rule: 'u|U',
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

