module.exports = {
  extends: [
    'airbnb/base',
    'plugin:flowtype/recommended',
  ],
  plugins: [
    'flowtype',
    'mocha',
  ],
  'rules': {
    'space-before-function-paren': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'default-case': 'off',
    'global-require': 'off',
    'camelcase': 'off',
    'arrow-body-style': 'off',
    'arrow-parens': ['error', 'always'],
    'max-len': ['warn', { code: 120, ignoreStrings: true, ignoreUrls: true }],

    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-unused-expressions': 'off',
    'no-underscore-dangle': 'off',
    'no-duplicate-imports': 'off',
    'no-prototype-builtins': 'off',

    'import/no-dynamic-require': 'off',
    'import/first': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/no-duplicates': 'error',
    'import/extensions': 'off',

    'mocha/no-exclusive-tests': 'error',
  },
  globals: {
    before: true,
    after: true,
    beforeEach: true,
    afterEach: true,
    describe: true,
    it: true,
    context: true,
    proxyquire: true,
    expect: true,
    sinon: true,
    xit: true,
  },
};
