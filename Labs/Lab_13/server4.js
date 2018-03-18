var express = require('express');
var onelinerJoke = require('one-liner-joke');
var app = express();

app.get('/', function(req,res){
  res.send("Hello World! by express");
});

app.get('/joke', function(req,res){
  var randomJoke = onelinerJoke.getRandomJoke();
  res.end(randomJoke.body);
});

app.get('/add', function(req, res) {
  var x = req.query.x;
  var y = req.query.y;
  res.send("X+Y="+(x+y));
});
app.listen(8080);
