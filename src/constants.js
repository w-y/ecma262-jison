const TAB = '\u0009';
const VT = '\u000B';
const FF = '\u000C';
const SP = '\u0020';
const NBSP = '\u00A0';
const ZWNJ = '\u200C';
const ZWJ = '\u200D';
const ZWNBSP = '\uFEFF';
const LF = '\u000A';
const CR = '\u000D';
const LS = '\u2028';
const PS = '\u2029';

module.exports = {
  WHITESPACE: { TAB, VT, FF, SP, NBSP, ZWNJ, ZWJ, ZWNBSP, LF, CR, LS, PS },
  SINGLE_ESCAPE_CHARACTERS: ['\'', '"', '\\', 'b', 't', 'n', 'v', 'f', 'r'],
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
  },
};

