const BaseNode = require('./Base');

function ClassExpressionNode(id, body, superClass, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'ClassExpression' }, ...args));

  this.id = id;
  this.body = body;
  this.superClass = superClass;
}

exports.ClassExpressionNode = ClassExpressionNode;

function ClassDeclarationNode(id, body, superClass, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'ClassDeclaration' }, ...args));

  this.id = id;
  this.body = body;
  this.superClass = superClass;
}

exports.ClassDeclarationNode = ClassDeclarationNode;

function MethodDefinitionNode(key, value, kind, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'MethodDefinition' }, ...args));

  this.key = key;
  this.value = value;
  this.kind = kind;
}

exports.MethodDefinitionNode = MethodDefinitionNode;

function ClassBody(body, ...args) {
  BaseNode.call(this, Object.assign({}, { type: 'ClassBody' }, ...args));

  this.body = body;
}

exports.ClassBody = ClassBody;
