module.exports = {
  entry: './src/examples.ts',
  output: {
    filename: 'app.js',
    path: __dirname + '/dist',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'awesome-typescript-loader',
      },
    ],
  },
  devServer: {
    port: 8080,
  },
  devtool: 'source-map',
  mode: 'development',
};
