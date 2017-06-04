var assert = require('assert');
const parser = require('../src/index');
const { createFileHelper } = require('../src/test/helpers');
describe('expression', function() {
  let ast = null;

  before(function(done) {
    const fileHelper = createFileHelper('./mock/expression.js');
    fileHelper.readFileAsync((err, data) => {
      ast = parser.parse(data);
      done();
    })
  });

  describe('function expression', function() {
    it('(function () {})', function(done) {
      assert.equal('CoverParenthesizedExpression', ast.body[0].expression.type);
      assert.equal('FunctionExpression', ast.body[0].expression.expressions[0].type);
      assert.equal(0, ast.body[0].expression.expressions[0].params.length);
      assert.equal('BlockStatement', ast.body[0].expression.expressions[0].body.type);
      done();
    });

    it('var a = function 你好(){}', function(done) {
      assert.equal('VariableDeclarator', ast.body[1].declarations[0].type);
      assert.equal('a', ast.body[1].declarations[0].id.name);
      assert.equal('FunctionExpression', ast.body[1].declarations[0].init.type);
      assert.equal('你好', ast.body[1].declarations[0].init.id.name);
      done();
    });

    it('(function foo(a,b_,c){}(a1,b1,c3))', function(done) {
      assert.equal('CoverParenthesizedExpression', ast.body[2].expression.type);
      assert.equal('CallExpression', ast.body[2].expression.expressions[0].type);
      assert.equal('FunctionExpression', ast.body[2].expression.expressions[0].callee.type);
      assert.equal('foo', ast.body[2].expression.expressions[0].callee.id.name);
      assert.equal(3, ast.body[2].expression.expressions[0].callee.params.length);
      done();
    });
  });

  describe('primary expression', function() {
    it('this', function(done) {
      assert.equal('ThisExpression', ast.body[3].expression.type);
      done();
    });
  });

  describe('assignment expression', function() {
    it('a = 1.2', function(done) {
      assert.equal('AssignmentExpression', ast.body[4].expression.type);
      assert.equal('a', ast.body[4].expression.left.name);
      assert.equal(1.2, ast.body[4].expression.right.value);
      done();
    });

    it('a = b', function(done) {
      assert.equal('AssignmentExpression', ast.body[5].expression.type);
      assert.equal('a', ast.body[5].expression.left.name);
      assert.equal('b', ast.body[5].expression.right.name);
      assert.equal('Identifier', ast.body[5].expression.left.type);
      assert.equal('Identifier', ast.body[5].expression.right.type);
      assert.equal('=', ast.body[5].expression.operator);
      done();
    });

    it('a += b', function(done) {
      assert.equal('AssignmentExpression', ast.body[6].expression.type);
      assert.equal('a', ast.body[6].expression.left.name);
      assert.equal('b', ast.body[6].expression.right.name);
      assert.equal('Identifier', ast.body[6].expression.left.type);
      assert.equal('Identifier', ast.body[6].expression.right.type);
      assert.equal('+=', ast.body[6].expression.operator);
      done();
    });

    describe('conditional expression', function() {
      it('a ? b : c', function(done) {
        assert.equal('ConditionalExpression', ast.body[7].expression.type);
        assert.equal('a', ast.body[7].expression.test.name);
        assert.equal('b', ast.body[7].expression.consequent.name);
        assert.equal('c', ast.body[7].expression.alternate.name);
        done();
      });
    });

    describe('udpate expression', function() {
      it('a++', function(done) {
        assert.equal('UpdateExpression', ast.body[8].expression.type);
        assert.equal('a', ast.body[8].expression.operand.name);
        assert.equal('++', ast.body[8].expression.operator);
        assert.equal(false, ast.body[8].expression.prefix);
        done();
      });

      it('--a', function(done) {
        assert.equal('UpdateExpression', ast.body[9].expression.type);
        assert.equal('a', ast.body[9].expression.operand.name);
        assert.equal('--', ast.body[9].expression.operator);
        assert.equal(true, ast.body[9].expression.prefix);
        done();
      });
    });

    describe('unary expression', function() {
      it('~a', function(done) {
        assert.equal('UnaryExpression', ast.body[10].expression.type);
        assert.equal('a', ast.body[10].expression.operand.name);
        assert.equal('~', ast.body[10].expression.operator);
        done();
      });

      it('!a', function(done) {
        assert.equal('UnaryExpression', ast.body[11].expression.type);
        assert.equal('a', ast.body[11].expression.operand.name);
        assert.equal('!', ast.body[11].expression.operator);
        done();
      });
    });

    describe('member expression', function() {
      it('abc', function(done) {
        assert.equal('Identifier', ast.body[12].expression.type);
        assert.equal('abc', ast.body[12].expression.name);
        done();
      });

      it('a[bc]', function(done) {
        assert.equal('MemberExpression', ast.body[13].expression.type);
        assert.equal('a', ast.body[13].expression.element.name);
        assert.equal('bc', ast.body[13].expression.property.name);
        done();
      });

      it('bc.a', function(done) {
        assert.equal('MemberExpression', ast.body[14].expression.type);
        assert.equal('bc', ast.body[14].expression.element.name);
        done();
      });
    });

    describe('new expression', function() {
      it('new abc()', function(done) {
        assert.equal('NewExpression', ast.body[15].expression.type);
        assert.equal('abc', ast.body[15].expression.callee.name);
        done();
      });

      it('new Abc(123, ...a, ...b)', function(done) {
        assert.equal('NewExpression', ast.body[16].expression.type);
        assert.equal('Literal', ast.body[16].expression.params[0].type);
        assert.equal('123', ast.body[16].expression.params[0].value);

        assert.equal('3', ast.body[16].expression.params.length);

        assert.equal('SpreadElement', ast.body[16].expression.params[1].type);
        assert.equal('a', ast.body[16].expression.params[1].element.name);

        assert.equal('SpreadElement', ast.body[16].expression.params[2].type);
        assert.equal('b', ast.body[16].expression.params[2].element.name);
        done();
      });
    });

    describe('call expression', function() {
      it('a()', function(done) {
        assert.equal('CallExpression', ast.body[17].expression.type);
        assert.equal('a', ast.body[17].expression.callee.name);
        done();
      });

      it('a.bc(1,2, 3, a3)', function(done) {
        assert.equal('CallExpression', ast.body[18].expression.type);
        assert.equal('MemberExpression', ast.body[18].expression.callee.type);
        // assert.equal('MemberExpression', ast.body[18].expression.callee.property);
        assert.equal('a', ast.body[18].expression.callee.element.name);
        assert.equal('4', ast.body[18].expression.params.length);
        assert.equal('2', ast.body[18].expression.params[2].value);
        assert.equal('a3', ast.body[18].expression.params[3].name);
        done();
      });

      it('new a[bc](d1);', function(done) {
        assert.equal('NewExpression', ast.body[19].expression.type);
        assert.equal('MemberExpression', ast.body[19].expression.callee.type);
        // assert.equal('MemberExpression', ast.body[19].expression.callee.property);
        assert.equal('a', ast.body[19].expression.callee.element.name);
        assert.equal(1, ast.body[19].expression.params.length);
        assert.equal('d1', ast.body[19].expression.params[0].name);
        done();
      });

    });
  });
});
