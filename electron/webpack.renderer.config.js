const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const rules = [
  ...require('./webpack.rules'),
  {
    test: /\.css$/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' },
      { loader: 'postcss-loader' },
    ],
  },
];

const plugins = [new ForkTsCheckerWebpackPlugin()];

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
};
