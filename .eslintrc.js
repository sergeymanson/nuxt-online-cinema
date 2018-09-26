module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: [
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    'indent': [2, 2],
    'no-dupe-keys': 2,
    'no-extra-parens': 2,
    'curly': 2,
    'default-case': 1,
    'brace-style': 2,
    'max-len': [1, { 'code': 160, 'tabWidth': 6 }],
    'semi': [2, 'always'],
    'semi-style': [2, 'last'],
    'padding-line-between-statements': [2,
        {blankLine: "always", prev: ["const", "let"], next: "*"},
        {blankLine: "any", prev: ["const", "let"], next: ["const", "let"]}],
    'one-var-declaration-per-line': 2,
    'no-multi-spaces': 0,
    'no-unused-vars': 1,
    'no-unused-labels': 1,
    'no-var': 2,
    'prefer-const': 2,
    'prefer-promise-reject-errors': 1,
    'no-useless-escape': 1,
  },
  globals: {
    '_': false
  }
};
