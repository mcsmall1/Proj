switch (expression) {
  case expression:

    break;
  default:

}const MongoClient = require('mongodb').MongoClient;
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
      output += "<h3>" +result[i].name+ "</h3>";
      output += "<p>" +result[i].quote+ "</p>";
      output += "<div>";
    }
  res.set('Content-Type', 'text/html');
  res.send(output);
  });
});

app.post('/add', function(req, res) {
  db.collection('quotes').save(req.body, function(err, result) {
  if(err){console.log(err);};
  console.log('saved to database')
  res.redirect('/')
  })
});

app.post('/search', function(req, res) {
  db.collection('quotes').find(req.body).toArray(function(err, result) {
    if(err){console.log(err);};
    console.log(result);
    var output = "<h1>All the quotes</h1>";
    for (var i = 0; i < result.length; i++) {
      output += "<div>"
      output += "<h3>" + result[i].name + "</h3>"
      output += "<p>" + result[i].quote + "</p>"
      output += "</div>"
    }
    res.send(output);
  });
});

app.post('/delete', function(req, res) {
  db.collection('quotes').deleteOne(req.body, function(err, result) {
    if(err){console.log(err);};
    res.redirect('/');
  });
});
