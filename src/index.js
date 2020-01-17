import React from 'react';
import ReactDOM from 'react-dom';
//引入antd-mobile样式
import 'antd-mobile/dist/antd-mobile.css';
//引入公共样式
import './assets/styles/commen.scss'
// import Hello from './components/Hello'
//react顶级渲染，只会在index.js中调用一次
//第一个参数是要渲染的组件  参数2：目标容器
//react只能父子传参，不能兄弟传值，也不能跨级传值
import App from './App'
ReactDOM.render(
    <div style={{width:'100%',height:'100%'}}>
       <App/>
    </div>,
 document.getElementById('root')
 )
