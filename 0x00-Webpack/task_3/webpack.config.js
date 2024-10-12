const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        header: './modules/header/header.js',
        body: './modules/body/body.js',
        footer: './modules/footer/footer.js'
    },
    output: {
        filename: '[name].bundle.js',  // Creates header.bundle.js, body.bundle.js, footer.bundle.js
        path: path.resolve(__dirname, 'public'),
    },
    mode: 'development',
    devServer: {
        static: path.resolve(__dirname, 'public'),
        port: 8564, // set port to 8564
        open: true, // open browser automatically
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            { 
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
        ],
    },
    performance: {
        maxAssetSize: 1000000, // Set limit to 1 MB
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(),
    ],
};