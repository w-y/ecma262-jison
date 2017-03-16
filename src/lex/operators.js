// make tokens of similar bnf rule keep same name to accelerate construct speed
// example: '===','==','!=' => EqualityOperator and seperate them later at ast phase


// EqualityOperator

exports.identity = {
  conditions: ['*'],
  rule: '===',
  handler: `
    return require('./util').parseOperator.call(this, this.match, 'EqualityOperator');
  `,
};

exports.inequality = {
  conditions: ['*'],
  rule: '!=',
  handler: `
    return require('./util').parseOperator.call(this, this.match, 'EqualityOperator');
  `,
};

exports.equality = {
  conditions: ['*'],
  rule: '==',
  handler: `
    return require('./util').parseOperator.call(this, this.match, 'EqualityOperator');
  `,
};

exports.nonIdentity = {
  conditions: ['*'],
  rule: '!==',
  handler: `
    return require('./util').parseOperator.call(this, this.match, 'EqualityOperator');
  `,
};

// RelationalOperator

exports.greaterThanOrEqual = {
  conditions: ['*'],
  rule: '>=',
  handler: `
    return require('./util').parseOperator.call(this, this.match, 'RelationalOperator');
  `,
};

exports.lessThanOrEqual = {
  conditions: ['*'],
  rule: '<=',
  handler: `
    return require('./util').parseOperator.call(this, this.match, 'RelationalOperator');
  `,
};

exports.greaterThan = {
  conditions: ['*'],
  rule: '>',
  handler: `
    return require('./util').parseOperator.call(this, this.match, 'RelationalOperator');
  `,
};

exports.lessThan = {
  conditions: ['*'],
  rule: '<',
  handler: `
    return require('./util').parseOperator.call(this, this.match, 'RelationalOperator');
  `,
};

// UpdateOperator

exports.increment = {
  conditions: ['*'],
  rule: '\\+\\+',
  handler: `
    return require('./util').parseOperator.call(this, this.match, 'UpdateOperator');
  `,
};

exports.decrement = {
  conditions: ['*'],
  rule: '--',
  handler: `
    return require('./util').parseOperator.call(this, this.match, 'UpdateOperator');
  `,
};

// assignment

exports.additionAssignment = {
  conditions: ['*'],
  rule: '\\+=',
  handler: `
    return require('./util').parseOperator.call(this, this.match);
  `,
};

exports.subtractionAssignment = {
  conditions: ['*'],
  rule: '-=',
  handler: `
    return require('./util').parseOperator.call(this, this.match);
  `,
};

exports.multiplicationAssignment = {
  conditions: ['*'],
  rule: '\\*=',
  handler: `
    return require('./util').parseOperator.call(this, this.match);
  `,
};

exports.divisionAssignment = {
  conditions: ['*'],
  rule: '/=',
  handler: `
    return require('./util').parseOperator.call(this, this.match);
  `,
};

exports.remainderAssignment = {
  conditions: ['*'],
  rule: '%=',
  handler: `
    return require('./util').parseOperator.call(this, this.match);
  `,
};

exports.exponentiationAssignment = {
  conditions: ['*'],
  rule: '\\*\\*=',
  handler: `
    return require('./util').parseOperator.call(this, this.match);
  `,
};

exports.leftShiftAssignment = {
  conditions: ['*'],
  rule: '<<=',
  handler: `
    return require('./util').parseOperator.call(this, this.match);
  `,
};

exports.rightShiftAssignment = {
  conditions: ['*'],
  rule: '>>=',
  handler: `
    return require('./util').parseOperator.call(this, this.match);
  `,
};

exports.unsignedRightShiftAssignment = {
  conditions: ['*'],
  rule: '>>>=',
  handler: `
    return require('./util').parseOperator.call(this, this.match);
  `,
};

exports.bitwiseANDAssignment = {
  conditions: ['*'],
  rule: '&=',
  handler: `
    return require('./util').parseOperator.call(this, this.match);
  `,
};

exports.bitwiseXORAssignment = {
  conditions: ['*'],
  rule: '\\^=',
  handler: `
    return require('./util').parseOperator.call(this, this.match);
  `,
};

exports.bitwiseORAssignment = {
  conditions: ['*'],
  rule: '\\|=',
  handler: `
    return require('./util').parseOperator.call(this, this.match);
  `,
};

exports.assignment = {
  conditions: ['*'],
  rule: '=',
  handler: `
    return require('./util').parseOperator.call(this, this.match);
  `,
};

exports.plus = {
  conditions: ['*'],
  rule: '\\+',
  handler: `
    return require('./util').parseOperator.call(this, this.match, 'AdditiveOperator');
  `,
};

