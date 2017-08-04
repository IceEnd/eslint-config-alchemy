/**
* 这些规则与在Node.js中运行的代码相关联，或与使用CommonJS的浏览器相关：
*/
module.exports = {
  env: {
    node: true
  },

  rules: {
    // 避免多次调用回调
    'callback-return': 'off',

    // 需要将require()调用放置在模块顶部
    'global-require': 'off',

    // 在回调中需要错误处理
    'handle-callback-err': 'off',

    // 禁止使用Buffer()构造函数
    'no-buffer-constructor': 'off',

    // 禁止使用Buffer()构造函数
    'no-mixed-requires': ['off', false],

    // 不允许调用与常规变量声明混合
    'no-mixed-requires': 'error',

    // 禁止使用new require
    'no-new-require': 'error',

    // 禁止使用__dirname和__filename连接字符串
    'no-path-concat': 'error',

    // 禁止使用process.env
    'no-process-env': 'off',

    // 禁止使用process.exit()
    'no-process-exit': 'off',

    // 禁止通过require加载指定的模块，用了会报错
    'no-restricted-modules': 'off',

    // nodejs 禁止同步方法
    'no-sync': 'off',
  }
};
