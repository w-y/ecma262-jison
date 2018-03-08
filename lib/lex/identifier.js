'use strict';

var idStartReg = require('unicode-6.3.0/Binary_Property/ID_Start/regex');
var idContinueReg = require('unicode-6.3.0/Binary_Property/ID_Continue/regex');

exports.idStart = idStartReg.source;

exports.idContinue = idContinueReg.source;

var unicodeIDStart = {
  conditions: ['INITIAL', 'brace_start', 'case_start', 'arrow_brace_start', 'template_string_head_start', 'function_brace_start', 'block_brace_start', 'property_start', 'condition_start', 'parentheses_start', 'function_parentheses_start', 'jsxtag_start', 'jsxtag_closing', 'jsxtagname_start', 'jsxtag_attr_start', 'jsxtag_attr_value_start', 'jsx_child_block_start', 'jsx_spread_attr_start', 'import_start'],
  rule: idStartReg.source,
  handler: '\n    if (this.topState() === \'property_start\') {\n      this.popState();\n    }\n    let res = \'UnicodeIDStart\';\n\n    if (this.topState() === \'jsxtag_start\' || this.topState() === \'jsxtagname_start\' || this.topState() === \'jsxtag_closing\') {\n      res = \'JSXUnicodeIDStart\';\n    }\n\n    this.begin(\'identifier_start\');\n    return res;\n  '
};

var unicodeIDContinue = {
  conditions: ['identifier_start'],
  rule: idContinueReg.source,
  handler: '\n    return \'UnicodeIDContinue\';\n  '
};

var unicodeEscapeSequenceStart = {
  conditions: ['INITIAL', 'identifier_start', 'brace_start', 'case_start', 'arrow_brace_start', 'template_string_head_start', 'function_brace_start', 'block_brace_start', 'property_start', 'condition_start', 'parentheses_start', 'function_parentheses_start', 'jsxtag_start', 'jsxtag_closing', 'jsxtagname_start', 'jsxtag_attr_start', 'jsxtag_attr_value_start', 'jsx_child_block_start', 'jsx_spread_attr_start', 'import_start'],
  rule: '\\\\u|\\\\U',
  handler: '\n    if (this.topState() === \'property_start\') {\n      this.popState();\n    }\n\n    if (this.topState() === \'identifier_start\') {\n      this.begin(\'identifier_start_unicode\');\n      return \'UnicodeEscapeSequenceContinueStart\'\n    } else {\n      let res = \'UnicodeEscapeSequenceStart\';\n\n      if (this.topState() === \'jsxtag_start\' || this.topState() === \'jsxtagname_start\' || this.topState() === \'jsxtag_closing\') {\n        res = \'JSXUnicodeEscapeSequenceStart\';\n      }\n\n      this.begin(\'identifier_start\');\n      this.begin(\'identifier_start_unicode\');\n\n      return res;\n    }\n  '
};

var dollar = {
  conditions: ['INITIAL', 'identifier_start', 'property_start', 'brace_start', 'case_start', 'arrow_brace_start', 'template_string_head_start', 'function_brace_start', 'block_brace_start', 'property_start', 'condition_start', 'parentheses_start', 'function_parentheses_start', 'jsxtag_start', 'jsxtag_closing', 'jsxtagname_start', 'jsxtag_attr_start', 'jsxtag_attr_value_start', 'jsx_child_block_start', 'jsx_spread_attr_start'],
  rule: '\\$',
  handler: '\n    if (this.topState() === \'property_start\') {\n      this.popState();\n    }\n\n    return require(\'./util\').parseIdentifier.call(this, this.match);\n  '
};

var underscore = {
  conditions: ['INITIAL', 'identifier_start', 'property_start', 'brace_start', 'case_start', 'arrow_brace_start', 'template_string_head_start', 'function_brace_start', 'block_brace_start', 'property_start', 'condition_start', 'parentheses_start', 'function_parentheses_start', 'jsxtag_start', 'jsxtag_closing', 'jsxtagname_start', 'jsxtag_attr_start', 'jsxtag_attr_value_start', 'jsx_child_block_start', 'jsx_spread_attr_start', 'import_start'],
  rule: '_',
  handler: '\n    if (this.topState() === \'property_start\') {\n      this.popState();\n    }\n    return require(\'./util\').parseIdentifier.call(this, this.match);\n  '
};

exports.unicodeIDStart = unicodeIDStart;
exports.unicodeIDContinue = unicodeIDContinue;
exports.unicodeEscapeSequenceStart = unicodeEscapeSequenceStart;

exports.dollar = dollar;
exports.underscore = underscore;

exports.identifier = [dollar, underscore, unicodeEscapeSequenceStart, unicodeIDContinue, unicodeIDStart];