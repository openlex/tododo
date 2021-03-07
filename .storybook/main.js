// import { addDecorator } from '@storybook/react';
const path = require('path');

module.exports = {
  stories: [
      '../src/**/*.stories.@(tsx|ts)',
  ],
  addons: [
      '@storybook/addon-actions',
      '@storybook/addon-links',
      '@storybook/addon-knobs/register',
	  '@storybook/addon-storysource',
      '@storybook/addon-viewport/register',
      {
          name: '@storybook/addon-docs',
          options: {
              configureJSX: true,
              babelOptions: {},
              sourceLoaderOptions: null,
          },
      },
  ],

  webpackFinal: async config => {
      const plugins = [
          ...require('../webpack/webpack.plugins')(true),
      ];
      const loaders = [
          ...require('../webpack/webpack.rules')(true),
          {
              test: /\.stories\.tsx?$/,
              include: [
                  path.resolve(__dirname, '../src'),
              ],
              loaders: [
                  {
                      loader: require.resolve('@storybook/source-loader'),
                      options: {
                          parser: 'typescript',
                          prettierConfig: {
                              printWidth: 100,
                              singleQuote: false,
                          },
                      },
                  },
              ],
              enforce: 'pre',
          },
          {
              test: /\.tsx?$/,
              include: [
                  path.resolve(__dirname, '../src'),
              ],
              loader: 'react-docgen-typescript-loader',
          }
      ];

      config.module.rules.push(...loaders);
      config.plugins.push(...plugins,);
      config.resolve.alias = require('../webpack/webpack.aliases');
      config.resolve.extensions.push('.ts', '.tsx');

    return config;
  },
};
