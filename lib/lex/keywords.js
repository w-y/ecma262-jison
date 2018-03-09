'use strict';

var True = {
  conditions: ['*'],
  rule: 'true',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match, \'BooleanLiteral\');\n  '
};

var False = {
  conditions: ['*'],
  rule: 'false',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match, \'BooleanLiteral\');\n  '
};

var Null = {
  conditions: ['*'],
  rule: 'null',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match, \'NullLiteral\');\n  '
};

var Let = {
  conditions: ['*'],
  rule: 'let',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match, \'LetOrConst\');\n  '
};

var Const = {
  conditions: ['*'],
  rule: 'const',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match, \'LetOrConst\');\n  '
};

var For = {
  conditions: ['*'],
  rule: 'for',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match);\n  '
};

var FunctionExpression = {
  conditions: ['function_start'],
  rule: 'function',
  handler: '\n    this.popState();\n    this.begin(\'function_parentheses_start\');\n    return require(\'./util\').parseKeyword.call(this, this.match);\n  '
};

var FunctionStatement = {
  conditions: ['*'],
  rule: 'function',
  handler: '\n    this.begin(\'function_parentheses_start\');\n    return require(\'./util\').parseKeyword.call(this, this.match, \'FUNCTION\');\n  '
};

var Switch = {
  conditions: ['*'],
  rule: 'switch',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match);\n  '
};

var Case = {
  conditions: ['*'],
  rule: 'case',
  handler: '\n    return require(\'./util\').parseCaseDefault.call(this, this.match);\n  '
};

var Default = {
  conditions: ['*'],
  rule: 'default',
  handler: '\n    return require(\'./util\').parseCaseDefault.call(this, this.match);\n  '
};

var Var = {
  conditions: ['*'],
  rule: 'var',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match);\n  '
};

var This = {
  conditions: ['*'],
  rule: 'this',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match, \'this\');\n  '
};

var If = {
  conditions: ['*'],
  rule: 'if',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match);\n  '
};

var Else = {
  conditions: ['*'],
  rule: 'else',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match);\n  '
};

var Do = {
  conditions: ['*'],
  rule: 'do',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match);\n  '
};

var While = {
  conditions: ['*'],
  rule: 'while',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match);\n  '
};

var ContinueLf = {
  conditions: ['*'],
  rule: 'continue[\\u0009|\\u0020]*[\\u000A]',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match, \'CONTINUE_LF\');\n  '
};

var Continue = {
  conditions: ['*'],
  rule: 'continue',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match);\n  '
};

var BreakLf = {
  conditions: ['*'],
  rule: 'break[\\u0009|\\u0020]*[\\u000A]',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match, \'BREAK_LF\');\n  '
};

var Break = {
  conditions: ['*'],
  rule: 'break',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match);\n  '
};

var ThrowLf = {
  conditions: ['*'],
  rule: 'throw[\\u0009|\\u0020]*[\\u000A]',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match, \'THROW_LF\');\n  '
};

var Throw = {
  conditions: ['*'],
  rule: 'throw',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match);\n  '
};

var With = {
  conditions: ['*'],
  rule: 'with',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match);\n  '
};

var ReturnLf = {
  conditions: ['*'],
  rule: 'return[\\u0009|\\u0020]*[\\u000A]',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match, \'RETURN_LF\');\n  '
};

var Return = {
  conditions: ['*'],
  rule: 'return',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match);\n  '
};

var Debugger = {
  conditions: ['*'],
  rule: 'debugger',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match);\n  '
};

var Try = {
  conditions: ['*'],
  rule: 'try',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match);\n  '
};

var Catch = {
  conditions: ['*'],
  rule: 'catch',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match);\n  '
};

var Finally = {
  conditions: ['*'],
  rule: 'finally',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match);\n  '
};

exports.Instanceof = {
  conditions: ['*'],
  rule: 'instanceof',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match, \'RelationalOperator\');\n  '
};

exports.Delete = {
  conditions: ['*'],
  rule: 'delete',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match, \'UnaryOperator\');\n  '
};

exports.Typeof = {
  conditions: ['*'],
  rule: 'typeof',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match, \'UnaryOperator\');\n  '
};

exports.Void = {
  conditions: ['*'],
  rule: 'void',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match, \'UnaryOperator\');\n  '
};

var newTargetStart = {
  conditions: ['*'],
  rule: 'new(?=\\s*[.]\\s*target)',
  handler: '\n    this.begin(\'new_target\');\n    return require(\'./util\').parseKeyword.call(this, this.match);\n  '
};

var newProperty = {
  conditions: ['new_target'],
  rule: '\\.',
  handler: '\n    return \'.\';\n  '
};

var newTarget = {
  conditions: ['new_target'],
  rule: 'target',
  handler: '\n    this.popState();\n    return \'target\';\n  '
};

exports.New = [newTargetStart, newProperty, newTarget, {
  conditions: ['*'],
  rule: 'new',
  handler: '\n      return require(\'./util\').parseKeyword.call(this, this.match);\n    '
}];

exports.Of = {
  conditions: ['*'],
  rule: 'of',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match);\n  '
};

exports.In = {
  conditions: ['*'],
  rule: 'in',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match);\n  '
};

var ClassExpression = {
  conditions: ['class_start'],
  rule: 'class',
  handler: '\n    this.popState();\n    return require(\'./util\').parseKeyword.call(this, this.match);\n  '
};

var ClassDeclaration = {
  conditions: ['*'],
  rule: 'class',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match, \'CLASS\');\n  '
};

var Extends = {
  conditions: ['*'],
  rule: 'extends',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match);\n  '
};

var Static = {
  conditions: ['*'],
  rule: 'static',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match);\n  '
};

// method definition
exports.Set = {
  conditions: ['*'],
  rule: 'set',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match);\n  '
};

// method definition
exports.Get = {
  conditions: ['*'],
  rule: 'get',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match);\n  '
};

exports.From = {
  conditions: ['*'],
  rule: 'from',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match);\n  '
};

exports.As = {
  conditions: ['*'],
  rule: 'as',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match);\n  '
};

var Import = {
  conditions: ['*'],
  rule: 'import',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match);\n  '
};

var Export = {
  conditions: ['*'],
  rule: 'export',
  handler: '\n    return require(\'./util\').parseKeyword.call(this, this.match);\n  '
};

exports.keywords = [True, False, This, Null, Let, Const, Var, For, If, Else, Do, While, ContinueLf, BreakLf, Continue, Break, FunctionExpression, FunctionStatement, Switch, Case, Default, With, ThrowLf, Try, Catch, Finally, Throw, Debugger, ReturnLf, Return, ClassExpression, ClassDeclaration, Extends, Static, Import, Export];