const { TAB, VT, FF, SP, NBSP, ZWNJ, ZWJ, ZWNBSP } = require('./constants').WHITESPACE;
const SINGLE_ESCAPE_CHARACTERS = require('./constants').SINGLE_ESCAPE_CHARACTERS; 

const isWhiteSpace = function(ch) {
  return (
    ch === TAB ||
    ch === VT ||
    ch === FF ||
    ch === SP ||
    ch === NBSP ||
    ch === ZWNJ ||
    ch === ZWJ ||
    ch === ZWNBSP
  );
}

const isDecimalDigit = function(ch) {
  return /[0-9]/.test(ch);
}

exports.parseKeyword = function(keyword, alias) {
  {
    let res = '';
    switch(this.topState()) {
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
    };

    // look behind { 和 function
    let i = this.matches.index + this.match.length;
    const input = this.matches.input;

    // 跳过空白字符
    while(i < input.length && isWhiteSpace(input[i])) { i++; }

    // throw 后面的{ 应该是表达式
    // throw 后面的function应该是表达式
    // return 后面的{ 应该是表达式
    // return 后面的function应该是表达式
    if (this.match === 'throw' || this.match === 'return') {
      if (/^{/.test(input.substring(i))) {
        this.begin('block_start');
      }
      if (/^function/.test(input.substring(i))) {
        this.begin('function_start');
      }
    }
    return res;
  }
}

exports.parseOperator = function(operator, alias) {
  let i = this.matches.index + this.match.length;
  const input = this.matches.input;

  while(i < input.length && isWhiteSpace(input[i])) { i++; }
  let res = '';

  switch(this.topState()) {
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
    default:
      res = alias || operator;
      break;
  };

  // TODO: 具体情况具体分析
  // case : 后面的{ 应该是语句块而不是表达式的开头
  // } 后面的{是语句块开头？
  // ) 后面的{是语句块开头?
  if (/^function/.test(input.substring(i))) {
    this.begin('function_start');
  } else if (this.match === ':') {
    if (/^{/.test(input.substring(i))) {
      if (this.topState() === 'case_start') {
        this.popState();
      } else {
        this.begin('block_start');
      }
    }
  } else if (this.match === ')') {
    ;
  } else if (this.match === '}') {
    ;
  } else if (/^{/.test(input.substring(i))) {
    this.begin('block_start');
  }
  if (res) { return res; }
}

exports.parseIdentifier = function() {
  switch(this.topState()) {
    case 'single_string_start':
      return 'SingleStringCharacter';
    case 'double_string_start':
      return 'DoubleStringCharacter';
    default:
      break;
  }
  this.begin('identifier_start');
}

exports.parseString = function(ch) {
  const isSingleQuote = ch === 'SingleStringCharacter';
  const isDoubleQuote = ch === 'DoubleStringCharacter';

  if (this.match === '\u0009' || this.match === '\u000A') {
    throw new Error('Syntax error');
  } else if (this.match === '\\') {
    if (isSingleQuote) {
      this.begin('single_escape_string');
    }
    if (isDoubleQuote) {
      this.begin('double_escape_string');
    }
    return 'EscapeSequenceStart';
  } else if (this.match === '\'') {
    this.popState();
    if (isSingleQuote) {
      return 'SingleQuoteEnd';
    }
    if (isDoubleQuote) {
       return 'DoubleQuoteEnd';
    }
  }
  return ch;
}

exports.parseEscapeString = function() {
  this.begin('identifier_start_unicode');
  return 'UnicodeEscapeSequenceStart';
}

exports.parseEscapeStringCharacter = function() {
  if (SINGLE_ESCAPE_CHARACTERS.indexOf(this.match) !== -1) {
    this.popState();
    return 'SingleEscapeCharacter';
  } else {
    this.popState();
    return 'NonEscapeCharacter';
  }
}
