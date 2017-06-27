module.exports = {
  conditions: [''],
  name: 'IdentifierPart',
  rules: [
    'UnicodeIDContinue',
    'UnicodeEscapeSequenceContinue',
    '$',
    '_',
    'ZWNJ',
    'ZWJ',
  ],
  handlers: [
    '$$ = { value: $1, loc: this._$ }',
    '$$ = { value: $1, loc: this._$ }',
    '$$ = { value: $1, loc: this._$ }',
    '$$ = { value: $1, loc: this._$ }',
    '$$ = { value: $1, loc: this._$ }',
    '$$ = { value: $1, loc: this._$ }',
  ],
  subRules: [
    require('./UnicodeEscapeSequenceContinue'),
  ],
};
