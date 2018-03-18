var express = require('express');
var onelinerJoke = require('one-liner-joke');
var app = express();

app.use(express.static('public'))

app.get('/getform', function(req, res){
  var name = req.query.name;
  var quest = req.query.quest;
  res.send("Hello " +name+ ". You've said your quest is: " +quest+ ". Good luck with that.");
});

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
