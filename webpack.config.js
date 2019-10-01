const path = require('path');

module.exports = {
    target: 'web',
    mode: 'production',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: 'js/chunk.[id].[chunkhash:8].js'
    },
    optimization: {
        // Uncommenting next line makes it resolve as expected
        // innerGraph: false
    },
    module: {
        rules: [
            {
                test: /(\.js|\.tsx?)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};