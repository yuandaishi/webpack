//import schemaUtils_1 from 'loader-utils';//不支持import写法
const loaderUtils=require('loader-utils');
const schemaUtils =require('schema-utils');
module.exports=function(source) {//只能传入一个参数，这个参数是文件资源的字符串
    const options = loaderUtils.getOptions(this);
    // schemaUtils.validateOptions(schema, options, 'Example Loader');
    source = source.replace(/\[name\]/g, options.name);
    return JSON.stringify(source);
    //return {a:5};//即使这里写的是返回一个对象，但是最终还是会被转化成字符串。loader返回的数据格式，最终不是字符串就是buffer
    //return source;
}