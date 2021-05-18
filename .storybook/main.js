const custom = require('../webpack.build.conf');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-postcss', '@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: config => {
    return {
      ...config,
      module: { ...config.module, rules: custom.module.rules },
      plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].[contenthash].css'
        }),
        ...config.plugins
      ]
    };
  }
};
