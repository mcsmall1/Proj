var http = require('http');
var curdate = require('one-liner-joke');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var randomJoke = onelinerJoke.getRandomJoke();
  res.end(randomJoke.body);
}).listen(8080);
