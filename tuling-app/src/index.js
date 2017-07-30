let colors = require('./color');
// 导入readline模块
const readline = require('readline');
const http = require('http');

function initChat() {
  let welcomeMsg = '请开始你的表演';
  Array.prototype.forEach.call(welcomeMsg, (item) => {
    colors.colorLog('-----------',item,'-----------');
  })

// const APPKEY = '';
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const APPKEY = '9ec33ae01b9443a794aefb6d5ee4d9e8';
  let name = ''
  const resopnseType = {
    TEXT: 100000,
    LINK: 200000,
    NEWS: 302000
  }

  rl.question('> 阁下尊姓大名: ',(answer) => {
    name = answer;
    colors.colorLog('客官请提问! ');
    // 问答
    chat();
  })

  function chat() {
    rl.question('> 请输入你的问题: ', (query) => {
      if(!query) {
        colors.colorLog(`客官请慢走`);
        process.exit(0); //退出命令行
      }
      // console.log(`${name} is asking ${query}`);
      let req = http.request({
        hostname: 'www.tuling123.com',
        path: '/openapi/api',
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        }
      },(res) => {
        let data = '';
        res.on('data',(chunk) => {
          data += chunk;
        });
        res.on('end',() => {
          // 处理数据
          colors.colorLog(handleResponse(data));
          chat()
        })
      });

      req.write(JSON.stringify({
        key: APPKEY,
        info: query,
        userid: name
      }))
      req.end();
    })
  }

  function handleResponse(data) {
    let res = JSON.parse(data);
    switch(res.code) {
      case resopnseType.TEXT: 
        return res.text;
      case resopnseType.LINK: 
        return `${res.text}: ${res.url}`;
      case resopnseType.NEWS: 
        let listInfo = '';
        (res.list || [] ).forEach((it) => {
          listInfo += `\n文章：${it.article}\n来源：${it.source}\n链接：${it.detailurl}`;
        })    
        return `${res.text}\n${listInfo}`;
      default: 
        return res.text;  
    }
  }
}

module.exports = initChat
