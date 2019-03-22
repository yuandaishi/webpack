var webpack = require('webpack');
const path=require('path');
const glob=require('glob');

const config = {
    entry: {
        js:__dirname+'/app/public/app/js/index/a.js',
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
        filenames:'a.js',
        path:__dirname+'/app'
    }
}
console.log('aaaa');