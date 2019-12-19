import React from 'react';
import { renderToString } from 'react-dom/server';
import Header from '../src/components/Header';
import Http from './util/http';
import axios from 'axios';
/* 
*获取组件属性 matchPath 判断当前 component是否匹配到
*/
import { StaticRouter, matchPath, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { getServerStore } from '../src/store/store';
import express from 'express';
import routes from '../src/App';
const app = express();
const store = getServerStore();
//静态资源目录

app.use(express.static('public'))
app.get('/api/*', (req, res) => {
    console.log(req.param)
    Http[req.method](req.path,req.params, res)
})
//监听所有router--防止404错误
app.get('*', (req, res) => {
    //存储当前匹配到的路由
    const promises = []
    routes.some(route => {
        const match = matchPath(req.path, route)
        if (match && route.component.loadData) {
            promises.push(
                new Promise((resolve, rejects) => {
                    route.component.loadData(store).then(_res => resolve(res)).catch(err => resolve(err))
                })
            )
        }
    })
    // 执行promises内的所有loadDate；并等待响应
    Promise.all(promises).then((data) => {
        //解析react虚拟dom为节点字符串
        //服务器端路由使用StaticRouter
        const content = renderToString(
            <Provider store={store}>
                <StaticRouter>
                    <Header />
                    {routes.map(e => <Route {...e} ></Route>)}
                </StaticRouter>
            </Provider>
        );
        res.send(`
            <html>
                <head>
                    <meta charset="utf-8" />
                    <title>ssr</title>
                </head>
                    <body>
                        <div id='root'>${content}</div>
                        <script>window._context = ${JSON.stringify(store.getState())}</script>
                        <script src='/bundle.js'></script>
                    </body>
            </html>
        `)
    }).catch(() => {
        res.send('404界面')
    })

})
app.listen(3000, () => {
    console.log('启动完成')
})