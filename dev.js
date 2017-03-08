const ImageminPlugin = require('imagemin-webpack-plugin').default;
const HtmlMinifierPlugin = require('html-minifier-webpack-plugin');
const ClosureCompilerPlugin = require('webpack-closure-compiler');
module.exports = function d(env) {
  return {
    entry: './entry.js',
    output: {
      path: __dirname,
      filename: 'bundle.js',
    },
    module: {
      rules: [{
        test: /indexB.html$/,
        loaders: ['file-loader?name=index.[ext]?[hash]!', 'extract-loader', 'html-loader'],
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }, {
        test: /\.(png|gif|jpg)$/,
        use: ['file-loader?name=[path][name].[ext]?[hash]!'],
      }, {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=[path][name].[ext]!',
      }, {
        test: /\.svg$/,
        use: [{
          loader: 'file-loader?name=[path][name].[ext]?[hash]!',
        }],
      }],
    },
    //     plugins: [
    //   new ImageminPlugin({
    //     pngquant: {
    //       quality: '95-100',
    //     },
    //   }),
    //   // ... other plugins
    //   new HtmlMinifierPlugin({}),
    //   new ClosureCompilerPlugin({
    //     compiler: {
    //       language_in: 'ECMASCRIPT6',
    //       language_out: 'ECMASCRIPT5',
    //       compilation_level: 'ADVANCED',
    //     },
    //     concurrency: 3,
    //   }),

    // ]
  };
};
