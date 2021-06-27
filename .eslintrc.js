module.exports = {
  env: {
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
    // ??? 不允许多个空行
    'no-multiple-empty-lines': 1,
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'vue/no-multiple-template-root': 'off',
      },
    },
  ],
}
