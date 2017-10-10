const autoprefixer = require('autoprefixer');

module.exports = {
  ident: 'postcss',
  plugins: () => [
    require('postcss-flexbugs-fixes'),
    require('postcss-cssnext'),
    require('postcss-custom-properties'),
    require('postcss-import'),
    autoprefixer({
      browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
      flexbox: 'no-2009',
    }),
  ],
};
