//有没有办法预加载babel
module.exports = {
    context: __dirname + '/src',
    entry: './index',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [{
            test: /\.js$|\.jsx$/,
            loader: 'babel',
            // 为什么要加这块参数，有什么用？
            query: {
                optional: ['runtime'],
                stage: 0
            }
        }]
    }
}