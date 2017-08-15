const BaseNode = require('./Base');

// const errorMsg =
//  'semicolon can\'t become one of the two semicolons in the header of a for statement';

// TODO: now check forstatement's range, but forstatement may contain function
// need to check if autoInsertionOffset === forstatement's semicolon offset
function checkForAutoSemicolonInsertion(
  /* yy, leftParenthesisRange, rightParenthesisRange, loc */) {
  /* if (leftParenthesisRange && rightParenthesisRange && yy.autoInsertions) {
    // semicolon can't become one of the two semicolons
    // in the header of a for statement

    for (let i = 0; i < yy.autoInsertions.length; i++) {
      const autoInsertionOffset = yy.autoInsertions[i];

      // if (autoInsertionOffset > leftParenthesisRange[0]
      //   && autoInsertionOffset < rightParenthesisRange[1]) {
      //     throw new (require('../error').ParseError)(errorMsg,
      //       { text: ';', token: ';', line: loc.first_line, loc, failedAutoSemicolon: true });
      // }
    }
  } */
}

function IterationStatementNode(type, test, body, ...args) {
  BaseNode.call(this, Object.assign({}, { type }, ...args));
  this.test = test;
  this.body = body;
}

function WhileStatementNode(test, body, ...args) {
  IterationStatementNode.call(this, 'WhileStatement', test, body, ...args);
}

function DoWhileStatementNode(test, body, ...args) {
  IterationStatementNode.call(this, 'DoWhileStatement', test, body, ...args);
}

function ForStatementNode(init, test, update, body, ...args) {
  IterationStatementNode.call(this, 'ForStatement', test, body, ...args);
  this.init = init;
  this.update = update;
}

function ForInStatementNode(left, right, body, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'ForInStatement' }, ...args));
  this.left = left;
  this.right = right;
  this.body = body;
}

function ForOfStatementNode(left, right, body, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'ForOfStatement' }, ...args));
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
