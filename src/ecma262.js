const Generator = require("jison/lib/jison").Generator;
const Statement = require('./bnf/statement');
const idStart = require('./lex/identifier').idStart;
const idContinue = require('./lex/identifier').idContinue;

exports.grammar = {
    comment: 'ECMA-262 7th Edition, 17.02.23 The es Grammar. Parses strings into ast.',
    author: 'w-y',

    lex: {
        startConditions: {
          identifier_start: 'identifier_start',
          identifier_start_unicode: 'identifier_start_unicode',
          decimal_digit_start: 'decimal_digit_start',
          single_string_start: 'single_string_start',
          double_string_start: 'double_string_start',
          single_escape_string: 'single_escape_string',
          double_escape_string: 'double_escape_string',
          new_target: 'new_target',
          decimal_digit_dot_start: 'decimal_digit_dot_start',
          function_start: 'function_start',
          block_start: 'block_start',
          case_start: 'case_start',
        },
        rules: [
          [['*'], 'true', `return require('./util').parseKeyword.call(this, this.match, 'BooleanLiteral')`],
          [['*'], 'false', `return require('./util').parseKeyword.call(this, this.match, 'BooleanLiteral')`],
          [['*'], 'null', `return require('./util').parseKeyword.call(this, this.match, 'NullLiteral')`],
          [['*'], 'let', `return require('./util').parseKeyword.call(this, this.match, 'LetOrConst')`],
          [['*'], 'const', `return require('./util').parseKeyword.call(this, this.match, 'LetOrConst')`],
          [['*'], 'for', `return require('./util').parseKeyword.call(this, this.match)`],
          [['*'], 'of', `return require('./util').parseKeyword.call(this, this.match)`],

          [['function_start'], 'function', `this.popState();return require('./util').parseKeyword.call(this, this.match)`],
          [['*'], 'function', `return require('./util').parseKeyword.call(this, this.match, 'FUNCTION')`],
          [['*'], 'super', `return require('./util').parseKeyword.call(this, this.match)`],
          [['*'], 'switch', `return require('./util').parseKeyword.call(this, this.match)`],
          [['*'], 'case', `this.begin('case_start');return require('./util').parseKeyword.call(this, this.match)`],
          [['*'], 'default', `this.begin('case_start');return require('./util').parseKeyword.call(this, this.match)`],

          [['*'], 'new(?=\\s*[.]\\s*target)', `this.begin('new_start');return require('./util').parseKeyword.call(this, this.match)`],
          [['*'], '\\.', `return '.'`],
          [['new_target'], 'target', `return '.'`],
          [['*'], 'new', `return require('./util').parseKeyword.call(this, this.match)`],

          [['*'], 'var', `return require('./util').parseKeyword.call(this, this.match)`],
          [['*'], 'in', `return require('./util').parseKeyword.call(this, this.match)`],
          [['*'], 'instanceof', `return require('./util').parseKeyword.call(this, this.match, 'RelationalOperator')`],
          [['*'], 'this', `return require('./util').parseKeyword.call(this, this.match, 'this')`],

          [['*'], '\\.\\.\\.', `return require('./util').parseKeyword.call(this, this.match)`],

          [['*'], 'delete', `return require('./util').parseKeyword.call(this, this.match, 'UnaryOperator')`],
          [['*'], 'void', `return require('./util').parseKeyword.call(this, this.match, 'UnaryOperator')`],
          [['*'], 'typeof', `return require('./util').parseKeyword.call(this, this.match, 'UnaryOperator')`],
          

          [['*'], 'if', `return require('./util').parseKeyword.call(this, this.match)`],
          [['*'], 'else', `return require('./util').parseKeyword.call(this, this.match)`],
          [['*'], 'do', `return require('./util').parseKeyword.call(this, this.match)`],
          [['*'], 'while', `return require('./util').parseKeyword.call(this, this.match)`],
          

          [['*'], 'continue[\\u0009|\\u0020]*[\\u000A]', `return require('./util').parseKeyword.call(this, this.match, 'CONTINUE_LF')`],
          [['*'], 'continue', `return require('./util').parseKeyword.call(this, this.match)`],

          [['*'], 'break[\\u0009|\\u0020]*[\\u000A]', `return require('./util').parseKeyword.call(this, this.match, 'BREAK_LF')`],
          [['*'], 'break', `return require('./util').parseKeyword.call(this, this.match)`],

          [['*'], 'throw[\\u0009|\\u0020]*[\\u000A]', `return require('./util').parseKeyword.call(this, this.match, 'THROW_LF')`],
          [['*'], 'throw', `return require('./util').parseKeyword.call(this, this.match)`],
          

          [['*'], 'with', `return require('./util').parseKeyword.call(this, this.match)`],
          [['*'], 'return', `return require('./util').parseKeyword.call(this, this.match)`],
          [['*'], 'debugger', `return require('./util').parseKeyword.call(this, this.match)`],
          [['*'], 'try', `return require('./util').parseKeyword.call(this, this.match)`],
          [['*'], 'catch', `return require('./util').parseKeyword.call(this, this.match)`],
          [['*'], 'finally', `return require('./util').parseKeyword.call(this, this.match)`],

          [['*'], '$', `return require('./util').parseIdentifier.call(this, this.match)`],
          [['*'], '_', `return require('./util').parseIdentifier.call(this, this.match)`],

          [['single_string_start'], '.', `return require('./util').parseString.call(this, 'SingleStringCharacter')`],
          [['single_escape_string'], '[u|U]', `return require('./util').parseEscapeString.call(this, this.match)`],
          [['single_escape_string'], '.', `return require('./util').parseEscapeStringCharacter.call(this, this.match)`],
          [['*'], '\\\'', `this.begin('single_string_start'); return 'SingleQuoteStart'`],

          [['double_string_start'], '.', `return require('./util').parseString.call(this, 'DoubleStringCharacter')`],
          [['double_escape_string'], '[u|U]', `return require('./util').parseEscapeString.call(this, this.match)`],
          [['double_escape_string'], '.', `return require('./util').parseEscapeStringCharacter.call(this, this.match)`],
          [['*'], '"', `this.begin('double_string_start'); return 'DoubleQuoteStart'`],
          
          [['*'], '\\[', `return require('./util').parseOperator.call(this, this.match)`],
          [['*'], '\\]', `return require('./util').parseOperator.call(this, this.match)`],

          [['block_start'], '{', `return require('./util').parseOperator.call(this, this.match, 'BLOCK_STRAT')`],
          [['*'], '{', `return require('./util').parseOperator.call(this, this.match)`],
          [['*'], '}', `return require('./util').parseOperator.call(this, this.match)`],

          [['*'], ':', `return require('./util').parseOperator.call(this, this.match)`],

          [['identifier_start'], idContinue, `console.log('id continue' + '###');  console.log(yytext);//return 'UnicodeIDStart';`],
          [['*'], idStart, `console.log('id start ' + '###');  this.begin('identifier_start');console.log(yytext);//return 'UnicodeIDStart';`],

          [['*'], ';', `console.log('=============');return ';'`],
          [['*'], '\\u000A', `return ''`],
          [['*'], '\\u000B', `return 'VT'`],
          [['*'], '\\u0020', `return 'FF'`],
          [['*'], '\\u00A0', `return 'NBSP'`],

          [['*'], '\\u200C', `return 'ZWNJ'`],
          [['*'], '\\u200D', `return 'ZWJ'`],
          [['*'], '\\uFEFF', `return 'ZWNBSP'`],

          [['*'], '\\u000A', `return ''`],
          [['*'], '\\u000D', `return 'CR'`],
          [['*'], '\\u2028', `return 'LS'`],
          [['*'], '\\u2029', `return 'PS'`],
        ],
    },

    start: 'Script',

    bnf: Object.assign({
        Script: [
          ['ScriptBody', ''],
        ],
        ScriptBody: [
          ['StatementList', ''],
        ],
        StatementList: [
          ['StatementListItem', ''],
          ['StatementList StatementListItem', ''],
        ],
        StatementListItem: [
           ['Statement', ''],
        ],
    }, Statement),
};

const options = { type: "lr", moduleType: "commonjs", moduleName: "esparse" };

exports.main = function main (args) {
    var code = new Generator(exports.grammar, options).generate();
    console.log(`
      ${code}
    `);
};

if (require.main === module)
    exports.main();

