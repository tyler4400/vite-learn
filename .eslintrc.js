module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  globals: {
    // _: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    // 需要尾随逗号时的最后一个元素或属性是一个不同的线比所述封闭]或}和不允许尾随逗号时的最后一个元素或属性是基于相同行的闭合]或}
    'comma-dangle': ['error', 'always-multiline'],
    //  当只有一个参数时允许省略参数
    'arrow-parens': ['error', 'as-needed'],
    'operator-linebreak': ['error', 'before'],
    semi: ['error', 'never'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-multiple-empty-lines': 1,
    'no-console': 'off',
    'object-curly-newline': 'off',
    /**
     * Vite Vue3项目eslint配置遇到的问题
     * https://www.cnblogs.com/Jingge/p/14927175.html
     */
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e', // for e.return value
      ],
    }],
    // Eslint禁止使用++与–，因为一元运算符会自动插入分号，如果一元运算符前有空格，可能会引发歧义
    'no-plusplus': ['off', { allowForLoopAfterthoughts: true },
    ],
  },
  overrides: [
    {
      files: ['*.vue', '*.ts'],
      rules: {
        // vue3模板可以有多个根节点了
        'vue/no-multiple-template-root': 'off',
        /**
         * Unable to resolve path to module报错
         * 因为vite需要自己构建配置而vue-cli自动构建"@"，所以eslint不识别webpack的路径别名
         * 所以以下三个暂时禁止掉，
         */
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/no-absolute-path': 'off',
      },
    },
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
}
