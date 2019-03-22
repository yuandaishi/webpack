var webpack = require('webpack');
module.exports={
	devtool:'evel-source-map',//配置生成source map，有多种值可选
	entry:__dirname+'/app/b.js',//入口文件位置， __dirname指向当前执行脚本所在目录
	output:{
		path:__dirname+'/public',//打包后文件位置
		filename:'bundle.js'//打包后文件名
	},
	devServer:{
		contentBase:'./public',//本地服务器所加载页面所在的位置
		colors:true,//终端中输出的颜色是彩色
		inline:true,//实时更新
		hot: true
	},
	module:{//在这里配置loader相关信息
		loaders:[//应该可以放多个loader，这里只放了名为json的loader
			{
				test:/\.json$/,//匹配loaders所处理文件的拓展名的正则表达式
				loader:'json-loader',//loader的名称
			},
			{
				test:/\.js$/,
				loader:'babel-loader',
				exclude:/node_modules/,  //忽略这个文件夹，相当于git的gitignore文件
				query: {//为loadersr提供额外的设置选项（可选）
          			presets: ['es2015','react']
        		}
			},
			{
				test:/\.css$/,
				loader:'style-loader!css-loader?modules'//感叹号的作用在于使用同一文件能够使用不同类型的loader，即css文件可以使用style这个loader和css这个loader
			}
		]
	},
	plugins:[
		new webpack.BannerPlugin('Copyright Flying Unicorns inc.'),
		new webpack.HotModuleReplacementPlugin()//热加载插件
	],
}
