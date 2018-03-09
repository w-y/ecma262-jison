'use strict';

var SingleStringCharacter = {
  conditions: ['single_string_start'],
  rule: '.',
  handler: '\n    return require(\'./util\').parseString.call(this, \'SingleStringCharacter\');\n  '
};

var SingleStringCharacterLineTerminator = {
  conditions: ['single_string_start'],
  rule: '\\u000A|\\u000D',
  handler: '\n    return require(\'./util\').parseString.call(this, \'SingleStringCharacter\');\n  '
};

var SingleStringEscapeStart = {
  conditions: ['single_escape_string'],
  rule: 'u|U',
  handler: '\n   return require(\'./util\').parseEscapeString.call(this, this.match);\n  '
};

var SingleStringEscape = {
  conditions: ['single_escape_string'],
  rule: '.',
  handler: '\n    return require(\'./util\').parseEscapeStringCharacter.call(this, this.match);\n  '
};

var SingleQuoteStart = {
  conditions: ['INITIAL', 'case_start', 'arrow_brace_start', 'template_string_head_start', 'brace_start', 'function_brace_start', 'block_brace_start', 'condition_start', 'parentheses_start', 'function_parentheses_start', 'jsx_child_block_start', 'jsx_spread_attr_start', 'import_start'],
  rule: '\\\'',
  handler: '\n    this.begin(\'single_string_start\');\n    return \'SingleQuoteStart\';\n  '
};

var DoubleStringCharacter = {
  conditions: ['double_string_start'],
  rule: '.',
  handler: '\n    return require(\'./util\').parseString.call(this, \'DoubleStringCharacter\');\n  '
};

var DoubleStringCharacterLineTerminator = {
  conditions: ['double_string_start'],
  rule: '\\u000A|\\u000D',
  handler: '\n    return require(\'./util\').parseString.call(this, \'DoubleStringCharacter\');\n  '
};

var DoubleStringEscapeStart = {
  conditions: ['double_escape_string'],
  rule: 'u|U',
  handler: '\n   return require(\'./util\').parseEscapeString.call(this, this.match);\n  '
};

var DoubleStringEscape = {
  conditions: ['double_escape_string'],
  rule: '.',
  handler: '\n    return require(\'./util\').parseEscapeStringCharacter.call(this, this.match);\n  '
};

var DoubleQuoteStart = {
  conditions: ['INITIAL', 'case_start', 'arrow_brace_start', 'template_string_head_start', 'brace_start', 'function_brace_start', 'block_brace_start', 'condition_start', 'parentheses_start', 'function_parentheses_start', 'jsx_child_block_start', 'jsx_spread_attr_start', 'import_start'],
  rule: '"',
  handler: '\n    this.begin(\'double_string_start\');\n    return \'DoubleQuoteStart\';\n  '
};

exports.singleString = [SingleStringCharacter, SingleStringCharacterLineTerminator, SingleStringEscapeStart, SingleStringEscape, SingleQuoteStart];

exports.doubleString = [DoubleStringCharacter, DoubleStringCharacterLineTerminator, DoubleStringEscapeStart, DoubleStringEscape, DoubleQuoteStart];