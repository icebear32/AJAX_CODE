// 1.引入 express
const { request, response } = require('express')
const express = require('express')

// 2.创建应用对象
const app = express()

// 3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')

    // 设置响应体
    response.send('HELLO EXPRESS nodemon')
})

// JOSN 响应
app.all('/json-server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')

    // 因为自定义信息审核不通过，使用设置响应头信息，可以接受任何自定义信息
    response.setHeader('Access-Control-Allow-Headers', '*');

    // 设置响应体
    // response.send('HELLO EXPRESS POST')
    // response.send('HELLO EXPRESS JSON')

    // 响应一个数据时
    const data = {
        name: 'ich'
    };
    // 对数据对象进行字符串转换
    let str = JSON.stringify(data);
    // 设置响应体
    response.send(str);
})

// 4. 监听端口启动服务
app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中...')
})