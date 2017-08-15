const TemplateHeadStart = {
  conditions: ['template_string_start'],
  rule: '\\${',
  handler: `
    this.begin('template_string_head_start');
    return 'LEFT_TEMPLATE_BRACE';
  `,
};

const TemplateCharacter = {
  conditions: ['template_string_start'],
  rule: '.',
  handler: `
    return require('./util').parseTemplateCharacters.call(this, this.match);
  `,
};

// TODO: use macros for common rules
const TemplateCharacterLineTerminator = {
  conditions: ['template_string_start'],
  rule: '\\u000A|\\u000D|\\u2028|\\u2029',
  handler: `
    return require('./util').parseTemplateCharacters.call(this, this.match);
  `,
};

const TemplateCharacterEscape = {
  conditions: ['template_escape_string_start'],
  rule: '.',
  handler: `
    return require('./util').parseTemplateCharacterEscape.call(this, this.match);
  `,
};

const TemplateQuoteStart = {
  conditions: ['INITIAL', 'case_start', 'arrow_brace_start', 'template_string_head_start', 'brace_start', 'function_brace_start', 'block_brace_start', 'condition_start'],
  rule: '`',
  handler: `
    this.begin('template_string_start');
    return '\`';
  `,
};

exports.template = [
  TemplateHeadStart,
  TemplateCharacter,
  TemplateCharacterEscape,
  TemplateCharacterLineTerminator,
  TemplateQuoteStart,
];
