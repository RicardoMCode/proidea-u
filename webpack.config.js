//We add a const "path" to identify where we are going work
const path = require('path');
//instance references for plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
//Object where we add the configuration for our project
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                //Se especifica los elementos con lo que se trabajará
                test: /\.(js|jsx)$/,
                //Se excluye lo que no se quiere que lea el WP
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            filename: './index.html'
        })
    ]
}