import React from 'react';
import {render} from 'react-dom';
import Greeter from './a.js';//作用同等于下面一行
//var a=require('./a.js');
//document.getElementById('root').innerHTML=a;
render(<Greeter />, document.getElementById('root'));//基本上是一级一级往上找的过程
