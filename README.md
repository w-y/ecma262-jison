# ECMA262-JISON
用js的Lex/Yacc工具来实现和扩展ECMAScript规范，学习ECMAScript规范并尝试打造一个parser。

>Nothing increases your learning power more than working on something big, real, confusing and frustrating.

   
## 安装


```bash

npm install ecma262-jison

```


## 构建

Nodejs v6版本以上，推荐使用v8或更高版本


```bash

git clone https://github.com/w-y/ecma262-jison.git

```


构建parser:

```bash

npm run buildparser

```

src到lib:

```bash

npm run build

```


测试：

```bash

npm run test

```

## 特性

目前已实现[ECMAScript(7.0)](http://www.ecma-international.org/ecma-262/7.0/index.html)的大部分语法特性，并扩展了JSX支持

|    特性                   | 支持 | 备注        |
| ----------                | --- |  ---        |
| Arrows                    | ✅  |             |
| Classes                   | ✅  |             |
| Template Strings          | ✅  |foo``   ❌   |
| Destructuring             | ✅  |             |
| Default+Rest+Spread       | ✅  |             |
| Let + Const               | ✅  |             |
| Unicode                   | ✅  | \u{20BB7} ❌|
| Modules                   | ✅  |             |
| Enhanced Object Literals  | ✅  |             |
| Generators                | ❌  |             |
| jsx                       | ✅  |             |
| Spread Element            | ✅  |             |
| Spread Property           | ✅  |             |
| ASI                       | ✅  | 出错加分号重试方式 |

## 示例

```js
const code = 'foo;';

const parser = require('ecma262-jison');

const ast = parser.parse(code);

console.log(JSON.stringify(ast, null, 2));
```

[在线示例](https://w-y.github.io/ecma262-jison/demos/ast/index.html)

