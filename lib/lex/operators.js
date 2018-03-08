'use strict';

// make tokens of similar bnf rule keep same name to accelerate construct speed
// example: '===','==','!=' => EqualityOperator and seperate them later at ast phase

// EqualityOperator

exports.identity = {
  conditions: ['*'],
  rule: '===',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match, \'EqualityOperator\');\n  '
};

exports.inequality = {
  conditions: ['*'],
  rule: '!=',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match, \'EqualityOperator\');\n  '
};

exports.equality = {
  conditions: ['*'],
  rule: '==',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match, \'EqualityOperator\');\n  '
};

exports.nonIdentity = {
  conditions: ['*'],
  rule: '!==',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match, \'EqualityOperator\');\n  '
};

// RelationalOperator

exports.greaterThanOrEqual = {
  conditions: ['*'],
  rule: '>=',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match, \'RelationalOperator\');\n  '
};

exports.lessThanOrEqual = {
  conditions: ['*'],
  rule: '<=',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match, \'RelationalOperator\');\n  '
};

exports.arrow = {
  conditions: ['*'],
  rule: '=>',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match);\n  '
};

exports.greaterThan = {
  conditions: ['*'],
  rule: '>',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match, \'>\');\n  '
};

exports.lessThan = {
  conditions: ['*'],
  rule: '<',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match, \'<\');\n  '
};

// UpdateOperator
exports.increment = [{
  conditions: ['*'],
  rule: '\\+\\+',
  handler: '\n      return require(\'./util\').parseOperator.call(this, this.match, \'UpdateOperator\');\n    '
}];

exports.decrement = [{
  conditions: ['*'],
  rule: '--',
  handler: '\n      return require(\'./util\').parseOperator.call(this, this.match, \'UpdateOperator\');\n    '
}];

// assignment

exports.additionAssignment = {
  conditions: ['*'],
  rule: '\\+=',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match, \'AssignmentOperator\');\n  '
};

exports.subtractionAssignment = {
  conditions: ['*'],
  rule: '-=',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match, \'AssignmentOperator\');\n  '
};

exports.multiplicationAssignment = {
  conditions: ['*'],
  rule: '\\*=',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match, \'AssignmentOperator\');\n  '
};

exports.divisionAssignment = {
  conditions: ['*'],
  rule: '/=',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match, \'AssignmentOperator\');\n  '
};

exports.remainderAssignment = {
  conditions: ['*'],
  rule: '%=',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match, \'AssignmentOperator\');\n  '
};

exports.exponentiationAssignment = {
  conditions: ['*'],
  rule: '\\*\\*=',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match, \'AssignmentOperator\');\n  '
};

exports.leftShiftAssignment = {
  conditions: ['*'],
  rule: '<<=',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match, \'AssignmentOperator\');\n  '
};

exports.rightShiftAssignment = {
  conditions: ['*'],
  rule: '>>=',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match, \'AssignmentOperator\');\n  '
};

exports.unsignedRightShiftAssignment = {
  conditions: ['*'],
  rule: '>>>=',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match, \'AssignmentOperator\');\n  '
};

exports.bitwiseANDAssignment = {
  conditions: ['*'],
  rule: '&=',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match, \'AssignmentOperator\');\n  '
};

exports.bitwiseXORAssignment = {
  conditions: ['*'],
  rule: '\\^=',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match, \'AssignmentOperator\');\n  '
};

exports.bitwiseORAssignment = {
  conditions: ['*'],
  rule: '\\|=',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match, \'AssignmentOperator\');\n  '
};

exports.assignment = {
  conditions: ['*'],
  rule: '=',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match, \'=\');\n  '
};

exports.plus = {
  conditions: ['*'],
  rule: '\\+',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match, \'AdditiveOperator\');\n  '
};

exports.minus = {
  conditions: ['*'],
  rule: '-',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match, \'AdditiveOperator\');\n  '
};

exports.not = {
  conditions: ['*'],
  rule: '!',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match, \'UnaryOperator\');\n  '
};

exports.bitwiseNOT = {
  conditions: ['*'],
  rule: '\\~',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match, \'UnaryOperator\');\n  '
};

exports.exponentiation = {
  conditions: ['*'],
  rule: '\\*\\*',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match);\n  '
};

exports.multiplication = {
  conditions: ['*'],
  rule: '\\*',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match);\n  '
};

exports.division = {
  conditions: ['div_start'],
  rule: '/',
  handler: '\n    this.popState();\n    return require(\'./util\').parseOperator.call(this, this.match, \'MultiplicativeOperator\');\n  '
};

exports.remainder = {
  conditions: ['*'],
  rule: '%',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match, \'MultiplicativeOperator\');\n  '
};

exports.bitwiseOR = {
  conditions: ['*'],
  rule: '\\|',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match);\n  '
};

exports.bitwiseAND = {
  conditions: ['*'],
  rule: '&',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match);\n  '
};

exports.bitwiseXOR = {
  conditions: ['*'],
  rule: '\\^',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match);\n  '
};

exports.unsignedRightShift = {
  conditions: ['*'],
  rule: '>>>',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match, \'ShiftOperator\');\n  '
};

exports.rightShift = {
  conditions: ['*'],
  rule: '>>',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match, \'ShiftOperator\');\n  '
};

exports.leftShift = {
  conditions: ['*'],
  rule: '<<',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match, \'ShiftOperator\');\n  '
};

exports.and = {
  conditions: ['*'],
  rule: '&&',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match);\n  '
};

exports.or = {
  conditions: ['*'],
  rule: '\\|\\|',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match);\n  '
};

exports.condition = {
  conditions: ['*'],
  rule: '\\?',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match);\n  '
};

exports.colon = {
  conditions: ['*'],
  rule: ':',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match);\n  '
};

exports.semicolon = {
  conditions: ['*'],
  rule: ';',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match);\n  '
};

exports.comma = {
  conditions: ['*'],
  rule: '\\,',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match);\n  '
};

exports.leftBracket = {
  conditions: ['*'],
  rule: '\\[',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match);\n  '
};

exports.rightBracket = {
  conditions: ['*'],
  rule: '\\]',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match);\n  '
};

exports.leftParenthesis = {
  conditions: ['*'],
  rule: '\\(',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match);\n  '
};

exports.rightParenthesis = {
  conditions: ['*'],
  rule: '\\)',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match);\n  '
};

exports.leftBrace = [{
  conditions: ['jsxtag_attr_start'],
  rule: '\\{',
  handler: '\n      return require(\'./util\').parseOperator.call(this, this.match, \'{\');\n    '
}, {
  conditions: ['brace_start'],
  rule: '\\{',
  handler: '\n      return require(\'./util\').parseOperator.call(this, this.match, \'BRACE_START\');\n    '
}, {
  conditions: ['arrow_brace_start'],
  rule: '\\{',
  handler: '\n      return require(\'./util\').parseOperator.call(this, this.match, \'LEFT_ARROW_BRACE\');\n    '
}, {
  conditions: ['*'],
  rule: '\\{',
  handler: '\n      return require(\'./util\').parseOperator.call(this, this.match);\n    '
}];

exports.rightBrace = {
  conditions: ['*'],
  rule: '\\}',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match);\n  '
};

exports.spread = {
  conditions: ['*'],
  rule: '\\.\\.\\.',
  handler: '\n    return require(\'./util\').parseOperator.call(this, this.match);\n  '
};