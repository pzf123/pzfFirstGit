const {resolve} = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')
module.export = {
    // 入口文件，模块化，根据入口找到依赖的模块
    entry: './src/index.js',
    // 出口文件
    output: {
        // 打包好的文件名
        fileName: './build.js',
        //  目录,在当前目录下创建dist目录,打包在当前目录/dist文件夹下
        path: resolve(__dirname, 'build'),
        publicPath: '/' // 资源路径
    },
    // devServer: {
    //     // 代理
    //     proxy: {
    //         '/api': {
    //             target: 'http://xxx'
    //         }
    //     }
    // },
    // 配置插件
    // 首页
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development'
}
// 命令行输入webpack直接打包