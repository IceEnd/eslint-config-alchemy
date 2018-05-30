/**
*  代码风格相关规则
*/
module.exports = {
  rules: {
    // 强制在数组的头尾括号之前执行换行
    'array-bracket-spacing': ['error', 'never'],

    // 强制在数组括号内执行一致的间隔
    'array-bracket-spacing': ['error', 'never'],

    // 强制在每个数组元素之后执行换行符
    'array-element-newline': ['off', { multiline: true, minItems: 3 }],

    // 强制在单行块内实施一致的间距
    'block-spacing': ['error', 'never'],

    // 强制块的括号风格统一
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // 强制驼峰命名
    camelcase: ['error', { properties: 'never' }],

    // 强制或禁止注释的第一个字母大写
    // http://eslint.org/docs/rules/capitalized-comments
    'capitalized-comments': ['off', 'never', {
      line: {
        ignorePattern: '.*',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
      block: {
        ignorePattern: '.*',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
    }],

    // 逗号风格，换行时在行首还是行尾
    'comma-dangle': ['error', 'always-multiline'],

    // 强制逗号前后的空格
    'comma-spacing': ['error', { before: false, after: true }],

    // 块的括号风格统一
    'comma-style': ['error', 'last'],

    // 强制在计算属性括号内一致的间距
    'computed-property-spacing': ['error', 'never'],

    // 强制规定this别名
    'consistent-this': 'off',

    // 强制添加或禁止在文件末尾的换行
    'eol-last': ['error', 'always'],

    // 强制添加或禁止在函数标识符与其调用之间的间距
    // http://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': ['error', 'never'],

    // 要求函数名称与其分配到的变量或属性的名称相匹配
    // http://eslint.org/docs/rules/func-name-matching
    'func-name-matching': ['off', 'always', {
      includeCommonJSModuleExports: false
    }],

    // 强制添加或禁止命名函数表达式
    // http://eslint.org/docs/rules/func-names
    'func-names': 'off',

    // 强制统一使用函数声明或表达式
    // http://eslint.org/docs/rules/func-style
    // TODO: enable
    'func-style': ['off', 'expression'],

    // 禁止指定的标识符
    // http://eslint.org/docs/rules/id-blacklist
    'id-blacklist': 'off',

    // 强制标识符长度最小和最大值
    'id-length': 'off',

    // 要求标识符与指定的正则表达式匹配
    'id-match': 'off',

    // 强制统一的缩进
    indent: ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      // MemberExpression: null,
      // CallExpression: {
        // parameters: null,
      // },
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      }
    }],

    // 强制在JSX属性中一致地使用双引号或单引号
    'jsx-quotes': ['off', 'prefer-double'],

    // 强制在对象文字属性中强制实现键和值之间的一致间距
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],

    // 强制在关键字前后执行一致的间距
    'keyword-spacing': ['error', {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true }
      }
    }],

    // 强制规定注释的位置
    // http://eslint.org/docs/rules/line-comment-position
    // TODO: enable?
    'line-comment-position': ['off', {
      position: 'above',
      ignorePattern: '',
      applyDefaultPatterns: true,
    }],

    // 强制换行风格
    // http://eslint.org/docs/rules/linebreak-style
    'linebreak-style': ['error', 'unix'],

    // 强制注释前后空行
    'lines-around-comment': 'off',

    // 强制嵌套的最大深度
    'max-depth': ['off', 4],

    // 强制一行的最大长度
    // http://eslint.org/docs/rules/max-len
    'max-len': 'off',

    // 强制最大行数
    // http://eslint.org/docs/rules/max-lines
    'max-lines': 'off',

    // 强制回调函数最大嵌套深度
    'max-nested-callbacks': 'off',

    // 强制函数定义中最多允许的参数数量
    'max-params': 'off',

    // 强制函数块最多允许的的语句数量
    'max-statements': 'off',

    // 强制每一行中所允许的最大语句数量
    // http://eslint.org/docs/rules/max-statements-per-line
    'max-statements-per-line': 'off',

    // 强制三元表达式换行
    // http://eslint.org/docs/rules/multiline-ternary
    // TODO: enable?
    'multiline-ternary': ['off', 'never'],

    // 要求构造函数首字母大写
    'new-cap': ['error', {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    }],

    // 要求调用无参构造函数时有圆括号
    // http://eslint.org/docs/rules/new-parens
    'new-parens': 'error',

    // 要求方法链中每个调用都有一个换行符
    'newline-per-chained-call': 'off',

    // 禁用 Array 构造函数
    'no-array-constructor': 'off',

    // 禁用按位运算符
    // http://eslint.org/docs/rules/no-bitwiseå
    'no-bitwise': 'error',

    // 禁用 continue 语句
    // http://eslint.org/docs/rules/no-continue
    'no-continue': 'error',

    // 禁止在代码后使用内联注释
    'no-inline-comments': 'off',

    // 禁止 if 作为唯一的语句出现在 else 语句中
    // http://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 'error',

    // 禁止混合使用不同的操作符
    // http://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-operators': ['error', {
      groups: [
        ['+', '-', '*', '/', '%', '**'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof']
      ],
      allowSamePrecedence: false
    }],

    // 禁止空格和 tab 的混合缩进
    'no-mixed-spaces-and-tabs': 'error',

    // 禁止使用链式赋值表达式
    // http://eslint.org/docs/rules/no-multi-assign
    'no-multi-assign': ['error'],

    // 禁止出现多行空行
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],

    // 禁用否定的表达式
    // http://eslint.org/docs/rules/no-negated-condition
    'no-negated-condition': 'off',

    // 禁用嵌套的三元表达式
    'no-nested-ternary': 'error',

    // 禁用 Object 的构造函数
    'no-new-object': 'error',

    // 禁用一元操作符 ++ 和 --
    // http://eslint.org/docs/rules/no-plusplus
    'no-plusplus': 'off',

    // 禁用特定的语法
    // http://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': [
      'error',
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    // 禁止所有tabs
    'no-tabs': 'off',

    // 禁止使用三元表达式
    'no-ternary': 'off',

    // 禁用行尾空格
    'no-trailing-spaces': 'error',

    // 禁止标识符中有悬空下划线
    'no-underscore-dangle': ['error', { allowAfterThis: false }],

    // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    // http://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // 禁止属性前有空白
    // http://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': 'error',

    // 强制单行声明的位置
    // http://eslint.org/docs/rules/nonblock-statement-body-position
    'nonblock-statement-body-position': 'off',

    // 强制大括号内换行符的一致性
    // http://eslint.org/docs/rules/object-curly-newline
    // TODO: enable once https://github.com/eslint/eslint/issues/6488 is resolved
    'object-curly-newline': ['off', {
      ObjectExpression: { minProperties: 0, multiline: true },
      ObjectPattern: { minProperties: 0, multiline: true }
    }],

    // 强制在大括号中使用一致的空格
    'object-curly-spacing': ['error', 'always'],

    // 强制将对象属性放在不同的行上
    // http://eslint.org/docs/rules/object-property-newline
    'object-property-newline': ['error', {
      allowMultiplePropertiesPerLine: true,
    }],

    // 强制变量在函数中一起声明或单独声明
    'one-var': ['error', 'never'],

    // 强制单行声明的位置
    // http://eslint.org/docs/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': ['error', 'always'],

    // 在可能的情况下强制或禁止赋值运算符的简写
    // http://eslint.org/docs/rules/operator-assignment
    'operator-assignment': ['error', 'always'],

    // 强制连接符统一的换行
    'operator-linebreak': 'off',

    // 强制或禁止在块内填充空格
    'padded-blocks': ['error', 'never'],

    // 强制或禁止在语句之间填充空格
    'padding-line-between-statements': 'off',

    // 强制对象字面量中的属性名双引号
    // http://eslint.org/docs/rules/quote-props.html
    'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

    // s强制统一使用反引号，双引号或单引号
    quotes: ['error', 'single', { avoidEscape: true }],

    // 需要JSDoc 注释
    // http://eslint.org/docs/rules/require-jsdoc
    'require-jsdoc': 'off',

    // 强制语句分号结尾
    semi: ['error', 'always'],

    // 强制分号前后空格
    'semi-spacing': ['error', { before: false, after: true }],

    // 要求对象键进行排序
    'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],

    // 强制分号位置
    'semi-style': 'off',

    // 要求同一声明块中的变量进行排序
    'sort-vars': 'off',

    // 强制块区域内统一的间隔
    'space-before-blocks': 'error',

    // 强制在Function括号之前执行统一的间距
    // http://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],

    // 强制在括号内用统一的间距
    'space-in-parens': ['error', 'never'],

    // 中缀操作符周围需要有空格
    'space-infix-ops': 'error',

    // 强制在一元操作员之前或之后有统一的间距
    // http://eslint.org/docs/rules/space-unary-ops
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false,
      overrides: {
      },
    }],

    //强制在注释中的//或/ *之后用统一的间距
    // http://eslint.org/docs/rules/spaced-comment
    'spaced-comment': ['error', 'always', {
      line: {
        exceptions: ['-', '+'],
        markers: ['=', '!'], // space here to support sprockets directives
      },
      block: {
        exceptions: ['-', '+'],
        markers: ['=', '!'], // space here to support sprockets directives
        balanced: false,
      }
    }],

    // 在switch语句的冒号附近加间隔
    'switch-colon-spacing': 'off',

    // 强制或禁止模板标签与其文字之间的间距
    // http://eslint.org/docs/rules/template-tag-spacing
    // TODO: enable, semver-major
    'template-tag-spacing': ['off', 'never'],

    // 强制或禁止Unicode字节顺序标记（BOM）
    // http://eslint.org/docs/rules/unicode-bom
    'unicode-bom': ['error', 'never'],

    // 正则表达式字面量用小括号包起来
    'wrap-regex': 'off'
  }
};
