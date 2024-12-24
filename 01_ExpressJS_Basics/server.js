console.log('Hi! Here is the server.js file.');

// 1. We use the word .require to import something while module.export to export somthing in Common JS
let slugify = require('slugify');

let a = slugify('Hello    World$%!@()^')
console.log(a);


// 2. While we use the words import,export to import and export something respectively in ES6/ESM (module)

// import { createServer } from 'node:http';
// const server = createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello World!\n');
//   });
//   // starts a simple http server locally on port 3000
//   server.listen(3000, '127.0.0.1', () => {
//     console.log('Listening on 127.0.0.1:3000');
//   });
