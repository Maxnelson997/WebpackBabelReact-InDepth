const WebpackBundleAnalyzerPlugin = require('webpack-bundle-Analyzer').BundleAnalyzerPlugin;

module.exports = {
    plugins: [
        new WebpackBundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFileName: './report.html',
            openAnalyzer: false
        })
    ]
}