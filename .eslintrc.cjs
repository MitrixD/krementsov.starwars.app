module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'indent': ['error', 2],
    'operator-linebreak': ['error', 'after'],
    'max-len': 'off',
    'react/display-name': 'off',
    'require-jsdoc': 'off',
    'valid-jsdoc': 'off',
    'new-cap': 'off',
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'comma-dangle': 'off',
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "no-trailing-spaces": "error",
  },
}
