var express = require('express');
var app = express();

app.get('/', function(req,res){
  res.send("Hello World! by express");
});

app.get('/joke', function(req,res){
  var randomJoke = onelinerJoke.getRandomJoke();
  res.end(randomJoke.body);
});

app.listen(8080);
