const Generator = require('jison/lib/jison').Generator;
const { transLex, transBnf } = require('./transform');

const {
  singleLineComment,
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
  regexp,
  RegexpStart,
  RegexpEnd,
  RegexpNoTerminatorCharacter,
  RegexForwardSlash,
} = require('./lex/regexp');

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
} = require('./lex/keywords');

const Script = require('./bnf/Script');

exports.grammar = {
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
      case_start: 'case_start',
      arrow_brace_start: 'arrow_brace_start',
      single_line_comment_start: 'single_line_comment_start',
      multi_line_comment_start: 'multi_line_comment_start',
      multi_line_comment_post_asterisk_start: 'multi_line_comment_post_asterisk_start',
      template_string_start: 'template_string_start',
      template_string_head_start: 'template_string_head_start',
      template_escape_string_start: 'template_escape_string_start',
      function_brace_start: 'function_brace_start',
      block_brace_start: 'block_brace_start',
      regexp_start: 'regexp_start',
      regexp_class_start: 'regexp_class_start',
      regexp_backslash_start: 'regexp_backslash_start',
      regexp_flag_start: 'regexp_flag_start',
      regexp_noflag: 'regexp_noflag',
      div_start: 'div_start',
      property_start: 'property_start',
      hex_start: 'hex_start',
      exponent_start: 'exponent_start',
    },
    rules: transLex([
      singleString,
      doubleString,

      // NOTICE: /\/*/ here /* is not comment
      RegexForwardSlash,

      multiLineComment,

      RegexpEnd,

      SingleLineCommentCharsStart,

      RegexpStart,
      RegexpNoTerminatorCharacter,

      divisionAssignment,
      SingleLineCommentCharEnd,
      SingleLineCommentChar,

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

      hexDigit,
      decimal,
      identifier,
    ]),
  },

  start: 'Script',

  operators: [['nonassoc', 'if'], ['nonassoc', 'else']],
  bnf: transBnf(Script),
};

const options = { type: 'lr', moduleType: 'commonjs', moduleName: 'esparse' };

exports.main = function main() {
  const code = new Generator(exports.grammar, options).generate();
  console.log(`
    ${code}
  `);
};

if (require.main === module) {
  exports.main();
}
