const path = require('path');
const fs = require('fs');
const graphqlEnv = process.env['REACT_APP_GRAPHQL'] || '';
const isGraphqlActivated = graphqlEnv.indexOf('true') !== -1;

// Custom eslint settings for .graphql files
module.exports = isGraphqlActivated
  ? {
      extends: [require.resolve('eslint-config-react-app')],
      parser: 'babel-eslint',
      rules: {
        'graphql/template-strings': [
          'warn',
          {
            env: 'literal',
            schemaString: fs
              .readFileSync(path.resolve(__dirname, './schema.graphql'), 'utf8')
              .toString(),
          },
        ],
      },
      plugins: ['graphql'],
    }
  : {};
