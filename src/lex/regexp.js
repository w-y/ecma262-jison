const RegexpEnd = {
  conditions: ['regexp_start'],
  rule: '/',
  handler: `
    return require('./util').parseRegexpCharacters.call(this, this.match);
  `,
};

const RegexpStart = {
  conditions: ['INITIAL', 'template_string_head_start'],
  rule: '/',
  handler: `
    this.begin('regexp_start');
    return 'LEFT_REGEXP_DIV';
  `,
};

const RegexpNoTerminatorCharacter = {
  conditions: ['regexp_start', 'regexp_class_start', 'regexp_backslash_start'],
  rule: '.',
  handler: `
    return require('./util').parseRegexpCharacters.call(this, this.match);
  `,
};

exports.regexp = [
  RegexpEnd,
  RegexpStart,
  RegexpNoTerminatorCharacter,
];
