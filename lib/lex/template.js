'use strict';

var TemplateHeadStart = {
  conditions: ['template_string_start'],
  rule: '\\${',
  handler: '\n    this.begin(\'template_string_head_start\');\n    return \'LEFT_TEMPLATE_BRACE\';\n  '
};

var TemplateCharacter = {
  conditions: ['template_string_start'],
  rule: '.',
  handler: '\n    return require(\'./util\').parseTemplateCharacters.call(this, this.match);\n  '
};

// TODO: use macros for common rules
var TemplateCharacterLineTerminator = {
  conditions: ['template_string_start'],
  rule: '\\u000A|\\u000D|\\u2028|\\u2029',
  handler: '\n    return require(\'./util\').parseTemplateCharacters.call(this, this.match);\n  '
};

var TemplateCharacterEscape = {
  conditions: ['template_escape_string_start'],
  rule: '.',
  handler: '\n    return require(\'./util\').parseTemplateCharacterEscape.call(this, this.match);\n  '
};

var TemplateQuoteStart = {
  conditions: ['INITIAL', 'case_start', 'arrow_brace_start', 'template_string_head_start', 'brace_start', 'function_brace_start', 'block_brace_start', 'condition_start', 'parentheses_start', 'function_parentheses_start', 'jsx_child_block_start', 'jsx_spread_attr_start', 'jsxtag_attr_start'],
  rule: '`',
  handler: '\n    this.begin(\'template_string_start\');\n    return \'`\';\n  '
};

exports.template = [TemplateHeadStart, TemplateCharacter, TemplateCharacterEscape, TemplateCharacterLineTerminator, TemplateQuoteStart];