import path from 'path';
import autoprefixer from 'autoprefixer';

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
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader',
        ],
        options: {
          plugins: function plugins() {
            return [
              autoprefixer({
                browsers: [
                  '>1%',
                  'last 4 versions',
                  'Firefox ESR',
                  'not ie < 9',
                ],
              }),
            ];
          },
        },
      },
    ],
  },
  devtool: 'cheap-module-source-map',
};
