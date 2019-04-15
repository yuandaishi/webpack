import index from './../modules/index/index.js';
import b from './b.js';
// import Vue from 'vue';
import foo from './test.ts';
import html from './html/test.html';
import style from './css/style.css';
import style_scss from './scss/style.scss';
import loader_yuan from './yuan/loader.yuan.html';
//import loader_word from './word/a.docx';

console.log(Vue);

var Vapp=new Vue({
    el:'#app',
    data:{
        message:'yuands',
        age:31,
    },
    mounted() {
        //
    },
    methods:{

    },
    watch:{

    },
    computed:{

    }
})

console.log(html);//使用了lader之后，会返回一个字符串
console.log(style);//返回一个数组
console.log(style_scss);
console.log(loader_yuan);
//console.log(loader_word);