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

function parseKeyword(keyword, alias) {
  {
    let res = '';
    switch (this.topState()) {
      case 'single_string_start':
        res = 'SingleStringCharacter';
        break;
      case 'double_string_start':
        res = 'DoubleStringCharacter';
        break;
      case 'identifier_start':
        res = 'UnicodeIDContinue';
        break;
      default:
        res = alias || keyword;
        break;
    }

    // look behind { 和 function
    let i = this.matches.index + this.match.length;
    const input = this.matches.input;

    // look behind for id_continue

    if (this.topState() === 'INITIAL') {
      const idContinueReg = require('unicode-6.3.0/Binary_Property/ID_Continue/regex');
      if (idContinueReg.test(input[i])) {
        this.begin('identifier_start');
        res = 'UnicodeIDStart';
      }
    }

    // 跳过空白字符
    while (i < input.length && isWhiteSpace(input[i])) { i++; }

    // throw 后面的{ 应该是表达式
    // throw 后面的function应该是表达式
    // return 后面的{ 应该是表达式
    // return 后面的function应该是表达式
    if (this.match === 'throw' || this.match === 'return') {
      if (/^{/.test(input.substring(i))) {
        this.begin('brace_start');
      }
      if (/^function/.test(input.substring(i))) {
        this.begin('function_start');
      }
    }
    // { after const/let/var should be brace not block
    if (this.match === 'const' || this.match === 'var' || this.match === 'let') {
      if (/^{/.test(input.substring(i))) {
        this.begin('brace_start');
      }
    }
    return res;
  }
}
exports.parseKeyword = parseKeyword;

function parseOperator(operator, alias) {
    console.log('============')
    console.log(this.matched);
    console.log('============')
   // NOTICE: restrict line terminator for update express
  if (alias === 'UpdateOperator') {
    let start = this.matched.length - 3;
    let hasLF = false;
    let hasSemiColon = false;

    while (start >= 0 && require('./util').isWhiteSpace(this.matched[start])) {
      start -= 1;
    }
    while (start >= 0 && require('./util').isLineTerminator(this.matched[start])) {
      start -= 1;
      hasLF = true;
    }
    while (start >= 0 && require('./util').isWhiteSpace(this.matched[start])) {
      start -= 1;
    }
    if (this.matched[start] === ';') {
      hasSemiColon = true;
    }
    if (hasLF && !hasSemiColon) {
      throw new (require('./error').NoLineTerminatorError)('no line terminator', {
        text: this.yytext,
        token: 'UpdateOperator_LF',
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

  let i = this.matches.index + this.match.length;
  const input = this.matches.input;

  while (i < input.length && (isWhiteSpace(input[i]))) { i++; }
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
      this.popState();
      res = alias || operator;
      break;
    case 'arrow_brace_start':
      this.popState();
      res = alias || operator;
      console.log('vvvvvvvvvvvvv');
      console.log(res);
      console.log('vvvvvvvvvvvvv');
      break;
    default:
      res = alias || operator;
      break;
  }
  // TODO: 具体情况具体分析
  // case : 后面的{ 应该是语句块而不是表达式的开头
  // } 后面的{是语句块开头？
  // ) 后面的{是语句块开头?
  if (this.match === ':') {
    if (this.topState() === 'case_start') {
      this.popState();
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

  } else if (/^{/.test(input.substring(i))) {
    this.begin('brace_start');
  } else if (/^function/.test(input.substring(i))) {
    this.begin('function_start');
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
    default:
      break;
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
  switch (this.topState()) {
    case 'single_string_start':
      return 'SingleStringCharacter';
    case 'double_string_start':
      return 'DoubleStringCharacter';
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
    default:
      if (isLineTerminator(this.match)) {
        const input = this.matches.input;
        let i = 0;

        // jump white space and line terminator
        while (i < input.length && (isWhiteSpace(input[i]))) { i++; }

        // () => {}
        // look behind =>
        // ArrowFunction[In, Yield] :
        //     ArrowParameters[?Yield] [no LineTerminator here] => ConciseBody[?In]

        if (/=>/.test(input.substring(i))) {
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
  return alias || '';
}

exports.parseToken = parseToken;

// mathematical value
function getMVHexDigit(v1) {
  switch (v1) {
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
