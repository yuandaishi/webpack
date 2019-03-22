// demo-1：
//module.exports=function(){//把这里当一个函数，传递到b.js，即相当于把module.exports传给b.js
//	var newDom=document.createElement("div");
//	newDom.innerHTML="hello world";
//	return newDom;
//}

// demo-2 
//var saycontent=require('./say.json');//调用了loader，所以不需要再使用js的parse方法转化为js对象
//module.exports='<div>'+saycontent.saywhat+'</div>';//不一定是函数，反正就是相当于把module.exports的值传递给下一个模块，module.exports好像是传递的标识，没有这个标识的话，则会全部传递（有时间测试）

// demo-3 安装了babel之后，可以使用import命令，虽然会被转译成require
import sayJson from './say.json';
import React, {Component} from 'react';
import styles from './css/root.css';
class Greeter extends Component{//loader里面配置了react之后，这里会被编译，本来是不认识这些代码的
	render(){
		return (
			<div className={styles.root}>
				{sayJson.saywhat}
			</div>
		);
	}
}

export default Greeter;   //这里定义下一个模块引入这个模块的什么东西，或者说当前这个模块可以让别的模块引入什么