import { HotModuleReplacementPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: {
    main: ['./src/entry/main.js']
  },

  devServer: {
    port: process.env.PORT,
    hot: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      title:    'Jerry Hamlet | Curriculum Vitae',
      filename: 'index.html',
      template: './src/tmpl/main.ejs',
      chunks:   [`main`]
    }),
    new HotModuleReplacementPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.less$/,
        loader: 'style-loader/useable!css-loader!less-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader/useable!css-loader'
      },
      {
        test: /\.(png|gif|jpg|jpeg|svg)$/,
        exclude: /\/fonts?\//,
        loader: 'url-loader?limit=12000&name=[name]-[sha1:hash:hex:7].[ext]'
      },
      {
        test: /\.woff|\.woff2|\.eot|\.ttf|\.svg/,
        exclude: /\/media\//,
        loader: 'url-loader?limit=32000&name=[name]-[sha1:hash:hex:7].[ext]'
      }
    ]
  },

  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.json', '.less', '.css', '*']
  }
}
