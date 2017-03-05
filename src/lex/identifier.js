const idStartReg = require('unicode-6.3.0/Binary_Property/ID_Start/regex');
const idContinueReg = require('unicode-6.3.0/Binary_Property/ID_Continue/regex');

exports.idStart = idStartReg;

exports.idContinue = idContinueReg;

const unicodeIDStart = {
  conditions: ['INITIAL'],
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
  rule: /\\[u|U]/,
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

exports.unicodeIDStart = unicodeIDStart;
exports.unicodeIDContinue = unicodeIDContinue;
exports.unicodeEscapeSequenceStart = unicodeEscapeSequenceStart;
