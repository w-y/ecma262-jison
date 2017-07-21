const RegexpEnd = {
  conditions: ['regexp_start'],
  rule: '/',
  handler: `
    console.log('reg exp end');
    return require('./util').parseRegexpCharacters.call(this, this.match);
  `,
};

const RegexpStart = {
  conditions: ['*'],
  rule: '/',
  handler: `
    this.begin('regexp_start');
    console.log('reg exp start');
    return 'LEFT_REGEXP_DIV';
  `,
};

const RegexpNoTerminatorCharacter = {
  conditions: ['regexp_start'],
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
