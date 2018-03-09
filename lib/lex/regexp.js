'use strict';

var RegexpEnd = {
  conditions: ['regexp_start'],
  rule: '/',
  handler: '\n    return require(\'./util\').parseRegexpCharacters.call(this, this.match);\n  '
};

var RegexForwardSlash = {
  conditions: ['regexp_backslash_start'],
  rule: '/',
  handler: '\n    this.popState();\n    return \'RegularExpressionNonTerminator\';\n    // return require(\'./util\').parseRegexpCharacters.call(this, this.match);\n  '
};

var RegexpStart = {
  conditions: ['*'],
  rule: '/',
  handler: '\n    if (require(\'./util\').isDivAhead.call(this, this.topState())) {\n      this.popState();\n      return \'MultiplicativeOperator\';\n    } else {\n      if (this.topState() === \'template_string_start\') {\n        return \'TemplateChar\';\n      }\n      if (this.topState() === \'regexp_backslash_start\') {\n        this.popState();\n        return \'RegularExpressionNonTerminator\';\n      }\n      if (this.topState() === \'regexp_class_start\') {\n        return \'RegularExpressionNonTerminator\';\n      }\n      if (this.topState() === \'single_line_comment_start\') {\n        require(\'./lex/comment\').onComment(yy, this.match);\n        return \'\';\n      }\n      this.begin(\'regexp_start\');\n      return \'LEFT_REGEXP_DIV\';\n    }\n  '
};

var RegexpNoTerminatorCharacter = {
  conditions: ['regexp_start', 'regexp_class_start', 'regexp_backslash_start', 'regexp_flag_start'],
  rule: '.',
  handler: '\n    return require(\'./util\').parseRegexpCharacters.call(this, this.match);\n  '
};

exports.regexp = [RegexpEnd, RegexpStart, RegexpNoTerminatorCharacter];

exports.RegexForwardSlash = RegexForwardSlash;
exports.RegexpEnd = RegexpEnd;
exports.RegexpStart = RegexpStart;
exports.RegexpNoTerminatorCharacter = RegexpNoTerminatorCharacter;