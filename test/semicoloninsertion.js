var assert = require('assert');
const parser = require('../src/index');

// NOTICE:
// reference link: http://www.ecma-international.org/ecma-262/7.0/index.html#sec-automatic-semicolon-insertion

describe('automatic semicolon insertion', function() {
  describe('rules of automatic semicolon insertion', function() {
    it(`{ 1 2 } 3`, function(done) {
      try {
        const ast = parser.parse('{ 1 2 } 3');
        assert.equal(true, false);
      } catch(ex) {
        assert.equal(true, ex instanceof Error);
      }
      done();
    });

    it(`{ 1\n2 } 3\n => { 1\n;2 ;} 3;`, function(done) {
      const ast = parser.parse('{ 1\n2 } 3\n');

      assert.equal('BlockStatement', ast.body[0].type);
      assert.equal('ExpressionStatement', ast.body[0].body[0].type);
      assert.equal('Literal', ast.body[0].body[0].expression.type);
      assert.equal(1, ast.body[0].body[0].expression.value);
      assert.equal(2, ast.body[0].body[1].expression.value);
      assert.equal('ExpressionStatement', ast.body[1].type);
      assert.equal(3, ast.body[1].expression.value);


      assert.equal(2, ast.body[0].body[0].range[0]);
      assert.equal(3, ast.body[0].body[0].range[1]);

      assert.equal(2, ast.body[0].body[0].expression.range[0]);
      assert.equal(3, ast.body[0].body[0].expression.range[1]);


      assert.equal(4, ast.body[0].body[1].range[0]);
      assert.equal(6, ast.body[0].body[1].range[1]);

      assert.equal(4, ast.body[0].body[1].expression.range[0]);
      assert.equal(5, ast.body[0].body[1].expression.range[1]);

      assert.equal(8, ast.body[1].expression.range[0]);
      assert.equal(9, ast.body[1].expression.range[1]);
      assert.equal(8, ast.body[1].range[0]);
      assert.equal(9, ast.body[1].range[1]);
      done();
    });

    it(`for (a; b\n)`, function(done) {
      try {
        const ast = parser.parse('for (a; b\n)');
        assert.equal(true, false);
      } catch(ex) {
        assert.equal(true, ex instanceof Error);
      }
      done();
    });

    it('no LineTerminator here', function(done) {
      const ast = parser.parse('function foo() {\n  return\n  a + b\n}');
      assert.equal('FunctionDeclaration', ast.body[0].type);

      assert.equal(0, ast.body[0].range[0]);
      assert.equal(35, ast.body[0].range[1]);

      assert.equal('foo', ast.body[0].id.name);
      assert.equal(9, ast.body[0].id.range[0]);
      assert.equal(12, ast.body[0].id.range[1]);

      assert.equal(0, ast.body[0].params.length);
      assert.equal(2, ast.body[0].body.length);

      assert.equal(19, ast.body[0].body[0].range[0]);
      assert.equal(25, ast.body[0].body[0].range[1]);
      assert.equal('ReturnStatement', ast.body[0].body[0].type);
      assert.equal(null, ast.body[0].body[0].params);

      assert.equal(28, ast.body[0].body[1].range[0]);
      assert.equal(33, ast.body[0].body[1].range[1]);
      assert.equal('ExpressionStatement', ast.body[0].body[1].type);
      assert.equal('AdditiveExpression', ast.body[0].body[1].expression.type);
      assert.equal(28, ast.body[0].body[1].expression.range[0]);
      assert.equal(33, ast.body[0].body[1].expression.range[1]);
      assert.equal('+', ast.body[0].body[1].expression.operator);
      assert.equal(28, ast.body[0].body[1].expression.left.range[0]);
      assert.equal(29, ast.body[0].body[1].expression.left.range[1]);
      assert.equal('a', ast.body[0].body[1].expression.left.name);

      assert.equal(32, ast.body[0].body[1].expression.right.range[0]);
      assert.equal(33, ast.body[0].body[1].expression.right.range[1]);
      assert.equal('b', ast.body[0].body[1].expression.right.name);
      done();
    });

    it('LineTerminator occurs between identifier and ++.', function(done) {
      const ast = parser.parse('a = b\n++c\n');
      assert.equal('ExpressionStatement', ast.body[0].type);
      assert.equal(0, ast.body[0].range[0]);
      assert.equal(5, ast.body[0].range[1]);
      assert.equal(0, ast.body[0].expression.range[0]);
      assert.equal(5, ast.body[0].expression.range[1]);

      assert.equal('a', ast.body[0].expression.left.name);
      assert.equal(0, ast.body[0].expression.left.range[0]);
      assert.equal(1, ast.body[0].expression.left.range[1]);

      assert.equal('b', ast.body[0].expression.right.name);
      assert.equal(4, ast.body[0].expression.right.range[0]);
      assert.equal(5, ast.body[0].expression.right.range[1]);

      assert.equal('=', ast.body[0].expression.operator);

      assert.equal('ExpressionStatement', ast.body[1].type);
      assert.equal(6, ast.body[1].range[0]);
      assert.equal(9, ast.body[1].range[1]);
      assert.equal(true, ast.body[1].expression.prefix);

      assert.equal(6, ast.body[1].expression.range[0]);
      assert.equal(9, ast.body[1].expression.range[1]);

      assert.equal(8, ast.body[1].expression.operand.range[0]);
      assert.equal(9, ast.body[1].expression.operand.range[1]);

      assert.equal('++', ast.body[1].expression.operator);
      assert.equal('UpdateExpression', ast.body[1].expression.type);
      assert.equal('c', ast.body[1].expression.operand.name);

      done();
    });


    it('an automatically inserted semicolon would then be parsed as an empty statement.', function(done) {
      try {
        const ast = parser.parse('if (a > b)\nelse c = d\n');
        assert.equal(true, false);
      } catch (ex) {
        assert.equal(true, ex instanceof Error);
      }
      done();
    });

    it(`a = b + c\n(d + e).print()`, function(done) {
      const ast = parser.parse('a = b + c\n(d + e).print()\n\na\n');
      assert.equal('ExpressionStatement', ast.body[0].type);

      assert.equal(0, ast.body[0].range[0]);
      assert.equal(25, ast.body[0].range[1]);

      assert.equal('AssignmentExpression', ast.body[0].expression.type);
      assert.equal('Identifier', ast.body[0].expression.left.type);
      assert.equal('a', ast.body[0].expression.left.name);
      assert.equal('AdditiveExpression', ast.body[0].expression.right.type);
      assert.equal('+', ast.body[0].expression.right.operator);
      assert.equal('b', ast.body[0].expression.right.left.name);
      assert.equal('CallExpression', ast.body[0].expression.right.right.type);

      assert.equal('MemberExpression', ast.body[0].expression.right.right.callee.type);
      assert.equal('CallExpression', ast.body[0].expression.right.right.callee.element.type);
      assert.equal('c', ast.body[0].expression.right.right.callee.element.callee.name);
      assert.equal(1, ast.body[0].expression.right.right.callee.element.params.length);
      assert.equal('AdditiveExpression', ast.body[0].expression.right.right.callee.element.params[0].type);
      assert.equal('+', ast.body[0].expression.right.right.callee.element.params[0].operator);
      assert.equal('d', ast.body[0].expression.right.right.callee.element.params[0].left.name);
      assert.equal('e', ast.body[0].expression.right.right.callee.element.params[0].right.name);

      assert.equal('Identifier', ast.body[0].expression.right.right.callee.property.type);
      assert.equal('print', ast.body[0].expression.right.right.callee.property.name);
      done();
    });

  });
});
