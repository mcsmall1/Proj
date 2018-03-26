const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/SWQuote";
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

var db;

MongoClient.connect(url, function(err, datb) {
    if(err){console.log(err);};
    db = datb;
    app.listen(8080);
});

app.get('/all', function(req, res) {
  db.collection('quotes').find().toArray(function(err, result){
    if(err){console.log(err);};

    var output = "quotes"

    for (var i = 0; i < result.length; i++) {
      output += "<div>";
      output += "<h3>" +res[i].name+ "</h3>";
      output += "<p>" +res[i].quote+ "</p>";
      output += "<div>";
    }
  console.log(output);
  res.set('Content-Type', 'text/html');
  res.send(output);
  });
});

app.get('/quotes', function(req, res) {

});

//new route
// app.get('', function(req, res) {
//});
