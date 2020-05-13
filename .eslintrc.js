module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
  ],
  globals: {
  },
  plugins: [
    'babel',
    'jest',
    'react-hooks',
  ],
  env: {
    browser: true,
    'jest/globals': true,
  },
  rules: {
    'sort-imports': [ 'error', {
      ignoreCase: false,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: [ 'none', 'all', 'multiple', 'single' ],
    } ],
    'no-console': 0,
    'no-continue': 0,
    'accessor-pairs': 1,
    'no-caller': 2,
    'no-multi-spaces': 1,
    'array-bracket-spacing': [ 1, 'always' ],
    'block-spacing': 1,
    'brace-style': 1,
    camelcase: 1,
    'comma-spacing': [ 2, { before: false, after: true } ],
    'space-in-parens': [ 1, 'always' ],
    'max-len': [ 2, { tabWidth: 2, code: 108 } ],
    'max-lines': 2,
    'max-params': 2,
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-tabs': 2,
    'no-unused-vars': 1,
    'no-whitespace-before-property': 2,
    semi: [ 1, 'never' ],
    'arrow-parens': 2,
    'keyword-spacing': 1,
    'space-before-blocks': 1,
    'object-curly-spacing': [ 1, 'always' ],
    'react/prop-types': 0,
    'class-methods-use-this': 2,
    'no-invalid-this': 0,
    'space-before-function-paren': 0,
    'no-trailing-spaces': 0,
    'no-multiple-empty-lines': [ 2, { max: 7 } ],
    'default-case': 0,
    'comma-dangle': [ 1, {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    } ],
    'padded-blocks': 0,
    'func-names': 0,
    'computed-property-spacing': [ 1, 'always' ],
    'no-plusplus': 0,
    radix: 0,
    'no-debugger': 0,
    'no-param-reassign': [ 2, { props: false } ],
    'no-underscore-dangle': 0,
    'lines-between-class-members': 0,
    'prefer-destructuring': [ 'error', {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: false,
        object: false,
      },
    } ],

    'babel/no-invalid-this': 2,
   
    'react/sort-comp': 0,
    'react/jsx-filename-extension': 0,
    'react/button-has-type': 0,
    'react/destructuring-assignment': 0,
    'react/default-props-match-prop-types': 0,


    // ???
    'react/require-default-props': 0,
    'react/jsx-one-expression-per-line': 0,

    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/anchor-has-content': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/mouse-events-have-key-events': 0,
    'jsx-a11y/media-has-caption': 0,

    'import/extensions': 0,
    'import/first': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'import/no-namespace': 0,
    'import/order': 0,

    // !!! DEL
    'linebreak-style': 0,

    // !!! DEL after translates
    'import/no-cycle': 0,

  },
}