'use strict';

var TAB = '\t';
var VT = '\x0B';
var FF = '\f';
var SP = ' ';
var NBSP = '\xA0';
var ZWNJ = '\u200C';
var ZWJ = '\u200D';
var ZWNBSP = '\uFEFF';
var LF = '\n';
var CR = '\r';
var LS = '\u2028';
var PS = '\u2029';

module.exports = {
  WHITESPACE: { TAB: TAB, VT: VT, FF: FF, SP: SP, NBSP: NBSP, ZWNJ: ZWNJ, ZWJ: ZWJ, ZWNBSP: ZWNBSP, LF: LF, CR: CR, LS: LS, PS: PS },
  SINGLE_ESCAPE_CHARACTERS: ['\'', '"', '\\', 'b', 't', 'n', 'v', 'f', 'r', '`'],
  STRING_SINGLE_CHARACTER_ESCAPE_SEQUENCES: {
    b: 0x0008,
    t: 0x0009,
    n: 0x000A,
    v: 0x000B,
    f: 0x000C,
    r: 0x000D,
    '"': 0x0022,
    '\'': 0x0027,
    '\\': 0x005c,
    '`': 0x0060
  }
};