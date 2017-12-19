var assert = require('assert');
const parser = require('../src/index');

const { createFileHelper } = require('../src/test/helpers');

describe('module', function() {
  let ast = null;

  before(function(done) {
    const fileHelper = createFileHelper('./mock/module.js');
    fileHelper.readFileAsync((err, data) => {
      ast = parser.parse(data);
      done();
    })
  });

  describe('import', function() {
    it('import from', function(done) {
      assert.equal('ImportDeclaration', ast.body[0].type);
      assert.equal(1, ast.body[0].specifiers.length);
      assert.equal('ImportedDefaultBinding', ast.body[0].specifiers[0].type);
      assert.equal('Identifier', ast.body[0].specifiers[0].local.type);
      assert.equal('react', ast.body[0].specifiers[0].local.name);

      assert.equal('Literal', ast.body[0].source.type);
      assert.equal('React', ast.body[0].source.value);

      done();
    });

    it('import', function(done) {
      assert.equal('ImportDeclaration', ast.body[1].type);
      assert.equal(0, ast.body[1].specifiers.length);

      assert.equal('Literal', ast.body[1].source.type);
      assert.equal('module', ast.body[1].source.value);

      done();
    });

    it('import *', function(done) {

      assert.equal('ImportDeclaration', ast.body[2].type);
      assert.equal(1, ast.body[2].specifiers.length);
      assert.equal('ImportNamespaceBinding', ast.body[2].specifiers[0].type);
      assert.equal('Identifier', ast.body[2].specifiers[0].local.type);
      assert.equal('fun', ast.body[2].specifiers[0].local.name);

      assert.equal('Literal', ast.body[2].source.type);
      assert.equal('foo', ast.body[2].source.value);

      done();
    });

    it('import { a, b, c }', function(done) {
      assert.equal('ImportDeclaration', ast.body[3].type);
      assert.equal(3, ast.body[3].specifiers.length);

      assert.equal('ImportSpecifier', ast.body[3].specifiers[0].type);
      assert.equal('Identifier', ast.body[3].specifiers[0].local.type);
      assert.equal('a', ast.body[3].specifiers[0].local.name);

      assert.equal('ImportSpecifier', ast.body[3].specifiers[1].type);
      assert.equal('Identifier', ast.body[3].specifiers[1].local.type);
      assert.equal('b', ast.body[3].specifiers[1].local.name);

      assert.equal('ImportSpecifier', ast.body[3].specifiers[2].type);
      assert.equal('Identifier', ast.body[3].specifiers[2].local.type);
      assert.equal('c', ast.body[3].specifiers[2].local.name);

      assert.equal('Literal', ast.body[3].source.type);
      assert.equal('foo', ast.body[3].source.value);

      done();
    });

    it('import c, { a, b }', function(done) {
      assert.equal('ImportDeclaration', ast.body[4].type);
      assert.equal(3, ast.body[4].specifiers.length);

      assert.equal('ImportedDefaultBinding', ast.body[4].specifiers[0].type);
      assert.equal('Identifier', ast.body[4].specifiers[0].local.type);
      assert.equal('c', ast.body[4].specifiers[0].local.name);

      assert.equal('ImportSpecifier', ast.body[4].specifiers[1].type);
      assert.equal('Identifier', ast.body[4].specifiers[1].local.type);
      assert.equal('a', ast.body[4].specifiers[1].local.name);

      assert.equal('ImportSpecifier', ast.body[4].specifiers[2].type);
      assert.equal('Identifier', ast.body[4].specifiers[2].local.type);
      assert.equal('b', ast.body[4].specifiers[2].local.name);

      assert.equal('Literal', ast.body[4].source.type);
      assert.equal('foo', ast.body[4].source.value);

      done();
    });

    it('import { a as A }', function(done) {
      assert.equal('ImportDeclaration', ast.body[5].type);
      assert.equal(1, ast.body[5].specifiers.length);

      assert.equal('ImportSpecifier', ast.body[5].specifiers[0].type);
      assert.equal('Identifier', ast.body[5].specifiers[0].local.type);
      assert.equal('A', ast.body[5].specifiers[0].local.name);
      assert.equal('Identifier', ast.body[5].specifiers[0].imported.type);
      assert.equal('a', ast.body[5].specifiers[0].imported.name);

      assert.equal('Literal', ast.body[5].source.type);
      assert.equal('foo', ast.body[5].source.value);

      done();
    });

    it('import c, * as fun', function(done) {
      assert.equal('ImportDeclaration', ast.body[6].type);
      assert.equal(2, ast.body[6].specifiers.length);

      assert.equal('ImportedDefaultBinding', ast.body[6].specifiers[0].type);
      assert.equal('Identifier', ast.body[6].specifiers[0].local.type);
      assert.equal('c', ast.body[6].specifiers[0].local.name);

      assert.equal('ImportNamespaceBinding', ast.body[6].specifiers[1].type);
      assert.equal('Identifier', ast.body[6].specifiers[1].local.type);

      assert.equal('Literal', ast.body[6].source.type);
      assert.equal('foo', ast.body[6].source.value);

      done();
    });
  });

  describe('export', function() {
    it('export declaration', function(done) {
      assert.equal('ExportNamedDeclaration', ast.body[7].type);

      assert.equal('LexicalDeclaration', ast.body[7].declaration.type);
      assert.equal(1, ast.body[7].declaration.declarations.length);
      assert.equal('const', ast.body[7].declaration.kind);
      assert.equal('VariableDeclarator', ast.body[7].declaration.declarations[0].type);
      assert.equal('Identifier', ast.body[7].declaration.declarations[0].id.type);
      assert.equal('A', ast.body[7].declaration.declarations[0].id.name);

      done();
    });

    it('export all declaration', function(done) {
      assert.equal('ExportAllDeclaration', ast.body[8].type);
      assert.equal('Literal', ast.body[8].source.type);
      assert.equal('foo', ast.body[8].source.value);
      done();
    });

    it('export specifier', function(done) {
      assert.equal('ExportNamedDeclaration', ast.body[9].type);
      assert.equal(2, ast.body[9].specifiers.length);

      assert.equal('ExportSpecifier', ast.body[9].specifiers[0].type);
      assert.equal('Identifier', ast.body[9].specifiers[0].exported.type);
      assert.equal('A', ast.body[9].specifiers[0].exported.name);

      assert.equal('ExportSpecifier', ast.body[9].specifiers[1].type);
      assert.equal('Identifier', ast.body[9].specifiers[1].exported.type);
      assert.equal('B', ast.body[9].specifiers[1].exported.name);
      done();
    });

    it('export specifier', function(done) {
      assert.equal('ExportNamedDeclaration', ast.body[9].type);
      assert.equal(2, ast.body[9].specifiers.length);

      assert.equal('ExportSpecifier', ast.body[9].specifiers[0].type);
      assert.equal('Identifier', ast.body[9].specifiers[0].exported.type);
      assert.equal('A', ast.body[9].specifiers[0].exported.name);

      assert.equal('ExportSpecifier', ast.body[9].specifiers[1].type);
      assert.equal('Identifier', ast.body[9].specifiers[1].exported.type);
      assert.equal('B', ast.body[9].specifiers[1].exported.name);
      done();
    });

    it('export default', function(done) {
      assert.equal('ExportDefaultDeclaration', ast.body[10].type);
      assert.equal('Identifier', ast.body[10].declaration.type);
      assert.equal('A', ast.body[10].declaration.name);

      done();
    });

    it('export default function', function(done) {
      assert.equal('ExportDefaultDeclaration', ast.body[11].type);
      assert.equal('FunctionDeclaration', ast.body[11].declaration.type);
      assert.equal(null, ast.body[11].declaration.id);
      assert.equal(0, ast.body[11].declaration.params.length);

      assert.equal('FunctionDeclaration', ast.body[11].declaration.type);
      assert.equal('BlockStatement', ast.body[11].declaration.body.type);
      assert.equal(0, ast.body[11].declaration.body.body.length);
      done();
    });

    it('export default assignment expression', function(done) {
      assert.equal('ExportDefaultDeclaration', ast.body[12].type);
      assert.equal('MultiplicativeExpression', ast.body[12].declaration.type);
      assert.equal('*', ast.body[12].declaration.operator);
      assert.equal('Identifier', ast.body[12].declaration.left.type);
      assert.equal('a', ast.body[12].declaration.left.name);
      assert.equal('Identifier', ast.body[12].declaration.right.type);
      assert.equal('b', ast.body[12].declaration.right.name);
      done();
    });

  });
});
