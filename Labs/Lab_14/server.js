var express = require('express');
var app = express();


app.use(express.static('public'))

app.get('/', function(req, res) {
  var param = {screen_name: 'node.js'};
  client.get('statuses/user_timeline', param, function(error, tweets, response) {
    if(!error){
      //do something with results (tweets)
      console.log(tweets);
    }
  })
  res.send("Hey World, by express");
});

app.listen(8080);
