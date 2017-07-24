module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false
    }
  },

  rules: {
    // 允许箭头函数
    // http://eslint.org/docs/rules/arrow-body-såtyle
    // TODO: enable requireReturnForObjectLiteral?
    'arrow-body-style': ['error', 'as-needed', {
      requireReturnForObjectLiteral: false,
    }],

    // 箭头函数用小括号括起来
    // http://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['error', 'as-needed', {
      requireForBlockBody: true,
    }],

    // 箭头的前/后括号空格
    // http://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': ['error', { before: true, after: true }],

    // 在构造函数中需要super()调用
    'constructor-super': 'error',

    // 在生成器函数中的*操作符周围保持统一的间距
    // http://eslint.org/docs/rules/generator-star-spacing
    'generator-star-spacing': ['error', { before: false, after: true }],

    // 禁止重新分配Class成员
    // http://eslint.org/docs/rules/no-class-assign
    'no-class-assign': 'error',

    // 在可能会与对比运算符混淆的地方禁止箭头功能
    // http://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': ['error', {
      allowParens: true,
    }],

    // 禁止重新分配常量变量
    'no-const-assign': 'error',

    // 禁止重复的class成员
    // http://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members': 'error',

    // 禁止重复模块导入
    // http://eslint.org/docs/rules/no-duplicate-imports
    // replaced by https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'no-duplicate-imports': 'off',

    // 禁止在Symbol对象用new操作符
    // http://eslint.org/docs/rules/no-new-symbol
    'no-new-symbol': 'error',

    // 通过import加载时禁止指定的模块
    // http://eslint.org/docs/rules/no-restricted-imports
    'no-restricted-imports': 'off',

    // 在构造函数中调用super()之前禁止用this
    // http://eslint.org/docs/rules/no-this-before-super
    'no-this-before-super': 'error',

    // 禁止对象文字中不必要的计算属性键
    // http://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-computed-key': 'error',

    // 禁止不必要的构造函数
    // http://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': 'error',

    // 禁止不必要的重命名
    // http://eslint.org/docs/rules/no-useless-rename
    'no-useless-rename': ['error', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    }],

    // 用let,const代替var
    'no-var': 'error',

    // 强制或禁止对象文字的方法和属性简写语法
    // http://eslint.org/docs/rules/object-shorthand
    'object-shorthand': ['error', 'always', {
      ignoreConstructors: false,
      avoidQuotes: true,
    }],

    // 	需要箭头功能作为回调
    'prefer-arrow-callback': ['error', {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    }],

    // 永不改变的变量用const
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    }],

    // 需要从数组和/或对象中进行解构
    // http://eslint.org/docs/rules/prefer-destructuring
    // TODO: enable
    'prefer-destructuring': ['off', {
      array: true,
      object: true,
    }, {
      enforceForRenamedProperties: false,
    }],

    // 禁止parseInt()支持二进制，八进制和十六进制文字
    // http://eslint.org/docs/rules/prefer-numeric-literals
    'prefer-numeric-literals': 'error',

    // 需要reset参数
    // http://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': 'error',

    // 需要...操作符替代.apply()
    // http://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 'error',

    // 需要模板语法而不是字符串连接
    // http://eslint.org/docs/rules/prefer-template
    'prefer-template': 'error',

    // 生成器函数必须有yield
    // http://eslint.org/docs/rules/require-yield
    'require-yield': 'error',

    // 强制rest和展开运算符的间距
    // http://eslint.org/docs/rules/rest-spread-spacing
    'rest-spread-spacing': ['error', 'never'],

    // 强制在模块中执行排序的导入声明
    // http://eslint.org/docs/rules/sort-imports
    'sort-imports': ['off', {
      ignoreCase: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    }],

    // 需要Symbol说明
    // http://eslint.org/docs/rules/symbol-description
    'symbol-description': 'error',

    // 强制或禁止模板字符串的嵌入式表达式周围有空格
    // http://eslint.org/docs/rules/template-curly-spacing
    'template-curly-spacing': 'error',

    // 强制或禁止的yield *中的间距
    // http://eslint.org/docs/rules/yield-star-spacing
    'yield-star-spacing': ['error', 'after']
  }
};
