// const { DefinePlugin } = require("webpack")

const DotenvWebpackPlugin = require("dotenv-webpack");

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    plugins: [
        new DotenvWebpackPlugin({
            path: './.env.development'
        })
        // new DefinePlugin({
        //     'process.env': {
        //         'NODE_ENV': JSON.stringify('development'),
        //     }
        // })
    ]
};

