# eslint-config-alchemy

[![npm](https://img.shields.io/badge/npm-v0.0.3-brightgreen.svg)](https://www.npmjs.com/package/eslint-config-alchemy)
![build](https://img.shields.io/badge/build-passing-green.svg)
[![MIT License](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](https://github.com/IceEnd/eslint-config-alchemy/blob/master/LICENSE)

## 前端编码规范

- 错误规避
- ES6
- Node.js & Common
- 最佳实践
- 严格模式
- 代码风格
- 变量声明

##  使用

```package.json``` 中添加依赖：

```javascript
"eslint": "^4.2.0",
"eslint-config-alchemy": "latest"
```

设置配置文件，例如```.eslintrc.yml```:

```yml
env:
  node: true
  browser: true,
extends: alchemy
```
