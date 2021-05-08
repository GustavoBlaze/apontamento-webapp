module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  plugins: ['react', 'jsx-a11y', 'import', 'react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-unused-expressions': ['off', { allowTernary: true }],
    'react/jsx-one-expression-per-line': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/no-cycle': 'off',
    'consistent-return': 0,
    'import/prefer-default-export': 0,
    'react/no-danger': 0,
    'react/jsx-props-no-spreading': 0,
    'react/react-in-jsx-scope': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'template-curly-spacing': 'off',
    indent: 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'react/forbid-prop-types': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@styles', './src/styles'],
          ['@components', './src/components'],
          ['@lib', './src/lib'],
          ['@contexts', './src/contexts'],
        ],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
