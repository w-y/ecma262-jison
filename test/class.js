var assert = require('assert');
const parser = require('../src/index');

const { createFileHelper } = require('../src/test/helpers');

describe('class', function() {
  let ast = null;

  before(function(done) {
    const fileHelper = createFileHelper('./mock/class.js');
    fileHelper.readFileAsync((err, data) => {
      ast = parser.parse(data);
      done();
    })
  });

  describe('class declaration and expression', function() {
    it('simple declaration', function(done) {
      assert.equal('ClassDeclaration', ast.body[0].type);
      assert.equal(0, ast.body[0].body.body.length, null, 2);
      assert.equal('Identifier', ast.body[0].id.type);
      assert.equal('Base', ast.body[0].id.name);
      assert.equal(null, ast.body[0].supperClass);
      done();
    });

    it('class heritage', function(done) {
      assert.equal('ClassDeclaration', ast.body[1].type);
      assert.equal('Identifier', ast.body[1].superClass.type);
      assert.equal('Base', ast.body[1].superClass.name);

      assert.equal(2, ast.body[1].body.body.length);

      assert.equal('MethodDefinition', ast.body[1].body.body[0].type);
      assert.equal('foo', ast.body[1].body.body[0].key.name);
      assert.equal('FunctionExpression', ast.body[1].body.body[0].value.type);
      assert.equal(0, ast.body[1].body.body[0].value.params.length);
      assert.equal('BlockStatement', ast.body[1].body.body[0].value.body.type);

      assert.equal(0, ast.body[1].body.body[0].value.body.body.length);

      assert.equal('MethodDefinition', ast.body[1].body.body[1].type);
      assert.equal('fun', ast.body[1].body.body[1].key.name);
      assert.equal('FunctionExpression', ast.body[1].body.body[1].value.type);

      assert.equal('a', ast.body[1].body.body[1].value.params[0].key.name);
      assert.equal('b', ast.body[1].body.body[1].value.params[1].key.name);
      assert.equal('c', ast.body[1].body.body[1].value.params[2].key.name);

      assert.equal(1, ast.body[1].body.body[1].value.body.length);
      assert.equal('EmptyStatement', ast.body[1].body.body[1].value.body[0].type);

      done();
    });
  });

  it('class expression', function(done) {
    assert.equal('ExpressionStatement', ast.body[2].type);

    assert.equal('AssignmentExpression', ast.body[2].expression.type);
    assert.equal('=', ast.body[2].expression.operator);

    assert.equal('Identifier', ast.body[2].expression.left.type);
    assert.equal('Comp', ast.body[2].expression.left.name);

    assert.equal('ClassExpression', ast.body[2].expression.right.type);
    assert.equal('C', ast.body[2].expression.right.id.name);

    assert.equal('MethodDefinition', ast.body[2].expression.right.body.body[0].type);
    assert.equal('$', ast.body[2].expression.right.body.body[0].key.name);
    assert.equal('FunctionExpression', ast.body[2].expression.right.body.body[0].value.type);
    assert.equal(0, ast.body[2].expression.right.body.body[0].value.params.length);
    assert.equal('ReturnStatement', ast.body[2].expression.right.body.body[0].value.body[0].type);
    assert.equal('e', ast.body[2].expression.right.body.body[0].value.body[0].params.name);
    assert.equal(true, ast.body[2].expression.right.body.body[0].static);


    assert.equal('MethodDefinition', ast.body[2].expression.right.body.body[1].type);
    assert.equal('a', ast.body[2].expression.right.body.body[1].key.name);
    assert.equal('FunctionExpression', ast.body[2].expression.right.body.body[1].value.type);
    assert.equal(0, ast.body[2].expression.right.body.body[1].value.params.length);
    assert.equal('EmptyStatement', ast.body[2].expression.right.body.body[1].value.body[0].type);
    assert.equal(false, ast.body[2].expression.right.body.body[1].static);
    assert.equal('get', ast.body[2].expression.right.body.body[1].kind);


    assert.equal('MethodDefinition', ast.body[2].expression.right.body.body[3].type);
    assert.equal('b', ast.body[2].expression.right.body.body[3].key.name);
    assert.equal('FunctionExpression', ast.body[2].expression.right.body.body[3].value.type);
    assert.equal(1, ast.body[2].expression.right.body.body[3].value.params.length);

    assert.equal('BlockStatement', ast.body[2].expression.right.body.body[3].value.body.type);
    assert.equal(false, ast.body[2].expression.right.body.body[3].static);
    assert.equal('set', ast.body[2].expression.right.body.body[3].kind);

    done();
  });

});
