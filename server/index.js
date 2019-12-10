import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import App from '../src/App';

const app = express();
//静态资源目录
app.use(express.static('public'))
app.get('/', (req, res) => {
    //解析react虚拟dom为节点字符串
    const content = renderToString(App);
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
app.listen(3000,()=>{
    console.log('启动完成')
})