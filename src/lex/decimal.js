const decimalPoint = {
  conditions: ['*'],
  rule: '\\.',
  handler: `
    {
      let hasDigitBehind = false;
      let i = this.matches.index + this.match.length;
      const utils = require('./util');
      const input = this.matches.input;
      while(i < input.length && utils.isWhiteSpace(input[i])) {
        i++;
      }
      if (i < input.length && utils.isDecimalDigit(input[i])) {
        hasDigitBehind = true;
      }

      //如果look ahead是数字 例如.123 返回DecimalPoint
      switch (this.topState()) {
        case 'decimal_digit_start':
          this.begin('decimal_digit_dot_start');
          return 'DecimalPoint';
        case 'decimal_digit_dot_start':
          this.popState();
          this.popState();
          return '.';
        case 'identifier_start':
          this.popState();
          return '.';
        default:
          if (hasDigitBehind) {
            this.begin('decimal_digit_start');
            this.begin('decimal_digit_dot_start');
            return 'DecimalPoint';
          }
          return '.';
      }
    }
  `
}

const decimalDigit = {
  conditions: ['decimal_digit_start', 'decimal_digit_dot_start'],
  rule: '[0-9]',
  handler: `
    return 'DecimalDigit';
  `,
}

const decimalZero = {
  conditions: ['INITIAL'],
  rule: '0',
  handler: `
    this.begin('decimal_digit_start');
    return '0';
  `,
}

const decimalNonZero = {
  conditions: ['INITIAL'],
  rule: '[1-9]',
  handler: `
    this.begin('decimal_digit_start');
    return 'NonZeroDigit';
  `,
}

exports.decimalPoint = decimalPoint;
exports.decimalDigit = decimalDigit;
exports.decimalZero = decimalZero;
exports.decimalNonZero = decimalNonZero;

exports.decimal = [decimalPoint, decimalDigit, decimalZero, decimalNonZero];
