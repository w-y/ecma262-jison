'use strict';

var decimalPoint = {
  conditions: ['*'],
  rule: '\\.',
  handler: '\n    {\n      let hasDigitBehind = false;\n      const utils = require(\'./util\');\n      const input = this.matches.input;\n      const { ch } = utils.lookAhead(this.matches.input, this.matches.index + this.match.length, true, true);\n\n      if (utils.isDecimalDigit(ch)) {\n        hasDigitBehind = true;\n      }\n\n      //\u5982\u679Clook ahead\u662F\u6570\u5B57 \u4F8B\u5982.123 \u8FD4\u56DEDecimalPoint\n      switch (this.topState()) {\n        case \'decimal_digit_start\':\n          this.begin(\'decimal_digit_dot_start\');\n          return \'DecimalPoint\';\n        case \'decimal_digit_dot_start\':\n          this.popState();\n          this.popState();\n          return \'.\';\n        case \'identifier_start\':\n          this.popState();\n          this.begin(\'property_start\');\n          return \'.\';\n        case \'regexp_noflag\':\n          this.popState();\n          return \'.\';\n        default:\n          if (hasDigitBehind) {\n            this.begin(\'decimal_digit_start\');\n            this.begin(\'decimal_digit_dot_start\');\n            return \'DecimalPoint\';\n          }\n          if (this.topState() === \'INITIAL\' ||\n            this.topState() === \'case_start\' ||\n            this.topState() === \'condition_start\' ||\n            this.topState() === \'arrow_brace_start\' ||\n            this.topState() === \'template_string_head_start\' ||\n            this.topState() === \'brace_start\' ||\n            this.topState() === \'function_brace_start\' ||\n            this.topState() === \'block_brace_start\' || \n            this.topState() === \'parentheses_start\' ||\n            this.topState() === \'function_parentheses_start\' ||\n            this.topState() === \'jsx_child_block_start\' ||\n            this.topState() === \'jsx_spread_attr_start\' ||\n            this.topState() === \'jsxtag_attr_start\' ||\n            this.topState() === \'import_start\') {\n            const idStartReg = require(\'unicode-6.3.0/Binary_Property/ID_Start/regex\');\n            if (idStartReg.test(ch)) {\n              this.begin(\'property_start\');\n            }\n          }\n          return \'.\';\n      }\n    }\n  '
};

var decimalDigit = {
  conditions: ['decimal_digit_start', 'decimal_digit_dot_start', 'exponent_start'],
  rule: '[0-9]',
  handler: '\n    return \'DecimalDigit\';\n  '
};

var decimalZero = {
  conditions: ['INITIAL', 'case_start', 'arrow_brace_start', 'template_string_head_start', 'brace_start', 'function_brace_start', 'block_brace_start', 'condition_start', 'parentheses_start', 'function_parentheses_start', 'jsx_child_block_start', 'jsx_spread_attr_start', 'import_start', 'jsxtag_attr_start'],
  rule: '0',
  handler: '\n    this.begin(\'decimal_digit_start\');\n    return \'0\';\n  '
};

var decimalNonZero = {
  conditions: ['INITIAL', 'case_start', 'arrow_brace_start', 'template_string_head_start', 'brace_start', 'function_brace_start', 'block_brace_start', 'condition_start', 'parentheses_start', 'function_parentheses_start', 'jsx_child_block_start', 'jsx_spread_attr_start', 'import_start', 'jsxtag_attr_start'],
  rule: '[1-9]',
  handler: '\n    this.begin(\'decimal_digit_start\');\n    return \'NonZeroDigit\';\n  '
};

var decimalExponentPart = {
  conditions: ['decimal_digit_start', 'decimal_digit_dot_start'],
  rule: '[eE]',
  handler: '\n    this.begin(\'exponent_start\');\n    return \'ExponentIndicator\';\n  '
};

exports.decimalPoint = decimalPoint;
exports.decimalDigit = decimalDigit;
exports.decimalZero = decimalZero;
exports.decimalNonZero = decimalNonZero;
exports.decimalExponentPart = decimalExponentPart;

exports.decimal = [decimalPoint, decimalDigit, decimalZero, decimalNonZero, decimalExponentPart];