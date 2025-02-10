const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const IS_DEV = process.env.NODE_ENV === 'development';

module.exports = {
  mode: IS_DEV ? 'development' : 'production',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              exclude: /node_modules/,
              sourceType: 'unambiguous',
              presets: [
                [
                  '@babel/preset-react',
                  {
                    runtime: 'classic',
                  },
                ],
                [
                  '@babel/preset-env',
                ],
                [
                  '@babel/preset-typescript',
                ]
              ],
            }
          }
        ]
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  entry: {
    app: './index.tsx',
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    '@ali/react-zongheng': 'ZONGHENG',
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: IS_DEV ? false: true,
      template: path.resolve(__dirname, '../../public/index.html'), 
    }),
  ],
  devServer: {
    port: 8000
  },
  cache: {
    type: 'filesystem',
    buildDependencies: {
      // This makes all dependencies of this file - build dependencies
      config: [__filename],
      // By default webpack and loaders are build dependencies
    },
  }
}