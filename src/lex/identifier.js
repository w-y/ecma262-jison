const idStartReg = require('unicode-6.3.0/Binary_Property/ID_Start/regex');
const idContinueReg = require('unicode-6.3.0/Binary_Property/ID_Continue/regex');

exports.idStart = idStartReg;

exports.idContinue = idContinueReg;

const unicodeIDStart = {
  conditions: ['INITIAL', 'block_start', 'case_start'],
  rule: idStartReg,
  handler: `
    this.begin('identifier_start');
    return 'UnicodeIDStart';
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
  conditions: ['INITIAL', 'identifier_start'],
  rule: '\\\\u|\\\\U',
  handler: `
    if (this.topState() === 'identifier_start') {
      this.begin('identifier_start_unicode');
      return 'UnicodeEscapeSequenceContinueStart'
    } else {
      this.begin('identifier_start');
      this.begin('identifier_start_unicode');
      return 'UnicodeEscapeSequenceStart';
    }
  `,
};

const dollar = {
  conditions: ['INITIAL', 'identifier_start'],
  rule: '\\$',
  handler: `
    return require('./util').parseIdentifier.call(this, this.match);
  `,
};

const underscore = {
  conditions: ['INITIAL', 'identifier_start'],
  rule: '_',
  handler: `
    return require('./util').parseIdentifier.call(this, this.match);
  `,
};

exports.unicodeIDStart = unicodeIDStart;
exports.unicodeIDContinue = unicodeIDContinue;
exports.unicodeEscapeSequenceStart = unicodeEscapeSequenceStart;

exports.dollar = dollar;
exports.underscore = underscore;

exports.identifier = [unicodeIDStart, unicodeIDContinue, unicodeEscapeSequenceStart, dollar, underscore];
