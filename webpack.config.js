var webpack = require('webpack');
const path=require('path');
const glob=require('glob');

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
        path:path.resolve(__dirname,'./app/dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:'css-loader'
            },
            {
                test:/\.ts$/,
                use:'ts-loader'
            },
            // {
            //     test:/\.js$/,
            //     use:'babel-loader'
            // }
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