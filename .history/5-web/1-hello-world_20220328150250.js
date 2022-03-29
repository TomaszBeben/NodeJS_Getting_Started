const http = require('http');

const requestListener = (req, res) => {
  res.end('hello world')
}

const server = http.createServer(requestListener);


// const server = http.createServer((req, res) => {
//   res.end('Hello World\n');
// });

server.listen(4242, () => {
  console.log('Server is running...');
});

