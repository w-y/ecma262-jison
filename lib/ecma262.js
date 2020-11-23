'use strict';

var fs = require('fs');
var path = require('path');

var _require = require('./transform'),
    transLex = _require.transLex,
    transBnf = _require.transBnf;

var _require2 = require('./lex/comment'),
    multiLineComment = _require2.multiLineComment,
    SingleLineCommentCharsStart = _require2.SingleLineCommentCharsStart,
    SingleLineCommentCharEnd = _require2.SingleLineCommentCharEnd,
    SingleLineCommentChar = _require2.SingleLineCommentChar;

var _require3 = require('./lex/decimal'),
    decimal = _require3.decimal;

var _require4 = require('./lex/hex'),
    hexDigit = _require4.hexDigit;

var _require5 = require('./lex/string'),
    singleString = _require5.singleString,
    doubleString = _require5.doubleString;

var _require6 = require('./lex/template'),
    template = _require6.template;

var _require7 = require('./lex/regexp'),
    RegexpStart = _require7.RegexpStart,
    RegexpEnd = _require7.RegexpEnd,
    RegexpNoTerminatorCharacter = _require7.RegexpNoTerminatorCharacter,
    RegexForwardSlash = _require7.RegexForwardSlash;

var _require8 = require('./lex/jsx'),
    JSXSpreadAttributeStart = _require8.JSXSpreadAttributeStart,
    JSXSpreadAttributeEnd = _require8.JSXSpreadAttributeEnd,
    JSXChildBlockStart = _require8.JSXChildBlockStart,
    JSXChildBlockEnd = _require8.JSXChildBlockEnd,
    JSXSingleString = _require8.JSXSingleString,
    JSXDoubleString = _require8.JSXDoubleString,
    JSXSelfClosing = _require8.JSXSelfClosing,
    JSXClosing = _require8.JSXClosing,
    JSXSeperator = _require8.JSXSeperator,
    JSXTextCharacters = _require8.JSXTextCharacters;

var _require9 = require('./lex/keywords'),
    keywords = _require9.keywords;

var _require10 = require('./lex/tokens'),
    tokens = _require10.tokens;

var _require11 = require('./lex/identifier'),
    identifier = _require11.identifier;

var _require12 = require('./lex/operators'),
    unsignedRightShiftAssignment = _require12.unsignedRightShiftAssignment,
    identity = _require12.identity,
    nonIdentity = _require12.nonIdentity,
    exponentiationAssignment = _require12.exponentiationAssignment,
    leftShiftAssignment = _require12.leftShiftAssignment,
    rightShiftAssignment = _require12.rightShiftAssignment,
    unsignedRightShift = _require12.unsignedRightShift,
    inequality = _require12.inequality,
    equality = _require12.equality,
    increment = _require12.increment,
    decrement = _require12.decrement,
    additionAssignment = _require12.additionAssignment,
    subtractionAssignment = _require12.subtractionAssignment,
    multiplicationAssignment = _require12.multiplicationAssignment,
    divisionAssignment = _require12.divisionAssignment,
    remainderAssignment = _require12.remainderAssignment,
    bitwiseANDAssignment = _require12.bitwiseANDAssignment,
    bitwiseXORAssignment = _require12.bitwiseXORAssignment,
    bitwiseORAssignment = _require12.bitwiseORAssignment,
    greaterThanOrEqual = _require12.greaterThanOrEqual,
    lessThanOrEqual = _require12.lessThanOrEqual,
    arrow = _require12.arrow,
    exponentiation = _require12.exponentiation,
    and = _require12.and,
    or = _require12.or,
    rightShift = _require12.rightShift,
    leftShift = _require12.leftShift,
    condition = _require12.condition,
    bitwiseAND = _require12.bitwiseAND,
    bitwiseOR = _require12.bitwiseOR,
    greaterThan = _require12.greaterThan,
    lessThan = _require12.lessThan,
    bitwiseXOR = _require12.bitwiseXOR,
    bitwiseNOT = _require12.bitwiseNOT,
    assignment = _require12.assignment,
    multiplication = _require12.multiplication,
    remainder = _require12.remainder,
    plus = _require12.plus,
    minus = _require12.minus,
    not = _require12.not,
    division = _require12.division,
    colon = _require12.colon,
    semicolon = _require12.semicolon,
    comma = _require12.comma,
    leftBracket = _require12.leftBracket,
    rightBracket = _require12.rightBracket,
    leftParenthesis = _require12.leftParenthesis,
    rightParenthesis = _require12.rightParenthesis,
    leftBrace = _require12.leftBrace,
    rightBrace = _require12.rightBrace,
    spread = _require12.spread;

// keyword operators


var _require13 = require('./lex/keywords'),
    Instanceof = _require13.Instanceof,
    Delete = _require13.Delete,
    Typeof = _require13.Typeof,
    Void = _require13.Void,
    New = _require13.New,
    In = _require13.In,
    Of = _require13.Of,
    Set = _require13.Set,
    Get = _require13.Get,
    From = _require13.From,
    As = _require13.As;

