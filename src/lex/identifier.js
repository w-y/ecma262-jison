const idStartReg = require('unicode-6.3.0/Binary_Property/ID_Start/regex');
const idContinueReg = require('unicode-6.3.0/Binary_Property/ID_Continue/regex');

exports.idStart = idStartReg;

exports.idContinue = idContinueReg;

const unicodeIDStart = {
  conditions: ['INITIAL', 'brace_start', 'case_start', 'arrow_brace_start', 'template_string_head_start', 'function_brace_start', 'block_brace_start', 'property_start', 'condition_start', 'parentheses_start', 'function_parentheses_start', 'jsxtag_start', 'jsxtag_closing', 'jsxtagname_start', 'jsxtag_attr_start', 'jsxtag_attr_value_start', 'jsx_child_block_start', 'jsx_spread_attr_start', 'import_start'],
  rule: idStartReg,
  handler: `
    if (this.topState() === 'property_start') {
      this.popState();
    }
    let res = 'UnicodeIDStart';

    if (this.topState() === 'jsxtag_start' || this.topState() === 'jsxtagname_start' || this.topState() === 'jsxtag_closing') {
      res = 'JSXUnicodeIDStart';
    }

    this.begin('identifier_start');
    return res;
  `,
};

const unicodeIDContinue = {
  conditions: ['identifier_start'],
  rule: idContinueReg,
  handler: `
    return 'UnicodeIDContinue';
  `,
};

const unicodeEscapeSequenceStart = {
  conditions: ['INITIAL', 'identifier_start', 'brace_start', 'case_start', 'arrow_brace_start', 'template_string_head_start', 'function_brace_start', 'block_brace_start', 'property_start', 'condition_start', 'parentheses_start', 'function_parentheses_start', 'jsxtag_start', 'jsxtag_closing', 'jsxtagname_start', 'jsxtag_attr_start', 'jsxtag_attr_value_start', 'jsx_child_block_start', 'jsx_spread_attr_start', 'import_start'],
  rule: '\\\\u|\\\\U',
  handler: `
    if (this.topState() === 'property_start') {
      this.popState();
    }

    if (this.topState() === 'identifier_start') {
      this.begin('identifier_start_unicode');
      return 'UnicodeEscapeSequenceContinueStart'
    } else {
      let res = 'UnicodeEscapeSequenceStart';

      if (this.topState() === 'jsxtag_start' || this.topState() === 'jsxtagname_start' || this.topState() === 'jsxtag_closing') {
        res = 'JSXUnicodeEscapeSequenceStart';
      }

      this.begin('identifier_start');
      this.begin('identifier_start_unicode');

      return res;
    }
  `,
};

const dollar = {
  conditions: ['INITIAL', 'identifier_start', 'property_start', 'brace_start', 'case_start', 'arrow_brace_start', 'template_string_head_start', 'function_brace_start', 'block_brace_start', 'property_start', 'condition_start', 'parentheses_start', 'function_parentheses_start', 'jsxtag_start', 'jsxtag_closing', 'jsxtagname_start', 'jsxtag_attr_start', 'jsxtag_attr_value_start', 'jsx_child_block_start', 'jsx_spread_attr_start'],
  rule: '\\$',
  handler: `
    if (this.topState() === 'property_start') {
      this.popState();
    }

    return require('./util').parseIdentifier.call(this, this.match);
  `,
};

const underscore = {
  conditions: ['INITIAL', 'identifier_start', 'property_start', 'brace_start', 'case_start', 'arrow_brace_start', 'template_string_head_start', 'function_brace_start', 'block_brace_start', 'property_start', 'condition_start', 'parentheses_start', 'function_parentheses_start', 'jsxtag_start', 'jsxtag_closing', 'jsxtagname_start', 'jsxtag_attr_start', 'jsxtag_attr_value_start', 'jsx_child_block_start', 'jsx_spread_attr_start', 'import_start'],
  rule: '_',
  handler: `
    if (this.topState() === 'property_start') {
      this.popState();
    }
    return require('./util').parseIdentifier.call(this, this.match);
  `,
};

exports.unicodeIDStart = unicodeIDStart;
exports.unicodeIDContinue = unicodeIDContinue;
exports.unicodeEscapeSequenceStart = unicodeEscapeSequenceStart;

exports.dollar = dollar;
exports.underscore = underscore;

exports.identifier = [
  dollar,
  underscore,
  unicodeEscapeSequenceStart,
  unicodeIDContinue,
  unicodeIDStart,
];
