const path = require('path');
const gatsbyWebpack = require('../node_modules/gatsby/dist/utils/webpack.config');

const directory = path.resolve(__dirname, '../');
const suppliedStage = 'develop';
const program = {
    directory,
};

console.log(gatsbyWebpack);

const config = gatsbyWebpack(program, directory, suppliedStage).resolve();

module.exports = function customiseStorybookConfig(storybookBaseConfig) {
    // Replace parts of react storybook webpack config with gatsby webpack config.
    config.entry = storybookBaseConfig.entry;
    config.output = storybookBaseConfig.output;

    return config;
};
