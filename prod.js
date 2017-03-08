const ImageminPlugin = require('imagemin-webpack-plugin').default;
const HtmlMinifierPlugin = require('html-minifier-webpack-plugin');
const ClosureCompilerPlugin = require('webpack-closure-compiler');
const OfflinePlugin = require('offline-plugin');

module.exports = function e(env) {
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
        test: /mapsB.html$/,
        loaders: ['file-loader?name=maps.[ext]?[hash]!', 'extract-loader', 'html-loader'],
      }, {
        test: /poiB.html$/,
        loaders: ['file-loader?name=poi.[ext]?[hash]!', 'extract-loader', 'html-loader'],
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
    plugins: [
      new ImageminPlugin({
        pngquant: {
          quality: '95-100',
        },
      }),
      // ... other plugins
      new HtmlMinifierPlugin({}),
      new ClosureCompilerPlugin({
        compiler: {
          language_in: 'ECMASCRIPT6',
          language_out: 'ECMASCRIPT5',
          compilation_level: 'ADVANCED',
        },
        concurrency: 3,
      }),
      new OfflinePlugin({
        externals: ['./index.html', './poi.html', './maps.html', './js/master.js', './js/init.js', './js/init2.js', './js/materialize.min.js', './js/jquery.min.js', './manifest.json', './css/materialize.min.css', './css/materialdesignicons.min.css', './fonts/roboto/Roboto-Medium.woff', './fonts/roboto/Roboto-Regular.woff', './fonts/roboto/Roboto-Light.woff', './fonts/roboto/Roboto-Thin.woff', './fonts/roboto/Roboto-Bold.woff', './fonts/roboto/Roboto-Medium.woff2', './fonts/roboto/Roboto-Regular.woff2', './fonts/roboto/Roboto-Light.woff2', './fonts/roboto/Roboto-Thin.woff2', './fonts/roboto/Roboto-Bold.woff2', './fonts/materialdesignicons-webfont.woff?v=1.5.54', './fonts/materialdesignicons-webfont.woff2?v=1.5.54'],
      }),
    ],
  };
};
