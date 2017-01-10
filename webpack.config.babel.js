import path from 'path';

export default {
  entry: {
    index: ['./src/index.js'],
  },
  resolve: {
    extensions: ['.js', '.html'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].[id].js',
  },
  module: {
    rules: [
      {
        test: /\.(html|js)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: 'svelte-loader',
      },
    ],
  },
  devtool: 'cheap-module-source-map',
};
