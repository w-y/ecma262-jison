'use strict';

var JSXTextCharacter = {
  conditions: ['*'],
  rule: '.',
  handler: '\n  '
};

exports.JSXTextCharacter = JSXTextCharacter;

// />/ is regular expression
// <a a/ >
var JSXSelfClosing = {
  conditions: ['jsxtag_start', 'identifier_start'],
  rule: '/[\\u0009|\\u0020]*>',
  handler: '\n\n    if (this.topState() === \'single_line_comment_start\') {\n      require(\'./lex/comment\').onComment(yy, this.match);\n      return \'\';\n    }\n\n    // <a/>\n    if (this.topState() === \'identifier_start\') {\n      this.popState();\n    }\n\n    // <a/> or <a />\n    if (this.topState() === \'jsxtagname_start\') {\n      this.popState(); //jsxtagname_start\n    }\n\n    this.popState(); //jsxtag_start\n    this.popState(); //jsx_start\n\n    return \'JSXSelfClosing\';\n  '
};

var JSXClosing = {
  conditions: ['jsx_start'],
  rule: '<[\\u0009|\\u0020]*/',
  handler: '\n    this.begin(\'jsxtag_closing\');\n    return \'JSXClosing\';\n  '
};

var JSXTextCharacters = {
  conditions: ['jsx_start'],
  rule: '[^{<>}]+',
  handler: '\n    return \'JSXTextCharacters\';\n  '
};

exports.JSXTextCharacters = JSXTextCharacters;

var JSXChildBlockStart = {
  conditions: ['jsx_start'],
  rule: '{',
  handler: '\n    this.begin(\'jsx_child_block_start\');\n    return \'{\';\n  '
};

var JSXChildBlockEnd = {
  conditions: ['jsx_child_block_start'],
  rule: '}',
  handler: '\n    this.popState();\n    return \'}\';\n  '
};

exports.JSXChildBlockStart = JSXChildBlockStart;

exports.JSXChildBlockEnd = JSXChildBlockEnd;

var JSXSpreadAttributeStart = {
  conditions: ['jsxtag_start', 'jsxtagname_start'],
  rule: '{',
  handler: '\n    if (this.topState() === \'jsxtagname_start\') {\n      this.popState();\n    }\n    this.begin(\'jsx_spread_attr_start\');\n    return \'{\';\n  '
};

var JSXSpreadAttributeEnd = {
  conditions: ['jsx_spread_attr_start'],
  rule: '}',
  handler: '\n    this.popState();\n    return \'}\';\n  '
};

exports.JSXSpreadAttributeStart = JSXSpreadAttributeStart;

exports.JSXSpreadAttributeEnd = JSXSpreadAttributeEnd;

var JSXSeperator = {
  conditions: ['jsxtag_start'],
  rule: '[\\u0009|\\u0020]+',
  handler: '\n    const input = this.matches.input;\n    const { ch } = require(\'./util\').lookAhead(this.matches.input, this.matches.index + this.match.length, true, true);\n\n    // <div a={a} b={b} >\n    // NOTICE: ignore empty chars before \'>\'\n    if (ch === \'>\') {\n      return \'\';\n    }\n    // <div a={a} b={b} />\n    if (ch === \'/\') {\n      return \'\';\n    }\n\n    return \'\';\n  '
};

exports.JSXSelfClosing = JSXSelfClosing;

exports.JSXClosing = JSXClosing;

exports.JSXSeperator = JSXSeperator;

var JSXSingleStringCharacter = {
  conditions: ['jsx_single_string_start'],
  rule: '.',
  handler: '\n    return require(\'./util\').parseJSXString.call(this, \'JSXSingleStringCharacter\');\n  '
};

var JSXSingleStringCharacterLineTerminator = {
  conditions: ['jsx_single_string_start'],
  rule: '\\u000A|\\u000D',
  handler: '\n    return require(\'./util\').parseString.call(this, \'JSXSingleStringCharacter\');\n  '
};

var JSXSingleStringEscapeStart = {
  conditions: ['jsx_single_escape_string'],
  rule: 'u|U',
  handler: '\n   return require(\'./util\').parseEscapeString.call(this, this.match);\n  '
};

var JSXSingleStringEscape = {
  conditions: ['jsx_single_escape_string'],
  rule: '.',
  handler: '\n    return require(\'./util\').parseEscapeStringCharacter.call(this, this.match);\n  '
};

var JSXSingleQuoteStart = {
  conditions: ['jsxtag_attr_value_start'],
  rule: '\\\'',
  handler: '\n    this.begin(\'jsx_single_string_start\');\n    return \'JSXSingleQuoteStart\';\n  '
};

var JSXDoubleStringCharacter = {
  conditions: ['jsx_double_string_start'],
  rule: '.',
  handler: '\n    return require(\'./util\').parseJSXString.call(this, \'JSXDoubleStringCharacter\');\n  '
};

var JSXDoubleStringCharacterLineTerminator = {
  conditions: ['jsx_double_string_start'],
  rule: '\\u000A|\\u000D',
  handler: '\n    return require(\'./util\').parseJSXString.call(this, \'JSXDoubleStringCharacter\');\n  '
};

var JSXDoubleStringEscapeStart = {
  conditions: ['jsx_double_escape_string'],
  rule: 'u|U',
  handler: '\n   return require(\'./util\').parseEscapeString.call(this, this.match);\n  '
};

var JSXDoubleStringEscape = {
  conditions: ['jsx_double_escape_string'],
  rule: '.',
  handler: '\n    return require(\'./util\').parseEscapeStringCharacter.call(this, this.match);\n  '
};

var JSXDoubleQuoteStart = {
  conditions: ['jsxtag_attr_value_start'],
  rule: '"',
  handler: '\n    this.begin(\'jsx_double_string_start\');\n    return \'JSXDoubleQuoteStart\';\n  '
};

exports.JSXSingleString = [JSXSingleStringCharacter, JSXSingleStringCharacterLineTerminator, JSXSingleStringEscapeStart, JSXSingleStringEscape, JSXSingleQuoteStart];

exports.JSXDoubleString = [JSXDoubleStringCharacter, JSXDoubleStringCharacterLineTerminator, JSXDoubleStringEscapeStart, JSXDoubleStringEscape, JSXDoubleQuoteStart];