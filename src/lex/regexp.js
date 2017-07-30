const RegexpEnd = {
  conditions: ['regexp_start'],
  rule: '/',
  handler: `
    return require('./util').parseRegexpCharacters.call(this, this.match);
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
      if (this.topState() === 'regexp_backslash_start') {
        this.popState();
        return 'RegularExpressionNonTerminator';
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
