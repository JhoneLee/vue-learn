var path=require('path');
var HtmlWebpackPlugin=require('html-webpack-plugin');
var webpack=require('webpack');
module.exports={
    entry: ['webpack-hot-middleware/client',path.resolve(__dirname,'../asset/js/main.js')],
    output: {
        path:path.resolve(__dirname,'../ouput'),  //打包输出路径
        publicPath:'/', // dev server中的服务器路径
        filename: 'js/[name].js', //[name].[hash].js
        chunkFilename: '[id].[name].[chunkhash].js' //[id].[chunkhash].js 未被列在entry中需要被打包的文件
    },
    // 设置别名及默认文件类型
    resolve:{
        extensions:['','.js','.vue'],
        alias:{
            'vue':'vue/dist/vue.js'
        }
    },
    module:{
        loaders:[
            {
                test:/\.vue$/,
                loader:'vue'
            },
            {
                test:/\.js$/,
                loader:'babel?presets=es2015',
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new webpack.optimize.OccurenceOrderPlugin(), //根据文件的大小设置优先级
        new webpack.HotModuleReplacementPlugin(),// 热替换
        new webpack.NoErrorsPlugin(), //出错不打断
        new HtmlWebpackPlugin({
            filename:'./index.html', // 目录结构针对output的publicPath设置
            template:path.resolve(__dirname,'../asset/index.html'),
            inject:true
        })
    ]
};