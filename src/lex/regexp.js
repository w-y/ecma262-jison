const RegexpEnd = {
  conditions: ['regexp_start'],
  rule: '/',
  handler: `
    return require('./util').parseRegexpCharacters.call(this, this.match);
  `,
};

const RegexForwardSlash = {
  conditions: ['regexp_backslash_start'],
  rule: '/',
  handler: `
    this.popState();
    return 'RegularExpressionNonTerminator';
    // return require('./util').parseRegexpCharacters.call(this, this.match);
  `,
};

const RegexpStart = {
  conditions: ['*'],
  rule: '/',
  handler: `
    if (require('./util').isDivAhead.call(this, this.topState())) {
      this.popState();
      return 'MultiplicativeOperator';
    } else {
      if (this.topState() === 'template_string_start') {
        return 'TemplateChar';
      }
      if (this.topState() === 'regexp_backslash_start') {
        this.popState();
        return 'RegularExpressionNonTerminator';
      }
      if (this.topState() === 'regexp_class_start') {
        return 'RegularExpressionNonTerminator';
      }
      if (this.topState() === 'single_line_comment_start') {
        require('./lex/comment').onComment(this, this.match);
        return '';
      }
      this.begin('regexp_start');
      return 'LEFT_REGEXP_DIV';
    }
  `,
};

const RegexpNoTerminatorCharacter = {
  conditions: ['regexp_start', 'regexp_class_start', 'regexp_backslash_start', 'regexp_flag_start'],
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

exports.RegexForwardSlash = RegexForwardSlash;
exports.RegexpEnd = RegexpEnd;
exports.RegexpStart = RegexpStart;
exports.RegexpNoTerminatorCharacter = RegexpNoTerminatorCharacter;
