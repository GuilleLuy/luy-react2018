var path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const express = require('express');
const app = express();




// API:
// import trabajosApi from "/src/components/api/trabajos"

// API dispatch
// app.use('/api/trabajos', trabajosApi);

app.use(express.static(path.join(__dirname,'/src/index.html')));

module.exports = {

  // node: {
  //   console: false,
  //   fs: 'empty',
  //   net: 'empty',
  //   tls: 'empty'
  // },

    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
      publicPath: ''
    },
    module: {
      


    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
          test: /\.less$/,
          use: ['style-loader','css-loader',"less-loader"]
      },
      // {
      //   test: /(\.css?)$/,
      //   loaders: ['style-loader', 'css-loader']  
      // },
      {
          test: /\.(ttf|svg|ico|eot|jpg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
          loaders: ['url-loader']
      }
   ]
  },

  devServer: {
    historyApiFallback: true
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html"
    })
    // adentro del new:
    // ,
    //  filename: "./index.html"


    ,
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};