/**
 * description:mock数据，用于提供给ssr
 * author:yunfei
 */
const express = require('express');
const app = express();

app.get('/api/course/list', (req, res) => {
    //支持跨域
    res.header("Access-Control-Allow-Origin", "*");
    //支持方法
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    //请求格式
    res.header("Content-Type", "appliction/json;charet=utf-8")

    res.json([
        { txt: 'Web全栈', id: 1 },
        { txt: 'React', id: 2 },
        { txt: 'Vue', id: 3 },
        { txt: 'Node', id: 4 },
    ])
})
app.listen(9090, () => {
    console.log('mock启动完毕！ ')
})