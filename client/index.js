/**
 * description:客户端入口文件;包含 router与redux
 * author：yunfei 
 */
import React from 'react';
import ReactDom from 'react-dom';
import Routes from '../src/App';
import Header from '../src/components/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import {getClientStore} from '../src/store/store';
// react针对于服务端提供注入js接口 hydrate

const Page = (
    <Provider store={getClientStore()}>
        <BrowserRouter>
            <Header />
            {Routes.map(e => <Route {...e}></Route>)}
        </BrowserRouter>
    </Provider>
)


ReactDom.hydrate(Page, document.getElementById('root'));

