//create express
var express = require('express');
var app = express();

//load req modules
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key:  'dtuCznqFiIlhXBh2acgQhphJn',
  consumer_secret: 'WnPM9eliD4LHsnjTFBHGjE76JqWE5Pmk9i09MKkQ3FQb0bjtS6',
  access_token_key: '1324957310-ijS6E2MdxqaI2653Djueb5qxFpzFOnvMc0oiLgJ',
  access_token_secret: 'O0uCzsmPZ3k5aSo3dwWluv8ilIIstuprzpjdMm9eNJSLe'
});

app.use(express.static('public'))

app.get('/', function(req,res){
  res.redirect('http://small-limbo-8080.codio.io/form.html');
});

app.get('/getuser', function(req, res) {
  //paramater assignment...
  var name = req.query.name;
  var params = {screen_name: name};
  //.. here
  console.log('checkpoint');
  //do something with data (build html response)...
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    var output = "";
    if(error){console.log(error);}
    for (var i = 0; i < tweets.length; i++){
      output += "<div>";
      output += "<h2>" +tweets[i].user.screen_name+ "<h2>";
      output += "<p>" +tweets[i].text+ "<p>";
      output += "</div>"
    }
    if (output == NULL) {
      res.send("User Not Found!")
    } else {
      res.send(output);
    }
  //... here
  });
});

app.listen(8080);
