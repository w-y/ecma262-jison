const hexDigit = {
  conditions: ['identifier_start_unicode'],
  rule: /[0123456789abcdefABCDEF]/,
  handler: `
    if (!this.__unicode_counter) { this.__unicode_counter = 0; }
    this.__unicode_counter++;
    if (this.__unicode_counter === 4) {
      this.__unicode_counter = 0;
      this.popState();
      if (this.topState() === 'double_escape_string' || this.topState() === 'single_escape_string') {
        this.popState();
      }
    }
    return 'HexDigit';
  `,
};

exports.hexDigit = hexDigit;
