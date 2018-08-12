/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.modifyBabelrc = ({ babelrc }) => ({
  ...babelrc,
  ...process.env.NODE_ENV !== 'development' && {
    plugins: babelrc.plugins.concat(['transform-regenerator', 'transform-runtime']),
  },
});
exports.modifyWebpackConfig = ({ config, stage }) => {
  return config;
};
