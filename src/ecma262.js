const fs = require('fs');
const path = require('path');

const { transLex, transBnf } = require('./transform');

const {
  multiLineComment,
  SingleLineCommentCharsStart,
  SingleLineCommentCharEnd,
  SingleLineCommentChar,
} = require('./lex/comment');

const { decimal } = require('./lex/decimal');
const { hexDigit } = require('./lex/hex');
const { singleString, doubleString } = require('./lex/string');

const { template } = require('./lex/template');

const {
  RegexpStart,
  RegexpEnd,
  RegexpNoTerminatorCharacter,
  RegexForwardSlash,
} = require('./lex/regexp');

const {
  JSXSpreadAttributeStart,
  JSXSpreadAttributeEnd,

  JSXChildBlockStart,
  JSXChildBlockEnd,
  JSXSingleString, JSXDoubleString,
  // JSXSelfClosingOpening,
  JSXSelfClosing,
  JSXClosing,
  JSXSeperator,
  JSXTextCharacters,
} = require('./lex/jsx');

const { keywords } = require('./lex/keywords');
const { tokens } = require('./lex/tokens');
const { identifier } = require('./lex/identifier');
const {
  unsignedRightShiftAssignment, // >>>=

  identity,                 // ===
  nonIdentity,              // !==
  exponentiationAssignment, // **=
  leftShiftAssignment,      // <<=
  rightShiftAssignment,     // >>=
  unsignedRightShift,       // >>>

  inequality,               // !=
  equality,                 // ==
  increment,                // ++
  decrement,                // --
  additionAssignment,       // +=
  subtractionAssignment,    // -=
  multiplicationAssignment, // *=
  divisionAssignment,       // /=
  remainderAssignment,      // %=
  bitwiseANDAssignment,     // &=
  bitwiseXORAssignment,     // ^=
  bitwiseORAssignment,      // |=
  greaterThanOrEqual,       // >=
  lessThanOrEqual,          // <=

  arrow,                    // =>

  exponentiation,           // **

  and,                      // &&
  or,                       // ||

  rightShift,               // >>
  leftShift,                // <<

  condition,                // ?

  bitwiseAND,               // &
  bitwiseOR,                // |

  greaterThan,              // >
  lessThan,                 // <

  bitwiseXOR,               // ^
  bitwiseNOT,               // ~

  assignment,               // =

  multiplication,           // *
  remainder,                // %
  plus,                     // +
  minus,                    // -
  not,                      // !
  division,                 // /

  colon,                    // :
  semicolon,                // ;
  comma,                    // ,
  leftBracket,              // [
  rightBracket,             // ]
  leftParenthesis,          // (
  rightParenthesis,         // )
  leftBrace,                // {
  rightBrace,               // }
  spread,                   // ...
} = require('./lex/operators');

// keyword operators
const {
  Instanceof,
  Delete,
  Typeof,
  Void,
  New,
  In,
  Of,
  Set,
  Get,
  From,
  As,
} = require('./lex/keywords');

const Program = require('./bnf/Program');

const grammar = (useJison = false) => ({
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

      import_start: 'import_start',
    },
    rules: transLex([
      JSXSingleString,
      JSXDoubleString,

      singleString,
      doubleString,

      // NOTICE: /\/*/ here /* is not comment
      RegexForwardSlash,

      multiLineComment,

      divisionAssignment,
      RegexpEnd,

      SingleLineCommentCharsStart,

      // JSXSelfClosingOpening,
      JSXSelfClosing,
      JSXSpreadAttributeStart,
      JSXSpreadAttributeEnd,
      JSXChildBlockStart,
      JSXChildBlockEnd,

      RegexpStart,
      RegexpNoTerminatorCharacter,

      SingleLineCommentCharEnd,
      SingleLineCommentChar,

      JSXClosing,
      JSXTextCharacters,
      JSXSeperator,
      // singleLineComment,
      template,

      // NOTICE: [no LineTerminator here] ++/--
      // increment,
      // decrement,

      tokens,
      keywords,

      unsignedRightShiftAssignment,

      identity,
      nonIdentity,
      exponentiationAssignment,
      leftShiftAssignment,
      rightShiftAssignment,
      unsignedRightShift,

      inequality,
      equality,
      increment,
      decrement,
      additionAssignment,
      subtractionAssignment,
      multiplicationAssignment,
      remainderAssignment,
      bitwiseANDAssignment,
      bitwiseXORAssignment,
      bitwiseORAssignment,
      greaterThanOrEqual,
      lessThanOrEqual,
      arrow,
      exponentiation,
      and,
      or,
      rightShift,
      leftShift,

      condition,
      bitwiseAND,
      bitwiseOR,
      bitwiseXOR,
      bitwiseNOT,
      greaterThan,
      lessThan,
      plus,
      minus,
      not,
      multiplication,
      division,
      remainder,
      assignment,

      colon,
      semicolon,
      comma,
      leftBracket,
      rightBracket,
      leftParenthesis,
      rightParenthesis,

      leftBrace,
      rightBrace,

      semicolon,
      spread,

      Instanceof,
      Delete,
      Typeof,
      Void,
      In,
      Of,
      New,
      Set,
      Get,
      As,
      From,

      hexDigit,
      decimal,
      identifier,
    ]),
  },

  start: 'Program',

  operators: [['nonassoc', 'if'], ['nonassoc', 'else']],
  bnf: transBnf(Program, useJison),
});


// jison options
// const options = { type: 'lr', moduleType: 'commonjs', moduleName: 'esparse' };

// jison-gho options
const options = {
  type: 'lr',
  moduleType: 'commonjs',
  moduleName: 'esparse',
  json: true,
  compressTables: 0,
  tokenStack: true,
  ranges: true,
};

exports.main = function main(args) {
  let code;
  // NOTICE:
  // force to use jison otherwise use jison-gho
  let useJisonGho = true;

  if (args.indexOf('--use-jison') !== -1) {
    useJisonGho = false;
  }
  if (useJisonGho) {
    const GeneratorGho = require('jison-gho/lib/jison').Generator;
    console.log(grammar());
    code = new GeneratorGho(grammar(), options).generate();
  } else {
    const Generator = require('jison/lib/jison').Generator;
    code = new Generator(grammar(true), options).generate();
  }
  fs.writeFileSync(`${path.dirname(__filename)}/parser.js`, code);
};

if (require.main === module) {
  exports.main(process.argv.slice(2));
}
