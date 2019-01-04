const http = require('http');
const auth = require('./auth/token.js');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url==='/login') {
    token = auth.generateJWT('admin', '00000')
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(token);

    return;
  }

  if (true) {
    res.statusCode = 401;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Wrong password or username\n');

    return;
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('tada' + req);
    res.end();

    return;
  }
});

server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`)});