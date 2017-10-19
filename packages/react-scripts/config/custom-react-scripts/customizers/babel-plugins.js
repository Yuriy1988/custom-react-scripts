module.exports = {
  DECORATORS: {
    get: () => require.resolve('babel-plugin-transform-decorators-legacy'),
  },
  OPT_CHAINING: {
    get: () => require.resolve('babel-plugin-transform-optional-chaining'),
  },
};
