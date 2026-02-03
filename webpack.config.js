const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    
    mode: 'development',
    entry: './src/script.js',
    output: {

        filename: 'bundle.js',
        publicPath: './',
        path: path.resolve(__dirname , 'docs'),
        clean: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html',
        }),
    ],
    
     module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset/resource'
            },
        ],
    },
    
    devServer: {
     static: {
    directory: path.join(__dirname, 'docs'),
  },
  open: true,
  hot: true,
  port: 8080,
    
  }

};