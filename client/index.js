/**
 * description:客户端入口文件
 * author：yunfei 
 */
import React from 'react';
import ReactDom from 'react-dom';
import App from '../src/App';
// react针对于服务端提供注入js接口 hydrate
ReactDom.hydrate(App, document.getElementById('root'));

