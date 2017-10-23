const decimalPoint = {
  conditions: ['*'],
  rule: '\\.',
  handler: `
    {
      let hasDigitBehind = false;
      const utils = require('./util');
      const input = this.matches.input;
      const { ch } = utils.lookAhead(this.matches.input, this.matches.index + this.match.length, true, true);

      if (utils.isDecimalDigit(ch)) {
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
          this.begin('property_start');
          return '.';
        case 'regexp_noflag':
          this.popState();
          return '.';
        default:
          if (hasDigitBehind) {
            this.begin('decimal_digit_start');
            this.begin('decimal_digit_dot_start');
            return 'DecimalPoint';
          }
          if (this.topState() === 'INITIAL' ||
            this.topState() === 'case_start' ||
            this.topState() === 'condition_start' ||
            this.topState() === 'arrow_brace_start' ||
            this.topState() === 'template_string_head_start' ||
            this.topState() === 'brace_start' ||
            this.topState() === 'function_brace_start' ||
            this.topState() === 'block_brace_start' || 
            this.topState() === 'parentheses_start' ||
            this.topState() === 'function_parentheses_start' ||
            this.topState() === 'jsx_child_block_start' ||
            this.topState() === 'jsx_spread_attr_start') {
            const idStartReg = require('unicode-6.3.0/Binary_Property/ID_Start/regex');
            if (idStartReg.test(ch)) {
              this.begin('property_start');
            }
          }
          return '.';
      }
    }
  `,
};

const decimalDigit = {
  conditions: ['decimal_digit_start', 'decimal_digit_dot_start', 'exponent_start'],
  rule: '[0-9]',
  handler: `
    return 'DecimalDigit';
  `,
};

const decimalZero = {
  conditions: ['INITIAL', 'case_start', 'arrow_brace_start', 'template_string_head_start', 'brace_start', 'function_brace_start', 'block_brace_start', 'condition_start', 'parentheses_start', 'function_parentheses_start', 'jsx_child_block_start', 'jsx_spread_attr_start'],
  rule: '0',
  handler: `
    this.begin('decimal_digit_start');
    return '0';
  `,
};

const decimalNonZero = {
  conditions: ['INITIAL', 'case_start', 'arrow_brace_start', 'template_string_head_start', 'brace_start', 'function_brace_start', 'block_brace_start', 'condition_start', 'parentheses_start', 'function_parentheses_start', 'jsx_child_block_start', 'jsx_spread_attr_start'],
  rule: '[1-9]',
  handler: `
    this.begin('decimal_digit_start');
    return 'NonZeroDigit';
  `,
};

const decimalExponentPart = {
  conditions: ['decimal_digit_start', 'decimal_digit_dot_start'],
  rule: '[eE]',
  handler: `
    this.begin('exponent_start');
    return 'ExponentIndicator';
  `,
};

exports.decimalPoint = decimalPoint;
exports.decimalDigit = decimalDigit;
exports.decimalZero = decimalZero;
exports.decimalNonZero = decimalNonZero;
exports.decimalExponentPart = decimalExponentPart;

exports.decimal = [decimalPoint, decimalDigit, decimalZero, decimalNonZero, decimalExponentPart];
