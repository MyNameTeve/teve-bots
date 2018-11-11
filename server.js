const http = require('http');
const devConfig = require('./dev-config');

const DEV = process.argv.find((arg) => {return arg === '--dev';});
const messages = DEV ? devConfig.messages : process.env; //is this chill?


port = DEV ? devConfig.port : process.env.port;
var server = http.createServer((request, response)=>{
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end(`${messages.helloWorld}`)
})

console.log(`Starting server on port ${port}`);
server.listen(port);