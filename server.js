// Server Start
const http = require('http');

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;
/*let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}*/

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World! How are you\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});