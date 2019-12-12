import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from '../src/store/store';
import express from 'express';
import App from '../src/App';

const app = express();
//静态资源目录
app.use(express.static('public'))
//监听所有router--防止404错误
app.get('*', (req, res) => {
    //解析react虚拟dom为节点字符串
    //服务器端路由使用StaticRouter
    const content = renderToString(
        <Provider store={Store}>
            <StaticRouter>
                {App}
            </StaticRouter>
        </Provider>
    );
    res.send(`
        <html>
            <head>
                <meta charset="utf-8" />
                <title>ssr</title>
                <body>
                    <div id='root'>${content}</div>
                    <script src='/bundle.js'></script>
                </body>
            </head>
        </html>
    `)
})
app.listen(3000, () => {
    console.log('启动完成')
})