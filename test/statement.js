var assert = require('assert');
const parser = require('../src/index');
const { createFileHelper } = require('../src/test/helpers');

describe('expression', function() {
  let ast = null;

  before(function(done) {
    const fileHelper = createFileHelper('./mock/statement.js');
    fileHelper.readFileAsync((err, data) => {
      ast = parser.parse(data);
      done();
    });
  });

  describe('block statement', function() {
    it('{}', function(done) {
      assert.equal('BlockStatement', ast.body[0].type);
      assert.equal(0, ast.body[0].body.length);
      done();
    });

    it('{;}', function(done) {
      assert.equal('BlockStatement', ast.body[1].type);
      assert.equal(1, ast.body[1].body.length);
      assert.equal('EmptyStatement', ast.body[1].body[0].type);
      done();
    });

    it('{ a: 1; }', function(done) {
      assert.equal('BlockStatement', ast.body[2].type);
      assert.equal(1, ast.body[2].body.length);
      assert.equal('LabelledStatement', ast.body[2].body[0].type);
      assert.equal('a', ast.body[2].body[0].label.name);
      assert.equal('Literal', ast.body[2].body[0].body.expression.type);
      assert.equal(1, ast.body[2].body[0].body.expression.value);
      done();
    });

    it('{ a: 1 }', function(done) {
      assert.equal('BlockStatement', ast.body[3].type);
      assert.equal(1, ast.body[3].body.length);
      assert.equal('LabelledStatement', ast.body[3].body[0].type);
      assert.equal('a', ast.body[3].body[0].label.name);
      assert.equal('Literal', ast.body[3].body[0].body.expression.type);
      assert.equal(1, ast.body[3].body[0].body.expression.value);
      done();
    });

    it('multiple statements', function(done) {
      assert.equal('BlockStatement', ast.body[4].type);
      assert.equal(2, ast.body[4].body.length);

      assert.equal('VariableStatement', ast.body[4].body[0].type);
      assert.equal(1, ast.body[4].body[0].declarations.length);
      assert.equal('a', ast.body[4].body[0].declarations[0].id.name);
      assert.equal(100, ast.body[4].body[0].declarations[0].init.value);

      assert.equal('LexicalDeclaration', ast.body[4].body[1].type);
      assert.equal(2, ast.body[4].body[1].declarations.length);
      assert.equal('c', ast.body[4].body[1].declarations[0].id.name);
      assert.equal(null, ast.body[4].body[1].declarations[0].init);
      assert.equal('d', ast.body[4].body[1].declarations[1].id.name);
      assert.equal(1, ast.body[4].body[1].declarations[1].init.value);
      done();
    });

    it('if statement', function(done) {
      assert.equal('IfStatement', ast.body[5].type);
      assert.equal('a', ast.body[5].test.name);
      assert.equal('BlockStatement', ast.body[5].consequent.type);
      assert.equal(0, ast.body[5].consequent.body.length);

      assert.equal('IfStatement', ast.body[6].type);
      assert.equal(true, ast.body[6].test.value);
      assert.equal('BlockStatement', ast.body[6].consequent.type);
      assert.equal(0, ast.body[6].consequent.body.length);

      assert.equal('IfStatement', ast.body[7].type);
      assert.equal('exp', ast.body[7].test.name);
      assert.equal('BlockStatement', ast.body[7].consequent.type);
      assert.equal('BlockStatement', ast.body[7].alternate.type);
      assert.equal(1, ast.body[7].alternate.body.length);
      assert.equal('ExpressionStatement', ast.body[7].alternate.body[0].type);
      assert.equal('CallExpression', ast.body[7].alternate.body[0].expression.type);
      assert.equal('MemberExpression', ast.body[7].alternate.body[0].expression.callee.type);
      assert.equal('console', ast.body[7].alternate.body[0].expression.callee.element.name);
      assert.equal('log', ast.body[7].alternate.body[0].expression.callee.property.name);
      assert.equal(1, ast.body[7].alternate.body[0].expression.params.length);
      assert.equal('hello', ast.body[7].alternate.body[0].expression.params[0].value);

      assert.equal('IfStatement', ast.body[8].type);
      assert.equal('a', ast.body[8].test.name);

      assert.equal('BlockStatement', ast.body[8].consequent.type);
      assert.equal(0, ast.body[8].consequent.body.length);

      assert.equal('IfStatement', ast.body[8].alternate.type);
      assert.equal('b', ast.body[8].alternate.test.name);

      assert.equal('BlockStatement', ast.body[8].alternate.consequent.type);
      assert.equal(0, ast.body[8].alternate.consequent.body.length);

      assert.equal('BlockStatement', ast.body[8].alternate.alternate.type);
      assert.equal(1, ast.body[8].alternate.alternate.body.length);
      assert.equal('EmptyStatement', ast.body[8].alternate.alternate.body[0].type);
      done();
    });

    it('while statement', function(done) {
      assert.equal('DoWhileStatement', ast.body[9].type);
      assert.equal('exp', ast.body[9].test.name);
      assert.equal('BlockStatement', ast.body[9].body.type);
      assert.equal(1, ast.body[9].body.body.length);
      assert.equal('EmptyStatement', ast.body[9].body.body[0].type);

      assert.equal('WhileStatement', ast.body[10].type);
      assert.equal('RelationalExpression', ast.body[10].test.type);
      assert.equal('<', ast.body[10].test.operator);
      assert.equal('i', ast.body[10].test.left.name);
      assert.equal(100, ast.body[10].test.right.value);
      assert.equal(1, ast.body[10].body.body.length);
      assert.equal('ExpressionStatement', ast.body[10].body.body[0].type);
      assert.equal('UpdateExpression', ast.body[10].body.body[0].expression.type);

      done();
    });

    it('for statement', function(done) {
      assert.equal('ForStatement', ast.body[11].type);
      assert.equal('LexicalDeclaration', ast.body[11].init.type);
      assert.equal('a', ast.body[11].init.declarations[0].id.name);
      assert.equal(1, ast.body[11].init.declarations[0].init.value);
      assert.equal('RelationalExpression', ast.body[11].test.type);
      assert.equal('<', ast.body[11].test.operator);
      assert.equal('a', ast.body[11].test.left.name);
      assert.equal(10, ast.body[11].test.right.value);
      assert.equal('UpdateExpression', ast.body[11].update.type);
      assert.equal('++', ast.body[11].update.operator);
      assert.equal('i', ast.body[11].update.operand.name);
      assert.equal(false, ast.body[11].update.prefix);

      assert.equal('ForStatement', ast.body[12].type);
      assert.equal('VariableDeclarator', JSON.stringify(ast.body[12].init));
      assert.equal('i', ast.body[12].init.declarations[0].id.name);
      assert.equal(100, ast.body[12].init.declarations[0].init.value);
      assert.equal('RelationalExpression', ast.body[12].test.type);
      assert.equal('>=', ast.body[12].test.operator);
      assert.equal('i', ast.body[12].test.left.name);
      assert.equal(0, ast.body[12].test.right.value);
      assert.equal('UpdateExpression', ast.body[12].update.type);
      assert.equal('--', ast.body[12].update.operator);
      assert.equal('i', ast.body[12].update.operand.name);
      assert.equal(true, ast.body[12].update.prefix);

      done();
    });

  });
});
