const TypescriptDeclarationPlugin = require('typescript-declaration-webpack-plugin');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/Schemas.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: ['.ts'],
    plugins: [new TsconfigPathsPlugin({ configFile: 'tsconfig.json' })],
  },

  plugins: [new TypescriptDeclarationPlugin({})],

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname),
  },
};
