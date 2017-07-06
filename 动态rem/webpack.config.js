// 源文件是src下面的main.js
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname,'./build'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'stylus-loader']
      })
      },
  	  {test: /\.(svg|woff|woff2|eot|ttf)$/,use:['url-loader']},
      {
        test: /\.css$/,exclude: ['node_modules'],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })      
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
}
// const path = require('path');
// module.exports = {
//   entry:  path.resolve(__dirname,'./src/main'),
//   output: {
//     filename: 'main.js',
//     path: path.resolve(__dirname,'./build')
//   },
//   module: {
//     rules: [
//       {test: /\.vue$/,loader: 'vue-loader',options:{
//         sourceMap: true,
//         loader: {
//           js: 'babel-loader',
//           stylus: 'vue-style-loader!css-loader!stylus-loader'
//         }
//       }},
//       {test: /\.js$/,loader: 'babel-loader',exclude: /node_modules/}
//     ]
//   }
// }
// const env = process.env.NODE_ENV;
// const isDev = env === 'development';
// const isProd = env === 'production';
// const isWatch = isDev;


// const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// module.exports = {
//   entry: './src/main.js',
//   watch: isWatch,
//   output: {
//     path: path.resolve(__dirname,'./build'),
//     filename: '[name].js'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: ExtractTextPlugin.extract({
//           fallback: 'style-loader',
//           use: 'css-loader'  
//         }
//         )
//       },
//       {test: /\.(svg|woff|woff2|eot|ttf)$/,use:['url-loader']},
//       {
//         test: /\.styl$/,
//         use: ExtractTextPlugin.extract({
//           fallback: 'style-loader',
//           use: ['css-loader','stylus-loader']
//         })
//       }
//     ]
//   },
//   plugins: [
//     new ExtractTextPlugin("styles.css")
//   ]
// }
