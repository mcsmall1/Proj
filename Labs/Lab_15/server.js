const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost27017/SWQuotes";
const express = require('express');
const app = express()

app.use(express.static('public'))

var db;

MongoClient.connect(url, function(err, datb) {
    if(err){throw err;console.log(err);};
    db = datb;
    app.listen(8080);
});

app.get('/all', function(req, res) {
  db.collection('quotes').find().toArray(function(err, res){
    if(err){throw err;console.log(err);};
    var output = ""
    for (var i = 0; i < res.length; i++) {
      output += "<div>";
      output += "<h3>" +res[i].name+ "</h3>";
      output += "<p>" +res[i].quote+ "</p>";
      output += "<div>";
    }
    res.send(output)
  });
});
