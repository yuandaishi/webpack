var webpack = require('webpack');
const path=require('path');
const glob=require('glob');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const CleanWabpackPlugin=require('clean-webpack-plugin');


const config = {
    entry: {
        a:path.resolve(__dirname,'./app/public/js/entry/a.js'),
        b:path.resolve(__dirname,'./app/public/js/entry/b.js'),
        c:path.resolve(__dirname,'./app/public/js/entry/c.js'),
    }
  };

module.exports={
    mode:'production',
    devtool:'evel-source-map',
    // entry:{
    //     js:'./app/public/app/js/index/a.js',
    //     js_root:__dirname+'public/app/js/*.js',
    //     css:__dirname+'public/app/css/*/*.css',
    //     css_root:__dirname+'public/app/css/*.css'
    // },
    entry:config.entry,
    output:{
        filename:'[name].js?',
        path:path.resolve(__dirname,'./app/dist'),
        // publicPath: 'dist/',//静态文件的路径，不设置的话，找不到（不是通过import引入的文件，如果是通过import引入的依赖，则只要第一个文件的路径正确即可，其他文件会被打包到这个文件里）
        //写在这里的话，则全部的静态文件都会相对这个路径
    },
    plugins:[
        new CleanWabpackPlugin(),
        new HtmlWebpackPlugin({
            title:'测试HtmlWebpackPlugin插件',
            template:'./app/index.html'
        })
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:'css-loader'
                loader: 'style-loader!css-loader'//必须使用styleloader，才能插入到html页面中，否则不会插入
            },
            {
                test:/\.ts$/,
                use:'ts-loader'//除了loader之外，还应该在这个项目下安装依赖typescript
            },
            {
                test:/(\.html)$/,
                use:'html-loader'//会把html变成一个字符串返回
            },
            {
                test:/\.scss$/,
                use:['style-loader','css-loader', 'sass-loader']//并没有scssloader，而且处理完了sass或者less之后，总是要使用css-loader处理，不然会报错
            },
            {
                test:/\.(png|jpg|jepg)$/,
                use:[
                    {
                        loader:'url-loader',//url-loader封装了file-loader，但url-loader并不依赖于file-loader。
                        options:{
                            limit:15360,
                            outputPath:'img/',
                            publicPath: 'dist/img',//静态文件的路径，不设置的话，找不到（不是通过import引入的文件，如果是通过import引入的依赖，则只要第一个文件的路径正确即可，其他文件会被打包到这个文件里）
                        }
                    }
                ]
            },
            {
                test:/\.yuan.html$/,
                use:{
                    loader:path.resolve(__dirname, './app/public/js/loader/yuan-loader.js'),
                    options:{
                        name:'测试使用'
                    }
                },
            }
        ]
    },
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.esm.js'//import xxx from 'vue'的时候，重定向指向位置
        }
    },
    externals:{
        vue:'Vue',//打包时，忽略import中的vue模块，因为忽略了，所以在需要的页面要通过script标签引入
    }
}
console.log('aaaa');
console.log(__dirname);