exports.minus = {
  conditions: ['*'],
  rule: '-',
  handler: `
    return require('./util').parseOperator.call(this, this.match, 'AdditiveOperator');
  `,
};

exports.not = {
  conditions: ['*'],
  rule: '!',
  handler: `
    return require('./util').parseOperator.call(this, this.match);
  `,
};

exports.bitwiseNOT = {
  conditions: ['*'],
  rule: '\\~',
  handler: `
    return require('./util').parseOperator.call(this, this.match);
  `,
};

exports.exponentiation = {
  conditions: ['*'],
  rule: '\\*\\*',
  handler: `
    return require('./util').parseOperator.call(this, this.match);
  `,
};

exports.multiplication = {
  conditions: ['*'],
  rule: '\\*',
  handler: `
    return require('./util').parseOperator.call(this, this.match, 'MultiplicativeOperator');
  `,
};

exports.division = {
  conditions: ['*'],
  rule: '/',
  handler: `
    return require('./util').parseOperator.call(this, this.match, 'MultiplicativeOperator');
  `,
};

exports.remainder = {
  conditions: ['*'],
  rule: '%',
  handler: `
    return require('./util').parseOperator.call(this, this.match);
  `,
};

exports.bitwiseOR = {
  conditions: ['*'],
  rule: '\\|',
  handler: `
    return require('./util').parseOperator.call(this, this.match);
  `,
};

exports.bitwiseAND = {
  conditions: ['*'],
  rule: '&',
  handler: `
    return require('./util').parseOperator.call(this, this.match);
  `,
};

exports.bitwiseXOR = {
  conditions: ['*'],
  rule: '\\^',
  handler: `
    return require('./util').parseOperator.call(this, this.match);
  `,
};

exports.unsignedRightShift = {
  conditions: ['*'],
  rule: '>>>',
  handler: `
    return require('./util').parseOperator.call(this, this.match, 'ShiftOperator');
  `,
};

exports.rightShift = {
  conditions: ['*'],
  rule: '>>',
  handler: `
    return require('./util').parseOperator.call(this, this.match, 'ShiftOperator');
  `,
};

exports.leftShift = {
  conditions: ['*'],
  rule: '<<',
  handler: `
    return require('./util').parseOperator.call(this, this.match, 'ShiftOperator');
  `,
};

exports.and = {
  conditions: ['*'],
  rule: '&&',
  handler: `
    return require('./util').parseOperator.call(this, this.match);
  `,
};

exports.or = {
  conditions: ['*'],
  rule: '\\|\\|',
  handler: `
    return require('./util').parseOperator.call(this, this.match);
  `,
};

exports.condition = {
  conditions: ['*'],
  rule: '\\?',
  handler: `
    return require('./util').parseOperator.call(this, this.match);
  `,
};

exports.colon = {
  conditions: ['*'],
  rule: ':',
  handler: `
    return require('./util').parseOperator.call(this, this.match);
  `,
};

exports.semicolon = {
  conditions: ['*'],
  rule: ';',
  handler: `
    return require('./util').parseOperator.call(this, this.match);
  `,
};

exports.comma = {
  conditions: ['*'],
  rule: '\\,',
  handler: `
    return require('./util').parseOperator.call(this, this.match);
  `,
};

exports.leftBracket = {
  conditions: ['*'],
  rule: '\\[',
  handler: `
    return require('./util').parseOperator.call(this, this.match);
  `,
};

exports.rightBracket = {
  conditions: ['*'],
  rule: '\\]',
  handler: `
    return require('./util').parseOperator.call(this, this.match);
  `,
};

exports.leftParenthesis = {
  conditions: ['*'],
  rule: '\\(',
  handler: `
    return require('./util').parseOperator.call(this, this.match);
  `,
};

exports.rightParenthesis = {
  conditions: ['*'],
  rule: '\\)',
  handler: `
    return require('./util').parseOperator.call(this, this.match);
  `,
};

exports.leftBlockExp = {
  conditions: ['block_start'],
  rule: '\\{',
  handler: `
    return require('./util').parseOperator.call(this, this.match, 'BLOCK_START');
  `,
};

exports.leftBlock = {
  conditions: ['*'],
  rule: '\\{',
  handler: `
    return require('./util').parseOperator.call(this, this.match);
  `,
};

exports.rightBlock = {
  conditions: ['*'],
  rule: '\\}',
  handler: `
    this.__temp__ = require('./util').parseOperator.call(this, this.match);
    if (this.topState() === 'block_start') {
      this.popState();
    }
    return this.__temp__;
  `,
};

exports.spread = {
  conditions: ['*'],
  rule: '\\.\\.\\.',
  handler: `
    return require('./util').parseOperator.call(this, this.match);
  `,
};
