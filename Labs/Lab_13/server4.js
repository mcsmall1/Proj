var express = require('express');
var app = express();

app.get('/', function(req,res){
  res.send("Hello World! by express");
});

app.listen(8080);
