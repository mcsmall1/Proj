var http = require('http');
var curdate = require('./module1');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("the date today is:" +curdate.DateTime()+ ".");
  res.end('Hello World!');
}).listen(8080);
