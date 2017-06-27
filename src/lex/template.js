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

exports.singleString = [
  TemplateCharacter,
  TemplateCharacterLineTerminator,
];
