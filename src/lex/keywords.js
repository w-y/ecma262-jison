const True = {
  conditions: ['*'],
  rule: 'true',
  handler: `
    return require('./util').parseKeyword.call(this, this.match, 'BooleanLiteral');
  `,
};

const False = {
  conditions: ['*'],
  rule: 'false',
  handler: `
    return require('./util').parseKeyword.call(this, this.match, 'BooleanLiteral');
  `,
};

const Null = {
  conditions: ['*'],
  rule: 'null',
  handler: `
    return require('./util').parseKeyword.call(this, this.match, 'NullLiteral');
  `,
};

const Let = {
  conditions: ['*'],
  rule: 'let',
  handler: `
    return require('./util').parseKeyword.call(this, this.match, 'LetOrConst');
  `,
};

const Const = {
  conditions: ['*'],
  rule: 'const',
  handler: `
    return require('./util').parseKeyword.call(this, this.match, 'LetOrConst');
  `,
};

const For = {
  conditions: ['*'],
  rule: 'for',
  handler: `
    return require('./util').parseKeyword.call(this, this.match);
  `,
};

const FunctionExpression = {
  conditions: ['function_start'],
  rule: 'function',
  handler: `
    this.popState();
    return require('./util').parseKeyword.call(this, this.match);
  `,
};

const FunctionStatement = {
  conditions: ['*'],
  rule: 'function',
  handler: `
    this.popState();
    return require('./util').parseKeyword.call(this, this.match, 'FUNCTION');
  `,
};

const Switch = {
  conditions: ['*'],
  rule: 'switch',
  handler: `
    return require('./util').parseKeyword.call(this, this.match);
  `,
};

const Case = {
  conditions: ['*'],
  rule: 'case',
  handler: `
    if (this.topState() === 'property_start') {
      return require('./util').parseKeyword.call(this, this.match);
    } else if (this.topState() === 'brace_start' || this.topState() === 'identifier_start') {
      return require('./util').parseKeyword.call(this, this.match);
    }
    {
      const utils = require('./util');
      const { ch } = utils.lookAhead(this.matches.input, this.matches.index + this.match.length, false, false);

      if (utils.isWhiteSpace(ch) || utils.isLineTerminator(ch) || ch === ':') {
        this.begin('case_start');
        return require('./util').parseKeyword.call(this, this.match);
      } else {
        return require('./util').parseKeyword.call(this, this.match);
      }
    }
  `,
};

const Default = {
  conditions: ['*'],
  rule: 'default',
  handler: `
    if (this.topState() === 'property_start') {
      return require('./util').parseKeyword.call(this, this.match);
    } else if (this.topState() === 'brace_start' || this.topState() === 'identifier_start') {
      return require('./util').parseKeyword.call(this, this.match);
    }
    {
      const utils = require('./util');
      const { ch } = utils.lookAhead(this.matches.input, this.matches.index + this.match.length, false, false);

      if (utils.isWhiteSpace(ch) || utils.isLineTerminator(ch) || ch === ':') {
        this.begin('case_start');
        return require('./util').parseKeyword.call(this, this.match);
      } else {
        return require('./util').parseKeyword.call(this, this.match);
      }
    }
  `,
};

const Var = {
  conditions: ['*'],
  rule: 'var',
  handler: `
    return require('./util').parseKeyword.call(this, this.match);
  `,
};

const This = {
  conditions: ['*'],
  rule: 'this',
  handler: `
    return require('./util').parseKeyword.call(this, this.match, 'this');
  `,
};

const If = {
  conditions: ['*'],
  rule: 'if',
  handler: `
    return require('./util').parseKeyword.call(this, this.match);
  `,
};

const Else = {
  conditions: ['*'],
  rule: 'else',
  handler: `
    return require('./util').parseKeyword.call(this, this.match);
  `,
};

const Do = {
  conditions: ['*'],
  rule: 'do',
  handler: `
    return require('./util').parseKeyword.call(this, this.match);
  `,
};

const While = {
  conditions: ['*'],
  rule: 'while',
  handler: `
    return require('./util').parseKeyword.call(this, this.match);
  `,
};

const ContinueLf = {
  conditions: ['*'],
  rule: 'continue[\\u0009|\\u0020]*[\\u000A]',
  handler: `
    return require('./util').parseKeyword.call(this, this.match, 'CONTINUE_LF');
  `,
};

