// 1.引入 express
const { request, response } = require('express')
const express = require('express')

// 2.创建应用对象
const app = express()

app.all('/jsonp-server',(request,response) => {
    const data = {
        name : 'ich'
    };
    // 将数据转化字符串
    let str = JSON.stringify(data);
    // 返回结果 - 返回一个函数调用，如果html 的 js脚本 没有定义就会报错
    response.end(`handle(${str})`);
})

// 4. 监听端口启动服务
app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中...')
})