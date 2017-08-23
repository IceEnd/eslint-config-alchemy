module.exports = {
  rules: {
    // 强制在对象中使用getter/setter
    'accessor-pairs': 'off',

    // 强制在数组方法的回调中执行return
    // http://eslint.org/docs/rules/array-callback-return
    'array-callback-return': 'error',

    // 强制使用它们定义的范围内的变量
    'block-scoped-var': 'error',

    // 强制该类方法利用 this,
    // http://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': 'off',

    // 强制设置一个循环的最大值
    complexity: ['off', 11],

    // require return statements to either always or never specify values
    'consistent-return': 'off',

    // 强制所有控制语句执行统一的括号风格
    curly: ['error', 'multi-line'],

    // 要求 switch 语句中有 default 分支
    'default-case': ['error', { commentPattern: '^no default$' }],

    // enforces consistent newlines before or after dots
    'dot-location': ['error', 'property'],

    // 强制在点号之前和之后一致的换行
    'dot-notation': ['error', { allowKeywords: true }],

    // 要求使用 === 和 !==
    eqeqeq: ['error', 'always', { null: 'ignore' }],

    // 要求 for-in 循环中有一个 if 语句
    'guard-for-in': 'off',

    // disallow the use of alert, confirm, and prompt
    'no-alert': 'warn',

    // 禁用 caller 或 callee
    'no-caller': 'error',

    // 禁止在 case 或 default 子句中出现词法声明
    'no-case-declarations': 'error',

    // 禁止使用看起来像除法的正则表达式
    'no-div-regex': 'off',

    // 禁止在 else 前有 return
    'no-else-return': 'error',

    // 禁止出现空函数
    'no-empty-function': ['error', {
      allow: [
        'arrowFunctions',
        'functions',
        'methods',
      ]
    }],

    // 禁止使用空解构模式
    'no-empty-pattern': 'error',

    // 禁止与 null 进行比较
    'no-eq-null': 'off',

    // 禁用 eval()
    'no-eval': 'error',

    // 禁止扩展原生对象
    'no-extend-native': 'error',

    // 禁止不必要的 .bind() 调用
    'no-extra-bind': 'error',

    // 禁用不必要的标签
    'no-extra-label': 'error',

    // 禁止 case 语句落空
    'no-fallthrough': 'error',

    // 禁止数字字面量中使用前导和末尾小数点
    'no-floating-decimal': 'error',

    // 禁止对本地对象或只读全局变量重定义
    'no-global-assign': ['error', { exceptions: [] }],

    // 禁止使用短符号进行类型转换
    // http://eslint.cn/docs/rules/no-implicit-coercion
    'no-implicit-coercion': ['off', {
      boolean: false,
      number: true,
      string: true,
      allow: [],
    }],

    // 禁止在全局范围内使用变量声明和 function 声明
    // http://eslint.cn/docs/rules/no-implicit-globals
    'no-implicit-globals': 'off',

    // 禁止使用类似 eval() 的方法
    // http://eslint.cn/docs/rules/no-implied-eval
    'no-implied-eval': 'error',

    // 禁止 this 关键字出现在类和类对象之外
    'no-invalid-this': 'off',

    // 禁用 __iterator__ 属性
    'no-iterator': 'error',

    // 禁用标签语句
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

    // 禁用不必要的嵌套块
    'no-lone-blocks': 'error',

    // 禁止在循环中出现 function 声明和表达式
    'no-loop-func': 'error',

    // 禁用魔术数字
    // http://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': ['off', {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    }],

    // 禁止使用多个空格
    'no-multi-spaces': 'error',

    // 禁止多行字符串
    'no-multi-str': 'error',

    // 禁止在使用new构造一个实例后不赋值
    'no-new': 'error',

    // 禁止使用new Function
    'no-new-func': 'error',

    // 禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-new-wrappers': 'error',

    // 禁用八进制字面量
    'no-octal': 'error',

    // 禁止在字符串中使用八进制转义序列
    // var foo = 'Copyright \251';
    'no-octal-escape': 'error',

    // 禁止对 function 的参数进行重新赋值
    // rule: http://eslint.org/docs/rules/no-param-reassign.html
    'no-param-reassign': ['error', { 'props': false }],

    // 禁用 __proto__ 属性
    'no-proto': 'error',

    // 禁止多次声明同一变量
    'no-redeclare': 'error',

    // 禁止在一些特定的对象上的特定属性
    // http://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-properties': ['error', {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    }, {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    }],

    // 禁止在 return 语句中使用赋值语句
    'no-return-assign': 'error',

    // 禁止非必要的return await
    'no-return-await': 'error',

    // 禁止使用 javascript: url
    'no-script-url': 'error',

    // 禁止自我赋值
    // http://eslint.org/docs/rules/no-self-assign
    'no-self-assign': 'error',

    // 禁止自身比较
    'no-self-compare': 'error',

    // 禁用逗号操作符
    'no-sequences': 'error',

    // 禁止抛出异常字面量
    'no-throw-literal': 'error',

    // 禁用一成不变的循环条件
    // http://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'off',

    // 禁用一成不变的循环条件
    'no-unused-expressions': ['error', {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false,
    }],

    // 禁用出现未使用过的标签
    // http://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': 'error',

    // 禁止不必要的 .call() 和 .apply()
    'no-useless-call': 'off',

    // 禁止不必要的字符串字面量或模板字面量的连接
    // http://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 'error',

    // 禁用不必要的转义字符
    // http://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 'error',

    // 禁用不必要的 return 关键字
    // http://eslint.org/docs/rules/no-useless-return
    'no-useless-return': 'off',

    // 禁用 void 操作符
    // http://eslint.org/docs/rules/no-void
    'no-void': 'error',

    // 禁止在注释中使用特定的警告术语
    'no-warning-comments': ['off', { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],

    // 禁用 with 语句
    'no-with': 'error',

    // 使用error对象作为Promise驳回原因
    // http://eslint.org/docs/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': ['off', { allowEmptyReject: true }],

    // 强制在parseInt()使用基数参数
    // http://eslint.cn/docs/rules/radix
    radix: 'error',

    // 禁止async中无await表达式
    // http://eslint.org/docs/rules/require-await
    'require-await': 'off',

    // 要求所有的 var 声明出现在它们所在的作用域顶部
    'vars-on-top': 'error',

    // 要求 IIFE 使用括号括起来entheses
    // http://eslint.org/docs/rules/wrap-iife.html
    'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],

    // 要求或禁止 “Yoda” 条件
    yoda: 'error'
  }
};
