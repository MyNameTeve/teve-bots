To use this locally run `npm run dev`, in prod use `npm run prod`. For local development you will need a `dev-config.js` which reads something like: 

```
const messages = {
    helloWorld: "Hello there!"
    //Add other constants here as appropriate...
}

const port = 8080;

exports.messages = messages;
exports.port = port;
```