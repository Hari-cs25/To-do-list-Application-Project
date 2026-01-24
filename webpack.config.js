const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    
    mode: 'development',
    entry: './src/script.js',
    output: {

        filename: 'final.js',
        path: path.resolve(__dirname , 'Dist'),
        clean: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
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

    static: './dist',
    open: true,
    hot: true,
    watchFiles: ['src/**/*'],
    
  }

};