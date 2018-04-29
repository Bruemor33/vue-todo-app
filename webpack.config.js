const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin ({
    template: './src/index.html',
    filename: './index.html'
})

module.exports = {
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
                enforece: 'post',
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[name]_[local]_[hash:base64]",
                            sourceMap: true,
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'postcss-loader', 'sass-loader'
                ]
            },
            {
                enforce: 'post',
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]_[local]_[hash:base64]',
                            sourceMap: true,
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: 'vue-template-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
};