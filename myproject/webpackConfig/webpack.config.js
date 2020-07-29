const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
module.exports={
    entry: './src/index.js',
    output:{
        filename: './build.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                // 层次关系
                use: [
                    'style-loader', 'css-loader', 'less-loader'
                ]
            },
            {
                test: /\.css$/,
                // 层次关系
                // use: [
                //     'style-loader', 'css-loader'
                // ]
                // 压缩写法
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.(jpg|gif|png)$/,
                loader: 'url-loader',
                options: {
                    esModule: true,
                    // 单位为b,需要压缩打包的上限制
                    limit: 10 * 1024,
                    // 命名哈希值前10位，后缀保留
                    name: '[hash:10].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                // 配置移除空格和注释
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new MiniCssExtractPlugin({
            // 配置输出目录
            filename: 'css/bulid.css'
        }),
        // 压缩css文件
        new optimizeCssAssetsWebpackPlugin()
    ],
    mode: 'development',
    // 服务开启
    devServer: {
        contentBase: resolve(__dirname, 'build'),
        // 压缩
        compress: true,
        port: 3000,
        // 是否打开浏览器
        open: true
    }
}