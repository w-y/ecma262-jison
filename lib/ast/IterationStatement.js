'use strict';

var BaseNode = require('./Base');

var errorMsg = 'semicolon can\'t become one of the two semicolons in the header of a for statement';

function checkForAutoSemicolonInsertion(yy, firstSemiRange, secondSemiRange) {
  if (yy.autoInsertions) {
    for (var i = 0; i < yy.autoInsertions.length; i++) {
      var autoInsertionOffset = yy.autoInsertions[i];

      if ((firstSemiRange && firstSemiRange.range[1]) === autoInsertionOffset || (secondSemiRange && secondSemiRange.range[1]) === autoInsertionOffset) {
        // check if autoInsertionOffset === for statement semicolon offset
        throw new (require('../error').InvalidASIError)(errorMsg, {
          text: yy.lexer.yytext,
          token: yy.lexer.yytext,
          line: yy.lexer.yylloc.first_line,
          loc: yy.lexer.yylloc
        });
      }
    }
  }
}

function IterationStatementNode(type, test, body) {
  for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: type }].concat(args)));
  this.test = test;
  this.body = body;
}

function WhileStatementNode(test, body) {
  for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  IterationStatementNode.call.apply(IterationStatementNode, [this, 'WhileStatement', test, body].concat(args));
}

function DoWhileStatementNode(test, body) {
  for (var _len3 = arguments.length, args = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    args[_key3 - 2] = arguments[_key3];
  }

  IterationStatementNode.call.apply(IterationStatementNode, [this, 'DoWhileStatement', test, body].concat(args));
}

function ForStatementNode(init, test, update, body) {
  for (var _len4 = arguments.length, args = Array(_len4 > 4 ? _len4 - 4 : 0), _key4 = 4; _key4 < _len4; _key4++) {
    args[_key4 - 4] = arguments[_key4];
  }

  IterationStatementNode.call.apply(IterationStatementNode, [this, 'ForStatement', test, body].concat(args));
  this.init = init;
  this.update = update;
}

function ForInStatementNode(left, right, body) {
  for (var _len5 = arguments.length, args = Array(_len5 > 3 ? _len5 - 3 : 0), _key5 = 3; _key5 < _len5; _key5++) {
    args[_key5 - 3] = arguments[_key5];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'ForInStatement' }].concat(args)));
  this.left = left;
  this.right = right;
  this.body = body;
}

function ForOfStatementNode(left, right, body) {
  for (var _len6 = arguments.length, args = Array(_len6 > 3 ? _len6 - 3 : 0), _key6 = 3; _key6 < _len6; _key6++) {
    args[_key6 - 3] = arguments[_key6];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'ForOfStatement' }].concat(args)));
  this.left = left;
  this.right = right;
  this.body = body;
}

exports.WhileStatementNode = WhileStatementNode;

exports.DoWhileStatementNode = DoWhileStatementNode;

exports.ForStatementNode = ForStatementNode;

exports.ForInStatementNode = ForInStatementNode;

exports.ForOfStatementNode = ForOfStatementNode;

exports.checkForAutoSemicolonInsertion = checkForAutoSemicolonInsertion;