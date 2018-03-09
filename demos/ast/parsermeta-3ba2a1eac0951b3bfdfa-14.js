webpackJsonp([53],{

/***/ "014n":
/***/ (function(module, exports) {

module.exports = {"author":"Ben Newman <bn@cs.stanford.edu>","name":"recast","description":"JavaScript syntax tree transformer, nondestructive pretty-printer, and automatic source map generator","keywords":["ast","rewriting","refactoring","codegen","syntax","transformation","parsing","pretty-printing"],"version":"0.12.9","homepage":"http://github.com/benjamn/recast","repository":{"type":"git","url":"git://github.com/benjamn/recast.git"},"license":"MIT","main":"main.js","scripts":{"test":"node ./node_modules/mocha/bin/mocha --reporter spec --full-trace","debug":"node ./node_modules/mocha/bin/mocha --inspect-brk --reporter spec --full-trace"},"browser":{"fs":false},"dependencies":{"ast-types":"0.10.1","core-js":"^2.4.1","esprima":"~4.0.0","private":"~0.1.5","source-map":"~0.6.1"},"devDependencies":{"babel-core":"^6.23.1","babel-preset-es2015":"^6.22.0","babylon":"~7.0.0-beta.31","esprima-fb":"^15001.1001.0-dev-harmony-fb","mocha":"~4.0.1","flow-parser":"^0.59.0","reify":"^0.12.3","semver":"^5.3.0"},"engines":{"node":">= 0.8"}}

/***/ }),

/***/ "1Jvn":
/***/ (function(module, exports) {

module.exports = {"name":"traceur","version":"0.0.111","description":"ES6 to ES5 compiler","keywords":["javascript","ecmascript","language","es5","es6","ES.next","harmony","compiler","transpiler"],"author":"Traceur Authors","license":"Apache-2.0","engines":{"node":">=0.10"},"main":"./src/node/api.js","bin":{"traceur":"./traceur"},"files":["bin/traceur.js","bin/traceur.js.map","bin/traceur-runtime.js","bin/BrowserSystem.js","src/","dist/","traceur"],"scripts":{"test":"make test","start":"make && node ./demo/expressServer.js","precheckout-upstream":"git fetch upstream && git branch -D upstream_master || true","checkout-upstream":"git checkout -b upstream_master upstream/master","rebuild":"make clean && make dist/commonjs && make test","prejust-publish":"npm run checkout-upstream && npm run rebuild","just-publish":"npm publish # workaround https://github.com/npm/npm/issues/10074 ","postjust-publish":"npm run push-published && npm run push-gh-pages","/** Update Version Number **/":"After publishing version N, update the version number and commit the result","store-semver":"node build/versionInfo.js -v > build/npm-version-number","update-semver":"npm run store-semver && git diff --quiet -- package.json && node build/versionInfo.js -n","precommit-published":"npm run update-semver && npm run rebuild","commit-published":"cat build/npm-version-number | xargs -I VERSION git commit -a -m \"VERSION\"","tag-published":"cat build/npm-version-number | xargs -I VERSION git tag -a VERSION -m \"Tagged version VERSION \"","prepush-published":"npm run commit-published && npm run tag-published","push-published":"git push --tags upstream upstream_master:master && git push upstream upstream_master:master  # Push source for version N+1","postpush-published":"git checkout master && git branch -D upstream_master","/** Update gh-pages branch **/":"Ater publishing version N, update the github docs and REPL","precheckout-gh-pages":"git branch -D upstream_gh_pages || true","checkout-gh-pages":"git checkout -b upstream_gh_pages upstream/master","precommit-gh-pages":"npm run checkout-gh-pages && npm run rebuild && cp gh-pages.gitignore .gitignore # tell git to commit built files.","commit-gh-pages":"git add -- src/ bin/ && ./traceur -v | xargs -I VERSION git commit -a -m \"Commit binaries for VERSION\"","prepush-gh-pages":"npm run commit-gh-pages","push-gh-pages":"git push -f upstream upstream_gh_pages:gh-pages","postpush-gh-pages":"git checkout master && git branch -D upstream_gh_pages"},"homepage":"https://github.com/google/traceur-compiler","bugs":"https://github.com/google/traceur-compiler/issues","repository":{"type":"git","url":"https://github.com/google/traceur-compiler"},"dependencies":{"commander":"2.9.x","glob":"5.0.x","rsvp":"^3.0.13","semver":"^4.3.3","source-map-support":"~0.2.8"},"devDependencies":{"source-map":"0.1.43","express":"4.x","serve-index":"1.x","mocha":"2.2.x","chai":"2.2.x","node-uuid":"1.x","regexpu":"1.1.0","regenerate":"1.2.1","regjsgen":"0.2.0","regjsparser":"0.1.5","requirejs":"2.x","traceur":"0.0.110","promises-aplus-tests":"2.x","webcomponents.js":"^0.5.4-1"},"subdomain":"traceur"}

/***/ }),

/***/ "1mPm":
/***/ (function(module, exports) {

module.exports = {"name":"glsl-parser","version":"2.0.0","description":"transform streamed glsl tokens into an ast","main":"stream.js","dependencies":{"glsl-tokenizer":"^2.0.0","through":"2.3.4","through2":"^0.6.3"},"devDependencies":{"tap-spec":"^1.0.1","tape":"^3.0.2"},"scripts":{"test":"node test/index.js | tap-spec"},"repository":{"type":"git","url":"git://github.com/stackgl/glsl-parser.git"},"keywords":["glsl","parser","ast","through","stream"],"authors":["Hugh Kennedy <hughskennedy@gmail.com> (http://hughsk.io/)","Mikola Lysenko <mikolalysenko@gmail.com> (http://0fps.net)","Chris Dickinson <chris@neversaw.us> (http://neversaw.us)"],"license":"MIT"}

/***/ }),

/***/ "2D0Z":
/***/ (function(module, exports) {

module.exports = {"name":"babel-eslint","version":"7.2.3","description":"Custom parser for ESLint","main":"index.js","files":["index.js","babylon-to-espree"],"repository":{"type":"git","url":"https://github.com/babel/babel-eslint.git"},"dependencies":{"babel-code-frame":"^6.22.0","babel-traverse":"^6.23.1","babel-types":"^6.23.0","babylon":"^6.17.0"},"scripts":{"test":"npm run lint && npm run test-only","test-only":"mocha","lint":"eslint index.js babylon-to-espree test","fix":"eslint index.js babylon-to-espree test --fix","preversion":"npm test","changelog":"git log `git describe --tags --abbrev=0`..HEAD --pretty=format:' * %s (%an)' | grep -v 'Merge pull request'"},"author":"Sebastian McKenzie <sebmck@gmail.com>","license":"MIT","engines":{"node":">=4"},"bugs":{"url":"https://github.com/babel/babel-eslint/issues"},"homepage":"https://github.com/babel/babel-eslint","devDependencies":{"babel-eslint":"^7.0.0","dedent":"^0.7.0","eslint":"^3.18.0","eslint-config-babel":"^6.0.0","eslint-plugin-flowtype":"^2.30.3","espree":"^3.4.0","mocha":"^3.0.0"}}

/***/ }),

/***/ "2jvD":
/***/ (function(module, exports) {

module.exports = {"name":"remark","version":"9.0.0","description":"Markdown processor powered by plugins","license":"MIT","keywords":["markdown","abstract","syntax","tree","ast","parse","stringify","process"],"dependencies":{"remark-parse":"^5.0.0","remark-stringify":"^5.0.0","unified":"^6.0.0"},"homepage":"http://remark.js.org","repository":"https://github.com/remarkjs/remark/tree/master/packages/remark","bugs":"https://github.com/remarkjs/remark/issues","author":"Titus Wormer <tituswormer@gmail.com> (http://wooorm.com)","contributors":["Titus Wormer <tituswormer@gmail.com> (http://wooorm.com)"],"files":["index.js"],"scripts":{},"xo":false}

/***/ }),

/***/ "3zGG":
/***/ (function(module, exports) {

module.exports = {"name":"handlebars","barename":"handlebars","version":"4.0.11","description":"Handlebars provides the power necessary to let you build semantic templates effectively with no frustration","homepage":"http://www.handlebarsjs.com/","keywords":["handlebars","mustache","template","html"],"repository":{"type":"git","url":"https://github.com/wycats/handlebars.js.git"},"author":"Yehuda Katz","license":"MIT","readmeFilename":"README.md","engines":{"node":">=0.4.7"},"dependencies":{"async":"^1.4.0","optimist":"^0.6.1","source-map":"^0.4.4"},"optionalDependencies":{"uglify-js":"^2.6"},"devDependencies":{"aws-sdk":"^2.1.49","babel-loader":"^5.0.0","babel-runtime":"^5.1.10","benchmark":"~1.0","dustjs-linkedin":"^2.0.2","eco":"~1.1.0-rc-3","grunt":"~0.4.1","grunt-babel":"^5.0.0","grunt-cli":"~0.1.10","grunt-contrib-clean":"0.x","grunt-contrib-concat":"0.x","grunt-contrib-connect":"0.x","grunt-contrib-copy":"0.x","grunt-contrib-requirejs":"0.x","grunt-contrib-uglify":"0.x","grunt-contrib-watch":"0.x","grunt-eslint":"^17.1.0","grunt-saucelabs":"8.x","grunt-webpack":"^1.0.8","istanbul":"^0.3.0","jison":"~0.3.0","mocha":"~1.20.0","mock-stdin":"^0.3.0","mustache":"^2.1.3","semver":"^5.0.1","underscore":"^1.5.1","webpack":"^1.12.6","webpack-dev-server":"^1.12.1"},"main":"lib/index.js","bin":{"handlebars":"bin/handlebars"},"scripts":{"test":"grunt"},"jspm":{"main":"handlebars","directories":{"lib":"dist/amd"},"buildConfig":{"minify":true}}}

/***/ }),

/***/ "495F":
/***/ (function(module, exports) {

module.exports = {"name":"esformatter-parser","version":"1.0.0","description":"JavaScript parser used by esformatter","main":"esformatter-parser.js","scripts":{"test":"echo \"Error: no test specified\" && exit 1"},"repository":{"type":"git","url":"git+https://github.com/millermedeiros/esformatter-parser.git"},"keywords":["babel","babylon","esformatter","esprima","parser","rocambole"],"author":"Miller Medeiros","license":"MIT","bugs":{"url":"https://github.com/millermedeiros/esformatter-parser/issues"},"homepage":"https://github.com/millermedeiros/esformatter-parser#readme","dependencies":{"acorn-to-esprima":"^2.0.8","babel-traverse":"^6.9.0","babylon":"^6.8.0","rocambole":"^0.7.0"}}

/***/ }),

/***/ "5xev":
/***/ (function(module, exports) {

module.exports = {"name":"css","version":"2.2.1","description":"CSS parser / stringifier","main":"index","files":["index.js","lib"],"dependencies":{"source-map":"^0.1.38","source-map-resolve":"^0.3.0","urix":"^0.1.0","inherits":"^2.0.1"},"devDependencies":{"mocha":"^1.21.3","should":"^4.0.4","matcha":"^0.5.0","bytes":"^1.0.0"},"scripts":{"benchmark":"matcha","test":"mocha --require should --reporter spec --bail test/*.js"},"author":"TJ Holowaychuk <tj@vision-media.ca>","license":"MIT","repository":{"type":"git","url":"https://github.com/reworkcss/css.git"},"keywords":["css","parser","stringifier","stylesheet"]}

/***/ }),

/***/ "6Vvw":
/***/ (function(module, exports) {

module.exports = {"name":"espree","description":"An Esprima-compatible JavaScript parser built on Acorn","author":"Nicholas C. Zakas <nicholas+npm@nczconsulting.com>","homepage":"https://github.com/eslint/espree","main":"espree.js","version":"3.5.2","files":["lib","espree.js"],"engines":{"node":">=0.10.0"},"repository":"eslint/espree","bugs":{"url":"http://github.com/eslint/espree.git"},"license":"BSD-2-Clause","dependencies":{"acorn":"^5.2.1","acorn-jsx":"^3.0.0"},"devDependencies":{"browserify":"^7.0.0","chai":"^1.10.0","eslint":"^2.13.1","eslint-config-eslint":"^3.0.0","eslint-release":"^0.10.0","esprima":"latest","esprima-fb":"^8001.2001.0-dev-harmony-fb","istanbul":"~0.2.6","json-diff":"~0.3.1","leche":"^1.0.1","mocha":"^2.0.1","regenerate":"~0.5.4","shelljs":"^0.3.0","shelljs-nodecli":"^0.1.1","unicode-6.3.0":"~0.1.0"},"keywords":["ast","ecmascript","javascript","parser","syntax","acorn"],"scripts":{"generate-regex":"node tools/generate-identifier-regex.js","test":"npm run-script lint && node Makefile.js test","lint":"node Makefile.js lint","release":"eslint-release","ci-release":"eslint-ci-release","gh-release":"eslint-gh-release","alpharelease":"eslint-prelease alpha","betarelease":"eslint-prelease beta","browserify":"node Makefile.js browserify"}}

/***/ }),

/***/ "84Jb":
/***/ (function(module, exports) {

module.exports = {"name":"json-to-ast","version":"2.0.2","author":"Vlad Trushin","description":"JSON AST parser","homepage":"https://github.com/vtrushin/json-to-ast","repository":"vtrushin/json-to-ast","maintainers":[{"name":"Vlad Trushin <monospectr@mail.ru> (https://github.com/vtrushin)","email":"monospectr@mail.ru","github-username":"vtrushin"}],"keywords":["json-parser","parser","ast","json","tree"],"main":"build.js","files":["build.js","LICENSE","README.md","CHANGELOG.md"],"engines":{"node":">= 4"},"scripts":{"build":"rollup -c","watch":"rollup -c -w","pretest":"npm run build","test":"mocha","prepublishOnly":"npm run build"},"devDependencies":{"babel-core":"^6.26.0","babel-helpers":"^6.24.1","babel-plugin-external-helpers":"^6.22.0","babel-plugin-transform-object-assign":"^6.22.0","babel-preset-es2015":"^6.24.1","babel-preset-stage-3":"^6.24.1","code-error-fragment":"0.0.230","coveralls":"^2.11.9","mocha":"^2.4.5","rollup":"^0.50.0","rollup-plugin-babel":"^3.0.2","rollup-plugin-commonjs":"^8.2.4","rollup-plugin-node-resolve":"^3.0.0"},"license":"MIT"}

/***/ }),

/***/ "8o2u":
/***/ (function(module, exports) {

module.exports = {"name":"php-parser","version":"2.1.0","description":"Parse PHP code and returns its AST","main":"src/index.js","scripts":{"test":"node node_modules/mocha/bin/mocha test --stack-size=5000","cover":"node --stack-size=5000 node_modules/istanbul/lib/cli.js cover node_modules/mocha/bin/_mocha"},"repository":{"type":"git","url":"https://github.com/glayzzle/php-parser"},"bugs":{"url":"https://github.com/glayzzle/php-parser/issues"},"homepage":"http://glayzzle.com/php-parser/","keywords":["php","php5","php7","parser","lexer","tokenizer","ast"],"author":"Ioan CHIRIAC","license":"BSD-3-Clause","xo":{"space":2,"envs":["node","mocha"]},"devDependencies":{"coveralls":"^2.11.15","grunt":"^1.0.1","grunt-browserify":"^5.0.0","grunt-contrib-uglify":"^2.0.0","grunt-documentation":"^1.2.1","istanbul":"0.3.x","mocha":"^3.2.0","should":"^11.2.0"}}

/***/ }),

/***/ "AZ2s":
/***/ (function(module, exports) {

module.exports = {"name":"scalameta-parsers","version":"2.0.1","main":"index.js","files":["index.js"],"scripts":{"prepublish":"export current=$PWD && cd ../../../.. && sbt parsersJS/fullOptJS && cd $current && cp ../target/scala-2.12/parsers-opt.js index.js"},"author":"scalameta","license":"BSD-3-Clause"}

/***/ }),

/***/ "BtBj":
/***/ (function(module, exports) {

module.exports = {"name":"jscodeshift","version":"0.3.32","description":"A toolkit for JavaScript codemods","repository":{"type":"git","url":"https://github.com/facebook/jscodeshift.git"},"bugs":"https://github.com/facebook/jscodeshift/issues","main":"index.js","scripts":{"prepublish":"cp -R src/ dist/","test":"jest --bail","docs":"rm -rf docs && jsdoc -d docs -R README.md src/collections/* src/core.js src/Collection.js"},"bin":{"jscodeshift":"./bin/jscodeshift.sh"},"engines":{"node":">=4"},"keywords":["codemod","recast"],"author":"Felix Kling","license":"BSD-3-Clause","dependencies":{"async":"^1.5.0","babel-core":"^5","babel-plugin-transform-flow-strip-types":"^6.8.0","babel-preset-es2015":"^6.9.0","babel-preset-stage-1":"^6.5.0","babel-register":"^6.9.0","babylon":"^6.17.3","colors":"^1.1.2","flow-parser":"^0.*","lodash":"^4.13.1","micromatch":"^2.3.7","node-dir":"0.1.8","nomnom":"^1.8.1","recast":"^0.12.5","temp":"^0.8.1","write-file-atomic":"^1.2.0"},"devDependencies":{"babel-eslint":"^6.1.2","eslint":"^3.1.1","jest":"^18.1.0","jsdoc":"^3.4.0","mkdirp":"^0.5.1"},"jest":{"testPathDirs":["src","bin","sample"]}}

/***/ }),

/***/ "DN+T":
/***/ (function(module, exports) {

module.exports = {"name":"ecma262-jison","version":"0.1.0","description":"ecma262 implementation in jison","main":"src/index.js","scripts":{"buildparser":"node --max-old-space-size=4096 src/ecma262.js","build":"node --max-old-space-size=4096 ./node_modules/.bin/babel src --out-dir lib","lint":"eslint --fix ./src","test":"mocha --timeout 0"},"repository":{"type":"git","url":"git+https://github.com/w-y/ecma262-jison.git"},"keywords":["ecma262","jison"],"author":"w-y","license":"MIT","bugs":{"url":"https://github.com/w-y/ecma262-jison/issues"},"homepage":"https://github.com/w-y/ecma262-jison#readme","dependencies":{"jison":"0.4.17","jison-gho":"0.6.0-188","unicode-6.3.0":"^0.7.0"},"devDependencies":{"babel-cli":"^6.26.0","babel-preset-es2015":"^6.24.1","babel-preset-minify":"^0.3.0","eslint":"^3.18.0","eslint-config-airbnb":"^14.1.0","eslint-config-airbnb-base":"^11.1.1","eslint-plugin-import":"^2.2.0","mocha":"^3.3.0"}}

/***/ }),

/***/ "ECNh":
/***/ (function(module, exports) {

module.exports = {"name":"acorn","description":"ECMAScript parser","homepage":"https://github.com/ternjs/acorn","main":"dist/acorn.js","module":"dist/acorn.es.js","version":"5.2.1","engines":{"node":">=0.4.0"},"maintainers":[{"name":"Marijn Haverbeke","email":"marijnh@gmail.com","web":"http://marijnhaverbeke.nl"},{"name":"Ingvar Stepanyan","email":"me@rreverser.com","web":"http://rreverser.com/"}],"repository":{"type":"git","url":"https://github.com/ternjs/acorn.git"},"license":"MIT","scripts":{"prepare":"npm test","test":"node test/run.js && node test/lint.js","pretest":"npm run build:main && npm run build:loose","build":"npm run build:main && npm run build:walk && npm run build:loose && npm run build:bin","build:main":"rollup -c rollup/config.main.js","build:walk":"rollup -c rollup/config.walk.js","build:loose":"rollup -c rollup/config.loose.js && rollup -c rollup/config.loose_es.js","build:bin":"rollup -c rollup/config.bin.js","lint":"eslint src/"},"bin":{"acorn":"./bin/acorn"},"devDependencies":{"eslint":"^3.18.0","eslint-config-standard":"^7.1.0","eslint-plugin-import":"^2.2.0","eslint-plugin-promise":"^3.5.0","eslint-plugin-standard":"^2.1.1","rollup":"^0.43.0","rollup-plugin-buble":"^0.15.0","unicode-9.0.0":"^0.7.0"}}

/***/ }),

/***/ "I+c3":
/***/ (function(module, exports) {

module.exports = {"name":"tslint","version":"5.8.0","description":"An extensible static analysis linter for the TypeScript language","bin":{"tslint":"./bin/tslint"},"main":"./lib/index.js","typings":"./lib/index.d.ts","repository":{"type":"git","url":"https://github.com/palantir/tslint.git"},"keywords":["cli","typescript","linter"],"scripts":{"clean":"npm-run-all -p clean:core clean:test","clean:core":"rimraf lib","clean:test":"rimraf build && rimraf test/config/node_modules","docs":"node scripts/buildDocs.js","compile":"npm-run-all -p compile:core compile:test -s compile:scripts","compile:core":"tsc -p src","compile:scripts":"tsc -p scripts","compile:test":"tsc -p test","lint":"npm-run-all -p lint:global lint:from-bin","lint:global":"tslint --project test/tsconfig.json --format stylish # test includes 'src' too","lint:from-bin":"node bin/tslint --project test/tsconfig.json --format stylish","publish:local":"./scripts/npmPublish.sh","test":"npm-run-all test:pre -p test:mocha test:rules","test:pre":"cd ./test/config && npm install --no-save","test:mocha":"mocha --reporter spec --colors \"build/test/**/*Tests.js\"","test:rules":"node ./build/test/ruleTestRunner.js","verify":"npm-run-all clean compile lint test docs","coverage":"rimraf coverage .nyc_output && nyc npm test"},"dependencies":{"babel-code-frame":"^6.22.0","builtin-modules":"^1.1.1","chalk":"^2.1.0","commander":"^2.9.0","diff":"^3.2.0","glob":"^7.1.1","minimatch":"^3.0.4","resolve":"^1.3.2","semver":"^5.3.0","tslib":"^1.7.1","tsutils":"^2.12.1"},"peerDependencies":{"typescript":">=2.1.0 || >=2.1.0-dev || >=2.2.0-dev || >=2.3.0-dev || >=2.4.0-dev || >=2.5.0-dev || >=2.6.0-dev || >=2.7.0-dev"},"devDependencies":{"@types/babel-code-frame":"^6.20.0","@types/chai":"^3.5.0","@types/chalk":"^0.4.31","@types/commander":"^2.9.0","@types/diff":"^3.2.0","@types/glob":"^5.0.30","@types/js-yaml":"^3.5.31","@types/minimatch":"^2.0.29","@types/mocha":"^2.2.35","@types/node":"^7.0.29","@types/resolve":"^0.0.4","@types/rimraf":"^2.0.2","@types/semver":"^5.3.30","chai":"^3.5.0","github":"^8.2.1","js-yaml":"^3.7.0","json-stringify-pretty-compact":"^1.0.3","mocha":"^3.2.0","npm-run-all":"^4.0.2","nyc":"^10.2.0","rimraf":"^2.5.4","ts-node":"^3.3.0","tslint":"^5.7.0","tslint-test-config-non-relative":"file:test/external/tslint-test-config-non-relative","typescript":"~2.5.1"},"license":"Apache-2.0","engines":{"node":">=4.1.2"}}

/***/ }),

/***/ "Kx03":
/***/ (function(module, exports) {

module.exports = {"name":"cssom","description":"CSS Object Model implementation and CSS parser","keywords":["CSS","CSSOM","parser","styleSheet"],"version":"0.3.2","author":"Nikita Vasilyev <me@elv1s.ru>","repository":"NV/CSSOM","files":["lib/"],"main":"./lib/index.js","devDependencies":{"jake":"~0.7.3"},"license":"MIT","scripts":{"prepublish":"jake lib/index.js"}}

/***/ }),

/***/ "KxVw":
/***/ (function(module, exports) {

module.exports = {"name":"babel-core","version":"5.8.38","description":"A compiler for writing next generation JavaScript","author":"Sebastian McKenzie <sebmck@gmail.com>","homepage":"https://babeljs.io/","license":"MIT","repository":"babel/babel","browser":{"./lib/api/register/node.js":"./lib/api/register/browser.js"},"keywords":["6to5","babel","classes","const","es6","harmony","let","modules","transpile","transpiler","var"],"scripts":{"bench":"make bench","test":"make test"},"dependencies":{"babel-plugin-constant-folding":"^1.0.1","babel-plugin-dead-code-elimination":"^1.0.2","babel-plugin-eval":"^1.0.1","babel-plugin-inline-environment-variables":"^1.0.1","babel-plugin-jscript":"^1.0.4","babel-plugin-member-expression-literals":"^1.0.1","babel-plugin-property-literals":"^1.0.1","babel-plugin-proto-to-assign":"^1.0.3","babel-plugin-react-constant-elements":"^1.0.3","babel-plugin-react-display-name":"^1.0.3","babel-plugin-remove-console":"^1.0.1","babel-plugin-remove-debugger":"^1.0.1","babel-plugin-runtime":"^1.0.7","babel-plugin-undeclared-variables-check":"^1.0.2","babel-plugin-undefined-to-void":"^1.1.6","babylon":"^5.8.38","bluebird":"^2.9.33","chalk":"^1.0.0","convert-source-map":"^1.1.0","core-js":"^1.0.0","debug":"^2.1.1","detect-indent":"^3.0.0","esutils":"^2.0.0","fs-readdir-recursive":"^0.1.0","globals":"^6.4.0","home-or-tmp":"^1.0.0","is-integer":"^1.0.4","js-tokens":"1.0.1","json5":"^0.4.0","lodash":"^3.10.0","minimatch":"^2.0.3","output-file-sync":"^1.1.0","path-exists":"^1.0.0","path-is-absolute":"^1.0.0","private":"^0.1.6","regenerator":"0.8.40","regexpu":"^1.3.0","repeating":"^1.1.2","resolve":"^1.1.6","shebang-regex":"^1.0.0","slash":"^1.0.0","source-map":"^0.5.0","source-map-support":"^0.2.10","to-fast-properties":"^1.0.0","trim-right":"^1.0.0","try-resolve":"^1.0.0"}}

/***/ }),

/***/ "L3Zs":
/***/ (function(module, exports) {

module.exports = {"name":"babylon","version":"7.0.0-beta.31","description":"A JavaScript parser","author":"Sebastian McKenzie <sebmck@gmail.com>","homepage":"https://babeljs.io/","license":"MIT","keywords":["babel","javascript","parser","tc39","ecmascript","babylon"],"repository":"https://github.com/babel/babel/tree/master/packages/babylon","main":"lib/index.js","files":["bin","lib"],"engines":{"node":">=4.2.0"},"devDependencies":{"@babel/helper-fixtures":"7.0.0-beta.31","babel-plugin-transform-for-of-as-array":"1.0.4","rollup":"^0.50.0","rollup-plugin-babel":"^4.0.0-beta.0","rollup-plugin-node-resolve":"^3.0.0","rollup-watch":"^4.0.0","unicode-9.0.0":"~0.7.0"},"bin":{"babylon":"./bin/babylon.js"}}

/***/ }),

/***/ "LsC8":
/***/ (function(module, exports) {

module.exports = {"name":"@glimmer/compiler","version":"0.30.2","repository":"https://github.com/glimmerjs/glimmer-vm/tree/master/packages/@glimmer/compiler","dependencies":{"@glimmer/syntax":"^0.30.2","@glimmer/util":"^0.30.2","@glimmer/wire-format":"^0.30.2","@glimmer/interfaces":"^0.30.2","simple-html-tokenizer":"^0.4.1"},"devDependencies":{"typescript":"^2.2.0"},"main":"dist/commonjs/es5/index.js","jsnext:main":"dist/modules/es5/index.js","module":"dist/modules/es2017/index.js","typings":"dist/types/index.d.ts","license":"MIT"}

/***/ }),

/***/ "OneE":
/***/ (function(module, exports) {

module.exports = {"name":"parse5","description":"HTML parsing/serialization toolset for Node.js. WHATWG HTML Living Standard (aka HTML5)-compliant.","version":"3.0.3","author":"Ivan Nikulin <ifaaan@gmail.com> (https://github.com/inikulin)","contributors":"https://github.com/inikulin/parse5/graphs/contributors","homepage":"https://github.com/inikulin/parse5","devDependencies":{"del":"^2.0.2","gulp":"^3.9.0","gulp-benchmark":"^1.1.1","gulp-download":"0.0.1","gulp-eslint":"^3.0.1","gulp-install":"^0.6.0","gulp-mocha":"^2.1.3","gulp-rename":"^1.2.2","gulp-typedoc":"^2.0.0","gulp-typescript":"^3.1.2","publish-please":"^2.2.0","through2":"^2.0.0","typedoc":"^0.5.1","typescript":"^2.0.6"},"keywords":["html","parser","html5","WHATWG","specification","fast","html parser","html5 parser","htmlparser","parse5","serializer","html serializer","htmlserializer","sax","simple api","parse","tokenize","serialize","tokenizer"],"license":"MIT","main":"./lib/index.js","types":"./lib/index.d.ts","repository":{"type":"git","url":"git://github.com/inikulin/parse5.git"},"scripts":{"test":"gulp test","publish-please":"publish-please","prepublish":"publish-please guard"},"files":["lib"],"dependencies":{"@types/node":"*"}}

/***/ }),

/***/ "Oznz":
/***/ (function(module, exports) {

module.exports = {"name":"babel-core","version":"7.0.0-beta.3","description":"Babel compiler core.","author":"Sebastian McKenzie <sebmck@gmail.com>","homepage":"https://babeljs.io/","license":"MIT","repository":"https://github.com/babel/babel/tree/master/packages/babel-core","keywords":["6to5","babel","classes","const","es6","harmony","let","modules","transpile","transpiler","var","babel-core","compiler"],"browser":{"./lib/config/loading/files/index.js":"./lib/config/loading/files/index-browser.js","./lib/transform-file.js":"./lib/transform-file-browser.js","./lib/transform-file-sync.js":"./lib/transform-file-sync-browser.js"},"dependencies":{"babel-code-frame":"7.0.0-beta.3","babel-generator":"7.0.0-beta.3","babel-helpers":"7.0.0-beta.3","babel-template":"7.0.0-beta.3","babel-traverse":"7.0.0-beta.3","babel-types":"7.0.0-beta.3","babylon":"7.0.0-beta.27","convert-source-map":"^1.1.0","debug":"^3.0.1","json5":"^0.5.0","lodash":"^4.2.0","micromatch":"^2.3.11","resolve":"^1.3.2","source-map":"^0.5.0"},"devDependencies":{"babel-helper-transform-fixture-test-runner":"7.0.0-beta.3","babel-register":"7.0.0-beta.3"}}

/***/ }),

/***/ "SAdm":
/***/ (function(module, exports) {

module.exports = {"name":"luaparse","version":"0.2.1","description":"A Lua parser in JavaScript","keywords":["ast","lua","parser","parsing"],"homepage":"https://oxyc.github.io/luaparse/","bugs":"https://github.com/oxyc/luaparse/issues","license":"MIT","author":"Oskar Schöldström <public@oxy.fi> (http://www.oxy.fi/)","files":["README.md","LICENSE","luaparse.js","bin/luaparse"],"main":"luaparse.js","bin":"./bin/luaparse","man":"./docs/luaparse.1","repository":{"type":"git","url":"https://github.com/oxyc/luaparse.git"},"scripts":{"test":"make qa"},"devDependencies":{"benchmark":"~1.0.0","complexity-report":"~0.10.5","docco":"~0.6.3","gulp":"~3.8.10","gulp-add-src":"^0.2.0","gulp-filelog":"^0.4.1","gulp-header":"^1.2.2","gulp-jshint":"^1.9.0","gulp-rename":"^1.2.0","gulp-striphtml":"0.0.1","gulp-uglify":"^1.0.1","istanbul":"~0.3.2","marked":"~0.3.2","spec":"git://github.com/kitcambridge/spec.git#gh-pages","testem":"~0.6.9"}}

/***/ }),

/***/ "SCCI":
/***/ (function(module, exports) {

module.exports = {"name":"esprima","description":"ECMAScript parsing infrastructure for multipurpose analysis","homepage":"http://esprima.org","main":"dist/esprima.js","bin":{"esparse":"./bin/esparse.js","esvalidate":"./bin/esvalidate.js"},"version":"4.0.0","files":["bin","dist/esprima.js"],"engines":{"node":">=4"},"author":{"name":"Ariya Hidayat","email":"ariya.hidayat@gmail.com"},"maintainers":[{"name":"Ariya Hidayat","email":"ariya.hidayat@gmail.com","web":"http://ariya.ofilabs.com"}],"repository":{"type":"git","url":"https://github.com/jquery/esprima.git"},"bugs":{"url":"https://github.com/jquery/esprima/issues"},"license":"BSD-2-Clause","devDependencies":{"codecov.io":"~0.1.6","escomplex-js":"1.2.0","everything.js":"~1.0.3","glob":"~7.1.0","istanbul":"~0.4.0","json-diff":"~0.3.1","karma":"~1.3.0","karma-chrome-launcher":"~2.0.0","karma-detect-browsers":"~2.2.3","karma-edge-launcher":"~0.2.0","karma-firefox-launcher":"~1.0.0","karma-ie-launcher":"~1.0.0","karma-mocha":"~1.3.0","karma-safari-launcher":"~1.0.0","karma-safaritechpreview-launcher":"~0.0.4","karma-sauce-launcher":"~1.1.0","lodash":"~3.10.1","mocha":"~3.2.0","node-tick-processor":"~0.0.2","regenerate":"~1.3.2","temp":"~0.8.3","tslint":"~5.1.0","typescript":"~2.3.2","typescript-formatter":"~5.1.3","unicode-8.0.0":"~0.7.0","webpack":"~1.14.0"},"keywords":["ast","ecmascript","esprima","javascript","parser","syntax"],"scripts":{"check-version":"node test/check-version.js","tslint":"tslint src/*.ts","code-style":"tsfmt --verify src/*.ts && tsfmt --verify test/*.js","format-code":"tsfmt -r src/*.ts && tsfmt -r test/*.js","complexity":"node test/check-complexity.js","static-analysis":"npm run check-version && npm run tslint && npm run code-style && npm run complexity","hostile-env-tests":"node test/hostile-environment-tests.js","unit-tests":"node test/unit-tests.js","api-tests":"mocha -R dot test/api-tests.js","grammar-tests":"node test/grammar-tests.js","regression-tests":"node test/regression-tests.js","all-tests":"npm run verify-line-ending && npm run generate-fixtures && npm run unit-tests && npm run api-tests && npm run grammar-tests && npm run regression-tests && npm run hostile-env-tests","verify-line-ending":"node test/verify-line-ending.js","generate-fixtures":"node tools/generate-fixtures.js","browser-tests":"npm run compile && npm run generate-fixtures && cd test && karma start --single-run","saucelabs-evergreen":"cd test && karma start saucelabs-evergreen.conf.js","saucelabs-safari":"cd test && karma start saucelabs-safari.conf.js","saucelabs-ie":"cd test && karma start saucelabs-ie.conf.js","saucelabs":"npm run saucelabs-evergreen && npm run saucelabs-ie && npm run saucelabs-safari","analyze-coverage":"istanbul cover test/unit-tests.js","check-coverage":"istanbul check-coverage --statement 100 --branch 100 --function 100","dynamic-analysis":"npm run analyze-coverage && npm run check-coverage","compile":"tsc -p src/ && webpack && node tools/fixupbundle.js","test":"npm run compile && npm run all-tests && npm run static-analysis && npm run dynamic-analysis","prepublish":"npm run compile","profile":"node --prof test/profile.js && mv isolate*.log v8.log && node-tick-processor","benchmark-parser":"node -expose_gc test/benchmark-parser.js","benchmark-tokenizer":"node --expose_gc test/benchmark-tokenizer.js","benchmark":"npm run benchmark-parser && npm run benchmark-tokenizer","codecov":"istanbul report cobertura && codecov < ./coverage/cobertura-coverage.xml","downstream":"node test/downstream.js","travis":"npm test","circleci":"npm test && npm run codecov && npm run downstream","appveyor":"npm run compile && npm run all-tests && npm run browser-tests","droneio":"npm run compile && npm run all-tests && npm run saucelabs","generate-regex":"node tools/generate-identifier-regex.js","generate-xhtml-entities":"node tools/generate-xhtml-entities.js"}}

/***/ }),

/***/ "Sim1":
/***/ (function(module, exports) {

module.exports = {"name":"eslint","version":"2.13.1","author":"Nicholas C. Zakas <nicholas+npm@nczconsulting.com>","description":"An AST-based pattern checker for JavaScript.","bin":{"eslint":"./bin/eslint.js"},"main":"./lib/api.js","scripts":{"test":"node Makefile.js test","lint":"node Makefile.js lint","release":"node Makefile.js release","alpharelease":"node Makefile.js prerelease -- alpha","betarelease":"node Makefile.js prerelease -- beta","docs":"node Makefile.js docs","gensite":"node Makefile.js gensite","browserify":"node Makefile.js browserify","perf":"node Makefile.js perf","profile":"beefy tests/bench/bench.js --open -- -t brfs -t ./tests/bench/xform-rules.js -r espree","coveralls":"cat ./coverage/lcov.info | coveralls","check-commit":"node Makefile.js checkGitCommit"},"files":["LICENSE","README.md","bin","conf","lib","messages"],"repository":{"type":"git","url":"https://github.com/eslint/eslint"},"homepage":"http://eslint.org","bugs":"https://github.com/eslint/eslint/issues/","dependencies":{"chalk":"^1.1.3","concat-stream":"^1.4.6","debug":"^2.1.1","doctrine":"^1.2.2","es6-map":"^0.1.3","escope":"^3.6.0","espree":"^3.1.6","estraverse":"^4.2.0","esutils":"^2.0.2","file-entry-cache":"^1.1.1","glob":"^7.0.3","globals":"^9.2.0","ignore":"^3.1.2","imurmurhash":"^0.1.4","inquirer":"^0.12.0","is-my-json-valid":"^2.10.0","is-resolvable":"^1.0.0","js-yaml":"^3.5.1","json-stable-stringify":"^1.0.0","levn":"^0.3.0","lodash":"^4.0.0","mkdirp":"^0.5.0","optionator":"^0.8.1","path-is-absolute":"^1.0.0","path-is-inside":"^1.0.1","pluralize":"^1.2.1","progress":"^1.1.8","require-uncached":"^1.0.2","shelljs":"^0.6.0","strip-json-comments":"~1.0.1","table":"^3.7.8","text-table":"~0.2.0","user-home":"^2.0.0"},"devDependencies":{"beefy":"^2.0.0","brfs":"0.0.9","browserify":"^12.0.1","chai":"^3.5.0","cheerio":"^0.19.0","coveralls":"2.11.4","dateformat":"^1.0.8","ejs":"^2.3.3","eslint-release":"^0.5.0","esprima":"^2.4.1","esprima-fb":"^15001.1001.0-dev-harmony-fb","gh-got":"^2.2.0","istanbul":"^0.4.0","jsdoc":"^3.3.0-beta1","karma":"^0.13.22","karma-mocha":"^1.0.1","karma-mocha-reporter":"^2.0.3","karma-phantomjs-launcher":"^1.0.0","leche":"^2.1.1","linefix":"^0.1.1","load-perf":"^0.2.0","markdownlint":"^0.1.0","mocha":"^2.4.5","mock-fs":"^3.9.0","npm-license":"^0.3.2","phantomjs-prebuilt":"^2.1.7","proxyquire":">=1.0.0 <1.7.5","semver":"^5.0.3","shelljs-nodecli":"~0.1.0","sinon":"^1.17.2","temp":"^0.8.3","through":"^2.3.6"},"keywords":["ast","lint","javascript","ecmascript","espree"],"license":"MIT","engines":{"node":">=0.10"}}

/***/ }),

/***/ "Ur/u":
/***/ (function(module, exports) {

module.exports = {"name":"uglify-es","description":"JavaScript parser, mangler/compressor and beautifier toolkit for ES6+","homepage":"https://github.com/mishoo/UglifyJS2/tree/harmony","author":"Mihai Bazon <mihai.bazon@gmail.com> (http://lisperator.net/)","license":"BSD-2-Clause","version":"3.3.9","engines":{"node":">=0.8.0"},"maintainers":["Alex Lam <alexlamsl@gmail.com>","Mihai Bazon <mihai.bazon@gmail.com> (http://lisperator.net/)"],"repository":"https://github.com/mishoo/UglifyJS2.git#harmony","main":"tools/node.js","bin":{"uglifyjs":"bin/uglifyjs"},"files":["bin","lib","tools","LICENSE"],"dependencies":{"commander":"~2.13.0","source-map":"~0.6.1"},"devDependencies":{"acorn":"~5.3.0","mocha":"~3.5.1","semver":"~5.4.1"},"scripts":{"test":"node test/run-tests.js"},"keywords":["uglify","uglify-es","uglify-js","minify","minifier","javascript","ecmascript","es5","es6","es7","es8","es2015","es2016","es2017","async","await"]}

/***/ }),

/***/ "W9QC":
/***/ (function(module, exports) {

module.exports = {"name":"babel-core","version":"6.26.0","description":"Babel compiler core.","author":"Sebastian McKenzie <sebmck@gmail.com>","homepage":"https://babeljs.io/","license":"MIT","repository":"https://github.com/babel/babel/tree/master/packages/babel-core","keywords":["6to5","babel","classes","const","es6","harmony","let","modules","transpile","transpiler","var","babel-core","compiler"],"scripts":{"bench":"make bench","test":"make test"},"dependencies":{"babel-code-frame":"^6.26.0","babel-generator":"^6.26.0","babel-helpers":"^6.24.1","babel-messages":"^6.23.0","babel-register":"^6.26.0","babel-runtime":"^6.26.0","babel-template":"^6.26.0","babel-traverse":"^6.26.0","babel-types":"^6.26.0","babylon":"^6.18.0","convert-source-map":"^1.5.0","debug":"^2.6.8","json5":"^0.5.1","lodash":"^4.17.4","minimatch":"^3.0.4","path-is-absolute":"^1.0.1","private":"^0.1.7","slash":"^1.0.0","source-map":"^0.5.6"},"devDependencies":{"babel-helper-fixtures":"^6.26.0","babel-helper-transform-fixture-test-runner":"^6.26.0","babel-polyfill":"^6.26.0"}}

/***/ }),

/***/ "Ypjm":
/***/ (function(module, exports) {

module.exports = {"name":"sqlite-parser","description":"JavaScript implentation of SQLite 3 query parser","author":"Code School (http://codeschool.com)","version":"1.0.1","contributors":["Nick Wronski <nick@javascript.com>"],"keywords":["sql","sqlite","parser","syntax","ast"],"main":"lib/index.js","bin":{"sqlite-parser":"bin/sqlite-parser"},"map":{"./lib/streaming.js":{"browser":"./lib/streaming-shim.js"}},"browser":"dist/sqlite-parser.js","scripts":{"test":"grunt test","build":"grunt release"},"engines":{"node":">=4"},"license":"MIT","files":["dist/","bin/","lib/","LICENSE","CHANGELOG.md","README.md"],"repository":"git@github.com:codeschool/sqlite-parser.git","bugs":{"url":"https://github.com/codeschool/sqlite-parser/issues"},"devDependencies":{"babel-core":"^6.17.0","babel-plugin-add-module-exports":"^0.2.1","babel-preset-es2015":"^6.16.0","bluebird":"^3.4.6","chai":"^3.5.0","codemirror":"^5.19.0","glob":"^7.1.0","grunt":"^1.0.1","grunt-babel":"^6.0.0","grunt-banner":"^0.6.0","grunt-browserify":"^5.0.0","grunt-cli":"^1.2.0","grunt-concurrent":"^2.3.1","grunt-contrib-clean":"^1.0.0","grunt-contrib-connect":"^1.0.2","grunt-contrib-copy":"^1.0.0","grunt-contrib-cssmin":"^1.0.2","grunt-contrib-uglify":"^2.0.0","grunt-contrib-watch":"^1.0.0","grunt-replace":"^1.0.1","grunt-shell":"^2.0.0","load-grunt-tasks":"^3.5.2","lodash":"^4.16.2","mocha":"^3.1.0","pegjs":"git+https://github.com/nwronski/pegjs.git#master","prettyjson":"^1.1.3"},"dependencies":{}}

/***/ }),

/***/ "Yy47":
/***/ (function(module, exports) {

module.exports = {"name":"babylon","version":"5.8.38","description":"","author":"Sebastian McKenzie <sebmck@gmail.com>","homepage":"https://babeljs.io/","license":"MIT","repository":"babel/babel","main":"lib/index.js"}

/***/ }),

/***/ "ZnpT":
/***/ (function(module, exports) {

module.exports = {"name":"babylon","version":"6.18.0","description":"A JavaScript parser","author":"Sebastian McKenzie <sebmck@gmail.com>","homepage":"https://babeljs.io/","license":"MIT","keywords":["babel","javascript","parser","babylon"],"repository":"https://github.com/babel/babylon","main":"lib/index.js","files":["bin","lib"],"devDependencies":{"ava":"^0.17.0","babel-cli":"^6.14.0","babel-eslint":"^7.0.0","babel-helper-fixtures":"^6.9.0","babel-plugin-external-helpers":"^6.18.0","babel-plugin-istanbul":"^3.0.0","babel-plugin-transform-flow-strip-types":"^6.14.0","babel-preset-es2015":"^6.14.0","babel-preset-stage-0":"^6.5.0","chalk":"^1.1.3","codecov":"^1.0.1","cross-env":"^2.0.0","eslint":"^3.7.1","eslint-config-babel":"^6.0.0","eslint-plugin-flowtype":"^2.20.0","flow-bin":"^0.42.0","nyc":"^10.0.0","rimraf":"^2.5.4","rollup":"^0.41.0","rollup-plugin-babel":"^2.6.1","rollup-plugin-node-resolve":"^2.0.0","rollup-watch":"^3.2.2","unicode-9.0.0":"~0.7.0"},"bin":{"babylon":"./bin/babylon.js"},"scripts":{"build":"npm run clean && rollup -c","coverage":"nyc report --reporter=json && codecov -f coverage/coverage-final.json","lint":"eslint src bin","clean":"rimraf lib","flow":"flow","prepublish":"cross-env BABEL_ENV=production npm run build","preversion":"npm run test && npm run changelog","test":"npm run lint && npm run flow && npm run build -- -m && npm run test-only","test-only":"ava","test-ci":"nyc npm run test-only","changelog":"git log `git describe --tags --abbrev=0`..HEAD --pretty=format:' * %s (%an)' | grep -v 'Merge pull request'","watch":"npm run clean && rollup -c --watch"},"nyc":{"include":["src/**/*.js","bin/**/*.js"],"sourceMap":false,"instrument":false},"ava":{"files":["test/*.js"],"source":["src/**/*.js","bin/**/*.js"]},"greenkeeper":{"ignore":["cross-env"]}}

/***/ }),

/***/ "aQG8":
/***/ (function(module, exports) {

module.exports = {"name":"typescript","author":"Microsoft Corp.","homepage":"http://typescriptlang.org/","version":"2.6.1","license":"Apache-2.0","description":"TypeScript is a language for application scale JavaScript development","keywords":["TypeScript","Microsoft","compiler","language","javascript"],"bugs":{"url":"https://github.com/Microsoft/TypeScript/issues"},"repository":{"type":"git","url":"https://github.com/Microsoft/TypeScript.git"},"main":"./lib/typescript.js","typings":"./lib/typescript.d.ts","bin":{"tsc":"./bin/tsc","tsserver":"./bin/tsserver"},"engines":{"node":">=4.2.0"},"devDependencies":{"@types/browserify":"latest","@types/chai":"latest","@types/colors":"latest","@types/convert-source-map":"latest","@types/del":"latest","@types/glob":"latest","@types/gulp":"3.X","@types/gulp-concat":"latest","@types/gulp-help":"latest","@types/gulp-newer":"latest","@types/gulp-sourcemaps":"latest","@types/merge2":"latest","@types/minimatch":"latest","@types/minimist":"latest","@types/mkdirp":"latest","@types/mocha":"latest","@types/node":"latest","@types/q":"latest","@types/run-sequence":"latest","@types/through2":"latest","@types/xml2js":"^0.4.0","xml2js":"^0.4.19","browser-resolve":"^1.11.2","browserify":"latest","chai":"latest","convert-source-map":"latest","del":"latest","gulp":"3.X","gulp-clone":"latest","gulp-concat":"latest","gulp-help":"latest","gulp-insert":"latest","gulp-newer":"latest","gulp-sourcemaps":"latest","gulp-typescript":"latest","istanbul":"latest","jake":"latest","merge2":"latest","minimist":"latest","mkdirp":"latest","mocha":"latest","mocha-fivemat-progress-reporter":"latest","q":"latest","run-sequence":"latest","sorcery":"latest","through2":"latest","travis-fold":"latest","ts-node":"latest","tslint":"latest","colors":"latest","typescript":"next"},"scripts":{"pretest":"jake tests","test":"jake runtests-parallel","build":"npm run build:compiler && npm run build:tests","build:compiler":"jake local","build:tests":"jake tests","start":"node lib/tsc","clean":"jake clean","gulp":"gulp","jake":"jake","lint":"jake lint","setup-hooks":"node scripts/link-hooks.js"},"browser":{"fs":false,"os":false,"path":false}}

/***/ }),

/***/ "bxK8":
/***/ (function(module, exports) {

module.exports = {"name":"eslint","version":"1.10.3","author":"Nicholas C. Zakas <nicholas+npm@nczconsulting.com>","description":"An AST-based pattern checker for JavaScript.","bin":{"eslint":"./bin/eslint.js"},"main":"./lib/api.js","scripts":{"test":"node Makefile.js test","lint":"node Makefile.js lint","patch":"node Makefile.js patch","minor":"node Makefile.js minor","major":"node Makefile.js major","docs":"node Makefile.js docs","gensite":"node Makefile.js gensite","browserify":"node Makefile.js browserify","perf":"node Makefile.js perf","profile":"beefy tests/bench/bench.js --open -- -t brfs -t ./tests/bench/xform-rules.js -r espree","coveralls":"cat ./coverage/lcov.info | coveralls","check-commit":"node Makefile.js checkGitCommit"},"files":["LICENSE","README.md","bin","conf","lib"],"repository":{"type":"git","url":"https://github.com/eslint/eslint"},"homepage":"http://eslint.org","bugs":"https://github.com/eslint/eslint/issues/","dependencies":{"chalk":"^1.0.0","concat-stream":"^1.4.6","debug":"^2.1.1","doctrine":"^0.7.1","escape-string-regexp":"^1.0.2","escope":"^3.3.0","espree":"^2.2.4","estraverse":"^4.1.1","estraverse-fb":"^1.3.1","esutils":"^2.0.2","file-entry-cache":"^1.1.1","glob":"^5.0.14","globals":"^8.11.0","handlebars":"^4.0.0","inquirer":"^0.11.0","is-my-json-valid":"^2.10.0","is-resolvable":"^1.0.0","js-yaml":"3.4.5","json-stable-stringify":"^1.0.0","lodash.clonedeep":"^3.0.1","lodash.merge":"^3.3.2","lodash.omit":"^3.1.0","minimatch":"^3.0.0","mkdirp":"^0.5.0","object-assign":"^4.0.1","optionator":"^0.6.0","path-is-absolute":"^1.0.0","path-is-inside":"^1.0.1","shelljs":"^0.5.3","strip-json-comments":"~1.0.1","text-table":"~0.2.0","user-home":"^2.0.0","xml-escape":"~1.0.0"},"devDependencies":{"beefy":"^1.0.0","brfs":"0.0.9","browserify":"^12.0.1","chai":"^3.4.0","cheerio":"^0.19.0","coveralls":"2.11.4","dateformat":"^1.0.8","ejs":"^2.3.3","esprima":"^2.4.1","esprima-fb":"^15001.1001.0-dev-harmony-fb","gh-got":"^2.2.0","istanbul":"^0.4.0","jsdoc":"^3.3.0-beta1","jsonlint":"^1.6.2","leche":"^2.1.1","linefix":"^0.1.1","load-perf":"^0.2.0","markdownlint":"^0.0.8","mocha":"^2.1.0","mocha-phantomjs":"4.0.1","npm-license":"^0.3.1","phantomjs":"1.9.18","proxyquire":"^1.0.0","rewire":"^2.3.4","semver":"^5.0.3","shelljs-nodecli":"~0.1.0","sinon":"1.17.2","through":"^2.3.6"},"keywords":["ast","lint","javascript","ecmascript","espree"],"license":"MIT","engines":{"node":">=0.10"}}

/***/ }),

/***/ "cDiI":
/***/ (function(module, exports) {

module.exports = {"name":"eslint","version":"3.19.0","author":"Nicholas C. Zakas <nicholas+npm@nczconsulting.com>","description":"An AST-based pattern checker for JavaScript.","bin":{"eslint":"./bin/eslint.js"},"main":"./lib/api.js","scripts":{"test":"node Makefile.js test","lint":"node Makefile.js lint","release":"node Makefile.js release","ci-release":"node Makefile.js ciRelease","alpharelease":"node Makefile.js prerelease -- alpha","betarelease":"node Makefile.js prerelease -- beta","docs":"node Makefile.js docs","gensite":"node Makefile.js gensite","browserify":"node Makefile.js browserify","perf":"node Makefile.js perf","profile":"beefy tests/bench/bench.js --open -- -t brfs -t ./tests/bench/xform-rules.js -r espree","coveralls":"cat ./coverage/lcov.info | coveralls","check-commit":"node Makefile.js checkGitCommit"},"files":["LICENSE","README.md","bin","conf","lib","messages"],"repository":"eslint/eslint","homepage":"http://eslint.org","bugs":"https://github.com/eslint/eslint/issues/","dependencies":{"babel-code-frame":"^6.16.0","chalk":"^1.1.3","concat-stream":"^1.5.2","debug":"^2.1.1","doctrine":"^2.0.0","escope":"^3.6.0","espree":"^3.4.0","esquery":"^1.0.0","estraverse":"^4.2.0","esutils":"^2.0.2","file-entry-cache":"^2.0.0","glob":"^7.0.3","globals":"^9.14.0","ignore":"^3.2.0","imurmurhash":"^0.1.4","inquirer":"^0.12.0","is-my-json-valid":"^2.10.0","is-resolvable":"^1.0.0","js-yaml":"^3.5.1","json-stable-stringify":"^1.0.0","levn":"^0.3.0","lodash":"^4.0.0","mkdirp":"^0.5.0","natural-compare":"^1.4.0","optionator":"^0.8.2","path-is-inside":"^1.0.1","pluralize":"^1.2.1","progress":"^1.1.8","require-uncached":"^1.0.2","shelljs":"^0.7.5","strip-bom":"^3.0.0","strip-json-comments":"~2.0.1","table":"^3.7.8","text-table":"~0.2.0","user-home":"^2.0.0"},"devDependencies":{"babel-polyfill":"^6.23.0","babel-preset-es2015":"^6.24.0","babelify":"^7.3.0","beefy":"^2.1.8","brfs":"1.4.3","browserify":"^14.1.0","chai":"^3.5.0","cheerio":"^0.22.0","coveralls":"^2.12.0","dateformat":"^2.0.0","ejs":"^2.5.6","eslint-plugin-eslint-plugin":"^0.7.1","eslint-plugin-node":"^4.2.1","eslint-release":"^0.10.1","esprima":"^3.1.3","esprima-fb":"^15001.1001.0-dev-harmony-fb","istanbul":"^0.4.5","jsdoc":"^3.4.3","karma":"^1.5.0","karma-babel-preprocessor":"^6.0.1","karma-mocha":"^1.3.0","karma-mocha-reporter":"^2.2.2","karma-phantomjs-launcher":"^1.0.4","leche":"^2.1.2","load-perf":"^0.2.0","markdownlint":"^0.4.0","mocha":"^3.2.0","mock-fs":"^4.2.0","npm-license":"^0.3.3","phantomjs-prebuilt":"^2.1.14","proxyquire":"^1.7.11","semver":"^5.3.0","shelljs-nodecli":"~0.1.1","sinon":"^2.0.0","temp":"^0.8.3","through":"^2.3.8"},"keywords":["ast","lint","javascript","ecmascript","espree"],"license":"MIT","engines":{"node":">=4"}}

/***/ }),

/***/ "dlma":
/***/ (function(module, exports) {

module.exports = {"name":"postcss","version":"6.0.14","description":"Tool for transforming styles with JS plugins","engines":{"node":">=4.0.0"},"keywords":["css","postcss","rework","preprocessor","parser","source map","transform","manipulation","transpiler"],"author":"Andrey Sitnik <andrey@sitnik.ru>","license":"MIT","homepage":"http://postcss.org/","repository":"postcss/postcss","dependencies":{"chalk":"^2.3.0","source-map":"^0.6.1","supports-color":"^4.4.0"},"devDependencies":{"babel-core":"^6.26.0","babel-eslint":"^8.0.1","babel-plugin-add-module-exports":"^0.2.1","babel-plugin-precompile-charcodes":"^1.1.0","babel-preset-env":"^1.6.1","concat-with-sourcemaps":"^1.0.4","del":"^3.0.0","docdash":"^0.4.0","eslint":"^4.10.0","eslint-config-postcss":"^2.0.2","fs-extra":"^4.0.2","gulp":"^3.9.1","gulp-babel":"^7.0.0","gulp-changed":"^3.1.1","gulp-eslint":"^4.0.0","gulp-jest":"^2.0.0","gulp-run":"^1.7.1","gulp-sourcemaps":"^2.6.1","jest":"^21.2.1","jsdoc":"^3.5.5","lint-staged":"^4.3.0","postcss-parser-tests":"^6.1.0","pre-commit":"^1.2.2","run-sequence":"^2.2.0","size-limit":"^0.12.1","strip-ansi":"^4.0.0","yaspeller-ci":"^0.7.0"},"scripts":{"lint-staged":"lint-staged","test":"gulp"},"main":"lib/postcss","types":"lib/postcss.d.ts","lint-staged":{"test/*.js":"eslint","lib/*.es6":"eslint","*.md":"yaspeller-ci"},"pre-commit":["lint-staged"],"browser":{"supports-color":false,"chalk":false,"fs":false},"size-limit":[{"path":"lib/postcss.js","limit":"29 KB"}],"jest":{"modulePathIgnorePatterns":["build"]},"eslintConfig":{"parser":"babel-eslint","extends":"eslint-config-postcss","rules":{"consistent-return":"off","valid-jsdoc":"error","complexity":"off","no-new":"off"},"env":{"browser":true,"jest":true}}}

/***/ }),

/***/ "eG/S":
/***/ (function(module, exports) {

module.exports = {"name":"eslint","version":"4.11.0","author":"Nicholas C. Zakas <nicholas+npm@nczconsulting.com>","description":"An AST-based pattern checker for JavaScript.","bin":{"eslint":"./bin/eslint.js"},"main":"./lib/api.js","scripts":{"test":"node Makefile.js test","lint":"node Makefile.js lint","fuzz":"node Makefile.js fuzz","release":"node Makefile.js release","ci-release":"node Makefile.js ciRelease","alpharelease":"node Makefile.js prerelease -- alpha","betarelease":"node Makefile.js prerelease -- beta","docs":"node Makefile.js docs","gensite":"node Makefile.js gensite","browserify":"node Makefile.js browserify","perf":"node Makefile.js perf","profile":"beefy tests/bench/bench.js --open -- -t brfs -t ./tests/bench/xform-rules.js -r espree","coveralls":"cat ./coverage/lcov.info | coveralls"},"files":["LICENSE","README.md","bin","conf","lib","messages"],"repository":"eslint/eslint","homepage":"https://eslint.org","bugs":"https://github.com/eslint/eslint/issues/","dependencies":{"ajv":"^5.3.0","babel-code-frame":"^6.22.0","chalk":"^2.1.0","concat-stream":"^1.6.0","cross-spawn":"^5.1.0","debug":"^3.0.1","doctrine":"^2.0.0","eslint-scope":"^3.7.1","espree":"^3.5.2","esquery":"^1.0.0","estraverse":"^4.2.0","esutils":"^2.0.2","file-entry-cache":"^2.0.0","functional-red-black-tree":"^1.0.1","glob":"^7.1.2","globals":"^9.17.0","ignore":"^3.3.3","imurmurhash":"^0.1.4","inquirer":"^3.0.6","is-resolvable":"^1.0.0","js-yaml":"^3.9.1","json-stable-stringify-without-jsonify":"^1.0.1","levn":"^0.3.0","lodash":"^4.17.4","minimatch":"^3.0.2","mkdirp":"^0.5.1","natural-compare":"^1.4.0","optionator":"^0.8.2","path-is-inside":"^1.0.2","pluralize":"^7.0.0","progress":"^2.0.0","require-uncached":"^1.0.3","semver":"^5.3.0","strip-ansi":"^4.0.0","strip-json-comments":"~2.0.1","table":"^4.0.1","text-table":"~0.2.0"},"devDependencies":{"babel-polyfill":"^6.23.0","babel-preset-es2015":"^6.24.1","babelify":"^7.3.0","beefy":"^2.1.8","brfs":"1.4.3","browserify":"^14.4.0","chai":"^4.0.1","cheerio":"^0.22.0","coveralls":"^2.13.1","dateformat":"^2.0.0","ejs":"^2.5.6","eslint-plugin-eslint-plugin":"^1.2.0","eslint-plugin-node":"^5.1.0","eslint-plugin-rulesdir":"^0.1.0","eslint-release":"^0.10.1","eslint-rule-composer":"^0.1.0","eslump":"1.6.0","esprima":"^4.0.0","esprima-fb":"^15001.1001.0-dev-harmony-fb","istanbul":"^0.4.5","jsdoc":"^3.4.3","karma":"^1.7.0","karma-babel-preprocessor":"^6.0.1","karma-mocha":"^1.3.0","karma-mocha-reporter":"^2.2.3","karma-phantomjs-launcher":"^1.0.4","leche":"^2.1.2","load-perf":"^0.2.0","markdownlint":"^0.6.1","mocha":"^3.4.2","mock-fs":"^4.3.0","npm-license":"^0.3.3","phantomjs-prebuilt":"^2.1.14","proxyquire":"^1.8.0","shelljs":"^0.7.7","sinon":"^3.2.1","temp":"^0.8.3","through":"^2.3.8"},"keywords":["ast","lint","javascript","ecmascript","espree"],"license":"MIT","engines":{"node":">=4"}}

/***/ }),

/***/ "eSaf":
/***/ (function(module, exports) {

module.exports = {"name":"webidl2","description":"A WebIDL Parser","version":"8.1.0","contributors":["Robin Berjon <robin@berjon.com> (https://berjon.com)","Marcos Caceres <marcos@marcosc.com> (https://marcosc.com)","Kagami Sascha Rosylight <saschaplas@outlook.com>"],"license":"W3C","dependencies":{},"devDependencies":{"expect":"21.2.1","jsondiffpatch":"0.2.5","mocha":"4.0.1"},"scripts":{"test":"mocha"},"repository":"git://github.com/darobin/webidl2.js","main":"index"}

/***/ }),

/***/ "fCsT":
/***/ (function(module, exports) {

module.exports = {"name":"@glimmer/syntax","version":"0.30.2","repository":"https://github.com/glimmerjs/glimmer-vm/tree/master/packages/@glimmer/syntax","dependencies":{"handlebars":"^4.0.6","@glimmer/interfaces":"^0.30.2","@glimmer/util":"^0.30.2","simple-html-tokenizer":"^0.4.1"},"devDependencies":{"@types/handlebars":"^4.0.31","@types/qunit":"^2.0.31","typescript":"^2.2.0"},"main":"dist/commonjs/es5/index.js","jsnext:main":"dist/modules/es5/index.js","module":"dist/modules/es2017/index.js","typings":"dist/types/index.d.ts","license":"MIT"}

/***/ }),

/***/ "fnVq":
/***/ (function(module, exports) {

module.exports = {"name":"flow-parser","version":"0.63.1","description":"JavaScript parser written in OCaml. Produces SpiderMonkey AST","homepage":"https://flow.org","license":"MIT","author":{"name":"Gabe Levi","email":"gabe@fb.com"},"files":["flow_parser.js"],"main":"flow_parser.js","repository":{"type":"git","url":"https://github.com/facebook/flow.git"},"scripts":{"test":"node test/run_tests.js","prepublish":"make js"},"dependencies":{},"devDependencies":{"ast-types":"0.8.18","colors":">=0.6.2","esprima-fb":"15001.1001.0-dev-harmony-fb","minimist":">=0.2.0"},"engines":{"node":">=0.4.0"}}

/***/ }),

/***/ "gnAm":
/***/ (function(module, exports) {

module.exports = {"name":"regexp-tree","version":"0.0.65","license":"MIT","description":"Regular Expressions parser in JavaScript","repository":"DmitrySoshnikov/regexp-tree","homepage":"https://github.com/DmitrySoshnikov/regexp-tree","bugs":"https://github.com/DmitrySoshnikov/regexp-tree/issues","scripts":{"build":"./scripts/build","test":"jest","prepublish":"npm test && npm run build","eslint":"./node_modules/.bin/eslint src/"},"bin":{"regexp-tree":"./bin/regexp-tree"},"keywords":["regexp","parser","AST","tree","JavaScript","ECMAScript"],"author":"Dmitry Soshnikov","engines":{"node":">=6"},"dependencies":{"cli-table2":"^0.2.0","colors":"^1.1.2","nomnom":"^1.8.1"},"devDependencies":{"eslint":"^4.11.0","jest-cli":"^19.0.2","syntax-cli":"^0.0.91"}}

/***/ }),

/***/ "jGK2":
/***/ (function(module, exports) {

module.exports = {"name":"prettier","version":"1.8.2","description":"Prettier is an opinionated code formatter","bin":{"prettier":"./bin/prettier.js"},"repository":"prettier/prettier","homepage":"https://prettier.io","author":"James Long","license":"MIT","main":"./index.js","engines":{"node":">=4"},"devDependencies":{"babel-cli":"6.24.1","babel-preset-es2015":"6.24.1","codecov":"2.2.0","cross-env":"5.0.5","eslint":"4.1.1","eslint-friendly-formatter":"3.0.0","eslint-plugin-import":"2.6.1","eslint-plugin-prettier":"2.1.2","eslint-plugin-react":"7.1.0","jest":"21.1.0","mkdirp":"0.5.1","prettier":"1.8.0","rimraf":"2.6.2","rollup":"0.41.6","rollup-plugin-commonjs":"7.0.2","rollup-plugin-json":"2.1.1","rollup-plugin-node-builtins":"2.0.0","rollup-plugin-node-globals":"1.1.0","rollup-plugin-node-resolve":"2.0.0","rollup-plugin-replace":"1.1.1","shelljs":"0.7.8","strip-ansi":"4.0.0","sw-toolbox":"3.6.0","uglify-es":"3.0.28","webpack":"2.6.1"},"scripts":{"prepublishOnly":"node -e \"assert.equal(require('.').version, require('..').version)\""}}

/***/ }),

/***/ "kR3d":
/***/ (function(module, exports) {

module.exports = {"name":"htmlparser2","description":"Fast & forgiving HTML/XML/RSS parser","version":"3.9.2","author":"Felix Boehm <me@feedic.com>","keywords":["html","parser","streams","xml","dom","rss","feed","atom"],"repository":{"type":"git","url":"git://github.com/fb55/htmlparser2.git"},"bugs":{"mail":"me@feedic.com","url":"http://github.com/fb55/htmlparser2/issues"},"directories":{"lib":"lib/"},"main":"lib/index.js","files":["lib"],"scripts":{"lcov":"istanbul cover _mocha --report lcovonly -- -R spec","coveralls":"npm run lint && npm run lcov && (cat coverage/lcov.info | coveralls || exit 0)","test":"mocha && npm run lint","lint":"eslint lib test"},"dependencies":{"domelementtype":"^1.3.0","domhandler":"^2.3.0","domutils":"^1.5.1","entities":"^1.1.1","inherits":"^2.0.1","readable-stream":"^2.0.2"},"devDependencies":{"coveralls":"^2.11.4","istanbul":"^0.4.3","mocha":"^2.2.5","eslint":"^2.12.0","mocha-lcov-reporter":"^1.2.0"},"browser":{"readable-stream":false},"license":"MIT"}

/***/ }),

/***/ "nWUZ":
/***/ (function(module, exports) {

module.exports = {"name":"yaml-ast-parser","version":"0.0.39","main":"dist/src/index.js","scripts":{"build":"rimraf dist && tsc","pullall":"dev-env-installer pullall","buildall":"dev-env-installer buildall","testall":"dev-env-installer testall","devInstall":"dev-env-installer install","test":"npm run build && mocha --ui tdd dist/test"},"dependencies":{},"typings":"dist/src/index.d.ts","repository":{"type":"git","url":"https://github.com/mulesoft-labs/yaml-ast-parser.git"},"keywords":["raml","ast","yaml"],"homepage":"https://github.com/mulesoft-labs/yaml-ast-parser","license":"Apache-2.0","bugs":{"url":"https://github.com/mulesoft-labs/yaml-ast-parser/issues"},"devDependencies":{"@types/chai":"4.0.1","@types/mocha":"2.2.41","@types/node":"4.2.20","chai":"4.0.2","dev-env-installer":"0.0.14","mocha":"3.4.2","rimraf":"*","typescript":"2.5.2"}}

/***/ }),

/***/ "se15":
/***/ (function(module, exports) {

module.exports = {"name":"shift-parser","version":"5.2.3","description":"ECMAScript parser that produces a Shift format AST","author":"Shape Security","homepage":"https://github.com/shapesecurity/shift-parser-js","repository":{"type":"git","url":"https://github.com/shapesecurity/shift-parser-js.git"},"main":"dist/index.js","files":["dist"],"scripts":{"clean":"rm -rf dist coverage .nyc_output","test":"mocha --inline-diffs --check-leaks --ui tdd --reporter dot --slow 200 --timeout 5000 --recursive test --compilers js:babel-core/register","coverage":"npm run build -- --plugins=istanbul && nyc --check-coverage --branches 100 --functions 100 --lines 100 --statements 100 npm test","lint":"eslint src test","build":"babel --out-dir dist src","prepare":"rm -rf dist/* && npm update && npm run build","benchmark":"node benchmark","profile":"node --prof profile.js && node-tick-processor","regenerate-unicode":"node scripts/generate-unicode-data.js > src/unicode.js"},"dependencies":{"es6-map":"^0.1.1","multimap":"^0.1.1","shift-ast":"^4.0.0","shift-reducer":"^4.0.0"},"devDependencies":{"acorn":"2.1.0","angular":"1.4.3","babel-cli":"6.3.13","babel-core":"6.21.0","babel-eslint":"8.0.0","babel-plugin-istanbul":"4.0.0","babel-preset-es2015":"6.3.13","benchmark":"1.0.0","eslint":"4.7.2","esprima":"2.5.0","everything.js":"1.0.3","expect.js":"0.3.1","microtime":"^2.0.0","mocha":"2.3.4","normalize-parser-test":"1.0.3","nyc":"10.1.2","regenerate":"^1.3.2","shift-parser-expectations":"2016.0.0","shift-spec":"^2016.0.0","test262-parser-tests":"0.0.3","tick":"0.1.1","traceur":"0.0.91","uglifyjs":"2.4.10","unicode-8.0.0":"^0.7.0"},"keywords":["Shift","AST","node","parser","SpiderMonkey","Parser","API","parse","spider","monkey","abstract","syntax","tree"],"bugs":{"url":"https://github.com/shapesecurity/shift-parser-js/issues"},"license":"Apache-2.0","nyc":{"include":["src"],"sourceMap":false,"instrument":false}}

/***/ }),

/***/ "tTZe":
/***/ (function(module, exports) {

module.exports = {"name":"css-tree","version":"1.0.0-alpha.26","description":"CSSTree is a tool set to work with CSS, including fast detailed parser (string->AST), walker (AST traversal), generator (AST->string) and lexer (validation and matching) based on knowledge of spec and browser implementations","keywords":["css","ast","tokenizer","parser","walker","lexer","generator","utils","syntax","validation"],"homepage":"https://github.com/csstree/csstree","author":"Roman Dvornov <rdvornov@gmail.com> (https://github.com/lahmatiy)","maintainers":[{"name":"Roman Dvornov","email":"rdvornov@gmail.com","github-username":"lahmatiy"}],"license":"MIT","repository":"csstree/csstree","bugs":{"url":"https://github.com/csstree/csstree/issues"},"main":"./lib/index","browser":{"./data":"./dist/default-syntax.json"},"eslintConfig":{"env":{"node":true,"mocha":true,"es6":true},"rules":{"no-duplicate-case":2,"no-undef":2,"no-unused-vars":[2,{"vars":"all","args":"after-used"}]}},"scripts":{"lint":"jscs data lib scripts test && eslint data lib scripts test && node scripts/update-docs --lint","update:docs":"node scripts/update-docs","build":"npm run gen:syntax && browserify --standalone csstree lib/index.js | uglifyjs --compress --mangle -o dist/csstree.js","lint-and-test":"npm run lint && npm test","test":"mocha --reporter progress","gen:syntax":"node scripts/gen-syntax-data","coverage":"istanbul cover _mocha -- -R min","prepublish":"npm run build","travis":"npm run lint-and-test && npm run coveralls","coveralls":"istanbul cover _mocha --report lcovonly -- -R min && cat ./coverage/lcov.info | coveralls","hydrogen":"node --trace-hydrogen --trace-phase=Z --trace-deopt --code-comments --hydrogen-track-positions --redirect-code-traces --redirect-code-traces-to=code.asm --trace_hydrogen_file=code.cfg --print-opt-code bin/parse --stat -o /dev/null"},"dependencies":{"mdn-data":"^1.0.0","source-map":"^0.5.3"},"devDependencies":{"browserify":"^13.0.0","coveralls":"^2.11.6","eslint":"^2.13.1","istanbul":"^0.4.2","jscs":"~3.0.7","json-to-ast":"~2.0.1","mocha":"^3.0.2","uglify-js":"^2.6.1"},"engines":{"node":">=0.10.0"},"files":["bin","data","dist/csstree.js","dist/default-syntax.json","docs","lib","HISTORY.md","LICENSE","README.md"]}

/***/ }),

/***/ "wMHn":
/***/ (function(module, exports) {

module.exports = {"name":"intl-messageformat-parser","version":"1.4.0","description":"Parses ICU Message strings into an AST via JavaScript.","main":"index.js","jsnext:main":"src/parser.js","scripts":{"test":"istanbul cover -- _mocha test/unit/ --reporter spec","prepublish":"grunt"},"repository":{"type":"git","url":"git://github.com/yahoo/intl-messageformat-parser.git"},"keywords":["i18n","intl","internationalization","localization","globalization","messageformat","parser","plural","icu"],"author":"Eric Ferraiuolo <eferraiuolo@gmail.com>","license":"BSD-3-Clause","bugs":{"url":"https://github.com/yahoo/intl-messageformat-parser/issues"},"homepage":"https://github.com/yahoo/intl-messageformat-parser","devDependencies":{"expect.js":"^0.3.1","grunt":"^0.4.5","grunt-benchmark":"^0.3.0","grunt-bundle-jsnext-lib":"^0.5.0","grunt-cli":"^0.1.13","grunt-contrib-clean":"^0.6.0","grunt-contrib-copy":"^0.7.0","grunt-peg":"^2.0.1","istanbul":"^0.3.2","mocha":"^2.0.1","xunit-file":"0.0.6"}}

/***/ }),

/***/ "xh2N":
/***/ (function(module, exports) {

module.exports = {"name":"typescript-eslint-parser","description":"An Esprima-style parser for TypeScript","author":"Nicholas C. Zakas <nicholas+npm@nczconsulting.com>","homepage":"https://github.com/eslint/typescript-eslint-parser","main":"parser.js","version":"9.0.0","files":["lib","parser.js"],"engines":{"node":">=4"},"repository":"eslint/typescript-eslint-parser","bugs":{"url":"https://github.com/eslint/typescript-eslint-parser/issues"},"license":"BSD-2-Clause","devDependencies":{"babel-code-frame":"6.26.0","babylon":"7.0.0-beta.24","eslint":"4.10.0","eslint-config-eslint":"4.0.0","eslint-plugin-node":"5.2.1","eslint-release":"0.10.3","glob":"7.1.2","jest":"21.2.1","lodash.isplainobject":"4.0.6","npm-license":"0.3.3","shelljs":"0.7.8","shelljs-nodecli":"0.1.1","typescript":"~2.6.1"},"keywords":["ast","ecmascript","javascript","typescript","parser","syntax","eslint"],"scripts":{"test":"node Makefile.js test && npm run ast-alignment-tests","jest":"jest","ast-alignment-tests":"jest --config={} ./tests/ast-alignment/spec.js","lint":"node Makefile.js lint","release":"eslint-release","ci-release":"eslint-ci-release","gh-release":"eslint-gh-release","alpharelease":"eslint-prerelease alpha","betarelease":"eslint-prerelease beta"},"dependencies":{"lodash.unescape":"4.0.1","semver":"5.4.1"},"peerDependencies":{"typescript":"*"},"jest":{"testRegex":"tests/lib/.+\\.js$","testPathIgnorePatterns":[],"collectCoverage":true,"coverageReporters":["text-summary"]}}

/***/ }),

/***/ "xreR":
/***/ (function(module, exports) {

module.exports = {"name":"acorn-to-esprima","version":"1.0.7","description":"Convert acorn tokens to esprima","main":"src/index.js","repository":"babel/acorn-to-esprima","keywords":["acorn","esprima","babel-eslint","babel-jscs","babel"],"author":"Sebastian McKenzie <sebmck@gmail.com>","license":"MIT","bugs":{"url":"https://github.com/babel/acorn-to-esprima/issues"},"homepage":"https://github.com/babel/acorn-to-esprima#readme"}

/***/ }),

/***/ "yAbH":
/***/ (function(module, exports) {

module.exports = {"name":"graphql","version":"0.11.7","description":"A Query Language and Runtime which can target any service.","contributors":["Lee Byron <lee@leebyron.com> (http://leebyron.com/)","Nicholas Schrock <schrockn@fb.com>","Daniel Schafer <dschafer@fb.com>"],"license":"MIT","main":"index.js","homepage":"https://github.com/graphql/graphql-js","bugs":{"url":"https://github.com/graphql/graphql-js/issues"},"repository":{"type":"git","url":"http://github.com/graphql/graphql-js.git"},"dependencies":{"iterall":"1.1.3"}}

/***/ })

});