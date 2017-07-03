/**
 * 主要核心代码
 * create 黄楚才 7月3日
 */
const fs = require('fs');
class Server{
  constructor(){
  }
  initServer(){
    // 做相应的事情
    return (request,response)=>{
      fs.readFile('./src/index.html','utf8',(error,data)=>{
        response.end(data);
      })
    }
  }
}

module.exports = {
  Server
}
