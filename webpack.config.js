/**/
const path = require("path");
const webpack = require("webpack");



module.exports = {
    entry: ['babel-polyfill','./script.js'],
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, './dist/')

    },
    watch: true,
    devtool:"source-map",
    resolve: {
        modules: ['node_modules'],
        extensions: [".js"]
    },
    plugins: [
        //  new webpack.optimize.UglifyJsPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "common"
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        })
    ],
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react', 'es2017',"stage-0"]
                    }
                }
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                use: {
                    loader: 'url-loader?name=[name]-[hash].[ext]'
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 }
                    }
                ]
            }
        ]
    },

    devServer: {
        host: "localhost",
        port: 8080,
        contentBase: __dirname
    }
};
