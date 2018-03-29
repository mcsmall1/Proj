const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/SWQuote";
const express = require('express');
const bodyParser = require('body-parser')
const app = express();


app.use(bodyParser.urlencoded({extended: true}))
// set the view engine to ejs
app.set('view engine', 'ejs');

var db;

MongoClient.connect(url, function(err, database) {
  if(err){console.log(err);};
  db = database;
  app.listen(8080);
  console.log('listening');
});

app.get('/', function(req,res) {
  res.render('pages/index')
});
app.get('/add', function(req,res) {
  res.render('pages/add')
});
app.get('/delete', function(req,res) {
  res.render('pages/delete')
});
app.get('/filter', function(req,res) {
  res.render('pages/filter')
});
app.get('/update', function(req,res) {
  res.render('pages/update')
});

app.get('/allquote', function(req, res) {
  db.collection('quotes').find().toArray(function(err, result) {
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

app.post('/addquote', function (req, res) {
  db.collection('quotes').save(req.body, function(err, result) {
    if(err){console.log(err);};
    console.log('saved to database')
    res.redirect('/')
  })
})

app.post('/searchquotes', function(req, res) {
  db.collection('quotes').find(req.body).toArray(function(err, result) {
    if(err){console.log(err);};

    var output = "<h1>quotes by" +req.body.name+ "</h1>";

    for (var i = 0; i < result.length; i++) {
      output += "<div>"
      output += "<h3>" + result[i].name + "</h3>"
      output += "<p>" + result[i].quote + "</p>"
      output += "</div>"
    }
    res.send(output);
  });
});

app.post('/deletequote', function(req, res) {
  db.collection('quotes').deleteOne(req.body, function(err, result) {
    if (err) throw err;
    res.redirect('/');
  });
});

app.post('/updatequotes', function(req, res) {
  var query = { quote: req.body.quote };
  var newvalues = { $set: {name: req.body.newname, quote: req.body.newquote } };
  db.collection('quotes').updateOne(query,newvalues, function(err, result) {
    if (err) throw err;
    res.redirect('/');
  });
});
