module.exports = {
  conditions: [''],
  name: 'RightBrace',
  rules: [
    '}',
  ],
  handlers: [
    '$$ = this._$',
  ],
  subRules: [
  ],
};
