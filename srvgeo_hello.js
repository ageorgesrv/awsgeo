var http = require('http');

var server = http.createServer(function(req, res) {
res.writeHead(200);
res.end('Hi srvgeo this is my fisrt node.js code!');
});
server.listen(8080);