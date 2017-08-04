# ESLint配置文件

ESLint 支持几种格式的配置文件：

- JavaScript - 使用 .eslintrc.js 然后输出一个配置对象。
- YAML - 使用 .eslintrc.yaml 或 .eslintrc.yml 去定义配置的结构。
- JSON - 使用 .eslintrc.json 去定义配置的结构，ESLint 的 JSON 文件允许 JavaScript 风格的注释。
- Deprecated - 使用 .eslintrc，可以使 JSON 也可以是 YAML。
- package.json - 在 package.json 里创建一个 eslintConfig属性，在那里定义你的配置。

如果同一个目录下有多个配置文件，ESLint 只会使用一个。优先级顺序如下：
1. .eslintrc.js
2. .eslintrc.yaml
3. .eslintrc.yml
4. .eslintrc.json
5. .eslintrc
6. package.json


# Specifying Environments

环境定义了预定义的全局变量。可用的环境(env)有：

- browser - browser 全局变量。
- node - Node.js 全局变量和 Node.js 作用域。
- commonjs - CommonJS 全局变量和 CommonJS 作用域 (仅为使用 Browserify/WebPack 写的只支持浏览器的代码)。
- shared-node-browser - Node 和 Browser 通用全局变量。
- es6 - 支持除模块外所有 ECMAScript 6 特性（该选项会自动设置 ecmaVersion 解析器选项为 6）。
- worker - web workers 全局变量。
- amd - 定义 require() 和 define() 作为像 amd 一样的全局变量。
- mocha - 添加所有的 Mocha 测试全局变量。
- jasmine - 添加所有的 Jasmine 版本 1.3 和 2.0 的测试全局变量。
- jest - Jest 全局变量。
- phantomjs - PhantomJS 全局变量。
- protractor - Protractor 全局变量。
- qunit - QUnit 全局变量。
- jquery - jQuery 全局变量。
- prototypejs - Prototype.js 全局变量。
- shelljs - ShellJS 全局变量。
- meteor - Meteor 全局变量。
- mongo - MongoDB 全局变量。
- applescript - AppleScript 全局变量。
- nashorn - Java 8 Nashorn 全局变量。
- serviceworker - Service Worker 全局变量。
- atomtest - Atom 测试全局变量。
- embertest - Ember 测试全局变量。
- webextensions - WebExtensions 全局变量。
- greasemonkey - GreaseMonkey 全局变量。

```JavaScript

```
