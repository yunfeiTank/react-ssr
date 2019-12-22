import React from 'react';
import { renderToString } from 'react-dom/server';
/**
 * 组件
 */
import Header from '../src/components/Header';
/* router
* matchPath 判断当前 component是否匹配到
*/
import { StaticRouter, matchPath, Route, Switch } from 'react-router-dom';
import routes from '../src/App';
/**
 * store 
 */
import { Provider } from 'react-redux';
import { getServerStore } from '../src/store/store';
const store = getServerStore();
/**
 * server
 */
import express from 'express';
const app = express();
//静态资源目录
app.use(express.static('public'))
//代理接口
const proxy = require('http-proxy-middleware');
app.use('/api', proxy({ target: 'http://localhost:9090', changeOrigin: true }))

/**
 * csr 启动
 */
import CsrRender from './control/CsrRender';


//监听router
app.get('*', (req, res) => {
    if (req.query._mode == 'csr') {
        console.log('url参数，开始降级')
        return CsrRender(res)
    }
    //存储当前匹配到的路由
    const promises = []
    routes.some(route => {
        const match = matchPath(req.path, route)
        if (match) {
            const { loadData } = route.component;
            if (loadData) {
                /**
                 * 规避报错 并可添加日志
                 */
                const promise = new Promise((resolve, reject) => {
                    loadData(store).then(resolve).catch(resolve)
                })
                promises.push(promise)
            }
        }
    })
    // 匹配错误界面（重定向界面）
    const context = {
        css: []
    }
    // 执行promises内的所有loadDate；并等待响应
    Promise.all(promises).then((data) => {
        //服务器端路由使用StaticRouter 解析react虚拟dom为节点字符串
        const content = renderToString(
            <Provider store={store} >
                <StaticRouter location={req.url} context={context}>
                    <Header />
                    <Switch>
                        {routes.map(e => <Route key={e.key} {...e} ></Route>)}
                    </Switch>
                </StaticRouter>
            </Provider>
        );

        //错误状态码
        if (context.statusCode) {
            res.status(context.statusCode)
        }
        //重定向
        if (context.action == "REPLACE") {
            res.redirect(301, context.url);
        }
        // 读取css
        const css = context.css.join('\n');
        res.send(`
            <html>
                <head>
                    <meta charset="utf-8" />
                    <title>ssr</title>
                    <style>
                        ${css}
                    </style>
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