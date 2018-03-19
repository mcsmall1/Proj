//create express
var express = require('express');
var app = express();

//load req modules
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key:  'dtuCznqFiIlhXBh2acgQhphJn',
  consumer_secret: 'WnPM9eliD4LHsnjTFBHGjE76JqWE5Pmk9i09MKkQ3FQb0bjtS6',
  access_token_key: '	1324957310-ijS6E2MdxqaI2653Djueb5qxFpzFOnvMc0oiLgJ',
  access_token_secret: 'O0uCzsmPZ3k5aSo3dwWluv8ilIIstuprzpjdMm9eNJSLe'
});

app.use(express.static('public'))

app.get('/', function(req, res) {
  //button assignment (take in parameters)...
  var param = {screen_name: 'nodejs'};
  //... here

  console.log('checkpoint');
  //do something with data (build html response)...
  client.get('statuses/user_timeline', param, function(error, tweets, response) {
    var output = "";
    for (var i  0; t < tweets.length; t++){
      output += "<div>";
      output += "<h2>" +tweets[i].user.screen_name+ "<h2>";
      output += "<p>" +tweets[i].text+ "<p>";
      output += "</div>"
    }
  //... here
  });
  res.send("Hey World, by express");
});

app.listen(8080);
