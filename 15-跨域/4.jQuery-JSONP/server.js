// 1.引入 express
const { request, response } = require('express')
const express = require('express')

// 2.创建应用对象
const app = express()

app.all('/jquery-jsonp-server', (request, response) => {
    // response.send('console.log("hello jsonp")');
    const data = {
        name: 'ich',
        city: ['广东', '广州', '佛山']
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //接收 callback 参数
    let cb = request.query.callback;

    //返回结果
    response.end(`${cb}(${str})`);
});

// 4. 监听端口启动服务
app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中...')
})