const Continue = {
  conditions: ['*'],
  rule: 'continue',
  handler: `
    return require('./util').parseKeyword.call(this, this.match);
  `,
};

const BreakLf = {
  conditions: ['*'],
  rule: 'break[\\u0009|\\u0020]*[\\u000A]',
  handler: `
    return require('./util').parseKeyword.call(this, this.match, 'BREAK_LF');
  `,
};

const Break = {
  conditions: ['*'],
  rule: 'break',
  handler: `
    return require('./util').parseKeyword.call(this, this.match);
  `,
};

const ThrowLf = {
  conditions: ['*'],
  rule: 'throw[\\u0009|\\u0020]*[\\u000A]',
  handler: `
    return require('./util').parseKeyword.call(this, this.match, 'THROW_LF');
  `,
};

const Throw = {
  conditions: ['*'],
  rule: 'throw',
  handler: `
    return require('./util').parseKeyword.call(this, this.match);
  `,
};

const With = {
  conditions: ['*'],
  rule: 'with',
  handler: `
    return require('./util').parseKeyword.call(this, this.match);
  `,
};

const ReturnLf = {
  conditions: ['*'],
  rule: 'return[\\u0009|\\u0020]*[\\u000A]',
  handler: `
    return require('./util').parseKeyword.call(this, this.match, 'RETURN_LF');
  `,
};

const Return = {
  conditions: ['*'],
  rule: 'return',
  handler: `
    return require('./util').parseKeyword.call(this, this.match);
  `,
};

const Debugger = {
  conditions: ['*'],
  rule: 'debugger',
  handler: `
    return require('./util').parseKeyword.call(this, this.match);
  `,
};

const Try = {
  conditions: ['*'],
  rule: 'try',
  handler: `
    return require('./util').parseKeyword.call(this, this.match);
  `,
};

const Catch = {
  conditions: ['*'],
  rule: 'catch',
  handler: `
    return require('./util').parseKeyword.call(this, this.match);
  `,
};

const Finally = {
  conditions: ['*'],
  rule: 'finally',
  handler: `
    return require('./util').parseKeyword.call(this, this.match);
  `,
};

exports.Instanceof = {
  conditions: ['*'],
  rule: 'instanceof',
  handler: `
    return require('./util').parseKeyword.call(this, this.match, 'RelationalOperator');
  `,
};

exports.Delete = {
  conditions: ['*'],
  rule: 'delete',
  handler: `
    return require('./util').parseKeyword.call(this, this.match, 'UnaryOperator');
  `,
};

exports.Typeof = {
  conditions: ['*'],
  rule: 'typeof',
  handler: `
    return require('./util').parseKeyword.call(this, this.match, 'UnaryOperator');
  `,
};

exports.Void = {
  conditions: ['*'],
  rule: 'void',
  handler: `
    return require('./util').parseKeyword.call(this, this.match, 'UnaryOperator');
  `,
};

const newTargetStart = {
  conditions: ['*'],
  rule: 'new(?=\\s*[.]\\s*target)',
  handler: `
    this.begin('new_target');
    return require('./util').parseKeyword.call(this, this.match);
  `,
};

const newProperty = {
  conditions: ['new_target'],
  rule: '\\.',
  handler: `
    return '.';
  `,
};

const newTarget = {
  conditions: ['new_target'],
  rule: 'target',
  handler: `
    this.popState();
    return 'target';
  `,
};

exports.New = [
  newTargetStart,
  newProperty,
  newTarget,
  {
    conditions: ['*'],
    rule: 'new',
    handler: `
      return require('./util').parseKeyword.call(this, this.match);
    `,
  },
];

exports.Of = {
  conditions: ['*'],
  rule: 'of',
  handler: `
    return require('./util').parseKeyword.call(this, this.match);
  `,
};

exports.In = {
  conditions: ['*'],
  rule: 'in',
  handler: `
    return require('./util').parseKeyword.call(this, this.match);
  `,
};

exports.keywords = [
  True, False,
  This, Null,
  Let, Const, Var,
  For, If, Else, Do, While,
  ContinueLf, BreakLf,
  Continue, Break,
  FunctionExpression, FunctionStatement,
  Switch, Case, Default,
  With,
  ThrowLf,
  Try, Catch, Finally, Throw,
  Debugger,
  ReturnLf,
  Return,
];
