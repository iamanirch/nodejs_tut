var http = require('http');

// print Hello World
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080); 

// Print current date and time
exports.myDateTime = function() {
    return Date();
}