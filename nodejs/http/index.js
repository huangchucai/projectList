/**
 * 尝试开启静态服务器
 */

const http = require('http');
const PORT = 9000;
const Server = require('./app').Server;
const server = new Server();

http.createServer(server.initServer()).listen(PORT,()=>{
  console.log(`server listening on port ${PORT}`)
});
