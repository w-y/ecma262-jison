const identifierHexDigit = {
  conditions: ['identifier_start_unicode'],
  rule: '[0123456789abcdefABCDEF]',
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

const hexDigitStart = {
  conditions: ['INITIAL', 'case_start', 'arrow_brace_start', 'template_string_head_start', 'brace_start', 'function_brace_start', 'block_brace_start', 'condition_start'],
  rule: '0[xX]',
  handler: `
    this.begin('hex_start');
    return this.match;
  `,
};

const hexDigit = {
  conditions: ['hex_start'],
  rule: '[0123456789abcdefABCDEF]',
  handler: `
    console.log('HexDigit');
    return 'HexDigit'; 
  `,
};

exports.hexDigit = [
  identifierHexDigit,
  hexDigitStart,
  hexDigit,
];
