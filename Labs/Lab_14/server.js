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
    if (error != null) {
      console.log("Error:- "+error);
      res.redirect('http://small-limbo-8080.codio.io/error.html')
    } else {
      for (var i = 0; i < tweets.length; i++){
        var output = "";
        output += "<div>";
        output += "<h2>" +tweets[i].user.screen_name+ "<h2>";
        output += "<p>" +tweets[i].text+ "<p>";
        output += "</div>"
      }
    }
    res.set('Content-Type', 'text/html');
    res.send(output);
  //... here
  });
});

app.get('/reset', function(req, res) {
  errorhtml += "<h1>Oops!</h1> <h2>It looks like there was an error, maybe that user is invalid.</h2>"
  errorhtml += "<button type="submit" name="goback" onclick="/reset" value="RESET">go back</button>"
  errorhtml += '<a href="http://small-limbo-8080.codio.io/form.html">go back (link)</a>'
  res.set('Content-Type', 'text/html');
  res.send(errorhtml)
  //res.redirect('http://small-limbo-8080.codio.io/form.html');
})

app.listen(8080);