var Program = require('./bnf/Program');

var grammar = function grammar() {
  return {
    comment: 'ECMA-262 7th Edition, 17.02.23 The es Grammar. Parses strings into ast.',
    author: 'w-y',

    lex: {
      startConditions: {
        identifier_start: 'identifier_start',
        identifier_start_unicode: 'identifier_start_unicode',
        decimal_digit_start: 'decimal_digit_start',
        single_string_start: 'single_string_start',
        double_string_start: 'double_string_start',
        single_escape_string: 'single_escape_string',
        double_escape_string: 'double_escape_string',
        new_target: 'new_target',
        decimal_digit_dot_start: 'decimal_digit_dot_start',
        function_start: 'function_start',
        brace_start: 'brace_start',
        parentheses_start: 'parentheses_start',
        case_start: 'case_start',
        arrow_brace_start: 'arrow_brace_start',
        single_line_comment_start: 'single_line_comment_start',
        multi_line_comment_start: 'multi_line_comment_start',
        multi_line_comment_post_asterisk_start: 'multi_line_comment_post_asterisk_start',
        template_string_start: 'template_string_start',
        template_string_head_start: 'template_string_head_start',
        template_escape_string_start: 'template_escape_string_start',
        function_brace_start: 'function_brace_start',
        function_parentheses_start: 'function_parentheses_start',
        block_brace_start: 'block_brace_start',
        regexp_start: 'regexp_start',
        regexp_class_start: 'regexp_class_start',
        regexp_backslash_start: 'regexp_backslash_start',
        regexp_flag_start: 'regexp_flag_start',
        regexp_noflag: 'regexp_noflag',
        div_start: 'div_start',
        lessthan_start: 'lessthan_start',
        property_start: 'property_start',
        hex_start: 'hex_start',
        exponent_start: 'exponent_start',
        condition_start: 'condition_start',

        jsxtag_start: 'jsxtag_start',
        jsxtagname_start: 'jsxtagname_start',
        jsx_start: 'jsx_start',
        jsxtag_closing: 'jsxtag_closing',
        jsxtag_attr_start: 'jsxtag_attr_start',
        jsxtag_attr_value_start: 'jsxtag_attr_value_start',

        jsx_single_string_start: 'jsx_single_string_start',
        jsx_double_string_start: 'jsx_double_string_start',

        jsx_single_escape_string: 'jsx_single_escape_string',
        jsx_double_escape_string: 'jsx_double_escape_string',
        jsx_child_block_start: 'jsx_child_block_start',

        jsx_spread_attr_start: 'jsx_spread_attr_start',
        class_start: 'class_start',

        export_start: 'export_start',

        import_start: 'import_start'
      },
      rules: transLex([JSXSingleString, JSXDoubleString, singleString, doubleString,

      // NOTICE: /\/*/ here /* is not comment
      RegexForwardSlash, multiLineComment, divisionAssignment, RegexpEnd, SingleLineCommentCharsStart,

      // JSXSelfClosingOpening,
      JSXSelfClosing, JSXSpreadAttributeStart, JSXSpreadAttributeEnd, JSXChildBlockStart, JSXChildBlockEnd, RegexpStart, RegexpNoTerminatorCharacter, SingleLineCommentCharEnd, SingleLineCommentChar, JSXClosing, JSXTextCharacters, JSXSeperator,
      // singleLineComment,
      template,

      // NOTICE: [no LineTerminator here] ++/--
      // increment,
      // decrement,

      tokens, keywords, unsignedRightShiftAssignment, identity, nonIdentity, exponentiationAssignment, leftShiftAssignment, rightShiftAssignment, unsignedRightShift, inequality, equality, increment, decrement, additionAssignment, subtractionAssignment, multiplicationAssignment, remainderAssignment, bitwiseANDAssignment, bitwiseXORAssignment, bitwiseORAssignment, greaterThanOrEqual, lessThanOrEqual, arrow, exponentiation, and, or, rightShift, leftShift, condition, bitwiseAND, bitwiseOR, bitwiseXOR, bitwiseNOT, greaterThan, lessThan, plus, minus, not, multiplication, division, remainder, assignment, colon, semicolon, comma, leftBracket, rightBracket, leftParenthesis, rightParenthesis, leftBrace, rightBrace, semicolon, spread, Instanceof, Delete, Typeof, Void, In, Of, New, Set, Get, As, From, hexDigit, decimal, identifier])
    },

    start: 'Program',

    operators: [['nonassoc', 'if'], ['nonassoc', 'else']],
    bnf: transBnf(Program, false)
  };
};

// jison-gho options
var options = {
  type: 'lr',
  moduleType: 'commonjs',
  moduleName: 'esparse',
  json: true,
  compressTables: 0,
  tokenStack: true,
  ranges: true
};

exports.main = function main() {
  var GeneratorGho = require('jison-gho/lib/jison').Generator;
  var code = new GeneratorGho(grammar(), options).generate();

  fs.writeFileSync(path.dirname(__filename) + '/parser.js', code);
};

if (require.main === module) {
  exports.main(process.argv.slice(2));
}