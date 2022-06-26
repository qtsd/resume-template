const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      inject: 'head',
      scriptLoading: 'blocking',
      template: './src/index.html'
    })
  ],
  devServer: {
    watchFiles: './src/index.html'
  },
  cache: {
    type: 'filesystem',
    buildDependencies: {config: [__filename]}
  },
  performance: {
    hints: false
  },
  stats: 'errors-only',
  devtool: !process.argv.includes('production') && 'eval-source-map'
};

process.on('SIGINT', () => {
  process.exit(0);
});
