const http = require('http');
const devConfig = require('./dev-config');
const axios = require('axios')

const DEV = process.argv.find((arg) => {return arg === '--dev';});
const messages = DEV ? devConfig.messages : process.env; //is this chill?
const bot_id = DEV ? devConfig.bot_id : process.env.bot_id;


port = DEV ? devConfig.port : process.env.PORT;

processRequest = (request)=>{
    const url = `https://api.groupme.com/v3/bots/post`;
    message = messages.helloWorld;
    payload = {
        "bot_id": bot_id,
        "text": message
    }
    axios({
        method: 'post',
        url: url,
        data: payload
    }).then(data => console.log(data)).catch(err => console.log(err));
}
var server = http.createServer((request, response)=>{
    processRequest(request);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end(`${messages.helloWorld}`);
})

console.log(`Starting server on port ${port}`);
server.listen(port);