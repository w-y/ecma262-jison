'use strict';

var rules = ['*'];

var TAB = {
  conditions: rules,
  rule: '\\u0009',
  handler: '\n    return require(\'./util\').parseToken.call(this, this.match);\n  '
};

var LF = {
  conditions: rules,
  rule: '\\u000A',
  handler: '\n    return require(\'./util\').parseToken.call(this, this.match);\n  '
};

var CR = {
  conditions: rules,
  rule: '\\u000D',
  handler: '\n    return require(\'./util\').parseToken.call(this, this.match);\n  '
};

var LS = {
  conditions: rules,
  rule: '\\u2028',
  handler: '\n    return require(\'./util\').parseToken.call(this, this.match);\n  '
};

var PS = {
  conditions: rules,
  rule: '\\u2029',
  handler: '\n    return require(\'./util\').parseToken.call(this, this.match);\n  '
};

var VT = {
  conditions: rules,
  rule: '\\u000B',
  handler: '\n    return require(\'./util\').parseToken.call(this, this.match);\n  '
};

var FF = {
  conditions: rules,
  rule: '\\u0020',
  handler: '\n    return require(\'./util\').parseToken.call(this, this.match);\n  '
};

var NBSP = {
  conditions: rules,
  rule: '\\u00A0',
  handler: '\n    return require(\'./util\').parseToken.call(this, this.match);\n  '
};

var ZWNJ = {
  conditions: rules,
  rule: '\\u200C',
  handler: '\n    return require(\'./util\').parseToken.call(this, this.match, \'ZWNJ\');\n  '
};

var ZWJ = {
  conditions: rules,
  rule: '\\u200D',
  handler: '\n    return require(\'./util\').parseToken.call(this, this.match, \'ZWJ\');\n  '
};

var ZWNBSP = {
  conditions: rules,
  rule: '\\uFEFF',
  handler: '\n    return require(\'./util\').parseToken.call(this, this.match);\n  '
};

exports.tokens = [TAB, LF, CR, LS, PS, VT, FF, NBSP, ZWNJ, ZWJ, ZWNBSP];