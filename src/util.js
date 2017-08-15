const { TAB, VT, FF, SP, NBSP, ZWNJ, ZWJ, ZWNBSP, LF, CR, LS, PS } = require('./constants').WHITESPACE;
const SINGLE_ESCAPE_CHARACTERS = require('./constants').SINGLE_ESCAPE_CHARACTERS;

const isWhiteSpace = ch => (
  ch === TAB ||
  ch === VT ||
  ch === FF ||
  ch === SP ||
  ch === NBSP ||
  ch === ZWNJ ||
  ch === ZWJ ||
  ch === ZWNBSP
);

const isDecimalDigit = ch => (
  /[0-9]/.test(ch)
);

const isLineTerminator = ch => (
  ch === LF ||
  ch === CR ||
  ch === LS ||
  ch === PS
);

exports.isWhiteSpace = isWhiteSpace;
exports.isDecimalDigit = isDecimalDigit;
exports.isLineTerminator = isLineTerminator;

// mathematical value
function getMVHexDigit(v1) {
  switch (v1.toLowerCase()) {
    case 'a':
      return 10;
    case 'b':
      return 11;
    case 'c':
      return 12;
    case 'd':
      return 13;
    case 'e':
      return 14;
    case 'f':
      return 15;
    default:
      break;
  }
  return parseInt(v1, 10);
}

function getMVHexDigits(v1, v2, v3, v4) {
  return (4096 * getMVHexDigit(v1)) +
    (256 * getMVHexDigit(v2)) +
    (16 * getMVHexDigit(v3)) +
    getMVHexDigit(v4);
}

exports.getMVHexDigits = getMVHexDigits;

// [[fromLine,formColumn]
//                     ...
//                                [toLine,toColumn]]
// to calc loc and range for part of rule when reducing
function mergeLoc(fromLoc, toLoc) {
  return {
    first_line: fromLoc.first_line,
    last_line: toLoc.lastLine,
    first_column: fromLoc.firts_column,
    last_column: toLoc.lastColumn,
    range: [fromLoc.range[0], toLoc.range[1]],
  };
}

exports.mergeLoc = mergeLoc;

// look ahead from source
function lookAhead(source, offset, ignoreWhitespace, ignoreLineTerminator) {
  let curr = offset;

  const test = function (ch) {
    const isWS = ignoreWhitespace && isWhiteSpace(ch);
    const isLT = ignoreLineTerminator && isLineTerminator(ch);
    return isWS || isLT;
  };

  let ch = source[curr];

  while (curr < source.length && test(ch)) {
    curr += 1;
    ch = source[curr];
  }

  // ignore all single line comments
  while (/^\/\//.test(source.substring(curr))) {
    // single line comment, find next line teminator
    while (curr < source.length && !isLineTerminator(source[curr])) {
      curr += 1;
    }
    while (curr < source.length && test(source[curr])) {
      curr += 1;
    }
  }
  // ignore all multi line comments
  while (/^\/\*/.test(source.substring(curr))) {
    while (curr < source.length && !/^\*\//.test(source.substring(curr))) {
      curr += 1;
    }
    if (/^\*\//.test(source.substring(curr))) {
      curr += 2;
    }
    while (curr < source.length && test(source[curr])) {
      curr += 1;
    }
  }

  return { ch, index: curr };
}

exports.lookAhead = lookAhead;

// look behind target from source
function lookBehind(source, offset, ignoreWhitespace, ignoreLineTerminator) {
  let curr = source.length - offset - 1;

  const test = function (ch) {
    const isWS = ignoreWhitespace && isWhiteSpace(ch);
    const isLT = ignoreLineTerminator && isLineTerminator(ch);
    return isWS || isLT;
  };

  let ch = source[curr];

  while (curr >= 0 && test(ch)) {
    curr -= 1;
    ch = source[curr];
  }
  return { ch, index: curr };
}

exports.lookBehind = lookBehind;

