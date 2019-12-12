/**
 * description:客户端入口文件;包含 router与redux
 * author：yunfei 
 */
import React from 'react';
import ReactDom from 'react-dom';
import App from '../src/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from '../src/store/store';
// react针对于服务端提供注入js接口 hydrate

const Page = (
    <Provider store={Store}>
        <BrowserRouter>
            {App}
        </BrowserRouter>
    </Provider>
)


ReactDom.hydrate(Page, document.getElementById('root'));

