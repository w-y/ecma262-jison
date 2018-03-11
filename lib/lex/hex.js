'use strict';

var identifierHexDigit = {
  conditions: ['identifier_start_unicode'],
  rule: '[0123456789abcdefABCDEF]',
  handler: '\n    if (!this.__unicode_counter) { this.__unicode_counter = 0; }\n    this.__unicode_counter++;\n    if (this.__unicode_counter === 4) {\n      this.__unicode_counter = 0;\n      this.popState();\n      if (this.topState() === \'double_escape_string\' || this.topState() === \'single_escape_string\') {\n        this.popState();\n      }\n    }\n    return \'HexDigit\';\n  '
};

var hexDigitStart = {
  conditions: ['INITIAL', 'case_start', 'arrow_brace_start', 'template_string_head_start', 'brace_start', 'function_brace_start', 'block_brace_start', 'condition_start', 'parentheses_start', 'function_parentheses_start', 'jsx_child_block_start', 'jsx_spread_attr_start', 'import_start', 'jsxtag_attr_start'],
  rule: '0[xX]',
  handler: '\n    this.begin(\'hex_start\');\n    return this.match;\n  '
};

var hexDigit = {
  conditions: ['hex_start'],
  rule: '[0123456789abcdefABCDEF]',
  handler: '\n    return \'HexDigit\'; \n  '
};

exports.hexDigit = [identifierHexDigit, hexDigitStart, hexDigit];