// check if next '/' is a div operator or start of a regular expression
function isDivAhead(state, match) {
  if (state === 'single_line_comment_start' || state === 'multi_line_comment_start') {
    return false;
  }
  if (match === ';' ||
      match === ',' ||
      match === ':' ||
      match === '(') {
      // match === '=') {
    return false;
  }
  if (state === 'block_brace_start' && match === '}') {
    return false;
  }
  if (match === ']' ||
      match === ')' ||
      match === '}') {
    return true;
  }
  if (state === 'identifier_start') {
    const idContinueReg = require('unicode-6.3.0/Binary_Property/ID_Continue/regex');
    if (idContinueReg.test(match) || match === '$' || match === '_' || isWhiteSpace(match) || isLineTerminator(match)) {
      return true;
    }
    return false;
  }

  if (state === 'identifier_start' ||
      state === 'decimal_digit_start' ||
      state === 'decimal_digit_dot_start' ||
      state === 'regexp_flag_start' ||
      state === 'regexp_noflag' ||
      state === 'div_start') {
    return true;
  }
  return false;
}
exports.isDivAhead = isDivAhead;

function parseKeyword(keyword, alias) {
  let res = '';
  switch (this.topState()) {
    case 'single_string_start':
      res = 'SingleStringCharacter';
      break;
    case 'double_string_start':
      res = 'DoubleStringCharacter';
      break;
    case 'template_string_start':
      res = 'TemplateChar';
      break;
    case 'identifier_start':
      res = 'UnicodeIDContinue';
      break;
    case 'regexp_flag_start':
      res = 'UnicodeIDContinue';
      break;
    case 'property_start':
      this.popState();
      this.begin('identifier_start');
      res = 'UnicodeIDStart';
      break;
    default:
      res = alias || keyword;
      break;
  }

  // look ahead for { and function
  // let i = this.matches.index + this.match.length;
  // const input = this.matches.input;

  const curr = this.matches.index + this.match.length;

  const { ch, index: next } = lookAhead(this.matches.input, curr, true, true, this.topState());
  const input = this.matches.input;
  let isDiv = false;
  if (ch === '/') {
    isDiv = isDivAhead(this.topState(), this.match);
  }
  // look ahead for id_continue

  if (this.topState() === 'INITIAL' ||
      this.topState() === 'case_start' ||
      this.topState() === 'condition_start' ||
      this.topState() === 'arrow_brace_start' ||
      this.topState() === 'template_string_head_start' ||
      this.topState() === 'brace_start' ||
      this.topState() === 'function_brace_start' ||
      this.topState() === 'block_brace_start') {
    const idContinueReg = require('unicode-6.3.0/Binary_Property/ID_Continue/regex');
    if (idContinueReg.test(input[curr])) {
      this.begin('identifier_start');
      res = 'UnicodeIDStart';
    }
  }

  // while (i < input.length && isWhiteSpace(input[i])) { i++; }

  // throw 后面的{ 应该是表达式
  // throw 后面的function应该是表达式
  // return 后面的{ 应该是表达式
  // return 后面的function应该是表达式
  if (this.match === 'throw' || this.match === 'return') {
    if (/^{/.test(input.substring(next))) {
      this.begin('brace_start');
    }
    if (/^function/.test(input.substring(next))) {
      this.begin('function_start');
    }
  }
  // { after const/let/var should be brace not block
  if (this.match === 'const' || this.match === 'var' || this.match === 'let') {
    if (/^{/.test(input.substring(next))) {
      this.begin('brace_start');
    }
  }
  // TODO: look ahead { is the start of expression
  if (this.match === 'in' || this.match === 'of') {
    if (/^{/.test(input.substring(next))) {
      this.begin('brace_start');
    }
  }
  if (this.match === 'new') {
    if (/^function/.test(input.substring(next))) {
      this.begin('function_start');
    }
  }
  if (this.topState() === 'brace_start' && ch === ':') {
    res = 'UnicodeIDStart';
  }
  if (isDiv) {
    this.begin('div_start');
  }
  return res;
}
exports.parseKeyword = parseKeyword;

function parseOperator(operator, alias) {
  let isDiv = false;

  const { ch, index: i } = lookAhead(this.matches.input,
    this.matches.index + this.match.length, true, true, this.topState());

  const input = this.matches.input;

  if (ch === '/') {
    isDiv = isDivAhead(this.topState(), this.match);
  }

  let res = '';

  switch (this.topState()) {
    case 'single_string_start':
      res = 'SingleStringCharacter';
      break;
    case 'double_string_start':
      res = 'DoubleStringCharacter';
      break;
    case 'identifier_start':
      this.popState();
      res = alias || operator;
      break;
    case 'regexp_flag_start':
    case 'regexp_noflag':
      this.popState();
      res = alias || operator;
      break;
    case 'decimal_digit_start':
      this.popState();
      res = alias || operator;
      break;
    case 'decimal_digit_dot_start':
      this.popState();
      this.popState();
      res = alias || operator;
      break;
    case 'brace_start':
      // this.popState();
      res = alias || operator;
      break;
    case 'arrow_brace_start':
      this.popState();
      res = alias || operator;
      break;
    case 'div_start':
      this.popState();
      res = alias || operator;
      break;
    case 'property_start':
      this.popState();
      res = alias || operator;
      break;
    case 'hex_start':
      this.popState();
      res = alias || operator;
      break;
    case 'exponent_start':
      this.popState();
      if (this.topState() === 'decimal_digit_dot_start') {
        this.popState();
      }
      if (this.topState() === 'decimal_digit_start') {
        this.popState();
      }
      res = alias || operator;
      break;
    default:
      res = alias || operator;
      break;
  }
  // TODO: 具体情况具体分析
  // case : 后面的{ 应该是语句块而不是表达式的开头
  // } 后面的{是语句块开头？
  // ) 后面的{是语句块开头?
  // test ? exp1 : function() {} function after ':' is an expression
  if (this.match === ':') {
    if (this.topState() === 'case_start') {
      this.popState();
    } else if (this.topState() === 'condition_start' || this.topState() === 'brace_start') {
      if (this.topState() === 'condition_start') {
        this.popState();
      }
      if (/^{/.test(input.substring(i))) {
        this.begin('brace_start');
      }
      if (/^function/.test(input.substring(i))) {
        this.begin('function_start');
      }
    // } else if (/^{/.test(input.substring(i))) {
    // this.begin('brace_start');
    } else if (/^function/.test(input.substring(i))) {
      // NOTICE: { a : function() {} }
      this.begin('function_start');
    }
  } else if (this.match === '?') {
    if (this.topState() !== 'condition_start') {
      this.begin('condition_start');
    }
    // NOTICE: '? function' here must be an function expression
    if (/^function/.test(input.substring(i))) {
      this.begin('function_start');
    } else if (/^{/.test(input.substring(i))) {
      this.begin('brace_start');
    }
  } else if (this.match === ')') {

  } else if (this.match === '=>') {
    // Arrow Function look ahread {
    if (/^{/.test(input.substring(i))) {
      this.begin('arrow_brace_start');
    }
  } else if (this.match === ';') {
  } else if (this.match === '}') {
    // `${foo}`
    if (this.topState() === 'template_string_head_start') {
      this.popState();
      res = 'RIGHT_TEMPLATE_BRACE';
    } else if (this.topState() === 'function_brace_start') {
      res = '}';
    } else if (this.topState() === 'template_string_start') {
      res = 'TemplateChar';
    } else if (this.topState() === 'block_brace_start') {
      // this.popState();
      res = '}';
    } else if (this.topState() === 'identifier_start') {
      res = '}';
    }
  } else if (this.match === '{') {
    if (this.topState() === 'template_string_head_start') {
      // look behind for ')'
      const { ch: nextCh } = lookBehind(this.matched, 1, true, true);
      // `${function() {}}` the 2nd { should be the start of a block
      if (nextCh === ')') {
        this.begin('function_brace_start');
        res = '{';
      } else {
          // `${{}}` here { must be the prefix of an exression
        this.begin('brace_start');
        res = 'BRACE_START';
      }
    } else if (this.topState() === 'brace_start') {
      const { ch: nextCh } = lookBehind(this.matched, 1, true, true);
      if (nextCh === ')') {
        this.begin('function_brace_start');
        res = '{';
      } else {
        // NOTICE
        res = 'BRACE_START';
      }
    } else if (this.topState() === 'condition_start') {
      const { ch: nextCh } = lookBehind(this.matched, 1, true, true);
      if (nextCh === ')') {
        this.begin('function_brace_start');
        res = '{';
      } else {
        this.begin('brace_start');
        res = 'BRACE_START';
      }
    } else {
        // here { should be start of a block
      this.begin('block_brace_start');
    }
  } else if (/^{/.test(input.substring(i))) {
    this.begin('brace_start');
  } else if (/^function/.test(input.substring(i))) {
    this.begin('function_start');
  }
  if (isDiv) {
    this.begin('div_start');
  }
  if (res) { return res; }

  return undefined;
}

exports.parseOperator = parseOperator;

function parseIdentifier() {
  switch (this.topState()) {
    case 'single_string_start':
      return 'SingleStringCharacter';
    case 'double_string_start':
      return 'DoubleStringCharacter';
    case 'template_string_start':
      return 'TemplateChar';
    default:
      break;
  }
  if (this.topState() === 'property_start') {
    this.popState();
    this.begin('identifier_start');
    return 'UnicodeIDStart';
  }
  if (this.topState() === 'identifier_start') {
    return 'UnicodeIDContinue';
  }
  this.begin('identifier_start');
  return 'UnicodeIDStart';
}

exports.parseIdentifier = parseIdentifier;

function parseString(ch) {
  const isSingleQuote = ch === 'SingleStringCharacter';
  const isDoubleQuote = ch === 'DoubleStringCharacter';

  if (this.match === '\u000A' || this.match === '\u000D') {
    throw new Error('SyntaxError: Invalid or unexpected token');
  } else if (this.match === '\\') {
    if (isSingleQuote) {
      this.begin('single_escape_string');
    }
    if (isDoubleQuote) {
      this.begin('double_escape_string');
    }
    return 'EscapeSequenceStart';
  } else if (this.match === '\'' || this.match === '"') {
    if (this.match === '\'') {
      if (this.topState() === 'single_string_start') {
        this.popState();
        return 'SingleQuoteEnd';
      }
    }
    if (this.match === '"') {
      if (this.topState() === 'double_string_start') {
        this.popState();
        return 'DoubleQuoteEnd';
      }
    }
  }
  return ch;
}

exports.parseString = parseString;

function parseEscapeString() {
  this.begin('identifier_start_unicode');
  return 'UnicodeEscapeSequenceStart';
}

exports.parseEscapeString = parseEscapeString;

function parseEscapeStringCharacter() {
  if (SINGLE_ESCAPE_CHARACTERS.indexOf(this.match) !== -1) {
    this.popState();
    return 'SingleEscapeCharacter';
  }
  this.popState();
  return 'NonEscapeCharacter';
}

exports.parseEscapeStringCharacter = parseEscapeStringCharacter;

function parseToken(token, alias) {
  let isDiv = false;

  const { ch } = lookAhead(this.matches.input,
    this.matches.index + this.match.length, true, true, this.topState());

  if (ch === '/') {
    isDiv = isDivAhead(this.topState(), this.match);
  }

  switch (this.topState()) {
    case 'single_string_start':
      return 'SingleStringCharacter';
    case 'double_string_start':
      return 'DoubleStringCharacter';
    case 'template_string_start':
      return 'TemplateChar';
    case 'identifier_start':
      this.popState();
      break;
    case 'decimal_digit_start':
      this.popState();
      break;
    case 'decimal_digit_dot_start':
      this.popState();
      this.popState();
      break;
    case 'regexp_flag_start':
    case 'regexp_noflag':
      this.popState();
      break;
    case 'div_start':
      this.popState();
      break;
    case 'hex_start':
      this.popState();
      break;
    case 'exponent_start':
      this.popState();
      break;
    default:
      if (isLineTerminator(this.match)) {
        const input = this.matches.input;
        let i = this.matches.index + this.match.length;

        // jump white space and line terminator
        while (i < input.length && (isWhiteSpace(input[i]) || isLineTerminator(input[i]))) { i++; }

        // () => {}
        // look ahead =>
        // ArrowFunction[In, Yield] :
        //     ArrowParameters[?Yield] [no LineTerminator here] => ConciseBody[?In]

        if (/^=>/.test(input.substring(i))) {
          throw new (require('./error').NoLineTerminatorError)('no line terminator', {
            text: this.yytext,
            token: 'ArrowFunction',
            line: this.yylloc.first_line,
            loc: {
              first_line: this.yylloc.first_line,
              last_line: this.yylloc.last_line,
              first_column: this.yylloc.first_column,
              last_column: this.yylloc.last_column,
              range: [
                this.yylloc.range[0],
                this.yylloc.range[1] - 2,
              ],
            },
            offset: this.offset - 2,
          });
        }
      }
      break;
  }
  if (isDiv) {
    this.begin('div_start');
  }
  return alias || '';
}

exports.parseToken = parseToken;

/**
 * TemplateCharacter ::
 *  $ [lookahead ≠ {]
 *  \ EscapeSequence
 *  LinheContinuation
 *  LineTerminatorSequence
 *  SourceCharacterbut not one of ` or \ or $ or LineTerminator
 */
function parseTemplateCharacters(ch) {
  if (ch === '`') {
    this.popState();
    return ch;
  }

  if (isLineTerminator(ch)) {
    return 'TemplateChar';
  }

  const input = this.matches.input;
  const nextCh = input[this.matches.index + this.match.length];

  if (ch === '$') {
    if (nextCh === '{') {
      this.begin('template_string_head_start');
      return '$';
    }
    return 'TemplateChar';
  }

  if (ch === '\\') {
    if (isLineTerminator(nextCh)) {
      return 'TemplateChar';
    }
    this.begin('template_escape_string_start');
    return 'TemplateEscape';
  }

  return 'TemplateChar';
}

exports.parseTemplateCharacters = parseTemplateCharacters;

function parseTemplateCharacterEscape(ch) {
  if (SINGLE_ESCAPE_CHARACTERS.indexOf(ch) !== -1) {
    this.popState();
    return 'SingleEscapeCharacter';
  }
  this.popState();
  return 'NonEscapeCharacter';
}

exports.parseTemplateCharacterEscape = parseTemplateCharacterEscape;


/** *
 * IdentifierParse ::
 *   UnicodeIDContinue
 *   UnicodeEscapeSequenceContinue
 *   $
 *   _
 *   ZWNJ
 *   ZWJ
 */
function isRegexpFlag(ch) {
  const idContinueReg = require('unicode-6.3.0/Binary_Property/ID_Continue/regex');
  // TODO: UnicodeEscapeSequenceContinue
  if (idContinueReg.test(ch)) {
    return 'UnicodeIDContinue';
  } else if (ch === '$') {
    return '$';
  } else if (ch === '-') {
    return '-';
  } else if (ch === '\\u200C') {
    return 'ZWNJ';
  } else if (ch === '\\u200D') {
    return 'ZWJ';
  }
  return false;
}

/**
 * RegularExpressionLiteral :: / RegularExpressionBody /
 *
 * RegularExpressionNonTerminator
 * RegularExpressionBackslashSequence :: \ RegularExpressionNonTerminator
 * RegularExpressionClass :: [ RegularExpressionClassChars ]
 */
function parseRegexpCharacters(ch) {
  if (ch === '/' && this.topState() === 'regexp_start') {
    this.popState();
    const { ch: nextCh } = lookAhead(this.matches.input,
      this.matches.index + this.match.length, false, false, this.topState());

    if (isRegexpFlag(nextCh)) {
      this.begin('regexp_flag_start');
    } else {
      this.begin('regexp_noflag');
    }
    return 'RIGHT_REGEXP_DIV';
  }

  if (this.topState() === 'regexp_flag_start') {
    // look ahead for char with an id_continue of false to end
    const { ch: nextCh } = lookAhead(this.matches.input,
      this.matches.index + this.match.length, false, false, this.topState());

    const { ch: nextChNonWS } = lookAhead(this.matches.input,
      this.matches.index + this.match.length, true, false, this.topState());

    let isDiv = false;

    if (nextChNonWS === '/') {
      isDiv = isDivAhead(this.topState(), this.match);
    }

    if (!isRegexpFlag(nextCh)) {
      this.popState();
      if (isDiv) {
        this.begin('div_start');
      }
    }
    return isRegexpFlag(ch);
    // return 'RegularExpressionNonTerminator';
  }

  if (this.topState() === 'regexp_backslash_start') {
    this.popState();
    return 'RegularExpressionNonTerminator';
  }

  if (ch === '\\') {
    this.begin('regexp_backslash_start');
    return 'RegexpBackslash';
  }

  if (ch === '[' && this.topState() === 'regexp_start') {
    this.begin('regexp_class_start');
    return 'LEFT_REGEXP_CLASS_BRACKET';
  }
  if (ch === ']') {
    if (this.topState() === 'regexp_class_start') {
      this.popState();
      return 'RIGHT_REGEXP_CLASS_BRACKET';
    }
  }
  return 'RegularExpressionNonTerminator';
}

exports.parseRegexpCharacters = parseRegexpCharacters;
