// 1.引入 express
const { request, response } = require('express')
const express = require('express')

// 2.创建应用对象
const app = express()

app.all('/cors-server', (request, response)=>{
    //设置响应头
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", '*');
    response.setHeader("Access-Control-Allow-Method", '*');

    // 只允许接收这个网页发送请求
    // response.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    response.send('hello CORS');
});

// 4. 监听端口启动服务
app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中...')
})