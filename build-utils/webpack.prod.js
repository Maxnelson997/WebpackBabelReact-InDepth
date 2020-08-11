// const { DefinePlugin } = require("webpack");

const DotenvWebpackPlugin = require("dotenv-webpack");

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new DotenvWebpackPlugin({
            path: './.env.production'
        })
        // new DefinePlugin({
        //     'process.env': {
        //         'NODE_ENV': JSON.stringify('production')
        //     }
        // })
    ]
};