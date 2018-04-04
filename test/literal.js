var assert = require('assert');
const parser = require('../src/index');

const { createFileHelper } = require('../src/test/helpers');

describe('literal', function() {
  let ast = null;

  before(function(done) {
    const fileHelper = createFileHelper('./mock/literal.js');
    fileHelper.readFileAsync((err, data) => {
      ast = parser.parse(data);
      done();
    })
  });

  describe('null', function() {
    it('should return Literal with value null', function(done) {
      assert.equal('Literal', ast.body[0].expression.type);
      assert.equal('null', ast.body[0].expression.value);
      done();
    });
  });

  describe('true', function() {
    it('should return Literal with value ture', function(done) {
      assert.equal('Literal', ast.body[1].expression.type);
      assert.equal(true, ast.body[1].expression.value);
      done();
    });
  });

  describe('false', function() {
    it('should return Literal with value false', function(done) {
      assert.equal('Literal', ast.body[2].expression.type);
      assert.equal(false, ast.body[2].expression.value);
      done();
    });
  });

  describe('empty string', function() {
    it('should return Literal with value \'\'', function(done) {
      assert.equal('Literal', ast.body[3].expression.type);
      assert.equal('', ast.body[3].expression.value);
      done();
    });
  });

  describe('single-quoted string', function() {
    it('should return Literal with value \'this\'', function(done) {
      assert.equal('Literal', ast.body[4].expression.type);
      assert.equal('this', ast.body[4].expression.value);
      done();
    });
  });

  describe('empty string', function() {
    it('should return Literal with value \'\'', function(done) {
      assert.equal('Literal', ast.body[5].expression.type);
      assert.equal('', ast.body[5].expression.value);
      done();
    });
  });

  describe('double-quoted string', function() {
    it('should return Literal with value "this"', function(done) {
      assert.equal('Literal', ast.body[6].expression.type);
      assert.equal('this', ast.body[6].expression.value);
      done();
    });
  });

  describe('single-quoted string with escaped', function() {
    it('should return Literal with value \'\\100abc\'', function(done) {
      assert.equal('Literal', ast.body[7].expression.type);
      assert.equal('\\100abc', ast.body[7].expression.value);
      done();
    });
  });

  describe('single-quoted string with escaped unicode start', function() {
    it('\'\\u0056abc\' => Vabc', function(done) {
      assert.equal('Literal', ast.body[8].expression.type);
      assert.equal('Vabc', ast.body[8].expression.value);
      done();
    });
  });

  describe('single-quoted string with escaped unicode continue', function() {
    it('\'abc\\u0056\' => abcV', function(done) {
      assert.equal('Literal', ast.body[9].expression.type);
      assert.equal('abcV', ast.body[9].expression.value);
      done();
    });
  });

  describe('single-quoted string with escaped continue', function() {
    it('\'abc\\99\' => abc\\99', function(done) {
      assert.equal('Literal', ast.body[10].expression.type);
      assert.equal('abc\\99', ast.body[10].expression.value);
      done();
    });
  });

  describe('single-quoted string with escaped continue', function() {
    it('\'abc\\x\' => abc\\x', function(done) {
      assert.equal('Literal', ast.body[11].expression.type);
      assert.equal('abc\\x', ast.body[11].expression.value);
      done();
    });
  });

  describe('double-quoted string with escaped', function() {
    it('"\\100" => \\100', function(done) {
      assert.equal('Literal', ast.body[12].expression.type);
      assert.equal('\\100', ast.body[12].expression.value);
      done();
    });
  });

  describe('double-quoted single quote', function() {
    it('"\'" => \'', function(done) {
      assert.equal('Literal', ast.body[13].expression.type);
      assert.equal('\'', ast.body[13].expression.value);
      done();
    });
  });

  describe('decimal number', function() {
    it('1.23', function(done) {
      assert.equal('Literal', ast.body[14].expression.type);
      assert.equal(1.23, ast.body[14].expression.value);
      done();
    });

    it('2.02232', function(done) {
      assert.equal('Literal', ast.body[15].expression.type);
      assert.equal(2.02232, ast.body[15].expression.value);
      done();
    });

    it('0.99', function(done) {
      assert.equal('Literal', ast.body[16].expression.type);
      assert.equal(0.99, ast.body[16].expression.value);
      done();
    });

    it('.123', function(done) {
      assert.equal('Literal', ast.body[17].expression.type);
      assert.equal(.123, ast.body[17].expression.value);
      done();
    });

    it('0.', function(done) {
      assert.equal('Literal', ast.body[18].expression.type);
      assert.equal(0, ast.body[18].expression.value);
      done();
    });

    it('123', function(done) {
      assert.equal('Literal', ast.body[19].expression.type);
      assert.equal(123, ast.body[19].expression.value);
      done();
    });
  });

  describe('array literal', function() {
    it('empty array: []', function(done) {
      assert.equal('ArrayLiteral', ast.body[20].expression.type);
      assert.equal(0, ast.body[20].expression.elements.length);
      done();
    });
    it('elison: [,]', function(done) {
      assert.equal('ArrayLiteral', ast.body[21].expression.type);
      assert.equal(null, ast.body[21].expression.elements[0]);
      assert.equal(1, ast.body[21].expression.elements.length);
      done();
    });
    it('[a,b,c]', function(done) {
      assert.equal('ArrayLiteral', ast.body[22].expression.type);
      assert.equal('a', ast.body[22].expression.elements[0].name);
      assert.equal('b', ast.body[22].expression.elements[1].name);
      assert.equal('c', ast.body[22].expression.elements[2].name);
      assert.equal(3, ast.body[22].expression.elements.length);
      done();
    });
    it('[1,2,3]', function(done) {
      assert.equal('ArrayLiteral', ast.body[23].expression.type);
      assert.equal(1, ast.body[23].expression.elements[0].value);
      assert.equal(2, ast.body[23].expression.elements[1].value);
      assert.equal(3, ast.body[23].expression.elements[2].value);
      assert.equal(3, ast.body[23].expression.elements.length);
      done();
    });
    it('[$1,\'2\',a_,]', function(done) {
      assert.equal('ArrayLiteral', ast.body[24].expression.type);
      assert.equal('$1', ast.body[24].expression.elements[0].name);
      assert.equal('2', ast.body[24].expression.elements[1].value);
      assert.equal('a_', ast.body[24].expression.elements[2].name);
      assert.equal(4, ast.body[24].expression.elements.length);
      done();
    });
  });

  describe('object literal', function() {
    it('({})', function(done) {
      assert.equal('ObjectLiteral', ast.body[25].expression.expressions[0].type);
      assert.equal(0, ast.body[25].expression.expressions[0].properties.length);
      done();
    });
    it('({a_:1.2})', function(done) {
      assert.equal('ObjectLiteral', ast.body[26].expression.expressions[0].type);
      assert.equal('a_', ast.body[26].expression.expressions[0].properties[0].key.name);
      assert.equal('1.2', ast.body[26].expression.expressions[0].properties[0].value.value);
      done();
    });
    it('({a_})', function(done) {
      assert.equal('ObjectLiteral', ast.body[27].expression.expressions[0].type);
      assert.equal('a_', ast.body[27].expression.expressions[0].properties[0].key.name);
      assert.equal('a_', ast.body[27].expression.expressions[0].properties[0].value.name);
      done();
    });
    it('({\'$a\' : 1.23});', function(done) {
      assert.equal('ObjectLiteral', ast.body[28].expression.expressions[0].type);
      assert.equal('$a', ast.body[28].expression.expressions[0].properties[0].key.value);
      assert.equal('1.23', ast.body[28].expression.expressions[0].properties[0].value.value);
      done();
    });
  });
  
  describe('enhanced object literal', function() {
    it('method definition as property', function(done) {
      assert.equal('AssignmentExpression', ast.body[29].expression.type);
      assert.equal('ObjectLiteral', ast.body[29].expression.right.type);
      assert.equal(1, ast.body[29].expression.right.properties.length);
      assert.equal('MethodDefinition', ast.body[29].expression.right.properties[0].type);
      assert.equal('MemberExpression', ast.body[29].expression.right.properties[0].key.type);
      assert.equal(true, ast.body[29].expression.right.properties[0].key.computed);
      assert.equal('Symbol', ast.body[29].expression.right.properties[0].key.element.name);
      assert.equal('iterator', ast.body[29].expression.right.properties[0].key.property.name);
      assert.equal('FunctionExpression', ast.body[29].expression.right.properties[0].value.type);
      assert.equal('BlockStatement', ast.body[29].expression.right.properties[0].value.body.type);
      assert.equal(0, ast.body[29].expression.right.properties[0].value.body.body.length);
      done();
    });

    it('enhanced', function(done) {
      assert.equal('AssignmentExpression', ast.body[30].expression.type);
      assert.equal('ObjectLiteral', ast.body[30].expression.right.type);
      assert.equal(4, ast.body[30].expression.right.properties.length);
      assert.equal('__proto__', ast.body[30].expression.right.properties[0].key.name);
      assert.equal('theProtoObj', ast.body[30].expression.right.properties[0].value.name);

      assert.equal('handler', ast.body[30].expression.right.properties[1].key.name);
      assert.equal('handler', ast.body[30].expression.right.properties[1].value.name);

      assert.equal('Identifier', ast.body[30].expression.right.properties[2].key.type);
      assert.equal('FunctionExpression', ast.body[30].expression.right.properties[2].value.type);
      assert.equal(1, ast.body[30].expression.right.properties[2].value.body.length);
      assert.equal('ReturnStatement', ast.body[30].expression.right.properties[2].value.body[0].type);
      assert.equal('foo', ast.body[30].expression.right.properties[2].value.body[0].params.name);

      assert.equal('AdditiveExpression', ast.body[30].expression.right.properties[3].key.type);
      assert.equal(true, ast.body[30].expression.right.properties[3].key.computed);
      assert.equal('Literal', ast.body[30].expression.right.properties[3].key.left.type);
      assert.equal('prop_', ast.body[30].expression.right.properties[3].key.left.value);
      assert.equal('CallExpression', ast.body[30].expression.right.properties[3].key.right.type);
      assert.equal('CoverParenthesizedExpression', ast.body[30].expression.right.properties[3].key.right.callee.type);
      assert.equal('ArrowFunction', ast.body[30].expression.right.properties[3].key.right.callee.expressions[0].type);
      assert.equal('Literal', ast.body[30].expression.right.properties[3].key.right.callee.expressions[0].body.type);
      assert.equal(1, ast.body[30].expression.right.properties[3].key.right.callee.expressions[0].body.value);
      assert.equal(0, ast.body[30].expression.right.properties[3].key.right.params.length);

      assert.equal(1, ast.body[30].expression.right.properties[3].value.value);

      done();
    });

  });
});
