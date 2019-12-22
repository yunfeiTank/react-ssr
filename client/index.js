/**
 * @description:客户端入口文件;包含 router与redux
 * @author：yunfei 
 * @time : 2019/12/10
 */
import React from 'react';
import ReactDom from 'react-dom';
import Routes from '../src/App';
import Header from '../src/components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { getClientStore } from '../src/store/store';
// react针对于服务端提供注入js接口 hydrate

const Page = (
    <Provider store={getClientStore()}>
        <BrowserRouter>
            <Header />
            <Switch>
                {Routes.map(e => <Route {...e}></Route>)}
            </Switch>
        </BrowserRouter>
    </Provider>
)
if (window._context) {
    //ssr 存在 server端
    ReactDom.hydrate(Page, document.getElementById('root'));
} else {
    ReactDom.render(Page, document.getElementById('root'));

}

