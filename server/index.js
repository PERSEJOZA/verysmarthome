var http = require('http');
var auth = require('./auth/token.js');

var hostname = '127.0.0.1';
var port = 3000;

var server = http.createServer(function(req, res) {
  if (req.url==='/login') {
    token = auth.generateJWT('admin', '00000');

    if (token) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(token);

      return;
    } else {
      res.statusCode = 401;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Wrong password or username\n');

      return;
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Wrong URL\n');
  }
});

server.listen(port, hostname, function () {
  console.log("Server running at http://" + hostname + ':' + port);
});