var assert = require('assert');
const parser = require('../src/index');

// NOTICE:
// reference link: http://www.ecma-international.org/ecma-262/7.0/index.html#sec-automatic-semicolon-insertion

describe('automatic semicolon insertion', function() {
  describe('rules of automatic semicolon insertion', function() {
    it('{ 1 2 } 3', function(done) {
      try {
        const ast = parser.parse('{ 1 2 } 3');
        assert.equal(true, false);
      } catch(ex) {
        assert.equal(true, ex instanceof Error);
      }
      done();
    });

    it('{ 1\n2 } 3\n => { 1\n;2 ;} 3;', function(done) {
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

    it('for (a; b\n)', function(done) {
      try {
        const ast = parser.parse('for (a; b\n)');
        assert.equal(true, false);
      } catch(ex) {
        assert.equal(true, ex instanceof Error);
      }
      done();
    });

    it('no LineTerminator here', function(done) {
      const ast = parser.parse('function foo() {\n  return\n  a + b\n}\n');
      assert.equal('FunctionDeclaration', ast.body[0].type);

      console.log(JSON.stringify(ast.body[0], null, 2));

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
  });
});
