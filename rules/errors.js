module.exports = {
  rules: {
    // for循环 需要往正确的方向循环,避免死循环
    'for-direction': 'off',

    // 禁止循环中有 await
    'no-await-in-loop': 'error',

    // 禁止和 -0 比较
    'no-compare-neg-zero': 'error',

    // 禁止在条件表达式使用赋值
    'no-cond-assign': ['error', 'always'],

    // 禁止使用console
    'no-console': 'warn',

    // 禁止在条件中使用常量表达式
    'no-constant-condition': 'warn',

    // 禁止在正则表达式中使用控制字符
    'no-control-regex': 'error',

    // 禁用 debugger
    'no-debugger': 'error',

    // 禁止 function 定义中出现重名参数
    'no-dupe-args': 'error',

    // 禁止对象字面量中出现重复的 key
    'no-dupe-keys': 'error',

    // 禁止出现重复的 case 标签
    'no-duplicate-case': 'error',

    // 禁止出现空语句块
    'no-empty': 'error',

    // 禁止在正则表达式中出现空字符集
    'no-empty-character-class': 'error',

    // 禁止对 catch 子句的参数重新赋值
    'no-ex-assign': 'error',

    // 禁止不必要的布尔转换
    'no-extra-boolean-cast': 'error',

    // 禁止不必要的括号
    'no-extra-parens': ['off', 'all', {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: false,
    }],

    // 禁止不必要的分号
    'no-extra-semi': 'error',

    // 禁止对 function 声明重新赋值
    'no-func-assign': 'error',

    // 禁止在嵌套的块中出现变量声明或 function 声明
    'no-inner-declarations': 'error',

    // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
    'no-invalid-regexp': 'error',

    // 禁止在字符串和注释之外不规则的空白
    'no-irregular-whitespace': 'error',

    // 禁止把全局对象作为函数调用
    'no-obj-calls': 'error',

    // 禁止直接调用 Object.prototypes 的内置属性
    'no-prototype-builtins': 'error',

    // 禁止正则表达式字面量中出现多个空格
    'no-regex-spaces': 'error',

    // 禁用稀疏数组
    'no-sparse-arrays': 'error',

    // 禁止在模板中使用不同的符号
    'no-template-curly-in-string': 'error',

    // 禁止多行表达式
    'no-unexpected-multiline': 'error',

    // 禁止写无法执行的代码(return,throw,contine,break)
    'no-unreachable': 'error',

    // 禁止在finally中使用return,throw,contine,break
    'no-unsafe-finally': 'error',

    // 禁止在运算符左侧执行关系运算
    'no-unsafe-negation': 'error',

    // 禁止比较时使用NaN，只能用isNaN()
    'use-isnan': 'error',

    // 强制使用有效的 JSDoc 注释
    'valid-jsdoc': 'off',

    // 强制使用有效的 JSDoc 注释
    'valid-typeof': ['error', { requireStringLiterals: true }],
  }
};
